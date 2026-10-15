// Node22+ and a Chrome/Chromium binary. No package install, account or personal browser profile.
import http from 'node:http';
import net from 'node:net';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import {spawn} from 'node:child_process';
const root=path.resolve(process.argv[2]||'.');
const tests=path.dirname(new URL(import.meta.url).pathname);
const output=path.resolve(process.env.RESULT_DIR||'.test-output');fs.mkdirSync(output,{recursive:true});
const profile=fs.mkdtempSync(path.join(os.tmpdir(),'svmm-browser-test-'));
const mime={'.html':'text/html; charset=utf-8','.js':'application/javascript; charset=utf-8','.json':'application/json','.webmanifest':'application/manifest+json','.png':'image/png','.md':'text/plain; charset=utf-8'};
const server=http.createServer((req,res)=>{let pathname;try{pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname)}catch{res.writeHead(400).end();return}const file=path.resolve(root,'.'+(pathname==='/'?'/index.html':pathname));if(!file.startsWith(root+path.sep)){res.writeHead(403).end();return}try{const bytes=fs.readFileSync(file);res.writeHead(200,{'Content-Type':mime[path.extname(file)]||'application/octet-stream','Cache-Control':'no-store'}).end(bytes)}catch{res.writeHead(404).end('Not found')}});
await new Promise(r=>server.listen(0,'127.0.0.1',r));
const port=server.address().port;
const probe=net.createServer();await new Promise(r=>probe.listen(0,'127.0.0.1',r));const cdp=probe.address().port;await new Promise(r=>probe.close(r));
const binary=process.env.CHROME_BIN||['/usr/bin/google-chrome','/usr/bin/chromium','/usr/bin/chromium-browser'].find(p=>fs.existsSync(p));
if(!binary){server.close();fs.rmSync(profile,{recursive:true,force:true,maxRetries:10,retryDelay:200});throw Error('Set CHROME_BIN to your Chrome or Chromium executable.')}
let log='',launchError;const chrome=spawn(binary,['--headless=new','--no-sandbox','--disable-dev-shm-usage',`--remote-debugging-port=${cdp}`,`--user-data-dir=${profile}`,'about:blank'],{stdio:['ignore','ignore','pipe'],detached:process.platform!=='win32'});chrome.stderr.on('data',b=>log=(log+b).slice(-5000));chrome.on('error',e=>launchError=e);
try{
 let ready=false;for(let i=0;i<100;i++){if(launchError)throw launchError;try{let r=await fetch(`http://localhost:${cdp}/json`);if(r.ok){ready=true;break}}catch{}await new Promise(r=>setTimeout(r,100))}if(!ready)throw Error('Chrome debugger did not become ready. '+log);
 const env={...process.env,CDP_PORT:String(cdp),LIVE:process.env.LIVE||`http://127.0.0.1:${port}/learn.html`,RESULT_DIR:output};
 for(const file of ['browser-core.cjs','browser-activities.cjs','browser-foundations.cjs','browser-rounds.cjs','browser-mock.cjs','browser-mock-extra.cjs','browser-print.cjs','browser-algebra.cjs','browser-primary.cjs','browser-proof.cjs','browser-lines.cjs','browser-distance.cjs','browser-accessibility.cjs','browser-numbers.cjs','browser-linear-pairs.cjs','browser-prime.cjs','browser-common-ground.cjs','browser-decimal.cjs','browser-subtraction.cjs','browser-expression.cjs','browser-large-numbers.cjs','browser-rounding.cjs','browser-integer-product.cjs','browser-integer-division.cjs','browser-offline.cjs'])await new Promise((resolve,reject)=>{const child=spawn(process.execPath,[path.join(tests,file)],{env,stdio:'inherit'});child.on('error',reject);child.on('exit',code=>code===0?resolve():reject(Error(`${file} failed (${code})`)))});
 console.log('PASS: browser, activity, full-round and offline checks. Results and screenshots: '+output);
}finally{if(chrome.pid&&chrome.exitCode===null){if(process.platform==='win32')chrome.kill('SIGTERM');else try{process.kill(-chrome.pid,'SIGTERM')}catch(e){if(e.code!=='ESRCH')throw e}};await new Promise(r=>chrome.exitCode!==null?r():chrome.once('exit',r));await new Promise(r=>server.close(r));fs.rmSync(profile,{recursive:true,force:true,maxRetries:10,retryDelay:200})}

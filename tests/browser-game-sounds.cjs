(async()=>{
const fs=require('fs'),tabs=await(await fetch(`http://localhost:${process.env.CDP_PORT||9393}/json`)).json(),w=new WebSocket(tabs.find(x=>x.type==='page').webSocketDebuggerUrl);
await new Promise(r=>w.onopen=r);
let id=0,p={},errors=[];
w.onmessage=e=>{let d=JSON.parse(e.data);if(d.method==='Runtime.exceptionThrown')errors.push(d.params);if(p[d.id]){p[d.id](d);delete p[d.id]}};
const send=(method,params={})=>new Promise(r=>{p[++id]=r;w.send(JSON.stringify({id,method,params}))});
const ev=async expression=>{const x=(await send('Runtime.evaluate',{expression,returnByValue:true,awaitPromise:true})).result;if(x.exceptionDetails)throw Error(JSON.stringify(x.exceptionDetails));return x.result.value};
let checks=0;const check=(x,label)=>{if(!x)throw Error(label);checks++};
await send('Runtime.enable');
const url=(process.env.LIVE||'http://localhost:8197/learn.html').replace(/learn\.html.*$/,'index.html');
for(const width of [320,390])for(const lang of ['en','te']){
 await send('Emulation.setDeviceMetricsOverride',{width,height:844,deviceScaleFactor:1,mobile:width<500});
 await send('Page.navigate',{url});
 for(let i=0;i<50;i++){if(await ev(`typeof sfx==='function'`).catch(()=>false))break;await new Promise(r=>setTimeout(r,100))}
 await ev(`localStorage.removeItem('svmm.snd')`);
 check(await ev(`typeof sfx==='function'&&typeof bgm==='function'&&typeof sndMuted==='boolean'`),'sound module present');
 check(await ev(`!!$('#sndbtn')&&$('#sndbtn').getAttribute('aria-label').length>5`),'toggle present labelled');
 check(await ev(`localStorage.getItem('svmm.snd')===null`),'no sound key before toggle');
 await ev(`$('#sndbtn').click()`);
 check(await ev(`sndMuted===true&&localStorage.getItem('svmm.snd')==='off'&&$('#sndbtn').textContent==='🔇'`),'mute persists');
 await ev(`$('#sndbtn').click()`);
 check(await ev(`sndMuted===false&&localStorage.getItem('svmm.snd')==='on'&&$('#sndbtn').textContent==='🔊'`),'unmute persists');
 await ev(`localStorage.setItem('svmm.lang','${lang}')`);
 await ev(`document.querySelector('[data-mode=pairs]').click()`);
 await ev(`$('#start').click()`);
 check(await ev(`screen==='play'&&g&&g.cards.length===8`),'pairs round started');
 check(await ev(`actx!==null&&typeof actx.state==='string'`),'audio context running after gesture');
 check(await ev(`musT!==null`),'background music timer running in play');
 const tiles=await ev(`[...document.querySelectorAll('[data-tile]')].map(b=>b.dataset.tile)`);
 await ev(`document.querySelector('[data-tile="${tiles[0]}"]').click()`);
 check(await ev(`g.open.length===1`),'first card flipped');
 const before=await ev(`g.moves`);
 await ev(`document.querySelector('[data-tile="${tiles[1]}"]').click()`);
 check(await ev(`g.moves===${before+1}`),'pair attempt counted');
 await ev(`$('#sndbtn').click()`);
 check(await ev(`sndMuted===true&&musT===null`),'mute stops music mid-play');
 await ev(`$('#sndbtn').click()`);
 check(await ev(`sndMuted===false&&musT!==null`),'unmute resumes music in play');
 await ev(`localStorage.setItem('svmm.v1','KEEP ORIGINAL SCORES')`);
 await send('Page.navigate',{url});
 for(let i=0;i<50;i++){if(await ev(`typeof sfx==='function'`).catch(()=>false))break;await new Promise(r=>setTimeout(r,100))}
 check(await ev(`localStorage.getItem('svmm.v1')==='KEEP ORIGINAL SCORES'`),'game save untouched by sound feature');
 check(await ev(`localStorage.getItem('svmm.snd')==='on'`),'sound pref survives reload');
 await ev(`$('#sndbtn').click();$('#sndbtn').click()`);
 check(await ev('document.documentElement.scrollWidth<=innerWidth'),'reflow');
 if(width===320&&lang==='te'){
  await ev(`document.querySelector('[data-mode=seq]').click()`);
  let s=await send('Page.captureScreenshot',{format:'png'});fs.writeFileSync(process.env.RESULT_DIR+'/game-sounds-setup-te.png',Buffer.from(s.result.data,'base64'));
  await ev(`$('#start').click()`);s=await send('Page.captureScreenshot',{format:'png'});fs.writeFileSync(process.env.RESULT_DIR+'/game-sounds-play-te.png',Buffer.from(s.result.data,'base64'));
 }
}
check(errors.length===0,'exceptions');
fs.writeFileSync(process.env.RESULT_DIR+'/game-sounds-results.json',JSON.stringify({checks,errors},null,2));
console.log({gameSoundChecks:checks,errors});w.close()
})().catch(e=>{console.error(e);process.exit(1)});

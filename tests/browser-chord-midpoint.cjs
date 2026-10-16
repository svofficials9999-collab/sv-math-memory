(async()=>{
const fs=require('fs'),tabs=await(await fetch(`http://localhost:${process.env.CDP_PORT||9393}/json`)).json(),w=new WebSocket(tabs.find(x=>x.type==='page').webSocketDebuggerUrl);
await new Promise(r=>w.onopen=r);
let id=0,p={},errors=[];
w.onmessage=e=>{let d=JSON.parse(e.data);if(d.method==='Runtime.exceptionThrown')errors.push(d.params);if(p[d.id]){p[d.id](d);delete p[d.id]}};
const send=(method,params={})=>new Promise(r=>{p[++id]=r;w.send(JSON.stringify({id,method,params}))});
const ev=async expression=>{const x=(await send('Runtime.evaluate',{expression,returnByValue:true,awaitPromise:true})).result;if(x.exceptionDetails)throw Error(JSON.stringify(x.exceptionDetails));return x.result.value};
let checks=0;const check=(x,label)=>{if(!x)throw Error(label);checks++};
await send('Runtime.enable');
for(const width of [320,375,390,430,1280])for(const lang of ['en','te']){
 await send('Emulation.setDeviceMetricsOverride',{width,height:844,deviceScaleFactor:1,mobile:width<500});
 await ev(`state.lang='${lang}';chosenClass=9;lessonDetail('circles');window.cmState=JSON.stringify(state);window.cmStore=JSON.stringify({...localStorage})`);
 for(let r=1;r<=10;r++)for(let h=0;h<=r;h++){
  const kind=h===0?'point':h===r?'diameter':'chord',square=r*r-h*h;
  await ev(`$('#cm-radius').value=${r};$('#cm-radius').oninput();$('#cm-half').value=${h};$('#cm-half').oninput()`);
  check(await ev(`(()=>{const m=chordMidpointModel(${r},${h});return m.square===${square}&&Math.abs(m.om-Math.sqrt(${square}))<1e-9&&m.length===${2*h}&&m.kind===${JSON.stringify(kind)}})()`),'model values');
  const domCheck=kind==='point'?`svg.innerHTML.includes('A = B = M')&&$('#cm-lengths').textContent===''`:kind==='diameter'?`!svg.innerHTML.includes('>OM<')&&$('#cm-lengths').textContent===''`:`svg.innerHTML.includes('>M<')&&svg.innerHTML.includes('>OM<')&&svg.innerHTML.includes('dasharray')&&$('#cm-lengths').textContent.includes(${JSON.stringify('OM² = r² − h²')})`;
  check(await ev(`(()=>{const svg=$('#cm-diagram');if($('#cm-case').textContent.length<10||(svg.getAttribute('aria-label')||'').length<10)return false;if($('#cm-self-check').hidden!==(${kind!=='chord'}))return false;return ${domCheck}})()`),'midpoint diagram');
  check(await ev('document.documentElement.scrollWidth<=innerWidth'),'reflow');
 }
 await ev(`$('#cm-radius').value=10;$('#cm-radius').oninput();$('#cm-half').value=10;$('#cm-half').oninput();$('#cm-radius').value=2;$('#cm-radius').oninput()`);
 check(await ev(`+$('#cm-half').value<=2&&+$('#cm-half').max===2`),'half never beyond radius');
 await ev(`$('#cm-radius').value=5;$('#cm-radius').oninput();$('#cm-half').value=3;$('#cm-half').oninput()`);
 for(const [guess,start]of [['',lang==='en'?'Choose':'ముందు'],['looks',lang==='en'?'Try again':'మళ్లీ'],['sas',lang==='en'?'Correct':'సరైనది'],['diameter',lang==='en'?'Try again':'మళ్లీ']]){
  await ev(`$('#cm-reason').value=${JSON.stringify(guess)};$('#cm-reason-check').click()`);
  check(await ev(`$('#cm-feedback').textContent.startsWith(${JSON.stringify(start)})`),'reason check feedback');
 }
 check(await ev(`($('#cm-proof').open=true,$('#cm-proof-text').textContent.includes('AM = MB')&&$('#cm-proof-text').textContent.includes(${JSON.stringify(lang==='en'?'Theorem 4':'సిద్ధాంతం 4')}))`),'proof theorems');
 check(await ev(`JSON.stringify(state)===window.cmState&&JSON.stringify({...localStorage})===window.cmStore`),'no earned data');
 check(await ev(`[...$('#chord-midpoint-lab').querySelectorAll('input,select,button,svg')].every(e=>e.getAttribute('aria-label')||e.labels?.length||e.textContent.trim())`),'labels');
 if(width===320&&lang==='te'){
  await ev(`$('#cm-radius').value=10;$('#cm-radius').oninput();$('#cm-half').value=6;$('#cm-half').oninput();$('#cm-diagram').scrollIntoView()`);
  let s=await send('Page.captureScreenshot',{format:'png'});fs.writeFileSync(process.env.RESULT_DIR+'/chord-midpoint-diagram-te.png',Buffer.from(s.result.data,'base64'));
  await ev(`$('#cm-proof').open=true;$('#cm-proof').scrollIntoView()`);s=await send('Page.captureScreenshot',{format:'png'});fs.writeFileSync(process.env.RESULT_DIR+'/chord-midpoint-proof-te.png',Buffer.from(s.result.data,'base64'));
  await ev(`$('#cm-reason').value='sas';$('#cm-reason-check').click();$('#cm-feedback').scrollIntoView()`);s=await send('Page.captureScreenshot',{format:'png'});fs.writeFileSync(process.env.RESULT_DIR+'/chord-midpoint-feedback-te.png',Buffer.from(s.result.data,'base64'));
 }
}
for(const args of ['0,0','11,1','5,6','1.5,1','NaN,1','5,-1'])check(await ev(`chordMidpointModel(${args})===null`),'invalid model');
await ev(`chosenClass=8;lessonDetail('circles')`);check(await ev(`!$('#chord-midpoint-lab')`),'younger class guard');
check(errors.length===0,'exceptions');
fs.writeFileSync(process.env.RESULT_DIR+'/chord-midpoint-results.json',JSON.stringify({checks,modelCases:65,errors},null,2));
console.log({chordMidpointChecks:checks,modelCases:65,errors});w.close()
})().catch(e=>{console.error(e);process.exit(1)});

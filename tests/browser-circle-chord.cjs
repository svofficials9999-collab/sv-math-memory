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
 await ev(`state.lang='${lang}';chosenClass=9;lessonDetail('circles');window.chordState=JSON.stringify(state);window.chordStore=JSON.stringify({...localStorage})`);
 for(let r=1;r<=10;r++)for(let d=0;d<=r;d++){
  const kind=d===r?'point':d===0?'diameter':'chord',square=r*r-d*d;
  await ev(`$('#chord-radius').value=${r};$('#chord-radius').oninput();$('#chord-distance').value=${d};$('#chord-distance').oninput()`);
  check(await ev(`(()=>{const m=circleChordModel(${r},${d});return m.square===${square}&&Math.abs(m.half-Math.sqrt(${square}))<1e-9&&Math.abs(m.length-2*Math.sqrt(${square}))<1e-9&&m.kind===${JSON.stringify(kind)}})()`),'model values');
  const domCheck=kind==='point'?`svg.innerHTML.includes('A = B')&&$('#chord-lengths').textContent===''`:kind==='diameter'?`!svg.innerHTML.includes('dasharray')&&$('#chord-lengths').textContent.includes(${JSON.stringify(`AM² = r² − d² = ${r*r} − 0 = ${r*r}`)})`:`svg.innerHTML.includes('dasharray')&&svg.innerHTML.includes('>M<')&&$('#chord-lengths').textContent.includes(${JSON.stringify(`AM² = r² − d² = ${r*r} − ${d*d} = ${square}`)})`;
  check(await ev(`(()=>{const svg=$('#chord-diagram');if($('#chord-case').textContent.length<10||(svg.getAttribute('aria-label')||'').length<10)return false;if($('#chord-self-check').hidden!==(${kind==='point'}))return false;return ${domCheck}})()`),'chord diagram');
  check(await ev('document.documentElement.scrollWidth<=innerWidth'),'reflow');
 }
 await ev(`$('#chord-radius').value=10;$('#chord-radius').oninput();$('#chord-distance').value=10;$('#chord-distance').oninput();$('#chord-radius').value=2;$('#chord-radius').oninput()`);
 check(await ev(`+$('#chord-distance').value<=2&&+$('#chord-distance').max===2`),'distance never beyond radius');
 await ev(`$('#chord-radius').value=5;$('#chord-radius').oninput();$('#chord-distance').value=3;$('#chord-distance').oninput()`);
 for(const [guess,start]of [['',lang==='en'?'Enter':'ఋణం'],['x',lang==='en'?'Enter':'ఋణం'],['16',lang==='en'?'Correct':'సరైనది'],['15',lang==='en'?'Try again':'మళ్లీ'],['౧౬',lang==='en'?'Correct':'సరైనది']]){
  await ev(`$('#chord-guess').value=${JSON.stringify(guess)};$('#chord-check').click()`);
  check(await ev(`$('#chord-feedback').textContent.startsWith(${JSON.stringify(start)})`),'square check feedback');
 }
 check(await ev(`($('#chord-proof').open=true,$('#chord-proof-text').textContent.includes('AM = MB'))`),'proof halves equal');
 check(await ev(`JSON.stringify(state)===window.chordState&&JSON.stringify({...localStorage})===window.chordStore`),'no earned data');
 check(await ev(`[...$('#circle-chord-lab').querySelectorAll('input,select,button,svg')].every(e=>e.getAttribute('aria-label')||e.labels?.length||e.textContent.trim())`),'labels');
 if(width===320&&lang==='te'){
  await ev(`$('#chord-radius').value=10;$('#chord-radius').oninput();$('#chord-distance').value=6;$('#chord-distance').oninput();$('#chord-diagram').scrollIntoView()`);
  let s=await send('Page.captureScreenshot',{format:'png'});fs.writeFileSync(process.env.RESULT_DIR+'/circle-chord-diagram-te.png',Buffer.from(s.result.data,'base64'));
  await ev(`$('#chord-proof').open=true;$('#chord-proof').scrollIntoView()`);s=await send('Page.captureScreenshot',{format:'png'});fs.writeFileSync(process.env.RESULT_DIR+'/circle-chord-proof-te.png',Buffer.from(s.result.data,'base64'));
  await ev(`$('#chord-guess').value='64';$('#chord-check').click();$('#chord-feedback').scrollIntoView()`);s=await send('Page.captureScreenshot',{format:'png'});fs.writeFileSync(process.env.RESULT_DIR+'/circle-chord-feedback-te.png',Buffer.from(s.result.data,'base64'));
 }
}
for(const args of ['0,0','11,1','5,6','1.5,1','NaN,1','5,-1'])check(await ev(`circleChordModel(${args})===null`),'invalid model');
await ev(`chosenClass=8;lessonDetail('circles')`);check(await ev(`!$('#circle-chord-lab')`),'younger class guard');
check(errors.length===0,'exceptions');
fs.writeFileSync(process.env.RESULT_DIR+'/circle-chord-results.json',JSON.stringify({checks,modelCases:65,errors},null,2));
console.log({circleChordChecks:checks,modelCases:65,errors});w.close()
})().catch(e=>{console.error(e);process.exit(1)});

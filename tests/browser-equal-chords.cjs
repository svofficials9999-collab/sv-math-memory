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
 await ev(`state.lang='${lang}';chosenClass=9;lessonDetail('circles');window.eqState=JSON.stringify(state);window.eqStore=JSON.stringify({...localStorage})`);
 for(let r=1;r<=10;r++){
  const pairs=[[0,r],[r,0]];for(let d=0;d<=r;d++)pairs.push([d,d]);
  for(const [d1,d2] of pairs){
   const s1=r*r-d1*d1,s2=r*r-d2*d2,longer=s1>s2?'first':s2>s1?'second':'equal';
   await ev(`$('#echord-radius').value=${r};$('#echord-radius').oninput();$('#echord-d1').value=${d1};$('#echord-d1').oninput();$('#echord-d2').value=${d2};$('#echord-d2').oninput()`);
   check(await ev(`(()=>{const m=circleEqualChordsModel(${r},${d1},${d2});return m.s1===${s1}&&m.s2===${s2}&&m.longer===${JSON.stringify(longer)}&&m.m1.square===${s1}&&m.m2.square===${s2}})()`),'model values');
   const dashes=(d1>0&&d1<r?1:0)+(d2>0&&d2<r?1:0);
   const lab=(d1<r?(d2<r?'ABPQ':'AB'):(d2<r?'PQ':''));
   const caseCheck=d1===d2?`c.includes('AB = PQ')`:d1<d2?(lang==='en'?`c.includes('AB is longer')`:`c.includes('AB పొడవైనది')`):(lang==='en'?`c.includes('PQ is longer')`:`c.includes('PQ పొడవైనది')`);
   const lenStr=`AB²/4 = r² − d₁² = ${r*r} − ${d1*d1} = ${s1}; AB ≈ ${(2*Math.sqrt(s1)).toFixed(3)}`;
   check(await ev(`(()=>{const svg=$('#echord-diagram'),c=$('#echord-case').textContent,l=$('#echord-lengths').textContent;if(c.length<10||(svg.getAttribute('aria-label')||'').length<10)return false;if((svg.innerHTML.match(/dasharray/g)||[]).length!==${dashes})return false;if(!l.includes(${JSON.stringify(lenStr)}))return false;for(const x of ${JSON.stringify(lab.split(''))})if(!svg.innerHTML.includes('>'+x+'<'))return false;if(${d1===r}&&!svg.innerHTML.includes('A = B'))return false;if(${d2===r}&&!svg.innerHTML.includes('P = Q'))return false;return ${caseCheck}})()`),'pair diagram');
   check(await ev('document.documentElement.scrollWidth<=innerWidth'),'reflow');
  }
 }
 await ev(`$('#echord-radius').value=10;$('#echord-radius').oninput();$('#echord-d1').value=10;$('#echord-d1').oninput();$('#echord-d2').value=10;$('#echord-d2').oninput();$('#echord-radius').value=2;$('#echord-radius').oninput()`);
 check(await ev(`+$('#echord-d1').value<=2&&+$('#echord-d1').max===2&&+$('#echord-d2').value<=2&&+$('#echord-d2').max===2`),'both distances never beyond radius');
 await ev(`$('#echord-radius').value=6;$('#echord-radius').oninput();$('#echord-d1').value=2;$('#echord-d1').oninput();$('#echord-d2').value=4;$('#echord-d2').oninput()`);
 for(const [btn,start]of [['#echord-pick-ab',lang==='en'?'Correct':'సరైనది'],['#echord-pick-pq',lang==='en'?'Try again':'మళ్లీ'],['#echord-pick-eq',lang==='en'?'Try again':'మళ్లీ']]){
  await ev(`${JSON.stringify(btn)}&&$(${JSON.stringify(btn)}).click()`);
  check(await ev(`$('#echord-feedback').textContent.startsWith(${JSON.stringify(start)})`),'comparison feedback');
 }
 await ev(`$('#echord-d2').value=2;$('#echord-d2').oninput();$('#echord-pick-eq').click()`);
 check(await ev(`$('#echord-feedback').textContent.startsWith(${JSON.stringify(lang==='en'?'Correct':'సరైనది')})`),'equal case feedback');
 check(await ev(`($('#echord-proof').open=true,$('#echord-proof-text').textContent.includes('r² − d²'))`),'proof equation');
 check(await ev(`JSON.stringify(state)===window.eqState&&JSON.stringify({...localStorage})===window.eqStore`),'no earned data');
 check(await ev(`[...$('#circle-equal-chords-lab').querySelectorAll('input,select,button,svg')].every(e=>e.getAttribute('aria-label')||e.labels?.length||e.textContent.trim())`),'labels');
 if(width===320&&lang==='te'){
  await ev(`$('#echord-radius').value=10;$('#echord-radius').oninput();$('#echord-d1').value=2;$('#echord-d1').oninput();$('#echord-d2').value=6;$('#echord-d2').oninput();$('#echord-diagram').scrollIntoView()`);
  let s=await send('Page.captureScreenshot',{format:'png'});fs.writeFileSync(process.env.RESULT_DIR+'/equal-chords-diagram-te.png',Buffer.from(s.result.data,'base64'));
  await ev(`$('#echord-proof').open=true;$('#echord-proof').scrollIntoView()`);s=await send('Page.captureScreenshot',{format:'png'});fs.writeFileSync(process.env.RESULT_DIR+'/equal-chords-proof-te.png',Buffer.from(s.result.data,'base64'));
  await ev(`$('#echord-pick-ab').click();$('#echord-feedback').scrollIntoView()`);s=await send('Page.captureScreenshot',{format:'png'});fs.writeFileSync(process.env.RESULT_DIR+'/equal-chords-feedback-te.png',Buffer.from(s.result.data,'base64'));
 }
}
for(const args of ['0,0,0','11,1,1','5,6,1','5,1,6','1.5,1,1','NaN,1,1','5,-1,1'])check(await ev(`circleEqualChordsModel(${args})===null`),'invalid model');
await ev(`chosenClass=8;lessonDetail('circles')`);check(await ev(`!$('#circle-equal-chords-lab')`),'younger class guard');
check(errors.length===0,'exceptions');
fs.writeFileSync(process.env.RESULT_DIR+'/equal-chords-results.json',JSON.stringify({checks,modelCases:85,errors},null,2));
console.log({equalChordChecks:checks,modelCases:85,errors});w.close()
})().catch(e=>{console.error(e);process.exit(1)});

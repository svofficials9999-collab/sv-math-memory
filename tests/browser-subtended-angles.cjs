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
 await ev(`state.lang='${lang}';chosenClass=9;lessonDetail('circles');window.saState=JSON.stringify(state);window.saStore=JSON.stringify({...localStorage})`);
 for(let r=1;r<=10;r++){
  const pairs=[[0,r],[r,0]];for(let d=0;d<=r;d++)pairs.push([d,d]);
  for(const [d1,d2] of pairs){
   const s1=r*r-d1*d1,s2=r*r-d2*d2,larger=s1>s2?'first':s2>s1?'second':'equal';
   const deg1=(2*Math.atan2(Math.sqrt(s1),d1)*180/Math.PI).toFixed(1),deg2=(2*Math.atan2(Math.sqrt(s2),d2)*180/Math.PI).toFixed(1);
   await ev(`$('#sangle-radius').value=${r};$('#sangle-radius').oninput();$('#sangle-d1').value=${d1};$('#sangle-d1').oninput();$('#sangle-d2').value=${d2};$('#sangle-d2').oninput()`);
   check(await ev(`(()=>{const m=circleSubtendedModel(${r},${d1},${d2});return m.s1===${s1}&&m.s2===${s2}&&m.larger===${JSON.stringify(larger)}&&Math.abs(m.deg1-${deg1})<0.05&&Math.abs(m.deg2-${deg2})<0.05})()`),'model values');
   const dashes=(d1>0&&d1<r?1:0)+(d2>0&&d2<r?1:0),arcs=(d1<r?1:0)+(d2<r?1:0);
   const caseCheck=d1===d2?`c.includes('∠AOB = ∠COD')`:d1<d2?(lang==='en'?`c.includes('∠AOB > ∠COD')`:`c.includes('∠AOB > ∠COD')`):(lang==='en'?`c.includes('∠COD > ∠AOB')`:`c.includes('∠COD > ∠AOB')`);
   const angleLine=`∠AOB ≈ ${deg1}°; ∠COD ≈ ${deg2}°.`;
   check(await ev(`(()=>{const svg=$('#sangle-diagram'),c=$('#sangle-case').textContent,a=$('#sangle-angles').textContent;if(c.length<10||(svg.getAttribute('aria-label')||'').length<10)return false;if((svg.innerHTML.match(/dasharray/g)||[]).length!==${dashes})return false;if((svg.innerHTML.match(/A34 34|A 34 34/g)||[]).length!==${arcs})return false;if(a!==${JSON.stringify(angleLine)})return false;for(const x of ['A','B','C','D','O'])if(!svg.innerHTML.includes('>'+x+'<')&&!svg.innerHTML.includes('>A = B')&&!svg.innerHTML.includes('>C = D'))return false;return ${caseCheck}})()`),'angle diagram');
   check(await ev('document.documentElement.scrollWidth<=innerWidth'),'reflow');
  }
 }
 await ev(`$('#sangle-radius').value=10;$('#sangle-radius').oninput();$('#sangle-d1').value=10;$('#sangle-d1').oninput();$('#sangle-d2').value=10;$('#sangle-d2').oninput();$('#sangle-radius').value=2;$('#sangle-radius').oninput()`);
 check(await ev(`+$('#sangle-d1').value<=2&&+$('#sangle-d1').max===2&&+$('#sangle-d2').value<=2&&+$('#sangle-d2').max===2`),'both distances never beyond radius');
 await ev(`$('#sangle-radius').value=6;$('#sangle-radius').oninput();$('#sangle-d1').value=2;$('#sangle-d1').oninput();$('#sangle-d2').value=5;$('#sangle-d2').oninput()`);
 for(const [btn,start]of [['#sangle-pick-ab',lang==='en'?'Correct':'సరైనది'],['#sangle-pick-cd',lang==='en'?'Try again':'మళ్లీ'],['#sangle-pick-eq',lang==='en'?'Try again':'మళ్లీ']]){
  await ev(`$(${JSON.stringify(btn)}).click()`);
  check(await ev(`$('#sangle-feedback').textContent.startsWith(${JSON.stringify(start)})`),'angle comparison feedback');
 }
 await ev(`$('#sangle-d2').value=2;$('#sangle-d2').oninput();$('#sangle-pick-eq').click()`);
 check(await ev(`$('#sangle-feedback').textContent.startsWith(${JSON.stringify(lang==='en'?'Correct':'సరైనది')})`),'equal angles feedback');
 check(await ev(`($('#sangle-proof').open=true,$('#sangle-proof-text').textContent.includes('SSS')&&$('#sangle-proof-text').textContent.includes('SAS'))`),'proof congruence');
 check(await ev(`JSON.stringify(state)===window.saState&&JSON.stringify({...localStorage})===window.saStore`),'no earned data');
 check(await ev(`[...$('#circle-subtended-lab').querySelectorAll('input,select,button,svg')].every(e=>e.getAttribute('aria-label')||e.labels?.length||e.textContent.trim())`),'labels');
 if(width===320&&lang==='te'){
  await ev(`$('#sangle-radius').value=10;$('#sangle-radius').oninput();$('#sangle-d1').value=2;$('#sangle-d1').oninput();$('#sangle-d2').value=6;$('#sangle-d2').oninput();$('#sangle-diagram').scrollIntoView()`);
  let s=await send('Page.captureScreenshot',{format:'png'});fs.writeFileSync(process.env.RESULT_DIR+'/subtended-diagram-te.png',Buffer.from(s.result.data,'base64'));
  await ev(`$('#sangle-proof').open=true;$('#sangle-proof').scrollIntoView()`);s=await send('Page.captureScreenshot',{format:'png'});fs.writeFileSync(process.env.RESULT_DIR+'/subtended-proof-te.png',Buffer.from(s.result.data,'base64'));
  await ev(`$('#sangle-pick-ab').click();$('#sangle-feedback').scrollIntoView()`);s=await send('Page.captureScreenshot',{format:'png'});fs.writeFileSync(process.env.RESULT_DIR+'/subtended-feedback-te.png',Buffer.from(s.result.data,'base64'));
 }
}
for(const args of ['0,0,0','11,1,1','5,6,1','5,1,6','1.5,1,1','NaN,1,1','5,-1,1'])check(await ev(`circleSubtendedModel(${args})===null`),'invalid model');
await ev(`chosenClass=8;lessonDetail('circles')`);check(await ev(`!$('#circle-subtended-lab')`),'younger class guard');
check(errors.length===0,'exceptions');
fs.writeFileSync(process.env.RESULT_DIR+'/subtended-angles-results.json',JSON.stringify({checks,modelCases:85,errors},null,2));
console.log({subtendedAngleChecks:checks,modelCases:85,errors});w.close()
})().catch(e=>{console.error(e);process.exit(1)});

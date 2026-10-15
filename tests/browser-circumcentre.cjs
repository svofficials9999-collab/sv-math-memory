(async()=>{
const fs=require('fs'),tabs=await(await fetch(`http://localhost:${process.env.CDP_PORT||9393}/json`)).json(),w=new WebSocket(tabs.find(x=>x.type==='page').webSocketDebuggerUrl);
await new Promise(r=>w.onopen=r);
let id=0,p={},errors=[];
w.onmessage=e=>{let d=JSON.parse(e.data);if(d.method==='Runtime.exceptionThrown')errors.push(d.params);if(p[d.id]){p[d.id](d);delete p[d.id]}};
const send=(method,params={})=>new Promise(r=>{p[++id]=r;w.send(JSON.stringify({id,method,params}))});
const ev=async expression=>{const x=(await send('Runtime.evaluate',{expression,returnByValue:true,awaitPromise:true})).result;if(x.exceptionDetails)throw Error(JSON.stringify(x.exceptionDetails));return x.result.value};
let checks=0;const check=(x,label)=>{if(!x)throw Error(label);checks++};
const expect=(ang,side)=>{const c=6,A={x:0,y:0},B={x:c,y:0},rad=ang*Math.PI/180,C={x:side*Math.cos(rad),y:side*Math.sin(rad)};
 const a2=(B.x-C.x)**2+(B.y-C.y)**2,b2=side*side,c2=c*c,area=Math.abs(c*C.y)/2;
 const mx=C.x/2,my=C.y/2,O={x:c/2,y:my+C.x*(mx-c/2)/C.y};
 const Rf=Math.sqrt(a2*b2*c2)/(4*area);
 const max2=Math.max(a2,b2,c2),rest=a2+b2+c2-max2;
 const kind=max2<rest-1e-7?'acute':max2>rest+1e-7?'obtuse':'right';
 const S=(p,q,r)=>(q.x-p.x)*(r.y-p.y)-(q.y-p.y)*(r.x-p.x);
 const d1=S(A,B,O),d2=S(B,C,O),d3=S(C,A,O);
 const inside=(d1>=-1e-9&&d2>=-1e-9&&d3>=-1e-9)||(d1<=1e-9&&d2<=1e-9&&d3<=1e-9);
 const dist=(p,q,r)=>Math.abs(S(p,q,r))/Math.hypot(q.x-p.x,q.y-p.y);
 const onEdge=inside&&[dist(A,B,O),dist(B,C,O),dist(C,A,O)].some(d=>d<1e-6);
 const position=!inside?'obtuse':onEdge?'right':'acute';
 const sides=[[a2,B,C],[b2,C,A],[c2,A,B]];const hs=sides.find(s=>s[0]===max2);
 const hmid={x:(hs[1].x+hs[2].x)/2,y:(hs[1].y+hs[2].y)/2};
 return{A,B,C,O,Rf,kind,position,hmid,area};};
await send('Runtime.enable');
for(const width of [320,375,390,430,1280])for(const lang of ['en','te']){
 await send('Emulation.setDeviceMetricsOverride',{width,height:844,deviceScaleFactor:1,mobile:width<500});
 await ev(`state.lang='${lang}';chosenClass=9;lessonDetail('circles');window.ccState=JSON.stringify(state);window.ccStore=JSON.stringify({...localStorage})`);
 for(const ang of [15,30,45,60,75,90,105,120,135,150,165])for(const side of [2,4,6,8,10,12]){
  const exp=expect(ang,side);
  await ev(`$('#circum-angle').value=${ang};$('#circum-angle').oninput();$('#circum-side').value=${side};$('#circum-side').oninput()`);
  const act=await ev(`(()=>{const m=circumcentreModel(${ang},${side});return{kind:m.kind,R:m.R,Ox:m.O.x,Oy:m.O.y,caseText:$('#circum-case').textContent,svg:$('#circum-diagram').innerHTML,aria:$('#circum-diagram').getAttribute('aria-label')||''}})()`);
  check(act.kind===exp.kind,'kind classification');
  check(act.kind===exp.position,'position matches angle classification');
  check(Math.abs(act.R-exp.Rf)<1e-8*exp.Rf+1e-12,'R matches abc/4K');
  check(Math.hypot(act.Ox-exp.O.x,act.Oy-exp.O.y)<1e-8,'O from bisector intersection');
  if(exp.kind==='right')check(Math.hypot(act.Ox-exp.hmid.x,act.Oy-exp.hmid.y)<1e-8,'right case: O at hypotenuse midpoint');
  check((act.svg.match(/class="vtx"/g)||[]).length===3,'three vertices');
  check((act.svg.match(/class="cc"/g)||[]).length===1,'circumcircle drawn');
  check((act.svg.match(/class="ctr"/g)||[]).length===1,'centre dot');
  check((act.svg.match(/dasharray/g)||[]).length===2,'two bisectors');
  check((act.svg.match(/class="mid"/g)||[]).length===2,'two midpoint marks');
  for(const x of ['>A<','>B<','>C<','>O<'])check(act.svg.includes(x),'label '+x);
  const needle=exp.kind==='acute'?(lang==='en'?'INSIDE':'లోపల'):exp.kind==='right'?(lang==='en'?'MIDPOINT of the hypotenuse':'కర్ణ మధ్య బిందువు'):(lang==='en'?'OUTSIDE':'బయట');
  check(act.caseText.includes(needle),'case text '+exp.kind);
  check(act.aria.length>10,'aria label');
  check(await ev('document.documentElement.scrollWidth<=innerWidth'),'reflow');
 }
 await ev(`$('#circum-angle').value=75;$('#circum-angle').oninput();$('#circum-side').value=7;$('#circum-side').oninput()`);
 const rl=expect(75,7).Rf.toFixed(2);
 check(await ev(`$('#circum-radius').textContent.includes('R = OA = OB = OC ≈ '+${JSON.stringify(rl)})&&$('#circum-radius').textContent.includes('abc ÷ 4K')`),'radius line');
 check(await ev(`($('#circum-proof').open=true,$('#circum-proof-text').textContent.includes(${JSON.stringify(lang==='en'?'perpendicular bisector':'లంబ సమద్విఖండన')}))`),'proof text');
 for(const [btn,ok]of [['#circum-pick-in',true],['#circum-pick-on',false],['#circum-pick-out',false]]){
  await ev(`$(${JSON.stringify(btn)}).click()`);
  check(await ev(`$('#circum-feedback').textContent.startsWith(${JSON.stringify(ok?(lang==='en'?'Correct':'సరైనది'):(lang==='en'?'Try again':'మళ్లీ'))})`),'pick feedback');
 }
 await ev(`$('#circum-collinear').click()`);
 const col=await ev(`(()=>{const m=circumcentreModel(0,7);return{kind:m.kind,caseText:$('#circum-case').textContent,svg:$('#circum-diagram').innerHTML,radius:$('#circum-radius').textContent}})()`);
 check(col.kind==='collinear','collinear model');
 check((col.svg.match(/class="cc"/g)||[]).length===0,'no circle when collinear');
 check((col.svg.match(/dasharray/g)||[]).length===2,'parallel bisectors shown');
 check(col.caseText.includes(lang==='en'?'NO circle':'ఏ వృత్తం పోదు'),'collinear case text');
 check(col.radius==='','no radius line when collinear');
 await ev(`$('#circum-pick-in').click()`);
 check(await ev(`$('#circum-feedback').textContent.includes(${JSON.stringify(lang==='en'?'No circle exists':'వృత్తమే లేదు')})`),'collinear pick feedback');
 await ev(`$('#circum-collinear').click()`);
 check(await ev(`($('#circum-diagram').innerHTML.match(/class=\"cc\"/g)||[]).length===1`),'back to triangle');
 check(await ev(`JSON.stringify(state)===window.ccState&&JSON.stringify({...localStorage})===window.ccStore`),'no earned data');
 check(await ev(`[...$('#circum-lab').querySelectorAll('input,select,button,svg')].every(e=>e.getAttribute('aria-label')||e.labels?.length||e.textContent.trim())`),'labels');
 if(width===320&&lang==='te'){
  await ev(`$('#circum-angle').value=60;$('#circum-angle').oninput();$('#circum-side').value=9;$('#circum-side').oninput();$('#circum-diagram').scrollIntoView()`);
  let s=await send('Page.captureScreenshot',{format:'png'});fs.writeFileSync(process.env.RESULT_DIR+'/circumcentre-diagram-te.png',Buffer.from(s.result.data,'base64'));
  await ev(`$('#circum-proof').open=true;$('#circum-proof').scrollIntoView()`);s=await send('Page.captureScreenshot',{format:'png'});fs.writeFileSync(process.env.RESULT_DIR+'/circumcentre-proof-te.png',Buffer.from(s.result.data,'base64'));
  await ev(`$('#circum-pick-in').click();$('#circum-feedback').scrollIntoView()`);s=await send('Page.captureScreenshot',{format:'png'});fs.writeFileSync(process.env.RESULT_DIR+'/circumcentre-feedback-te.png',Buffer.from(s.result.data,'base64'));
  await ev(`$('#circum-collinear').click();$('#circum-diagram').scrollIntoView()`);s=await send('Page.captureScreenshot',{format:'png'});fs.writeFileSync(process.env.RESULT_DIR+'/circumcentre-collinear-te.png',Buffer.from(s.result.data,'base64'));
  await ev(`$('#circum-collinear').click()`);
 }
}
for(const args of ['-1,7','181,7','5,0','5,13','NaN,7','90,NaN','"x",7'])check(await ev(`circumcentreModel(${args})===null`),'invalid model '+args);
check(await ev(`circumcentreModel(0,7).kind==='collinear'&&circumcentreModel(180,7).kind==='collinear'`),'collinear endpoints');
await ev(`chosenClass=8;lessonDetail('circles')`);check(await ev(`!$('#circum-lab')`),'younger class guard');
check(errors.length===0,'exceptions');
fs.writeFileSync(process.env.RESULT_DIR+'/circumcentre-results.json',JSON.stringify({checks,modelCases:66,errors},null,2));
console.log({circumcentreChecks:checks,modelCases:66,errors});w.close()
})().catch(e=>{console.error(e);process.exit(1)});

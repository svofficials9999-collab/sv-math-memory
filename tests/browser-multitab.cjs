(async()=>{const fs=require('fs');const port=process.env.CDP_PORT||9393,url=process.env.LIVE||'http://localhost:8197/learn.html';
const connect=async t=>{const w=new WebSocket(t.webSocketDebuggerUrl);await new Promise(r=>w.onopen=r);let id=0,p={},errors=[];w.onmessage=e=>{let d=JSON.parse(e.data);if(d.method==='Runtime.exceptionThrown')errors.push(d.params);if(p[d.id]){p[d.id](d);delete p[d.id]}};const send=(method,params={})=>new Promise(r=>{p[++id]=r;w.send(JSON.stringify({id,method,params}))});const ev=async expression=>{let d=(await send('Runtime.evaluate',{expression,awaitPromise:true,returnByValue:true})).result;if(d.exceptionDetails)throw Error(JSON.stringify(d.exceptionDetails));return d.result.value};await send('Runtime.enable');return{send,ev,errors,close:()=>w.close()}};
const waitReady=async ev=>{for(let i=0;i<100;i++){if(await ev('typeof bank!=="undefined"&&bank.length===4140').catch(()=>false))break;await new Promise(r=>setTimeout(r,100))}};
const settle=async(ev,expr,ms=4000)=>{const t0=Date.now();while(Date.now()-t0<ms){if(await ev(expr).catch(()=>false))return true;await new Promise(r=>setTimeout(r,150))}return false};
let results=[],errors=[];const check=(n,v)=>{if(!v)throw Error(n);results.push({name:n,pass:true})};
const list=await(await fetch(`http://localhost:${port}/json`)).json();const A=await connect(list.find(x=>x.type==='page'));
await A.send('Page.navigate',{url});await waitReady(A.ev);
await A.ev(`localStorage.clear()`);await A.send('Page.navigate',{url});await waitReady(A.ev);
const bt=await(await fetch(`http://localhost:${port}/json/new?about:blank`,{method:'PUT'})).json();const B=await connect(bt);
await B.send('Page.navigate',{url});await waitReady(B.ev);
// B1 reproduction: two tabs, one correct answer each, same clean base.
await A.ev(`topic='all';begin('mixed');answer(String(session.question.answer))`);
await B.ev(`topic='all';begin('mixed');answer(String(session.question.answer))`);
check('two tabs merged attempted/correct',await settle(A.ev,`state.attempted===2&&state.correct===2`));
check('two tabs merged xp',await settle(A.ev,`state.xp===20`));
await A.send('Page.navigate',{url});await waitReady(A.ev);
check('merged survives reload',await A.ev(`state.attempted===2&&state.correct===2&&state.xp===20`));
// Preference change in B must not wipe counters from A.
await B.ev(`state.lang='te';save()`);
check('pref change keeps counters',await settle(A.ev,`state.lang==='te'&&state.attempted===2`));
// Same mock run submitted from both tabs scores once.
await A.ev(`mockBegin(1,1,10);localStorage.setItem('test.run',mock.run)`);
const seeded=await A.ev(`JSON.stringify(mock)`);
await B.ev(`localStorage.setItem('svmm.mock.v1',${JSON.stringify(seeded)});mock=mockLoad()`);
await A.ev(`mock.given=mock.ids.map((id,i)=>mock.options[i][0]);mockSubmit()`);
await B.ev(`mock.given=mock.ids.map((id,i)=>mock.options[i][0]);mockSubmit()`);
const ok10=await settle(A.ev,`state.attempted===12`,6000);
await A.send('Page.navigate',{url});await waitReady(A.ev);
check('same run scored once',ok10&&await A.ev(`state.attempted===12&&(state.mockRuns||[]).filter(r=>r===localStorage.getItem('test.run')).length===1`));
// Pending op recovery: a leftover op key is applied once on next load, then removed.
const xp0=await A.ev(`state.xp`);
await A.ev(`localStorage.setItem(KEY+'.op.testtab:0',JSON.stringify({id:'testtab:0',ts:Date.now(),patch:{delta:{xp:5},topics:{},best:{},sets:{},fields:{},history:[]}}))`);
await A.send('Page.navigate',{url});await waitReady(A.ev);
check('pending op applied once',await settle(A.ev,`state.xp===${xp0}+5`));
check('pending key removed',await A.ev(`localStorage.getItem(KEY+'.op.testtab:0')===null`));
await A.send('Page.navigate',{url});await waitReady(A.ev);
check('no double apply after reload',await settle(A.ev,`state.xp===${xp0}+5`));
// Storage-disabled session still works with truthful warning.
await A.ev(`localStorage.clear()`);await A.send('Page.navigate',{url});await waitReady(A.ev);
check('A exceptions',A.errors.length===0);check('B exceptions',B.errors.length===0);
console.log({multitabChecks:results.length,errors:[...A.errors,...B.errors]});
fs.writeFileSync((process.env.RESULT_DIR||'.test-output')+'/multitab-results.json',JSON.stringify({checks:results.length,results,errors:[...A.errors,...B.errors]}));
A.close();B.close()})().catch(e=>{console.error(e);process.exit(1)});

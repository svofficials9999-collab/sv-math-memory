// Run with Node 22+: node tests/data-check.mjs [path-to-learn.html]
import fs from 'node:fs';
import zlib from 'node:zlib';
import assert from 'node:assert/strict';
const path=process.argv[2]||'learn.html';
const html=fs.readFileSync(path,'utf8');
const bankStart=html.indexOf('new Response(new Blob(');
const encoded=/atob\('([^']+)'\)/.exec(html.slice(bankStart));
assert(encoded,'Inline question bank not found');
const bank=JSON.parse(zlib.gunzipSync(Buffer.from(encoded[1],'base64')));
const lessonStart=html.indexOf('const LESSONS=')+'const LESSONS='.length;
const lessonEnd=html.indexOf(';\n',lessonStart);
const lessons=JSON.parse(html.slice(lessonStart,lessonEnd));
const gcd=(a,b)=>{while(b){[a,b]=[b,a%b]}return a};
const sums=a=>a.reduce((x,y)=>x+y,0),product=a=>a.reduce((x,y)=>x*y,1);
const operations={
 'grouped-median':a=>10+((a[0]+a[1]+a[2])/2-a[0])*10/a[1], 'grouped-mode':a=>10+(a[1]-a[0])*10/(2*a[1]-a[0]-a[2]), share:a=>a[0]*a[1]/a[2], 'metre-cm':a=>100*a[0]+a[1], 'clock-minute':a=>a[0]*5%60, sub:a=>a[0]-a[1],add:sums,mul:product,time:a=>60*a[0]+a[1],
 'fraction-add':a=>(a[0]+a[1])/a[2],power:a=>a[0]**a[1],sqrt:a=>Math.sqrt(a[0]),
 'quad-angle':a=>360-sums(a),'triangle-angle':a=>180-sums(a),volume:product,
 poly:a=>a[0]*a[3]**2+a[1]*a[3]+a[2],'linear-two':a=>(a[0]+a[1])/2,
 'quad-root':a=>(a[0]-Math.sqrt(a[0]**2-4*a[1]))/2,
 ap:a=>a[0]+(a[2]-1)*a[1],circumference:a=>44*a[0]/7,
 'percent-prob':a=>100*a[0]/a[1],mean:a=>sums(a)/a.length,
 hypotenuse:a=>Math.hypot(...a),symmetry:a=>({square:4,rectangle:2,isosceles:1,scalene:0})[a[0]],
 'right-angles-square':()=>4,sum:sums,weighted:a=>a[0].reduce((s,f,i)=>s+f*a[1][i],0)/sums(a[0]),
 same:a=>a[0],identity:a=>100*(a[1]**2-a[0]**2)/a[1]**2,height45:a=>a[0]+a[1]
};
function legacyAnswer(q){
 const x=(q.question.match(/\d+(?:\.\d+)?/g)||[]).map(Number);
 switch(q.topic){
 case 'addition':return x[0]+x[1];case 'subtraction':return x[0]-x[1];
 case 'number-recognition':return x[0]+1;case 'patterns':return 2*x[2]-x[1];
 case 'place-value':return Math.floor(x[0]/10);case 'multiplication':return x[0]*x[1];
 case 'division':return x[0]/x[1];case 'measurement':return x[0]*100;
 case 'fractions':return x[0]*x[2]/x[1];case 'geometry':return 3;
 case 'decimals':return sums(x);case 'mensuration':return x[0]*x[1];
 case 'factors-multiples':return gcd(x[0],x[1]);case 'lcm':return x[0]*x[1]/gcd(x[0],x[1]);
 case 'ratio':return x[1]*x[2]/x[0];case 'percentages':return x[0]*x[1]/100;
 case 'equations':return x[1]-x[0];case 'algebra':return x[0]*x[1]+x[2];
 case 'statistics':return sums(x)/x.length;case 'probability':return 100*x[0]/(x[0]+x[1]);
 case 'coordinate-geometry':return Math.hypot(x[2]-x[0],x[3]-x[1]);
 case 'trigonometry':return 100*x[0]/x[1];case 'advanced-practice':return x[0]**2-x[1]**2;
 default:throw Error('No independent checker for '+q.id);
 }
}
let checks=0;
assert.equal(new Set(bank.map(q=>q.id)).size,bank.length);checks++;
for(const q of bank){
 assert(q.id&&q.classLevel>=1&&q.classLevel<=10&&[1,2,3].includes(q.difficulty),q.id);checks++;
 assert(q.question&&q.questionTe&&q.explanation&&q.explanationTe&&q.learningObjective&&q.verification,q.id);checks++;
 assert.equal(q.options.length,4,q.id);assert.equal(new Set(q.options).size,4,q.id);checks+=2;
 assert(q.options.some(v=>Math.abs(v-q.answer)<1e-8),q.id);checks++;
 const expected=q.operation?operations[q.operation]?.(q.operands):legacyAnswer(q);
 assert(Number.isFinite(expected)&&Math.abs(expected-q.answer)<1e-7,`${q.id}: expected ${expected}, stored ${q.answer}`);checks++;
}
for(const lesson of lessons){
 assert(lesson.en&&lesson.te&&lesson.idea&&lesson.ideaTe&&lesson.example&&lesson.exampleTe);checks++;
 for(let c=lesson.minClass;c<=lesson.maxClass;c++){
  assert(bank.some(q=>q.classLevel===c&&q.topic===lesson.topic),`Missing practice: class${c}/${lesson.topic}`);checks++;
 }
}
console.log(JSON.stringify({status:'PASS',bank:bank.length,lessons:lessons.length,checks},null,2));

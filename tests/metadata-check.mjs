// Run with Node 22+: node tests/metadata-check.mjs [path-to-learn.html] [path-to-bank-metadata.json]
// Verifies the metadata sidecar against the live bank inside learn.html.
// The bank blob is never edited; this check fails on any drift between the two.
import fs from 'node:fs';
import zlib from 'node:zlib';
import assert from 'node:assert/strict';
const htmlPath=process.argv[2]||'learn.html';
const metaPath=process.argv[3]||'bank-metadata.json';
const html=fs.readFileSync(htmlPath,'utf8');
const bankStart=html.indexOf('new Response(new Blob(');
const encoded=/atob\('([^']+)'\)/.exec(html.slice(bankStart));
assert(encoded,'Inline question bank not found');
const bank=JSON.parse(zlib.gunzipSync(Buffer.from(encoded[1],'base64')));
const meta=JSON.parse(fs.readFileSync(metaPath,'utf8'));
let checks=0;
assert.equal(meta.version,1);checks++;
assert(meta.generated&&/^\d{4}-\d{2}-\d{2}$/.test(meta.generated));checks++;
assert.equal(bank.length,4140,'bank count drift');checks++;
const bankIds=new Set(bank.map(q=>q.id));
const metaIds=Object.keys(meta.items||{});
assert.equal(metaIds.length,bank.length,'every bank item must have a metadata entry');checks++;
const VS=new Set(['original-checked','original-checked-independent','counting-checked','needs-review']);
const registry=meta.alignRegistry||{};
for(const id of metaIds){
 assert(bankIds.has(id),'unknown id in metadata: '+id);checks++;
 const e=meta.items[id];
 assert(VS.has(e.vs),'bad vs for '+id);checks++;
 assert(/^\d{4}-\d{2}-\d{2}$/.test(e.vAt),'bad vAt for '+id);checks++;
 if(e.align){
  const q=bank.find(x=>x.id===id);
  assert(q.classLevel===6||q.classLevel===10,'align outside class 6/10 backfill scope: '+id);checks++;
  for(const code of e.align)assert(registry[code],'align code not in registry: '+id+' '+code);checks++;
 }
}
// Registry codes match the verified 17 Oct 2026 chapter inventories exactly.
assert.equal(Object.keys(registry).length,25);checks++;
assert.equal(registry['ncert6.ch1'],'NCERT Grade 6 Ganita Prakash (reprint 2026-27), chapter 1: Patterns in Mathematics');checks++;
assert.equal(registry['cbse10.ch15'],'CBSE Secondary Mathematics Class X 2026-27 (code 041/241), chapter 15: Probability');checks++;
// Loader presence in learn.html (Phase 2): lazy, optional, no UI dependency.
assert(html.includes('function loadBankMeta()'),'loader missing');checks++;
assert(html.includes('bank=data;loadBankMeta();'),'loader not wired after bank decode');checks++;
const aligned=metaIds.filter(id=>meta.items[id].align).length;
console.log(JSON.stringify({status:'PASS',bank:bank.length,metadata:metaIds.length,aligned,checks},null,2));

# SV Math Memory audit, 15 October 2026

Status: IN PROGRESS. Learning beta, not production-ready or full board syllabus.

Checkpoint before lesson expansion: e120ca330047cdc98f80a93efd5c022ebcdc1baf (main).
Architecture: GitHub Pages static HTML and JavaScript, compressed inline question bank, scoped service worker. No backend, account, paid API or student tracking.

| Finding | Status / evidence | Path | Severity | Action |
|---|---|---|---|---|
| Original five games and saved score key | Preserved; earlier regression and current unchanged index | index.html / svmm.v1 | High if lost | Leave untouched |
| Learning bank | 2016 legacy IDs and answers preserved; 1278 new original items, all keys independently recomputed | learn.html | High | Keep old mistake references |
| Telugu | Original explanations were English; bilingual explanations and 43 teaching lessons added | learn.html | Medium | Native teacher review remains pending |
| Curriculum | Broad topic progression, not complete school-board chapter coverage | learn.html / CURRICULUM_SOURCES.md | High | Complete board mapping and missing proofs/constructions |
| Modes | 15 game loops plus diagnostic; some share question presentation and short-round scoring | learn.html | Medium | Extend mode-specific mechanics, do not overstate differences |
| Worlds | Four achievement-world cards plus new ten-class lesson trail | learn.html | Low | Continue level/world design |
| Language switch | Previously discarded active rounds; now preserves active question and completed answer state | learn.html | Medium | Regression test before release |
| Storage | Existing v1 scores and v2 learning schema unchanged; export/restore retained | index.html / learn.html | High | No clearing or incompatible migration |
| Offline | Versioned scoped cache and bounded navigation wait; installer must fetch complete shell | sw.js | High | Verify offline after publication |
| Android icon | Device-local install/launcher issue not reproduced in web tests | manifest.webmanifest / Android | High | No manifest identity change or data clearing |
| Official exams | General original practice selectors; not complete official papers | learn.html | High | Verify patterns and build separate coverage |

Local release checks: 2016 legacy keys independently recomputed, 1278 new keys independently recomputed. 25,442 metadata, identity/answer compatibility, option and class/lesson coverage assertions. 1,937 browser checks across 320/375/390/430/1280 widths and both languages, 16 mode starts/results, language continuation, save/reload and numeric fractions. No JS exceptions in that run. Phone-width pixels inspected. These are browser-emulation checks, not physical Android tests. Live and offline verification recorded separately in the release log after deployment.

## Beta0.4 live verification
Published HTML, worker and sources were read back exact. All prior3042 IDs/answers/questions/class assignments retained. Live:1937 layout/lesson/mode checks,141 difficulty/answer-path checks,103 activity-control checks,9 fresh-browser offline/old-save checks. Zero JavaScript exceptions in those suites. SVG diagrams and labels inspected as actual live320px Telugu pixels. Activity diagrams illustrate relationships; they are not complete proof teaching or a freehand drawing editor. Current chapter map is CURRICULUM_COVERAGE.md.

## Current master-request traceability at beta0.8
This section supersedes older numeric totals above. Current:3978 numeric items,56 bilingual topic lessons,18 visual activities. Original five games,index/manifest/IDs/start/scope and3978 prior bank objects preserved. Code paths:learn.html,sw.js,tests/. Current test counts are in RELEASE_LOG.md;do not treat an assertion count as curriculum completeness.

| User requirement | Current status | Evidence / remaining work | Severity / next action |
|---|---|---|---|
|Repository audit and four requested files|MET as an initial audit,not a final certification|AUDIT_REPORT.md,FEATURE_INVENTORY.md,KNOWN_ISSUES.md,ROADMAP.md|Keep findings current;formal accessibility and physical-device audit still unknown|
|Recoverable checkpoint,existing app/data,no backend|MET for checkpoint/preservation;development branch preference NOT MET|Git history;original index/manifest and old bank objects exact;v1/v2 keys retained;changes made on main through tested small releases|High:keep rollback and avoid deletion|
|Colourful mobile UI,theme/language,effects|PARTIAL|Gradients,cards,reduced-motion,dark/light,English/Telugu;phone-width pixels inspected|Rich map/counters/character customisation incomplete|
|Full Classes1–10 correct curriculum|NOT MET|56 short lessons,3978 numeric questions and18 activities;CURRICULUM_COVERAGE.md remains partial|High:complete primary/board-specific semantic mapping and teaching|
|15 real game loops|MET as working basic loops,PARTIAL in depth|All16 including diagnostic complete rounds at3 difficulties in tests|Boss/logic/game worlds remain simple;do not claim distinct deep mechanics|
|XP,coins,trophies,streaks,missions,worlds|PARTIAL|Local earned progression,badges/trail,three trophies and mission|Rich unlockable worlds/level progression incomplete|
|Transparent adaptive learning|MET as a basic rules-based system,not AI|Diagnostic,accuracy-based difficulty,hints,mistakes,revision,free practice|Broader topic diagnostics and pedagogical validation incomplete|
|Optional audio/music/vibration controls|PARTIAL / physical output UNKNOWN|Local oscillator tones and toggles;no narration or audio downloads|Physical speaker/audio quality and vibration not verified|
|Structured complete exam preparation|NOT MET|Guided profile practice and separate original Test room;no official questions claimed|High:full SSC/CBSE/entrance/other-exam blueprints still incomplete|
|Timed tests,review,explanations,reports|MET for original class-topic practice|Test room,deferred feedback,flags,timeout,resume,review,print with answers|Not equivalent to a complete official board/entrance paper|
|Dashboard and private local progress|MET as a basic dashboard|Level/XP/accuracy/time/topic/mastery/history/revision;no accounts/tracking|Teacher validation and richer charts incomplete|
|PWA/offline/storage reliability|PARTIAL with repeatable evidence|Scoped cache,bounded navigation,offline suite,old-save checks,quota warning|High:physical Android launcher issue unresolved|
|Complete all requested testing|NOT MET|Repeatable numeric/browser/activity/round/mock/offline/PDF checks;actual pixels inspected|Physical device,formal accessibility,native/teacher review still unknown|
|Release log and honest status|MET for staged releases|RELEASE_LOG.md,source/coverage notes,Git checkpoints|No full-completion/world-class/production-ready claim|
|Finish all work before final handoff|IN PROGRESS,NOT COMPLETE|The durable task remains active|Continue bounded verified releases;do not mark task complete|

Test room storage adds svmm.mock.v1 and an optional state.mockRuns list. Old v2 saves remain accepted;no existing progress deletion/migration. One local draft/latest result is retained. Timer continues hidden/closed. Current basic local tests do not establish concurrent multi-tab race safety or native Android WebAPK behavior.

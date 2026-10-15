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

## Current master-request traceability at beta0.17
This section supersedes older numeric totals above. Current:4140 numeric items,59 bilingual topic lessons,35 visual activities. Original five games,index/manifest/IDs/start/scope and3978 prior bank objects preserved;162 new original unit-count items appended. Code paths:learn.html,sw.js,tests/. Current test counts are in RELEASE_LOG.md;do not treat an assertion count as curriculum completeness.

| User requirement | Current status | Evidence / remaining work | Severity / next action |
|---|---|---|---|
|Repository audit and four requested files|MET as an initial audit,not a final certification|AUDIT_REPORT.md,FEATURE_INVENTORY.md,KNOWN_ISSUES.md,ROADMAP.md|Keep findings current;formal accessibility and physical-device audit still unknown|
|Recoverable checkpoint,existing app/data,no backend|MET for checkpoint/preservation;development branch preference NOT MET|Git history;original index/manifest and old bank objects exact;v1/v2 keys retained;changes made on main through tested small releases|High:keep rollback and avoid deletion|
|Colourful mobile UI,theme/language,effects|PARTIAL|Gradients,cards,reduced-motion,dark/light,English/Telugu;phone-width pixels inspected|Rich map/counters/character customisation incomplete|
|Full Classes1–10 correct curriculum|NOT MET|59 short lessons,4140 numeric questions and35 activities;CURRICULUM_COVERAGE.md remains partial|High:complete primary/board-specific semantic mapping and teaching|
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

Beta0.9 adds selected equation,coordinate,power and AP representations only. Class9 AP nth terms and Class10 sums are separated. Full curriculum remains NOT MET.

Beta0.10 adds selected original primary measurement teaching based on the verified2026–27 Class1 measurement chapter. No complete chapter claim.25113 numeric and4082 browser assertions pass locally;live verification is separately recorded in RELEASE_LOG.md.

Beta0.11 adds selected fraction representation/common-unit work and an original geometric Pythagoras area proof. Full current chapter/grade coverage remains NOT MET.

Beta0.12 adds selected parallel-angle reasoning and rotational-symmetry models. Full current chapters/grade coverage remains NOT MET.

Beta0.13 adds distributive-area and coordinate distance/midpoint/internal-section representations. Full current chapters/grade coverage remains NOT MET.

## Beta0.14 bounded accessibility/reliability review
- Checked representative home/settings/dashboard/worlds/library/mock/fraction/algebra/coordinate views in English/Telugu and light/dark palettes. No missing control/image names found in those selected views. This is not exhaustive screen-reader testing.
- Found three inline documentation links with20px bounding-box height. Enlarged them to44px and summary hit areas to44px. Inline-link exceptions mean the original dimensions alone did not establish a WCAG violation.
- Added first-tab bilingual skip link;Enter moves focus to the learning region. Existing visible focus ring retained. Keyboard skip and focus verified in isolated Chrome.
- Bounded computed solid-background text contrast scan found no below-threshold values in sampled views. Gradient/image/transparency combinations were skipped,not certified.
-320px English/Telugu light/dark layouts and a200% body zoom check for algebra reflow pass;reduced-motion disables entrance animation. Physical Android/screen-reader/low-vision review still UNKNOWN.
- Stale visible beta0.7 footer corrected to0.14. No question/save/manifest change. HTML404849 bytes;local gzip193670 bytes is a compression measurement,not proof of server transfer size or mobile speed.
-7982 browser assertions including82 bounded accessibility checks and32 offline checks pass locally;25113 numeric checks pass. Live outcome is recorded separately in RELEASE_LOG.md.

## Beta0.15: primary numbers
Two original bilingual interactive models added to existing lessons:two ten-frames0–20,and0–99 ten-rods/unit exchange. All4140 bank objects,all59 lessons,old activities and save/manifest identity preserved.33 activities total. Each ten-rod visibly contains10 squares;regrouping preserves total;standard representation is distinguished from nonstandard exchanged groupings. No new score reward,storage mutation,dependency or network call.
9956 local browser checks pass,including1972 new number-model assertions and34 offline assertions;25113 numeric assertions pass. Tests cover all21 frame targets,all100 standard0–99 geometries,and repeated exchange/regroup states on boundary/representative targets,English/Telugu,320/375/390/430/1280 widths,labels,wrong/empty/invalid answers,and no progress/storage changes. Actual320px Telugu filled-frame and exchanged-rod screenshots inspected. Full board coverage/native/teacher/physical-device review remains incomplete;this is not full curriculum completion or accessibility certification.

## Beta0.16: linear-equation graphs
Class9+ equations lesson now has one original graph activity for eight selectable lines and64 ordered pair combinations. Diagram lines clipped to −5..5 on equal axes;intersection,parallel/coincident classification,exact fraction elimination/cross-products and substitution feedback checked. Horizontal/vertical and off-window crossing cases included. Old one-variable lesson remains. No bank/save/index/manifest/network/dependency changes.34 activities,59 lessons4140 items.
12528 local browser assertions pass,including2571 linear-pair assertions and35 offline assertions;25113 numeric assertions pass. Independent test math checks endpoint equations,classification,intersection visibility and fractions across64 combinations,in English/Telugu at five widths. Actual320px Telugu graph and off-window reasoning pixels inspected. Code does not claim full algebra or board chapter completion. Live verification recorded separately.

## Beta0.17: factor rectangles and sieve
Class6+factors lesson gains one original bilingual Prime Time activity:1–100 factor-pair rectangles,prime/composite classification,prime factorization with repetitions,and stepwise1–100sieve. It distinguishes positive divisors from unordered pair count and handles1as neither. Selected model only,not a full chapter. Rectangle display scales to fit;thin arrangements can have tiny cells and labels supply exact counts.35activities59lessons4140items. No bank/save/index/manifest/dependency/network changes.
16081local browser assertions pass,zero JavaScript exceptions,including3552prime checks and36offline checks.25113numeric assertions pass;4140oldbankobjects exact. Independent divisor enumeration verifies all100 classifications/decompositions/pairs. Representative rectangle geometries and every intermediate sieve step checked at five widths and both languages. Sieve ends with exactly25independently computed primes. Actual320px Telugu rectangle and completed-sieve pixels inspected. Native teacher,full accessibility,physical Android and complete chapter/exam coverage still open. Live verification separately recorded.

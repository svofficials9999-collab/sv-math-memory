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

## Current master-request traceability at beta0.19
This section supersedes older numeric totals above. Current:4140 numeric items,59 bilingual topic lessons,37 visual activities. Original five games,index/manifest/IDs/start/scope and3978 prior bank objects preserved;162 new original unit-count items appended. Code paths:learn.html,sw.js,tests/. Current test counts are in RELEASE_LOG.md;do not treat an assertion count as curriculum completeness.

| User requirement | Current status | Evidence / remaining work | Severity / next action |
|---|---|---|---|
|Repository audit and four requested files|MET as an initial audit,not a final certification|AUDIT_REPORT.md,FEATURE_INVENTORY.md,KNOWN_ISSUES.md,ROADMAP.md|Keep findings current;formal accessibility and physical-device audit still unknown|
|Recoverable checkpoint,existing app/data,no backend|MET for checkpoint/preservation;development branch preference NOT MET|Git history;original index/manifest and old bank objects exact;v1/v2 keys retained;changes made on main through tested small releases|High:keep rollback and avoid deletion|
|Colourful mobile UI,theme/language,effects|PARTIAL|Gradients,cards,reduced-motion,dark/light,English/Telugu;phone-width pixels inspected|Rich map/counters/character customisation incomplete|
|Full Classes1–10 correct curriculum|NOT MET|59 short lessons,4140 numeric questions and37 activities;CURRICULUM_COVERAGE.md remains partial|High:complete primary/board-specific semantic mapping and teaching|
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

## Beta0.18: common repeat times and prime powers
One Class7+originalLCMmodel:two bells,positive integer intervals1–20,same start0;first positive common time vs later common times. Finite timeline includes exact endpoint labels and warns when meeting lies outside60-minute view. Prime-count reasoning forHCFminimum,LCMmaximum and two-positive-integer identity.1,identical intervals,co-prime and off-window cases tested.36activities59lessons4140items. No bank/save/index/manifest/dependency/network changes.
17424local browser assertions pass,zero JavaScript exceptions,including1342common-ground and37offline checks;25113numeric assertions pass. Independent EuclideanGCD+bruteforceLCM verifies400ordered1–20pairs,exponent identity and timeline geometry/feedback. Both languages,five widths,invalid/zero/later-common/Telugu-numeral answers,grade gate and no score/store mutation checked. Actual320px Telugu timeline and prime-reasoning pixels inspected. Full chapter/board/native/physical/accessibility verification remains open. Live separately recorded.

## Beta0.19: decimal hundredths
Original equal-whole decimal grids/shared number line,comparison and exact integer-hundredths addition/carry representation added to existing decimal lesson. Inputs0–1,sum0–2.0.50=0.5but0.05different explicitly taught.37activities59lessons4140items,no bank/save/index/manifest/network/dependency/schema changes.
18289local browser assertions pass,zero JavaScript exceptions,including864decimal and38offline.25113numeric pass;4140prior bankobjects exact. All101shadings/all201sumstrings and representative carry/extreme pairs,geometry,wrong/invalid/equivalent/Telugu forms,labels/reflow,no score/store mutation tested in2languages/five widths. Actual320px Telugu grids/carry steps inspected. Full chapter/current-board placement/native/physical/accessibility certification incomplete. Live separately recorded.

## Beta 0.20: predeployment evidence
- Implemented: decimal take-away/regrouping with A and B in 0–100 integer hundredths. Negative-result guard, explicit swap, removed/remaining cell patterns, text labels, borrowing through zero and addition check.
- Preserved: 4140 prior question objects, original index, manifest identity/start/scope and save schema. No dependency or network change.
- Version: footer 0.20, worker v24-decimal-subtraction, HTML 463120 UTF-8 bytes. 38 activities, 59 lessons.
- Tests: 19208 local browser assertions, including 918 subtraction and 39 offline checks; zero JavaScript exceptions. An additional 10201 ordered input pairs check arithmetic/regrouping invariants. 25113 numeric assertions pass.
- Pixels: actual 320px Telugu take-away grid and 1.00−0.01 exchange steps inspected; readable, no overlap or horizontal overflow.
- Test-harness recovery: the first local run lacked CURRICULUM_SOURCES.md, so its service worker could not finish installation. Added the missing fixture, updated cache names and reran the complete suite successfully. This was a local fixture fault, not a live-app failure.
- Limits: live verification follows publication. Full curriculum, native review, physical-device and complete accessibility checks remain open.

## Beta 0.21 predeployment evidence
- Added Class 7+ arithmetic-expression meanings/steps to the existing algebra lesson. Three fixed expression families; no arbitrary expression evaluation or new dependency.
- Preserved all 4140 bank objects, index, manifest identity/start/scope and save schema. No new network behavior.
- HTML 474563 UTF-8 bytes, footer 0.21, worker v25-arithmetic-expressions. 39 visual activities, 59 lessons.
- Full local suite: 20078 browser assertions, including 869 expression checks and 40 offline checks; zero JavaScript exceptions. An additional 3993 expression-model combinations check arithmetic against repeated grouping/addition, and the previous 10201 subtraction pairs still pass. 25113 numeric assertions pass.
- Two languages/five widths; zero/extreme/accidental-equality cases, first-step/wrong/invalid/Telugu answers, group/counter counts, bar scale, labels/reflow, class gate and no state/store mutation.
- Actual 320px Telugu repeated-group and two-cost expression steps inspected: readable, no overlap. Live verification follows publication. Full curriculum/exams/native/physical/accessibility/concurrency work remains open.

| Finding | Status | Evidence | File path | Severity | Recommended fix |
|---|---|---|---|---|---|
| Simultaneous-tab progress overwritten | CONFIRMED OPEN | Isolated local current-source diagnostic: two correct answers, one per tab, stored 1/1 instead of 2/2 | learn.html, save()/record() | HIGH | Prevent stale writes, preserve existing format/data, test rounds/mock/settings/restore in multiple tabs |

This diagnostic is separate from the passing local/live teaching regression suite. It touched no real user data.


## Learning beta0.22 - selected large-number teaching,15October2026
Status: locally implemented and tested; live verification follows publication. Full master scope remains IN PROGRESS.
Path: learn.html, existing place-value lesson; availability extends fromClasses2–6 toClasses2–10. OnlyClass7+ gets the new large-number model and matching rendered lesson text. Younger-class lessons and models remain unchanged.
Added: Indian/international comma grouping of the same integer, lakh/crore/million/billion equivalences, all10 decimal places, digit×place contribution, expanded sum, zero-place explanation, original example cycle, English/Telugu and strict whole-number/Telugu-digit self-checks. Range0–9,999,999,999. Top Indian groups use crores rather than an added arab label. Not full number-word spelling, rounding, estimation, contextual reasoning or complete chapter coverage. No official exam-paper claim.
Evidence:21,840 local browser assertions, including1,721 new large-number and41 offline checks; zero exceptions.11,030 integer model cases inside one invariant assertion.25,117 numeric bank/lesson checks. Actual320px Telugu grouping/place-card pixels inspected.59 lessons,40 activities,4140 prior bank objects unchanged. Original5-game index and manifest byte exact. No save-schema, backend, dependency or network change. HTML485247UTF-8bytes,worker v26-large-numbers. Physical Android/native Telugu teacher review remain unverified.
The confirmed HIGH multi-tab lost-update bug remains OPEN in this release. A separate save-store migration candidate is NOT included or deployed; approval is still required before that migration. This release does not claim multi-tab persistence safety.

Beta0.22 LIVE verified15October2026,20:07IST:exact485247byteHTML,v26worker,originalindex/manifestand4140priorbankobjectspreserved.21,840livebrowserassertions,41offline,zeroexceptions;25,117numericbank/lessonchecks. Actual320pxTelugugrouping/placecardpixelsinspected. Verifiedcheckpoint:https://github.com/svofficials9999-collab/sv-math-memory/commit/0e23040254911dad1265bb3597d4f8a1803bead3 . FullmasterINPROGRESS;productionmulti-tabbugstillOPEN,journalmigrationnotincluded.


## Learning beta0.23 - selected nearest-multiple teaching
Status: local implementation tested15October2026; live verification follows publication. Full master remains IN PROGRESS.
Path: learn.html,Class7+place-value lesson. Added original number line,lower/upper multiples,midpoint,distances,nearest thousand/ten thousand/lakh/ten lakh/crore,answer checks,exact-multiple and tie explanations. Exact ties round upward by explicit lab convention. Input0–9,999,999,999;rounded output can reach10,000,000,000. English/Telugu,Telugu-digit input;exact identifiers and minimum-capacity needs distinguished from estimates. No actual phone/account/student data requested.
Local evidence:24,044browserassertions,including2,203newroundingand42offlinechecks;zeroexceptions.15,130numericroundingcasesinsideoneinvariantassertion,notseparateUIjourneys.25,117numericbank/lessonchecks. Actual320pxTeluguextreme/tielineandfeedbackpixelsinspected.59lessons41visualactivities4140exactpriorbankobjects. Originalindex/manifest/savesunchanged,nosavemigration/backend/dependency/networkchange. Fullrounding/estimationcontexts,decimalrounding,significantfigures,nativeTeluguteacherandphysicalAndroidremainincompleteorunverified.
Productionmulti-tabbugstillHIGHOPEN;separatelytestedjournalmigrationisnotincludedandremainsundeployedpendingownerapproval.

Beta0.23 LIVE verified15October2026,20:18IST:exact494161byteHTML,v27worker,4140priorbankobjectsandoriginalindex/manifest/savespreserved.24,044livebrowserassertions,42offline,zeroexceptions;25,117numericchecks,15,130additionalroundingmodelcasesinsideoneinvariantassertion. Actual320pxTeluguextremeandtienumber-linepixelsinspected. Verifiedcheckpoint:https://github.com/svofficials9999-collab/sv-math-memory/commit/082009df138a701a41d19863469bedf2b9c3efe8 . FullmasterstillINPROGRESS;productionmulti-tabbugHIGHOPEN,separatejournalmigrationundeployed.


## Learning beta 0.24 - integer products with zero pairs
Status: implemented, locally tested and verified live October 15, 2026. Full master IN PROGRESS.

The existing Class 7+ integer lesson now has a two-factor product model for factors from -6 to 6. A positive first factor places groups; a negative first factor removes groups after adding zero pairs. The model uses sign and shape labels, before/action views, crossed removed tokens, remaining counts, an answer check, Telugu digits and Unicode minus input, and a pattern through zero. Class 6 and its existing addition/subtraction model are unchanged. Exploring this activity does not grant rewards or change progress.

Local results: 27,332 browser assertions, including 3,287 integer-product assertions and 43 offline assertions; zero exceptions. All 169 product combinations checked. 25,117 numeric bank/lesson checks passed. Actual 320px Telugu screenshots inspected: 36 zero pairs before removal, the 36 negative-token removals leaving 36 positive tokens, and pattern rows.

HTML: 503606 UTF-8 bytes. Footer 0.24. Worker: v28-integer-products. 42 teaching activities, 59 bilingual lessons, 4140 exact prior bank objects. Original index, manifest identity and saved-data format unchanged. No new backend, dependency or authoritative save store.

Still partial: integer division, zero-divisor rules, all properties, multi-factor expressions and full chapter contexts. Native Telugu teacher review and physical Android verification are not done. The confirmed HIGH production multi-tab lost-update bug remains OPEN. The separate journal migration is not included and still requires owner approval.

Beta 0.24 LIVE verified October 15, 2026, 20:26 IST: exact 503606-byte HTML and v28-integer-products worker served by Pages. All 27,332 browser assertions passed, including 43 offline and 3,287 new integer-product assertions; zero exceptions. 25,117 numeric bank/lesson checks passed. Actual 320px Telugu zero-pair, removal and pattern screenshots inspected. All 4140 prior bank objects and original index/manifest identity/save format preserved. Verified checkpoint: https://github.com/svofficials9999-collab/sv-math-memory/commit/ccc4111e4caac18b1fb6a108fa70f61c431352ff . Full master remains IN PROGRESS; HIGH multi-tab lost-update bug remains OPEN; separate journal migration is not deployed.

The first live attempt ran against the previous worker while Pages was publishing and failed the expected new-cache readiness check. An exact HTML/worker readback followed by a clean full rerun above supersedes it. No test failure was suppressed.


## Learning beta 0.25 - division as a missing factor
Status: implemented, locally tested and verified live October 15, 2026. Full master IN PROGRESS.

The existing Class 7+ integer lesson adds n ÷ d as d × q = n, with n from -36 to 36 and d from -6 to 6. Exact reduced fractions show that a quotient of integers need not be an integer. Nonzero divided by zero has no solution; zero divided by zero has many solutions to the multiplication equation, so neither has a defined unique quotient. The answer checker accepts equivalent fractions, Telugu digits and Unicode minus and verifies by exact multiplication. Class 6 and all previous activities remain unchanged. Exploration gives no XP and changes no saved progress.

Local results: 37,308 browser assertions, including 9,975 new division assertions and 44 offline assertions; zero exceptions. All 949 model pairs checked. 25,117 numeric bank/lesson checks passed. Actual 320px Telugu fractions, feedback, zero/zero and nonzero/zero screenshots inspected. HTML 509996 UTF-8 bytes, footer 0.25, worker v29-integer-division. 43 teaching activities, 59 bilingual lessons and all 4140 prior bank objects preserved. No new dependency, backend, save format or authoritative save store.

Still partial: all integer properties, multi-factor expressions and full chapter contexts. Native Telugu teacher review, physical Android and complete board-specific coverage remain unverified. The HIGH production multi-tab lost-update bug is still OPEN. The separately tested journal migration is NOT included and remains undeployed pending owner approval.

Beta 0.25 LIVE verified October 15, 2026, 20:44 IST: exact 509996-byte HTML and v29-integer-division worker served by Pages. All 37,308 browser assertions passed, including 44 offline and 9,975 new integer-division assertions; zero exceptions. All 949 model pairs and 25,117 numeric bank/lesson checks passed. Actual 320px Telugu fraction, answer/feedback and both zero-divisor cases inspected. All 4140 prior bank objects and original index/manifest identity/save format preserved. Verified checkpoint: https://github.com/svofficials9999-collab/sv-math-memory/commit/4ae82389343956c9b54290d969181e0822d91e23 . Full master remains IN PROGRESS; HIGH multi-tab lost-update bug remains OPEN; journal migration not deployed.

Pages initially still served 0.24 while publication was running. Testing waited for exact new HTML and worker before the successful full live suite. No failed live suite was suppressed.


## Learning beta 0.26 - integer multiplication laws and cancellation
Status: implemented, locally tested and verified live October 15, 2026. Full master IN PROGRESS.

Class 7+ integer teaching adds three factors from -5 to 5. Both associative grouping paths show intermediate products; a separate line swaps factors for commutativity. The distributive paths show a × (b + c) and a × b + a × c. Sign-labelled unit bars show the two terms, with a reversible opposite-pair cancellation view and remaining signed count. Zero is checked before negative-factor parity. An explicit subtraction counterexample warns against moving brackets in every operation. The activity says finite examples illustrate laws and are not a proof for all integers. Strict self-check, Telugu digits and Unicode minus are supported; exploration gives no XP or saved progress.

Local: 70,127 browser assertions, including 32,818 new law assertions and 45 offline assertions; zero exceptions. All 1331 factor triples checked at 320px in both languages; representative triples at 375/390/430/1280. 25,117 numeric bank/lesson checks passed. Actual 320px Telugu grouping, distributive terms and 20 cancelled opposite pairs leaving five negative units inspected. HTML 518571 UTF-8 bytes, footer 0.26, worker v30-integer-laws. 44 teaching activities, 59 bilingual lessons, all 4140 prior bank objects preserved. Original index, manifest and save format unchanged; no dependency, backend or save migration.

Full integer chapter contexts, proof teaching and complete current board coverage remain incomplete. Native Telugu teacher review and physical Android are not done. HIGH multi-tab lost-update bug remains OPEN; separate journal migration is excluded and still awaits owner approval.

Beta 0.26 LIVE verified October 15, 2026, 20:52 IST: exact 518571-byte HTML and v30-integer-laws worker served by Pages. All 70,127 browser assertions passed, including 45 offline and 32,818 new integer-law assertions; zero exceptions. All 1331 triples checked. 25,117 numeric bank/lesson checks passed. Actual 320px Telugu grouping, signed distributive terms, cancellation and remaining negative units inspected. All 4140 prior bank objects and original index/manifest/save format preserved. Verified checkpoint: https://github.com/svofficials9999-collab/sv-math-memory/commit/6e6849d413693a788ac79ca88d58d168b2e7196b . Full master remains IN PROGRESS; HIGH multi-tab lost-update bug remains OPEN; journal migration not deployed.

Pages initially served 0.25 while publication was running. Testing waited for exact new HTML and worker before the full successful live suite.


## Learning beta 0.27 - selected geometry foundations
Status: implemented, locally tested and verified live October 15, 2026. Full master IN PROGRESS.

Existing Class9+ lines-and-angles teaching adds definitions versus accepted assumptions versus theorems, positive equal-length addition/subtraction/double/half illustrations, a concise five-postulate summary, Euclidean parallelism and Playfair's equivalent formulation. A short contradiction proof explains why two distinct straight lines cannot share two distinct points, explicitly using the accepted unique-line property through two distinct points. It does not falsely derive uniqueness from the wording of postulate one alone. A reasoning choice distinguishes that property from a picture or right-angle postulate. Original SVG and bilingual prose, not textbook art or official questions. Exploration changes no earned data.

Local: 72,555 browser assertions, including 2,427 new geometry-foundation and 46 offline assertions; zero exceptions. All 78 length/part pairs across 320/375/390/430/1280 widths and both languages. 25,117 numeric bank/lesson checks passed. Actual 320px Telugu equal-length maximum-size diagram, five postulates and reasoning feedback inspected. First maximum-length diagram labels were too small; fixed to a constant viewBox with larger labels and visually rechecked. HTML 529912 UTF-8 bytes, footer0.27, worker v31-geometry-foundations.45 teaching activities,59 bilingual lessons,4140 prior bank objects unchanged. Original index, manifest and saved-data format unchanged; no backend, dependency or save migration.

Sources and limits: CBSE2026–27 curriculum includes axioms/postulates. Precise common notions/postulates are cross-checked against the older official NCERT Euclid exemplar, not falsely labelled a new textbook chapter. Current2026 GanitaManjari front matter has different chapter names from older catalogue PDFs. Full history, Sulbasutra square construction, all axiom applications, full textbook mapping and board coverage remain incomplete. Native Telugu teacher/physical Android review not done. HIGH multi-tab lost-update bug remains OPEN; journal migration is not included and still awaits owner approval.

Beta 0.27 LIVE verified October 15, 2026, 21:05 IST: exact 529912-byte HTML and v31-geometry-foundations worker served by Pages. All 72,555 browser assertions passed, including 46 offline and 2,427 new geometry-foundation assertions; zero exceptions. All 78 length/part pairs checked across 320/375/390/430/1280 widths in both languages. 25,117 numeric bank/lesson checks passed. Actual 320px Telugu equal-segments diagram, five postulates and contradiction-proof feedback inspected live. All 4140 prior bank objects and original index/manifest/save format preserved. Verified checkpoint: https://github.com/svofficials9999-collab/sv-math-memory/commit/70e7a1d5b65c85e883f4451760920aa903cbd12d . Full master remains IN PROGRESS; HIGH multi-tab lost-update bug remains OPEN; journal migration not deployed.

Testing waited for exact new HTML and worker bytes before the full successful live suite.

## Learning beta 0.28 - perpendicular from centre to a chord
Status: implemented, locally tested and verified live October 15, 2026. Full master IN PROGRESS.

Class 9+ circles teaching adds an original centre-to-chord model: radius r from 1 to 10 and centre distance d from 0 to r on sliders. A circle diagram draws chord AB, the perpendicular foot M and the right-angle marker. Boundary cases are named explicitly: d = 0 gives a diameter with M = O, where OM is a zero-length segment and must not be called a line making a right angle; d = r gives one boundary point, not a chord with two distinct endpoints. The proof panel gives right-angle-hypotenuse-side congruence for AM = MB, Pythagoras AM² = r² − d², and the SSS converse that the midpoint of a non-diameter chord implies perpendicularity. A strict self-check asks for the exact integer AM² with Telugu digit support; displayed decimal lengths are rounded to 3 places while the check stays exact. Original SVG and bilingual prose, not textbook art or official questions. Exploration gives no XP and changes no earned data.

Local: 74,604 browser assertions, including 2,048 new circle-chord and 47 offline assertions; zero exceptions. All 65 radius/distance pairs across 320/375/390/430/1280 widths and both languages. 25,117 numeric bank/lesson checks passed. Actual 320px Telugu chord diagram, congruence proof and exact-square feedback inspected. HTML 538130 UTF-8 bytes, footer 0.28, worker v32-circle-chords. 46 teaching activities, 59 bilingual lessons, 4140 prior bank objects unchanged. Original index, manifest and saved-data format unchanged; no backend, dependency or save migration.

Sources and limits: live current NCERT Class 9 chapter 5 Circles PDF (iemh105.pdf, verified by reading its title and year, not stale catalogue filenames) and CBSE 2026-27 secondary curriculum include the perpendicular from the centre bisecting a chord and its converse. The remaining circle theorems, constructions, applications and complete board coverage remain incomplete. Native Telugu teacher/physical Android review not done. HIGH multi-tab lost-update bug remains OPEN; journal migration is not included and still awaits owner approval.

Beta 0.28 LIVE verified October 15, 2026, 21:22 IST: exact 538130-byte HTML and v32-circle-chords worker served by Pages. All 74,604 browser assertions passed, including 47 offline and 2,048 new circle-chord assertions; zero exceptions. All 65 radius/distance pairs checked across 320/375/390/430/1280 widths in both languages. 25,117 numeric bank/lesson checks passed. Actual 320px Telugu chord diagram, congruence proof and exact-square feedback inspected live. All 4140 prior bank objects and original index/manifest/save format preserved. Verified checkpoint: https://github.com/svofficials9999-collab/sv-math-memory/commit/5531e40a91ece3eab7a5c3dc4412edd4dafe2412 . Full master remains IN PROGRESS; HIGH multi-tab lost-update bug remains OPEN; journal migration not deployed.

Pages initially served 0.27 while publication was running. Testing waited for exact new HTML and worker bytes before the full successful live suite.

## Learning beta 0.29 - equal chords and distance from centre
Status: implemented, locally tested and verified live October 15, 2026. Full master IN PROGRESS.

Class 9+ circles teaching adds a two-chord comparison model on one circle: radius r from 1 to 10 with independent distances of chords AB and PQ from centre O. The diagram draws both chords with perpendicular feet M and N and right-angle markers, including boundary cases d = 0 (diameter, no right-angle claim about a zero-length segment) and d = r (a single point, not a chord). The exact relation (half chord)² = r² − d² drives every comparison: equal distances give equal chords, equal chords sit at equal distances, and the longer of two unequal chords is the one closer to the centre. The proof panel states both directions through the perpendicular-bisector theorem and Pythagoras. A three-choice strict self-check asks which chord is longer, including the equal case. Displayed decimals are rounded to 3 places; comparisons use exact integer squares. Original SVG and bilingual prose, not textbook art or official questions. Exploration gives no XP and changes no earned data.

Local: 77,244 browser assertions, including 2,639 new equal-chord and 48 offline assertions; zero exceptions. All 85 radius/distance-pair cases across 320/375/390/430/1280 widths and both languages. 25,117 numeric bank/lesson checks passed. Actual 320px Telugu two-chord diagram, proof and comparison feedback inspected; a centre/foot label collision found by pixel inspection was fixed by moving each foot label away from the centre and visually rechecked. HTML 546720 UTF-8 bytes, footer 0.29, worker v33-equal-chords. 47 teaching activities, 59 bilingual lessons, 4140 prior bank objects unchanged. Original index, manifest and saved-data format unchanged; no backend, dependency or save migration.

Sources and limits: live current NCERT Class 9 chapter 5 Circles (iemh105.pdf, verified by its own title and year), theorems 6 and 7 with the longer-chord-closer ordering, and CBSE 2026-27 secondary curriculum. Angle-subtended theorems, cyclic quadrilaterals, constructions, applications and complete board coverage remain incomplete. Native Telugu teacher/physical Android review not done. HIGH multi-tab lost-update bug remains OPEN; journal migration is not included and still awaits owner approval.

Beta 0.29 LIVE verified October 15, 2026, 21:54 IST: exact 546720-byte HTML and v33-equal-chords worker served by Pages. All 77,244 browser assertions passed, including 48 offline and 2,639 new equal-chord assertions; zero exceptions. All 85 radius/distance-pair cases checked across 320/375/390/430/1280 widths in both languages. 25,117 numeric bank/lesson checks passed. Actual 320px Telugu two-chord diagram, proof and comparison feedback inspected live. All 4140 prior bank objects and original index/manifest/save format preserved. Verified checkpoint: https://github.com/svofficials9999-collab/sv-math-memory/commit/3f0ab969aa66fe2fe62058ccf457550179f39938 . Full master remains IN PROGRESS; HIGH multi-tab lost-update bug remains OPEN; journal migration not deployed.

Pages initially served 0.28 while publication was running. Testing waited for exact new HTML and worker bytes before the full successful live suite.

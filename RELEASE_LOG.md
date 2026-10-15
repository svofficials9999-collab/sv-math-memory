# Release log

## Learning beta 0.3, 15 October 2026

Changes: 39 bilingual teaching lessons and worked examples; class lesson trail; 1026 additional original numeric items (3042 total); Telugu explanations for all old and new items; in-round language continuation; fraction and Telugu-digit numeric input; source/coverage documentation.

Files: learn.html, sw.js, CURRICULUM_SOURCES.md, AUDIT_REPORT.md, FEATURE_INVENTORY.md, KNOWN_ISSUES.md, ROADMAP.md, RELEASE_LOG.md.

Safety: index.html unchanged byte-for-byte. Manifest unchanged. Old 2016 IDs and numeric answers unchanged. No score/progress reset, no new storage schema, no paid API or third-party library. Retained scoped worker cache prefix and bounded startup wait, cache version v5-lessons-bilingual.

Evidence:
- 2016 legacy and 1026 new keys independently recomputed.
- 24,420 metadata/options/legacy compatibility/class-lesson sample assertions.
- 1797 live browser checks across 320/375/390/430/1280 and both languages, including all mode starts/results, lesson practice availability, no horizontal overflow, save/reload and in-round language continuation. Zero JS exceptions.
- 141 live difficulty/incorrect/hint/timer/fraction/Telugu-digit checks.
- 9 live/offline checks: new shell installed, learning bank and lesson open offline, answer/save/reload offline, old v2 learning save and original score key retained. Zero JS exceptions.
- Actual live pixels inspected at 390px Telugu lesson and 320px class trail/library.
- Published HTML, worker, sources and unchanged original index read back exact.

Not tested: physical Android installation/launcher state, native-teacher review and full official syllabus/exam coverage. This is still a beta.

Rollback checkpoint: e120ca330047cdc98f80a93efd5c022ebcdc1baf. Restore affected source files from that commit. Use a NEW worker cache version when restoring so cached clients update. Never revert manifest identity or clear student browser data. Old-save keys remain compatible.

Release file commits remain in repository history; documentation commits do not change app identity.

## Learning beta0.4,15October2026
Added four bilingual visual activity guides: angle slider/linear pair, rectangle/square reflection axes, proportional right-triangle/Pythagoras diagram and paper-based square construction steps. Added252 independently checked numeric questions. Now43 topic lessons and3294 numeric items; all prior3042 question IDs, answers, class assignments and question wording retained. No new storage schema, index or manifest changes. Worker cache v6-geometry-labs.

Local pre-deploy:1937 browser checks,141 answer-path/difficulty checks,103 activity-control/layout checks; zero JS exceptions.25,442 data/metadata/class-sample checks plus2016 legacy keys independently recomputed. Actual Telugu activity pixels inspected at320px. Live/offline checks follow publication and are not assumed from these local results.

Publication verification for0.4: live HTML, worker, sources, original index and chapter coverage file read back exact. Live1937+141+103 browser checks passed; fresh isolated-profile install and offline bank/lesson/practice/save/reload/legacy-save preservation9 checks passed. No JavaScript exceptions. Actual320px Telugu activity diagrams inspected after live loading.

Known test-harness caveat fixed before offline verification: cache-name creation precedes completion of install. Tests now wait for the actual cached lesson response and an activated worker, not merely a cache key. This was a test readiness issue, not an app source patch.

## Learning beta0.5,15October2026
Five bilingual teaching/activity modules added: graphs, estimated grouped mean, triangle correspondence, acute-angle trig identity derivation and height/eye-height application.216 additional numeric questions,3510 total,48 lessons. All3294 prior bank entries retained exact, including IDs/answers/questions/class/difficulty/metadata. No save schema, original index, manifest identity/scope/start URL changes. Inline dependency-free app; cache v7-data-reasoning.

Before deploy:2120 browser checks on320/375/390/430/1280 with EN/TE, all lesson/class practice availability,16 mode loops across three difficulties, active-round language preservation, save/reload, graph scale/controls, grouped validation/zero total, correspondence feedback and formulas. Zero JS exceptions.14006 data/option/compatibility/coverage assertions;216 new numeric answers independently recomputed. Actual320px Telugu pixels inspected, grouped table readability corrected and retested. Live/offline checks must follow publication.

Still beta/incomplete: full official syllabus/papers, all proofs, native teacher review and physical Android launch verification remain.

Live0.5 checks: HTML/worker/sources/coverage exact.2120 browser assertions pass with zero JS exceptions.11 fresh-profile offline/old-save/practice checks pass. Reusable tests/data-check.mjs independently recomputes all3510 keys and checks metadata/options/class practice:21,291 assertions pass. Actual live320px Telugu graph, grouped table and proof pixels inspected. No physical-phone or teacher-review claim.

## Learning beta0.6,15October2026
Changed: learn.html,sw.js,CURRICULUM_SOURCES.md,CURRICULUM_COVERAGE.md,tests/data-check.mjs,RELEASE_LOG.md.
Three bilingual lessons/activities: grouped median,grouped mode,equal tangents.54 new numeric questions,3564 total,51 lessons. All3510 prior question objects preserved exact; index/manifest/start_url/IDs/save keys untouched. No new network/dependency. HTML277811 UTF-8 bytes.
Predeploy:2150 general browser assertions and173 added activity assertions pass (2323 total),zero JS exceptions at320/375/390/430/1280 in English/Telugu. Independent data checker21621 assertions pass,recomputing all3564 numeric answers. Repeating-decimal traps avoided in new questions by choosing terminating answers. No data migration.
Rollback: prior version remains in Git history; restore learn.html and sw.js together from previous beta0.5,using a new worker cache name rather than deleting local storage.
Known issues: full official syllabus/exam coverage,teacher review,native Telugu review,physical Android launch reliability remain incomplete/unverified.

Live0.6:2323 browser assertions pass,zero JS exceptions.14 fresh-profile offline/compatibility checks pass. Actual live320px Telugu median/mode/tangent screenshots inspected. Topic selectors now use bilingual lesson titles.

## Learning beta0.7,15October2026
Changed:learn.html,sw.js,CURRICULUM_SOURCES.md,CURRICULUM_COVERAGE.md,tests/data-check.mjs,RELEASE_LOG.md.
Five bilingual foundational lessons,six visual activities,414 new original questions.3978 numeric items,56 lessons. Previous3564 objects exact. Original index/manifest/IDs/start/scope/save keys exact. No dependency/network addition,no data migration. HTML312879 UTF-8 bytes.
Predeploy:2340 general browser assertions +173 retained activity assertions +201 foundational assertions=2714 pass,zero JS exceptions. Widths320/375/390/430/1280,English/Telugu. Clock hand coordinates at3:30 independently checked;fraction limits/zero,unit extremes,pictograph keys/empty data,money shortfall,number-line endpoints checked. Actual320px Telugu screenshots for all six new activities inspected. Independent checker24129 assertions pass for all3978 numeric answers.
Known gaps:complete syllabus/exam coverage,teacher/native Telugu review and physical phone launch verification remain incomplete. Primary source contents recovered,but full chapter semantics remain partial/unverified.
Rollback:restore previous0.6 learn.html and sw.js from Git history with a new worker cache name;never clear localStorage.

Live0.7:learn/worker/source/coverage files read back exact.2714 live viewport/activity assertions and392 additional live full-round/controls assertions pass,zero JS exceptions. Fresh-profile offline20 checks pass. Combined3126 browser assertions. Exact older learning save and original score key preserved. Actual live320px Telugu clock,fraction and pictograph screenshots inspected.
Repeatable source-checkout runner added under tests/:core,activities,foundations,rounds,offline and README. Full local checkout run:3126 assertions pass,zero exceptions,using an isolated temporary browser profile and no npm dependencies. Browser binary and Node22+ are needed.

## Learning beta0.8,15October2026
Changed:learn.html,sw.js,CURRICULUM_SOURCES.md,CURRICULUM_COVERAGE.md,RELEASE_LOG.md,tests/run-browser-check.mjs,tests/browser-offline.cjs,tests/browser-mock.cjs,tests/browser-mock-extra.cjs,tests/README.md.
Added separate original-practice Test room:10/20/30 questions with corresponding10/20/30 minutes,fixed difficulty,deferred feedback,shuffled options,question map/flags,clear/navigation,final confirmation,wall-clock timeout,local draft/result resume and idempotent learning-progress update. Existing guided exam practice retained and relabelled. Profile labels bilingual;Navodaya5/SSC10 class/history alignment fixed.
Question bank3978 and56 lessons unchanged;all3978 objects exact. Original index/manifest/IDs/start/scope/save keys exact. One new private localStorage key svmm.mock.v1;optional mockRuns field in existing state records applied run IDs to prevent duplicate rewards. Existing old saves pass unchanged;no migration or deletion. No backend/network/dependency. HTML331538 UTF-8 bytes.
Predeploy:3343 browser assertions pass,zero JS exceptions,including207 Test room workflow checks and7 keyboard/automatic timeout/storage/offline checks in addition to3126 regressions. Actual320px Telugu active/result screenshots inspected. Independent numeric checker24129 assertions pass.
Known gaps:complete syllabus/official exam coverage,teacher/native Telugu review and physical Android launcher verification remain incomplete. Test room is original class-topic practice,not an official score. One local draft/latest result is retained;clearing browser data removes it. Timer continues while hidden/closed.
Rollback:restore0.7 learn.html and sw.js from checkpoint d770169a35f188dd7505b41bca07ff857c234992 with a new cache version. Do not clear localStorage. Older code ignores the extra state field and separate draft key.

Print verification:initial PDF omitted folded explanations;fixed beforeprint/afterprint to expand and restore review. Re-rendered Telugu sample:three pages with every answer/explanation and no blank trailing page;all three pages inspected. Added3 repeatable PDF assertions and tests/browser-print.cjs.

Live0.8 final:HTML331538 bytes,worker/source/coverage read back exact.3343 browser assertions pass with zero JS exceptions against the deployed URL,including offline mock resume/result and3 PDF checks. Live320px Telugu active/result pixels and all3 pages of printed Telugu report inspected. Numeric bank24129 assertions pass;3978 previous objects exact.

## Learning beta0.9,15October2026
Changed:learn.html,sw.js,CURRICULUM_SOURCES.md,CURRICULUM_COVERAGE.md,AUDIT_REPORT.md,FEATURE_INVENTORY.md,RELEASE_LOG.md,tests/browser-algebra.cjs,tests/browser-mock-extra.cjs,tests/browser-offline.cjs,tests/run-browser-check.mjs,tests/README.md.
Four bilingual algebra/graph activities:equal-operation equation steps/substitution,uniform coordinate grid and quadrant/axis/origin,positive exponent multiplication vs addition,AP nth terms plus Class10 finite-sum pairing explanation. Class9 AP excludes the general sum formula. Now22 visual activities;56 lessons/3978 numeric items unchanged. All3978 bank objects retained exact;original index/manifest/IDs/start/scope/storage keys unchanged. No new network calls/dependencies or migration. HTML342747 UTF-8 bytes. Cache v13-algebra-graphs.
Predeploy:3568 browser assertions pass,zero JavaScript exceptions,including221 new algebra checks and24 offline checks. Numeric checker24129 assertions pass. Actual320px Telugu equations/grid/powers/AP screenshots inspected. Current official CBSE9/10 curriculum rechecked for the selected representation scope. This is not complete chapter or exam coverage.
Rollback checkpoint:beta0.8 commit2db94557cfafd5e0bedfffb876df70682c150869;restore learn.html and sw.js from that version using a fresh worker cache name. Never clear localStorage.
Known issues remain:complete current syllabus/papers,Telugu/native mathematics-teacher review,physical Android launcher failure and concurrent multi-tab scoring races are not certified. Live verification is recorded only after publication.

Live0.9:HTML342747 bytes,worker/source/coverage exact;original index/manifest exact.3568 live browser assertions pass,zero JavaScript exceptions,including221 algebra and24 offline checks. Numeric24129 assertions pass;all3978 prior bank objects exact. Actual live320px Telugu coordinate/AP pixels inspected. Temporary isolated-profile cleanup initially raced a Chrome child;runner now uses bounded removal retries and the entire live suite reran cleanly. No app/user data was affected.

Documentation follow-up:verified NCERT Class1 official2026–27 prelims and full measurement chapter. Added13-chapter gap inventory;corrected earlier unknown edition/contents status. No app code,question or save changes. Complete Class1 teaching remains partial.

## Learning beta0.10,15October2026
Changed:learn.html,sw.js,CURRICULUM_SOURCES.md,CURRICULUM_COVERAGE.md,AUDIT_REPORT.md,FEATURE_INVENTORY.md,RELEASE_LOG.md,tests/browser-core.cjs,tests/browser-mock.cjs,tests/browser-mock-extra.cjs,tests/browser-print.cjs,tests/browser-offline.cjs,tests/browser-primary.cjs,tests/run-browser-check.mjs,tests/README.md.
Three bilingual primary measurement lessons/activities:aligned strip comparison,equal units without gaps/overlaps,fixed-capacity jug/equal cups,mass balance with identical cubes and heavier side down. Classes1–3 introductory/revision content.162 original unit-count questions added;4140 total,59 lessons,25 visual activities. All3978 old bank objects exact. index/manifest/start/scope/save keys unchanged;no dependencies/backend/network additions,no migration. HTML366341 UTF-8 bytes;cache v14-primary-measures.
Predeploy:4082 browser assertions pass,zero JavaScript exceptions,including421 primary checks,2430 general checks and27 offline checks.25113 numeric assertions pass for4140 items. Actual320px Telugu length/cup/balance pixels inspected. Initial local offline test waited because the source-doc shell file was absent in the temporary test folder;copying that file restored the intended local shell fixture. No production data affected.
Remaining:full current syllabus/papers,all contextual/physical measuring tasks,teacher/native Telugu review,physical Android launch and concurrent multi-tab scoring safety remain incomplete/unverified.
Rollback checkpoint0.9:https://github.com/svofficials9999-collab/sv-math-memory/commit/29339295304509593b4fd1bd402489705a23d761 . Restore learn.html/sw.js together from that version using a fresh worker cache name. Never clear localStorage. Live verification follows publication.

Live0.10:learn.html366341 bytes,worker/source/coverage exact;original index/manifest exact.4082 live browser assertions pass,zero JavaScript exceptions,including421 primary and27 offline checks.25113 numeric assertions pass. Actual live320px Telugu length/capacity/balance pixels inspected. Test runner cleanup was further hardened to stop the isolated browser process group;the full live suite reran cleanly. No user browser data is touched by that temporary-profile test cleanup.

## Learning beta0.11,15October2026
Changed:learn.html,sw.js,CURRICULUM_SOURCES.md,CURRICULUM_COVERAGE.md,AUDIT_REPORT.md,FEATURE_INVENTORY.md,RELEASE_LOG.md,tests/browser-proof.cjs,tests/browser-mock-extra.cjs,tests/browser-offline.cjs,tests/run-browser-check.mjs,tests/README.md.
Added two original bilingual teaching activities:fraction strips/number line,equivalence/comparison and Class6+ common-unit operations;geometric Pythagoras area proof with two equal outer squares and four congruent triangles. Class4/5 fraction view excludes common-denominator operations;negative subtraction explicitly withheld in this introductory activity.27 visual activities,59 lessons,4140 numeric items unchanged;every prior bank object exact. Original games/index/manifest/start/scope/save keys exact. No new dependency,network call,storage schema or migration. HTML379101 UTF-8 bytes;cache v15-fractions-proof.
Predeploy:5425 browser assertions pass,zero JavaScript exceptions,including1341 fraction/proof checks and29 offline checks.25113 numeric assertions pass. Independent triangle side lengths,areas,remaining square sides/right angles and equal uncovered areas checked. Actual320px Telugu fraction detail/proof arrangements inspected.
Known gaps:complete current syllabus/exam patterns,remaining contextual/proof/construction work,native/teacher review,physical Android launch and concurrent multi-tab scoring safety remain incomplete/unverified.
Rollback checkpoint0.10:https://github.com/svofficials9999-collab/sv-math-memory/commit/c436a0ecb1c5f722c81a86a7481d25e4922252cc . Restore learn.html/sw.js together with a fresh worker cache name,never clear localStorage. Live verification follows publication.

Live0.11:HTML379101 bytes,worker/source/coverage exact;original index/manifest exact.5425 live browser assertions pass with zero JavaScript exceptions,including1341 proof/fraction and29 offline checks.25113 numeric assertions pass;all4140 prior question objects exact. Actual live320px Telugu fraction detail and both geometric proof arrangements inspected. No physical-device or native-teacher certification claimed.

## Learning beta0.12,15October2026
Changed:learn.html,sw.js,CURRICULUM_SOURCES.md,CURRICULUM_COVERAGE.md,AUDIT_REPORT.md,FEATURE_INVENTORY.md,RELEASE_LOG.md,tests/browser-lines.cjs,tests/browser-mock-extra.cjs,tests/browser-offline.cjs,tests/run-browser-check.mjs,tests/README.md.
Two original bilingual activities:Class7+ parallel/transversal angle-pair diagram with opposite/corresponding/alternate/interior feedback and reasoning;Class6+ rotational-symmetry overlays/orders for square,non-square rectangle,equilateral/scalene triangles. Class6 original basic angle lab retained.29 visual activities;59 lessons/4140 bank items unchanged. All4140 old bank objects exact. index/manifest/start/scope/save keys untouched,no new dependency/network/storage schema or migration. HTML391662 UTF-8 bytes;cache v16-lines-rotation.
Predeploy:6778 browser assertions pass,zero JavaScript exceptions,including1351 lines/rotation checks and31 offline checks. Actual transversal slope and independently rotated vertices verified.25113 numeric assertions pass. Actual320px Telugu angle and rotation pixels inspected. Offline test fixture corrected to use Class7 for symmetry rather than Class10,outside that lesson's current practice range;no app code change was needed for that test correction.
Known gaps remain full current syllabus/exams,remaining paper constructions/context tasks,native/teacher review,physical Android launch and concurrent multi-tab scoring safety.
Rollback checkpoint0.11:https://github.com/svofficials9999-collab/sv-math-memory/commit/baecd751a87a136684f265a5bd7dfe6b26b91e26 . Restore learn.html/sw.js together using a fresh cache name;never clear localStorage. Live verification follows publication.

Live0.12:HTML391662 bytes,worker/source/coverage exact;original index/manifest exact.6778 live browser assertions pass,zero JavaScript exceptions,including1351 angle/rotation and31 offline checks.25113 numeric assertions pass;all4140 earlier bank objects exact. Actual live320px Telugu angle-pair/rotation pixels inspected. Full curriculum/official-paper/native/physical-device gaps remain open.

## Learning beta0.13,15October2026
Changed:learn.html,sw.js,CURRICULUM_SOURCES.md,CURRICULUM_COVERAGE.md,AUDIT_REPORT.md,FEATURE_INVENTORY.md,RELEASE_LOG.md,tests/browser-distance.cjs,tests/browser-mock-extra.cjs,tests/browser-offline.cjs,tests/run-browser-check.mjs,tests/README.md.
Two original bilingual activities:Class7+distributive rectangular area/like-term representation;Class9+coordinate distance/midpoint and Class10 positive internal section ratios. Exact expressions/rounded approximations/zero-length ratio limits separated.31 visual activities,59 lessons/4140 numeric items unchanged. All4140 prior bank objects exact,index/manifest/start/scope/save keys unchanged. No dependency/network/storage schema/migration addition. HTML403978 UTF-8 bytes;cache v17-algebra-distance.
Predeploy:7900 browser assertions pass,zero JavaScript exceptions,including1121 algebra/distance checks and32 offline checks. Piece ratios/uniform distance/midpoints/internal section ratios independently checked.25113 numeric assertions pass. Actual320px Telugu area/grid pixels inspected. Section-point notation corrected before deploy to PS:SQ,distinct from midpoint M.
Known gaps remain full current syllabus/exams,broader expression/context/construction work,native/teacher review,physical Android launch and concurrent multi-tab scoring safety.
Rollback checkpoint0.12:https://github.com/svofficials9999-collab/sv-math-memory/commit/edf9f91f7a36e32d0f215231a063fc3bd7d1ef69 . Restore learn.html/sw.js together using a fresh cache name;never clear localStorage. Live verification follows publication.

Live0.13:HTML403978 bytes,worker/source/coverage exact;original index/manifest exact.7900 live browser assertions pass with zero JavaScript exceptions,including1121 algebra/coordinate and32 offline checks.25113 numeric assertions pass;all4140 old bank objects exact. Actual live320px Telugu distributive-area/grid pixels inspected. Full current curriculum/exam/native/physical-device gaps remain open.

## Learning beta0.14,15October2026
Changed:learn.html,sw.js,CURRICULUM_SOURCES.md,CURRICULUM_COVERAGE.md,AUDIT_REPORT.md,FEATURE_INVENTORY.md,KNOWN_ISSUES.md,RELEASE_LOG.md,tests/browser-accessibility.cjs,tests/browser-mock-extra.cjs,tests/browser-offline.cjs,tests/run-browser-check.mjs,tests/README.md.
Bilingual first-tab skip link focuses the learning region. Documentation links and summary targets enlarged to44px;visible keyboard focus retained. Theme accessible name follows selected language. Stale footer0.7 corrected to0.14. No mathematical/game/storage behavior,question object,index/manifest/start/scope/save-key change.59 lessons/4140 items/31 activities unchanged. HTML404849 UTF-8 bytes;cache v18-accessibility. No new dependencies/network calls or migration.
Predeploy:7982 browser assertions pass with zero JavaScript exceptions,including82 bounded accessibility checks and32 offline checks.25113 numeric assertions pass;all4140 bank objects exact. Actual320px keyboard-skip and light/dark Telugu library pixels inspected. Selected names,solid-background contrast and hit areas,200% algebra reflow,reduced motion and keyboard skip tested. Gradients/full screen-reader output/all combinations were not certified. Local gzip193670 bytes is not an actual server-transfer or physical-phone speed measurement.
Known gaps:full current syllabus/exams,native/teacher review,full accessibility certification,physical Android launch and concurrent multi-tab scoring safety remain incomplete.
Rollback checkpoint0.13:https://github.com/svofficials9999-collab/sv-math-memory/commit/57e521deb3f973430f103e3c3d005e7028e32d9a . Restore learn.html/sw.js with a fresh cache name;never clear localStorage. Live verification follows publication.

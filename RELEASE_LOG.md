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

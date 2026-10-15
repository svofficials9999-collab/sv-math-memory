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

Local release checks: 2016 legacy keys independently recomputed, 1278 new keys independently recomputed. 25,442 metadata, identity/answer compatibility, option and class/lesson coverage assertions. 1,797 browser checks across 320/375/390/430/1280 widths and both languages, 16 mode starts/results, language continuation, save/reload and numeric fractions. No JS exceptions in that run. Phone-width pixels inspected. These are browser-emulation checks, not physical Android tests. Live and offline verification recorded separately in the release log after deployment.

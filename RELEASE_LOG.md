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

# Bug report - SV Math Memory / SV MATHVERSE Phase 1, 16 October 2026

Only verified defects and verified limits are listed. Sources: KNOWN_ISSUES.md history,
Phase 1 audit evidence (AUDIT_REPORT.md). Statuses: OPEN / MONITORING / RESOLVED.

## HIGH severity

### B1. Stale-tab progress overwrite (multi-tab lost update) - RESOLVED 16 October 2026
Confirmed 15 October 2026 in an isolated local browser profile on the then-current source.
Path: learn.html save()/record(). Two tabs each load zero progress; each answers one question
correctly; stored result is 1 attempt / 1 correct instead of 2/2. A stale in-memory state
overwrote the other tab's newer state. No user data was read or changed during reproduction.
Fix (Learning beta 0.32): per-operation pending keys written synchronously at mutation time,
a Web Locks critical section draining operations from every tab (best-effort fallback without
Web Locks), storage-event live sync between open tabs, apply-time dedup of same-run test-room
submits, and the operation registry kept outside the student-visible snapshot. No save-format
migration: old saves load unchanged by construction; restore-export equality holds exactly.
Evidence: new tests/browser-multitab.cjs (10 checks, including the original B1 reproduction
now merging to 2/2) green locally and live; full 90,674-assertion suites green locally and
live; byte-exact deploy verified by polling. Code checkpoint:
https://github.com/svofficials9999-collab/sv-math-memory/commit/2bfde85871a4167be1a97d3a71fac4d0e909000a

## MEDIUM severity

### B2. Installed-icon launch failure on one Android device - OPEN, physical verification pending
Reported on one device: opening the installed PWA icon failed. Normal web launch, old-worker
takeover and scoped offline launch all pass in emulated browser tests. Manifest id, start_url
and scope are unchanged across releases. Requires a physical Android device to reproduce;
emulation cannot establish WebAPK launcher behaviour: NOT TESTED.

## Verified non-bugs from the Phase 1 audit (checked, none found)
- Broken links/buttons: none; all internal URLs return HTTP 200; all navigation exercised by the passing 90,664-assertion local and live suites.
- Console errors: zero uncaught exceptions in both suites.
- Live/repository drift: none; all app files serve byte-identical to repo main.
- Offline regression: 49 offline assertions pass, including old-save compatibility.
- Save-format incompatibility across the current release line: none found (old learning save and original score formats load).

## Standing limits (limits by design, tracked, not defects)
- Progress is device-local; browser data deletion removes it (export backup advised in-app).
- Test room holds one draft/latest result per device; wall-clock timer continues while hidden.
- Accessibility review is bounded (82 checks), not WCAG certification.
- Telugu content is authored, not native-teacher certified.
- Bank/lessons are broad but not chapter-complete for any board.
- Physical Android touch, audio quality and low-end performance: NOT TESTED.

Full historical detail: KNOWN_ISSUES.md.

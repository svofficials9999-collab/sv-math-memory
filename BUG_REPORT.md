# Bug report - SV Math Memory / SV MATHVERSE Phase 1, 16 October 2026

Only verified defects and verified limits are listed. Sources: KNOWN_ISSUES.md history,
Phase 1 audit evidence (AUDIT_REPORT.md). Statuses: OPEN / MONITORING / RESOLVED.

## HIGH severity

### B1. Stale-tab progress overwrite (multi-tab lost update) - OPEN
Confirmed 15 October 2026 in an isolated local browser profile on the then-current source.
Path: learn.html save()/record(). Two tabs each load zero progress; each answers one question
correctly; stored result is 1 attempt / 1 correct instead of 2/2. A stale in-memory state
overwrites the other tab's newer state. No user data was read or changed during reproduction.
A journal/save-store fix exists in development but is deliberately NOT DEPLOYED pending owner
approval of the saved-data migration. Covers ordinary rounds, test-room scoring/drafts,
preferences, backup restore and storage failure before any multi-tab reliability claim.
The passing main suite does not cover concurrent tabs.

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

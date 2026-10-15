# Development roadmap - SV MATHVERSE 1.0, refreshed 16 October 2026

Phases from the master plan (s.23). Phase-gated: each phase starts only after the owner
approves the previous phase's report. Status words: COMPLETED / IN PROGRESS / BLOCKED /
NOT STARTED / REQUIRES VERIFICATION.

## Phase 1 - Audit, backup, feature identification: COMPLETED
- Repo and live audit: AUDIT_REPORT.md. Feature map: FEATURE_INVENTORY.md.
- Defect list: BUG_REPORT.md. This roadmap.
- Recoverable Git checkpoint: this commit; prior verified app checkpoint a1908ae (Beta 0.31).
- No production app change made; learn.html and sw.js byte-identical before and after.

## Phase 2 - Repair bugs and improve core gameplay: NOT STARTED (awaiting owner OK)
Planned, in order:
1. Fix B1 (HIGH stale-tab overwrite) with the prepared journal/save-store upgrade. BLOCKED on
   owner approval of the saved-data migration; deploy only with explicit OK, with rollback =
   restore previous learn.html/sw.js commit. Old saves must load unchanged.
2. B2 physical Android installed-icon check: REQUIRES VERIFICATION on a real device owned by
   the founder (no free emulated substitute exists for WebAPK launch).
3. Core-gameplay polish that needs no new systems: daily-seeded challenge, volume control,
   named power-ups (hint exists; second chance / option eliminator are candidates).

## Phase 3 - Curriculum and validated question bank: NOT STARTED
- Chapter-by-chapter Telangana/CBSE mapping against current official syllabi (verify against
  primary sources only; third-party PDFs were previously caught carrying false official labels).
- Per-question learning-objective and verification-status metadata.
- Continue the verified learning-content line (next queued: Beta 0.32 circle chord midpoint
  theorems, source already excerpted).

## Phase 4 - XP, levels, rewards, game modes: NOT STARTED
- Weekly missions, skill tree, themes; richer distinct modes from the plan's list of 20,
  built one at a time with full-round tests. No gambling mechanics, ever.

## Phase 5 - Premium visuals, sound, animations: NOT STARTED
- SV MATHVERSE brand application, richer celebration effects, volume slider, per-effect review
  with reduced-motion preserved. Pixel-inspect every new 320px Telugu screen before publish.

## Phase 6 - Adaptive learning and dashboards: NOT STARTED
- Deeper per-topic modelling and dashboard charts; keep the honest "rules-based, not AI" label
  unless a real model is implemented and verified.

## Phase 7 - Exam preparation and practical mathematics: NOT STARTED
- Board-verified exam modules; original practice stays clearly labelled.

## Phase 8 - Offline, accessibility, performance: NOT STARTED
- Screen-reader flows, contrast/zoom matrix, physical low-end Android performance measurement.

## Phase 9 - Regression testing and release preparation: NOT STARTED
- Full-suite release gate (local + live), docs refresh, rollback instructions, owner approval.

## Standing safety rules (all phases)
- Keep production working; app changes deploy only with tests and owner approval for risky items.
- Never delete or migrate saved data silently; verify old-save compatibility before release.
- Preserve original index.html games, manifest identity, start URL, scope and all 4,140 bank
  objects and 59 lessons unless the owner approves a change.
- Free tools only; zero manual steps for the owner.

# Verified live - SV Math Memory

Post-deploy verification records for the public URL. Each entry lists what was actually checked on the live site.
## Learning beta 0.34 - 16 October 2026, ~13:50 IST

- Pages served learn.html and sw.js byte-identical to the deployed commit (md5-polled until exact match).
- Live suite green against https://svofficials9999-collab.github.io/sv-math-memory/learn.html: 92,726 browser assertions including 49 offline and 2,038 new chord-midpoint assertions, zero errors.
- 320px Telugu mobile screenshots pixel-inspected on the live deployment: midpoint diagram (chord AB, midpoint M, dashed OM, right-angle marker), Theorem 4-5 proof card, SAS feedback.
- Footer shows "Learning beta 0.34"; worker cache svmm-shell-v38-chord-midpoint; bank 4140 items and 59 lessons loaded live.
- Not certified: physical Android installed-icon launch (B2), real speakers, full WCAG, teacher/native-language review.
## Learning beta 0.33 - 16 October 2026, ~03:00 IST

- Pages served learn.html and sw.js byte-identical to the deployed commit (polled until exact match).
- Live suite green against https://svofficials9999-collab.github.io/sv-math-memory/learn.html: 90,688 browser assertions including 49 offline, zero errors.
- 390px mobile screenshots pixel-inspected: home en/te, settings showing the Volume slider, Telugu hunt round with the "రెండు తప్పులు తొలగించు" eliminator button, and after use exactly two wrong options disabled.
- Footer shows "Learning beta 0.33"; worker cache svmm-shell-v37-powerups.
- Not certified: physical Android installed-icon launch (B2), real speakers, full WCAG, teacher/native-language review.

## Learning beta 0.32 - 16 October 2026, ~01:50 IST

Live URL: https://svofficials9999-collab.github.io/sv-math-memory/learn.html

- Deploy: learn.html (575,869 bytes) and sw.js (svmm-shell-v36-multitab-save) served by GitHub Pages byte-identical to the locally verified build (md5-polled after commit).
- Full browser suite against the live URL: PASS. 31 files, 90,674 assertions including 49 offline checks and the 10 new multi-tab save checks; zero page exceptions.
- Live footer: "Learning beta 0.32". Bank of 4140 items and 59 lessons confirmed loaded from the live URL.
- Mobile viewport 390x844: English home, Telugu home and lesson library rendered and screenshot-inspected; no layout breakage.
- Old saves: the canonical save shape is unchanged from beta 0.31 (no migration); old-save load and restore equality are covered by the suite's offline and multitab checks against the live deployment.
- NOT verified here: physical Android device behaviour (B2 remains OPEN, owner device needed), multi-device sync (out of scope; saves are device-local), native Telugu teacher review.

Code checkpoint: https://github.com/svofficials9999-collab/sv-math-memory/commit/2bfde85871a4167be1a97d3a71fac4d0e909000a

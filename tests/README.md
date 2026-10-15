# Math Memory checks

Use Node22+ from the repository root. No npm dependencies.

## Numeric bank and lesson coverage

```sh
node tests/data-check.mjs learn.html
```

Recomputes every numeric key independently, checks IDs/options/metadata, and verifies every class/lesson pair has practice. Current baseline:3978 questions,56 lessons,24,129 assertions. This is a numeric check, not teacher/native-language approval or a claim of full curriculum coverage.

## Browser, activities, full rounds and offline

Install Chrome/Chromium, then run:

```sh
node tests/run-browser-check.mjs .
```

Set `CHROME_BIN` if the executable is not at a common Linux location. The runner uses a temporary isolated profile, a local static server and the Chrome debugging protocol. It removes that profile on exit. It never opens a personal browser profile. No sign-in or account is needed. It uses `--no-sandbox` only for container compatibility; run it against this trusted local app in an isolated test environment, not arbitrary sites.

`RESULT_DIR` changes the output folder (default `.test-output`). JSON results and PNG screenshots are saved there. `LIVE` can select a deployed app instead of the local URL, still in an isolated profile. The offline checks seed only test progress in that isolated profile. They never change a student's existing data.

Current verified checks:
- 2340 core: five viewport widths (320/375/390/430/1280), English/Telugu, every class/lesson, all modes at three difficulties, language continuation and save/reload.
- 173 data/reasoning activities: grouped-data edge cases, graph scale/controls, congruence, identities, heights, tangents and bilingual topic names.
- 201 foundational activities: equal shares, conversions, clock-hand coordinates, pictograph keys, change/shortfall and integer-line endpoints.
- 392 full-round/controls: all16 modes at three difficulties, actual matching-pair completion, results/review/replay, empty/wrong/hint/repeated-submit paths, valid/invalid backup restore, quota failure and emulated touch.
- 20 offline: full bank, old learning save/original score compatibility, all14 visual activities, answer/save/reload.

3343 browser assertions total, plus the independent numeric checker. Counts are release-specific; extend these tests when adding activities. The current expected bank/lesson counts and worker cache version in the tests intentionally pin this release and should be updated with a verified bank/cache change.

The test scripts use the app's local public functions to inspect state, alongside button clicks and one emulated touch. They do not establish physical Android launcher behavior, audio quality on real speakers, full accessibility conformance, exam equivalence, native Telugu review or teacher approval. Inspect screenshots as well as the JSON result. A passing exit code is not a visual review.

Beta0.8 adds207 Test room workflow checks and7 keyboard/automatic-timeout/storage/offline checks. The runner includes browser-mock.cjs and browser-mock-extra.cjs. The bank/lesson counts remain3978/56;worker cache is svmm-shell-v12-test-room-print-layout.

Three PDF-print checks verify generation and folded-review restoration. A sample Telugu report was rendered and all three pages inspected;beforeprint opens explanations and afterprint restores the on-screen folds.

Beta0.9:browser-algebra.cjs adds221 equation/grid/exponent/AP assertions,includingClass9 nth-term-only behavior. Full suite3568 assertions,with24 offline checks. Numeric data checker24129 assertions. Counts are test evidence,not curriculum-completion proof.

Beta0.10:4082 browser assertions including421 primary measurement checks and27 offline checks.59 lessons,4140 questions.25113 independent numeric assertions. Original3978 bank objects remain exact. Browser fixtures now expect worker v14-primary-measures.

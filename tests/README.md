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

Beta0.11:5425 browser assertions,including1341 fraction/proof geometry checks and29 offline checks.4140 bank items/59 lessons unchanged;25113 numeric assertions.

Beta0.12:6778 browser assertions,including1351 parallel/rotation checks and31 offline checks.4140 bank objects/59 lessons unchanged;25113 numeric assertions.

Beta0.13:7900 browser assertions,including1121 distributive-area/coordinate checks and32 offline checks.4140 prior bank objects/59 lessons unchanged;25113 numeric assertions.

Beta0.14:7982 browser assertions including82 bounded accessibility checks and32 offline checks. Contrast scan skips gradients/translucency and does not certify WCAG or real screen-reader output.4140 bank objects/59 lessons unchanged;25113 numeric assertions.

Beta0.15:9956 browser assertions including1972 primary-number model checks and34 offline checks. All 100 standard 0–99 standard models,all 21 target 0–20 frame counts,and representative repeated exchange states checked in both languages across five widths.25113 numeric checks unchanged;4140 old bank objects exact. Physical phone/native review not certified.

Beta0.16:12528 browser assertions,including2571 linear-pair and35 offline assertions. Independent point/line/classification/fraction checks across64ordered line pairs,both languages/five widths.25113 numeric assertions;4140 bank objects exact. Full physical/curriculum certification remains open.

Beta0.17:16081browser assertions,including3552prime-model and36offline checks. Every1–100classification/pairs/decomposition,intermediate sieve states and representative rectangle geometry independently tested in both languages/five widths.25113numeric checks;4140bankobjects exact. Not a full curriculum/device certification.

Beta0.18:17424browser assertions,1342common-ground and37offline;25113numeric. Independent400ordered1–20GCD/LCM/extreme timeline/feedback tests. Old4140bankexact. Not full board/phone certification.

Beta0.19:18289browser assertions,864decimal and38offline;25113numeric. All101shadings,201sumstrings,selectedcarrycases/bothlanguages5widths. Old4140bankexact. Full certification incomplete.

Beta 0.20: browser-subtraction.cjs adds 918 assertions and checks arithmetic/regrouping invariants over all 10201 ordered pairs. Full suite: 19208 browser assertions, 25113 numeric assertions, 39 offline checks. Original 4140 bank objects unchanged, 38 visual activities. Fixed a missing local source-document fixture before the full successful rerun. Actual 320px Telugu take-away/borrowing pixels inspected.

Beta 0.21: browser-expression.cjs adds 869 assertions and checks all 3993 model combinations with independent repeated-group/addition calculations. Full 20078 browser, 25113 numeric, 40 offline; zero exceptions. Previous 10201 subtraction-pair invariants still checked. Class 7+ gate, two languages/five widths, counts/scale, answer paths, labels/reflow and no store mutation. Actual 320px Telugu pixels inspected.

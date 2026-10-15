# Known issues and limits

- Installed-icon opening failure on one Android device is unresolved. Normal web launch, old-worker takeover and scoped offline launch work in browser tests. Manifest id, start URL and scope are unchanged.
- A broad class/topic bank is not a full official syllabus. Proofs, constructions, all textbook activities and exact board-by-board chapter progression still need work.
- General exam profiles do not guarantee the official pattern or a complete exam. No item is claimed to be an official question.
- Legacy bank contains repeated question templates across IDs. Existing IDs are retained for saved mistakes; newer practice adds variety, and the picker avoids repeating identical wording within a round where alternatives exist.
- Native teacher review of Telugu wording remains pending.
- Progress is device-local. Browser/site data deletion removes it. Export a backup before any device-level repair.
- Physical Android touch, WebAPK launch and install registration cannot be established from desktop/mobile-emulation tests.
- External source pages require internet. Learning and games are intended to work offline after a successful shell cache install.

- Test room tests are original class-topic samples,not curriculum-complete official papers. Fixed counts/times are app practice settings,not a board-pattern claim.
- Test room retains one draft/latest result on the device. It has a wall-clock timer that continues hidden/closed. Storage failure is shown;lost browser storage cannot be recovered without a separate backup.
- Scoring is tested for repeat submit and reload idempotence. Concurrent multi-tab edits/races are not certified.
- The government-hosted2027–28 NVS prospectus's arithmetic heading says12 topics but lists9. Full current entrance scope needs a primary-source cross-check;only the arithmetic subsection timing is quoted.

- Accessibility review is bounded,not WCAG conformance certification. Full screen-reader flows,live-region verbosity,gradient contrast,all zoom/context combinations and physical Android assistive technology still need review.
- HTML size454700 bytes at0.19;compressed network transfer not measured. No measured low-end-phone performance or guaranteed network-transfer claim.

- Beta0.15 primary models cover0–20 ten-frames and0–99 tens/ones only. They do not establish larger-place-value,full primary syllabus or native Telugu/teacher certification. Source primary PDFs fetched are Reprint2025–26.

- Beta0.16 linear graph covers8selected lines,not arbitrary coefficients or complete modelling/substitution/elimination chapter. Visible square is−5..5;off-window crossing warning included.

- Beta0.17factor/sieve model limited1–100;thin rectangle cells shrink to fit and are not touch targets. Full divisibility/co-prime/contextual chapter coverage remains incomplete. Telugu terminology still needs native teacher review.

- Beta0.18schedule model assumes common start0and exact positive integer periods1–20. Not arbitrary real scheduling. Timeline truncates60and warns about later crossings. HCF×LCMidentity is for two positive integers only.

- Beta0.19decimal model covers only0–1hundredths per input and0–2sum. Full subtraction/multiplication/division/thousandths/rounding/context and precise board placement remain open.

- Beta 0.20: HTML is 463120 UTF-8 bytes; physical low-end-phone performance remains unknown. Subtraction uses A/B in 0–1 and supports A≥B only. A<B is explicitly guarded, never silently replaced by an absolute difference. Full signed decimal operations/contexts remain partial. No save, schema, index or identity change.

- Beta 0.21: HTML 474563 bytes; low-end physical performance remains unknown. Expression lab covers three fixed families with whole inputs 0–10; it is not an arbitrary calculator or complete operations chapter. Context prices are invented, not live prices or payments. Class 6 remains unchanged.

## HIGH: confirmed stale-tab progress overwrite, 15 October 2026
Status: OPEN, reproduced in an isolated local browser profile using the current 0.21 source. Path: learn.html, save()/record(). Two tabs load zero progress; each answers one question correctly. Stored result is 1 attempt/1 correct, not 2/2. A stale state overwrites the other tab's newer state. No actual user data was read or changed.
Recommended next fix: prevent stale writes without deleting data or changing the existing progress format; cover ordinary rounds, test-room scoring/drafts, preferences, backup restore and storage failure. No multi-tab reliability claim until those checks pass. The passing main suite did not previously cover this scenario.


## Learning beta0.22 - selected large-number teaching,15October2026
Status: locally implemented and tested; live verification follows publication. Full master scope remains IN PROGRESS.
Path: learn.html, existing place-value lesson; availability extends fromClasses2–6 toClasses2–10. OnlyClass7+ gets the new large-number model and matching rendered lesson text. Younger-class lessons and models remain unchanged.
Added: Indian/international comma grouping of the same integer, lakh/crore/million/billion equivalences, all10 decimal places, digit×place contribution, expanded sum, zero-place explanation, original example cycle, English/Telugu and strict whole-number/Telugu-digit self-checks. Range0–9,999,999,999. Top Indian groups use crores rather than an added arab label. Not full number-word spelling, rounding, estimation, contextual reasoning or complete chapter coverage. No official exam-paper claim.
Evidence:21,840 local browser assertions, including1,721 new large-number and41 offline checks; zero exceptions.11,030 integer model cases inside one invariant assertion.25,117 numeric bank/lesson checks. Actual320px Telugu grouping/place-card pixels inspected.59 lessons,40 activities,4140 prior bank objects unchanged. Original5-game index and manifest byte exact. No save-schema, backend, dependency or network change. HTML485247UTF-8bytes,worker v26-large-numbers. Physical Android/native Telugu teacher review remain unverified.
The confirmed HIGH multi-tab lost-update bug remains OPEN in this release. A separate save-store migration candidate is NOT included or deployed; approval is still required before that migration. This release does not claim multi-tab persistence safety.

Beta0.22 LIVE verified15October2026,20:07IST:exact485247byteHTML,v26worker,originalindex/manifestand4140priorbankobjectspreserved.21,840livebrowserassertions,41offline,zeroexceptions;25,117numericbank/lessonchecks. Actual320pxTelugugrouping/placecardpixelsinspected. Verifiedcheckpoint:https://github.com/svofficials9999-collab/sv-math-memory/commit/0e23040254911dad1265bb3597d4f8a1803bead3 . FullmasterINPROGRESS;productionmulti-tabbugstillOPEN,journalmigrationnotincluded.


## Learning beta0.23 - selected nearest-multiple teaching
Status: local implementation tested15October2026; live verification follows publication. Full master remains IN PROGRESS.
Path: learn.html,Class7+place-value lesson. Added original number line,lower/upper multiples,midpoint,distances,nearest thousand/ten thousand/lakh/ten lakh/crore,answer checks,exact-multiple and tie explanations. Exact ties round upward by explicit lab convention. Input0–9,999,999,999;rounded output can reach10,000,000,000. English/Telugu,Telugu-digit input;exact identifiers and minimum-capacity needs distinguished from estimates. No actual phone/account/student data requested.
Local evidence:24,044browserassertions,including2,203newroundingand42offlinechecks;zeroexceptions.15,130numericroundingcasesinsideoneinvariantassertion,notseparateUIjourneys.25,117numericbank/lessonchecks. Actual320pxTeluguextreme/tielineandfeedbackpixelsinspected.59lessons41visualactivities4140exactpriorbankobjects. Originalindex/manifest/savesunchanged,nosavemigration/backend/dependency/networkchange. Fullrounding/estimationcontexts,decimalrounding,significantfigures,nativeTeluguteacherandphysicalAndroidremainincompleteorunverified.
Productionmulti-tabbugstillHIGHOPEN;separatelytestedjournalmigrationisnotincludedandremainsundeployedpendingownerapproval.

Beta0.23 LIVE verified15October2026,20:18IST:exact494161byteHTML,v27worker,4140priorbankobjectsandoriginalindex/manifest/savespreserved.24,044livebrowserassertions,42offline,zeroexceptions;25,117numericchecks,15,130additionalroundingmodelcasesinsideoneinvariantassertion. Actual320pxTeluguextremeandtienumber-linepixelsinspected. Verifiedcheckpoint:https://github.com/svofficials9999-collab/sv-math-memory/commit/082009df138a701a41d19863469bedf2b9c3efe8 . FullmasterstillINPROGRESS;productionmulti-tabbugHIGHOPEN,separatejournalmigrationundeployed.


## Learning beta 0.24 - integer products with zero pairs
Status: implemented, locally tested and verified live October 15, 2026. Full master IN PROGRESS.

The existing Class 7+ integer lesson now has a two-factor product model for factors from -6 to 6. A positive first factor places groups; a negative first factor removes groups after adding zero pairs. The model uses sign and shape labels, before/action views, crossed removed tokens, remaining counts, an answer check, Telugu digits and Unicode minus input, and a pattern through zero. Class 6 and its existing addition/subtraction model are unchanged. Exploring this activity does not grant rewards or change progress.

Local results: 27,332 browser assertions, including 3,287 integer-product assertions and 43 offline assertions; zero exceptions. All 169 product combinations checked. 25,117 numeric bank/lesson checks passed. Actual 320px Telugu screenshots inspected: 36 zero pairs before removal, the 36 negative-token removals leaving 36 positive tokens, and pattern rows.

HTML: 503606 UTF-8 bytes. Footer 0.24. Worker: v28-integer-products. 42 teaching activities, 59 bilingual lessons, 4140 exact prior bank objects. Original index, manifest identity and saved-data format unchanged. No new backend, dependency or authoritative save store.

Still partial: integer division, zero-divisor rules, all properties, multi-factor expressions and full chapter contexts. Native Telugu teacher review and physical Android verification are not done. The confirmed HIGH production multi-tab lost-update bug remains OPEN. The separate journal migration is not included and still requires owner approval.

Beta 0.24 LIVE verified October 15, 2026, 20:26 IST: exact 503606-byte HTML and v28-integer-products worker served by Pages. All 27,332 browser assertions passed, including 43 offline and 3,287 new integer-product assertions; zero exceptions. 25,117 numeric bank/lesson checks passed. Actual 320px Telugu zero-pair, removal and pattern screenshots inspected. All 4140 prior bank objects and original index/manifest identity/save format preserved. Verified checkpoint: https://github.com/svofficials9999-collab/sv-math-memory/commit/ccc4111e4caac18b1fb6a108fa70f61c431352ff . Full master remains IN PROGRESS; HIGH multi-tab lost-update bug remains OPEN; separate journal migration is not deployed.

The first live attempt ran against the previous worker while Pages was publishing and failed the expected new-cache readiness check. An exact HTML/worker readback followed by a clean full rerun above supersedes it. No test failure was suppressed.


## Learning beta 0.25 - division as a missing factor
Status: locally implemented and tested October 15, 2026; live verification follows publication. Full master IN PROGRESS.

The existing Class 7+ integer lesson adds n ÷ d as d × q = n, with n from -36 to 36 and d from -6 to 6. Exact reduced fractions show that a quotient of integers need not be an integer. Nonzero divided by zero has no solution; zero divided by zero has many solutions to the multiplication equation, so neither has a defined unique quotient. The answer checker accepts equivalent fractions, Telugu digits and Unicode minus and verifies by exact multiplication. Class 6 and all previous activities remain unchanged. Exploration gives no XP and changes no saved progress.

Local results: 37,308 browser assertions, including 9,975 new division assertions and 44 offline assertions; zero exceptions. All 949 model pairs checked. 25,117 numeric bank/lesson checks passed. Actual 320px Telugu fractions, feedback, zero/zero and nonzero/zero screenshots inspected. HTML 509996 UTF-8 bytes, footer 0.25, worker v29-integer-division. 43 teaching activities, 59 bilingual lessons and all 4140 prior bank objects preserved. No new dependency, backend, save format or authoritative save store.

Still partial: all integer properties, multi-factor expressions and full chapter contexts. Native Telugu teacher review, physical Android and complete board-specific coverage remain unverified. The HIGH production multi-tab lost-update bug is still OPEN. The separately tested journal migration is NOT included and remains undeployed pending owner approval.

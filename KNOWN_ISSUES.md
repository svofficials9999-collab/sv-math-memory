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

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
Status: implemented, locally tested and verified live October 15, 2026. Full master IN PROGRESS.

The existing Class 7+ integer lesson adds n ÷ d as d × q = n, with n from -36 to 36 and d from -6 to 6. Exact reduced fractions show that a quotient of integers need not be an integer. Nonzero divided by zero has no solution; zero divided by zero has many solutions to the multiplication equation, so neither has a defined unique quotient. The answer checker accepts equivalent fractions, Telugu digits and Unicode minus and verifies by exact multiplication. Class 6 and all previous activities remain unchanged. Exploration gives no XP and changes no saved progress.

Local results: 37,308 browser assertions, including 9,975 new division assertions and 44 offline assertions; zero exceptions. All 949 model pairs checked. 25,117 numeric bank/lesson checks passed. Actual 320px Telugu fractions, feedback, zero/zero and nonzero/zero screenshots inspected. HTML 509996 UTF-8 bytes, footer 0.25, worker v29-integer-division. 43 teaching activities, 59 bilingual lessons and all 4140 prior bank objects preserved. No new dependency, backend, save format or authoritative save store.

Still partial: all integer properties, multi-factor expressions and full chapter contexts. Native Telugu teacher review, physical Android and complete board-specific coverage remain unverified. The HIGH production multi-tab lost-update bug is still OPEN. The separately tested journal migration is NOT included and remains undeployed pending owner approval.

Beta 0.25 LIVE verified October 15, 2026, 20:44 IST: exact 509996-byte HTML and v29-integer-division worker served by Pages. All 37,308 browser assertions passed, including 44 offline and 9,975 new integer-division assertions; zero exceptions. All 949 model pairs and 25,117 numeric bank/lesson checks passed. Actual 320px Telugu fraction, answer/feedback and both zero-divisor cases inspected. All 4140 prior bank objects and original index/manifest identity/save format preserved. Verified checkpoint: https://github.com/svofficials9999-collab/sv-math-memory/commit/4ae82389343956c9b54290d969181e0822d91e23 . Full master remains IN PROGRESS; HIGH multi-tab lost-update bug remains OPEN; journal migration not deployed.

Pages initially still served 0.24 while publication was running. Testing waited for exact new HTML and worker before the successful full live suite. No failed live suite was suppressed.


## Learning beta 0.26 - integer multiplication laws and cancellation
Status: implemented, locally tested and verified live October 15, 2026. Full master IN PROGRESS.

Class 7+ integer teaching adds three factors from -5 to 5. Both associative grouping paths show intermediate products; a separate line swaps factors for commutativity. The distributive paths show a × (b + c) and a × b + a × c. Sign-labelled unit bars show the two terms, with a reversible opposite-pair cancellation view and remaining signed count. Zero is checked before negative-factor parity. An explicit subtraction counterexample warns against moving brackets in every operation. The activity says finite examples illustrate laws and are not a proof for all integers. Strict self-check, Telugu digits and Unicode minus are supported; exploration gives no XP or saved progress.

Local: 70,127 browser assertions, including 32,818 new law assertions and 45 offline assertions; zero exceptions. All 1331 factor triples checked at 320px in both languages; representative triples at 375/390/430/1280. 25,117 numeric bank/lesson checks passed. Actual 320px Telugu grouping, distributive terms and 20 cancelled opposite pairs leaving five negative units inspected. HTML 518571 UTF-8 bytes, footer 0.26, worker v30-integer-laws. 44 teaching activities, 59 bilingual lessons, all 4140 prior bank objects preserved. Original index, manifest and save format unchanged; no dependency, backend or save migration.

Full integer chapter contexts, proof teaching and complete current board coverage remain incomplete. Native Telugu teacher review and physical Android are not done. HIGH multi-tab lost-update bug remains OPEN; separate journal migration is excluded and still awaits owner approval.

Beta 0.26 LIVE verified October 15, 2026, 20:52 IST: exact 518571-byte HTML and v30-integer-laws worker served by Pages. All 70,127 browser assertions passed, including 45 offline and 32,818 new integer-law assertions; zero exceptions. All 1331 triples checked. 25,117 numeric bank/lesson checks passed. Actual 320px Telugu grouping, signed distributive terms, cancellation and remaining negative units inspected. All 4140 prior bank objects and original index/manifest/save format preserved. Verified checkpoint: https://github.com/svofficials9999-collab/sv-math-memory/commit/6e6849d413693a788ac79ca88d58d168b2e7196b . Full master remains IN PROGRESS; HIGH multi-tab lost-update bug remains OPEN; journal migration not deployed.

Pages initially served 0.25 while publication was running. Testing waited for exact new HTML and worker before the full successful live suite.


## Learning beta 0.27 - selected geometry foundations
Status: implemented, locally tested and verified live October 15, 2026. Full master IN PROGRESS.

Existing Class9+ lines-and-angles teaching adds definitions versus accepted assumptions versus theorems, positive equal-length addition/subtraction/double/half illustrations, a concise five-postulate summary, Euclidean parallelism and Playfair's equivalent formulation. A short contradiction proof explains why two distinct straight lines cannot share two distinct points, explicitly using the accepted unique-line property through two distinct points. It does not falsely derive uniqueness from the wording of postulate one alone. A reasoning choice distinguishes that property from a picture or right-angle postulate. Original SVG and bilingual prose, not textbook art or official questions. Exploration changes no earned data.

Local: 72,555 browser assertions, including 2,427 new geometry-foundation and 46 offline assertions; zero exceptions. All 78 length/part pairs across 320/375/390/430/1280 widths and both languages. 25,117 numeric bank/lesson checks passed. Actual 320px Telugu equal-length maximum-size diagram, five postulates and reasoning feedback inspected. First maximum-length diagram labels were too small; fixed to a constant viewBox with larger labels and visually rechecked. HTML 529912 UTF-8 bytes, footer0.27, worker v31-geometry-foundations.45 teaching activities,59 bilingual lessons,4140 prior bank objects unchanged. Original index, manifest and saved-data format unchanged; no backend, dependency or save migration.

Sources and limits: CBSE2026–27 curriculum includes axioms/postulates. Precise common notions/postulates are cross-checked against the older official NCERT Euclid exemplar, not falsely labelled a new textbook chapter. Current2026 GanitaManjari front matter has different chapter names from older catalogue PDFs. Full history, Sulbasutra square construction, all axiom applications, full textbook mapping and board coverage remain incomplete. Native Telugu teacher/physical Android review not done. HIGH multi-tab lost-update bug remains OPEN; journal migration is not included and still awaits owner approval.

Beta 0.27 LIVE verified October 15, 2026, 21:05 IST: exact 529912-byte HTML and v31-geometry-foundations worker served by Pages. All 72,555 browser assertions passed, including 46 offline and 2,427 new geometry-foundation assertions; zero exceptions. All 78 length/part pairs checked across 320/375/390/430/1280 widths in both languages. 25,117 numeric bank/lesson checks passed. Actual 320px Telugu equal-segments diagram, five postulates and contradiction-proof feedback inspected live. All 4140 prior bank objects and original index/manifest/save format preserved. Verified checkpoint: https://github.com/svofficials9999-collab/sv-math-memory/commit/70e7a1d5b65c85e883f4451760920aa903cbd12d . Full master remains IN PROGRESS; HIGH multi-tab lost-update bug remains OPEN; journal migration not deployed.

Testing waited for exact new HTML and worker bytes before the full successful live suite.

## Learning beta 0.28 - perpendicular from centre to a chord
Status: implemented, locally tested and verified live October 15, 2026. Full master IN PROGRESS.

Class 9+ circles teaching adds an original centre-to-chord model: radius r from 1 to 10 and centre distance d from 0 to r on sliders. A circle diagram draws chord AB, the perpendicular foot M and the right-angle marker. Boundary cases are named explicitly: d = 0 gives a diameter with M = O, where OM is a zero-length segment and must not be called a line making a right angle; d = r gives one boundary point, not a chord with two distinct endpoints. The proof panel gives right-angle-hypotenuse-side congruence for AM = MB, Pythagoras AM² = r² − d², and the SSS converse that the midpoint of a non-diameter chord implies perpendicularity. A strict self-check asks for the exact integer AM² with Telugu digit support; displayed decimal lengths are rounded to 3 places while the check stays exact. Original SVG and bilingual prose, not textbook art or official questions. Exploration gives no XP and changes no earned data.

Local: 74,604 browser assertions, including 2,048 new circle-chord and 47 offline assertions; zero exceptions. All 65 radius/distance pairs across 320/375/390/430/1280 widths and both languages. 25,117 numeric bank/lesson checks passed. Actual 320px Telugu chord diagram, congruence proof and exact-square feedback inspected. HTML 538130 UTF-8 bytes, footer 0.28, worker v32-circle-chords. 46 teaching activities, 59 bilingual lessons, 4140 prior bank objects unchanged. Original index, manifest and saved-data format unchanged; no backend, dependency or save migration.

Sources and limits: live current NCERT Class 9 chapter 5 Circles PDF (iemh105.pdf, verified by reading its title and year, not stale catalogue filenames) and CBSE 2026-27 secondary curriculum include the perpendicular from the centre bisecting a chord and its converse. The remaining circle theorems, constructions, applications and complete board coverage remain incomplete. Native Telugu teacher/physical Android review not done. HIGH multi-tab lost-update bug remains OPEN; journal migration is not included and still awaits owner approval.

Beta 0.28 LIVE verified October 15, 2026, 21:22 IST: exact 538130-byte HTML and v32-circle-chords worker served by Pages. All 74,604 browser assertions passed, including 47 offline and 2,048 new circle-chord assertions; zero exceptions. All 65 radius/distance pairs checked across 320/375/390/430/1280 widths in both languages. 25,117 numeric bank/lesson checks passed. Actual 320px Telugu chord diagram, congruence proof and exact-square feedback inspected live. All 4140 prior bank objects and original index/manifest/save format preserved. Verified checkpoint: https://github.com/svofficials9999-collab/sv-math-memory/commit/5531e40a91ece3eab7a5c3dc4412edd4dafe2412 . Full master remains IN PROGRESS; HIGH multi-tab lost-update bug remains OPEN; journal migration not deployed.

Pages initially served 0.27 while publication was running. Testing waited for exact new HTML and worker bytes before the full successful live suite.

## Learning beta 0.29 - equal chords and distance from centre
Status: implemented, locally tested and verified live October 15, 2026. Full master IN PROGRESS.

Class 9+ circles teaching adds a two-chord comparison model on one circle: radius r from 1 to 10 with independent distances of chords AB and PQ from centre O. The diagram draws both chords with perpendicular feet M and N and right-angle markers, including boundary cases d = 0 (diameter, no right-angle claim about a zero-length segment) and d = r (a single point, not a chord). The exact relation (half chord)² = r² − d² drives every comparison: equal distances give equal chords, equal chords sit at equal distances, and the longer of two unequal chords is the one closer to the centre. The proof panel states both directions through the perpendicular-bisector theorem and Pythagoras. A three-choice strict self-check asks which chord is longer, including the equal case. Displayed decimals are rounded to 3 places; comparisons use exact integer squares. Original SVG and bilingual prose, not textbook art or official questions. Exploration gives no XP and changes no earned data.

Local: 77,244 browser assertions, including 2,639 new equal-chord and 48 offline assertions; zero exceptions. All 85 radius/distance-pair cases across 320/375/390/430/1280 widths and both languages. 25,117 numeric bank/lesson checks passed. Actual 320px Telugu two-chord diagram, proof and comparison feedback inspected; a centre/foot label collision found by pixel inspection was fixed by moving each foot label away from the centre and visually rechecked. HTML 546720 UTF-8 bytes, footer 0.29, worker v33-equal-chords. 47 teaching activities, 59 bilingual lessons, 4140 prior bank objects unchanged. Original index, manifest and saved-data format unchanged; no backend, dependency or save migration.

Sources and limits: live current NCERT Class 9 chapter 5 Circles (iemh105.pdf, verified by its own title and year), theorems 6 and 7 with the longer-chord-closer ordering, and CBSE 2026-27 secondary curriculum. Angle-subtended theorems, cyclic quadrilaterals, constructions, applications and complete board coverage remain incomplete. Native Telugu teacher/physical Android review not done. HIGH multi-tab lost-update bug remains OPEN; journal migration is not included and still awaits owner approval.

Beta 0.29 LIVE verified October 15, 2026, 21:54 IST: exact 546720-byte HTML and v33-equal-chords worker served by Pages. All 77,244 browser assertions passed, including 48 offline and 2,639 new equal-chord assertions; zero exceptions. All 85 radius/distance-pair cases checked across 320/375/390/430/1280 widths in both languages. 25,117 numeric bank/lesson checks passed. Actual 320px Telugu two-chord diagram, proof and comparison feedback inspected live. All 4140 prior bank objects and original index/manifest/save format preserved. Verified checkpoint: https://github.com/svofficials9999-collab/sv-math-memory/commit/3f0ab969aa66fe2fe62058ccf457550179f39938 . Full master remains IN PROGRESS; HIGH multi-tab lost-update bug remains OPEN; journal migration not deployed.

Pages initially served 0.28 while publication was running. Testing waited for exact new HTML and worker bytes before the full successful live suite.

## Learning beta 0.30 - chords and angles at the centre
Status: implemented, locally tested and verified live October 15, 2026. Full master IN PROGRESS.

Class 9+ circles teaching adds a central-angle model on one circle: radius r from 1 to 10 with independent distances of chords AB and CD from centre O. The diagram draws both chords with radii to their endpoints and angle arcs at O, including boundary cases d = 0 (diameter, 180°) and d = r (a single point, 0°). The exact relation (half chord)² = r² − d² drives the comparison; the angle itself is shown as θ = 2·atan2(half, d), rounded to 0.1° for display only. Equal chords subtend equal angles at the centre and chords subtending equal angles are equal; between unequal chords the longer one subtends the larger angle. The proof panel gives SSS congruence for equal chords implying equal angles and SAS for the converse. A three-choice strict self-check asks which central angle is larger, including the equal case. Original SVG and bilingual prose, not textbook art or official questions. Exploration gives no XP and changes no earned data.

Local: 79,884 browser assertions, including 2,639 new subtended-angle and 49 offline assertions; zero exceptions. All 85 radius/distance-pair cases across 320/375/390/430/1280 widths and both languages. 25,117 numeric bank/lesson checks passed. Actual 320px Telugu angle diagram, congruence proof and comparison feedback inspected. HTML 556113 UTF-8 bytes, footer 0.30, worker v34-subtended-angles. 48 teaching activities, 59 bilingual lessons, 4140 prior bank objects unchanged. Original index, manifest and saved-data format unchanged; no backend, dependency or save migration.

Sources and limits: live current NCERT Class 9 chapter 5 Circles (iemh105.pdf, verified by its own title and year), theorems 2 and 3, and CBSE 2026-27 secondary curriculum. The unique circle through three non-collinear points, angle-subtended arcs on the circumference, cyclic quadrilaterals, constructions, applications and complete board coverage remain incomplete. Native Telugu teacher/physical Android review not done. HIGH multi-tab lost-update bug remains OPEN; journal migration is not included and still awaits owner approval.

Beta 0.30 LIVE verified October 15, 2026, 22:52 IST: exact 556113-byte HTML and v34-subtended-angles worker served by Pages. All 79,884 browser assertions passed, including 49 offline and 2,639 new subtended-angle assertions; zero exceptions. All 85 radius/distance-pair cases checked across 320/375/390/430/1280 widths in both languages. 25,117 numeric bank/lesson checks passed. Actual 320px Telugu angle diagram, congruence proof and comparison feedback inspected live. All 4140 prior bank objects and original index/manifest/save format preserved. Verified checkpoint: https://github.com/svofficials9999-collab/sv-math-memory/commit/adad494b4e37e813645b4fc9d4075134a747e360 . Full master remains IN PROGRESS; HIGH multi-tab lost-update bug remains OPEN; journal migration not deployed.

Pages initially served 0.29 while publication was running. Testing waited for exact new HTML and worker bytes before the full successful live suite.

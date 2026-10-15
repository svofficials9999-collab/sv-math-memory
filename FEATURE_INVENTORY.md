# Feature inventory

## Implemented, with regression evidence
- Original five memory games retained at index.html.
- 15 learning game loops plus diagnostic at learn.html.
- Class and difficulty choice, hints, explanatory answer review.
- 4140 original numeric practice items, including all 2016 legacy IDs.
- 59 bilingual topic lessons with principle, worked example, common error, sample explanation and topic practice.
- 37 working visual activity guides/labs,including geometry,data,grouped statistics,tangents,clock,equal shares,units,pictographs,money and integer movement. These do not cover full chapters or provide a freehand drawing editor.
- Ten-class lesson trail; four earned-world badges remain.
- XP, earned coins, three trophies, practice mission, streaks, personal bests.
- Rules-based difficulty adjustment and weak-topic revision, not AI.
- Device-local student dashboard, average answer time, accuracy, history and mastery estimates.
- Bright colour default, optional dark palette; English/Telugu toggle.
- Export/restore learning backup; printable round/test reports with answers and explanations.
- Separate Test room:fixed difficulty,10/20/30-question original practice tests,deferred feedback,question map,flags,wall-clock timer,local draft/result resume and idempotent progress update. Not a complete official-paper simulation.
- Optional locally generated music and effects, vibration where supported, reduced motion.
- Scoped PWA worker with bounded saved-shell navigation wait.

## Partial
- Topic coverage is broader than the starter bank, but not full chapter-by-chapter curriculum.
- Game modes share a numeric question loop; boss challenge is a short round, not a rich battle world.
- Telugu teaching is authored, not certified by a native mathematics teacher.
- Avatar choices remain simple preset icons.
- Exam categories are labelled original practice and are not full official exam simulations.

## Not implemented / not verified
- Complete current Telangana/CBSE chapter, proof and construction coverage.
- Full verified SSC, Olympiad and scholarship-specific papers.
- Teacher/native-language content review.
- Physical Android testing and verified resolution of installed-icon failure.
- No cloud account, leaderboard, payments or commercial student profiling.

- Beta0.9 adds equation substitution,coordinate grid,same-base positive exponents and class-gated AP nth-term/sum activities.

- Beta0.10:primary nonstandard equal-unit length,capacity in equal cups and mass-balance comparison,with original feedback loops and unit-count practice.

- Beta0.11:fraction strips/number line/equivalent/common-unit operations,plus a two-arrangement geometric Pythagoras area proof.

- Beta0.12:parallel-line angle-pair controls/reasoning from Class7 and rotational-symmetry matching/order overlays from Class6.

- Beta0.13:like-term distributive area model from Class7;coordinate distance/midpoint from Class9 and positive internal section from Class10.

- Beta0.14:bilingual keyboard bypass link,44px documentation links/summary hit areas,current release footer. Bounded keyboard/name/solid-background contrast/reflow/reduced-motion tests,not full accessibility certification.

- Beta0.15:33 visual activities. Number-recognition two ten-frames0–20;place-value ten-rods/unit exchange0–99.59 lessons/4140 bank items unchanged. These are exploration models,no extra score or save changes.

- Beta0.16:Class9+ linear-equation pair graph,8line choices/64ordered combinations,exact/fraction reasoning and substitution;34 activities total. Earlier equation model kept.

- Beta0.17:factor rectangles,prime/composite/neither and prime decomposition1–100,stepwise sieve;35activities total.59lessons4140items unchanged.

- Beta0.18:Class7+LCMbell timeline andHCF/LCMprime-count reasoning,36activities total. Intervals1–20,positive integers,same start only.59lessons4140items unchanged.

- Beta0.19:decimal equal-whole hundredths grids,shared number line,comparison/addition/carry;37activities59lessons4140items.

- Beta 0.20: decimal take-away, explicit negative-result limit, swap, crossed removals, column regrouping through zero and addition check. 38 visual activities, 59 lessons, 4140 numeric items.

- Beta 0.21: Class 7+ expression meaning with loose counters/equal groups, bracket grouping, first-step check and pretend two-cost change. 39 visual activities, 59 lessons, 4140 numeric items.


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

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

# Per-question learning-objective and verification metadata
Date: 17 October 2026. Status: IMPLEMENTED - Phase 1+2. On 17 October 2026 the owner was asked the three open questions below and delegated the decision ("you decide"); the decisions recorded here were announced to the owner the same day without objection. Phase 3 UI surfacing NOT done: metadata stays internal. Bank blob, lessons, index.html games (incl. sound module), manifest identity and save format remain byte-preserved.

## Implementation record, 17 October 2026
- bank-metadata.json committed (version 1): 4,140/4,140 items; vs enum backfilled 1:1 from the four existing verification strings, nothing upgraded; vAt 2026-10-17; alignRegistry embedded (25 codes).
- Alignment backfill in the owner's priority order: Class 6 (180 items, ncert6.ch1-ch10, Ganita Prakash reprint 2026-27) and Class 10 (360 items, cbse10.ch1-ch15, CBSE Secondary 2026-27 code 041/241). Topics not named in a verified CURRICULUM_COVERAGE.md row carry no align code.
- Loader: learn.html lazily fetches bank-metadata.json after the bank decode (loadBankMeta); feature-detected, failure-silent, no UI dependency, no look or feature change.
- sw.js unchanged: the sidecar is NOT precached; the existing network-first/cache-fallback fetch handler covers it.
- tests/metadata-check.mjs added (PASS: 13,509 checks); tests/data-check.mjs still PASS (25,117 checks); bank blob verified byte-identical after the loader patch.
- Remaining: alignment backfill for classes 1-5 and 7-9 (future pass); Phase 3 UI surfacing stays out per the owner's decision.

## What already exists (verified by reading the live bank, 17 October 2026)
The 4,140-object bank is embedded in learn.html as base64+gzip JSON. Every object already carries:
- id (stable, unique across all 4,140; pattern like `c1-addition-1`)
- classLevel, topic, difficulty, question/questionTe, answer, explanation/explanationTe, options
- learningObjective + learningObjectiveTe (present on ALL 4,140)
- verification (present on ALL 4,140, but free-text with exactly 4 variants: "original; numeric key checked; curriculum coverage incomplete" (2016), "original; independent numeric key check" (1746), "original; numeric key checked independently" (216), "original; independent counting check" (162))
- source ("CURRICULUM_SOURCES.md" on all), legacy (on 2,016)

So per-question learning objectives and a basic verification claim ALREADY EXIST. Rebuilding them would duplicate what is live. What is missing is structure, alignment and auditability.

## Remaining gaps this proposal addresses
1. verification is free-text: not machine-filterable, no date, no evidence pointer, 4 near-duplicate phrasings.
2. No per-question curriculum alignment: which NCERT 2026-27 / CBSE 2026-27 chapter (if any) each objective serves. CURRICULUM_COVERAGE.md maps topics, not questions.
3. No audit trail for future re-checks.

## Proposed shape: sidecar map, bank blob byte-untouched
A new file `bank-metadata.json` (served gzipped by Pages; loaded lazily by the app AFTER the bank, exactly like the bank's own fetch+DecompressionStream path). Shape:

{
  "version": 1,
  "generated": "2026-10-17",
  "items": {
    "c1-addition-1": {
      "vs": "original-checked",            // enum, see below
      "vAt": "2026-10-17",                  // last verification date
      "align": ["ncert6.ch3"],              // optional curriculum codes; omit when unverified
      "note": "optional short audit note"
    }
  }
}

- vs enum (initial): "original-checked", "original-checked-independent", "counting-checked", "needs-review". Initial backfill is a deterministic 1:1 mapping from the existing four free-text strings; nothing is silently upgraded.
- align codes come only from CURRICULUM_COVERAGE.md rows backed by primary sources (verified 17 Oct 2026: NCERT 6/7 2026-27 editions, CBSE 9/10 2026-27). No Telangana codes until SCERT publishes a verifiable current syllabus.

## Safety rules (standing)
- Bank blob, lessons, index.html games (incl. sound module), manifest identity and save format: byte-preserved. The sidecar is additive; objects are not edited.
- App MUST work fully if the sidecar is absent or fails to load (feature-detect; metadata is informational only in phase 1, no UI dependency).
- No save-schema change, no backend, no new dependency, free tools only, zero manual steps for the owner.
- SW: do NOT precache the sidecar; fetch network-first with cache fallback (same pattern as other content JSON).
- Journal/save-store migration remains excluded and undeployed pending the owner's separate approval.

## Integrity test additions (when implemented)
- metadata item ids are an exact subset of live bank ids (fail on any unknown id);
- bank object count stays 4,140 and the bank blob hash stays pinned (existing byte-preservation tests keep passing);
- vs values are within the enum; align codes exist in a registry derived from CURRICULUM_COVERAGE.md.

## Phasing
- Phase 1 (this doc + registry only): doc + empty/derived sidecar committed; no app load yet.
- Phase 2 (after owner OK): lazy loader + integrity tests; verification enum backfill from the 4 existing strings.
- Phase 3 (future): optional UI surfacing (e.g. objective line under a question) and per-question alignment backfill, class by class.

## Owner decisions, 17 October 2026
1. Phase 1/2 approved as scoped (sidecar + optional load, bank blob untouched).
2. No UI surfacing; metadata stays internal.
3. Alignment backfill order: Class 6 and Class 10 first (done); remaining classes in a future pass.

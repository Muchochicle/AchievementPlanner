# Phase 33 — Pre-Implementation Audit & Proposal

**Status: READ-ONLY. No application source code was modified to produce this document. Nothing has been staged, committed, pushed, restored, or deleted.**

---

## 1. Repository / HEAD status

- **HEAD:** `3864f6f0ab5634f6670f56dfeb67d50546195b5f` — "security: harden Steam authentication and session handling" (Phases 31+32, committed as one).
- **Branch:** `main`, one commit ahead of `origin/main` (not yet pushed — confirmed via `git log origin/main..HEAD`).
- **Working tree:** clean except the four files you intentionally deleted earlier (`PHASE_29_AUDIT.md`, `PHASE_30_AUDIT.md`, `Phase_29_Implementation_Report.md`, `Phase_30_Implementation_Report.md`) — left untouched, as always.
- `git show --stat HEAD` re-confirmed the commit contains exactly the 8 files from the Phase 32 implementation report — no discrepancy.

## 2. Method

Rather than re-deriving the entire architecture from scratch (already covered exhaustively across 32 prior phases), this audit focused fresh investigation on: (a) re-verifying nothing regressed since the last commit, and (b) specifically hunting for genuinely new findings in areas not yet deeply scrutinized, since backend security (Phases 28, 31, 32) and frontend consistency/accessibility/dead-code (Phases 26-30) have both already received extensive, repeated attention.

New checks performed this session:
- Re-read `backend/utils/cache.js` and `backend/utils/plannerCatalog.js` with a security lens (unbounded growth, path-traversal risk via user-controlled `slug`/`appid` values).
- Confirmed `getPlannerData(slug)`'s lookup is a safe in-memory object-property access against a catalog built entirely from `fs.readdirSync()`'s own filenames — the client-supplied `slug` never touches a filesystem path directly. **No path-traversal risk found.**
- Confirmed `cache.js`'s `Map`-based store has no proactive eviction (only lazy, on-read) and no size cap — a theoretical unbounded-growth concern, but the realistic key space (bounded by distinct Steam IDs × distinct appids ever viewed) is tiny for this app's actual usage. **Not a meaningful finding on its own.**
- Re-confirmed (repo-wide search) that zero automated test infrastructure exists anywhere in this project — no test files, no test framework dependency, no `"test"` script.
- Checked the installed Node version: **v24.18.1**, which fully supports Node's **built-in** `node:test` module (stable since Node 20, available since 18) — meaning a test suite could be introduced with **zero new dependencies**, which changes the calculus from when this was first raised in the Phase 32 audit (where it was set aside partly over dependency-addition concerns).

## 3. Findings

No new defect was found. This is itself worth stating plainly: after three consecutive security-focused phases (28, 31, 32) all now committed and stable, a fresh adversarial sweep of the backend's remaining surface area (caching, catalog lookup, route parameter handling) turned up nothing new to fix. The codebase is in solid shape.

The one standing, previously-identified, and still entirely valid gap is the complete absence of automated tests — first raised (and deliberately deferred) in the Phase 32 audit.

## 4. Candidate comparison

**Candidate A — Backend test infrastructure using Node's built-in `node:test` runner, covering the security-critical logic from Phases 28/31/32.**
This is the same gap identified in Phase 32's audit, but the case for it is now considerably stronger: (1) it requires zero new dependencies (Node's native test runner), directly resolving the concern that previously kept it out of scope; (2) the highest-value, highest-risk code to protect — the OpenID `state` generation/validation logic, the startup env-var validation, and the `safeParseJSON` storage guard — was *all* written across the last three phases and has *zero* regression protection beyond manual curl/browser testing performed once, in the moment; (3) scope is naturally bounded to pure, dependency-light functions that don't require a running server or real Steam credentials to test meaningfully (e.g., the state-comparison logic, the required-env-var filter, `safeParseJSON`'s fallback behavior). This is genuinely coherent — a single "add a regression safety net for what we just hardened" theme, not a sprawling "add tests for everything."

**Candidate B — Frontend product decisions (Popular Games curation; Guides/Roadmap/About navigation).**
Both still open, both still real, but both are content/product judgment calls requiring your direction on *what* the right behavior should be, not an engineering audit finding with one correct technical answer. Not appropriate to scope unilaterally.

**Candidate C — Minor remaining CSS/design-token consistency mop-up** (e.g., `navbar.css`'s standalone background shade, `player-widget.css`'s independent progress-bar variant).
Both were already explicitly re-assessed in the Phase 29/30/31 audits and judged to be legitimate, deliberate contextual differences rather than defects. Nothing new surfaced this session to change that assessment. Too thin to justify a phase on its own.

**Candidate D — Cache eviction / memory bounding in `backend/utils/cache.js`.**
Real in principle, but the realistic risk for this app's actual scale is negligible (Section 3). Fixing it "properly" (an LRU cap or periodic sweep) would be speculative engineering for a problem that doesn't currently exist in practice — exactly the kind of change the project has consistently avoided pre-emptively making.

## 5. Recommendation: Candidate A

### Why this should be Phase 33
It is the only candidate that is both a genuine, previously-identified gap *and* newly strengthened by a concrete fact (zero-dependency built-in test runner) discovered this session. It directly protects the investment made in the three most recent, most security-sensitive phases.

### Proposed exact scope
Introduce `backend/**/*.test.js` files (co-located or under a `backend/test/` directory — to be decided with you) using Node's built-in `node:test` + `node:assert`, and add a `"test": "node --test"` script to `backend/package.json`. Initial coverage, in priority order:
1. The OpenID state generation/comparison logic (extracted as pure, directly-testable functions if not already shaped that way — this may require a small, clearly-flagged refactor to make the logic unit-testable without a live Express request/response, which would need your explicit approval since it touches `steamController.js` again).
2. `server.js`'s required-env-var validation filter logic.
3. `safeParseJSON`'s fallback behavior for missing/malformed/empty input.
4. `levelSystem.js`/`titleSystem.js` (pure, already-isolated functions — easy, high-value, zero risk).

### Explicitly out of scope
Any frontend file; any new test dependency (Jest, Vitest, Mocha, etc.); end-to-end/browser-based tests; testing anything requiring real Steam credentials; CI/GitHub Actions setup; the two frontend product decisions.

### Expected risk
Very low for the pure-function tests (items 2-4 above — no source file needs to change, only new test files added). Item 1 carries slightly more risk since it may require minor restructuring of `steamController.js` to make the state logic testable in isolation — this would be flagged and require your explicit sign-off before touching that file again, separate from the rest.

### Acceptance criteria
`npm test` (or equivalent) runs and passes with no new dependency installed; existing backend behavior is provably unchanged (regression pass on the four pages plus the same curl-based state tests from Phase 32); test files clearly separated from application logic.

## 6. Decision needed from you before implementation

Whether to include item 1 (state logic) given it may require a small refactor of already-hardened, already-tested `steamController.js` code, or to scope Phase 33 to items 2-4 only (zero source-file changes, purely additive test files) and treat item 1 as a separate, later decision once you've seen the pattern established by the simpler cases first.

I have not implemented anything. Waiting for your review and scope decision.

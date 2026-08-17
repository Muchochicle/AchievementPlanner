# Phase 32 — Pre-Implementation Audit & Proposal

**Status: READ-ONLY. No application source code was modified to produce this document. Nothing has been staged, committed, pushed, restored, or deleted.**

`backend/.env` was never opened or inspected. No secret, key, or credential value appears anywhere in this document.

---

## 1. Current git HEAD and working-tree state

Verified directly, not assumed:

- **HEAD:** `2da84a7101fa0b090f34e21fe6b21a3ddd686d50` — still Phase 30's commit. **Phase 31 has not actually been committed yet**, despite being reviewed and approved — its changes are still sitting uncommitted in the working tree. This audit deliberately treats the *working tree* (which includes Phase 31's hardening) as "the current repository," since that's what's actually on disk, while accurately noting HEAD itself hasn't advanced.
- **Branch:** `main`, up to date with `origin/main`.
- **Working tree right now:**
  ```
  deleted:    PHASE_29_AUDIT.md
  deleted:    PHASE_30_AUDIT.md
  deleted:    Phase_29_Implementation_Report.md
  deleted:    Phase_30_Implementation_Report.md
  modified:   backend/controllers/steamController.js
  modified:   backend/package-lock.json
  modified:   backend/package.json
  modified:   backend/server.js
  untracked:  backend/.env.example
  ```
  Per your standing instruction, the four deletions are treated as your own intentional cleanup and were not restored or inspected further. `PHASE_31_AUDIT.md` and `Phase_31_Implementation_Report.md` no longer appear at all (also deleted by you, consistent with "phase reports are temporary").

## 2. Architecture and responsibilities (frontend/backend)

Unchanged in shape from every prior audit, re-confirmed this session: vanilla ES-module frontend (no build step, no framework) with four HTML entry pages, one `src/js/*.js` per page, component functions under `src/components/`, one CSS import chain. Backend is Express 5, layered `server.js` → `routes/` → `controllers/`/inline route logic → `services/` (`steamApi.js`, `steamAuth.js`) → `utils/` (cache, planner catalog, mappers). `localStorage` is the sole frontend persistence layer (player/avatar/inventory/planner progress); the backend holds no persistent state of its own beyond the in-memory Steam API response cache and the session store.

## 3. Security posture after Phase 31 (working tree)

Re-verified fresh, not cited from the Phase 31 reports:
- `SESSION_SECRET` is required and validated at startup (`server.js`), with the whitespace-only edge case fixed during Phase 31's final review.
- `login()`/`callback()` in `steamController.js` are fully wrapped in try/catch; confirmed (again, empirically re-testable, not re-tested this session since nothing changed here) that a native `fetch()` failure cannot leak the Steam API key via `error.message`.
- `openid-client` is removed; `npm audit` → 0 vulnerabilities (re-run this session).
- `.gitignore` correctly excludes `.env`/`.env.*` while allowing `.env.example`.
- **Remaining, explicitly-known gap:** the OpenID login flow still has no `state`/nonce tying a callback to the browser session that initiated it — see section 4.

## 4. Authentication / Steam OpenID flow — read in full again this session

`backend/services/steamAuth.js`:
```js
export function buildSteamLoginUrl() {
    const params = new URLSearchParams({
        "openid.ns": "...",
        "openid.mode": "checkid_setup",
        "openid.return_to": process.env.STEAM_RETURN_URL,
        "openid.realm": process.env.STEAM_REALM,
        "openid.identity": "...identifier_select",
        "openid.claimed_id": "...identifier_select"
    });
    return `${STEAM_OPENID_URL}?${params.toString()}`;
}
```
`buildSteamLoginUrl()` takes no arguments and embeds a **fixed** `return_to` URL with no per-request value. `steamController.js#callback()` verifies Steam's response is valid (`validateSteamResponse`) and extracts a Steam ID, but nothing anywhere correlates *this specific callback* to *the specific browser session that started the login*. This is the classic OpenID/OAuth "login CSRF" gap: an attacker who completes their own real Steam login and captures the resulting valid callback URL can get a victim's browser to visit it, and the victim's session becomes authenticated as the attacker's Steam identity. Practical impact for this specific app remains low (the only thing gated behind login is viewing Steam profile/achievement data — being "logged in as the attacker" exposes nothing of the victim's), but it is a real, structural, well-understood class of defect, and it is the one item Phase 31's own audit and implementation report both explicitly named as deferred, dedicated future work.

## 5. API routes, controllers, services

Re-confirmed unchanged: `backend/routes/api.js` (`/profile`) and `backend/routes/games.js` (`/`, `/:slug`) both have correct try/catch → `{success:false, message:error.message}` → 500 handling, matching the pattern Phase 31 brought `steamController.js` in line with. No route was found this session with inconsistent error handling.

## 6. Error handling and HTTP response consistency

Consistent across all three route modules now (Phase 31 closed the one remaining gap). No new inconsistency found.

## 7. Frontend/backend integration points

`src/utils/gameService.js` (`getGamesIndex`/`getGame`) and `src/utils/steam/steamSession.js` (`getSteamSession`) are the only two frontend modules that call the backend directly, both via plain `fetch(..., {credentials:"include"})`, both already wrapped in try/catch by every caller (re-confirmed via `profile.js`, `app.js`, `games.js`, `game.js`, `layout.js`). No contract mismatch found between what the backend now returns and what the frontend expects — Phase 31 changed no response shape.

## 8. Data flow and state management

Unchanged: Steam is the sole source of truth for achievement completion; `localStorage` holds player/avatar/planner state; `safeParseJSON` (Phase 28) guards every localStorage read. Nothing in this session's investigation touched or needed to touch this layer.

## 9. Dependency health

`backend/package.json`: `cors`, `dotenv`, `express`, `express-session` — all still current, no `openid-client` leftover. `npm audit` (re-run this session): **0 vulnerabilities.** No unnecessary dependency found. Frontend has zero dependencies (no `package.json` at the repo root by design).

## 10. Accessibility and frontend usability

A fresh census this session found `aria-label`/`<label>` used in 15 places across components, and ARIA state attributes (`role="progressbar"`, `aria-current`, `aria-pressed`, `aria-hidden`) already in active use in 4 separate components (`nav-links`, `session-planner`, `profile-header`, `avatar-picker`) — the cumulative result of Phases 26-30's piecemeal accessibility fixes. No new interactive element without an accessible name was found this session. **Accessibility does not currently present a strong, coherent, substantial new theme** — what remains is scattered minor polish, not a cohesive phase.

## 11. Dead code, duplicated logic, fragile code, technical debt

No new dead code or duplication found beyond what Phase 30 already resolved. Remaining, all previously documented and still harmless: four empty git-untracked scaffold directories (`achievement-card/`, `guide-card/`, `layout/`, `planner-summary/` — re-confirmed still empty this session), `player-widget.css`'s own compact progress-bar variant (legitimate context, not a defect), two stale `.gitignore` entries referencing long-deleted Phase 27/28 report filenames.

## 12. Existing product gaps visible from the current codebase

Unchanged, still open, both are product/content decisions rather than engineering defects: the homepage "Popular Games" section rendering the full unsorted catalog with no real popularity signal, and the dead-end `Guides`/`Roadmap`/`About` navigation links.

## 13. Regression risk and areas lacking tests

**New finding this session, not previously documented in any prior phase audit: there is zero automated test infrastructure anywhere in this repository.** No test files (`*.test.js`/`*.spec.js`), no test framework dependency, no `"test"` script in `backend/package.json`. Every phase in this project (26 through 31) has been validated entirely through manual browser/curl-based verification during the phase itself, with no regression safety net left behind afterward. This is real and worth naming explicitly, but see section 15 for why it is not this audit's top recommendation.

## 14. Inconsistencies between current implementation and intended architecture

None found. The codebase's stated conventions (Steam-authoritative completion, `localStorage`-only frontend persistence, no framework, small single-responsibility components, `safeParseJSON` for all storage reads, consistent try/catch-based route error handling) are all still being followed consistently by the current working-tree state.

---

## 15. Candidate comparison

Three genuine candidates emerged from this audit; none of the other 11 areas produced anything substantial enough to justify a phase on its own.

**Candidate A — OpenID `state`/nonce login-CSRF hardening.**
Directly continues Phase 31's security thread; explicitly pre-identified as deferred work in both the Phase 31 audit and implementation report, so this is not a newly-invented theme. Scope is small and precisely bounded: two files already touched by Phase 31 (`steamAuth.js`, `steamController.js`), no frontend changes, no new dependency. The fix is well-understood (generate a per-login nonce, store it in the session, echo it through `return_to`, verify on callback before trusting anything else) and — unlike most of Phase 31 — its *rejection path* is fully testable without real Steam credentials, since an invalid/missing state can be checked before any network call to Steam is even made.

**Candidate B — Introduce minimal backend test infrastructure.**
Real, previously-undocumented gap (section 13). But this is a foundational architectural addition (a new devDependency, a test runner, a first-ever test file, establishing a convention that doesn't exist yet), which sits uneasily against this project's own repeatedly-stated preference for small, coherent phases and minimal new dependencies. It's also *broader* than "coherent" in the sense the brief asks for — deciding what to test first (session validation? route error handling? OpenID logic?) is itself a scope decision, not a bounded fix. Better suited as a deliberate, separately-scoped decision than something to default into now.

**Candidate C — Frontend product decisions (Popular Games curation, Guides/Roadmap/About navigation).**
Both real and both still open, but both are content/product judgment calls requiring your direction, not engineering audit findings with a single correct technical answer — not appropriate to unilaterally scope as "Phase 32 engineering work."

## 16. Recommendation: Candidate A — OpenID `state`/nonce login-CSRF hardening

### Why this should be Phase 32
It is the strongest, most concrete, most bounded finding from this audit; it is a direct, already-anticipated continuation of Phase 31 rather than a new direction; and it closes the one security gap Phase 31 deliberately and explicitly left open.

### What concrete problem it solves
Removes the structural possibility of an attacker linking a victim's browser session to the attacker's own Steam identity via a captured, replayed OpenID callback URL.

### Files likely to be involved
- `backend/services/steamAuth.js` — `buildSteamLoginUrl()` gains a `state` parameter, appended to the `return_to` URL.
- `backend/controllers/steamController.js` — `login()` generates a random nonce (Node's built-in `crypto`, no new dependency), stores it in `req.session`, passes it to `buildSteamLoginUrl()`; `callback()` verifies `req.query.state` against `req.session`'s stored value *before* calling Steam's `check_authentication`, rejecting with the same existing 401 shape on mismatch, and clears the stored nonce after a successful check (one-time use).

### Explicitly out of scope
Any frontend file; any other backend route/controller/service; `backend/.env`/`.env.example` (no new required variable — the nonce is generated at runtime, not configured); the Popular Games/navigation product decisions; introducing any test framework (Candidate B); any dependency change; Phase 29/30/31's own files beyond the two named above.

### Expected security/regression risk
Low. Purely additive to the login/callback flow; no other route is touched; the existing "Steam says invalid" 401 path and response shape are reused, not replaced. The main risk to manage carefully is not breaking the legitimate login flow for real users — mitigated by keeping the state check as a single, early, easily-reviewed addition rather than restructuring the surrounding logic.

### How it can be tested realistically
- **Fully testable without real Steam credentials:** hit `/auth/steam/return` with a missing or mismatched `state` query parameter and confirm immediate rejection (this is more testable than anything Phase 31 added, since the check can happen before any network call to Steam).
- **Testable:** confirm `GET /auth/steam/login` now redirects to a Steam URL whose `return_to` contains a `state` value, and that a session cookie is now set on this initial request (a side effect worth validating deliberately, since `saveUninitialized:false` means this is the first point in the flow where a session is created for an anonymous visitor).
- **Not fully testable, same limitation as Phase 31:** a complete real end-to-end Steam login (requires real credentials) — the legitimate-path code will be reviewed line-by-line instead, same as Phase 31's approach.
- Full regression pass on `index.html`, `games.html`, `game.html`, `profile.html` after the change, same as every prior phase.

### Acceptance criteria
1. A callback request with a missing or non-matching `state` is rejected with a 401 and never reaches `validateSteamResponse()` or `getPlayerSummary()`.
2. A legitimate login attempt (state present, matching, and Steam confirms validity) still results in `req.session.user` being set and a redirect to `index.html`, exactly as before.
3. The stored nonce cannot be reused for a second callback after a successful login.
4. No other route, controller, or frontend file is touched.
5. `git diff --check`, `git diff --stat`, and a full four-page regression pass all pass cleanly.

---

## 17. Final summary

- **Exact recommended Phase 32 theme:** OpenID `state`/nonce login-CSRF hardening.
- **Proposed scope:** exactly the two-file change described in section 16.
- **Explicit out-of-scope items:** everything listed in section 16's "out of scope" list.
- **Files likely to change:** `backend/services/steamAuth.js`, `backend/controllers/steamController.js`.
- **Tests planned:** the four items under "how it can be tested realistically" above.
- **Risks:** low, additive-only change; primary risk is to the legitimate login path, mitigated by keeping the change small and reviewed line-by-line.

I have not implemented anything, modified any file, staged, committed, pushed, restored, or deleted anything. Waiting for your review and explicit approval before any code changes begin.

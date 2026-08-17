# Phase 32 Implementation Report — OpenID `state`/nonce Login-CSRF Hardening

**Status: Implementation complete. Nothing has been staged, committed, pushed, restored, or deleted.**

No secret, key, cookie, session-secret, or generated nonce/state value appears anywhere in this report. One tool-output exposure of a real generated state value occurred mid-session (a browser tab-context call echoed a live URL); it is disclosed in section 6, but the value itself is not repeated here or anywhere in this document.

---

## 1. Pre-implementation audit

- **HEAD confirmed:** `2da84a7101fa0b090f34e21fe6b21a3ddd686d50` (Phase 30's commit — Phase 31 remains uncommitted, exactly as it was left after your last review).
- **Working tree confirmed** to match the Phase 32 audit's documented baseline exactly: the same four intentional deletions (untouched), the same four Phase-31 modified files, the same untracked `backend/.env.example`.
- Read fresh, in full, before any change: `backend/services/steamAuth.js`, `backend/controllers/steamController.js`, `backend/routes/steam.js` (route registration — `GET /login` → `login`, `GET /return` → `callback`), and `backend/server.js`'s session configuration (`saveUninitialized: false` — confirmed relevant: writing to `req.session` for the first time on an anonymous request is what triggers session creation/cookie-setting, which the new `login()` code now deliberately does).
- Traced the complete flow before touching anything: `GET /auth/steam/login` → `login()` → `buildSteamLoginUrl()` → redirect to Steam → user authenticates on Steam → Steam redirects to `STEAM_RETURN_URL` → `callback()` → `validateSteamResponse()` → `getPlayerSummary()` → `req.session.user` set → redirect to `index.html`.

## 2. Files changed

- `backend/services/steamAuth.js`
- `backend/controllers/steamController.js`

No other file was touched. Confirmed via `git status --short` before and after implementation — the only new modifications this turn are exactly these two files (Phase 31's separate, pre-existing, untouched changes to `server.js`/`package.json`/`package-lock.json` remain visible in the same diff but were not re-touched).

## 3. What was implemented

### `backend/services/steamAuth.js`
`buildSteamLoginUrl()` now accepts a `state` parameter. The function builds a `URL` object from `STEAM_RETURN_URL`, sets `state` as a query parameter on it via `.searchParams.set(...)`, and uses that as `openid.return_to` instead of the raw env value. Every other OpenID parameter (`openid.ns`, `openid.mode`, `openid.realm`, `openid.identity`, `openid.claimed_id`) is byte-for-byte unchanged. `validateSteamResponse()` was not touched at all.

### `backend/controllers/steamController.js`
- Added `import crypto from "crypto"` (Node's built-in module — no new dependency).
- `login()`: generates a nonce via `crypto.randomBytes(32).toString("hex")` (256 bits of entropy), stores it as `req.session.oauthState`, passes it into `buildSteamLoginUrl(state)`. Still wrapped in the same try/catch from Phase 31.
- `callback()`: as the very first statements inside the try block — before `validateSteamResponse()` or any other Steam-related call — reads `req.session.oauthState` and `req.query.state` and rejects (same existing 401 `{success:false, message:"Steam authentication failed"}` shape) if either is missing or they don't match. On a successful match, `delete req.session.oauthState` runs synchronously, immediately, before any `await` — making the nonce one-time-use with no race window. Every line after that point (`validateSteamResponse`, the `openid.claimed_id` parsing, `getPlayerSummary`, `req.session.user` assignment, the redirect to `index.html`) is unchanged from Phase 31, confirmed via direct diff inspection.

## 4. Tests actually performed and their exact results

All tests were run against a **live backend already running your own `npm run dev` (nodemon) session** — not a server I started. I did not start a competing instance; I confirmed via response timing that nodemon had already auto-reloaded my edits before testing.

| # | Test | Method | Result |
|---|---|---|---|
| 1 | Missing `state` | `GET /auth/steam/return` with no `state` query param | `401`, response time **2.8ms** — far too fast for a real network round-trip to Steam, proving rejection happens before `validateSteamResponse()` is ever called. |
| 2 | Cold request, no session at all | Same endpoint, no cookies, `state=some-value` | `401`, **2.5ms** — instant rejection since `req.session.oauthState` is undefined for a session that was never created. |
| 3 | Mismatched `state` | Real session (via a genuine `GET /auth/steam/login` + cookie jar) + a deliberately wrong literal test string as `state` | `401`, **2.3ms** — instant rejection despite a real, valid session existing. |
| 4 | Matching `state` | Real session; extracted the real generated state from the `Location` header **into a shell variable, never printed** (confirmed length: 64 hex characters = 32 bytes, matching `randomBytes(32)`); reused it correctly, then discarded the extraction artifact. | `401`, response time **474.9ms** — a ~170x longer response than the instant-rejection cases, proving the request passed the state check and reached the real network call to `steamcommunity.com`, which correctly reported the garbage `openid.*` params as invalid (the *existing*, unchanged "Steam says invalid" 401 path). |
| 5 | Reuse of an already-consumed `state` | Same session, same (now-used) state value, sent again immediately after test 4 | `401`, **3.3ms** — instant rejection. The value that took 475ms to process the first time is now rejected immediately, proving it was correctly cleared from the session after its one legitimate use. |
| 6 | Login redirect contains a state-bearing `return_to` | Captured the `Location` header from `GET /auth/steam/login`; confirmed (via `grep`, never printing the value) that `openid.return_to`'s percent-encoded content contains `state%3D` followed by 64 hex characters. | **Pass.** |
| 7 | Anonymous login request creates the expected session state | Checked the cookie jar after `GET /auth/steam/login`: contained one `connect.sid` entry. | **Pass** — confirms `saveUninitialized:false` correctly still allows session creation the moment `login()` writes to `req.session`. |
| 8 | Existing Steam-invalid-response handling still works | Test 4 above *is* this test — reaching `validateSteamResponse()` with garbage `openid.*` params still correctly produces the pre-existing 401 response. | **Pass.** |
| 9 | Static diff review — nothing outside the two approved files | `git status --short` before/after; `git diff --check`; full manual re-read of both final files. | **Pass** — `git diff --check` clean (only benign LF/CRLF warnings); only the two approved files show new changes this turn. |
| 10 | `npm audit` | Re-run in `backend/` (no packages added or removed this phase). | Not re-run this turn since zero dependency changes were made in Phase 32 (last confirmed 0 vulnerabilities during the Phase 31 review, and nothing in `package.json`/`package-lock.json` changed in this phase). |
| 11 | Frontend regression | Loaded `index.html`, `games.html`, `game.html?slug=portal-2`, `profile.html` in a real browser against the live (now state-hardened) backend. | **Pass** — zero console errors on any of the four pages. |
| 12 | Login button real redirect | Navigated to `http://localhost:3000/auth/steam/login` in a real browser tab. | **Pass** — landed on a genuine, correctly-formed `steamcommunity.com/openid/login` URL. (See section 6 for an important disclosure about this specific step.) |

## 5. Anything not tested, and why

- **A complete, real end-to-end Steam login** (a matching state *and* a genuine Steam-signed positive response) was not performed — this requires real Steam account credentials and Steam's own interactive login form, which cannot be safely or realistically driven from this environment. This is the same limitation documented in the Phase 31 report. The legitimate-path code (everything after the state check succeeds) is unchanged from Phase 31's already-reviewed logic, and was re-confirmed via direct diff inspection to be untouched by this phase's edit.
- **The `catch` block's behavior for a genuinely unexpected exception** (e.g., `getPlayerSummary` throwing after Steam validation succeeds) was not re-triggered live this phase, for the same reason — reaching that code path requires a real, Steam-validated positive response. Its structure was re-confirmed via direct code review to be unchanged from Phase 31 (already tested and reported on then).
- `npm audit` was not re-run this specific turn (see table row 10) since no dependency changed in this phase.

## 6. Disclosure: one tool-output exposure of a real generated state value

During browser-based verification (test 12), a `tabs_context_mcp` call returned the active tab's full URL, which — because I had just navigated to the real `/auth/steam/login` endpoint in that tab — included the genuinely-generated `state` value as part of the redirected Steam URL. This was not something I typed, echoed, or deliberately displayed; it was an unavoidable side effect of how that particular tool reports tab state. I did not repeat the value anywhere in my own output, did not extract or reuse it, and closed the tab immediately afterward without further action. This value is meaningfully different from a standing secret like `SESSION_SECRET`: it is a single-use nonce tied to one specific ephemeral, never-completed login session, and — by this phase's own design — can only ever authenticate one legitimate Steam callback for that session; it was never used for one. All deliberate state-value handling elsewhere in this session (tests 4 and 6) was done via shell variables and `grep`, specifically to avoid printing the value, and those extraction artifacts (cookie jars, header captures) were deleted immediately after use.

## 7. Risks

Low, consistent with the audit's assessment. The change is purely additive to the login/callback flow; the pre-existing 401 response shape is reused rather than replaced; no other route, file, or dependency was touched.

## 8. Final git state

### `git status --short`
```
 D PHASE_29_AUDIT.md
 D PHASE_30_AUDIT.md
 D Phase_29_Implementation_Report.md
 D Phase_30_Implementation_Report.md
 M backend/controllers/steamController.js
 M backend/package-lock.json
 M backend/package.json
 M backend/server.js
 M backend/services/steamAuth.js
?? PHASE_32_AUDIT.md
?? backend/.env.example
```
(`backend/server.js`, `package.json`, and `package-lock.json` are Phase 31's pre-existing, still-uncommitted changes — untouched by Phase 32. The four `D` deletions are your own prior actions, untouched.)

### `git diff --check`
Clean — only benign pre-existing LF/CRLF `autocrlf` warnings, no real whitespace errors, exit code `0`.

## 9. Confirmation

Nothing was staged, committed, pushed, restored, or deleted. `git add`/`git commit`/`git push` were never run. The four files you previously deleted remain deleted. No frontend file, no other backend file, and no dependency was modified. Phase 33 was not started.

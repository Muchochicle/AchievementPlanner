import { test } from "node:test";
import assert from "node:assert";

import { CONFIG } from "../src/config.js";

// Pins the *shipped* defaults for the two debug/dev flags that were
// confirmed to actually do something (every other flag in src/config.js
// - DEV_MODE, ENABLE_SANDBOX, ENABLE_FAKE_STEAM, DEBUG_UNLOCK_ALL_FRAMES/
// BADGES, DEBUG_FAST_LEVEL, DEBUG_INFINITE_XP - is read nowhere in the
// codebase and has no effect either way). Both used to ship `true`:
// DEBUG_UNLOCK_ALL_AVATARS force-unlocked every avatar for every visitor
// regardless of real progress, and ENABLE_RESET_BUTTON showed a "Reset
// progress" button to every visitor on every game page. Neither is a
// security issue (both are purely local/cosmetic, never touching the
// server or other users - see avatarManager.test.js/resetProgress.test.js
// for the ownership-gating and reset-scope tests themselves), but both
// defeated the intended product behavior for real visitors. This test
// exists so a future accidental flip back to `true` fails the suite
// instead of silently shipping.
test("CONFIG ships with DEBUG_UNLOCK_ALL_AVATARS disabled by default", () => {

    assert.strictEqual(CONFIG.DEBUG_UNLOCK_ALL_AVATARS, false);

});

test("CONFIG ships with ENABLE_RESET_BUTTON disabled by default", () => {

    assert.strictEqual(CONFIG.ENABLE_RESET_BUTTON, false);

});

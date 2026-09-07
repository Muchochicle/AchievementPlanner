import { getPlayer, savePlayer, resetPlayer } from "../player.js";
import { getInventory, saveInventory, resetInventory } from "../inventory/inventoryStorage.js";
import { getEquippedAvatar, saveEquippedAvatar, resetEquippedAvatar } from "../avatar/avatarStorage.js";
import { resetReconcilerState } from "../statistics/progressionReconciler.js";
import { onPlayerStateChanged } from "./syncBus.js";
import { fetchPlayerProgress, savePlayerProgressRemote, deletePlayerProgressRemote } from "./playerProgressClient.js";

// Whether the current page's viewer is logged in - set once by
// syncPlayerProgressOnLoad(), read by every push triggered via
// notifyPlayerProgressChanged()/the syncBus subscription below. A logged-
// out visitor's progress stays exactly as it was before this feature
// existed: localStorage-only, never sent anywhere.
let syncEnabled = false;

// Set for the duration of applyRemoteState() below, so the savePlayer()/
// saveInventory()/saveEquippedAvatar() calls it makes to write the just-
// pulled server state into localStorage don't each turn around and
// immediately push that identical state straight back to the server via
// the syncBus subscription - three redundant round-trips on every logged-
// in page load otherwise, for data the server already has.
let applyingRemote = false;

// Latched true (never cleared) by deleteAccountProgression() once the
// server row is gone, so the resetPlayer()/resetInventory()/
// resetEquippedAvatar() calls that follow can't fire a syncBus push that
// would immediately re-create the row from local defaults - or, worse,
// push a half-reset state mid-wipe. The page reloads straight after, and a
// fresh module load starts this back at false.
let purging = false;

function collectLocalState() {

    return {

        player: getPlayer(),
        inventory: getInventory(),
        equippedAvatar: getEquippedAvatar()

    };

}

function applyRemoteState(state) {

    if (!state || typeof state !== "object") {

        return;

    }

    applyingRemote = true;

    try {

        if (state.player && typeof state.player === "object") {

            savePlayer(state.player);

        }

        if (state.inventory && typeof state.inventory === "object") {

            saveInventory(state.inventory);

        }

        if (typeof state.equippedAvatar === "string") {

            saveEquippedAvatar(state.equippedAvatar);

        }

    } finally {

        applyingRemote = false;

    }

}

// Best-effort push of the current local state to the server - never
// throws (savePlayerProgressRemote already reports failure as a result
// object, not a rejection), so every caller can fire this without its own
// try/catch. A no-op while logged out.
async function pushLocalState() {

    if (!syncEnabled || applyingRemote || purging) {

        return;

    }

    await savePlayerProgressRemote(collectLocalState());

}

// Subscribed once at module load - every subsequent savePlayer()/
// saveInventory()/saveEquippedAvatar() call anywhere in the app (via
// syncBus's emitPlayerStateChanged()) triggers a push while logged in.
onPlayerStateChanged(() => {

    pushLocalState();

});

// Call once per page load, right after the Steam session is known (see
// src/js/layout.js's loadNavbar). Pulls this account's server-side
// progress and makes it authoritative locally, EXCEPT the very first sync
// for a given account (no server row yet - result.state is null): rather
// than starting that account from a blank slate, whatever is already in
// this browser's localStorage (including progress made before this
// feature existed, or while browsing logged out) is pushed up instead,
// becoming the initial server copy.
//
// Deliberately last-writer-wins on every later load, not merged: the
// server's copy simply overwrites local. A visitor who plays anonymously
// on one device, then logs in on a second device that already has server
// progress, will have the first device's unsynced local play overwritten
// - an accepted tradeoff for this first version (see PHASE_71_AUDIT.md)
// given that today NO progress survives a device change at all.
//
// Never throws - a network failure here just means this page keeps using
// whatever was already in localStorage, exactly like every page did
// before this feature existed.
export async function syncPlayerProgressOnLoad(session) {

    syncEnabled = Boolean(session?.logged);

    if (!syncEnabled) {

        return;

    }

    let result;

    try {

        result = await fetchPlayerProgress();

    } catch (error) {

        console.error("Unable to sync player progress:", error);

        return;

    }

    if (result.status !== "ready") {

        return;

    }

    if (result.state) {

        applyRemoteState(result.state);

    } else {

        await pushLocalState();

    }

}

// Local progression keys wiped alongside the server row by
// deleteAccountProgression() below. resetPlayer/resetInventory/
// resetEquippedAvatar cover the three things the server actually stores;
// the reconcile checkpoint is cleared so the next page load's background
// reconcile runs immediately and rebuilds XP/level/avatar unlocks from the
// user's real Steam history; and the planner-*/session-* sweep matches
// src/dev/resetProgress.js so per-game planner check-off and focus-session
// state reset too. Steam-derived data (the users / user_game_playtime rows,
// the leaderboard) is never touched - only this browser's local copy and
// the one player_progress row.
function clearLocalProgressionKeys() {

    resetPlayer();
    resetInventory();
    resetEquippedAvatar();
    resetReconcilerState();

    let keys = [];

    try {

        for (let i = 0; i < localStorage.length; i++) {

            keys.push(localStorage.key(i));

        }

    } catch {

        keys = [];

    }

    keys.forEach(key => {

        if (key && (key.startsWith("planner-") || key.startsWith("session-"))) {

            try {

                localStorage.removeItem(key);

            } catch {

                // best-effort - a key we can't remove is not worth failing over

            }

        }

    });

}

// Backs the Profile > Settings "delete progression data" control. Deletes
// ONLY this account's stored AchievementPlanner progression - server-side
// (DELETE /api/player/progress: the one player_progress row, nothing else -
// the Steam session, the users/playtime rows and the leaderboard are all
// left intact, so the visitor stays logged in and their Steam-derived
// progression can rebuild) and locally (clearLocalProgressionKeys above).
//
// Order matters: the server row goes first, and local state is only wiped
// on a confirmed-successful delete - a network failure leaves everything
// exactly as it was, and the caller shows an inline error instead of
// reloading. Idempotent: the server treats "no row" as success, so a retry
// after a partial failure is safe. Never throws - returns the same
// {status: "ready"|"error"} shape as the rest of this module.
export async function deleteAccountProgression() {

    const result = await deletePlayerProgressRemote();

    if (result.status !== "ready") {

        return result;

    }

    // Latch BEFORE the resets so their syncBus emissions can't re-push /
    // re-create the row. Deliberately never un-latched: deleteAccount-
    // Progression's one caller reloads the page immediately after this
    // resolves, and a fresh page load re-imports this module with
    // purging = false again.
    purging = true;

    clearLocalProgressionKeys();

    return { status: "ready" };

}

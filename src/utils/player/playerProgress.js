import {

    getPlayer,
    savePlayer,
    unlockBadge

} from "./player.js";

import {

    unlockAvatar

} from "./avatar/avatarUnlocks.js";

import { AVATARS } from "../../data/player/avatars.js";

import {

    XP_PER_ACHIEVEMENT,
    XP_PER_GAME_COMPLETION

} from "./xpValues.js";

// Avatars represent dedication to earning achievements - and ONLY that.
// Every unlock threshold lives on the AVATARS catalog itself
// (requiredAchievements, src/data/player/avatars.js), so this is a plain
// data-driven check with no level/completedGames branches baked in here -
// those used to gate "rookie"/"explorer"/"veteran" and quietly made
// avatars depend on the wrong stats. Safe to call
// as often as needed: unlockAvatar() is itself idempotent (ownsItem guard),
// so re-checking an already-unlocked avatar is a no-op, and a threshold
// once crossed can never be un-crossed by a later, smaller
// completedAchievements read (see reconcileProgressFromProfileStats below
// for why that number itself is monotonic too).
export function checkPlayerUnlocks() {

    const player = getPlayer();

    for (const avatar of Object.values(AVATARS)) {

        if (typeof avatar.requiredAchievements !== "number") {

            continue;

        }

        if (player.completedAchievements >= avatar.requiredAchievements) {

            unlockAvatar(avatar.id);

        }

    }

}

// Badges represent consistency (daily-activity streaks) plus the one
// pre-existing milestone badge this app already shipped (100%-completing a
// game) - kept rather than deleted since it's a legitimate, already-tested
// unlock, not something this fix should blindly remove. Exported so
// gameCompletion.js's own direct completion trigger and this aggregate
// check both refer to the exact same name instead of two separately-typed
// string literals that could drift.
export const PERFECTIONIST_BADGE = "Perfectionist";

// Daily-activity streak tiers (see streak/streakManager.js for how
// currentStreak/longestStreak are actually computed). Gated on
// longestStreak, not currentStreak: once a streak has ever reached a
// tier, breaking the streak later must never take the badge back (see
// player.js's unlockBadge - additive/idempotent, but this still has to
// hand it the right condition to check in the first place).
const STREAK_BADGES = [

    { name: "Committed", days: 3 },
    { name: "Dedicated", days: 7 },
    { name: "Unstoppable", days: 30 }

];

// Safe to call as often as needed - unlockBadge() is itself idempotent, so
// re-checking an already-earned badge is a no-op. Called from every real
// trigger point for a badge-worthy stat change: streakManager.js's
// recordDailyActivity() (streak tiers), gameCompletion.js's
// checkGameCompletion() (the direct, per-game-visit Perfectionist trigger),
// and reconcileProgressFromProfileStats() below (the aggregate Steam-wide
// completedGames count, which is what actually catches a 100%-complete
// game the player never opened in the planner at all).
export function checkBadgeUnlocks() {

    const player = getPlayer();

    if (player.completedGames >= 1) {

        unlockBadge(PERFECTIONIST_BADGE);

    }

    for (const badge of STREAK_BADGES) {

        if (player.longestStreak >= badge.days) {

            unlockBadge(badge.name);

        }

    }

}

// Reconciles this device's local completedAchievements/completedGames
// counters (and the XP they've earned) against the live, Steam-backed
// aggregate from /api/profile/stats (see profileStatsClient.js) - the same
// full-library scan already shown on the Achievements/100% stat cards.
//
// Why this exists: completedAchievements/completedGames/totalXP were only
// ever advanced by achievementManager.js/gameCompletion.js, which run
// exclusively while browsing one specific game's own page in this planner
// (game.html?slug=...). A player who has completed hundreds of
// achievements and several games on Steam, but only ever opened a handful
// of those games' pages here, had all of that real progress simply
// invisible to avatars/XP/badges - the exact "1185 achievements, ~150 XP"
// gap this fixes.
//
// Deliberately one-directional (a `>` check, never a plain assignment):
// the live count can occasionally under-report (a transient Steam API
// error for some games - see gamesWithPlayerDataUnavailable), and this
// must never let a temporary dip erase progress a player already has
// locally or already earned XP for. Combined with unlockAvatar/unlockBadge
// already being additive-only, this keeps the whole chain monotonic:
// recalculating can only grant more, never take back.
export function reconcileProgressFromProfileStats({ achievements, completedGames } = {}) {

    const player = getPlayer();

    let changed = false;

    if (typeof achievements === "number" && achievements > player.completedAchievements) {

        const delta = achievements - player.completedAchievements;

        player.completedAchievements = achievements;
        player.totalXP += delta * XP_PER_ACHIEVEMENT;

        changed = true;

    }

    if (typeof completedGames === "number" && completedGames > player.completedGames) {

        const delta = completedGames - player.completedGames;

        player.completedGames = completedGames;
        player.totalXP += delta * XP_PER_GAME_COMPLETION;

        changed = true;

    }

    if (changed) {

        savePlayer(player);

    }

    checkPlayerUnlocks();
    checkBadgeUnlocks();

}

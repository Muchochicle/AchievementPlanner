// Task 6: pure helpers for the two progression-based leaderboards
// (Highest Level, Longest Streak). No DB, no network - kept separate from
// leaderboardStore.js so the extraction/level rules can be unit-tested
// with synthetic input alone.
//
// TRUST MODEL (updated - see the audit that prompted this):
// - "level" is now derived authoritatively (authoritativeLevelValue below):
//   the frontend's own logic (src/utils/player/playerProgress.js) awards
//   XP for achievements/game-completions ONLY when Steam itself reports
//   them, in lockstep with the same completedAchievements/completedGames
//   counters this backend already fetches straight from Steam for the
//   achievements/completed-games podiums (users.achievements_unlocked/
//   games_completed_100, populated by GET /api/profile/stats). So the
//   ranking value for "level" is recomputed here from those columns, never
//   read from the client-PUT player_progress blob - a DevTools PUT with a
//   fabricated totalXP has zero effect on this podium.
// - "longest-streak" has no Steam-side equivalent (Steam has no concept of
//   "opened this app today"), so it cannot be derived the same way. It is
//   still read from the client-PUT blob at ranking time, but
//   playerProgressController.js now bounds how much a submitted streak can
//   grow per real PUT using clampSubmittedStreak() below, so a single
//   DevTools PUT can no longer jump straight to an arbitrary value - see
//   that function's own comment for the exact rule.

// Byte-for-byte the same curve as the frontend's
// src/utils/player/level/levelSystem.js (getXPForNextLevel /
// calculateLevel). Duplicated rather than imported for the same reason
// backend/utils/achievementCompletion.js duplicates the frontend's
// completion logic - the backend Docker build context does not include
// src/. Kept in sync by progressionMetrics.test.js.
export function xpForNextLevel(level) {

    return level * level * 100;

}

export function levelFromTotalXP(totalXP) {

    const xp = Number.isFinite(totalXP) && totalXP > 0 ? totalXP : 0;

    let level = 1;
    let remaining = xp;

    // Hard ceiling on the loop: a corrupted/absurd totalXP from a
    // tampered client must not spin here. Level 200 needs > 2.6 billion
    // XP - far beyond any legitimate value.
    while (level < 200 && remaining >= xpForNextLevel(level)) {

        remaining -= xpForNextLevel(level);
        level++;

    }

    return level;

}

export const PROGRESSION_METRICS = Object.freeze({

    "level": {
        // Ranked by totalXP (the canonical stored value), displayed as the
        // level it maps to - so two players on the same level are ordered
        // by how far into it they are, and a stale stored `level` field
        // can't disagree with the ranking.
        extract: player => {

            const totalXP = Number(player?.totalXP);

            return Number.isFinite(totalXP) && totalXP >= 0 ? Math.floor(totalXP) : null;

        },
        display: totalXP => levelFromTotalXP(totalXP)
    },

    "longest-streak": {
        extract: player => {

            const streak = Number(player?.longestStreak);

            return Number.isFinite(streak) && streak >= 0 ? Math.floor(streak) : null;

        },
        display: streak => streak
    }

});

export const PROGRESSION_LEADERBOARD_METRICS = Object.freeze(Object.keys(PROGRESSION_METRICS));

// Byte-for-byte the same values as the frontend's src/utils/player/
// xpValues.js - duplicated for the same Docker-build-context reason as
// xpForNextLevel above. Kept in sync by progressionMetrics.test.js.
export const XP_PER_ACHIEVEMENT = 50;
export const XP_PER_GAME_COMPLETION = 300;

// The authoritative ranking value for the "level" podium: XP recomputed
// from Steam-verified counts already sitting in the users table (see the
// TRUST MODEL note above), completely ignoring whatever totalXP a client
// PUT to player_progress. Mirrors qualifyingUsersClause's stance in
// leaderboardStore.js - a row whose achievement data was never fetched or
// came back private/unknown ('unknown' status, or either count NULL) has
// no honest value to rank, so this returns null and the caller excludes
// it, exactly like the Steam-verified global categories already do.
export function authoritativeLevelValue({ achievementsUnlocked, gamesCompleted100, achievementsStatus } = {}) {

    if (achievementsStatus !== "available" && achievementsStatus !== "partial") {

        return null;

    }

    // Checked before the Number() coercions below: Number(null) is 0, not
    // NaN, so a genuinely-missing SQLite NULL would otherwise silently rank
    // as "0 XP, qualifying" instead of being excluded like it should be.
    if (achievementsUnlocked == null || gamesCompleted100 == null) {

        return null;

    }

    const unlocked = Number(achievementsUnlocked);
    const completed100 = Number(gamesCompleted100);

    if (!Number.isFinite(unlocked) || unlocked < 0 || !Number.isFinite(completed100) || completed100 < 0) {

        return null;

    }

    return Math.floor(unlocked) * XP_PER_ACHIEVEMENT + Math.floor(completed100) * XP_PER_GAME_COMPLETION;

}

// Mirrors the frontend's top streak-badge tier ("Unstoppable", see
// STREAK_BADGES in src/utils/player/playerProgress.js) - not an arbitrary
// number, it's the app's own existing definition of "the longest streak
// tier that currently means anything". Used only as the ceiling on a
// brand-new account's very first sync (see clampSubmittedStreak) - the one
// case where there is no previous server value to compare real elapsed
// time against, because src/utils/player/sync/playerSync.js deliberately
// seeds the first server copy from whatever local progress (including
// pre-existing anonymous play) the browser already has.
export const FIRST_SYNC_STREAK_CEILING = 30;

const ONE_DAY_MS = 24 * 60 * 60 * 1000;

// Absorbs minor clock/timezone skew around a real day boundary (the
// frontend advances the streak on its OWN local calendar date, which can
// sit up to several hours off the server's clock) - added to the elapsed
// time BEFORE flooring below, not as a flat per-call bonus, so it cannot
// compound across repeated rapid PUTs the way a flat "+1 grace" would (see
// the git history of this function for that earlier, bypassable version).
const STREAK_CLOCK_SKEW_GRACE_MS = 2 * 60 * 60 * 1000;

// Bounds how much a submitted longestStreak may grow in a single PUT,
// using only data the backend already has: the previously-stored streak
// value and the server-assigned updated_at timestamp of that previous
// save (see playerProgressController.js). Honest daily play satisfies this
// easily - recordDailyActivity() (src/utils/player/streak/
// streakManager.js) advances the streak by exactly 1 per real calendar day
// and pushes on every change, so consecutive PUTs are naturally ~1 day
// apart with a ~1 streak-point difference. A DevTools PUT claiming
// longestStreak: 99999 in one shot is not: it is clamped down to what real
// elapsed wall-clock time could plausibly explain.
//
// Deliberately floors (not ceils) the elapsed time: two PUTs seconds apart
// must yield zero extra allowance, or a script could ratchet the streak up
// indefinitely by simply calling this endpoint in a tight loop - each call
// re-reads the just-stored previous value, so any per-call bonus that
// doesn't shrink to ~0 as real elapsed time shrinks to 0 is a repeatable
// exploit, not a one-time one. The grace constant above is added to the
// elapsed *time* for the same reason (absorbing real-world skew), never
// added flatly per call.
//
// previousStreak/previousUpdatedAt are both null for a brand-new account
// (no player_progress row yet) - that first-ever PUT is capped at
// FIRST_SYNC_STREAK_CEILING instead, since there is no previous save to
// measure elapsed time from.
export function clampSubmittedStreak({ submittedStreak, previousStreak, previousUpdatedAt, now = new Date() } = {}) {

    const submitted = Number(submittedStreak);

    if (!Number.isFinite(submitted) || submitted <= 0) {

        return 0;

    }

    if (previousUpdatedAt == null) {

        return Math.min(submitted, FIRST_SYNC_STREAK_CEILING);

    }

    const previous = Number.isFinite(Number(previousStreak)) && Number(previousStreak) > 0 ? Number(previousStreak) : 0;

    const previousTime = new Date(previousUpdatedAt).getTime();
    const nowTime = new Date(now).getTime();

    const elapsedMs = Number.isFinite(previousTime) && Number.isFinite(nowTime)
        ? Math.max(0, nowTime - previousTime)
        : 0;

    const daysElapsed = Math.floor((elapsedMs + STREAK_CLOCK_SKEW_GRACE_MS) / ONE_DAY_MS);

    const maxPlausible = previous + daysElapsed;

    return Math.min(submitted, maxPlausible);

}

// Pulls the ranking number for `metric` out of a parsed player_progress
// state blob. Returns null when the blob has no usable value for that
// metric - the caller excludes those rows entirely (never ranks them as
// a fabricated 0), exactly like qualifyingUsersClause does for the
// Steam-backed categories.
export function extractProgressionValue(state, metric) {

    const config = PROGRESSION_METRICS[metric];

    if (!config) {

        return null;

    }

    const player = state && typeof state === "object" ? state.player : null;

    if (!player || typeof player !== "object") {

        return null;

    }

    return config.extract(player);

}

// Task 6: pure helpers for the two progression-based leaderboards
// (Highest Level, Longest Streak). No DB, no network - kept separate from
// leaderboardStore.js so the extraction/level rules can be unit-tested
// with synthetic input alone.
//
// TRUST MODEL - important: unlike every other podium (games owned/played,
// playtime, achievements, 100%-completions), which are computed here from
// data the backend fetched directly from Steam, "level" and "longest
// streak" come from the player_progress blob the frontend PUTs
// (src/utils/player/**). They reflect in-app progression - XP earned by
// claiming achievements/guides, a daily-visit streak - which is
// client-tracked and synced, not independently re-verified server-side.
// These rankings are honest about what they measure (in-app progression),
// but they are not Steam-verified the way the others are.

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

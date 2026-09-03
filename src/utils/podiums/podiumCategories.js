// Pure display config for the podium component - title/icon/description +
// value formatting per leaderboard. Keys must match
// backend/services/leaderboardStore.js's GLOBAL_LEADERBOARD_CATEGORIES
// exactly; the backend is the source of truth for which categories exist/
// are valid, this is just how to label and format them.

import { calculateLevel } from "../player/level/levelSystem.js";

export function formatHours(minutes) {

    const hours = Math.round((minutes ?? 0) / 60);

    return `${hours.toLocaleString("en-US")} hr${hours === 1 ? "" : "s"}`;

}

function formatCount(value, label) {

    const count = value ?? 0;

    return `${count.toLocaleString("en-US")} ${label}`;

}

// Order matches the product brief's stated priority: owned/played hours/
// achievements/completions are the four core rankings, with "games played"
// last as the explicitly-called-out bonus category ("if the data model
// supports it cleanly" - it does, for free, since games_played is already
// populated alongside games_owned). Podiums.html renders them in this
// order, both as cards and in the jump nav.
export const GLOBAL_PODIUM_CATEGORIES = [

    {
        key: "games-owned",
        icon: "📚",
        title: "Most Games Owned",
        description: "Ranked by the size of each player's Steam library.",
        formatValue: value => formatCount(value, "games")
    },
    {
        key: "total-playtime",
        icon: "⏱️",
        title: "Most Hours Played",
        description: "Ranked by total hours played across every owned game.",
        formatValue: formatHours
    },
    {
        key: "achievements",
        icon: "🏆",
        title: "Most Achievements Unlocked",
        description: "Ranked by total Steam achievements unlocked, across all games.",
        // No "unlocked" suffix here (unlike games/played/completed below):
        // achievement counts run into 4+ digits, and "1,185 unlocked" was
        // long enough to squeeze a row's name column down to 1-2 visible
        // characters in the 3-column desktop layout. The card title already
        // says "Achievements Unlocked", so the bare number reads fine here.
        formatValue: value => (value ?? 0).toLocaleString("en-US")
    },
    {
        key: "completed-games",
        icon: "✅",
        title: "Most Games Completed 100%",
        description: "Ranked by how many games each player has fully completed.",
        formatValue: value => formatCount(value, "completed")
    },
    {
        key: "games-played",
        icon: "🕹️",
        title: "Most Games Played",
        description: "Ranked by how many owned games have any recorded playtime.",
        formatValue: value => formatCount(value, "played")
    }

];

// Task 6: two progression leaderboards, served by a different endpoint
// (/api/podiums/progression/:metric - see podiumsClient.js) and ranked
// from the synced player_progress blob rather than Steam-fetched data.
// Keys must match backend/utils/progressionMetrics.js's
// PROGRESSION_LEADERBOARD_METRICS. Kept a separate list (not merged into
// GLOBAL_PODIUM_CATEGORIES) precisely because they are a different KIND of
// ranking - in-app progression, synced from the account, not
// independently Steam-verified - and podiums.html groups them under their
// own heading to say so.
export const PROGRESSION_PODIUM_CATEGORIES = [

    {
        key: "level",
        kind: "progression",
        group: "Your Progression",
        icon: "⭐",
        title: "Highest Level",
        description: "Ranked by AchievementPlanner XP - the same level shown on your Profile. Reflects in-app progression synced from your account.",
        // Backend ranks by the raw XP total (so ties within a level are
        // broken by progress into it); shown here as the level it maps to,
        // using the exact same curve the Profile page uses.
        formatValue: totalXP => `Level ${calculateLevel(totalXP ?? 0)}`
    },
    {
        key: "longest-streak",
        kind: "progression",
        group: "Your Progression",
        icon: "🔥",
        title: "Longest Daily Streak",
        description: "Ranked by the longest run of consecutive days visiting AchievementPlanner.",
        formatValue: value => {

            const days = value ?? 0;

            return `${days.toLocaleString("en-US")} day${days === 1 ? "" : "s"}`;

        }
    }

];

// Flat, ordered list of every podium shown on podiums.html, each tagged
// with its `kind` (which client fn fetches it) and `group` (which heading
// it renders under). The five Steam categories don't carry those two
// fields in GLOBAL_PODIUM_CATEGORIES itself (that shape is also imported
// elsewhere), so they're added here.
export const ALL_PODIUM_CATEGORIES = [

    ...GLOBAL_PODIUM_CATEGORIES.map(config => ({ ...config, kind: "global", group: "Steam" })),
    ...PROGRESSION_PODIUM_CATEGORIES

];

// Config for the per-game (playtime) podium on game.html - not one of the
// global categories above (it's keyed by appid, not a fixed category), but
// shares the exact same display shape the podium component expects.
export const GAME_PODIUM_CATEGORY = {

    key: "game-playtime",
    icon: "⏱️",
    title: "Most Hours Played",
    description: "How you stack up against every other AchievementPlanner player who owns this game.",
    formatValue: formatHours

};

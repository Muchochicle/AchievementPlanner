// Pure transformation: turns the data /api/profile/stats already has in
// hand (the logged-in user's session identity, their raw GetOwnedGames
// list, the already-computed library counts, and the already-computed
// achievement aggregate) into the flat shape leaderboardStore.js writes to
// SQLite. No Steam calls, no DB access, no wall-clock reads - kept separate
// from leaderboardStore.js the same way profileStats.js's reduceProfileStats
// is kept separate from the network/DB-touching code that calls it, so this
// can be unit tested with synthetic input alone.

// A user's achievement aggregate is only ever "available" (every considered
// game returned a real answer) or "partial" (at least one game's data was
// unavailable or errored transiently, per reduceProfileStats in
// profileStats.js) - never fabricated as a clean number when some of it is
// actually missing. See PHASE_32_AUDIT.md section F.
export function deriveAchievementsStatus(achievementStats) {

    const hasGaps =
        (achievementStats?.gamesWithPlayerDataUnavailable ?? 0) > 0 ||
        (achievementStats?.gamesWithTransientErrors ?? 0) > 0;

    return hasGaps ? "partial" : "available";

}

// True only when this scan actually produced a real answer worth storing:
// either the user has no games to consider at all (a genuine, confirmed
// zero - not missing data), or at least one considered game returned a real
// (non-unavailable, non-transient-error) answer. False when every single
// considered game came back unavailable/transient - in that case the
// aggregate (achievements/completedGames) would be 100% fabricated zeros,
// not a "best-effort partial" figure, so leaderboardStore.js must leave the
// existing achievements_* columns untouched rather than overwrite good (or
// appropriately-NULL) data with a scan that answered nothing.
export function hasValidAchievementResult(achievementStats) {

    const gamesConsidered = achievementStats?.gamesConsidered ?? 0;

    const unanswered =
        (achievementStats?.gamesWithPlayerDataUnavailable ?? 0) +
        (achievementStats?.gamesWithTransientErrors ?? 0);

    return gamesConsidered === 0 || unanswered < gamesConsidered;

}

// Reduces Steam's raw owned-games list (games[].appid/playtime_forever - the
// same shape getOwnedGames() already returns and profileStatsController.js
// already has in hand) to exactly what user_game_playtime needs, plus the
// total-minutes figure the users table stores. Skips any entry without a
// positive appid - user_game_playtime's own CHECK(appid > 0) would reject it
// anyway, and a malformed/placeholder Steam entry should be silently
// excluded here rather than surfaced as a persistence failure.
export function summarizeOwnedGames(games) {

    const list = games ?? [];

    let totalPlaytimeMinutes = 0;
    const entries = [];

    for (const game of list) {

        if (!(game?.appid > 0)) {

            continue;

        }

        const playtimeMinutes = Math.max(0, Math.trunc(game.playtime_forever ?? 0));

        totalPlaytimeMinutes += playtimeMinutes;

        entries.push({ appid: game.appid, playtimeMinutes });

    }

    return { totalPlaytimeMinutes, games: entries };

}

// Assembles the full row-shape leaderboardStore.js's indexUserSnapshot()
// writes. steamUser is req.session.user (already fetched at login - see
// steamController.js - reused here instead of calling getPlayerSummary a
// second time). libraryGames is the raw GetOwnedGames games array.
// libraryCounts is profileStats.js's computeLibraryCounts() result, reused
// as-is rather than recomputed, so gamesOwned/gamesPlayed can never drift
// from what the Profile response itself shows. achievementStats is
// getProfileStatsCached()'s result.
//
// `achievements` is null when hasValidAchievementResult() says this scan
// didn't actually answer anything - leaderboardStore.js treats that as "skip
// the expensive columns entirely this write" rather than "write zeros".
export function buildLeaderboardSnapshot({ steamUser, libraryGames, libraryCounts, achievementStats }) {

    const { totalPlaytimeMinutes, games } = summarizeOwnedGames(libraryGames);

    return {

        steamId: steamUser.steamid,
        personaName: steamUser.personaname,
        avatarUrl: steamUser.avatarfull ?? null,
        profileUrl: steamUser.profileurl ?? null,

        // Reaching this point at all means getOwnedGames() already succeeded
        // with real (non-empty) data - see steamApi.js's private/invalid-
        // response guard - so this is always a genuine, confirmed snapshot,
        // never a guess.
        libraryStatus: "available",
        gamesOwned: libraryCounts.gamesOwned,
        gamesPlayed: libraryCounts.gamesPlayed,
        totalPlaytimeMinutes,
        games,

        achievements: hasValidAchievementResult(achievementStats)
            ? {
                achievementsUnlocked: achievementStats.achievements,
                gamesCompleted100: achievementStats.completedGames,
                achievementsStatus: deriveAchievementsStatus(achievementStats)
            }
            : null

    };

}

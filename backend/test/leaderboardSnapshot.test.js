import { test } from "node:test";
import assert from "node:assert";

import {
    deriveAchievementsStatus,
    hasValidAchievementResult,
    summarizeOwnedGames,
    buildLeaderboardSnapshot
} from "../utils/leaderboardSnapshot.js";

test("deriveAchievementsStatus returns 'available' when every considered game returned a real answer", () => {

    assert.strictEqual(
        deriveAchievementsStatus({
            gamesWithPlayerDataUnavailable: 0,
            gamesWithTransientErrors: 0
        }),
        "available"
    );

});

test("deriveAchievementsStatus returns 'partial' when at least one game's player data was unavailable", () => {

    assert.strictEqual(
        deriveAchievementsStatus({
            gamesWithPlayerDataUnavailable: 1,
            gamesWithTransientErrors: 0
        }),
        "partial"
    );

});

test("deriveAchievementsStatus returns 'partial' when at least one game hit a transient Steam error", () => {

    assert.strictEqual(
        deriveAchievementsStatus({
            gamesWithPlayerDataUnavailable: 0,
            gamesWithTransientErrors: 1
        }),
        "partial"
    );

});

test("hasValidAchievementResult is true when the user has no games to consider at all (a genuine zero)", () => {

    assert.strictEqual(
        hasValidAchievementResult({
            gamesConsidered: 0,
            gamesWithPlayerDataUnavailable: 0,
            gamesWithTransientErrors: 0
        }),
        true
    );

});

test("hasValidAchievementResult is true when at least one considered game returned a real answer", () => {

    assert.strictEqual(
        hasValidAchievementResult({
            gamesConsidered: 5,
            gamesWithPlayerDataUnavailable: 2,
            gamesWithTransientErrors: 1
        }),
        true
    );

});

test("hasValidAchievementResult is false when every considered game was unavailable or a transient error - the scan answered nothing", () => {

    assert.strictEqual(
        hasValidAchievementResult({
            gamesConsidered: 3,
            gamesWithPlayerDataUnavailable: 2,
            gamesWithTransientErrors: 1
        }),
        false
    );

});

test("summarizeOwnedGames sums playtime_forever into totalPlaytimeMinutes and maps appid/playtimeMinutes", () => {

    const result = summarizeOwnedGames([
        { appid: 10, playtime_forever: 300 },
        { appid: 20, playtime_forever: 700 }
    ]);

    assert.strictEqual(result.totalPlaytimeMinutes, 1000);
    assert.deepStrictEqual(result.games, [
        { appid: 10, playtimeMinutes: 300 },
        { appid: 20, playtimeMinutes: 700 }
    ]);

});

test("summarizeOwnedGames drops entries with a non-positive or missing appid instead of persisting a doomed row", () => {

    const result = summarizeOwnedGames([
        { appid: 10, playtime_forever: 300 },
        { appid: 0, playtime_forever: 999 },
        { appid: -5, playtime_forever: 999 },
        { playtime_forever: 999 }
    ]);

    assert.strictEqual(result.totalPlaytimeMinutes, 300);
    assert.deepStrictEqual(result.games, [{ appid: 10, playtimeMinutes: 300 }]);

});

test("summarizeOwnedGames treats a missing/negative playtime_forever as 0 minutes rather than negative or NaN", () => {

    const result = summarizeOwnedGames([
        { appid: 10 },
        { appid: 20, playtime_forever: -50 }
    ]);

    assert.deepStrictEqual(result.games, [
        { appid: 10, playtimeMinutes: 0 },
        { appid: 20, playtimeMinutes: 0 }
    ]);

});

test("summarizeOwnedGames returns an empty summary for no games, not an error", () => {

    assert.deepStrictEqual(summarizeOwnedGames([]), { totalPlaytimeMinutes: 0, games: [] });
    assert.deepStrictEqual(summarizeOwnedGames(undefined), { totalPlaytimeMinutes: 0, games: [] });

});

test("buildLeaderboardSnapshot assembles the full row shape from session identity + already-computed counts/stats", () => {

    const snapshot = buildLeaderboardSnapshot({
        steamUser: {
            steamid: "76561198000000001",
            personaname: "Alice",
            avatarfull: "https://example.com/avatar.jpg",
            profileurl: "https://steamcommunity.com/id/alice"
        },
        libraryGames: [
            { appid: 10, playtime_forever: 300 },
            { appid: 20, playtime_forever: 700 }
        ],
        libraryCounts: { gamesOwned: 2, gamesPlayed: 2 },
        achievementStats: {
            achievements: 42,
            completedGames: 3,
            gamesConsidered: 2,
            gamesWithPlayerDataUnavailable: 0,
            gamesWithTransientErrors: 0
        }
    });

    assert.deepStrictEqual(snapshot, {

        steamId: "76561198000000001",
        personaName: "Alice",
        avatarUrl: "https://example.com/avatar.jpg",
        profileUrl: "https://steamcommunity.com/id/alice",

        libraryStatus: "available",
        gamesOwned: 2,
        gamesPlayed: 2,
        totalPlaytimeMinutes: 1000,
        games: [
            { appid: 10, playtimeMinutes: 300 },
            { appid: 20, playtimeMinutes: 700 }
        ],

        achievements: {
            achievementsUnlocked: 42,
            gamesCompleted100: 3,
            achievementsStatus: "available"
        }

    });

});

test("buildLeaderboardSnapshot null-coalesces a missing avatar/profile URL instead of storing undefined", () => {

    const snapshot = buildLeaderboardSnapshot({
        steamUser: { steamid: "1", personaname: "NoAvatar" },
        libraryGames: [],
        libraryCounts: { gamesOwned: 0, gamesPlayed: 0 },
        achievementStats: {
            achievements: 0,
            completedGames: 0,
            gamesConsidered: 0,
            gamesWithPlayerDataUnavailable: 0,
            gamesWithTransientErrors: 0
        }
    });

    assert.strictEqual(snapshot.avatarUrl, null);
    assert.strictEqual(snapshot.profileUrl, null);

});

test("buildLeaderboardSnapshot marks achievementsStatus 'partial' and still passes through the best-effort numbers when some (not all) games answered", () => {

    const snapshot = buildLeaderboardSnapshot({
        steamUser: { steamid: "1", personaname: "Partial" },
        libraryGames: [],
        libraryCounts: { gamesOwned: 0, gamesPlayed: 0 },
        achievementStats: {
            achievements: 17,
            completedGames: 1,
            gamesConsidered: 5,
            gamesWithPlayerDataUnavailable: 2,
            gamesWithTransientErrors: 0
        }
    });

    assert.deepStrictEqual(snapshot.achievements, {
        achievementsUnlocked: 17,
        gamesCompleted100: 1,
        achievementsStatus: "partial"
    });

});

test("buildLeaderboardSnapshot sets achievements to null when the scan answered nothing at all, instead of fabricating zeros", () => {

    const snapshot = buildLeaderboardSnapshot({
        steamUser: { steamid: "1", personaname: "AllUnavailable" },
        libraryGames: [],
        libraryCounts: { gamesOwned: 0, gamesPlayed: 0 },
        achievementStats: {
            achievements: 0,
            completedGames: 0,
            gamesConsidered: 4,
            gamesWithPlayerDataUnavailable: 3,
            gamesWithTransientErrors: 1
        }
    });

    assert.strictEqual(snapshot.achievements, null);

});

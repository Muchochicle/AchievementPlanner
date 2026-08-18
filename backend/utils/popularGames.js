// 4 rows of 3 cards on Home's desktop grid.
const DEFAULT_LIMIT = 12;

// Pure ranking step, separated from the Steam I/O in steamApi.js so it's
// directly testable. playerCounts is a Map<appid, number|null> - any game
// with no numeric count (never fetched, or Steam couldn't provide one) is
// dropped rather than ranked with a fabricated value.
export function selectPopularGames(games, playerCounts, limit = DEFAULT_LIMIT) {

    return (games ?? [])

        .filter(game => typeof game?.appid === "number" && game.appid > 0)

        .map(game => ({

            ...game,

            playerCount: playerCounts?.get(game.appid) ?? null

        }))

        .filter(game => typeof game.playerCount === "number")

        .sort((a, b) => b.playerCount - a.playerCount)

        .slice(0, limit);

}

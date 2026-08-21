// Pure, DOM/localStorage-free (unlike the old getInProgressGameSlugs
// helper this section used to source from, since removed) - takes
// the same games list the Profile page already fetches via getGamesIndex()
// and picks the Profile "Recently Played" section's games from Steam's own
// lastPlayed (rtime_last_played, see backend/utils/gameMapper.js), never
// planner-{slug} checkbox state.
export function getRecentlyPlayedGames(games, { limit = 10 } = {}) {

    return (games ?? [])

        .filter(game => (game?.lastPlayed ?? 0) > 0)

        .sort((a, b) => b.lastPlayed - a.lastPlayed)

        .slice(0, limit);

}

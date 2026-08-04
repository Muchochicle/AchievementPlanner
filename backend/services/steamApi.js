export async function getPlayerSummary(steamId) {

    const url =

        `https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v2/?key=${process.env.STEAM_API_KEY}&steamids=${steamId}`;

    const response = await fetch(url);

    const data = await response.json();

    return data.response.players[0];

}
export async function getOwnedGames(steamId) {

    const url =
        `https://api.steampowered.com/IPlayerService/GetOwnedGames/v1/?key=${process.env.STEAM_API_KEY}&steamid=${steamId}&include_appinfo=true&include_played_free_games=true`;

    const response = await fetch(url);

    const data = await response.json();

    return data.response;

}
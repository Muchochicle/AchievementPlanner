export function mapSteamGame(game) {

    return {

        appid: game.appid,

        slug: game.name
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/^-|-$/g, ""),

        title: game.name,

        image:
            `https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/${game.appid}/header.jpg`,

        icon:
            `https://media.steampowered.com/steamcommunity/public/images/apps/${game.appid}/${game.img_icon_url}.jpg`,

        playtime: Math.round(game.playtime_forever / 60),

        difficulty: null,

        estimatedTime: null,

        completion: null,

        genre: [],

        tags: []

    };

}
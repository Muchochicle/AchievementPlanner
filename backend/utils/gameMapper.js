import { getPlannerData } from "./plannerCatalog.js";

export function mapSteamGame(game) {

    const slug = game.name
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");

    const planner = getPlannerData(slug);

    return {

        appid: game.appid,

        slug,

        title: game.name,

        image:
            `https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/${game.appid}/header.jpg`,

        icon:
            `https://media.steampowered.com/steamcommunity/public/images/apps/${game.appid}/${game.img_icon_url}.jpg`,

        playtime: Math.round(game.playtime_forever / 60),

        owned: true,

        hasPlanner: !!planner,

        difficulty: planner?.difficulty ?? null,

        completionTime: planner?.completionTime ?? null,

        missable: planner?.missable ?? null,

        playthroughs: planner?.playthroughs ?? null,

        hasGuide: planner?.hasGuide ?? false,

        genres: planner?.genres ?? [],

        achievements: planner?.achievements ?? []

    };

}
import { getPlannerData } from "./plannerCatalog.js";

export function mapSteamGame(game) {

    const rawName =
        typeof game.name === "string" && game.name.trim().length > 0
            ? game.name
            : null;

    const title = rawName ?? `Unknown game (${game.appid})`;

    const slug = rawName
        ? rawName
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/^-|-$/g, "")
        : `unknown-${game.appid}`;

    const planner = getPlannerData(slug);

    return {

        appid: game.appid,

        slug,

        title,

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

export function mapSteamGameSafe(game) {

    try {

        return mapSteamGame(game);

    } catch (error) {

        console.error(
            `[gameMapper] Error mapeando appid=${game?.appid}:`,
            error.message
        );

        return null;

    }

}

// Construye el modelo de un juego que existe en el catálogo propio
// (tiene planner) pero que el usuario no posee en Steam.
export function mapPlannerOnlyGame(slug) {

    const planner = getPlannerData(slug);

    if (!planner) {

        return null;

    }

    return {

        appid: planner.steamAppId ?? planner.id ?? null,

        slug,

        title: planner.name ?? slug,

        image: planner.image ?? null,

        owned: false,

        hasPlanner: true,

        difficulty: planner.difficulty ?? null,

        completionTime: planner.completionTime ?? null,

        missable: planner.missable ?? null,

        playthroughs: planner.playthroughs ?? null,

        hasGuide: planner.hasGuide ?? false,

        genres: planner.genres ?? [],

        achievements: planner.achievements ?? []

    };

}
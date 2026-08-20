import { getPlannerData, getPlannerDataByAppId } from "./plannerCatalog.js";

export function mapSteamGame(game) {

    const rawName =
        typeof game.name === "string" && game.name.trim().length > 0
            ? game.name
            : null;

    const title = rawName ?? `Unknown game (${game.appid})`;

    const derivedSlug = rawName
        ? rawName
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/^-|-$/g, "")
        : `unknown-${game.appid}`;

    // AppID is the canonical cross-source identity: if the catalog has an
    // entry for this Steam app, its slug wins even if Steam's current name
    // would derive a different one. Falls back to slug-derived lookup only
    // when no catalog entry declares this appid.
    const plannerByAppId = getPlannerDataByAppId(game.appid);

    const slug = plannerByAppId?.slug ?? derivedSlug;

    const planner = plannerByAppId?.data ?? getPlannerData(derivedSlug);

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

// Builds the model for a game that exists in our own catalog (has a
// planner) but that the user does not own on Steam.
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
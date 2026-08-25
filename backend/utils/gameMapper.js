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

        // Steam can return an owned game with no img_icon_url at all
        // (delisted apps, some free-to-play/tool entries) - unlike `image`
        // above (built from appid alone, no hash needed), this URL needs a
        // real hash segment or it silently resolves to a broken
        // ".../undefined.jpg"/".../.jpg" image. Guarded the same way every
        // other optional Steam-sourced field in this mapper already is
        // (Phase 67).
        icon: game.img_icon_url
            ? `https://media.steampowered.com/steamcommunity/public/images/apps/${game.appid}/${game.img_icon_url}.jpg`
            : null,

        playtime: Math.round(game.playtime_forever / 60),

        // Steam's rtime_last_played (epoch seconds, 0 when the game has
        // never been played) - confirmed live (see PHASE_33_AUDIT.md
        // section 3) to always be present and to agree with
        // playtime_forever (never played <=> 0, ever played <=> >0), so a
        // plain `> 0` check is a safe "has real play activity" signal for
        // the Profile "Recently Played" section.
        lastPlayed: game.rtime_last_played ?? 0,

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

// Maps a raw Steam owned-games array in one pass, disambiguating any slug
// collision - two different owned, non-catalog games whose derivedSlug
// (see mapSteamGame above) happens to match by coincidence of name - by
// suffixing every occurrence after the first with its own (always unique)
// appid. A single mapSteamGame call can't detect this on its own, since it
// only ever sees one game at a time - every caller that needs stable
// per-request slug uniqueness (buildGamesList, getGameDetail) goes through
// this shared function instead of mapping independently, so both the list
// and detail routes agree on the same disambiguated slug for the same
// request (Finding 3, PHASE_51-54_AUDIT.md - without this, the second
// colliding game was permanently unreachable via GET /api/games/:slug,
// since that route resolves a slug via games.find(), which always returns
// the first match).
export function mapOwnedGames(rawGames) {

    const mapped = rawGames.map(mapSteamGameSafe).filter(Boolean);

    const seenSlugs = new Set();

    return mapped.map(game => {

        if (!seenSlugs.has(game.slug)) {

            seenSlugs.add(game.slug);

            return game;

        }

        return { ...game, slug: `${game.slug}-${game.appid}` };

    });

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
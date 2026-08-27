// LIMBO's Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data (backend/catalog/games/limbo.json),
//   whose 13 achievements were sourced directly from Steam's own
//   achievement schema for appid 48000 via ISteamUserStats/GetSchemaForGame
//   (fetched through this app's own backend/services/steamApi.js) -
//   independently cross-checked against Steam's public community
//   achievement stats page for appid 48000, which lists the same 13 names/
//   descriptions. 12 of the 13 ship a real, official Steam description;
//   DING! is a hidden achievement whose description Steam's own schema
//   never exposes publicly (confirmed on both sources above) - its
//   description in the catalog is a curatorial summary of its real unlock
//   condition, not invented, cross-checked against TrueAchievements' and
//   GamerGuides' independent walkthroughs of the same secret level (same
//   "curatorial description for a Steam-silent achievement" precedent as
//   this catalog's own Celeste entry).
// - The "10 hidden eggs, chapter select, nothing permanently missable"
//   framing is independently confirmed by community walkthroughs (not
//   Steam's schema, which doesn't describe game mechanics) - LIMBO's main
//   menu lets any scene be replayed at any time specifically to go back
//   for eggs, which is why the catalog's game-level missable is false even
//   though 12 of the 13 individual achievements are missable:true (not
//   automatically earned by finishing the story - they need a specific
//   extra action or a hidden collectible, but that action stays available
//   forever via replay - same convention as this catalog's Portal 2 entry).
export const GUIDE = {

    slug: "limbo-achievement-guide",
    category: "game",
    gameSlug: "limbo",
    icon: "🐛",
    title: "LIMBO Achievement Guide",
    summary: "A practical guide to all 13 Steam achievements in LIMBO - the 10 hidden eggs, finishing the story, a low-death challenge run, and the hidden secret level they unlock.",

    relatedSlugs: ["achievement-completion-and-tracking", "understanding-achievement-availability"],

    sections: [

        {
            heading: "Overview",
            body: [
                "LIMBO has 13 Steam achievements. Nothing is permanently missable: every scene in the game can be replayed at any time from the main menu's chapter select, specifically to go back for anything missed on an earlier pass.",
                "Most of the list (10 of the 13) is a single collectible hunt spread across the whole game: small, easy-to-miss silhouette \"eggs\" tucked into specific scenes, each one its own achievement. The rest come from finishing the story, a dedicated low-death challenge run, and a hidden secret level unlocked only once all 10 eggs are found."
            ]
        },

        {
            heading: "The 10 Hidden Eggs",
            body: [
                "In roughly the order they appear across the game's scenes: Wrong Way (\"That's not right\"), Altitude is Attitude (\"Exploration off the ground\"), It's Stuck (\"Prepare a dry landing\"), Urban Exploration (\"Involves heavy lifting\"), Alone in the Dark (\"Beneath the arthropod\"), Climbing the Cog (\"Don't pull the lever just because you can\"), Backtracking (\"Ride the crates\"), Guided by Sparks (\"The crate is key\"), Under Ground (\"Vertical passageway\"), and Going Up (\"Don't let gravity keep you down\").",
                "Each egg is a small, dark, faintly-visible dot tucked into a corner, ledge, or background detail of one specific scene - walking over one crushes it and unlocks the achievement immediately. None of the official descriptions above name an exact location on purpose (LIMBO's own achievement text is deliberately as cryptic as the game itself), so a first blind playthrough naturally misses several of these.",
                "Tip: because chapter select has no limit on replays, the efficient approach is to just play through once for the story, then do a single dedicated cleanup pass afterward with an egg-location guide open rather than stopping constantly on a first playthrough to search every corner."
            ]
        },

        {
            heading: "Finishing the Story & the Low-Death Run",
            body: [
                "Where Credit is Due (\"Perseverance has its own reward\") is simply finishing the game - it unlocks with the credits, no extra action needed.",
                "No Point in Dying (\"Complete the game in one sitting with five or less deaths\") is a dedicated, deliberate run: LIMBO expects trial-and-error deaths as part of solving several puzzles, so 5 or fewer across the whole ~3-4 hour story means already knowing the solution to most of the game's traps and timing-based sections. This is realistically a second playthrough, done after you already know the game, not something to combine with a first blind run or with hunting eggs at the same time."
            ]
        },

        {
            heading: "DING! - The Secret Level",
            body: [
                "DING! is LIMBO's hidden thirteenth achievement, and Steam never reveals its description publicly - it only unlocks after finding all 10 eggs above. Once you have every egg, a secret entrance opens near the scene with the giant spider (community walkthroughs commonly point to the chapter overview showing the spider/insect for this exact scene): follow the path down a long ladder instead of continuing normally, then keep going through what looks like a dead end into a hidden passage.",
                "The secret level itself plays out almost entirely in pitch darkness, solved mostly by sound cues rather than sight - it's a real difficulty spike compared to the rest of the game, and worth expecting a fair number of attempts.",
                "Tip: since this needs all 10 eggs first, don't attempt it until the egg-hunting cleanup pass above is fully done - there's no partial credit, and going in without every egg just wastes a trip to the entrance."
            ]
        },

        {
            heading: "Suggested Order",
            body: [
                "Play through the story once normally for Where Credit is Due, picking up any eggs you happen to notice along the way.",
                "Do a dedicated chapter-select cleanup pass with an egg-location guide for whichever of the 10 you missed.",
                "Once all 10 eggs are confirmed, head to the secret entrance for DING! - budget extra attempts for the dark, sound-based level itself.",
                "Save No Point in Dying for last, as its own separate, focused playthrough once you already know the game's puzzle solutions well enough to keep total deaths at 5 or fewer."
            ]
        }

    ]

};

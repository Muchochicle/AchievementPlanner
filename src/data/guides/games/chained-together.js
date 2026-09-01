// Chained Together Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/chained-together.json), whose 16 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   2567870 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "chained-together-achievement-guide",
    "category": "game",
    "gameSlug": "chained-together",
    "icon": "⛓",
    "title": "Chained Together Achievement Guide",
    "summary": "A practical guide to all 16 Steam achievements in Chained Together - none are hidden. None of the achievements are hidden. Covers reaching each named biome on the way up, collecting the 10 Wings of Freedom, a sub-1:50 summit run, and finishing lava mode.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Chained Together has 16 Steam achievements and none are hidden. Thirteen of them are simply reaching each area on the climb - the Underworld, Hell Cliffs, the Car Race, the Mysterious Cave, the Subway Station, the City, the Rooftops, the Warehouse, the Harbor, the Temple, the Asian Shrine, the Deities and the Garden. The other three are collecting all 10 Wings of Freedom scattered through the level, reaching the summit in under 1 hour 50 minutes, and finishing lava mode (where the floor rises behind you).",
                "The catalog marks it difficulty 4. The biome achievements just require getting to the top, but Chained Together is a hard, falling-heavy climber - especially solo, where you drag a dead weight of chain. 'Climb faster' (sub-1:50 summit) needs a clean run with few big falls, and lava mode adds relentless time pressure.",
                "Tip: learn the whole climb on a casual run first, grabbing the 10 Wings of Freedom as you pass them, then do a dedicated fast run for 'Climb faster' and a separate attempt at lava mode once you know the route cold."
            ]
        },
        {
            "heading": "Summit & Modes",
            "body": [
                "Collecting all 10 Wings of Freedom, reaching the summit in under 1 hour 50 minutes, and finishing lava mode.",
                "The achievements here: 10 Wings (Collect 10 Wings of Freedom scattered throughout the level); Climb faster (Reach the summit of the game in less than 1 hour and 50 minutes.); Lava mode (Finish the lava mode)."
            ]
        },
        {
            "heading": "Biomes",
            "body": [
                "Reaching each area on the climb: the Underworld, Hell Cliffs, the Car Race, the Mysterious Cave, the Subway Station, the City, the Rooftops, the Warehouse, the Harbor, the Temple, the Asian Shrine, the Deities and the Garden.",
                "The achievements here: Underworld (Reach The Underworld); Hell Cliffs (Reach The Hell Cliffs); The Car Race (Reach The Car Race); The Mysterious Cave (Reach The Mysterious Cave); The Subway Station (Reach The Subway Station); The City (Reach The City); Over The Buildings (Reach The Rooftops); The Warehouse (Reach The Warehouse); The Harbor (Reach The Harbor); The Temple (Reach The Temple); The Asian Shrine (Reach The Asian Shrine); The Deities (Reach The Deities); The Garden (Reach The Garden)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Do a full casual climb to the summit, unlocking every biome achievement on the way.",
                "2. Collect all 10 Wings of Freedom during that run (or a second unhurried one).",
                "3. Do a dedicated fast run for 'Climb faster' (summit in under 1:50).",
                "4. Attempt lava mode once you know the route.",
                "Tip: solo, the trailing chain constantly pulls you off ledges - anchor it on geometry below you before making a big jump, or climb with a partner where you can counterweight each other."
            ]
        }
    ]
};

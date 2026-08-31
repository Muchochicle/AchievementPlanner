// Closure Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/closure.json), whose 8 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   72000 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "closure-achievement-guide",
    "category": "game",
    "gameSlug": "closure",
    "icon": "🔦",
    "title": "Closure Achievement Guide",
    "summary": "A practical guide to all 8 Steam achievements in Closure - none are hidden. Covers the tutorial, the three world completions, the Silver Moth and Moth Cave secrets, and the main-game and 100% completion.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Closure has 8 Steam achievements and none of them are hidden. Three are world completions (the Factory, the Hospital, the Circus), two are secrets (find a Silver Moth, locate the Moth Cave), and the rest are the tutorial, completing the Main Game, and completing the game 100%.",
                "Nothing is missable - every level and secret can be revisited from the world map, and 100% is a matter of collecting every Silver Moth across all worlds.",
                "Tip: play through the three worlds and the finale normally, then use the world map and a collectibles guide to sweep the Silver Moths for \"Closure\" (100%)."
            ]
        },
        {
            "heading": "Worlds & Secrets",
            "body": [
                "Completing the Tutorial, finding a Silver Moth, locating the Moth Cave, and completing the Factory and the Hospital.",
                "The achievements here: The River (Complete the Tutorial); Flight of the Moth (Find a Silver Moth); Moth Trove (Locate the Moth Cave); Working Overtime (Complete the Factory); Over in a Flash (Complete the Hospital)."
            ]
        },
        {
            "heading": "Completion",
            "body": [
                "Completing the Circus, completing the Main Game, and completing the game 100%.",
                "The achievements here: Playtime is Over (Complete the Circus); Welcome to Purgatory (Complete the Main Game); Closure (Complete the game 100%)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the Tutorial and the three worlds - Factory, Hospital, Circus.",
                "2. Complete the Main Game finale.",
                "3. Find a Silver Moth and the Moth Cave along the way.",
                "4. Use the world map to revisit every level and collect all remaining Silver Moths.",
                "5. \"Closure\" (100%) unlocks once every Silver Moth is collected.",
                "Tip: the Silver Moths are the only real collectible - keep a guide open on your 100% pass so you do not have to re-scan levels you have already cleared."
            ]
        }
    ]
};

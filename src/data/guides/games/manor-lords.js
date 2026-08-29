// Manor Lords Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/manor-lords.json), whose 11 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1363080 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js). None are hidden; every one
//   ships a real, official Steam description, quoted verbatim below.
// - Sections group achievements by roughly what part of the game they belong to.
export const GUIDE = {
    "slug": "manor-lords-achievement-guide",
    "category": "game",
    "gameSlug": "manor-lords",
    "icon": "🏰",
    "title": "Manor Lords Achievement Guide",
    "summary": "A practical guide to all 11 Steam achievements in Manor Lords - none are hidden. settlement & economy, battle & scenario.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Manor Lords has 11 Steam achievements and none are hidden. They split between town-building milestones (surviving the first year, a large town at 100% approval, the trade-only economy run) and the \"Restoring the peace\" scenario goals (finishing it, a Mercenary-only clear, a Challenging-difficulty clear, defeating Hildebolt).",
                "Nothing is missable. The trickier ones are The Merchant (reach a small town without hunting or gathering berries, which forces a trade-heavy food economy) and the Mercenary-only and Challenging scenario clears.",
                "Tip: do a dedicated \"Restoring the peace\" run for the scenario achievements (Challenging difficulty, Mercenary units only if you can), and a separate free-build save for the trade-only economy and large-town approval goals."
            ]
        },
        {
            "heading": "Settlement & Economy",
            "body": [
                "The town-building goals: starting the game, surviving the first winter without your settlers abandoning you, reaching a small town without hunting or gathering berries (The Merchant), employing 24 retainers, changing the church bell sound, and 100% approval in a large town.",
                "The achievements here: Survive the first year (Face the winter and have your settlers not abandon you.); Defeat Hildebolt (Defeat the baron in the \"Restoring the peace\" scenario.); The merchant (Get to a \"small town\" settlement level without hunting or gathering berries.); Full Retinue (Employ 24 retainers.); For Whom the Bell Tolls (Change the church bell sound.); Cheerful Metropolis (Reach 100% approval in a \"large town\".)."
            ]
        },
        {
            "heading": "Battle & Scenario",
            "body": [
                "The combat and scenario goals: destroying a brigand squad with militia in a non-battle game mode, beating \"Restoring the peace\" with Mercenary units only, beating it on Challenging difficulty, finishing the scenario, and defeating the baron Hildebolt.",
                "The achievements here: The vigilantes (Destroy a squad of brigands with a squad of militia in a non battle game mode.); Mercenary Captain (Beat \"Restoring the peace\" with Mercenary units only.); Start the game (Big success!); Challenge accepted (Beat \"Restoring the peace\" on \"Challenging\" difficulty preset.); Restore the Peace (Finish the \"Restoring the peace\" scenario)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play a normal free-build game: survive the first year, grow to a large town at 100% approval, employ 24 retainers, and change the bell.",
                "2. Do a trade-only run for The Merchant - buy food and trade goods rather than hunting or foraging - up to a small town.",
                "3. Play \"Restoring the peace\" on Challenging difficulty, and beat it (and Hildebolt) with Mercenary units where possible.",
                "Tip: The Merchant is the hardest - set up a trading post early, import food and export a surplus good (ale, planks), and keep your population small enough that trade can feed it until you hit small-town level."
            ]
        }
    ]
};

// NightSky Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/nightsky.json), whose 22 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   99700 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "nightsky-achievement-guide",
    "category": "game",
    "gameSlug": "nightsky",
    "icon": "🌑",
    "title": "NightSky Achievement Guide",
    "summary": "A practical guide to all 22 Steam achievements in NightSky - none are hidden. Covers the standard-mode level completions and the harder Alternative-mode level completions. None of the achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "NightSky has 22 Steam achievements and none are hidden. They are one per level completed - eleven for the standard levels (The Beach through Slightly Nonsense) and eleven for the same levels in Alternative mode, the harder remixed versions unlocked after finishing the game.",
                "The catalog marks it a short two-run game - a normal playthrough for the standard-level achievements, then the Alternative-mode run for the rest. Nothing is missable: levels can be replayed from the menu.",
                "Tip: finish the standard game first to unlock Alternative mode, then work through the Alternative levels - they use the same layouts with tighter physics puzzles."
            ]
        },
        {
            "heading": "Levels I",
            "body": [
                "The first block of level-completion achievements - a mix of standard-mode levels (The Beach, Harara Mountains, Skymning, Ranna Caverns, The Void, Aurora's North, Slightly Nonsense) and Alternative-mode levels (Harara Mountains, Skymning, Old Ruins, Perpetuum Factory).",
                "The achievements here: Prologue (Completed The Beach); Harara Mountains (Completed Harara Mountains); Skymning (Completed Skymning); Ranna Caverns (Completed Ranna Caverns); The Void (Completed The Void); Aurora's North (Completed Aurora's North); Slightly Nonsense (Completed Slightly Nonsense); Harara Mountains Alternative (Completed Harara Mountains Alternative); Skymning Alternative (Completed Skymning Alternative); Old Ruins Alternative (Completed Old Ruins Alternative); Perpetuum Factory Alternative (Completed Perpetuum Factory Alternative)."
            ]
        },
        {
            "heading": "Levels II",
            "body": [
                "The second block - the remaining Alternative-mode levels (Ranna Caverns, The Void, Murky Depths, Giant Leaf, Aurora's North, Slightly Nonsense, The Beach) and standard-mode levels (Old Ruins, Perpetuum Factory, Murky Depths, Giant Leaf).",
                "The achievements here: Ranna Caverns Alternative (Completed Ranna Caverns Alternative); The Void Alternative (Completed The Void Alternative); Murky Depths Alternative (Completed Murky Depths Alternative); Giant Leaf Alternative (Completed Giant Leaf Alternative); Aurora's North Alternative (Completed Aurora's North Alternative); Slightly Nonsense Alternative (Completed Slightly Nonsense Alternative); Old Ruins (Completed Old Ruins); Perpetuum Factory (Completed Perpetuum Factory); Murky Depths (Completed Murky Depths); Giant Leaf (Completed Giant Leaf); Prologue Alternative (Completed The Beach Alternative)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through the standard game, completing every level.",
                "2. This unlocks Alternative mode.",
                "3. Work through every Alternative-mode level.",
                "4. Replay any level from the menu if an achievement didn't register.",
                "Tip: there is no death or time pressure here - the Alternative levels are just tighter physics puzzles, so take them slowly."
            ]
        }
    ]
};

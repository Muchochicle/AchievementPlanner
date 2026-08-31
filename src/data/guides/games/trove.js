// Trove Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/trove.json), whose 19 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   304050 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "trove-achievement-guide",
    "category": "game",
    "gameSlug": "trove",
    "icon": "🧊",
    "title": "Trove Achievement Guide",
    "summary": "A practical guide to all 19 Steam achievements in Trove - none are hidden. Covers the Shadow Tower boss kills on every difficulty, the subclass, Stellar Gem and Geode Mastery progression, and the Bomber Royale and gardening goals.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Trove has 19 Steam achievements and none of them are hidden. Six are Shadow Tower boss kills - the Shadow Hydrakken and the Darknik Dreadnought on Normal, Hard and Ultra difficulty. Four cover the Stellar Gem forge (max one stat, max all stats on one gem, max all stats on nine gems) and selecting a subclass. Two are Geode Mastery (20 and 100). Two are the GAS module upgrades. Two are Bomber Royale (first win, 5000 bombs thrown). The last three are gardening - water 1,000 plants, harvest from 50, and compost 10,000 items.",
                "Nothing is missable - Trove is a live MMO and every counter is cumulative across your account. The longest are \"Perfection!\" (max nine Stellar Gems), Geode Mastery 100, and the 5,000-bomb and 10,000-compost grinds.",
                "Tip: the Shadow Tower bosses on Ultra need a geared, high-power character and a group - do the Normal kills solo early, then come back for Hard and Ultra once your build is developed."
            ]
        },
        {
            "heading": "Shadow Tower Bosses",
            "body": [
                "Defeating the Shadow Hydrakken and the Darknik Dreadnought in the Shadow Tower on Normal, Hard and Ultra difficulty.",
                "The achievements here: Unleash the Hydrakken! (Enter the Shadow Tower and defeat the Shadow Hydrakken on Normal Difficulty); Vanquish the Hydrakken!  (Enter the Shadow Tower and defeat the Shadow Hydrakken on Hard Difficulty); Burninate the Hydrakken! (Enter the Shadow Tower and defeat the Shadow Hydrakken on Ultra Difficulty); The Doctor is In! (Enter the Shadow Tower and defeat the Darknik Dreadnought on Normal Difficulty); The Prescription is Pain! (Enter the Shadow Tower and defeat the Darknik Dreadnought on Hard Difficulty); A Trovian a Day! (Enter the Shadow Tower and defeat the Darknik Dreadnought on Ultra Difficulty)."
            ]
        },
        {
            "heading": "Subclasses, Gems & Geode",
            "body": [
                "Selecting a Subclass, the Stellar Gem forge achievements (max one stat, max all stats on one gem, max all stats on nine gems), Geode Mastery 20 and 100, and the first and full GAS module upgrades.",
                "The achievements here: Stay Subclassy! (Select a Subclass); The Gem Forger (Using the gem forge, upgrade a Stellar Gem stat to max ); A Builder's Focus (Using the gem forge, upgrade all of the stats on a Stellar Gem to max ); Perfection! (Using the gem forge, upgrade all of the stats on nine Stellar Gems to max); The Next Step (Achieve Geode Mastery 20); Further Heights (Achieve Geode Mastery 100); Starting Spelunker (Get your first GAS module upgrade); Super Spelunker (Fully upgrade your GAS Module)."
            ]
        },
        {
            "heading": "Bomber Royale & Gardening",
            "body": [
                "Winning your first Bomber Royale match, throwing 5000 bombs in Bomber Royale, watering 1,000 plants, harvesting from 50 plants, and composting 10,000 items at the Compost Bin.",
                "The achievements here: Top Bomber (Win your first Bomber Royale match); Beaucoup Bombs (Throw 5000 bombs in Bomber Royale); Plant's Best Friend (Water 1,000 plants.); Reap what you Sow (Harvest from 50 plants.); Reduce, Reuse, Recompost (Compost 10,000 items at the Compost Bin.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Level a class, select a subclass, and do the Normal Shadow Tower boss kills.",
                "2. Build up Power Rank and gear, then return for the Hard and Ultra Shadow Tower kills with a group.",
                "3. Grind Stellar Gems and use the forge toward maxing one, then nine (\"Perfection!\").",
                "4. Progress Geode Mastery to 20 and 100 and fully upgrade your GAS module.",
                "5. Play Bomber Royale toward the 5000-bomb count, and keep a garden running for the watering, harvesting and composting goals.",
                "Tip: the gardening achievements tick over passively - plant a large club-world garden, water and harvest it whenever you log in, and dump surplus loot into the Compost Bin."
            ]
        }
    ]
};

// Plants vs. Zombies Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/plants-vs-zombies-goty.json), whose 21 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   3590 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "plants-vs-zombies-goty-achievement-guide",
    "category": "game",
    "gameSlug": "plants-vs-zombies-goty",
    "icon": "🌻",
    "title": "Plants vs. Zombies Achievement Guide",
    "summary": "A practical guide to all 21 Steam achievements in Plants vs. Zombies - none are hidden. Covers Adventure Mode and the Endless modes, the plant and Tree of Wisdom collections, the secret zombie and easter eggs, and the level-restriction challenge achievements including all 20 mini-games.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Plants vs. Zombies (GOTY Edition) has 21 Steam achievements and none of them are hidden - though every achievement's name and description has a trailing space in Steam's own data, which is preserved here. They cover completing Adventure Mode, the golden Sunflower trophy, streak targets in the I, Zombie / Vasebreaker / Survival Endless modes, collecting all 49 plants, growing the Tree of Wisdom to 100 feet, discovering the secret zombie, hypnotising the dance-off zombie, two explosion feats, enabling Mustache Mode, and a set of level-restriction challenges (beat a pool level with no peashooters, a roof level with no catapults) plus beating all 20 mini-games.",
                "Nothing is missable - Adventure Mode and every side mode can be replayed, and the collection and streak progress persist. The completion is short and easy; the only slow parts are the Endless streak targets (20 flags in Survival Endless is a long, careful session) and growing the Tree of Wisdom to 100 feet, which costs a large amount of Tree Food.",
                "Tip: do the level-restriction challenges (Don't Pea in the Pool, Grounded, Good Morning, No Fungus Among Us) on the earliest qualifying Adventure levels via the level replay - the restriction is the whole difficulty, so an early, easy level with a forgiving wave layout makes each one trivial."
            ]
        },
        {
            "heading": "Adventure & Endless Modes",
            "body": [
                "Completing Adventure Mode, the golden Sunflower trophy, the streak targets in I, Zombie Endless (10), Vasebreaker Endless (15) and Survival Endless (20 flags), collecting all 49 plants, growing the Tree of Wisdom to 100 feet, discovering the top-secret zombie, hypnotising the lead dancer, the potato-mine and cherry-bomb explosion feats, and enabling Mustache Mode.",
                "The achievements here: Home Lawn Security  (Complete adventure mode ); Nobel Peas Prize  (Get the golden sunflower trophy ); Better Off Dead  (Get to a streak of 10 in I, Zombie Endless ); China Shop  (Get to a streak of 15 in Vasebreaker Endless ); Immortal (Get to 20 flags in Survival Endless ); Morticulturalist (Collect all 49 plants ); Towering Wisdom  (Grow the Tree of Wisdom to 100 feet ); Cryptozombologist (Discover the top secret zombie ); Disco is Undead (Hypnotize the lead dancer zombie ); SPUDOW!  (Blow up a zombie using a potato mine ); Explodonator (Blow up 10 zombies with a single cherry bomb ); Ask Me About Mustache Mode  (Enable Mustache Mode )."
            ]
        },
        {
            "heading": "Level Challenge Feats",
            "body": [
                "The level-restriction challenges: a daytime pool level with no peashooters, bowling over 5 zombies with one Wall-Nut, a roof level with no catapult plants, a 30-coin no-disappear streak, 8,000 sun in one level, two Gargantuars killed with Corn Cob missiles, a daytime level with only Mushrooms and Coffee Beans, a nighttime level with no Mushrooms, and beating all 20 mini-games.",
                "The achievements here: Don't Pea in the Pool (Complete a daytime pool level without using pea shooters of any kind.); Roll Some Heads (Bowl over 5 zombies with a single Wall-Nut.); Grounded (Defeat a normal roof level without using any catapult plants.); Penny Pincher (Pick up 30 coins in a row on a single level without letting any disappear.); Sunny Days (Get 8000 sun during a single level.); Popcorn Party (Defeat 2 Gargantuars with Corn Cob missiles in a single level.); Good Morning (Complete a daytime level by planting only Mushrooms and Coffee Beans.); No Fungus Among Us (Complete a nighttime level without planting any Mushrooms.); Beyond the Grave (Beat all 20 mini games.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through Adventure Mode once for Home Lawn Security and the golden Sunflower trophy, which also unlocks most plants.",
                "2. Grow the Tree of Wisdom to 100 feet with Tree Food bought from Crazy Dave (this is the main gold sink) and collect the last few plants for Morticulturalist.",
                "3. Do the level-restriction challenges on early Adventure level replays.",
                "4. Beat all 20 mini-games for Beyond the Grave, and pick up the secret zombie, hypnotised dancer and Mustache Mode along the way.",
                "5. Grind the Endless mode streaks last - I, Zombie and Vasebreaker to their targets, then a long Survival Endless session to 20 flags for Immortal.",
                "Tip: for Survival Endless to 20 flags, build a stable eight-column defence (Twin Sunflowers behind Wall-Nuts behind Gatling Peas, with Melon-pults and Cob Cannons) before flag 5, then never rebuild - just replace losses, and use the Cob Cannons only on Gargantuar and Zomboni pushes."
            ]
        }
    ]
};

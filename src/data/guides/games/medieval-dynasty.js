// Medieval Dynasty Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/medieval-dynasty.json), whose 44 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1129580 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 1 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (PowerPyx / Game8 / PlayStationTrophies / TrueAchievements) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "medieval-dynasty-achievement-guide",
    "category": "game",
    "gameSlug": "medieval-dynasty",
    "icon": "🏡",
    "title": "Medieval Dynasty Achievement Guide",
    "summary": "A practical guide to all 44 Steam achievements in Medieval Dynasty (1 hidden). Covers the dynasty and story goals (a wife, an heir, playing as the heir, the main quest, 100 side quests), the settlement development levels, the six skill masteries, and a long list of survival and life-sim moments. One achievement is hidden - 'LumberJACKED', a 1,000-log quest - and its condition is researched from community 100% guides.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Medieval Dynasty has 44 Steam achievements and 1 is hidden. The hidden one is 'LumberJACKED' - complete the 'Uniegost's Story IV' quest by delivering 1,000 logs (only available on The Valley map). Everything visible is the dynasty loop (get a wife and an heir, then continue playing as the heir), the money and quest goals (1,000,000 coins, finish the main quest, 100 side quests, 50 inhabitants), the nine settlement development levels from Hermitage to City, the six skill masteries (level 10 in Extraction, Hunting, Farming, Diplomacy, Survival and Production), and a set of survival and life-sim feats - killing every animal type, surviving winter naked, visiting every village, giving your wife gifts for two years running, and 12 status effects at once.",
                "The catalog marks it difficulty 4. Nothing is missable, but it is a long game - '1,000,000 coins', 'Village Manager' (50 inhabitants), and 'City' development level are serious economic goals, and the six masteries mean grinding every skill to level 10. Playing as the heir needs your first character to age out or die.",
                "Tip: build a big logging economy early - it feeds the settlement development levels, the coin goal, and the hidden 'LumberJACKED' (1,000 logs for Uniegost's Story IV on The Valley map) all at once."
            ]
        },
        {
            "heading": "Dynasty & Story",
            "body": [
                "Getting a wife and an heir, playing as the heir, 1,000,000 coins, finishing the main quest, 100 side quests, 50 inhabitants, a 5,000-coin tax debt, selling 50 stolen goods, and getting caught stealing once and 50 times.",
                "The achievements here: M'Lady (Have a Wife.); Firstborn (Have an Heir.); The Dynasty Continues (Play as an Heir.); Show me the money! (Have 1000000 Coins.); Closure (Finish the main quest.); A helping hand (Complete 100 side quests.); Village Manager (Have at least 50 inhabitants.); I will pay next month, I swear (Have a tax debt of at least 5000 coins.); Must have been the wind (Sell 50 of the stolen goods during one dynasty.); It wasn't me! (Get caught stealing for the first time.); I may not be good at it after all... (Get caught stealing 50 times during one dynasty.)."
            ]
        },
        {
            "heading": "Homestead & Skills",
            "body": [
                "Building your first house, killing every wild animal type, being fully drunk, a 100-point archery score, visiting every village, surviving winter with no clothes, a mine on every cave, removing 100 stumps, and reaching each of the nine development levels from Hermitage to City.",
                "The achievements here: A new home (Build your first house.); Hunting Royale (Kill every type of wild animal during one dynasty.); I... am not... drunk (Be drunk (100%).); I wasn't even looking (Hit the archery target and get 100 or more points.); Strider (Visit every village during one dynasty.); Warm-blooded (Survive winter with no clothes on.); Caveman (Have mine built on every cave on the map.); My Stumps (Remove 100 stumps.); Hermitage (Reach Hermitage development level.); Camp (Reach Camp development level.); Small Farm (Reach Small Farm development level.); Farm (Reach Farm development level.); Hamlet (Reach Hamlet development level.); Settlement (Reach Settlement development level.); Village (Reach Village development level.); Town (Reach Town development level.); City (Reach City development level.)."
            ]
        },
        {
            "heading": "Mastery & Gags",
            "body": [
                "Reaching level 10 in Extraction, Hunting, Farming, Diplomacy, Survival and Production, 12 status effects at once, getting a mount, harvesting a field bigger than 6x6, being fully dirty, impaling a live animal with 4 spears, two years of wife gifts, your first inhabitant, sleeping in your bed every night for a year, dying, and the hidden 'LumberJACKED'.",
                "The achievements here: Master of Extraction (Get level 10 in Extraction.); Master of Hunting (Get level 10 in Hunting.); Master of Farming (Get level 10 in Farming.); Master of Diplomacy (Get level 10 in Diplomacy.); Master of Survival (Get level 10 in Survival.); Master of Production (Get level 10 in Production.); I wonder how many I can fit... (Get 12 status effects at once.); Look at my mount (Get a mount.); Harvestin' season (Harvest a field bigger than 6x6.); Dirty Henry (Be 100% dirty.); Hedgehog (Impale an animal with 4 spears while it's still alive.); Happy wife, happy life (Give your wife gifts for 2 following years.); Let's break a stick! (Get your first inhabitant.); Well earned rest (Sleep in your bed every night for the entire year.); Oopsie daisy (Die.); LumberJACKED (Complete the 'Uniegost's Story IV' quest by delivering 1,000 logs (only available on The Valley map).)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the main quest and start on side quests, building a house and your first few inhabitants.",
                "2. Grow the settlement through every development level toward City, and 50 inhabitants.",
                "3. Grind each of the six skills to level 10.",
                "4. Do the survival and life-sim feats (every animal, naked winter, every village, wife gifts, a mount).",
                "5. On The Valley map, complete Uniegost's Story IV with 1,000 logs for 'LumberJACKED', and continue as your heir.",
                "Tip: '1,000,000 coins' is the longest grind - set up a workshop chain (e.g. planks or tools) with hired workers and a Trading Post, and the money accumulates passively while you do everything else."
            ]
        }
    ]
};

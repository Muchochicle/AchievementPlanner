// World of Warships Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/world-of-warships.json), whose 43 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   552990 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "world-of-warships-achievement-guide",
    "category": "game",
    "gameSlug": "world-of-warships",
    "icon": "🚢",
    "title": "World of Warships Achievement Guide",
    "summary": "A practical guide to all 43 Steam achievements in World of Warships - none are hidden. Covers the battle and credit milestones, the naval-warfare kill feats, ship research and container openings, the campaigns and collections, and the co-op Operations goals.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "World of Warships has 43 Steam achievements and none of them are hidden. They are all long-haul live-service milestones: earning heroic achievements (10 / 50 / 100), winning Random Battles (10 / 50 / 100), earning credits (100,000 / 1,000,000 / 10,000,000), the naval-warfare kill feats (fire, flooding, ramming, base capture, 1,000,000 damage), researching ships (1 / 10 / 50), opening containers (10 / 100 / 1000, and a five-day streak), completing several Campaigns and their collections, and a large Operations block (50 / 125 / 250 operations, secondary tasks, allied ships saved, key ships destroyed).",
                "Nothing is missable - every counter simply accrues over your account's lifetime. This is a long completion purely by volume: 100 Random Battle wins, 10,000,000 credits and 250 successful Operations are hundreds of matches.",
                "Tip: play Operations (the co-op PvE scenarios) for the fastest, most reliable progress on the credit, damage, secondary-task and ship-survival achievements - they are far more forgiving than Random Battles and every counter still ticks."
            ]
        },
        {
            "heading": "Battle & Progression Milestones",
            "body": [
                "The heroic-achievement counts (10 / 50 / 100), Random Battle wins (10 / 50 / 100), credits earned (100k / 1M / 10M), and the naval-warfare kill feats - fire, flooding, ramming, capturing a Key Area, and 1,000,000 HP of damage.",
                "The achievements here: Battle Hero (Receive any 10 heroic achievements.); Legend of the Seas (Receive any 50 heroic achievements.); Bane of the Oceans (Receive any 100 heroic achievements.); Amateur (Win 10 Random Battles.); Warrior (Win 50 Random Battles.); Veteran (Win 100 Random Battles.); Initial Capital (Earn 100 000 credits in battles.); Moneybags (Earn 1 000 000 credits in battles.); Business Magnate (Earn 10 000 000 credits in battles.); Naval Warfare. Arson (Destroy an enemy ship by setting her on fire.); Naval Warfare. Flooding (Destroy an enemy ship by flooding.); Naval Warfare. Ramming (Destroy an enemy ship by ramming.); Naval Warfare. Tactics (Capture a Key Area or the enemy base.); Naval Warfare. Weaponry Basics (Cause 1 000 000 HP of damage to enemy ships.)."
            ]
        },
        {
            "heading": "Research, Containers & Campaigns",
            "body": [
                "Researching 1, 10 and 50 ships, opening 10 / 100 / 1000 containers plus a five-day streak, and completing the \"Science of Victory\" and \"Honorable Service\" campaigns and their with-Honors versions.",
                "The achievements here: Junior Naval Designer (Research a new ship.); Naval Constructor (Research 10 ships.); Chief Naval Architect (Research 50 ships.); Junior Supply Officer (Open 10 containers.); Supply Officer (Open 100 containers.); Senior Supply Officer (Open 1000 containers.); Smooth Supply (Open at least 1 container a day for 5 days in a row.); \"Science of Victory\" (Complete the final task of the Campaign); \"Science of Victory\" with Honors (Complete all tasks of the Campaign); \"Honorable Service\" (Complete the final task of the Campaign); \"Honorable Service\" with Honors (Complete all tasks of the Campaign)."
            ]
        },
        {
            "heading": "Operations",
            "body": [
                "The co-op Operations goals - 50 / 125 / 250 successful operations, 150 / 450 / 900 secondary tasks, 20 / 60 / 120 allied ships saved, and 25 / 75 / 150 key and auxiliary ships destroyed.",
                "The achievements here: Weather Beaten (Successfully complete 50 operations.); Old-Timer (Successfully complete 125 operations.); Experienced One (Successfully complete 250 operations.); Important Missions (Complete 150 secondary tasks in operations.); Special Orders (Complete 450 secondary tasks in operations.); Secret Instructions (Complete 900 secondary tasks in operations.); Shield (Have 20 allied ships survive in operations.); Guardian (Have 60 allied ships survive in operations.); Protector (Have 120 ships survive in operations.); Exterminator (Destroy 25 key ships and auxiliary ships in operations.); Raider (Destroy 75 key ships and auxiliary ships in operations.); Ravager (Destroy 150 key ships and auxiliary ships in operations.)."
            ]
        },
        {
            "heading": "Later Campaigns & Collections",
            "body": [
                "The \"Yamamoto Isoroku\" and \"American Cruisers\" collections and campaigns, plus the \"Hit Hard! Hit Fast! Hit Often!\" campaign final and with-Honors tasks.",
                "The achievements here: \"Yamamoto Isoroku\" (Complete the entire \"Yamamoto Isoroku\" collection); \"Yamamoto Isoroku\" (Complete the final task of the Campaign); \"Yamamoto Isoroku\" with Honors (Complete all tasks of the Campaign); American Cruisers (Complete the entire \"American Cruisers\" collection.); Hit Hard! Hit Fast! Hit Often! (Complete the final task of the Campaign.); Hit Hard! Hit Fast! Hit Often! with Honors (Complete all tasks of the Campaign.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play regularly to accrue Random Battle wins and credits toward the 100-win and 10,000,000-credit milestones.",
                "2. Grind Operations for the fastest progress on operations completed, secondary tasks, ships saved and key ships destroyed.",
                "3. Research your way up a tech tree line for the 1 / 10 / 50 ship-research achievements.",
                "4. Open your daily and earned containers, keeping a five-day streak going for \"Smooth Supply\".",
                "5. Work through the Campaigns and their collections for the remaining achievements.",
                "Tip: the naval-warfare kill feats (fire, flooding, ramming) are easiest in a low-tier match - take a cruiser with strong HE, set fires, and finish a burning destroyer by ramming."
            ]
        }
    ]
};

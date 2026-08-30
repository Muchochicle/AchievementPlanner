// Sonic Frontiers Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/sonic-frontiers.json), whose 40 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1237320 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "sonic-frontiers-achievement-guide",
    "category": "game",
    "gameSlug": "sonic-frontiers",
    "icon": "⚡",
    "title": "Sonic Frontiers Achievement Guide",
    "summary": "A practical guide to all 40 Steam achievements in Sonic Frontiers - none are hidden. Covers the story and island-completion achievements, the skill, stat and combat achievements, and the Portal, Cyber Space and fishing achievements.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Sonic Frontiers has 40 Steam achievements and none of them are hidden. The core is completing the main story on each of the four islands (Kronos, Ares, Chaos, Ouranos) plus the finale, and per-island completion sets - view every Side Story, complete every Challenge and reveal the whole map, and repair every Portal. Around that sit progression feats (unlock all Skills, max Power / Defense / Ring / Speed levels, gather 200 Koco), combat feats (defeat every enemy and guardian type, 50 Phantom Rushes), and the Cyber Space and fishing content.",
                "Nothing is missable - the open zones stay fully explorable after the story and everything can be finished in free roam. This is a medium completion; the longest parts are fully revealing every island map, all Cyber Space missions, and maxing all four stat levels.",
                "Tip: play the story through all four islands, then use free roam to sweep each island's Challenges, Side Stories and Portals in one pass per island - fishing at the Big-the-Cat spots is also the fastest way to buy Koco and Vault Keys to fill in gaps."
            ]
        },
        {
            "heading": "Story & Island Completion",
            "body": [
                "Completing the Kronos tutorials, defeating the Titan and finishing the main story on Kronos, Ares, Chaos and Ouranos Islands and the finale, viewing all Side Stories per island and overall, and completing all Challenges and fully revealing the map on each island.",
                "The achievements here: The Journey Begins (Completed the Kronos Island tutorials.); The Beginning (Defeated the Titan and completed the main story on Kronos Island.); Ancient Defiance (Defeated the Titan and completed the main story on Ares Island.); Futile Resistance (Defeated the Titan and completed the main story on Chaos Island.); Hope Across Ages (Defeated the Titan and completed the main story on Ouranos Island.); A Land at Peace (Defeated the final threat and completed the main story.); Kronos Island Expert (Viewed all Side Stories on Kronos Island.); Ares Island Expert (Viewed all Side Stories on Ares Island.); Chaos Island Expert (Viewed all Side Stories on Chaos Island.); Ouranos Island Expert (Viewed all Side Stories on Ouranos Island.); Expert Historian (Viewed all Side Stories.); Kronos Island Explorer (Completed all Challenges on Kronos Island and fully revealed the map.); Ares Island Explorer (Completed all Challenges on Ares Island and fully revealed the map.); Chaos Island Explorer (Completed all Challenges on Chaos Island and fully revealed the map.); Ouranos Island Explorer (Completed all Challenges on Ouranos Island and fully revealed the map.)."
            ]
        },
        {
            "heading": "Skills, Stats & Combat",
            "body": [
                "Unlocking all Skills, a first Power Boost, a first and 50 Phantom Rushes, gathering 200 Koco, meeting Elder and Hermit Koco, maxing Power, Defense, Ring and Speed levels, defeating all enemy types, a first and all guardian types, destroying 100 breakable objects, and encountering a starfall.",
                "The achievements here: Unrivaled Aptitude (Unlocked all Skills.); Speed Demon (Activated a Power Boost for the first time.); Combo Convert (Performed a Phantom Rush for the first time, outside of the training simulator.); Combo Crackerjack (Performed Phantom Rush 50 times, outside of the training simulator.); Koco Leader (Gathered 200 Koco.); Elder Koco Encounter (Spoke with Elder Koco for the first time.); Hermit Koco Encounter (Spoke with Hermit Koco for the first time.); Herculean Hedgehog (Raised Power Level to MAX.); Hardened Hedgehog (Raised Defense Level to MAX.); Hearty Hedgehog (Raised Ring Level to MAX.); Hypersonic Hedgehog (Raised Speed Level to MAX.); Easy Prey (Defeated all enemy types.); Unknown Threat (Defeated a guardian for the first time.); Threats Identified (Defeated all guardian types.); Swath of Destruction (Destroyed 100 breakable objects.); Celestial Rain (Encountered a starfall for the first time.)."
            ]
        },
        {
            "heading": "Portals, Cyber Space & Fishing",
            "body": [
                "Repairing all Portals on Kronos, Ares, Chaos and Ouranos Islands, completing all Missions in one Cyber Space area, a first Rank S time, the fishing tutorial, earning 100 Purple Coins, and landing all catches at one fishing spot.",
                "The achievements here: Kronos Island Memories (Repaired all Portals on Kronos Island.); Ares Island Memories (Repaired all Portals on Ares Island.); Chaos Island Memories (Repaired all Portals on Chaos Island.); Ouranos Island Memories (Repaired all Portals on Ouranos Island.); Perfect Run (Completed all Missions in one Cyber Space area.); Superior Ranking (Achieved Rank S time, for the first time in a Cyber Space area.); Big Encounter (Completed the fishing tutorial.); Ticket to Tranquility (Earned 100 Purple Coins.); Angler's Club (Landed all catches at one fishing spot.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the main story through all four islands and the finale.",
                "2. For each island, sweep free roam for its Challenges (which reveal the map), Side Stories, and Portals.",
                "3. Do the combat feats (all enemy and guardian types, 50 Phantom Rushes, 100 breakables) during exploration.",
                "4. Max the four stat levels (Power, Defense, Ring, Speed) by feeding Koco and seeds - fish at Big's spots to buy what you are missing.",
                "5. Do the Cyber Space content (all missions in one area, a Rank S time) and finish the fishing achievements.",
                "Tip: fishing bypasses most grinds - trade Purple Coins for Vault Keys, Koco, Memory Tokens and Portal Gears, so a session at a fishing spot can instantly finish the Koco, Portal and Purple Coin achievements without hunting collectibles across the map."
            ]
        }
    ]
};

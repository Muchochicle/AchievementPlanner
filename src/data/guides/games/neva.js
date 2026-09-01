// Neva Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/neva.json), whose 18 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   2420660 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 8 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (TrueAchievements / Steam Community / game wikis) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "neva-achievement-guide",
    "category": "game",
    "gameSlug": "neva",
    "icon": "🐺",
    "title": "Neva Achievement Guide",
    "summary": "A practical guide to all 18 Steam achievements in Neva (8 hidden). Covers all four seasons of the story, from Summer through the finale, and the collectible and companion-care achievements. Eight of the achievements are hidden and their unlock conditions are researched from community 100% guides.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Neva has 18 Steam achievements and 8 are hidden. Ten cover the story across its four seasons - Summer, Fall, Winter and the finale - plus finding the hidden birds, breaking the enemy statues, calling for Neva, and collecting everything. The other eight are hidden: milestones within each season (a friendly-fire kill, soothing young Neva, cleansing the corrupted animals, the season-ending chapters), a quiet moment with the tree in the finale, and petting Neva twenty times.",
                "The catalog marks it difficulty 2. Nothing is missable and there's no combat challenge to speak of; the hidden achievements mostly just want you to notice and act on specific moments (comforting Neva, standing still under the tree) rather than rushing through.",
                "Tip: play unhurried and pet Neva whenever you get the chance - between that and noticing quiet story beats, most of the hidden achievements come naturally."
            ]
        },
        {
            "heading": "Summer & Fall Beginnings",
            "body": [
                "Feeding Neva and finishing Summer Part 1, a hidden friendly-fire kill and finishing Summer Part 2, soothing young Neva in Fall Part 1, finishing Fall Part 1 and Part 2, cleansing the corrupted animals in Fall Part 2, and breaking all the enemy statues in Fall Part 3.",
                "The achievements here: Provide (Feed Neva in Summer Part 1); Germination (Finished Summer Part 1); Wily (Let an enemy strike and kill another enemy (a friendly-fire kill) during Summer Part 2.); Sprouting (Finished Summer Part 2); Mentoring (Soothe young Neva every time the game offers the chance to during Fall Part 1.); Establishment (Finished Fall Part 1); Growth (Finished Fall Part 2); Empathy (Cleanse every corrupted animal you encounter during Fall Part 2.); Comfort (Break all the enemy statues in Fall Part 3)."
            ]
        },
        {
            "heading": "Fall's End, Winter & Finale",
            "body": [
                "Finishing Fall Part 3, finding the hidden birds and finishing Winter Part 1, crying out for Neva and finishing Winter Part 2, finishing the game, a quiet moment under the tree in the finale, collecting everything, and petting Neva twenty times.",
                "The achievements here: Dormancy (Finish Fall Part 3.); Curiosity (Find the hidden birds in Winter Part 1); Flowering (Finish Winter Part 1.); Longing (Cry for Neva in Winter Part 2); Pollination (Finish Winter Part 2.); Seed (Finish the game); Memories (In the finale, stand still under the tree without acting - Neva will start singing on her own.); Blossoming (Find all collectibles); Loving (Pet Neva twenty times over the course of the playthrough.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through Summer, feeding and bonding with young Neva, and noticing the friendly-fire moment in Part 2.",
                "2. Move into Fall - soothe Neva whenever you can in Part 1, cleanse every corrupted animal in Part 2, and break all the statues in Part 3.",
                "3. In Winter, find the hidden birds in Part 1 and cry out for Neva in Part 2.",
                "4. At the finale, just stand still under the tree for a moment before moving on, then finish the game.",
                "5. Collect everything you can along the way, and pet Neva twenty times total across the whole playthrough.",
                "Tip: nothing here is missable or difficult - this is a short, one-sitting game, so a relaxed single playthrough gets all 18 achievements."
            ]
        }
    ]
};

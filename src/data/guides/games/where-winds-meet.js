// Where Winds Meet Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/where-winds-meet.json), whose 61 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   3564740 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 8 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (TrueAchievements / Steam Community / game wikis) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "where-winds-meet-achievement-guide",
    "category": "game",
    "gameSlug": "where-winds-meet",
    "icon": "🎐",
    "title": "Where Winds Meet Achievement Guide",
    "summary": "A practical guide to all 61 Steam achievements in Where Winds Meet (8 hidden). Covers the Qinghe, Kaifeng and Hexi regions' campaigns, exploration and collectible achievements, gear and martial-art progression, and the game's endgame and secret achievements. Eight of the achievements are hidden and their unlock conditions are researched from community 100% guides.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Where Winds Meet has 61 Steam achievements and 8 are hidden. About twenty cover the Qinghe region - its story campaigns (Palace of Annals, Still Shore, Halo Peak), collectible chests and Oddities, its highest point, the Meow Meow cat puzzles, and two hidden secret encounters. The middle section covers gear and martial-art progression (weapon mastery, Internal Arts, gear enhancement), the Qinghe story ending, Dark Surge stories, and the Kaifeng and Hexi regions' own campaigns, chests and boss fights, including three more hidden achievements. The last section is the Kaifeng and Hexi endgame - the Hidden Mountain campaign, the Emperor's palace and mask-related achievements, character duels, and three final hidden achievements including a limited-time event unlock.",
                "The catalog marks it difficulty 3. Nothing here is especially hard in isolation, but it's a large open-world wuxia game and getting every region's campaigns, collectibles and hidden achievements is a genuine time investment; 'The Unspeakable Victory' was tied to a limited-time in-game event and may no longer be obtainable for new players.",
                "Tip: follow a collectibles map per region for the chests, Oddities and Meow Meow Puzzles, and check a hidden-achievement guide before you commit to story choices, since some hidden achievements need you to deliberately lose a fight or pick an unusual option."
            ]
        },
        {
            "heading": "Qinghe: Story, Exploration & Secrets",
            "body": [
                "The Void King and Wolf Maiden boss fights, the Zheng E speedrun, the Palace of Annals, Still Shore and Jinming Pool campaigns, the Heavenfall campaign and the Nameless General, 250 Oddities and 40 chests in Kaifeng, 150 peculiar challenges and 40 chests in Qinghe, the highest points of Qinghe and Kaifeng, the Meow Meow Puzzles in both regions, and two hidden achievements.",
                "The achievements here: The Hero is the Voice of the World (All achievements unlocked. With heroic compassion, we've journeyed thousands of miles together.); Goose Slayer (Defeat the Demon Goose during the 'To Heal or Not to Heal' side quest near West Heaven's Pier on Moonveil Mountain - let its failed treatment 'defeat' you once, then return and slay it.); Victory in the Abyss (Defeat ​The Void King within 60s.); Mighty Wolf Rider (Defeat Wolf Maiden.); Speedrun in Granary (Defeat Zheng E within 180s.); Past Secrets Unsung (Clear Campaign: Palace of Annals.); Source of Still Shore (Clear Campaign: Still Shore.); Jinming Pool Secrets (Clear Campaign: Jinming Pool.); Savior of Kaifeng (Clear Campaign: Heavenfall.); Broken Spear Victory (Defeat the Nameless General.); Quick on the Uptake - Kaifeng (Collect 250 Oddities in Kaifeng.); Qinghe · Seeker of Melodies (Complete 150 peculiar challenges in the Qinghe area.); Quick on the Uptake - Qinghe (Collect 40 chests.); Every Inch Covered - Kaifeng (Collect 40 chests in Kaifeng.); Horizon Seeker (Reach the highest point in Qinghe: Moonveil Mountain Tower.); Peak of All Arts (Reach the highest point, East of Beast Reverie, in the Fair Grounds of Kaifeng.); Paws on Point - Qinghe (Solve 10 Meow Meow Puzzles in Qinghe.); Feline Riddler - Kaifeng (Solve 5 Meow Meow Puzzles in Kaifeng.); Life Goes to Dogs (Drink wine with the three stray dogs on the path to the Evercare Clinic to transform into a rural dog.); The Old Timer Got It (Intentionally lose the early sparring match against Elder Gongsun at the General's Shrine.)."
            ]
        },
        {
            "heading": "Gear, Martial Arts & Kaifeng/Hexi Campaigns",
            "body": [
                "Gear enhancement and tuning, equipping 4 Internal Arts, upgrading a Martial Style to level 30, mastering the Panacea Fan and Strategic Sword, the Qinghe story ending and Halo Peak campaign, a Dark Surge story, 3 encounters each in Qinghe and Kaifeng, the Hexi region's chests and Meow Meow Puzzles, defeating Wucan, Wang Quanyou's egg-smashing game, and three more hidden achievements.",
                "The achievements here: Echoes Unbound (Reach Avg. Enhancement Lv.5.); Power of Four (Equip 4 Internal Arts.); Perfect Harmony (Tune an Epic gear to max level.); First Resonance (Enhance a piece of gear to Lv.2.); Skill at Hand (Upgrade a Martial Style to Lv. 30.); Healing Hands (Master the Panacea Fan.); The Grand Strategist (Master the Strategic Sword.); The Final Destiny - Qinghe (Unlock the ending of main story of Qinghe.); Buddha's Afterglow (Clear Campaign: Halo Peak.); The First Finding (Unlock a Dark Surge story.); Voice of the Valiant (Complete the 'Furnace of Righteousness' story content in the Kaifeng region.); Quirks of Fate - Qinghe (Complete 3 encounters in Qinghe.); Quirks of Fate - Kaifeng (Complete 3 encounters in Southeast Kaifeng.); A Promise Fulfilled (Finish the Granary of Plenty questline in full - defeat Zheng E, then place Zheng E's Notes and read Zheng E's Letter for its epilogue.); Hexi: Relentless Hunter (Collect 20 chests of any quality in Hexi.); Hexi: Paws on Point (Solve 6 Meow Meow Puzzles in Hexi.); A Fish Out of Water (A fish atop the tallest tree? In this desert, anything goes.); Cat Fever (Pet the cat at Kitty Posy in the Hexi region five times, after completing its prerequisite quests.); Swift Annihilation (Defeat Wucan within 180 seconds.); Egg-cellent Luck (Perform a 10x smash in Wang Quanyou's egg-smashing game.)."
            ]
        },
        {
            "heading": "Endgame, Palace & Final Secrets",
            "body": [
                "The Hexi Jianghu Legacy epilogue, all Tales and Echoes in Hexi, the Dim Lamp Night campaign, exploring every room of the Emperor's palace, earning a rival's loyalty, a moonlit duel with the Black-Clad Thief, the Hidden Mountain campaign at Skyward City Ruins, wearing the Infinite Truths mask in Derndale, and three final hidden achievements.",
                "The achievements here: Alone in Chang'an (Complete Hexi Jianghu Legacy: The Homeward Vow.); Hexi: Full Moon Rising (Unlock all Tales and Echoes in Hexi.); A Squeak to Remember (The tiny squeak of a woodchuck sealed your defeat.); Reflections of Obsession (Clear Campaign - Dim Lamp Night.); The Unspeakable Victory (A limited-time event achievement - perform the kneeling Goosy gesture in front of each 'Resting' Campaign Challenge boss.); All Hail Me (Your martial prowess is the stuff of legend. Someone fetch the imperial robes. They were made for you.); The Grand Tour (If the Emperor can wander these halls, so can you. Every last room of them.); Strength of Character (Anyone can win by force, but true loyalty can't be beaten into someone. Earn it.); We're Cool Now (Cross blades with the Black-Clad Thief under the moonlight.); The Real Treasure (The palace holds more than silver and gold. Some things money simply can't buy.); King for a Day (Complete the Imperial Palace quest 'Throne and Storm', then sit on the Emperor's throne in Chunyuan Hall.); A Heart in Ruins (Some wounds are not carved in flesh, but in the soul itself.); Heart of Gold (Every story needs an ending. You chose to make this one gentle.); Boop the Snoot (Just one little boop. What could go wrong?); No Mountain High Enough (I ask every mountain here: which of you dares stand taller?); A Flawed Ascension (Complete Hidden Mountain Campaign - Skyward City Ruins); High Spirits (Never fly a bird while drunk, unless you're in a dream.); Sky's the Limit (Always strive to fly higher, no matter the time or place.); My Domain, My Rules (Allow no one to sleep peacefully in your domain.); Mountain of Skulls (Add your enemies' heads to the macabre monument.); Undercover Boss (Enter Derndale for the first time while wearing the Infinite Truths mask.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through the Qinghe region first - story campaigns, the region's chests, Oddities and Meow Meow Puzzles, and the two early hidden achievements.",
                "2. Push your gear and martial-arts progression alongside the story - Internal Arts, gear enhancement, and mastering weapons like the Panacea Fan and Strategic Sword.",
                "3. Move into Kaifeng and Hexi for their own campaigns, collectibles, bosses (Wucan, the Granary's Zheng E) and hidden achievements.",
                "4. Clean up the endgame content - the Hidden Mountain campaign, the Emperor's palace, the Black-Clad Thief duel, and King for a Day.",
                "5. Check in on any active in-game event for The Unspeakable Victory - it's tied to limited-time Campaign Challenge content and won't always be available.",
                "Tip: some hidden achievements want you to deliberately lose a fight or make an unusual choice - a hidden-achievement checklist saves a lot of guesswork."
            ]
        }
    ]
};

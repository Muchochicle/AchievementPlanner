// Monster Hunter Wilds Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/monster-hunter-wilds.json), whose 50 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   2246340 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 13 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (TrueAchievements / Steam Community / game wikis) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "monster-hunter-wilds-achievement-guide",
    "category": "game",
    "gameSlug": "monster-hunter-wilds",
    "icon": "🐉",
    "title": "Monster Hunter Wilds Achievement Guide",
    "summary": "A practical guide to all 50 Steam achievements in Monster Hunter Wilds (13 hidden). Covers the story missions, the hunting-life firsts, and the rank, crafting and crown grinds. Thirteen of the achievements are hidden and their unlock conditions are researched from community 100% guides.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Monster Hunter Wilds has 50 Steam achievements and 13 are hidden. Nine cover the main story - one medal for each of the eight story chapters plus the catch-all for earning every other award. Nineteen are hunting-life firsts and mid-game milestones: first investigation, field survey and side mission, first fish, steak, mount and Sneak Attack, the two hidden desert/forest creature catches, pop-up camps, and Seikret customisation. The last twenty-two are the long grinds - Hunter Rank 100, Rarity 7 gear, Artian weapons, 1,000,000 zenny, miniature and gold crowns, 50 captures, 100 large-monster hunts, 50 Tempered monsters, 50 Apex Predators, and 100 multiplayer quests.",
                "The catalog marks it difficulty 3. Almost everything is time rather than skill - the gold-crown hunting log ('for many monsters') and the 50-Tempered / 50-Apex grinds are the longest.",
                "Tip: play the story to the end to unlock High Rank, then settle into a long grind of investigations, crown hunting and Tempered/Apex hunts while crafting Rarity 7 and Artian gear."
            ]
        },
        {
            "heading": "Story Missions & Overall",
            "body": [
                "Earning every other award ('Eastward Wings'), and completing each of the eight story missions - 'The Desert Trotters', 'Beyond the Deluge', 'Long-forgotten Flame', 'Monster Hunter', 'New Ecosystems', 'Wyvern Sparks and Rose Thorns', 'A World Turned Upside Down' and the finale 'What Lies Ahead'.",
                "The achievements here: Eastward Wings (Obtained all other awards.); Windward Lands (Complete the story mission 'The Desert Trotters' (reaching the Windward Plains).); Shadow in the Downpour (Complete the story mission 'Beyond the Deluge' (the Scarlet Forest chapter).); Guardians of the Forge (Complete the story mission 'Long-forgotten Flame' (the Oilwell Basin chapter).); Bringer of Harmony (Complete the story mission 'Monster Hunter'.); New Ecosystems (Complete the story mission 'New Ecosystems' (the start of High Rank).); A Bitter Environment (Complete the story mission 'Wyvern Sparks and Rose Thorns'.); Beyond the Black Wings (Complete the story mission 'A World Turned Upside Down'.); One Corner of the World (Complete the final story mission 'What Lies Ahead' and see the ending.)."
            ]
        },
        {
            "heading": "Hunting Life & Firsts",
            "body": [
                "Fifty quests, your first investigation, Field Survey and side mission (and 30 different side missions), first fish, steak and BBQ cook, first mount and Sneak Attack, 50 Focus Mode weak-point hits, catching the shooting-star desert creature and the coin-bearing forest crab, a giant squid and 30 whoppers, 10 pop-up camps, camp customisation, a binocular gold-crown spot, and Seikret customisation.",
                "The achievements here: A True Hunter Is Never Satisfied (Completed 50 quests.); Let the Investigations Begin! (Completed your first investigation.); The Hunt Is On! (Completed your first Field Survey.); A Step Toward Mutual Understanding (Completed your first side mission.); East to West, A Hunter Never Rests (Completed 30 different side missions.); Angling for a Bite (Successfully fished for the first time.); Mmm, So Tasty! (Successfully cooked a well-done steak for the first time.); Was It a Meal to Remember? (Cooked over the BBQ Grill for the first time.); The Bigger They Are... (Successfully mounted a monster for the first time.); Hunter-Assassin (Performed your first successful Sneak Attack.); Hit 'Em Where It Hurts! (Landed 50 successful attacks on weak points or wounds in Focus Mode.); A Prize Held High (Catch a Curioshell Crab - which bears an Ancient Wyvern Coin - at the Flowering Rocks in the Scarlet Forest.); I Caught a Shooting Star! (Catch a Baunos, the desert creature that shines like a shooting star, in the Windward Plains at night.); Monster (Squid) Hunter (Caught a giant squid while fishing.); A-fish-ionado (Reeled in 30 whoppers while fishing.); Campmaster (Established Pop-up Camps in 10 places.); Glamper (Customized a Pop-up Camp for the first time.); A Keen-eyed Observation (Used the binoculars to spot a gold-crown large monster.); Ride-or-die Companion (Customized your Seikret or changed its decorations for the first time.)."
            ]
        },
        {
            "heading": "Rank, Crafting & Crowns",
            "body": [
                "Hunter Rank 100, five Rarity 7+ armor pieces and weapons, 100 quests with your Palico, a Rarity 8 Artian weapon, 1,000,000 zenny, 10 Rarity 6 special items, hunting many different large monsters, 50 Tempered monsters, miniature and gold crowns (first, 10+, and many), 50 captures, 100 large-monster hunts, 50 Apex Predators, and the multiplayer and social achievements.",
                "The achievements here: Established Hunter (Reached Hunter Rank 100.); Impregnable Defense (Forged five different pieces of armor with Rarity 7 or higher.); Power Is Everything (Forged five different weapons with Rarity 7 or higher.); Someone Worth Following (Completed 100 quests with your Palico deployed.); A Legacy Restored (Craft an Artian Weapon of Rarity 8.); Bourgeois Hunter (Possessed 1,000,000 zenny.); Explorer of the Eastlands (Obtained 10 different special items of Rarity 6.); Monster Ph.D. (Hunted many different large monsters.); Seasoned Hunter (Hunt 50 Tempered monsters.); Miniature Crown (Obtained your first miniature crown in the Hunting Log.); Miniature Crown Collector (Obtained a miniature crown for 10 or more monsters in the Hunting Log.); Miniature Crown Master (Obtained a miniature crown for many monsters in the Hunting Log.); Giant Crown (Obtained your first silver crown or higher in the Hunting Log.); Giant Crown Collector (Obtained a gold crown for 10 or more monsters in the Hunting Log.); Giant Crown Master (Obtained a gold crown for many monsters in the Hunting Log.); Capture Pro (Captured 50 monsters.); Monster Slayer (Hunted 100 large monsters.); Top of the Food Chain (Hunt 50 Apex Predators.); Hunters United (Completed a quest via multiplayer.); Hunters United Forever (Completed 100 quests via multiplayer.); Gossip Hunter (Viewed 30 different Hunter Profiles.); Newly Forged Bonds (Followed someone for the first time.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the main story to the finale to unlock High Rank and the eight chapter medals.",
                "2. Do the one-off firsts as they come up: fishing, cooking, mounting, Sneak Attack, pop-up camps, Seikret customisation.",
                "3. Catch the Curioshell Crab (Scarlet Forest) and the Baunos (Windward Plains at night) for the two hidden creature achievements.",
                "4. Grind Hunter Rank 100, Rarity 7 gear, a Rarity 8 Artian weapon, and 1,000,000 zenny.",
                "5. Chase crowns (miniature and gold) across the hunting log, and rack up 50 Tempered monsters, 50 Apex Predators, 50 captures and 100 large-monster hunts.",
                "Tip: run Tempered investigations in High Rank - they progress 'Seasoned Hunter', 'Top of the Food Chain', 'Monster Slayer', 'Capture Pro' and the gold-crown log all at once."
            ]
        }
    ]
};

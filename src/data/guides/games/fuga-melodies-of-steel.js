// Fuga: Melodies of Steel Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/fuga-melodies-of-steel.json), whose 43 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1357860 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 2 achievement(s) are Steam-hidden or ship no Steam
//   description; their description here is researched from community
//   100% guides and is a curatorial summary. Every other description is
//   Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "fuga-melodies-of-steel-achievement-guide",
    "category": "game",
    "gameSlug": "fuga-melodies-of-steel",
    "icon": "🚂",
    "title": "Fuga: Melodies of Steel Achievement Guide",
    "summary": "A practical guide to all 43 Steam achievements in Fuga: Melodies of Steel (2 hidden). Both hidden achievements are missable, run-defining goals: the all-12-children 'Perfect Harmony' ending and saving an ally from despair in Chapter 11. Everything else - the twelve chapter clears, battle ranks, the Taranis facility upgrades, life-sim activities and affinity bonds - carries Steam's own text.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Fuga: Melodies of Steel has 43 Steam achievements, 2 of them hidden. Twelve children commandeer the giant tank Taranis to fight the Berman Empire that took their families. The visible achievements cover the twelve chapter clears, battle performance (50 S-ranks, delaying enemies, elite battles, link attacks), leveling every character to 50, the Taranis facility upgrades and life-sim activities (fishing, cooking, laundry, farming, the observation room), the comic-page collection and the affinity bonds.",
                "The 2 hidden achievements are both missable: 'Perfect Harmony' needs the final boss beaten with all 12 children alive (which means never firing the Soul Cannon after its tutorial), and 'A Real Friend' needs an ally saved from despair in Chapter 11 by raising Britz's affection in time.",
                "The catalog marks it difficulty 2 and single-playthrough - though seeing 'Perfect Harmony' safely usually means a careful dedicated run or the chapter-select. The Soul Cannon requires a child's life to fire; avoiding it entirely is the key constraint."
            ]
        },
        {
            "heading": "Story Chapters",
            "body": [
                "The twelve chapter-clear markers.",
                "The achievements here: Night Without End (Cleared Chapter 1.); The Morning Rain (Cleared Chapter 2.); Two Arabesques (Cleared Chapter 3.); Serenade for the Doll (Cleared Chapter 4.); Evenings Lit by the Burning Coals (Cleared Chapter 5.); Prelude to the Afternoon of a Faun (Cleared Chapter 6.); Moon Descends Upon the Temple that Once Was (Cleared Chapter 7.); The Wind in the Plain (Cleared Chapter 8.); The Wounded Laurel (Cleared Chapter 9.); The Council of the False Gods (Cleared Chapter 10.); Forgotten Songs (Cleared Chapter 11.); From Dawn to Noon on the Sea (Cleared Chapter 12.)."
            ]
        },
        {
            "heading": "Battle & the Taranis",
            "body": [
                "Battle performance - link attacks, S-ranks, delaying enemies, elite battles - leveling to 50, and the hidden 'Perfect Harmony' all-12 ending.",
                "The achievements here: Link Attacker (Used a link attack.); Perfect Harmony (Beat the final boss with all 12 children alive, then pick 'We swear on our tails, we'll never give up!' - this requires never firing the Soul Cannon outside its mandatory tutorial.); Little Veteran (Attained S rank in battle 50 times.); Prankster (Delayed the enemy 100 times.); Badge of the Hero (Won an elite battle.); Legendary Hero (Won 10 elite battles.); Honest Effort (Reached level 50 with a character.); Expert Team (Reached level 50 with all characters.); Engineering Enthusiast (Successfully made an upgrade.); Perfect Player (Unlocked all achievements.); One Small Step (Won a battle.)."
            ]
        },
        {
            "heading": "Life on Board",
            "body": [
                "The Taranis facilities and life-sim activities: upgrades, scrap fishing, cooking, laundry, farming, the dormitory, facility expansion and the observation room.",
                "The achievements here: Skilled Craftsman (Fully upgraded something.); Fishing Enthusiast (Succeeded at scrap fishing.); Expert Angler (Scrap fished 50 times.); Cooking Enthusiast (Succeeded at cooking.); Laundry Enthusiast (Succeeded at the laundry.); Gardening Enthusiast (Harvested the farm.); Farming Enthusiast (Harvested 200 items from the farm.); Sleep Well, Grow Up Healthy (Relieved status ailments by sleeping in the dormitory.); Steady Enhancement (Expanded a facility.); Perfect Facility (Expanded all facilities to the max level.); Completion of Intelligence (Obtained information on 30 locations from the observation room.); Ace (Reached level 25 with a character.); Explorer Enthusiast (Went exploring.)."
            ]
        },
        {
            "heading": "Exploration & Bonds",
            "body": [
                "Exploration ranks, the comic-page collection, and the affinity system - including the hidden 'A Real Friend' Chapter 11 rescue.",
                "The achievements here: Explorer Expert (Attained S rank in exploration 10 times.); Comic Collector (Obtained all comic pages.); A Real Friend (Save an ally who falls into despair in Chapter 11 by building Britz's affection high enough before the end of Chapter 10.); Soothing Nature (Revitalized a depressed ally.); Conversationalist (Raised affinity to level 3 with an ally.); True Bonds (Raised affinity to level 10 with an ally.); Shared Destiny (Raised affinity to level 10 with 30 pairs.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Decide up front whether this run is for 'Perfect Harmony' - if so, never fire the Soul Cannon after its tutorial, and keep every child's HP managed.",
                "2. Play all twelve chapters, keeping affinity high across pairs; push Britz's affection early so you can save the ally in despair in Chapter 11 for 'A Real Friend'.",
                "3. Between missions, cycle the Taranis life-sim activities - fishing, cooking, laundry, farming, the dormitory - and expand every facility to max.",
                "4. Grind battle ranks (50 S-ranks, elite battles) and level every character to 50.",
                "5. Collect all comic pages and finish the affinity bonds, then take the final boss with all 12 alive and choose the swear-on-our-tails line.",
                "Tip: the Soul Cannon is the single biggest trap for 'Perfect Harmony' - the game repeatedly offers it as an easy way out of a hard fight, and firing it once (which sacrifices a child) permanently locks the ending, so treat every 'use the Soul Cannon?' prompt as a hard no and retreat or grind levels instead."
            ]
        }
    ]
};

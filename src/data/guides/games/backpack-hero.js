// Backpack Hero Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/backpack-hero.json), whose 35 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1970580 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 2 hidden achievement(s) ship no official description from
//   Steam; their requirements below are curatorial, researched from public
//   community guides.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "backpack-hero-achievement-guide",
    "category": "game",
    "gameSlug": "backpack-hero",
    "icon": "🎒",
    "title": "Backpack Hero Achievement Guide",
    "summary": "A practical guide to all 35 Steam achievements in Backpack Hero - 2 are hidden. Covers Quick Run wins with every hero, unlocking heroes and biomes, item mastery and inventory-loadout feats, and the 2 hidden story-progression achievements.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Backpack Hero has 35 Steam achievements, and 2 are hidden. The visible list covers winning a Quick Run with each of the game's six heroes, unlocking new heroes and biomes as you progress Story Mode, item-discovery milestones, and a long run of inventory-loadout feats (carrying a set number of shivs, structures, manastones, arrows, consumables, status effects, cursed items, or a full armor set at once). The 2 hidden achievements are both Story Mode progression beats.",
                "Nothing is missable - every hero unlock, biome discovery, and item-loadout achievement can be earned on any future run, and Story Mode progress is permanent. The genuine long pole is item discovery (700 items found), since Backpack Hero has a huge item pool and finding that many needs broad, varied play across many runs rather than repeating the same build.",
                "Tip: several inventory-loadout achievements (Shiv Master, Mage, Archer, Glutton, Fully Armored) are much easier to plan for deliberately than to stumble into - once you know a run's item pool is favoring a certain category (throwing weapons, magic, ranged, consumables), lean into it rather than fighting the run's natural direction."
            ]
        },
        {
            "heading": "Quick Run Wins & Early Progress",
            "body": [
                "Winning a Quick Run overall and then specifically as Purse, Satchel, Tote, Pochette, and CR-8, plus finding Prada's Locket and unlocking the Town Hall.",
                "The achievements here: Quick Hero (Win a Quick Run); Purse Hero (Win a Quick Run as Purse); Satchel Hero (Win a Quick Run as Satchel); Tote Hero (Win a Quick Run as Tote); Pochette Hero (Win a Quick Run as Pochette); CR-8 Hero (Win a Quick Run as CR-8); Prada's Locket (Find Prada's Locket); Town Hall (Unlock the Town Hall)."
            ]
        },
        {
            "heading": "Heroes & Biome Discovery",
            "body": [
                "Unlocking the Satchel, Tote, Pochette, and CR-8 heroes, and discovering the Deep Caves, Bramble, Enchanted Swamp, Magma Core, and Frozen Heart biomes.",
                "The achievements here: Bird Hero (Unlock Satchel); Toad Hero (Unlock Tote); Porcupine Hero (Unlock Pochette); Robotic Hero (Unlock CR-8); Deep Explorer (Discover the Deep Caves); Thorny (Discover the Bramble); Swampland (Discover the Enchanted Swamp); Toasty (Discover the Magma Core); Shivers (Discover the Frozen Heart)."
            ]
        },
        {
            "heading": "Mastery & Item Collection",
            "body": [
                "Winning a run in Hardmode, discovering 200/400/700 items, attracting 40 residents to Haversack Hill, and a long run of inventory-loadout feats: carrying 5 shivs, 5 structures, giving a Tasty Fly to a merchant, wearing two shoehats at once, carrying 5 manastones, 5 arrows, 7 consumables, having 5 status effects at once, carrying 4 cursed items, stacking 50 poison, and wearing a full armor set.",
                "The achievements here: Tough Times (Win a Run in Hardmode); Discoverer (Discover at least 200 items); Expert (Discover at least 400 items); Hero (Discover at least 700 items); Popular (Attract at least 40 residents to Haversack Hill); Shiv Master (Carry at least 5 shivs); Builder (Carry at least 5 structures); Haggler (Give a Tasty Fly to a merchant); Multipurpose (Wear a shoehat on your head and one on your feet at the same time); Mage (Carry at least 5 manastones); Archer (Carry at least 5 arrows); Glutton (Carry at least 7 consumables); Status Master (Have at least 5 status effects at the same time); Cursed Run (Carry at least 4 cursed items); Poison Stack (Stack at least 50 poison); Fully Armored (Carry a helmet, clothing, two gloves, and footwear)."
            ]
        },
        {
            "heading": "Hidden Achievements",
            "body": [
                "Backpack Hero's 2 hidden achievements are both Story Mode progression beats, sourced from community guides (TrueAchievements, Steam Community):",
                "Resilient Town: Progress Story Mode's main quest line until you build a home for Purse and her father - the village is raided on your next completed run afterward, and surviving that story-triggered raid unlocks the achievement automatically. It is marked secret to avoid spoiling the story beat, not because it is difficult.",
                "Backpack Hero: Defeat Disorder, Story Mode's final boss, to complete the story. Reaching Disorder needs finishing every character's Story Mode arc to level 9 first, then reaching level 9 with Purse in a Standard Run, which triggers the finale sequence and opens the door to the fight - a two-phase battle where phase 2 spawns fragments you must collect into your backpack rather than damage directly."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Win a Quick Run with the starting hero, then unlock and win Quick Runs with Satchel, Tote, Pochette, and CR-8 as they become available.",
                "2. Progress Story Mode's quest lines, unlocking the Deep Caves, Bramble, Enchanted Swamp, Magma Core, and Frozen Heart biomes, and finding Prada's Locket and unlocking the Town Hall along the way.",
                "3. Build toward the Story Mode finale: finish every character's arc to level 9, then reach level 9 with Purse in a Standard Run to trigger the ending sequence and fight Disorder, Story Mode's final boss, for the hidden Backpack Hero achievement.",
                "4. Keep playing Story Mode's quests toward building a home for Purse and her father - the village raid that follows on your next completed run unlocks the hidden Resilient Town achievement automatically.",
                "5. Once you are comfortable with the game's systems, win a run in Hardmode, and deliberately build toward the inventory-loadout achievements (5 shivs, 5 structures, 5 manastones, 5 arrows, 7 consumables, 5 status effects, 4 cursed items, 50 poison stacked, a full armor set, and the specific shoehat combo) and the item-discovery milestones (200/400/700 items found).",
                "Tip: Popular (40 residents at Haversack Hill) grows from completing quests and helping NPCs across your Story Mode playthrough rather than any single run - just keep progressing the story naturally and it climbs on its own."
            ]
        }
    ]
};

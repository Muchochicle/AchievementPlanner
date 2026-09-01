// The Slormancer Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/the-slormancer.json), whose 83 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1104280 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "the-slormancer-achievement-guide",
    "category": "game",
    "gameSlug": "the-slormancer",
    "icon": "⚔",
    "title": "The Slormancer Achievement Guide",
    "summary": "A practical guide to all 83 Steam achievements in The Slormancer - none are hidden. None of the achievements are hidden. Covers the story and Adam Nostrus' Trials, the level-100 and huge kill / currency milestones, every endgame activity (Battlefield, the five areas, the Slorm Temple, the Great Forge), the Slorm Reaper collections, the per-class mastery goals, the crafting-NPC totals, and maxing every blacksmith affinity.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "The Slormancer has 83 Steam achievements and none are hidden. The base progression covers the story (the five area mission sets, defeating the Traitor and Omh Agad, Adam Nostrus' three Trials), reaching level 100, and the grind milestones - 1,000,000 kills, 10,000 elites, 10,000,000 Goldus and Slorm. The endgame is a large block: 2,500 Battlefield floors, 250 floors in each of the five areas, the Slorm Temple's Guardian and Ultimatums, the Great Forge's Siege Leader and Reaper Runes, and the Slorm Reaper collections (find all, evolve, Primordial, max-level 360). Then there is a per-class set for the Knight, Huntress and Mage (level 100, 1,000,000 kills, 5,000 breaches, 120 Reapers, all-skill Mastery 15), the crafting-NPC totals, and maxing all seven blacksmith affinities to level 100.",
                "The catalog marks it difficulty 5. This is a very long ARPG completion - 'Master of Arms' (max-level 360 Slorm Reapers), 'Ultimate Perfectionist' (360 Primordial Reapers) and the seven affinity grinds are each dozens of hours, and the per-class achievements mean playing all three classes deep into the endgame. Budget a hundred-plus hours.",
                "Tip: pick one class to push all the way through the story and Adam Nostrus' Trials first, then decide whether you are going for the full 100% - the per-class and Reaper-collection grinds are the bulk of the achievement count and worth committing to deliberately."
            ]
        },
        {
            "heading": "Story & Progression",
            "body": [
                "The 'A Funny Recipe' gag, reaching level 100, the kill / Goldus / Slorm milestones, completing all missions in the Graveyard, Prison, Mage Academy, Luxurious Gardens and Royal Wing, defeating the Traitor, unlocking Ancestral Stones, Adam Nostrus' Trials I-III, defeating Omh Agad, the Rank 10 upgrade achievements, and 2,500 Battlefield Expedition floors.",
                "The achievements here: A Funny Recipe (Accidentally murder the Champion of Arah.); From Zero to Hero (Reach Level 100 with any character.); Monster Slayer (Kill 1 000 000 Enemies.); Elite Slayer (Kill 10 000 Elite Enemies.); Pockets Full (Find 10 000 000 Goldus on Enemies.); A Beautiful Day for Pedro (Complete all Missions from The Graveyard..); The Chain Breaker (Complete all Missions from The Prison.); School Vacations (Complete all Missions from The Mage Academy.); Well-Trimmed Hedges (Complete all Missions from The Luxurious Gardens.); Castle Renovations (Complete all Missions from The Royal Wing.); Always Two There Are (Defeat The Traitor.); Another Magical Rock! (Unlock your first Ancestral Stone.); Ancestral Rock Lover (Unlock 7 Ancestral Stones.); The First Trial (Complete Part I of Adam Nostrus' Trials.); The Second Trial (Complete Part II of Adam Nostrus' Trials.); The Last Trial (Complete Part III of Adam Nostrus' Trials.); The End of the Slormancer (Defeat Omh Agad, The Slormancer !); Slorm Feast (Reap 10 000 000 Slorm on Enemies.); Upgraded Upgrade (Invest enough Slorm to reach Rank 10 with a Class Upgrade or Passive.); Galvanized Legacy (Invest enough Slorm to reach Rank 10 with an Ancestral Legacy Upgrade.); Battlefield Veteran (Complete 2 500 Floors in Battlefield Expeditions.)."
            ]
        },
        {
            "heading": "Endgame Activities & Reapers",
            "body": [
                "100 Battlefield bosses, 250 floors in each of the five areas, the Slorm Temple Guardian and 15 Ultimatums, the Great Forge Siege Leader / 100 waves / 28 Reaper Runes, looting the War Chest 50 times, finding, evolving and unlocking a Primordial Slorm Reaper, reaching max level with 360 Reapers and 360 Primordial Reapers, and finding every Reaper and every Primordial Reaper.",
                "The achievements here: First-Class Annihilator (Kill 100 Battlefield Expeditions Bosses.); Negotiating with Crows (Complete 250 Floors in The Graveyard.); Behind Bars (Complete 250 Floors in The Prison.); Wizarding School of Witchcraft (Complete 250 Floors in The Mage Academy.); Raking the Lawn (Complete 250 Floors in The Luxurious Gardens.); Carpet Cleaner (Complete 250 Floors in The Royal Wing.); The New Temple Guardian (Defeat The Temple Guardian at Floor 150 in The Slorm Temple.); A Forgotten Treasure (Find your first Ultimatum in The Slorm Temple.); Artifact Hunter (Find 15 Ultimatums in The Slorm Temple.); Lift the Siege (Defeat The Siege Leader in The Great Forge.); Never Enough (Complete 100 Waves in a single Expedition in The Great Forge.); Rune Raider (Find your first Reaper Rune in The Great Forge.); Slorm Reaper Runes (Find 28 Reaper Runes in The Great Forge.); The Lord of Chests (Loot the War Chest 50 times.); The Weapon of Champions (Find a Slorm Reaper.); A Pleasant Surprise! (Evolve a Slorm Reaper.); Infinite Power! (Unlock a Primordial Slorm Reaper.); Master of Arms (Reach the Max Level with 360 Slorm Reapers.); Ultimate Perfectionist (Reach the Max Level with 360 Primordial Slorm Reapers.); Master of the Arsenal (Find All Slorm Reapers.); Master of the Primordial Arsenal (Find All Primordial Slorm Reapers.)."
            ]
        },
        {
            "heading": "Equipment, Classes & Affinities",
            "body": [
                "The equipment-finding and Slormite milestones, the per-class sets for the Mighty Knight, Fierce Huntress and Mischievous Mage (level 100, 1,000,000 kills, 5,000 breaches, 120 Reapers, 120 Primordial Reapers, all-skill Mastery 15), the crafting-NPC totals (Jemma, reforge, salvage, legendary chest, Slormite merging, reinforce, Olorin), max-level Ultimatums and Reaper Runes, and raising all seven blacksmith affinities (Astorias, Adrianne, Beigarth, Cory Ironbender, Smaloron, Fulgurorn, Hagan) to level 100.",
                "The achievements here: The First of Many (Find and equip your first piece of Equipment.); Equipment Finder (Find 2 500 Pieces of Equipment on Enemies.); Excellence or Nothing (Find 100 pieces of Equipment of Legendary Quality on Enemies.); Novice Slormitologist (Find 10 000 Slormites on Enemies.); Amateur Slormitologist (Find 10 000 Slormelines on Enemies.); Confirmed Slormitologist (Find 10 000 Slormandrites on Enemies.); Gather Pieces (Find 1 000 000 Fragments on Enemies.); The Almighty Knight (Reach Level 100 with The Mighty Knight.); A Sharpened Sword is Worth Two (Kill 1 000 000 Enemies with The Mighty Knight.); The Guillotine Falls (Close 5 000 Breaches with The Mighty Knight.); Sword Collection (Find 120 Slorm Reapers for The Mighty Knight.); Primordial Sword Collection (Find 120 Primordial Slorm Reapers for The Mighty Knight.); Master of Power (Reach Mastery 15 with all your Skills with The Mighty Knight.); Serenity and Torment (Reach Level 100 with The Fierce Huntress.); Bullseye (Kill 1 000 000 Enemies with The Fierce Huntress.); Breach Predator (Close 5 000 Breaches with The Fierce Huntress.); Bow Collection (Find 120 Slorm Reapers for The Fierce Huntress.); Primordial Bow Collection (Find 120 Primordial Slorm Reapers for The Fierce Huntress.); Master of Ferocity (Reach Mastery 15 with all your Skills with The FIerce Huntress.); Spell Class (Reach Level 100 with The Mischievous Mage.); Putting into Practice (Kill 1 000 000 Enemies with The Mischievous Mage.); Drawn to the Light (Close 5 000 Breaches with The Mischievous Mage.); Staff Collection (Find 120 Slorm Reapers for The Mischievous Mage.); Primordial Staff Collection (Find 120 Primordial Slorm Reapers for The Mischievous Mage.); Master of Trickery (Reach Mastery 15 with all your Skills with The Mischievous Mage.); It Can Always Be Useful (Purchase 100 Items from Jemma.); Heat the Hammer! (Reforge Equipment 1 000 times.); Break and Recycle (Salvage 250 Items with Friedrich.); Legendary Object Collection (Complete your Legendary Chest Collection.); Slormitologist Member Card (Craft 1 000 Slormites by merging Slormites with Rick Manalan.); Reinforce! It's Stronger! (Reinforce Equipment 500 times.); Perfection Achieved (Purchase Every Upgrade from Olorin.); These Rocks Are Really Shiny (Reach Max Level with all Ultimatums.); Adreart's Best Runist (Reach Max Level with all Reaper Runes.); Astorias' Chaos (Increase your Astorias Affinity to Level 100.); Adrianne's War (Increase your Adrianne Affinity to Level 100.); Beigarth's Vigilance (Increase your Beigarth Affinity to Level 100.); Cory Ironbender's Journey (Increase your Cory Ironbender Affinity to Level 100.); Smaloron's Betrayal (Increase your Smaloron Affinity to Level 100.); Fulgurorn's Silence (Increase your Fulgurorn Affinity to Level 100.); Hagan's Exile (Increase your Hagan Affinity to Level 100.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play one class through the full story and Adam Nostrus' Trials, defeating Omh Agad.",
                "2. Grind that class deep into the endgame - Battlefield, the five areas, the Slorm Temple and Great Forge.",
                "3. Work the Slorm Reaper collections (find all, evolve, Primordial, max-level 360).",
                "4. Level the other two classes into the endgame for their per-class achievements.",
                "5. Grind the crafting-NPC totals and the seven blacksmith affinities to level 100.",
                "Tip: the affinity grinds ('Astorias' Chaos' etc. to level 100) are the slowest achievements - reforge and reinforce gear constantly rather than in bursts, since affinity XP comes from using each blacksmith's services over the whole run."
            ]
        }
    ]
};

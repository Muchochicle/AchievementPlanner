// Wizardry: Proving Grounds Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/wizardry-proving-grounds-of-the-mad-overlord.json), whose 28 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   2518960 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 2 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (TrueAchievements / Steam Community / game wikis) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "wizardry-proving-grounds-of-the-mad-overlord-achievement-guide",
    "category": "game",
    "gameSlug": "wizardry-proving-grounds-of-the-mad-overlord",
    "icon": "🧙",
    "title": "Wizardry: Proving Grounds Achievement Guide",
    "summary": "A practical guide to all 28 Steam achievements in Wizardry: Proving Grounds (2 hidden). Covers character creation and classes, exploring the maze, combat and spellcasting milestones, and defeating the game's two big encounters plus the final boss Werdna. Two of the achievements are hidden and their unlock conditions are researched from community 100% guides.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Wizardry: Proving Grounds of the Mad Overlord has 28 Steam achievements and 2 are hidden. About a third are character-building - creating a character, recruiting one of every class, changing a level-5+ character's class, maxing all stats to 18, and reaching character levels 5, 10 and 15. The rest are exploring the maze (entering it, opening 100 secret doors, disarming every trap type, collecting all key items, defeating Werdna and recovering the Amulet), combat and spellcasting (100 kills with one character, healing 500HP via spells, 25 buff casts, sleeping a whole group, dispelling 50 enemies, reviving a character, fleeing 10 fights, inspecting every enemy), shop/inn spending, recruiting 13 characters, and two hidden fixed-encounter boss fights.",
                "The catalog marks it difficulty 3. This is a faithful remake of the original 1981 Wizardry, so permadeath and a genuinely difficult early maze are part of the experience; maxing every stat to 18 and clearing the two hidden fixed encounters are the real tests.",
                "Tip: grind Murphy's Ghost on Floor 1 (found by searching the hooded-man statue at 13E/5N) for easy early experience - defeating it also gets you the hidden Permanent Resident achievement."
            ]
        },
        {
            "heading": "Character Building",
            "body": [
                "Creating a character, recruiting one of every class, changing a level-5+ character's class, maxing all stats to 18, and reaching character levels 5, 10 and 15.",
                "The achievements here: The Act of Creation (Create a character in the Training Grounds); Class Act (Create or recruit a character of every class); Personal Growth (Change the class of a Level 5+ character in the Training Grounds); Stats All, Folks (Increase all stats of a character to 18); Novice Adventurer (Reach level 5 with a character); Experienced Adventurer (Reach level 10 with a character); Master Adventurer (Reach level 15 with a character)."
            ]
        },
        {
            "heading": "The Maze & Its Guardians",
            "body": [
                "Entering the maze for the first time, opening 100 secret doors, disarming every trap type, the two hidden fixed-encounter boss fights (Murphy's Ghost and the Monster Allocation Center), defeating Werdna and recovering the Amulet, and collecting all key items.",
                "The achievements here: It's All Down From Here (Enter the maze for the first time); Secret Admirer (Open 100 secret doors); Tricky (Disarm all trap types); Permanent Resident (Defeat Murphy's Ghost, a powerful fixed encounter found by searching the hooded-man statue on Floor 1 (around 13E/5N).); Rod & Ring (Defeat the fixed Monster Allocation Center encounter on Floor 4, which drops the Rod of Flame and Ring of Death.); The Overlord's Honor Guard (Defeat Werdna and recover the Amulet); All Access (Collect all key items in the Maze)."
            ]
        },
        {
            "heading": "Combat, Spells & Bestiary",
            "body": [
                "Donating 40,000 GP to Cant, 52 stays at the Adventurers' Inn, spending 50,000 GP at Boltac's, recruiting 13 characters, 100 kills with one character, healing 500HP via spells, 25 buff casts, sleeping a whole enemy group, dispelling 50 enemies, reviving a character, fleeing 10 fights, and inspecting 20 and then all enemies, plus encountering every enemy in the game.",
                "The achievements here: Tithe is Money (Donate 40,000 GP amount of gold to Cant); Sleep for a Year (Stay 52 times at The Adventurers' Inn); Boltac's Summer Home (Spend 50,000 GP at Boltac’s Trading Post); Baker's Dozen (Recruit 13 Characters); Centurion (Kill 100 enemies with a single character); Heal Thyself (Recover 500HP by casting spells); Supportive (Cast party / character buff spells 25 times); TKO (Put a whole group of enemies to sleep); Begone! (Dispel 50 enemies); Welcome Back (Raise a character from the dead); To Fight Another Day (Run from 10 fights); Better Know a Monster (Fully inspect 20 enemies); Gotta Catch 'Em All (Fully inspect all enemies); Meet and Beat (Encounter all enemies)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Create a full party covering every class, then head into the maze.",
                "2. Grind Murphy's Ghost on Floor 1 early for experience and the hidden Permanent Resident achievement.",
                "3. Work through the maze - open secret doors, disarm every trap type, and collect all key items.",
                "4. Push your spellcasting and combat totals (kills, healing, buffs, sleep, dispel, revives, flees, inspections) as you fight your way down.",
                "5. On Floor 4, take on the fixed Monster Allocation Center encounter for the hidden Rod & Ring achievement, then defeat Werdna and recover the Amulet.",
                "Tip: this is a faithful old-school Wizardry remake with permadeath - keep a well-rested, well-stocked party before diving deep, especially before the two hidden fixed encounters."
            ]
        }
    ]
};

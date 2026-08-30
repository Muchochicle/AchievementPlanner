// Space Hulk: Deathwing - Enhanced Edition Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/space-hulk-deathwing-enhanced.json), whose 23 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   816090 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "space-hulk-deathwing-enhanced-achievement-guide",
    "category": "game",
    "gameSlug": "space-hulk-deathwing-enhanced",
    "icon": "💀",
    "title": "Space Hulk: Deathwing - Enhanced Edition Achievement Guide",
    "summary": "A practical guide to all 23 Steam achievements in Space Hulk: Deathwing - Enhanced Edition - none are hidden. Covers the campaign, skill-tree and Genestealer-kill achievements, and the multiplayer-class and endgame-grind achievements.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Space Hulk: Deathwing - Enhanced Edition has 23 Steam achievements and none of them are hidden. The single-player set covers 666 kills, learning the Inferno and Vortex of Doom psychic powers, completing the Devotion, Command and Psy skill branches, killing each Genestealer strain (stalker, warrior, scythe) plus a Broodlord and a hybrid psyker, a no-Psygate chapter, the two door interactions, and finding all major relics. The multiplayer set is unlocking every ability for each of the five classes (Librarian, Heavy Weapon Support, Apothecary, Tactical, Assault), plus two big grinds - 10,000 kills and 1,111 assists.",
                "Nothing is missable - the campaign and special missions are replayable and the class-ability unlocks and kill/assist counters accumulate. The completion's long poles are For Honour! (10,000 enemies killed), the 1,111-assist multiplayer grind, and completing all three skill branches.",
                "Tip: play the campaign for the single-player achievements, then grind the multiplayer class unlocks and the 10,000-kill / 1,111-assist counters in the horde-heavy special missions, which are the fastest source of kills and assists."
            ]
        },
        {
            "heading": "Campaign, Skills & Genestealer Kills",
            "body": [
                "666 kills, learning Inferno and Vortex of Doom, completing the Devotion, Command and Psy skill branches, killing a stalker-strain, warrior-strain and scythe-strain Genestealer, a Broodlord and a hybrid psyker, a no-Psygate campaign chapter, locking and destroying a door aboard the Olethros, and using the Psygate.",
                "The achievements here: For the Chapter! (Kill 666 enemies); Flame Psyker (Learn Inferno); Destruction Psyker (Learn Vortex of Doom); Devotee (Complete the Devotion branch); Commandant (Complete the Command branch); Great psyker (Complete the Psy branch); Killer of stalker-strain Genestealers (Kill a stalker-strain Genestealer); Slayer of warrior-strain Genestealers (Kill a warrior-strain Genestealer); Crusher of scythe-strain Genestealers (Kill a scythe-strain Genestealer); Broodlord killer (Kill a Broodlord); Mutant sorcerer hunter (Kill an hybrid psyker); Bravery! (Finish a chapter in the main campaign without using a Psygate); Master of Systems (Lock a door aboard the Olethros); Strong Way (Destroy a door aboard the Olethros); Sanctuary (Use the Psygate)."
            ]
        },
        {
            "heading": "Multiplayer Classes & Endgame Grinds",
            "body": [
                "Unlocking all abilities for the Librarian, Heavy Weapon Support, Apothecary, Tactical Terminator and Assault Terminator in multiplayer, finding all major relics in the campaign, 10,000 enemies killed, and 1,111 assists in multiplayer or special missions.",
                "The achievements here: Epistolary (Unlock all of the Librarian's capacities in multiplayer); Killing machine (Unlock all of the Heavy Weapon Support's abilities in multiplayer); Phoenix light (Unlock all of the Apothecary's abilities in multiplayer); Chapter pillar (Unlock all Tactical Terminator abilities in multiplayer); Time lord (Find all the major relics in the main campaign); For Honour! (Kill 10,000 enemies); Brother In Arms (Perform 1,111 assists in multiplayer mode or the special missions); Champion of the Lions (Unlock all Assault Terminator's abilitiess in multiplayer)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the campaign, learning Inferno and Vortex and working the Devotion, Command and Psy skill branches toward completion.",
                "2. Kill each Genestealer strain, a Broodlord and a hybrid psyker as you meet them, and do the door and Psygate interactions.",
                "3. Do a no-Psygate campaign chapter and find all the major relics via mission replay with a guide.",
                "4. In multiplayer, play each of the five classes and unlock all of their abilities.",
                "5. Grind the horde-heavy special missions for the 10,000-kill (For Honour!) and 1,111-assist counters.",
                "Tip: the 10,000-kill and 1,111-assist grinds go fastest on the endless-horde special missions with a full co-op team - stack area weapons and the Heavy's suppressing fire, and let the counters build over several runs rather than trying to farm them in the campaign."
            ]
        }
    ]
};

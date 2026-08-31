// Borderlands GOTY Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/borderlands-game-of-the-year.json), whose 80 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   8980 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 14 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (TrueAchievements / Steam Community / game wikis) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "borderlands-game-of-the-year-achievement-guide",
    "category": "game",
    "gameSlug": "borderlands-game-of-the-year",
    "icon": "🔫",
    "title": "Borderlands GOTY Achievement Guide",
    "summary": "A practical guide to all 80 Steam achievements in Borderlands GOTY (14 hidden). Covers the main story and its hidden boss kills, leveling and exploration, the co-op and weapon feats, and all four add-ons (Zombie Island of Dr. Ned, Mad Moxxi's Underdome Riot, The Secret Armory of General Knoxx, Claptrap's New Robot Revolution).",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Borderlands Game of the Year has 80 Steam achievements and fourteen are hidden. Six are main-story milestones - the '12 Days of Pandora' weapon-type kill challenge, the 'Wanted' boss kills (Sledge, Krom, Flynt), destroying the Rakk Hive, and destroying the Destroyer at the end of the campaign. The other eight are add-on feats: the co-op 'United We Stand' boss kill, the secret boat in Treacher's Landing, the two Dr. Ned kills (Zombie Island add-on), paying $8,000,000 for the World's Largest Bullet tour (Knoxx add-on), and the three '-Trap' boss kills (Knoxx-Trap, Steele-Trap, Ned-Trap) in Claptrap's New Robot Revolution. Everything else is open: area-mission completions, the 'Ding!' level milestones, area discoveries, combat and vehicle feats, and the add-on arena and mission content.",
                "The catalog marks it roughly two playthroughs - the level 50 / 51 / 61 milestones need Playthrough 2 and 2.5 plus the Knoxx add-on. Nothing is missable: areas and missions replay, and the level, kill and money counters are cumulative across the save.",
                "Tip: do the add-ons on a level-appropriate character - Zombie Island and Moxxi's around the mid-game, then Knoxx (which raises the cap to 61 and adds Crawmerax) and Claptrap's New Robot Revolution last."
            ]
        },
        {
            "heading": "Main Story & Bosses",
            "body": [
                "The Arid Badlands and Rust Commons mission milestones (5 and all), the plumber-style kill, the hidden '12 Days of Pandora' challenge, the hidden 'Wanted' boss kills (Sledge, Krom, Flynt), and destroying the Rakk Hive and the Destroyer.",
                "The achievements here: Paid in Fyrestone (Completed 5 missions in the Arid Badlands); Made in Fyrestone (Completed all missions in the Arid Badlands); Paid in New Haven (Completed 5 missions in the Rust Commons); Made in New Haven (Completed all missions in the Rust Commons); My Brother is an Italian Plumber (Killed an enemy plumber-style); 12 Days of Pandora (Complete the '12 Days of Pandora' weapon-mastery challenge - kills with twelve different weapon types and methods (combat rifle, pistol, shotgun, SMG, sniper, melee, critical, explosive, shock, incendiary, corrosive and grenade).); Wanted: Sledge (Story: kill Sledge.); Wanted: Krom (Story: kill Krom.); Wanted: Flynt (Story: kill Flynt.); Destroyed the Hive (Story: destroy the Rakk Hive.); Destroyed the Destroyer (Story: destroy the Destroyer - completes the main campaign.)."
            ]
        },
        {
            "heading": "Leveling, Exploration & Combat",
            "body": [
                "The Ludicrous Speedway record, applying an elemental artifact, the 'Ding!' level milestones (5 through 50), the area discoveries (Skag Gully through Eridian Promontory), 25 vehicle-ram kills, 5 Rakk in 10 seconds, earning $1,000,000, selling 50 guns, an arena win, a duel win, a co-op revive, and 15 co-op missions.",
                "The achievements here: Speedy McSpeederton (Raced around the Ludicrous Speedway in record time); You call this archaeology? (Applied an elemental artifact); Ding! Newbie (Earned level 5); Ding! Novice (Earned level 10); Ding! Expert (Earned level 20); Ding! Hardcore (Earned level 30); Ding! Sleepless (Earned level 40); Discovered Skag Gully (Discovered Skag Gully); Discovered Sledge's Safe House (Discovered Sledge's Safe House); Discovered Headstone Mine (Discovered Headstone Mine); Discovered Trash Coast (Discovered Trash Coast); Discovered The Scrapyard (Discovered The Scrapyard); Discovered Krom's Canyon (Discovered Krom's Canyon); Discovered Crimson Lance Enclave (Discovered Crimson Lance Enclave); Discovered Eridian Promontory (Discovered Eridian Promontory); Ding! Champion (Earned level 50); Get A Little Blood on the Tires (Killed 25 enemies by ramming them with any vehicle); Rootinest, Tootinest, Shootinest (Killed 5 Rakk in under 10 seconds); Pandora-dog Millionaire (Earned $1,000,000); Fence (Sold 50 guns to a shop); Can't We Get BEYOND Thunderdome? (Emerged victorious from an arena match); Duel-icious (Won a duel against another player); Group LF Healer (Rescued a groupmate from death in a co-op game); There's No \"I\" In \"Team\" (Completed 15 missions in co-op)."
            ]
        },
        {
            "heading": "Co-op, Weapons & Class",
            "body": [
                "The hidden co-op boss kill, 'gamed with fame', weapon proficiency 10, the hidden Treacher's Landing boat, a no-damage duel, the elemental kill counts (corrosive, shock, incendiary, explosive), equipping a class mod, 42 inventory slots, and the four action-skill kill feats.",
                "The achievements here: United We Stand (In a co-op game, defeat the Rakk Hive, the Vault boss, Sledge, Krom or Flynt.); And They'll Tell Two Friends (Gamed with fame); Weapon Aficionado (Reached proficiency level 10 with any weapon type); You're on a boat! (Reach the hidden jetty with a boat in Treacher's Landing.); Duelinator (Won a duel without taking damage); Facemelter (Killed 25 enemies with corrosive weapons); 1.21 Gigawatts (Killed 25 enemies with shock weapons); Pyro (Killed 25 enemies with incendiary weapons); Master Exploder (Killed 25 enemies with explosive weapons); There are some who call me...Tim (Equipped a class mod for your character); Fully Loaded (Rescued enough Claptraps to earn 42 inventory slots); Truly Outrageous (Killed an enemy with the Siren's action skill); Careful, He Bites (Killed 15 enemies with the Hunter's action skill); Reckless Abandon (Killed 15 enemies with the Berserker's action skill); Down in Front! (Killed 15 enemies with the Soldier's action skill)."
            ]
        },
        {
            "heading": "Zombie Island of Dr. Ned",
            "body": [
                "The Zombie Island of Dr. Ned add-on - the 'House of the Ned', 'Jakobs Fodder' and 'Braaaaaaaaaaaaains!' missions, plus the two hidden Ned kills.",
                "The achievements here: House of the Ned (Completed the \"House of the Ned\" mission); Jakobs Fodder (Completed the \"Jakobs Fodder\" mission); Night of the Living Ned (Kill Ned the first time, in the Zombie Island of Dr. Ned add-on.); Ned's Undead, Baby (Kill Dr. Ned for good, completing the Zombie Island of Dr. Ned add-on.); Braaaaaaaaaaaaains! (Completed the \"Braaaaaaaaaaaaains!\" mission)."
            ]
        },
        {
            "heading": "Mad Moxxi's Underdome Riot",
            "body": [
                "The Mad Moxxi's Underdome Riot add-on - the Prove Yourself mission and reaching the end of the larger challenge in the Hell-Burbia, Angelic Ruins and The Gully coliseums, then all three with one character.",
                "The achievements here: Small Tournament (Completed the Prove Yourself mission); Hell-Burbia (Reached the end of the larger challenge in the Hell-Burbia coliseum); The Angelic Ruins (Reached the end of the larger challenge in The Angelic Ruins coliseum); The Gully (Reached the end of the larger challenge in The Gully coliseum); Big Tournament (Reached the end of each of the 3 larger challenges with one character)."
            ]
        },
        {
            "heading": "The Secret Armory of General Knoxx",
            "body": [
                "The Secret Armory of General Knoxx add-on - building the Monster vehicle, rescuing Athena, destroying the Lance Depot, killing Crawmerax the Invincible, the loot midgets, a Lancer kill from a Racer, the level 51 and 61 milestones, all its missions, and the hidden World's Largest Bullet tour.",
                "The achievements here: Making a Monster (Built the New Car: Monster); Athena, Out (Rescued Athena); Depot Demolition (Destroyed the Lance Depot); Vincible (Killed Crawmerax the Invincible); Sneaky Little Buggers (Killed each of the loot midgets); Speed Kills (Destroyed a Lancer while in a Racer); Ding! Overleveled (Reached Level 51); Ding! Overleveled to 11 (Reached Level 61); Completionist (Completed all missions in Secret Armory); Sucker born every minute (In The Secret Armory of General Knoxx add-on, pay $8,000,000 for the tour of the World's Largest Bullet.)."
            ]
        },
        {
            "heading": "Claptrap's New Robot Revolution",
            "body": [
                "The Claptrap's New Robot Revolution add-on - the claptrap statue placards, the three hidden '-Trap' boss kills (Knoxx-Trap, Steele-Trap, Ned-Trap), defeating the Interplanetary Ninja Assassin Claptrap, Tannis's crazy request, and the collectibles (3D glasses, oil cans, bobbleheads, and the panties/fish/pizzas set).",
                "The achievements here: Tourist (Read all 6 claptrap statue placards); Knoxx-Trap (In Claptrap's New Robot Revolution, kill General Knoxx-Trap (he appears in Sanders Gorge and again in Wayward Pass).); Steele-Trap (In Claptrap's New Robot Revolution, kill Commandant Steele-Trap.); Ned-Trap (In Claptrap's New Robot Revolution, kill Dr. Ned-Trap.); Muerte la robo-lución (Defeated the Interplanetary Ninja Assassin Claptrap); The Collector (Completed Tannis' crazy request); It's so realistic! (Collected 5 3D glasses); The Lubricator (Found 25 claptrap oil cans); Bobble-trap (Collected 15 claptrap bobbleheads); What a party! (Collected 3 panties, 5 fish in a bag, and 15 pizzas)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the main story to the Destroyer, letting the hidden boss kills unlock as you go.",
                "2. Do a second playthrough for the 'Ding!' level 50 milestone and to mop up area discoveries and elemental kill counts.",
                "3. Play Zombie Island of Dr. Ned and Mad Moxxi's Underdome Riot around the mid-game.",
                "4. Play The Secret Armory of General Knoxx - it raises the cap to 61, adds Crawmerax, and has the hidden World's Largest Bullet tour.",
                "5. Finish with Claptrap's New Robot Revolution for the three '-Trap' boss kills and its collectibles.",
                "Tip: do the co-op 'United We Stand' and duel achievements in a two-player session - even a second local/steam account joining for one boss fight and one duel clears all of them quickly."
            ]
        }
    ]
};

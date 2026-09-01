// Dying Light 2 Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/dying-light-2.json), whose 65 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   534380 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 11 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (PowerPyx / Game8 / PlayStationTrophies / TrueAchievements) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "dying-light-2-achievement-guide",
    "category": "game",
    "gameSlug": "dying-light-2",
    "icon": "🧟",
    "title": "Dying Light 2 Achievement Guide",
    "summary": "A practical guide to all 65 Steam achievements in Dying Light 2 (11 hidden). Covers the Villedor story, the city facilities and activities (metro, windmills, water towers, bandit camps, GRE anomalies), the parkour and combat proficiency and feats, the collectibles, and the Bloody Ties DLC. Eleven of the achievements are hidden - the main-story quest markers - and their unlock conditions are researched from community 100% guides.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Dying Light 2 Stay Human has 65 Steam achievements and 11 are hidden. Eight are main-story quest markers (completing the 9th, 11th, 16th, 18th and 19th main quests, and objectives within the 19th and 22nd), plus finishing the game with any ending is a separate visible achievement. The other three come from the Bloody Ties DLC (the Night of Terrors, Ciro's story, meeting Skullface). Everything visible is city activities - the metro stations, windmills, water towers, electrical substations, bandit camps, GRE anomalies and airdrops - the parkour and combat proficiency, the collectibles (notes, recordings, graffiti), and a long list of combat feats.",
                "The catalog marks it difficulty 3. Nothing is missable - the map stays fully open after the story, the endings can be seen via a save, and all activities and collectibles can be finished afterward. The main time sinks are 'Ultramarathon' (travel 960 km), 'Parkour Master' and 'Combat Master' (max proficiency), and the Nightrunner and Carnage Hall gold-medal trials.",
                "Tip: the eight main-story hidden achievements just track progress, so play the campaign through - focus your dedicated effort on the proficiency grind, the gold-medal trials, and the three-region collectible sweeps."
            ]
        },
        {
            "heading": "Story & City Facilities",
            "body": [
                "Reaching Villedor, the first Inhibitor, the Bazaar, the eight hidden main-story quest markers, finishing the game, assigning all facilities, the first and all metro stations, the first metro fast travel, and the first and all windmills.",
                "The achievements here: Into the Unknown (Reach Villedor.); First Shot (Use an Inhibitor for the first time.); Herzlich Wilkommen! (Enter the Bazaar.); Under Pressure (Activate your first Water Tower.); On the Trail of the Enemy (Complete Main Quest 9 ('Revolution' for Survivors / 'Into the Dark' for Peacekeepers).); Light in the Darkness (Activate your first Electrical Substation.); Get Outta My House! (Complete Main Quest 11: 'A Place To Call Home'.); Debris and Ashes (During Main Quest 19: 'Veronika', reach the objective 'Enter the Observatory'.); We Will Be Heard! (Complete Main Quest 16: 'Broadcast' (activate the rooftop transmitter).); Known Associate (Complete Main Quest 18 ('Nightrunners' for Survivors / 'Empire' for Peacekeepers).); Brush with Death (Complete Main Quest 19: 'Veronika'.); Going Down (During Main Quest 22: 'X13', complete the objective 'Get to X13'.); Family First (During Main Quest 22: 'X13', complete the objective 'Find Waltz'.); Your World, Your Rules (Complete the game with any ending.); Municipal Services (Assign all Facilities.); Tunnel Entrance (Activate your first Metro Station.); Tube Map (Activate all Metro Stations.); Sancho Panza (Activate your first Windmill.); Tickets, Please! (Use a Metro Station to Fast Travel.); Don Quixote (Activate all Windmills.)."
            ]
        },
        {
            "heading": "Activities, Proficiency & Money",
            "body": [
                "All GRE Quarantine Inhibitors, all airdrops, the first and all GRE anomalies, the first and all bandit camps, crafting and modifying, helping 50 survivors, max parkour and combat proficiency, City Alignment 7, a million Old World Money, all Sparker love interests, 960 km travelled, a 10,994 m combined fall, surviving the first night, a 20-kill melee streak, Volatile/Spitter/Viral kills, and 50 ranged headshots.",
                "The achievements here: Can't You Read the Signs? (Collect all Inhibitors hidden in GRE Quarantines.); Find Anything Interesting? (Open all Airdrops.); It Wasn't That Hard, Was It? (Defeat your first GRE Anomaly.); Revenants (Defeat all GRE Anomalies.); Flag Burning (Clear your first Bandit Camp.); Ban Hammer (Clear all Bandit Camps.); You Never Forget Your First... (Craft your first item.); Oh, So This Is How It Works! (Modify your weapon for the first time.); A Friend in Need... (Help 50 survivors in Encounters.); Parkour Master (Achieve maximum Parkour Proficiency.); Combat Master (Achieve maximum Combat Proficiency.); Boot Licker (Reach City Alignment 7 for any faction.); Who Wants To Be a... (Collect 1,000,000 in Old World Money.); Man On a Mission (Meet all your Sparker love interests.); Ultramarathon (Travel at least 960km.); After the Fall (Fall from a combined height of at least 10,994 meters.); Good Night & Good Luck (Survive your first night.); Can't Touch This! (Kill 20 enemies in a row with melee weapons without taking damage.); Night Hunter (Kill a Volatile.); Death From Afar (Kill a Spitter using a ranged weapon.); Tanning Salon (Use the UV Flashlight to kill a Viral.); Terminal Headache (Perform 50 headshots with a ranged weapon.)."
            ]
        },
        {
            "heading": "Combat Feats, Collectibles & Bloody Ties",
            "body": [
                "Losing max Chase, co-op play, 100 co-op kills, 10 Perfect Blocks in a row, 50 weapon mods, max Health and Stamina, 50 takedowns, 50 Smashes, 50 Spear kills, all Nightrunner Trials, the double-wall-run air kick, all notes, recordings and graffiti, meeting Skullface, reaching Carnage Hall, the Bloody Ties story (Night of Terrors, Ciro), and the Madmen of Villedor and Carnage Hall gold medals and collectibles.",
                "The achievements here: Slowpoke! (Lose the maximum level of Chase.); Being All Social (Join a co-op session.); That's Teamwork! (Kill 100 enemies while playing with at least 2 other players.); Lightning Reflexes (Perform a Perfect Block 10 times in a row without taking damage.); Modder (Modify your weapons at least 50 times.); Fit as a Fiddle (Max out your Health.); Ironheart (Max out your Stamina.); You're Going Down! (Perform 50 takedowns.); Don't Look Up (Perform Smash on at least 50 enemies.); Get the Point? (Kill 50 enemies with a Spear.); True Nightrunner (Complete all Nightrunner Trials.); Bing Bang Boom! (Perform an Air Kick after a Double Wall Run.); Archivist (Find all Collectible Notes.); Audiophile (Find all Collectible Recordings.); Street Art Aficionado (Discover all Graffiti Tag Collectibles.); Nemesis (Meet Skullface); Enter the Hall (Reach Carnage Hall); Night of Terrors ((Bloody Ties DLC) Survive the Night of Terrors during the mission 'Fame or Infamy'.); My Friend, Ciro ((Bloody Ties DLC) Reach the story beat with Ciro.); Skullcrusher ((Bloody Ties DLC) Meet Skullface (after the fight in the empty pool).); The Madman of Villedor (Earn a gold medal in all 'Madmen of Villedor' trials.); True Champion (Earn a gold medal in all Carnage Hall shows.); Connoisseur (Find all Carnage Hall collectables.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the campaign, letting the eight hidden main-story markers unlock, and finish the game with any ending.",
                "2. Activate all facilities (metro stations, windmills, water towers, substations) and clear the bandit camps and GRE anomalies.",
                "3. Grind parkour and combat proficiency to max, and pick up the combat feats naturally.",
                "4. Sweep the collectibles (notes, recordings, graffiti) and do the Nightrunner Trials.",
                "5. Play the Bloody Ties DLC for its three story achievements, then the Madmen of Villedor and Carnage Hall gold medals.",
                "Tip: 'Ultramarathon' (960 km) and 'After the Fall' (10,994 m of falling) both accumulate over a full completion - don't farm them, just keep playing and they finish themselves."
            ]
        }
    ]
};

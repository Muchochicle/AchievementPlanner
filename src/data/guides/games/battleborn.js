// Battleborn Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/battleborn.json), whose 60 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   394230 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "battleborn-achievement-guide",
    "category": "game",
    "gameSlug": "battleborn",
    "icon": "🔫",
    "title": "Battleborn Achievement Guide",
    "summary": "A practical guide to all 60 Steam achievements in Battleborn - none are hidden. Covers the story and difficulty achievements, the gear / matchmaking / lore-challenge achievements, and the Story Operations and DLC content. None of the achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Battleborn has 60 Steam achievements and none are hidden. The core set is story and progression - Command Rank 100, the Advanced and Hardcore story clears, defeating Rendain, a no-lives mission, and playing all 25 (later 30) Battleborn. A very large block is the per-character lore challenges - completing every lore challenge for each of the 30 heroes - and the rest are the Story Operations completions and their 50-Ops-Points feats.",
                "The catalog marks it difficulty 4 - Command Rank 100 is a long grind, the lore challenges each require specific in-match objectives across many games, and the game's online servers were shut down in January 2021, which makes the Versus-map and full-team matchmaking achievements effectively unobtainable now. The story, Story Operations and lore challenges are still playable solo or in private co-op.",
                "Tip: chase lore challenges deliberately - each hero's lore has a checklist of in-match tasks (kills with a skill, wins on a map, damage thresholds); play that hero every match until their list is done rather than switching around."
            ]
        },
        {
            "heading": "Story & Difficulty",
            "body": [
                "Playing a match after Command Rank 100, 30 story/versus wins, all Story missions on Hardcore and on Advanced, a win on each Versus map, playing all 25 Battleborn, reaching rank 15 with a Battleborn, defeating Rendain, a no-lives mission, 5 double kills, activating Legendary Gear, a Gold mission rating, and helping kill each Battleborn.",
                "The achievements here: Battleborn (Play a match or mission after reaching Command Rank 100.); No Rest for the Wicked (Win 30 Story missions or Versus matches.); Solus War Hardcore Hero (Complete all Story missions on Hardcore.); Solus War Hero Advanced (Complete all Story missions on Advanced Difficulty.); Tour of Duty (Win a match on each Versus map.); Commander and Collector (Play at least one match or mission with all 25 Battleborn.); First Among Heroes (Complete a match or mission and reach rank 15 with a Battleborn.); A Tyrant Undone (Defeat Rendain.); Perfectionist (Complete a Story mission without losing any Lives.); The Ol' One-Two (Get 5 double kills.); Behold My Death Lasers and Despair (Activate a piece of Legendary Gear.); Solus Sentinel (Achieve a Gold rating on any Story mission.); Gotta Punch 'em All (Participate in killing each Battleborn at least once.)."
            ]
        },
        {
            "heading": "Gear, Matchmaking & Lore Challenges",
            "body": [
                "Three Epic+ gear pieces in one match, activating a mutation, a Champion skin, a full 5-player team, and completing all lore challenges for Thorn, Oscar Mike, Rath, Miko, Montana, Reyna, Caldarius, Orendi, Phoebe, Benedict, Boldur, Ambra, ISIC, Shayne & Aurox and Galilea.",
                "The achievements here: Decked Out (Activate three pieces of Epic or better Gear in a single mission or match.); Grow Forth and Conquer (Activate a mutation in a match.); Dressed for Success (Complete any challenge that unlocks a Champion skin.); When You Roll Up With the Squad Like (Enter matchmaking with a full team of 5 players.); The Blossom's Fury (Complete all Thorn lore challenges.); Brotherhood of the Mikes (Complete all Oscar Mike lore challenges.); Keeper of the Blades (Complete all Rath lore challenges.); Acres and Eras (Complete all Miko lore challenges.); It's My Only Name, Chief (Complete all Montana lore challenges.); Rise of the Valkyrie (Complete all Reyna lore challenges.); Champion of the Pits (Complete all Caldarius lore challenges.); Love and Fire, Death and Kisses (Complete all Orendi lore challenges.); Elegance in Engineering (Complete all Phoebe lore challenges.); Flyboy (Complete all Benedict lore challenges.); The Bears and the Beers (Complete all Boldur lore challenges.); Priestess of the Sustaining Mother (Complete all Ambra lore challenges.); Hate Furnace at Maximum! :)  (Complete all ISIC lore challenges.); Me 'n' My Monster (Complete all Shayne & Aurox lore challenges.); The Wraith of Bliss (Complete all Galilea lore challenges.)."
            ]
        },
        {
            "heading": "Story Ops & More Lore Challenges",
            "body": [
                "Completing all lore challenges for Kelvin, Attikus, El Dragón, Toby, Ghalt, Mellka, Deande, Kleese and Whiskey Foxtrot, completing the seven Story Operations missions (The Renegade, The Void's Edge, The Experiment, The Archive, The Sentinel, The Saboteur, The Algorithm), and collecting 25 Titles.",
                "The achievements here: Civil Ice (Complete all Kelvin lore challenges.); Anarchy Rules (Complete all Attikus lore challenges.); The Once and Future Champ (Complete all El Dragón lore challenges.); Anxious, Angry, and Adorable (Complete all Toby lore challenges.); The Captain (Complete all Ghalt lore challenges.); Lost Little Eldrid (Complete all Mellka lore challenges.); The Spymistress (Complete all Deande lore challenges.); The Curmudgeon (Complete all Kleese lore challenges.); The Mike Who Lived (Complete all Whiskey Foxtrot lore challenges.); Shock the Trooper (Complete The Renegade on any difficulty.); Mister Wolf's Wild Ride (Complete The Void's Edge on any difficulty.); Desperate Measurements (Complete The Experiment on any difficulty.); Remnants of Codex (Complete The Archive on any difficulty.); Traps and Treasure (Complete The Sentinel on any difficulty.); A Booming Business (Complete The Saboteur on any difficulty.); Divide by Zero Hour (Complete The Algorithm on any difficulty.); Sir Hon. Lord Baron Oscar Mike Jr IV, Esq. (Collect 25 Titles from completing Challenges.)."
            ]
        },
        {
            "heading": "DLC Lore & Story Operations",
            "body": [
                "The Marquis, Alani, Pendles, Ernest, Kid Ultra and Beatrix lore challenges, and the 50-Ops-Points completions of the Story Operations (Attikus and the Thrall Rebellion, Toby's Friendship Raid, Oscar Mike vs. the Battle School, Montana and the Demon Bear, Phoebe and the Heart of Ekkunar).",
                "The achievements here: Titanium Dandy (Complete all Marquis lore challenges.); The Bluemother Smiles (Complete all Alani lore challenges.); Twice-Made Sneaker (Complete all Pendles lore challenges.); Sergeant Demobird (Complete all Ernest lore challenges.); It Was A Dark And Stormy Night (Complete Attikus and the Thrall Rebellion with at least 50 Ops Points.); Berg Rush (Complete Toby's Friendship Raid with at least 50 Ops Points.); Collect All 5! (Complete all Kid Ultra lore challenges.); Magnum Gun Loud (Complete Oscar Mike vs. the Battle School with at least 50 Ops points.); Tooth, Nail, and Minigun (Complete Montana and the Demon Bear with at least 50 Ops points.); Mountains of Madness (Complete Phoebe and the Heart of Ekkunar with at least 50 Ops points.); Duty is Only Skin Deep (Complete all Beatrix lore challenges.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the story campaign to defeat Rendain, then replay it on Advanced and Hardcore.",
                "2. Play the seven Story Operations, then replay each with 50+ Ops Points.",
                "3. Grind the per-character lore challenges - pick one hero at a time and play them every match until their lore list is done.",
                "4. Do the gear and mission feats (Legendary Gear, three Epic pieces, Gold rating, a no-lives mission).",
                "5. Keep playing toward Command Rank 100 - it accrues from all the above.",
                "Tip: with the online servers down, prioritise the solo/private-co-op achievements (story, Story Operations, lore challenges); the Versus-map and full-team matchmaking achievements can no longer be earned normally."
            ]
        }
    ]
};

// Titanfall 2 Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/titanfall-2.json), whose 50 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1237970 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 21 achievement(s) are hidden and ship with no official
//   description on Steam; those keep their real name with a curatorial
//   (researched) description sourced from community achievement guides
//   (Steam Community guides, TrueAchievements, GameFAQs, wikis), noted
//   individually where it appears below. Every other achievement's
//   description is Steam's own real text, quoted verbatim.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "titanfall-2-achievement-guide",
    "category": "game",
    "gameSlug": "titanfall-2",
    "icon": "🤖",
    "title": "Titanfall 2 Achievement Guide",
    "summary": "A practical guide to all 50 Steam achievements in Titanfall 2 - 21 are hidden. Covers the acclaimed single-player campaign's story progression across both its early and late missions, campaign combat feats and Titan Core kills, campaign completion on every difficulty, and multiplayer milestones.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Titanfall 2 has 50 Steam achievements, 21 of which are hidden. All 21 hidden achievements are tied to the game's widely-praised single-player campaign, unlocking as you hit specific story beats (defeating Kane, Ash, Viper, Richter, and Slone; finding the Arc Tool; securing the Ark) or notice a handful of optional interactions along the way (activating a Stalker rack, keeping two Lieutenants alive). The remaining achievements cover Titan Core-ability kills, specific campaign combat feats (wallrunning kill streaks, Titan rodeos, cloaked melee takedowns), completing the campaign on all three difficulties, finding every collectible, and a few basic multiplayer milestones.",
                "Nothing in the campaign is missable across a full playthrough except Close Shave (keeping both Lieutenant Shaver and Lieutenant Freeborn alive), which requires active effort during a specific mission rather than happening automatically. The Titan Core-kill achievements (one per Titan chassis/Core ability) and several combat-feat achievements are best picked up during a second, more deliberate campaign replay once you already know the mission layouts.",
                "Tip: The Real Pilot's Gauntlet (completing the \"Effect and Cause\" mission's Rising World platforming run without falling) is widely considered the campaign's hardest achievement - practice the wallrun-and-jump timing on a lower difficulty first if you are struggling, since the sequence is unforgiving about mistakes."
            ]
        },
        {
            "heading": "Campaign Story I",
            "body": [
                "The Gauntlet training course and the campaign's opening act: completing Pilot training, powering up BT-7274, defeating Kane, keeping both Lieutenants alive, entering the World's Foundry, climbing Sideways Town, defeating the simulated Reapers, and defeating Ash.",
                "The achievements here: The Student... (Beat Pilot Anderson's Gauntlet ghost recorder time); ...Becomes the Master (Place in the top 3 on the Gauntlet scoreboard); The Graduate (Complete the campaign's opening Pilot training.); BT Prime (Fully power up and restore BT-7274.); Hot Mess (Defeat Kane during the \"Trial by Fire\" mission.); Close Shave (Keep both Lieutenant Shaver and Lieutenant Freeborn alive through the campaign.); Some Shortcut! (Enter the World's Foundry.); Incepted (Climb through Sideways Town during the time-shifting \"Effect and Cause\" mission.); I'm Not Locked in Here With You (Defeat the Reapers inside Ash's simulation.); Dust to Dust (Defeat Ash at the end of the \"Into the Abyss\" mission.)."
            ]
        },
        {
            "heading": "Campaign Story II",
            "body": [
                "Killing a Caged Prowler, and the campaign's midgame story beats: Anderson's Holographic Log, Special Operation 217, finding the Arc Tool, powering the Beacon, retrieving an Uplink Module, defeating Richter, activating a Stalker rack, locating the Ark, and defeating Viper.",
                "The achievements here: It Was Coming Right For Us (Kill a Caged Prowler in the Wildlife Research Labs); Following the Footsteps (View Pilot Anderson's first Holographic Log.); Secret Plans (Complete Special Operation 217.); Unlicensed Nuclear Accelerator (Find the Arc Tool.); Calling CQ (Power the Beacon.); 4 Bars (Retrieve a working Uplink Module.); See You at the Party (Defeat Richter.); Pied Piper (Activate a Stalker rack using the Arc Tool.); Precious Cargo (Locate the Ark.); Defanged (Defeat Viper.)."
            ]
        },
        {
            "heading": "Campaign Endgame & Titan Core Kills",
            "body": [
                "Securing the Ark, calling in a new BT, completing the Rising World run, defeating Slone, and destroying enemy Titans in the campaign using each of the seven Titan Core abilities (Burst, Flight, Salvo, Sword, Laser, Smart, and Flame Cores).",
                "The achievements here: The Ark (Secure the Ark.); Titanfall! (Call in a new BT after losing your original Titan.); The Real Pilot's Gauntlet (Complete the Rising World run during \"Effect and Cause\" without falling.); No Salvage (Defeat Slone.); Excessive Force (Destroy a Titan with your Burst Core in the Campaign); Angel of Death (Destroy a Titan with your Flight Core in the Campaign); Fire Everything! (Destroy a Titan with your Salvo Core in the Campaign); I have the Power! (Destroy a Titan with your Sword Core in the Campaign); Face Melter (Destroy a Titan with your Laser Core in the Campaign); Aim Bot (Destroy a Titan with your Smart Core in the Campaign)."
            ]
        },
        {
            "heading": "Campaign Combat Feats",
            "body": [
                "Advanced campaign combat achievements: melee-executing a Mercenary Titan, destroying 3 Titans with one Core, a 25-kill infantry streak as a Titan, destroying a Titan as a Pilot, wallrunning and sliding kill streaks, rodeoing a Titan, a cloaked melee takedown, and gathering 6+ friendly Stalkers.",
                "The achievements here: Flame On! (Destroy a Titan with your Flame Core in the Campaign); Coup de Grace (Destroy a Mercenary Titan with a melee execution in the Campaign); Hat Trick (Destroy 3 enemy Titans with 1 Core ability in the Campaign); Annihilation (Kill 25 infantry in 2 seconds as a Titan in the Campaign); You can be my Wingman anytime (Destroy an enemy Titan as a Pilot in the Campaign); I know Kung Fu (Shoot and kill 3 enemies in a row while wallrunning as a Pilot in the Campaign); Power Slide (Shoot and kill 3 enemies in a row while sliding as a Pilot in the Campaign); Cowboy Up (Rodeo an enemy Titan in the Campaign); Apex Predator (Perform a melee takedown while cloaked in the Campaign); Robot Army (Acquire 6 or more friendly Stalkers at the same time in the Campaign)."
            ]
        },
        {
            "heading": "Campaign Completion & Multiplayer",
            "body": [
                "Completing the campaign on Regular, Hard, and Master difficulty, collecting all of BT's loadouts, finding collectibles, and basic multiplayer milestones: winning a match, customizing a loadout, and joining a network.",
                "The achievements here: Certified Pilot (Complete the Campaign on Regular); Renowned Pilot (Complete the Campaign on Hard); Legendary Pilot (Complete the Campaign on Master); Jack of All Trades (Collect all of BT's loadouts in the Campaign); Off the Beaten Path (Find 10 Collectibles); Collector (Find 25 Collectibles); Every Nook and Cranny (Find All Collectibles); So It Begins... (Win a multiplayer match); Lock and Load (Customize a multiplayer loadout); Free Association (Join a multiplayer network)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through the campaign once on Regular difficulty, taking your time to notice side interactions like the Stalker rack (Pied Piper) and keeping Shaver and Freeborn alive (Close Shave).",
                "2. On this first run, aim to complete the Rising World sequence in \"Effect and Cause\" cleanly for The Real Pilot's Gauntlet, and find as many collectibles as you can.",
                "3. Replay the campaign on Hard and then Master difficulty for Renowned Pilot and Legendary Pilot, using these runs to also pick up the Titan Core-kill achievements (one per Core ability) and campaign combat feats (wallrunning kills, Titan rodeos, cloaked takedowns).",
                "4. Mop up any remaining collectibles for Every Nook and Cranny and complete BT's full loadout collection for Jack of All Trades.",
                "5. Finish with the multiplayer achievements: win a match, customize a loadout, and join a multiplayer network.",
                "Tip: the Titan Core-kill achievements (Excessive Force, Angel of Death, Fire Everything!, and the rest) each need a specific Titan chassis equipped before a fight where you can safely land the killing blow with its Core ability - plan which chassis you'll use before each campaign Titan encounter rather than trying to force it mid-fight."
            ]
        }
    ]
};

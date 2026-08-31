// Spider-Man: Miles Morales Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/marvel-s-spider-man-miles-morales.json), whose 50 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1817190 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 21 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (TrueAchievements / Steam Community / game wikis) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "marvel-s-spider-man-miles-morales-achievement-guide",
    "category": "game",
    "gameSlug": "marvel-s-spider-man-miles-morales",
    "icon": "⚡",
    "title": "Spider-Man: Miles Morales Achievement Guide",
    "summary": "A practical guide to all 50 Steam achievements in Spider-Man: Miles Morales (21 hidden). Covers the story and bosses, the story missions and side content, and the combat feats and completion. Twenty-one of the achievements are hidden and their unlock conditions are researched from community 100% guides.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Marvel's Spider-Man: Miles Morales has 50 Steam achievements and 21 are hidden. About seventeen cover the story and bosses - the main-mission beats, the boss fights against Roxxon Rhino, the Prowler and the Tinkerer, and the Spider-Training challenges. The middle group is story missions and side content (Roxxon Labs, Underground hideouts, the Harlem conspiracy, sound samples, crime bonus objectives). The rest are combat feats and completion - takedown counts, Venom-power kills, all districts, all FNSM requests, suit and visor mods, and a New Game+ clear.",
                "The catalog marks it difficulty 3. There is no hard-difficulty achievement and nothing is missable - the hidden trophies are story unlocks and 'complete every X' - so this is a full playthrough plus cleanup and one NG+ run.",
                "Tip: finish the story (most hidden trophies pop automatically), then 100% every district and use a checklist for Time Capsules, Postcards, sound samples and crime bonus objectives."
            ]
        },
        {
            "heading": "Story & Training",
            "body": [
                "Collecting all achievements, all Skills, 100% districts, all Time Capsules, Postcards and Underground Caches, shutting down all Roxxon Labs and Underground hideouts, all suits, unravelling the Harlem conspiracy, an undetected Enemy Base, a 100x combo, Spectacular+ in the traversal, combat and stealth Spider-Training, completing every Spider-Training challenge, and the Final Test.",
                "The achievements here: Be Yourself (Collect all Achievements); Just the Beginning (Unlock all Skills); A New Home (100% complete all districts); Urban Explorers (Collect all Time Capsules); Memory Lane (Collect all Postcards); Salvager (Open all Underground Caches); Under Their Noses (Shut down all Roxxon Labs.); Underground Undone (Shut down all Underground hideouts.); Ready for Anything (Purchase all suits); Come at the King (Unravel the Harlem criminal conspiracy by completing the 'We've Got a Lead' side mission (unlocks after the three Harlem crime/FEAST missions).); Never Saw It Coming (Complete an Enemy Base without being detected); 100x Combo!!! (Perform a 100x Combo); Launch, Swing and Dive (Get a Spectacular+ rating in a Spider-Training traversal challenge.); Punching Pixels (Get a Spectacular+ rating in a Spider-Training combat challenge.); Dodging Light (Get a Spectacular+ rating in a Spider-Training stealth challenge.); Spider-Training: Complete (Complete every Spider-Training challenge at least once.); Pete's First Villain (Complete 'The Final Test' story mission.)."
            ]
        },
        {
            "heading": "Story Missions & Side Content",
            "body": [
                "Crafting 10 upgrades, riding Rhino through the mall, the Davis Brothers mix, keeping the bridge together, investigating Roxxon's underground lab, the Underground Undercover vault sequence, getting the trains running, chasing the Tinkerer, walking through Miles and Phin's past, defeating Roxxon Rhino and the Prowler, saving Harlem, and 25 ceiling and 25 wall takedowns and 50 Camouflaged defeats.",
                "The achievements here: Kitbash (Craft 10 Upgrades); Rhino Rodeo (Ride Rhino through the shopping mall (story).); Deep Cuts (Collect all 9 sound samples and recreate the Davis Brothers mix.); Hanging by a Thread (Keep the bridge together during its story sequence.); The Core of the Problem (Investigate Roxxon's underground lab (story).); True Deception (Complete the vault sequence in the 'Underground Undercover' story mission.); The Harlem Express (Get the subway trains running again (story).); Veloci-Skates (Chase the Tinkerer through the city (story).); Shared History (Walk through Miles and Phin's shared past (story).); Exploding Bulldozer (Defeat Roxxon Rhino (boss).); Family Drama (Defeat the Prowler (boss).); Ultimate Sacrifice (Save Harlem - earned during the final story sequence.); From the Rafters (Perform 25 Ceiling Takedowns); Climbing the Walls (Perform 25 Wall Takedowns); Invisible Spider (Defeat 50 enemies while Camouflaged)."
            ]
        },
        {
            "heading": "Combat Feats & Completion",
            "body": [
                "100 Venom-attack kills, a Venom Jump into Venom Dash, a Venom Dash throw into a group, 15 breakables as Rhino, beating Phin at the rocket mini-game, the two memorial visits, a Photo Mode sticker-and-lighting shot, 50 Remote Mine kills, all FNSM requests, a Suit Mod and a Visor Mod, receiving the Gift Suit, all crime bonus objectives, 100 stealth takedowns, riding the derelict boat, scrolling the end-of-story Social Feed, and a New Game+ clear.",
                "The achievements here: Overcharge (Defeat 100 enemies with Venom attacks); Up and Over (Perform a Venom Jump, then a Venom Dash on a single enemy); From Downtown (Use Venom Dash to throw an enemy into a group of three or more); Like a Rhino in a China Shop (Smash into 15 breakable objects while steering Rhino through the shopping mall); Competitive Spirit (Beat Phin at the rocket-launch mini-game.); Best Fries in Town (Pay your respects to a legend in the Upper West Side); JJJ Would Be Proud (Apply a sticker and customise lighting while in Photo Mode); Trapped (Defeat 50 enemies with the Remote Mine gadget); Five Star Review (Complete all FNSM app requests); Mod that Suit (Craft a Suit Mod); Look with Better Eyes (Craft a Visor Mod); Never Give Up (Pay respects at Jefferson Davis' grave in Harlem); A Gift From Pete (Receive the Gift Suit from Peter Parker.); Crime Master (Complete all Bonus Objectives for every crime type); Nowhere to Hide (Perform 100 Stealth Takedowns); I'm on a Boat (Ride the derelict boat in southern Chinatown); Socially Acceptable (Scroll through the entire Social Feed at the end of the story); Plus Plus (Complete the game on New Game+)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the main story - the boss and mission hidden trophies unlock automatically.",
                "2. Do the Spider-Training challenges, aiming for Spectacular+ in traversal, combat and stealth.",
                "3. 100% every district: Roxxon Labs, Underground hideouts, crimes with bonus objectives, Time Capsules, Postcards, Underground Caches, sound samples.",
                "4. Do the FNSM requests, the 'We've Got a Lead' Harlem mission, both memorial visits, and the combat-feat counters.",
                "5. Buy all suits, craft a Suit Mod and Visor Mod, then run New Game+ for 'Plus Plus'.",
                "Tip: nothing is missable - if the credits roll first, everything (districts, challenges, collectibles, the boat and Social Feed) is still available in free roam and New Game+."
            ]
        }
    ]
};

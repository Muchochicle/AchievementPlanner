// Homefront Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/homefront.json), whose 47 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   55100 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 2 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (TrueAchievements / Steam Community / game wikis) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "homefront-achievement-guide",
    "category": "game",
    "gameSlug": "homefront",
    "icon": "🇺",
    "title": "Homefront Achievement Guide",
    "summary": "A practical guide to all 47 Steam achievements in Homefront (2 hidden). Covers the seven campaign chapters, the Guerrilla-difficulty and Iron Man no-death clears, the collectible and chapter-challenge achievements, and the multiplayer set. Two achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Homefront has 47 Steam achievements and two are hidden - 'Safer Skies' (destroy all the SAM trucks in Chapter 6: Overwatch) and 'Tea Party' (a multiplayer taunt feat). The rest are open: completing each of the seven campaign chapters, completing them again on the hardest (Guerrilla) difficulty, the seven Iron Man no-death-no-checkpoint chapter clears, the News Pickup collectibles, a set of per-chapter challenge feats, and a block of multiplayer achievements.",
                "The catalog marks it roughly two playthroughs - a normal run and a Guerrilla run - and difficulty 3 mainly because the Iron Man achievements require a full chapter with no death and no checkpoint restart, and the multiplayer achievements depend on the game's servers being populated. Nothing is missable: chapters and challenges replay from the mission select.",
                "Tip: do the per-chapter challenge feats ('Pistol Whipped', 'Mercy', 'David Rejected') on your normal run, then combine the Guerrilla and Iron Man requirements where you can - a careful Guerrilla chapter with no death covers both."
            ]
        },
        {
            "heading": "Campaign Chapters",
            "body": [
                "Completing each of the seven single-player campaign chapters - Why We Fight, Freedom, Fire Sale, The Wall, Heartland, Overwatch and Golden Gate.",
                "The achievements here: Why We Fight (Complete chapter 1 in the Single Player Campaign); Freedom (Complete chapter 2 in the Single Player Campaign); Fire Sale (Complete chapter 3 in the Single Player Campaign); The Wall (Complete chapter 4 in the Single Player Campaign); Heartland (Complete chapter 5 in the Single Player Campaign); Overwatch (Complete chapter 6 in the Single Player Campaign); Golden Gate (Complete chapter 7 in the Single Player Campaign)."
            ]
        },
        {
            "heading": "Guerrilla Difficulty & Iron Man",
            "body": [
                "Completing each of the seven chapters on the hardest (Guerrilla) difficulty, and completing each of the seven chapters with no death and no checkpoint restart (Iron Man).",
                "The achievements here: Why We Fight - Guerrilla (Complete chapter 1 on the Hardest Difficulty in the Single Player Campaign); Freedom - Guerrilla (Complete chapter 2 on the Hardest Difficulty in the Single Player Campaign); Fire Sale - Guerrilla (Complete chapter 3 on the Hardest Difficulty in the Single Player Campaign); The Wall - Guerrilla (Complete chapter 4 on the Hardest Difficulty in the Single Player Campaign); Heartland - Guerrilla (Complete chapter 5 on the Hardest Difficulty in the Single Player Campaign); Overwatch - Guerrilla (Complete chapter 6 on the Hardest Difficulty in the Single Player Campaign); Golden Gate - Guerrilla (Complete chapter 7 on the Hardest Difficulty in the Single Player Campaign); Iron Man - Why We Fight (Complete chapter 1 in the Single Player Campaign without dying or restarting a checkpoint); Iron Man - Freedom (Complete chapter 2 in the Single Player Campaign without dying or restarting a checkpoint); Iron Man - Fire Sale (Complete chapter 3 in the Single Player Campaign without dying or restarting a checkpoint); Iron Man - The Wall (Complete chapter 4 in the Single Player Campaign without dying or restarting a checkpoint); Iron Man - Heartland (Complete chapter 5 in the Single Player Campaign without dying or restarting a checkpoint); Iron Man - Overwatch (Complete chapter 6 in the Single Player Campaign without dying or restarting a checkpoint); Iron Man - Golden Gate (Complete chapter 7 in the Single Player Campaign without dying or restarting a checkpoint)."
            ]
        },
        {
            "heading": "Collectibles & Chapter Challenges",
            "body": [
                "30 and all 61 News Pickups, the first pickup, the per-chapter feats (25 pistol and 25 melee kills in Chapter 1, talking to every Oasis inhabitant, the no-damage sentry, the fire-kill and no-fire-kill feats, the no-damage Goliath run, the Golden Gate jump, the church timed run, the 8-minute tanker hijack), the hidden 'Safer Skies' SAM-truck feat, 10 scaffolding knock-offs, and destroying all vehicles with the UAV.",
                "The achievements here: Archivist (Find 30 of 61 News Pickups in the Single Player Campaign); Historian (Find all 61 News Pickups in the Single Player Campaign); Pistol Whipped (Kill 25 enemies with a pistol in Chapter 1: Why We Fight); Give Him the Stick (Kill 25 enemies with melee attacks in Chapter 1: Why We Fight); Welcome to Freedom (Talk at least once to each inhabitant of Oasis in Chapter 2: Freedom); Good Use of Cover (Destroy the first sentry without taking any damage in Chapter 2: Freedom); Mercy (Kill 5 enemies while they are on fire in Chapter 3: Fire Sale); Let 'em Burn (Don't kill any of the enemies that are on fire in Chapter 3: Fire Sale); David Rejected (Complete the street section without Goliath taking any damage in Chapter 4: The Wall); Fatal and Tragic (Jump off the Golden Gate Bridge in Chapter 7: Golden Gate); Chronicler (Find the first of 61 news pickups); Stairway to Heaven (From the front door of the church, make it to the crow’s nest in 240 seconds in Chapter 5: Heartland); Speed Demon (Hijack the tankers in less than 8 minutes in one life in Chapter 6: Overwatch); Safer Skies (Destroy all of the SAM (surface-to-air missile) trucks in Chapter 6: Overwatch.); Wilhelm's Nightmare (Knock 10 enemies off of the scaffolding during the helicopter fly-in in Chapter 7: Golden Gate); Soft Targets (Destroy all vehicles using the UAV in Chapter 7: Golden Gate); Weapon Expert (Complete an expert challenge for any weapon in Multiplayer)."
            ]
        },
        {
            "heading": "Multiplayer",
            "body": [
                "The weapon / drone / vehicle expert challenges, all challenges (Expert Of War), experience level 50, the 3-Star and 5-Star Battle Commander threats, the hidden 'Tea Party' taunt feat, and the two Apache co-pilot / helicopter-wreckage kill feats.",
                "The achievements here: Drone Expert (Complete an expert challenge for any drone in Multiplayer); Vehicle Expert (Complete an expert challenge for any vehicle in Multiplayer); Expert Of War (Complete all challenges for weapons, drones, vehicles, and modes in Multiplayer); Over the Hill (Reach experience level 50 in Multiplayer); 3-Star Threat (Become a 3-Star threat in a Battle Commander public match); 5-Star Threat (Become a 5-Star threat in a Battle Commander public match); Tea Party (In multiplayer, crouch repeatedly ('teabag') over recently killed enemy players five times.); Destructive Duo (Killed 5 enemies from the second seat of the Apache in one run.); Action Hero (Bailed out of a helicopter, killing an enemy with the falling wreckage.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the campaign on a normal difficulty, doing the per-chapter challenge feats and collecting all 61 News Pickups.",
                "2. Get 'Safer Skies' by destroying every SAM truck in Chapter 6.",
                "3. Replay each chapter on Guerrilla, aiming for no death so you also bank the Iron Man achievement.",
                "4. Play multiplayer for the expert challenges, level 50, and the Battle Commander threat tiers.",
                "5. Do the 'Tea Party' taunt and the two Apache / helicopter kill feats in multiplayer.",
                "Tip: the Iron Man chapters are easiest on the normal difficulty - play very cautiously, and if you die, quit to the menu before the checkpoint reloads so the run doesn't count as a restart."
            ]
        }
    ]
};

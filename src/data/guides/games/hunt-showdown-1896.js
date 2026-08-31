// Hunt: Showdown 1896 Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/hunt-showdown-1896.json), whose 36 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   594650 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 10 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (TrueAchievements / Steam Community / game wikis) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "hunt-showdown-1896-achievement-guide",
    "category": "game",
    "gameSlug": "hunt-showdown-1896",
    "icon": "🔫",
    "title": "Hunt: Showdown 1896 Achievement Guide",
    "summary": "A practical guide to all 36 Steam achievements in Hunt: Showdown 1896 (10 hidden). Covers the Bloodline and progression grind, the Soul Survivor and combat achievements, and the exploration, challenge and mastery achievements. Ten of the achievements are hidden and their unlock conditions are researched from community 100% guides.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Hunt: Showdown 1896 has 36 Steam achievements and 10 are hidden. Thirteen are progression - Trainee Mode, Bloodline Tiers 2, 3 and rank 100, retiring Hunters, a Level 50 Hunter (and five at once), 15 traits on one Hunter, recruiting 100 Hunters, your first Bounty Hunt, 250 clues investigated, 100 contracts, and locating a boss with no clues. Fourteen cover the Soul Survivor mode and combat (headshots, Hunter kills, melee-boss and sledgehammer-throw kills, breaking doors). The rest are exploration, Challenges and mastery.",
                "The catalog marks it difficulty 4. Bloodline rank 100, five Level 50 Hunters at once, 100 Bounty Hunt contracts, 100 enemy-Hunter headshots and 50 solo boss kills are a very long PvPvE grind.",
                "Tip: play normally toward Bloodline 100 - contracts, clues, headshots and gear unlocks all accrue - and slot in the trick achievements (hide in a toilet, play the gramophone and piano, burn chicken coops) when the chance comes up."
            ]
        },
        {
            "heading": "Bloodline & Progression",
            "body": [
                "Completing Trainee Mode, unlocking Bloodline Tiers 2, 3 and rank 100, retiring 25 Hunters, getting a Hunter to Level 50 and having five Level 50 Hunters at once, 15 traits on one Hunter, recruiting 100 Hunters, your first Bounty Hunt contract, investigating 250 clues, 100 contracts, and locating a boss without investigating a clue.",
                "The achievements here: Initiation Complete (Complete Trainee Mode.); Welcome to Tier 2 (Unlock Bloodline Tier 2.); Welcome to Tier 3 (Unlock Bloodline Tier 3.); Bloodline Peak (Unlock Bloodline rank 100.); Convalescent Home (Retire 25 Hunters.); Fifty Shades of Survival (Get a Hunter to level 50.); Five-Ace Hand (Have 5 level 50 Hunters at the same time.); Jack of All Trades (Have 15 traits on a Hunter at the same time.); Master Headhunter (Recruit 100 Hunters.); Vestal Contract (Complete your first Bounty Hunt contract.); In the Footsteps of Flaxman Low (Investigate 250 clues.); Centennial Contractor (Complete 100 Bounty Hunt contracts.); Clairvoyant (Locate a Boss Target without investigating a single clue.)."
            ]
        },
        {
            "heading": "Soul Survivor & Combat",
            "body": [
                "The Soul Survivor achievements (close 250 rifts, absorb 250 Wellspring energy, be first to activate the Wellspring, survive, be last standing), killing an Immolator without exploding it, 150 monster headshots, your first enemy-Hunter kill, 100 enemy-Hunter headshots, a melee boss kill, a sledgehammer-throw kill, breaking 50 doors, burning 50 chicken coops, and playing the gramophone and piano in one mission.",
                "The achievements here: Sealed and Secured (Close 250 rifts in Soul Survivor.); Easier than Mining Sulphur (Absorb at least 250 energy from the Wellspring in Soul Survivor.); First Come, First Served (Be the first to activate the Wellspring in Soul Survivor.); Live to Fight Another Day (Survive Soul Survivor.); To The Bitter End (Be the last Hunter standing in Soul Survivor.); Simmer Down, Hothead! (Kill an Immolator without making it explode.); On The Nose (Kill 150 monsters with headshots.); Debut (Kill your first enemy Hunter.); Deadeye (Kill 100 enemy Hunters with headshots.); Eeny, Melee, Miny, Moe (Kill any Boss Target with a melee attack.); Throw Hammer or Run (Kill an enemy Hunter with a sledgehammer throw.); Battering Ram (Break 50 doors.); Louisiana Fried Chicken (Burn 50 chicken coops.); Exploration Tour (Visit every location on any map in one mission.); Supply Tour (Visit every supply point on any map in one mission.); Playing Tonight: Buddy Bolden (Play the gramophone and the piano in one mission.); Trinity Of Pain (Be on fire, poisoned and bleeding at the same time.)."
            ]
        },
        {
            "heading": "Exploration, Challenges & Mastery",
            "body": [
                "Completing a Challenge and seven Challenges, hiding in a toilet, unlocking 50 pieces of gear, 150 Grunt kills with the dusters, and killing 50 Boss Targets solo - plus visiting every location and every supply point in one mission, and being on fire, poisoned and bleeding at once.",
                "The achievements here: All In A Day's Work (Complete a Challenge.); 7 Days Later (Complete seven Challenges.); Do Not Disturb (Hide in a toilet (step into any outhouse and close the door).); Weapons Expert (Unlock any 50 pieces of gear.); Regards from John L. Sullivan (Kill 150 Grunts with the dusters.); Lone Wolf (Kill 50 Boss Targets solo.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Do Trainee Mode, then grind Bounty Hunt contracts toward Bloodline rank 100.",
                "2. Let the counters build: 250 clues, 100 contracts, monster and Hunter headshots, 50 pieces of gear.",
                "3. Bank Level 50 Hunters instead of retiring them until you have five at once ('Five-Ace Hand').",
                "4. Play Soul Survivor for its five-achievement set.",
                "5. Grab the trick achievements: hide in a toilet, gramophone + piano in one mission, burn 50 chicken coops, melee a boss, and kill an Immolator without exploding it.",
                "Tip: 'Five-Ace Hand' clashes with 'Convalescent Home' (retire 25 Hunters) - do the retirements early with low-level Hunters, then stop retiring and stockpile your Level 50s."
            ]
        }
    ]
};

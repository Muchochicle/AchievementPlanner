// BioShock 2 Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/bioshock-2.json), whose 68 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   8850 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "bioshock-2-achievement-guide",
    "category": "game",
    "gameSlug": "bioshock-2",
    "icon": "🚰",
    "title": "BioShock 2 Achievement Guide",
    "summary": "A practical guide to all 68 Steam achievements in BioShock 2 - none are hidden. Covers the single-player campaign, the upgrade, hacking and research systems, the combat and completion feats, the multiplayer, and the Protector Trials and Minerva's Den DLC.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "BioShock 2 has 68 Steam achievements and none of them are hidden. The single-player campaign contributes a set of story markers and a large block of systems and completion goals - buy and max Plasmid slots, all weapon upgrades, hack milestones, full research, all Plasmids, the hardest-difficulty clear, a no-Vita-Chamber run, the \"Savior\" and \"Dealt with Every Little Sister\" morality achievements, and 100 audio diaries. The multiplayer adds rank milestones (10 to 40), first kills, becoming a Big Daddy, and playing and winning on every map. The rest are the Protector Trials DLC (star totals, A ranks, ADAM collection) and the Minerva's Den DLC (its three story markers, the Vacuum Bots, a Lancer Big Daddy and the Spitfire high score).",
                "The catalog marks it as roughly two playthroughs - a Hard, no-Vita-Chamber, save-everyone run plus the DLC and multiplayer - but nothing is missable: chapters replay and all counters are cumulative.",
                "Tip: do a single Hard-difficulty run where you save every Little Sister, spare Grace, Stanley and Gil, and never use a Vita-Chamber - that one run covers \"Against All Odds\", \"Savior\", \"Big Brass Balls\" and most of the systems achievements at once."
            ]
        },
        {
            "heading": "Single-Player Campaign",
            "body": [
                "The story markers - returning to Rapture, the train-station defence, Sinclair, Grace, the Preacher, Dionysus Park, Lamb's hideout, the Little Sister reunion, and escaping Rapture.",
                "The achievements here: Daddy's Home (Found your way back into the ruins of Rapture.); Protector (Defended yourself against Lamb's assault in the train station.); Sinclair's Solution (Joined forces with Sinclair in Ryan Amusements.); Confronted Grace (Confronted Lamb's lieutenant in Pauper's Drop.); Defeated the Preacher (Defeated the Preacher.); Nose for News (Uncovered the secret of Dionysus Park.); Found Lamb's Hideout (Gained access to Lamb's stronghold.); Reunion (Reunited with your original Little Sister.); Heading to the Surface (Headed to the surface on the side of Sinclair's escape pod.); Escape (Escaped Rapture.)."
            ]
        },
        {
            "heading": "Upgrades, Hacking & Research",
            "body": [
                "Buying and maxing Plasmid slots, upgrading and fully upgrading weapons, all Power to the People upgrades, the distance / one-of-each / 30-machine hacks, and first, one-track and full research.",
                "The achievements here: Bought a Slot (Bought one Plasmid or Tonic Slot at a Gatherer's Garden.); Max Plasmid Slots (Fully upgraded to the maximum number of Plasmid Slots.); Upgraded a Weapon (Upgraded a weapon at a Power to the People Station.); Fully Upgraded a Weapon (Installed the third upgrade to a weapon.); All Weapon Upgrades (Found every Power to the People weapon upgrade in the game.); Distance Hacker (Used the Hack Tool to hack an object at a distance.); Prolific Hacker (Hacked one of each kind of machine.); Master Hacker (Hacked 30 machines at a distance with the Hack Tool.); First Research (Researched a Splicer with the Research Camera.); One Research Track (Maxed out one Research Track.); Research Master (Completed all research on every subject in Rapture.)."
            ]
        },
        {
            "heading": "Combat, Plasmids & Completion",
            "body": [
                "The combat and completion feats - three no-death Big Daddy fights, adopting a Little Sister, 600 ADAM, a fully upgraded Plasmid, all 11 Plasmids, the Big Sister fight, hacked-Security and Trap kills, a flawless Gather, 2000 dollars spent, dealing with every Little Sister, the Hard clear, \"Savior\", the no-Vita-Chamber run and 100 audio diaries.",
                "The achievements here: Grand Daddy (Defeated 3 Big Daddies without dying during the fight.); Adopted a Little Sister (Adopted a new Little Sister for the first time.); Master Gatherer (Gathered 600 ADAM with Little Sisters.); Fully Upgraded a Plasmid (Fully upgraded one Plasmid to the Level 3 version.); All Plasmids (Found or purchased all 11 basic Plasmid types.); Unbreakable (Defended yourself against the Big Sister without dying.); Look at You, Hacker (Killed 50 enemies using only hacked Security.); Trap Master (Killed 30 enemies using only Traps.); Counterattack (Killed an enemy with its own projectile.); Master Protector (Got through a Gather with no damage and no one getting to the Little Sister.); Big Spender (Spent 2000 dollars at Vending Machines.); Dealt with Every Little Sister (Dealt with every Little Sister.); Against All Odds (Finished the game on the hardest difficulty level.); Savior (Saved every Little Sister and spared Grace, Stanley and Gil.); Big Brass Balls (Finished the game without using Vita-Chambers.); Rapture Historian (Found 100 audio diaries.)."
            ]
        },
        {
            "heading": "Multiplayer",
            "body": [
                "The multiplayer achievements - first kill, first match, becoming a Big Daddy, first Big Daddy takedown, saving a Little Sister, first trial, ranks 10 to 40, the founder's memorial, a first win, playing every map and every DLC map, and winning on the six new maps.",
                "The achievements here: Unnatural Selection (Scored your first kill in a non-private match.); Welcome to Rapture (Completed your first non-private match.); Disgusting Frankenstein (Became a Big Daddy for the first time in a non-private match.); \"Mr. Bubbles-- No!\" (Took down your first Big Daddy in a non-private match.); Mother Goose (Saved your first Little Sister in a non-private match.); Two-Bit Heroics (Completed your first trial in a non-private match.); Parasite (Achieved Rank 10.); Little Moth (Achieved Rank 20.); Skin Job (Achieved Rank 30.); Choose the Impossible (Achieved Rank 40.); 9-Irony (Paid your respects to the founder of Rapture.); Proving Grounds (Won your first non-private match.); Man About Town (Played at least one non-private match on each multiplayer map.); Aqua Incognita (Played at least one non-private match on each downloadable content map.); Territorial (Won a non-private match in each of the 6 new maps.)."
            ]
        },
        {
            "heading": "Protector Trials & Minerva's Den DLC",
            "body": [
                "The Rebirth reset, the Protector Trials (6 / 18 / 36 stars, all A ranks, all bonus trials, 100% and 50% ADAM), and Minerva's Den (its three story markers, all 10 Vacuum Bots, wresting the Thinker, a Lancer Big Daddy, the Spitfire high score and resolving its Little Sisters).",
                "The achievements here: Reincarnation (Used Rebirth to start again!); Litmus Test (Earned 6 stars in the Protector Trials); Acid Test (Earned 18 stars in the Protector Trials); Trial By Fire (Earned 36 stars in the Protector Trials); Enemy of the Family (Earned an A rank in all Protector Trials); Guardian Angel (Completed all bonus Protector Trials); Perfect Protector (Collected 100% of the ADAM in a single Protector Trial); Get a Bigger Bucket (Collected 50% of the ADAM available in all Protector Trials); Login (Reached Rapture Central Computing Operations); Root Access Granted (Reached Computer Core Access); Logout (Escaped Minerva's Den); SUDO (Wrested control of the Thinker from Reed Wahl); Garbage Collection (Destroyed all 10 Vacuum Bots in Minerva's Den); High Score (Got 9999 points in one game of Spitfire); Lancer Killer (Killed a Lancer Big Daddy); ADAM Addict (Resolved all the Little Sisters in Minerva's Den)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Do one Hard-difficulty run saving every Little Sister, sparing Grace, Stanley and Gil, and never using a Vita-Chamber.",
                "2. On that run, hit the systems milestones - all weapon and Plasmid upgrades, full research, the hack goals and 100 audio diaries.",
                "3. Play the Minerva's Den DLC campaign for its story markers and collectibles.",
                "4. Grind the Protector Trials for the star totals, A ranks and ADAM goals.",
                "5. Play multiplayer for the rank milestones and the play-every-map / win-every-map achievements.",
                "Tip: \"Master Protector\" (a flawless Gather) and the three no-death Big Daddy fights are easiest early on the lower difficulty of a second file if Hard proves too punishing - progress toward them still counts."
            ]
        }
    ]
};

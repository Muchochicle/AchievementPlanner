// Worms Reloaded Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/worms-reloaded.json), whose 61 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   22600 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "worms-reloaded-achievement-guide",
    "category": "game",
    "gameSlug": "worms-reloaded",
    "icon": "🪱",
    "title": "Worms Reloaded Achievement Guide",
    "summary": "A practical guide to all 61 Steam achievements in Worms Reloaded - none are hidden. Covers the base-game weapon and match feats, the Forts Pack missions, the Puzzle Pack and Time Attack challenges, and the Retro Pack missions and easter eggs.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Worms Reloaded has 61 Steam achievements and none of them are hidden. The base game contributes weapon and match feats - use fire weapons 200 times, drown 170 worms, use the Ninja Rope 1000 times, deploy the Holy Hand Grenade, win with only the Grenade or Prod, a 6-kill turn, complete the campaign, 17 ranked wins in every mode, and the community missions. The rest are DLC-pack challenges: the Forts Pack missions (deathmatch, defend, crate, kill-vital, plus per-fort restriction runs), the Puzzle Pack (puzzles 1-20 in blocks, no-damage and inventory-left runs, before-Sudden-Death runs), the Time Attack challenges (fastest times on every type, hazard-free runs, sub-time runs), the Retro Pack missions and blocks, and the \"exactly 31 / exactly 12 damage\" easter eggs.",
                "Nothing is missable - every mission, puzzle and Time Attack is replayable and the cumulative counters accrue across all your matches.",
                "Tip: do the DLC packs (Forts, Puzzle, Time Attack, Retro) as focused sessions with a guide - the per-mission restriction achievements (no damage, item left, before Sudden Death) each need a specific solution."
            ]
        },
        {
            "heading": "Base Game Feats",
            "body": [
                "The Armageddon, sheep, fire-weapon, Ninja Rope, Holy Hand Grenade, drowning and Grenade/Prod win feats, a fast Pro ranked win, the single-player campaign, 17 ranked wins in every mode, a 6-kill turn, and the community missions.",
                "The achievements here: Armageddon An Award (Use the Armageddon weapon 10 times); Cheeky Flocker (Deploy 25 Sheep in any ranked match); Fast, Pink And Hard (Win a Pro ranked match in under 3 minutes); Fire Starter (Use fire weapons 200 times); Get Your Lob On (Win a game using just the Grenade); Going Solo (Complete the single player campaign); Hallelujah! (Deploy the fabled Holy Hand Grenade); Likes The Drink (Drown 170 enemy worms); Oldest Swinger In Town (Use the Ninja Rope 1000 times); Prod For Victory (Win a game by using the Prod); Ranked Master (Achieve 17 wins in all ranked match types); Six Pest (Kill 6 enemy worms in a single turn); People's Champ! (Complete all of the community-created missions.)."
            ]
        },
        {
            "heading": "Forts Pack",
            "body": [
                "The Forts Pack - completing a deathmatch, defend-vital, vital-crate and kill-vital mission, and the per-fort restriction runs (no Bridge Kit, no Airstrike, Banana Bomb, Holy Hand Grenade, no worm lost, no vital damage, crate before Sudden Death).",
                "The achievements here: Death Matched (Forts Pack: Complete any deathmatch mission); King's Defender (Forts Pack: Complete any defend vital worm mission); Crate Scott (Forts Pack: Complete any vital crate mission); Vital Ballistics (Forts Pack: Complete any kill vital worm mission); Bridge Burner (Forts Pack: Collect the vital crate on Fort 13 without using the Bridge Kit); Call off the Strike (Forts Pack: Complete Fort 14 without using the Airstrike); Gone Bananas (Forts Pack: Complete Fort 16 by using the Banana Bomb); Holy Moly (Forts Pack: Complete Fort 11 by using the Holy Hand Grenade); Head Hunter (Forts Pack: Complete Fort 20 ); Dream Team (Forts Pack: Complete Fort 19 without losing a worm); Stalwart (Forts Pack: Complete Fort 17 without vital worm taking damage); Soak-Crates (Forts Pack: Collect the vital crate on Fort 18 before sudden death kicks in)."
            ]
        },
        {
            "heading": "Puzzle Pack & Time Attack",
            "body": [
                "The Puzzle Pack - puzzles 1-7, 8-15 and 16-20, the no-damage puzzle runs, the inventory-item-left runs, and the before-Sudden-Death runs - and the Time Attack challenges - fastest times on every A-to-B, lap and crate-collect course, the hazard-free (Sentry Gun, Mine, Fall) runs, and the sub-time runs.",
                "The achievements here: Amateur Puzzler (Puzzle Pack: Complete Puzzles 1-7); Detective (Puzzle Pack: Complete Puzzles 8-15); Super Sleuth (Puzzle Pack: Complete Puzzles 16-20); Damage Dodger (Puzzle Pack: Complete Puzzle 6 without taking damage); Pain Prevention (Puzzle Pack: Complete Puzzle 5 without taking damage); Odynophobiac (Puzzle Pack: Complete Puzzle 11 without taking damage); Economical (Puzzle Pack: Complete Puzzle 3 but have at least 1 item left in your inventory that isn't Skip Go or Surrender); Thrifty (Puzzle Pack: Complete Puzzle 17 but have at least 1 item left in your inventory that isn't Skip Go or Surrender); Gnat's Nostril (Puzzle Pack: Complete Puzzle 20 but have at least 1 item left in your inventory that isn't Skip Go or Surrender); Lightfoot (Puzzle Pack: Complete Puzzle 15 before Sudden Death kicks in); Ain't Got Time to Speed (Puzzle Pack: Complete Puzzle 19 before Sudden Death kicks in); Done in 20 Seconds (Puzzle Pack: Complete Puzzle 18 before Sudden Death kicks in); Swift Exit (Time Attack: Set fastest times on all the A-to-B (exit point) Time Attacks); Ain't No Lap Dog (Time Attack: Set fastest times on all the lap-based Time Attacks); The Cratest (Time Attack: Set fastest times on all the Crate Collect Time Attacks); Bullet Dodger  (Time Attack: Complete Time Attack 7 by setting the fastest time and without taking Sentry Gun fire damage); Gun Shy (Time Attack: Complete Time Attack 3 by setting the fastest time and without taking Sentry Gun fire damage); Twinkle Toes (Time Attack: Complete Time Attack 13 by setting the fastest time and without taking Mine damage); Defused (Time Attack: Complete Time Attack 1 by setting the fastest time and without taking Mine damage); Fall Guy (Time Attack: Complete Time Attack 2 by setting the fastest time and without taking Fall damage); Down-to-Earth (Time Attack: Complete Time Attack 17 by setting the fastest time and without taking Fall damage ); Lightning Bolt (Time Attack: Complete Time Attack 6 in under 70 Seconds); Me Sane Bolt (Time Attack: Complete Time Attack 9 in under 50 Seconds); Nut 'n' Bolt (Time Attack: Complete Time Attack 4 in under 20 seconds)."
            ]
        },
        {
            "heading": "Retro Pack & Extras",
            "body": [
                "The Retro Pack - the per-mission restriction runs, collecting all crates on Retro 12, and completing Retro 1-5, 6-10 and 11-15 - plus the \"exactly 31 damage\" and \"exactly 12 damage\" easter eggs.",
                "The achievements here: Last Worm Scout (Retro Pack: Complete Retro 1 without the Mayor taking damage); Can't Be Rocked (Retro Pack: Complete Retro 4 without taking damage); An Apple a Day... (Retro Pack: Complete Retro 6 without picking up a Health Crate); Worminator (Retro Pack: Complete Retro 7 and kill all the enemy worms); Leave No Worm Behind (Retro Pack: Complete Retro 10 with all 3 player worms alive); Child's Play (Retro Pack: Complete Retro 11 without the Toy Master taking damage); Crate Fishing (Retro Pack: Collect all the crates on Retro 12); Modernist (Retro Pack: Complete Retro 1-5); So Last Year (Retro Pack: Complete Retro 6-10); Stuck in the 90s (Retro Pack: Complete Retro 11-15); Summer of '69 (Deal exactly 31 damage to a worm with 100 health. ); 12 Days of Winterval (Deal exactly 12 damage to a worm with 100 health. )."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the single-player campaign and the community missions.",
                "2. Grind the base-game weapon counters (fire weapons, Ninja Rope, drownings) and the ranked-win achievements across normal play.",
                "3. Do the Forts Pack missions, following a guide for the per-fort restriction runs.",
                "4. Do the Puzzle Pack and Time Attack packs as focused sessions - each restriction achievement needs a specific route.",
                "5. Finish with the Retro Pack missions and the two \"exact damage\" easter eggs.",
                "Tip: the \"exactly 31 / exactly 12 damage\" achievements need a full-health worm and a weapon whose damage you can control precisely - the Uzi or a partial fall works; line it up in a custom match."
            ]
        }
    ]
};

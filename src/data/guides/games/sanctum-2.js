// Sanctum 2 Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/sanctum-2.json), whose 50 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   210770 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "sanctum-2-achievement-guide",
    "category": "game",
    "gameSlug": "sanctum-2",
    "icon": "🗼",
    "title": "Sanctum 2 Achievement Guide",
    "summary": "A practical guide to all 50 Steam achievements in Sanctum 2 - none are hidden. Covers the rank and Feat of Strength progression and per-map completions, the skill feats and secret areas, and the later maps and the character-specific perk-build challenges.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Sanctum 2 has 50 Steam achievements and none of them are hidden. The progression backbone is reaching each rank (10 up to 50) and completing each map, both on a plain run and with 5 Feats of Strength (the game's difficulty modifiers) enabled. Around that sit skill feats (a no-core-damage map, a full sniper clip of kills, a 10-kill no-hit streak, three 1-HP recoveries) and finding the secret area on three maps. The last block is the later maps (Brightholme, Outskirts, Arc Islands) and a set of achievements for finishing a map while playing a specific character with a specific three-perk loadout (Sweet with Long Range Specialisation, Skye with Marksman, and so on).",
                "Nothing is missable - maps replay freely, ranks and the Feat of Strength completions persist, and the character-build achievements just need one map finished with that exact loadout. The demanding parts are the 5-Feats-of-Strength completions of the hardest maps and the no-core-damage feat.",
                "Tip: unlock the perks you need for the character-build achievements first (they list a specific three-perk combo per character), then do each build achievement on the easiest map available - the achievement only checks the loadout and a map completion, so an early map on the plain difficulty is enough."
            ]
        },
        {
            "heading": "Progression, Ranks & Map Completion",
            "body": [
                "Completing your first map, building 20 tower bases, maxing a tower, the Feat of Strength completions (one, then five), reaching ranks 10 and 20, completing the core four maps (Facility, Rocky Fields, Giant Trees, Swamp) plain and with 5 Feats, the four-player The End and the Co-op feat, the Game in a Game achievements, the viral Coffee Stained, and Coastline plain and with 5 Feats.",
                "The achievements here: Humble Beginnings (Complete your first map.); The Bas(e)ics (Build 20 tower bases.); The Best Defense is Offense (Upgrade a tower to the max.); Growing Stronger (Complete a map with a Feat of Strength enabled.); Halfway Awesome (Reach Rank 10.); Hope Rides Alone (Complete Facility, Rocky Fields, Giant Trees and Swamp.); Full-time Ass-kicker (Reach rank 20.); Hercules (Complete a map with 5 Feats of Strength enabled.); Total Badass (Complete Facility, Rocky Fields, Giant Trees and Swamp with 5 Feats of Strength enabled.); Final Destination (Complete The End in a party of four.); Team Player (Complete one level with 5 Feats of Strength enabled in Co-op.); Game in a game (Complete a game in a game.); Six Pack (Complete six Game in a Games); Coffee Stained (This is a viral achievement.); McBirger's (Complete Facility with 5 Feats of Strength enabled.); Balboa (Complete Rocky Fields with 5 Feats of Strength enabled.); Norwegian Wood (Complete Giant Trees with 5 Feats of Strength enabled.); Moist (Complete Swamp with 5 Feats of Strength enabled.); Pliskeblaske (Complete Coastline with 5 Feats of Strength enabled.); Fiskeplaske (Complete Coastline.)."
            ]
        },
        {
            "heading": "Skill Feats & Secret Areas",
            "body": [
                "A no-core-damage map, a full sniper-clip of kills, a 10-kill no-hit streak, three 1-HP recoveries, a triple explosion kill, the secret areas on Bio Lab, Outpost and Abandoned Lab, ranks 25, 30, 35 and 40, Brightholme and Outskirts plain and with 5 Feats, and the 10-drones-over-an-enemy feat.",
                "The achievements here: Mr. Perfect (Complete all waves on a map without losing any core life.); One shot, one kill. (Get a kill with every shot in the sniper clip.); Come at me bro! (Kill 10 enemies in a row without getting hit.); Honey Badger don't care (Recover from 1 HP three times without dying.); Gibbs, gibbs everywhere (Blow up three enemies at the same time); Lab Rat (Find the secret area on Bio Lab.); Loekrise Kingdom (Find the secret area on Outpost.); Dark Secrets (Find the secret area on Abandoned Lab.); Titan (Reach rank 25.); Above and Beyond (Reach rank 30.); We don't go to Brightholme (Complete Brightholme with 5 Feats of Strength enabled.); Slumdog Medicine (Complete Brightholme.); Titan Slayer (Reach rank 35.); BOOM! Headshot (Complete Outskirts with 5 Feats of Strength enabled.); Clean Kill (Complete Outskirts.); Not the Bees! (Have 10 Drones from the Drone Launcher over an enemy.); Freedom! (Reach rank 40.)."
            ]
        },
        {
            "heading": "Later Maps & Character Build Challenges",
            "body": [
                "Completing Arc Islands plain and with 5 Feats, reaching rank 50, and the character-specific perk-build achievements - finishing a map playing Sweet, Skye, SiMo, Haigen or TSYGAN with each character's named three-perk loadout.",
                "The achievements here: The Last Stand (Complete Arc Islands.); Heavy Artillery (Finish a map playing Sweet with the Long Range Specialisation, Core Guardian, and Long Range Superiority.); LOOK MOM, IM FLYING (Finish a map playing Sweet with Rymdskor, Plumber shoes, and Upper Class.); I am SUPER ANGRY (Finish a map playing Skye with Collateral Damage, Bloodletter and Adrenaline Rush.); Sniper Skye (Finish a map playing Skye with Tactical Juxtaposition, Marksman, and Steady Aim.); ROBOTS, ROBOTS EVERYWHERE (Finish a map playing SiMo with the G2 Companion, Roboticist and Electrical Outburst.); MLG noscope maximum skill (Finish a map playing SiMo with Tactical Juxtaposition, Rymdskor and Trickster.); Street Justice (Finish a map playing Haigen with Spiked Armor, Desperate Measures and Hydra Blood.); Angry working class (Finish a map playing Haigen with Best Friends Forever, Reinforcements and Roboticist.); Legolaser aimed shots (Finish a map playing TSYGAN with Marksman, Steady Aim and Long Range Superiority.); Swedish police can't track this one (Finish a map playing TSYGAN with Rymdskor, Trickster and Parthian Tactics.); Leaving Loek III (Complete Arc Islands with 5 Feats of Strength enabled.); Better late than never (Reach rank 50.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through the campaign maps on the plain difficulty for the map-completion achievements and to climb the early ranks.",
                "2. Unlock the perks referenced by the character-build achievements, then do each build achievement on the easiest map with that exact loadout.",
                "3. Do the skill feats on a comfortable map: the no-core-damage run, the sniper clip, the no-hit kill streak, the 1-HP recoveries, and the drone and explosion feats.",
                "4. Find the secret areas on Bio Lab, Outpost and Abandoned Lab.",
                "5. Replay every map with 5 Feats of Strength enabled - hardest maps last - and grind the remaining ranks toward 50.",
                "Tip: the 5-Feats-of-Strength runs are far easier in co-op with a coordinated partner - one player builds and maintains the maze while the other holds the front line, and you can each specialise a character build that covers the other's weakness."
            ]
        }
    ]
};

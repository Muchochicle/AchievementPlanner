// STAR WARS Battlefront (2015) Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/star-wars-battlefront.json), whose 63 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1237980 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "star-wars-battlefront-achievement-guide",
    "category": "game",
    "gameSlug": "star-wars-battlefront",
    "icon": "🔫",
    "title": "STAR WARS Battlefront (2015) Achievement Guide",
    "summary": "A practical guide to all 63 Steam achievements in STAR WARS Battlefront (2015) - none are hidden. Covers the multiplayer game modes and per-mode feats, the single-player missions, Survival and training, the rank milestones up to Rank 100, and all four expansions (Outer Rim, Bespin, Death Star and Rogue One: Scarif).",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "STAR WARS Battlefront (the 2015 DICE game) has 63 Steam achievements and none of them are hidden. The base list is mostly multiplayer: play and win every game mode, per-mode kill and objective feats (Walker Assault tow-cable kills, Fighter Squadron, Blast, Hero Hunt, Drop Zone, Droid Run), hero kills, credits earned, Accomplishments and Challenges. The single-player and co-op side adds the Missions, Survival and Battle modes on Master difficulty and the training stars. The rest are the four post-launch expansions - Outer Rim, Bespin, Death Star and Rogue One: Scarif - each asking you to play all of its new maps, plus rank milestones at 25, 50 and 100.",
                "Nothing is missable - every mode, map and mission stays available and all cumulative counters accrue across as much play as you like. The longest are the rank grind to 100 (\"The circle is now complete\"), 25,000 credits, 100 Accomplishments and the various \"win 10 rounds of mode X\" expansion achievements.",
                "Tip: the DLC \"play all the new maps\" achievements only need a brief appearance in each map, so use the map-specific playlists or server browser to tick them off quickly rather than waiting for rotation."
            ]
        },
        {
            "heading": "Multiplayer: Modes & Core Feats",
            "body": [
                "Playing and winning every base multiplayer mode, and the per-mode kill and objective feats - Cooling Flush, partner Star Cards, first kill, Jump Pack kills, AT-ST trample, Walker Assault tow cable, Supremacy, Fighter Squadron, Cargo, Blast, Hero Hunt, Drop Zone, Droid Run and Heroes vs Villains.",
                "The achievements here: A New Hope (Play every multiplayer game mode in the original game); in a galaxy far, far away.... (Win one match in each multiplayer game mode in the original game); Never tell me the odds! (Successfully perform Cooling Flush 10 times (Multiplayer)); I suggest a new strategy (Use a partner's Star Card hand 10 times (Multiplayer)); Shoot first (Be the first in a match to earn a kill (Multiplayer)); Great shot, kid! (Kill an enemy who is using a Jump Pack (Multiplayer)); A cunning warrior (Reach level 3 once with any Trait (Multiplayer)); Don't underestimate the Force (Earn a total of 100 kills while playing as a hero (Multiplayer)); Crush them with one swift stroke… (Trample 25 soldiers with an AT-ST (Multiplayer)); That got him! (Use a tow cable to destroy an enemy AT-AT in Walker Assault); Hold the line! (Kill 10 enemies while attacking or defending a control point in Supremacy); Stay on target (Kill 10 enemies in a match of Fighter Squadron); What's the cargo? (Kill 10 enemies carrying the cargo in Cargo); Playing the objective (Have the most kills in a match of Blast); The Force is strong with this one (Earn 10 kills in a match as any hero on Hero Hunt); I've been waiting for you (Kill 10 enemies trying to claim your team's pod in Drop Zone); \"Gonk? Gonk!\" (Capture three droids in a match of Droid Run); The power of the Force (Defeat a hero while playing as any hero on Heroes vs Villains)."
            ]
        },
        {
            "heading": "Progression, Collectibles & Missions",
            "body": [
                "Rank 50, diorama figurines, 25,000 credits, 100 Accomplishments, 25 Challenges, the space bosses, all heroes, the single-player and co-op Missions, Survival and Battle modes, Master difficulty runs, collectible Stars, training stars and the Tutorial.",
                "The achievements here: When 900 years old you reach... (Reach Rank 50); Collector (Earn any diorama figurine in the game); Tell Jabba that I've got his money (Earn a total of 25 000 credits (Multiplayer)); Distinguished (Earn 100 Accomplishments); Determined (Complete 25 Challenges); Don't get cocky (Defeat both the Millennium Falcon and Slave I); A tremor in the Force (Play once as all the different heroes in the original game (Multiplayer)); Together we can rule the galaxy (Complete any mission with a friend); Your journey has only started (Complete all missions in the original game); Master (Complete all missions on master difficulty in the original game); On the ball (Complete any Survival mission on Master difficulty within 35 minutes); Precision shot (Get 10 headshots with the Cycler Rifle (Multiplayer)); Scrap collector (Earn any collectible Star); All right, I'll give it a try (Earn a star on all training missions); Safety ain't the point of a joyride (Take no damage in the Endor Chase mission); Best star-pilot in the galaxy (Destroy 10 TIE fighters within 2 minutes on the Beggar's Canyon mission); New Recruit (Complete any mission); Impressive. Most impressive. (Earn a total of 5 stars from Battle missions in the original game); Off to a good start (Win any Battle mission on Normal difficulty against the AI); Survivor (Earn a total of 5 stars from Survival missions in the original game); Ackbar's Elite (Complete any Survival mission on Master difficulty without spending a life); Do... or do not. There is no try (Complete the Tutorial)."
            ]
        },
        {
            "heading": "Rank Milestones & Expansions",
            "body": [
                "Rank 25 and Rank 100, the Ewok rock gag, and the four expansions - Outer Rim, Bespin, Death Star and Rogue One: Scarif - with their weapon-kill feats, \"win 10 rounds\" mode goals and \"play all the new maps\" achievements.",
                "The achievements here: Judge me by my size, do you? (Reach Rank 25); Not bad for a little furball (Get hit in the head by a rock from an Ewok on Endor); Walker defender (Destroy a Y-wing in Walker Assault); A good blaster at your side (Get 150 kills in successful matches of Survival); This is a new day, a new beginning (Play all the new maps in the Outer Rim (Multiplayer)); Patience you must have (Complete 10 daily challenges); Greed can be a very powerful ally (Win 10 rounds of Extraction); No such thing as luck (Get 10 kills with Rebly-V10, DL-18, Scatter Gun and the Dioxis Grenade (Multiplayer)); Do we take prisoners? (Stun 20 enemies with the Shock Grenade (Multiplayer)); City in the Clouds (Play all the new maps in Bespin (Multiplayer)); You have your moments (Get 5000 Objective Score while playing as any Hero (Multiplayer)); When surrounded by war... (Win 10 rounds of Sabotage); I’ll take that bet (Get 20 kills with the X-8 Night Sniper and the EE-4. (Multiplayer)); That's no moon (Play all new maps on and around the Death Star); Stop that Droid (Restrain R2-D2); Support the troops (Heal 100 teammates); Stay in attack formation (Win 10 Rounds of Battle Station); Alternative solution (Get 20 kills with secondary fire using the Bryar Pistol K-16 or Heavy Repeater TL-50); Onwards! (Get 30 kills with the DT-29); What will you become? (Get 20 kills with the A180 and the Sonic Imploder); The circle is now complete (Get to Rank 100); I never doubted you! (Win 10 Rounds of Infiltration); Disturbed tranquility (Play all new maps from Rogue One: Scarif DLC)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the Tutorial and training missions, then the single-player and co-op Missions, Survival and Battle modes, pushing the Master-difficulty runs while you are there.",
                "2. Move to multiplayer and work through the \"play every mode\" and \"win every mode\" pairs, ticking the per-mode feats as modes come up.",
                "3. Let the cumulative achievements (credits, Accomplishments, Challenges, hero kills, healing) build across normal play.",
                "4. Grind rank to 25, then 50, then 100 - the slowest single achievement in the game.",
                "5. For each expansion, jump into its map-specific playlists to play all the new maps and knock out its weapon and \"win 10 rounds\" achievements.",
                "Tip: Fighter Squadron and Survival are efficient for cumulative kills, and the Rogue One: Scarif and Death Star modes make the \"5000 Objective Score as a Hero\" and expansion round-win goals fastest."
            ]
        }
    ]
};

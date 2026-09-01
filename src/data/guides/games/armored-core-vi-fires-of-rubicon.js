// Armored Core VI Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/armored-core-vi-fires-of-rubicon.json), whose 30 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1888160 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 26 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (PowerPyx / Game8 / PlayStationTrophies / TrueAchievements) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "armored-core-vi-fires-of-rubicon-achievement-guide",
    "category": "game",
    "gameSlug": "armored-core-vi-fires-of-rubicon",
    "icon": "🤖",
    "title": "Armored Core VI Achievement Guide",
    "summary": "A practical guide to all 30 Steam achievements in Armored Core VI (26 hidden). Covers the story's mission-completion markers across three playthroughs, the three mutually exclusive endings, all Arena programs, every part and log collectible, and the OS tuning and S-rank grinds. Twenty-six of the achievements are hidden - the mission and ending markers plus the collector and completion trophies - and their unlock conditions are researched from community 100% guides.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Armored Core VI has 30 Steam achievements and 26 are hidden. Eleven are mission-completion markers that chart story progress (Illegal Entry, Operation Wallclimber, Attack the Watchpoint, Ocean Crossing, Attack the Old Spaceport, Destroy the Ice Worm, Underground Exploration - Depths 3, Reach the Coral Convergence, Take the Uninhabited Floating City, and the NG++-only MIA). Three are the mutually exclusive endings - Alea Iacta Est (route 1), The Fires of Raven (route 2), Liberator of Rubicon (route 3). The rest are completion and collector trophies: all missions, all missions S-ranked, all Arena programs, every weapon/frame/inner part/Core Expansion, all combat and data logs, all OS tuning, and all training.",
                "The catalog marks it difficulty 4. Full completion needs three playthroughs (the story branches, and some missions and Arena opponents only appear in NG+ or NG++), plus a dedicated S-rank pass on every mission via replay and enough OST Chips (from Arena) to buy every OS upgrade. 'The Perfect Mercenary' (all missions S-rank) is the real wall.",
                "Tip: don't chase S-ranks on your first pass - play the story for the branches and endings, unlock all missions and Arena opponents across three runs, then use Mission Replay with a tuned build to S-rank everything at once (S-rank is based on time, damage taken and ammo/repair spend)."
            ]
        },
        {
            "heading": "Missions, Endings & Playthroughs",
            "body": [
                "The mission-completion markers through Chapters 1-5 and the NG++-only MIA, the three mutually exclusive endings (Alea Iacta Est, The Fires of Raven, Liberator of Rubicon), clearing all missions, all missions at S rank, all Arena programs, and the first-playthrough Arena aptitude evaluations.",
                "The achievements here: Armored Core (Unlocked all achievements.); The Perfect Mercenary (Clear all missions with an S Rank rating (via Mission Replay after the story).); Stargazer (Clear all missions (requires three playthroughs to access every mission).); Master of Arena (Clear all Arena programs (across the base game, New Game+ and New Game++).); Asset Holder (Obtain all parts (unlocks after the weapon, external, internal and expansion collector achievements).); Tuning Expert (Perform all OS Tuning upgrades (needs enough OST Chips from Arena).); The Fires of Raven (Reach the ending 'The Fires of Raven' (route 2 - one of three mutually exclusive endings).); Liberator of Rubicon (Reach the ending 'Liberator of Rubicon' (route 3 - one of three mutually exclusive endings).); Alea Iacta Est (Reach the ending 'Alea Iacta Est' (route 1 - one of three mutually exclusive endings).); Weapon Collector (Obtain all weapon parts (every R-Arm, L-Arm, R-Back and L-Back unit).); External Parts Collector (Obtain all frame parts (every Head, Core, Arms and Legs).); Internal Parts Collector (Obtain all inner parts (every Booster, FCS and Generator).); Expansion Collector (Obtain all four Core Expansions (bought with OST Chips in OS Tuning).); Combat Log Collector (Obtain all combat logs (dropped by specific enemy ACs during missions).); Data Log Collector (Obtain ten data logs (collected during missions).); Testing Complete (Clear all combat aptitude evaluation programs in the Arena (in your first playthrough).); Illegal Entry (Clear the mission 'Illegal Entry' (the first mission).)."
            ]
        },
        {
            "heading": "Collectibles, Tuning & Customization",
            "body": [
                "Obtaining all weapon parts, frame parts, inner parts and Core Expansions, all combat logs and ten data logs, every OS tuning upgrade, all training programs, and the assembly, OS-upgrade and coloration customization achievements.",
                "The achievements here: Operation Wallclimber (Clear the mission 'Operation Wallclimber' (Chapter 1).); Contact (Clear the mission 'Attack the Watchpoint' (the final Chapter 1 mission).); Ocean Crossing (Clear the mission 'Ocean Crossing' (the final Chapter 2 mission).); A New Threat (Clear the mission 'Attack the Old Spaceport' (Chapter 3).); Ayre and the Coral (Clear the mission 'Destroy the Ice Worm' (the final Chapter 3 mission).); Into Unknown Territory (Clear the mission 'Underground Exploration - Depths 3' (Chapter 4).); Re-education (Clear the mission 'Reach the Coral Convergence' (the final Chapter 4 mission).); The Floating City (Clear the mission 'Take the Uninhabited Floating City' (Chapter 5).); MIA (Clear the mission 'MIA' (New Game++ only).); Training Complete (Clear all training programs (from the Sortie menu).); Hardware Engineer (Assembled an AC.); Software Engineer (Upgraded your AC's OS.); Graphic Designer (Changed the coloration of your AC.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the story straight through for your first ending (Alea Iacta Est or The Fires of Raven, depending on a Chapter 5 choice), clearing Arena programs as they unlock.",
                "2. Play New Game+ for the second ending and the missions and Arena opponents that only appear there.",
                "3. Play New Game++ for the third ending and the exclusive 'MIA' mission chain.",
                "4. Collect every part, combat log and data log, and buy all four Core Expansions and every OS Tuning upgrade with Arena OST Chips.",
                "5. Use Mission Replay with a strong build to S-rank every mission for 'The Perfect Mercenary'.",
                "Tip: keep a save right before the Chapter 5 branching choice ('Reach the Coral Convergence' vs 'Take the Uninhabited Floating City') so you can grab both routes' endings without a full extra playthrough."
            ]
        }
    ]
};

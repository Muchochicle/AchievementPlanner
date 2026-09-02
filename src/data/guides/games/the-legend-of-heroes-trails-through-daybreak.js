// The Legend of Heroes: Trails through Daybreak Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/the-legend-of-heroes-trails-through-daybreak.json), whose 53 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   2138610 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 13 achievement(s) are Steam-hidden or ship no Steam
//   description; their description here is researched from community
//   100% guides and is a curatorial summary. Every other description is
//   Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "the-legend-of-heroes-trails-through-daybreak-achievement-guide",
    "category": "game",
    "gameSlug": "the-legend-of-heroes-trails-through-daybreak",
    "icon": "⚖️",
    "title": "The Legend of Heroes: Trails through Daybreak Achievement Guide",
    "summary": "A practical guide to all 53 Steam achievements in The Legend of Heroes: Trails through Daybreak (13 hidden). All 13 hidden achievements are spoiler-free story markers - the prologue, chapters, the Chapter 4 Intermission, the finale, and the four branching Chapter 5 routes. Everything else - the Arkride Solutions rank, alignment and Connection levels, the notebook and collectible sweeps, and the combat challenges - carries Steam's own text.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "The Legend of Heroes: Trails through Daybreak has 53 Steam achievements, 13 of them hidden. Van Arkride, a Spriggan (an underground fixer) in the Republic of Calvard, takes a job that spirals into a national conspiracy. The visible achievements cover raising Arkride Solutions to AAA rank, hitting Law / Gray / Chaos alignment levels, maxing Connection Stages, filling the notebook's battle and book sections, the gourmet and treasure-chest counters, the holo core and orbment systems, the Virtual Combat Simulator, the Nightmare-difficulty clear, and the combat challenges.",
                "All 13 hidden achievements are spoiler-free story markers: starting the game, the Prologue, Chapters 1 through 6, the Chapter 4 Intermission, and the four branching Chapter 5 routes (Van chooses a path based on alignment, so seeing all four needs replays or branched saves).",
                "The catalog marks it difficulty 3 and two playthroughs - the four Chapter 5 branches and the Nightmare clear both push toward a second run."
            ]
        },
        {
            "heading": "Story Chapters",
            "body": [
                "All 13 hidden story markers: the start, Prologue, Chapters 1-6, the Chapter 4 Intermission, and the four branching Chapter 5 routes - described spoiler-free.",
                "The achievements here: Taking Up the Gauntlet (Cleared one of the branching Chapter 5 routes (the Law-aligned path), described here spoiler-free.); My Way or the Heiyue (Cleared one of the branching Chapter 5 routes (the Heiyue path), described here spoiler-free.); The Silver Lining (Cleared one of the branching Chapter 5 routes, described here spoiler-free.); Partners in Crime (Cleared one of the branching Chapter 5 routes, described here spoiler-free.); Let's Go, Spriggan! (Started the game.); Spriggan of the Slums (Completed the Prologue: Spriggan of the Slums.); The Young Flame Departs (Completed Chapter 1: The Young Flame Departs.); Bright Star of the Dazzling City (Completed Chapter 2: Bright Star of the Dazzling City.); Pleasure in Delirium (Completed Chapter 3: Pleasure in Delirium.); Disaster Protocol (Completed Chapter 4: Disaster Protocol.); A Mysterious Tale in Longlai (Completed the Chapter 4 Intermission: A Mysterious Tale in Longlai.); The Restless Carnival (Completed Chapter 5: The Restless Carnival.); For you, Upon Your Return (Completed Chapter 6: For you, Upon Your Return - the finale, described here spoiler-free.)."
            ]
        },
        {
            "heading": "Arkride Solutions & Alignment",
            "body": [
                "The platinum, the all-achievements catch-all, the AAA agency rank, clearing every quest, and the Law / Gray / Chaos alignment levels.",
                "The achievements here: The Legend of Heroes (Acquired all achievements.); Working Overtime (Unlocked all in-game achievements. (Other than EX)); AAA-rkride Solutions (Raised the Arkride Solutions rank to AAA.); Time For Sweets (Completed all quests.); Law-Abiding Spriggan (Reached Law alignment level 3 or above.); Morally Gray (Reached Gray alignment level 3 or above.); Chaos Bringer (Reached Chaos alignment level 3 or above.); Enlightened Centrist (Reached Law, Gray, and Chaos alignment level 5.); Unrivaled Connection (Raised a Connection Stage to its maximum level.); Unbreakable Bonds (Raised all Connection Stages to their maximum level.)."
            ]
        },
        {
            "heading": "Collectibles & Systems",
            "body": [
                "The notebook sections, gourmet rank, treasure chests, holo cores, Arts Drivers and orbment slots, 4SPG timing, S-rank chapters, gifts, Topics, Onyx Steel weapons, the spa tour, and the cinema.",
                "The achievements here: Carving a New Trail (Completely filled the battle section in the notebook.); Fervent Bibliophile (Completely filled the books section in the notebook.); Gourmaniac (Raised the gourmet rank to its maximum level.); Chestiny (Opened 150 treasure chests.); Aftermarket Modder (Changed holo core for the first time.); Holostar (Acquired all holo cores.); Arts Virtuoso (Set an Arts Plugin to any Arts Driver.); Master Driver (Acquired all Arts Drivers.); Master of Orbments (Opened all orbment slots for the entire party.); Time Lord (Completed all 4SPGs that could be done with specific timing, acquiring additional Free Time.); Hotshot Spriggan (Achieved an S-rank on any chapter except the Prologue.); Vanta Claus (Gave over 20 gift items.); Chatterbox (Used over 15 Topics.); Unlimited Power (Created an Onyx Steel weapon.); HOLO 9000 (Raised a holo core to its maximum level.); Solitary Spa Fanatic (Entered the sauna in Edith every chapter, entered the Hamam in Tharbad, and entered the hot springs in Longlai outside of events.); Unmatched Cinephile (Watched all movies.)."
            ]
        },
        {
            "heading": "Combat & Challenges",
            "body": [
                "The Virtual Combat Simulator, the SCLM / S-Boost / Chain Hit / S-Craft counters, tactical-bonus and shard-strike feats, total damage, the kill counts, and the Nightmare clear.",
                "The achievements here: Virtually Victorious (Cleared the Beta version of the Virtual Combat Simulator once.); Virtual Vanguard (Cleared the entire Beta version of the Virtual Combat Simulator.); SCLM Addict (Used SCLM Chain and SCLM Support a combined total of 200 times.); The Fast and the S-Boosted (Made over 100 moves while in S-Boost mode.); Chain Smoker (Activated Chain Hit over 100 times.); S-Crutch (Used 50 S-Crafts in battle.); W-W-Wombo Combo (Won a battle with a tactical bonus of x4.0 or higher.); Caught 'Em Off Shard (Activated a preemptive shard strike 150 times.); Van the Stampede (Did a total of 10,000 damage or more.); Rookie Warrior (Defeated 300 enemies or more in Field Battle.); Talented Spriggan (Defeated 500 or more enemies in Command Battle or Field Battle.); Legendary Champion (Defeated 1,000 or more enemies in Command Battle or Field Battle.); Bear the Nightmare (Completed the game on nightmare difficulty.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the story; the chapter markers unlock automatically, and your alignment choices decide which Chapter 5 branch you see.",
                "2. Keep Arkride Solutions rank and quest completion high each chapter - aim for S-rank where you can - and build Connection Stages through 4SPG free time.",
                "3. Fill the notebook (battle and book sections), gourmet rank, treasure chests, holo cores and orbment slots as you go.",
                "4. Clear the Virtual Combat Simulator Beta fully and let the combat counters (SCLM, S-Boost, Chain Hit, S-Craft, kills) accumulate.",
                "5. Do a Nightmare run, branching saves at Chapter 5 to collect the other three route achievements, then finish the all-achievements catch-all and platinum.",
                "Tip: decide your alignment target before Chapter 5 - Van's route there is gated by whichever of Law / Gray / Chaos you've leaned into, so play choices consistently on run one and deliberately swing the opposite way on run two to knock out multiple branch achievements per playthrough."
            ]
        }
    ]
};

// Thief Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/thief.json), whose 37 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   239160 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "thief-achievement-guide",
    "category": "game",
    "gameSlug": "thief",
    "icon": "🗝️",
    "title": "Thief Achievement Guide",
    "summary": "A practical guide to all 37 Steam achievements in Thief - none are hidden. Covers the thieving-skill feats, the stealth, collectibles and City-job achievements, and the story-chapter progression. None of the achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Thief (2014) has 37 Steam achievements and none are hidden. Thirteen are thieving feats (100 pockets in a playthrough, all loot and collectibles in one chapter, a 700-point custom difficulty finish, 25 optional Thieving Objectives, three chapters in a row without damage, a no-kill / no-knockout run, a Master-difficulty finish, a 5,000,000 Challenge Map score), thirteen are stealth, collectibles and City content (a chapter with no alerts, all secret areas, all collectible sets, all client and Basso jobs), and eleven are story progression - the Prologue, Chapters One through Eight, and 'Predatory Drive' for taking 15+ hours.",
                "The catalog marks it difficulty 4 and about two runs. The story is straightforward; the pointed achievements are 'A Moral Victory' (no kills or knockouts), 'Child of the Shadows' (a chapter with zero alerts), 'Hard Times' (Master) and 'Clear Headed' (no Focus ability all game).",
                "Tip: play the story on a normal difficulty for the chapter achievements and most feats, then use chapter select and a Master/no-Focus run for the restriction achievements."
            ]
        },
        {
            "heading": "Thieving Feats",
            "body": [
                "All loot and collectibles in one chapter, 100 pockets in a playthrough, a fast lockpick, a 700-point custom-difficulty finish, 10 and 25 optional Thieving Objectives, three consecutive chapters without damage, a focus-ability pick, a no-kill/no-knockout run, 10 traps disarmed, reaching the final chapter without Focus, a Master-difficulty finish, and a 5,000,000 Challenge Map score.",
                "The achievements here: Obsessive Compulsive  (Stole all loot and collectibles in a single chapter. ); Sleight of Hand  (Picked 100 pockets in a single playthrough ); Quickly Pick a Lucky Lock  (Picked a lock with masterful speed ); Something to Prove  (Finished the game with a custom difficulty of 700 points or more ); Dark Archer  (Completed 10 optional Thieving Objectives ); Legend in Leather  (Completed 25 optional Thieving Objectives ); Mint Condition  (Finished 3 consecutive chapters without taking damage ); Focus on the Tasks at Hand  (Picked a pocket and a lock using the focus ability ); A Moral Victory  (Finished the game without a single kill or knockout ); One Step Ahead  (Disarmed ten trap mechanisms ); Clear Headed  (Reached the final chapter without using the focus ability ); Hard Times  (Finished the game on Master difficulty ); Modesty Denied  (Scored an epic 5,000,000 or more in a Challenge Map )."
            ]
        },
        {
            "heading": "Stealth, Collectibles & The City",
            "body": [
                "A chapter with no alerts, a mid-air bottle shot, 10 environmental takedowns, completing one and all collectible sets, 'Happy Birthday', 15 and all secret areas, spending 40,000 gold, all client jobs and all Basso jobs, stealing 5 collectibles, and finding all of Moira's secret stashes.",
                "The achievements here: Child of the Shadows   (Finished a single chapter without alerting anyone ); Hail of Glass  (Shot a bottle in mid-air with an arrow ); Health Hazard  (Killed or knocked out 10 people using the environment ); Priceless  (Completed a collectible set ); What's Yours is Mine  (Completed all collectible sets ); Happy Birthday  (Sweet sixteen. Snuff said. ); Hidden Agenda  (Discovered 15 secret areas ); Finders Keepers  (Discovered all secret areas ); Cache Dispenser  (Used 40,000 gold ); Working Overtime  (Completed all client jobs in The City ); Dastardly Deeds  (Completed all Basso Jobs in The City ); All That Glitters  (Stole 5 collectibles ); Old Habits Die Hard  (Found all the secret stashes in Moira )."
            ]
        },
        {
            "heading": "Story Progression",
            "body": [
                "Uncovering Lyegrove's secret, finishing the Prologue and Chapters One through Eight, and 'Predatory Drive' for taking 15 hours or more to finish the game.",
                "The achievements here: Two Faced  (Uncovered Lyegrove's secret ); The Drop  (Finished the Prologue ); Lockdown  (Finished Chapter One ); Dust to Dust  (Finished Chapter Two ); Dirty Secrets  (Finished Chapter Three ); A Friend in Need  (Finished Chapter Four ); The Forsaken  (Finished Chapter Five ); A Man Apart  (Finished Chapter Six ); The Hidden City  (Finished Chapter Seven ); The Dawn's Light  (Finished Chapter Eight ); Predatory Drive  (Finished the game in 15 hours or more )."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the story on a normal difficulty, doing optional Thieving Objectives and grabbing secret areas and collectibles as you go.",
                "2. Do the City content between missions: all client jobs, all Basso jobs, secret stashes.",
                "3. Use chapter select for the focused achievements: all loot in one chapter, a no-alert chapter, three chapters without damage.",
                "4. Do a Master-difficulty, no-Focus, no-kill/no-knockout run for those three achievements together.",
                "5. Grind a Challenge Map for the 5,000,000 score.",
                "Tip: 'A Moral Victory' (no kills or knockouts) and 'Child of the Shadows' (no alerts) both reward pure ghosting - learn the patrol routes on an earlier casual run so the restriction run is just execution."
            ]
        }
    ]
};

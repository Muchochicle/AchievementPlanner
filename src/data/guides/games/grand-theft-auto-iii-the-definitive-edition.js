// Grand Theft Auto III - The Definitive Edition Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/grand-theft-auto-iii-the-definitive-edition.json), whose 29 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1546970 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 4 achievement(s) are Steam-hidden or ship no Steam
//   description; their description here is researched from community
//   100% guides and is a curatorial summary. Every other description is
//   Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "grand-theft-auto-iii-the-definitive-edition-achievement-guide",
    "category": "game",
    "gameSlug": "grand-theft-auto-iii-the-definitive-edition",
    "icon": "🚗",
    "title": "Grand Theft Auto III - The Definitive Edition Achievement Guide",
    "summary": "A practical guide to all 29 Steam achievements in Grand Theft Auto III - The Definitive Edition (4 hidden). The 4 hidden achievements are optional in-mission secret objectives (a scratch-free car delivery, keeping both Mafia members alive, a bomb-car kill, a full Coach pickup). Sourced from PowerPyx and XboxAchievements.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Grand Theft Auto III - The Definitive Edition has 29 Steam achievements, 4 of them hidden. The remaster of the 2001 open-world classic set in Liberty City. The visible achievements are a mix of named story-mission completions (Last Requests, A Drop in the Ocean, The Exchange, Kingdom Come), side-activity milestones (Taxi, Paramedic, Firefighter, Vigilante, RC Toyz), driving stunts and unique jumps, and the collectible and completion grind (100 hidden packages, 100% completion).",
                "The 4 hidden achievements are all optional secret objectives inside story missions: delivering Mike Lips' car without a scratch on your first try, keeping both Mafia members alive in 'Triads and Tribulations', killing Chunky Lee Chong with a bomb car, and using a Coach to pick up all 8 girls in 'The Fuzz Ball'.",
                "The catalog marks it difficulty 3, missable:true and single-playthrough. The four hidden objectives and 'By a Mile' (a sub-180-second Turismo race) are each tied to one mission and are the reason a mission-by-mission checklist is worth keeping."
            ]
        },
        {
            "heading": "Story Missions & Secret Objectives",
            "body": [
                "The first mission, the named late-game story missions (Last Requests, A Drop in the Ocean, The Exchange, Kingdom Come), and the four Steam-hidden optional in-mission objectives.",
                "The achievements here: First Day on the Job (Complete \"Luigi's Girls\"); Without a Scratch (Deliver Mike Lips' car without a scratch on your first attempt (mission 'Mike Lips Last Lunch')); Mob Boss (Keep both Mafia members alive during the mission 'Triads and Tribulations'); Planned Ahead (Kill Chunky Lee Chong using a car rigged with a bomb); Got This Figured Out (Use a Coach to pick up all 8 girls in the mission 'The Fuzz Ball'); A Marked Man (Complete \"Last Requests\"); Offshore Delivery (Complete \"A Drop in the Ocean\"); Not So Fast (Complete \"The Exchange\"); A Gift from the King (Complete the \"Kingdom Come\" mission)."
            ]
        },
        {
            "heading": "Side Activities & Vehicles",
            "body": [
                "Police bribes and the junkyard crusher, gang-member kills, the Turismo race, insane stunts and unique jumps, Taxi, RC Toyz, Firefighter, Paramedic and Vigilante missions.",
                "The achievements here: Escape Artist (Use 20 police bribes); Disposing of the Evidence (Crush a car at the junkyard); Street Sweeper (Waste 100 gang members); By a Mile (Complete the \"Turismo\" race in under 180 seconds); Wreckless Driving (Perform a perfect insane stunt); Wheels Up (Complete 20 unique jumps); Come Out to Play-y-y-y (Kill 25 gang members with melee weapons / fists); Where To? (Complete 100 taxi fares); Man Toyz (Complete every RC Toyz mission); Splish Splash (Extinguish 15 fires during a single Fire Truck mission); Playing Doctor (Complete Paramedic level 12); Going Rogue (Kill 15 criminals during one Vigilante mission); Furious First Responder (Complete Paramedic, Firefighter, Vigilante)."
            ]
        },
        {
            "heading": "Progression, Collectibles & Completion",
            "body": [
                "The low-health survival stunt, using every weapon, a million-dollar fortune, the 2,500 criminal rating, 100 hidden packages, 100% completion, and the platinum-equivalent catch-all.",
                "The achievements here: Liberty City Minute (Survive with less than 10 hp for 1 minute); Full Artillery (Use every weapon in the game at least once); Dirty Money (Amass a fortune of $1,000,000); Right-hand Man (Earn a criminal rating of 2,500); Liberty City Secrets (Collect 100 hidden packages); Is That All You've Got? (Achieve 100% completion); King of Liberty City (Unlock all achievements)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the story with a checklist open - the four hidden objectives and By a Mile each happen in one specific mission and cannot be replayed for the achievement afterward.",
                "2. Between story missions, chip away at the side jobs: Taxi fares, Paramedic to level 12, Firefighter, Vigilante, and the RC Toyz missions.",
                "3. Do the driving feats (an insane stunt, 20 unique jumps, the Turismo race) and the low-health survival challenge.",
                "4. Collect all 100 hidden packages with a map and build your criminal rating and fortune.",
                "5. Finish any remaining strands for 100% completion and the Is That All You've Got? achievement.",
                "Tip: keep a spare, undamaged vehicle handy before starting 'Mike Lips Last Lunch' - Without a Scratch only counts on your first attempt, so bump-free driving from the very first try is essential."
            ]
        }
    ]
};

// Ori and the Blind Forest's Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/ori-and-the-blind-forest.json), whose 50
//   achievements were sourced directly from Steam's own achievement schema
//   for appid 261570 via ISteamUserStats/GetSchemaForGame (fetched through
//   this app's own backend/services/steamApi.js) - every quoted
//   description below is that official Steam text; all 50 achievements
//   ship a real, non-hidden Steam description, so nothing here is a
//   curatorial guess.
// - The grouping below (story vs. Ability Tree vs. exploration/collectible
//   vs. combat-trick vs. challenge-run) is read directly from what each
//   achievement's own official description actually requires (e.g.
//   "Earn all Efficiency Skills in the Ability Tree" is unambiguously an
//   Ability Tree achievement; "Kill 4 enemies simultaneously using Charge
//   Flame" is unambiguously a combat trick), not guessed or invented.
// - The catalog's game-level missable:false reflects Ori's own
//   interconnected, backtrack-anywhere map (a metroidvania, not a
//   level-select game, but every ability that opens a previously
//   unreachable area stays usable for the rest of the game) - nothing is
//   permanently locked out by moving forward, which is why most of the
//   collectible/skill/combat achievements are still flagged missable:true
//   individually: they need deliberate extra effort beyond just finishing
//   the story, but that effort is never permanently foreclosed.
export const GUIDE = {

    slug: "ori-and-the-blind-forest-achievement-guide",
    category: "game",
    gameSlug: "ori-and-the-blind-forest",
    icon: "🌲",
    title: "Ori and the Blind Forest Achievement Guide",
    summary: "A practical guide to all 50 Steam achievements in Ori and the Blind Forest - the story, the Ability Tree, exploration and collectibles, combat tricks, and its three demanding challenge runs.",

    relatedSlugs: ["achievement-completion-and-tracking", "understanding-achievement-availability"],

    sections: [

        {
            heading: "Overview",
            body: [
                "Ori and the Blind Forest has 50 Steam achievements. Nothing is permanently missable: it's a fully interconnected metroidvania map, not a level-select game, but every area you can reach stays reachable for the rest of the game once you have the ability that opens it - there's no point where progressing forward locks a past area away for good.",
                "The list breaks into five real groups: 15 story-progress achievements that happen automatically, 6 tied to the Ability Tree, 12 tied to exploration and collectibles, 14 tied to specific combat tricks, and 3 genuinely difficult full-game challenge runs saved for last."
            ]
        },

        {
            heading: "Story Progress (Automatic)",
            body: [
                "The Journey Begins, The Ancient Being, Get Back Here!, Let's be Friends, Rotten Inside, Run for Your Life, Close Call, Obtaining Clarity, Solid Ground, Fight to Live Another Day, Top of the world, Into the Fire, Rekindle, Love, and The Journey Ends trace the entire main story beat-by-beat, from the Prologue through Mt. Horu to the ending - all 15 unlock automatically just by reaching that point in a normal playthrough.",
                "Life Saver (\"Create 50 Soul Links\") also belongs here in practice: Soul Links are Ori's manual-save mechanic, used constantly throughout normal play, so 50 accumulates naturally over the course of the story without any deliberate effort."
            ]
        },

        {
            heading: "The Ability Tree",
            body: [
                "Choices Choices (\"Use your first ability point\") fires the moment you spend your very first point - unmissable, since the game teaches this mechanic early.",
                "The Ability Tree has three branches, each with its own mastery achievement: Soul Master (all Efficiency Skills), Utility Master (all Utility Skills), and Combat Master (all Combat Skills), capped by Phenom for earning every skill in all three branches.",
                "Tip: Ability Points are earned by exploring for Energy Cells and clearing certain story sections, so completing all three branches realistically means committing to full exploration rather than a straight, story-only run."
            ]
        },

        {
            heading: "Exploration & Collectibles",
            body: [
                "A large secret-hunting group: So Many Secrets (first secret) through No Stone Unturned (all secrets, with Seasoned Explorer at the 50% mark), and the parallel Map Stone set - Marking the way, Halfway There, and World at Your Feet - for restoring Map Stones that reveal more of the map.",
                "Good Eye (\"Find the lost corridor in the Misty Woods\") is one specific, well-known hidden passage rather than a general collectible, and Safe and Sound (\"Save at every Spirit Portal\") and Master of the Forest (\"Visit 100% of the map\") both reward genuinely thorough exploration rather than following the critical path.",
                "Powerhouse and Master Guardian (all Energy Cells / all Health Cells) and Power Player (200 Energy Shards) round out the collectible group - Energy Cells and Health Cells both expand your resource pools and are needed for the Ability Tree achievements above anyway, so hunting them serves double duty.",
                "Tip: a completionist run naturally earns most of this group on the way to No Stone Unturned and World at Your Feet - there's little reason to chase these in a separate, dedicated pass from the secrets/map-stone hunt."
            ]
        },

        {
            heading: "Combat Tricks",
            body: [
                "14 achievements reward specific combat techniques rather than just surviving encounters: Deadly Detonation (4 enemies at once with Charge Flame), Deadly Deflection (25 kills reflecting projectiles with Bash), A New Path (5 shortcuts broken with Charge Flame), Deadly Dash (5 kills with Charge Jump), Juggle Master (juggle a rock 5 times), Bash Master (10 airborne Bash kills in a row), Deadly Dodge (trick 5 enemies into killing another), Flying Fury (3 kills without touching ground), Self Destruction (trick an enemy into destroying itself), Crushing Blow (crush a Ram with a Stomper), Stomp Master (50 Stomp kills), Blast Master (100 Charge Flame kills), Flame Master (500 Spirit Flame kills), and Airborne (5 consecutive double jumps without touching ground).",
                "Most of these need a specific ability unlocked first (Charge Flame, Bash, Charge Jump, Stomp, double jump) before they're even attempts-able, so they naturally spread out across a playthrough as you unlock each tool rather than being chaseable all at once from the start.",
                "Tip: Stomp Master, Blast Master, and Flame Master are cumulative kill counts (50/100/500), not single-encounter tricks - they'll complete themselves over a normal full playthrough that leans on those specific abilities in combat, no dedicated farming needed for most players."
            ]
        },

        {
            heading: "Challenge Runs (Hardest)",
            body: [
                "Three achievements are dedicated, difficult full-game challenge runs, realistically attempted only after finishing the story normally at least once: Supersonic (finish the entire game in under 3 hours), Immortal (complete the whole game without dying once), and Elite (complete the whole game without using a single Ability Point).",
                "Each demands a genuinely different kind of mastery - Supersonic wants an optimized, memorized route; Immortal wants near-flawless platforming and pattern knowledge through every hazard; Elite means deliberately skipping the entire Ability Tree, including abilities the game expects you to have by its later sections.",
                "Tip: these three don't combine well with each other or with the exploration/collectible achievements above - treat each as its own separate, dedicated run once you already know the game well from a normal completionist playthrough."
            ]
        },

        {
            heading: "Suggested Order",
            body: [
                "Play through the story normally, exploring reasonably thoroughly - this alone earns every story achievement, Life Saver, Choices Choices, and a good chunk of the combat-trick and collectible groups without any extra effort.",
                "Do a dedicated completionist pass afterward for whatever's left in the Ability Tree, secrets, and Map Stone groups - by this point you'll know the map well enough that a guide-assisted cleanup pass is quick.",
                "Save the three challenge runs (Supersonic, Immortal, Elite) for last, each as its own separate, focused attempt once the game's layout and mechanics are second nature."
            ]
        }

    ]

};

// Transistor's Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/transistor.json), whose 33 achievements
//   were sourced directly from Steam's own achievement schema for appid
//   237930 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js) - 28 of 33 ship a real,
//   official Steam description, quoted directly below.
// - Reisz(), Spine(), Kendrell(), Bracket(), and Self() are hidden
//   achievements Steam never describes publicly (confirmed via the same
//   API call) - their descriptions here are curatorial, cross-checked
//   against independent community documentation of their real unlock
//   conditions (each one a specific story boss confrontation, except
//   Self(), a gameplay-mechanic achievement for upgrading a Function
//   with a copy of itself).
// - The grouping below (story vs. the Sandbox Tests vs. unlocking
//   everything vs. dedicated combat challenges) is read directly from
//   what each achievement's own official description requires, not
//   invented.
export const GUIDE = {

    slug: "transistor-achievement-guide",
    category: "game",
    gameSlug: "transistor",
    icon: "⚔️",
    title: "Transistor Achievement Guide",
    summary: "A practical guide to all 33 Steam achievements in Transistor - the story's boss confrontations, the Sandbox Tests, unlocking every Function and Limiter, and the game's toughest combat challenges.",

    relatedSlugs: ["achievement-completion-and-tracking", "understanding-achievement-availability"],

    sections: [

        {
            heading: "Overview",
            body: [
                "Transistor has 33 Steam achievements. The story itself is fairly short and mostly linear, but a real 100% run realistically needs a second playthrough through New Game Plus (called Recursion in-story) to comfortably reach the higher User Level and MEM-unlock achievements, since those scale with total experience earned across both runs.",
                "Nothing here is missable in the permanent sense - Transistor has no point of no return that locks content away forever, so anything skipped on a first pass can always be picked up on Recursion."
            ]
        },

        {
            heading: "Story & Boss Confrontations",
            body: [
                "Drive() unlocks early just for reaching the Goldwalk District - the game's opening beat.",
                "Reisz(), Spine(), Kendrell(), and Bracket() are each unlocked automatically at a specific story boss confrontation: defeating Sybil at the Empty Set, the Spine at the Bracket Towers facade, Grant and Asher together at the Bracket Towers, and Royce beyond Cloudbank, respectively. All four happen naturally just by playing through the story.",
                "Bye() unlocks at the end of a normal playthrough for completing the story, and Goodbye() is the payoff for actually recursing through it again in New Game Plus."
            ]
        },

        {
            heading: "The Sandbox",
            body: [
                "The Sandbox is a separate set of combat Tests, unlocked partway through the story, each themed around a different challenge: Speed(), Stability(), Planning(), Performance(), and Agency() each require completing every Test of that specific type.",
                "Sandbox() is the easiest entry point - clear just one Test of each type - while Contest() is the real endgame of the Sandbox, asking for every single Test across all five categories to be cleared.",
                "Tip: the Sandbox Tests let you freely experiment with Functions and Limiters outside of story combat, so they're a good place to practice for the tougher Limiter-stacking achievements below."
            ]
        },

        {
            heading: "Unlocking Everything",
            body: [
                "Function(), User(), Limiter(), and Memory() are the game's core completionist achievements: unlock every Transistor Function, every Upgrade and Passive Slot, every Process Limiter, and a full 32 MEM of capacity, respectively - each accumulates naturally as you progress and gain experience, though the later ones realistically need a second playthrough's worth of experience.",
                "Align(), Focus(), and One() track User Level milestones at 8, 16, and 24 - the same underlying experience total that also gates Memory(), User(), and Limiter().",
                "Search(), Find(), and Reveal() ask you to inspect completed Function Files - 5, 10, and every one respectively - while Process() is the equivalent for Limiter Files. News() is a smaller, separate task: use 10 different OVC Terminals scattered around Cloudbank.",
                "Self() is a specific, easy-to-miss mechanic achievement: upgrade any Function with a copy of itself, rather than one of its usual alternate upgrades."
            ]
        },

        {
            heading: "Combat Challenges",
            body: [
                "Bet(), Dare(), and Risk() scale up the game's Limiter system - a set of optional difficulty modifiers you can turn on for extra experience: complete five encounters with at least one Limiter active, then five with at least five active, then five with all 10 active at once. Risk() in particular is a real test of your build, best attempted once you've unlocked most of your Functions and upgrades.",
                "Anything() and Everything() ask you to deal a large amount of damage in a single Turn() (Transistor's tactical pause-and-plan mechanic) inside the Practice Test specifically - 1024 and 2048 damage respectively - which rewards building toward one big burst combo rather than a normal combat loadout.",
                "Stack() is a similar build-focused challenge: create a single Function combination that costs a full 12 MEM, which requires having unlocked enough MEM capacity and upgrade slots to support it.",
                "Tip: save Risk(), Everything(), and Stack() for later in a playthrough (or for Recursion) once you have enough Functions, upgrades, and MEM unlocked to actually build toward them - they're much harder to force early."
            ]
        },

        {
            heading: "Suggested Order",
            body: [
                "Play through the story normally first - Drive(), Reisz(), Spine(), Kendrell(), Bracket(), and Bye() all come naturally, along with steady progress toward Align(), Focus(), Search(), Find(), and News().",
                "Visit the Sandbox as soon as it's available and clear a Test of each type for Sandbox(), then come back periodically as you unlock more Functions - full Sandbox completion (Contest()) is easier once your loadout is more developed.",
                "Recurse into New Game Plus for Goodbye() once you've finished the story once - the extra experience from a second run is also what makes the higher User Level, MEM, and Limiter achievements realistic.",
                "Save the build-dependent combat challenges - Risk(), Everything(), and Stack() - for whenever your Function and upgrade collection is far enough along to support them, rather than trying to force them early."
            ]
        }

    ]

};

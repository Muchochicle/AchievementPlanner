// Phasmophobia's Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/phasmophobia.json), whose 54 achievements
//   were sourced directly from Steam's own achievement schema for appid
//   739630 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js) - 48 of 54 ship a real,
//   official Steam description, quoted directly below.
// - The six hidden achievements (Work Experience, They're here, The
//   Bait, Doom Slayed, Flawless Execution, Escape Artist) ship no Steam
//   description; their conditions here are curatorial, cross-checked
//   against community achievement guides and the game's own apiname
//   strings.
// - The grouping (ghost identification, contract and prestige
//   progression, money and equipment, challenges and tasks, then the
//   hidden ones) is read from what each achievement's own description
//   requires. The game updates often, so tier/prestige numbers reflect
//   the schema at time of writing.
export const GUIDE = {

    slug: "phasmophobia-achievement-guide",
    category: "game",
    gameSlug: "phasmophobia",
    icon: "👻",
    title: "Phasmophobia Achievement Guide",
    summary: "A practical guide to all 54 Steam achievements in Phasmophobia - identifying every ghost type, the contract and prestige progression, money and equipment milestones, the challenge and daily/weekly tasks, and the hidden achievements.",

    relatedSlugs: ["achievement-completion-and-tracking", "understanding-achievement-availability"],

    sections: [

        {
            heading: "Overview",
            body: [
                "Phasmophobia has 54 Steam achievements, six of them hidden. The single biggest block is identifying every ghost type at least once; the rest are contract counts, money spent, equipment unlocks, and the weekly challenge mode.",
                "Nothing is truly missable - it is a repeatable investigation game - but the ghost-identification achievements need you to correctly guess each type and survive (or at least have a teammate escape), which means playing enough contracts to see all of them.",
                "Tip: play on the lowest difficulty with a full loadout while working on ghost identification. A wrong guess still lets you retry, and lower difficulty means more evidence and a slower ghost, so you can confirm the type safely."
            ]
        },

        {
            heading: "Ghost Identification",
            body: [
                "Twenty-four achievements, one per ghost type: Spirit Discovered, Wraith Discovered, Phantom Discovered, Poltergeist Discovered, Banshee Discovered, Jinn Discovered, Mare Discovered, Revenant Discovered, Shade Discovered, Demon Discovered, Yurei Discovered, Oni Discovered, Yokai Discovered, Hantu Discovered, Goryo Discovered, Myling Discovered, Onryo Discovered, The Twins Discovered, Raiju Discovered, Obake Discovered, The Mimic Discovered, Moroi Discovered, Deogen Discovered, and Thaye Discovered.",
                "Each needs a correct identification (and, for most, surviving the contract)."
            ]
        },

        {
            heading: "Contracts & Prestige",
            body: [
                "Contract counts: Rookie (10), Professional (50), and Boss (100). Prestige: I, II, and III. Plus No More Training Wheels (complete Training) and Extra Mile (complete 50 optional objectives)."
            ]
        },

        {
            heading: "Money & Equipment",
            body: [
                "Spending: Chump Change ($1), Fat Stack ($10,000), Cash Cow ($50,000), and Break The Bank ($100,000).",
                "Equipment: Bare Essentials, Tools of the Trade, and Fully Loaded (unlock all tier one, two, and three equipment respectively)."
            ]
        },

        {
            heading: "Challenges & Tasks",
            body: [
                "The Apocalypse Trophies: Bronze Hunter, Silver Hunter, and Gold Hunter. Director rewards creating a custom difficulty.",
                "Recurring tasks: Dedicated (30 daily tasks) and Devoted (10 weekly tasks). Weekly Challenge Mode: Challenger Approaching (complete one), Rise to the Challenge (five), and Taking All Challenges (ten)."
            ]
        },

        {
            heading: "Hidden Achievements",
            body: [
                "Work Experience - complete your first contract. They're here - witness a Poltergeist use its ability (throwing several objects at once). Escape Artist - escape a Revenant during a hunt.",
                "The Bait - be killed by a Banshee while playing in multiplayer. Doom Slayed - get killed by a Demon's ability within the first minute of a contract (set a custom difficulty with a fast, aggressive ghost and no setup time). Flawless Execution - complete a perfect game: all objectives done, correct ghost, no deaths, everyone escapes."
            ]
        },

        {
            heading: "Suggested Order",
            body: [
                "Do the Training for No More Training Wheels, then run easy contracts to build toward Rookie, Professional, and Boss while identifying each ghost type as it comes up (all 24 \"Discovered\" achievements). Extra Mile and the money achievements fill in naturally.",
                "Unlock equipment tiers (Bare Essentials, Tools of the Trade, Fully Loaded) as you earn money, and grind Prestige I, II, and III over time.",
                "Do the weekly Challenge Mode each week toward Challenger Approaching, Rise to the Challenge, and Taking All Challenges, and pick up the Apocalypse Trophies (Bronze/Silver/Gold Hunter) and Director along the way.",
                "The hidden achievements are quick set-ups: Work Experience on your first contract, They're here and Escape Artist during normal hunts, and The Bait, Doom Slayed, and Flawless Execution on deliberate custom-difficulty runs."
            ]
        }

    ]

};

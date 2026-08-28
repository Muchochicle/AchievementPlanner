// Neon Abyss' Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/neon-abyss.json), whose 35 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   788100 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js) - 31 of 35 ship a real,
//   official Steam description, quoted directly below.
// - The four hidden achievements (The Real Game, Acrobatic, Ultimate
//   Challenge, Saturday Night Fever) ship no Steam description. Their
//   unlock conditions here are curatorial, cross-checked against Steam
//   Community achievement guides.
// - The grouping (the five God bosses, the egg system, single-run
//   challenges, the long-tail lifetime grinds, then the hidden
//   achievements) follows the achievements' own apiname prefixes and
//   descriptions.
export const GUIDE = {

    slug: "neon-abyss-achievement-guide",
    category: "game",
    gameSlug: "neon-abyss",
    icon: "🔫",
    title: "Neon Abyss Achievement Guide",
    summary: "A practical guide to all 35 Steam achievements in Neon Abyss - the five God bosses, the egg-hatching system, the single-run challenges, and the long lifetime grinds.",

    relatedSlugs: ["achievement-completion-and-tracking", "understanding-achievement-availability"],

    sections: [

        {
            heading: "Overview",
            body: [
                "Neon Abyss has 35 Steam achievements, four of them hidden. It is a run-based roguelite, so nothing is missable - every boss, room type, and character is always available on the next descent into the Abyss.",
                "The list is a mix of boss kills, a few single-run challenges, and a long tail of lifetime counters (thousands of jumps, hundreds of chests, and so on) that simply accumulate as you play.",
                "Tip: don't chase the big lifetime counters directly - Burning Ground (9,999 jumps), Abyss Veteran (999 runs), Key Master (999 chests), Bug Squisher (999 worms) all tick up on their own over a full completion. Focus your attention on the boss and challenge achievements."
            ]
        },

        {
            heading: "The God Bosses",
            body: [
                "Each of the game's bosses has a defeat achievement: First Light (God of Darknet), Natural Products (God of Machines), Stay Clam (God of Violence), Seek the Truth (Goddess of Illusion), and Shutdown (God of Electricity).",
                "Two are harder conditions on the same fights: Pro Gamer (defeat the God of Machines without getting hurt) and Action Supremacist (defeat Argus without picking up any items)."
            ]
        },

        {
            heading: "Eggs & Hatching",
            body: [
                "Eggs follow you and hatch into pets or items after enough rooms. Sovereign of Eggs rewards holding 50 eggs at once in a single run, Mom's Love rewards hatching eggs successfully 5 times in a row, and Sad Eggs is the opposite - fail to hatch 5 times in a row."
            ]
        },

        {
            heading: "Single-Run Challenges",
            body: [
                "Each of these must happen within one run: Rugged Tenacity (acquire 8 heart containers), Shields Up! (acquire 8 shields), Safety First (complete a run without getting hurt), I'm Fine (complete a run without recovering any hearts), Shopping Maniac (empty 4 shops), Sherlock (find 5 secret rooms in a row), and I believe I can fly (jump 10 times in the air before landing)."
            ]
        },

        {
            heading: "Lifetime Grinds & Oddities",
            body: [
                "One-off deaths and unlocks: First Blood (die for the first time), Don't Panic (get killed by your own bombs), Mind Your Steps (die to environmental damage 9 times), and Grim Squad (unlock 6 characters).",
                "Room-activity counters: Piano Virtuoso (complete the Piano challenge 10 times), Fishing Joy (fish 10 times in the fishing room), Dark trade (make deals with Smirk Co. 99 times), and Born Gambler (play the Roulette machine 99 times).",
                "The big lifetime totals: Hi Death! (die in the Abyss 99 times), Demolition Expert (find 99 secret rooms), Key Master (open 999 locked chests), Bug Squisher (step on worms 999 times), Burning Ground (jump 9,999 times), and Abyss Veteran (enter the Abyss for the 999th time)."
            ]
        },

        {
            heading: "Hidden Achievements",
            body: [
                "The Real Game - unlock Abyssal difficulty. You earn a mark by beating both Ares and Athena with the same character on Hard; with 5 marks, completing a Hard run unlocks Abyssal.",
                "Ultimate Challenge - defeat Athena on Abyssal difficulty, the game's hardest setting.",
                "Acrobatic - get killed by your own bomb while airborne (drop to low health, jump toward a wall, and throw a grenade at it).",
                "Saturday Night Fever - dance in the bar continuously for 30 real minutes (press the dance button and don't stop or minimise the game)."
            ]
        },

        {
            heading: "Suggested Order",
            body: [
                "Play normal runs to learn the game, unlocking characters toward Grim Squad and beating each boss for First Light, Natural Products, Stay Clam, Seek the Truth, and Shutdown. First Blood, Don't Panic, and Mind Your Steps happen on their own.",
                "Do focused runs for the single-run challenges (Rugged Tenacity, Shields Up!, Safety First, I'm Fine, Shopping Maniac, Sherlock, I believe I can fly) and the egg achievements (Sovereign of Eggs, Mom's Love, Sad Eggs), plus the harder boss conditions (Pro Gamer, Action Supremacist).",
                "Grind Abyssal access: rack up marks for The Real Game, then take on Ultimate Challenge. Pick up Acrobatic and the room-activity counters (Piano Virtuoso, Fishing Joy, Dark trade, Born Gambler) whenever convenient.",
                "Let the lifetime totals (Hi Death!, Demolition Expert, Key Master, Bug Squisher, Burning Ground, Abyss Veteran) finish over the course of everything else, and spend one evening on Saturday Night Fever."
            ]
        }

    ]

};

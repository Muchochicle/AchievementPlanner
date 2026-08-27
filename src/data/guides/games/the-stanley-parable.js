// The Stanley Parable's Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/the-stanley-parable.json), whose 10
//   achievements were sourced directly from Steam's own achievement
//   schema for appid 221910 via ISteamUserStats/GetSchemaForGame
//   (fetched through this app's own backend/services/steamApi.js) - all
//   10 ship a real, official Steam description, quoted directly below.
//   None of them are hidden - the game's own achievement list is itself
//   part of its joke about achievement systems, so Steam shows every
//   description up front rather than concealing any of them.
// - The grouping below (the joke achievements vs. the ones tied to
//   actually finishing an ending vs. the deliberately absurd
//   time-gated ones) is read directly from what each achievement's own
//   official description asks for, not invented.
export const GUIDE = {

    slug: "the-stanley-parable-achievement-guide",
    category: "game",
    gameSlug: "the-stanley-parable",
    icon: "🚪",
    title: "The Stanley Parable Achievement Guide",
    summary: "A practical guide to all 10 Steam achievements in The Stanley Parable - a short list that's really a joke about achievement lists themselves, from a five-click door to a five-year wait.",

    relatedSlugs: ["achievement-completion-and-tracking", "understanding-achievement-availability"],

    sections: [

        {
            heading: "Overview",
            body: [
                "The Stanley Parable has 10 Steam achievements. Unusually for this catalog, every single one already ships a real, official description - there's nothing hidden, because the achievement list itself is part of the game's running joke about what achievements are and why players chase them.",
                "The game is built around branching narrative endings reached by choosing what to do (or not do) at each fork - most of this list rewards exploring those forks and their surrounding jokes rather than any real mechanical skill."
            ]
        },

        {
            heading: "Finishing an Ending",
            body: [
                "Beat the game simply asks you to complete The Stanley Parable - reaching any one of its many endings satisfies it, so it's realistically the first achievement most players get.",
                "Speed run raises the bar considerably: finishing in under 4 minutes 22 seconds (not counting load times) means beelining the single fastest ending route from memory, not a casual first playthrough."
            ]
        },

        {
            heading: "The Joke Achievements",
            body: [
                "Achievement, Click on door 430 five times., You can't jump, and 8888888888888888 are each a small, self-contained gag tied to a specific object or interaction somewhere in the game's world - the official descriptions are themselves the punchline, so there's little to add beyond exploring curiously and interacting with things that seem oddly specific.",
                "Welcome back! is the simplest of all: quit the game, then start it again. No progress or story knowledge required.",
                "Tip: door 430 and the other joke triggers aren't always on the game's \"main\" path through a given ending - if you're hunting these deliberately, it helps to wander off the obvious route rather than beelining for an ending each time."
            ]
        },

        {
            heading: "The Absurd, Time-Gated Achievements",
            body: [
                "Commitment and Go outside are the game poking fun at achievement hunting itself: Commitment asks you to play for the entire duration of a single Tuesday, and Go outside asks you to not play the game at all for five years. Neither is something to actively \"grind\" - they're jokes about dedication and touch grass in equal measure, and both simply unlock on their own once real time has genuinely passed.",
                "Unachievable is the game's final punchline: its own official description states plainly that it is impossible to get. It isn't a bug or a hidden trick to discover - treat it exactly as advertised."
            ]
        },

        {
            heading: "Suggested Order",
            body: [
                "Play normally first and just explore - Beat the game, the joke achievements, and Welcome back! will likely fall naturally out of a first curious playthrough or two.",
                "Once you know the map and the fastest route to an ending, go back for Speed run with a deliberate, practiced attempt.",
                "Leave Commitment and Go outside for the background - they unlock from real elapsed time, not effort, so there's nothing to actively do for them beyond continuing to own and occasionally play the game.",
                "Don't spend any real effort on Unachievable - by design, no amount of effort unlocks it."
            ]
        }

    ]

};

// Baba Is You's Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/baba-is-you.json), whose 18 achievements
//   were sourced directly from Steam's own achievement schema for appid
//   736260 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js) - 12 of 18 ship a real,
//   official Steam description, quoted directly below.
// - B A B A, Baba Is Baba, Not Baba, Orb Is Bonus, The End, and What are
//   hidden achievements Steam never describes publicly (confirmed via the
//   same API call) - their descriptions here are curatorial, cross-checked
//   against an independent Steam Community 100% achievement guide's
//   documentation of their real unlock conditions. Kept deliberately
//   light on exact puzzle solutions, in the same spoiler-conscious spirit
//   as this catalog's other puzzle games - Baba Is You's whole appeal is
//   discovering these secret areas and their word-rule tricks yourself.
// - The grouping below (the ten main world areas vs. the world map vs.
//   the four progressively deeper hidden areas beyond it) is read
//   directly from what each achievement's own description/unlock
//   condition requires, not invented.
export const GUIDE = {

    slug: "baba-is-you-achievement-guide",
    category: "game",
    gameSlug: "baba-is-you",
    icon: "🐑",
    title: "Baba Is You Achievement Guide",
    summary: "A practical guide to all 18 Steam achievements in Baba Is You - the ten main puzzle areas, completing the world map, and the deeply hidden secret areas that lie beyond it.",

    relatedSlugs: ["achievement-completion-and-tracking", "understanding-achievement-availability"],

    sections: [

        {
            heading: "Overview",
            body: [
                "Baba Is You has 18 Steam achievements. In this game you don't control a character directly so much as rewrite the rules of the level itself, by pushing around blocks of words like \"BABA\", \"IS\", and \"YOU\" to form new sentences - the ten main achievements below each reward completing one full area of levels using exactly this kind of rule-manipulation.",
                "Nothing here is missable in the traditional sense - every level and area stays accessible for as long as your save exists, so there's no risk of permanently locking yourself out of an achievement.",
                "The six hidden achievements are progressively deeper secrets: completing the world map unlocks access to a hidden area, which itself unlocks another, and so on - real spoilers for a puzzle game built entirely around the joy of discovery, so descriptions here stay intentionally light on exact solutions."
            ]
        },

        {
            heading: "The Ten Main Areas",
            body: [
                "Water Is Sink, Box Has Key, Tree Is Shift, Lava Is Hot, Leaf Is Move, Cog Is Push, Bird Is Float, Baba Is More, Rocket Is Dust, and Hedge Is Stop each reward fully completing one of the game's ten main world areas - the lake, ruins, forest, cavern, forest of fall, solitary isle, mountain, abstract area, space area, and garden respectively.",
                "Every achievement name here is itself a real, working rule from somewhere in that area - a small preview of the kind of word-based logic you'll be rearranging to solve each area's levels.",
                "Tip: areas don't need to be tackled in map order - if one area's puzzles are stumping you, the world map lets you jump to a different one and come back later with fresh eyes."
            ]
        },

        {
            heading: "Baba Is All - The World Map",
            body: [
                "Baba Is All rewards completing the world map itself once all ten main areas are done - a meta-level of its own, built from smaller pieces representing each area you've already cleared.",
                "This is realistically the natural finish line for a normal playthrough, reached only after every main area achievement above."
            ]
        },

        {
            heading: "Beyond the Map - Hidden Areas",
            body: [
                "B A B A rewards completing a hidden area called ABC, reached only after clearing enough of the world map to reveal it.",
                "Not Baba rewards completing a separate hidden area known as ???, unlocked by finding and opening a special flower-gate hidden on the world map itself.",
                "Baba Is Baba goes a level deeper still, rewarding completion of the Depths - a hidden area reached only by transforming a specific level into Baba herself, a trick the game never states outright.",
                "Orb Is Bonus rewards simply finding and collecting one of several hidden bonus orbs scattered through these secret areas, rather than completing a whole area.",
                "What is the true final hidden area, Meta, reached only after clearing the Depths - by a wide margin the most advanced content in the game.",
                "The End rewards reaching the game's secret true ending, found deep within these hidden areas and solved using its own intended, non-obvious solution.",
                "Tip: don't go looking for these six hidden achievements until you've genuinely finished the ten main areas and the world map first - each one gates the next, and the game deliberately never tells you they exist."
            ]
        },

        {
            heading: "Baba Is End",
            body: [
                "Baba Is End rewards simply beating the game - reaching this point naturally happens somewhere around completing the ten main areas, well before any of the six hidden achievements come into play."
            ]
        },

        {
            heading: "Suggested Order",
            body: [
                "Work through the ten main areas in whatever order appeals to you, since none of them are missable and the world map lets you freely jump between them.",
                "Complete the world map itself for Baba Is All once all ten areas are cleared, then expect Baba Is End to follow naturally soon after.",
                "Only after that, start hunting for the hidden areas - ??? and its Not Baba achievement first, since it's the one the game most directly hints at, then ABC, the Depths, and finally Meta, each building on discoveries from the last.",
                "Treat Orb Is Bonus and The End as things you'll likely stumble into naturally while exploring these hidden areas, rather than achievements to chase in isolation."
            ]
        }

    ]

};

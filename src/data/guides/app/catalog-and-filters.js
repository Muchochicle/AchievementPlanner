// Content derived directly from src/utils/gamesCatalog.js (searchGames -
// case-insensitive substring match on title; sortGames - alphabetical/
// difficulty/time modes), src/components/games-filters/games-filters.js
// (the sort dropdown's exact options), src/utils/catalog/filters.js
// (genre filtering: OR within the checked genres), src/utils/catalog/
// difficulty.js (Easy 1-3 / Medium 4-6 / Hard 7-10 buckets), src/utils/
// catalog/time.js (the 4 completion-time buckets, and that filtering
// uses each game's maximum estimated hours, not its minimum), and
// src/utils/catalog/extras.js (Has Guide / Missable Achievements
// checkboxes) - new in Phase 37.
export const GUIDE = {

    slug: "catalog-and-filters",
    category: "app",
    icon: "🔍",
    title: "Catalog & Filters",
    summary: "How search, sorting, and filtering actually combine on the Games page.",

    relatedSlugs: ["getting-started"],

    sections: [

        {
            heading: "Search",
            body: [
                "The Games page search box matches case-insensitively against a game's title, anywhere in the name - not just the start. Typing part of a name is enough."
            ]
        },

        {
            heading: "Sorting",
            body: [
                "Sort by Alphabetical (the default), Difficulty (hardest first), or Completion Time (shortest first, by the low end of each game's estimated time range). Sorting only changes the order of the games currently matching your search and filters - it never changes which games are shown."
            ]
        },

        {
            heading: "Filters",
            body: [
                "Genre, Difficulty, and Completion Time each have their own checkbox group, plus an Extras group for \"Has Guide\" and \"Missable Achievements\".",
                "Difficulty buckets are Easy (1-3), Medium (4-6), and Hard (7-10). Completion Time buckets are Less than 20h, 20-50h, 50-100h, and 100+h, based on the upper end of a game's estimated completion range."
            ]
        },

        {
            heading: "How Filters Combine",
            body: [
                "This is the part that's easy to get wrong: checking multiple boxes within the same group is an OR - checking both \"Action\" and \"Puzzle\" under Genre shows games that are either one. But different filter groups combine as AND - adding a Difficulty filter on top narrows further, to games that match your genre selection and your difficulty selection.",
                "\"Has Guide\" only reflects whether AchievementPlanner has (or is planning) a curated achievement guide for that game - it has nothing to do with the game's own curated planner data. \"Missable Achievements\" flags games that have at least one achievement you can permanently lock yourself out of if you're not careful."
            ]
        }

    ]

};

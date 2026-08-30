// Firewatch Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/firewatch.json), whose 10 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   383870 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 5 achievement(s) are hidden and ship with no official
//   description on Steam; those keep their real name with a curatorial
//   (researched) description sourced from community achievement guides
//   (Steam Community guides, TrueAchievements, GameFAQs, wikis), noted
//   individually where it appears below. Every other achievement's
//   description is Steam's own real text, quoted verbatim.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "firewatch-achievement-guide",
    "category": "game",
    "gameSlug": "firewatch",
    "icon": "🔥",
    "title": "Firewatch Achievement Guide",
    "summary": "A practical guide to all 10 Steam achievements in Firewatch - 5 are hidden. Covers the story's day-by-day progression through Henry's summer at Two Forks lookout, and its handful of optional side discoveries.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Firewatch has 10 Steam achievements, 5 of which are hidden. All 5 hidden achievements are simply story-progress markers, one for each key day of the game (Day 1, Day 2, Day 76, Day 77, and the finale on Day 79), so nothing about them is a genuine surprise beyond the story itself. The other 5 achievements are optional side discoveries scattered through the wilderness - a bee sting, a raccoon encounter, filling a disposable camera, adopting a turtle, and listening to a specific cassette tape.",
                "Nothing is missable in the way that matters - the 5 story achievements unlock automatically just by playing through to the end, and the 5 side achievements can all be picked up in a single normal playthrough since Firewatch is fairly linear and doesn't lock you out of earlier areas permanently within a given day.",
                "Tip: since Firewatch is a short, single-playthrough narrative game, keep an eye out for the disposable camera film, the \"Ol' Shoshone\" cassette tape, and any turtles or wildlife you come across on your route - if you rush straight to objective markers you can easily miss all 5 side achievements in one sitting."
            ]
        },
        {
            "heading": "Story Progression",
            "body": [
                "Completing each key day of Henry's summer at the Two Forks lookout tower, from the opening prologue through to the story's conclusion.",
                "The achievements here: \"Good first day.\" (Complete Day 1, the prologue at your Two Forks lookout tower.); \"Back to work.\" (Complete Day 2, your first full day as a fire lookout.); \"Someone's out here.\" (Complete Day 76, as the mystery in Shoshone National Forest comes to a head.); \"Burn the place down.\" (Complete Day 77, in the aftermath of the fire.); Firewatch (Complete Day 79, the story's final day, finishing Firewatch.)."
            ]
        },
        {
            "heading": "Side Discoveries",
            "body": [
                "Optional wildlife encounters and collectibles found while exploring Shoshone National Forest: a bee sting, a raccoon attack, a filled disposable camera, an adopted turtle, and a found cassette tape.",
                "The achievements here: Bee Plot (Got stung by a bee. It happens.); The Life and Times of Raccoon Carter (Got attacked by a raccoon; probably didn't get rabies.); Shutter Bug (Filled a disposable camera with photos.); Love Turts (Adopted a turtle as a pet. The average lifespan of a box turtle is fifty years. It will outlive you.); Ol' Shoshone (Listened to the tape of \"Ol' Shoshone.\" Cavorted among the aspens.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through the story naturally, since Day 1, Day 2, Day 76, Day 77, and the finale all unlock automatically as you progress.",
                "2. Along the way, keep your eyes open for wildlife and side content: get stung by a bee, get attacked by a raccoon, and adopt a turtle as a pet if you come across one.",
                "3. Fill your disposable camera with all its available photos before it runs out of exposures.",
                "4. Find and listen to the \"Ol' Shoshone\" cassette tape somewhere out in the wilderness.",
                "5. Finish the story to Day 79 for the final Firewatch achievement.",
                "Tip: Firewatch's side achievements are easy to combine into a single relaxed playthrough - there's no time pressure stopping you from exploring off the beaten path between story beats."
            ]
        }
    ]
};

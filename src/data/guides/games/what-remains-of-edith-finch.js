// What Remains of Edith Finch's Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/what-remains-of-edith-finch.json), whose 9
//   achievements were sourced directly from Steam's own achievement
//   schema for appid 501300 via ISteamUserStats/GetSchemaForGame (fetched
//   through this app's own backend/services/steamApi.js) - every quoted
//   description below is that official Steam text; all 9 achievements
//   ship a real, non-hidden Steam description, so nothing here is a
//   curatorial guess.
// - The catalog's game-level missable:false reflects the game's own
//   story-select menu (unlocked after finishing each family member's
//   vignette, letting any of them be replayed at any time) - confirmed
//   by Loop-de-loop-de-loop itself being an achievement for deliberately
//   replaying Calvin's story, which wouldn't exist as a stated
//   achievement if replay weren't a real, supported feature.
export const GUIDE = {

    slug: "what-remains-of-edith-finch-achievement-guide",
    category: "game",
    gameSlug: "what-remains-of-edith-finch",
    icon: "🏚️",
    title: "What Remains of Edith Finch Achievement Guide",
    summary: "A practical guide to all 9 Steam achievements in What Remains of Edith Finch - finishing every story, and 8 small, easy-to-miss details tucked inside them.",

    relatedSlugs: ["achievement-completion-and-tracking", "understanding-achievement-availability"],

    sections: [

        {
            heading: "Overview",
            body: [
                "What Remains of Edith Finch has 9 Steam achievements. Nothing is permanently missable - each family member's story can be replayed from the game's story-select menu once you've experienced it, so a detail missed on a first pass is always recoverable afterward.",
                "The End of Everything (\"Finish all stories\") is the one automatic achievement, unlocking with the credits after a normal ~2-3 hour playthrough. The other 8 are small, specific details tucked inside individual vignettes - easy to miss on a first playthrough since the game never calls attention to them."
            ]
        },

        {
            heading: "Details Inside the Stories",
            body: [
                "A Closer Look (\"Look in all peepholes and telescopes long enough to hear Edith's commentary\") is spread across several different vignettes throughout the house and its stories - it needs lingering at each one, not just glancing through it.",
                "Great Owl (\"Catch 2 rabbits with only 2 swoops\") is the most precision-demanding achievement in the game, found during Molly's story's owl segment - it wants exactly 2 successful swoops for 2 rabbits, no misses.",
                "G-R-E-G-O-R-Y (\"Knock all the letters of Gregory's name into the bathtub\") is a small, deliberate task inside baby Gregory's own short vignette.",
                "Clear the Table (\"Clear all balls off the pool table\") and Let Him Finish (\"Let the drunken sailor finish his song\") are both self-contained optional actions inside specific stories - one a precision task, the other just patience.",
                "All Roads (\"Take both paths to the house\") is a choice made at the very start of the game, at the fork leading up to the Finch house - since chapter/story select doesn't restart the opening walk itself, getting this one means either choosing carefully on a first playthrough or starting a fresh game to catch the path not taken.",
                "Thanks, Johann! (\"See Johann's name in the ending credits\") rewards sitting through (or scrubbing to) the full credits rather than quitting out as soon as the game ends."
            ]
        },

        {
            heading: "Suggested Order",
            body: [
                "Play through the whole game once at a relaxed pace, lingering at peepholes/telescopes and taking your time with Molly's owl segment and Gregory's bathtub scene - this alone likely earns most of the detail achievements plus The End of Everything.",
                "Tip: keep All Roads in mind before you even start - it's the one achievement tied to the very first choice in the game, so deciding in advance to come back for the other path (via a fresh game, since it's before story-select unlocks) saves a full extra playthrough later.",
                "After the credits, use story-select to replay Calvin's story for Loop-de-loop-de-loop, and revisit anything else you're not sure you caught - a single cleanup pass covers whatever's left."
            ]
        }

    ]

};

// INSIDE's Game Guide (Phase 73). Sources:
//
// - PRIMARY: this app's own catalog data (src/data/games/inside.json),
//   whose 14 achievements were sourced directly from Steam's own
//   achievement schema for appid 304430 (see PHASE_72_AUDIT.md) -
//   INSIDE's schema provides a real, official Steam description for every
//   single achievement, so every quoted description below is official
//   Steam text, not a curatorial guess.
// - The "unlock in a fixed, linear order just by playing through once"
//   framing is not an assumption - it's read directly from the catalog's
//   own data: `missable: false` for the game and every individual
//   achievement, `playthroughs: 1`, and the achievement ids/apinames
//   themselves (`ACHIEVEMENT_1` through `ACHIEVEMENT_14`) being a plain
//   numbered sequence rather than named side-content, unlike every other
//   game in this catalog.
export const GUIDE = {

    slug: "inside-achievement-guide",
    category: "game",
    gameSlug: "inside",
    icon: "🌫️",
    title: "INSIDE Achievement Guide",
    summary: "What to expect from INSIDE's 14 Steam achievements - a short, linear, story-driven game where 100% comes from a single playthrough.",

    relatedSlugs: ["achievement-completion-and-tracking", "getting-started"],

    sections: [

        {
            heading: "Overview",
            body: [
                "INSIDE has 14 Steam achievements, and this is the simplest completion story in this app's catalog: they unlock automatically, in a fixed sequence (ACHIEVEMENT_1 through ACHIEVEMENT_14 internally), just by playing through the game's roughly 4-8 hour story once from start to finish.",
                "Nothing here is missable, there's no separate collectible hunt, and no side content to seek out - every achievement is a checkpoint along the game's single, linear critical path."
            ]
        },

        {
            heading: "A Linear Story",
            body: [
                "The achievement names themselves trace the shape of the game's wordless story without spoiling specific moments: an opening chase through water and forest (Murky Waters, \"something's not right down here\"; Left Behind, \"safe falling and hard landings\"), an infiltration into research and industrial spaces (Field Research, \"unearthing secrets\"; Wee Wee Wee, \"they never made it to market\"; Obscure Foundations, \"lies beneath the city\"), and encounters with other captive figures (Friends in low places, \"dislodging derelict in the depths\"; Pack Mentality, \"pull together\").",
                "Later achievements mark the story's more surreal, unsettling turns as it heads toward its ending: A Tableau (\"skipping stones at the beach\"), Respite (\"dive back in\"), Unfathomable (\"take a deep breath\"), Clockwork (\"shadows at noon\"), Room for Reflection (\"hanging up\"), Office Space (\"do an elevator pitch\"), and finally The Last One (\"it comes together\").",
                "Tip: INSIDE is deliberately light on explicit exposition by design - if you want its story to land the way it's intended, it's worth playing through in as few sittings as possible rather than spreading it across many short sessions."
            ]
        },

        {
            heading: "Playing for 100%",
            body: [
                "Because every achievement is tied to unavoidable story progress, there's no dedicated \"achievement hunting\" strategy needed here the way there is for a longer, more open game - completing the story once is the whole checklist.",
                "The game's short length (4-8 hours) means a single, unhurried playthrough is a realistic way to see all 14 achievements in one sitting, if you'd rather not split it up."
            ]
        }

    ]

};

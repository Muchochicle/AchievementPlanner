// Papers, Please's Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/papers-please.json), whose 13 achievements
//   were sourced directly from Steam's own achievement schema for appid
//   239030 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js) - the 7 token achievements
//   ship a real, official Steam description, quoted directly below.
// - Too Honest, Hired Rifle, Member of the Order, Snowier Pastures,
//   Glory to Arstotzka, and Worker's Best are hidden achievements Steam
//   never describes publicly (confirmed via the same API call) - their
//   descriptions here are curatorial, cross-checked against multiple
//   independent Steam Community guides' documentation of their real
//   unlock conditions. Kept deliberately mechanical rather than
//   narrating the story beats around each ending, in the same
//   spoiler-conscious spirit as this catalog's other narrative-choice
//   games.
// - The grouping below (the seven hidden country tokens vs. the five
//   mutually-exclusive story endings vs. the separate apartment-rating
//   achievement) is read directly from what each achievement's own
//   description/unlock condition requires, not invented.
export const GUIDE = {

    slug: "papers-please-achievement-guide",
    category: "game",
    gameSlug: "papers-please",
    icon: "🛂",
    title: "Papers, Please Achievement Guide",
    summary: "A practical guide to all 13 Steam achievements in Papers, Please - the seven hidden country tokens scattered through your booth, and the five mutually-exclusive endings that decide the border inspector's fate.",

    relatedSlugs: ["achievement-completion-and-tracking", "understanding-achievement-availability"],

    sections: [

        {
            heading: "Overview",
            body: [
                "Papers, Please has 13 Steam achievements. None of them come from simply finishing the game once - they're split between finding seven hidden collectible tokens and reaching one of five distinct, mutually exclusive endings, plus one separate achievement for steady day-to-day performance.",
                "Because several of the ending achievements require directly contradictory choices - turning EZIC in versus joining them, for example - no single playthrough can realistically earn every ending achievement. Full completion means replaying the campaign several times with a different plan each run."
            ]
        },

        {
            heading: "The Seven Hidden Tokens",
            body: [
                "Antegria Token, Republia Token, Impor Token, Obristan Token, Kolechia Token, Arstotzka Token, and United Federation Token are each a small collectible token hidden somewhere in or around your inspection booth, one per nation featured in the game. Each unlocks the moment you find and collect it.",
                "Tip: these tokens tend to appear tucked into the booth's environment rather than handed to you through dialogue or paperwork - a careful look around your own workspace on any given day is usually enough to spot one."
            ]
        },

        {
            heading: "The Five Endings",
            body: [
                "Glory to Arstotzka is the \"loyalist\" ending: ignore every request the underground organization EZIC sends you and stay dutifully loyal to Arstotzka all the way through.",
                "Too Honest goes the opposite direction early: when an M.O.I. investigator interrogates you about EZIC, hand over one of the documents they've given you instead of concealing it.",
                "Member of the Order asks for real commitment to EZIC's cause - complete enough of the tasks they assign you over the course of the campaign, then hold your fire when their messenger finally arrives at the border wall near the end.",
                "Hired Rifle is a specific, one-time EZIC task: when they arrange a diversion and hand you a sniper rifle, use it on their target.",
                "Snowier Pastures is the family-escape ending - rather than siding with or against EZIC, you instead work to get every living member of your own family safely across the border into Obristan, which realistically requires (illegally) securing a passport for each of them along the way.",
                "Tip: since these five endings actively contradict each other, decide which one you're playing for at the start of a run and commit to it - trying to keep multiple endings open at once in the same playthrough usually just fails all of them."
            ]
        },

        {
            heading: "Worker's Best",
            body: [
                "Worker's Best is separate from the story endings entirely - it rewards steady, high-quality inspection work over time, tracked through your household's apartment rating. Reaching the top, Class-5 apartment means consistently processing entries correctly and avoiding the citations and pay cuts that come from mistakes.",
                "This one is compatible with any of the five endings above, so it's worth aiming for on whichever run you're already doing rather than as a dedicated playthrough of its own."
            ]
        },

        {
            heading: "Suggested Order",
            body: [
                "Play your first campaign normally, keeping an eye out for the seven hidden tokens as you go - they don't conflict with any ending, so there's no need for a dedicated run just for them.",
                "Pick one ending to aim for on that same first run - Glory to Arstotzka (simply ignoring EZIC) is the most straightforward starting point, since it requires no extra planning beyond doing your job as instructed.",
                "Replay the campaign for each remaining ending in turn, since they're mutually exclusive - Too Honest and Hired Rifle are comparatively quick to set up once you know which EZIC prompts to watch for, while Member of the Order and Snowier Pastures both need sustained setup across multiple days.",
                "Keep Worker's Best in mind on whichever runs you're playing carefully anyway, rather than treating it as its own separate playthrough."
            ]
        }

    ]

};

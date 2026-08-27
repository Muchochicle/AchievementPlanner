// Oxenfree's Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/oxenfree.json), whose 13 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   388880 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js) - 8 of 13 ship a real,
//   official Steam description, quoted directly below.
// - The Strong, Silent Type, Thicker than Water, New Beginnings,
//   Matchmaker, and You'd just end up hating each other. are hidden
//   achievements Steam never describes publicly (confirmed via the same
//   API call) - their descriptions here are curatorial, cross-checked
//   against multiple independent Steam Community 100% achievement guides'
//   documentation of their real unlock conditions. Kept deliberately
//   mechanical rather than narrating the full story context around each
//   choice, in the same spoiler-conscious spirit as this catalog's other
//   narrative-choice games.
// - The grouping below (the story/dialogue-choice achievements vs. the
//   collectible letters and hidden frequencies vs. the small one-off
//   jokes) is read directly from what each achievement's own
//   description/unlock condition requires, not invented.
export const GUIDE = {

    slug: "oxenfree-achievement-guide",
    category: "game",
    gameSlug: "oxenfree",
    icon: "📻",
    title: "Oxenfree Achievement Guide",
    summary: "A practical guide to all 13 Steam achievements in Oxenfree - the story's key dialogue choices, its collectible letters and hidden radio frequencies, and a few small one-off jokes along the way.",

    relatedSlugs: ["achievement-completion-and-tracking", "understanding-achievement-availability"],

    sections: [

        {
            heading: "Overview",
            body: [
                "Oxenfree has 13 Steam achievements. \"This House is Clear\" is the only unmissable one, awarded simply for finishing the story - most of the rest depend on specific dialogue choices you make (or deliberately avoid) over the course of one night, so a genuine 100% run realistically needs at least two playthroughs made with opposite goals in mind.",
                "Because Alex's relationships with Ren, Nona, and Jonas are shaped almost entirely by which dialogue options you pick and how often you talk, several achievements here directly contradict each other on the same save."
            ]
        },

        {
            heading: "Story & Relationship Choices",
            body: [
                "Thicker than Water is tied to the game's very last choice: telling Michael to go to school in town instead of leaving keeps him from drowning.",
                "New Beginnings rewards accepting Jonas as your new stepbrother and bonding with him whenever the chance comes up across the night, rather than staying cold toward him.",
                "Matchmaker and You'd just end up hating each other. are a directly opposed pair centered on Ren and Nona's relationship: Matchmaker rewards reassuring Nona, during the time loop at Bridge Stand, that Ren really does like her - encouraging the two of them together - while the other rewards actively discouraging that same relationship instead. Only one of the two is possible on a given playthrough.",
                "I'm the Firestarter takes the opposite approach to the whole cast at once - it rewards making enemies of all your friends rather than staying on good terms with any of them.",
                "The Strong, Silent Type is the most demanding relationship-adjacent achievement: playing through the entire game without ever selecting a dialogue option (lines Alex speaks automatically on her own don't count against it).",
                "Tip: The Strong, Silent Type is naturally incompatible with most of the other relationship achievements here, since staying silent means never actively encouraging or discouraging anyone - plan a dedicated silent run separately from your relationship-focused ones."
            ]
        },

        {
            heading: "Letters & Frequencies",
            body: [
                "Adler Letters, Pt. 1, Adler Letters, Pt. 2, and Adler Letters, Pt. 3 track Maggie's letters found scattered around the island, at 4, 8, and all of them respectively.",
                "Ghost Stories asks for something similar but separate - finding every one of the game's hidden radio frequencies rather than physical letters."
            ]
        },

        {
            heading: "Small One-Off Jokes",
            body: [
                "Renjamin Spanklin and It's A Me are both quick, one-time actions rather than ongoing goals: slapping Ren in the face during one early conversation, and jumping a specific chasm out in the woods.",
                "Neither of these needs any real planning - they're easy to pick up in the course of a normal playthrough once you know they're there."
            ]
        },

        {
            heading: "Suggested Order",
            body: [
                "Play your first run naturally, aiming to be friendly with everyone, encourage Ren and Nona (Matchmaker), bond with Jonas (New Beginnings), save Michael at the end (Thicker than Water), and pick up the letters, frequencies, and two small jokes along the way.",
                "Save I'm the Firestarter and You'd just end up hating each other. for a second, deliberately antagonistic playthrough, since both directly conflict with the friendly choices from your first run.",
                "Do The Strong, Silent Type as its own separate, dedicated run once you already know the story well - staying silent is much easier when you're not also trying to figure out what's happening for the first time.",
                "\"This House is Clear\" takes care of itself the moment you finish any of these runs, so there's no need to plan around it specifically."
            ]
        }

    ]

};

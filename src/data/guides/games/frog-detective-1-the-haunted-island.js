// Frog Detective 1: The Haunted Island Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/frog-detective-1-the-haunted-island.json), whose 6 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   963000 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "frog-detective-1-the-haunted-island-achievement-guide",
    "category": "game",
    "gameSlug": "frog-detective-1-the-haunted-island",
    "icon": "🐸",
    "title": "Frog Detective 1: The Haunted Island Achievement Guide",
    "summary": "A practical guide to all 6 Steam achievements in Frog Detective 1: The Haunted Island - none are hidden. Covers the game's short story from picking up the case to answering the final call. None of the achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Frog Detective 1: The Haunted Island has 6 Steam achievements and none are hidden. They're all story beats from this short comedic mystery - picking up the case, trying to leave before solving it, a hustle gone wrong, getting spooked by a ghost, picking a winner, and answering the final call.",
                "The catalog marks it difficulty 1. This is a very short, silly point-and-click mystery (well under 2 hours); every achievement unlocks just by playing through the story.",
                "Tip: just play through the case naturally at your own pace - all 6 achievements come from normal story progression."
            ]
        },
        {
            "heading": "Starting the Case",
            "body": [
                "Picking up the case, trying to leave the island before solving the mystery, and a hustle gone wrong.",
                "The achievements here: PICKED IT UP (Good detecting, friend!); TRIED TO LEAVE (You haven't even solved the mystery!); HUSTLED HARD (Normal explosive ingredients.)."
            ]
        },
        {
            "heading": "Solving the Mystery",
            "body": [
                "Getting spooked by a ghost, picking a winner, and answering the final call to close out the case.",
                "The achievements here: GOT SPOOKED (Aaaaaaaaah!!!!); PICKED A WINNER (When will this game end?); ANSWERED THE CALL (Okay this is the end, right?)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through Frog Detective's short story from start to finish.",
                "2. Try to leave the island early on for one of the achievements, even though you'll have to keep detecting.",
                "3. Talk to everyone and follow the case to its silly conclusion.",
                "Tip: this is a very short comedy game - a single relaxed playthrough is enough for all 6 achievements."
            ]
        }
    ]
};

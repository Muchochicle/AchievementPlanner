// Nubby's Number Factory Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/nubbys-number-factory.json), whose 13 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   3191030 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "nubbys-number-factory-achievement-guide",
    "category": "game",
    "gameSlug": "nubbys-number-factory",
    "icon": "🔢",
    "title": "Nubby's Number Factory Achievement Guide",
    "summary": "A practical guide to all 13 Steam achievements in Nubby's Number Factory - none are hidden. Covers a huge restock multiplier, cosmetic collections, the Nubby Trials challenge ladder, beating every supervisor, and an endless-mode milestone. None of the achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Nubby's Number Factory has 13 Steam achievements and none are hidden. They cover a single 10,000x restock, unlocking every item skin, every Nubby skin and every supervisor, skipping the tutorial, beating all 5 Nubby Trials levels and every other challenge, beating the game on every supervisor, and reaching round 300 in Endless mode.",
                "The catalog marks it difficulty 2. This is a comedic number-crunching roguelite; most achievements come from steady play across several runs, though the 5 Nubby Trials levels and round 300 in Endless mode are real difficulty spikes.",
                "Tip: unlock cosmetics and supervisors as they come up naturally, then set aside dedicated runs for the Nubby Trials ladder and a deep Endless mode push."
            ]
        },
        {
            "heading": "Unlocks & Collections",
            "body": [
                "A single 10,000x restock, unlocking every item skin, every Nubby skin and every supervisor, and skipping the main tutorial.",
                "The achievements here: The Big One (Get a 10,000x restock); Item Skin Maniac (Unlock all item skins); Nubby Skin Maniac (Unlock all nubby skins); Tons of Tonys (Unlock all supervisors); Attention Span Issue (Skip the main tutorial)."
            ]
        },
        {
            "heading": "Trials & Endgame",
            "body": [
                "Beating all 5 Nubby Trials levels, beating every other challenge, beating the game on every supervisor, and reaching round 300 in Endless mode.",
                "The achievements here: Nubby Adept (Beat Nubby Trials level 1); Nubby Professional (Beat Nubby Trials level 2); Nubby Expert (Beat Nubby Trials level 3); Nubby Prodigy (Beat Nubby Trials level 4); Nubmaster (Beat Nubby Trials level 5); Number Factory CEO (Beat all Nubby Trials levels and all other challenges); Tony Slayer (Beat the game at least once on every supervisor); Dopamine Depletion (Reach round 300 in endless mode while playing on any supervisor.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through normal runs, unlocking item skins, Nubby skins and supervisors as you go.",
                "2. Skip the tutorial once you know the basics, and aim for a single 10,000x restock during a run.",
                "3. Beat the game with every supervisor to work toward Tony Slayer.",
                "4. Set aside dedicated attempts for the 5 Nubby Trials levels and the rest of the challenges.",
                "5. Once you're comfortable, push an Endless mode run all the way to round 300.",
                "Tip: the Nubby Trials and round 300 in Endless mode are the real skill tests here - don't expect them to fall out of casual play the way the collection achievements do."
            ]
        }
    ]
};

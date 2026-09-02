// The Roottrees are Dead Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/the-roottrees-are-dead.json), whose 22 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   2754380 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 6 achievement(s) are Steam-hidden or ship no Steam
//   description; their description here is researched from community
//   100% guides and is a curatorial summary. Every other description is
//   Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "the-roottrees-are-dead-achievement-guide",
    "category": "game",
    "gameSlug": "the-roottrees-are-dead",
    "icon": "🌳",
    "title": "The Roottrees are Dead Achievement Guide",
    "summary": "A practical guide to all 22 Steam achievements in The Roottrees are Dead (6 hidden). The six hidden achievements are Spider Search easter eggs and one missable voicemail. Everything else - filling the family tree, the photo and infidelity lock-ins, the periodicals and music, FamilyDoku, all evidence, the smoking guns, and finishing both game modes - carries Steam's own text.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "The Roottrees are Dead has 22 Steam achievements, 6 of them hidden. In 1998 you piece together the family tree of a chocolate dynasty from photographs, periodicals and a 90s-style search engine. The visible achievements cover filling in the entire tree correctly, discovering every periodical, listening to all musical evidence, locking in the Notable Roottrees, 5Pieces, Free Spirits, Next Generation and three Possible Infidelity groups, completing every FamilyDoku puzzle, finding all evidence and all smoking guns, and finishing both The Roottrees are Dead and the Roottreemania mode.",
                "The 6 hidden achievements are Spider Search easter eggs (search 'Achievement', 'The Fluteknees are Bread', a Seinfeld phrase, the conspiracy trail, and an offline-search attempt) and one missable 'let the phone go to voicemail' achievement.",
                "The catalog marks it difficulty 2 and single-playthrough. Only 'Call Screener' is truly missable - it has a single window after 18 correct profiles."
            ]
        },
        {
            "heading": "The Investigation",
            "body": [
                "Filling in the whole family tree, the photo and infidelity lock-ins (Notables, 5Pieces, Free Spirits, Next Generation, three Possible Infidelity groups), and finishing The Roottrees are Dead and Roottreemania.",
                "The achievements here: Genealogy Genie (Filled in the entire family tree correctly); You Deserve a Gold Star (Locked in everyone on the Notable Roottrees list); Establishing Roots (Locked in the 5Pieces); Take My Hand Beneath the Tree (Locked in everyone in the Free Spirits photograph); Branching Out (Locked in everyone in the Next Generation photograph); Family Secrets (Finished The Roottrees are Dead); The Big Reveal (Finished Roottreemania); Old Flings (Locked in Possible Infidelity 1); Extracurricular Activities (Locked in Possible Infidelity 2); Roottree Company Affairs (Locked in Possible Infidelity 3)."
            ]
        },
        {
            "heading": "Collectibles & Completion",
            "body": [
                "Every periodical, all musical evidence, all evidence in both modes, every FamilyDoku puzzle, and all the smoking guns.",
                "The achievements here: Voracious Reader (Discovered every Periodical); Audiophile (Listened to all musical evidence); Loose Ends: Part One (Found all evidence in The Roottrees are Dead); Loose Ends: Part Two (Found all evidence in Roottreemania); FamilyDoku! (Completed every FamilyDoku! puzzle); Where There's Smoke... (Found all the smoking guns)."
            ]
        },
        {
            "heading": "Spider Search Secrets",
            "body": [
                "The search-engine easter eggs (search 'Achievement', 'The Fluteknees are Bread', a Seinfeld phrase, the full conspiracy trail, an offline-search attempt) and the missable voicemail.",
                "The achievements here: Thinking Outside the Box (Use the in-game Spider Search to search for the word 'Achievement'.); Search Failure (Try to search from your journal while the game's internet is off (highlight a term to search before SpiderSearch turns the connection back on).); Call Screener (After locking in 18 correct profiles in The Roottrees are Dead story, let the ringing phone go to voicemail instead of answering, then play the voicemail. (Missable.)); What's the Deal With All These Roottrees? (Use Spider Search on a Seinfeld-referencing phrase for the joke result.); Duckler County Denizen (Use Spider Search for the phrase 'The Fluteknees are Bread'.); It's All Connected! (Use Spider Search on every conspiracy claim in the WRTD radio-station trail, including the Time Cube and brand-conspiracy leads.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play The Roottrees are Dead, filling the tree and locking in each photo and infidelity group as you solve it.",
                "2. After you have 18 correct profiles, when the phone rings, let it go to voicemail and play the message for 'Call Screener' - do not answer.",
                "3. Finish the base mode (all evidence, all smoking guns, all FamilyDoku), then play Roottreemania and complete it too.",
                "4. Do the Spider Search easter eggs in the base mode: search 'Achievement', 'The Fluteknees are Bread', a Seinfeld phrase, and try an offline search.",
                "5. Chase the WRTD radio conspiracy trail, searching every capitalised claim, for 'It's All Connected!'.",
                "Tip: 'Call Screener' is the one thing you can permanently lose - the moment your correct-profile count hits 18, stop and wait for the phone rather than locking in more, and let it ring out."
            ]
        }
    ]
};

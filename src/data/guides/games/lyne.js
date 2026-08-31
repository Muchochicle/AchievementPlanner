// LYNE Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/lyne.json), whose 33 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   266010 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 1 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (TrueAchievements / Steam Community / game wikis) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "lyne-achievement-guide",
    "category": "game",
    "gameSlug": "lyne",
    "icon": "△",
    "title": "LYNE Achievement Guide",
    "summary": "A practical guide to all 33 Steam achievements in LYNE (1 hidden). Covers the progress and Daily-set achievements and the 26 puzzle-set completions (Set A through Z). One achievement is hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "LYNE has 33 Steam achievements and one is hidden - '???', earned by collecting 50 Trytes (the triangular tokens awarded for completing standard and Daily puzzle sets). The rest are open: completing all level sets, completing 1 / 3 / 5 / 10 Daily Sets, changing the palette, and completing each of the 26 standard puzzle sets (A through Z).",
                "The catalog marks it a short single playthrough - the 26 sets are the bulk of it, and the 50-Tryte and 10-Daily-Set achievements just need you to keep playing a few days. Nothing is missable.",
                "Tip: play a Daily Set each day you launch the game - it's the fastest way to both the Daily achievements and the 50 Trytes for '???' without re-grinding the standard sets."
            ]
        },
        {
            "heading": "Progress & Dailies",
            "body": [
                "Completing all level sets, the hidden 50-Tryte '???' achievement, completing 1, 3, 5 and 10 Daily Sets, and changing the palette.",
                "The achievements here: All Sets Complete (Complete all level sets.); ??? (Collect 50 Trytes - the triangular tokens awarded for completing standard puzzle sets and Daily Sets.); Daily - 1 (Complete one Daily Set.); Daily - 3 (Complete three Daily Sets.); Daily - 5 (Complete five Daily Sets.); Daily - 10 (Complete ten Daily Sets.); A new look (Change the palette.)."
            ]
        },
        {
            "heading": "Set Completions A-M",
            "body": [
                "Completing standard puzzle Sets A, B, C, D, E, F, G, H, I, J, K, L and M.",
                "The achievements here: Complete A (Complete Set A.); Complete B (Complete Set B.); Complete C (Complete Set C.); Complete D (Complete Set D.); Complete E (Complete Set E.); Complete F (Complete Set F.); Complete G (Complete Set G.); Complete H (Complete Set H.); Complete I (Complete Set I.); Complete J (Complete Set J.); Complete K (Complete Set K.); Complete L (Complete Set L.); Complete M (Complete Set M.)."
            ]
        },
        {
            "heading": "Set Completions N-Z",
            "body": [
                "Completing standard puzzle Sets N, O, P, Q, R, S, T, U, V, W, X, Y and Z.",
                "The achievements here: Complete N (Complete Set N.); Complete O (Complete Set O.); Complete P (Complete Set P.); Complete Q (Complete Set Q.); Complete R (Complete Set R.); Complete S (Complete Set S.); Complete T (Complete Set T.); Complete U (Complete Set U.); Complete V (Complete Set V); Complete W (Complete Set W.); Complete X (Complete Set X.); Complete Y (Complete Set Y.); Complete Z (Complete Set Z.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Work through the standard puzzle sets A through Z.",
                "2. Play a Daily Set each session for the Daily achievements.",
                "3. Keep an eye on your Tryte count - the standard sets and Dailies together get you to 50 for '???'.",
                "4. Change the palette once for 'A new look'.",
                "5. 'All Sets Complete' unlocks once every standard set is done.",
                "Tip: harder puzzles award more Trytes - if you're a few short of 50, replaying the later sets (T through Z) tops up faster than the early ones."
            ]
        }
    ]
};

// EXAPUNKS Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/exapunks.json), whose 16 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   716490 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "exapunks-achievement-guide",
    "category": "game",
    "gameSlug": "exapunks",
    "icon": "💾",
    "title": "EXAPUNKS Achievement Guide",
    "summary": "A practical guide to all 16 Steam achievements in EXAPUNKS - none are hidden. Covers the campaign and minigame achievements, and the secret one-off achievements and the bonus campaign.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "EXAPUNKS has 16 Steam achievements and none of them are hidden (though several have deliberately obscured names). Two are completing every task in the main campaign and in the bonus campaign. Six are the two built-in minigames - win 1 / 10 / 100 games of the solitaire game, and score 10,000 / 50,000 / 100,000 points in HACK*MATCH. The rest are secret one-off feats hidden inside campaign puzzles (throw a rave at the pizza parlor, an excessive service outage, the bog witch's rite of passage).",
                "Nothing is missable - puzzles and minigames are all replayable. This is a hard programming game; the completion count is small but the bonus campaign is significantly harder than the main one, and the 100,000-point HACK*MATCH run is a real skill wall.",
                "Tip: play the main campaign for EXAPUNK, doing the hidden secret feats as a puzzle guide points them out, then grind the solitaire and HACK*MATCH minigames and finally tackle the bonus campaign."
            ]
        },
        {
            "heading": "Campaigns & Minigames",
            "body": [
                "Completing every task in the main campaign, winning 1 / 10 / 100 games of the ПАСЬЯНС solitaire game, and scoring 10,000 / 50,000 / 100,000 points in HACK*MATCH.",
                "The achievements here: EXAPUNK (Complete every task in the main campaign.); АГИТАТОР (Win 1 game of ПАСЬЯНС.); РЕВОЛЮЦИОНЕР (Win 10 games of ПАСЬЯНС.); ГЕРОЙ_НАРОДА (Win 100 games of ПАСЬЯНС.); ゲーマー (Score 10,000 points in a game of HACK*MATCH.); 熟練ゲーマー (Score 50,000 points in a game of HACK*MATCH.); 究極のゲーマー (Score 100,000 points in a game of HACK*MATCH.)."
            ]
        },
        {
            "heading": "Secret Achievements & The Bonus Campaign",
            "body": [
                "The hidden one-off feats found inside campaign puzzles - the pizza-parlor rave, the disc read error, America's new pastime, a high-volume work order, purloining every item, an excessive service outage, the bog witch's rite of passage, the reverse-parking driving test - and completing every task in the bonus campaign.",
                "The achievements here: PIZZA_PARTY (Throw a rave at the pizza parlor.); DISC_READ_ERROR (It was just doing its job…); HOME_RUN (Participate in America's new pastime.); TONER_LOW (Place a high volume work order.); KLEPTOMANCER (Verily hath every item been unduly purloined.); BLACKOUT (Trigger an excessive service outage.); RITE_OF_PASSAGE (You have the bog witch’s approval. Now complete the rite of passage.); DRIVING_TEST (Keep a safe distance as you reverse into the space.); š  Ñ|  ö/ ~  öB  è[  å‡  ÑE  È‚ t   7Ò (Complete every task in the bonus campaign.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the main campaign to completion for EXAPUNK.",
                "2. Use a puzzle guide to catch the hidden secret achievements as you pass the puzzles that contain them.",
                "3. Grind the solitaire minigame to 100 wins.",
                "4. Practise HACK*MATCH up to a 100,000-point run.",
                "5. Play the bonus campaign, which is a harder second set of every-task puzzles.",
                "Tip: HACK*MATCH at 100,000 points needs long combo chains, not fast clears - learn the two-swap setups that trigger cascades, keep the board low, and only rush when a bomb piece forces you to."
            ]
        }
    ]
};

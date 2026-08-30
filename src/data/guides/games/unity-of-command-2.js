// Unity of Command II Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/unity-of-command-2.json), whose 10 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   809230 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "unity-of-command-2-achievement-guide",
    "category": "game",
    "gameSlug": "unity-of-command-2",
    "icon": "⭐",
    "title": "Unity of Command II Achievement Guide",
    "summary": "A practical guide to all 10 Steam achievements in Unity of Command II - none are hidden. Covers the campaign and scoring achievements and the individual scenario-feat achievements.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Unity of Command II has 10 Steam achievements and none of them are hidden. Four are the base \"Victory in the West\" campaign - complete it, complete it with a score of at least 7,000, with 5 or more golden-star scenarios, and with a golden star in every scenario. The other six are one-off scenario feats: a perfect scenario (all primary and bonus objectives), upgrading an HQ to 9 Command Points, destroying every enemy unit in a scenario, taking every hex on a map, killing an elite unit, and winning a scenario.",
                "Nothing is missable - scenarios and the campaign can be replayed from any point, and the scoring achievements just need a good run. The hard part is the golden-star grind: a golden star requires finishing a scenario well under the turn limit, so a full golden-star campaign (Golden Star) is a serious optimisation challenge.",
                "Tip: play the campaign once normally for the completion and the easy scenario feats, then replay individual scenarios with a guide's opening moves to grind golden stars, since each is a self-contained puzzle with a known fast solution."
            ]
        },
        {
            "heading": "Campaign & Scoring",
            "body": [
                "Completing the \"Victory in the West\" campaign, completing it with a score of at least 7,000, with 5 or more golden-star scenarios, and with a golden star in every scenario.",
                "The achievements here: Victory in the West (Complete the \"Victory in the West\" campaign); Five Star General (Complete the \"Victory in the West\" campaign with a score of at least 7000); Operational Artist (Complete the \"Victory in the West\" campaign with 5 or more golden star scenarios); Golden Star (Complete the \"Victory in the West\" campaign with a golden star in every scenario)."
            ]
        },
        {
            "heading": "Scenario Feats",
            "body": [
                "A perfect scenario (all primary and bonus objectives), upgrading an HQ to 9 Command Points, destroying all enemy units in a scenario, taking every hex on the map, destroying an elite enemy unit, and winning a scenario.",
                "The achievements here: Full Marks (Complete a perfect scenario (all primary and bonus objectives taken)); Drill Instructor (Upgrade an HQ to 9 Command Points); Wipeout (Destroy all enemy units in a scenario); Operation OBSESSIVE (Take every hex on the map); Boss Fight (Destroy an elite enemy unit); Off to a Good Start (Win a scenario)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the \"Victory in the West\" campaign once at a comfortable difficulty for the completion.",
                "2. During that run, do the easy scenario feats - win a scenario, kill an elite unit, upgrade an HQ to 9 Command Points, and hit a perfect scenario where the bonus objectives are reachable.",
                "3. Do the wipeout and take-every-hex feats on a small scenario where clearing the whole map is feasible.",
                "4. Replay scenarios for golden stars, aiming for 5+ and then a full golden-star campaign.",
                "5. A high-score run (7,000+) tends to fall out of a golden-star-heavy campaign.",
                "Tip: golden stars are about turn efficiency - a scenario guide's optimal first two or three moves matter more than anything, since a slow start makes the golden-star turn threshold impossible no matter how well you finish."
            ]
        }
    ]
};

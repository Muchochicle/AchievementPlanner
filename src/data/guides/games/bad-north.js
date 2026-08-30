// Bad North: Jotunn Edition Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/bad-north.json), whose 11 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   688420 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js). None are hidden; every one
//   ships a real, official Steam description, quoted verbatim below.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "bad-north-achievement-guide",
    "category": "game",
    "gameSlug": "bad-north",
    "icon": "⚔️",
    "title": "Bad North: Jotunn Edition Achievement Guide",
    "summary": "A practical guide to all 11 Steam achievements in Bad North: Jotunn Edition - none are hidden. Covers campaign clears at increasing difficulty, viking kill-count milestones, and specific tactical defense feats.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Bad North: Jotunn Edition has 11 Steam achievements and none are hidden. The list covers clearing the campaign on any difficulty and then on Hard while keeping every commander alive, two viking kill-count milestones, commander-upgrade achievements, and a run of specific island-defense feats (winning in the snow, at night, three islands in one turn, and a perfect no-losses streak).",
                "Nothing is missable in a lasting sense - the kill-count achievements are permanent across every run, and the campaign can be replayed as many times as needed since Bad North regenerates its islands each run. The genuine long pole is Protector of the Realm (win 10 islands in a row without losing a single house), which needs a genuinely careful, loss-free streak rather than just winning.",
                "Tip: Turn Back the Tide (kill every viking on a ship before it reaches shore) is much easier on an early, low-threat island - focus fire a single incoming ship with your strongest units rather than attempting it against a late-game wave with many ships landing at once."
            ]
        },
        {
            "heading": "Campaign Victories",
            "body": [
                "Completing the campaign on any difficulty, completing it on Hard while recruiting and keeping alive every commander, and killing 1,000 then 15,000 vikings.",
                "The achievements here: A New Home (Complete the campaign on any difficulty); Folk Hero (Complete the campaign on hard, recruit all commanders and keep them alive); Norsebane (Kill 1000 vikings); Bathed in Blood (Kill 15000 vikings)."
            ]
        },
        {
            "heading": "Combat & Defense Feats",
            "body": [
                "Purchasing and then fully upgrading a commander, winning an island in the snow, winning one at night, winning 3 islands in a single turn, killing every viking on a ship before it reaches shore, and winning 10 islands in a row without losing a single house.",
                "The achievements here: Ready for Battle (Purchase an upgrade for one of your commanders); Ready for Anything (Fully upgrade one of your commanders); Cold Steel (Win an island in the snow); Nightwatch (Win an island at nighttime); Split the Party (Win 3 islands on a single turn); Turn Back the Tide (Kill all the vikings in a ship, before it reaches the shore); Protector of the Realm (Win 10 islands in a row, without losing a single house)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through the campaign on any difficulty for A New Home, working toward the two viking kill-count milestones (1,000 and 15,000) as you go.",
                "2. Purchase a commander upgrade, then fully upgrade one commander for Ready for Battle and Ready for Anything.",
                "3. Pick off the specific island-defense feats as opportunities arise: win an island in the snow, win one at night, win 3 islands in a single turn, and kill every viking on a ship before it reaches shore.",
                "4. Once comfortable with the game's systems, attempt a careful, loss-free streak of 10 island wins in a row for Protector of the Realm.",
                "5. Finish with a Hard-difficulty campaign clear where you recruit every commander and keep them all alive, for Folk Hero.",
                "Tip: Protector of the Realm and Folk Hero both reward careful, conservative play over aggression - retreat units before a house falls rather than trying to save it at the last second, since losing even one house breaks the no-losses streak."
            ]
        }
    ]
};

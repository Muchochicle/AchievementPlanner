// Momodora: Reverie Under the Moonlight Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/momodora-reverie-under-the-moonlight.json), whose 9 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   428550 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 3 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (TrueAchievements / Steam Community / game wikis) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "momodora-reverie-under-the-moonlight-achievement-guide",
    "category": "game",
    "gameSlug": "momodora-reverie-under-the-moonlight",
    "icon": "🐇",
    "title": "Momodora: Reverie Under the Moonlight Achievement Guide",
    "summary": "A practical guide to all 9 Steam achievements in Momodora: Reverie Under the Moonlight (3 hidden). Covers the challenge-run achievements and the collectibles and secret unlocks. Three achievements ('Faithful', 'True Ending', 'P-pleasegiveittome!') are Steam-hidden and researched from community 100% guides.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Momodora: Reverie Under the Moonlight has 9 Steam achievements and three are Steam-hidden. The open six are challenge runs and collection goals: 100% map ('Explorer'), an Insane-difficulty clear, a no-death run ('Imperishable'), a no-common-kills run ('Pacifist'), all Ivory Bugs returned to the florist ('Bug Collector'), and all Vitality Fragments ('Healthy!'). The hidden three are the secret boss Archpriestess Choir ('Faithful'), the true ending, and giving the Dirty Shroom to the imp girl ('P-pleasegiveittome!').",
                "The catalog marks it difficulty 4 and about three runs. Momodora is a short, sharp Souls-like Metroidvania; the Insane, no-death and Pacifist runs are the real work, and several secrets need the cat-transform item to reach.",
                "Tip: do a thorough first run for 100% map, all bugs and all Vitality Fragments plus the three hidden secrets, then dedicated Insane, no-death and Pacifist runs afterwards."
            ]
        },
        {
            "heading": "Challenge Runs",
            "body": [
                "The Steam-hidden secret-boss achievement 'Faithful', 100% map completion ('Explorer'), an Insane-difficulty playthrough ('Don't even try this.'), a no-death playthrough ('Imperishable'), and a no-common-enemy-kills playthrough ('Pacifist').",
                "The achievements here: Faithful (Defeat the secret boss Archpriestess Choir in Forlorn Monastery - bring a Soft Tissue (reached in cat form) and fight her on the same screen as the area's save bell.); Explorer (Complete 100% of the map.); Don't even try this. (Finish a playthrough on \"Insane\" difficulty.); Imperishable (Finish a playthrough without dying.); Pacifist (Finish a playthrough without killing any common enemies.)."
            ]
        },
        {
            "heading": "Collectibles & Secrets",
            "body": [
                "All Ivory Bugs returned to the bunny florist ('Bug Collector'), all Vitality Fragments found ('Healthy!'), and the two remaining Steam-hidden secrets - the true ending and giving the Dirty Shroom to the imp girl ('P-pleasegiveittome!').",
                "The achievements here: Bug Collector (Find all Ivory Bugs and bring them to the bunny florist.); Healthy! (Find all Vitality Fragments.); True Ending (Reach the true ending: use Sealed Wind on the Karst City windmill to open the hidden passage, enter it in cat form to upgrade your charm, and defeat the final boss with the upgrade equipped.); P-pleasegiveittome! (Give the Dirty Shroom (found by the Subterranean Grave save point, reached in cat form through the small crawlspace) to the imp girl in that room.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Do a careful first playthrough on a normal difficulty: explore every room for 100% map, collect all Ivory Bugs and Vitality Fragments.",
                "2. On that run, get the cat-transform item and pick up the three hidden secrets: the Dirty Shroom for the imp girl, the Soft Tissue and Archpriestess Choir fight, and the windmill passage for the true-ending charm upgrade.",
                "3. Beat the final boss with the charm upgrade for 'True Ending'.",
                "4. Do a no-death run ('Imperishable') and a Pacifist run (no common-enemy kills).",
                "5. Do an Insane-difficulty clear ('Don't even try this.').",
                "Tip: Pacifist and Imperishable can be combined with a low-difficulty run since neither cares about difficulty - only Insane needs its own dedicated attempt."
            ]
        }
    ]
};

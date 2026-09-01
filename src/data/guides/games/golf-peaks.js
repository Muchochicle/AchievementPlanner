// Golf Peaks Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/golf-peaks.json), whose 12 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   923260 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 1 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (TrueAchievements / Steam Community / game wikis) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "golf-peaks-achievement-guide",
    "category": "game",
    "gameSlug": "golf-peaks",
    "icon": "⛳",
    "title": "Golf Peaks Achievement Guide",
    "summary": "A practical guide to all 12 Steam achievements in Golf Peaks (1 hidden). Covers completing all 10 Worlds, every bonus level, and a hidden secret level tucked into the credits. One achievement is hidden and its unlock condition is researched from a community 100% guide.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Golf Peaks has 12 Steam achievements and 1 is hidden. Ten are for completing each of the game's 10 Worlds, and one more for clearing every bonus level. The hidden achievement, 19th Hole, is for finding and completing a secret level tucked into the credits screen.",
                "The catalog marks it difficulty 2. Golf Peaks is a minimalist turn-based golf puzzle game; nothing here is missable, and the later Worlds (portals, splashes, bounces) ramp up the puzzle complexity gradually.",
                "Tip: after finishing the last level, scroll to the bottom of the credits screen and click the level icon there for the hidden 19th Hole achievement."
            ]
        },
        {
            "heading": "Worlds 1-6",
            "body": [
                "Completing World 1 through World 6, from first steps to the skies to portals.",
                "The achievements here: First Steps (Complete World 1); Taking It To The Skies (Complete World 2); Unstoppable (Complete World 3); Making A Splash (Complete World 4); Bouncing Off (Complete World 5); Thinking With Portals (Complete World 6)."
            ]
        },
        {
            "heading": "Worlds 7-10, Bonus & Secret Level",
            "body": [
                "Completing World 7, clearing every bonus level, the hidden secret level in the credits, and completing Worlds 8, 9 and 10.",
                "The achievements here: Grand Slam (Complete all bonus levels); Lost Peaks (Complete World 7); 19th Hole (After finishing the last level, go to the credits screen, scroll to the bottom, and click the hidden level icon there to play and complete a secret level.); Special Delivery (Complete World 8); Frostbite (Complete World 9); Dessert (Complete World 10)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Work through Worlds 1 through 10 in order, solving each turn-based golf puzzle.",
                "2. Clear every bonus level for Grand Slam.",
                "3. After the credits roll (or by opening them manually), scroll to the bottom and complete the hidden secret level for 19th Hole.",
                "Tip: nothing here is timed or missable - take your time working out each hole's exact shot sequence."
            ]
        }
    ]
};

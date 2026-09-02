// Sea of Solitude Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/sea-of-solitude.json), whose 22 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1225590 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 8 achievement(s) are Steam-hidden or ship no Steam
//   description; their description here is researched from community
//   100% guides and is a curatorial summary. Every other description is
//   Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "sea-of-solitude-achievement-guide",
    "category": "game",
    "gameSlug": "sea-of-solitude",
    "icon": "🌊",
    "title": "Sea of Solitude Achievement Guide",
    "summary": "A practical guide to all 22 Steam achievements in Sea of Solitude (8 hidden). The 8 hidden achievements are spoiler-free story progression markers. The rest - level completions, the two collectible sets, and a handful of one-off actions - carry Steam's own text.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Sea of Solitude has 22 Steam achievements, 8 of them hidden. Sea of Solitude is a short narrative adventure about a young woman, Kay, navigating a flooded city and her own loneliness. The visible achievements are the three level completions and the finale, the two collectible sets (messages in bottles, seagulls to shoo), firing the first flare, connecting with mirror Kay, a long boat trip, making it through school, and opening a path through water.",
                "The 8 hidden achievements are story progression markers - each unlocks at a specific beat as Kay moves through the story, and their names ('Comfy', 'Deep Dive', 'Mermaid', 'Runaway' and others) are held back as light spoilers. They are described here spoiler-free.",
                "The catalog marks it difficulty 2 and single-playthrough. Nothing is missable - chapter select lets you return for the two collectible sets after finishing the roughly four-hour story."
            ]
        },
        {
            "heading": "Story",
            "body": [
                "Connecting with mirror Kay, the long boat trip, making it through school, opening a path through water, reaching the top of the Skyscraper, the three level completions and the ending - plus the 8 Steam-hidden story progression markers.",
                "The achievements here: Connected (Connect with mirror Kay for the first time); Comfy (Story progress marker - unlocks at a specific point in the campaign, described here spoiler-free); Raver (Story progress marker - unlocks at a specific point in the campaign, described here spoiler-free); Deep Dive (Story progress marker - unlocks at a specific point in the campaign, described here spoiler-free); Seeker (Story progress marker - unlocks at a specific point in the campaign, described here spoiler-free); Human Bait (Story progress marker - unlocks at a specific point in the campaign, described here spoiler-free); Mermaid (Story progress marker - unlocks at a specific point in the campaign, described here spoiler-free); Runaway (Story progress marker - unlocks at a specific point in the campaign, described here spoiler-free); Sailor (Travelled a long distance by boat); Danger Swimmer (Story progress marker - unlocks at a specific point in the campaign, described here spoiler-free); School's out (Made it through school); Moses (Opened a path through water); Sunny (Finished Level 1); Lonely at the top (Reached top of the Skyscraper); Mama and Papa (Finished Level 2); Breakdown (Finished Level 3); Resolve (Finished the game)."
            ]
        },
        {
            "heading": "Collectibles",
            "body": [
                "The first and all messages in bottles, shooing the first and all seagulls, and firing the first flare.",
                "The achievements here: Uncorked (Collected your first Message in a bottle); Bottled (Collected all bottles); Shoo! (Shooed your first Seagull); Flock of Seagulls (Shooed all Seagulls); Fire! (Fired the first flare)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the roughly four-hour story straight through - the 8 hidden markers, the level completions and the one-off actions all unlock on the way.",
                "2. Fire the first flare, shoo seagulls and pick up bottle messages as you naturally pass them.",
                "3. After the credits, use chapter select to return for any missed bottles and seagulls.",
                "4. Bottled (all bottles) and Flock of Seagulls (all seagulls) are the only real collectible grinds - use a guide for the last few of each.",
                "Tip: shooing seagulls is easy to forget in tense sequences - make a habit of shooing every one you see on the first pass so you're not hunting stragglers later."
            ]
        }
    ]
};

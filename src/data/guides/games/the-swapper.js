// The Swapper Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/the-swapper.json), whose 10 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   231160 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "the-swapper-achievement-guide",
    "category": "game",
    "gameSlug": "the-swapper",
    "icon": "🌑",
    "title": "The Swapper Achievement Guide",
    "summary": "A practical guide to all 10 Steam achievements in The Swapper - none are hidden. Covers the ten story-progression achievements (I through X). None of the achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "The Swapper has 10 Steam achievements and none are hidden. They are simply story-progression markers numbered I through X - you earn them by reaching each point in the game.",
                "The catalog marks it a single short playthrough - the whole game is a few hours, and the achievements come automatically as you progress. Nothing is missable.",
                "Tip: just play the game to the end - a walkthrough is only useful if you get genuinely stuck on a clone-and-swap puzzle, not for any achievement."
            ]
        },
        {
            "heading": "Progression I-V",
            "body": [
                "The first five story-progression achievements (I through V), earned by reaching each point in the story.",
                "The achievements here: I (I); II (II); III (III); IV (IV); V (V)."
            ]
        },
        {
            "heading": "Progression VI-X",
            "body": [
                "The last five story-progression achievements (VI through X), earned by reaching each point in the story through to the ending.",
                "The achievements here: VI (VI); VII (VII); VIII (VIII); IX (IX); X (X)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the game from the start.",
                "2. Solve the clone-and-swapper puzzles to progress between areas.",
                "3. Continue to the ending - achievements I through X unlock as you go.",
                "4. Use a puzzle walkthrough only if you're stuck on a specific room.",
                "Tip: there is no missable or difficulty-gated achievement here - a single relaxed playthrough gets all ten."
            ]
        }
    ]
};

// OneShot Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/oneshot.json), whose 11 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   420530 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 1 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (PowerPyx / Game8 / PlayStationTrophies / TrueAchievements) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "oneshot-achievement-guide",
    "category": "game",
    "gameSlug": "oneshot",
    "icon": "💡",
    "title": "OneShot Achievement Guide",
    "summary": "A practical guide to all 11 Steam achievements in OneShot (1 hidden). Covers the main journey to restore the sun, a set of optional interactions and a sidequest, and the extended Solstice route. One achievement is hidden and its unlock condition is researched from community 100% guides.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "OneShot has 11 Steam achievements and 1 is hidden. The visible ten cover the main story and its optional touches - herding rams, reading the library books, eating pancakes, the 'We Ride at Dawn' ride, the Rebirth sidequest, a secret, and finishing the game. The single hidden one, 'Return', is for completing the Solstice route - the extended, meta-aware true content that opens up after the base ending.",
                "The catalog marks it difficulty 2. OneShot is a short, gentle puzzle-adventure with a famous fourth-wall-breaking structure (it reads and writes files on your computer). The base game is a single sitting; the Solstice route is a longer second journey with its own puzzles and a final choice.",
                "Tip: don't rush the base ending - once 'Return' (Solstice) begins it changes how the game treats your save, so make sure you have the base-game achievements (the sidequest, the books, the rams) before you finish the first route."
            ]
        },
        {
            "heading": "The Journey & the Solstice Route",
            "body": [
                "The optional interactions and story beats - a firm 'Don't do that!', an unpleasant shock, exhausting the bartering options, herding rams, eating pancakes, the fast ride, a secret, reading the library books, the Rebirth sidequest, finishing the game, and completing the extended Solstice route.",
                "The achievements here: Chaotic Evil (\"Don't do that!\"); Shock (Not fun.); Extreme Bartering (Exhausting all possibilities, are we?); Ram Whisperer (Herd rams with ease.); Pancakes (Favorite food.); We Ride at Dawn (Nyooooom); Secret (?????); Bookworm (Read books in the library.); Rebirth (A sidequest.); Oneshot (Back to its roots.); Return (Complete the Solstice route - the extended true content that opens up after the base ending.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the base game, doing the optional interactions (the rams, the books, pancakes, the fast ride) and the Rebirth sidequest along the way.",
                "2. Find the 'Secret' before finishing the first route.",
                "3. Complete the base ending for 'Oneshot'.",
                "4. Play through the Solstice route for 'Return'.",
                "Tip: OneShot reads and writes files outside the game and reacts to closing it - follow a spoiler-light guide if you want every achievement without triggering something you can't easily undo."
            ]
        }
    ]
};

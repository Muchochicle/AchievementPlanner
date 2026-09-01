// Creaks Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/creaks.json), whose 28 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   956030 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "creaks-achievement-guide",
    "category": "game",
    "gameSlug": "creaks",
    "icon": "🖼",
    "title": "Creaks Achievement Guide",
    "summary": "A practical guide to all 28 Steam achievements in Creaks - none are hidden. Covers finding and completing every interactive painting, discovering every secret room, and completing the story. None of the achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Creaks has 28 Steam achievements and none are hidden. Twelve are for finding and completing each interactive painting scattered through the house, plus one for collecting all of them. Fourteen more are for finding each of the game's secret rooms - starting with the first one you discover - and the last is for completing the story.",
                "The catalog marks it difficulty 2. Creaks is an atmospheric puzzle-platformer set in a strange underground house; nothing here is missable, and the paintings and secret rooms are optional detours from the main puzzle path.",
                "Tip: explore off the main path in every room you visit - both the paintings and the secret rooms are tucked away in corners you can easily walk past."
            ]
        },
        {
            "heading": "Interactive Paintings",
            "body": [
                "Finding your first painting, and finding and completing Home Sweet Home, Meadow Song, The Knight, Time for Tea, Dancer, Sunrise, Good Boy, Cat's Back, The Amazing Magician, The Exceptional Singer and Swimmers, then collecting all of them for Art Lover.",
                "The achievements here: Art Collector (Find a painting.); Home Sweet Home (Find and complete this interactive painting.); Meadow Song (Find and complete this interactive painting.); The Knight (Find and complete this interactive painting.); Time for Tea (Find and complete this interactive painting.); Dancer (Find and complete this interactive painting.); Sunrise (Find and complete this interactive painting.); Good Boy (Find and complete this interactive painting.); Cat’s Back (Find and complete this interactive painting.); The Amazing Magician (Find and complete this interactive painting.); The Exceptional Singer (Find and complete this interactive painting.); Swimmers (Find and complete this interactive painting.); Art Lover (Collect all paintings.)."
            ]
        },
        {
            "heading": "Secret Rooms & Story",
            "body": [
                "Finding your first secret room, then The Blue Library, Stalactites, Scrolls, Behind the Curtain, The Egyptian, Backstage, Behind the Trophies, Gazebo, Old Bones, Shed, Hurry Up!, Dark Corner and In the Deep, and completing the story with Through the Night.",
                "The achievements here: Secret Room Discovered! (Find the first secret room.); The Blue Library (Find this secret room.); Stalactites (Find this secret room.); Scrolls (Find this secret room.); Behind the Curtain (Find this secret room.); The Egyptian (Find this secret room.); Backstage (Find this secret room.); Behind the Trophies (Find this secret room.); Gazebo (Find this secret room.); Old Bones (Find this secret room.); Shed (Find this secret room.); Hurry Up! (Find this secret room.); Dark Corner (Find this secret room.); In the Deep (Find this secret room.); Through the Night (Complete the story.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Solve the main path puzzles, but detour into side rooms whenever you can.",
                "2. Find and complete every interactive painting you come across for the individual achievements and Art Lover.",
                "3. Search off the beaten path for secret rooms - they're each a one-off discovery, not a puzzle to solve.",
                "4. Finish the story for Through the Night.",
                "Tip: nothing is missable and levels can be revisited, so if you finish the story short a few paintings or secret rooms, go back and look for them."
            ]
        }
    ]
};

// Kine Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/kine.json), whose 13 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   824570 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "kine-achievement-guide",
    "category": "game",
    "gameSlug": "kine",
    "icon": "🎹",
    "title": "Kine Achievement Guide",
    "summary": "A practical guide to all 13 Steam achievements in Kine - none are hidden. Covers the story of three dancing machines from their first meeting to signing a record label, and completing every puzzle level. None of the achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Kine has 13 Steam achievements and none are hidden. They follow the story of three musical machines - finding Roo a new instrument, discovering Euler, an early puzzle mishap, getting the trio working together, Quat getting a job, taking the boat out, starting a dance floor, a low point where something is ruined, bringing all three to the Main Stage, signing a record label, finishing the game, and completing every level.",
                "The catalog marks it difficulty 2. Kine is a short, charming 3D puzzle game about three robots forming a band; nothing here is missable, and the achievements track the story and puzzle-completion side by side.",
                "Tip: just play through the puzzles in order - the story achievements and Virtuoso (all levels complete) come naturally from finishing the game."
            ]
        },
        {
            "heading": "The Band's Story",
            "body": [
                "Finding Roo a new instrument, discovering Euler, an early puzzle mishap, getting the trio working together, Quat getting a job, taking the boat out for the day, starting a dance floor, and a low point where something beautiful is ruined.",
                "The achievements here: This is Perfect! (Find Roo a new instrument.); Who's That? (Discover Euler); Okay, Maybe One Obstacle (You should have seen it coming.); No Machine Left Behind (They actually work well together.); Sometimes the Job Finds You (Get a job.); Fate (Take matters into your own...hands?); Don't Worry, They're Waterproof (Take the boat out for the day.); Turnt Up (Get things started on the dance floor); What's the Point (Ruin something beautiful.)."
            ]
        },
        {
            "heading": "The Big Time & Completion",
            "body": [
                "Bringing Quat, Roo and Euler to the Main Stage, signing with a record label, completing the game, and completing every level.",
                "The achievements here: We Have a Band! (Bring Quat, Roo, and Euler to the Main Stage.); The Big Time (Sign with a record label.); Thanks for Playing! (Complete the game.); Virtuoso (Complete all levels.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through the puzzles in story order, meeting Quat, Roo and Euler as their story unfolds.",
                "2. Solve each level to naturally trigger the story-beat achievements alongside your progress.",
                "3. Bring all three machines to the Main Stage and sign with a record label to approach the ending.",
                "4. Finish every level in the game for Virtuoso.",
                "Tip: this is a short, linear puzzle-story game - one full playthrough covers every achievement."
            ]
        }
    ]
};

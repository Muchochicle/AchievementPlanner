// Universe Sandbox (Legacy) Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/universe-sandbox-legacy.json), whose 16 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   72200 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "universe-sandbox-legacy-achievement-guide",
    "category": "game",
    "gameSlug": "universe-sandbox-legacy",
    "icon": "🌌",
    "title": "Universe Sandbox (Legacy) Achievement Guide",
    "summary": "A practical guide to all 16 Steam achievements in Universe Sandbox (Legacy) - none are hidden. Covers the startup-count and playtime milestones, and the tutorial, screenshot, code and physics-experiment achievements.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Universe Sandbox (Legacy) has 16 Steam achievements and none of them are hidden. Five are startup counts (launch the game 1, 10, 100, 1000, 10000 times), five are playtime (rule your universe for a minute, an hour, a day, a month, a year of simulated or real time), and the rest are one-offs: finish five tutorials, capture 100 screenshots, enter the Konami code, enter the Hitchhiker's \"42\" answer, crash the Earth into the Sun, and freeze the Earth by moving it away from the Sun.",
                "Nothing is missable - every counter is cumulative and the physics experiments can be set up in seconds from any sandbox.",
                "Tip: the startup-count achievements are the only real \"grind\" - just relaunch the game the required number of times (a batch file loop works), and everything else is a few minutes of play."
            ]
        },
        {
            "heading": "Startup & Playtime",
            "body": [
                "Launching the game 1, 10, 100, 1000 and 10000 times, and ruling your universe for a minute, an hour, a day, a month and a year.",
                "The achievements here: Startup the Universe (Start Universe Sandbox at least once); Startup Deka (Start Universe Sandbox 10^1 = 10 times); Startup Hecto (Start Universe Sandbox 10^2 = 100 times); Startup Kilo (Start Universe Sandbox 10^3 = 1000 times); Startup Too Many (Start Universe Sandbox 10^4 = 10000 times); One Minute (Rule over your universe for 60 seconds); One Hour (Rule over your universe for 60 minutes); One Day (Rule over your universe for 24 hours); One Month (Rule over your universe for 30.4 days); One Year (Rule over your universe for 12 months)."
            ]
        },
        {
            "heading": "Tutorials, Codes & Physics",
            "body": [
                "Entering the Konami code, finishing five tutorials, capturing 100 screenshots, crashing the Earth into the Sun, freezing the Earth by moving it away from the Sun, and entering the Hitchhiker's \"42\" answer.",
                "The achievements here: The Code (Some will know from their childhood; some were not born yet); Learner (Finish five tutorials); Photographer (Capture 100 screenshots); Heat Wave (Crash the Earth into the Sun); Snowball Earth (Freeze the Earth by moving it farther from the Sun); The Answer (Result of millions of years of computation)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Finish five tutorials and enter the Konami and \"42\" codes.",
                "2. Set up the two physics experiments - crash the Earth into the Sun, then move it far out to freeze it.",
                "3. Capture 100 screenshots (spam the screenshot key while a simulation runs).",
                "4. Leave a simulation running to accrue the playtime milestones (a minute up to a year).",
                "5. Relaunch the game the required number of times for the startup-count achievements - a scripted loop clears the 10000-launch one.",
                "Tip: the playtime achievements track real elapsed time in a running sim - start one and leave it, they will all unlock over a single long session."
            ]
        }
    ]
};

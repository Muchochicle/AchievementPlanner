// VVVVVV Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/vvvvvv.json), whose 19 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   70300 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "vvvvvv-achievement-guide",
    "category": "game",
    "gameSlug": "vvvvvv",
    "icon": "🔺",
    "title": "VVVVVV Achievement Guide",
    "summary": "A practical guide to all 19 Steam achievements in VVVVVV - none are hidden. Covers the story and death-count clears, the Super Gravitron and No Death Mode achievements, and the Time Trial V Ranks. None of the achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "VVVVVV has 19 Steam achievements and none are hidden. Two are for completing the game normally and in Flip Mode, four are death-count clears (finish with fewer than 500, 250, 100 and 50 deaths), one is 'Master of the universe' (finish in No Death Mode), six are Super Gravitron survival times (5 seconds up to 1 minute), and six are V Ranks on the Time Trials.",
                "The catalog marks it difficulty 4 - 'Master of the universe' (a full no-death run of a famously brutal precision platformer), the sub-50-deaths clear, the 1-minute Super Gravitron and the V-Rank Time Trials are all serious skill challenges. Nothing is missable: everything replays.",
                "Tip: learn the game on a normal run (the death count doesn't matter), then do the sub-death clears once the routes are memorised - the checkpoints are generous, so it's pattern practice, not endurance."
            ]
        },
        {
            "heading": "Story & Death Counts",
            "body": [
                "Completing the game (any trinkets), completing it in Flip Mode, and completing it with fewer than 500, 250, 100 and 50 deaths.",
                "The achievements here: Game Complete (Complete the game (any number of trinkets)); Flip Mode Complete (Complete the game in flip mode (any number of trinkets)); Less than 500 deaths (Complete the game with less than 500 deaths.); Less than 250 deaths (Complete the game with less than 250 deaths.); Less than 100 deaths (Complete the game with less than 100 deaths.); Less than 50 deaths (Complete the game with less than 50 deaths.)."
            ]
        },
        {
            "heading": "Super Gravitron & No Death Mode",
            "body": [
                "Lasting 5, 10, 15, 20 and 30 seconds and 1 minute on the Super Gravitron, and completing the game in No Death Mode ('Master of the universe').",
                "The achievements here: Super Gravitron: 5 Seconds (Last 5 seconds on the Super Gravitron.); Super Gravitron: 10 seconds (Last 10 seconds on the Super Gravitron.); Super Gravitron: 15 Seconds (Last 15 seconds on the Super Gravitron.); Super Gravitron: 20 seconds (Last 20 seconds on the Super Gravitron.); Super Gravitron: 30 seconds (Last 30 seconds on the Super Gravitron.); Super Gravitron: 1 minute (Last 1 minute on the Super Gravitron.); Master of the universe (Complete the game in no death mode.)."
            ]
        },
        {
            "heading": "Time Trial V Ranks",
            "body": [
                "Obtaining a V Rank on each Time Trial - Space Station 1, the Laboratory, The Tower, Space Station 2, the Warp Zone and the Final Level.",
                "The achievements here: Space Station 1 Mastered (Obtain a V Rank in this Time Trial.); Laboratory Mastered (Obtain a V Rank in this Time Trial.); The Tower Mastered (Obtain a V Rank in this Time Trial.); Space Station 2 Mastered (Obtain a V Rank in this Time Trial.); Warp Zone Mastered (Obtain a V Rank in this Time Trial.); Final Level Mastered (Obtain a V Rank in this Time Trial.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play a first run to complete the game and learn the layouts.",
                "2. Replay for the sub-500, sub-250, sub-100 and sub-50 death clears.",
                "3. Do a Flip Mode run.",
                "4. Grind the Super Gravitron up to 1 minute and the Time Trials up to V Rank.",
                "5. Do a full No Death Mode run for 'Master of the universe'.",
                "Tip: the Super Gravitron is unlocked from the secret lab - practise it in short bursts; the 1-minute achievement is almost entirely about learning to read the alternating gravity flips calmly."
            ]
        }
    ]
};

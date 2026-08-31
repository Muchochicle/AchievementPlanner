// Machinarium Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/machinarium.json), whose 12 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   40700 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "machinarium-achievement-guide",
    "category": "game",
    "gameSlug": "machinarium",
    "icon": "🤖",
    "title": "Machinarium Achievement Guide",
    "summary": "A practical guide to all 12 Steam achievements in Machinarium - none are hidden. Covers the scrapyard escape, the puzzles around the city, and the endgame sequence. None of the achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Machinarium has 12 Steam achievements and none are hidden. They follow the story almost exactly - escaping the scrapyard, re-entering the city, freeing yourself and your jail mates, then a series of set-piece puzzles (bringing the dog to the lady, winning the tic-tac-toe game, helping the musicians, winning all the arcade console games, flooding the Blackhats, disabling the bomb, repairing the brain, rescuing Berta) and finally escaping Machinarium.",
                "The catalog marks it an easy single playthrough. The only caution is that a few are tied to optional mini-games ('Board Game Master', 'Videogamer') that are easy to walk past - do them when you reach them. There is no chapter select, so a missed optional puzzle means another playthrough.",
                "Tip: play it blind for the atmosphere, but keep a walkthrough open for the two arcade mini-games and the tic-tac-toe board so you don't leave the area without them."
            ]
        },
        {
            "heading": "Escaping the Scrapyard",
            "body": [
                "Escaping the scrapyard ('Survivor'), entering Machinarium ('Back in Town'), and freeing yourself and your jail mates ('Free Robot').",
                "The achievements here: SURVIVOR (Escape the scrapyard); BACK IN TOWN (Enter Machinarium); FREE ROBOT (Free yourself and jail mates)."
            ]
        },
        {
            "heading": "Puzzles Around the City",
            "body": [
                "Bringing the dog to the lady, winning the tic-tac-toe game, helping the musicians, and winning all the arcade console games.",
                "The achievements here: PET CATCHER (Bring the dog to the lady); BOARD GAME MASTER (Win the tic-tac-toe game); MUSIC LOVER (Help the musicians); VIDEOGAMER (Win all console games)."
            ]
        },
        {
            "heading": "The Endgame",
            "body": [
                "Flooding the Blackhats, disabling the bomb, repairing the brain, rescuing Berta, and escaping Machinarium.",
                "The achievements here: PLUMBER (Flood the Blackhats); DEACTIVATOR (Disable the bomb); DEBUGGER (Repair the brain); RESCUER (Rescue Berta); ESCAPER (Escape Machinarium)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Work through the story - the main-path achievements ('Survivor', 'Back in Town', 'Free Robot', and later the endgame five) come naturally.",
                "2. When you reach the bar, win the tic-tac-toe game against the robot for 'Board Game Master'.",
                "3. Play and win both arcade cabinets for 'Videogamer'.",
                "4. Complete the dog puzzle and the musicians puzzle when those areas open.",
                "5. Finish the bomb, brain and Berta sequences and walk out for 'Escaper'.",
                "Tip: the hint book inside the game (the key-lock mini-game unlocks a full walkthrough) counts for nothing achievement-wise but is the fastest way past a stuck puzzle without spoiling the art."
            ]
        }
    ]
};

// Human Resource Machine Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/human-resource-machine.json), whose 16 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   375820 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None are hidden; every one ships a real, official Steam description,
//   quoted verbatim below.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "human-resource-machine-achievement-guide",
    "category": "game",
    "gameSlug": "human-resource-machine",
    "icon": "💼",
    "title": "Human Resource Machine Achievement Guide",
    "summary": "A practical guide to all 16 Steam achievements in Human Resource Machine - none are hidden. Covers the optimization challenges, career-story milestones, and deliberately breaking your own programs.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Human Resource Machine has 16 Steam achievements and none are hidden. As a programming puzzle game dressed up as office satire, the list covers the optional Size and Speed optimization challenges per color path (Green/Blue/Orange), a couple of joke over-engineering achievements for deliberately using far more steps or commands than needed, the six story cutscene milestones that mark your in-game career progression, three \"Glorious Failure\" achievements for specific ways your program can crash, and finishing every level.",
                "Nothing is missable - every level stays replayable from the level select screen, so any optimization award or Glorious Failure you skipped the first time can be picked up on a return visit. The genuine long pole is the optimization awards themselves, since later levels' Size and Speed challenges need genuinely clever, minimal solutions rather than a first-pass \"does it work\" program.",
                "Tip: solve every level twice if you are chasing full completion - once quickly just to see the solution work, and once specifically optimizing for the Speed or Size challenge with what you learned from the first pass, since trying to write a perfectly optimized program on your very first attempt at a level is much harder than iterating."
            ]
        },
        {
            "heading": "Optimization & Challenges",
            "body": [
                "The Green, Blue, and Orange path Optimization Awards, listening to all worker thoughts in a level (Social Engineer), and the two joke over-engineering achievements for using at least 4x the required steps or commands.",
                "The achievements here: Green Optimization Award (green path fully optimized); Blue Optimization Award (blue path fully optimized); Orange Optimization Award (orange path fully optimized); Social Engineer (ask all bosses to tell you more); Queen of Inefficiency (solve any puzzle with at least 4x the number of steps required by the speed challenge); King of Verbosity (solve any puzzle with at least 4x the number of commands required by the size challenge)."
            ]
        },
        {
            "heading": "Career Milestones",
            "body": [
                "The six story cutscene milestones that mark your character's rise through the company, from \"coffee time\" through \"end program.\"",
                "The achievements here: Career Milestone 1 (coffee time); Career Milestone 2 (employee morale insertion); Career Milestone 3 (sabbatical beach); Career Milestone 4 (midnight petroleum); Career Milestone 5 (where's carol?); Career Milestone 6 (end program)."
            ]
        },
        {
            "heading": "Glorious Failures & Completion",
            "body": [
                "The three deliberate-crash achievements - an Overflow, an Out of Bounds read/write, and a non-robust solution that only handles the shown test cases - plus completing every level in the game.",
                "The achievements here: Glorious Failure: Overflow (attempt to generate a number that is too big to store in green boxes); Glorious Failure: Out of Bounds (attempt to read or write with a tile on the floor that does not exist); Glorious Failure: Solution Not Robust (solve a puzzle for a specific set of inputs, while still failing with other possible inputs); Excellent Instruction Follower (all levels complete. congratulations.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through the game's levels in order, watching every cutscene for the six Career Milestones and listening to all worker thoughts in a level for Social Engineer.",
                "2. On levels you find easy, deliberately try the joke over-engineering achievements: solve a puzzle with 4x the required commands (King of Verbosity) or 4x the required steps (Queen of Inefficiency).",
                "3. Trigger the three Glorious Failure achievements deliberately: generate a number too big for a green box (Overflow), read or write to a floor tile that does not exist (Out of Bounds), and submit a solution that only works for the specific test inputs shown (Solution Not Robust).",
                "4. Go back through completed levels and chase the Green, Blue, and Orange Optimization Awards by rewriting your solutions for size or speed.",
                "5. Finish every level for Excellent Instruction Follower.",
                "Tip: the Glorious Failure achievements are genuinely meant to be triggered on purpose - Overflow and Out of Bounds in particular are easiest on an early, simple level where you can quickly write a deliberately broken one-line program just to trigger the failure state."
            ]
        }
    ]
};

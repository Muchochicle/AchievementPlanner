// FEZ Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/fez.json), whose 12 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   224760 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "fez-achievement-guide",
    "category": "game",
    "gameSlug": "fez",
    "icon": "🧢",
    "title": "FEZ Achievement Guide",
    "summary": "A practical guide to all 12 Steam achievements in FEZ - none are hidden. Covers the story and cube milestones, the four artifacts and the anti-cubes, and the warp gates and code puzzles. None of the achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "FEZ has 12 Steam achievements and none are hidden. Four track story and cube progress ('Get a cube', 'Kill screen' for reaching the end, 'Sum total' for every collectible and 'Hexahedronaut' for all 32 Golden Cubes and 32 Anti-Cubes), four are for finding the artifacts (the Tome, the Skull, the Writing Cube and the Counting Cube), one is your first Anti-Cube, and three are the warp gates, 'Cryptographer' for breaking the code, and 'Achievement unlocked' for the input sequence RTRTLTRTRTLTLTLT.",
                "The catalog marks it difficulty 4. The plain ending is gentle, but 'Hexahedronaut' and 'Sum total' need every Anti-Cube, and those come from FEZ's notoriously cryptic puzzles - the tuning-fork rooms, the Black Monolith code, the number and alphabet systems - most players use a written guide or the community's decoded ciphers for the last handful.",
                "Tip: do a relaxed first pass to reach the end and unlock New Game+ (first-person mode and the map), then use NG+ to hunt the remaining cubes and anti-cubes with the puzzle solutions to hand."
            ]
        },
        {
            "heading": "Story & Cubes",
            "body": [
                "Finding your first cube shard, reaching the end ('Kill screen'), collecting every collectible ('Sum total'), and gathering all 32 Golden Cubes and 32 Anti-Cubes ('Hexahedronaut').",
                "The achievements here: Sum total (Find ALL collectibles.); Get a cube (Find your very first cube shard.); Kill screen (Get to the end.); Hexahedronaut (Collect all 32 Golden Cubes and 32 Anti-Cubes.)."
            ]
        },
        {
            "heading": "Artifacts & Anti-Cubes",
            "body": [
                "Finding the Tome, Skull, Writing Cube and Counting Cube artifacts, and unlocking your first Anti-Cube.",
                "The achievements here: Haikus not epics (Find the Tome artifact.); Phrenologist (Find the Skull artifact.); Mightier than the sword (Find the Writing Cube artifact.); A numbers game (Find the Counting Cube artifact.); Equal and opposite (Find an Anti-Cube.)."
            ]
        },
        {
            "heading": "Warp Gates & Codes",
            "body": [
                "Reactivating all 5 warp gates, breaking the code ('Cryptographer'), and entering the RTRTLTRTRTLTLTLT sequence ('Achievement unlocked').",
                "The achievements here: Warp zone (Reactivate all 5 warp gates.); Cryptographer (Break the code. ); Achievement unlocked (RTRTLTRTRTLTLTLT)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through to reach the end ('Kill screen', 'Get a cube' along the way) - this unlocks New Game+.",
                "2. In NG+ use the map and first-person view to mop up every Golden Cube.",
                "3. Work the puzzle rooms for Anti-Cubes: tuning forks, the owl statues, the Black Monolith, the number/alphabet ciphers.",
                "4. Find the four artifacts (Tome, Skull, Writing Cube, Counting Cube) and reactivate all 5 warp gates.",
                "5. 'Hexahedronaut' + 'Sum total' unlock once all 64 cubes and every collectible are in.",
                "Tip: the alphabet and number systems in FEZ are consistent - decode them once (the classroom room teaches both) and every later cipher, including 'Cryptographer', becomes readable."
            ]
        }
    ]
};

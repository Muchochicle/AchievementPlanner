// Sonic CD Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/sonic-cd.json), whose 12 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   200940 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "sonic-cd-achievement-guide",
    "category": "game",
    "gameSlug": "sonic-cd",
    "icon": "🦔",
    "title": "Sonic CD Achievement Guide",
    "summary": "A practical guide to all 12 Steam achievements in Sonic CD - none are hidden. Covers the time-travel and stage feats, the collectible and boss achievements, and the good-ending and Time Attack completions.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Sonic CD has 12 Steam achievements and none of them are hidden. They cover the time-travel mechanic (travel through time, complete a zone in the Good Future, save the planet by destroying the robot teleporters and Metal Sonic holograms in the past), stage feats (the upper Signpost in Collision Chaos, 200 Rings, the Wacky Workbench angel statue, a no-hit Metal Sonic race), and completion (finish the game, all Time Stones, destroy Eggman's final machine, an under-25-minute Time Attack, and the Amy hug).",
                "Nothing is missable - stages can be replayed and both the collectible (Time Stones) and the good-ending (destroy every past machine) routes can be done across replays.",
                "Tip: for the best ending, go to the past in every act and destroy the Robot Generator and the Metal Sonic hologram - do this in all seven zones and you save the planet without needing every Time Stone."
            ]
        },
        {
            "heading": "Time Travel & Stage Feats",
            "body": [
                "Travelling through time, the Amy hug, completing a zone in the Good Future, the upper Signpost in Collision Chaos Zone 2, 200 Rings, and the Wacky Workbench angel statue.",
                "The achievements here: 88 Miles Per Hour (Travel through time); Just one hug is enough (Get a hug from Amy); Paradise Found (Complete a zone in the Good Future); Take the High Road (Pass the upper Signpost in Collision Chaos Zone 2); King of the Rings (Collect 200 Rings); Statue Saviour (Find the angel statue in Wacky Workbench)."
            ]
        },
        {
            "heading": "Completion & Mastery",
            "body": [
                "A no-hit Metal Sonic race, finishing the game, collecting all Time Stones, destroying Eggman's final machine, an under-25-minute Time Attack run, and destroying every robot teleporter and Metal Sonic hologram in the past.",
                "The achievements here: Heavy Metal (Defeat Metal Sonic without getting hurt); All Stages Clear! (Finish the game); Treasure Hunter (Collect all the Time Stones); Dr. Eggman Got Served (Destroy Dr. Eggman's final machine); Just in Time! (Complete the Time Attack mode in under 25 minutes); Saviour of the Planet (Destroy all the robot teleporters and Metal Sonic holograms in the past)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through the game, using the time-travel signposts to trigger \"88 Miles Per Hour\" and reach a Good Future.",
                "2. In every zone, go to the past and destroy the Robot Generator and Metal Sonic hologram - this secures the good ending and \"Saviour of the Planet\".",
                "3. Beat Metal Sonic without getting hit for \"Heavy Metal\".",
                "4. Collect 200 Rings, grab the Wacky Workbench statue and the Collision Chaos upper route.",
                "5. Do a Time Attack run under 25 minutes, and mop up the Time Stones via the Special Stages if you want \"Treasure Hunter\".",
                "Tip: destroying every past machine is the reliable route to the good ending - the Time Stones (Special Stages) are only needed for \"Treasure Hunter\" itself."
            ]
        }
    ]
};

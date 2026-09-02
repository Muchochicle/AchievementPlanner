// ISLANDERS: New Shores Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/islanders-new-shores.json), whose 62 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   2368930 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 0 achievement(s) are Steam-hidden or ship no Steam
//   description; their description here is researched from community
//   100% guides and is a curatorial summary. Every other description is
//   Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "islanders-new-shores-achievement-guide",
    "category": "game",
    "gameSlug": "islanders-new-shores",
    "icon": "🏝️",
    "title": "ISLANDERS: New Shores Achievement Guide",
    "summary": "A practical guide to all 62 Steam achievements in ISLANDERS: New Shores (0 hidden). Every achievement carries Steam's own text - the score and building milestones, the placement-scoring feats for each building type, and the long list of named Challenge targets.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "ISLANDERS: New Shores has 62 Steam achievements, none hidden. It is a minimalist, zen city-builder about scoring points by placing buildings well next to the right neighbours and terrain, then hopping to a new island. The achievements cover the high-score milestones (5,000 to 60,000), the building counts (60 / 120 / 240 on one island), exploring 5 / 10 / 15 islands in a run, the placement-scoring feats (35 / 75 / 150 points from one building, and building-specific ones for Fishers, Shamans, Pyres, Aviaries, Guild Halls, Cliff Houses, Lumberjacks and more), the Boon and Ley Line achievements, and a long list of named Challenge score targets.",
                "There are no hidden achievements - the list above is the whole set.",
                "The catalog marks it difficulty 2 and single-playthrough. Nothing is missable; runs and Challenges are all replayable."
            ]
        },
        {
            "heading": "Scores & Building",
            "body": [
                "The high-score milestones, the building counts (60 / 120 / 240), exploring 5 / 10 / 15 islands in a run, exact-score and low-building-bar runs, the first-island score target, and 'Scrupulous' (2,000 points with no negative scoring).",
                "The achievements here: Newcomer (Reach the end of your journey for the first time.); Mayor (Reach a high score of 5,000 points.); Ruler (Reach a high score of 15,000 points.); Monarch (Reach a high score of 30,000 points.); Deity (Reach a high score of 60,000 points.); Builder (Build 60 buildings on the same island.); Constructor (Build 120 buildings on the same island.); Architect (Build 240 buildings on the same island.); Traveler (Explore 5 islands in the same run.); Adventurer (Explore 10 islands in the same run.); Explorer (Explore 15 islands in the same run.); Puzzle Solver (Reach a score of exactly 100 points.); Nice Spot (Earn at least 35 points from one building.); Brilliant Position (Earn at least 75 points from one building.); Perfectly Placed (Earn at least 150 points from one building.); Slow Burn (Reach a score of 1,000 without ever having more than 6 buildings in your building bar.); Islander (Reach a score of 1,400 on the first island.); Scrupulous (Earn at least 2,000 points without scoring negatively once.)."
            ]
        },
        {
            "heading": "Placement Feats",
            "body": [
                "The building-specific scoring feats (Fisher with 10 Fish, Shaman with all rays scoring, connected Pyres, Aviary base 50, Guild Hall with 10 buildings, Cliff House with 20 others, Lumberjack with 15 Trees, City Center near two others), the Boon and Ley Line achievements, Walls, Sacred Rocks, and the tree/flower-friendly clear.",
                "The achievements here: Tall Tale (Place a Fisher that earns points with at least 10 Fish.); Blessed (Use 8 Boons on the same island.); Tactician (Earn at least 125 points from a single Level Up Boon.); Spectacular (Earn 3 Sealed Boons from a single Ley Line.); Cozy (Place a Shaman where all rays earn points.); Interconnected (Place a Pyre that has positive scoring connections to at least two other Pyres.); Fluttering (Place an Aviary that has a base score of at least 50.); Guild Master (Place a Guild Hall that scores positively with at least 10 buildings.); Fortunate (Place a Fortune Teller with a base score of at least 60.); Crammed (Place a Cliff House that scores with at least 20 other Cliff Houses.); Forested (Place a Lumberjack that scores with at least 15 Trees.); Renovating (Demolish a building that removes at least 40 points.); Steadfast (Reach a draw limit of two buildings on one island.); Planner (Place three buildings in a row scoring more than 60 points each.); Coordinated (Destroy 2 Sacred Rocks on an island at the same time.); Respectful (Beat an island without hiding any Trees or Flowers.); Frugal (Have 5 unopened Boon packs on one island.); Protective (Create a closed loop of at least 3 Walls.); Odyssey (Complete 3 islands with special properties in a single run.); Central (Place a City Center in the vicinity of two other City Centers.)."
            ]
        },
        {
            "heading": "Challenges",
            "body": [
                "The named Challenge score targets (A Short Journey, No time to dilly-dally, Temple Trouble, Metropolis, Manufactory, Vanishing, Ghost Whisperer, Can't Stop Won't Stop, Memory Lane and the rest) and the 'complete N challenges' milestones.",
                "The achievements here: A Short Journey (Earn at least 10,000 points in the \"A Short Journey\" Challenge.); No time to dilly-dally (Earn at least 15,000 points in the \"No time to dilly-dally\" Challenge.); Temple Trouble (Earn at least 900 points in the \"Temple Trouble\" Challenge.); Fully Stacked (Earn at least 4,000 points in the \"Fully Stacked\" Challenge.); Fast Traveler (Reach island 7 in the \"No time to dilly-dally\" Challenge.); A New Challenger (Complete 4 challenges.); Metropolis (Earn at least 11,000 points in the \"Metropolis\" Challenge.); Manufactory (Earn at least 40,000 points in the \"Manufactory\" Challenge.); Mt. Roberson (Earn at least 14,000 points in the \"Mt. Roberson\" Challenge.); Vanishing (Earn at least 14,000 points in the \"Vanishing\" Challenge.); Now you see me (Have at least 400 points when the first building vanishes in the \"Vanishing\" Challenge.); Novice Challenger (Complete 8 challenges.); Ghost Whisperer (Earn at least 8,000 points in the \"Ghost Whisperer\" Challenge.); Clairvoyage (Earn at least 850 points in the \"Clairvoyage\" Challenge.); Can't Stop Won't Stop (Earn at least 200,000 points in the \"Can't Stop Won't Stop\" Challenge.); Industrious (Earn at least 3,100 points in the \"Industrious\" Challenge.); Couldn't Stop (Earn at least 5,000 points on the first island in the \"Can't Stop Won't Stop\" Challenge.); Intermediate Challenger (Complete 12 challenges.); Halfway There (Earn at least 125,000 points in the \"Halfway There\" Challenge.); Memory Lane (Earn at least 75,000 points in the \"Memory Lane\" Challenge.); Can't Have It All (Earn at least 30,000 points in the \"Can't Have It All\" Challenge.); Chilling Gifts (Earn at least 10,000 points in the \"Chilling Gifts\" Challenge.); Traditional Traveler (Reach island 12 in the \"Memory Lane\" Challenge.); Professional  Challenger (Complete 16 challenges.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play standard runs, chasing higher high scores (5,000 up to 60,000) and building 240 on one island; explore 15 islands in a run when you can afford to.",
                "2. On any run, hit the placement feats deliberately - hold a building until you can drop it next to the right cluster for the 150-point placement, the Fisher-with-10-Fish, the connected Pyres, and so on.",
                "3. Do the Boon, Ley Line, Wall and Sacred Rock achievements as the mechanics come up.",
                "4. Work through the Challenges from easiest, hitting each named score target and the 'complete N challenges' milestones (4, 8, 12, 16).",
                "Tip: most placement feats want you to build the scoring cluster first and place the target building last - keep a Fisher, Shaman or Guild Hall in your bar unspent while you lay down its neighbours, then drop it into the perfect spot."
            ]
        }
    ]
};

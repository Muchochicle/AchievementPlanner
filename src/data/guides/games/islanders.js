// ISLANDERS Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/islanders.json), whose 38 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1046030 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "islanders-achievement-guide",
    "category": "game",
    "gameSlug": "islanders",
    "icon": "🏝️",
    "title": "ISLANDERS Achievement Guide",
    "summary": "A practical guide to all 38 Steam achievements in ISLANDERS - none are hidden. Covers the lifetime score, building and island-exploration totals, the per-match score and speedrun feats, the placement puzzles, and the Highscore-mode and Sandbox-mode challenges.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "ISLANDERS has 38 Steam achievements and none of them are hidden. Some are lifetime totals that accumulate across all your play (2,000 up to 30,000 points earned, 100/500/1000 buildings, exploring 10/20/30 islands). The rest are single-run feats: hitting score thresholds in one match, reaching specific islands (and reaching them fast for the speedrun achievements), precise placement puzzles (exactly 100 points after a building, 25/50/75 points from a single building), and mode-specific challenges in Highscore Mode and Sandbox Mode (three Shamans in one night, all building types on one island, the Island Archive).",
                "Nothing is missable - islands and modes can be replayed freely, and the lifetime totals only ever go up. The hardest achievements are the deep single-run ones: Conqueror (reach the 21st island in a single game), Strategist (15,000 points before the 11th island), and the tight placement feats.",
                "Tip: the score-total achievements (King of the World, 30,000 points) are lifetime, so they finish on their own if you keep playing - focus your deliberate effort on the single-run feats like Conqueror and Strategist, which require an efficient, high-scoring build order rather than raw hours."
            ]
        },
        {
            "heading": "Progression & Score Milestones",
            "body": [
                "Finishing your first game, the lifetime score totals (2,000 / 10,000 / 20,000), the lifetime building totals (100 / 500 / 1000), exploring 10 / 20 / 30 islands, per-match score thresholds (500 / 1,500 / 3,000), the two speedrun achievements (reach island 2 in 90 seconds, island 3 in 4 minutes), and reaching islands 2, 3 and 4.",
                "The achievements here: Newcomer (Finish your first game.); Mayor (Earn 2,000 points.); King (Earn 10,000 points.); Emperor (Earn 20,000 points.); Builder (Build 100 buildings.); Constructor (Build 500 buildings.); Architect (Build 1000 buildings.); Traveler (Explore 10 islands.); Adventurer (Explore 20 islands.); Explorer (Explore 30 islands.); Advanced (Score 500 points in one match.); Professional (Score 1,500 points in one match.); Expert (Score 3,000 points in one match.); Sprinter (Reach the 2nd island within 90 seconds.); Athlete (Reach the 3rd island within 4 minutes.); Settlement (Reach the 2nd island.); Colony (Reach the 3rd island.); Empire (Reach the 4th island.)."
            ]
        },
        {
            "heading": "Placement Feats & Deep Runs",
            "body": [
                "The precise placement puzzles (exactly 100 points after a building, losing 100+ points in a match, earning 25 / 50 / 75 points from one building), the inventory feats (12+ buildings held, a score of 1,000 with never more than 6 buildings held), a score of 800 on the first island, reaching the 10th and 21st islands, the Photo Mode cosmetics, and a 10,000-point match.",
                "The achievements here: Puzzle Solver (Have exactly 100 points after placing a building.); Investor (Lose a total of at least 100 points in one match.); Nice Spot (Earn 25 points from one building.); Brilliant Position (Earn 50 points from one building.); Perfectly Placed (Earn 75 points from one building.); Wealthy (Have at least 12 buildings in your inventory at once.); Slow Burn (Reach a score of 1,000 without ever having more than 6 buildings in your inventory. (Individual buildings count!) Don't click the plus unless you have to.); Islander (Reach a score of 800 on the first island.); Conqueror (Reach the 21st Island. ); Master (Reach the 10th Island.); Photographer (Apply a filter, a frame and a sticker by using the Photo Mode. ); Legend ( Score 10,000 points in one match.)."
            ]
        },
        {
            "heading": "Highscore & Sandbox Challenges",
            "body": [
                "The Island Archive save, Strategist (15,000 points before the 11th island), the Sandbox Mason achievement, the Highscore Mode feats (all building types on one island, three Shamans in one night, four towers with no point loss between them), 30,000 lifetime points, and a 2,000-point snowy island.",
                "The achievements here: Guardian (Save an Island with at least 10 buildings using the Island Archive.); Strategist ( Reach a score of 15,000 points before reaching the 11th Island.); Mason (Place 200 buildings with at least 10 different types in Sandbox Mode.); Versatile (Build all type of buildings on one island in Highscore Mode.); In the Darkness (Build 3 Shamans during the same night in Highscore Mode); King of the World (Earn 30,000 points); Winter is Coming (Score 2,000 points on a Snowy Island); Lord of the Towers ( Build 4 towers on an island without losing points between them in Highscore Mode)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play several full games normally - this quickly clears the lifetime totals (points, buildings, islands explored) and the basic per-match score achievements.",
                "2. Do the placement puzzles deliberately on any island: hover a building until it shows exactly the points you need (100 total, or 25/50/75 from that one building) before placing it.",
                "3. Do the speedrun achievements on an easy starting island by rushing high-value placements to reach islands 2 and 3 fast.",
                "4. Attempt the deep single-run feats - Conqueror (21st island), Strategist (15,000 before island 11), and Slow Burn (1,000 points never holding more than 6 buildings) - each needs a tight, efficient build order.",
                "5. Do the Highscore Mode and Sandbox Mode challenges (all building types on one island, three Shamans in one night, four towers with no point loss, the Sandbox Mason placement).",
                "Tip: for Conqueror and Strategist, chaining building bonuses is everything - place each new building where it touches the most existing ones for maximum points, bank buildings for combos rather than placing immediately, and only take the plus (a fresh building pack) when you truly cannot place anything for positive points."
            ]
        }
    ]
};

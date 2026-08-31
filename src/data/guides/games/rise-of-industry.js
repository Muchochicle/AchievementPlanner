// Rise of Industry Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/rise-of-industry.json), whose 27 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   671440 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "rise-of-industry-achievement-guide",
    "category": "game",
    "gameSlug": "rise-of-industry",
    "icon": "🏭",
    "title": "Rise of Industry Achievement Guide",
    "summary": "A practical guide to all 27 Steam achievements in Rise of Industry - none are hidden. Covers the getting-started and building achievements, and the production, logistics and 2130 DLC achievements. None of the achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Rise of Industry has 27 Steam achievements and none are hidden. About half are getting-started and building milestones that accumulate across all playthroughs (1,000 buildings placed, every building type placed, 50 contracts, a 25-tile bridge and tunnel, first terraforming, 50 tree tiles demolished), and the rest are economy and logistics goals (a billion dollars, $1M net income in a month, a Tier 3 product sold, bankruptcy, the car prototype, 1,000 products, 25,000 units transported, zeppelin / train / boat trade routes, a 500-tile truck route) plus three [2130] DLC scenario achievements.",
                "The catalog marks it difficulty 3. Most milestones come with steady play across a couple of maps; 'Billionaire' and the [2130] DLC clears are the longest.",
                "Tip: play one long, profitable map for the money and product milestones, set up one of each trade-route type, and do the [2130] DLC scenario separately."
            ]
        },
        {
            "heading": "Getting Started & Building",
            "body": [
                "Completing the tutorial, placing 1,000 buildings and every building type across all playthroughs, 10 buildings near one warehouse, 50 contracts, a billion dollars in one playthrough, your first production/logistic building, a 25-tile bridge and tunnel, first terraforming, 5 minutes in Free-Cam, selling to the State, a 25M+ loan, and 50 tree tiles demolished.",
                "The achievements here: Well educated (Complete the Tutorial); Hard working (Place 1,000 Buildings across all playthoughs); Master Builder (Place every Building once across all playthoughs); City Planner (Place 10 Buildings within range of a single Warehouse); Freelancer (Complete 50 Contracts across all playthoughs); Billionaire (Raise $1,000,000,000 in one playthrough); Entrepreneur (Place your first Production or Logistic building); Engineer (Build a Bridge of at least 25 tiles long); Excavator (Build a Tunnel of at least 25 tiles long); Landscaper (Use Terraforming for the first time); Director (Spend 5 minutes in the Free-Cam mode); Exporter (Sell to the State); Loan Ranger (Take out a Loan that is over 25m); Deforester (Demolish 50 Tiles of Trees)."
            ]
        },
        {
            "heading": "Production, Logistics & 2130 DLC",
            "body": [
                "$1M net income in a month, selling a Tier 3 product, losing through bankruptcy, the car prototype, 1,000 products generated, 25,000 units transported, zeppelin, train and boat trade routes, a 500-tile truck route, and the three [2130] DLC achievements (clean a region of pollution, lose all settlements to pollution, 1,000 Steel from a map in one game).",
                "The achievements here: Massive Gains (Make 1 million dollars in net income in a month.); Salesman (Sell a Tier 3 Product); Penniless (Lose the game through Bankruptcy); Vroom Vroom (Completed the Car Prototype); Apprentice Manufacturer (Generate 1,000 Products across all playthoughs); Big Hauling (Transport 25,000 Units of Products across all playthoughs); High Flyer (Setup a Zeppelin Trade Route); Railwayman (Setup a Train Trade Route); Captain (Setup a Boat Trade Route); I would drive 500 tiles... (Set a Dispatch Truck to travel over 500 tiles.); [2130] Nature Lover (Completely clean a Region of Pollution); [2130] No Quarter Given.  (Lose all Settlements to Pollution); [2130] Dumpster Diving (Collect 1000 units of Steel from a map in a single game. )."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Do the tutorial, then start a long map and build steadily - buildings, contracts, products and units all accumulate across playthroughs.",
                "2. Set up one zeppelin, one train and one boat trade route, and a 500-tile truck dispatch.",
                "3. Build a bridge and tunnel of 25+ tiles, use terraforming, and take a big loan for those one-offs.",
                "4. Grow one map to a billion dollars and $1M/month net income.",
                "5. Play the [2130] DLC scenario for its three achievements.",
                "Tip: 'Penniless' (lose through bankruptcy) is easiest done deliberately on a throwaway save - take huge loans, build nothing productive, and let the interest sink you."
            ]
        }
    ]
};

// Supermarket Simulator Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/supermarket-simulator.json), whose 15 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   2670630 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "supermarket-simulator-achievement-guide",
    "category": "game",
    "gameSlug": "supermarket-simulator",
    "icon": "🛒",
    "title": "Supermarket Simulator Achievement Guide",
    "summary": "A practical guide to all 15 Steam achievements in Supermarket Simulator - none are hidden. None of the achievements are hidden. Covers running checkouts by hand, buying every store expansion, decorating (walls, floors, the storefront and name), owning product licences and category signs, hiring restockers and cashiers, and taking out and repaying a bank loan.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Supermarket Simulator has 15 Steam achievements and none are hidden. They all come from normal play: completing 50 and then 100 checkouts yourself, purchasing every store expansion, painting 30 walls and replacing 30 floor tiles, changing the door position, the storefront style and the store name, owning 4 product licences, placing 3 category signs, playing a song from the music player, hiring 4 restockers and 4 cashiers, and taking a bank loan and then paying it off in full.",
                "The catalog marks it difficulty 2. Nothing here is difficult or missable - it is a checklist you complete over a few hours of running a growing shop. The only slight wait is 'The greatest!' (all expansions) and 'Finally' (a fully repaid loan), which need a decent cash flow.",
                "Tip: take the bank loan early ('Economy 101') and use it to buy expansions and stock faster - then paying it back for 'Finally' comes naturally as the bigger store starts turning a profit."
            ]
        },
        {
            "heading": "Running the Store",
            "body": [
                "Completing 50 and 100 checkouts yourself, purchasing all store expansions, painting 30 walls, replacing 30 floor tiles, and customising the door position, the storefront style and the store name.",
                "The achievements here: Hardworking Cashier (Completed 50 checkouts. That's a lot of change giving); You need a cashier (Completed 100 checkouts all on your own. Consider hiring a cashier or two.); The greatest! (Purchased all expandings.); Good for Eye (Paint 30 Walls); These Floors Are Made For Walking (Replace 30 Floor); That's a Big Change (Change Door Position); Looking Good (Change Front Style of The Door); And the best store in town is... (Change Store Name)."
            ]
        },
        {
            "heading": "Growth & Staff",
            "body": [
                "Owning 4 product licences, placing 3 category signs, playing a song from the music player, hiring 4 restockers and 4 cashiers, taking a bank loan, and paying off a loan in full.",
                "The achievements here: You Want It? We Got It! (Own 4 Product Licence); CEO of Organization (Place 3 Category Sign); Elevator (Play a Song from Music Player); Don't Get Tired (Hire 4 Restockers); They Know How To Count (Hire 4 Cashiers); Economy 101 (Take A Loan From The Bank); Finally (Pay Off a Loan Debt to The Bank in Full)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Run checkouts by hand until you have 100 done, then hire cashiers and restockers.",
                "2. Take a bank loan and spend it on expansions and stock.",
                "3. Buy every remaining expansion, and add licences and category signs as you grow.",
                "4. Decorate: 30 walls, 30 floor tiles, the storefront style, door position and store name.",
                "5. Pay the loan back in full for 'Finally'.",
                "Tip: 'Good for Eye' and 'These Floors Are Made For Walking' just need 30 wall paints and 30 floor replacements total - do a quick decorating pass over the whole shop rather than counting, and both pop."
            ]
        }
    ]
};

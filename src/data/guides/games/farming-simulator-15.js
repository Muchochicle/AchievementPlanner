// Farming Simulator 15 Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/farming-simulator-15.json), whose 16 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   313160 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "farming-simulator-15-achievement-guide",
    "category": "game",
    "gameSlug": "farming-simulator-15",
    "icon": "🌾",
    "title": "Farming Simulator 15 Achievement Guide",
    "summary": "A practical guide to all 16 Steam achievements in Farming Simulator 15 - none are hidden. Covers the money and loan milestones, the driving-distance and playtime goals, the harvest and sow hectare counts, the 100 gold coins, and the missions and first-day-debt gag.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Farming Simulator 15 has 16 Steam achievements and none of them are hidden. They are cumulative milestones: 1 / 5 / 10 million in the bank, paying off the entire bank loan, driving 100 and 1000 miles, 10 hours in one savegame, harvesting and sowing 10 and 100 hectares, finding 25 / 50 / all 100 gold coins, completing 50 missions, and \"Financial Folly\" for reaching a negative balance on your first day.",
                "Nothing is missable - every counter accrues across a single savegame, and the gold coins can be collected at any time (a map guide helps).",
                "Tip: the 100-hectare harvest and sow achievements and the 1000-mile driving one are the long poles - do them as background progress while you grind toward 10 million, and use a collectibles map for the gold coins."
            ]
        },
        {
            "heading": "Money & Driving",
            "body": [
                "1 / 5 / 10 million in the bank, paying off the entire bank loan, driving 100 and 1000 miles, and 10 hours in a single savegame.",
                "The achievements here: Nouveau-Riche (Your account has reached more than 1$ million.); Well-Heeled (There is more than $5 million in your account.); Pots of Gold (Your wealth has surpassed $10 million.); Out of Debt (You paid back the entire bank loan.); Mobile Farmer (You have covered more than 100 mi with vehicles.); Very Frequent Driver (Your total driving distance has increased to over 1000 mi.); Longplayer (Your playing time in a single savegame has reached over 10 hours.)."
            ]
        },
        {
            "heading": "Field Work & Collectibles",
            "body": [
                "Harvesting 10 and 100 hectares, sowing 10 and 100 hectares, finding 25 / 50 / all 100 gold coins, completing 50 missions, and reaching a negative balance on your first day.",
                "The achievements here: Fruits of Your Labor (You have harvested more than 10 hectares.); Harvest King (You have harvested more than 100 hectares.); Sower (You have sown more than 10 hectares.); Mass Production (The total area sown by you exceeds 100 hectares.); Something Shiny (You have found 25 gold coins.); Coins on the Streets (You have found 50 gold coins.); Numismatist (You have found all 100 gold coins.); Mission Master (You have completed 50 missions.); Financial Folly (You managed to reach a negative balance on your very first day.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. On your very first day, spend into the red for \"Financial Folly\" (then recover).",
                "2. Take missions for cash and to build toward the 50-mission achievement.",
                "3. Work large fields to push the harvest and sow hectare counts to 100 each.",
                "4. Use a gold-coin map to collect all 100.",
                "5. Keep the savegame going for the driving distance, playtime and 10-million-bank milestones.",
                "Tip: the driving-distance counter runs whenever you are in a vehicle - long tractor trips to distant fields and sell points rack it up without extra effort."
            ]
        }
    ]
};

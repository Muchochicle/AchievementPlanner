// Farming Simulator 19 Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/farming-simulator-19.json), whose 23 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   787860 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "farming-simulator-19-achievement-guide",
    "category": "game",
    "gameSlug": "farming-simulator-19",
    "icon": "🚜",
    "title": "Farming Simulator 19 Achievement Guide",
    "summary": "A practical guide to all 23 Steam achievements in Farming Simulator 19 - none are hidden. Covers the playtime, money and mission milestones, the cultivate / sow / fertilize / harvest field-work counts at 1, 10 and 100 hectares, and the forestry and animal-breeding goals.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Farming Simulator 19 has 23 Steam achievements and none of them are hidden. They are all cumulative milestones: 10 hours in one savegame, 10 million in the bank, completing 1 / 50 / 100 missions, the four field-work actions (cultivate, sow, fertilize, harvest) at 1, 10 and 100 hectares each, cutting down 1 and 25 trees, and breeding 20 cows, 30 sheep, 50 pigs and 100 chickens.",
                "Nothing is missable - every counter accrues across a single savegame and the game is a relaxed sandbox with no fail states.",
                "Tip: the 100-hectare field-work achievements are the long pole - buy the biggest cultivator, seeder, sprayer and harvester you can afford and work a large rented field on repeat; the money and playtime milestones arrive on their own."
            ]
        },
        {
            "heading": "Playtime, Money & Missions",
            "body": [
                "10 hours in a single savegame, 10 million in the bank, and completing 1, 50 and 100 missions.",
                "The achievements here: Longplay (Reach 10 hours of playing time in a single savegame); Lucrative Labor (Own a bank account with 10 million ingame money); A Good Deed (Complete 1 mission); Helping Out (Complete 50 missions); Legendary Aide (Complete 100 missions)."
            ]
        },
        {
            "heading": "Field Work",
            "body": [
                "Cultivating, sowing, fertilizing and harvesting 1 hectare, 10 hectares and 100 hectares each.",
                "The achievements here: Backyard Gardener (Cultivate 1 hectare); Starting Small (Sow 1 hectare); Happy Plants (Fertilize 1 hectare); Reap What You Sow (Harvest 1 hectare); Fervent Farmer  (Cultivate 10 hectares); Plant Prosperity (Sow 10 hectares); Delighted Plants (Fertilize 10 hectares); Ample Yield (Harvest 10 hectares); Chief of Cultivation (Cultivate 100 hectares); Serial Sower (Sow 100 hectares); Ecstatic Plants (Fertilize 100 hectares); Humongous Harvest (Harvest 100 hectares)."
            ]
        },
        {
            "heading": "Forestry & Animals",
            "body": [
                "Cutting down 1 and 25 trees, and breeding 20 cows, 30 sheep, 50 pigs and 100 chickens.",
                "The achievements here: I Saw That Coming! (Cut down 1 tree); More Wood! (Cut down 25 trees); Milk Magnate (Breed 20 cows); Wool Commander (Breed 30 sheep); Pink Progress (Breed 50 pigs); Egg Lord (Breed 100 chickens)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Start a savegame and take contract missions for early cash - this covers the 1 / 50 / 100 mission achievements over time.",
                "2. Buy large field equipment and work a big field to push the 1 / 10 / 100 hectare cultivate, sow, fertilize and harvest counts.",
                "3. Set up animal pens and breed toward 20 cows, 30 sheep, 50 pigs and 100 chickens.",
                "4. Do some forestry for the two tree achievements.",
                "5. Keep the savegame going - 10 hours playtime and 10 million in the bank arrive as by-products.",
                "Tip: the field-work counters credit the hectares worked, not distinct fields - re-working the same large rented field over and over is the fastest route to 100 hectares of each action."
            ]
        }
    ]
};

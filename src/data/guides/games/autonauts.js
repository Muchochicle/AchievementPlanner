// Autonauts Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/autonauts.json), whose 26 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   979120 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js). None are hidden; every one
//   ships a real, official Steam description, quoted verbatim below.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "autonauts-achievement-guide",
    "category": "game",
    "gameSlug": "autonauts",
    "icon": "🤖",
    "title": "Autonauts Achievement Guide",
    "summary": "A practical guide to all 26 Steam achievements in Autonauts - none are hidden. Covers resource-production milestones across every craftable good, and the game's evolution and settlement-growth achievements.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Autonauts has 26 Steam achievements and none are hidden. As a bot-programming automation game, the list is built almost entirely around lifetime production milestones for every resource type - berries, mushrooms, milk, wool, eggs, fish, tools, honey, folk created, minerals, pottery, clothes, plots uncovered, trees chopped, cooked food, cereal crops, mobile storage use, general storage, and bots made - plus a handful of settlement and evolution milestones (completing the tutorial, evolving your first world, building a full settlement, and completing the Lunch/Smörgåsbord/Banquet food plans).",
                "Nothing is missable - every production counter is a permanent save-file stat that keeps climbing as your automated bots work, and settlement milestones stay achieved once reached. The genuine long pole is simply time: since bots do the actual work once programmed, most of these achievements are really about building a broad, well-automated economy and letting it run rather than manual grinding.",
                "Tip: automate a wide spread of resource chains early rather than perfecting one - since almost every achievement here is its own separate lifetime counter (berries, mushrooms, fish, minerals, and so on), a broad early economy with many bots each doing one small job clears far more of the list per hour than a deep, optimized chain for just one resource."
            ]
        },
        {
            "heading": "Production Milestones",
            "body": [
                "Completing the tutorial, then the full spread of lifetime production counters: 2,000 berries, 2,000 mushrooms, 1,000 cows milked, 1,000 sheep shorn, 1,000 henhouse eggs, 2,000 fish, 1,000 tools, 1,000 honey, 50 Folk created, 2,000 minerals, 500 pottery, 1,000 clothes, 200 plots uncovered, 2,000 trees chopped, 1,000 food cooked, 2,000 cereal crops cut, 500 mobile storage uses, 5,000 anything stored, and 200 bots made.",
                "The achievements here: Mummy's Special Little Autonaut (Tutorial Completed); Autofruity (2 000 Berries Collected); Autoshroomy (2 000 Mushrooms Collected (Enlightenment)); Automilky (1 000 Cows Milked); Autowoolly (1 000 Sheep Shorn); Autoeggy (1 000 Henhouse Eggs Laid); Autofishy (2 000 Fish Caught (Enlightenment)); Autotooly (1 000 Tools Made); Autohoney (1 000 Honey Made); Autospawny (50 Folk Created); Autominey (2 000 Minerals Mined); Autopotty (500 Pottery Made); Autodressy (1 000 Clothes Made); Autoexplory (200 Plots Uncovered); Autolumberjacky (2 000 Trees Chopped Down); Autonoshy (1 000 Food Cooked); Autograiny (2 000 Cereal Crops Cut); Autotransporty (500 Mobile Storage Used); Autostory (5 000 Anything Stored); Autobotty (200 Bots Made)."
            ]
        },
        {
            "heading": "Evolution & Settlement Goals",
            "body": [
                "Evolving your first World, reaching a first Full Settlement, hitting the 300 Bot Limit settlement tier, and completing the Lunch, Smörgåsbord, and Banquet food plans.",
                "The achievements here: Real Autonaut (First World Evolved (Enlightenment)); Autocommunity (First Full Settlement); Autoefficiency (First Full Settlement: 300 Bot Limit); Autolunchy (Lunch Plan Completed (Enlightenment)); Autosmörgåsbordy (Smörgåsbord Plan Completed (Enlightenment)); Autobanquety (Banquet Plan Completed (Enlightenment))."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Complete the tutorial, then set up bots to automate a wide spread of early resources - berries, mushrooms, milk, wool, eggs, and fish - to start several production counters at once.",
                "2. Expand into crafting chains: tools, honey, minerals, pottery, clothes, and cooked food, while also automating tree-chopping and cereal harvesting.",
                "3. Build out storage and transport automation (mobile storage, general storage) and start creating Folk and Bots as your settlement grows.",
                "4. Push toward evolving your first World (Real Autonaut) and completing a Full Settlement, then the 300 Bot Limit settlement tier for Autoefficiency.",
                "5. Automate the Lunch, Smörgåsbord, and Banquet food plans in sequence as your kitchen chain matures.",
                "Tip: Autostory (5,000 anything stored) and Autotransporty (500 mobile storage uses) both come for free once you have a working logistics network moving goods between stockpiles - build that network early and these two climb passively alongside everything else."
            ]
        }
    ]
};

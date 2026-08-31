// Farming Simulator 17 Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/farming-simulator-17.json), whose 17 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   447020 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "farming-simulator-17-achievement-guide",
    "category": "game",
    "gameSlug": "farming-simulator-17",
    "icon": "🚜",
    "title": "Farming Simulator 17 Achievement Guide",
    "summary": "A practical guide to all 17 Steam achievements in Farming Simulator 17 - none are hidden. Covers the getting-started economy achievements and the fieldwork, forestry and animal-breeding milestones. None of the achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Farming Simulator 17 has 17 Steam achievements and none are hidden. Six are economy milestones - 10 hours in one savegame, a negative balance on day one, paying back a full bank loan, a bank account of 1 million, completing a task for another farmer and helping every farmer once. The other eleven are fieldwork and farm goals: the basketball three-pointer, all 100 gold nuggets, cultivating / sowing / fertilising / harvesting 10 hectares each, cutting down 1 and 50 trees, and breeding 20 cows, 30 sheep and 50 pigs.",
                "This is a short, low-pressure set - a single long savegame covers everything. Nothing is missable: 'Breakneck Bankruptcy' just needs you to overspend on the first in-game day, which you can do deliberately at the start of a fresh save.",
                "Tip: start a new savegame, immediately buy a large machine to go negative on day one for 'Breakneck Bankruptcy', then settle into normal play - the fieldwork and breeding milestones all come naturally over a full season."
            ]
        },
        {
            "heading": "Getting Started",
            "body": [
                "10 hours in a single savegame, a negative balance on your first day, paying back a whole bank loan, a bank account of 1 million, completing a task for another farmer, and helping every farmer at least once.",
                "The achievements here: In for the Long Haul (Reach 10 hours playing time in a single savegame); Breakneck Bankruptcy (Reach a negative balance on your very first day); Financial Independence (Pay back an entire bank loan); Peak Profits (Own a bank account with 1 million ingame money); Help a Fella out (Complete a task for another farmer); Farmers' Favorite (Help each farmer at least once)."
            ]
        },
        {
            "heading": "Fieldwork, Forestry & Animals",
            "body": [
                "The basketball three-point field goal, finding all 100 gold nuggets, cultivating / sowing / fertilising / harvesting 10 hectares each, cutting down one tree and 50 trees, and breeding 20 cows, 30 sheep and 50 pigs.",
                "The achievements here: Three-Pointer (Score a three-point field goal in basketball); All That Glitters... (Find all 100 gold nuggets); Preparation Is Key (Cultivate 10 hectares); Into the Soil (Sow 10 hectares); Make 'em Grow (Fertilize 10 hectares); Bumper Harvest (Harvest 10 hectares); Lumber... (Cut down a tree); ...jack (Cut down 50 trees); Cowboy (Breed 20 cows); Sweet Dreams (Breed 30 sheep); Oink Oink! (Breed 50 pigs)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Start a fresh savegame and deliberately overspend on day one for 'Breakneck Bankruptcy'.",
                "2. Take a bank loan and pay it all back for 'Financial Independence'.",
                "3. Work a full crop cycle - cultivate, sow, fertilise and harvest at least 10 hectares each.",
                "4. Start a forestry operation (cut 50 trees) and an animal operation (20 cows, 30 sheep, 50 pigs).",
                "5. Do the odd jobs for every other farmer, find the 100 gold nuggets, and build toward a 1-million balance.",
                "Tip: the gold nuggets are scattered across the map at fixed spots - a collectible-location guide makes 'All That Glitters...' a quick afternoon rather than a long hunt."
            ]
        }
    ]
};

// Workers & Resources: Soviet Republic Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/workers-resources-soviet-republic.json), whose 17 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   784150 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "workers-resources-soviet-republic-achievement-guide",
    "category": "game",
    "gameSlug": "workers-resources-soviet-republic",
    "icon": "🚩",
    "title": "Workers & Resources: Soviet Republic Achievement Guide",
    "summary": "A practical guide to all 17 Steam achievements in Workers & Resources: Soviet Republic - none are hidden. Covers getting started and the campaigns, the population and society goals, and the late-game and hard-mode achievements. None of the achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Workers & Resources: Soviet Republic has 17 Steam achievements and none are hidden. Five are getting started and campaigns (enter a game, play 2 game years, finish the first and second campaigns, complete all research in one game), seven are population and society goals (25,000 and 50,000 citizens at high happiness without recent immigration, 100 Trabis sold west, 10 cableways, 1,000 tons of plastic waste, 1,000 tons of incinerator ash, 80% religious sympathy at 20,000 population), and five are late-game and hard-mode goals (80% alcohol addiction at 10,000, 5 helicopter lines, 5 international airplane routes, 10 tons of nuclear fuel in realistic mode, and 30,000 citizens on the hardest difficulty without recent immigration).",
                "The catalog marks it difficulty 4 - this is a hardcore economy sim, and 'Soviet Paradise' (50,000 at 80% happiness) and 'Soviet Republic Expert' (30,000 on the hardest difficulty) are very long, demanding builds.",
                "Tip: do the two campaigns and the small society goals on a comfortable difficulty, then commit one long sandbox to the big population targets."
            ]
        },
        {
            "heading": "Getting Started & Campaigns",
            "body": [
                "Entering a game, playing a single game for at least 2 game years, completing all missions in the first and second campaigns, and completing all research in a single game.",
                "The achievements here: Novice to Planned Economy (Enter into the gameplay.); Disciple of Planned Economy (Play any single game for at least 2 game years); Republic Founder (Complete all missions from the first campaign.); Revolutionary of the Republic (Complete all missions from the second campaign.); Master of Research (Complete all possible researches (in a single game).)."
            ]
        },
        {
            "heading": "Population & Society Goals",
            "body": [
                "Selling 100 Trabis to the west, 25,000 citizens at 70% happiness ('Soviet Society') and 50,000 at 80% ('Soviet Paradise') without recent immigration, 10 working cableways, 1,000 tons of plastic waste from separation, 1,000 tons of incinerator ash, and 80% religious sympathy at 20,000 citizens.",
                "The achievements here: Trabi Maker (Manufacture and sell 100 Trabi personal cars to western countries (in a single game).); Soviet Society (Achieve a population of 25,000 citizens with at least 70% average happiness without inviting immigrants in the last 2 years.); Soviet Paradise (Achieve a population of 50,000 citizens with at least 80% average happiness without inviting immigrants in the last 2 years.); Cableway Lover (Operate at least 10 working cableways in one game.); Nature Lover (Produce at least 1,000 tons of plastic waste from separation (in a single game).); Waste Incinerator (Produce at least 1,000 tons of ash in incinerators (in a single game).); Wrong Communist (Achieve at least 80% religious sympathy with at least 20,000 citizens.)."
            ]
        },
        {
            "heading": "Late-Game & Hard Mode",
            "body": [
                "80% alcohol addiction at 10,000 citizens, 5 domestic passenger helicopter lines, 5 international airplane routes, 10 tons of nuclear fuel produced in realistic mode, and 30,000 citizens on the hardest difficulty without recent immigration ('Soviet Republic Expert').",
                "The achievements here: Right Communist (Achieve at least 80% alcohol addiction with at least 10,000 citizens.); Very Important Soviets (Operate 5 domestic passenger helicopter lines.); Soviet Airways (Operate 5 airplanes to western or eastern countries.); Nuclear Manufacturer (Produce 10 tons of nuclear fuel in realistic mode.); Soviet Republic Expert (Achieve a population of 30,000 citizens on the hardest difficulty, without inviting immigrants in the last 10 years.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the first and second campaigns.",
                "2. Start a comfortable sandbox, complete all research, and knock out the small society goals (cableways, Trabis, waste/ash, religious sympathy, alcohol addiction).",
                "3. On that same sandbox, grow steadily toward 'Soviet Society' (25,000) then 'Soviet Paradise' (50,000) at high happiness without inviting immigrants.",
                "4. Add helicopter lines and international air routes, and produce nuclear fuel in realistic mode.",
                "5. Commit a separate save to 'Soviet Republic Expert' - 30,000 citizens on the hardest difficulty.",
                "Tip: the 'without inviting immigrants in the last N years' condition means you must grow the population by births alone late in the save - stop all immigration well before you cross the threshold and let housing and healthcare do the work."
            ]
        }
    ]
};

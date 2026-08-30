// Homeworld Remastered Collection Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/homeworld-remastered.json), whose 34 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   244160 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "homeworld-remastered-achievement-guide",
    "category": "game",
    "gameSlug": "homeworld-remastered",
    "icon": "🛸",
    "title": "Homeworld Remastered Collection Achievement Guide",
    "summary": "A practical guide to all 34 Steam achievements in Homeworld Remastered Collection - none are hidden. Covers the Homeworld 1 campaign missions and the Homeworld 2 campaign plus the Raiders Retreat mission.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Homeworld Remastered Collection has 34 Steam achievements and none of them are hidden. Every single one is a campaign-progress achievement: complete the tutorial and each of the 16 missions of Homeworld Remastered, then the tutorial and 15 missions of Homeworld 2 Remastered, plus one for the Raiders Retreat bonus mission. There are no difficulty, collectible or skill achievements.",
                "Nothing is missable - missions can be replayed individually from the mission select, and completing a mission on any difficulty counts. Playing both campaigns start to finish (plus the short Raiders Retreat mission) earns all 34.",
                "Tip: play both campaigns on the easiest difficulty if you just want the achievements - mission completion is all that is tracked, and Homeworld's fleet-persistence between missions makes an easy run much smoother since you keep the ships you build."
            ]
        },
        {
            "heading": "Homeworld 1 Campaign",
            "body": [
                "Completing the Homeworld Classic tutorial and each of the 16 Homeworld Remastered missions, from Kharak System through Hiigara.",
                "The achievements here: Graduated Cadet School (All Homeworld Classic Tutorial Missions Completed); Kharak System Completed (Completed Homeworld Remastered Mission 1); Outskirts of Kharak System Completed (Completed Homeworld Remastered Mission 2); Return to Kharak (Completed Homeworld Remastered Mission 3); Great Wastelands Completed (Completed Homeworld Remastered Mission 4); Great Wastelands (part 2) Completed (Completed Homeworld Remastered Mission 5); Diamond Shoals Completed (Completed Homeworld Remastered Mission 6); The Gardens of Kadesh Completed (Completed Homeworld Remastered Mission 7); The Cathedral of Kadesh Completed (Completed Homeworld Remastered Mission 8); Sea of Lost Souls Completed (Completed Homeworld Remastered Mission 9); Super Nova Station Completed (Completed Homeworld Remastered Mission 10); Tenhauser Gate Completed (Completed Homeworld Remastered Mission 11); Galactic Core Completed (Completed Homeworld Remastered Mission 12); The Karos Graveyard Completed (Completed Homeworld Remastered Mission 13); Bridge of Sighs Completed (Completed Homeworld Remastered Mission 14); Chapel Perilous Completed (Completed Homeworld Remastered Mission 15); Hiigara Completed (Completed Homeworld Remastered Mission 16)."
            ]
        },
        {
            "heading": "Homeworld 2 Campaign & Raiders Retreat",
            "body": [
                "Completing the Homeworld 2 Remastered tutorial and each of its 15 missions, from Tanis through Return to Hiigara, plus the Raiders Retreat bonus mission (intercepting the Turanic carriers).",
                "The achievements here: Graduated Command School (All Homeworld 2 Remastered Tutorial Missions Completed); Tanis Completed (Completed Homeworld 2 Remastered Mission 1); Angel Moon Completed (Completed Homeworld 2 Remastered Mission 2); Sarum Completed (Completed Homeworld 2 Remastered Mission 3); Gehenna Outskirts Completed (Completed Homeworld 2 Remastered Mission 4); Gehenna Completed (Completed Homeworld 2 Remastered Mission 5); The Karos Graveyard Complete (Completed Homeworld 2 Remastered Mission 6); Derelicts Complete (Completed Homeworld 2 Remastered Mission 7); Dreadnaught Berth Complete (Completed Homeworld 2 Remastered Mission 8); Counter Attack Complete (Completed Homeworld 2 Remastered Mission 9); Keepers of Sajuuk Complete (Completed Homeworld 2 Remastered Mission 10); Sacrifice Complete (Completed Homeworld 2 Remastered Mission 11); Thaddis Sabbah Complete (Completed Homeworld 2 Remastered Mission 12); Balcora Gate Complete (Completed Homeworld 2 Remastered Mission 13); Balcora Complete (Completed Homeworld 2 Remastered Mission 14); Return to Hiigara Complete (Completed Homeworld 2 Remastered Mission 15); Raiders Retreat Complete (Intercept the Turanic carriers and prevent them from reaching the safety of their planetary defenses.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the Homeworld Remastered (Homeworld 1) campaign start to finish, doing the tutorial first.",
                "2. Play the Homeworld 2 Remastered campaign start to finish, again starting with its tutorial.",
                "3. Play the Raiders Retreat bonus mission for its achievement.",
                "4. If any mission-completion achievement fails to unlock, replay just that mission from the mission select screen.",
                "5. There is nothing else to do - no difficulty or collectible achievements exist.",
                "Tip: keep your fleet healthy between missions - Homeworld carries your surviving ships forward, so losing your whole strike force on one mission makes the next few much harder; retire and rebuild rather than pushing a crippled fleet onward."
            ]
        }
    ]
};

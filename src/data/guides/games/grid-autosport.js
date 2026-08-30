// GRID Autosport Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/grid-autosport.json), whose 60 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   255220 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "grid-autosport-achievement-guide",
    "category": "game",
    "gameSlug": "grid-autosport",
    "icon": "🏅",
    "title": "GRID Autosport Achievement Guide",
    "summary": "A practical guide to all 60 Steam achievements in GRID Autosport - none are hidden. Covers the Career disciplines and championships, the Online and Custom Cup achievements, and the time-challenge and Sprint / Touring Legends achievements.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "GRID Autosport has 60 Steam achievements and none of them are hidden. The Career half covers accepting team offers, completing seasons and driver's championships, completing a season in all five racing disciplines (Touring, Endurance, Open Wheel, Tuner, Street), reaching level 10 in each discipline's Career, doing a championship with the elite Ravenwest team in each discipline, finishing the top-tier World Masters events in the top 3, and winning the GRID Legends Series. The Online half covers reaching level 10 in each discipline online, a total online level of 250, 100 online race wins, and a level-99 car. The rest are Custom Cup, splitscreen, RaceNet Challenge platinums, four timed hill-climb runs, and the Touring Legends and Drag DLC events.",
                "Nothing is missable - every Career and online mode can be replayed and the level counters only go up. The completion's long poles are the online grind (100 wins, total level 250, a level-99 car) and The Journeyman (a season with all 10 Career teams).",
                "Tip: play the whole single-player Career first - it earns roughly two thirds of the list on its own - then treat the online achievements as a separate, longer project, ideally in a private lobby with a friend to speed up the 100 wins and the discipline levels."
            ]
        },
        {
            "heading": "Career: Disciplines & Championships",
            "body": [
                "Accepting a team offer, completing your first season and race, satisfying all sponsor and team targets, a driver's championship, a season in all 5 disciplines, a cup win, a Ravenwest championship in each discipline, unlocking and finishing the five International/World Masters championships in the top 3, reaching level 10 in each discipline's Career, winning every discipline's top Ravenwest championship, and completing and winning the GRID Legends Series.",
                "The achievements here: Sign on the dotted line (Accept your first Team Offer.); Just warming up (Complete the first season of your Career.); First of Many (Win a race in your Career.); Brand Awareness (Satisfy all 6 sponsor objectives at least once in a Career season.); Through the Hoops (Fulfil both of your team's targets in the same season.); Top step (Win a driver's championship in your Career.); Well rounded education (Complete a season in all 5 racing disciplines.); Extra curricular (Win a cup competition in your Career.); Toured with the Best (Complete a Touring Car Championship with the Ravenwest team.); Endured with the Best (Complete an Endurance Championship with the Ravenwest team.); Raced with the Best (Complete an Open Wheel Championship with the Ravenwest team.); Flowed with the Best (Complete a Tuner Competition with the Ravenwest team.); Battled with the Best (Complete a Street Racing championship with the Ravenwest team.); No longer the rookie (Unlock the \"International Touring Car Championship\".); Moving up in the world (Unlock the \"International Endurance Championship\".); A good track record (Unlock the \"International GP Championship\".); Making your mark (Unlock the \"Pro-Tuned World Masters\".); Been around the block (Unlock the \"Pro GT World Masters\".); One for the cabinet (Finish the \"Ultimate Touring Car Championship\" in the top 3.); It's been a long road (Finish the \"Ultimate Endurance Championship\" in the top 3.); Pop the cork (Finish the \"GP World Championship\" in the top 3.); I make this look good (Finish the \"Super Modified World Masters\" in the top 3.); King of the Streets (Finish the \"Supercar World Masters\" in the top 3.); Done the Tour (Reach level 10 in the Touring Car Career.); No longer afraid of the dark (Reach level 10 in the Endurance Career.); Mr Consistent (Reach level 10 in the Open Wheel Career.); Need some new tyres (Reach level 10 in the Tuner Competition Career.); Street Cred (Reach level 10 in the Street Racing Career.); I've got what Rick Scott's got (Win each discipline's most prestigious driver's championship for Ravenwest.); Everyone's a winner (Complete the \"GRID Legends Series\".); A True Legend (Win the \"GRID Legends Series\".)."
            ]
        },
        {
            "heading": "Online & Custom Cup",
            "body": [
                "Buying an online car, reaching level 10 in each discipline online, fully upgrading an online car, a level-99 online car, 100 online race wins, a total online level of 250, an offline Custom Cup and a 5-event Custom Cup win, front-row qualifying, a custom-tuning race win, competing in all race types, a RaceNet Challenge platinum, a season with all 10 Career teams, and splitscreen.",
                "The achievements here: Here are the keys (Buy a car in Online.); Member of the Pack (Reach level 10 in Touring Car Online.); Durable (Reach level 10 in Endurance Online.); Downforce to be reckoned with (Reach level 10 in Open Wheel Online.); Tuned In (Reach level 10 in Tuner Competition Online.); Streetwise (Reach level 10 in Street Racing Online.); Tek-Domination (Install all the upgrades and tuning options on a car in Online.); An icon in the pit lane (Advance a car to level 99 in Online.); FTW (Win 100 Online races.); I've stopped counting (Reach a total Online level of 250, all disciplines combined.); Just the way I like it (Complete a Custom Cup offline.); Long-Haul Legend (Win the driver's Cup in a 5 event Custom Cup offline.); Leading them off (Qualify for the front row of the grid.); Tweak to Peak (Win a race with custom tuning set-up.); Jack of all Trades (Compete in all race types, including party modes.); Badge of Honour (Earn a platinum medal in RaceNet Challenge.); The Journeyman (Race a season with each of the 10 teams in the career.); Sofa, so good (Complete a Splitscreen race.); Side-splitting (Win a 5 event Splitscreen competition.)."
            ]
        },
        {
            "heading": "Time Challenges & Legends DLC",
            "body": [
                "The four timed point-to-point runs (Cote d'Azur, California Big Sur, Okutama Sprint, Hong Kong Peak Road), the British / European / International Touring Legends championships, the Holeshot drag feat, and the Hotrod and Funny Car World Championships.",
                "The achievements here: Riviera Runaway (Complete a run of Cote d'Azur - Route d'Azur in under 3 minutes.); Golden Coast (Complete a run of California - Big Sur in under 2 minutes & 55 seconds.); King of the Hill (Complete a run of Okutama Sprint - Mizu Mountain in under 3 minutes & 15 seconds.); Pearl of the Orient (Complete a run of Hong Kong - Peak Road Descent in under 2 minutes & 50 seconds.); British Touring Legend (Win the \"Touring Legends British Championship\".); European Touring Legend (Win the \"Touring Legends European Championship\".); International Touring Legend (Win the \"Touring Legends International Championship\".); Holeshot (In Drag beat an opponent who had a faster \"Pass Time\" by having a faster \"Reaction Time\".); Flight of the Condors (Win the \"Hotrod World Championship\".); Drag Queen (Win the \"Funny Car World Championship\".)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the full single-player Career: complete a season in every discipline, win driver's championships, and push each discipline's Career to level 10.",
                "2. Do the Ravenwest championships and the top-3 World Masters finishes as you unlock them.",
                "3. Do The Journeyman by racing one season with each of the 10 Career teams (short seasons are fine).",
                "4. Do the four timed hill-climb runs and the Touring Legends / Drag DLC events.",
                "5. Move to Online: level each discipline to 10, grind toward 100 wins and total level 250, and fully upgrade a car to level 99.",
                "Tip: for the online grind, race the discipline with the smallest lobbies at off-peak times, or set up a private multiplayer session with one friend - a 1v1 race still counts as an online win and levels the car, making 100 wins far faster than fighting full grids."
            ]
        }
    ]
};

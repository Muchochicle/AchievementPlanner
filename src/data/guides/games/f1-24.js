// F1 24 Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/f1-24.json), whose 50 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   2488620 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js). None are hidden; every one
//   ships a real, official Steam description, quoted verbatim below.
// - Sections group achievements by what each one actually requires.
export const GUIDE = {
    "slug": "f1-24-achievement-guide",
    "category": "game",
    "gameSlug": "f1-24",
    "icon": "🏎️",
    "title": "F1 24 Achievement Guide",
    "summary": "A practical guide to all 50 Steam achievements in F1 24 - none are hidden. racing milestones, my team & two-player, driver career, f1 world, compendium, fanzone & misc.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "F1 24 has 50 Steam achievements and none are hidden. They cover core racing milestones (first pole, first win, a championship), My Team and Two-Player Career, the new Driver Career (accolades, rivalries, specialists, contracts), the F1 World live-service mode, and the Compendium / Fanzone cosmetic systems.",
                "Nothing is missable and difficulty can be tuned freely (assists, AI level). The F1 World and Driver Career blocks are the longest - accolades, dynamic objectives, fan-points and vendor goals all want sustained play in those modes.",
                "Tip: run assists high and AI low to knock out the pure racing achievements (pole, win, championship, the perfect-weekend ones) quickly, then settle into Driver Career and F1 World for the mode-specific grinds."
            ]
        },
        {
            "heading": "Racing Milestones",
            "body": [
                "The fundamentals: a Theatre Mode save, the multi-track photomode set, an optimal grid/pit/fastest-lap combo, first pole, first win, an online win, a fastest-in-all-practice-plus-pole-plus-win weekend, 24 races completed, the Drivers' and Constructors' Championships, and a sprint + Grand Prix + fastest lap in one weekend.",
                "The achievements here: Lights, Camera, Action! (Save a captured highlight in Theatre Mode); Downtown Snapper (Take a photo using photomode at Jeddah, Melbourne, Baku, Miami, Monaco, Marina Bay and Las Vegas); Tremendous Trio (Line up in an optimal grid position, make an optimal pit stop, and set the fastest lap); Up At The Pointy End (Achieve your first pole position); Takes The Flag! (Win your first race); Showing Them How It's Done (Win an online race); A Great Weekend (Be the fastest in all practice sessions, take pole position and win the race); Well Seasoned (Complete 24 Races); A Lump In My Throat (Win the Drivers' Championship); Mechanical Marvel (Win the Constructors' Championship); All The Points (Win a sprint race, Grand Prix and set the fastest lap in a single race weekend)."
            ]
        },
        {
            "heading": "My Team & Two-Player",
            "body": [
                "Developing a component in every R&D department in My Team, and a front-row lockout with a friend in Two-Player Career.",
                "The achievements here: All Areas Covered (In My Team, develop a component in every R&D Department); Front Row Friends! (Lock out the front row with your friend in Two-Player Career)."
            ]
        },
        {
            "heading": "Driver Career",
            "body": [
                "The new mode's goals: a 99 overall rating (and 80 with a custom driver), a 90 Focus Rating, the rivalry ladder (defeat a rival, Heated, Career Defining, 3 active rivalries), completing all accolades for a driver, a specialist relationship level 3, the three secret meetings (Silly Season), all four specialist goals in one weekend, hitting a +3 rating target, 55% team recognition, your first accolade, a multi-year contract, and 4 specialist Perks.",
                "The achievements here: 99 Club (Reach an overall driver rating of 99 with any driver); Custom Hotshot (Reach an overall driver rating of 80 with a custom driver); Laser Focused (Reach a Focus Rating of 90); Just Better (Successfully defeat a rival in the Championship Narrative Rivalry type); It's Getting Hot In Here (Increase a rivalry to Heated status); It's Not Me, It's You (Increase a rivalry to Career Defining status); Not Making Friends (Have 3 active rivalries with 3 different drivers); GOAT (Complete all accolades for any Driver); Strong Relations (Reach relationship level 3 with any Specialist in Driver Career); Silly Season (Complete all 3 secret meetings and join that team at the end of the season); Extra Curricular (Complete all 4 Specialist goals in a single race weekend); Target Acquired (Set a target 3 above your current rating and achieve it during a season); Do I Recognise You? (Achieve 55% Recognition or higher with any team in Driver Career); The First Of Many (Earn your first Accolade in Driver Career); Sign On The Dotted Line (Agree to a multi-year contract with a team in Driver Career); Perk-fection (Earn 4 Perks from your Specialists as any driver in Driver Career)."
            ]
        },
        {
            "heading": "F1 World",
            "body": [
                "The live-service mode: upgrading, crafting and equipping items (including a Unique Item), redeeming a Goal, a Safety Rating A race, activating an R&D Scenario, 25 Dynamic Objectives, dismantling 50 items, a goal from each of the 7 Vendors, 10,000 Fan Points in a season, 10 Fan Liaison goals, and spending 1,000 Fan Tokens.",
                "The achievements here: Development Race (Upgrade an item in F1® World); Crafty! (Craft an item from a blueprint in F1® World); One Of A Kind (Equip a Unique Item in F1® World); Pass The Spanner (Equip an item in F1® World); Up And Running (Redeem a completed Goal in F1® World); Safely Does It (Complete your first Safety Rating A race in F1® World); Rise To The Challenge! (Activate an R&D Scenario); Objectively Dynamic (Complete 25 Dynamic Objectives); Sum of its Parts (Dismantle 50 items in F1® World); Vending Machine (Complete a goal from each of the 7 Vendors in F1® World); True Fan (Earn 10,000 Fan Points in a single F1® World season); Reach Out to the Fans (Complete 10 Fan Liaison goals in F1® World); Hey Big Fan Token Spender! (Spend a total of 1000 Fan Tokens in F1® World)."
            ]
        },
        {
            "heading": "Compendium, Fanzone & Misc",
            "body": [
                "The cosmetic and misc goals: 100 Compendium stickers and 30 from the Champions category, a Ranked promotion, the two driver-and-track wins (Verstappen at Zandvoort, Norris at Silverstone in a McLaren), being in a Fanzone winning zone, locking in Fanzone choices 3 times, and equipping an Expression Label.",
                "The achievements here: Got, got, got, got.. (Unlock 100 stickers in the Compendium); Going Up (Get promoted to a higher division in Ranked); Double Dutch (As Max Verstappen, win a race at Circuit Zandvoort); Full English (As Lando Norris, win a race at Silverstone in a McLaren); In the Zone (Be in the winning zone of either a Constructor or Driver Fanzone Room); Tough Choices (Lock-In your Fanzone choices for a new F1® World season 3 times); Express Your Fandom (Equip a different Expression Label on your Super Licence profile); Everyone's a winner (Unlock 30 stickers from the Champions category in the Compendium)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. With assists on and AI low, grab the racing milestones - pole, win, the perfect-weekend achievements, the two championships, 24 races.",
                "2. Play Driver Career for a season or two: the accolades, rivalries, specialist relationships and contract achievements come in sequence.",
                "3. Grind F1 World for the item, vendor, dynamic-objective and fan-points goals.",
                "4. Mop up the Compendium, Fanzone, Ranked and driver/track achievements.",
                "Tip: Double Dutch and Full English (Verstappen at Zandvoort, Norris at Silverstone) are quickest in a one-off Grand Prix with max assists and lowest AI - you only need the win, not a clean race."
            ]
        }
    ]
};

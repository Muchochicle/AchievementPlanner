// GRID (2019) Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/grid-2019.json), whose 38 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   703860 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "grid-2019-achievement-guide",
    "category": "game",
    "gameSlug": "grid-2019",
    "icon": "🏆",
    "title": "GRID (2019) Achievement Guide",
    "summary": "A practical guide to all 38 Steam achievements in GRID (2019) - none are hidden. Covers the Career Showdowns and progression achievements, and the race-challenge and named-Objective achievements.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "GRID (the 2019 game) has 38 Steam achievements and none of them are hidden. Most are Career progression: entering the GRID World Series, winning each of the seven Showdown events, completing every Career Event in each discipline category (Invitational, FA Racing, GT, Stock, Touring, Tuner), earning a gold trophy in every Career Event, reaching player levels 50 and 99, and driving the circumference of the Earth. The rest are race-challenge feats (beat a Nemesis and a Rival, win crossing the line backwards, a no-damage finish, a last-to-first comeback) and completing the nine named in-game Objectives.",
                "Nothing is missable - every Career Event can be replayed and the cumulative distance and level counters only go up. The completion is fairly short; the grind is Race Driver (player level 99) and Worth its Weight (a gold trophy in every single Career Event).",
                "Tip: turn the AI difficulty down and every assist on for the gold-trophy and category-completion grind - GRID's achievements do not care about your settings, only the results, so make the racing as easy as you like and focus on finishing first."
            ]
        },
        {
            "heading": "Career Showdowns & Progression",
            "body": [
                "Entering the GRID World Series, winning the seven Showdown events (Ravenwest, Hammerhead, Vulpini Racing, DisruptR, Euro Rand, Fernando Alonso, Aurora Motorsport), reaching player level 50 and 99, buying your first car, owning one car in every launch class, a gold trophy in every Career Event, driving the Earth's circumference, and completing every Career Event in the Invitational, FA Racing, GT, Stock, Touring and Tuner categories, plus customising a livery.",
                "The achievements here: Final Stretch (Gain entry to the GRID World Series); Best of the Best (Win the 'Showdown: Ravenwest' Career Event); Down Under (Win the 'Showdown: Hammerhead' Career Event); All-American (Win the 'Showdown: Vulpini Racing' Career Event); Pro Tuned (Win the 'Showdown: DisruptR' Career Event); Das Beste (Win the 'Showdown: Euro Rand' Career Event); Triple Crowned (Win the 'Showdown: Fernando Alonso' Career Event); Mercenary (Win the 'Showdown: Aurora Motorsport' Career Event); Pro Driver (Reach player level 50); A Fine Choice (Purchase your first car); Content Tracker (Own at least one car in each class available from launch); Race Driver (Reach Player Level 99); Worth its Weight (Earn a gold trophy in every Career Event in the Career Tab); Around the Globe (Drive a total distance equal to the circumference of the Earth); By Invitation Only (Complete every Career Event in the Invitational category); Personal Touch (Customise your first livery); FA Racing Specialist (Complete every Career Event in the FA Racing category); Cruise Control (Complete every Career Event in the GT category); Out Of Stock (Complete every Career Event in the Stock category); Tour Guide (Complete every Career Event in the Touring category); Fine Tuned (Complete every Career Event in the Tuner category)."
            ]
        },
        {
            "heading": "Race Challenges & Objectives",
            "body": [
                "Winning a race crossing the line backwards, beating your first Nemesis and Career Rival, the Ravenwest-livery win with Nathan McKane, a loan-car win, a last-place-to-win comeback, a no-damage finish, your first Career Event win, and completing the nine named Objectives (High Altitude, Delta Time, Fast for a Hatchback, British Heritage, Burning Rubber, A Wheely Good Time, Gone in a Flash, Painting the Track red, Flights to Catch).",
                "The achievements here: Show Off (Win a race by crossing the line backwards); Brawler (Beat your first Nemesis); RavenBest (Win a race in a Ravenwest livery with Nathan McKane as your team mate ); Coupon Car (Win an Event with at least 3 other racers using a loan car); Next Contestant Please (Beat your first Career Rival); Underdog (Win an Event with a full grid having finished the first round in last place); Pristine (Finish a race with at least 3 other racers without taking any damage); First Of Many (Win your first Career Event); High Altitude (Complete the High Altitude Objective); Delta Time (Complete the Delta Time Objective); Fast for a Hatchback (Complete the Fast for a Hatchback Objective); British Heritage (Complete the British Heritage Objective); Burning Rubber (Complete the Burning Rubber Objective); A Wheely Good Time (Complete the A Wheely Good Time Objective); Gone in a Flash (Complete the Gone in a Flash Objective); Painting the Track red (Complete the Painting the Track red Objective); Flights to Catch (Complete the Flights to Catch Objective)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Lower the AI difficulty and turn on assists, then play through the Career, completing every event in each category (Invitational, FA Racing, GT, Stock, Touring, Tuner).",
                "2. Win the seven Showdown events as you unlock them and enter the GRID World Series.",
                "3. Replay any Career Event you did not gold for Worth its Weight, and buy a car in every class for Content Tracker.",
                "4. Do the race-challenge feats (the backwards-line win, the no-damage finish, the last-to-first comeback, the Nemesis and Rival beats) in short events set up for them.",
                "5. Complete the nine named Objectives, then keep racing for the cumulative distance and player level 99.",
                "Tip: the backwards-line win (Show Off) is easiest in a short 2-lap race with weak AI - build a big lead, then spin the car just before the finish line and reverse across it."
            ]
        }
    ]
};

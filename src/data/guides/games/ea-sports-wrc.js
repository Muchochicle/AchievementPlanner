// EA SPORTS WRC Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/ea-sports-wrc.json), whose 26 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1849250 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "ea-sports-wrc-achievement-guide",
    "category": "game",
    "gameSlug": "ea-sports-wrc",
    "icon": "🏁",
    "title": "EA SPORTS WRC Achievement Guide",
    "summary": "A practical guide to all 26 Steam achievements in EA SPORTS WRC - none are hidden. None of the 26 achievements are hidden - every description is Steam's own text. Covers Career mode, Time Trial and Moments, the car Builder, per-surface distance milestones, and location-specific event challenges.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "EA SPORTS WRC has 26 Steam achievements and none of them are hidden. EA SPORTS WRC is the officially licensed World Rally Championship game from Codemasters. None of its 26 achievements are hidden. The list covers Career mode (building a team, completing a season, winning a WRC Championship), Time Trial and Moments challenges, the car Builder, driving-distance milestones on each surface, and a set of location-specific event wins.",
                "The location challenges each ask for a win or a clean finish at a specific rally, sometimes in a specific historic car (Rally Sweden in the Citroen Xsara WRC, Rally Iberia in the 1995 Subaru Impreza, a no-damage finish at Rally Mexico).",
                "The catalog marks it difficulty 3 and single-playthrough. Nothing is missable; a couple of achievements need online events (a Quick Play Online event at Rally Estonia, a Clubs or Esports event)."
            ]
        },
        {
            "heading": "Career & Championships",
            "body": [
                "Building your own team, completing a season, winning a WRC Championship, podiuming every event in a Championship, a WRC-class stage, and a Builder-car custom championship podium.",
                "The achievements here: Team Principal (Create your own team in Career Mode); Rookie Season (Complete your first career season); World Rally Champion! (Win a WRC Championship in Career mode); Consistency is key (Finish on the podium at every event in a Championship Mode season); Class Act (Complete at least one stage using a vehicle from the WRC, WRC2, and Junior WRC Vehicle Classes); Personalised Podium (Finish on the Podium of a Custom Championship, in a Builder car, with a custom livery)."
            ]
        },
        {
            "heading": "Time Trial, Moments & Distance",
            "body": [
                "Beating Personal Bests and Ghosts in Time Trial, completing Moments and earning Gold medals, a zero-penalty regularity stage, the Rally School lesson, and driving 100 miles each on asphalt, gravel and snow plus 1,000 miles total.",
                "The achievements here: Gold Rush (Achieve 5 Gold medals in Moments); Keepin it real (Complete 5 Moments); NEW PB! (Beat a Personal Best time in Time Trial); Ghost Buster (Download and beat a Ghost in Time Trial); Perfect Score (Complete a regularity rally stage with 0 penalty points); Asphalt Artist (Drive 100 Miles (160km) on Asphalt); Gravel Guru (Drive 100 Miles (160km) on Gravel/Dirt); Snow Specialist (Drive 100 Miles (160km) on Snow); Long Haul Hero (Drive 1000 Miles (1600km)); Your first time? (Complete a lesson in the Rally School)."
            ]
        },
        {
            "heading": "Builder & Location Challenges",
            "body": [
                "Building your first and then five Builder cars, and the location-specific challenges - Monte-Carlo, Sardegna, Portugal, Sweden, Iberia, Mexico, Estonia - several requiring a specific historic car or a clean finish.",
                "The achievements here: Vehicle Builder (Build your first Builder car); Master Vehicle Builder (Build 5 cars in the Builder); In the Headlights (Finish on the podium of an event at Rallye Monte-Carlo in a MINI Cooper S); Regularity Renaissance (Win a Regularity Rally event in Rally Italia Sardegna in the Lancia Stratos); Algarve it a go! (Win a stage at Vodafone Rally de Portugal  that you started with heavy engine damage); Snowgloeb (Win an event at Rally Sweden in the Citroën Xsara WRC); El Matador (Win an event at Rally Iberia in the SUBARU Impreza 1995); Miracle in the Mountains (Finish an event at Guanajuato Rally Mexico without any severe mechanical damage); E-stonia (Complete a Quick Play Online event at Rally Estonia); Driver's Alliance (Complete a Clubs or Esports event at any location)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play Career mode: create a team, complete your first season, and push for a WRC Championship win, aiming for podiums at every event along the way.",
                "2. Do the Rally School lesson early, then grind Time Trial for a Personal Best and a Ghost beat.",
                "3. Complete Moments for the completion and Gold-medal achievements, and a regularity stage with zero penalties.",
                "4. Build one and then five cars in the Builder, and use a Builder car for the custom-championship podium.",
                "5. Knock out the location challenges - some need a specific historic car (Sweden's Xsara, Iberia's Impreza) or a no-damage finish (Mexico) - and the two online events at Estonia and in Clubs/Esports.",
                "Tip: the per-surface distance achievements (100 miles each on asphalt, gravel and snow) accumulate across every mode, so just play the rallies you enjoy and they will fill in on their own well before 1,000 total miles."
            ]
        }
    ]
};

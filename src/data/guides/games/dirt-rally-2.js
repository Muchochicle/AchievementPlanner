// DiRT Rally 2.0 Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/dirt-rally-2.json), whose 71 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   690790 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js). 1 hidden achievement ships no Steam description; its condition here is curatorial, cross-checked against the game's wiki plus community 100% guides, and kept spoiler-light.
// - Sections group achievements by what each one actually requires.
export const GUIDE = {
    "slug": "dirt-rally-2-achievement-guide",
    "category": "game",
    "gameSlug": "dirt-rally-2",
    "icon": "🏁",
    "title": "DiRT Rally 2.0 Achievement Guide",
    "summary": "A practical guide to all 71 Steam achievements in DiRT Rally 2.0 - career, my team & custom events, historic championships, rally locations & feats, rallycross, cars & purchases, community & driving challenges, hidden achievement.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "DiRT Rally 2.0 has 71 Steam achievements, 1 of them hidden. They cover the Career and My Team modes, the Historic Championships, a large block of location- and car-specific wins, the Rallycross championship, community/scenario events, and a set of driving-feat challenges (rolls, jumps, clean stages, no-assist wins).",
                "Nothing is missable - every event, location and car stays available, and Time Trial gives full car upgrades for free, which makes the car-specific and time-based achievements far easier. The grind is the sheer number of \"win in car X at location Y\" achievements plus the Historic Championships.",
                "Tip: use Time Trial for anything time- or car-specific (it unlocks all upgrades), and Custom Events for the location and weather achievements so you can pick exactly what you need. Save the community-event achievements for whenever those events are live."
            ]
        },
        {
            "heading": "Career, My Team & Custom Events",
            "body": [
                "The mode-progression goals: Hardcore-damage stages and wins, finishing and winning Custom events and a Custom Championship, 20 Custom Events, My Team events, the Historic Championship structure (3 championships, Time Machine), the AI Challenge and tuning-setup taps, 1,000,000 Credits, and the scenario completions (all scenarios on any / very hard difficulty, and the 1995 Wales scenario in Colin McRae's Impreza).",
                "The achievements here: Keepin it Real (Complete 15 Rally Stages with Hardcore Damage enabled); A Household Name (Finish a Custom Championship); Tough Competition (Win your first Custom event); Monster Energy Supercharge Award (Get the fastest start in a World RX Final); CAUTION, Don't Cut (Complete a stage without damaging your car); Against the Clock (Complete 10 Time Trial events); Velkommen til Hell (Complete 5 Rallycross Events in Hell); Eat my DiRT (Complete 20 Custom Events); Consistency is Key (Complete 3 consecutive laps in a Rallycross Qualifier all within a second of one another); Classic Rally 2.0 (Win your first Classic Rally Historic Championship); An Expensive Hobby (Earn 1,000,000 Credits); UPGRADED (Fully research and apply the maximum engine upgrade to 5 cars); On the Ladder (Win your first My Team event); Qualified (Complete your first AI Challenge); Fine Tuned (Create and save your own tuning setup); If in Doubt... (Complete every scenario on any difficulty.); ...Flatout (Complete every scenario on very hard difficulty.); In Its Element (Complete the 1995 Wales Scenario in Colin McRae's SUBARU Impreza 1995.)."
            ]
        },
        {
            "heading": "Historic Championships",
            "body": [
                "Winning your first championship in each Historic era - Modern Classics, Back to the '80s, Classic Rally 2.0, Present Day - plus the Group B 4WD Masters and the Modern Art / Back to the 80s named ones.",
                "The achievements here: Modern Art (Win your first Modern Classics Historic Championship); Back to the 80s (Win your first Back to the '80s Historic Championship); When in Doubt... (Set the fastest time on a stage with high surface degradation); That's Dedication (Complete 3 Weekly Community Events); Fire Up That Car... Again (Finish in the top tier of a Daily Challenge Community Event in an Audi Sport quattro S1 E2.); Watch the DELTA (Purchase every Group A car); Focused (Win your first event with Hardcore damage enabled)."
            ]
        },
        {
            "heading": "Rally Locations & Feats",
            "body": [
                "The rally-location achievements: 10 stages in Argentina, a New Zealand win, a Wales event, roll-and-continue in Australia and Finland, an all-weather run, 10 wet-weather stage wins, the Monte Carlo clean stage and DS 21 distance, 100 airborne moments in Finland, a Greece win by over a minute on Hardcore, and rolling the Subaru Legacy three times in Finland and finishing.",
                "The achievements here: Around the Gloeb (Complete an event at every unique location); The Right Way Up (Roll your car during a Rally stage in Australia and continue); Rally North America (Complete 3 Rally events in New England with the SUBARU WRX STI NR4); Past and Present (Win your first Present Day Historic Championship); Taking the Scenic Route (Win a Rally event in New Zealand); Adaptable (Complete a stage in Dry, Overcast, Rain and Wet conditions); Rocky Road (Complete 10 stages in Argentina); On Thin Ice (Complete a clean stage in Monte Carlo); Rock 'n' Roll (Drive 66 km at Monte Carlo in the DS 21); The Hills are Alive... (Complete an Event in Wales); Finnesse (Roll your car and continue in Finland.); Flying Finn (Get airborne 100 times in Finland.\t); Greece Lightning (Win an Event in Greece by over a minute with Hardcore Damage enabled.\t); Building a Legacy (Roll the SUBARU Legacy RS 3 times on a single stage in Finland, and finish.)."
            ]
        },
        {
            "heading": "Rallycross",
            "body": [
                "The World Rallycross content: a clean-sweep World RX event, a Full Format event at Silverstone, close-margin qualifier wins and consistent qualifier laps, 8 and 3 event wins in named cars/liveries, wins in Hell (rain and otherwise), a fast Yas Marina lap, and The Cartel (win at 8 locations in a specific Audi S1).",
                "The achievements here: It Would Be Bakke'RUDE Not To (Win every Qualifier, the Semi Final, and Final in a World RX event); Speedy Machine (Complete a Full Format Rallycross Event at Silverstone); Bringing the Thunder (Win 10 stages in the rain); Wouldn't Expect Anything More (Win a Rallycross Qualifier by less than a second); World RX Champion (Win 8 Events in the FIA World Rallycross Championship mode); Antilag Engaged (Purchase your first FIA World Rallycross Supercar); Mr Rallycross (Win 3 Rallycross Events in the Ford RS200 Evolution); The Home Favourite (Win in Latvia in the Reinis Nitišs Ford Fiesta Rallycross (MK7)); SEND IT (Win at Estering in Kevin Eriksson's Ford Fiesta Rallycross (MK8)); Rainmeister (Take victory in Hell, Norway, in the rain); Launch Event (Complete a lap in under 39 seconds at the Yas Marina Circuit, Abu Dhabi, in a 2019 RX Supercar); Sunday Driver (Win a World Rallycross Championship Final with AI set to 100, in cockpit view and assists disabled); The Cartel (Win an event at 8 rallycross locations using Bakkerud's or Doran's Audi S1 EKS RX quattro)."
            ]
        },
        {
            "heading": "Cars & Purchases",
            "body": [
                "The garage and skill goals: buying 5 Classifieds cars, all five Group B 4WD cars, every Group A car, a Kitcar, and the FIA World Rallycross Supercar, plus the car-specific win counts (Golf GTI 16V, Aston Martin V8 Vantage GT4, Renault Megane RS RX, VW Polo GTI R5, Citroen C4, BMW M1 Procar), no-assist stage wins, and a full engine upgrade on 5 cars.",
                "The achievements here: Some Minor Wear and Tear (Purchase 5 cars from the Classifieds); We Had to Change the Girboks (Repair your car before a stage and win); Golf Club (Win 3 events in the Volkswagen Golf GTI 16V); Wheel Spin (Win 10 stages without using any assists); Group B Master (Win the Group B 4WD Masters Championship); Time Machine (Complete 3 Championships in Historic Championships); Living the Dream (Purchase all five Group B 4WD vehicles); A Noteworthy AdVANTAGE (Win 5 events in the Aston Martin V8 Vantage GT4); Viva España (Win a Rally event in Spain driving the Volkswagen Polo GTI R5); Pro Driver (Win an event in the Renault Megane RS RX); Polo Club (Finish 5 events in the Volkswagen Polo GTI R5); To all those who doubted... (Get a podium in the Citroën C4 Rally); Kickin' 80s Vibe (Complete your first Event in the BMW M1 Procar Rally); Have a Break (Buy a Kitcar)."
            ]
        },
        {
            "heading": "Community & Driving Challenges",
            "body": [
                "The remaining feats and community events: 3 Weekly Community Events, a top-tier Daily Challenge in the Audi Sport quattro S1 E2, the World RX Final start (Monster Energy Supercharge Award), and completing 2 Joker laps and winning (Going the Extra Mile).",
                "The achievements here: Clown Car (Complete 50 Joker laps); Flight School (Complete 25 jumps of 30m or more); Don't Knock my Line (Spin 3 times on a stage and win); Going the Extra Mile (Complete 2 Joker laps and win)."
            ]
        },
        {
            "heading": "Hidden Achievement",
            "body": [
                "One achievement is hidden - a Time Trial target:",
                "The achievements here: Pedal to the Metal (Set a time of 7:00 or faster on the Newhouse Bridge stage (Scotland) in the SUBARU Impreza S4 Rally - easiest in Time Trial, which gives full upgrades.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play Career / My Team normally - the Custom Event, Hardcore-damage, championship and Credit achievements come along the way.",
                "2. Do the Historic Championships and the location achievements via Custom Events, picking the exact stage, car and weather you need.",
                "3. Use Time Trial for every car-specific and time-based achievement (full upgrades, retry freely), including the hidden Newhouse Bridge target.",
                "4. Work the Rallycross block and grab the community-event achievements whenever those events are live.",
                "Tip: the roll-and-continue achievements (Australia, Finland, the Subaru Legacy triple) are easiest set up deliberately on a hairpin at low speed with Hardcore damage off - flip, wait for recovery, and limp to the finish."
            ]
        }
    ]
};

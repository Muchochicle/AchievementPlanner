// Project CARS 2 Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/project-cars-2.json), whose 47 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   378860 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "project-cars-2-achievement-guide",
    "category": "game",
    "gameSlug": "project-cars-2",
    "icon": "🏁",
    "title": "Project CARS 2 Achievement Guide",
    "summary": "A practical guide to all 47 Steam achievements in Project CARS 2 - none are hidden. Covers the Career progression and one-off challenge events, and the licenses, lifetime goals, manufacturer drives and online-feature achievements.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Project CARS 2 has 47 Steam achievements and none of them are hidden. Most are Career-mode progression: create a driver, complete seasons, win championships in each Motorsport discipline, earn every license tier, earn 50 Accolades, and complete the lifetime goals (Zero to Hero, Triple Crown, Hall of Fame). A cluster are very specific one-off challenge feats - a clean sub-8-minute snowy Nordschleife lap, a 20m+ Rallycross jump, four Ferraris around Imola, a 200-lap Indy 500 win. The rest cover the manufacturer Factory Drives, the pit-strategy and setup tools, and the online features (a clean 5-lap win, spectating, Director mode, a B safety grade). One More For The Road is the all-achievements catch-all.",
                "Nothing is missable - Career events and Custom/Time Trial can be revisited freely. The difficulty is in the sim driving itself and in the long grind: 50 podiums in one Career, the full license ladder, four lifetime goals, and the demanding single-lap challenges in bad weather.",
                "Tip: turn every driving aid on and lower the AI difficulty for the grind achievements (podiums, championships, licenses) - none of them care how you win - then turn assists off only if a specific challenge like the snowy Nordschleife lap fights you with them on."
            ]
        },
        {
            "heading": "Career Progression & Challenge Events",
            "body": [
                "Creating a Career driver, completing the first season, a Rallycross season, becoming Indycar Champion, the first and 10th Invitational Events, the first Accolade, and the one-off challenge feats - the snowy Nordschleife lap, the Mercedes Ice Track event, the stormy Fuji lap, a 20m Rallycross jump, a four-season single-circuit race, a Championship in every discipline, a 200-lap Indy 500 win, four Ferraris around Imola, the Veneno at Red Bull Ring, the Porsche 911 GT1-98 at Le Mans, a photo, a used pit strategy, three custom setups, a clean 5-lap online win, and a first online race.",
                "The achievements here: One More For The Road (Earned all other achievements); This Is The Start (Created a new driver in Career and signed your first contract); I'm Seasoned (Completed the first season); Get That Dirt Off Your Shoulder (Successfully completed a Rallycross season); Best Indy World (Became an Indycar Champion); Invite Only (Unlocked your first Career Invitational Event); Mr Popular (Completed 10 Career Invitational Events); Accoladed (Earned your first Career Accolade); Winter Soldier (Drove a clean lap around the Nordschleife in the snow, in less than 8 minutes); Advanced Experience (Completed an event in a Mercedes car at the Mercedes-Benz Driving Events Ice Track 2); Hunting For Grip (Drove a clean lap around Fuji in Storm conditions, in a time less than 2 minutes); No Man's Fly (Did a Rallycross jump longer than 20 metres); All Year Round (Completed a race around a single circuit in all 4 seasons); Diversity (Completed a Championship in every Motorsport discipline within Career); The Milk Man (Won a full distance (200 Laps) Indy 500 race); Viva Ferrari (Drove 4 Ferrari cars, around Imola); Car Zero (Raced for 4 laps in the Lamborghini Veneno around Red Bull Ring GP); Straight Six (Drove a Porsche 911 GT1-98 at 24 Hours of Le Mans Circuit for 24 minutes at 60x time progression.); Snap Snap Snap (Taken a photo in photo mode); Strategic Mind (Created a pit strategy and then used it when coming into the pits); One-Man Show (Used 3 different custom car setups for a single car); Results Are In, You're Clean! (Finished 1st in an online race over 5 laps without making contact); Done One Online (Completed your first online race)."
            ]
        },
        {
            "heading": "Licenses, Lifetime Goals & Manufacturer Drives",
            "body": [
                "50 Accolades, the Rookie / Amateur / Pro-Am / Pro / Veteran licenses, Zero to Hero, two Tier 1 wins, three championships in three disciplines, 50 Career podiums, the Triple Crown, four Lifetime Goals, the Factory Drives for one and then three manufacturers, becoming a Brand Advocate, Affinity with two manufacturers, a manual pit stop, a shared setup saved, joining as a spectator, a full race in Director mode, using the Race Engineer, a B online safety grade, a Time Trial setup download, a first Championship win, and One More For The Road for all achievements.",
                "The achievements here: Gimme 50! (Earned 50 Accolades); Raving Rookie (Earned your Rookie License); No Longer a Rookie (Earned your Amateur License); Definitely Not a Rookie (Earned your Pro-Am License); I'm a Pro (Earned your Pro License); Seen It All (Earned your Veteran License); Zero to Hero (Completed the Zero to Hero lifetime goal (start in Tier 6 and go on to win a Tier 1 Championship)); Twice At The Top (Won two different Tier 1 Motorsports); Jack Of All Trades (Won three Championships in three different Motorsport disciplines); National Pride (Finished on the podium 50 times in a single drivers Career); Triple Crown (Won the Indy 500, Le Mans 24 Hours and Azure Circuit Grand Prix); Hall of Fame (Earned four Lifetime Goals); Factory Driver (Completed the Factory Drives set of events for a single manufacturer); Cream Of The Crop (Won all Factory Drive events for 3 manufacturers); Brand Advocate (Became a Brand Advocate for a manufacturer); Two Affinity And Beyond (Earned Affinity with two manufacturers); Manual All The Way (Completed a successful pit stop with manual control); What's Yours Is Mine (Saved a car setup received from a friend); I'm Just Here To Watch (Joined an in-progress online race as a spectator); The Director (Used the Director mode for a full race); May I Ask You Something (Used the Race Engineer in Tuning Setup and made changes based off their recommendation.); Safety First (Earnt a B Online Reputation Safety Grade.); I Want To Know Your Secret (Downloaded another players setup from within Time Trial.); Rest On Your Laurels (Won your first Championship.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Start a Career, set the AI low and aids high, and grind through seasons and disciplines - this covers the license ladder, the discipline championships, 50 podiums and most Accolades.",
                "2. Work the Lifetime Goals in parallel (Zero to Hero from Tier 6, the Triple Crown races, Hall of Fame) and the Factory Drives for three manufacturers.",
                "3. Knock out the one-off challenge feats via Custom Race or the relevant Invitational - the snowy Nordschleife and stormy Fuji laps, the Rallycross jump, the Ferrari/Veneno/Porsche car-and-track feats, the 200-lap Indy 500.",
                "4. Do the tool and feature achievements (pit strategy, manual pit stop, custom setups, Race Engineer, photo mode, Director mode).",
                "5. Do the online achievements (first online race, a clean 5-lap win, spectating, a B safety grade, a Time Trial setup download), then One More For The Road unlocks itself.",
                "Tip: for the sub-8-minute snowy Nordschleife lap, use a high-downforce GT3 car with traction control and stability on, stay off the kerbs, and treat it as a survival lap - 8 minutes is generous once you accept a slow, clean line."
            ]
        }
    ]
};

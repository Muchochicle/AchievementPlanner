// BeamNG.drive Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/beamng-drive.json), whose 58 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   284160 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js). None are hidden; every one
//   ships a real, official Steam description, quoted verbatim below.
// - Sections group achievements by what each one actually requires.
export const GUIDE = {
    "slug": "beamng-drive-achievement-guide",
    "category": "game",
    "gameSlug": "beamng-drive",
    "icon": "🚗",
    "title": "BeamNG.drive Achievement Guide",
    "summary": "A practical guide to all 58 Steam achievements in BeamNG.drive - none are hidden. campaigns & tutorials, free roam distance & stunts, challenges & skills, career mode - onboarding & deliveries, career mode - vehicles & economy.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "BeamNG.drive has 58 Steam achievements and none are hidden. They break into four groups: the scripted Campaigns and tutorials, cumulative Free Roam distance and stunt counters, one-star clears of each Challenge type, and a large Career Mode progression chain (onboarding, deliveries, and the vehicle-trading economy).",
                "Nothing is missable and every counter is account-wide, so the distance and vehicle-count achievements (1000 km driven, 5000 vehicles spawned, 10 minutes of airtime) fill in on their own over time. The Career Mode block is the longest coherent chunk - it wants a full playthrough of the mode's early progression.",
                "Tip: leave a heavy vehicle idling or use the replay/free-cam while a counter ticks for the airtime and rollover achievements, and spawn-and-delete traffic in bulk on a small map for \"Quite a lot of Vehicles\". Do the Challenge-type achievements in one sitting from the Challenges menu."
            ]
        },
        {
            "heading": "Campaigns & Tutorials",
            "body": [
                "The scripted content: completing the Senseless Destruction and Hustle and Bustle campaigns, experiencing the start of the story campaign, finishing the final Driver Training challenge, and completing the Free Roam Tutorial (both the first three sections and all lessons).",
                "The achievements here: Senseless Destructor (Complete the \"Senseless Destruction\" Campaign); Beginner's Racing License (Complete the final \"Driver Training\" Challenge.); A Rocky Start (Experience the start of the story); Outstanding Performance (Complete the \"Hustle and Bustle\" Campaign.); Freeroam Tutorial Completionist (Complete all the lessons of the Freeroam Tutorial.); Freeroam Basics (Cover the fundamentals across the first three sections of the Freeroam Tutorial.)."
            ]
        },
        {
            "heading": "Free Roam Distance & Stunts",
            "body": [
                "The sandbox counters and one-offs: driving 250 km and 1000 km total, 1000 km in a single model, spawning 100 and 5000 vehicles, rolling 100 times, 10 minutes of cumulative airtime, driving 15 different models 10 km each, visiting five maps, refuelling at a gas station, taking a Photo Mode shot, saving a custom config, and modifying a vehicle.",
                "The achievements here: Long Way Around (Drive a total distance of 1000km.); Quite a lot of Vehicles (Add over 5000 vehicles total to your freeroam sessions.); Just a few Vehicles (Add over 100 vehicles total to your freeroam sessions.); Rolling Around (Roll your vehicle more than 100 times.); Weightless in the Air (Stay in the air during jumps for a total time of 10 minutes or more.); Vehicle Explorer (Get behind the wheel of 15 unique vehicle models and drive at least 10km in each.); World Explorer (Visit five different maps for 5 minutes or more.); This one's my Favourite (Drive at least 1000km with vehicles of a single model.); Real Mileage (Drive a total distance of 250km.); Filling up the Tank (Refuel your vehicle using a gas station.); Picture Perfect (Capture a moment in Photo Mode.); Save it for later (Save a customized vehicle.); Vehicle Customization (Modify a vehicle by changing parts, tuning or paints.)."
            ]
        },
        {
            "heading": "Challenges & Skills",
            "body": [
                "One star in each Challenge type - Freeform Delivery, Crawl, Bus Mode, Chase, Precision Parking, AI Race, Time Trials, Rally Loop and Rally Stage - plus a first star and a three-star clear, a 1,000,000 total drift score, a 20,000 single drift, and an 8.300s-or-better quarter mile.",
                "The achievements here: Freeform Delivery (Earn at least one star in a Freeform Delivery Challenge.); Crawling (Earn at least one star in a Crawl Challenge or complete a Freeroam Crawl Event.); Bus Driver (Earn at least one star in a Bus Mode Challenge.); Chase Player (Earn at least one star in a Chase Challenge.); Parking Enthusiast (Earn at least one star in a Precision Parking Challenge.); AI Racer (Earn at least one star in an AI Race Challenge.); Time Trials Driver (Earn at least one star in a Time Trials Challenge.); Rally Pro (Earn at least one star in a Rally Loop Challenge.); Rally Driver (Earn at least one star in a Rally Stage Challenge.); Sideways for Days (Get a total drift score of 1,000,000 or more.); Impressive Drift (Get a score of 20,000 or more in a single drift.); Drag Racer (Complete a drag strip run in 8.300s or less.); Challenge Complete! (Complete a challenge and get three stars.); First Challenge (Complete a challenge and get at least one star.)."
            ]
        },
        {
            "heading": "Career Mode - Onboarding & Deliveries",
            "body": [
                "The Career Mode intro chain: joining APM, the APM onboarding and Career Mode access, the onboarding sequence with optional objectives, your first paycheck and first assignment, the parcel/bulk-materials/vehicle delivery introductions, an on-time timed delivery, paying a fine, buying your first Career vehicle, and unlocking a new series.",
                "The achievements here: Paid the Price (Receive and pay a Career Mode fine or penalty.); On Schedule (Complete a timed delivery before its deadline.); Bulk Delivery (Deliver your first order of Bulk Materials.); Car Jockey (Deliver your first vehicle and complete the Car Jockey Introduction.); First Delivery (Deliver your first parcels and complete the Cargo Delivery Introduction.); New Territory (Get access to new challenges by unlocking a new series in Career Mode.); First Assignment (Earn your first paycheck through challenges, deliveries or other activities.); Keys to Success (Purchase your first vehicle in Career Mode.); Extra Credit (Complete the onboarding sequence, including optional objectives.); First Rollout (Complete the APM onboarding sequence and gain access to Career Mode.); Welcome to APM (Join the APM team as part of the onboarding sequence.)."
            ]
        },
        {
            "heading": "Career Mode - Vehicles & Economy",
            "body": [
                "The vehicle-trading and money achievements: changing an insurance policy, evaluating a vehicle's performance and scoring Class X, an expensive private repair, an insurance-claim repair, a three-car garage, selling above purchase cost, a personalised licence plate, missing out on a listing, negotiating below and to 80%-or-lower of asking, buying a $100,000+ vehicle, and earning $10,000 then $100,000 total.",
                "The achievements here: Policy Review (Change the insurance provider, insurance policy or insured vehicle policy.); High End Performance (Score 'Class X' on a performance evaulation on a vehicle in Career Mode.); Performance Review (Evaluate the performance of a vehicle in Career Mode.); That was Expensive (Pay at least $10,000 for a private repair on a vehicle.); Claim Filed (Repair a damaged vehicle through an insurance claim in Career Mode.); Three-Car Garage (Own a collection of at least 3 vehicles in Career Mode.); Flip Profit (Sell a vehicle for more than its original purchase cost through negotiation.); M1N3 N0W (Personalize a vehicle's license plate in Career Mode.); Too Late! (A vehicle you were interested in has been sold before you could buy it.); Deal Maker (Successfully negotiate a vehicle purchase for 80% or lower than the asking price.); Good Deal (Successfully negotiate a vehicle purchase below the listed asking price.); Serious Purchase (Buy a vehicle with a price of over $100,000.); Six-Figure Club (Earn a total of $100,000 through challenges, deliveries or other activties.); First Paycheck (Earn a total of $10,000 through challenges, deliveries or other activities.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the Campaigns and both tutorials first - Senseless Destructor, Beginner's Racing License, A Rocky Start, Outstanding Performance, and the Free Roam Tutorial pair.",
                "2. Spend a session in the Challenges menu earning one star in every type, plus the drift and drag achievements.",
                "3. Play through Career Mode from onboarding - the delivery introductions, the trading economy (negotiation, insurance, flipping) and the money totals all come in sequence.",
                "4. Let the Free Roam counters finish: total distance, single-model distance, vehicles spawned, airtime and rollovers - most will already be close from normal play.",
                "Tip: \"Weightless in the Air\" (10 minutes total airtime) and \"Rolling Around\" (100 rolls) are fastest on a jump/stunt map - launch off a ramp repeatedly, or drop a light car from height with the spawn menu and let it tumble."
            ]
        }
    ]
};

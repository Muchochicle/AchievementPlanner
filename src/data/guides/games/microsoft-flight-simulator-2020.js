// Microsoft Flight Simulator (2020) Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/microsoft-flight-simulator-2020.json), whose 43 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1250410 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "microsoft-flight-simulator-2020-achievement-guide",
    "category": "game",
    "gameSlug": "microsoft-flight-simulator-2020",
    "icon": "✈",
    "title": "Microsoft Flight Simulator (2020) Achievement Guide",
    "summary": "A practical guide to all 43 Steam achievements in Microsoft Flight Simulator (2020) - none are hidden. Covers the first-flight and basics achievements, the activity / landing-challenge / bush-trip achievements, and the long endurance and completion flight-hour milestones. None of the achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Microsoft Flight Simulator (2020) has 43 Steam achievements and none are hidden. A first set teaches the systems - refuelling, the Smart Cam, adjusting weather, a manual A320neo engine start, ATC without assistance, ground services, ILS and deadstick landings. The middle block is the structured content: weekly activities, the three bush trips flown without navigation assistance, the Landing Challenges, and the harder unassisted landings (high wind, short runway, inclined runway). The rest are pure flight-hour milestones - 50, 100, 500 and 1,000 hours in one pilot profile, 500 different airports, and a 300+ mile flight in every stock aircraft.",
                "The catalog marks it a single long-term playthrough - 'Wing Commander' (1,000 flight hours), 'World Traveler' (500 airports) and 'Jack of All Planes' are the pole, and everything else can be set up freely from the World Map. Nothing is missable.",
                "Tip: fly long real-time legs on autopilot while doing other things - the 300+ mile flights, the autopilot mileage, and the 50/100/500/1000-hour milestones all accrue on the same flights."
            ]
        },
        {
            "heading": "First Flights & Basics",
            "body": [
                "Completing an activity, refuelling, the Smart Cam landmark and animal views, adjusting weather, a manual A320neo engine start, ATC landing clearance without assistance, every pre-flight ground service, 1 mile of pushback, a Live Traffic route flown blind, a 300-mile non-stop flight, 600 miles of autopilot, an unassisted windy landing, a grass-runway landing, an ILS landing, a parking-to-parking 300-mile flight, and a deadstick landing.",
                "The achievements here: Challenge Accepted (Complete any activity.); Fill 'er Up! (Refuel at any ground fuel station.); Rubberneck (Use the Smart Cam to view a star landmark for 3 seconds, from a distance of 550 yards or less.); Mother Nature (Adjust the weather during a flight.); Start Me Up (Manually start the Airbus A320neo's engines, without using Assistance.); By the Book (Request landing clearance from ATC at a towered airport, without using ATC assistance.); In The Wild (Use the Smart Cam to view animals for 3 seconds, from a distance of 550 yards or less.); Service with a Smile (Request each type of pre-flight Ground Service while at an appropriate airport gate.); Back-Up Plan (Utilize pre-flight Pushback Service to move aircraft, for a total distance of 1 mile.); Job Shadowing (Create a flight plan based on a Live Traffic aircraft, then fly the route without assistance.); Wheels Up, Wheels Down (Complete a non-stop flight of at least 300 miles from take-off to landing.); Look Ma, No Hands! (Utilize autopilot for a total of 600 miles.); Light Chop (Land at an airport where windspeeds are in excess of 5 knots, without using any assistance.); On the Green (Land on a grass runway, without using any assistance.); Stay on Target (Use the Instrument Landing System (ILS) to complete a landing.); My Way (Complete a non-stop 300+ mile flight from parking to parking spot, without assistance.); Deadstick Landing (After receiving landing clearance, switch off engines and successfully land on the runway.)."
            ]
        },
        {
            "heading": "Activities, Landings & Bush Trips",
            "body": [
                "A weekly activity, the LFBD-to-KSEA flight, 100 miles of taxiing, the 15-knot-wind landing, the short-runway and inclined-runway landings, the Patagonia / Balkans / Nevada bush trips flown without navigation assistance, viewing 25 star landmarks, 50 hours in a profile, every Landing Challenge, 50 hours in rain, and the prop/jet/airliner 300-mile flights.",
                "The achievements here: Working for the Weekend (Complete a weekly activity.); Frequent Flyer Miles (Fly from LFBD airport near Asobo Studio to KSEA airport near Microsoft HQ.); Road Trip (Taxi aircraft for a total distance of 100 miles.); A Few Bumps (Land at an airport where windspeeds are in excess of 15 knots, without using any assistance.); Short Stuff (Land on a runway shorter than 2,000 feet, without using any assistance or bypassing any travel.); Uphill Climb (Land on a runway that has at least a 12 degree incline, without using any assistance.); Fire and Ice (Complete the Patagonia Bush Trip, without using any navigation assistance.); Anemoi (Complete the Balkans Bush Trip, without using any navigation assistance.); Goldrush (Complete the Nevada Bush Trip, without using any navigation assistance.); Tour Guide (Use the Smart Cam to view 25 star landmarks, from a distance of 550 yards or less.); Pilot Program (Accumulate 50 hours of flight time in a single pilot profile.); Greased (Complete every Landing Challenge.); Hydroplaning (Accumulate 50 hours of flight time in rainy weather.); Flights of Fancy (Complete flights of at least 300 miles using a prop, jet and airliner.)."
            ]
        },
        {
            "heading": "Endurance & Completion",
            "body": [
                "An 8-hour propeller flight, 100 hours in a profile, 50 hours at night, 50 hours of IFR flight, 10 weekly activities, every activity, landing at every star airport on the World Map, 100 star landmarks, 500 different airports, a 300-mile flight in every stock aircraft, and 500 and 1,000 hours in a single pilot profile.",
                "The achievements here: Saddle Sore (Complete a flight of at least 8 hours with a propeller or turbo-prop aircraft.); Century Club (Accumulate 100 hours of flight time in a single pilot profile.); Night Owl (Accumulate 50 hours of flight time at night.); Instrumental (Accumulate 50 hours of IFR flight time, including at least one take-off and landing.); Decathlon (Complete 10 weekly activities.); Completionist (Complete every activity.); SIDs and STARs (Land at every star airport shown on the World Map.); Landmarks the Spot (Use the Smart Cam to view 100 star landmarks, from a distance of 550 yards or less.); World Traveler (Land successfully at 500 different airports.); Jack of All Planes (Complete a 300+ mile flight with every aircraft in the standard edition of Flight Simulator.); Journeyman (Accumulate 500 hours of flight time in a single pilot profile.); Wing Commander (Accumulate 1,000 hours of flight time in a single pilot profile.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Do the tutorial-style basics - refuel, Smart Cam, weather, a manual A320neo start, ATC and ground services.",
                "2. Fly the three bush trips (Patagonia, Balkans, Nevada) without navigation assistance.",
                "3. Do the unassisted landing challenges (grass, ILS, deadstick, high wind, short runway, incline) and every Landing Challenge.",
                "4. Fly long real-time legs to accumulate airports, aircraft variety, and night / rain / IFR hours.",
                "5. Keep flying toward the 100, 500 and 1,000-hour milestones and 500 different airports.",
                "Tip: 'World Traveler' (500 different airports) is fastest with short hops between clustered regional strips - plan a route with a dozen close airfields and touch-and-go down the line."
            ]
        }
    ]
};

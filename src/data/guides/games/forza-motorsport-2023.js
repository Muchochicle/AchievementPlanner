// Forza Motorsport Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/forza-motorsport-2023.json), whose 57 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   2440510 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "forza-motorsport-2023-achievement-guide",
    "category": "game",
    "gameSlug": "forza-motorsport-2023",
    "icon": "🏁",
    "title": "Forza Motorsport Achievement Guide",
    "summary": "A practical guide to all 57 Steam achievements in Forza Motorsport - none are hidden. Covers the Builders Cup career and social sharing basics, the Car Level and upgrade progression, the Featured Multiplayer, Free Play and Rivals achievements, and the endurance, weather and race-craft skill feats.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Forza Motorsport (2023) has 57 Steam achievements and none of them are hidden. The career side is the Builders Cup - completing the intro series and one, two, three and four Tours - alongside social basics (share a Design, Tune, Photo and Replay, and earn community credits from a shared Design and Tune). A big block is Car Level progression: reaching level 25 and 50 in a car, level 50 in 10 and then 30 cars, and the max brand discount. The rest is Featured Multiplayer (safety rating, pole, podium), Free Play and Rivals (beat 5/10/20 Rivals), a set of specific car-and-track combos, and endurance and skill feats (50 night laps, 50 rain laps, 300 multiplayer laps, a perfect Track Segment score).",
                "Nothing is missable - the Builders Cup can be replayed, Free Play covers any car/track/condition requirement, and the lap-count and Rivals achievements accumulate. The longest grinds are Garage Royalty (level 50 in 30 cars) and the 300 multiplayer laps.",
                "Tip: Car Level is the main progression currency and the source of the longest achievements - use the same handful of cars across the whole Builders Cup and Free Play so their levels climb toward 50, and prioritise cars from one manufacturer for Brand Ambassador rather than spreading play thin."
            ]
        },
        {
            "heading": "Career, Basics & Social",
            "body": [
                "Completing your first race, your first gift and bought cars, changing your Driver Suit, sharing a Design, Tune, Photo and Replay and earning 10,000 community credits from a Design and a Tune, completing the Builders Cup intro series, one Series, and one, two, three and four Tours in Career, and a stock-car top-three series finish.",
                "The achievements here: Welcome to Forza (Complete your first race); On the House (Receive your first gift car); Make it Yours (Buy your first car); Express Yourself (Change your Driver Suit); My First Art Show (Share one of your Designs); Influencer (Earn 10,000 credits from the community using your Design); Race Engineer (Share one of your Tunes); Setting the Standard (Earn 10,000 credits from the community using your Tune); Paparazzi (Share a Photo); Highlight Reel (Share a Replay); Welcome to Builders Cup (Complete the Builders Cup Intro Series); Built Not Bought (Complete 1 Series in Career Mode); Just Getting Started (Complete 1 Tour in Career Mode); Journeyman Builder (Complete 2 Tours in Career Mode); Pro Builder (Complete 3 Tours in Career Mode); Legendary Builder (Complete 4 Tours in Career Mode); It’s not the car... (Finish in top three of a series with a stock car in Builders Cup)."
            ]
        },
        {
            "heading": "Car Progression & Upgrades",
            "body": [
                "Reaching Car Level 25 and 50 in any car, the max brand discount (five level-50 cars from one manufacturer), Car Level 50 in 10 and then 30 cars, and the tuning feats - making an upgrade, applying a Wide Body conversion, and swapping an engine.",
                "The achievements here: Getting Familiar (Reach Car Level 25 in any car); Pride and Joy (Reach Car Level 50 in any car); Brand Ambassador (Reach max brand discount by owning 5 level 50 cars from a manufacturer); Aficionado (Reach Car Level 50 in 10 cars); Garage Royalty (Reach Car Level 50 in 30 cars); Tinkerer (Make an upgrade to any car); Body Builder (Apply a Wide Body conversion to any car); Heart Transplant (Swap an engine in any car)."
            ]
        },
        {
            "heading": "Multiplayer, Free Play & Rivals",
            "body": [
                "The Featured Multiplayer achievements (first event, a clean qualifying lap, an S Safety Rating across 5 and 10 events, pole position, a podium), the Free Play feats (a rain race, a Quick Race, a sunset lap at Spa, a timed-race win), the Rivals Time Attack ladder (post a time, beat 5/10/20 Rivals), and the five specific car-and-track combo races.",
                "The achievements here: In the Big Leagues (Complete your first Featured Multiplayer Event); Clean Driving (Complete a clean Qualifying lap in Featured Multiplayer); Safety Star (Hold an S Safety Rating across 5 consecutive Featured Multiplayer events); Safety Superstar (Hold an S Safety Rating across 10 consecutive Featured Multiplayer events); Pole Position (Post the best Qualifying Lap Time in a Featured Multiplayer event); Podium Prodigy (Earn a spot on the podium in Featured Multiplayer); Rain or Shine (Create and complete a race in the rain in Free Play); Freedom! (Complete a Quick Race in Free Play); Leisure Cruise (Complete a lap at sunset at Spa Francorchamps); Time Traveler (Win a Timed Race in Free Play); New Rival (Post a lap time on any track in Rivals Time Attack); Amateur Rival (Beat 5 Rivals); Enthusiastic Rival (Beat 10 Rivals); Experienced Rival (Beat 20 Rivals); Endurance Legacy (Complete a race in the 2021 Porsche 911 GT3 on the Kyalami Grand Prix Circuit); American Challenger (Complete a race in a 2023 Cadillac Cadillac Racing V-Series.R on Le Mans Full Circuit); Sightseeing (Complete a race in the 2020 Toyota GR Supra on the Hakone Club Circuit); When in Rome… (Complete a race in the 2020 Ferrari Roma on the Mugello Full Circuit); Free as a Bird (Complete a race in the 1973 Pontiac Firebird Trans Am SD-455 on the Eaglerock Club Circuit)."
            ]
        },
        {
            "heading": "Endurance, Weather & Skill Feats",
            "body": [
                "Maintaining 180mph for 3 seconds, 10 races against the fastest AI, 50 laps at night, 50 laps in the rain, 100 and 300 laps in multiplayer, gaining 12+ positions in a race, a perfect 10 and a 9+ on a Track Segment, a no-penalty race with full Forza Race Regulations, and the fuel-and-tyre strategy feats.",
                "The achievements here: Flying (Maintain a speed of 180mph or higher for 3 seconds); Stiff Competition (Complete 10 races with AI set to the fastest difficulty); Night Owl (Complete 50 laps at night); Rain Meister (Complete 50 laps in the rain); Contender (Complete 100 laps in Multiplayer); Competitor (Complete 300 laps in Multiplayer); Racecraft (Gain at least 12 positions in any Multiplayer race); Self-Improvement (Score a perfect 10 on any Track Segment); Technique (Score a 9 or better on any Track Segment); Excellence (Finish with no penalty with full Forza Race Regulations enabled); Strategist (Change your Fuel and Tire setup for the first time); Running on Fumes (Finish a race with no more than one Fuel Lap left in your car); Well Rounded (Change your tires during a race to use a different tire compound)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through the Builders Cup - the intro series, then all four Tours - which unlocks the career achievements and levels up whichever cars you drive.",
                "2. Do the social basics early: change your Driver Suit, and share a Design, Tune, Photo and Replay (the two community-credit ones follow over time).",
                "3. In Free Play, knock out the specific requirements - a rain race, a Quick Race, the sunset Spa lap, a timed-race win, the five car-and-track combos, and 10 races on the fastest AI.",
                "4. Play Featured Multiplayer for the safety-rating, pole, podium and 300-lap achievements, and Rivals Time Attack for the beat-5/10/20 achievements.",
                "5. Grind Car Level 50 across 30 cars (Garage Royalty) and the 50 night / 50 rain lap counts, which will be the last achievements standing.",
                "Tip: for the 50 night and 50 rain laps, set up a long Free Play race on a short circuit (like Hakone) with time-of-day set to night or weather set to rain and a high lap count - you can grind both counters in one sitting rather than hoping career races land in the right conditions."
            ]
        }
    ]
};

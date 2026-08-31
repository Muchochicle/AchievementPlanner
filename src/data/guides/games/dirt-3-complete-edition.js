// DiRT 3 Complete Edition Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/dirt-3-complete-edition.json), whose 60 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   321040 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "dirt-3-complete-edition-achievement-guide",
    "category": "game",
    "gameSlug": "dirt-3-complete-edition",
    "icon": "🏎",
    "title": "DiRT 3 Complete Edition Achievement Guide",
    "summary": "A practical guide to all 60 Steam achievements in DiRT 3 Complete Edition - none are hidden. Covers the DiRT Tour and Gymkhana Academy, the DC Challenges and Battersea Compound, the online and Rep progression, and the car-pack and Monte Carlo / Shibuya DLC achievements.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "DiRT 3 Complete Edition has 60 Steam achievements and none of them are hidden. They cover the DiRT Tour career (first race, bonus objectives, no-assist and interior-camera wins, wins in every location and weather, first-place in all events), the Gymkhana Academy tutorials and Championships, the Driver Rep milestones (level 10 / 20 / 30), the DC Challenges (Silver / Gold / Platinum medals in all of them), the Battersea Compound missions to 100%, the online / Steam multiplayer achievements (Pro Tour and Jam Session games, party modes, Hardcore Mode), and the DLC content - the Power and Glory and Mud and Guts car packs, and the Monte Carlo and Shibuya locations.",
                "Nothing is missable - every event, challenge and location is replayable and all counters are cumulative.",
                "Tip: do the Gymkhana Academy and its Championships early for the trick-based achievements, then grind the DiRT Tour toward first-place finishes in every event, which also feeds the Rep and location/weather-win achievements."
            ]
        },
        {
            "heading": "DiRT Tour & Gymkhana Academy",
            "body": [
                "The DiRT Tour career achievements - first race, bonus objectives, no-assist and interior-camera wins, wins in every location and weather, the Rep-based unlocks, and first-place in all Tour events - plus the Gymkhana Academy tutorials, platinum medals and Championships.",
                "The achievements here: Into the DiRT (Complete your first DiRT Tour race); Driving School (Complete the tutorials in the Gymkhana Academy); Teacher's Pet (Achieve a Platinum medal in all of the Gymkhana Academy tutorials); Kick Off the Training Wheels! (Achieve a podium finish in the Gymkhana Academy); Reputation Boost (Complete 5 bonus Race Objectives); The Extra Mile (Complete 25 bonus Race Objectives); Crash Proof (Use a flashback in the DiRT Tour after receiving terminal damage and then go on to win the race); Call me Ace! (Ace all trick types in a Gymkhana Championship event); Today's Forecast is...Victory! (Win a race in all weather conditions); Assistance is Futile (Win a DiRT Tour race without using any driver assists); Driven (Win DiRT Tour races using vehicles from each discipline); Pace Setter (Complete a Time Trial race in a vehicle from each class of Rally); Air Miles (Win a race in every location); Self Preservation Society (Win a DiRT Tour race in the Mini Cooper without receiving any damage); The Real Thing (Win a Rally race in the DiRT Tour using the interior camera and the HUD switched off); California Dreams (Achieve a podium finish in the X Games Tournament); Sub Zero Hero (Achieve a podium finish in the Winter X Games Tournament); Rally Evolution (Win a DiRT Tour race in a Rally car from each decade); Rising Talent (Reach Driver Rep Level 10); Shake and Bake (Reach Driver Rep Level 20); Eat my DiRT! (Reach Driver Rep Level 30); World Renowned (Achieve first place finishes and pass the DC Challenge in a World Tour event); Gymkhana Aficionado (Complete all Gymkhana Championships); SuperSeries Champion (Win the DC SuperSeries Championship); From DiRT to Glory (Achieve first place finishes in all DiRT Tour events)."
            ]
        },
        {
            "heading": "DC Challenges & Battersea Compound",
            "body": [
                "The DC Challenges - the Gymkhana points and drift score feats, beating the Bobsleigh, the Smash Attack and Sprint challenges, completing all DC Challenges, and Silver / Gold / Platinum medals in all of them - plus completing the Battersea Compound missions to 25 / 50 / 75 / 100%.",
                "The achievements here: Gym-Carnage (Score 500,000 Points in a Gymkhana Event); Cool Running (Beat the Bobsleigh in the Norway Speed Run DC Challenge); No-bot Wars (Smash every robot in a Smash Attack DC Challenge); Perfect Sprint (Complete a clean run in a Gymkhana Sprint DC Challenge); Showcase Drifter (Score 25,000 drift points in a Drift Showcase DC Challenge); DC Challenger (Complete all of the DC Challenges); DC Silver (Achieve Silver medals in all of the DC Challenges); DC Gold (Achieve Gold medals in all of the DC Challenges); Platinum Performance (Achieve Platinum medals in all of the DC Challenges); Hooning Around (Complete 25% of the Battersea Compound Missions); Donut Addict (Complete 50% of the Battersea Compound Missions); Burnt Rubber (Complete 75% of the Battersea Compound Missions); Battered Battersea (Complete 100% of the Battersea Compound Missions)."
            ]
        },
        {
            "heading": "Online, Multiplayer & Rep",
            "body": [
                "The online achievements - a 4-player Joyride, first Pro Tour race, 10 and 25 Steam games, a Cautious-rated race, the Invasion / Outbreak / Cat n Mouse / Transporter party-mode feats, winning a game in each party mode, a Hardcore Mode win, and the Superstar fan title.",
                "The achievements here: Road Trip (Complete a Joyride online with at least 3 other players); The Professional (Complete your first Pro Tour race on Steam); Taking the Trophy (Win 10 Steam games (Pro Tour or Jam Session)); The Road Ahead (Complete 25 Steam games (Pro Tour or Jam Session)); Honourable Driver (Complete a Steam multiplayer race with a ‘Cautious’ rating); Steer Hunter (Complete a game of Invasion without any negative points (Pro Tour)); Can't Touch This! (Remain uninfected in a round of Outbreak (Pro Tour or Jam Session)); Cheeze It! (Be the mouse in a Cat n Mouse game where your team has gone on to win the game (Jam Session)); Flag Stealer (Steal the flag from the opposing team 5 times in a game of Transporter (Pro Tour)); Join the Party (Win a game in each of the multiplayer party modes (Pro Tour or Jam Session)); King of the Road (Win a Steam race in Hardcore Mode); Super Star (Earn enough fans to achieve the ‘Superstar’ title)."
            ]
        },
        {
            "heading": "Car Packs & Monte Carlo / Shibuya DLC",
            "body": [
                "The DLC achievements - driving and winning with the Power and Glory and Mud and Guts car packs, and the Monte Carlo (all events, 100 miles, a Jam Session win) and Shibuya (all events, a Time Trial, a Jam Session win) locations.",
                "The achievements here: New Wheels (Drive all of the cars from the Power and Glory Car Pack); Service History (Win a DIRT Tour event in a car from the Power and Glory Car Pack using a custom setup); The Lively Set (Drive all of the cars from the Mud and Guts Car Pack); Watch the Paintwork! (Complete a clean race with a car from the Mud and Guts Car Pack); La Grande Victoire (Achieve first place in all DiRT Tour Monte Carlo Events); The Tourist (Drive in excess of 100 miles (161 km) in Monte Carlo); French Connection (Win a Steam race in Monte Carlo (Jam Session)); Tokyo Story (Achieve first place in all DiRT Tour Shibuya Events); Rush Hour (Complete a Time Trial in Shibuya); Metropolis Racer (Win a Steam race in Shibuya (Jam Session))."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Complete the Gymkhana Academy tutorials for platinum and clear its Championships.",
                "2. Grind the DiRT Tour toward first-place finishes in every event, covering all locations and weather and hitting the Rep milestones.",
                "3. Do the DC Challenges, working up to Silver, Gold and Platinum medals across all of them.",
                "4. Complete the Battersea Compound missions to 100%.",
                "5. Play the online / Steam multiplayer modes for the party-mode and game-count achievements, then do the car-pack and Monte Carlo / Shibuya DLC goals.",
                "Tip: the no-assist, interior-camera and no-damage Tour-win achievements are easiest in an early low-power event where the AI is slow - restart until you get a clean run."
            ]
        }
    ]
};

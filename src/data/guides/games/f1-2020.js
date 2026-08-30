// F1 2020 Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/f1-2020.json), whose 50 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1080110 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "f1-2020-achievement-guide",
    "category": "game",
    "gameSlug": "f1-2020",
    "icon": "🥇",
    "title": "F1 2020 Achievement Guide",
    "summary": "A practical guide to all 50 Steam achievements in F1 2020 - none are hidden. Covers the My Team and Driver Career achievements, the online and multiplayer achievements, and the progression and collectible feats.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "F1 2020 has 50 Steam achievements and none of them are hidden. The single-player half is built around the new My Team mode - set up a team, run practice programmes, hire drivers, upgrade facilities, hit $100,000,000 lifetime earnings, win the Constructors' Championship - plus Driver Career feats and some skill challenges (win from last, win with manual transmission, a perfect race weekend, a 9-position gain in the Brawn BGP 001 at Brazil). The online half is completing ranked and casual online races (10, 25, 50, plus 10 clean ones) and joining a League. The rest are progression and cosmetic feats - perks, R&D upgrades, press interviews, photo mode, a favourite trophy.",
                "Nothing is missable - My Team and Career are long-running saves and every online and time-trial mode can be repeated. The completion's longest poles are Making Paper ($100M lifetime earnings in My Team) and the 50-online-races achievement.",
                "Tip: run one long My Team save as your main project - set the AI low and race length short - and almost every single-player achievement (facilities, perks, R&D, $100M, championships, 50 activities, 100 press questions) accrues inside it without any dedicated grinding."
            ]
        },
        {
            "heading": "My Team & Driver Career",
            "body": [
                "Setting up a team and its car reveal, your first outing and race weekend, 10 practice programmes, a first podium, a Flashback, an Elite Driver Proficiency race, playing a highlight, a last-to-first win, a manual-transmission win, reading a car in the showroom, a driver/team negotiation, customisation edits, filling every sponsor slot, changing your driver head, a clean 'Maximum Top Speed' Time Trial lap, $100,000,000 lifetime earnings, the Brawn BGP 001 wet-race feat, winning the Drivers' and Constructors' Championships, hiring an acclaim-15 driver, pole position, and a perfect race weekend.",
                "The achievements here: New Kids on the Block (Set up your own F1 team and show your car to the world at the pre-season car reveal); First Outing (Drive your team's car out on track for the first time in My Team mode); Promising Start (Complete your first race weekend in My Team mode); Data Gatherer (Complete 10 Practice Programmes in F1 during My Team or Driver Career); Hats Off (Get on the F1 podium for the first time); You Didn't See Anything (Activate a Flashback); Become One with the Car (Complete a race using Elite Driver Proficiency (Standard Race Style)); Look at you go! (Play a captured highlight); Phoenix from the Ashes (Win a race after starting in last position on the grid); Get Shifty (Win a race whilst using manual transmission); Enthusiast (Read information on any car in the showroom); Sign on the Dotted Line (Successfully complete a Driver/Team Negotiation during a season in Driver Career or My Team); Make it Yours (Edit a Driver, Car and Badge in Customisation); Represent (Fill every sponsor slot with sponsors on a Car livery); Who are you!? (Change your driver head part way through a My Team or Driver Career playthrough.); Ditch the Downforce (Complete a clean Time Trial lap using the 'Maximum Top Speed' car set up preset); Making Paper (Reach $100,000,000 lifetime earnings in My Team mode); We Are the Champions (Gain 9 positions during a wet race at Brazil in the Brawn BGP 001); Legend Status Achieved (Win the F1 Drivers Championship); Started from the Bottom (Win the Constructors Championship with your team in My Team mode); Big Name Signing (Successfully hire an acclaim level 15 or higher Driver in My Team mode); Front of the Grid (Achieve pole position); The Perfect Weekend (Set the fastest time in all 3 Practice sessions, take Pole Position and win the Grand Prix)."
            ]
        },
        {
            "heading": "Online & Multiplayer",
            "body": [
                "Completing ranked placement races, 10 / 25 / 50 online races, fully upgrading a My Team facility area, a photo-mode adjustment, beating your Personal Best and Rival ghosts, 10 clean online races, the 1992 Williams at Silverstone and Verstappen-at-Zandvoort race wins, any online win, a 25%+ race at Hanoi, a facility upgrade purchase, 2+ secondary sponsor goals in a weekend, all Perks, 100 press questions, joining a League and earning a League Medal, equipping new gloves, a Championship Event win, and spectating an online race.",
                "The achievements here: So it Begins (Complete Ranked Placement races and achieve a Rank.); Finding your Feet (Complete 10 Online Races); Well on Your Way (Complete 25 Online Races); Half Centurion (Complete 50 Online Races); Full Potential (Fully upgrade any facility area in My Team); One for the 'gram (Make an adjustment within photo mode); Who You Gonna Call!? (Beat a Personal Best Ghost and Rival Ghost in Time Trial); Squeaky Clean (Complete 10 Clean Online races); Mad Tash for the Finish Line (Win a race in the 1992 Williams FW14B at Silverstone); The Orange Army (Win a race at Zandvoort as Max Verstappen); Bragging Rights (Win any online race); Red River Racer (Complete a 25% or above race at Hanoi); Team Building (Purchase any upgrade for a Facility in My Team); Here Comes the Money (Complete 2 or more Secondary Sponsor Goals in one race weekend); Its Time for the Perk-olator (Purchase all available Perks in Driver Career or My Team); The Camera Loves You (Answer 100 press interview questions in My Team or Driver Career); Ohh Friends (Join a League); What do you want, a medal? (Get a League Medal); Glove at First Sight (Equip a new pair of gloves from the Podium Pass or Item Shop); Chicken Dinner (Win any Championship Event); Grab the Popcorn (Spectate an online race)."
            ]
        },
        {
            "heading": "Progression Feats & Collectibles",
            "body": [
                "50 completed My Team activities, 5 Invitational events, all vehicle upgrades from one R&D department, Team Acclaim level 20, setting a favourite trophy, and a perfect DRS activation on every zone of a track.",
                "The achievements here: Busy Body (Successfully completed 50 activities in My Team mode); Show Off! (Complete 5 Invitational events during My Team or Driver Career); Maxing Out (Apply all vehicle upgrades from one R&D department); Remember the Name (Reach a Team Acclaim level of 20 in My Team mode); My Precious (Set a favourite trophy); Dat Reaction Speed (DRS) (Activate DRS perfectly on all zones of any track)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Start a My Team save with low AI and short races and make it your main project.",
                "2. Play through seasons doing the practice programmes, press interviews, activities, facility and R&D upgrades, and perks as they come up.",
                "3. Do the skill challenges (win from last, manual transmission, the perfect weekend, the Brawn and 1992 Williams feats) in one-shot Grand Prix events.",
                "4. Grind My Team earnings to $100,000,000 and win the Drivers' and Constructors' titles.",
                "5. Do the online achievements last: ranked placement, 50 races (10 of them clean), a League and League Medal, and a spectated race.",
                "Tip: the fastest route to Making Paper ($100M) is a My Team save with the shortest race distance, all sponsor and R&D bonuses stacked, and race weekends simulated where possible - the earnings accumulate across seasons regardless of how you finish."
            ]
        }
    ]
};

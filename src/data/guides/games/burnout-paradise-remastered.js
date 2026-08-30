// Burnout Paradise Remastered Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/burnout-paradise-remastered.json), whose 56 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1238080 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "burnout-paradise-remastered-achievement-guide",
    "category": "game",
    "gameSlug": "burnout-paradise-remastered",
    "icon": "💥",
    "title": "Burnout Paradise Remastered Achievement Guide",
    "summary": "A practical guide to all 56 Steam achievements in Burnout Paradise Remastered - none are hidden. Covers the license progression and single-player event feats, the 100%-completion and Criterion Elite achievements, and the online and Big Surf Island achievements.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Burnout Paradise Remastered has 56 Steam achievements and none of them are hidden. The single-player half covers working up the license tiers (D through A, then the Burnout, Elite and Criterion Elite licenses), a set of event and stunt feats (a 360 flatspin, a x20 boost chain, a million-point Stunt Run, a Takedown Rampage), and 100% completion of Paradise City - all events, car parks, billboards, smashes, superjumps and road rules. The other half is online (races, events, rivals, challenges, party games, Cops and Robbers) and the Big Surf Island add-on's collectibles and Freeburn challenges.",
                "Nothing is missable - the open world stays fully available and everything can be replayed. The completion's long poles are Criterion Elite (Elite license plus every event, discoverable and road rule) and the online challenge achievements, especially Party Animal (250 online challenges), which need a group or a co-op partner.",
                "Tip: do a full 100% single-player sweep first (it earns most of the license and discoverable achievements together), then dedicate separate sessions to the online challenges and the Big Surf Island content."
            ]
        },
        {
            "heading": "Licenses & Single-Player Progression",
            "body": [
                "Repairing a wrecked car, the Watt St and East Crawford Drive road rules, a race win, 5 billboards, 25 smashes, the D / C / B / A license tiers, 10 clean Road Rage takedowns, a critical-damage repair, a 360 flatspin, 5 superjumps, a clean Marked Man, a x10 Showtime multiplier, a Takedown Rampage, a 100% Power Park, a 2-barrel-roll jump, a x20 boost chain, a million-point Stunt Run, 25 and then all Burning Route wins, 500 takedowns, and the Burnout Driving License.",
                "The achievements here: Lookin' Good (Repair your first wrecked car); Watt? (Set a Time Road Rule on Watt St); It's Showtime (Set a Showtime Road Rule on East Crawford Drive); Great Start (Win a Race); Misdemeanor (Collect 5 Billboards); Off the Beaten Path (Collect 25 Smashes); Bottom of the Class (Get your D class license); Perfect Rage (Get 10 Takedowns in Road Rage without Wrecking); Rising From the Ashes (Repair your car at critical damage in a Road Rage event); Spinnin' Around (Perform a 360 Flatspin in any car); Underachiever (Get your C Class License); Learning to Fly (Successfully land 5 Superjumps); Duckin' and Weavin' (Win a Marked Man without being taken down); The Show Must Go On (Get a x10 multiplier in Showtime); Rampage! (Get a Takedown Rampage); Must Try Harder (Get your B Class License); Parallel Park (Power Park with a 100% rating); Daredevil (Land a 2 barrel roll jump); Boosting Around the World (Get a x20 Boost Chain); Flying Colours (Get your A Class License); Millionaires' Club (Score over 1,000,000 in Stunt Run); Supercharged (Win 25 Burning Routes); Car in a China Shop (Get 500 Takedowns (either online or offline)); Paradise Won (Win your Burnout Driving License)."
            ]
        },
        {
            "heading": "100% Completion & Criterion Elite",
            "body": [
                "Winning all Burning Routes, finding all Events, all Car Parks, all Drive Thrus, collecting all Billboards and all Smashes, landing all Superjumps, setting a Time road rule on every road, a Showtime road rule on every road, the Elite license, and Criterion Elite (Elite license plus every event, every discoverable and every road rule).",
                "The achievements here: All Pimped Out (Win all Burning Routes); Explorer (Find all Events); Paid and Displayed (Find all Carparks); Bustin' Out (Collect all Billboards); Totally Smashed (Collect all Smashes); Flying High (Successfully land all Superjumps); Speed King (Set a Time Road Rule on every road); Crashin' All Over The World (Set a Showtime Road Rule on every road); Shopaholic (Find all Drive Thrus and Car Parks); Elite (Win your Burnout Elite License); Criterion Elite (Get your Elite License, win every event, find all discoverables and beat every Road Rule)."
            ]
        },
        {
            "heading": "Online & Big Surf Island",
            "body": [
                "An online race, a first 8-player win, 10 online race wins, 20 online events, 50 and a first online rival, 1 / 25 / 250 online challenges, 2 whole sections of challenges, leading Today's Best Scores, a perfect and an 8-round 8-player party game, both Cops and Robbers win conditions plus a gold delivery, and the Big Surf Island content - 20 island smashes, 15 island billboards, all 15 island events, the Crash TV mega jump air time, and all 10 island Freeburn challenges.",
                "The achievements here: Online Racer (Complete an online race); First Win (Win your first 8 player online race); Online Champion (Win 10 online Races); Online and Kicking (Complete 20 online Events); Firestarter (Make 50 online Rivals); Just for Pics (Make your first online Rival); Join the Party (Complete 1 online Challenge (Timed & Bike challenges do not count)); Party Crasher (Complete 25 online Challenges (Timed & Bike challenges do not count)); Party Animal (Complete 250 online Challenges (Timed & Bike challenges do not count)); Block Party (Complete 2 whole sections of online Challenges (Timed & Bike challenges are not required to be finished)); Burnout Skills (In an 8 player online Freeburn lead 6 of the Today's Best Scores (6/11 for Cars) (6/6 for Bikes)); Perfect Party Game (Complete a Party game where every player scores in every round); Massive Party Game (Complete a party game of 8 rounds with 8 players); The Right Side of the Law (Awarded for being on the winning Cops team in a Cops and Robbers game); The Gang Is Back In Town (Awarded for being on the winning Robbers team in a Cops and Robbers game); Golden (Awarded for delivering the Gold to your team base in a Cops and Robbers game); Smash n' Grab (Collect 20 Island Smashes); Surf Boards (Collect 15 Island Billboards); Island Explorer (Find all 15 Island events); Crash TV Air Time (Land the Mega Jump from the Crash TV Ski Jump with at least 4.5 seconds of Air Time); People Person (Awarded when you complete all 10 Island Freeburn Challenges (2 - 8 players))."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through Paradise City doing every event to earn the license tiers up to the Burnout Driving License.",
                "2. Sweep all discoverables (billboards, smashes, superjumps, car parks, drive thrus) and set a Time and Showtime road rule on every road, which finishes the Elite and Criterion Elite achievements.",
                "3. Do the stunt and event feats (the flatspin, the x20 boost chain, the million-point Stunt Run, the Takedown Rampage) during that sweep.",
                "4. Play the Big Surf Island add-on and clear its collectibles, events and Freeburn challenges.",
                "5. In dedicated online sessions, do the race, event, rival, party-game and Cops and Robbers achievements, and grind the online challenges up to Party Animal (250).",
                "Tip: the 250-online-challenge achievement is the single biggest time sink - do challenges in a full 8-player Freeburn party where everyone cooperates, since co-op challenges completed by the group all count for every participant."
            ]
        }
    ]
};

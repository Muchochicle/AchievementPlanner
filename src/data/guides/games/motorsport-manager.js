// Motorsport Manager Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/motorsport-manager.json), whose 73 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   415200 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "motorsport-manager-achievement-guide",
    "category": "game",
    "gameSlug": "motorsport-manager",
    "icon": "🏎️",
    "title": "Motorsport Manager Achievement Guide",
    "summary": "A practical guide to all 73 Steam achievements in Motorsport Manager - none are hidden. Covers the team and driver management achievements, the championship and self-imposed-restriction achievements, and the named-team, challenge-tier and endurance achievements. None of the achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Motorsport Manager has 73 Steam achievements and none are hidden. About a third are team and driver management (hiring and firing, a 20m/year driver, maxing relationships and morale, scouting star drivers, building and fitting 'Legendary' parts, fully upgrading HQ), a third are championship wins and pointed restrictions (win a season without upgrading anything, without new sponsors, seven Driver's Championships), and a third are the named World Motorsport Championship teams, the Rookie / Pro / All-Star challenge tiers, and the endurance (IEC-A) achievements including a sub-1.92-second pit stop.",
                "The catalog marks it difficulty 4 and about two save files. The 'win a whole season without X' achievements and the year-gated named-team goals want dedicated attempts on a strong team.",
                "Tip: play a long dynasty save for the management and multi-championship achievements, and set up focused short saves for the no-upgrade / no-sponsor season wins and the named-team targets."
            ]
        },
        {
            "heading": "Team & Driver Management",
            "body": [
                "A 100m budget, 10 poles in a season, a last-to-first win, hiring and firing drivers, a 20m/year signing, the Underdog Challenge, racing every track variation, race and practice wins, pole streaks, a by-a-minute win, a 5%-engine finish, a 3-compound race, 100% marketability, a fully upgraded HQ, a temp-driver podium, a past-partners hire, promoting a reserve, maxed relationships, scouting a 4.5-star and an under-18 5-star, and 100% and 1% driver morale.",
                "The achievements here: Millionaire's Club (Have a budget of over 100 million); Top Grid Guru (Start 10 races on pole position in one season); Backmarker to Best (Have a driver win a race after starting last on the grid); Welcome Aboard! (Hire a driver); Retired (Fire a driver); Kaching! (Hire a driver with an agreed wage of 20 million a year or more); Every Dog Has Its Day (Complete the \"Underdog Challenge\"); Track Literate (Finish a race on every track variation of every track); \"In Order to Finish First, You First Have To Finish.\" (Have a driver win a race); Hat-Trick (Have one of your drivers win 3 races consecutively); Practice Makes Perfect! (Finish top in practice); Lap Time Leader (Qualify in pole position 3 times in a row); Hot Lap (Qualify in pole position by over a second); Blue Flag (Win a race by over a minute); \"Do You Smell Smoke?\" (Have a driver pass the chequered flag in a race with their engine's condition under 5%); Variety Is The Spice Of Life (Finish a race having used 3 different tyre compound types on one car); So Hot Right Now (Reach 100% Marketability); State of the Art (Fully upgrade your HQ); Drivers Are Overrated (Have a temporary driver get a podium position in a race); Dream Team (Hire a driver and mechanic who have worked together in the past); Time To Shine (Promote a reserve driver); Relationship Counsellor (Max out the driver/mechanic relationship for both your No. 1 and No. 2 drivers); Struck Gold (Scout a 4.5 star (or above) driver); Rising Star (Scout an under-18 driver with 5-star potential)."
            ]
        },
        {
            "heading": "Championships & Restrictions",
            "body": [
                "Winning a vote (and with 3+ power), building and fully fitting 'Legendary' parts, a 30m season car, a no-build championship, a 1m and a 5-star sponsor, the Teams' and Drivers' Championships (and both in one season), seven Driver's Championships, no-improvement and no-sponsor championship wins, completing a season, surviving the chairman's ultimatum, getting fired and rehired, the Top Manager challenge, a 'Gone Rogue' win, your first race, and a GMA risky-part discovery.",
                "The achievements here: World's Best Boss (Have a driver reach 100% morale); You're Here to Race, Not to Have Fun... (Have a driver reach 1% morale); Democracy Reigns (Win a vote); Friends in High Places (Win a vote with 3 voting power or more); Tinkerer (Build a 'Legendary' part); Rattletrap to Pocket Rocket (Fit a car exclusively with 'Legendary' parts); Nothing But The Best (Spend over 30 million on a new season's car); I like it how it is! (Win a championship by going through the whole season without building or upgrading anything in the HQ.); Jet Skis for Everyone! (Sign a sponsorship deal worth over 1 million); I'm Kind of a Big Deal... (Sign a 5-star sponsor); No \"I\" In Team (Win the Teams' Championship); Pit Wall Wunderkind (Win both the Teams' and Drivers' Championships in one season); \"I Like to Race, Not to Do Laps Alone\" (Win a 'Driver's Championship'); If It Ain't Broke... (Win a championship by going through the whole season without improving the performance or reliability of any car parts through the Part Improvement screen.); Money's Overrated (Win a championship by going through the whole season without signing any new sponsors.); Seasoned (Complete a Season); \"Let's Put it This Way, I Like Number Seven.\" (Win 7 'Driver's Championships'); \"You Can Cut The Tension With a Cricket Stump\" (Survived the chairman's ultimatum); Black Flag (Get fired); Re-Entering (Get hired); Managerial Mogul (Complete the 'Top Manager' challenge); \"Just Leave Me Alone, I Know What I'm Doing\" (Have a driver win a race while they have 'Gone Rogue'); Chequered Flag (Finish your first race); It Came Like That! (Have a risky part be discoverd by the GMA)."
            ]
        },
        {
            "heading": "Named Teams, Challenges & Endurance",
            "body": [
                "Winning WMC titles as Silva, Predator, Kruger, Thornton and Chariot, hiring a 5-star designer as Zampelli, custom-team WMC and IGTC doubles, the year-gated goals (William Evans, Predator by 2017, Kitano by 2018, Rafael Rodrigues 2016), the Rookie / Pro / All-Star challenge tiers, the IEC-A endurance championship and its comeback, danger-zone, promotion, two-driver and three-ERS-type variants, a sub-1.92-second pit stop, and an all-20-rating pit crew.",
                "The achievements here: Silva's Legacy (Win the WMC's 'Team' or 'Driver' championship as the race team Silva); Predator (Win a 'Driver's Championship' as Predator Team Racing); Former Glory (Win the WMC's 'Team' or 'Driver' championship as Kruger Motorsport); Living Up To Their Namesake (Hire a 5-star designer as Zampelli Engineering); Thorn in My Side (Win the Teams' Championship as Thornton Motorsport); Swing Low... (In the same season, win both the Teams' and Drivers' Championships in WMC as Chariot Motor Group); Building a Legend (Create a new team); Ultimate Victory (Win the WMC’s ‘Driver’ and ‘Team’ Championship in the same year with a customly created new team); Adaptable  (Win the IGTC’s ‘Driver’ and ‘Team’ Championship in the same year with a customly created new team); Where There’s a Will There’s a Way (Have the driver William Evans win a race); Hasty Hunters (Win the ERS ‘Team Championship’ as Predator Team Racing by 2017); Waiting in the Wings (Win the WMC’s ‘Team Championship’ by the end of the 2018 season as Kitano Sport); Once a King, Always a King (Have the driver Rafael Rodrigues win the 2016 IGTC ‘Driver’s Championship’ as Oranje GT); Challenged (Successfully complete your first challenge); Rookie (Complete all challenges in the 'Rookie' Tier); Pro (Complete all challenges in the 'Pro' Tier); All-Star (Complete all challenges in the 'All-Star' Tier); Endurance Champion (Win the IEC-A); There's Always Time (Win an endurance race after being at least 120 seconds behind the leader in IEC-A); Highway to the Danger Zone (Finish a race with a driver in the danger zone); Rising Tigers (Get promoted to the IEC-A as the Sangju Tigers); Dynamic Duo (Win an endurance racing with only 2 drivers having driven); Jack of All Trades (Win the IEC-A championship with each of the three ERS types); Fastest Crew in the World (Do a sub 1.92 second pit stop (must include a tyre change)); 20/20 Vision (Have a pit crew where each active member has a 20 rating for their job)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Start a long career: hire and develop drivers, max relationships and morale, upgrade the HQ, build 'Legendary' parts.",
                "2. Win the Teams' and Drivers' Championships, then keep going for seven Driver's titles.",
                "3. Do the restriction championships on a dominant team: no upgrades, no new sponsors, no performance improvements.",
                "4. Work through the Rookie, Pro and All-Star challenge tiers.",
                "5. Do an endurance (IEC-A) save for its championship and variant achievements, including the sub-1.92s pit stop.",
                "6. Do the named-team and year-gated achievements in focused saves with those specific teams.",
                "Tip: the year-gated named-team achievements (e.g. 'Predator by 2017') only work if you start in the earliest season and take that exact team, so plan those saves deliberately rather than hoping to backfill them."
            ]
        }
    ]
};

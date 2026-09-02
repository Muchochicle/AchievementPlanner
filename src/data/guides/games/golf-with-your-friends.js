// Golf With Your Friends Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/golf-with-your-friends.json), whose 83 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   431240 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 7 achievement(s) are Steam-hidden or ship no Steam
//   description; their description here is researched from community
//   100% guides and is a curatorial summary. Every other description is
//   Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "golf-with-your-friends-achievement-guide",
    "category": "game",
    "gameSlug": "golf-with-your-friends",
    "icon": "⛳",
    "title": "Golf With Your Friends Achievement Guide",
    "summary": "A practical guide to all 83 Steam achievements in Golf With Your Friends (7 hidden). The 7 hidden achievements are 'play a full game on Hockey mode' for seven of the courses - the missing sibling to the visible Classic and Dunk versions. Everything else - the shot and scoring counters, and 'full game' plus 'par or better' for every course across the three modes - carries Steam's own text.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Golf With Your Friends has 83 Steam achievements, 7 of them hidden. It is a chaotic co-op mini-golf game with a dozen themed courses and three modes: Classic, Dunk (basketball hoops) and Hockey (goals). The visible achievements cover the shot counters (100 / 1,000 / 10,000 shots), the scoring milestones (10 birdies, an albatross, 10 albatrosses, 50 pars, a hole in one, running out of time), and, for each course, three 'play a full game' achievements (one per mode) plus a 'par or better on Classic' achievement.",
                "The 7 hidden achievements are just the 'play a full game on Hockey' achievement for seven of the courses (Haunted, Oasis, Pirate Cove, Forest, Twilight, Candyland, Ancient) - the same pattern as the visible Classic and Dunk versions.",
                "The catalog marks it difficulty 2 and single-playthrough. Nothing is missable; every course and mode is freely selectable and the counters accumulate across sessions."
            ]
        },
        {
            "heading": "Counters & Scoring",
            "body": [
                "The shot counters (100 / 1,000 / 10,000), the scoring milestones (10 birdies, an albatross, 10 albatrosses, 50 pars, a hole in one), and running out of time (once and 50 times).",
                "The achievements here: Beginner Putter (Take 100 shots); Amateur Putter (Take 1000 shots); Master Putter (Take 10000 shots); Hole in one! (Get a hole in one!); Not enough time in the day! (Out of time); Not enough time in the week! (Out of time 50 times); Raise the limit! (Max shots reached); Fly, fly away! (Get 10 birdies); Nice shot! (Get an albatross); Getting good! (Get 10 albatross); On par! (Get 50 pars)."
            ]
        },
        {
            "heading": "Courses on Classic",
            "body": [
                "'Play a full game on Classic' and 'par or better on Classic' for each course.",
                "The achievements here: TIMBER! (Play a full game of Forest on Classic); Friends With Pharaoh's (Play a full game of Oasis on Classic); Magical! (Play a full game of Twilight on Classic); BOO! (Play a full game of Haunted on Classic); Sweet tooth! (Play a full game of CandyLand on Classic); Roar! (Play a full game of Ancient on Classic); Treemendous! (Get par or better on Forest Classic); Parfect! (Get par or better on Oasis Classic); Twinkle twinkle little par (Get par or better on Twilight Classic); Can't spook me! (Get par or better on Haunted Classic); That was a rocky road (Get par or better on Candyland Classic); Your Ancestors would be proud (Get par or better on Ancient Classic); Blast off! (Play a full game of Space Station on Classic); Incoming! (Play a full game Worms on Classic); Unnatural History (Play a full game of Museum on Classic); Crash Landed (Play a full game of Volcano on Classic); Space Jamming (Play a full game of Space Station on Dunk); Catch! (Play a full game of Worms on Dunk); A History of Dunk  (Play a full game of Museum on Dunk); Ring of Fire (Play a full game of Volcano on Dunk); One small goal for man (Play a full game of Space Station on Hockey); Hockey Hand Grenade  (Play a full game of Worms on Hockey); Hockey, A History (Play a full game of Museum on Hockey); Fire Puck (Play a full game of Volcano on Hockey); Golf With Your Friends (Play a hotseat or online game); Who's The Food Now? (Get eaten by Gingy in the practice area); The Course Is That Way (Go out of bounds); Stay On Target (Go out of bounds 50 times); Under the Sea (Play a full game of Deep on Classic); Blacklight Boss (Get par or better on Deep Classic); Castle Crashing (Play a full game of Bouncy Castle on Classic); I'm The King of the Castle (Get par or better on Bouncy Castle Classic); Into the Void (Play a full game of Corrupted Forest on Classic); Eye See You! (Get par or better on Corrupted Forest Classic); Back In Time For Tee (Play a full game of Peaceful Pines on Classic); You’re the Best, By Par (Get par or better on Peaceful Pines Classic); Friends in High Places (Play a full game of Olympus Odyssey on Classic); Pride of Zeus (Get par or better on Olympus Odyssey Classic)."
            ]
        },
        {
            "heading": "Courses on Dunk & Hockey",
            "body": [
                "'Play a full game on Dunk' for each course, and 'play a full game on Hockey' (the seven hidden ones) plus the rest of the Hockey set.",
                "The achievements here: Timber Hoops (Play a full game of Forest on Dunk); Dunks with Pharaohs (Play a full game of Oasis on Dunk); Midnight swish (Play a full game of Twilight on Dunk); Nightmarish game of basketball  (Play a full game of Haunted on Dunk); Sweet dunk! (Play a full game of CandyLand on Dunk); Prehistoric lay-Up (Play a full game of Ancient on Dunk); Paaarrrrrrr! (Get par or better on Pirate Classic); CANNON BALL!!! (Play a full game of Pirate on Dunk); Anchors aweigh! (Play a full game of Pirate on Classic); Haunted Hat Trick (Play a full game of Haunted on Hockey mode.); Shoot out in the sand (Play a full game of Oasis on Hockey mode.); Penalty shot with pirates (Play a full game of Pirate Cove on Hockey mode.); Face off in the forest (Play a full game of Forest on Hockey mode.); Light the Lamp (Play a full game of Twilight on Hockey mode.); Sweet shot (Play a full game of Candyland on Hockey mode.); Dino defender (Play a full game of Ancient on Hockey mode.); Scientific Precision (Get par or better on Space Station Classic); Targetted Destruction (Get par or better on Worms Classic); Historic Achievement (Get par or better on Museum Classic); The Highest Ground (Get par or better on Volcano Classic); Locked Up (Play a full game of Escapists on Classic); Prison Yard Dunk (Play a full game of Escapists on Dunk); Sin Binned (Play a full game of Escapists on Hockey); No Prison Can Hold Me! (Get par or better on Escapists Classic); Deep Dunker (Play a full game of Deep on Dunk); Back of the Net (Play a full game of Deep on Hockey); Belle of the Ball (Play a full game of Bouncy Castle on Dunk); Bouncing on Ice (Play a full game of Bouncy Castle on Hockey); Dunking in the Dark (Play a full game of Corrupted Forest on Dunk); Howe Did I Get Here? (Play a full game of Corrupted Forest on Hockey); Folly-oop (Play a full game of Peaceful Pines on Dunk); Ruins or Rink? (Play a full game of Peaceful Pines on Hockey); Hermes' Apprentice (Play a full game of Olympus Odyssey on Dunk); Slapshot that on a Vase! (Play a full game of Olympus Odyssey on Hockey)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play full games on Classic across every course, chasing 'par or better' on each as you go.",
                "2. Play a full game of every course on Dunk, then on Hockey (the seven hidden Hockey achievements plus the rest).",
                "3. Let the shot counter climb toward 10,000 across all of the above - it will get most of the way there naturally.",
                "4. Mop up the scoring milestones: 10 birdies, 10 albatrosses, 50 pars, a hole in one, and run out of time 50 times (leave the timer to expire on easy holes).",
                "Tip: play modes in bulk per course - do Classic, Dunk and Hockey back to back on one course before moving on - so the 'full game' achievements and 'par or better' land together and you are not reloading the same course three separate times."
            ]
        }
    ]
};

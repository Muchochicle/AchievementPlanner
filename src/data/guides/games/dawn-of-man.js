// Dawn of Man Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/dawn-of-man.json), whose 24 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   858810 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None are hidden; every one ships a real, official Steam description,
//   quoted verbatim below.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "dawn-of-man-achievement-guide",
    "category": "game",
    "gameSlug": "dawn-of-man",
    "icon": "🏹",
    "title": "Dawn of Man Achievement Guide",
    "summary": "A practical guide to all 24 Steam achievements in Dawn of Man - none are hidden. Covers early survival and Age progression, population and technology milestones, and the game's dedicated scenarios and challenges.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Dawn of Man has 24 Steam achievements and none are hidden. As a prehistoric settlement-survival game spanning the Stone Age through the Iron Age, the list covers early survival milestones (completing the tutorial, mining, hunting deer and a Mammoth, reaching the Iron Age, forging steel swords), the game's 30-milestone completion system (both normal and Hardcore), population and technology goals, and the three dedicated scenarios (Continental Dawn, The Northlands, Ancient Warriors) plus the game's 4 optional challenges.",
                "Nothing is missable - every milestone, population count, and scenario goal is a permanent save-file record, and scenarios and challenges can be replayed any time. The genuine long poles are Ultimate Completion (all 30 milestones on Hardcore) and Express Evolution (researching the entire tech tree in under 6 hours of real playtime), both of which need a well-optimized, focused playthrough rather than casual play.",
                "Tip: Megalith Madness (building a Menhir, Dolmen, Stone Circle, Statue, and Cairn all in the same game) is easy to miss if you are not planning for it - decide early in a playthrough that you want this achievement and start building each monument type as soon as it unlocks, rather than trying to retrofit them into a late-game settlement."
            ]
        },
        {
            "heading": "Early Survival & Progression",
            "body": [
                "The opening milestones: launching the game, completing the tutorial, having 3 mines at once in the Neolithic era, hunting 100 deer, hunting a Mammoth, reaching the Iron Age, producing 10 Steel Swords, completing 5 milestones in Hardcore mode, and completing all 30 milestones both normally and in Hardcore mode.",
                "The achievements here: Launch Forth (Launch the game); Ancient Apprentice (Complete tutorial); Ancient Miner (Have at least 3 mines at one given time in the Neolithic era); The Deer Hunter (Hunt 100 deer in one game); Massive Hunter (Hunt a Mammoth); Iron Man (Get to the Iron Age); Master of Steel (Produce 10 Steel Swords in one game); Hardened Survivor (Complete 5 milestones in hardcore mode); Completion (Complete all 30 milestones); Ultimate Completion (Complete all 30 milestones in hardcore mode)."
            ]
        },
        {
            "heading": "Population & Tech",
            "body": [
                "Reaching 200 people in your settlement, 100 people in the Paleolithic era specifically, researching the entire tech tree in under 6 hours of gameplay, and unlocking the Bronze Age and then Steelmaking tech within the Ancient Warriors scenario.",
                "The achievements here: Overpopulation (Get 200 people in your settlement); Paleolithic Overpopulation (Get 100 people in your settlement in the Paleolithic era); Express Evolution (Research all techs in the tech tree in less than 6 hours of gameplay); Siege Progress (Unlock the Bronze Age in the Ancient Warriors scenario); Siege Overcome (Unlock the Steelmaking tech in the Ancient Warriors scenario)."
            ]
        },
        {
            "heading": "Scenarios & Prestige",
            "body": [
                "Reaching a population of 50 in each of the three dedicated scenarios (Continental Dawn, The Northlands, Ancient Warriors), building a Menhir, Dolmen, Stone Circle, Statue, and Cairn in the same game, reaching 1000 prestige (and 900 within the Stone Age), and completing the game's 4 optional challenges both normally and on Hardcore mode.",
                "The achievements here: Continental Settlement (Achieve a population of 50 in the Continental Dawn scenario); North Settlement (Achieve a population of 50 in The Northlands scenario); Warrior Settlement (Achieve a population of 50 in the Ancient Warriors scenario); Megalith Madness (Build a Menhir, Dolmen, Stone Circle, Statue and Cairn in the same game); Prestigious (Reach 1000 prestige); Stone Prestige (Reach 900 prestige in the Stone Age); Challenger (Complete 1 challenge); Hyper Challenger (Complete all 4 challenges); Ultimate Challenger (Complete all 4 challenges in hardcore mode)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Complete the tutorial, then push through the early Stone/Paleolithic Age milestones: 3 simultaneous mines in the Neolithic era, hunting 100 deer and a Mammoth, and reaching 100 people in the Paleolithic era.",
                "2. Advance toward the Iron Age, forging 10 Steel Swords along the way, and work toward completing all 30 milestones (and 5 of them on Hardcore mode for Hardened Survivor).",
                "3. Grow a settlement to 200 population, research the full tech tree quickly for Express Evolution if you are aiming for a speed-focused run, and push prestige toward 1000 (and 900 within the Stone Age itself).",
                "4. Play the three dedicated scenarios - Continental Dawn, The Northlands, and Ancient Warriors - each toward a population of 50, and unlock the Bronze Age and Steelmaking tech specifically within Ancient Warriors.",
                "5. Build all five monument types (Menhir, Dolmen, Stone Circle, Statue, Cairn) in one game for Megalith Madness, and complete the game's 4 optional challenges, including on Hardcore mode for Ultimate Challenger.",
                "Tip: Overpopulation (200 people) and Paleolithic Overpopulation (100 people in the Paleolithic era specifically) do not need to happen in the same game - the Paleolithic version is much easier attempted as an early, focused rush before advancing eras, rather than trying to sustain that population once you have moved on."
            ]
        }
    ]
};

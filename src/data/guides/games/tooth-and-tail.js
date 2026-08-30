// Tooth and Tail Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/tooth-and-tail.json), whose 38 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   286000 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "tooth-and-tail-achievement-guide",
    "category": "game",
    "gameSlug": "tooth-and-tail",
    "icon": "🐀",
    "title": "Tooth and Tail Achievement Guide",
    "summary": "A practical guide to all 38 Steam achievements in Tooth and Tail - none are hidden. Covers the campaign Heroic Objective achievements and the Ranked Arena achievements.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Tooth and Tail has 38 Steam achievements and none of them are hidden. Thirty are the campaign - a Heroic Objective for each mission across the four leaders' acts (Bellafide, Hopper, Quartermaster, Archimedes), the four act-completion achievements, Revolutionary for all Heroic Objectives, and Platinum for all achievements. The other eight are the Ranked Arena checkpoints, each of which can also be earned by beating a CPU of increasing difficulty offline (a 1v1 vs. medium up to a fast 1v1 vs. ruthless).",
                "Nothing is missable - missions are replayable and the Arena checkpoints have an offline alternative, so no online play is strictly required. The completion is short; the hardest parts are a few tricky Heroic Objectives and the top Arena checkpoint (a sub-5-minute win against a ruthless CPU).",
                "Tip: play the campaign doing each mission's Heroic Objective on the first clear where you can, then knock out the Arena checkpoints against offline CPUs, working up the difficulty tiers."
            ]
        },
        {
            "heading": "Campaign Heroic Objectives",
            "body": [
                "Revolutionary (all Heroic Objectives) and Platinum, the Heroic Objective in each Bellafide mission (The Bonepit Riots through To the Ends), each Hopper mission (Snikaree Liberation through The Hungry Face a Stiff Wind), each Quartermaster mission (Frozen in Noe through What Might Be) and each Archimedes mission (Bonepit Exile through Victors Will Feast), plus completing each act's final mission.",
                "The achievements here: Revolutionary (Complete all Heroic Objectives); Platinum (Get all Achievements); Exiled (Complete the Heroic objective in \"The Bonepit Riots\"); Well Paid Militia (Complete the Heroic objective in \"Black Sledge Uprising\"); Industrial Farmer (Complete the Heroic objective in \"46 South Dockside\"); Hot Butter (Complete the Heroic Objective in \"Fuel of the Firebrand\"); Dirty Insurgents (Complete the Heroic Objective in \"Hollow in the Gut\"); duDudu (Complete the Heroic objective in \"To the Ends\"); Slippery (Complete the Heroic objective in \"Snikaree Liberation\"); Rags to Riches (Complete the Heroic objective in \"The Siege of Ragfall Road\"); Wa-pa-pa-pa-pa-pa-pow! (Complete the Heroic objective in \"The Sand Kiln at Levacaloo\"); What's Yours is Mine (Complete the Heroic objective in \"Scrapetown Cutpurse\"); An Offal You Can't Refuse (Complete the Heroic objective in \"Scrapetown Racket\"); There's No Place Like Home (Complete the Heroic objective in \"The Hungry Face a Stiff Wind\"); Fire Wire (Complete the Heroic objective in \"Frozen in Noe\"); Miracle Diet (Complete the Heroic objective in \"Howling Vell\"); Look out Below! (Complete the Heroic objective in \"Defense of the Cold Mark Lows\"); Lock and Key (Complete the Heroic objective in \"Betrayal at Vacancee\"); Pacifist (Complete the Heroic objective in \"The War for Meat\"); Fire On Me (Complete the Heroic objective in \"What Might Be\"); Bonepit Redux (Complete the Heroic objective in \"Bonepit Exile\"); The Hand that Feeds (Complete the Heroic objective in \"Awash in Salawa\"); Windwalker (Complete the Heroic objective in \"Vacancee Downfall\"); Sent to Slaughter (Complete the Heroic objective in \"Sage Marro Speaks\"); Pigherder (Complete the Heroic objective in \"Swine, Inscribed\"); The Fate of Animals (Complete the Heroic objective in \"Victors Will Feast\"); State of Nature (Complete \"To the Ends\"); Tyranny of the Masses (Complete \"The Hungry Face a Stiff Wind\"); Peace over Morality (Complete \"What Might Be\"); We Feast (Complete \"Victors Will Feast\")."
            ]
        },
        {
            "heading": "Ranked Arena",
            "body": [
                "The Agitator, Rabble Rouser, Militant, Firebrand, Hero of the Hungry, Great Provider and Fury of the Feast checkpoints (each also earnable by beating CPUs of rising difficulty), and Deadbones (100 Ranked wins, or a sub-5-minute 1v1 vs. a ruthless CPU).",
                "The achievements here: Agitator (Advance to the Agitator checkpoint in Ranked OR win a 1v1 against a medium CPU); Rabble Rouser (Advance to the Rabble Rouser checkpoint in Ranked OR win a 1v1 against a hard CPU); Militant (Advance to the Militant checkpoint in Ranked OR win a 1v1 against a brutal CPU); Firebrand (Advance to the Firebrand checkpoint in Ranked OR win a 2v1 against two medium CPUs); Hero of the Hungry (Advance to the Hero of the Hungry checkpoint in Ranked OR win a 2v1 against two hard CPUs); The Great Provider (Advance to the Great Provider checkpoint in Ranked OR win a 2v1 against two brutal CPUs); Fury of the Feast (Advance to the Fury of the Feast checkpoint in Ranked OR win a 2v1 against two ruthless CPUs); Deadbones (Win 100 matches in Ranked OR win a 1v1 against a ruthless CPU in less than 5 minutes)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the campaign act by act, reading each mission's Heroic Objective before you start so you can complete it on the first clear.",
                "2. Replay any missions where you missed the Heroic Objective.",
                "3. Completing all Heroic Objectives earns Revolutionary automatically.",
                "4. Do the Arena checkpoints offline: 1v1 vs. medium, hard and brutal CPUs, then 2v1 against pairs of medium / hard / brutal / ruthless CPUs.",
                "5. Do a sub-5-minute 1v1 win against a ruthless CPU for Deadbones, then Platinum unlocks.",
                "Tip: the harder offline CPU wins come down to a fast opening - scout the CPU's farm, rush a cheap warren or a single strong unit type, and end the game before the AI's economy scales, since prolonged games favour its perfect micro."
            ]
        }
    ]
};

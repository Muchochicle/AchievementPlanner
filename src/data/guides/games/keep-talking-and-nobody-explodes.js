// Keep Talking and Nobody Explodes Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/keep-talking-and-nobody-explodes.json), whose 10 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   341800 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "keep-talking-and-nobody-explodes-achievement-guide",
    "category": "game",
    "gameSlug": "keep-talking-and-nobody-explodes",
    "icon": "💣",
    "title": "Keep Talking and Nobody Explodes Achievement Guide",
    "summary": "A practical guide to all 10 Steam achievements in Keep Talking and Nobody Explodes - none are hidden. Covers the section clears (Basics through Exotic), the module-variety and disarm milestones, and the total-bombs-defused milestone. None of the achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Keep Talking and Nobody Explodes has 10 Steam achievements and none are hidden. Six are for defusing every bomb in a difficulty section - The First Bomb, The Basics, Moderate, Needy, Challenging, Extreme and Exotic. The other four are milestones: disarming each type of module at least once, disarming 100 modules total, and defusing 100 bombs total.",
                "The catalog marks it difficulty 3 - it needs one person defusing and one or more reading the bomb-defusal manual, and the Extreme and Exotic sections combine many modules under a tight timer. Nothing is missable: sections and bombs can be replayed freely.",
                "Tip: get a fluent Expert (manual reader) and split the modules verbally as soon as the bomb appears - the Extreme/Exotic bombs are a communication-speed test more than a puzzle-difficulty one."
            ]
        },
        {
            "heading": "Section Clears",
            "body": [
                "Defusing 'The First Bomb', and defusing every bomb in the Basics, Moderate, Needy, Challenging, Extreme and Exotic sections.",
                "The achievements here: Action Hero (Defuse \"The First Bomb\".); Bomb Defusing 101 (Defuse all bombs in \"The Basics\" section.); All in Moderation (Defuse all bombs in the \"Moderate\" section.); Multitasker (Defuse all bombs in the \"Needy\" section.); Challenge Accepted (Defuse all bombs in the \"Challenging\" section.); To the Extreme! (Defuse all bombs in the \"Extreme\" section.); Seasoned Traveller (Defuse all bombs in the \"Exotic\" section.)."
            ]
        },
        {
            "heading": "Module & Bomb Milestones",
            "body": [
                "Disarming each type of module at least once, disarming 100 modules total, and defusing 100 bombs total.",
                "The achievements here: Experience is the Best Teacher (Disarm each type of module at least once.); Trust the Expert (Disarm 100 modules.); Bomb Squad (Defuse 100 bombs.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Defuse 'The First Bomb', then work through the Basics and Moderate sections.",
                "2. Do the Needy and Challenging sections - the Needy modules force you to keep half an eye on side tasks.",
                "3. With a fast Expert, clear the Extreme and Exotic sections.",
                "4. Keep playing freeplay bombs with every module type enabled to hit 'Experience is the Best Teacher'.",
                "5. Accumulate 100 modules disarmed and 100 bombs defused.",
                "Tip: 'Multitasker' (all Needy bombs) is easiest if the Defuser narrates the Needy timers out loud so the Expert can prompt them - a vented gas or reset capacitor mid-explanation is the usual failure."
            ]
        }
    ]
};

// Dead Space (2023) Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/dead-space-2023.json), whose 47 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1693980 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js). 10 hidden achievements ship
//   no Steam description; their conditions here are curatorial - story
//   markers kept spoiler-light in the God of War house style, boss and
//   feat conditions cross-checked against community 100% guides.
// - Sections group achievements by roughly what part of the game they belong to.
export const GUIDE = {
    "slug": "dead-space-2023-achievement-guide",
    "category": "game",
    "gameSlug": "dead-space-2023",
    "icon": "🚀",
    "title": "Dead Space (2023) Achievement Guide",
    "summary": "A practical guide to all 47 Steam achievements in Dead Space (2023) - story & endings, difficulty & weapons, collectibles & combat feats, hidden achievements.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Dead Space (2023) has 47 Steam achievements, 10 of them hidden (a few boss kills, some map secrets like Peng and the Zero-G Basketball, and the New Game Plus Marker Fragment / alternate-ending chain). The rest are the twelve chapter markers, difficulty and weapon goals, and the collectible and combat feats.",
                "Nothing is permanently missable in a single run - collectibles and side missions can be revisited by chapter select - but two achievements (Marked, Reunion) only exist in New Game Plus, and Impossible Mode is a single no-death run. Plan on at least two playthroughs.",
                "Tip: first run on Medium with a Plasma-Cutter-only rule (covers One Gun and Set A Benchmark), collecting logs, schematics and doing every side mission. Then a New Game Plus run for the 12 Marker Fragments and the alternate ending, and a dedicated Impossible run."
            ]
        },
        {
            "heading": "Story & Endings",
            "body": [
                "The twelve chapter completions on any difficulty, plus discovering the Hunter's origins and pursuing Nicole's investigation.",
                "The achievements here: Welcome Aboard (Complete Chapter 1 on any difficulty setting.); Lab Rat (Complete Chapter 2 on any difficulty setting.); All Systems Go (Complete Chapter 3 on any difficulty setting.); Cannon Fodder (Complete Chapter 4 on any difficulty setting.); True Believer (Complete Chapter 5 on any difficulty setting.); Greenhouse Effect (Complete Chapter 6 on any difficulty setting.); S.O.S. (Complete Chapter 7 on any difficulty setting.); Strange Transmissions (Complete Chapter 8 on any difficulty setting.); Wreckage (Complete Chapter 9 on any difficulty setting.); Keeper of the Faith (Complete Chapter 10 on any difficulty setting.); Betrayed (Complete Chapter 11 on any difficulty setting.); Exodus (Complete Chapter 12 on any difficulty setting.); Final Regeneration (Discover the Hunter's origins.); Whole Again (Pursue Nicole's investigation.)."
            ]
        },
        {
            "heading": "Difficulty & Weapons",
            "body": [
                "The difficulty and arsenal goals: a Medium-or-above clear, Impossible Mode, a New Game Plus clear, owning every weapon, installing every weapon upgrade, 30 kills with each of the six main weapons, and a Plasma-Cutter-only run.",
                "The achievements here: Set A Benchmark (Complete the game on Medium difficulty or above.); Untouchable (Complete the game in Impossible Mode.); Trusted Contractor (Complete New Game Plus on any difficulty mode.); Full Arsenal (Own every weapon in the game.); Built To Order (Install every weapon upgrade.); Autofire (Kill 30 enemies with the Pulse Rifle.); Live with the Hot Ones (Kill 30 enemies with the Flamethrower.); A Cut Above (Kill 30 enemies with the Ripper.); Pusher (Kill 30 enemies with the Force Gun.); Eviscerator (Kill 30 enemies with the Line Gun.); Full Contact (Kill 30 enemies with the Contact Beam.); One Gun (Beat the game using only the Plasma Cutter.)."
            ]
        },
        {
            "heading": "Collectibles & Combat Feats",
            "body": [
                "The collection and combat achievements: 25 items in Storage, 75 and 150 Logs, all Schematics, 50 and 500 limb dismemberments, a Kinesis limb rip, pinning an enemy, 50 Stasis uses, 10 stomp kills, and fully upgrading everything.",
                "The achievements here: Pack Rat (Place 25 items in Storage.); Story Teller (Collect 75 Logs.); Legend Teller (Collect 150 Logs.); Merchant (Collect all Schematics.); Marksman (Dismember 50 Limbs.); Surgeon (Dismember 500 Limbs.); Wishbone (Rip off a dangling limb using Kinesis.); Raise The Stakes (Pin an enemy.); Freeze (Use Stasis on 50 enemies.); Backbreaker (Kill 10 enemies with a stomp attack.); Maxed Out (Fully upgrade all weapons and equipment.)."
            ]
        },
        {
            "heading": "Hidden Achievements",
            "body": [
                "Some achievements are hidden - story markers, boss kills or one-off feats:",
                "The achievements here: Front Toward Enemy (Survive the necromorph ambush during the Shooting Gallery in Chapter 9 aboard the USM Valor.); Z-Baller (Complete Level 6 of the Zero-G Basketball minigame (found at the start of Chapter 10).); There's Always Peng! (Find the Peng Treasure in the Chapter 11 Cargo Bay (behind stacked boxes near the elevator).); Full Clearance (Create the Master Security Override (complete all of the optional side missions).); Brute Force (Defeat a Brute necromorph.); Exterminator (Defeat the Leviathan.); Get Off My Ship! (Defeat the Leviathan Remnant.); Mindless Prey (Defeat the Hive Mind (the final boss).); Marked (Pick up a Marker Fragment for the first time (New Game Plus only; one is in Chapter 1).); Reunion (Collect all 12 Marker Fragments in New Game Plus and place them in the altar to reach the alternate ending.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. First playthrough on Medium, Plasma Cutter only, doing all side missions and collecting all Logs and Schematics (Set A Benchmark, One Gun, Full Clearance, Merchant, Story/Legend Teller).",
                "2. Free chapter-select cleanup for anything missed, and the weapon kill-count and combat-feat achievements.",
                "3. New Game Plus run: pick up all 12 Marker Fragments, place them in the Executive Quarters altar, and finish for Reunion.",
                "4. A dedicated Impossible Mode run - one life, no chapter select, start to finish.",
                "Tip: Untouchable (Impossible Mode) allows no deaths and only three manual saves - play extremely cautiously, keep Stasis and health topped up, and consider doing it in New Game Plus so you start with a fully-upgraded arsenal."
            ]
        }
    ]
};

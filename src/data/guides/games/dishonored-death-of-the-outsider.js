// Dishonored: Death of the Outsider Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/dishonored-death-of-the-outsider.json), whose 30 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   614570 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 7 achievement(s) are Steam-hidden or ship no Steam
//   description; their description here is researched from community
//   100% guides and is a curatorial summary. Every other description is
//   Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "dishonored-death-of-the-outsider-achievement-guide",
    "category": "game",
    "gameSlug": "dishonored-death-of-the-outsider",
    "icon": "🔪",
    "title": "Dishonored: Death of the Outsider Achievement Guide",
    "summary": "A practical guide to all 30 Steam achievements in Dishonored: Death of the Outsider (7 hidden). The 7 hidden achievements are the five mission markers and the two endgame outcomes (return the Outsider, or kill him). Sourced from PowerPyx and PlayStationTrophies.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Dishonored: Death of the Outsider has 30 Steam achievements, 7 of them hidden. The standalone Dishonored expansion follows the assassin Billie Lurk on a mission to kill the Outsider. The visible achievements are contract completions and a broad set of gadget and power feats - Void Strike pushes, Hook Mines, the fountain-pen headshot, Displace tricks, making a guard salute, listening to rats, and the two big challenge-run clears (a no-detection Shadow run and a no-kills Agent of Mercy mission).",
                "The 7 hidden achievements are the five mission-completion markers (freeing Daud, taking both vault keys, obtaining the Twin-bladed Knife, recovering the stolen archive, touching the Eye of the Dead God) and the two endgame outcomes - returning the Outsider to the mortal world, or killing him.",
                "The catalog marks it difficulty 3, missable:true and recommends 2 playthroughs. Shadow (no detection for the whole game) and Agent of Mercy (a no-kills mission) are far easier as dedicated runs, and Good Old Times needs an Original Game+ replay."
            ]
        },
        {
            "heading": "The Missions & Endings",
            "body": [
                "The five Steam-hidden mission-completion markers, from freeing Daud to touching the Eye of the Dead God, and the two mutually-exclusive endgame outcomes - sparing or killing the Outsider.",
                "The achievements here: Uncaged (Free the assassin Daud (Mission 1: One Last Fight)); Two Turns (Take both bank vault keys (Mission 2: Follow the Ink)); Twin-bladed Knife (Obtain the ancient weapon (Mission 3: The Bank Job)); Gnosis (Recover the stolen archive (Mission 4: The Stolen Archive)); Dead Eye (Touch the Eye of the Dead God (Mission 5: A Hole in the World)); Final Release (Return the Outsider to the mortal world (one of the two endings)); Deicide (Kill the Outsider (one of the two endings))."
            ]
        },
        {
            "heading": "Objectives & Power Feats",
            "body": [
                "The Bank Job objective variants (the perfect crime, crashing the vault), the Oraculum censers, and the gadget and power feats - Void Strike and Displace kills, Hook Mines, the fountain-pen headshot, a guard salute, and the rat whisperer.",
                "The achievements here: Golden Locks (Stole the audiograph from the gallery without disabling the safeguard floor); Nightingale (Used Semblance to mimic Shan Yun and sing into the microphone); Public Shaming (Dropped Ivan Jacobi through the trapdoor); Big-time Player (Won the auction at Colibron Plaza); Obsessive Safe-cracker (Opened every safe inside the main vault); The Perfect Crime (Emptied the vault without tampering with any security systems, leaving everyone unharmed and asleep); Party Crasher (Sent the vault crashing through the floor); The Face of the Abbey (Attended the meeting as Brother Cardoza); Voices (Broke 4 Oraculum censers and listened to the prophecies); Harder than Stone (Destroyed an Envisioned cultist); Final Nudge (Pushed an enemy to his demise using Void Strike); Hooked (Sent someone flying 40 meters using Hook Mines); Mightier than the Sword (Shot a guard in the head with a fountain pen); Clever Planning (Used Displace on a marker placed with Foresight and eliminated a target); Salute! (Had a guard salute you); Rat Whisperer (Listened to what swarms of rats have to say 5 times)."
            ]
        },
        {
            "heading": "Challenge Runs & Collectibles",
            "body": [
                "The no-detection Shadow run, the no-kills Agent of Mercy mission, an Original Game+ clear, the Plague-vomit and Displace-explosion tricks, all contracts, and the Cienfuegos paintings.",
                "The achievements here: Shadow (Finished the game without being detected); Agent of Mercy (Finished a mission without killing anyone); Good Old Times (Finished the Original Game+); Side Effects (Made 3 people vomit using a single bottle of Plagued Spirit); Occupational Hazard (Made an enemy explode into pieces using Displace); Mercenary Work (Completed all contracts); Art Aficionado (Collected all Eleuterio Cienfuegos paintings)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through once naturally, taking the five mission markers and picking up power and gadget feats as chances appear.",
                "2. On that run, aim for Shadow (never be detected) - it is much easier to protect across one careful playthrough than to redo later.",
                "3. Pick one mission to do with zero kills for Agent of Mercy, and complete every contract from the black market boards.",
                "4. Collect all Cienfuegos paintings and do the Bank Job objective variants (the perfect crime, crashing the vault) - some are mutually exclusive in a single run.",
                "5. Replay on Original Game+ for Good Old Times, mopping up any feat achievements you missed.",
                "Tip: save often during the Bank Job - several achievements there (Obsessive Safe-cracker, The Perfect Crime, Party Crasher) branch on how you handle the vault, and you cannot get them all in one pass."
            ]
        }
    ]
};

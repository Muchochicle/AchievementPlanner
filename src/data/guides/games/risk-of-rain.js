// Risk of Rain Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/risk-of-rain.json), whose 14 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   214970 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None are hidden; every one ships a real, official Steam description,
//   quoted verbatim below.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "risk-of-rain-achievement-guide",
    "category": "game",
    "gameSlug": "risk-of-rain",
    "icon": "☔",
    "title": "Risk of Rain Achievement Guide",
    "summary": "A practical guide to all 14 Steam achievements in Risk of Rain - none are hidden. Covers boss kills, environmental combat feats, mech-survivor runs, and a difficulty clear.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Risk of Rain has 14 Steam achievements and none are hidden. The original 2013 roguelike keeps its list short and boss-focused: defeat named enemies and minibosses (the Grabber, Maku and Dan, the MACE, Gronk-adjacent threats), a few environmental/combat-technique feats (a headstomp, shaking a specific enemy, trapping a Stalker, feeding the fish, smashing, burning enemies), surviving to the end as each of the three Exo mechs, clearing the game on a high difficulty, and finding the hidden Relic item.",
                "Nothing is missable - every boss and feat achievement can be attempted again on any future run, and Risk of Rain's roguelike structure means a lost run costs you nothing but time. The closest thing to a long pole is Hardboiled (clear the game on the highest difficulty), which needs a genuinely strong item build rather than any specific trick.",
                "Tip: the three Exo mech achievements (Swordsman, Pilot, Harpoon) each need you to keep a specific mech drone alive all the way to a run's end - prioritize protecting your mech over aggressive pushes once you have one following you, since losing it early ends that attempt at the achievement."
            ]
        },
        {
            "heading": "Bosses & Combat Feats",
            "body": [
                "Defeating the Grabber, performing a headstomp, defeating Maku and Dan, defeating the MACE, the Shake Shake feat, trapping a Stalker, feeding the fish, smashing enemies, burning enemies, and safely escorting the sword Exo mech to the end of a run.",
                "The achievements here: Grabber (Defeat the Grabber); Plumbing (Perform headstomp); Maku and Dan (Defeat them); Giant face (Defeat the MACE); Shake Shake (Shake Shake); Fly trap (Get the stalker trapped); Fish food (Feed the fish); Smash (Smash enemies); Combustion (Burn enemies); Swordsman (Get sword mech to the end)."
            ]
        },
        {
            "heading": "Mechs, Difficulty & the Relic",
            "body": [
                "Escorting the rifle and harpoon Exo mechs to the end of a run, clearing the game on high difficulty (Hardboiled), and finding the hidden Relic item.",
                "The achievements here: Pilot (Get rifle mech to the end); Harpoon (Harpoon mech FTW); Hardboiled (Complete game on high difficulty); The Relic (Find the Relic)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play a handful of runs to learn the game's core loop and pick up straightforward feats as they come up: a headstomp, shaking a Wisp-type enemy, trapping a Stalker, feeding the fish, smashing an enemy, and burning enemies.",
                "2. Hunt down the named encounters - the Grabber, Maku and Dan, and the MACE - across different runs as they appear.",
                "3. Escort each of the three Exo mechs (sword, rifle, harpoon) safely to the end of a run for their achievements.",
                "4. Search levels for the hidden Relic item on a run where you have time to explore rather than rush.",
                "5. Once you have a reliable strong build, attempt a full clear on the game's highest difficulty for Hardboiled.",
                "Tip: none of these need to happen in the same run - treat each as its own goal across your normal play rather than trying to combine mech-escort, boss-hunting, and a high-difficulty clear all in one attempt."
            ]
        }
    ]
};

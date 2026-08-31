// Intrusion 2 Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/intrusion-2.json), whose 14 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   214970 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "intrusion-2-achievement-guide",
    "category": "game",
    "gameSlug": "intrusion-2",
    "icon": "🏔",
    "title": "Intrusion 2 Achievement Guide",
    "summary": "A practical guide to all 14 Steam achievements in Intrusion 2 - none are hidden. Covers the boss and set-piece achievements, the combat and mech feats, the Hard-difficulty clear and the Relic collectible.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Intrusion 2 has 14 Steam achievements and none of them are hidden. Seven are boss and set-piece kills - the Grabber, Maku and Dan, the MACE, the \"Shake Shake\", the stalker trap, and feeding the fish - and one is a headstomp. The rest are combat feats (smash enemies, burn enemies), getting each of the three mechs (sword, rifle, harpoon) to the end of its section, completing the game on high difficulty, and finding the hidden Relic.",
                "The catalog marks it as roughly two playthroughs - a normal run plus a Hard run - and nothing is missable: levels replay and every set-piece can be re-reached.",
                "Tip: the boss and set-piece achievements unlock naturally on a full playthrough - the two that need attention are \"The Relic\" (a hidden collectible, look it up) and \"Hardboiled\" (the Hard-difficulty clear), which is a genuine challenge run."
            ]
        },
        {
            "heading": "Bosses & Set-Pieces",
            "body": [
                "Defeating the Grabber, performing a headstomp, defeating Maku and Dan, the MACE and the \"Shake Shake\", getting the stalker trapped, and feeding the fish.",
                "The achievements here: Grabber (Defeat the Grabber); Plumbing (Perform headstomp); Maku and Dan (Defeat them); Giant face (Defeat the MACE); Shake Shake (Shake Shake); Fly trap (Get the stalker trapped); Fish food (Feed the fish)."
            ]
        },
        {
            "heading": "Combat, Mechs & Completion",
            "body": [
                "Smashing and burning enemies, getting the sword, rifle and harpoon mechs to the end of their sections, completing the game on high difficulty, and finding the Relic.",
                "The achievements here: Smash (Smash enemies); Combustion (Burn enemies); Swordsman (Get sword mech to the end); Pilot (Get rifle mech to the end); Harpoon (Harpoon mech FTW); Hardboiled (Complete game on high difficulty); The Relic (Find the Relic)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through the game on Normal - the boss, set-piece and mech achievements all unlock along the way.",
                "2. Do the smash and burn combat feats and the headstomp during that run.",
                "3. Look up the location of the hidden Relic and grab it on a replay.",
                "4. Do a full Hard-difficulty run for \"Hardboiled\".",
                "5. Mop up any set-pieces you missed via level select.",
                "Tip: the mech sections (\"Swordsman\", \"Pilot\", \"Harpoon\") only need you to survive to the end of that section with the mech intact - play defensively and do not abandon the mech early."
            ]
        }
    ]
};

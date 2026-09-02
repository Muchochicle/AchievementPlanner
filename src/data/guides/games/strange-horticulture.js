// Strange Horticulture Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/strange-horticulture.json), whose 18 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1574580 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 4 achievement(s) are Steam-hidden or ship no Steam
//   description; their description here is researched from community
//   100% guides and is a curatorial summary. Every other description is
//   Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "strange-horticulture-achievement-guide",
    "category": "game",
    "gameSlug": "strange-horticulture",
    "icon": "🪴",
    "title": "Strange Horticulture Achievement Guide",
    "summary": "A practical guide to all 18 Steam achievements in Strange Horticulture (4 hidden). The four hidden achievements are the secret drawer and the three cult endings. Everything else - the tutorial beats, the identification and exploration counters, the hint-free run, and the two visible story outcomes - carries Steam's own text. Several achievements are missable per playthrough.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Strange Horticulture has 18 Steam achievements, 4 of them hidden. You run an occult plant shop, identifying species from a reference book to serve customers and gradually getting pulled into a cult's plans for the nearby Great Tree. The visible achievements cover the tutorial beats (first customer, first clue card, first elixir, the viewing device, a Bryer's Disc location), the counters (pet the cat Hellebore 13 times, visit 20 map locations, identify 10 then all plants, recover from Rising Dread), completing the game, a full hint-free playthrough, and the two visible story outcomes (murder Burbidge, save the Sisterhood).",
                "The 4 hidden achievements are opening the secret desk drawer and the three cult endings ('Praise the Dendrew', 'Banished', 'I am the Dendrew').",
                "The catalog marks it difficulty 2 and two playthroughs - the three endings and the murder/save choices are mutually exclusive, and the hint-free run wants a guided second attempt."
            ]
        },
        {
            "heading": "Shop & Story",
            "body": [
                "The tutorial beats, completing the game, the two visible story outcomes (murder Burbidge, save the Sisterhood), and the three hidden cult endings.",
                "The achievements here: Beginnings (Handle your first customer); On the Map (Solve your first clue card); Extreme Consequences (Murder Burbidge); Guardian of the Forest (Save the Sisterhood); Hidden Texts (Activate the viewing device); A Mystery Solved (Find a Bryer's Disc location); Master Brewer (Create an Elixir); Praise the Dendrew (Reach the 'Praise the Dendrew' ending - go with the Seeds of Redemption to Swinside Stone Circle and use Embersoul as the offering on Day 10.); Banished (Reach the 'Banished' ending - go with Verona Green beneath the Great Tree and place Devil's Nightcap, Swiftsnare, Widow's Woe, Long Verecund and Elderphinium in the circle.); I am the Dendrew (Reach the 'I am the Dendrew' ending - go with Faye Swift to the Daughter's stone circle, use Swiftsnare on Faye, then use the Elixir of Control on yourself.); Ending (Complete the game)."
            ]
        },
        {
            "heading": "Counters & Challenges",
            "body": [
                "Petting Hellebore 13 times, visiting 20 map locations, identifying 10 then all plants, recovering from Rising Dread, the secret drawer, and a full hint-free playthrough.",
                "The achievements here: Secrets (Open the secret desk drawer by assembling the five paper slips - the one on the desk at the start plus the four Amos brings on Day 8.); Cat Lover (Pet Hellebore 13 times); Explorer (Visit 20 map locations); Apprentice (Identify 10 plants); Back from the Brink (Recover from Rising Dread); Horticulturist (Complete a full playthrough without using the hint button); Experienced Horticulturist (Identify all the plants)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Do a first, natural playthrough: handle customers, solve clue cards, identify plants, pet Hellebore and visit map locations toward the counters.",
                "2. On Day 8, assemble the five paper slips to open the secret drawer for 'Secrets'.",
                "3. Take this run to one of the story outcomes and one cult ending.",
                "4. Reload late saves (or replay) for the other cult endings and the other visible outcome - all four ending-type achievements are mutually exclusive per run.",
                "5. Do a guided hint-free playthrough for 'Horticulturist', identifying every plant along the way for 'Experienced Horticulturist'.",
                "Tip: keep a save right before Day 10's ending choice - the three cult endings all branch from the same point with different plant/companion combinations, so one save plus reloads gets all three without three full playthroughs."
            ]
        }
    ]
};

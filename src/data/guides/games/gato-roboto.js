// Gato Roboto Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/gato-roboto.json), whose 12 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   916730 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 2 achievement(s) are Steam-hidden or ship no Steam
//   description; their description here is researched from community
//   100% guides and is a curatorial summary. Every other description is
//   Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "gato-roboto-achievement-guide",
    "category": "game",
    "gameSlug": "gato-roboto",
    "icon": "🐱",
    "title": "Gato Roboto Achievement Guide",
    "summary": "A practical guide to all 12 Steam achievements in Gato Roboto (2 hidden). The two hidden achievements are defeating both lava-pump bosses and performing a sequence break. Everything else - the area completions, the two Rebba weapon rewards, and the finish, no-health, speedrun and 100% clears - carries Steam's own text.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Gato Roboto has 12 Steam achievements, 2 of them hidden. Kiki the cat pilots a mech through a crashed research station in a compact monochrome metroidvania. The visible achievements cover defeating a squeaky foe, the area fixes (drain the Aqueducts, repair the Heater Core, clean the Ventilation System), finishing the game, obtaining the Repeater and Hopper from Rebba, and the challenge clears - no health upgrades ('Danger Cat'), under one hour ('Speedrun'), and 100% completion.",
                "The 2 hidden achievements are defeating both lava-pump bosses (the young one and the moustached one) and performing a sequence break.",
                "The catalog marks it difficulty 2 and single-playthrough. The game is very short; a 100% run and a separate speedrun cover everything."
            ]
        },
        {
            "heading": "Story & Bosses",
            "body": [
                "The squeaky foe, the three area fixes (Aqueducts, Heater Core, Ventilation), finishing the game, and the Repeater and Hopper from Rebba.",
                "The achievements here: Rats! (Defeat a squeaky foe.); Cat Out of Water (Drain all of the water in the Aqueducts.); Cool it (Fix the malfunctioning Heater Core.); Fresh Air (Clean up the Ventilation System.); Save the Animals (Finish the game.); Rebba's Little Helper (Obtain the Repeater from Rebba.); Rebba's BFF (Obtain the Hopper from Rebba.)."
            ]
        },
        {
            "heading": "Challenges & Secrets",
            "body": [
                "The moustache lava-pump bosses, the sequence break, the no-health-upgrades run, the sub-one-hour speedrun, and 100% completion.",
                "The achievements here: Moustache Forever! (Defeat both lava-pump bosses, including the moustached one.); Danger Cat (Finish the game without collecting a single health upgrade.); Sequence Break (Reach a later area out of the intended order - perform a sequence break.); Speedrun (Finish the game in under 1 hour.); Purrrrfectionist (Finish the game with 100% completion rate.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Do a first, relaxed run collecting everything for 'Purrrrfectionist' (100% completion) - this covers the area fixes, both Rebba weapons and the moustache bosses.",
                "2. Trigger the sequence break when you know the map (skip an intended ability gate with a known trick).",
                "3. Do a second run for 'Danger Cat' - finish the game without picking up a single health upgrade.",
                "4. Do a speedrun for under one hour; with the route learned this is comfortable.",
                "Tip: 'Danger Cat' and the speedrun combine well - a no-health-upgrade route is already a lean, fast route, so plan one run that skips every health pickup and pushes for the sub-hour time at once."
            ]
        }
    ]
};

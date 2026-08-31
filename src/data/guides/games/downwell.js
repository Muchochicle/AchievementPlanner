// Downwell Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/downwell.json), whose 20 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   360740 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "downwell-achievement-guide",
    "category": "game",
    "gameSlug": "downwell",
    "icon": "🕳",
    "title": "Downwell Achievement Guide",
    "summary": "A practical guide to all 20 Steam achievements in Downwell - none are hidden. Covers the area and boss clears on normal and hard mode, and the combo and per-level challenge achievements. None of the achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Downwell has 20 Steam achievements and none are hidden. Ten are progress - beating each of the four areas and the boss, on normal mode and again on hard mode. The other ten are skill challenges: landing a 10, 30 and 100 combo, completing a level without taking damage / without landing / without visiting siderooms / without killing anything / without shooting, and hoarding 3,000 and 5,000 gems.",
                "The catalog marks it a single (long-term) playthrough and difficulty 4 - this is a fast, punishing roguelike, and 'Well Master' (beat the boss on hard) plus the 100-combo and no-damage-level challenges take many attempts. Nothing is missable: every run is a fresh shot at all of them.",
                "Tip: the Gunkommando or Boulder styles make the combo and gem achievements far easier - a long uninterrupted fall through a stacked column of enemies is how 100-combo runs happen."
            ]
        },
        {
            "heading": "Area & Boss Clears",
            "body": [
                "Beating the first, second, third and fourth areas and the boss, on normal mode, and then beating all four areas and the boss again on hard mode.",
                "The achievements here: Bye Frogs (Beat the first area); Bye Ghosts (Beat the second area); Bye Squids (Beat the third area); Bye Stuff (Beat the fourth area); Bye Well (Beat the boss); So Many Frogs (Beat the first area (hard mode)); So Many Ghosts (Beat the second area (hard mode)); So Many Squids (Beat the third area (hard mode)); So Much Stuff (Beat the fourth area (hard mode)); Well Master (Beat the boss (hard mode))."
            ]
        },
        {
            "heading": "Combos & Level Challenges",
            "body": [
                "Landing a 10, 30 and 100 combo, completing a level without taking damage, without landing, without visiting siderooms, without killing any enemy and without shooting, and having more than 3,000 and 5,000 gems.",
                "The achievements here: Wow Combo (Land a 10 combo); Whoa Combo (Land a 30 combo); Sugoi Combo (Land a 100 combo); Careful Descent (Complete a level without taking damage); Ground Allergy (Complete a level without landing); Time Never Stops (Complete a level without visiting siderooms); Pacifist (Complete a level without killing any enemy); Mottainai (Complete a level without shooting); Saving Up (Have more than 3000 gems); Frugality (Have more than 5000 gems)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play runs on normal until you beat all four areas and the boss.",
                "2. Chase the combo achievements - pick a style that rewards long falls and aim for a 100 combo.",
                "3. Do the per-level challenges (no damage, no landing, no shooting) on early, easy levels.",
                "4. Bank 3,000 and 5,000 gems in a single strong run.",
                "5. Grind hard mode until you clear every area and the boss for 'Well Master'.",
                "Tip: 'Ground Allergy' (a level with no landing) and 'Mottainai' (a level with no shooting) are easiest on the very first level - restart runs until you get a layout you can drift through."
            ]
        }
    ]
};

// Cloud Gardens Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/cloud-gardens.json), whose 11 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1372320 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 0 achievement(s) are Steam-hidden or ship no Steam
//   description; their description here is researched from community
//   100% guides and is a curatorial summary. Every other description is
//   Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "cloud-gardens-achievement-guide",
    "category": "game",
    "gameSlug": "cloud-gardens",
    "icon": "🌿",
    "title": "Cloud Gardens Achievement Guide",
    "summary": "A practical guide to all 11 Steam achievements in Cloud Gardens (0 hidden). Every achievement carries Steam's own text - the chapter and Overworld progress, the seed and plant milestones, and a few sandbox one-offs.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Cloud Gardens has 11 Steam achievements, none hidden. It is a calm diorama game about growing plants over abandoned junk to build tiny overgrown scenes. The achievements cover progress (go to the Overworld after chapter one, finish the Rooftops chapter, complete every Overworld scene, complete the credits scene), the plant milestones (unlock a new seed, plant one of each seed in a scene, grow 120 plants in one Overworld scene, grow 10,000 plants total), and sandbox one-offs (use all toys in one level, place 30 gnomes in a scene, build a very tall contraption).",
                "There are no hidden achievements - the list above is the whole set.",
                "The catalog marks it difficulty 2 and single-playthrough. Nothing is missable; scenes and the sandbox stay available."
            ]
        },
        {
            "heading": "Progress",
            "body": [
                "Reaching the Overworld after chapter one, finishing the Rooftops chapter, completing every Overworld scene, and completing the credits scene.",
                "The achievements here: Big Picture (Go to the the Overworld after completing the first chapter); Green Thumb (Complete the credits scene); Halfway There (Finish the Rooftops Chapter); Master Gardener (Complete every scene on the Overworld)."
            ]
        },
        {
            "heading": "Gardening & Sandbox",
            "body": [
                "Unlocking a new seed, planting one of each seed in a scene, growing 120 plants in one Overworld scene and 10,000 total, using all toys in one level, placing 30 gnomes, and building a very tall contraption.",
                "The achievements here: Getting the Band Back Together (Use all of the toys in one level); Biodiversity (Plant one of each seed in a single scene); Discovery (Unlock a new type of seed); Overgrowth (Grow 120 plants in a single Overworld scene); Reforestation (Grow 10000 plants in total); They're Watching (Place 30 gnomes in one scene); Up (Build a very tall contraption)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through the chapters, reaching the Overworld and finishing Rooftops, then complete every Overworld scene for 'Master Gardener'.",
                "2. Along the way, unlock a new seed and plant one of each seed in a single scene.",
                "3. In a roomy Overworld scene, grow 120 plants and stack 30 gnomes, and build a very tall contraption in the sandbox.",
                "4. Keep playing scenes until your total hits 10,000 plants for 'Reforestation'.",
                "Tip: 10,000 total plants is the only slow number - leave a sandbox scene with fast-growing vines running while you take screenshots, and it climbs on its own."
            ]
        }
    ]
};

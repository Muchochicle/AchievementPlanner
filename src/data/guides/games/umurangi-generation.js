// Umurangi Generation Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/umurangi-generation.json), whose 23 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1223500 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "umurangi-generation-achievement-guide",
    "category": "game",
    "gameSlug": "umurangi-generation",
    "icon": "📷",
    "title": "Umurangi Generation Achievement Guide",
    "summary": "A practical guide to all 23 Steam achievements in Umurangi Generation - none are hidden. Covers unlocking every lens and camera mod, and a wide range of level-specific photo objectives and secrets. None of the achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Umurangi Generation has 23 Steam achievements and none are hidden. Nine are for unlocking every lens (Telephoto, Wide Angle, Fish Eye, Sports, Dirty, Ultra Wide Angle, Macro) and camera mod (Fire Select, Auto Focus, Flash Box). The rest are level-specific photo objectives and secrets - your penguin friend, the Hidden Pyramid in Katikati, 3 birds in one photo, the showdown on Invasion, a sub-10-minute delivery, the word 'Gamer' 7 times, the mystery pentagram, the Jets flying overhead, the unseen horror on Contact, 2 cigarettes on The Strand, 5 spray cans, a close-up Pizza Roll, and taking the very last photo.",
                "The catalog marks it difficulty 2. Umurangi Generation is a photography game about documenting a city in crisis; nothing is missable within a level since you can retake photos freely, but some of the specific-subject shots (the mystery pentagram, the unseen horror) want the right lens and a sharp eye.",
                "Tip: bring the Telephoto lens along for the pentagram, cigarette and bird shots specifically - several level-specific achievements call for it by name."
            ]
        },
        {
            "heading": "Lenses & Mods",
            "body": [
                "Unlocking the Telephoto, Wide Angle, Fish Eye, Sports, Dirty, Ultra Wide Angle and Macro lenses, photographing your penguin friend, and unlocking the Fire Select, Auto Focus and Flash Box mods.",
                "The achievements here: Telephoto (Got the Telephoto Lens); Penguin Friend (Take a photo of your penguin friend.); Wide Angle (Got the Wide Angle Lens); Fish Eye (Got the Fish Eye Lens); Sports (Got the Sports Lens); Dirty (Got the Dirty Lens); Ultra Wide Angle (Got the Ultra Wide Angle Lens); Macro (Got the Macro Lens); Fire Select (Got the Fire Select Mod); Auto Focus (Got the Auto Focus Mod); Flash Box (Got the Flash Box Mod)."
            ]
        },
        {
            "heading": "Level Secrets & Photo Objectives",
            "body": [
                "The Hidden Pyramid in Katikati, 3 birds in one photo, the showdown on Invasion, a sub-10-minute delivery, the word 'Gamer' 7 times, the mystery pentagram, the Jets flying overhead, the unseen horror on Contact, 2 cigarettes on The Strand, 5 spray cans, a close-up Pizza Roll, and the very last photo of the game.",
                "The achievements here: Hidden Pyramid (Take a photo of the Hidden Pyramid in Katikati); Bird Master (Take a photo with 3 different birds in it); Showdown (Take a photo of the showdown on Invasion); Speed runner (Make a delivery in under 10 minutes); Ultimate Gamer (Take a photo of the word Gamer 7 times); Mystery Pentagram (Take a photo of the mystery pentagram using the Telephoto lens); Limited window (Get a shot of the Jets flying overhead); Unseen Horror (Bring up the exposure of a photo of the 'thing' in the shadows on Contact); Break Time (Take a photo of 2 cigarettes on The Strand using the Telephoto lens); Graffiti Everyday (Take a photo of 5 spray cans using the Wide Angle lens); Pizza Roll (Take a close by photo of a Pizza Roll meal); Generational Warfare (Take the last photo)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Unlock every lens and camera mod as you explore each level.",
                "2. Photograph your penguin friend and the game's specific-subject secrets - the Hidden Pyramid, 3 birds in one shot, the mystery pentagram, and the unseen horror on Contact.",
                "3. Make a delivery in under 10 minutes, and photograph the word 'Gamer' 7 times across the game.",
                "4. Bring the Telephoto lens for the pentagram, cigarette and Jets shots, and the Wide Angle lens for the spray cans.",
                "5. Take the very last photo of the game for the finale achievement.",
                "Tip: you can retake photos freely within a level, so there's no pressure to get a level-specific shot perfect on the first try."
            ]
        }
    ]
};

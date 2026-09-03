// Melatonin Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/melatonin.json), whose 14 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1585220 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 5 achievement(s) are Steam-hidden or ship no Steam
//   description; their description here is researched from community
//   100% guides and is a curatorial summary. Every other description is
//   Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "melatonin-achievement-guide",
    "category": "game",
    "gameSlug": "melatonin",
    "icon": "😴",
    "title": "Melatonin Achievement Guide",
    "summary": "A practical guide to all 14 Steam achievements in Melatonin (5 hidden). The five hidden achievements are just playing through each of the four nights and reaching the morning. Everything else - the tutorial, the 3-star and 3-ring precision goals, the perfect-score and collection achievements, and the level editor - carries Steam's own text.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Melatonin has 14 Steam achievements, 5 of them hidden. It is a hand-drawn rhythm game about the dreams and anxieties of modern life, played by memorising each level's audio-visual patterns. The visible achievements cover perfecting the tutorial, scoring 3 stars and 3 rings in a level, a perfect score in scored mode and in hard mode, collecting all stars and all rings, getting all perfect scores ('Go to bed'), and finishing a custom edited level.",
                "The 5 hidden achievements are simply progression: playing through Night 1 (Indulgence), Night 2 (Under pressure), Night 3 (Meditation), Night 4 (Setbacks) and reaching the morning (New day).",
                "The catalog marks it difficulty 2 and single-playthrough. Nothing is missable; every level is replayable for stars, rings and perfect scores."
            ]
        },
        {
            "heading": "The Four Nights",
            "body": [
                "The five hidden progression achievements - playing through each night and reaching the morning.",
                "The achievements here: Indulgence (Play through Night 1.); Under pressure (Play through Night 2.); Meditation (Play through Night 3.); Setbacks (Play through Night 4.); New day (Play through to the morning - finish the game.)."
            ]
        },
        {
            "heading": "Precision & Collection",
            "body": [
                "Perfecting the tutorial, 3 stars and 3 rings in a level, a perfect score in scored and hard mode, all stars and all rings, all perfect scores, and a custom edited level.",
                "The achievements here: Honor roll (Perfect the tutorial); Star precision (Score 3 stars in a level); Ring precision (Score 3 rings in a level); Star perfectionist (Get a perfect score in scored mode); Ring perfectionist (Get a perfect score in hard mode); Stargazer (Collect all stars in the game); Ring collector (Collect all rings in the game); Go to bed (Get all perfect scores); Creator (Finish a custom edited level)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through all four nights and into the morning - the five hidden achievements unlock as you go.",
                "2. Replay levels for 3 stars and 3 rings, and get a perfect score in scored mode and in hard mode.",
                "3. Collect every star and every ring across all levels.",
                "4. Grind toward a perfect score on every level for 'Go to bed'.",
                "5. Make and finish a custom level in the editor for 'Creator'.",
                "Tip: use the practice mode to loop the one or two beats you keep missing in a level before attempting a full perfect run - hard mode removes the visual cues, so 'Ring perfectionist' and 'Go to bed' are pure pattern memory, not reaction."
            ]
        }
    ]
};

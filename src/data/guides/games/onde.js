// Onde Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/onde.json), whose 10 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1676910 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 10 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (TrueAchievements / Steam Community / game wikis) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "onde-achievement-guide",
    "category": "game",
    "gameSlug": "onde",
    "icon": "🌊",
    "title": "Onde Achievement Guide",
    "summary": "A practical guide to all 10 Steam achievements in Onde (10 hidden). Covers the story from start to finish, escaping a dark wave entity, reaching the deep ocean areas, and wave-based challenges and secrets. Steam ships no description text for any of Onde's 10 achievements; every description here is researched from a community 100% guide.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Onde has 10 Steam achievements. None are formally flagged as hidden by Steam, but the game ships no description text for any of them, so every description here is researched from a community 100% achievement guide instead of quoted from Steam. They cover the short story from start to finish - beginning the game, escaping a dark wave entity, finishing a level, diving into the deep ocean at a late-game level, and finishing the game - plus wave-based challenges (spamming waves against an inflow, hopping on a creature's waves 3 times, getting 3 fancy fish to follow you at once) and two challenge-run achievements (a low-wave minimalist clear and a sub-2.5-hour speedrun).",
                "The catalog marks it difficulty 2. Onde is a very short exploration game (1-2 hours); the minimalist and speedrun challenge achievements are the only ones that ask for a deliberately careful or fast playthrough.",
                "Tip: do a normal relaxed playthrough first for the story and wave-challenge achievements, then a second quick, wave-efficient run afterward for Minimalist and Speedrunner if you want them both."
            ]
        },
        {
            "heading": "The Story",
            "body": [
                "Starting the game, escaping a dark wave entity, finishing a level, diving into the deep ocean at the start of a late-game level, and finishing the game.",
                "The achievements here: The cycle begins (Start playing the game.); Near death experience (Escape from a dark wave entity chasing you.); Awakening insight (Finish one of the game's levels.); High in the deep (Dive into the deep ocean area at the start of one of the late-game levels.); The cycle ends (Finish the game.)."
            ]
        },
        {
            "heading": "Challenges & Secrets",
            "body": [
                "Spamming waves against an early oncoming inflow, a low-wave minimalist clear, a sub-2.5-hour speedrun, hopping on a large water creature's waves 3 times, and getting all three fancy fish to follow you into the tube at once.",
                "The achievements here: Spammer (Early in the game, spam waves to push forward against an oncoming inflow of waves.); Minimalist (Finish the game without generating more than a small number of waves.); Speedrunner (Finish the game in under 2.5 hours.); Free to play (In the deep ocean area, hop onto a large water creature's waves 3 times.); Squaring the circle (Get all three fancy fish to follow you, then release them into the tube all at the same time.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through Onde's short story from start to finish at a relaxed pace.",
                "2. Along the way, escape the dark wave entity, spam waves through the early inflow section, and dive into the deep ocean area.",
                "3. In the deep ocean, hop on the big water creature's waves 3 times and get all three fancy fish to follow you into the tube together.",
                "4. If you want Minimalist and Speedrunner too, do a second efficient run - generate as few waves as possible and finish in under 2.5 hours.",
                "Tip: none of Onde's achievements have real Steam descriptions, so a written checklist like this one is the only way to know what each one wants."
            ]
        }
    ]
};

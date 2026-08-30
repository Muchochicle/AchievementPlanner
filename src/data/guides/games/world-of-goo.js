// World of Goo Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/world-of-goo.json), whose 8 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   22000 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None are hidden; every one ships a real, official Steam description,
//   quoted verbatim below.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "world-of-goo-achievement-guide",
    "category": "game",
    "gameSlug": "world-of-goo",
    "icon": "🟢",
    "title": "World of Goo Achievement Guide",
    "summary": "A practical guide to all 8 Steam achievements in World of Goo - none are hidden. Covers completing every level, finding the game's hidden secret, and OCD-flag perfection across every chapter.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "World of Goo has 8 Steam achievements and none are hidden - though one keeps its own sense of mystery even with a real, official description (\"there is a secret\"). The list splits into finishing the whole game, finding the game's hidden secret (a nod to its own community-driven \"Where's the secret\" mystery), and earning every OCD flag (the game's optional per-level challenge condition, usually a ball-count or time target) in each of the five chapters, then across the whole game.",
                "Nothing is missable - level completion and OCD flags are both permanent per-level records, and any level can be replayed at any time to go back and earn a missed OCD flag. The only real difficulty spike is OCD flags themselves, since several of World of Goo's later-chapter targets need efficient, minimal-waste building rather than just finishing the level.",
                "Tip: attempt each level's OCD flag on your first try rather than going back later - you already have full context on the level's layout and hazards fresh in mind, and re-learning an old level just to hit its ball-count or time target is more tedious than nailing it the first time through."
            ]
        },
        {
            "heading": "Completion & Secrets",
            "body": [
                "Finishing every level in the game, and finding the game's hidden secret.",
                "The achievements here: Executive Producer of Goo Product (All Levels Complete); Subversive Traveler (there is a secret)."
            ]
        },
        {
            "heading": "OCD Perfection",
            "body": [
                "Earning every OCD flag (the optional per-level challenge condition) in Chapters 1 through 5, then earning every OCD flag in the entire game for The Architect of Goo.",
                "The achievements here: Engineer of Goo I (All OCD Flags in Chapter 1); Engineer of Goo II (All OCD Flags in Chapter 2); Engineer of Goo III (All OCD Flags in Chapter 3); Engineer of Goo IV (All OCD Flags in Chapter 4); Engineer of Goo V (All OCD Flags in Chapter 5); The Architect of Goo (All OCD Flags)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through the game chapter by chapter, going for each level's OCD flag on your first attempt where practical.",
                "2. Finish all five chapters for The Architect of Goo (all OCD flags) and Executive Producer of Goo Product (all levels complete).",
                "3. Keep an eye out during exploration-friendly levels for the game's hidden secret (Subversive Traveler) - it rewards curiosity rather than following the critical path.",
                "Tip: if you miss an OCD flag on a level, the level select screen lets you replay any level at any time - go back once you have finished the game rather than restarting your whole playthrough."
            ]
        }
    ]
};

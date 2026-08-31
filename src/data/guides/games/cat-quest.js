// Cat Quest Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/cat-quest.json), whose 12 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   593280 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "cat-quest-achievement-guide",
    "category": "game",
    "gameSlug": "cat-quest",
    "icon": "🐈",
    "title": "Cat Quest Achievement Guide",
    "summary": "A practical guide to all 12 Steam achievements in Cat Quest - none are hidden. Covers the completion achievements and the Mew Game modifier clears. None of the achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Cat Quest has 12 Steam achievements and none are hidden. Six are completion goals - level 99, all 52 dungeons, the main quest, all 62 side quests, all seven skills, and all 66 armours and weapons. The other six are Mew Game (New Game+) clears with a specific modifier each: Furry Armored, Level One, Naked Cat, Nine Lives, Stronger Enemies, and 'The Old Master' for completing the Old Master armour set.",
                "The catalog marks it difficulty 3 and about two runs. The first playthrough covers most of the completion achievements; the Mew Game modifier clears (especially Level One and Naked Cat) are the harder half.",
                "Tip: 100% your first save (level 99, every dungeon, quest and item), then carry your build into Mew Game and stack the modifier clears."
            ]
        },
        {
            "heading": "Completion",
            "body": [
                "Reaching level 99, clearing all 52 dungeons, finishing the main quest, completing all 62 side quests, obtaining all seven skills, and collecting all 66 armours and weapons.",
                "The achievements here: Super Catventurer (Reached level 99); Dungeon Master (Cleared all 52 dungeons); Felingard Loremaster (Completed the main quest); Saviour of the Cats (Completed all 62 side quests); Power of the Arcane (Obtained all seven skills); Fashionista Lion (Obtained all 66 armors and weapons)."
            ]
        },
        {
            "heading": "Mew Game Modifiers",
            "body": [
                "Beating Mew Game (New Game+) with the Furry Armored, Level One, Naked Cat, Nine Lives and Stronger Enemies modifiers, and completing the Old Master armour set.",
                "The achievements here: Furry Armored (Beat Mew Game with the Furry Armored modifier); Level One (Beat Mew Game with the Level One modifier); Naked Cat (Beat Mew Game with the Naked Cat modifier); Nine Lives (Beat Mew Game with the Nine Lives modifier); Stronger Enemies (Beat Mew Game with the Stronger Enemies modifier); The Old Master (Obtain the complete Old Master Set)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. On your first save, do everything: level to 99, clear all 52 dungeons, finish the main quest and all 62 side quests, buy every skill and every piece of gear.",
                "2. Start Mew Game with your maxed character.",
                "3. Clear it with the easy modifiers first (Furry Armored, Nine Lives, Stronger Enemies).",
                "4. Do Naked Cat and Level One - the two hardest - with careful dodging and spell use.",
                "5. Assemble the Old Master set for the final achievement.",
                "Tip: the dungeon and side-quest counts are exact (52 and 62) - use the map and a checklist so you don't finish the main quest thinking you're done and have to hunt the last few."
            ]
        }
    ]
};

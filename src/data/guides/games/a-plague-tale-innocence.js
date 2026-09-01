// A Plague Tale: Innocence Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/a-plague-tale-innocence.json), whose 35 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   752590 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 16 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (PowerPyx / Game8 / PlayStationTrophies / TrueAchievements) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "a-plague-tale-innocence-achievement-guide",
    "category": "game",
    "gameSlug": "a-plague-tale-innocence",
    "icon": "🐀",
    "title": "A Plague Tale: Innocence Achievement Guide",
    "summary": "A practical guide to all 35 Steam achievements in A Plague Tale: Innocence (16 hidden). Covers the 17-chapter story of Amicia and Hugo, the flower, curiosity and gift collectibles, the sling and equipment upgrades, and a set of one-off story moments. Sixteen of the achievements are hidden - the chapter completions - and their unlock conditions are researched from community 100% guides.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "A Plague Tale: Innocence has 35 Steam achievements and 16 are hidden. All sixteen are simply for completing each of Chapters 1 through 16 - The de Rune Legacy, The Strangers, Retribution, The Apprentice, The Ravens' Spoils, Damaged Goods, The Path Before Us, Our Home, In the Shadow of Ramparts, The Way of Roses, Alive, All That Remains, Penance, Blood Ties, Remembrance, and Coronation. The visible list is 'Knights!' (finish all chapters, including the epilogue), the flower, curiosity and gift collectible sets, the sling and equipment upgrades, 100 crafted ammunitions, the five alchemist carts, and a handful of small story moments (the aiming training, Hugo's lunch, hide-and-seek, saving a soldier, the tomb, the main door, saving the dying, staying with the captain, and Rodric's forge).",
                "The catalog marks it difficulty 2 - it is a linear, story-driven stealth-adventure with no failure pressure and generous checkpoints. Nothing is missable; chapter select lets you return for any collectible or moment after finishing the story.",
                "Tip: play the story through once for the sixteen chapter achievements and the small story moments, then use chapter select with a collectibles map to sweep the flowers, curiosities and orphan gifts."
            ]
        },
        {
            "heading": "The Story: 17 Chapters",
            "body": [
                "Completing Chapters 1 through 16 (The de Rune Legacy, The Strangers, Retribution, The Apprentice, The Ravens' Spoils, Damaged Goods, The Path Before Us, Our Home, In the Shadow of Ramparts, The Way of Roses, Alive, All That Remains, Penance, Blood Ties, Remembrance, Coronation) and finishing all chapters including the epilogue.",
                "The achievements here: The de Rune Legacy (Complete Chapter 1: The de Rune Legacy.); The Strangers (Complete Chapter 2: The Strangers.); Retribution (Complete Chapter 3: Retribution.); The Apprentice (Complete Chapter 4: The Apprentice.); The Ravens' Spoils (Complete Chapter 5: The Ravens' Spoils.); Damaged Goods (Complete Chapter 6: Damaged Goods.); The Path Before Us (Complete Chapter 7: The Path Before Us.); Our Home (Complete Chapter 8: Our Home.); In the Shadow of Ramparts (Complete Chapter 9: In the Shadow of Ramparts.); The Way of Roses (Complete Chapter 10: The Way of Roses.); Alive (Complete Chapter 11: Alive.); All That Remains (Complete Chapter 12: All That Remains.); Penance (Complete Chapter 13: Penance.); Blood Ties (Complete Chapter 14: Blood Ties.); Remembrance (Complete Chapter 15: Remembrance.); Coronation (Complete Chapter 16: Coronation.); Knights! (Complete all chapters)."
            ]
        },
        {
            "heading": "Collectibles, Upgrades & Moments",
            "body": [
                "Six and all flowers, 13 and all curiosities, all orphan gifts, fully upgrading the sling and the equipment, 100 crafted ammunitions, the five alchemist carts, the aiming training, Hugo's lunch, hide-and-seek, saving a soldier, the tomb, the main door, saving the dying, staying with the captain, and Rodric's forge.",
                "The achievements here: Herbalist (Find 6 flowers); Botanist (Find all the flowers); Curiosities hunter (Find 13 curiosities); Curiosities collector (Find all curiosities); Big sister (Find all the gifts for the orphans); Not a toy anymore (Fully upgrade the sling); Handfull of pockets (Fully upgrade the equipment); Alchemist (Craft 100 ammunitions); Resource sharing (Enter into the 5 alchemist carts); More practice (Complete the aiming training); Feeding the hungry (Find a lunch for Hugo); Found! (Play hide-and-seek); Savior (Save a soldier); Tribute (Find the tomb); The hard way (Enter through the main door); Merciful (Save the dying); Captain Sidekick (Stay with the captain); The Blacksmith (Find Rodric's forge)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the story straight through, letting the sixteen chapter achievements and 'Knights!' unlock.",
                "2. On that run, pick up the small story moments (the aiming training, Hugo's lunch, hide-and-seek, saving the soldier and the dying, the tomb, Rodric's forge, staying with the captain).",
                "3. Fully upgrade the sling and the equipment, and craft 100 ammunitions.",
                "4. Use chapter select with a collectibles map to find all flowers, curiosities and orphan gifts.",
                "5. Enter all five alchemist carts for 'Resource sharing'.",
                "Tip: 'The hard way' (enter through the main door) and 'The de Rune Legacy'-style moment achievements are one-time scripted choices - follow a checklist so you don't skip past them in a fast chapter replay."
            ]
        }
    ]
};

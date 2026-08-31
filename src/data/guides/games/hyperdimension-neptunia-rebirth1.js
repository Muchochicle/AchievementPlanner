// Hyperdimension Neptunia Re;Birth1 Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/hyperdimension-neptunia-rebirth1.json), whose 45 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   282900 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "hyperdimension-neptunia-rebirth1-achievement-guide",
    "category": "game",
    "gameSlug": "hyperdimension-neptunia-rebirth1",
    "icon": "💾",
    "title": "Hyperdimension Neptunia Re;Birth1 Achievement Guide",
    "summary": "A practical guide to all 45 Steam achievements in Hyperdimension Neptunia Re;Birth1 - none are hidden. Covers the story chapters and endings, the character level-99 and party achievements, and the crafting, economy and combat achievements. None of the achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Hyperdimension Neptunia Re;Birth1 has 45 Steam achievements and none are hidden. Twelve are story - clearing Chapters 1 through 8 and watching the Normal and True endings. Sixteen are for taking each playable character to level 99 (Neptune through Ram), three for party members joining (Nepgear, Uni, Rom & Ram), and the rest cover the systems: crafting 100 items, 100 million Credits, creating and remaking game discs, 500 battle wins, a 100,000-damage hit, and a 100-hit combo.",
                "The catalog marks it missable and a single playthrough - the True Ending requires meeting specific conditions (enough game-disc plans made) before the final chapter, so a guide is worth following, and taking sixteen characters to level 99 is a long post-game grind.",
                "Tip: set up a high-EXP game disc and a strong farming spot before the post-game, then rotate characters through your party to level everyone to 99 together rather than one at a time."
            ]
        },
        {
            "heading": "Story & Endings",
            "body": [
                "Starting the game, clearing Chapters 1 through 8, and watching the Normal Ending and the True Ending, plus the 'Master' completion achievement.",
                "The achievements here: Hyperdimension Neptunia Re;Birth1 Master (You played the game so much, you made Neptune folks proud!); ...and the story begins (You started the game); Chapter 1 Clear (Chapter 1 Cleared); Chapter 2 Clear (Chapter 2 Cleared); Chapter 3 Clear (Chapter 3 Cleared); Chapter 4 Clear (Chapter 4 Cleared); Chapter 5 Clear (Chapter 5 Cleared); Chapter 6 Clear (Chapter 6 Cleared); Chapter 7 Clear (Chapter 7 Cleared); Chapter 8 Clear (Chapter 8 Cleared); Normal Ending (Watched the Normal Ending); True Ending (Watched the True Ending)."
            ]
        },
        {
            "heading": "Character Levels & Party",
            "body": [
                "Your first combo, taking each playable character to level 99 (Neptune, Compa, IF, Noire, Vert, Blanc, MAGES., Marvelous AQL, Falcom, Broccoli, CyberConnect2, Tekken, Nepgear, Uni, Rom, Ram), and Nepgear, Uni and Rom & Ram joining the party.",
                "The achievements here: Combo Maker (You made your first combo); Neptune Level Max (Neptune reached level 99); Compa Level Max (Compa reached level 99); IF Level Max (IF reached level 99); Noire Level Max (Noire reached level 99); Vert Level Max (Vert reached level 99); Blanc Level Max (Blanc reached level 99); MAGES. Level Max (MAGES. reached level 99); Marvelous AQL Level Max (Marvelous AQL reached level 99); Falcom Level Max (Falcom reached level 99); Broccoli Level Max (Broccoli reached level 99); CyberConnect2 Level Max (CyberConnect2 reached level 99); Tekken Level Max (Tekken reached level 99); Nepgear Level Max (Nepgear reached level 99); Uni Level Max (Uni reached level 99); Rom Level Max (Rom reached level 99); Ram Level Max (Ram reached level 99); Nepgear Teams Up (Nepgear joined the party); Uni Teams Up (Uni joined the party); Rom and Ram Teams Up (Rom and Ram joined the party)."
            ]
        },
        {
            "heading": "Systems & Combat",
            "body": [
                "Making your first item and 100 different items, 100 million Credits, creating your first game disc and using the remake system, your first battle and 500 wins, your first purchase, transforming for the first time, equipping a new processor unit, clearing your first quest, a 100,000-damage hit, and a 100-hit combo.",
                "The achievements here: Item Creator (Made your first item); Item Master (Made 100 different items); Millionaire (Obtained 100 Million Credits); Game Creator (Created your first game disc); Game Remake (Used the remake system); First Battle (You fought your first battle); Battle Master (Won 500 fights); Shopping (You bought items for the first time); Godsized (Transformed for the first time); Overclocked (Equipped a new processor unit); First Quest (You cleared your first quest); Maximum Fire Power (Inflicted more than 100,000 damage points to an enemy); Combo Master (Performed a 100 hit combo)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the story to Chapter 8, following a guide for the True Ending disc-plan requirements.",
                "2. Watch the Normal Ending, then meet the True Ending conditions and watch that.",
                "3. Do the systems achievements along the way - craft 100 items, create and remake game discs, earn 100 million Credits.",
                "4. Set up a high-EXP game disc and a strong farming dungeon for the post-game.",
                "5. Rotate all sixteen characters through your party to grind them all to level 99.",
                "Tip: 'True Ending' locks behind progress you make before the last chapter - check a guide early so you don't finish the story on the Normal path and have to replay for it."
            ]
        }
    ]
};

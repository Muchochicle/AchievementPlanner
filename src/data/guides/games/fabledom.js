// Fabledom Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/fabledom.json), whose 22 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1651560 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "fabledom-achievement-guide",
    "category": "game",
    "gameSlug": "fabledom",
    "icon": "🏰",
    "title": "Fabledom Achievement Guide",
    "summary": "A practical guide to all 22 Steam achievements in Fabledom - none are hidden. Covers marrying each of the six fairy-tale suitors, growing your kingdom's population and territory, diplomacy and contests, and clearing 300+ fablings on every difficulty. None of the achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Fabledom has 22 Steam achievements and none are hidden. Six are for marrying each of the game's suitors - Agnes, Giovanni, Winifred, Ramone, Farrah, and Sir Payne. The rest are kingdom-building milestones - recruiting a hero and leveling them to 10, completing off-world missions (including a 4-star one), throwing a feast, winning beauty and military contests, building a Palace, unlocking all territories, becoming Friends with every neighboring ruler, and population thresholds up to 300+ fablings on Classic, Challenge and Cruel difficulty.",
                "The catalog marks it difficulty 2. Fabledom is a relaxed fairy-tale kingdom builder; nothing here is missable, though hitting 300+ fablings on Cruel difficulty is the real test of your kingdom-management skills.",
                "Tip: pick a suitor to marry early - it doesn't lock you out of the other kingdom-building achievements, and you can always start a new kingdom to marry someone else later."
            ]
        },
        {
            "heading": "Marriage & Diplomacy",
            "body": [
                "Marrying Agnes the harvest princess, Giovanni the merchant prince, Winifred the warrior princess, Ramone the bard prince, Farrah the tinker princess, or Sir Payne the dark knight, recruiting a hero, and completing an off-world mission and then a 4-star one.",
                "The achievements here: The harvest princess (Marry Agnes, the harvest princess); The merchant prince (Marry Giovanni, the merchant prince); The warrior princess (Marry Winifred, the warrior princess); The bard prince (Marry Ramone, the bard prince); The tinker princess (Marry Farrah, the tinker princess); The dark knight (Marry Sir Payne, the dark knight); Heroic (Have a hero join the kingdom); Diplomat (Complete an off-world mission); Advanced diplomat (Complete a 4-star off-world mission)."
            ]
        },
        {
            "heading": "Kingdom Growth & Population",
            "body": [
                "Throwing a feast, winning the kingdom beauty and military contests, building a Palace, unlocking all territories, leveling your hero to 10, and population thresholds from 25 up to 100, 200 and then 300+ fablings on Classic, Challenge and Cruel difficulty, plus befriending every neighboring ruler.",
                "The achievements here: Feast animal (Throw a feast); Beautiful (Get first place in a kingdom beauty contest); Powerful (Get first place in a kingdom military contest ); Noble (Build a Palace); Expansion (Unlock all territories); Legend (Get your hero to level 10); Warming up (Reach a population of 25 fablings); Popular (Reach relationship “Friend” with all neighboring rulers); Kingdom (Get to 300+ fablings on Classic difficulty (or higher)); Impressive kingdom (Get to 300+ fablings on Challenge difficulty (or higher)); Impossible kingdom (Get to 300+ fablings on Cruel difficulty (or higher)); Getting settled (Reach a population of 100 fablings); Thriving (Reach a population of 200 fablings)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Pick a suitor and work toward marrying them, while your first hero joins the kingdom.",
                "2. Grow your population through the early thresholds (25, then 100, then 200 fablings), and build a Palace.",
                "3. Complete off-world missions (including a 4-star one), throw a feast, and enter the beauty and military contests.",
                "4. Unlock all territories and befriend every neighboring ruler, and level your hero up to 10.",
                "5. Push a kingdom to 300+ fablings on Classic difficulty, then Challenge, then Cruel for the hardest population achievements.",
                "Tip: the six marriage achievements are per-suitor, so if you want all of them you'll need to start fresh kingdoms (or use save slots) rather than chasing them in one playthrough."
            ]
        }
    ]
};

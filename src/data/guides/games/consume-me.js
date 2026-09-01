// Consume Me Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/consume-me.json), whose 10 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   2359120 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 1 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (TrueAchievements / Steam Community / game wikis) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "consume-me-achievement-guide",
    "category": "game",
    "gameSlug": "consume-me",
    "icon": "📓",
    "title": "Consume Me Achievement Guide",
    "summary": "A practical guide to all 10 Steam achievements in Consume Me (1 hidden). Covers reading milestones, grades, money, outfits and skills, defeating your rival, and completing your college application. One achievement is hidden and its unlock condition is researched from a community 100% guide.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Consume Me has 10 Steam achievements and 1 is hidden. They cover finishing the Hefty Tome, earning an A+ final grade, earning over $100 in a single day, writing all your application essays in one attempt, defeating your rival, maxing a skill to level 10, wearing every outfit, reading every book, and completing your college application. The hidden achievement, Valedictorian, is a harder A++ final grade.",
                "The catalog marks it difficulty 3. Consume Me is an autobiographical life-sim about a teenager's difficult school year; nothing is missable across a full playthrough, but the A++ grade for Valedictorian is a genuine time-management challenge.",
                "Tip: use your first playthrough to learn the game's systems and minigames, then aim a second, more efficient playthrough at the harder achievements like Valedictorian."
            ]
        },
        {
            "heading": "Reading, Money & Essays",
            "body": [
                "Finishing the Hefty Tome, earning an A+ final grade, earning over $100 in a single day, and writing all your application essays in a single attempt.",
                "The achievements here: Intellectual Heavyweight (Finish reading the Hefty Tome!); Teacher's Pet (Earn an A+ for your final grade!); Payday (Earn over $100 in a single day!); Cram School (Write all your application essays in a single attempt!)."
            ]
        },
        {
            "heading": "Mastery & Completion",
            "body": [
                "Defeating your rival, raising a skill to level 10, wearing every outfit, reading every book, the hidden A++ Valedictorian grade, and completing your college application.",
                "The achievements here: Triumph (Defeat your rival!); Excellence (Raise one of your skills to level 10!); Fashionista (Wear every outfit at least once!); Bookworm (Read every book!); Valedictorian (Earn an A++ for your final grade - a harder version of the A+ achievement.); Scholastic Achievement (Complete your college application!)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through a first attempt to learn the game's minigames and time-management systems.",
                "2. Read the Hefty Tome and every other book, and wear every outfit at least once.",
                "3. Earn over $100 in a single day, write all your application essays in one attempt, and defeat your rival.",
                "4. Raise a skill to level 10, and complete your college application to finish the story.",
                "5. On a focused replay, prioritize your final grade above everything else for the hidden A++ Valedictorian achievement.",
                "Tip: money buys time and refills your other gauges, so treat it as the resource to protect most on a Valedictorian-focused run."
            ]
        }
    ]
};

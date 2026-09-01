// Skate Story Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/skate-story.json), whose 26 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1263240 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "skate-story-achievement-guide",
    "category": "game",
    "gameSlug": "skate-story",
    "icon": "🛹",
    "title": "Skate Story Achievement Guide",
    "summary": "A practical guide to all 26 Steam achievements in Skate Story - none are hidden. Covers all 10 story chapters, the game's surreal milestone beats, and the trick, combo and shatter grinds. None of the achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Skate Story has 26 Steam achievements and none are hidden. Ten are the story's chapters, from Glass Skater through the Epilogue. Five more are surreal milestone beats along the way - imparting the love of skateboarding, breaking the Chain of Regret, the diabolical sequence, putting on a brilliant show, and finding meaning in the void. The rest are collection and skill grinds - 18 skate decks, 100 stickers, escalating trick counts up to 10,000, huge single-combo scores, and shattering (the game's glass-body death/reform mechanic) at speed.",
                "The catalog marks it difficulty 2. The story clears on its own as you play a fairly short, linear game; the trick, combo and shatter tiers (10,000 tricks, a 99,999-point combo, 500 shatters) are the long-tail grinds.",
                "Tip: just play through the story for most of these, then keep skating afterward (or replay chapters) to grind out the trick, combo and shatter counters."
            ]
        },
        {
            "heading": "Story & Surreal Milestones",
            "body": [
                "The 10 story chapters - Glass Skater, Warm Milk, The Devil's Laundry, Department of Death, Hellsea, Godhook, Dinner, Blackest Fire, Eternal Centipede, and the Epilogue - plus five milestone beats along the way.",
                "The achievements here: GLASS SKATER (Finish Chapter 1.); WARM MILK (Finish Chapter 2.); THE DEVIL'S LAUNDRY (Finish Chapter 3.); DEPARTMENT OF DEATH (Finish Chapter 4.); HELLSEA (Finish Chapter 5.); GODHOOK (Finish Chapter 6.); DINNER (Finish Chapter 7.); BLACKEST FIRE (Finish Chapter 8.); ETERNAL CENTIPEDE (Finish Chapter 9.); SKATE STORY (Finish the Epilogue.); Philoskater (Impart the love of skateboarding.); Eternally Bound (Break the Chain of Regret.); Devil's Symmetry (Perform the diabolical sequence.); AND YET... (Put on a brilliant show.); Oblivious (Find a meaning in the void.)."
            ]
        },
        {
            "heading": "Decks, Tricks, Combos & Shatters",
            "body": [
                "Collecting all 18 skate decks, placing 100 stickers, trick-count milestones up to 10,000, combo scores up to 99,999, and shattering at speed 25, 100 and 500 times.",
                "The achievements here: Deck Collector (Collect 18 skate decks.); Stickerbook (Place 100 Stickers.); The Skater performed a trick. (Do 100 Tricks.); In the light of the Moon... (Do 1000 Tricks.); Over Several Eternities (Do 10000 Tricks.); Infernal Flames (Stomp a combo over 20,000.); You can't skate here! (Stomp a combo over 50.000.); Pure Momentum (Stomp a combo over 99,999.); YOU ARE A DEMON (Shatter 25 times at speed.); MADE OF GLASS AND PAIN (Shatter 100 times at speed.); YOU MUST SKATE (Shatter 500 times at speed.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through the 10-chapter story from start to finish - most achievements unlock along the way.",
                "2. Watch for the five surreal milestone beats as you go, since they're tied to specific story moments.",
                "3. Collect decks and place stickers as you explore each chapter.",
                "4. After the story, keep skating to grind out the trick, combo and shatter tiers up to their highest counts.",
                "Tip: shattering is Skate Story's death/reform mechanic, not a fail state - lean into it for the Shatter achievements rather than avoiding it."
            ]
        }
    ]
};

// Like a Dragon: Ishin! Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/like-a-dragon-ishin.json), whose 56 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1805480 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js). 10 hidden achievements ship
//   no Steam description; their conditions here are curatorial - story
//   markers kept spoiler-light in the God of War house style, boss and
//   feat conditions cross-checked against community 100% guides.
// - Sections group achievements by roughly what part of the game they belong to.
export const GUIDE = {
    "slug": "like-a-dragon-ishin-achievement-guide",
    "category": "game",
    "gameSlug": "like-a-dragon-ishin",
    "icon": "⚔️",
    "title": "Like a Dragon: Ishin! Achievement Guide",
    "summary": "A practical guide to all 56 Steam achievements in Like a Dragon: Ishin! - completion, virtue & records, bonds, substories & combat, second home, minigames & locales, hidden achievements.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Like a Dragon: Ishin! has 56 Steam achievements, 10 of them hidden (seven story-chapter markers, the main-story and EX-Hard clears, and a 100-Zetsu battle feat). The rest are the Completion List, the Virtue and Diligence Records grinds, the Bonds and Substories, combat progression, and the huge block of Another Life / minigame content.",
                "Nothing is missable - chapters, Substories and activities all stay available after the story - but Taskmaster (100% Completion List) is a very long grind covering every minigame, dungeon, Bond and collectible, and Legend of an Era needs a full EX-Hard run.",
                "Tip: play the story, then settle into Kyo for the Completion List: work the Substories, Bonds, Diligence Records, Another Life farm/second-home content, and every minigame. Save the EX-Hard clear for a New Game Plus run with a strong build."
            ]
        },
        {
            "heading": "Completion, Virtue & Records",
            "body": [
                "The overall-completion goals: the Platinum, the Completion List at 50% and 100%, the Ultimate Challenges, the Virtue totals (10,000 up to 300,000), and the Diligence Records tiers (5 / 20 / 50 / all tasks).",
                "The achievements here: Bakumatsu Boss (Collected all achievements.); Ultimate Champion (Completed every Ultimate Challenge.); Halfway There (Brought the Completion List to 50%.); Taskmaster (Brought the Completion List to 100%.); Nominally Virtuous (Earned at least 10,000 Virtue in total.); Fairly Virtuous (Earned at least 50,000 Virtue in total.); Extraordinarily Virtuous (Earned at least 100,000 Virtue in total.); Divinely Virtuous (Earned at least 300,000 Virtue in total.); The Gods Smile Upon Thee (Completed 5 tasks in the Diligence Records.); The Gods Rejoice at Thee (Completed 20 tasks in the Diligence Records.); The Gods Sing Thy Praises (Completed 50 tasks in the Diligence Records.); The Gods Hath Been Humbled (Completed all tasks in the Diligence Records.)."
            ]
        },
        {
            "heading": "Bonds, Substories & Combat",
            "body": [
                "The side content and combat progression: a first Bond and all Bonds, ordering at every restaurant, 10 / 40 / all Substories, training with every combat master, 10 Soul-Orb abilities, Level 50 and the stat limit break, 10 arena wins, all Revelations, 100 equipment enhancements, 3 Battle Dungeon entries, and clearing the three story dungeons.",
                "The achievements here: Making a Difference (Completed your first Bond.); Everybody Loves Ryoma (Completed all Bonds.); I'll Have One of Everything (Ordered at least one item at every restaurant.); Kyo's Little Helper (Completed 10 Substories.); Saint of Kyo (Completed 40 Substories.); Savior of Kyo (Completed all Substories.); Student Among Masters (Trained with each master of combat.); You've Got Soul (Unlocked 10 abilities with Soul Orbs.); On the Level (Reached Level 50.); Limit Breaker (Broke Ryoma's stats beyond their limits.); This is MY Ring! (Won 10 arena battles.); Revelation Reveler (Attained all Revelations.); Bring Down the Hammer (Enhanced equipment 100 times.); The Abyss Stares Back (Entered a Battle Dungeon 3 times.); Bandit Rustler (Cleared the Bandits' Cave.); Bandit Wrangler (Cleared the Bandits' Mine.); Sanada Takedown (Cleared the Sanada Stronghold.); Drop and Give Me 100 (Gathered 100 troopers for the Third Division.)."
            ]
        },
        {
            "heading": "Second Home, Minigames & Locales",
            "body": [
                "The Another Life and activity content: 100 Third Division troopers, the Tengu bounty, the garden, cooking and trade orders, fishing, the Slice of Life event, paying off Haruka's debt, redecorating, playing every minigame and every gambling type, the Udon Shop, every song at Utamaruya and every dance at Nichibuza, chicken races, the courtesan minigames, and max Social Rank in a locale.",
                "The achievements here: Tengu Tamer (Helped the Tachibanagumi bring the Tengu to justice.); An Honest Day's Work (Grew 10 different kinds of plants in the garden.); Chef's Special (Cooked 7 different dishes.); Side Hustler (Fulfilled 10 trade orders at your second home.); A Well-Rounded Cast (Caught a total of 10 fish.); Platonic Bliss (Watched a Slice of Life event at your second home.); World's Greatest Uncle (Paid off Haruka's debt in full.); Now It Feels Like Home (Changed the interior design of your second home.); The Man Who Does It All (Played every minigame.); Easy Come, Easy Go (Tried your hand at each type of gambling.); Noodle-Slinger Supreme (Made at least 10 ryo in sales at the Udon Shop.); Sing Your Heart Out (Performed every song at Utamaruya.); Lord of the Dance (Performed every dance at Nichibuza.); Cocksure (Placed bets on 5 chicken races.); Like a Dragon in Heaven (Cleared each of the courtesan minigames.); Social Butterfly (Reached max Social Rank in one of the locales.)."
            ]
        },
        {
            "heading": "Hidden Achievements",
            "body": [
                "Some achievements are hidden - story markers, boss kills or one-off feats:",
                "The achievements here: Home, Sweet Home (Reach a story marker early in the campaign (no plot detail).); Losing a Brother (Complete Chapter 2 (story marker, no plot detail).); A Messy Investigation (Complete Chapter 4 (story marker, no plot detail).); That Was Close! (Complete Chapter 6 (story marker, no plot detail).); The Bottom Drops Out (Complete Chapter 8 (story marker, no plot detail).); Secrets Revealed (Complete Chapter 10 (story marker, no plot detail).); Cold Betrayal (Complete Chapter 12 (story marker, no plot detail).); Hero of a Nation (Complete the main story.); Legend of an Era (Complete the game on EX-Hard difficulty.); Showoff (Win 100 battles using a Zetsu (special finishing move).)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the main story for the chapter markers and Hero of a Nation.",
                "2. Grind the Completion List: all Substories, all Bonds, the Diligence Records, the Virtue totals, and the combat-master training.",
                "3. Do the Another Life and minigame content - the second home, the dungeons, the trooper collection, and every minigame and gambling type.",
                "4. Finish with an EX-Hard run (Legend of an Era) on New Game Plus with a maxed build, and mop up the Zetsu battle count.",
                "Tip: Taskmaster (100%) is the anchor achievement - use an in-game Completion List tracker religiously, since it itemises every remaining minigame score, Substory, Bond and collectible you still need."
            ]
        }
    ]
};

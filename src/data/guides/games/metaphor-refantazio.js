// Metaphor: ReFantazio Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/metaphor-refantazio.json), whose 44 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   2679460 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 13 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (TrueAchievements / Steam Community / game wikis) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "metaphor-refantazio-achievement-guide",
    "category": "game",
    "gameSlug": "metaphor-refantazio",
    "icon": "👑",
    "title": "Metaphor: ReFantazio Achievement Guide",
    "summary": "A practical guide to all 44 Steam achievements in Metaphor: ReFantazio (13 hidden). Covers the story and Archetypes, the battle and skill feats, and the Follower, exploration and completion achievements. Thirteen of the achievements are hidden and their unlock conditions are researched from community 100% guides.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Metaphor: ReFantazio has 44 Steam achievements and 13 are hidden. Fifteen are story and Archetypes - the 100% catch-all, the eleven story-dungeon completions (Northern Border Fort through the Skybound Avatar, plus the ending, the New Game+ redscale dragon and the Tyrant's Star superboss), mastering an Archetype and all Archetypes with the protagonist, and studying the Prince Archetype. Twelve are battle and skill feats. The last seventeen are Followers, exploration and completion - maxing every Follower, all recipes, all quests, all books, the coliseum streak, and the Trial of the Dragon side quests.",
                "The catalog marks it difficulty 4. 'Closing the Book' is New Game+ only, 'Star Shatterer' needs a flawless run through the Tyrant's Star dungeon, and several Follower and quest achievements are missable if you run out of calendar days.",
                "Tip: follow a calendar-order guide for the Follower ranks and quests, and plan a New Game+ for 'Closing the Book' and any Followers you could not max the first time."
            ]
        },
        {
            "heading": "Story & Archetypes",
            "body": [
                "The 100% catch-all, completing each story dungeon (Northern Border Fort, Nord Mines, Regalith Grand Cathedral, Kriegante Castle, Charadrius, Dragon Temple, Montario Opera House, Skybound Avatar), the ending, the New Game+ redscale dragon, the Tyrant's Star superboss, mastering an Archetype and all Archetypes with the protagonist, and studying the Prince Archetype.",
                "The achievements here: The Traveller (Acquire all achievements.); Coronation of the King (Beat the game and witness the ending - bringing about true peace.); Allies United (Meet your contact in the Northern Border Fort (story).); Out of the Fire (Complete the Nord Mines (story).); Calamity Averted (Complete the Regalith Grand Cathedral (story).); Dark Truths (Complete Kriegante Castle (story).); On Knife's Edge (Complete the Charadrius dungeon (story).); History Untold (Complete the Dragon Temple (story).); Mission Accomplished (Complete the Montario Opera House (story).); Skybound Hope (Complete the Skybound Avatar dungeon (story).); Closing the Book (In New Game+, defeat the redscale dragon from the Book of Apocalypse.); Star Shatterer (Defeat Destroyer Charadrius' secret form in the Tyrant's Star dungeon, reached by avoiding every Melancholia Crystal on each floor.); Archetype Adept (Master an Archetype.); Archetype Hero (Master all the Archetypes with the protagonist.); His Majesty (Study and master the Prince (Royal) Archetype.)."
            ]
        },
        {
            "heading": "Battle & Skill Feats",
            "body": [
                "Your first Synthesis skill and 50 different ones, a Special Experiment, creating all summoning vessels and masks, stunning an enemy, 100 ambush hits on stunned enemies, stealing an item, spending 100,000 reeve on money skills, defeating 10 Elmentas, ending 50 battles without taking damage, all gold beetle exchanges, and consulting Gallica 100 times.",
                "The achievements here: United Front (Use a Synthesis skill for the first time.); Teamwork Makes the Dream Work (Use 50 different Synthesis skills.); For Science! (Perform a Special Experiment.); Summon Mask Time (Create all summoning vessels and masks.); Stunning! (Stun an enemy.); Tactical Strike (Inflict ambush damage against stunned enemies 100 times.); What's Yours is Mine (Steal an item from an enemy.); Money is Power (Spend a total of 100,000 reeve using skills that consume money.); Stray Elements (Defeat 10 Elmentas.); No Mercy (End 50 battles without taking damage.); All That Glitters (Make all possible gold beetle item exchanges.); Hey, Listen! (Consult Gallica 100 times.)."
            ]
        },
        {
            "heading": "Followers, Exploration & Completion",
            "body": [
                "Obtaining and maxing all Followers, making all recipes, subjugating a bounty, completing all quests, purifying equipment, a discount purchase, visiting all towns, unlocking the whole map, all journey drawings, winning every debate, a 30-win coliseum streak, blade-riding a long distance, cooking with Maria, the Trial of the Dragon quests to defeat Louis, the hardest test of courage, and reading all books.",
                "The achievements here: Shake on It (Obtain a Follower.); Hearts as One (Max all Follower ranks.); King of Cuisine (Make all recipes.); Monster Hunter (Subjugate a bounty.); Help Anyone in Need (Complete all quests.); Blessed Power (Purify a piece of equipment.); Shrewd Shopper (Buy an item on discount.); Globetrotter (Visit all towns.); Worldly Wisdom (Unlock the entire map.); Vista Viewer (Collect all drawings of the journey.); Debate Me (Win debates against all candidates.); Coliseum Champion (Win 30 consecutive Gold Class battles at the coliseum.); Sword Surfer (Travel a significant distance by blade-riding.); Chef in Training (Help cook a meal at the inn with Maria.); Entrusted (Complete all four Trial of the Dragon side quests, then defeat Louis.); At Your Own Risk (Successfully challenge the test of courage at the highest difficulty.); Bookworm (Finish reading all books.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Follow a calendar-order guide from the start so you never waste days - Follower ranks and quests are the missable part.",
                "2. Progress the story, clearing each main dungeon and mastering Archetypes as they open up.",
                "3. Pick up the battle feats naturally (Synthesis skills, stuns, steals, no-damage battles) and the exploration list (all towns, full map, drawings).",
                "4. Do the Trial of the Dragon side quests before the Louis fight for 'Entrusted', and the coliseum streak and test of courage.",
                "5. Start New Game+ for 'Closing the Book' (the redscale dragon), 'Star Shatterer', and any Followers or recipes you missed.",
                "Tip: 'Star Shatterer' requires reaching Destroyer Charadrius' true form, which is locked out the moment you touch a Melancholia Crystal - clear every floor of the Tyrant's Star dungeon without touching one."
            ]
        }
    ]
};

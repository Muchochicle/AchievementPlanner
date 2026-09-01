// Danganronpa: Trigger Happy Havoc Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/danganronpa-trigger-happy-havoc.json), whose 38 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   413410 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 9 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (PowerPyx / Game8 / PlayStationTrophies / TrueAchievements) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "danganronpa-trigger-happy-havoc-achievement-guide",
    "category": "game",
    "gameSlug": "danganronpa-trigger-happy-havoc",
    "icon": "🧸",
    "title": "Danganronpa: Trigger Happy Havoc Achievement Guide",
    "summary": "A practical guide to all 38 Steam achievements in Danganronpa: Trigger Happy Havoc (9 hidden). Covers the six story chapters, the Report Cards and collectibles, the class-trial performance feats, the Skill Point thresholds, and the bonus School Mode. Nine of the achievements are hidden - the chapter completions and the two School Mode ones - and their unlock conditions are researched from community 100% guides.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Danganronpa: Trigger Happy Havoc has 38 Steam achievements and 9 are hidden. Seven are simply for completing the Prologue and Chapters 1 through 5, plus finishing the main story (Chapter 6). The last two are for the bonus School Mode, unlocked after the story: clearing it once, and completing every character's events in it. Everything else is visible - filling in Report Cards, collecting Monocoins and presents, the class-trial feats (no damage, no retry, no Concentration), the Skill Point thresholds, and the gallery.",
                "The catalog marks it difficulty 2. Nothing is missable - after the story you can replay any chapter and class trial, and School Mode gives you unlimited time to build every relationship. The only slightly tricky achievements are the class-trial performance feats ('You Must Acquit', 'What's a Mistrial?', 'Not From Concentrate'), which are easy on a replay with a maxed skill build.",
                "Tip: do the class-trial feats on Chapter 1's trial via chapter select - it is the shortest and easiest trial, and you can equip Skill Points freely once you have cleared the game."
            ]
        },
        {
            "heading": "Story Chapters",
            "body": [
                "Completing the Prologue and Chapters 1, 2, 3, 4 and 5, and finishing the main story (Chapter 6).",
                "The achievements here: From Zero to Hero (Complete the Prologue.); One Is the Loneliest Number (Complete Chapter 1.); Two of a Kind (Complete Chapter 2.); Three's a Crowd (Complete Chapter 3.); Four by Gore (Complete Chapter 4.); Five Alive (Complete Chapter 5.); All's Well That Ends...Umm... (Complete the main story (Chapter 6).)."
            ]
        },
        {
            "heading": "Report Cards, Collectibles & Trials",
            "body": [
                "Filling in every page of each character's Report Card and all of them, collecting 999 Monocoins, 50 unique presents and every present.",
                "The achievements here: The Devil Wears a High School Uniform (Filled in every page of Kiyotaka's Report Card); The Game Hungers (Filled in every page of Byakuya's Report Card); Rebel Without a High School Degree (Filled in every page of Mondo's Report Card); Almost Almost Famous (Filled in every page of Leon's Report Card); Lost in Scanslation (Filled in every page of Hifumi's Report Card); The Sixth Nonsense (Filled in every page of Yasuhiro's Report Card); Psychic (Filled in every page of Sayaka's Report Card); Hope's Peak Confidential (Filled in every page of Kyoko's Report Card); Mystic Donut (Filled in every page of Aoi's Report Card); Strangers in a Brain (Filled in every page of Toko's Report Card); Lovesport (Filled in every page of Sakura's Report Card); The French Disconnection (Filled in every page of Celeste's Report Card); Memoirs of a Fashionista (Filled in every page of Junko's Report Card); GoodFellows (Filled in every page of Chihiro's Report Card); Mr. Know-It-All (Filled in every page of every character's Report Card); Nine Coins, Nine Purses, Nine Bears (Collected 999 Monocoins); Ooh, For Me? (Collected 50 unique presents); Seriously, You Shouldn't Have (Collected every possible present)."
            ]
        },
        {
            "heading": "School Mode, Skills & Performance",
            "body": [
                "Clearing School Mode and completing all of its character events, the 10/20/30 Skill Point thresholds, 100 MonoMono Machine uses, all gallery items, a no-damage class trial, a no-retry class trial, 100 and 500 white-noise lines destroyed, a no-Concentration class trial, and the platinum for every other achievement.",
                "The achievements here: School's Out For Summer (Clear School Mode once (unlocked after finishing the main story).); School's Out Forever (Complete every character's events in School Mode.); Skilling 'Em Softly (Cleared the 10 SP threshold); Skill or Be Skilled (Cleared the 20 SP threshold); Ghostface Skillah (Cleared the 30 SP threshold); Hey, Big Spender (Enjoyed the exciting excitement of the MonoMono Machine 100 times); Rogue's Gallery (Unlocked all gallery items); You Must Acquit (Cleared a class trial without taking any damage); What's a Mistrial? (Cleared a class trial without having to retry a single time); The Color of Television (Destroyed 100 white noise lines across all class trials); Tuned to a Dead Channel (Destroyed 500 white noise lines across all class trials); Not From Concentrate (Cleared a class trial without using your Concentration skill a single time); Despair's Last Reward (Earned every other achievement in the game)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the main story, letting the Prologue and Chapter 1-6 achievements unlock as you go.",
                "2. Fill in every character's Report Card - most fill during the story, the rest via free time on a replay.",
                "3. Collect 999 Monocoins, all presents, and all gallery items using the MonoMono Machine.",
                "4. Play School Mode after the story - clear it once, then complete every character's event set.",
                "5. Use chapter select to do the class-trial performance feats (no damage, no retry, no Concentration) on Chapter 1's trial.",
                "Tip: 'Despair's Last Reward' just wants every other achievement, so it pops automatically once the list is complete - no separate action needed."
            ]
        }
    ]
};

// Cobalt Core Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/cobalt-core.json), whose 15 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   2179850 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 2 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (PowerPyx / Game8 / PlayStationTrophies / TrueAchievements) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "cobalt-core-achievement-guide",
    "category": "game",
    "gameSlug": "cobalt-core",
    "icon": "🚀",
    "title": "Cobalt Core Achievement Guide",
    "summary": "A practical guide to all 15 Steam achievements in Cobalt Core (2 hidden). Covers unlocking every character and ship, winning on the hardest difficulty, beating the finale, and the daily-run milestones. Two of the achievements are hidden - unlocking the last two characters (Books and CAT) - and their conditions are confirmed from community guides.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Cobalt Core has 15 Steam achievements and 2 are hidden. The hidden two are 'Bookmarked' (unlock Books) and 'I've Been Here The Whole Time' (unlock CAT) - the last two of the game's crew, unlocked the same way as the others, by meeting them in runs. Everything visible is unlocking Drake, Isaac and Max, unlocking the Ares, Jupiter, Gemini and Tiderunner ships, winning a run on the hardest difficulty, beating the finale ('Prism'), winning the optional shopkeeper fight, and playing 1 / 7 / 30 daily runs.",
                "The catalog marks it difficulty 4. Cobalt Core is a tight spaceship deckbuilder; unlocking the crew and ships comes from playing varied runs, and 'Penchant for Punishment' (a win on the hardest difficulty) is the skill target. The daily-run achievements just need you to come back for 30 days.",
                "Tip: rotate your crew and ship every run - the character and ship unlocks (including the two hidden ones) come from progressing runs with different combinations, so sticking to one favourite build slows the completion down."
            ]
        },
        {
            "heading": "Unlocks",
            "body": [
                "Unlocking the crew - Drake, Isaac, Max, and the hidden Books and CAT - and the ships Ares, Jupiter, Gemini and Tiderunner.",
                "The achievements here: Now We're Cooking (Unlock Drake.); The New Kid (Unlock Isaac.); We're In (Unlock Max.); Bookmarked (Unlock the character Books (progress runs until you meet and recruit them).); I've Been Here The Whole Time (Unlock the character CAT (progress runs until you meet and recruit them).); God Of War (Unlock the Ares.); Good Communicator (Unlock the Jupiter.); Of Two Minds (Unlock the Gemini.); Smooth Sailing (Unlock the Tiderunner.)."
            ]
        },
        {
            "heading": "Runs & Dailies",
            "body": [
                "Winning a run on the hardest difficulty, beating the finale ('Prism'), winning the optional shopkeeper fight, and playing 1, 7 and 30 daily runs.",
                "The achievements here: Penchant for Punishment (Win a run on the hardest difficulty.); Prism (Beat the finale.); Curiosity (Win a fight you shouldn't have started.); Daily Dabbler (Play 1 daily.); Entropic Explorer (Play 7 dailies.); Looping Legend (Play 30 dailies.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play runs with different crew and ship combinations to unlock Drake, Isaac, Max, Books, CAT and every ship.",
                "2. Beat the finale for 'Prism'.",
                "3. Win the optional shopkeeper fight when it comes up.",
                "4. Win a run on the hardest difficulty for 'Penchant for Punishment'.",
                "5. Play a daily run each day until you reach 30.",
                "Tip: the shopkeeper fight ('Curiosity') is a one-off encounter you have to choose to start - take it on a run where your deck is already strong, since it is a genuine extra boss."
            ]
        }
    ]
};

// A Musical Story Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/a-musical-story.json), whose 54 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1546100 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 3 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (TrueAchievements / Steam Community / game wikis) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "a-musical-story-achievement-guide",
    "category": "game",
    "gameSlug": "a-musical-story",
    "icon": "🎸",
    "title": "A Musical Story Achievement Guide",
    "summary": "A practical guide to all 54 Steam achievements in A Musical Story (3 hidden). Covers finishing and then perfectly finishing all 25 chapters, plus a hidden secret bonus chapter. Three of the achievements are hidden and their unlock conditions are researched from a community 100% guide.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "A Musical Story has 54 Steam achievements and 3 are hidden. Twenty-five are for finishing each chapter, and another twenty-five for perfectly finishing each one, plus one for perfectly finishing every chapter overall. The three hidden achievements are for a secret Bonus Chapter - unlocking it, finishing it, and perfectly finishing it.",
                "The catalog marks it difficulty 3. A Musical Story is a rhythm game told through a wordless coming-of-age story; nothing here is missable, but perfectly finishing every chapter (including the hidden Bonus Chapter) is a real rhythm-accuracy test.",
                "Tip: replay chapters freely from the menu if you miss a perfect run - you don't need to beat the whole story in one sitting to mop up the Perfect achievements."
            ]
        },
        {
            "heading": "Finishing Every Chapter",
            "body": [
                "Finishing Chapters 0 through 24, and the hidden achievement for finishing the secret Bonus Chapter.",
                "The achievements here: ECG (Finish Chapter 0); Rehearsal (Finish Chapter 1); Daily Life (Finish Chapter 2); Assembly Line Work (Finish Chapter 3); Solitude (Finish Chapter 4); Pinewood, Here we come! (Finish Chapter 5); The Van (Finish Chapter 6); Road-Trip (Finish Chapter 7); A Musical Pause (Finish Chapter 8); Briget's (Finish Chapter 9); Love at First Sight (Finish Chapter 10); First Kiss (Finish Chapter 11); A Bigger Band (Finish Chapter 12); Fuel (Finish Chapter 13); Alone Together (Finish Chapter 14); Threatening Nature (Finish Chapter 15); Flat Tire (Finish Chapter 16); The Clash (Finish Chapter 17); Bad Trip (Finish Chapter 18); Chase the Crow (Finish Chapter 19); Regrets (Finish Chapter 20); Love (Finish Chapter 21); Here we go again! (Finish Chapter 22); The Accident (Finish Chapter 23); The Awakening (Finish Chapter 24); Pinewood (Finish the secret Bonus Chapter.)."
            ]
        },
        {
            "heading": "Perfecting Every Chapter",
            "body": [
                "Perfectly finishing Chapters 0 through 24, and the hidden achievement for perfectly finishing the secret Bonus Chapter.",
                "The achievements here: Time (Perfectly Finish Chapter 0); Symbiosis (Perfectly Finish Chapter 1); Big City Music (Perfectly Finish Chapter 2); Sound of Noise (Perfectly Finish Chapter 3); TV Dreams (Perfectly Finish Chapter 4); Dreamers (Perfectly Finish Chapter 5); The Fix (Perfectly Finish Chapter 6); The Mountains, The Valleys (Perfectly Finish Chapter 7); Flight of the Bumblebee (Perfectly Finish Chapter 8); As the Crow Flies (Perfectly Finish Chapter 9); Milk and Alcohol (Perfectly Finish Chapter 10); Unintended (Perfectly Finish Chapter 11); On the Road Again (Perfectly Finish Chapter 12); Gasoline (Perfectly Finish Chapter 13); Under the Bridge (Perfectly Finish Chapter 14); Riders on the Storm (Perfectly Finish Chapter 15); Under my Wheels (Perfectly Finish Chapter 16); The Fight Song (Perfectly Finish Chapter 17); Purple Haze (Perfectly Finish Chapter 18); The Show Must Go On (Perfectly Finish Chapter 19); All Apologies (Perfectly Finish Chapter 20); Closer (Perfectly Finish Chapter 21); Carry On (Perfectly Finish Chapter 22); Killer Cars (Perfectly Finish Chapter 23); Hospital Flowers (Perfectly Finish Chapter 24); Love is All (Perfectly finish the secret Bonus Chapter.)."
            ]
        },
        {
            "heading": "Full Mastery & Secret Chapter",
            "body": [
                "Perfectly finishing every chapter in the game, and the hidden achievement for unlocking the secret Bonus Chapter in the first place.",
                "The achievements here: Voodoo  Child (Perfectly Finish all the Chapters); Stairway to Heaven (Unlock the secret Bonus Chapter.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through all 25 story chapters, finishing each one.",
                "2. Replay chapters from the menu to perfect any you didn't nail the first time.",
                "3. Unlock the hidden Bonus Chapter, then finish it and perfectly finish it too.",
                "4. Once every chapter (including the Bonus Chapter) is perfected, the full-mastery achievement follows automatically.",
                "Tip: the Bonus Chapter's unlock condition isn't spelled out in-game - if you're aiming for 100%, look up how to unlock it rather than expecting it to appear naturally."
            ]
        }
    ]
};

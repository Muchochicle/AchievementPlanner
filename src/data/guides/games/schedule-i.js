// Schedule I Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/schedule-i.json), whose 13 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   3164500 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 1 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (TrueAchievements / Steam Community / game wikis) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "schedule-i-achievement-guide",
    "category": "game",
    "gameSlug": "schedule-i",
    "icon": "💰",
    "title": "Schedule I Achievement Guide",
    "summary": "A practical guide to all 13 Steam achievements in Schedule I (1 hidden). Covers the story and net-worth progression, and the feats and the one secret achievement. One of the achievements is hidden and its unlock condition is researched from community guides.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Schedule I has 13 Steam achievements and 1 is hidden. Seven are story and progression - completing the prologue, the RV setback, recruiting your first dealer, manufacturing a $100 product, and reaching net worths of $100,000, $1,000,000 and $10,000,000. The other six are feats: disposing of 500 pieces of trash, buying a golden skateboard, getting arrested, pickpocketing a sale back from a customer, tagging 25 surfaces with graffiti in one save, and the hidden 'Finishing the Job' end-game questline.",
                "The catalog marks it difficulty 3. The net-worth achievements are a long grind and 'Finishing the Job' has strict prerequisites, but nothing here is mechanically hard.",
                "Tip: expand and automate your operation early - dealers, staff and mixing stations - so the $10,000,000 net worth accrues while you work on the feat achievements."
            ]
        },
        {
            "heading": "Story & Progression",
            "body": [
                "Completing the prologue, surviving the unexpected setback, recruiting your first dealer, manufacturing a product worth at least $100, and attaining net worths of $100,000, $1,000,000 and $10,000,000.",
                "The achievements here: Left in the Dust (Complete the prologue.); Welcome to Hyland Point (Encounter an unexpected setback.); Dodgy Dealing (Recruit your first dealer.); Master Chef (Manufacture a product worth at least $100.); Businessman (Attain a net worth of $100,000.); Bigwig (Attain a net worth of $1,000,000.); Magnate (Attain a net worth of $10,000,000.)."
            ]
        },
        {
            "heading": "Feats & Secrets",
            "body": [
                "Disposing of 500 pieces of trash at Cash for Trash machines, buying a golden skateboard, getting arrested, selling something to a customer then pickpocketing it back, tagging 25 surfaces with graffiti in one save, and the hidden 'Finishing the Job' questline.",
                "The achievements here: Upstanding Citizen (Dispose of 500 pieces of trash at the Cash for Trash machines.); Rolling in Style (Purchase a golden skateboard.); The Long Arm of the Law (Get arrested.); Indian Dealer (Sell something to a customer, then pickpocket it back.); Urban Artist (Graffiti 25 surfaces in a single save.); Finishing the Job (Complete the 'Finishing the Job' questline: unlock every region of Hyland Point with good reputation, become hostile to the Benzies family, then work through Uncle Nelson, Billy, Stan and Sam to bomb Hyland Manor via the tunnel.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through the prologue and the move to Hyland Point.",
                "2. Build the business: recruit dealers, hire staff, and automate mixing so income compounds.",
                "3. Pick off the feats - 500 trash disposed, golden skateboard, get arrested, pickpocket a sale back, 25 graffiti tags in one save.",
                "4. Push net worth through $100,000, $1,000,000 and $10,000,000.",
                "5. Unlock every Hyland Point region with good reputation and go hostile to the Benzies to trigger 'Finishing the Job', then complete its quest chain.",
                "Tip: the graffiti achievement ('Urban Artist') is per-save - buy a spray can and tag 25 surfaces in one sitting rather than spreading it across sessions and losing track."
            ]
        }
    ]
};

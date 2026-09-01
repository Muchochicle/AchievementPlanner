// The Gardens Between Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/the-gardens-between.json), whose 17 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   600990 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 3 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (TrueAchievements / Steam Community / game wikis) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "the-gardens-between-achievement-guide",
    "category": "game",
    "gameSlug": "the-gardens-between",
    "icon": "⏰",
    "title": "The Gardens Between Achievement Guide",
    "summary": "A practical guide to all 17 Steam achievements in The Gardens Between (3 hidden). Covers each garden's snapshot moment, finishing the story, and a handful of puzzle-solving secrets. Three of the achievements are hidden and their unlock conditions are researched from a community 100% guide.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "The Gardens Between has 17 Steam achievements and 3 are hidden. Seven are for each garden's key snapshot moment - a stowaway friend, a friend hiding in the Esky, Super Silly Crow escaping the TV, a friend in the treehouse, a friend on a school trip, a friend gumming up the pipes, and a Cosmic Garden Friend phoning home - plus finishing the game. The rest are puzzle-solving secrets - resetting a board of dominoes, defeating Super Silly Crow, catching what's under a tablecloth, sawing a plank, fishing with a pulley, and plucking the moon from the sky. The three hidden achievements are throwing popcorn at Frendt five times, releasing a hidden Garden Friend in level 7-2, and a lightning-strike moment in level 8.",
                "The catalog marks it difficulty 2. The Gardens Between is a short, gentle time-manipulation puzzle game about a friendship; nothing here is missable, and every level can be revisited to mop up anything you missed.",
                "Tip: don't rush through - each level hides its snapshot moment and sometimes a joke achievement (like throwing popcorn) in a spot you have to actively look for."
            ]
        },
        {
            "heading": "Every Garden's Snapshot",
            "body": [
                "A sneaky stowaway Garden Friend, a friend hiding in the Esky, Super Silly Crow escaping the TV, a friend in the secret clubhouse, a friend on a school trip, a friend gumming up the drain pipes, a Cosmic Garden Friend phoning home, and finishing the game.",
                "The achievements here: Moving In (A sneaky stowaway Garden Friend.); New Friends (A Garden Friend is hiding in the Esky.); Staying Up Late (Super Silly Crow escapes the TV.); Our Secret Clubhouse (A Garden Friend sneaks a look.); Mischievous Discoveries (A Garden Friend follows on a school trip.); An Expedition Goes Down The Drain (A Garden Friend gums up the pipes.); Stargazing (A Cosmic Garden Friend phones home.); The Gardens Complete (Friends apart, memories remain.)."
            ]
        },
        {
            "heading": "Puzzle Secrets",
            "body": [
                "Resetting the domino board, defeating Super Silly Crow, catching what's under the tablecloth, the hidden Friendly Fire popcorn fight, sawing through a plank, fishing with a pulley, the hidden Garden Friend in level 7-2, plucking the moon from the sky, and the hidden lightning-strike moment in level 8.",
                "The achievements here: Reset The Dominos (Restore the board to a clean state.); Game Over (Super Silly Crow is defeated.); Great Catch! (What's under the table cloth?); Friendly Fire (In the lounge level, move Arina's button back and forth to throw popcorn at Frendt 5 times.); Saw Through Time (Saw the plank. Next, get a hammer.); Gone Fishing (Arina’s at the end of her rope.); Found You! (In level 7-2, find and release the hidden Garden Friend.); Reach For The Sky (Pluck the moon right out of the sky.); Don't touch that! (In level 8's second screen, stop with Arina behind the green-screened device and wait until lightning strikes it.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through each garden, finding the snapshot moment and any Garden Friend hiding in it.",
                "2. Solve the puzzle-secret achievements as they come up - the dominoes reset, Super Silly Crow, the tablecloth, the saw and the fishing pulley.",
                "3. Throw popcorn at Frendt 5 times in the lounge level for the hidden Friendly Fire.",
                "4. In level 7-2, look for and release the hidden Garden Friend.",
                "5. In level 8's second screen, wait behind the device for a lightning strike to trigger the hidden 'Don't touch that!'",
                "Tip: nothing is missable - revisit any level from the map if you think you missed a snapshot or hidden achievement."
            ]
        }
    ]
};

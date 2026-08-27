// Spelunky 2's Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/spelunky-2.json), whose 32 achievements
//   were sourced directly from Steam's own achievement schema for
//   appid 418530 via ISteamUserStats/GetSchemaForGame (fetched through
//   this app's own backend/services/steamApi.js) - 17 of 32 ship a
//   real, official Steam description, quoted directly below.
// - The 15 hidden achievements (all tied to reaching a specific area,
//   finishing a challenge, or finding a specific item) are hidden
//   achievements Steam never describes publicly (confirmed via the
//   same API call) - their descriptions here are curatorial, sourced
//   from independent, cross-agreeing community documentation (a Steam
//   Community 100% guide, the Spelunky Fandom wiki, and multiple
//   achievement-tracking sites) of each one's real unlock condition.
// - The grouping below (depth milestones, run-style challenges, the
//   three secret-area challenges, the Journal/shortcuts, and item
//   pickups) is read directly from what each achievement's own
//   description requires, not invented.
export const GUIDE = {

    slug: "spelunky-2-achievement-guide",
    category: "game",
    gameSlug: "spelunky-2",
    icon: "⛏️",
    title: "Spelunky 2 Achievement Guide",
    summary: "A practical guide to all 32 Steam achievements in Spelunky 2 - depth milestones through each world, the game's hardest self-imposed challenge runs, the three secret area challenges, and the Journal's many hidden items.",

    relatedSlugs: ["achievement-completion-and-tracking", "understanding-achievement-availability"],

    sections: [

        {
            heading: "Overview",
            body: [
                "Spelunky 2 has 32 Steam achievements. Because every run is procedurally generated and permadeath resets you to the start, almost every achievement here is realistically earned across many separate attempts rather than in a single sitting - this is a game built around repeated runs, not one long playthrough.",
                "You Got This (unlock the entrance) is the one true starting point - everything else assumes you can already reach the Dwelling, the game's first world."
            ]
        },

        {
            heading: "Depth Milestones",
            body: [
                "Feels Good (make it past 1-4), Skills Improving (make it past Olmec's Lair, the end of the Jungle/Volcana world), and Persistent (reach the Ice Caves), the latter two both hidden, mark steady progress through the game's early-to-mid worlds.",
                "Pilgrim (reach the Sunken City) and Awakened (reach the Cosmic Ocean), both hidden, mark reaching the game's much harder late-game areas, while Master, also hidden, is the true story completion: defeat Hundun in a non-seeded, single-player run."
            ]
        },

        {
            heading: "Self-Imposed Challenge Runs",
            body: [
                "Journeyman (complete the game) is the baseline completion achievement. Ironman (complete without using shortcuts) removes one major safety net, while Speedlunky (complete in 10 minutes or less, no shortcuts) and Low Scorer (complete without collecting any treasure, no shortcuts) each layer their own additional restriction on top of that same no-shortcuts run.",
                "Millionaire (end a run with $1,000,000 or more) is a very different kind of challenge - a wealth-accumulation goal rather than a speed or restriction one.",
                "Tip: Ironman, Speedlunky, and Low Scorer are easiest attempted only once you already know the game's shortcuts-free route well from normal Journeyman runs - each adds real difficulty on top of an already-hard full clear."
            ]
        },

        {
            heading: "The Three Secret Challenges",
            body: [
                "Excavator, Torchbearer, and Survivor, all hidden, reward completing the game's three optional secret challenges - the Moon Challenge, the Star Challenge, and the Sun Challenge respectively - each only accessible from a specific world and each its own dedicated, difficult side-objective distinct from the main run."
            ]
        },

        {
            heading: "Journal & Shortcuts",
            body: [
                "Seen a Lot (complete 50% of the Journal) and Seen It All (complete the entire Journal) track the game's full enemy/item/story-entry completionist checklist - the kind of achievement that fills in gradually across many runs rather than in one sitting.",
                "Mama's Little Helper (unlock the first shortcut) and Mama's Big Helper (unlock all three shortcuts) track the game's permanent shortcut system, which - once unlocked - lets future runs start deeper into the game."
            ]
        },

        {
            heading: "Special Modes & NPCs",
            body: [
                "Track Star (finish the Tutorial Speedrun in under 30 seconds) and Arena Champion (win a First-to-Five Deathmatch against three bots) are both tied to Spelunky 2's separate modes rather than a normal expedition run.",
                "Turkey Whisperer (bring two turkeys to Yang), Support a Local Business (buy out Yang's Pet Shop), VIP (enter Madame Tusk's Palace of Pleasure as a guest), and Shadow Shopper (reach the Black Market, a hidden achievement), are all tied to specific NPC encounters and secret shops scattered through the levels."
            ]
        },

        {
            heading: "Rare Item Pickups",
            body: [
                "Legendary, a hidden achievement, asks you to reach the City of Gold - one of the game's rarest secret areas, requiring both a crown and the correct sequence of keys to unlock.",
                "Her Favorite (obtain the Kapala), Divine Right (obtain a piece of royal headwear), A Second Chance (obtain the Ankh), and Chosen One (obtain the Tablet of Destiny) are all hidden achievements tied to finding one specific rare item somewhere in a run.",
                "Parenthood, also hidden, asks you to wake the Eggplant Child - one of the game's best-known, most involved secrets.",
                "The Full Spelunky is the natural final achievement, unlocking once every other trophy on this list has already been earned."
            ]
        },

        {
            heading: "Suggested Order",
            body: [
                "Play normally for a good while first, working through You Got This, Feels Good, Skills Improving, and Persistent as you naturally get better at reaching deeper worlds.",
                "Once you can reliably reach the end, go for Journeyman, then work toward unlocking Mama's Little Helper and Mama's Big Helper to make future attempts easier.",
                "Chase the rare item pickups (Her Favorite, Divine Right, A Second Chance, Chosen One, Parenthood, Shadow Shopper, Legendary) and the Journal achievements across many runs, since they depend on level layout and often need real route knowledge.",
                "Save Ironman, Speedlunky, Low Scorer, Pilgrim, Awakened, Master, and the three secret-challenge achievements (Excavator, Torchbearer, Survivor) for once you're already comfortable clearing the game normally - they're realistically the hardest achievements in the whole list."
            ]
        }

    ]

};

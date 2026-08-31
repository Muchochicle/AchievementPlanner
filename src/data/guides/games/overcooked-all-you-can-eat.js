// Overcooked! All You Can Eat Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/overcooked-all-you-can-eat.json), whose 42 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1243830 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "overcooked-all-you-can-eat-achievement-guide",
    "category": "game",
    "gameSlug": "overcooked-all-you-can-eat",
    "icon": "🍳",
    "title": "Overcooked! All You Can Eat Achievement Guide",
    "summary": "A practical guide to all 42 Steam achievements in Overcooked! All You Can Eat - none are hidden. Covers the campaign and progression achievements, the Classic Mode and location feats, and the chaos and party feats. None of the achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Overcooked! All You Can Eat has 42 Steam achievements and none are hidden. Nine cover campaign and progression (finishing Overcooked! and Overcooked! 2, the Ever Peckish Rises campaign, all levels discovered, first level of every World 1, 100 ingredients thrown into a pot, a Versus win, an Extra Trimming world), twelve are Classic Mode and location feats (5 tickets in 30 seconds, recipes in order, every emote, a kitchen in the Munch Mansion / Cosmic Canteen / Balloon / Mines), and twenty-one are chaos and 4-chef party feats (10 wrong dishes, 99 items binned, 20 Flamethrower cooks, a level with 4 Bear / Reptile / Alien / Rat / glasses-wearing chefs, petting Kevin in both games).",
                "The catalog marks it difficulty 3. Many of the party achievements need four chefs of a specific type, so a 4-controller setup (or four players) makes 100% far easier; solo it's fiddly.",
                "Tip: play the two campaigns and the DLC campaign for progression, then set up 4 controllers to knock out the 'play a level with 4 X chefs' achievements in a batch."
            ]
        },
        {
            "heading": "Campaign & Progression",
            "body": [
                "Finishing Overcooked! and Overcooked! 2, discovering every level ('World Renowned Chef'), completing the Ever Peckish Rises campaign, the first level of every World 1, 100 ingredients thrown into a pot, a Versus kitchen win, an Extra Trimming world, and both games' tutorials.",
                "The achievements here: Hero of Thyme (Complete Overcooked! and save the Onion Kingdom); The Unbread (Complete Overcooked! 2 and save the Onion Kingdom... again); World Renowned Chef (Discover all locations/ levels in the main games); All You Can Eat (Complete The Ever Peckish Rises Campaign); World Traveler (Complete the first level in all Worlds 1's); Hot Pot Shot (Throw 100 ingredients into a cooking pot); Rooting for you (Win a kitchen in Versus Mode); Would You Like Fries With That? (Complete an Extra Trimming world); Lettuce Begin (Complete Overcooked! and Overcooked! 2 tutorials)."
            ]
        },
        {
            "heading": "Classic Mode & Location Feats",
            "body": [
                "5 tickets in 30 seconds, a level done with recipes in order, using every emote, extinguishing a burning kitchen, running over Unbread 10 times, a kitchen in the Munch Mansion, Cosmic Canteen, on a Balloon and in the Mines, teleporting as the Racoon, 10 tiles on fire at once, and respawning 10 times.",
                "The achievements here: Fast Food (Complete 5 tickets in under 30 seconds in Classic Mode); Clockwork Kitchen (Complete a level in Classic Mode by doing all the recipes in order); It's Bean Emotional (Use every emote); If You Can't Stand the Heat (Extinguish a burning kitchen); Careful Driver (Run over Unbread 10 times); Kitchen Nightmares (Complete a kitchen in the Munch Mansion); Out of this World (Complete a kitchen in Cosmic Canteen); Pop! (Complete a kitchen on a Balloon); Get Berried (Complete a kitchen in the Mines); Racoon Magic (Teleport as the Racoon); This Is Fine (Have 10 tiles on fire at a time); Clutz in the Kitchen (Respawn 10 times)."
            ]
        },
        {
            "heading": "Chaos & Party Feats",
            "body": [
                "10 wrong dishes, a meal held 30 seconds, 15 Versus and 15 Arcade games, 99 items binned, 20 Flamethrower cooks, a level with 4 glasses / Bear / Reptile / Alien / Rat / mostly-same chefs, a last-second burn save, a Box Chef 3-star, an aquatic sushi chef, the Overcooked! 4-2 monster trio, 15 alien throw-catches, 5 tomatoes thrown, pushing someone off a level, throwing in the original Overcooked!, and petting Kevin in both games.",
                "The achievements here: It's RAAW (Deliver a wrong dish 10 times); It's COLD (Keep a finished meal 30 seconds before serving it); It's a Cook-Off! (Finish 15 games in Versus Mode); Bangers and Trash (Put 99 items in the bin); Fire Hazard (Use the Flamethrower to cook 20 items); Dinner Party Posse (Finish 15 kitchens in Arcade); The All Seeing Fry-Cook\t (Play a level with 4 chefs wearing glasses); Calculated Risk (Save An Ingredient From Burning At the Last Possible Second); Bear Picnic (Play a level from Campfire with 4 Bear Chefs); Boxing Champion (Get 3 Stars in a level where each player is a Box Chef. Only available in Classic Mode); Something Fishy (Play as a Aquatic creature in a Sushi Level); New World Order (Play a level with 4 Reptile Chefs); Monster Mash (Play Overcooked! 4-2, with a Werewolf, a Ghost and a Vampire Chef); Space Jelly (Throw and Catch an Ingredient between 4 Alien chefs 15 times without dropping it); Food Critic (Throw 5 Tomatoes at another player); Infestation (Play Overcooked! 2-2, with 4 players all using the Rat chef); They Suspect Nothing... (Play a level with 4 players, of which 3 are the same chef); You're a Real Pizza-work (Push someone off a level); Back in my day... (Attempt to throw something in Overcooked!); Can You Pet The Dog? (Pet Kevin in Overcooked!); Can You Still Pet The Dog? (Pet Kevin in Overcooked! 2)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through Overcooked!, Overcooked! 2 and the Ever Peckish Rises campaign, discovering every level.",
                "2. Do the single-player-friendly feats along the way (100 pot throws, emotes, wrong dishes, bin items, respawns, Flamethrower cooks).",
                "3. Do a kitchen in each special location (Munch Mansion, Cosmic Canteen, Balloon, Mines).",
                "4. Set up four controllers and batch the '4 X chefs' achievements (Bear, Reptile, Alien, Rat, glasses, monster trio).",
                "5. Play Versus and Arcade to 15 games each, and pet Kevin in both games.",
                "Tip: the four-chef achievements don't need a good score - start the level, meet the condition (all four the right chef type), and quit; that's enough for most of them."
            ]
        }
    ]
};

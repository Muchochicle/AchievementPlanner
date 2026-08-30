// Yooka-Laylee Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/yooka-laylee.json), whose 35 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   360830 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "yooka-laylee-achievement-guide",
    "category": "game",
    "gameSlug": "yooka-laylee",
    "icon": "🦎",
    "title": "Yooka-Laylee Achievement Guide",
    "summary": "A practical guide to all 35 Steam achievements in Yooka-Laylee - none are hidden. Covers the Pagie and Quill collection tiers, buying all of Trowzer's moves, the Tonic and expander collectibles, the Grand Tome worlds and their bosses, the arcade and minecart and quiz challenges, and the pirate-treasure and idol secrets.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Yooka-Laylee has 35 Steam achievements and none of them are hidden. It is a classic collectathon, so most achievements are collection tiers: Pagies (first, 30, 75, all 145), Quills (first 200, 500, all 1,010), all of Trowzer's moves, 15 Tonics, all six health and six power extenders, and every Ghost Writer. The rest cover unlocking and expanding all five Grand Tome worlds, defeating each world boss and Capital B, and the various mini-game challenges (Kartos's minecart, Rextro's arcade games and a high score, Dr. Quack's quiz), plus a handful of secrets - disrespecting the idol and finding the five pirate treasures.",
                "Nothing is missable - every world stays open, collectibles persist, and expanding a Grand Tome world (which adds more collectibles) can be done at any time. Full completion is essentially a 100% run: HAD ONE'S QUILL (all 1,010 Quills) and FROM SOMEONE ELSE'S BOOK (all 145 Pagies) require sweeping every world including its expanded content.",
                "Tip: expand each Grand Tome world as soon as you can afford the Pagies - the expanded version contains extra Pagies, Quills and Ghost Writers, and the collection-tier achievements count the expanded totals, so exploring a world before expanding it just means coming back to re-cover the same ground."
            ]
        },
        {
            "heading": "Pagies, Moves & Upgrades",
            "body": [
                "The Pagie tiers (first, 30, 75, all 145), purchasing a move and then all of Trowzer's moves, unlocking and equipping a Tonic and unlocking 15 Tonics, collecting all six health and six power extenders, the first Dr. Puzz transformation, a Kartos minecart challenge, and a Rextro arcade game.",
                "The achievements here: TURNING A PAGIE (Collect your first Pagie); PAGIE RAMPAGIE (Collect 30 Pagies ); THE AGIE OF PAGIE (Collect 75 Pagies ); FROM SOMEONE ELSE'S BOOK (Collect all 145 Pagies ); SSSSERPENT SSSSENPAI (Purchase a move from Trowzer ); SSSMASHING (Purchase all of Trowzer’s moves ); BOTTOM'S UP (Unlock and equip a Tonic ); POTION COMMOTION (Unlock 15 Tonics ); RAISING THE BAR (Collect all 6 health extender items); BAR STAR (Collect all 6 power extender items); SQUID'S IN (Get transformed by Dr. Puzz for the first time ); KARTOS RETURNS (Complete one of Kartos’s minecart challenges ); WHEN I'M 64 (Successfully complete one of Rextro’s arcade games )."
            ]
        },
        {
            "heading": "Collectibles, Worlds & Bosses",
            "body": [
                "An arcade high score, the first and all Ghost Writers, the Quill tiers (first 200, 500, all 1,010), unlocking the first and all Grand Tome worlds, expanding a world, a Dr. Quack quiz, defeating Capital B, and defeating each of the five world bosses.",
                "The achievements here: WHAT'S A LEADERBOARD? (Get the high score in one of Rextro's Arcade Games); BOOK SPOOK (Collect your first Ghost Writer ); GRABBED THE GHOULS (Collect every Ghost Writer in the Grand Tome worlds ); LICENSE TO QUILL (Collect your first 200 Quills ); FITS THE QUILL (Collect 500 Quills ); HAD ONE'S QUILL (Collect all 1,010 Quills ); THE ADVENTURE BEGINS (Unlock the first Grand Tome world ); OPEN BOOKS (Unlock every Grand Tome world ); SIZE MATTERS (Expand a Grand Tome world ); QUACKERS (Complete one of Dr. Quack’s Quackfire Quizzes ); OUT OF BUSINESS (Defeat Capital B at the end of the game ); SLIPPERY SLOPE (Defeat the World 1 boss ); KNOCKING DOWN WALLS (Defeat the World 2 boss ); CREEP FROM THE DEEP (Defeat the World 3 boss ); OBSOLETE (Defeat the World 4 boss ); PLANETARY ANNIHILATION (Defeat the World 5 boss )."
            ]
        },
        {
            "heading": "Secrets & Hidden Treasures",
            "body": [
                "The secret achievements: disrespecting the idol, finding the pirate treasure items (one, three, all five), and expanding three and then all five Grand Tome worlds.",
                "The achievements here: PETTY VANDALISM (Disrespect the Idol); PRIVATE PILLAGE (Find any one of the pirate treasure items); SECRET SALVAGE (Find any three of the pirate treasure items); CAPTAIN'S CACHE (Find all five of the pirate treasure items); THINKING BIG (Expand three Grand Tome worlds); SUPER SIZED (Expand all five Grand Tome worlds)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through the Grand Tome worlds, and expand each one as soon as you have the Pagies to spare so its extra collectibles are available while you are there.",
                "2. Buy every Trowzer move as it becomes available, and collect Tonics, health and power extenders, and Ghost Writers as you pass them.",
                "3. Do the mini-game challenges in each world - Kartos's minecart, Rextro's arcade games (including a high score), and Dr. Quack's quiz.",
                "4. Defeat each world boss and then Capital B to finish the story.",
                "5. Do a cleanup sweep of every (expanded) world for all 145 Pagies and all 1,010 Quills, and pick up the pirate treasures and the idol secret.",
                "Tip: the Reptile Rush and other move upgrades bought from Trowzer are often required to reach specific Quills and Pagies - if a collectible looks unreachable, you are probably missing a move, so prioritise buying every move before doing your final collection sweep."
            ]
        }
    ]
};

// Legend of Grimrock Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/legend-of-grimrock.json), whose 40 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   207170 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "legend-of-grimrock-achievement-guide",
    "category": "game",
    "gameSlug": "legend-of-grimrock",
    "icon": "🗿",
    "title": "Legend of Grimrock Achievement Guide",
    "summary": "A practical guide to all 40 Steam achievements in Legend of Grimrock - none are hidden. Covers the completion and difficulty clears, the secret / treasure / item and area achievements, and the combat and puzzle feats. None of the achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Legend of Grimrock has 40 Steam achievements and none are hidden. They cover completing the game (plus the Hard and Old School clears), the cumulative combat and travel counters (250 monsters, 500 melee, 500 ranged, 10,000 tiles, 250 spells), the secret and treasure sweeps, finding the named items (Zhandul's Orb, Dismantler, the pie), collecting each of the four full armour sets, and a set of one-off feats (a backstab, a telefrag, the Checkered Room puzzle, finishing the first level in under 4 minutes).",
                "The catalog marks it roughly two playthroughs - the Hard and Old School (no auto-map, no free healing) clears are separate runs, and 'Skill Mastery' (level 50 in a skill) needs a focused build. Nothing is missable within a run: the dungeon is linear but fully backtrackable until the end.",
                "Tip: keep a secrets/treasures map open on your first run - many are behind pressure plates and hidden walls that are easy to walk past, and cleaning them up later means re-descending the whole dungeon."
            ]
        },
        {
            "heading": "Completion & Difficulty",
            "body": [
                "Completing the game, finding all secrets and all treasures, the cumulative counters (250 monsters, 500 ranged and 500 melee attacks, 10,000 tiles, 10/50 potions, 25/250/500 spells), and the Hard and Old School clears.",
                "The achievements here: Master of the Dungeon (Complete the game); Seeker of Secrets (Find all secrets); Treasure Hunter (Find all treasures); Monster Killer (Kill 250 monsters); Marksman (Perform 500 ranged weapon attacks); Swordsman (Perform 500 melee weapon attacks); Go the Extra Mile (Travel 10000 tiles); Apprentice Alchemist (Mix 10 potions); Master Alchemist (Mix 50 potions); Apprentice Wizard (Cast 25 spells); Master Wizard (Cast 250 Spells); Archmage (Cast 500 spells); Hard Boiled (Complete the game with hard difficulty setting); Doin' It Old School (Complete the game with old school mode)."
            ]
        },
        {
            "heading": "Secrets, Items & Armour Sets",
            "body": [
                "Finding 10 / 25 / 50 secrets, Zhandul's Orb, Dismantler and the pie, giving Toorum a hand, a backstab, a telefrag (drop or teleport a monster to death), opening all iron doors, and collecting and wearing the full lurker, chitin, plate mail and Valor armour sets.",
                "The achievements here: Secret Spotter (Find 10 secrets); Secret Sniffer (Find 25 secrets); Secret Searcher (Find 50 secrets); Zhandul's Orb (Find Zhandul's Orb); Dismantler (Find Dismantler); Piece of the Pie (Find the pie); Buddies With Toorum (Give Toorum a hand); Backstabber (Backstab a monster); I Use Gravity As a Weapon (Kill a monster by dropping or teleporting on it); Here's Johnny (Open all iron doors); Ninja Style (Collect and wear lurker's wardrobe (4 pieces)); I'm the Bugman! (Collect and wear full set of chitin armor (4 pieces)); Like a Sardine In a Can (Collect and wear full set of plate mail (5 pieces)); Knight in a Shining Armor (Collect and wear full set of Valor armor (6pieces))."
            ]
        },
        {
            "heading": "Combat & Puzzle Feats",
            "body": [
                "Finding 5 skulls, jumping into a pit 25 times, your first ogre kill, 250 unarmed attacks, throwing a rock 100 times, finding the Vault of Dismantler and the Prison entrances, surviving the slimes and the white-blob invasion, reaching skill level 50, solving the Checkered Room, and finishing the first level in under 4 minutes.",
                "The achievements here: Skull Snatcher (Find 5 skulls); Pitfall (Jump 25 times into a pit); Ogre Slayer (Kill your first ogre); Tavern Brawler (Perform 250 unarmed attacks); Stoner (Throw a rock 100 times); Enter The Vault (Find entrance to the Vault of Dismantler); Enter The Prison (Get into the Prison); Slimed (Survive the slimes); Dungeon Hero (Survive the invasion of white blobs); Skill Mastery (Obtain level 50 in any skill); Checkered Room (Solve the Checkered room puzzle); Dungeon Runner (Finish first level in under 4 minutes)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play a first run on Normal, using a secrets guide to find every secret and treasure as you descend.",
                "2. Pick up the named items (Zhandul's Orb, Dismantler, the pie) and collect the four armour sets.",
                "3. Do the one-off feats (backstab, telefrag, pit jumps, rock throws) whenever a chance comes up.",
                "4. Replay on Hard for 'Hard Boiled'.",
                "5. Do an Old School run (no auto-map, no free healing) for 'Doin' It Old School'.",
                "Tip: 'Dungeon Runner' (first level under 4 minutes) is a quick standalone attempt from a fresh save - you don't need to fight, just run the known route to the first stairs."
            ]
        }
    ]
};

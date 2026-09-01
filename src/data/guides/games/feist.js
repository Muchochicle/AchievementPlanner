// FEIST Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/feist.json), whose 40 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   327060 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "feist-achievement-guide",
    "category": "game",
    "gameSlug": "feist",
    "icon": "🐾",
    "title": "FEIST Achievement Guide",
    "summary": "A practical guide to all 40 Steam achievements in FEIST - none are hidden. Covers freeing your mate, defeating every beast, avoiding every trap, and a full set of per-level speedrun and no-death clears. None of the achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "FEIST has 40 Steam achievements and none are hidden. Twenty are speedrun and no-death clears for each of the game's 10 levels - a time target and a death-free run for every one. The rest are combat and trap feats - freeing yourself from a crate and your mate, catching a fly, riding a beast, parrying a sting, defeating beasts with sticks, flies and traps, defeating all beasts, a vegetarian chapter clear, dodging pit traps and a weight trap, escaping a collapsing mine, and a few odder ones like dying during a quake right after a kill.",
                "The catalog marks it difficulty 4. FEIST is a tough, silhouette-art platformer where death comes fast; the 20 speedrun and no-death achievements across all 10 levels are the real challenge and will likely take dedicated replay runs.",
                "Tip: learn each level's layout on a normal playthrough first, then go back level by level for the speedrun and no-death clears once you know exactly what's coming."
            ]
        },
        {
            "heading": "Combat & Trap Feats",
            "body": [
                "Escaping the crate, catching a fly, freeing your mate, riding a beast, parrying a sting, finding a lost item, avoiding dart traps, using all riverside burs, crushing a fly with a boulder, defeating a teleporting beast, beast and inchworm combat tricks, luring ticks into a fenlight, avoiding all pit traps, defeating all beasts, a vegetarian chapter clear, escaping a collapsing mine, dodging a hanging weight, a trap-free triple-beast fight, and dying during a quake right after a kill.",
                "The achievements here: Escape artist (Free yourself from the crate in under a minute); Flycatcher (Catch a fly in mid-air); Never feel lonely again (Free your mate); Take a ride on the wild side (Grab a beast's fur, hold tight, and take it for a ride); Ward off the evil (Parry a sting projectile); Who placed it there anyway? (Find a pine in the mine); Strong cover (Don't get hit by a dart trap before the cave); Stockpile (Use all burs by the river); Watch your toes (Roll a boulder over a fly); It was never meant to work like this (Defeat the teleporting beast with a fly); Ouch! (Defeat a beast with a stick); Troublemaker (Provoke an inchworm to hit another); Barbecue (Lure 10 ticks into a fenlight); Pure luck! (Avoid all the pit traps); Avenger (Defeat all beasts); Vegetarian (Complete a chapter without eating a midge); Run like hell (Escape the collapsing mine without being crushed ); Good head on your shoulders (Don't get squashed by a hanging weight); Natural born brawler (Defeat the three beasts in the ruins without the use of traps); Hard luck (Die during the quake after defeating a beast)."
            ]
        },
        {
            "heading": "Speedrun Clears",
            "body": [
                "Clearing all 10 levels - after a long night, a picnic, tools of the woods, down by the lake, a bad hair day, dwellers in the dark, trespassing, all good comes from above, ruins of the past, and playing with fire - each within its target time.",
                "The achievements here: Jump start (Complete level 1 «after a long night» in under 2m 30s); Relay race (Complete level 2 «a picnic» in under 2m 10s); Steeplechase (Complete level 3 «tools of the woods» in under 4m 00); Dancing in the rain (Complete level 4 «down by the lake» in under 3m 45s); Parkour (Complete level 5 «a bad hair day» in under  4m 50s); Short break (Complete level 6 «dwellers in the dark» in under 4m 00s); Brief visit (Complete level 7 «trespassing» in under 4m 10s); Rollercoaster (Complete level 8 «all good comes from above» in under 1m 45s); Raid through the ruins (Complete level 9 «ruins of the past» in under 4m 30s); Fire walk with me (Complete level 10 «playing with fire» in under 3m 30s)."
            ]
        },
        {
            "heading": "No-Death Clears",
            "body": [
                "Clearing all 10 of the same levels without dying even once, from after a long night through to playing with fire.",
                "The achievements here: Early Bird (Complete level 1 «after a long night» without dying); Trapper (Complete level 2 «a picnic» without dying); Allrounder (Complete level 3 «tools of the woods» without dying); Water strider (Complete level 4 «down by the lake» without dying); Lumberjack (Complete level 5 «a bad hair day» without dying); Spelunker (Complete level 6 «dwellers in the dark» without dying); Intruder (Complete level 7 «trespassing» without dying); Avalanche rider (Complete level 8 «all good comes from above» without dying); Archaeologist (Complete level 9 «ruins of the past» without dying); Fire eater (Complete level 10 «playing with fire» without dying)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through the story normally first, learning each level's beasts and traps.",
                "2. Pick up the combat/trap achievements naturally as you fight beasts, avoid pits, and free your mate.",
                "3. Once you know a level well, go back for its speedrun time target.",
                "4. Then replay it again (or combine attempts) for a no-death clear.",
                "Tip: the speedrun and no-death achievements are per-level and separate, so a careful, controlled second playthrough of the whole game can realistically net both sets if you're consistent."
            ]
        }
    ]
};

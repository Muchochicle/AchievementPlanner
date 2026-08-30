// Trine 4 Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/trine-4.json), whose 39 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   690640 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "trine-4-achievement-guide",
    "category": "game",
    "gameSlug": "trine-4",
    "icon": "👑",
    "title": "Trine 4 Achievement Guide",
    "summary": "A practical guide to all 39 Steam achievements in Trine 4 - none are hidden. Covers the 17 level completions and the ending, and the per-level experience collectibles plus the four game-wide collectible sets (experience, Letters, Treasures, Knicknacks).",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Trine 4: The Nightmare Prince has 39 Steam achievements and none of them are hidden - and unusually for the series there are no trick-feat or challenge achievements at all. Eighteen are for completing each of the 17 levels and dealing with the Nightmare Prince at the end. The other 21 are pure collectibles: collecting all experience in each individual level, all experience across Acts I-V, and the three other game-wide sets (Letters, Treasures, and Knicknacks).",
                "Nothing is missable - every level replays from the level select with a collectible tracker showing exactly what you still need, and the collection is tracked cumulatively across all your play. This is a short, low-stress completion; there is no difficulty requirement and no dexterity feat to worry about.",
                "Tip: use the in-level collectible map/tracker after finishing the story - it marks how many of each collectible type a level holds and how many you have, so a single cleanup pass with the tracker on will finish every collection achievement without a guide."
            ]
        },
        {
            "heading": "Level Completions",
            "body": [
                "Completing each of the 17 levels of Trine 4, from A Wintery Morning through Haunted Tombs, and the final confrontation with the Nightmare Prince (To Recover a Prince).",
                "The achievements here: A Wizard's Quest (Complete A Wintery Morning); A Knightly Quest (Complete The Cursed Manor); An Enterprising Quest (Complete A Masquerade Night); Across the Moors (Complete Craghill Moors); Through the Thorns (Complete The Thorny Hedge Maze); Running in Ruins (Complete Heatherwood Hall); A Castle in a Dream (Complete The Prince's Dream); Moths in Moonlight (Complete Moonlit Forests); A Badger's Journal (Complete The Badgerborough); A Hedgehog's Seeds (Complete Goldleaf Garden); A Dip in the Lake (Complete Firwood Water); Bogged Down (Complete The Crackling Mire); Suddenly a Bear (Complete The Blueberry Forest); The Potion of Light (Complete The Gossamer Grove); Everything is Fine (Complete Snow-Topped Heights); Darker Depths (Complete The Nightmare Academy); Chasing Shadows (Complete Haunted Tombs); To Recover a Prince (Deal with the Nightmare Prince once and for all)."
            ]
        },
        {
            "heading": "Collectibles",
            "body": [
                "Collecting all experience in each individual level, all experience throughout Acts I-V (Experienced Hunter), and the three other game-wide collectible sets - all Letters (First Class Delivery), all Treasures (Treasure Seeker), and all Knicknacks (Bits and Pieces).",
                "The achievements here: The Morning Hunt (Collect all experience in A Wintery Morning); The Cursed Hunt (Collect all experience in The Cursed Manor); The Masquerade Hunt (Collect all experience in A Masquerade Night); The Craghill Hunt (Collect all experience in Craghill Moors); The Thorny Hunt (Collect all experience in The Thorny Hedge Maze); Looting Ruins (Collect all experience in Heatherwood Hall); Sweeping Dreams (Collect all experience in The Prince's Dream); The Moonlit Hunt (Collect all experience in Moonlit Forests); The Underground Hunt (Collect all experience in The Badgerborough); The Golden Hunt (Collect all experience in Goldleaf Garden); The Lakeside Hunt (Collect all experience in Firwood Water); The Mired Hunt (Collect all experience in The Crackling Mire); The Blueberry Hunt (Collect all experience in The Blueberry Forest); The Gossamer Hunt (Collect all experience in The Gossamer Grove); The Snowbound Hunt (Collect all experience in Snow-Topped Heights); The Nightmare Hunt (Collect all experience in The Nightmare Academy); The Haunted Hunt (Collect all experience in Haunted Tombs); Experienced Hunter (Collect all experience throughout Acts I-V); First Class Delivery (Collect all Letters throughout Acts I-V); Treasure Seeker (Collect all Treasures throughout Acts I-V); Bits and Pieces (Collect all Knicknacks throughout Acts I-V)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through all 17 levels once for the level-completion achievements and the ending.",
                "2. Turn on the collectible tracker and replay each level from the level select, sweeping every experience pickup, Letter, Treasure and Knicknack it contains.",
                "3. The per-level experience achievements will unlock as you clear each level's collection; the game-wide sets (Experienced Hunter, First Class Delivery, Treasure Seeker, Bits and Pieces) unlock once every level is fully collected.",
                "Tip: collect everything in each level in one visit rather than doing type-by-type sweeps across all levels - the tracker resets your bearings each time you re-enter a level, so a single thorough pass per level is far faster than repeatedly re-loading the same stage."
            ]
        }
    ]
};

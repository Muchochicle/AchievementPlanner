// Trine 5 Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/trine-5.json), whose 62 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1436700 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "trine-5-achievement-guide",
    "category": "game",
    "gameSlug": "trine-5",
    "icon": "⚙️",
    "title": "Trine 5 Achievement Guide",
    "summary": "A practical guide to all 62 Steam achievements in Trine 5 - none are hidden. Covers the 20 level completions and the ending, the per-level experience and game-wide collectible sets, and the return of the series' physics trick feats and hidden set-piece secrets.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Trine 5: A Clockwork Conspiracy has 62 Steam achievements and none of them are hidden. Twenty-one are for completing each of the 20 levels and thwarting Sunny and Goderic at the end. Twenty-three are collectibles: all experience in each individual level, all experience across Acts I-V, and the game-wide Letters, Bags-and-Hats and Tidbits sets. The remaining 18 bring back the series' physics trick feats and add level-specific hidden secrets - crossing a level's rivers without touching water, a no-broken-boxes level, a no-damage level, delivering a pie to the end of a level, finding dancing mushrooms, and various ability combos.",
                "Nothing is missable - all levels replay from the level select with a collectible tracker, and the feats can be attempted on replays at your own pace. The completion is short; the trick feats and hidden secrets are the only part that needs deliberate effort rather than just thoroughness.",
                "Tip: the level-specific feats (Made of Sugar's dry river crossing, Fragile's no-broken-boxes run, the Tentacle Tag Kraken dodge) each name their level in the achievement - do them on a focused replay of that specific level once you already know its layout, rather than trying to improvise them on a blind first run."
            ]
        },
        {
            "heading": "Level Completions",
            "body": [
                "Completing each of the 20 levels of Trine 5, from The Town Library through The Dethroning, and the finale (The Clockwork Conspiracy).",
                "The achievements here: Quiet as a mouse (Complete The Town Library); Stone into sand (Complete The Garden of Eternal Shade); Solitary spa time (Complete The Well of Tranquility); Cake and betrayal (Complete The Astral Academy Gardens); Means to an end (Complete The Long Way to Town); Shady shortcut of a thief (Complete Sinister Back Alleys); The Great Council (Complete The Royal Castle); The shameful Villains of Trine (Complete The Tallest Tower); Trapped and forgotten (Complete Dungeons and Sewer Rats); Watery Woes (Complete Smuggler's Way); Goodbye, Sweet Gems (Complete Gemstone Caverns); Some climbing to do (Complete Brackenridge Path); Barbara! We're coming! (Complete The Astral Observatory); The Autumn Light (Complete Autumn Woods); The Swamp Witch (Complete Petrified Marshes); Memoirs of a squire (Complete The Bastion of Hope); Wings and Metal and Hot Air (Complete The Magnificent Airship); Lampaca Lands (Complete The Floating Archipelago); My Humble House (Complete The Clockwork Palace); The Empty Throne (Complete The Dethroning); The Clockwork Conspiracy (Thwart Sunny's and Goderic's plans)."
            ]
        },
        {
            "heading": "Collectibles",
            "body": [
                "Collecting all experience in each individual level, all experience throughout Acts I-V (Experienced Heroes), and the three game-wide collectible sets - all Letters (The Postmaster), all Bags and Hats (The Fashionmonger), and all Tidbits (The Gossip).",
                "The achievements here: Checking out Everything (Collect all experience in The Town Library); The Haunted Hunt (Collect all experience in The Garden of Eternal Shade); More than Soap Bubbles (Collect all experience in The Well of Tranquility); The Juiciest Fruits (Collect all experience in The Astral Academy Gardens); The Thoroughfare Tracking (Collect all experience in The Long Way to Town); The Shady Spoils (Collect all experience in Sinister Back Alleys); Combing Through the Castle (Collect all experience in The Royal Castle); Treasures from the Tower (Collect all experience in The Tallest Tower); Escaping, yet exploring (Collect all experience in Dungeons and Sewer Rats); Casting the Hook (Collect all experience in Smuggler's Way); Leaving No Stone Unturned (Collect all experience in Gemstone Caverns); Looking High and Low (Collect all experience in Brackenridge Path); Gazing Stars (Collect all experience in The Astral Observatory); Woodsy Wisdom (Collect all experience in Autumn Woods); Scouting the Swamp (Collect all experience in Petrified Marshes); Knight's Quest (Collect all experience in The Bastion of Hope); Shipwide Search (Collect all experience in The Magnificent Airship); Floating Bounty (Collect all experience in The Floating Archipelago); Palace Pursuit (Collect all experience in The Clockwork Palace); Experienced Heroes (Collect all experience throughout Acts I-V); The Postmaster (Collect all Letters throughout Acts I-V); The Fashionmonger (Collect all Bags and Hats throughout Acts I-V); The Gossip (Collect all Tidbits throughout Acts I-V)."
            ]
        },
        {
            "heading": "Trick Feats & Hidden Secrets",
            "body": [
                "The physics and combat trick feats (spinning-ball kills, Wall Spitter Plant projectiles, Clockwork Mosquito chain explosions, one-arrow double kills, box-conjure kills, shield-slide distance) and the level-specific hidden secrets (a dry river crossing, a no-broken-boxes level, a no-damage level, the box-wizard shopkeeper, the church bell, the pie delivery, the dancing mushrooms, the Kraken dodge, the Observatory wizards, and the doppelganger fight).",
                "The achievements here: Boreal Bowling (Use Amadeus's Spinning Ball to destroy a chilled enemy); Ferocious Flora (Destroy an enemy using a projectile from a Wall Spitter Plant); Ace Boom-Boom (When a defeated Clockwork Mosquito is exploding, use the blast to destroy another Clockwork Mosquito); Go Out for a Spin (During a single fight, make a Clockwork Guardian use the Spin Attack five times); Made of Sugar (Cross all the rivers in the Long Way to Town without touching the water); Fragile: Handle with Care (Complete a level without breaking any of the Wooden Boxes); As Luck Would Have It (Complete a level without taking any damage); The Famous Box Wizard (Conjure a box to comply with the Shopkeeper's request in The Tallest Tower); Driving Out the Evil (Charge the Church Bell in the Garden of Eternal Shade); The Red Rose Inn Takeout (Deliver the Pie from the Red Rose Inn to the end of the level); Frolicking Fungi (Find the Dancing Mushrooms in the Autumn Woods); Tentacle Tag (Don't let Kraken's tentacles hit you in the Smuggler's Way); Friends in High Places, literally (Meet all the three Astral Observatory Wizards); Flimflam Doppelgangers (Defeat the Clockwork Knights posing as the Heroes of Trine in the Red Rose Inn); One Fell Swoop (Destroy two enemies with a single arrow); See-through Fisticuffs (Destroy an enemy using an unarmed Pontius Clone); Better than Fireballs (Use Amadeus to destroy a Clockwork Mosquito with a conjured item); Sledding Stretch (How far can you go with Pontius's Shield Sliding?)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through all 20 levels once for the level-completion achievements and the ending.",
                "2. Replay levels with the collectible tracker on to sweep every experience pickup, Letter, Bag/Hat and Tidbit.",
                "3. Do the level-specific hidden secrets on focused replays of the levels they name (Made of Sugar, Fragile, Tentacle Tag, The Famous Box Wizard, and the rest).",
                "4. Knock out the generic trick feats (spinning-ball kills, plant projectiles, mosquito chains, double-kill arrow, box-conjure kill, shield slide) on any level with suitable enemies.",
                "5. The game-wide collectible achievements (Experienced Heroes, The Postmaster, The Fashionmonger, The Gossip) unlock once every level's collection is complete.",
                "Tip: the no-damage (As Luck Would Have It) and no-broken-boxes (Fragile: Handle with Care) achievements are easiest on the first, short levels - pick a stage with few forced fights, use Amadeus to conjure platforms over hazards, and avoid the Knight entirely so you do not smash boxes by reflex."
            ]
        }
    ]
};

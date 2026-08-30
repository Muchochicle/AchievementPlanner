// Ultimate Chicken Horse Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/ultimate-chicken-horse.json), whose 31 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   386940 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None are hidden; every one ships a real, official Steam description,
//   quoted verbatim below.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "ultimate-chicken-horse-achievement-guide",
    "category": "game",
    "gameSlug": "ultimate-chicken-horse",
    "icon": "🐔",
    "title": "Ultimate Chicken Horse Achievement Guide",
    "summary": "A practical guide to all 31 Steam achievements in Ultimate Chicken Horse - none are hidden. Covers play-time and unlock milestones, death and traversal feats, and scoring and special-condition achievements.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Ultimate Chicken Horse has 31 Steam achievements and none are hidden. The list splits into play-volume and unlock milestones (games played solo and online, levels/characters/outfits unlocked, traps placed), a long run of specific death and traversal feats (falling into the void, dying on barbed wire, wall-jumping, being killed by placed traps, arrows, and hockey pucks), and scoring/special-condition achievements tied to the game's trap-building scoring system (post-mortem points, comeback points, solo points, sudden death rounds, and winning with no special points at all).",
                "Nothing is missable - every count-based achievement is a permanent stat, and unlocking content stays available across every future session. The list is built almost entirely around normal repeated play, so there is no real \"long pole\" beyond the higher counters (1,000 traps placed, 1,000 wall jumps).",
                "Tip: several achievements reward being deliberately unhelpful or silly (dying with the coin, dying in a black hole 50 times, dying on barbed wire) - since Ultimate Chicken Horse rewards you for placing traps that kill others but also for surviving traps yourself, do not be afraid to sabotage your own runs occasionally to farm these death-based achievements."
            ]
        },
        {
            "heading": "Play Time & Unlocks",
            "body": [
                "Play-volume and unlock milestones: playing 10/30/100 games total, 10/50 games online, playing online with a local friend, placing 200 and 1,000 traps, and unlocking levels, characters, and outfits (one of each, then all of each).",
                "The achievements here: Gettin' the Hang of It (Play 10 games); Seasoned Vet (Play 30 games); Ultimate Expert (Play 100 games); Techie (Play 10 games online); Showoff (Play 50 games online); Takin' On the World! (Play online with a local friend); Trappist (Place 200 traps); Threat to Public Security (Place 1000 traps); Young Explorer (Unlock a level); Magellan (Unlock all levels); A New Friend Appears (Unlock a character); Building A Community (Unlock all characters); Gettin' Fancy (Unlock an outfit); Full Wardrobe (Unlock all outfits)."
            ]
        },
        {
            "heading": "Deaths & Traversal",
            "body": [
                "Death and movement-technique feats: falling into the void 100 times, killing people with traps 100 times, 100 arrow kills, 100 hockey puck kills, dying on barbed wire 10 times, 1,000 wall jumps, and gluing two then four blocks together.",
                "The achievements here: Wilhelm Audition (Fall into the void 100 times); Animal Cruelty (Kill people with traps 100 times); Archer (Kill someone with an arrow 100 times); Goon (Kill someone with a hockey puck shooter 100 times); Not So Sharp (Die on barbed wire 10 times); Neat and Nimble (Wall jump 1000 times); Craftsperson (Attach two blocks together with glue); Engineer (Glue four blocks together)."
            ]
        },
        {
            "heading": "Scoring & Special Feats",
            "body": [
                "10 post-mortem points, 50 teleports, 20 sudden-death rounds entered, 50 coins collected, dying with the coin 10 times, 50 comeback points, 100 solo points, dying in a black hole 50 times, and winning a round without earning any special points at all.",
                "The achievements here: Necromancer Dancer (Get 10 post-mortem points); Space-Time Cadet (Teleport 50 times); Clutch Performer (Enter sudden death 20 times); Greedy McGreedster (Get 50 coins); Droppin' Bills (Die with the coin 10 times); Comeback Kid (Score 50 comeback points); Solo Master (Score 100 solo points); Spaghetti Award (Die 50 times in a black hole); Back to the Basics (Win without any special points)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play a mix of solo and online games toward the play-count milestones (10/30/100 games, 10/50 online games), and play online with a local friend for Takin' On the World!.",
                "2. Place traps regularly toward the 200 and 1,000 trap-placement milestones, and unlock levels, characters, and outfits as you play and earn currency.",
                "3. Deliberately trigger the death and traversal feats: fall into the void, get killed by your own or others' traps (arrows, hockey pucks, general traps), die on barbed wire, and wall-jump often.",
                "4. Work the crafting and scoring achievements: glue blocks together, rack up post-mortem/comeback/solo points, enter sudden death rounds, and collect and lose coins.",
                "5. Finish with the specific challenge achievements: dying in a black hole 50 times, and winning a round without earning any special points at all.",
                "Tip: Back to the Basics (win without any special points) is easiest in a low-key match where you focus purely on reaching the goal rather than building elaborate traps - a \"boring\" win counts just as much as a flashy one."
            ]
        }
    ]
};

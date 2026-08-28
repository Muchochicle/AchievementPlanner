// Deep Rock Galactic's Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/deep-rock-galactic.json), whose 69
//   achievements were sourced directly from Steam's own achievement
//   schema for appid 548430 via ISteamUserStats/GetSchemaForGame
//   (fetched through this app's own backend/services/steamApi.js) - 47 of
//   69 ship a real, official Steam description, quoted directly below.
// - The 22 hidden achievements ship no Steam description; their
//   conditions here are curatorial, sourced from the official Deep Rock
//   Galactic wiki (deeprockgalactic.wiki.gg/wiki/Achievements) and
//   cross-checked against community guides. Most are Space Rig barrel-hoop
//   and jukebox antics plus solo-play and mod-buying milestones.
// - The grouping (career and mission counts, promotions, Hazard tiers,
//   bosses and big enemies, Deep Dives, riding and vehicles, cosmetics,
//   then the hidden Space Rig / solo achievements) is read from what each
//   achievement's own description requires.
export const GUIDE = {

    slug: "deep-rock-galactic-achievement-guide",
    category: "game",
    gameSlug: "deep-rock-galactic",
    icon: "⛏️",
    title: "Deep Rock Galactic Achievement Guide",
    summary: "A practical guide to all 69 Steam achievements in Deep Rock Galactic - the mission and career counts, the four Dwarf promotions, the Hazard-tier challenges, the boss and big-enemy kills, Deep Dives, the riding and vehicle feats, and the 22 hidden Space Rig and solo achievements.",

    relatedSlugs: ["achievement-completion-and-tracking", "understanding-achievement-availability"],

    sections: [

        {
            heading: "Overview",
            body: [
                "Deep Rock Galactic has 69 Steam achievements, 22 of them hidden. The visible ones are progression milestones - mission counts, promotions, Hazard-level clears, boss kills, and Deep Dives. The hidden ones are mostly Space Rig antics (the barrel-hoop game, the jukebox, the bar) plus solo-play counts and buying every weapon mod.",
                "Nothing is missable; this is a long-haul co-op game and the counts (500 missions, 100 solo missions, all four Gold promotions) are the real barrier. Most hidden achievements are cheap once you know what triggers them.",
                "Tip: knock out the Space Rig hidden achievements (Barrel Kicker, That's Not How You Play This Game, Darwin Award, Happy Feet, Big Spender, Party Time!, Disc Jockey, The A-Team, Time Well Spent, Foreign Objects In The Launch Bay) in the lobby between missions or with friends - they cost nothing but a few minutes of messing around before the Drop Pod leaves."
            ]
        },

        {
            heading: "Career & Mission Counts",
            body: [
                "Approved Greenbeard (complete your first assignment), Miner (complete your first mission), Expert Miner (100 missions), and Legendary Miner (500 missions). Milestones and perks: Performance Matters (10 Milestones), Management Approves (25 Milestones), and Feelin' Perky (unlock 10 Perk Nodes).",
                "Mini Fixer is fixing 50 Mini M.U.L.E.s, Mutated Scavenger is completing 20 missions with Warnings, and Good Shepherd is completing 25 missions alongside a much lower-ranked player."
            ]
        },

        {
            heading: "Promotions",
            body: [
                "Promoting a Dwarf resets that class to level 1 for cosmetic and assignment rewards. Movin' On Up (promote any Dwarf once), Corporate Climber (two Dwarves), Hat Trick (three Dwarves), and Full Team Ahead (all four).",
                "Higher promotion ranks: Silver-Tier Employee (earn a Silver promotion), Gold-Tier Employee (earn a Gold promotion), Pro-Team (Silver Promotions for all four Dwarves), and Legendary-Team (Gold Promotions for all four Dwarves)."
            ]
        },

        {
            heading: "Hazard Tiers",
            body: [
                "Survive a full mission at each level: Stepping It Up (Hazard 3), Thick-Skinned (Hazard 4), and Going Lethal (Hazard 5). Streaks: Consistent Performance (three Hazard 3 in a row), Employee Of The Month (four Hazard 4 in a row), and Rock Solid (five Hazard 5 in a row).",
                "No-death, no-resupply clears: Bring Your A-Game (Hazard 3), Like A Well-Oiled Machine (Hazard 4), and Karl Would Be Proud (Hazard 5)."
            ]
        },

        {
            heading: "Bosses & Big Enemies",
            body: [
                "Now We Have  A BET-C (defeat and then repair a BET-C), Big Game Hunter (help kill 40 Dreadnoughts), and See You Later, Detonator! (help kill 20 Bulk Detonators).",
                "Dreadnought speed kills on Hazard 3+: Pest Control (two within five minutes) and Just Another Bug Hunt (two within 30 seconds)."
            ]
        },

        {
            heading: "Deep Dives",
            body: [
                "The weekly three-stage endurance missions: Going Deeper (complete a Deep Dive), Elite Diver (complete an Elite Deep Dive), Deep For Speed (finish any Deep Dive under 45 minutes), and Veteran Diver (complete any 5 Deep Dives)."
            ]
        },

        {
            heading: "Resources & Riding",
            body: [
                "Collecting: Jeweler (10 Bittergems) and Prospector (20 Compressed Gold Chunks).",
                "Riding feats: Barrel Rider (ride a barrel on the Space Rig for three seconds), Hi Ho, Silver - Away! (ride Molly for 15 seconds), Farmer (ride the Silicate Harvester for 30 seconds), Car Pool (ride the Harvester with three other Dwarves, five kills each, nobody leaving), Drill-by Shooting (the same on the Drilldozer, 15 kills each), and Roller Coaster (grind a pipe for 120 unbroken seconds).",
                "Barrel-hoop game: If Only I Got Paid For This... (score 3000+ in under 100 kicks)."
            ]
        },

        {
            heading: "Cosmetics",
            body: [
                "Mustacho (buy five moustaches for one character) and Total Makeover (customize every accessory slot of a character)."
            ]
        },

        {
            heading: "Hidden: Space Rig Antics",
            body: [
                "Barrel hoop: Barrel Kicker (kick ten barrels in a row with no miss), That's Not How You Play This Game (throw a beer mug into the hoop), and Darwin Award (throw yourself into the hoop while drunk).",
                "Barrels into the Drop Pod / Launch Bay: The A-Team (a barrel in every Drop Pod seat), Time Well Spent (every barrel into the Drop Pod), Foreign Objects In The Launch Bay (every barrel into the Launch Bay), and Self Control (10 missions in a row without kicking a single barrel).",
                "Bar and jukebox: Happy Feet (dance for an hour total), Big Spender (buy 25 rounds at the Abyss Bar), Party Time! (toast to music in a full team of four), and Disc Jockey (play 25 songs to the end on the jukebox)."
            ]
        },

        {
            heading: "Hidden: In the Caves & Solo",
            body: [
                "Combat and mission oddities: Hit 'em Where It Hurts (1,000 weakspot hits), What Are These Things? (deposit five Error Cubes), Designated Decoy (take the most Dreadnought damage on your team), Without A Paddle (be the last Dwarf up with no primary or secondary ammo as a Dreadnought spawns), and I Like It Down Here (stay in one mission an hour or longer).",
                "Hosting and solo counts: It's My Party (host and complete 50 team missions), Lone Wolf (10 solo missions), and Bosco, You're The Best (100 solo missions).",
                "Buying every mod: Exploring My Options (unlock a new primary and secondary for one character), State Of The Art (a mod in every tier for every upgradable item in the Equipment Terminal), and Advanced Robotics (a mod in every tier for Bosco)."
            ]
        },

        {
            heading: "Suggested Order",
            body: [
                "Play normally and let the counts build: Approved Greenbeard, Miner, Expert Miner, and eventually Legendary Miner, with Performance Matters, Management Approves, Feelin' Perky, Mini Fixer, Mutated Scavenger, and Good Shepherd along the way. Promote classes as you go for Movin' On Up, Corporate Climber, Hat Trick, Full Team Ahead, Silver-Tier Employee, Gold-Tier Employee, Pro-Team, and Legendary-Team.",
                "Climb the Hazard tiers with a steady group: Stepping It Up, Thick-Skinned, Going Lethal, then the streaks (Consistent Performance, Employee Of The Month, Rock Solid) and the clean clears (Bring Your A-Game, Like A Well-Oiled Machine, Karl Would Be Proud). Fit boss goals in on any run: Now We Have  A BET-C, Big Game Hunter, See You Later, Detonator!, Pest Control, and Just Another Bug Hunt.",
                "Run Deep Dives weekly for Going Deeper, Elite Diver, Deep For Speed, and Veteran Diver, and grab Jeweler, Prospector, Mustacho, Total Makeover, and If Only I Got Paid For This... opportunistically. Do the riding feats (Barrel Rider, Hi Ho, Silver - Away!, Farmer, Car Pool, Drill-by Shooting, Roller Coaster) with a coordinated team.",
                "Sweep the Space Rig hidden achievements in the lobby (Barrel Kicker, That's Not How You Play This Game, Darwin Award, Happy Feet, Big Spender, Party Time!, Disc Jockey, The A-Team, Time Well Spent, Foreign Objects In The Launch Bay, Self Control), then chip away at the cave and solo ones (Hit 'em Where It Hurts, What Are These Things?, Designated Decoy, Without A Paddle, I Like It Down Here, It's My Party, Lone Wolf, Bosco, You're The Best, Exploring My Options, State Of The Art, Advanced Robotics)."
            ]
        }

    ]

};

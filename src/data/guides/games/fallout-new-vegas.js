// Fallout: New Vegas's Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/fallout-new-vegas.json), whose 75 achievements
//   were sourced directly from Steam's own achievement schema for appid
//   22380 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js). Every one of the 75 ships a
//   real, official Steam description, quoted directly below - the game
//   has no hidden achievements.
// - The 75 total is the base game's 50 plus the five each from the four
//   add-ons (Dead Money, Honest Hearts, Old World Blues, Lonesome Road)
//   and Gun Runners' Arsenal.
// - The grouping (character and skill milestones, the Mojave main-quest
//   finales, the casino and gambling set, then one section per add-on) is
//   read from what each achievement's own description requires.
export const GUIDE = {

    slug: "fallout-new-vegas-achievement-guide",
    category: "game",
    gameSlug: "fallout-new-vegas",
    icon: "☢️",
    title: "Fallout: New Vegas Achievement Guide",
    summary: "A practical guide to all 75 Steam achievements in Fallout: New Vegas - the level and skill-use milestones, the branching Mojave main-quest finales, the casino set, and the five add-ons (Dead Money, Honest Hearts, Old World Blues, Lonesome Road, Gun Runners' Arsenal).",

    relatedSlugs: ["achievement-completion-and-tracking", "understanding-achievement-availability"],

    sections: [

        {
            heading: "Overview",
            body: [
                "Fallout: New Vegas has 75 Steam achievements and none are hidden. Fifty come from the base game; the other 25 are five apiece from Dead Money, Honest Hearts, Old World Blues, Lonesome Road, and the Gun Runners' Arsenal pack.",
                "The main-quest finales are mutually exclusive by faction, so full completion needs more than one playthrough. The skill-use grinds (10,000 damage with each weapon type, heal 10,000 with Stimpaks and with food) and the two big exploration counts are the main time sinks. Hardcore is its own separate start-to-finish run.",
                "Tip: plan one long Hardcore playthrough that also mops up every non-faction achievement (levels, skill grinds, exploration, casinos, companions, the add-ons), then do short focused runs for each of the remaining faction endings using a save made just before the point of no return."
            ]
        },

        {
            heading: "Character & Skill Milestones",
            body: [
                "Levels: New Kid (reach level 10), Up and Comer (reach level 20), and The Boss (reach level 30). Companions: Ol' Buddy Ol' Pal (recruit any companion) and The Whole Gang's Here (recruit all companions).",
                "Making and mending: Crafty (craft 20 items), Mod Master (install 20 weapon mods), Jury Rigger (repair 30 items), and Hack the Mojave (hack 25 terminals). No Tumbler Fumbler is 25 locks picked, Artful Pocketer is 50 pockets picked, and Outstanding Orator is 50 Speech challenges passed.",
                "Damage grinds (10,000 each): Lead Dealer with Guns, Blast Mastery with Energy Weapons, Love the Bomb with Explosives, New Vegas Samurai with Melee Weapons, and Old-Tyme Brawler with Unarmed. Healing grinds (10,000 each): Stim-ply Amazing with Stimpaks and Desert Survivalist with food. You Run Barter Town is selling 10,000 caps of goods.",
                "Exploration: Walker of the Mojave (discover 50 locations), Master of the Mojave (discover 125 locations), and Globe Trotter (find every snow globe)."
            ]
        },

        {
            heading: "The Mojave Main Quest",
            body: [
                "The opening beats are shared on every route: Ain't That a Kick in the Head (finish the tutorial), They Went That-a-Way (track down Benny), and Ring-a-Ding-Ding (reach Benny on the Strip).",
                "From there the story splits by faction and the finale achievements are mutually exclusive in a single save: The House Always Wins (Mr. House), For the Republic (NCR), Render Unto Caesar (Caesar's Legion), and Wild Card (independent / Yes Man). All or Nothing unlocks for reaching the Second Battle of Hoover Dam, and Eureka!, Veni, Vidi, Vici, and No Gods, No Masters are the completion achievements for the independent, Legion, and NCR endgames respectively - which one you can earn depends on the route you took."
            ]
        },

        {
            heading: "Companion & Side Quests",
            body: [
                "Companion and one-off quests: Come Fly With Me, Talent Pool, Return to Sender, Arizona Killer, You'll Know It When It Happens, G.I. Blues, That Lucky Old Sun, Volare!, and The Legend of the Star. Some of these can be failed or locked out by story and faction choices, so keep a spare save if you are chasing them all."
            ]
        },

        {
            heading: "Casinos & Gambling",
            body: [
                "Table games: Know When to Fold Them (win 3 games of Caravan) and Caravan Master (win 30). Machine and table play: One Armed Bandit (10 spins of Slots), Little Wheel (10 spins of Roulette), and Double Down (10 hands of Blackjack).",
                "The Courier Who Broke the Bank is the big one - get banned from every casino on and around the Strip by winning too much at their tables."
            ]
        },

        {
            heading: "Hardcore Mode",
            body: [
                "Hardcore is a single achievement, Hardcore, for playing the game from the start of the tutorial to the end of the main quest with Hardcore Mode switched on the whole time (ammo has weight, healing is gradual, and companions can die permanently). It can be combined with any faction route."
            ]
        },

        {
            heading: "Dead Money",
            body: [
                "The Sierra Madre add-on: Assemble Your Crew (recruit Dean Domino, Christine and Dog), Having a Ball (complete the Gala Event), then the two ways to end it - Cash Out (confront Father Elijah in the Vault) or Safety Deposit Box (trap Father Elijah in the Vault). Sierra Souvenir Aficionado is collecting 500 Sierra Madre Chips."
            ]
        },

        {
            heading: "Honest Hearts",
            body: [
                "The Zion add-on runs in order: When We Remembered Zion (arrive at Zion), In a Foreign Land (scout the valley for signs of the White Legs), Restore Our Fortunes (resupply Daniel and the Sorrows), then one of the two outcomes - O Daughter of Babylon (crush the White Legs) or May my Hand Forget its Skill (evacuate Zion)."
            ]
        },

        {
            heading: "Old World Blues",
            body: [
                "The Big MT add-on: Cardiac Arrest! (recover your heart), Make up your Mind (recover your brain), Spinal-Tapped (recover the X-8 vertebrae-pulse-de-sensitizer frequency), Making Friends (reactivate all of the Sink's robotic assistants), and Outsmarted (complete Old World Blues)."
            ]
        },

        {
            heading: "Lonesome Road",
            body: [
                "The Divide add-on: ED-Ecated (find all of ED-E's upgrades in the Divide), Rocket's Red Glare (fully upgrade the Divide's signature weapon), Warhead Hunter (detonate all of the warheads), Condemned to Repeat It (decide the fate of all the Divide dwellers), and Hometown Hero (complete Lonesome Road)."
            ]
        },

        {
            heading: "Gun Runners' Arsenal",
            body: [
                "The weapons pack: Curios and Relics (10,000 damage with unique Mojave Wasteland weapons), Master of the Arsenal (10,000 damage with GRA weapons), then the challenge tiers - Up to the Challenge (any three one-star challenges), Combat Veteran (any three two-star challenges), and Pros Only (any three three-star challenges)."
            ]
        },

        {
            heading: "Suggested Order",
            body: [
                "Start a Hardcore run and take it slowly: hit New Kid, Up and Comer, and The Boss on the way, recruit companions for Ol' Buddy Ol' Pal and The Whole Gang's Here, and let the skill grinds accumulate (Lead Dealer, Blast Mastery, Love the Bomb, New Vegas Samurai, Old-Tyme Brawler, Stim-ply Amazing, Desert Survivalist, You Run Barter Town) alongside Crafty, Mod Master, Jury Rigger, Hack the Mojave, No Tumbler Fumbler, Artful Pocketer, and Outstanding Orator.",
                "Explore thoroughly for Walker of the Mojave, Master of the Mojave, and Globe Trotter, and clear the casinos for Know When to Fold Them, Caravan Master, One Armed Bandit, Little Wheel, Double Down, and The Courier Who Broke the Bank. Do all four add-ons on this save: Dead Money (Assemble Your Crew, Having a Ball, Sierra Souvenir Aficionado, and one of Cash Out / Safety Deposit Box), Honest Hearts (When We Remembered Zion, In a Foreign Land, Restore Our Fortunes, and one of O Daughter of Babylon / May my Hand Forget its Skill), Old World Blues (Cardiac Arrest!, Make up your Mind, Spinal-Tapped, Making Friends, Outsmarted), Lonesome Road (ED-Ecated, Rocket's Red Glare, Warhead Hunter, Condemned to Repeat It, Hometown Hero), and Gun Runners' Arsenal (Curios and Relics, Master of the Arsenal, Up to the Challenge, Combat Veteran, Pros Only).",
                "Take this run to one faction ending (say Wild Card, earning Eureka! and finishing Ain't That a Kick in the Head, They Went That-a-Way, Ring-a-Ding-Ding, All or Nothing, and the Hardcore achievement), plus the side quests you can fit (Come Fly With Me, Talent Pool, Return to Sender, Arizona Killer, You'll Know It When It Happens, G.I. Blues, That Lucky Old Sun, Volare!, The Legend of the Star).",
                "Reload a pre-finale save (or start fresh) for the other endings: The House Always Wins, For the Republic (No Gods, No Masters), and Render Unto Caesar (Veni, Vidi, Vici)."
            ]
        }

    ]

};

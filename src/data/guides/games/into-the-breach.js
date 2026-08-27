// Into the Breach's Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/into-the-breach.json), whose 70 achievements
//   were sourced directly from Steam's own achievement schema for appid
//   590380 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js) - all 70 ship a real,
//   official Steam description, quoted directly below. None are
//   Steam-hidden.
// - The grouping below (campaign victories, meta progression, single-
//   island challenges, pilots, harder challenge runs, then one section
//   per pair of squads) is read directly from each achievement's own
//   apiname prefix and description text - the squad names themselves
//   (Rift Walkers, Steel Judoka, Rusting Hulks, Flame Behemoths, Zenith
//   Guard, Frozen Titans, Blitzkrieg, Hazardous Mechs, Bombermechs,
//   Arachnophile, Mist Eaters, Heat Sinkers, Cataclysm) are quoted
//   verbatim from the achievements' own official descriptions, not
//   invented.
export const GUIDE = {

    slug: "into-the-breach-achievement-guide",
    category: "game",
    gameSlug: "into-the-breach",
    icon: "🤖",
    title: "Into the Breach Achievement Guide",
    summary: "A practical guide to all 70 Steam achievements in Into the Breach - campaign victories, meta progression, and squad-specific challenges across every mech squad in the game.",

    relatedSlugs: ["achievement-completion-and-tracking", "understanding-achievement-availability"],

    sections: [

        {
            heading: "Overview",
            body: [
                "Into the Breach has 70 Steam achievements, none of them Steam-hidden. Most reward either finishing a full campaign run in a specific way, or a single squad-specific feat achievable in one battle - so the list rewards playing many short runs with different squads rather than one long grind.",
                "Nothing here is permanently missable - every squad, challenge, and victory condition is repeatable across any number of new games, so a missed squad-specific achievement can always be chased again on a later run with that squad."
            ]
        },

        {
            heading: "Victory & Campaign Progress",
            body: [
                "Victory (beat the game, any length) is the baseline completion achievement. Hard Victory raises the difficulty, while Adaptable Victory asks for at least one win at each of the three game lengths (2, 3, and 4 Islands).",
                "Squads Victory (win with 4 different squads) and Complete Victory (win with all 10 primary squads) are the big long-term goals here - Complete Victory in particular requires unlocking and mastering most of the game's roster, not just repeating one favorite squad."
            ]
        },

        {
            heading: "Meta Progression",
            body: [
                "Emerging Technologies (unlock a new Mech Squad) is a natural early unlock. Friends in High Places (50 Reputation spent across all games), Immovable Objects (block 100 Vek across all games), Humanity's Savior (rescue 100,000 civilians across all games), and Perfect Strategy (collect 10 Perfect Island rewards across all games) all accumulate across every run you play, not just a single game.",
                "Tip: none of the meta achievements need a dedicated run - they tick up naturally the more you play, so just keep an eye on your lifetime totals rather than chasing them directly."
            ]
        },

        {
            heading: "Single-Island Challenges",
            body: [
                "Perfect Island (no failed objectives on a single Corporate Island), The Defenders (no Building Damage), Untouchable (no Mech Damage), Backup Batteries (10 Grid Power earned or bought on one Island), and Good Samaritan (9 Reputation from missions on one Island) are all self-contained goals scoped to a single Corporate Island rather than a full campaign."
            ]
        },

        {
            heading: "Pilots",
            body: [
                "Field Promotion (one Pilot at max level) and Best of the Best (3 Pilots at max level simultaneously) reward long-term Pilot investment. Come Together (unlock 6 additional Pilots) and Distant Friends (encounter a familiar face) are smaller, one-off unlocks and encounters.",
                "I'm getting too old for this... (one Pilot fights the final battle 3 times across multiple games) rewards sticking with the same Pilot across several full campaigns rather than rotating your roster."
            ]
        },

        {
            heading: "The Harder Challenge Runs",
            body: [
                "Sustainable Energy, Engineering Dropout, Chronophobia, There is No Try, and Trusted Equipment are all self-imposed restriction runs, each requiring 3 Corporate Islands finished under a specific limitation: never dropping below 4 Grid Power, never powering a Weapon Modification, destroying every Time Pod found, never failing an objective, or never equipping any new Pilots or weapons.",
                "Tip: these five are meaningfully harder than a normal victory - treat them as goals for after you're already comfortable winning consistently, not something to chase on an early run."
            ]
        },

        {
            heading: "Rift Walkers & Steel Judoka",
            body: [
                "Watery Grave, Ramming Speed, and Island Secure are tied to the Rift Walkers squad - your starting team - covering a drowning combo, a long-range Dash Punch kill, and simply clearing the first Corporate Island with them.",
                "Unbreakable, Unwitting Allies, and Mass Displacement belong to the Steel Judoka squad instead, rewarding absorbed Mech Armor damage, enemies killed by friendly fire, and a multi-enemy push in one attack."
            ]
        },

        {
            heading: "Rusting Hulks & Flame Behemoths",
            body: [
                "Overpowered, Stormy Weather, and Perfect Battle belong to the Rusting Hulks squad: overfilling your Power Grid twice, dealing 12 Electric Smoke damage in one battle, and finishing a battle with no Mech or Building Damage taken.",
                "Quantum Entanglement, Scorched Earth, and This is Fine are the Flame Behemoths' equivalents - a long-range teleport, ending a battle with 12 tiles on fire, and having 5 enemies burning at once."
            ]
        },

        {
            heading: "Zenith Guard & Frozen Titans",
            body: [
                "Get Over Here, Glittering C-Beam, and Shield Mastery are Zenith Guard achievements: a pull-into-kill combo, hitting 4 enemies with one laser, and blocking damage with a Shield 4 times in one battle.",
                "Cryo Expert, Trick Shot, and Pacifist belong to the Frozen Titans squad - firing the Cryo-Launcher 4 times in one battle, a triple kill with the Janus Cannon, and finishing a battle having killed fewer than 3 enemies."
            ]
        },

        {
            heading: "Blitzkrieg & Hazardous Mechs",
            body: [
                "Chain Attack, Lightning War, and Hold the Line are Blitzkrieg squad achievements: a 10-tile Chain Whip chain, clearing the first 2 Corporate Islands in under 30 minutes, and blocking 4 emerging Vek in a single turn.",
                "Healing, Immortal, and Overkill belong to the Hazardous Mechs squad instead - healing 10 Mech Health in one battle, finishing 4 Corporate Islands without a Mech destroyed, and dealing 8 damage to a single unit in one attack."
            ]
        },

        {
            heading: "Random, Custom & the Advanced Edition Squads",
            body: [
                "Loot Boxes!, Lucky Start, and Change the Odds are all Random-squad achievements - opening 5 Time Pods in one game, winning without spending Reputation, and raising Grid Defense to 30% or more.",
                "Mech Specialist, Class Specialist, and Flight Specialist reward building a themed Custom squad - 3 of the same Mech, 3 different Mechs from one class, or 3 flying Mechs - and winning with it.",
                "The remaining 15 achievements belong to the game's free Advanced Edition squads: Hold the Door, No Survivors, and Powered Blast (Bombermechs); Spider Breeding, Working Together, and Efficient Explosives (Arachnophile); Stay With Me!, Let's Walk, and On the Backburner (Mist Eaters); Boosted, Feed the Flame, and Maximum Firepower (Heat Sinkers); Unstable Ground, Core of the Earth, and Miner Inconvenience (Cataclysm) - each a squad-specific single-battle feat, same pattern as the original eight squads above."
            ]
        },

        {
            heading: "Suggested Order",
            body: [
                "Play a normal first campaign with the Rift Walkers to learn the game, picking up Victory, the easy single-island achievements, and whichever Rift Walkers/Pilot achievements come naturally.",
                "Unlock new squads as you go (Emerging Technologies triggers this) and play a short run with each one specifically to chase its 3 squad-specific achievements - they're each fast to attempt since they only need one good battle, not a full campaign.",
                "Work toward Squads Victory and eventually Complete Victory once you've unlocked and gotten comfortable with most of the roster.",
                "Save the five harder restriction runs (Sustainable Energy, Engineering Dropout, Chronophobia, There is No Try, Trusted Equipment) and Hard Victory for once you're winning consistently on a normal run."
            ]
        }

    ]

};

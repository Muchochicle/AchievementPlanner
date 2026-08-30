// Nova Drift Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/nova-drift.json), whose 40 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   858210 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "nova-drift-achievement-guide",
    "category": "game",
    "gameSlug": "nova-drift",
    "icon": "🛸",
    "title": "Nova Drift Achievement Guide",
    "summary": "A practical guide to all 40 Steam achievements in Nova Drift - none are hidden. Covers the build-specific interaction feats (mods, shields, weapon constructs, Super Mods) and the endgame, scoring and wave-100 boss achievements.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Nova Drift has 40 Steam achievements and none of them are hidden. Nearly all of them ask you to build a very specific combination of mods and Super Mods and then trigger a particular interaction - reflect a projectile with your weapon construct, convert Reflexive Shields into a rapid-fire weapon, self-destruct a Bastion shield triggering three effects at once, control 30 orbs of discord, become an 80-segment Leviathan. The rest are endgame goals: high-score thresholds under specific mods, defeating a wave-100 boss (with the starting gear, or without ever rerolling), and exhausting the random mod pool to discover The Void.",
                "Nothing is missable - every run is a fresh build and there is no permanent progression to lose, so any achievement can be attempted on a targeted run. The difficulty is knowledge: you need to know the mod tree well enough to deliberately assemble each combination, since the game will not hand you the right mods on its own.",
                "Tip: treat each achievement as a build order rather than a play style - look up which mods and Super Mods the achievement names, then on a fresh run reroll and prioritise exactly those, ignoring score until the combination is online. Many of these are impossible to get by playing for survival."
            ]
        },
        {
            "heading": "Build & Weapon Feats",
            "body": [
                "The build-specific interaction feats: 30,000 damage in one hit, a no-damage Retribution trigger, reflecting a projectile with your weapon construct, Volatile Shields on a Blade Drone, 40 Warp Shield explosions at once, a 300-missile Salvo, a 3.5-second Bastion assembly, an Omnishield death with shields up, an Ataraxia low-mod high-score run, a Last Stand high-score run, a 20-target Railgun penetration, the Celestial Lance / Hyper Boost self-trigger, a 6,000-damage Dying Star run, 25,000 crash damage in one hit, making Discharge your primary weapon, the Reflexive Shields rapid-fire conversion, a 12,000-damage endurance run, discovering The Void, and the Architect triple-effect self-destruct.",
                "The achievements here: Planet Buster (Deal over 30,000 damage in one hit); A Bold Strategy (Trigger Retribution without being damaged by an enemy or hazard); No, You (Reflect an enemy projectile with your weapon construct); Volatile Projectile (Trigger Volatile Shields on a Blade Drone); Divide by Zero (Trigger 40 or more Warp Shield explosions at once); Missile Massacre (Fire Salvo with at least 300 missiles in reserve); Turbo Tortoise (Achieve a Bastion assembly time of 3.5 seconds or less); I Regret Everything (With Omnishield, die with your shields protecting your hull); Pure of Mod and Body (Finish a game scoring at least 200,000 points while possessing Ataraxia and at most 7 other mods); Filled with Determination (Score 200,000 points under the effects of Last Stand); Shouldn’t Have Been Standing There (Penetrate 20 or more targets with one Railgun projectile); Sonic Rainboom (Self-trigger Volatile Shields with Celestial Lance while under the effects of a Hyper Boost power-up); This is Fine (End a game having sustained 6,000 or more damage from Dying Star); Ludicrous Speed (Deal at least 25,000 crash damage in one hit); Shock and Awe (Make Discharge your primary weapon); Secret Weapon (Convert Reflexive Shields into a rapid-fire weapon); Bullet Sponge (End a game having sustained 12,000 total damage from any source); Gaze Into the Abyss (Discover The Void: Exhaust the random mod pool); The Best Defense (Using the Architect, self-destruct your Bastion Shield triggering Volatile Shields, Self Destruction, and Tempest Break)."
            ]
        },
        {
            "heading": "Endgame, Scoring & Boss Feats",
            "body": [
                "The endgame and scoring goals: a -35% Leviathan, 30 orbs of discord, a no-reroll wave-100 boss, an Ultra Chaos central-mod-only level 40, dying to a Cargo Train, a Hullbreaker crash-damage Seraph kill, +150% Ataraxia global damage, an 80-segment Leviathan, 50 Swarm Constructs, a 4-minute Turret, a no-node Station Omega kill, seven VOID offers, +75% battlefield size, a 250,000 nine-Super-Mod score, a 4-Ally construct limit, a full-minute weapon charge, the instant-burn Bastion build, destroying all of Warbringer's components, an enemy-sucking shield, the Obsession sacrifice, and defeating a wave-100 boss with the starting gear.",
                "The achievements here: Boop Noodle (Be a Leviathan with at least a -35% size modifier); Chaos Is A Ladder (Control 30 orbs of discord); Don't Play Dice with The Universe (Defeat a wave 100 boss without ever rerolling); Ultra Chaos (Reach level 40 in non-Draft Mode having only chosen the central mod); Trolley Problem (Die to a Cargo Train); Joust (As a Hullbreaker, defeat Seraph with crash damage during its charge phase); Serenity Now (Reach +150% global damage from the Ataraxia Super Mod without Draft Mode); World Serpent (Become 80 segments long as a Leviathan); NOT THE BEES (Control 50 Swarm Constructs); Still Alive (Keep your Turret alive for 4 minutes); The Hard Way (Destroy Station Omega without breaking any of its nodes); Savor The Void (Be offered 7 of THE VOID while upgrading); Social Distancing (Achieve +75% battlefield size); I Want It All (Get a score of 250,000+ while owning 9 Super Mods); I Get By With A Little Help From My Friends (Achieve an Ally construct limit of 4); Steady... Steady... (Charge your weapon for a full minute); Malfunction (Create a build where your Bastion shield detonates and deals burn damage the instant it deploys); 'Tis But A Scratch (Destroy all of Warbringer's components); It Was At That Moment He Knew... (Have a shield that powerfully sucks enemies toward you); Restraining Order (Sacrifice half of your defenses to Obsession); Ya Basic (Defeat a wave 100 boss with the starting gear)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play normally for a few runs first to learn the mod tree, the Super Mods, and how far a strong build gets you.",
                "2. Go through the build-feat achievements one at a time - look up the mods each one names, then do a targeted run that rerolls toward exactly those and triggers the interaction.",
                "3. Do the body-shape and construct feats (the -35% and 80-segment Leviathan, 50 Swarm Constructs, the 4-Ally limit) on dedicated Leviathan / Constructor runs.",
                "4. Do the scoring achievements (the Ataraxia, Last Stand and nine-Super-Mod high scores) on runs built purely for damage output.",
                "5. Finish with the wave-100 boss achievements - one no-reroll run and one starting-gear run - which are the hardest and benefit from everything you have learned.",
                "Tip: for Ya Basic (wave-100 boss with starting gear), you cannot take any mods, so the run is about pure dodging and patience - use a Body with high base mobility, kite the boss in wide circles, and only fire when you have a clean line, since a single mistake with no defensive mods usually ends the run."
            ]
        }
    ]
};

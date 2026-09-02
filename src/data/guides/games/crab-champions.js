// Crab Champions Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/crab-champions.json), whose 109 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   774801 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 0 achievement(s) are Steam-hidden or ship no Steam
//   description; their description here is researched from community
//   100% guides and is a curatorial summary. Every other description is
//   Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "crab-champions-achievement-guide",
    "category": "game",
    "gameSlug": "crab-champions",
    "icon": "🦀",
    "title": "Crab Champions Achievement Guide",
    "summary": "A practical guide to all 109 Steam achievements in Crab Champions (0 hidden). Every achievement carries Steam's own text - the win conditions and difficulty streaks, the account ranks, the challenge and speedrun feats, the two arcade minigames, and a 'win with weapon X' pair (any difficulty, then Ruby+) for every weapon in the game.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Crab Champions has 109 Steam achievements, none hidden. It is a fast, movement-heavy roguelite shooter where a crab island-hops through waves, bosses and shops. The achievements cover the win tiers and win streaks across the difficulty ladder (Sapphire, Ruby, Prismatic), the account ranks (Silver through Prismatic), single-run feats (no damage, no shop purchases, a million unspent crystals, 7,500 eliminations, win without firing, three speedrun targets, 10,000 max health, 100K damage in one shot), the challenge modifiers (Challenger I-III, Ultra Chaos), the Arcade and Holdout minigames, and - the bulk of the list - a two-step 'win with this weapon' achievement (any difficulty, then Ruby or higher) for every weapon.",
                "There are no hidden achievements - the list above is the whole set.",
                "The catalog marks it difficulty 3 and single-playthrough - but 'Crab Legend' (all challenges), the all-red-modifier runs and the per-weapon Ruby wins are a very long grind."
            ]
        },
        {
            "heading": "Wins & Feats",
            "body": [
                "The win tiers and streaks, and the single-run feats (no damage, frugal, millionaire, 7,500 eliminations, no-fire win, the three speedruns, 10,000 health, maxed inventory, big damage, boss feats, salvage/purchase/reroll/totem counters, survive to island 100).",
                "The achievements here: Crab Champion I (Get a win on any difficulty); Crab Champion II (Get 3 wins total on Sapphire or higher difficulty); Crab Champion III (Get 5 wins total on Ruby or higher difficulty); Skilled (Get 3 wins in a row on any difficulty); Pro (Get 3 wins in a row on Ruby or higher difficulty); Master (Get 2 wins in a row on Prismatic difficulty); Looper (Get a win after looping at least once); Flawless (Get a win on Gold or higher difficulty without taking any damage); Frugal (Get a win on Gold or higher difficulty with 5 or less shop purchases); Millionaire (Get a win with over 1M unspent crystals in your inventory); Unstoppable (Get a win with over 7500 eliminations); Slice And Dice (Get a win without firing your weapon); Speedrun I (Clear island 21 in 16 minutes or less); Speedrun II (Clear island 56 in 40 minutes or less); Speedrun III (Clear island 140 in 70 minutes or less); Tank (Get 10000 max health on a single run); Maxed Out (Fill all mod and perk slots in your inventory during a single run); Solid Gold (Fill 20 weapon mod slots with legendary weapon mods); Greedy (Defeat a boss with at least 5 greed perks in your inventory); Playing With Power (Level up a mod or perk to level 20 in a single run); Recycler (Salvage 100 pickups in a single run); Big Spender (Make 100 purchases at shops in a single run); Roller (Reroll shops 50 times in a single run); Vandal (Destroy 25 totems in a single run); Flex I (Defeat an elite without taking any damage); Flex II (Defeat a boss without taking any damage); Flex III (Clear the first biome on Ruby or higher difficulty without taking any damage); Ultra Damage (Deal over 100K damage in a single shot); EZ (Defeat a boss in under 10 seconds); Marathon (Survive until island 100)."
            ]
        },
        {
            "heading": "Weapon Mastery (part 1)",
            "body": [
                "The 'win with this weapon' pair (any difficulty, then Ruby or higher) for the first block of weapons, plus 'Gunslinger' (win with every weapon) and 'Crab Legend' (all challenges).",
                "The achievements here: Auto Rifle Master I (Get a win with the Auto Rifle on any difficulty); Auto Rifle Master II (Get a win with the Auto Rifle on Ruby or higher difficulty); Dual Shotgun Master I (Get a win with the Dual Shotguns on any difficulty); Dual Shotgun Master II (Get a win with the Dual Shotguns on Ruby or higher difficulty); Dual Pistol Master I (Get a win with the Dual Pistols on any difficulty); Dual Pistol Master II (Get a win with the Dual Pistols on Ruby or higher difficulty); Auto Shotgun Master I (Get a win with the Auto Shotgun on any difficulty); Auto Shotgun Master II (Get a win with the Auto Shotgun on Ruby or higher difficulty); Burst Pistol Master I (Get a win with the Burst Pistol on any difficulty); Burst Pistol Master II (Get a win with the Burst Pistol on Ruby or higher difficulty); Sniper Master I (Get a win with the Sniper on any difficulty); Sniper Master II (Get a win with the Sniper on Ruby or higher difficulty); Crossbow Master I (Get a win with the Crossbow on any difficulty); Crossbow Master II (Get a win with the Crossbow on Ruby or higher difficulty); Orb Launcher Master I (Get a win with the Orb Launcher on any difficulty); Orb Launcher Master II (Get a win with the Orb Launcher on Ruby or higher difficulty); Rocket Launcher Master I (Get a win with the Rocket Launcher on any difficulty); Rocket Launcher Master II (Get a win with the Rocket Launcher on Ruby or higher difficulty); Minigun Master I (Get a win with the Minigun on any difficulty); Minigun Master II (Get a win with the Minigun on Ruby or higher difficulty);  Blade Launcher Master I (Get a win with the Blade Launcher on any difficulty);  Blade Launcher Master II (Get a win with the Blade Launcher on Ruby or higher difficulty); Cluster Launcher Master I (Get a win with the Cluster Launcher on any difficulty); Cluster Launcher Master II (Get a win with the Cluster Launcher on Ruby or higher difficulty); Gunslinger (Get a win with all weapons in the game)."
            ]
        },
        {
            "heading": "Ranks, Minigames & Challenge Runs",
            "body": [
                "'Crab Legend', the Challenger I-III and Ultra Chaos all-red-modifier runs, the Arcade and Holdout minigame high scores, and the account ranks (Silver through Prismatic).",
                "The achievements here: Crab Legend (Complete all challenges); Challenger I (Get a win with 5 or more red difficulty modifiers and 0 green difficulty modifiers active); Challenger II (Get a win with 10 or more red difficulty modifiers and 0 green difficulty modifiers active); Challenger III (Get a win with all red difficulty modifiers and 0 green difficulty modifiers active); Arcade Champion (Get a high score of at least 300 in the Arcade minigame); Holdout Champion (Get a high score of at least 50 in the Holdout minigame); Silver (Reach Silver account rank); Gold (Reach Gold account rank); Sapphire (Reach Sapphire account rank); Emerald (Reach Emerald account rank); Ruby (Reach Ruby account rank); Diamond (Reach Diamond account rank); Ultra Chaos Champion (Get a win with all red difficulty modifiers, no green difficulty modifiers and the Random Loadout flex difficulty modifier active); Prismatic (Reach Prismatic account rank)."
            ]
        },
        {
            "heading": "Weapon Mastery (part 2)",
            "body": [
                "The 'win with this weapon' pair for the remaining weapons.",
                "The achievements here: Flamethrower Master I (Get a win with the Flamethrower on any difficulty); Flamethrower Master II (Get a win with the Flamethrower on Ruby or higher difficulty); Arcane Wand Master I (Get a win with the Arcane Wand on any difficulty); Arcane Wand Master II (Get a win with the Arcane Wand on Ruby or higher difficulty); Laser Cannons Master I (Get a win with the Laser Cannons on any difficulty); Laser Cannons Master II (Get a win with the Laser Cannons on Ruby or higher  difficulty); Seagle Master I (Get a win with the Seagle on any difficulty); Seagle Master II (Get a win with the Seagle on Ruby or higher difficulty); Marksman Rifle Master I (Get a win with the Marksman Rifle on any difficulty); Marksman Rifle Master II (Get a win with the Marksman Rifle on Ruby or higher difficulty); Ice Staff Master I (Get a win with the Ice Staff on any difficulty); Ice Staff Master II (Get a win with the Ice Staff on Ruby or higher difficulty); Grenade Master I (Get a win with the Grenade on any difficulty); Grenade Master II (Get a win with the Grenade on Ruby or higher difficulty); Grappling Hook Master I (Get a win with the Grappling Hook on any difficulty); Grappling Hook Master II (Get a win with the Grappling Hook on Ruby or higher  difficulty); Black Hole Master I (Get a win with the Black Hole on any difficulty); Black Hole Master II (Get a win with the Black Hole on Ruby or higher difficulty); Laser Beam Master I (Get a win with the Laser Beam on any difficulty); Laser Beam Master II (Get a win with the Laser Beam on Ruby or higher difficulty); Ice Blast Master I (Get a win with the Ice Blast on any difficulty); Ice Blast Master II (Get a win with the Ice Blast on Ruby or higher difficulty); Electro Globe Master I (Get a win with the Electro Globe on any difficulty); Electro Globe Master II (Get a win with the Electro Globe on Ruby or higher difficulty); Claw Master I (Get a win with the Claw on any difficulty); Claw Master II (Get a win with the Claw on Ruby or higher difficulty); Dagger Master I (Get a win with the Dagger on any difficulty); Dagger Master II (Get a win with the Dagger on Ruby or higher difficulty); Hammer Master I (Get a win with the Hammer on any difficulty); Hammer Master II (Get a win with the Hammer on Ruby or higher difficulty); Pickaxe Master I (Get a win with the Pickaxe on any difficulty); Pickaxe Master II (Get a win with the Pickaxe on Ruby or higher  difficulty); Lightning Scepter Master I (Get a win with the Lightning Scepter on any difficulty); Lightning Scepter Master II (Lightning Scepter on Ruby or higher difficulty); Air Strike Master I (Get a win with the Air Strike on any difficulty); Air Strike Master II (Get a win with the Air Strike on Ruby or higher difficulty); Katana Master I (Get a win with the Katana on any difficulty); Katana Master II (Get a win with the Katana on Ruby or higher difficulty); Poison Cannon Master I (Get a win with the Poison Cannon on any difficulty); Poison Cannon Master II (Get a win with the Poison Cannon on Ruby or higher difficulty)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Grind runs to climb the account ranks (Silver through Diamond, then Prismatic) - most of this happens while you chase everything else.",
                "2. Win once with every weapon on any difficulty for the first half of 'Gunslinger', then repeat on Ruby or higher.",
                "3. Knock out the single-run feats on convenient runs: no damage, frugal, no-fire, a million crystals, 7,500 eliminations, the speedrun targets.",
                "4. Do the challenge-modifier runs: Challenger I, II, III (all red, no green), then Ultra Chaos with Random Loadout.",
                "5. Get 300 in Arcade and 50 in Holdout, and finish every challenge for 'Crab Legend'.",
                "Tip: pair the per-weapon Ruby wins with the account-rank grind - each Ruby win pushes your rank and ticks a weapon off at once, so systematically rotate through the weapon list on Ruby rather than replaying your favourite build."
            ]
        }
    ]
};

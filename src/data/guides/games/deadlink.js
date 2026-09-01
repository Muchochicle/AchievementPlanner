// Deadlink Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/deadlink.json), whose 74 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1676130 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 3 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (PowerPyx / Game8 / PlayStationTrophies / TrueAchievements) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "deadlink-achievement-guide",
    "category": "game",
    "gameSlug": "deadlink",
    "icon": "🔫",
    "title": "Deadlink Achievement Guide",
    "summary": "A practical guide to all 74 Steam achievements in Deadlink (3 hidden). Covers the difficulty and Combat Shell run completions, the speedruns, the Implant and weapon-mastery feats, the combat-arena and boss challenges, and the Extant Existence endless mode. Three of the achievements are hidden - a void-jump death, a secret room, and a Survival Event clear - and their conditions are researched from community 100% guides.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Deadlink has 74 Steam achievements and 3 are hidden. The hidden three are 'Call Of The Void' (jump off the railed walkway into the bottomless pit and die, in the Interport section before the third boss), 'Eyes Wide Shut' (find the secret Sex Club room in Tora territory, the first area) and 'You are locked in here with me' (in a Survival Event, defeat every enemy that spawns before the timer runs out). Everything visible is the roguelite completion: full runs on each difficulty (VR Orientation, Neuromancy, Deep Dive), with each of the four Combat Shells, with no Credits spent, and at 5 HP or less; the three speedruns; the Implant achievements; a long list of weapon-specific kill counts; the combat-arena feats; the boss kills (Torantula, Phoenix Apex, Trinary Iskra, Femto CEO), including no-implant versions; buying every upgrade set; and surviving 20 / 40 / 50 / 100 waves of Extant Existence endless mode.",
                "The catalog marks it difficulty 5. This is a hard roguelite - the Deep Dive clear, the sub-30-minute Deep Dive speedrun, the no-implant boss kills, and 100 waves of Extant Existence are all serious skill walls, and the weapon-kill grinds are spread across every weapon in the game. Expect many full runs.",
                "Tip: pick up the difficulty, Combat Shell and speedrun achievements on runs you are doing anyway - a clean Neuromancy run can be a shell completion, a sub-40-minute speedrun and a campaign clear all at once if you plan the loadout."
            ]
        },
        {
            "heading": "Runs & Difficulties",
            "body": [
                "A self-damage death, full runs on VR Orientation / Neuromancy / Deep Dive difficulty, full runs with each of the four Combat Shells, a no-Credit run, a 5-HP run, grenade multi-kills, dying to every elemental barrel type, unlocking the full Codex, and the tutorial (complete, skip, die twice).",
                "The achievements here: An honest man (Die to self-damage.); Go no farther. (Complete a full run on Deep Dive difficulty.); Johnny Neurotic (Complete a full run on Neuromancy difficulty.); Trivial information (Complete a full run on VR Orientation difficulty.); Mars (Complete a full run using the Soldier Combat Shell.); Nimrud (Complete a full run using the Hunter Combat Shell.); Vishnu (Complete a full run using the Engineer Combat Shell.); Hercules (Complete a full run using the Juggernaut Combat Shell.); Sisyphus (Complete a full run without spending a single Credit.); Close call (Complete a full run with 5 or less HP.); Demolition Man (Destroy 5 objects with a single grenade.); Hisashi OSHA (Die to every type of elemental explosive barrel.); Alexandria (Unlock all Codex entries.); Fire in the hole! (Kill 3 enemies with a single grenade.); Baseline (Complete the tutorial.); College dropout (Skip the tutorial.); Hard Lesson (Get killed in the tutorial twice.)."
            ]
        },
        {
            "heading": "Speedruns, Implants & Weapons",
            "body": [
                "The hidden 'Call Of The Void', the three difficulty speedruns, the Implant feats (Legendary Implant, maxing 1 and 3 Implants, all secret Implants), and the weapon-specific kill counts - the Scrapper Shotgun, Bonegrinder, EM Charges, Prox Mines, Flame Assault, Peacekeeper, Matter Converter, Tarball Launcher, Locust Swarm, ARC Cannon, Electrolaser, Particle Accelerator, Stormblight Cascade and Fire Ant rounds.",
                "The achievements here: Call Of The Void (In the Interport section (before the third boss), jump over the walkway railing into the bottomless pit and die.); Games Done Quick (Complete a full run in under 40 minutes on Neuromancy difficulty.); Backwards longjump (Complete a full run in under 30 minutes on Deep Dive difficulty.); Half o-pressed (Complete a full run in under 20 minutes on VR Orientation difficulty.); Better than sex (Insert a Legendary Implant into Implant Matrix.); Min-max (Max out 1 Implant during a single run.); Followed a guide (Max out 3 Implants during a single run.); Open Source (Find all the secret Implants.); I read Plato (Beat the story campaign.); Duck Hunt (Kill 500 enemies at point-blank range with the Scrapper Shotgun.); Mujafedin (Kill 200 enemies from at least 20 meters with the Bonegrinder Rocket Launcher); Butlerian Jihad (Kill 50 robotic enemies with EM Charges.); Toxic attitude\t (Kill 300 enemies with Prox Mines.); Flame War (Kill 50 enemies with Flame Assault grenades that bounced off surfaces.); Big Iron (Kill 500 enemies with headshots using the Peacekeeper.); Blow your load (Break armor with Matter Converter salvo 200 times.); Dissociative violence (Kill 200 enemies with unattached Tarball Launcher grenades.); Exodus 10:1 (Kill 50 enemies with toxic puddles left by the Locust Swarm.); Longinus Podbipięta (Score 3 headshots with a single shot from the ARC Cannon.); It's just a fucking laser! (Keep firing the Electrolaser for at least 15 seconds.); Excellent! (Kill 3 enemies with a single shot from the Particle Accelerator.); Imagine my shock (Zap 5 enemies with single link from Stormblight Cascade activation.); Shish kebab (Ignite 3 enemies with a single Fire Ant round.)."
            ]
        },
        {
            "heading": "Arenas, Bosses & Upgrades",
            "body": [
                "The hidden 'Eyes Wide Shut' and 'You are locked in here with me', the arena feats (head sculptures, a no-fire arena, a melee Apex kill, a fall-damage heavy kill, a fire Torantula kill, air kills and airtime, no-implant boss kills), beating the story campaign, and buying every Deadlink and Combat Shell upgrade set.",
                "The achievements here: Eyes Wide Shut (Find the secret Sex Club room in Tora territory (the first area of the game).); Headhunter (Destroy all head sculptures.); You are locked in here with me (In a Survival Event arena, defeat every enemy that spawns before the timer reaches zero.); Pussifist (Beat a single combat arena without firing a single shot.); Mike Conley (Kill the Phoenix Apex with a melee attack.); Newt-owned (Kill a heavy enemy with fall damage.); It werfers flammens (Kill the Torantula with fire damage.); Air superiority (Kill 6 enemies in a row without touching the ground.); Speedrunner (Stay airborne for 15 seconds.); Arachnophobe (Kill the Torantula without using any implant.); Apex twin (Kill the Phoenix Apex without using any implant.); Amish paradise (Destroy the Trinary Iskra without using any implant.); Man of integrity (Buy all 'Shell Integrity' Deadlink upgrades.); What a riot (Buy all 'Shield Boost' Deadlink upgrades.); Gruby Damage (Buy all 'Damage vs Marked' Deadlink upgrades.); Capitalism, hoe! (Buy all 'Deep Pockets' Deadlink upgrades.); Military Industrial Complex (Buy all Soldier shell upgrades.); The Black Rider (Buy all Hunter shell upgrades.); Erecting a sentry (Buy all Engineer shell upgrades.); I'm the Juggernaut, bitch! (Buy all Juggernaut shell upgrades.)."
            ]
        },
        {
            "heading": "Endgame & Endless",
            "body": [
                "The merciful and one-shot melee feats, reaching Tora streets, Watts-Rucker labs, Interport warehouses and Femto offices, defeating the Torantula, the Phoenix Apex, the Trinary Iskra and the Femto CEO, and surviving 20 / 40 / 50 / 100 waves in Extant Existence endless mode.",
                "The achievements here: Merciful (Kill an enemy that is ignited, corroded, and recently got shocked.); I cast FIST! (One shot an enemy with a melee attack.); Little Boy (Reach Tora streets.); Fat Man (Defeat the Torantula.); Watt's Up Doc? (Reach Watts-Rucker labs.); Evolutionary Dead-End (Defeat  the Phoenix Apex.); Wage Slavery (Reach Interport warehouses.); Iconoclasm (Defeat the Trinary Iskra.); Size doesn't matter (Reach Femto offices.); Actually, it does (Defeat the Femto CEO.); Black Hole Sun (Survive 20 waves in Extant Existence mode.); Proton Decay (Survive 40 waves in Extant Existence mode.); Big Freeze (Survive 50 waves in Extant Existence mode.); The Big Crunch (Survive 100 waves in Extant Existence mode.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the campaign, clearing it and reaching each area and boss.",
                "2. Do full runs on each difficulty and with each Combat Shell, taking speedruns on the runs that go well.",
                "3. Grind the weapon-specific kill counts across many runs.",
                "4. Do the arena feats and no-implant boss kills, and the hidden void-jump, Sex Club and Survival Event.",
                "5. Push Extant Existence endless mode to 100 waves.",
                "Tip: the weapon-kill achievements (500 point-blank Scrapper kills, 500 Peacekeeper headshots, etc.) are the slowest set - commit to one or two weapons per run and rotate, rather than swapping constantly and never finishing any single counter."
            ]
        }
    ]
};

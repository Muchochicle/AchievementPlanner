// Alien Swarm Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/alien-swarm.json), whose 66 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   630 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "alien-swarm-achievement-guide",
    "category": "game",
    "gameSlug": "alien-swarm",
    "icon": "🐜",
    "title": "Alien Swarm Achievement Guide",
    "summary": "A practical guide to all 66 Steam achievements in Alien Swarm - none are hidden. Covers the tactical and combat feats, the per-weapon 250-kill counts, the campaign difficulty clears, the cumulative kill grinds, the per-mission speed runs, and the no-death clears.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Alien Swarm has 66 Steam achievements and none of them are hidden. They break into four groups: tactical and combat feats (no-friendly-fire clears, grenade multi-kills, a 90%-accuracy mission, a no-damage mission, curing an Infested marine, hacking without logging access, group heals and damage amps), a set of per-weapon achievements for 250 (or 100) kills with each gun and gadget, the Jacob's Rest campaign clears on Easy through Brutal, the cumulative kill grinds (1,000 / 5,000 / 25,000 / 100,000 Swarm), the seven per-mission speed runs, and the no-marine-dies clears plus the Hardcore Friendly Fire feat.",
                "Nothing is missable - every mission and difficulty is replayable and all counters are cumulative. Alien Swarm is a four-player co-op game and several achievements explicitly require four marines present.",
                "Tip: run the campaign with a coordinated group of four - the no-friendly-fire, no-death and speed-run achievements are all far easier with communication, and the per-weapon kill counts spread naturally if each player mains a different loadout."
            ]
        },
        {
            "heading": "Combat & Tactical Feats",
            "body": [
                "The one-off and per-mission feats - no-friendly-fire clears, the Shieldbug finisher, grenade and stun/freeze multi-kills, a 90%-accuracy and a no-damage mission, egg destruction, melee and barrel kills, curing an Infested marine, clean hacks, group heals and damage amps, fast reloads, protecting the tech, and the Ranger dodge and Boomer early-kill.",
                "The achievements here: Clear Firing (Kill 25 drones without friendly fire.  Four marines must be present in the mission.); Short Controlled Bursts (Complete a mission with no friendly fire incidents.  Four marines must be present in the mission.); Shield Down (Deliver the finishing blow to a Swarm Shieldbug.); Blast Radius (Kill 6 Swarm with a single Grenade.); Sharpshooter (Complete a mission with better than 90% accuracy.); Perfect (Complete a mission on Normal difficulty or harder without receiving any damage.); Scrambled Eggs (Destroy all Swarm Eggs in a mission without allowing any to hatch.); Bug Stomper (Kill 100 Swarm Grubs.); Parasite Puncher (Kill a Swarm Parasite with a melee attack.); Close Encounters (Kill 20 Swarm with melee attacks in a single mission.); Smoking Barrels (Kill 5 Swarm with explosive barrels in a single mission.); Infestation Savior (Cure an Infested marine.); Circuit Breaker (Complete 10 wire hacks without access being logged.); Security Expert (Complete 10 computer hacks without access being logged.); Group Heal (Heal all 4 marines with a single Heal Beacon.); Damage Amped (Kill 15 Swarm with all four marines under the effects of a Damage Amp in a single mission.); Gunslinger (Successfully perform 5 fast reloads in a row.); Quick Load (Successfully perform a fast reload.); Peace Medic (Heal 300 points of damage in a single mission without dealing any non-melee damage to the Swarm.); Protect the Tech (Guard the squad's tech so that he takes no damage during the hack.); Technician Secured (Finish a mission without the tech getting killed.); Electro-Stunned (Stun 6 Swarm with a single Stun Grenade.); Seal of Quality (Seal a door with the welder.); Under the Gun (Roll under a Swarm Ranger projectile.); Quick and Dead (Kill a Swarm Boomer before it inflates.); Stay Frosty (Freeze 6 Swarm with a single Freeze Grenade.); Ammo Technician (Deploy 10 ammo stashes that are used by other marines.)."
            ]
        },
        {
            "heading": "Per-Weapon Kill Counts",
            "body": [
                "Killing 250 Swarm with each primary weapon (Assault Rifle, Prototype Rifle, Autogun, Shotgun, Vindicator, Twin Pistols, PDW, Tesla Cannon, Rail Rifle, Flamethrower, Chainsaw, Minigun, Marksman Rifle, Grenade Launcher), 500 with Sentry Guns, and 100 with Hornet Barrages, Laser Tripmines and Incendiary Mines, plus unlocking all weapons.",
                "The achievements here: Static Defender (Kill 500 Swarm with deployable Sentry Guns.); Assault Specialist (Kill 250 Swarm with the Assault Rifle.); Prototype Professional (Kill 250 Swarm with a Prototype Rifle.); Autogun Expert (Kill 250 Swarm with an Autogun.); Shotgun Specialist (Kill 250 Swarm with a Shotgun.); Vindicator Veteran (Kill 250 Swarm with a Vindicator.); Pistols Expert (Kill 250 Swarm with Twin Pistols.); Small Arms Specialist (Kill 250 Swarm with PDWs.); High Voltage Expert (Kill 250 Swarm with a Tesla Cannon.); Railgun Specialist (Kill 250 Swarm with a Rail Rifle.); Pyrotechnician (Kill 250 Swarm with a Flamethrower.); Slaughter Soldier (Kill 250 Swarm with a Chainsaw.); Minigun Master (Kill 250 Swarm with a Minigun.); Professional Marksman (Kill 250 Swarm with a Marksman Rifle.); Grenadier Expert (Kill 250 Swarm with a Grenade Launcher.); Hornet Barrage Expert (Kill 100 Swarm with Hornet Barrages.); Tactical Explosives Expert (Kill 100 Swarm with Laser Tripmines.); Firewall Specialist (Kill 100 Swarm with Incendiary Mines.); Armory Access (Unlock all the available weapons.)."
            ]
        },
        {
            "heading": "Campaign, Kill Grinds & Speed Runs",
            "body": [
                "Completing the Jacob's Rest campaign on Easy, Normal, Hard, Insane and Brutal, the cumulative kill grinds (1,000 to 100,000 Swarm), the seven per-mission no-death speed runs, the campaign and mission no-death clears, the Team Fortress 2 parasite hat, and the Hardcore Friendly Fire feat.",
                "The achievements here: Easy Campaign (Complete the Jacob's Rest campaign on Easy difficulty or harder.); Normal Campaign (Complete the Jacob's Rest campaign on Normal difficulty or harder.); Hard Campaign (Complete the Jacob's Rest campaign on Hard difficulty or harder.); Insane Campaign (Awarded for finishing the Jacob campaign on Insane difficulty.); On the Ready Line (Kill 1,000 Swarm.); Another Bughunt (Kill 5,000 Swarm.); Kill Them All (Kill 25,000 Swarm.); Nuke From Orbit (Kill 100,000 Swarm.); Landing Bay Speed Run (Complete Landing Bay within 1:25 on Normal difficulty or harder without any marines dying.); Cargo Elevator Speed Run (Complete Cargo Elevator within 2:50 on Normal difficulty or harder without any marines dying.); Deima Surface Bridge Speed Run (Complete Deima Surface Bridge within 2:30 on Normal difficulty or harder without any marines dying.); Rydberg Reactor Speed Run (Complete Rydberg Reactor within 3:10 on Normal difficulty or harder without any marines dying.); SynTek Residential Speed Run (Complete SynTek Residential within 2:30 on Normal difficulty or harder without any marines dying.); Sewer Junction Speed Run (Complete Sewer Junction within 1:30 on Normal difficulty or harder without any marines dying.); Timor Station Speed Run (Complete Timor Station within 4:25 on Normal difficulty or harder without any marines dying.); Outstanding Execution (Complete a campaign on Normal difficulty or harder without any marines dying.); Zero Mortality (Complete a mission on Normal difficulty or harder without any marines dying.); Hat Trick (Complete 2 co-op missions online. Earns a Team Fortress 2 parasite hat.); Brutal Campaign (Awarded for finishing the Jacob campaign on Brutal difficulty.); Hardcore (Complete any mission on Brutal difficulty with Onslaught and Hardcore Friendly Fire enabled.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through the Jacob's Rest campaign on Normal with a group of four, picking up the tactical feats as situations allow.",
                "2. Replay on Hard, Insane and Brutal for the difficulty clears.",
                "3. Do dedicated per-mission speed runs on Normal with no deaths - short missions like Sewer Junction and Landing Bay first.",
                "4. Grind the per-weapon 250-kill counts, each player focusing a different weapon across runs.",
                "5. Let the cumulative kill grind climb toward 100,000 Swarm - the final achievement to fall.",
                "Tip: \"Perfect\" (a no-damage mission) and the accuracy and no-friendly-fire feats are easiest on the first, short mission - reset until you get a clean run."
            ]
        }
    ]
};

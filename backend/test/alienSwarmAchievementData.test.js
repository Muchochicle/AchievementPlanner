import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/alien-swarm.json - 66 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 630 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("alien-swarm");

test("getPlannerData('alien-swarm') returns real planner data with 66 curated achievements", () => {

    assert.ok(game, "expected real planner data for alien-swarm");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 66);

});

test("every Alien Swarm achievement has a unique id from 1 to 66 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 66 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 66);
    assert.strictEqual(new Set(apinames).size, 66);

});

test("every Alien Swarm achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

    for (const achievement of game.achievements) {

        assert.ok(
            Number.isInteger(achievement.difficulty) && achievement.difficulty >= 1 && achievement.difficulty <= 5,
            `${achievement.name} has an out-of-range difficulty: ${achievement.difficulty}`
        );

        assert.ok(
            Number.isInteger(achievement.estimatedTime) && achievement.estimatedTime > 0,
            `${achievement.name} has an invalid estimatedTime: ${achievement.estimatedTime}`
        );

        assert.ok(achievement.name?.length > 0, "achievement is missing a name");
        assert.ok(achievement.description?.length > 0, `${achievement.name} is missing a description`);
        assert.ok(achievement.apiname?.length > 0, `${achievement.name} is missing an apiname`);

    }

});

test("every one of the 66 Alien Swarm achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Ammo Technician", "Deploy 10 ammo stashes that are used by other marines."],
        ["Another Bughunt", "Kill 5,000 Swarm."],
        ["Armory Access", "Unlock all the available weapons."],
        ["Assault Specialist", "Kill 250 Swarm with the Assault Rifle."],
        ["Autogun Expert", "Kill 250 Swarm with an Autogun."],
        ["Blast Radius", "Kill 6 Swarm with a single Grenade."],
        ["Brutal Campaign", "Awarded for finishing the Jacob campaign on Brutal difficulty."],
        ["Bug Stomper", "Kill 100 Swarm Grubs."],
        ["Cargo Elevator Speed Run", "Complete Cargo Elevator within 2:50 on Normal difficulty or harder without any marines dying."],
        ["Circuit Breaker", "Complete 10 wire hacks without access being logged."],
        ["Clear Firing", "Kill 25 drones without friendly fire.  Four marines must be present in the mission."],
        ["Close Encounters", "Kill 20 Swarm with melee attacks in a single mission."],
        ["Damage Amped", "Kill 15 Swarm with all four marines under the effects of a Damage Amp in a single mission."],
        ["Deima Surface Bridge Speed Run", "Complete Deima Surface Bridge within 2:30 on Normal difficulty or harder without any marines dying."],
        ["Easy Campaign", "Complete the Jacob's Rest campaign on Easy difficulty or harder."],
        ["Electro-Stunned", "Stun 6 Swarm with a single Stun Grenade."],
        ["Firewall Specialist", "Kill 100 Swarm with Incendiary Mines."],
        ["Grenadier Expert", "Kill 250 Swarm with a Grenade Launcher."],
        ["Group Heal", "Heal all 4 marines with a single Heal Beacon."],
        ["Gunslinger", "Successfully perform 5 fast reloads in a row."],
        ["Hard Campaign", "Complete the Jacob's Rest campaign on Hard difficulty or harder."],
        ["Hardcore", "Complete any mission on Brutal difficulty with Onslaught and Hardcore Friendly Fire enabled."],
        ["Hat Trick", "Complete 2 co-op missions online. Earns a Team Fortress 2 parasite hat."],
        ["High Voltage Expert", "Kill 250 Swarm with a Tesla Cannon."],
        ["Hornet Barrage Expert", "Kill 100 Swarm with Hornet Barrages."],
        ["Infestation Savior", "Cure an Infested marine."],
        ["Insane Campaign", "Awarded for finishing the Jacob campaign on Insane difficulty."],
        ["Kill Them All", "Kill 25,000 Swarm."],
        ["Landing Bay Speed Run", "Complete Landing Bay within 1:25 on Normal difficulty or harder without any marines dying."],
        ["Minigun Master", "Kill 250 Swarm with a Minigun."],
        ["Normal Campaign", "Complete the Jacob's Rest campaign on Normal difficulty or harder."],
        ["Nuke From Orbit", "Kill 100,000 Swarm."],
        ["On the Ready Line", "Kill 1,000 Swarm."],
        ["Outstanding Execution", "Complete a campaign on Normal difficulty or harder without any marines dying."],
        ["Parasite Puncher", "Kill a Swarm Parasite with a melee attack."],
        ["Peace Medic", "Heal 300 points of damage in a single mission without dealing any non-melee damage to the Swarm."],
        ["Perfect", "Complete a mission on Normal difficulty or harder without receiving any damage."],
        ["Pistols Expert", "Kill 250 Swarm with Twin Pistols."],
        ["Professional Marksman", "Kill 250 Swarm with a Marksman Rifle."],
        ["Protect the Tech", "Guard the squad's tech so that he takes no damage during the hack."],
        ["Prototype Professional", "Kill 250 Swarm with a Prototype Rifle."],
        ["Pyrotechnician", "Kill 250 Swarm with a Flamethrower."],
        ["Quick and Dead", "Kill a Swarm Boomer before it inflates."],
        ["Quick Load", "Successfully perform a fast reload."],
        ["Railgun Specialist", "Kill 250 Swarm with a Rail Rifle."],
        ["Rydberg Reactor Speed Run", "Complete Rydberg Reactor within 3:10 on Normal difficulty or harder without any marines dying."],
        ["Scrambled Eggs", "Destroy all Swarm Eggs in a mission without allowing any to hatch."],
        ["Seal of Quality", "Seal a door with the welder."],
        ["Security Expert", "Complete 10 computer hacks without access being logged."],
        ["Sewer Junction Speed Run", "Complete Sewer Junction within 1:30 on Normal difficulty or harder without any marines dying."],
        ["Sharpshooter", "Complete a mission with better than 90% accuracy."],
        ["Shield Down", "Deliver the finishing blow to a Swarm Shieldbug."],
        ["Short Controlled Bursts", "Complete a mission with no friendly fire incidents.  Four marines must be present in the mission."],
        ["Shotgun Specialist", "Kill 250 Swarm with a Shotgun."],
        ["Slaughter Soldier", "Kill 250 Swarm with a Chainsaw."],
        ["Small Arms Specialist", "Kill 250 Swarm with PDWs."],
        ["Smoking Barrels", "Kill 5 Swarm with explosive barrels in a single mission."],
        ["Static Defender", "Kill 500 Swarm with deployable Sentry Guns."],
        ["Stay Frosty", "Freeze 6 Swarm with a single Freeze Grenade."],
        ["SynTek Residential Speed Run", "Complete SynTek Residential within 2:30 on Normal difficulty or harder without any marines dying."],
        ["Tactical Explosives Expert", "Kill 100 Swarm with Laser Tripmines."],
        ["Technician Secured", "Finish a mission without the tech getting killed."],
        ["Timor Station Speed Run", "Complete Timor Station within 4:25 on Normal difficulty or harder without any marines dying."],
        ["Under the Gun", "Roll under a Swarm Ranger projectile."],
        ["Vindicator Veteran", "Kill 250 Swarm with a Vindicator."],
        ["Zero Mortality", "Complete a mission on Normal difficulty or harder without any marines dying."],
    ];

    assert.strictEqual(officialAchievements.length, 66, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});

import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/wolfenstein-the-new-order.json - 50 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 201810 (fetched through this app's own services/steamApi.js).
// Hidden achievements ship no Steam description; their description here is
// researched from community 100% guides and cited in the frontend guide
// header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("wolfenstein-the-new-order");

test("getPlannerData('wolfenstein-the-new-order') returns real planner data with 50 curated achievements", () => {

    assert.ok(game, "expected real planner data for wolfenstein-the-new-order");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 50);

});

test("every Wolfenstein: The New Order achievement has a unique id from 1 to 50 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 50 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 50);
    assert.strictEqual(new Set(apinames).size, 50);

});

test("every Wolfenstein: The New Order achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 50 Wolfenstein: The New Order achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["All that glitters", "Collect 25 gold items."],
        ["AR magazine +", "Unlock the AR Magazine + perk - kills with an assault rifle."],
        ["Assassin", "Unlock the Assassin perk - 50 stealth kills on soldiers plus 5 on Kampfhunds."],
        ["Autopanzer", "Unlock the Autopanzer perk - empty a fully-loaded LaserKraftWerk without missing."],
        ["Bullet feeder", "Unlock the Bullet Feeder perk - pick up ammo from many corpses."],
        ["Bullseye", "Unlock the Bullseye perk - precise grenade throws / multi-kills with one grenade."],
        ["Deadeye", "Unlock the Deadeye perk - assault-rifle and pistol headshots."],
        ["Deliverance", "Reach the final assault on Deathshead's compound."],
        ["Double reload", "Unlock the Double Reload perk - reload two dual-wielded weapons at once repeatedly."],
        ["Dual-wield expert", "Unlock the Dual-Wield Expert perk - 100 dual-wield kills and 25 LaserKraftWerk kills."],
        ["Endurance I", "Unlock the Endurance I perk - 3 kills while sprint-sliding."],
        ["Endurance II", "Unlock the Endurance II perk - more sprint-slide kills."],
        ["Fergus saved", "In the Chapter 1 timeline decision, choose to save Fergus (starts the Fergus campaign)."],
        ["Grenade pouch +", "Unlock the Grenade Pouch + perk - kills with grenades."],
        ["Grenade pouch ++", "Unlock the Grenade Pouch ++ perk - more grenade kills."],
        ["Gun magazine +", "Unlock the Gun Magazine + perk - kills with the pistol."],
        ["Gunner", "Complete Chapter 1 - the assault on Deathshead's compound."],
        ["Hardened", "Unlock the Hardened perk - take heavy damage and survive repeatedly."],
        ["Heart of gold", "Collect every gold item."],
        ["Hidden in the deep", "Complete the deep-sea / U-boat chapter."],
        ["Knife sheath +", "Unlock the Knife Sheath + perk - more thrown-knife kills."],
        ["Knife sheath ++", "Unlock the Knife Sheath ++ perk - still more thrown-knife kills."],
        ["Knife throwing", "Unlock the Knife Throwing perk - kill enemies with thrown knives."],
        ["Liberation", "Complete the game on any difficulty."],
        ["LKW battery +", "Unlock the LKW Battery + perk - kills with the LaserKraftWerk."],
        ["London uprising", "Complete the London Nautica assault."],
        ["Marksman magazine +", "Unlock the Marksman Magazine + perk - kills with the marksman rifle."],
        ["Power to the laser", "Acquire the LaserKraftWerk."],
        ["Quick draw", "Unlock the Quick Draw perk - 40 headshots while aiming down sights."],
        ["Quick regeneration", "Unlock the Quick Regeneration perk - pick up health while already full."],
        ["Quick reload", "Unlock the Quick Reload perk - perform many reloads."],
        ["Rocket magazine +", "Unlock the Rocket Magazine + perk - kills with the rocket launcher."],
        ["Scavenger", "Unlock the Scavenger perk - 3 dual-wield assault-rifle kills in a row without releasing fire."],
        ["Scout I", "Unlock the Scout I stealth perk - stealth-kill a Commander."],
        ["Scout II", "Unlock the Scout II perk - stealth-kill more Commanders / mark enemies."],
        ["Secrets revealed I", "Solve the first Enigma code."],
        ["Secrets revealed II", "Solve the second Enigma code."],
        ["Secrets revealed III", "Solve the third Enigma code."],
        ["Secrets revealed IV", "Solve the fourth Enigma code."],
        ["Sentinel", "Unlock the Sentinel perk - kills with mounted / turret weapons."],
        ["Shotgun magazine +", "Unlock the Shotgun Magazine + perk - kills with the shotgun."],
        ["Silent shot", "Unlock the Silent Shot perk - get 10 silent kills with a silenced pistol."],
        ["Super hero", "Complete the game on I AM DEATH INCARNATE! difficulty or higher."],
        ["The lives of others", "Collect every letter."],
        ["Throwback", "Unlock the Throwback perk - throw back live grenades."],
        ["Über hero", "Complete the game on ÜBER difficulty."],
        ["Vampire", "Unlock the Vampire perk - perform 5 stealth takedowns while overcharged."],
        ["Vaporize", "Unlock the Vaporize perk - kill 3 enemies with one rocket."],
        ["Vive la resistance!", "Reach and join the Kreisau Circle resistance."],
        ["Wyatt saved", "In the Chapter 1 timeline decision, choose to save Wyatt (starts the Wyatt campaign)."],
    ];

    assert.strictEqual(officialAchievements.length, 50, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});

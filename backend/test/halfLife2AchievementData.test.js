import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/half-life-2.json - 69 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 220 (fetched through this app's own services/steamApi.js) - 64 of 69 ship a real, official Steam description (the listing
// covers the base game plus Episode One and Episode Two). The five
// hidden achievements (Defiant, Submissive, Hallowed Ground, Where
// Cubbage Fears to Tread, Singularity Collapse) ship no Steam
// description; their conditions here are curatorial, cross-checked
// against the Half-Life Wiki and community 100% guides.
// difficulty/estimatedTime remain curatorial judgments, same convention
// as every other planner difficulty/time field in this catalog.
const halfLife2 = getPlannerData("half-life-2");

test("getPlannerData('half-life-2') returns real planner data with 69 curated achievements", () => {

    assert.ok(halfLife2, "expected real planner data for half-life-2");
    assert.ok(Array.isArray(halfLife2.achievements));
    assert.strictEqual(halfLife2.achievements.length, 69);

});

test("every Half-Life 2 achievement has a unique id from 1 to 69 and a unique apiname", () => {

    const ids = halfLife2.achievements.map(a => a.id);
    const apinames = halfLife2.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 69 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 69);
    assert.strictEqual(new Set(apinames).size, 69);

});

test("every Half-Life 2 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

    for (const achievement of halfLife2.achievements) {

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

test("every one of the 64 officially-described Half-Life 2 achievement name+description pairs matches the live GetSchemaForGame response", () => {

    // The 5 hidden achievements are excluded here - Steam
    // never exposes a public description for them - and covered by their
    // own dedicated test below instead.
    const officialAchievements = [
        ["Malcontent", "Escape the apartment block raid."],
        ["What cat?", "Break the mini-teleporter in Kleiner's lab."],
        ["Trusty Hardware", "Get the crowbar."],
        ["Barnacle Bowling", "Kill five barnacles with one barrel."],
        ["Anchor's Aweigh!", "Get the airboat."],
        ["Heavy Weapons", "Get the airboat's mounted gun."],
        ["Vorticough", "Discover the hidden singing vortigaunt cave in chapter Water Hazard."],
        ["Revenge!", "Destroy the hunter-chopper in Half-Life 2."],
        ["Blast from the Past", "Find the HEV Suit Charger faceplate in Eli's scrapyard."],
        ["Zero-Point Energy", "Get the Gravity Gun in Black Mesa East."],
        ["Two Points", "Use DOG's ball to make a basket in Eli's scrapyard."],
        ["Zombie Chopper", "Play through Ravenholm using only the Gravity Gun."],
        ["OSHA Violation", "Kill 3 enemies using the crane."],
        ["Targetted Advertising", "Pin a soldier to the billboard in chapter Highway 17."],
        ["One Man Army", "Destroy six gunships in Half-Life 2."],
        ["Keep Off the Sand!", "Cross the antlion beach in chapter Sandtraps without touching the sand."],
        ["Bug Hunt", "Use the antlions to kill 50 enemies."],
        ["Flushed", "Kill an enemy with a toilet."],
        ["Warden Freeman", "Survive the second turret standoff in Nova Prospekt."],
        ["Follow Freeman", "Gain command of a squad of rebels in the uprising."],
        ["Radiation Levels Detected", "Get through the toxic tunnel under City 17 in Half-Life 2."],
        ["Plaza Defender", "Survive the generator plaza standoff in chapter Anticitizen One."],
        ["Counter-Sniper", "Kill all of the snipers in City 17."],
        ["Fight the Power", "Shut down the supression device by disabling its generators."],
        ["Giant Killer", "Survive the rooftop strider battle in the ruins of City 17."],
        ["Atomizer", "Disintegrate 15 soldiers by throwing them into a Combine ball field."],
        ["Lambda Locator", "Find all lambda caches in Half-Life 2."],
        ["Hack Attack!", "Kill five enemies with a Manhack."],
        ["Watch Your Head!", "Make it to the bottom of the Citadel's main elevator shaft in one piece."],
        ["Containment", "Contain the Citadel core."],
        ["Pacifist", "Contain the Citadel core without killing any stalkers."],
        ["Car Crusher", "Use the cars to squash 15 antlions in Episode One."],
        ["Elevator Action", "Survive long enough to get on the parking garage elevator."],
        ["Live Bait", "Help Alyx snipe 30 enemies in Episode One."],
        ["Attica!", "Destroy the gunship in the hospital attic."],
        ["Citizen Escort", "Don't let any citizens die when escorting them to the escape train."],
        ["Escape From City 17", "Escape City 17 with Alyx."],
        ["The One Free Bullet", "Finish the game firing exactly one bullet. Grenade, crowbar, rocket, and Gravity Gun kills are okay!"],
        ["Conservationist", "Kill five enemies with the same energy ball."],
        ["Think Fast!", "Kill an Elite Soldier with his own energy ball."],
        ["Zombie-que", "Use flares to light 15 zombies on fire."],
        ["Acid Reflex", "Kill an acid antlion worker."],
        ["Get Some Grub", "Squish every antlion grub in Episode Two."],
        ["Piñata Party", "Find and break every web cache in Episode Two."],
        ["Into the Breach", "Help Griggs and Sheckley hold off the antlion invasion inside the mine shaft."],
        ["Twofer", "Defeat both antlion guards outside the White Forest."],
        ["Hit and Run", "Run over 20 enemies with the car in Episode Two."],
        ["Meet the Hunters", "Survive the Hunter ambush with Alyx."],
        ["Puttin' On a Clinic", "Defeat the chopper in Episode Two without any misses."],
        ["Gunishment!", "Destroy the Combine Autogun in the junkyard."],
        ["Cache Checker", "Find every radar cache in chapter Under The Radar."],
        ["Pedal to the Metal", "Beat DOG in a race to the White Forest base."],
        ["Gordon Propelled Rocket", "Unlock the rocket launcher lambda cache in chapter Under The Radar."],
        ["Quiet Mountain Getaway", "Survive the ambush at White Forest Inn."],
        ["Little Rocket Man", "Send the garden gnome into space."],
        ["Secondary Silo Secured", "Secure the launch doors on missile silo 2."],
        ["Neighborhood Watch", "Save all buildings outside the missile silo from destruction."],
        ["Defense of the Armament", "Save the missile silo from the Combine offensive."],
        ["Payback", "Kill a Hunter with its own flechettes."],
        ["Bone Breaker", "Kill 30 enemies with thrown physics objects."],
        ["Deadly Harvest", "Kill an enemy by planting a hopper mine."],
        ["Hot Potat0wned", "Kill a Combine soldier with his own grenade."],
        ["Grave Robber", "Steal a Zombine's grenade."],
        ["Gnome Alone", "If you are reading this achievement, Gabe Newell has successfully launched Gnome Chompski into space. If you did not also receive the achievement 'Manufacturing Ascent', Newell has abandoned his plans to shoot Noam Chomsky into space."]
    ];

    assert.strictEqual(officialAchievements.length, 64, "sanity check on this test's own reference list");

    const hiddenApinames = new Set([
        "HL2_HIT_CANCOP_WITHCAN",
        "HL2_PUT_CANINTRASH",
        "HL2_BEAT_CEMETERY",
        "HL2_KILL_ODESSAGUNSHIP",
        "HL2_BEAT_GAME"
    ]);

    assert.strictEqual(hiddenApinames.size, 5, "sanity check - Half-Life 2 has 5 hidden achievements");

    const dataPairs = halfLife2.achievements
        .filter(a => !hiddenApinames.has(a.apiname))
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});

test("the 5 hidden Half-Life 2 achievements each still have their own real name and a non-empty curatorial description", () => {

    const names = [
        ["HL2_HIT_CANCOP_WITHCAN", "Defiant"],
        ["HL2_PUT_CANINTRASH", "Submissive"],
        ["HL2_BEAT_CEMETERY", "Hallowed Ground"],
        ["HL2_KILL_ODESSAGUNSHIP", "Where Cubbage Fears to Tread"],
        ["HL2_BEAT_GAME", "Singularity Collapse"]
    ];

    assert.strictEqual(names.length, 5, "sanity check on this test's own reference list");

    for (const [apiname, name] of names) {

        const achievement = halfLife2.achievements.find(a => a.apiname === apiname);

        assert.ok(
            achievement && achievement.name === name && achievement.description.length > 0,
            `expected ${apiname} to be named "${name}" with a non-empty curatorial description`
        );

    }

});

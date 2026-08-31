import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/call-of-duty-modern-warfare-2019.json - 27 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 2000950 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("call-of-duty-modern-warfare-2019");

test("getPlannerData('call-of-duty-modern-warfare-2019') returns real planner data with 27 curated achievements", () => {

    assert.ok(game, "expected real planner data for call-of-duty-modern-warfare-2019");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 27);

});

test("every Call of Duty: Modern Warfare (2019) achievement has a unique id from 1 to 27 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 27 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 27);
    assert.strictEqual(new Set(apinames).size, 27);

});

test("every Call of Duty: Modern Warfare (2019) achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 27 Call of Duty: Modern Warfare (2019) achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Ashes to Ashes", "Burn 4 enemies with a single molotov."],
        ["Circus Tour", "Kill at least one enemy while inside The Reading Place, Aural Chic, and both Subway undergrounds."],
        ["Companion Block", "Only use one cinder block and bring it to the end of 'Embedded'."],
        ["Dodged a Bullet", "Never get hit by the sniper while escaping captivity."],
        ["Driver's Ed", "Shoot the driver of the suicide truck."],
        ["Golden Path", "Complete 'Clean House' without being hit using one bullet per threat."],
        ["Good Effect on Target", "Kill an enemy with a direct hit from a smoke grenade."],
        ["Got Something on Your Face", "Spit on Barkov."],
        ["Hang Time", "Kill 3 enemies while you are on a ladder."],
        ["Hot Swap", "Get at least one kill with eight different weapons when completing 'Old Comrades'."],
        ["Liberation", "Complete all Special Operations missions."],
        ["Lights Out", "Shut off the power to 4 buildings in 'Going Dark'."],
        ["Long Way Down", "Crash a helicopter by shooting the pilot."],
        ["Love from Above", "Destroy 4 trucks with 4 drone strikes before they reach the end of their path in 'The Embassy'."],
        ["Nothing but Net", "Neutralize the 'Fog of War' machine gun with a frag grenade."],
        ["Out of the Fire", "Complete every single player mission on Veteran or Realism difficulty."],
        ["Pit Stop", "Stop three APCs with Hadir's sniper rifle."],
        ["Play Dead", "Kill all the enemies in the 'Embedded' field of dead bodies."],
        ["Press [BOOM] to Defuse", "Blow up 3 tripwires with explosives."],
        ["Tea Time", "Finish single player on any difficulty."],
        ["Trigger Discipline", "Do not injure any civilians in 'Piccadilly'."],
        ["Tunnel Rat", "Complete 'The Wolf's Den' tunnels using only the 1911."],
        ["Two Birds", "Kill both soldiers with one shot in 'Hometown'."],
        ["Wall Hax", "Save Alpha 3-2 from being downed."],
        ["Warheads on Foreheads", "Reach Barkov's lab entrance using only drone strikes."],
        ["We Own the Night", "Kill all enemies at the Church, Clocktower, and Pool without anyone calling for backup."],
        ["Wild Fire", "Take down a flying helicopter with a molotov."],
    ];

    assert.strictEqual(officialAchievements.length, 27, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});

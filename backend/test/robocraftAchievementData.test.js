import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/robocraft.json - 43 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 301520 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("robocraft");

test("getPlannerData('robocraft') returns real planner data with 43 curated achievements", () => {

    assert.ok(game, "expected real planner data for robocraft");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 43);

});

test("every Robocraft achievement has a unique id from 1 to 43 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 43 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 43);
    assert.strictEqual(new Set(apinames).size, 43);

});

test("every Robocraft achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 43 Robocraft achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Armored Cavalry", "Play 25 games with a robot with tracks"],
        ["Bring the Pain", "Get 25 kills with either Ion Weapons"],
        ["Bronze Rank", "Reach Bronze Rank"],
        ["Burn it with Fire!", "Kill 25 robots that have insect legs"],
        ["Burn Therapy", "Get 25 kills with Plasma"],
        ["Diamond Rank", "Reach Diamond Rank"],
        ["Disappearing Act", "Use the Ghost Module five times in one battle"],
        ["Doctor", "Heal an ally at 20% health to full health"],
        ["Energize!", "Use the Blink Module five times in one battle"],
        ["Flat Tire", "Kill 25 robots that have wheels"],
        ["Fly Swatter", "Get 25 kills with the Aeroflak"],
        ["Fly the Friendly Skies", "Play 25 games with a robot with wings or rudders"],
        ["Get to the Choppa!", "Play 25 games with a robot with rotors"],
        ["Gold Rank", "Reach Gold Rank"],
        ["Hitting the Fan", "Kill 25 robots that have hover blades"],
        ["Hugs!", "Get 25 kills with Tesla Blades"],
        ["Hurt Locker", "Beat any campaign for the first time"],
        ["I Got This", "Complete the Tutorial"],
        ["I've got tone!", "Get 25 kills with Seeker"],
        ["Keep on Truckin'", "Play 25 games with a robot with wheels"],
        ["Lights Out!", "Use the EMP Module five times in one battle"],
        ["Lob it!", "Get 25 kills with Mortars"],
        ["Magnetic Personality", "Get 25 kills with Rails"],
        ["Mr. Popularity", "Earn robits via the CRF 100 times"],
        ["Open Window", "Use the Windowmaker Module five times in one battle"],
        ["Party Animal", "Win 5 battles with a full party"],
        ["Points of Light", "Get 25 kills with Lasers"],
        ["Power Shopper", "Play 10 games with a robot purchased from the CRF"],
        ["Power Up!", "Use the Weapon Energy Module five times in one battle"],
        ["Protonium Miner", "Capture 20 control points "],
        ["Protonium Rank", "Reach Protonium Rank"],
        ["Scuttle Time!", "Play 25 games with a robot with insect legs"],
        ["Shield Wall", "Use your Disc Shield Module five times in one battle"],
        ["Shredder!!!", "Get 25 kills with the Chain weapons"],
        ["Silver Rank", "Reach Silver Rank"],
        ["Skeeter Beater", "Kill 25 robots that have rotors"],
        ["Sneaky, Sneaky", "Get a kill with Tesla Blades within two seconds of decloaking"],
        ["Such a Fan!", "Play 25 games with a robot with hover"],
        ["Surgeon General", "Heal an ally at 20% health to 100% health 20 times"],
        ["Sweep the Knee!", "Kill 25 robots that have mech legs"],
        ["Tank Killer", "Kill 25 robots that have tank tracks"],
        ["Walk this Way", "Play 25 games with a robot with mech legs"],
        ["Wing Clipper", "Kill 25 robots that have wings or rudders"],
    ];

    assert.strictEqual(officialAchievements.length, 43, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});

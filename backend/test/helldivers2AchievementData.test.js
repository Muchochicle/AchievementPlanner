import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/helldivers-2.json - // 38 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 553850 (fetched through this app's own services/steamApi.js).
// 35 of 38 ship a real, official Steam description, quoted
// verbatim below. The 3 hidden achievements ship no Steam description;
// their conditions here are curatorial, cross-checked against the Helldivers
// wiki plus community 100% guides, and kept spoiler-light.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("helldivers-2");

test("getPlannerData('helldivers-2') returns real planner data with 38 curated achievements", () => {

    assert.ok(game, "expected real planner data for helldivers-2");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 38);

});

test("every Helldivers 2 achievement has a unique id from 1 to 38 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 38 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 38);
    assert.strictEqual(new Set(apinames).size, 38);

});

test("every Helldivers 2 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 35 officially-described Helldivers 2 achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const hiddenApinames = new Set([
        "4",
        "34",
        "35",
    ]);

    assert.strictEqual(hiddenApinames.size, 3, "sanity check - Helldivers 2 has 3 hidden achievements");

    const officialAchievements = [
        ["Bot Scrapper", "Play 1 Bot Mission."],
        ["Bug Stomper", "Play 1 Bug Mission."],
        ["Caught them by Supplies!", "Kill a Charger with a resupply pod."],
        ["Cool guys don't loo- AAAAH!", "Fly at least 25 meters from the shockwave of an explosion."],
        ["Democracy ain't done with you yet", "Heal another player using stims."],
        ["Doing your part", "Complete at least 100 missions."],
        ["Eat This!", "Kill a bug warrior with a shotgun within 1 meter."],
        ["Extractinating the Countryside", "Play a planet defense mission."],
        ["For the greater good!", "Kill 5,000 enemies."],
        ["Fully operational", "Reach max level on one ship module."],
        ["Get some!", "Fire at least 150 rounds in one burst, killing at least 10 enemies."],
        ["Gone in 360 seconds!", "Complete a full Extreme difficulty Blitz mission and extract in under 6 minutes."],
        ["Hell Dive", "Complete an Extreme difficulty mission or higher without anyone dying."],
        ["Hold My Liber-tea!", "While using a jump pack, knock yourself into a ragdoll state."],
        ["Hold my primary, I'm going in!", "Complete a full Hard difficulty mission or higher without anyone firing their primary or support weapon."],
        ["Hot Potato!", "Throw back a live grenade."],
        ["In the nick of time", "Extract after the timer reaches zero."],
        ["It's the only way to be sure...", "Have 6 orbital barrage stratagems in the same place at the same time."],
        ["Kill it with fire!", "Kill 100 enemies using fire damage during the same mission."],
        ["Let's call it a draw", "Shoot off both arms on a Hulk and then extract while it's alive."],
        ["Nothing is bigger than Freedom", "Defeat a Hulk."],
        ["Patriot", "Play at least 50 missions."],
        ["Promote Synergy", "Provide assisted reload for a teammate."],
        ["Samples are a diver's best friend", "Extract at least 15 rare samples from a mission as a team."],
        ["Science is done by quantity", "Extract with at least 15 common samples."],
        ["Ship it!", "Upgrade all ship modules at least 1 level."],
        ["Spread Managed Democracy", "Kill 150 enemies during the same mission."],
        ["Strapping young lad", "Customize your Helldiver with new cape, armor, and helmet."],
        ["That which does not kill you...", "Be injured in all limbs at the same time."],
        ["The long arm of Justice", "Kill a target at a distance of over 100m."],
        ["The power of Democracy", "Kill 25 enemies with one stratagem."],
        ["The Real Deal", "Complete Basic Training."],
        ["The taller they are...", "Defeat a Bile Titan."],
        ["They don't call it Tacticool for nothin'", "Complete 10 tactical objectives."],
        ["They mostly come at night...", "Extract from a mission during nighttime."],
    ];

    assert.strictEqual(officialAchievements.length, 35, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .filter(a => !hiddenApinames.has(a.apiname))
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});

test("the 3 hidden Helldivers 2 achievements each keep their real name and a non-empty curatorial description", () => {

    const names = [
        ["4", "Extractamundo!"],
        ["34", "Stalking is illegal"],
        ["35", "Job's done!"],
    ];

    assert.strictEqual(names.length, 3, "sanity check on this test's own reference list");

    for (const [apiname, name] of names) {

        const achievement = game.achievements.find(a => a.apiname === apiname);

        assert.ok(
            achievement && achievement.name === name && achievement.description.length > 0,
            `expected ${apiname} to be named "${name}" with a non-empty curatorial description`
        );

    }

});

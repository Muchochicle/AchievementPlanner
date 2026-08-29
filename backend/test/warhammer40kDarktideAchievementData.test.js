import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/warhammer-40k-darktide.json - 36 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1361210 (fetched through this app's own services/steamApi.js).
// 35 of 36 ship a real, official Steam description, quoted
// verbatim below. The 1 hidden achievement ship no Steam description;
// its condition here is curatorial, cross-checked against the game's
// wiki plus community 100% guides, and kept spoiler-light.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("warhammer-40k-darktide");

test("getPlannerData('warhammer-40k-darktide') returns real planner data with 36 curated achievements", () => {

    assert.ok(game, "expected real planner data for warhammer-40k-darktide");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 36);

});

test("every Warhammer 40,000: Darktide achievement has a unique id from 1 to 36 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 36 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 36);
    assert.strictEqual(new Set(apinames).size, 36);

});

test("every Warhammer 40,000: Darktide achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 35 officially-described Warhammer 40,000: Darktide achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const hiddenApinames = new Set([
        "banish_daemonhost",
    ]);

    assert.strictEqual(hiddenApinames.size, 1, "sanity check - Warhammer 40,000: Darktide has 1 hidden achievement");

    const officialAchievements = [
        ["Abhor the Mutant", "As the Zealot, kill a Mutant with a melee attack while dashing when using Chastise the Wicked."],
        ["Buying Time", "As the Zealot, hit an enemy sniper more than 40 metres away using a Stun Grenade."],
        ["Circle of Trust I", "Complete Path of Trust chapter 1."],
        ["Circle of Trust II", "Complete Path of Trust chapter 2."],
        ["Circle of Trust III", "Complete Path of Trust chapter 3."],
        ["Circle of Trust IV", "Complete Path of Trust chapter 4."],
        ["Circle of Trust V", "Complete Path of Trust chapter 5."],
        ["Circle of Trust VI", "Complete Path of Trust chapter 6."],
        ["Cliffhanger", "As the Psyker, kill 7 enemies in 2 seconds by knocking them off a ledge with Psykinetic's Wrath."],
        ["Don't Let Me Down, Criminal", "Complete the prologue."],
        ["Dream Team", "Complete 100 missions without anyone being downed."],
        ["Flawless Execution", "Complete 10 missions in a row without going down on Malice difficulty or higher."],
        ["Flawless Interrogator", "Complete a Data Interrogation without an incorrect Auspex entry."],
        ["Frenzied Killer", "Kill 90 enemies in less than 30 seconds."],
        ["Going Out With a Bang", "As the Psyker, kill 1 elite with a single Perils of the Warp on Malice Threat or higher."],
        ["Gone Bowling", "As the Ogryn, knock down 60 enemies with a single Bull Rush on Malice Threat or higher."],
        ["I'm in Charge!", "As the Ogryn, use Bull Rush to interrupt a Plague Ogryn's charge."],
        ["Inquisitorial Legend", "Complete at least one of each Mission type on Heresy difficulty or higher."],
        ["Inquisitorial Veteran", "Complete at least one of each Mission type on Uprising difficulty or higher."],
        ["Like a four-leaf Clover", "Have 4 different Classes at rank 30."],
        ["Long Bomb", "As the Veteran, hit 5 enemies with a Frag Grenade explosion without it bouncing."],
        ["Marked For Death", "As the Veteran, hit 4 weak spots without missing a shot during a single use of Volley Fire."],
        ["Not Even Close", "As the Psyker, kill a pouncing Pox Hound with Brain Burst."],
        ["On Overwatch", "As the Veteran, complete a Mission on Malice Threat or higher without taking any melee damage."],
        ["Preternatural Dodge", "Dodge 12 attacks in a row."],
        ["Purge the Heretic", "Kill a total of 40.000 enemies."],
        ["Serial Killer", "Kill 20 consecutive enemies with headshots."],
        ["Shocking Stuff", "As the Zealot, kill 40 stunned enemies within 10 seconds on Malice Threat or higher."],
        ["Something In Your Eye", "As the Ogryn, kill a Corruptor by hitting it in the eye with your grenade box."],
        ["The Emperor Protects", "Block 600 damage in 10 seconds."],
        ["Time to Die", "Kill a Monstrosity in 20 seconds or less."],
        ["Two’s Company", "Have 2 different Classes at rank 30."],
        ["Unconsidered Trifles", "Unlock your first Curio slot."],
        ["Up and at 'Em!", "Help 100 downed Operatives back up."],
        ["Well met, Whippersnapper", "Unlock access to Sire Melk's Requisitiorium."],
    ];

    assert.strictEqual(officialAchievements.length, 35, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .filter(a => !hiddenApinames.has(a.apiname))
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});

test("the 1 hidden Warhammer 40,000: Darktide achievement each keep their real name and a non-empty curatorial description", () => {

    const names = [
        ["banish_daemonhost", "Banisher"],
    ];

    assert.strictEqual(names.length, 1, "sanity check on this test's own reference list");

    for (const [apiname, name] of names) {

        const achievement = game.achievements.find(a => a.apiname === apiname);

        assert.ok(
            achievement && achievement.name === name && achievement.description.length > 0,
            `expected ${apiname} to be named "${name}" with a non-empty curatorial description`
        );

    }

});

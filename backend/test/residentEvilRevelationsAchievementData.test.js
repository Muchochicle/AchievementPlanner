import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/resident-evil-revelations.json - 50 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 222480 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("resident-evil-revelations");

test("getPlannerData('resident-evil-revelations') returns real planner data with 50 curated achievements", () => {

    assert.ok(game, "expected real planner data for resident-evil-revelations");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 50);

});

test("every Resident Evil Revelations achievement has a unique id from 1 to 50 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 50 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 50);
    assert.strictEqual(new Set(apinames).size, 50);

});

test("every Resident Evil Revelations achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 50 Resident Evil Revelations achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Packaged Deal", "【CAMPAIGN】Defeat a Scarmiglione as a whole without killing both parts of its body separately."],
        ["Angry Fist", "【CAMPAIGN】Land 10 fully charged physical attacks."],
        ["B.O.W. Hunter", "【CAMPAIGN】Defeat 150 enemies."],
        ["Bamboozle the Oozes", "【CAMPAIGN】Defeat 10 Oozes with headshots."],
        ["Beyond the Veil", "【RAID MODE】Clear the bonus stage, The Ghost Ship."],
        ["Bonus Ace", "【RAID MODE】Acquire 50 bonuses."],
        ["Bonus Demi-god", "【RAID MODE】Acquire 150 bonuses."],
        ["Bonus Enthusiast", "【RAID MODE】Acquire 10 bonuses."],
        ["Bonus Legend", "【RAID MODE】Acquire 100 bonuses."],
        ["By the Crosshairs", "【CAMPAIGN】Defeat Rachael before she gets to the cafeteria."],
        ["Die Another Day", "【CAMPAIGN】Evade a Scagdead's instant-death attack."],
        ["Dodge Master", "【CAMPAIGN】Dodge 20 times."],
        ["Dynamic Duo", "【RAID MODE】Land a fully charged physical attack on an enemy at the same time as your partner."],
        ["First Circle Overseer", "【RAID MODE】Clear all stages in Raid mode on Chasm with an S rank."],
        ["First Circle Traveler", "【RAID MODE】Clear all stages in Raid mode on Chasm."],
        ["First Victim", "【CAMPAIGN】Scan 1 hidden hand print."],
        ["Get Us Out of Here!", "【CAMPAIGN】Clear Episodes 4 - 6."],
        ["Gutsy", "【RAID MODE】Clear a stage at 5 levels lower than the recommended level."],
        ["Last Victim", "【CAMPAIGN】Scan 30 hidden hand prints."],
        ["Legendary Find", "【RAID MODE】Obtain a super rare weapon."],
        ["Legends Are Made, Not Born", "【RAID MODE】Obtain all super rare weapons."],
        ["Living on the Edge", "【CAMPAIGN】Stop an enemy bullet with your knife."],
        ["Meteoric Rise", "【RAID MODE】Reach player level 40."],
        ["Midland Overseer", "【RAID MODE】Clear all stages in Raid mode on Trench with an S rank."],
        ["Midland Traveler", "【RAID MODE】Clear all stages in Raid mode on Trench."],
        ["Moving on Up", "【RAID MODE】Reach player level 10."],
        ["On Your Way", "【RAID MODE】Reach player level 5."],
        ["One for Each Minnesota Lake", "【RAID MODE】Defeat 10,000 enemies."],
        ["Raising the Bar", "【RAID MODE】Reach player level 30."],
        ["Reaching Higher", "【RAID MODE】Reach player level 20."],
        ["Research Complete", "【CAMPAIGN】Scan all enemy types."],
        ["Researcher", "【CAMPAIGN】Scan an enemy for the first time."],
        ["Rockets are for Losers", "【CAMPAIGN】Defeat a Malacoda without using a rocket launcher."],
        ["Seventh Circle Overseer", "【RAID MODE】Clear all stages in Raid mode on Abyss with an S rank."],
        ["Seventh Circle Traveler", "【RAID MODE】Clear all stages in Raid mode on Abyss."],
        ["Shop 'til Ya Drop", "【RAID MODE】Spend 1,000,000 BP in the store."],
        ["Surviving Deep Darkness", "【CAMPAIGN】Clear the game in Normal difficulty or above without dying once."],
        ["That'll Leave a Mark", "【RAID MODE】Inflict 100,000 points of damage to an enemy in one hit."],
        ["The Dark Forest", "【CAMPAIGN】Clear Casual difficulty or higher."],
        ["The Pool Is Open", "【CAMPAIGN】Swim in the Solarium."],
        ["The Queen Zenobia", "【CAMPAIGN】Clear Episodes 7 - 9."],
        ["The Shores of Purgatory", "【CAMPAIGN】Clear Normal difficulty or higher."],
        ["The Storm is Gone", "【CAMPAIGN】Clear Episodes 10 - 12."],
        ["The Unbroken Thread", "【RAID MODE】Acquire No Damage Bonus for the first time."],
        ["The Vestibule of Hell", "【CAMPAIGN】Clear Infernal difficulty."],
        ["Three is the Magic Number", "【RAID MODE】Acquire Trinity Bonus for the first time."],
        ["Top of My Game", "【RAID MODE】Reach player level 50."],
        ["Traces of Tragedy", "【CAMPAIGN】Scan 15 hidden hand prints."],
        ["Triple Play", "【CAMPAIGN】Defeat 3 enemies with one shock grenade."],
        ["We'll Find You, Jill", "【CAMPAIGN】Clear Episodes 1 - 3."],
    ];

    assert.strictEqual(officialAchievements.length, 50, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});

import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/nine-sols.json - 35 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1809540 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("nine-sols");

test("getPlannerData('nine-sols') returns real planner data with 35 curated achievements", () => {

    assert.ok(game, "expected real planner data for nine-sols");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 35);

});

test("every Nine Sols achievement has a unique id from 1 to 35 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 35 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 35);
    assert.strictEqual(new Set(apinames).size, 35);

});

test("every Nine Sols achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 35 Nine Sols achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Across Time and Space", "Complete Lear's questline in the Limitless Realm and bid him farewell."],
        ["Blessed Messages", "Discover the message board for blessings upon the Departure of New Kunlun's Voyage."],
        ["Come, Sweet Death", "Defeat Ji."],
        ["Do Re Mi So La", "Unravel the mystery of the Daybreak Tower's music sheet."],
        ["Evolution", "Discover a tremendous secret by hacking the first recording device in the Tianhuo Research Institute."],
        ["Fight Dirty", "Use the Gene Eradicator (via the Transmutation Crucible's injection port) during the fight with Jiequan."],
        ["Fight Through Hardship", "Finish Nine Sols on Standard Mode."],
        ["Found You", "Complete Shanhai 9000's questline and help him locate Chien by collecting all Map Data Chips."],
        ["Gimme Gimme", "Establish a deep relationship with Shuanshuan."],
        ["Home Sweet Home", "Reach the 'Home Sweet Home' ending and return to the Solarians' home world."],
        ["I'm Coming for You, Old Friend", "Defeat Yingzhao."],
        ["I'm Yi, I Have a Drinking Problem", "Drink all the wine brewed by Shennong."],
        ["Jail Break", "Defeat Kanghui and escape the prison."],
        ["Learned From the Best", "Defeat Eigong."],
        ["Magical Bean", "Help Shuanshuan grow the Unknown Seed into a full-height tree using GM Fertilizer."],
        ["My Most Trusted Friend", "Max out the ammo capacity of the Azure Bow and obtain Cloud Piercer X, Thunder Buster X, and Shadow Hunter X."],
        ["My Revenge Starts Here", "Defeat Baichang."],
        ["No Pain, No Gain", "Defeat Jiequan."],
        ["One Man Army", "Defeat every optional miniboss."],
        ["Passing on the Torch", "Complete Shennong's questline and help him become village leader - provide all wines and finish his village quests."],
        ["Reap What You Sow", "Defeat Goumang."],
        ["Repurposed", "Use the Fortune Teller machine crafted by Shuanshuan."],
        ["Rest for the Wicked", "Complete Chiyou's questline and defeat Xingtian a second time to bring him peace."],
        ["Robo Fight!", "Defeat Tianshou while driving a robot."],
        ["Shooting Star", "Reach the 'Shooting Star' ending and witness the end of New Kunlun."],
        ["Stonks!", "Recycle Shuanshuan's coin."],
        ["The Cavalry's Here", "Rescue the people of Peach Blossom Village by hacking the system to free them after defeating Lieguan."],
        ["The Warrior Within", "Master all skills in the skill tree."],
        ["Treasure Hunter", "Find all resources and information marked by Shanhai 9000."],
        ["Wake Up From My Sin", "Defeat Lady Ethereal."],
        ["We Have Each Other", "Defeat Fuxi and Nuwa."],
        ["Well Prepared", "Collect every Jade."],
        ["What Have You Done?!", "Break the clay pot made by Shuanshuan"],
        ["You Bastard...", "Obtain map data from Shanhai 9000 by force."],
        ["You Should Respect Your Elders", "Defeat Yanlao."],
    ];

    assert.strictEqual(officialAchievements.length, 35, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});

import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/dying-light.json - 78 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 239140 (fetched through this app's own services/steamApi.js) - 67 of
// 78 ship a real, official Steam description. The 11 hidden achievements
// are nine main-story markers (apiname ACH_1..9) plus two Hellraid DLC
// ones; their descriptions here are curatorial, cross-checked against
// the Dying Light wiki and PlayStationTrophies. difficulty/estimatedTime
// remain curatorial judgments, same convention as every other planner
// difficulty/time field.
const dyingLight = getPlannerData("dying-light");

test("getPlannerData('dying-light') returns real planner data with 78 curated achievements", () => {

    assert.ok(dyingLight, "expected real planner data for dying-light");
    assert.ok(Array.isArray(dyingLight.achievements));
    assert.strictEqual(dyingLight.achievements.length, 78);

});

test("every Dying Light achievement has a unique id from 1 to 78 and a unique apiname", () => {

    const ids = dyingLight.achievements.map(a => a.id);
    const apinames = dyingLight.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 78 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 78);
    assert.strictEqual(new Set(apinames).size, 78);

});

test("every Dying Light achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

    for (const achievement of dyingLight.achievements) {

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

test("every one of the 67 officially-described Dying Light achievement name+description pairs matches the live GetSchemaForGame response", () => {

    // The 11 hidden achievements are excluded here - Steam
    // never exposes a public description for them - and covered by their
    // own dedicated test below instead.
    const officialAchievements = [
        ["The Whole Story", "Finish all side quests"],
        ["Disaster Recovery", "Get 15 Relief Packages"],
        ["We're All In This Together", "Save 15 survivors from zombies"],
        ["Homo Homini Lupus Est", "Save 15 survivors from Rais's men"],
        ["Bolter Hunting", "Catch 5 Bolters"],
        ["I'm a Runner and a fighter", "Complete 15 Agility or Power Challenges"],
        ["Lucky 7", "Win 7 coop competitions"],
        ["Harran Athletics", "Take part in 10 coop competitions"],
        ["Trade Company", "Sell items worth 10,000 dollars"],
        ["Trespassing", "Complete all Quarantine Zones"],
        ["Now It's Safe", "Capture all Safe Zones"],
        ["Pheidippides", "Run (move or sprint) at least 42,195 m"],
        ["Mount Everest", "Climb at least 8848 meters on various objects."],
        ["Is It Really Necessary?", "Kill your first Infected"],
        ["Everybody Dance Now", "Simultaneously shock 5 monsters with electricity"],
        ["Can't Touch This", "Kill 20 enemies in a row without taking damage."],
        ["This is Harraaaaan!", "Kill 100 enemies by kicking them off the rooftops/cliffs."],
        ["Mouths Wide Open", "Kill a Volatile"],
        ["Hush, Hush Now", "Quiet a Screamer"],
        ["BBQ", "Stick a burning zombie on spikes"],
        ["A Game of Catch", "Kill 50 enemies with throwing weapons"],
        ["Harran Shooting Club", "Kill 50 enemies with shooting weapons"],
        ["Electrified!", "Catch 25 enemies in the Electric Fence trap"],
        ["Blinded by the Lights", "Blind 25 Volatiles with flares or a flashlight"],
        ["High Flyer", "Kill 25 enemies using Ground Pound or Drop Attack"],
        ["Judo Master", "Throw 50 enemies with Grapple"],
        ["Prom Night", "Survive night pursuit of level two or higher"],
        ["Enlightened!", "Blind 25 enemies in the Light Trap"],
        ["Little Craftsman", "Craft your first item"],
        ["Master Crafter", "Use Blueprints at least 100 times"],
        ["Open Sesame", "Perform 10 successful Lockpicks"],
        ["Everybody Knows Kyle", "Reach Survivor Rank lvl 12"],
        ["The Legend of Harran", "Reach Survivor Rank lvl 18"],
        ["Agile", "Reach Agility Prof. Lvl 10"],
        ["Strong", "Reach Power Prof. Lvl 10"],
        ["It's All In the Writing", "Find all text collectibles"],
        ["I've Got Your Back", "Complete 1 quest in a co-op game"],
        ["Polyamory", "Complete 5 quests in a single co-op game with the same 3 partners"],
        ["Italian Plumber", "Kill an enemy with a wrench, using Vault followed by Drop Attack"],
        ["Gabriel's Sword", "Add a fire elemental effect to a sword or a khopesh"],
        ["A Long Way Down", "Jump to the water from the Infamy Bridge (Slums) at night"],
        ["The Boy Who Could Run", "Complete all Parkour Fever Challenges"],
        ["GD Parkour Instructor", "Complete all Parkour Fever Challenges at night"],
        ["Pearls in the Mud", "Open 5 GRE chests in Quarantine Zones"],
        ["Get the Bozak", "Complete Bozak's challenges"],
        ["Together Till the End", "Be the last man standing"],
        ["Electric Whisper", "Learn how to craft Electric Arrows"],
        ["Things That Go Ka-Boom", "Learn how to craft Exploding Arrows"],
        ["Robin Hood Theory", "Score 10 headshots on Rais's men with a bow"],
        ["Afraid to get wet?", "Dive into the Countryside."],
        ["And you liked him, didn't you?", "Meet your old friend again."],
        ["I was waiting for you for so long", "Become a Faceless."],
        ["Sweaty palms?", "Kill a Demolisher with a car."],
        ["It wasn't that hard, was it?", "Win Bilal's race."],
        ["What if you picked the other one?", "Make that call."],
        ["I felt your presence", "Witness the Following's meeting."],
        ["You realize it's only points, don't you?", "Reach Driver Rank 12."],
        ["Formidophobic? Interesting…", "Destroy 50 scarecrows."],
        ["I don't approve of mindless fun", "Kill 500 zombies with your vehicle."],
        ["Throw me a bone", "Kill 50 skeletons with fall damage"],
        ["Non omnis moriar", "Finish Hellraid with only one life left and 0 medkits"],
        ["Blocked by Ba'al", "Reach level 10 Hellraid rank"],
        ["Clavis was a key all along", "Put Clavis fragments into Arena"],
        ["Time to file a tax form", "Earn more than 3000 coins in one run"],
        ["Wake up!", "Finish Hellraid on Nightmare"],
        ["Well-read", "Collect all 10 notes"],
        ["Fast as hell", "Finish Hellraid under 30 min"]
    ];

    assert.strictEqual(officialAchievements.length, 67, "sanity check on this test's own reference list");

    const hiddenApinames = new Set([
        "ACH_1",
        "ACH_2",
        "ACH_3",
        "ACH_4",
        "ACH_5",
        "ACH_6",
        "ACH_7",
        "ACH_8",
        "ACH_9",
        "ACH_70",
        "ACH_79"
    ]);

    assert.strictEqual(hiddenApinames.size, 11, "sanity check - Dying Light has 11 hidden achievements");

    const dataPairs = dyingLight.achievements
        .filter(a => !hiddenApinames.has(a.apiname))
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});

test("the 11 hidden Dying Light achievements each still have their own real name and a non-empty curatorial description", () => {

    const names = [
        ["ACH_1", "Flight of the Crane"],
        ["ACH_2", "My left or your left?"],
        ["ACH_3", "Snake in the grass"],
        ["ACH_4", "Sightseeing"],
        ["ACH_5", "Making Faces"],
        ["ACH_6", "Tied loose end"],
        ["ACH_7", "Now You Can Come In"],
        ["ACH_8", "Vertigo"],
        ["ACH_9", "Bittersweet"],
        ["ACH_70", "Beginnings are hard"],
        ["ACH_79", "Into the lava"]
    ];

    assert.strictEqual(names.length, 11, "sanity check on this test's own reference list");

    for (const [apiname, name] of names) {

        const achievement = dyingLight.achievements.find(a => a.apiname === apiname);

        assert.ok(
            achievement && achievement.name === name && achievement.description.length > 0,
            `expected ${apiname} to be named "${name}" with a non-empty curatorial description`
        );

    }

});

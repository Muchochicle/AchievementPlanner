import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/roots-of-pacha.json - 62 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1245560 (fetched through this app's own services/steamApi.js).
// Hidden achievements ship no Steam description; their description here is
// researched from community 100% guides and cited in the frontend guide
// header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("roots-of-pacha");

test("getPlannerData('roots-of-pacha') returns real planner data with 62 curated achievements", () => {

    assert.ok(game, "expected real planner data for roots-of-pacha");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 62);

});

test("every Roots of Pacha achievement has a unique id from 1 to 62 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 62 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 62);
    assert.strictEqual(new Set(apinames).size, 62);

});

test("every Roots of Pacha achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 62 Roots of Pacha achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Bonfire", "Complete 10 Ideas"],
        ["A Friend Indeed", "Gain 5 flowers with one NPC"],
        ["A Glyptodon Gathering", "Complete the glyptodons cave challenge"],
        ["A Legend Of Old", "Gain 1000000 Contribution"],
        ["A Passing Tale", "Gain 10000 Contribution"],
        ["A Person Of Note", "Gain 1000 Contribution"],
        ["A Rare Friend", "Tame a rare animal"],
        ["A Wise Flight", "Complete Owl's cave challenge"],
        ["An Ancient Bond", "Harness the full power of jewelry"],
        ["Ancestral Guides", "Make your mark in all dark rooms"],
        ["Animal Friend", "Tame 1 animal"],
        ["Animal Hangout", "Tame 10 animals"],
        ["Animal Herd", "Tame 30 animals"],
        ["Best In Show", "Breed an animal to max stats"],
        ["Besties For Life", "Gain 10 flowers with one NPC"],
        ["Bugged out", "Catch 10 bugs"],
        ["Chef Of The Ages", "Cook 10 dishes"],
        ["Crushing Riddles", "Complete Bear's cave challenge"],
        ["Culinary Innovator", "Cook all dishes"],
        ["Delightful Dish", "Cook 1 dish"],
        ["Explore The Lessons", "Fully raise the pyramid"],
        ["Fur Friend", "Have a pet"],
        ["Future fauna", "Breed one evolved animal"],
        ["Future flora", "Harvest one evolved plant"],
        ["Generations", "Form a union and have a baby"],
        ["Great Ideas", "Produce 1 of every product type"],
        ["Green Arm", "Get to level 5 knowledge for all plants"],
        ["Green Hand", "Get to level 5 knowledge of any plant"],
        ["Green Thumb", "Get to level 2 knowledge of any plant"],
        ["House Guest", "Pass out from exhaustion in a strange place and wake up somewhere unexpected."],
        ["Howling Good Time", "A hidden 'howling' event - trigger it by interacting with the wolves at night."],
        ["Investigate The Meaning", "Raise the pyramid three times"],
        ["It's a bug", "Catch 1 bug"],
        ["Lasting Food", "Process 1 product"],
        ["Legend Of The Land", "Tame a legendary animal"],
        ["Light The Way", "Complete all Ideas"],
        ["Make Ada Proud", "Discover 12 plants"],
        ["Make Frer Proud", "Catch 1 fish"],
        ["Make Igrork Proud", "Discover 1 plant"],
        ["Make Inza Proud", "Catch 10 fish"],
        ["Make Tetih Proud", "Catch all fish"],
        ["Make The Clan Proud", "Discover all plants"],
        ["Meals Until Next Season", "Process 10 different types of products"],
        ["Navigate The Unknown", "Raise the pyramid twice"],
        ["Party Animal", "Dance with all NPCs"],
        ["Performer", "Play all songs in the amphitheater"],
        ["Playing With Platforms", "Complete Monkey's cave challenge"],
        ["Pro gamer", "Beat everyone at dice"],
        ["QA", "Catch all the bugs"],
        ["Seal of approval", "Restore the Sun and Moon trees"],
        ["Social Butterfly", "Gain 5 flowers with one NPC of each clan"],
        ["Start The Party", "Dance with one NPC"],
        ["Stories Will Be Told", "Gain 100000 Contribution"],
        ["Talk Of The Town", "Gain 10 flowers with one NPC from each clan"],
        ["The First Spark", "Complete 1 Idea"],
        ["Think A Little Deeper", "Raise the pyramid four times"],
        ["Threads tied", "Restore all time threads"],
        ["Totem Rite Of Passage", "Complete the final cave challenge"],
        ["Uncover The Mysteries", "Raise the pyramid once"],
        ["Your Big Place In The World", "Fully upgrade your house"],
        ["Your Bigger Place In The World", "Upgrade your house once"],
        ["Your Place In The World", "Build your own house"],
    ];

    assert.strictEqual(officialAchievements.length, 62, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});

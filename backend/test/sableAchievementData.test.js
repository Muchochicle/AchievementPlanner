import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/sable.json - 56 real achievements sourced from
// a live ISteamUserStats/GetSchemaForGame/v2 response for appid 757310
// (fetched through this app's own services/steamApi.js) - 55 of 56 ship
// a real, official Steam description. Gastric Bypass is a hidden
// achievement Steam never describes publicly (confirmed via the same
// API call) - its description here is curatorial, cross-checked
// against TrueAchievements'/TrueSteamAchievements' independent
// documentation of its real unlock condition. difficulty/estimatedTime
// remain curatorial judgments, same convention as every other planner
// difficulty/time field in this catalog.
const sable = getPlannerData("sable");

test("getPlannerData('sable') returns real planner data with 56 curated achievements", () => {

    assert.ok(sable, "expected real planner data for sable");
    assert.ok(Array.isArray(sable.achievements));
    assert.strictEqual(sable.achievements.length, 56);

});

test("every Sable achievement has a unique id from 1 to 56 and a unique apiname", () => {

    const ids = sable.achievements.map(a => a.id);
    const apinames = sable.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 56 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 56);
    assert.strictEqual(new Set(apinames).size, 56);

});

test("every Sable achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

    for (const achievement of sable.achievements) {

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

test("every one of the 55 officially-described Sable achievement name+description pairs matches the live GetSchemaForGame response", () => {

    // Gastric Bypass is excluded here - Steam never exposes a public
    // description for it - and covered by its own dedicated test below
    // instead.
    const officialAchievements = [
        ["Just The Two of Us", "Leave the Ewer"],
        ["The Gliding", "Choose your mask"],
        ["Chum Expert", "Complete Building a Queendom"],
        ["The Quick and the Curious", "Complete An Ancient Race"],
        ["Amateur Historian", "Complete Historical Reconnection"],
        ["The Machinist Mask", "Unlock the Machinist Mask"],
        ["The Beetle Mask", "Unlock the Beetle Mask"],
        ["The Climber Mask", "Unlock the Climbers mask"],
        ["The Entertainer Mask", "Unlock the Entertainer mask"],
        ["The Guard Mask", "Unlock the Guard mask"],
        ["The Scrapper Mask", "Unlock the Scrapper mask"],
        ["The Merchant Mask", "Unlock the Merchants mask"],
        ["The Cartographer Mask", "Unlock the Cartographers mask"],
        ["Many Different Faces", "Collect 5 masks"],
        ["Chum Novice", "Deliver your first Chum egg"],
        ["Honorary Chum", "Deliver 60 Chum eggs"],
        ["The Dunboyne", "Open the door in the Dunboyne"],
        ["Trellick's Pillar", "Open the door in Trellick's Pillar"],
        ["Shadow Of Neave", "Open the door in Shadow Of Neave"],
        ["Rowleys Way", "Open the door in Rowleys Way"],
        ["Centre Of Brunswick", "Open the door in Centre of Brunswick"],
        ["Balfron Connection", "Open the door in Balfron Connection"],
        ["Thread The Needle", "Reveal a Hicaric arch monument"],
        ["Fragile Goods", "Destroy a Nimoor plant"],
        ["Ceiling Of Stars", "Complete the puzzle in the Watch"],
        ["Up On High", "Unblock the wind tower"],
        ["Power to the People", "Return power to Eccria"],
        ["Take That!", "Point the finger at a suspect"],
        ["Glider on the Storm", "Harvest a lightning crystal"],
        ["Smoked Out", "Collect a Hakoan glowworm"],
        ["Nesting Giant", "Get into the Hercules Beetle Nest"],
        ["Got Your Nose", "Collect an elephant beetle"],
        ["Squeeze One Out", "Collect a slicer beetle poo"],
        ["A Hard Place", "Collect a orange ringed beetle"],
        ["Bike Collector", "Collect 10 bike parts"],
        ["Bike Aficionado", "Collect 20 bike parts"],
        ["Badge Hobbyist", "Collect 5 badges"],
        ["Badge Collector", "Collect 10 badges"],
        ["Simoon", "Build your hoverbike"],
        ["Under The Hood", "Customise your hoverbike with a Machinist"],
        ["The Gift of Gab", "Talk to 15 NPCs"],
        ["Silver-Tongued Sable", "Talk to 30 NPCs"],
        ["Sticky Paws", "Climb 500m in total"],
        ["More Than A Box Of Sand", "Open 20 chests"],
        ["Treasure Tracker", "Open 40 chests"],
        ["Bikes Don't Fly", "Get 5 seconds of air time on the hoverbike"],
        ["Dune Rider", "Travel 50km on the bike"],
        ["Bubble Up", "Hover for 1500m using the Perpetual"],
        ["Not That Kind Of Gliding", "Fall from a great height"],
        ["Wrapping Up", "Collect 6 items of clothing"],
        ["Playing Dress Up", "Collect 12 items of clothing"],
        ["Big Spender", "Spend 1000 cuts"],
        ["The Angler Mask", "Unlock the Angler Mask"],
        ["Quite The Catch", "Catch your first fish"],
        ["Vivacious Vivarium", "Complete the collection in the Vivarium"]
    ];

    assert.strictEqual(officialAchievements.length, 55, "sanity check on this test's own reference list");

    const dataPairs = sable.achievements
        .filter(a => a.apiname !== "open_sandwyrm")
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});

test("the Steam-silent hidden achievement (Gastric Bypass) still has its own real name and a non-empty curatorial description", () => {

    const gastricBypass = sable.achievements.find(a => a.apiname === "open_sandwyrm");

    assert.ok(gastricBypass && gastricBypass.name === "Gastric Bypass" && gastricBypass.description.length > 0);

});

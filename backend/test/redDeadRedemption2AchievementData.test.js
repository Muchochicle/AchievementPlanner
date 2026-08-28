import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/red-dead-redemption-2.json - 51 real
// achievements sourced from a live ISteamUserStats/GetSchemaForGame/v2
// response for appid 1174180 (fetched through this app's own
// services/steamApi.js) - 39 of 51 ship a real, official Steam
// description. The 12 hidden achievements are ten story-chapter markers
// plus Paying Respects and It's Art; their descriptions here are
// curatorial, cross-checked against the Red Dead wiki, SVG, and Gamer
// Guides. difficulty/estimatedTime remain curatorial judgments, same
// convention as every other planner difficulty/time field.
const redDeadRedemption2 = getPlannerData("red-dead-redemption-2");

test("getPlannerData('red-dead-redemption-2') returns real planner data with 51 curated achievements", () => {

    assert.ok(redDeadRedemption2, "expected real planner data for red-dead-redemption-2");
    assert.ok(Array.isArray(redDeadRedemption2.achievements));
    assert.strictEqual(redDeadRedemption2.achievements.length, 51);

});

test("every Red Dead Redemption 2 achievement has a unique id from 1 to 51 and a unique apiname", () => {

    const ids = redDeadRedemption2.achievements.map(a => a.id);
    const apinames = redDeadRedemption2.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 51 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 51);
    assert.strictEqual(new Set(apinames).size, 51);

});

test("every Red Dead Redemption 2 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

    for (const achievement of redDeadRedemption2.achievements) {

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

test("every one of the 39 officially-described Red Dead Redemption 2 achievement name+description pairs matches the live GetSchemaForGame response", () => {

    // The 12 hidden achievements are excluded here - Steam
    // never exposes a public description for them - and covered by their
    // own dedicated test below instead.
    const officialAchievements = [
        ["Lending a Hand", "Complete all optional Honor story missions."],
        ["Best in the West", "Attain 100% completion."],
        ["Gold Rush", "Earn 70 Gold Medals in Story missions."],
        ["Friends With Benefits", "Complete a Companion Activity in each camp."],
        ["Hobby Horse", "Play all mini games."],
        ["Breaking and Entering", "Recover the stash from 4 homesteads."],
        ["Artificial Intelligence", "Discover the fate of Marko Dragic."],
        ["Take From the Rich", "Rob or loot $250."],
        ["Give to the Poor", "Donate $250 to the gang tithing box."],
        ["Pony Up", "Spend $5000 across all shops."],
        ["Extreme Personality", "Reach maximum or minimum Honor level."],
        ["Western Stranger", "Complete 10 Stranger mission strands."],
        ["Bountiful", "Survive 3 days holding a bounty of $250 in all states."],
        ["Collector's Item", "Complete one of the Collectable strands."],
        ["Errand Boy", "Deliver 5 camp companion item requests."],
        ["Self Sufficient", "Craft 30 unique items in Story Mode."],
        ["Skin Deep", "Skin every species of animal in Story Mode."],
        ["Zoologist", "Study every animal across all states in Story Mode."],
        ["It was THIS Big!", "Catch a fish weighing at least 16 lbs (7.3 kg)."],
        ["Locked and Loaded", "Upgrade each available component for a single sidearm or longarm weapon."],
        ["Grin and Bear it", "Survive 18 bear attacks and kill the bear each time in Story Mode."],
        ["Trusty Steed", "Reach max bonding level with a horse."],
        ["Breakout", "Red Dead Online: Complete the Intro."],
        ["Series Major", "Red Dead Online: Take part in a Series."],
        ["Gun For Hire", "Red Dead Online: Accept 10 Free Roam missions from characters around the world."],
        ["Eventful", "Red Dead Online: Play 5 Free Roam Events."],
        ["Buckle Up", "Red Dead Online: Achieve 5 gold belt buckles from awards."],
        ["The Real Deal", "Red Dead Online: Achieve MVP 3 times (in a round with at least 4 players)."],
        ["Horses for Courses", "Red Dead Online: Concurrently own 5 horses."],
        ["Getting Started", "Red Dead Online: Reach Rank 10."],
        ["Notorious", "Red Dead Online: Reach Rank 50."],
        ["All's Fair", "Red Dead Online: Successfully counter a rival Posse's Free Roam mission."],
        ["Home Comforts", "Red Dead Online: Purchase 5 camp improvements."],
        ["Non-Regulation", "Red Dead Online: Craft 25 pieces of ammunition."],
        ["Posse Up", "Red Dead Online: Form a Persistent Posse."],
        ["Master Craftsman", "Red Dead Online: Craft 20 items (excluding ammo)."],
        ["Butchered", "Red Dead Online: Sell 20 items to the Butcher."],
        ["Picked to Perfection", "Red Dead Online: Pick 25 Herbs."],
        ["Strength in Numbers", "Red Dead Online: Complete a Free Roam mission as part of a Posse with at least 2 members."]
    ];

    assert.strictEqual(officialAchievements.length, 39, "sanity check on this test's own reference list");

    const hiddenApinames = new Set([
        "Achievement1",
        "Achievement2",
        "Achievement3",
        "Achievement4",
        "Achievement5",
        "Achievement6",
        "Achievement7",
        "Achievement8",
        "Achievement9",
        "Achievement10",
        "Achievement25",
        "Achievement27"
    ]);

    assert.strictEqual(hiddenApinames.size, 12, "sanity check - Red Dead Redemption 2 has 12 hidden achievements");

    const dataPairs = redDeadRedemption2.achievements
        .filter(a => !hiddenApinames.has(a.apiname))
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});

test("the 12 hidden Red Dead Redemption 2 achievements each still have their own real name and a non-empty curatorial description", () => {

    const names = [
        ["Achievement1", "Back in the Mud"],
        ["Achievement2", "Just a Scratch"],
        ["Achievement3", "To Greener Pastures"],
        ["Achievement4", "Settling Feuds"],
        ["Achievement5", "Washed Ashore"],
        ["Achievement6", "No Traitors"],
        ["Achievement7", "Third Time Lucky"],
        ["Achievement8", "Redemption"],
        ["Achievement9", "Cowboy Builder"],
        ["Achievement10", "Endless Summer"],
        ["Achievement25", "Paying Respects"],
        ["Achievement27", "It's Art"]
    ];

    assert.strictEqual(names.length, 12, "sanity check on this test's own reference list");

    for (const [apiname, name] of names) {

        const achievement = redDeadRedemption2.achievements.find(a => a.apiname === apiname);

        assert.ok(
            achievement && achievement.name === name && achievement.description.length > 0,
            `expected ${apiname} to be named "${name}" with a non-empty curatorial description`
        );

    }

});

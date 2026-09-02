import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/the-wandering-village.json - 32 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1121640 (fetched through this app's own services/steamApi.js).
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("the-wandering-village");

test("getPlannerData('the-wandering-village') returns real planner data with 32 curated achievements", () => {

    assert.ok(game, "expected real planner data for the-wandering-village");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 32);

});

test("every The Wandering Village achievement has a unique id from 1 to 32 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 32 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 32);
    assert.strictEqual(new Set(apinames).size, 32);

});

test("every The Wandering Village achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 32 The Wandering Village achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Breath of Fresh Air", "Survive until day 100 without any housing"],
        ["Age of Exploration", "Have at least 5 ongoing scavenging missions at once"],
        ["Agricultural Revolution", "Survive until day 30 without letting your villagers eat a single Berry"],
        ["Berry Good", "Have a Berry Gatherer in range of 16 or more Berry Bushes"],
        ["But I'm not Hungry!", "Successfully command Onbu to eat"],
        ["Doki Doki Waku Waku", "Get Onbu's heartrate to go above 6 bpm"],
        ["Dry Spell", "Survive until day 100 without building any Air Wells"],
        ["Food for Thought", "Survive until day 100 without building any Kitchen or Gourmet Kitchen"],
        ["Fore!", "Feed Onbu with the Feeding Trebuchet"],
        ["Free Real Estate", "Achieve a housing quality of 6 while having at least 50 villagers"],
        ["Full Body Shave", "Cut down every tree on Onbu’s back"],
        ["Globetrotter", "Visit the Mountains, Jungle, Desert, Ocean and Ruins in a single playthrough"],
        ["Happy Folks", "Achieve a happiness rating of at least 35"],
        ["Master Gatherer", "Survive until day 100 without building any Farms"],
        ["Modern Times", "Have at least 10 buildings with upgrades"],
        ["Monumental", "Build the Survival Monument"],
        ["Our Friend and Protector", "Build the Onbu Monument"],
        ["Parasite", "Produce Black Pudding"],
        ["Perfect Sight", "Have at least 3 Scout Towers built at once"],
        ["Petting Zoo", "Pet Onbu"],
        ["Priorities", "Build a Community Plaza before building the Feeding Trebuchet"],
        ["Rock Bottom", "Mine every boulder on Onbu’s back"],
        ["Sandman", "Successfully command Onbu to sleep"],
        ["Spa Day", "Pet, feed, heal and detox Onbu within one day"],
        ["Strict Diet", "Survive until day 100 while using the Feeding Trebuchet to feed Onbu a maximum of 3 times"],
        ["The Enlightened Village", "Research every technology in a single playthrough"],
        ["The Light of Human Intellect", "Build the Village Monument"],
        ["The Soaring Village", "Build a Scavenger Hut before day 12 begins"],
        ["The Wandering City", "Reach a population of at least 200 villagers"],
        ["The Wandering Metropolis", "Reach a population of at least 200 villagers on Hard difficulty or above"],
        ["Unfortunate Son", "Lose a villager on a scavenging mission"],
        ["What's the Buzz?", "Have at least 20 Elefleas and 5 Sporemoths on Onbu at the same time"],
    ];

    assert.strictEqual(officialAchievements.length, 32, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});

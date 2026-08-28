import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/streets-of-rogue.json - 52 real achievements
// sourced from a live ISteamUserStats/GetSchemaForGame/v2 response for
// appid 512900 (fetched through this app's own services/steamApi.js) -
// all 52 ship a real, official Steam description. Streets of Rogue has
// no Steam-hidden achievements at all. difficulty/estimatedTime remain
// curatorial judgments, same convention as every other planner
// difficulty/time field in this catalog.
const streetsOfRogue = getPlannerData("streets-of-rogue");

test("getPlannerData('streets-of-rogue') returns real planner data with 52 curated achievements", () => {

    assert.ok(streetsOfRogue, "expected real planner data for streets-of-rogue");
    assert.ok(Array.isArray(streetsOfRogue.achievements));
    assert.strictEqual(streetsOfRogue.achievements.length, 52);

});

test("every Streets of Rogue achievement has a unique id from 1 to 52 and a unique apiname", () => {

    const ids = streetsOfRogue.achievements.map(a => a.id);
    const apinames = streetsOfRogue.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 52 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 52);
    assert.strictEqual(new Set(apinames).size, 52);

});

test("every Streets of Rogue achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

    for (const achievement of streetsOfRogue.achievements) {

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

test("every one of the 52 Streets of Rogue achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const officialAchievements = [
        ["Adapting to City Life", "Complete any floor"],
        ["Savior of the Slums", "Complete Slums"],
        ["Industrial Idol", "Complete Industrial"],
        ["Industrial", "Unlock elevator access"],
        ["Didn't Skip the Tutorial", "Complete tutorial"],
        ["Gangster (Blahd)", "Unlock playable character"],
        ["Comedian", "Unlock playable character"],
        ["Investment Banker", "Unlock playable character"],
        ["Shopkeeper", "Unlock playable character"],
        ["Assassin", "Unlock playable character"],
        ["Jock", "Unlock playable character"],
        ["Bartender", "Unlock playable character"],
        ["Cop", "Unlock playable character"],
        ["Gorilla", "Unlock playable character"],
        ["Scientist", "Unlock playable character"],
        ["Shapeshifter", "Unlock playable character"],
        ["Vampire", "Unlock playable character"],
        ["Werewolf", "Unlock playable character"],
        ["Wrestler", "Unlock playable character"],
        ["Park President", "Complete Park"],
        ["Park", "Unlock elevator access"],
        ["Cannibal", "Unlock playable character"],
        ["Slavemaster", "Unlock playable character"],
        ["Zombie", "Unlock playable character"],
        ["Downtown Diva", "Complete Downtown"],
        ["Downtown", "Unlock elevator access"],
        ["Uptown", "Unlock elevator access"],
        ["Uptown Upper-Cruster", "Complete Uptown"],
        ["You Rule", "Complete Mayor Village"],
        ["Legal Takeover", "Win Election"],
        ["Hostile Takeover", "Neutralize Mayor"],
        ["Peaceful Takeover", "Win without winning election or neutralizing Mayor"],
        ["The Bad Ending", "Find the Bad Ending"],
        ["Quest Conqueror", "Complete any Big Quest"],
        ["Firefighter", "Unlock playable character"],
        ["Terminator", "Kill the Killer Robot"],
        ["True Believer", "Find the Alien"],
        ["Fast Food", "Make a Refrigerator \"Run\""],
        ["Creature Feature", "Kill a Vampire while playing a Werewolf"],
        ["Flat Earther", "Fall off the edge of the map"],
        ["Creative Genius", "Create a custom character"],
        ["Fountain of Life", "Poison a water body with Resurrection Shampoo"],
        ["Potent Mix", "Have four status effects at once"],
        ["Slaver Enslaver", "Enslave a Slavemaster"],
        ["The Best Around", "Win an Arena fight"],
        ["Massacrist", "Kill everyone in a level"],
        ["Safe Travels", "Nicely ask an NPC to leave a level"],
        ["Ironic Killer", "Kill someone by throwing a Gravestone at them"],
        ["Murderous Mixologist", "Give someone a Cyanide Cocktail"],
        ["Shocker", "Electrocute someone in water"],
        ["Mobster", "Unlock playable character"],
        ["Robot", "Unlock playable character"]
    ];

    assert.strictEqual(officialAchievements.length, 52, "sanity check on this test's own reference list - Streets of Rogue has no Steam-hidden achievements");

    const dataPairs = streetsOfRogue.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});

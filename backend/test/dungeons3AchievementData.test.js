import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/dungeons-3.json - 60 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 493900 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("dungeons-3");

test("getPlannerData('dungeons-3') returns real planner data with 60 curated achievements", () => {

    assert.ok(game, "expected real planner data for dungeons-3");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 60);

});

test("every Dungeons 3 achievement has a unique id from 1 to 60 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 60 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 60);
    assert.strictEqual(new Set(apinames).size, 60);

});

test("every Dungeons 3 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 60 Dungeons 3 achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A little something extra", "Get all of the bonus creatures in the mission “The Prince of Hell”."],
        ["A trip on sea, what fun it can be", "Complete the mission “The Crossing”."],
        ["Angel of Fire", "Complete the mission “Baptism of Fire”."],
        ["At the foot of Mount Destiny", "Complete the mission “Two Sides Of A Medal”."],
        ["Band of Brothers", "Don’t lose a single creature to Tanos in battle in the mission “Everything Has An End…”."],
        ["Braiiiiins!", "Awaken at least 98 Undead in the mission “The Ashspring Swamplands”."],
        ["Can’t stand the sight of Dark Elf blood", "Never let Thalya's Life Energy fall below 75% during the ritual."],
        ["Can’t stand to see an Ogre bleed", "The Ogre in the mission “The Hungry, Hungry Ogre” must not fall below 75% Life Energy."],
        ["Chorus of damnation", "Own at least 5 Banshees at the same time in the mission “The Titan of Alphaas”."],
        ["Damned good", "Complete the mission “The Prince of Hell”."],
        ["Death and destruction!", "Destroy 9 Heroes with Thalya's “Fire Bomb” in the mission “The Shadow of Absolute Evil”."],
        ["Destroy the thing", "Complete the mission “The Titan of Alphaas”."],
        ["Difficult family relationships", "Complete the mission “I Am Your Father!”."],
        ["Discoverer", "Find the two Obelisks in less than 25 minutes."],
        ["Factory farming", "Hold at least 7 Heroes in the Prison at the same time in the mission “The Prince of Hell”."],
        ["Flat as a pancake", "Kill 50 Heroes by Catapult bombardment in the mission “Once Upon A Catapult”."],
        ["For a handfull of Catapults", "Complete the mission “Once Upon A Catapult”."],
        ["Hands off the Dungeonheart!", "The Dungeonheart must not fall below 50% life in the mission “The Battle of Steelsmith”."],
        ["Hearts are trump", "Never let the Dungeonhearts Life Energy fall under 75% in “The End of Yaina Overproud”."],
        ["Hearts of Iron", "Complete the mission “I Am Your Father!” without the Dungeonheart taking any damage."],
        ["I love the smell of Catapult fire!", "Capture all of the Catapults in the mission “Once Upon A Catapult” in less than 30 minutes."],
        ["I need a hero!", "Kill 100 Heroes in the mission “Light and Shadow”."],
        ["Ignore The Level Designer’s Plan", "Destroy at least 3 Hero tent camps during daylight in the mission “The Crossing”."],
        ["Lifeguard", "Don’t lose a single creature to the water in the mission “Ups and Downs”."],
        ["Lifesaver", "Don’t lose more than 8 units in the mission “The Titan of Alphaas”."],
        ["MASS-O-BOT", "Own 5 Gob-O-Bots at any time in the mission “The End of Burgers' End”."],
        ["Master of Traps", "Kill at least 30 Heroes with the “Thrasher” Trap in the mission “The Crossing”."],
        ["Night of the Living Dead (on Speed)", "Conquer all Graveyards in less than 25 minutes in the mission “The Ashspring Swamplands”."],
        ["No one has to die today!", "Complete the mission “Twistram in Ruins” without losing more than 3 creatures."],
        ["Not a scratch", "Complete the mission “Baptism of Fire” without Thalya taking any damage."],
        ["Not-So-Overproud", "Complete the mission “The End of Yaina Overproud”."],
        ["Ogre Solo!", "Complete the mission “The Hungry, Hungry Ogre”."],
        ["Please, no interruptions!", "Stop anyone from interrupting Thalya while she contaminates the water in mission “Ups and Downs”."],
        ["Prepare the grave", "Don’t let the Grave Golem’s Life Energy fall below 50%."],
        ["Prison Break", "Free Thalya in less than 45 minutes in the “Light and Shadow” mission."],
        ["Rusty Steel", "Complete the mission “The Battle of Steelsmith”."],
        ["Sacrifices!", "Sacrifice all of the Titans within 40 minutes in the mission “A Disturbance In The Force”."],
        ["Shadow hunter", "Don’t let the Shadow take any damage from light in the mission “The Shadow of Absolute Evil”."],
        ["Spawner Killer", "Destroy all of the Hero camps in the mission “The Storming of Dollaran”."],
        ["Stock Market Crash", "Complete the mission “The Storming of Dollaran”."],
        ["Storm And Stress", "Complete the mission “The Storming of Dollaran” in less than 40 minutes."],
        ["The Benevolent Evil", "Save all of the Heroes Tanos wants to punish in the mission “Everything Has An End…”."],
        ["The Evilest Evil", "Collect a total of 1000 Evilness in the mission “Twistram in Ruins”."],
        ["The Force disturbed", "Complete the mission “A Disturbance In The Force”."],
        ["The Gehenna Stones", "Complete the mission “The Gehenna Stones”."],
        ["The last burger", "Complete the mission “The End of Burgers' End”."],
        ["The One-Huge-Army-Building Evil", "Own at least 15 creatures at the same time in the mission “The Battle of Steelsmith”."],
        ["The Shadow strikes", "Successfully complete the mission “The Shadow of Absolute Evil”."],
        ["The Stones’ Power", "Kill at least 15 Heroes using the Stones’ magic in the mission “The Gehenna Stones”."],
        ["The Swamplanders from the swamplands", "Complete the mission “The Ashspring Swamplands”."],
        ["The Victorious Evil", "Complete the mission “Everything Has An End…”."],
        ["The White Knight", "Don’t let Thalya's Life Energy fall below 75% during the mission “The Gehenna Stones”."],
        ["Then let them eat cake!", "Don’t allow any deliveries to reach the city in the mission “The End of Burgers' End”."],
        ["Thirst quencher", "Own more than 42 Barrels of Beer at the same time in the mission “The Hungry, Hungry Ogre”."],
        ["This is fun, I’m going to keep doing this!", "Sacrifice more Heroes than needed in mission “I Am Your Father!” – until the Narrator is satisfied."],
        ["Tide Master", "Complete the mission “Ups and Downs”."],
        ["Twistram is devastated", "Complete the mission “Twistram in Ruins”."],
        ["Use the terrain", "Kill 30 Heroes using an Obelisk."],
        ["We don’t have time!", "Destroy every Arcane Tear in mission “The End of Yaina Overproud” within 60 seconds maximum."],
        ["Where there is Light, there is Shadow", "Complete the mission “Light and Shadow”."],
    ];

    assert.strictEqual(officialAchievements.length, 60, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});

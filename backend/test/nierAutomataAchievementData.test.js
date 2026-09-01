import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/nier-automata.json - 47 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 524220 (fetched through this app's own services/steamApi.js).
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("nier-automata");

test("getPlannerData('nier-automata') returns real planner data with 47 curated achievements", () => {

    assert.ok(game, "expected real planner data for nier-automata");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 47);

});

test("every NieR:Automata achievement has a unique id from 1 to 47 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 47 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 47);
    assert.strictEqual(new Set(apinames).size, 47);

});

test("every NieR:Automata achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 47 NieR:Automata achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A New Battle Begins", "Achieve ending B."],
        ["A Round by the Pond", "20 different kinds of fish caught."],
        ["A Scanner's Power", "Destroy 100 machine lifeforms by hacking."],
        ["Animal Rider", "Any animal ridden for 5 kilometers."],
        ["Beautiful World", "Achieve A2's ending (D)."],
        ["Cherish Our Resources", "Have 100 bodies collected."],
        ["Chip Collector", "80% of all plug-in chips collected."],
        ["Come Take a Look!", "Use Emil's shop for the first time."],
        ["Creation and Insurrection", "Complete the alien ship."],
        ["Crime and Punishment", "Watch the final moments of Devola and Popola."],
        ["Desire Without Emotion", "At least 100,000 G in possession."],
        ["Destruction is My Job", "80% of all unit data unlocked."],
        ["Farewell, Pascal", "Grant Pascal's final request."],
        ["Fighting's Not My Thing", "Play your first hacking game."],
        ["Final Wish", "Watch 2B die."],
        ["First Errand", "Complete your first quest."],
        ["Harvest King", "Materials gathered at a hidden harvest point 10 times."],
        ["Information Master", "80% of all archives found."],
        ["Inorganic Blade", "All weapons upgraded to the highest level."],
        ["Iron Soul", "Complete the abandoned factory."],
        ["It's a Healthy Baby Boy!", "Complete the desert area."],
        ["Justice", "Stop all resource-recovery units."],
        ["Leaving for the New World", "Achieve 9S's ending (C)."],
        ["Lunar Tear", "Visit the place of memories (Kaine's house, a NieR Replicant easter egg)."],
        ["Machines vs. Machines", "Destroy 50 machine lifeforms by remote control."],
        ["Naughty Children", "Destroy Emil (defeat the Emil superboss)."],
        ["Not That I Mind...", "Play for 1 hour with 9S in a certain state (with his trousers destroyed)."],
        ["One Battle Ends", "Achieve ending A."],
        ["Pod Hunter", "All Pods found."],
        ["Resuscitated Body", "Stare into space from the Bunker."],
        ["Ruler of the Deep", "Complete the flooded city."],
        ["Ruler of the Skies", "255 enemies destroyed using a flight unit."],
        ["Supreme Support Weapons", "All Pods upgraded to the highest level."],
        ["The Circle of Death", "Have your body collected."],
        ["The Mechanical Kingdom", "Complete the forest castle."],
        ["The Mercenary", "80% of all quests completed."],
        ["The Minds That Emerged", "View the final credits (the true ending, E)."],
        ["The Power of Hate", "Destroy 50 machine lifeforms with berserk mode."],
        ["Those Who Love Humans", "Complete the copied city."],
        ["Tools of the Trade", "Any weapon upgraded to the highest level."],
        ["Transcendent Being", "Achieve all endings (all 26, A through Z)."],
        ["Treacherous Blade", "Take control of A2 for the first time."],
        ["Vestiges of Prosperity", "Arrive at the City Ruins."],
        ["Wait! Don't Kill Me!", "Destroy 10 friendly machine lifeforms."],
        ["We Await Your Next Visit", "Complete the amusement park ruins."],
        ["Weapons Maniac", "All Pod programs obtained."],
        ["What Are You Doing?", "Discover 2B's secret 10 times (self-destruct as 2B to blow off her skirt)."],
    ];

    assert.strictEqual(officialAchievements.length, 47, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});

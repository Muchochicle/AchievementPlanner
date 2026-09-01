import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/elden-ring-nightreign.json - 37 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 2622380 (fetched through this app's own services/steamApi.js).
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("elden-ring-nightreign");

test("getPlannerData('elden-ring-nightreign') returns real planner data with 37 curated achievements", () => {

    assert.ok(game, "expected real planner data for elden-ring-nightreign");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 37);

});

test("every Elden Ring Nightreign achievement has a unique id from 1 to 37 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 37 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 37);
    assert.strictEqual(new Set(apinames).size, 37);

});

test("every Elden Ring Nightreign achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 37 Elden Ring Nightreign achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Champion's Path", "Defeated a Nightlord with each of the eight playable characters."],
        ["Augur", "Defeated Maris, Fathom of Night (the Augur Expedition's Nightlord)."],
        ["Darkdrift Knight", "Defeated Fulghor, Champion of Nightglow (the Darkdrift Knight Expedition's Nightlord)."],
        ["Dawn", "Reached the ending - complete the 8th Expedition and offer the Nightlord's Rune."],
        ["Dresser", "Changed garb via dresser for the first time"],
        ["Equilibrious Beast", "Defeated Libra, Creature of Night (the Equilibrious Beast Expedition's Nightlord)."],
        ["Fell Omen", "Completed the Fell Omen raid."],
        ["Fissure in the Fog", "Defeated Caligo, Miasma of Night (the Fissure in the Fog Expedition's Nightlord)."],
        ["Gaping Jaw", "Defeated Adel, Baron of Night (the Gaping Jaw Expedition's Nightlord)."],
        ["Legendary Armament", "Acquired a legendary armament for the first time"],
        ["Mastery", "Attained maximum level within a single Expedition."],
        ["Mountaintop", "Found the secret of the Mountaintop Shifting Earth location."],
        ["Night Aspect", "Defeated Heolstor the Nightlord (the final Nightlord, ending the Night Aspect Expedition)."],
        ["Night Begins", "The Night Aspect appeared."],
        ["Nightlord Conqueror", "Defeated all Nightlords"],
        ["Nightlord Slayer", "Defeated 3 different Nightlords in a row without failing an Expedition between them."],
        ["Nightreign", "Earned all achievements"],
        ["Noklateo, the Shrouded City", "Found the secret of Noklateo, the Shrouded City."],
        ["Obtained Vessels", "Acquired a great many vessels"],
        ["Old Gaol", "Completed the Oldest Gaol (a stronger gaol variant)."],
        ["Plague of Locusts", "Completed the Sentient Pest raid ('Plague of Locusts')."],
        ["Relic", "Invoked the power of a relic for the first time"],
        ["Replenished Sacred Flasks", "Acquired a great number of flask charges in one Expedition."],
        ["Rotted Woods", "Found the secret of the Rotted Woods Shifting Earth location."],
        ["Sentient Pest", "Defeated Gnoster, Wisdom of Night (the Sentient Pest Expedition's Nightlord)."],
        ["Set and Steadfast", "Acquired many pieces of high-rarity equipment on a single Expedition."],
        ["Shifting Earth", "Found the secrets of all Shifting Earth locations"],
        ["The Crater", "Found the secret of the Crater Shifting Earth location."],
        ["The Duchess Joins the Fray", "The Duchess became a playable character."],
        ["The Nightlords", "The Nightlords appeared (story - revealed after your first Expedition)."],
        ["The Revenant Joins the Fray", "The Revenant became a playable character."],
        ["The Shrouded Roundtable Hold", "Reached the Shrouded Roundtable Hold"],
        ["Tricephalos", "Defeated Gladius, Beast of Night (the Tricephalos Expedition's Nightlord)."],
        ["True Arbiter", "Completed the Equilibrious Beast raid ('True Arbiter')."],
        ["Typhoon", "Completed the Augur raid ('Typhoon')."],
        ["Untold Power", "Defeated 10 or more great enemies ('Great Enemy Felled') on one Expedition."],
        ["Vessel", "Acquired a new vessel and conducted a different relic rite for the first time"],
    ];

    assert.strictEqual(officialAchievements.length, 37, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});

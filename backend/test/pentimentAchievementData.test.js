import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/pentiment.json - 41 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1205520 (fetched through this app's own services/steamApi.js).
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("pentiment");

test("getPlannerData('pentiment') returns real planner data with 41 curated achievements", () => {

    assert.ok(game, "expected real planner data for pentiment");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 41);

});

test("every Pentiment achievement has a unique id from 1 to 41 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 41 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 41);
    assert.strictEqual(new Set(apinames).size, 41);

});

test("every Pentiment achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 41 Pentiment achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Fateful Sausage", "Learn the mystery of the cats."],
        ["A Regular Saint Francis", "Pet 5 animals."],
        ["Among Us", "Discover the imposter."],
        ["Andreas Non Grata", "End Act I out of the abbot's favor."],
        ["Art of Persuasion", "Pass 5 dialogue checks."],
        ["Cookie Master", "Cut enough cookies for everyone at the Christmas feast."],
        ["Cryptic Solutions", "Find the secret door to library."],
        ["Down to the Last Pfennig", "Lose everything at Lansquenet."],
        ["Empty-headed", "Have your hat stolen."],
        ["Good Graces", "End Act I in the abbot's favor."],
        ["Good Influence", "Encourage Paul to draw."],
        ["Grave Matters", "Convince Gernot to let you dig up the grave."],
        ["High Roller", "Win everyone's money at Lansquenet."],
        ["Hot Goss", "Tell Jacob Estler immaterial gossip."],
        ["Kiss Zdena", "Seduce Zdena."],
        ["Legal Eagle", "Convince Jacob Estler to save Ottilia's home."],
        ["Like a Record Baby", "Solve Ferenc's cipher with the volvelle."],
        ["Look Before you Climb", "Get assistance climbing down the mine shaft."],
        ["Manu Propria", "Finished Act 3."],
        ["Matchmaker", "Convince Endris to find his sweetheart."],
        ["Nosy Fella", "Headbutt Werner."],
        ["Quick Fingers", "Spin wool as fast as the ladies."],
        ["Room Service", "Complain to Niko about your room."],
        ["Should Have Seen the Other Guy", "Get knocked out."],
        ["Simple Soul", "Convince Illuminata to give you the French book."],
        ["Smell the Roses", "Examine 10 flowers."],
        ["The Adulteress", "Act II: accuse the adulteress (Hanna) as the culprit when you name one."],
        ["The Baron", "Finished Act 1."],
        ["The Cornish Patient", "Get Aedoc his medicine."],
        ["The Deer Hunter", "Shoot the deer."],
        ["The Embezzler", "Act II: accuse the embezzler (Guy the merchant) as the culprit when you name one."],
        ["The Hand of Mercy", "Refuse to shoot at the deer."],
        ["The Imposter", "Act II: accuse the imposter (Brother Martin) as the culprit when Jacob Estler asks you to name one."],
        ["The Nun", "Act I: accuse the nun (Sister Matilda) as the murderer when you name a culprit."],
        ["The Penitent Man", "Do your penance."],
        ["The Prior", "Act I: accuse the Prior (Ferenc) as the murderer when you name a culprit."],
        ["The Root of the Problem", "Get Wojslav to let you into the cellar."],
        ["The Second Plague", "Learn about Artemis and Apollo's frog plan."],
        ["The Stonemason", "Act I: accuse the stonemason (Lucky) as the murderer when you name a culprit to Magdalene."],
        ["The Widow", "Act I: accuse the widow (Ottilia) as the murderer when you name a culprit."],
        ["Vis Major", "Finished Act 2."],
    ];

    assert.strictEqual(officialAchievements.length, 41, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});

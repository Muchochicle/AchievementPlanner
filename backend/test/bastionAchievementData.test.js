import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/bastion.json - 24 real achievements sourced from
// a live ISteamUserStats/GetSchemaForGame/v2 response for appid 107100
// (fetched through this app's own services/steamApi.js) - 19 of 24 ship
// a real, official Steam description. The Survivor, The Singer, The Ura,
// The Beginning, and Turret Opera are hidden achievements Steam never
// describes publicly (confirmed via the same API call) - their
// descriptions here are curatorial summaries of their real,
// community-documented unlock conditions. difficulty/estimatedTime
// remain curatorial judgments, same convention as every other planner
// difficulty/time field in this catalog.
const bastion = getPlannerData("bastion");

test("getPlannerData('bastion') returns real planner data with 24 curated achievements", () => {

    assert.ok(bastion, "expected real planner data for bastion");
    assert.ok(Array.isArray(bastion.achievements));
    assert.strictEqual(bastion.achievements.length, 24);

});

test("every Bastion achievement has a unique id from 1 to 24 and a unique apiname", () => {

    const ids = bastion.achievements.map(a => a.id);
    const apinames = bastion.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 24 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 24);
    assert.strictEqual(new Set(apinames).size, 24);

});

test("every Bastion achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

    for (const achievement of bastion.achievements) {

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

test("every one of the 19 officially-described Bastion achievement name+description pairs matches the live GetSchemaForGame response", () => {

    // The 5 hidden achievements are excluded here - Steam never exposes
    // a public description for them - and covered by their own
    // dedicated test below instead.
    const officialAchievements = [
        ["The Stranger", "Complete the Wharf District"],
        ["The End", "Complete the story"],
        ["Calamity Kid", "Complete the story in New Game Plus"],
        ["Mind Voyager", "Complete each trip to Who Knows Where"],
        ["Kid-at-Arms", "Use the Forge to apply at least one upgrade to every weapon"],
        ["Pet Sitter", "Get four different domesticated creatures in the Bastion"],
        ["Vigilante", "Complete at least 50 percent of the Vigils in the Memorial"],
        ["Altruist", "Complete 100 percent of the Vigils in the Memorial"],
        ["Man-at-Arms", "Use the Forge to fully upgrade every weapon."],
        ["Whatever's Out There", "Complete the Kid's Dream with five or more Shrine Idols invoked."],
        ["Just Like That", "Complete the Kid's Dream with all ten Shrine Idols invoked."],
        ["Lock Yourself In", "Complete the Singer's Dream with five or more Shrine Idols invoked."],
        ["Calamity All Around", "Complete the Singer's Dream with all ten Shrine Idols invoked."],
        ["A Lasting Peace", "Complete the Survivor's Dream with five or more Shrine Idols invoked."],
        ["Ashes in the Sky", "Complete the Survivor's Dream with all ten Shrine Idols invoked."],
        ["Ride the Wind", "Use the Skyway in the Wharf District."],
        ["Hard Bargain", "Earn a total of at least 1,000,000 points in Score Attack Mode"],
        ["All in the Mind", "Complete the Stranger's Dream with five or more Shrine Idols invoked."],
        ["About the Author", "Complete the Stranger's Dream with all ten Shrine Idols invoked."]
    ];

    assert.strictEqual(officialAchievements.length, 19, "sanity check on this test's own reference list");

    const hiddenNames = new Set(["The Survivor", "The Singer", "The Ura", "The Beginning", "Turret Opera"]);

    const dataPairs = bastion.achievements
        .filter(a => !hiddenNames.has(a.name))
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});

test("the 5 Steam-silent hidden achievements each still have their own real name and a non-empty curatorial description", () => {

    const zulf = bastion.achievements.find(a => a.apiname === "AchZulf");
    const zia = bastion.achievements.find(a => a.apiname === "AchZia");
    const attack = bastion.achievements.find(a => a.apiname === "AchAttack");
    const endB = bastion.achievements.find(a => a.apiname === "AchEndB");
    const turret = bastion.achievements.find(a => a.apiname === "AchPortalTurret");

    assert.ok(zulf && zulf.name === "The Survivor" && zulf.description.length > 0);
    assert.ok(zia && zia.name === "The Singer" && zia.description.length > 0);
    assert.ok(attack && attack.name === "The Ura" && attack.description.length > 0);
    assert.ok(endB && endB.name === "The Beginning" && endB.description.length > 0);
    assert.ok(turret && turret.name === "Turret Opera" && turret.description.length > 0);

});

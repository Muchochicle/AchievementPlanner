import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/banishers-ghosts-of-new-eden.json - 43 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1493640 (fetched through this app's own services/steamApi.js).
// Hidden achievements ship no Steam description; their description here is
// researched from community 100% guides and cited in the frontend guide
// header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("banishers-ghosts-of-new-eden");

test("getPlannerData('banishers-ghosts-of-new-eden') returns real planner data with 43 curated achievements", () => {

    assert.ok(game, "expected real planner data for banishers-ghosts-of-new-eden");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 43);

});

test("every Banishers: Ghosts of New Eden achievement has a unique id from 1 to 43 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 43 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 43);
    assert.strictEqual(new Set(apinames).size, 43);

});

test("every Banishers: Ghosts of New Eden achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 43 Banishers: Ghosts of New Eden achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Farmer's Life", "Complete the same Ritual site 10 times (intensity level 10)"],
        ["A Perfect Tool", "Upgrade an item at rank 7 (Relic)"],
        ["A Promise made", "Story/choice marker - make the first pact, described here spoiler-free (a branching choice)."],
        ["American Vampyr", "Find the old writings by the Brotherhood of Saint Paul's Stole"],
        ["Banishing Move", "Defeat 50 enemies with a Banishment"],
        ["Bookworm", "Collect all Collectibles in New Eden"],
        ["Bring it on!", "Equip 8 items at rank 7 (Relic) at the same moment"],
        ["Broken Puppet", "Resolve a major haunting - 'Broken Puppet', described here spoiler-free."],
        ["Burden of Command", "Story outcome marker - Pennington's outcome, described here spoiler-free (a branching choice)."],
        ["Cases Closed", "Solve all the Haunting Cases of New Eden"],
        ["Catch 'Em All", "Collect all 88 available equipments"],
        ["Counterattack", "Defeat 3 enemies with a post parry attack in a single encounter"],
        ["Cursed Locksmith", "Unlock all cursed chests in New Eden"],
        ["Death is a journey", "Successfully bring Antea back to life"],
        ["Demolition Man", "Destroy 300 destructibles"],
        ["Farewell my love", "Successfully give Antea her ascent"],
        ["Final Promise", "Story/choice marker - make the final pact, described here spoiler-free (a branching choice)."],
        ["Float like a Butterfly", "Defeat 8 enemies in a single encounter without being hit"],
        ["Full Potency", "Reach level 25"],
        ["Gimme Shelter", "Activate all Shelters in New Eden"],
        ["Hidden Door", "Unlock the secret passage in Bligh Manor"],
        ["Injustice For All", "Resolve a major haunting - 'Injustice For All', described here spoiler-free."],
        ["Judged Jury", "Story outcome marker - Haskell's outcome, described here spoiler-free (a branching choice)."],
        ["Locksmith", "Unlock all locked chests in New Eden"],
        ["Master Banishers", "Unlock all achievements"],
        ["Nazuku no more", "Resolve a major haunting - 'Nazuku no more', described here spoiler-free."],
        ["No more Beast", "Resolve a major haunting - 'No more Beast', described here spoiler-free."],
        ["Old moss-head", "Resolve a major haunting - 'Old moss-head', described here spoiler-free."],
        ["Outburst", "Defeat 3 enemies with a single Outburst"],
        ["Prospector", "Complete all treasure maps"],
        ["Raider", "Complete all Haunted Grounds of New Eden"],
        ["Reunion", "Resolve a major haunting - 'Reunion', described here spoiler-free."],
        ["Right on Target", "Defeat 5 enemies with a weakspot hit (Rifle) in a single encounter"],
        ["Rose's fate", "Story outcome marker - Rose's fate, described here spoiler-free (a branching choice)."],
        ["Round Figure", "Collect 10 000 Pieces of Eight"],
        ["Second Death", "Defeat the Specter of a banished ghost in the Void"],
        ["Soulmates", "Defeat 50 enemies while Fusion is active"],
        ["Teacher's Pet", "Find 15 Bibles for Hugh Batcheler"],
        ["Teamwork", "Defeat at least 4 enemies with Red and at least 4 enemies with Antea in a single encounter"],
        ["The Curse is lifted", "Resolve a major haunting - 'The Curse is lifted', described here spoiler-free."],
        ["The Good Hunter", "Find 50 Soul Grabbers in New Eden"],
        ["Unlimited Power", "Upgrade an item"],
        ["Until a cure is found", "Freeze 5 enemies in a single encounter"],
    ];

    assert.strictEqual(officialAchievements.length, 43, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});

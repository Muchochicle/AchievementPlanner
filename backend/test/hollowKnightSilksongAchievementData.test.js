import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/hollow-knight-silksong.json - 52 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1030300 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("hollow-knight-silksong");

test("getPlannerData('hollow-knight-silksong') returns real planner data with 52 curated achievements", () => {

    assert.ok(game, "expected real planner data for hollow-knight-silksong");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 52);

});

test("every Silksong achievement has a unique id from 1 to 52 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 52 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 52);
    assert.strictEqual(new Set(apinames).size, 52);

});

test("every Silksong achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 52 Silksong achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Arsenal", "Acquire all Tools"],
        ["Bonded", "Learn the Beastling Call by defeating the Bell Eater in Act 3, letting the Bell Beast carry you between Bellways."],
        ["Bound", "Bind your first Silk Skill"],
        ["Cartographer", "Acquire a map of each area"],
        ["Claimed", "Claim your first Crest"],
        ["Completion", "Achieve 100% game completion and finish the game"],
        ["Connected", "Open all of Pharloom's Bellways"],
        ["Consumed", "Claim all Crests"],
        ["Diva", "Defeat Skarrsinger Karmelita in the new Far Fields area during Act 3."],
        ["Entwined", "Bind Eva in Weavenest Atla, completing her questline."],
        ["Equipped", "Acquire your first Tool"],
        ["Extended", "Acquire all Spool Fragments"],
        ["Fanatic", "Defeat Widow"],
        ["Fatal Resolve", "Complete the Fatal Resolve wish: obtain Needle Strike from Pinstress's house, then defeat Pinstress at Mount Fay."],
        ["Flea Finder", "Rescue half of Pharloom's lost fleas"],
        ["Fleafriend", "Rescue all of Pharloom's lost fleas and receive their final gift"],
        ["Glutton", "Satiate the Grand Gourmand"],
        ["Granted", "Grant your first wish"],
        ["Grey Ghost", "Defeat Phantom in the Exhaust Organ, reached through The Mist in Sinner's Road."],
        ["Harmonious", "Learn the Citadel's Threefold song"],
        ["Heretic", "Defeat the First Sinner in The Slab, after acquiring the Key of the Apostate."],
        ["Hero's Call", "Complete the Hero's Call wish: find Garmond and Zaza in Far Fields three times, then defeat Lost Garmond in the Blasted Steps."],
        ["Judge", "Defeat the Last Judge"],
        ["Keen Hunter", "Grant Nuu's wish"],
        ["Lamenter", "Save the Green Prince, then defeat the Clover Dancers in Verdania during Act 3."],
        ["Last Dance", "Defeat the Cogwork Dancers"],
        ["Liberated", "Defeat the Bell Beast"],
        ["Masked", "Acquire all Mask Shards"],
        ["Passing of the Age", "Grant the Herald's wish and defeat the final boss at Act 3's conclusion - the secret ending."],
        ["Pharloom's Welcome", "Defeat Lace in Deep Docks"],
        ["Protected", "Acquire 4 Mask Shards"],
        ["Regenerated", "Acquire all Silk Hearts"],
        ["Remembrance", "Claim the Everbloom from within a distant memory: collect all three Old Hearts and clear the Red Memory."],
        ["Resident", "Acquire your own Bellhome"],
        ["Restored", "Acquire 2 Spool Fragments"],
        ["Seed", "Defeat Nyleth in a hidden section of the Grand Gate during Act 3."],
        ["Servant", "Defeat Fourth Chorus"],
        ["Sister of the Void", "After obtaining all Old Hearts, defeat Lost Lace in The Abyss to free Pharloom - the true ending."],
        ["Snared Silk", "Complete the Silk and Soul wish, then defeat Grand Mother Silk and entrap her with the Soul Snare - the bad ending."],
        ["Speed Completion", "Achieve 100% game completion and finish the game in under 30 hours"],
        ["Speedrunner", "Complete the game in under 5 hours"],
        ["Steel Heart", "Achieve 100% game completion and finish the game in Steel Soul mode"],
        ["Steel Soul", "Finish the game in Steel Soul mode"],
        ["Tragedian", "Defeat Trobbio"],
        ["Trail's End", "Grant Shakra's wish"],
        ["Transported", "Open all of the Citadel's Ventrica Stations"],
        ["True Hunter", "Receive the Hunter's Memento"],
        ["Twisted Child", "Complete the Rite of Rebirth wish to curse Hornet, then defeat Grand Mother Silk while cursed."],
        ["Tyrant", "Defeat Crust King Khann inside the Coral Tower during Act 3."],
        ["Weaver Queen", "Defeat Grand Mother Silk and bind her power - the standard ending."],
        ["White Knight", "Defeat Lace in the Cradle"],
        ["Woven", "Bind all Silk Skills"],
    ];

    assert.strictEqual(officialAchievements.length, 52, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});

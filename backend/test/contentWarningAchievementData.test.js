import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/content-warning.json - 48 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 2881650 (fetched through this app's own services/steamApi.js).
// This game has no hidden achievements: all 48 ship a real, official
// Steam description, quoted verbatim below.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("content-warning");

test("getPlannerData('content-warning') returns real planner data with 48 curated achievements", () => {

    assert.ok(game, "expected real planner data for content-warning");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 48);

});

test("every Content Warning achievement has a unique id from 1 to 48 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 48 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 48);
    assert.strictEqual(new Set(apinames).size, 48);

});

test("every Content Warning achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 48 Content Warning achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const officialAchievements = [
        ["Ancient Gesture", "Use Ancient Gesture"],
        ["Any% Done", "Die Within 30 Seconds"],
        ["Archivist", "Save A Spööktube Video"],
        ["Bat Nap", "Sleep In The Ceiling"],
        ["Behind the Screens", "Open The Monitor Room"],
        ["Big Slap", "Film Big Slap"],
        ["Big Zap", "Zap Big Slap"],
        ["Bouncy Break", "Unlock Trampoline"],
        ["Breaking News!", "Finish Reporter Network Deal"],
        ["Certified Medic", "Revive A Friend Using The Defib"],
        ["Dancing Queen", "Finish Dance Video Network Deal"],
        ["Did you see that?", "Film Flicker"],
        ["Don’t Try This at Home", "Finish Donkey Network Deal"],
        ["Eh, Guys?", "Got Left Behind (Dive bell goes up without you)"],
        ["Ewan Conan", "Film The Streamer"],
        ["Explosive Content", "Finish HoldTheBombo Network Deal"],
        ["Face Off", "Change Face"],
        ["Gotta Film 'Em All", "Finish MultiMonster Network Deal"],
        ["Hat Trick", "Buy All Hats"],
        ["Home Theater", "Unlock Cinema"],
        ["Jello'd", "Get Taken By Jello"],
        ["Let’s Get Loud!", "Scare The Ear By Being Loud"],
        ["Lost & Found", "Recover A Lost Camera"],
        ["Money Money", "Finish MoneyMoney Network Deal"],
        ["Norf or Nothing", "Finish Norf Gun Network Deal"],
        ["Not a Bot!", "Perform A Catchya"],
        ["On Air", "Unlock Podcast Studio"],
        ["Oops!", "Slip On The Trampoline"],
        ["Party Time!", "Party Time"],
        ["Peace & Love", "Use Peace Emote"],
        ["Pocket Change", "Earn $100"],
        ["Rolling in It", "Earn $100,000"],
        ["Shroomed Out", "Got Curse Of Shroom"],
        ["Sigma", "Listen to Phonk"],
        ["Sir Slap", "Summon Big Slap"],
        ["Spööktube Bronze", "Get 10k Views On A Spööktube Video"],
        ["Spööktube Cloutlord", "Reach 2,5M Weekly Views"],
        ["Spööktube Famous", "Reach 500k Weekly Views"],
        ["Spööktube Gold", "Get 500k Views On A Spööktube video"],
        ["Spööktube Master", "Uploaded 100 Videos To Spööktube"],
        ["Spööktube Pioneer", "Uploaded Your First Video To Spööktube"],
        ["Spööktube Platinum", "Get 1M Views On A Spööktube video"],
        ["Spööktube Sensation", "Reach 100k Weekly Views"],
        ["Spööktube Silver", "Get 100k Views On A Spööktube video"],
        ["Spööktube Superstar", "Reach 1M Weekly Views"],
        ["Swimfluencer", "Unlock Pool"],
        ["Verified Human", "Perform 10 Catchyas"],
        ["We’ll Fix It in Post", "Unlock Green Screen"],
    ];

    assert.strictEqual(officialAchievements.length, 48, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});

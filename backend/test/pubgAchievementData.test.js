import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/pubg-battlegrounds.json - 37 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 578080 (fetched through this app's own services/steamApi.js).
// This game has no hidden achievements: all 37 ship a real, official
// Steam description, quoted verbatim below.
// difficulty/estimatedTime/missable remain curatorial judgments, the same
// convention as every other planner difficulty/time field in this catalog.
const game = getPlannerData("pubg-battlegrounds");

test("getPlannerData('pubg-battlegrounds') returns real planner data with 37 curated achievements", () => {

    assert.ok(game, "expected real planner data for pubg-battlegrounds");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 37);

});

test("every PUBG: BATTLEGROUNDS achievement has a unique id from 1 to 37 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 37 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 37);
    assert.strictEqual(new Set(apinames).size, 37);

});

test("every PUBG: BATTLEGROUNDS achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 37 PUBG: BATTLEGROUNDS achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const officialAchievements = [
        ["Agent 48", "Kill 50 players with suppressed weapons."],
        ["Airborne", "Jump out from an airplane 101 times."],
        ["Blood on My Hands", "Kill a player by any means."],
        ["Collateral Damage", "Kill 100 players by any means."],
        ["CQB Expert", "Kill 50 players with a shotgun, a submachine gun, and/or a pistol."],
        ["CQB Master", "Kill 200 players with a shotgun, a submachine gun, and/or a pistol."],
        ["CQB Novice", "Kill 10 players with a shotgun, a submachine gun, and/or a pistol."],
        ["Cruising with the Enemy", "Get into a vehicle where an enemy player is already in."],
        ["Devil Inside Me", "Kill 10 players by any means."],
        ["Don't Pan Me Bro!", "Kill another player with the frying pan."],
        ["Dynamic Duo", "Obtain a Chicken Dinner in Duos."],
        ["Fantastic Four", "Obtain a Chicken Dinner in Squads."],
        ["Fast and Furious", "Kill 10 players by hitting them with a vehicle."],
        ["First Blood", "Get the first kill of a match."],
        ["First Come, First Served", "Loot 50 items from the carepackage."],
        ["Fury Road", "Kill 10 players with a gun while in a vehicle."],
        ["Ghost", "Equip a suppressed weapon in every weapon slot. Let's find out which weapon is suppressed!"],
        ["Guardian Angel", "Revive a knocked-downed teammate."],
        ["Health Junkie", "Charge your boost gauge to the max with energy drink and painkiller overdose."],
        ["Killing Spree", "Kill at least 4 players in a single match."],
        ["Last Survivor", "Win a game 10 times."],
        ["Long and Winding Road", "Kill 1000 players by any means."],
        ["Marksman Expert", "Kill 30 players with an assault rifle and/or a sniper rifle from over 100 meters away."],
        ["Marksman Master", "Kill 100 players with an assault rifle and/or a sniper rifle from over 100 meters away."],
        ["Marksman Novice", "Kill 10 players with an assault rifle and/or a sniper rifle from over 100 meters away."],
        ["Nade King Expert", "Kill 30 players with grenades."],
        ["Nade King Master", "Kill 50 players with grenades."],
        ["Nade King Novice", "Kill 10 players with grenades."],
        ["Now You See Me, Now You Don't", "Equip a ghillie suit for the first time."],
        ["Okay, Now I'm Ready", "Equip a Lv.3 Helmet, Military Vest, and Backpack in 10 matches."],
        ["Pacifist", "Reach the top 10 without killing anyone."],
        ["Shoot the Knee", "Kill 10 players with the crossbow."],
        ["The First Rule Is…", "Kill 20 players with bare hands."],
        ["Top 10", "Reach the top 10 10 times."],
        ["Trigonometry Involved", "Headshot and kill 10 enemy players with a sniper rifle."],
        ["Winner Winner Chicken Dinner!", "Obtain a Chicken Dinner in Solo."],
        ["You Complete Me", "Wear the outfit of a dead player."],
    ];

    assert.strictEqual(officialAchievements.length, 37, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});

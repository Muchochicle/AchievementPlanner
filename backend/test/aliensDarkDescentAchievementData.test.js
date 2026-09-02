import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/aliens-dark-descent.json - 45 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1150440 (fetched through this app's own services/steamApi.js).
// Hidden achievements ship no Steam description; their description here is
// researched from community 100% guides and cited in the frontend guide
// header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("aliens-dark-descent");

test("getPlannerData('aliens-dark-descent') returns real planner data with 45 curated achievements", () => {

    assert.ok(game, "expected real planner data for aliens-dark-descent");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 45);

});

test("every Aliens: Dark Descent achievement has a unique id from 1 to 45 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 45 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 45);
    assert.strictEqual(new Set(apinames).size, 45);

});

test("every Aliens: Dark Descent achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 45 Aliens: Dark Descent achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Abysmal Horrors", "Story progress marker - complete Mission 12, the finale, described here spoiler-free."],
        ["Archivist", "Gather all datapads."],
        ["Bandage Lover", "Advance a Medic to level 10."],
        ["Call Me Snake", "Kill an enemy before they detect the squad."],
        ["Chalk It Up To Experience", "Have a marine fitted with at least two prostheses."],
        ["Cleaning Lethe, One Nest At A Time", "During a campaign, kill 100 Xenomorphs."],
        ["Colonial Barrels", "Kill an enemy by using an explosive barrel."],
        ["Come on, You Wanna Live Forever?", "Advance a Sergeant to level 10."],
        ["Damn Dude, You Gotta Lose Some Weight!", "Secure an unconscious marine."],
        ["Deep Into Insanity", "Story progress marker - complete Mission 8, described here spoiler-free."],
        ["El Riesgo Siempre Vive", "Advance a Gunner to level 10."],
        ["Excavating The Truth", "Story progress marker - complete Mission 11, described here spoiler-free."],
        ["Fair And Square", "Finish the game on Hard."],
        ["First Steps Into Madness", "Story progress marker - complete Mission 2, described here spoiler-free."],
        ["Flawless Victory", "Keep all of your marines alive during a campaign."],
        ["Frontliner", "Advance a Recon to level 10."],
        ["Hardened In The Heat Of Battle", "During a campaign, advance each Marine Class to level 10."],
        ["Harper's Hell", "Story progress marker - complete Mission 3, described here spoiler-free."],
        ["Heavy Steps", "Lure a Queen into a mine."],
        ["Keep 'Em Coming", "Kill every Alien of a Massive Onslaught."],
        ["Living Nightmare", "Story progress marker - complete Mission 6, described here spoiler-free."],
        ["Making a Stand", "Story progress marker - complete Mission 4, described here spoiler-free."],
        ["Omelette Du Fromage", "Destroy 4 eggs with one grenade or an RPG shot."],
        ["One For Every Occasion", "During a campaign, unlock every weapon."],
        ["People Person", "During a campaign, secure 5 survivors."],
        ["Perfect Enhancements", "During a campaign, unlock every Xeno Tech."],
        ["Perfect Organism", "Finish the game on \"No One Can Hear Them Scream\" mode."],
        ["Recouped Investment", "Have one Sentry kill at least 10 aliens."],
        ["Regicide", "Kill the Xenomorph Queens during the campaign, described here spoiler-free."],
        ["Snatched Out", "Prevent a marine from being Abducted."],
        ["Something Lurks Under The Hills", "Story progress marker - complete Mission 1, described here spoiler-free."],
        ["Stuff Of Nightmares", "Save a marine from being incubated by extracting the embryo in time."],
        ["The Cable Guy", "Advance a Tecker to level 10."],
        ["The Darwin Era Was Here", "Story progress marker - complete Mission 7, described here spoiler-free."],
        ["The More The Merrier", "Unlock the APC vehicle."],
        ["The Passenger", "Story progress marker - complete Mission 9, described here spoiler-free."],
        ["The Shrink Hates Me", "Remove a Trait from a marine."],
        ["The Spire", "Story progress marker - complete Mission 10, described here spoiler-free."],
        ["The True Experience", "In any mission, complete at least one objective with only one marine in the squad."],
        ["This Ain't No Picnic", "Finish the game on Nightmare."],
        ["This Is Hayes, Pioneer Station, Signing Off", "Story progress marker - complete the Prologue, described here spoiler-free."],
        ["This Was No Papercut", "Save a marine from dying of Bleeding."],
        ["This Went Smoothly", "Finish the game on Medium."],
        ["Use The Bumper, That's What It's For", "Run an enemy over with the APC."],
        ["Where It All Begun", "Story progress marker - complete Mission 5, described here spoiler-free."],
    ];

    assert.strictEqual(officialAchievements.length, 45, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});

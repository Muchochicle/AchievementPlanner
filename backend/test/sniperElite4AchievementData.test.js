import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/sniper-elite-4.json - 85 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 312660 (fetched through this app's own services/steamApi.js). 1 achievement(s) are hidden and ship with no official
// description; those keep a curatorial description instead, and every
// other one is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("sniper-elite-4");

test("getPlannerData('sniper-elite-4') returns real planner data with 85 curated achievements", () => {

    assert.ok(game, "expected real planner data for sniper-elite-4");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 85);

});

test("every Sniper Elite 4 achievement has a unique id from 1 to 85 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 85 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 85);
    assert.strictEqual(new Set(apinames).size, 85);

});

test("every Sniper Elite 4 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 85 Sniper Elite 4 achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["0 Days Without Incident", "Target Führer - Kill Hitler with any explosive item/trap"],
        ["A Bird in the Hand...", "Shoot all Stone eagles"],
        ["A Most Singular Expert", "Master a single weapon"],
        ["Albert Hall", "Target Führer - Kill Hitler with a testicle shot"],
        ["All Inclusive", "Inception - Complete all the challenges"],
        ["Ambush King", "Kill 100 enemies with traps"],
        ["Are You Insane?", "Complete the entire main campaign on Authentic Difficulty"],
        ["Atomic", "Obliteration - Complete all the Challenges"],
        ["Base Desires", "Target Führer - Complete all Optional Objectives and destroy the base"],
        ["Better than the Best", "Complete the entire main campaign on Authentic Plus difficulty with no manual saves."],
        ["Challenge Accepted", "Complete all challenges in a single mission"],
        ["Channel Changer", "Take control of the enemy held radio and capture it with just seconds remaining"],
        ["Cipher Elite", "Infiltration - Complete the Mission"],
        ["Competitive Nature", "Complete at least one match in each mode"],
        ["Compounding Your Success", "Complete Overwatch 1"],
        ["Debriefed", "Infiltration - Multi-Kill the Officers during the tactical briefing in the auditorium"],
        ["Deja View to a Kill", "Target Führer - Kill Hitler"],
        ["Demolition Fan", "Satchel Charge 25 manned vehicles/pillboxes/pantherturms"],
        ["Dirty Tactics", "Kill an enemy via a booby trap"],
        ["Dogface", "Reach character rank 5"],
        ["Down Periscope", "Target Führer - Kill Hitler with the submarine"],
        ["Everything by Halves", "Complete 50% of all Secondary Objectives in the Main Campaign"],
        ["Faust of Fury", "Infiltration - Kill the Valkyrie Squad reinforcements using only the Neunfaust"],
        ["Final Reckoning", "Target Führer - Complete the Mission"],
        ["Fingers off Triggers", "Obliteration - From the bunker reach the extraction point without firing a shot"],
        ["Fire and Brimstone", "Kill 5 enemies with a single artillery strike"],
        ["Fish-in-a-Barrel", "Infiltration - Kill all enemies on the island with explosives"],
        ["Following Orders", "Complete All Secondary Objectives in the Main Campaign"],
        ["Full Marks", "Infiltration - Complete all the Challenges"],
        ["Ghost Town", "Obliteration - Kill everyone"],
        ["Gotta Cap 'em All", "Kill one of each infantry type"],
        ["Greatest Hits", "Find all sniper reports"],
        ["Heads Up", "Inception - Destroy the tank with a crane drop"],
        ["Hot Pot", "Target Führer - Kill Hitler with the casserole"],
        ["I Love Science", "Obliteration - Extract Wernicke, Hänel, and Kehrer in one playthrough"],
        ["I See You!", "Fully Target Focus 100 times"],
        ["Jarhead", "Reach character rank 25"],
        ["Karl Shot First", "Inception - Get to the destroyer and launch the torpedo without being spotted"],
        ["Keeping your Distance", "Total kill distance of 100 Kilometres"],
        ["King of the World", "Inception - Dump Major Volker Grün's body into the water from the end of a boat"],
        ["Knife to a Gun Fight", "Inception - Melee takedown all the snipers"],
        ["Master-At-Arms", "Fully master a rifle, secondary weapon and pistol"],
        ["Minesweeper", "Target Führer - Blow up Hitler on VIP boat with a sea mine"],
        ["Mission Possible", "Complete the entire main campaign on Cadet difficulty"],
        ["Mother knows best", "Complete all Mother Hen secondary Objectives in the main game"],
        ["My Rifle is My Best Friend", "Complete a main campaign mission with rifle kills only"],
        ["Never, never, never give up", "Complete Mission 6"],
        ["No compromise is possible", "Complete Mission 3"],
        ["On Yer Head, Son", "Kill enemies with 3 different environmental drop kills"],
        ["Overkill", "Obliteration - Kill all enemy snipers with explosives"],
        ["Plans are nothing; planning is everything", "Complete Mission 7"],
        ["Read This!", "Infiltration - Eye shot the book burning Officer"],
        ["Rockin' the Rifle", "500 Kills with a Rifle"],
        ["Save Keys to Open Doors", "Inception - Unlock the train door using the keys found on the officers"],
        ["Saving Private Reiner", "Obliteration - Don't kill any members of the Reiner family"],
        ["Set Europe ablaze!", "Complete Mission 4"],
        ["Shore Leave", "Inception - Complete the mission"],
        ["Silent But Deadly", "Kill 100 enemies with suppressed ammo"],
        ["Silent but Violent", "Target Führer - Kill Hitler and exfiltrate without being detected"],
        ["Sniper Interrupted", "Kill 5 Snipers before they see you"],
        ["Still Ain't Got Time to Bleed", "Complete a single player mission without using a Medikit or Bandage"],
        ["Storm Chaser", "Obliteration - Complete the Mission"],
        ["STRIKE!!", "Target Führer - Kill Hitler with a torpedo rack"],
        ["Success is not final", "Complete Mission 8"],
        ["Survival of the Fittest", "Complete all waves in a survival session"],
        ["The Best of the Best of the Best", "Complete the entire main campaign on Authentic difficulty with no manual saves"],
        ["The Collector", "Collect all Last Letters, Letters From Home, and Letters To Home in the main game"],
        ["The Eagle Has Landed", "Target Führer - Crush Hitler with the Eagle at the ceremony"],
        ["The end of the beginning", "Complete Mission 1"],
        ["The Masterful Marksman", "Complete the entire main campaign on Marksman difficulty"],
        ["The Nutcracker - Sweet!", "Incapacitate an enemy, then shoot them in the testicles"],
        ["The Organ Grinder", "Get at least one killshot on every organ"],
        ["The Path of Most Resistance", "At the end of Mission 8 (Allagra Fortress), let the escaping aircraft take off, then shoot it down in flight with a bolt-action rifle instead of disabling it on the runway."],
        ["The Pistol Pro", "100 Kills with a Pistol"],
        ["The Real Deal", "Complete the entire main campaign on Sniper Elite difficulty"],
        ["The Secondary Specialist", "250 Kills with a Secondary Weapon"],
        ["Total War", "Target Führer - Complete all challenges"],
        ["Train, Set and Match", "Complete Overwatch 2"],
        ["Untouchable", "Infiltration - Complete the Mission without being shot by a Sniper"],
        ["Variety is the Spice of Death", "Get a kill with every weapon"],
        ["Veteran", "Reach character rank 50"],
        ["We shall fight on the beaches", "Complete Mission 2"],
        ["We shall not fail or falter", "Complete Mission 5"],
        ["Weaver's Warrior", "Complete all OSS Secondary Objectives in the Main Campaign"],
        ["You know you're REALLY insane, right?", "Complete the entire main campaign on Authentic Plus difficulty"],
    ];

    assert.strictEqual(officialAchievements.length, 85, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});

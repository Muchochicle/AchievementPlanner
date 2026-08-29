import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/f1-24.json - 50 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 2488620 (fetched through this app's own services/steamApi.js).
// This game has no hidden achievements: all 50 ship a real, official
// Steam description, quoted verbatim below.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("f1-24");

test("getPlannerData('f1-24') returns real planner data with 50 curated achievements", () => {

    assert.ok(game, "expected real planner data for f1-24");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 50);

});

test("every F1 24 achievement has a unique id from 1 to 50 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 50 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 50);
    assert.strictEqual(new Set(apinames).size, 50);

});

test("every F1 24 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 50 F1 24 achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const officialAchievements = [
        ["99 Club", "Reach an overall driver rating of 99 with any driver"],
        ["A Great Weekend", "Be the fastest in all practice sessions, take pole position and win the race"],
        ["A Lump In My Throat", "Win the Drivers' Championship"],
        ["All Areas Covered", "In My Team, develop a component in every R&D Department"],
        ["All The Points", "Win a sprint race, Grand Prix and set the fastest lap in a single race weekend"],
        ["Crafty!", "Craft an item from a blueprint in F1® World"],
        ["Custom Hotshot", "Reach an overall driver rating of 80 with a custom driver"],
        ["Development Race", "Upgrade an item in F1® World"],
        ["Do I Recognise You?", "Achieve 55% Recognition or higher with any team in Driver Career"],
        ["Double Dutch", "As Max Verstappen, win a race at Circuit Zandvoort"],
        ["Downtown Snapper", "Take a photo using photomode at Jeddah, Melbourne, Baku, Miami, Monaco, Marina Bay and Las Vegas"],
        ["Everyone's a winner", "Unlock 30 stickers from the Champions category in the Compendium"],
        ["Express Your Fandom", "Equip a different Expression Label on your Super Licence profile"],
        ["Extra Curricular", "Complete all 4 Specialist goals in a single race weekend"],
        ["Front Row Friends!", "Lock out the front row with your friend in Two-Player Career"],
        ["Full English", "As Lando Norris, win a race at Silverstone in a McLaren"],
        ["GOAT", "Complete all accolades for any Driver"],
        ["Going Up", "Get promoted to a higher division in Ranked"],
        ["Got, got, got, got..", "Unlock 100 stickers in the Compendium"],
        ["Hey Big Fan Token Spender!", "Spend a total of 1000 Fan Tokens in F1® World"],
        ["In the Zone", "Be in the winning zone of either a Constructor or Driver Fanzone Room"],
        ["It's Getting Hot In Here", "Increase a rivalry to Heated status"],
        ["It's Not Me, It's You", "Increase a rivalry to Career Defining status"],
        ["Just Better", "Successfully defeat a rival in the Championship Narrative Rivalry type"],
        ["Laser Focused", "Reach a Focus Rating of 90"],
        ["Lights, Camera, Action!", "Save a captured highlight in Theatre Mode"],
        ["Mechanical Marvel", "Win the Constructors' Championship"],
        ["Not Making Friends", "Have 3 active rivalries with 3 different drivers"],
        ["Objectively Dynamic", "Complete 25 Dynamic Objectives"],
        ["One Of A Kind", "Equip a Unique Item in F1® World"],
        ["Pass The Spanner", "Equip an item in F1® World"],
        ["Perk-fection", "Earn 4 Perks from your Specialists as any driver in Driver Career"],
        ["Reach Out to the Fans", "Complete 10 Fan Liaison goals in F1® World"],
        ["Rise To The Challenge!", "Activate an R&D Scenario"],
        ["Safely Does It", "Complete your first Safety Rating A race in F1® World"],
        ["Showing Them How It's Done", "Win an online race"],
        ["Sign On The Dotted Line", "Agree to a multi-year contract with a team in Driver Career"],
        ["Silly Season", "Complete all 3 secret meetings and join that team at the end of the season"],
        ["Strong Relations", "Reach relationship level 3 with any Specialist in Driver Career"],
        ["Sum of its Parts", "Dismantle 50 items in F1® World"],
        ["Takes The Flag!", "Win your first race"],
        ["Target Acquired", "Set a target 3 above your current rating and achieve it during a season"],
        ["The First Of Many", "Earn your first Accolade in Driver Career"],
        ["Tough Choices", "Lock-In your Fanzone choices for a new F1® World season 3 times"],
        ["Tremendous Trio", "Line up in an optimal grid position, make an optimal pit stop, and set the fastest lap"],
        ["True Fan", "Earn 10,000 Fan Points in a single F1® World season"],
        ["Up And Running", "Redeem a completed Goal in F1® World"],
        ["Up At The Pointy End", "Achieve your first pole position"],
        ["Vending Machine", "Complete a goal from each of the 7 Vendors in F1® World"],
        ["Well Seasoned", "Complete 24 Races"],
    ];

    assert.strictEqual(officialAchievements.length, 50, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});

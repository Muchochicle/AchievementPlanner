import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/dirt-rally-2.json - 71 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 690790 (fetched through this app's own services/steamApi.js).
// 70 of 71 ship a real, official Steam description, quoted
// verbatim below. The 1 hidden achievement ship no Steam description;
// its condition here is curatorial, cross-checked against the game's
// wiki plus community 100% guides, and kept spoiler-light.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("dirt-rally-2");

test("getPlannerData('dirt-rally-2') returns real planner data with 71 curated achievements", () => {

    assert.ok(game, "expected real planner data for dirt-rally-2");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 71);

});

test("every DiRT Rally 2.0 achievement has a unique id from 1 to 71 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 71 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 71);
    assert.strictEqual(new Set(apinames).size, 71);

});

test("every DiRT Rally 2.0 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 70 officially-described DiRT Rally 2.0 achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const hiddenApinames = new Set([
        "71",
    ]);

    assert.strictEqual(hiddenApinames.size, 1, "sanity check - DiRT Rally 2.0 has 1 hidden achievement");

    const officialAchievements = [
        ["...Flatout", "Complete every scenario on very hard difficulty."],
        ["A Household Name", "Finish a Custom Championship"],
        ["A Noteworthy AdVANTAGE", "Win 5 events in the Aston Martin V8 Vantage GT4"],
        ["Adaptable", "Complete a stage in Dry, Overcast, Rain and Wet conditions"],
        ["Against the Clock", "Complete 10 Time Trial events"],
        ["An Expensive Hobby", "Earn 1,000,000 Credits"],
        ["Antilag Engaged", "Purchase your first FIA World Rallycross Supercar"],
        ["Around the Gloeb", "Complete an event at every unique location"],
        ["Back to the 80s", "Win your first Back to the '80s Historic Championship"],
        ["Bringing the Thunder", "Win 10 stages in the rain"],
        ["Building a Legacy", "Roll the SUBARU Legacy RS 3 times on a single stage in Finland, and finish."],
        ["CAUTION, Don't Cut", "Complete a stage without damaging your car"],
        ["Classic Rally 2.0", "Win your first Classic Rally Historic Championship"],
        ["Clown Car", "Complete 50 Joker laps"],
        ["Consistency is Key", "Complete 3 consecutive laps in a Rallycross Qualifier all within a second of one another"],
        ["Don't Knock my Line", "Spin 3 times on a stage and win"],
        ["Eat my DiRT", "Complete 20 Custom Events"],
        ["Fine Tuned", "Create and save your own tuning setup"],
        ["Finnesse", "Roll your car and continue in Finland."],
        ["Fire Up That Car... Again", "Finish in the top tier of a Daily Challenge Community Event in an Audi Sport quattro S1 E2."],
        ["Flight School", "Complete 25 jumps of 30m or more"],
        ["Flying Finn", "Get airborne 100 times in Finland.\t"],
        ["Focused", "Win your first event with Hardcore damage enabled"],
        ["Going the Extra Mile", "Complete 2 Joker laps and win"],
        ["Golf Club", "Win 3 events in the Volkswagen Golf GTI 16V"],
        ["Greece Lightning", "Win an Event in Greece by over a minute with Hardcore Damage enabled.\t"],
        ["Group B Master", "Win the Group B 4WD Masters Championship"],
        ["Have a Break", "Buy a Kitcar"],
        ["If in Doubt...", "Complete every scenario on any difficulty."],
        ["In Its Element", "Complete the 1995 Wales Scenario in Colin McRae's SUBARU Impreza 1995."],
        ["It Would Be Bakke'RUDE Not To", "Win every Qualifier, the Semi Final, and Final in a World RX event"],
        ["Keepin it Real", "Complete 15 Rally Stages with Hardcore Damage enabled"],
        ["Kickin' 80s Vibe", "Complete your first Event in the BMW M1 Procar Rally"],
        ["Launch Event", "Complete a lap in under 39 seconds at the Yas Marina Circuit, Abu Dhabi, in a 2019 RX Supercar"],
        ["Living the Dream", "Purchase all five Group B 4WD vehicles"],
        ["Modern Art", "Win your first Modern Classics Historic Championship"],
        ["Monster Energy Supercharge Award", "Get the fastest start in a World RX Final"],
        ["Mr Rallycross", "Win 3 Rallycross Events in the Ford RS200 Evolution"],
        ["On the Ladder", "Win your first My Team event"],
        ["On Thin Ice", "Complete a clean stage in Monte Carlo"],
        ["Past and Present", "Win your first Present Day Historic Championship"],
        ["Polo Club", "Finish 5 events in the Volkswagen Polo GTI R5"],
        ["Pro Driver", "Win an event in the Renault Megane RS RX"],
        ["Qualified", "Complete your first AI Challenge"],
        ["Rainmeister", "Take victory in Hell, Norway, in the rain"],
        ["Rally North America", "Complete 3 Rally events in New England with the SUBARU WRX STI NR4"],
        ["Rock 'n' Roll", "Drive 66 km at Monte Carlo in the DS 21"],
        ["Rocky Road", "Complete 10 stages in Argentina"],
        ["SEND IT", "Win at Estering in Kevin Eriksson's Ford Fiesta Rallycross (MK8)"],
        ["Some Minor Wear and Tear", "Purchase 5 cars from the Classifieds"],
        ["Speedy Machine", "Complete a Full Format Rallycross Event at Silverstone"],
        ["Sunday Driver", "Win a World Rallycross Championship Final with AI set to 100, in cockpit view and assists disabled"],
        ["Taking the Scenic Route", "Win a Rally event in New Zealand"],
        ["That's Dedication", "Complete 3 Weekly Community Events"],
        ["The Cartel", "Win an event at 8 rallycross locations using Bakkerud's or Doran's Audi S1 EKS RX quattro"],
        ["The Hills are Alive...", "Complete an Event in Wales"],
        ["The Home Favourite", "Win in Latvia in the Reinis Nitišs Ford Fiesta Rallycross (MK7)"],
        ["The Right Way Up", "Roll your car during a Rally stage in Australia and continue"],
        ["Time Machine", "Complete 3 Championships in Historic Championships"],
        ["To all those who doubted...", "Get a podium in the Citroën C4 Rally"],
        ["Tough Competition", "Win your first Custom event"],
        ["UPGRADED", "Fully research and apply the maximum engine upgrade to 5 cars"],
        ["Velkommen til Hell", "Complete 5 Rallycross Events in Hell"],
        ["Viva España", "Win a Rally event in Spain driving the Volkswagen Polo GTI R5"],
        ["Watch the DELTA", "Purchase every Group A car"],
        ["We Had to Change the Girboks", "Repair your car before a stage and win"],
        ["Wheel Spin", "Win 10 stages without using any assists"],
        ["When in Doubt...", "Set the fastest time on a stage with high surface degradation"],
        ["World RX Champion", "Win 8 Events in the FIA World Rallycross Championship mode"],
        ["Wouldn't Expect Anything More", "Win a Rallycross Qualifier by less than a second"],
    ];

    assert.strictEqual(officialAchievements.length, 70, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .filter(a => !hiddenApinames.has(a.apiname))
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});

test("the 1 hidden DiRT Rally 2.0 achievement each keep their real name and a non-empty curatorial description", () => {

    const names = [
        ["71", "Pedal to the Metal"],
    ];

    assert.strictEqual(names.length, 1, "sanity check on this test's own reference list");

    for (const [apiname, name] of names) {

        const achievement = game.achievements.find(a => a.apiname === apiname);

        assert.ok(
            achievement && achievement.name === name && achievement.description.length > 0,
            `expected ${apiname} to be named "${name}" with a non-empty curatorial description`
        );

    }

});

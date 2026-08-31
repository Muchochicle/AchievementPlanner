import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/dirt-3-complete-edition.json - 60 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 321040 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("dirt-3-complete-edition");

test("getPlannerData('dirt-3-complete-edition') returns real planner data with 60 curated achievements", () => {

    assert.ok(game, "expected real planner data for dirt-3-complete-edition");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 60);

});

test("every DiRT 3 Complete Edition achievement has a unique id from 1 to 60 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 60 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 60);
    assert.strictEqual(new Set(apinames).size, 60);

});

test("every DiRT 3 Complete Edition achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 60 DiRT 3 Complete Edition achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Air Miles", "Win a race in every location"],
        ["Assistance is Futile", "Win a DiRT Tour race without using any driver assists"],
        ["Battered Battersea", "Complete 100% of the Battersea Compound Missions"],
        ["Burnt Rubber", "Complete 75% of the Battersea Compound Missions"],
        ["California Dreams", "Achieve a podium finish in the X Games Tournament"],
        ["Call me Ace!", "Ace all trick types in a Gymkhana Championship event"],
        ["Can't Touch This!", "Remain uninfected in a round of Outbreak (Pro Tour or Jam Session)"],
        ["Cheeze It!", "Be the mouse in a Cat n Mouse game where your team has gone on to win the game (Jam Session)"],
        ["Cool Running", "Beat the Bobsleigh in the Norway Speed Run DC Challenge"],
        ["Crash Proof", "Use a flashback in the DiRT Tour after receiving terminal damage and then go on to win the race"],
        ["DC Challenger", "Complete all of the DC Challenges"],
        ["DC Gold", "Achieve Gold medals in all of the DC Challenges"],
        ["DC Silver", "Achieve Silver medals in all of the DC Challenges"],
        ["Donut Addict", "Complete 50% of the Battersea Compound Missions"],
        ["Driven", "Win DiRT Tour races using vehicles from each discipline"],
        ["Driving School", "Complete the tutorials in the Gymkhana Academy"],
        ["Eat my DiRT!", "Reach Driver Rep Level 30"],
        ["Flag Stealer", "Steal the flag from the opposing team 5 times in a game of Transporter (Pro Tour)"],
        ["French Connection", "Win a Steam race in Monte Carlo (Jam Session)"],
        ["From DiRT to Glory", "Achieve first place finishes in all DiRT Tour events"],
        ["Gym-Carnage", "Score 500,000 Points in a Gymkhana Event"],
        ["Gymkhana Aficionado", "Complete all Gymkhana Championships"],
        ["Honourable Driver", "Complete a Steam multiplayer race with a ‘Cautious’ rating"],
        ["Hooning Around", "Complete 25% of the Battersea Compound Missions"],
        ["Into the DiRT", "Complete your first DiRT Tour race"],
        ["Join the Party", "Win a game in each of the multiplayer party modes (Pro Tour or Jam Session)"],
        ["Kick Off the Training Wheels!", "Achieve a podium finish in the Gymkhana Academy"],
        ["King of the Road", "Win a Steam race in Hardcore Mode"],
        ["La Grande Victoire", "Achieve first place in all DiRT Tour Monte Carlo Events"],
        ["Metropolis Racer", "Win a Steam race in Shibuya (Jam Session)"],
        ["New Wheels", "Drive all of the cars from the Power and Glory Car Pack"],
        ["No-bot Wars", "Smash every robot in a Smash Attack DC Challenge"],
        ["Pace Setter", "Complete a Time Trial race in a vehicle from each class of Rally"],
        ["Perfect Sprint", "Complete a clean run in a Gymkhana Sprint DC Challenge"],
        ["Platinum Performance", "Achieve Platinum medals in all of the DC Challenges"],
        ["Rally Evolution", "Win a DiRT Tour race in a Rally car from each decade"],
        ["Reputation Boost", "Complete 5 bonus Race Objectives"],
        ["Rising Talent", "Reach Driver Rep Level 10"],
        ["Road Trip", "Complete a Joyride online with at least 3 other players"],
        ["Rush Hour", "Complete a Time Trial in Shibuya"],
        ["Self Preservation Society", "Win a DiRT Tour race in the Mini Cooper without receiving any damage"],
        ["Service History", "Win a DIRT Tour event in a car from the Power and Glory Car Pack using a custom setup"],
        ["Shake and Bake", "Reach Driver Rep Level 20"],
        ["Showcase Drifter", "Score 25,000 drift points in a Drift Showcase DC Challenge"],
        ["Steer Hunter", "Complete a game of Invasion without any negative points (Pro Tour)"],
        ["Sub Zero Hero", "Achieve a podium finish in the Winter X Games Tournament"],
        ["Super Star", "Earn enough fans to achieve the ‘Superstar’ title"],
        ["SuperSeries Champion", "Win the DC SuperSeries Championship"],
        ["Taking the Trophy", "Win 10 Steam games (Pro Tour or Jam Session)"],
        ["Teacher's Pet", "Achieve a Platinum medal in all of the Gymkhana Academy tutorials"],
        ["The Extra Mile", "Complete 25 bonus Race Objectives"],
        ["The Lively Set", "Drive all of the cars from the Mud and Guts Car Pack"],
        ["The Professional", "Complete your first Pro Tour race on Steam"],
        ["The Real Thing", "Win a Rally race in the DiRT Tour using the interior camera and the HUD switched off"],
        ["The Road Ahead", "Complete 25 Steam games (Pro Tour or Jam Session)"],
        ["The Tourist", "Drive in excess of 100 miles (161 km) in Monte Carlo"],
        ["Today's Forecast is...Victory!", "Win a race in all weather conditions"],
        ["Tokyo Story", "Achieve first place in all DiRT Tour Shibuya Events"],
        ["Watch the Paintwork!", "Complete a clean race with a car from the Mud and Guts Car Pack"],
        ["World Renowned", "Achieve first place finishes and pass the DC Challenge in a World Tour event"],
    ];

    assert.strictEqual(officialAchievements.length, 60, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});

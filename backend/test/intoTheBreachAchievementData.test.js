import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/into-the-breach.json - 70 real achievements
// sourced from a live ISteamUserStats/GetSchemaForGame/v2 response for
// appid 590380 (fetched through this app's own services/steamApi.js) -
// all 70 ship a real, official Steam description. None are Steam-hidden.
// difficulty/estimatedTime remain curatorial judgments, same convention
// as every other planner difficulty/time field in this catalog.
const intoTheBreach = getPlannerData("into-the-breach");

test("getPlannerData('into-the-breach') returns real planner data with 70 curated achievements", () => {

    assert.ok(intoTheBreach, "expected real planner data for into-the-breach");
    assert.ok(Array.isArray(intoTheBreach.achievements));
    assert.strictEqual(intoTheBreach.achievements.length, 70);

});

test("every Into the Breach achievement has a unique id from 1 to 70 and a unique apiname", () => {

    const ids = intoTheBreach.achievements.map(a => a.id);
    const apinames = intoTheBreach.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 70 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 70);
    assert.strictEqual(new Set(apinames).size, 70);

});

test("every Into the Breach achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

    for (const achievement of intoTheBreach.achievements) {

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

test("every one of the 70 Into the Breach achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const officialAchievements = [
        ["Victory", "Beat the game (any length)"],
        ["Hard Victory", "Beat the game on Hard (any length)"],
        ["Adaptable Victory", "Beat the game at least once per length (2, 3, & 4 Islands secured)"],
        ["Squads Victory", "Beat the game with 4 different Squads (any length)"],
        ["Complete Victory", "Beat the game with all 10 primary Squads (any length)"],
        ["Emerging Technologies", "Unlock a new Mech Squad"],
        ["Friends in High Places", "Spend 50 Reputation across all games"],
        ["Immovable Objects", "Block 100 Vek across all games"],
        ["Humanity's Savior", "Rescue 100,000 civilians across all games"],
        ["Perfect Strategy", "Collect 10 Perfect Island rewards across all games"],
        ["Perfect Island", "Do not fail any objective on a single Corporate Island"],
        ["The Defenders", "Finish a Corporate Island without taking Building Damage"],
        ["Untouchable", "Finish a Corporate Island without taking Mech Damage (Repaired damage is still damage)"],
        ["Backup Batteries", "Earn or buy 10 Grid Power on a single Corporate Island"],
        ["Good Samaritan", "Earn 9 Reputation from missions on a single Corporate Island"],
        ["Field Promotion", "Have a Pilot reach maximum level"],
        ["Best of the Best", "Have 3 Pilots at maximum level simultaneously"],
        ["Come Together", "Unlock 6 additional Pilots"],
        ["I'm getting too old for this...", "Have an individual Pilot fight the final battle 3 times across multiple games"],
        ["Distant Friends", "Encounter a familiar face"],
        ["Sustainable Energy", "Finish 3 Corporate Islands without dropping below 4 Grid Power"],
        ["Engineering Dropout", "Finish 3 Corporate Islands without powering a Weapon Modification"],
        ["Chronophobia", "Finish 3 Corporate Islands and destroy every Time Pod discovered"],
        ["There is No Try", "Finish 3 Corporate Islands without failing an objective"],
        ["Trusted Equipment", "Finish 3 Corporate Islands without equipping any new Pilots or weapons"],
        ["Watery Grave", "Drown 3 enemies in water in a single battle with the Rift Walkers squad"],
        ["Ramming Speed", "Kill an enemy 5 or more tiles away with a Dash Punch with the Rift Walkers squad"],
        ["Island Secure", "Complete 1st Corporate Island with the Rift Walkers squad"],
        ["Unbreakable", "Have Mech Armor absorb 5 damage in a single battle with the Steel Judoka squad"],
        ["Unwitting Allies", "Have 4 enemies die from enemy fire in a single battle with the Steel Judoka squad"],
        ["Mass Displacement", "Push 3 enemies with a single attack with the Steel Judoka squad"],
        ["Overpowered", "Overpower your Power Grid twice by earning or buying Power when it is full with the Rusting Hulks squad"],
        ["Stormy Weather", "Deal 12 damage with Electric Smoke in a single battle with the Rusting Hulks squad"],
        ["Perfect Battle", "Take no Mech or Building Damage in a single battle with the Rusting Hulks squad (Repaired damage is still damage)"],
        ["Quantum Entanglement", "Teleport a unit 4 tiles away with the Flame Behemoths squad"],
        ["Scorched Earth", "End a battle with 12 tiles on Fire with the Flame Behemoths squad"],
        ["This is Fine", "Have 5 enemies on Fire simultaneously with the Flame Behemoths squad"],
        ["Get Over Here", "Kill an enemy by pulling it into yourself with the Zenith Guard squad"],
        ["Glittering C-Beam", "Hit 4 enemies with a single laser with the Zenith Guard squad"],
        ["Shield Mastery", "Block damage with a Shield 4 times in a single battle with the Zenith Guard squad"],
        ["Cryo Expert", "Shoot the Cryo-Launcher 4 times in a single battle with the Frozen Titans squad"],
        ["Trick Shot", "Kill 3 enemies with a single attack of the Janus Cannon with the Frozen Titans squad"],
        ["Pacifist", "Kill less than 3 enemies in a single battle with the Frozen Titans squad"],
        ["Chain Attack", "Have the Chain Whip attack chain through 10 tiles with the Blitzkrieg squad"],
        ["Lightning War", "Finish the first 2 Corporate Islands in under 30 minutes with the Blitzkrieg squad"],
        ["Hold the Line", "Block 4 emerging Vek in a single turn with the Blitzkrieg squad"],
        ["Healing", "Heal 10 Mech Health in a single battle with the Hazardous Mechs squad"],
        ["Immortal", "Finish 4 Corporate Islands without a Mech being destroyed at the end of a battle with the Hazardous Mechs squad"],
        ["Overkill", "Deal 8 damage to a unit with a single attack with the Hazardous Mechs squad"],
        ["Loot Boxes!", "Open 5 Time Pods in a single game with a Random squad"],
        ["Lucky Start", "Beat the game (any length) without spending any Reputation with a Random squad"],
        ["Change the Odds", "Raise Grid Defense to 30% or more with a Random squad"],
        ["Mech Specialist", "Beat the game with 3 of the same Mech in a Custom squad"],
        ["Class Specialist", "Beat the game with 3 different Mechs from the same class in a Custom squad"],
        ["Flight Specialist", "Beat the game with 3 flying Mechs in a Custom squad"],
        ["Hold the Door", "Block 30 Emerging Vek by the end of Island 2 with the Bombermechs squad."],
        ["No Survivors", "Have 7 units (any team) die in a single turn with the Bombermechs squad."],
        ["Powered Blast", "Pierce a Walking Bomb with the AP Cannon to kill an Enemy with the Bombermechs squad. "],
        ["Spider Breeding", "Spawn 15 Arachnoids in one Island with the Arachnophile squad."],
        ["Working Together", "Area Shift 4 units at once with the Arachnophile squad with the Arachnophile squad."],
        ["Efficient Explosives", "Kill 3 Enemies with 1 shot of the Ricochet Rocket with the Arachnophile squad."],
        ["Stay With Me!", "Heal 12 damage over the course of a single Island with the Mist Eaters squad."],
        ["Let's Walk", "Move Enemies with Control Shot 120 spaces in one game with the Mist Eaters squad."],
        ["On the Backburner", "Do 4 damage with the Reverse Thrusters with the Mist Eaters squad."],
        ["Boosted", "Boost 8 Mechs in one mission with the Heat Sinkers squad."],
        ["Feed the Flame", "Light 3 Enemies on fire with a single attack with the Heat Sinkers squad."],
        ["Maximum Firepower", "Deal 8 damage with a single activation of the Quick-Fire Rockets with the Heat Sinkers squad."],
        ["Unstable Ground", "Crack 10 tiles in one mission with the Cataclysm squad."],
        ["Core of the Earth", "Drop 10 Enemies into pits on one Island with the Cataclysm squad."],
        ["Miner Inconvenience", "Destroy 20 mountains in one game with the Cataclysm squad."]
    ];

    assert.strictEqual(officialAchievements.length, 70, "sanity check on this test's own reference list - Into the Breach has no Steam-hidden achievements");

    const dataPairs = intoTheBreach.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});

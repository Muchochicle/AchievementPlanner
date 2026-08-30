import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/dead-rising-3.json - 88 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 265550 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("dead-rising-3");

test("getPlannerData('dead-rising-3') returns real planner data with 88 curated achievements", () => {

    assert.ok(game, "expected real planner data for dead-rising-3");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 88);

});

test("every Dead Rising 3 achievement has a unique id from 1 to 88 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 88 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 88);
    assert.strictEqual(new Set(apinames).size, 88);

});

test("every Dead Rising 3 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 88 Dead Rising 3 achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Little Ambition", "Purchased one Attribute."],
        ["Add to The Collection", "All Custom Motorcycles collected for Torque"],
        ["Agent of Justice", "Dead Rising 3: The Last Agent completed"],
        ["Almost Famous", "Completed 25 PP Trials."],
        ["Angel Gets Her Wings", "Complete Dead Rising 3: Fallen Angel"],
        ["Apprentice", "Level 5 reached."],
        ["Ashes to Ashes", "All Biohazards burned"],
        ["Bag of Chips", "All ZDC Chips collected"],
        ["Be a Dick!", "Joined a Co-op game."],
        ["Bootleg Operator", "All Bootleg Zombrex collected"],
        ["Builder's Apprentice", "Helped Torque build a special bike"],
        ["Burn Baby Burn", "Burn all propaganda Posters"],
        ["Certified Survivalist", "25 Survival Training Bronze medals earned."],
        ["Cleaning House", "Prep Base Camp for Bravo Team"],
        ["Collector", "250 weapons collected in the weapons locker."],
        ["Complete Package", "Overtime completed."],
        ["Counter Terrorist", "Infect all Safe Zones"],
        ["Covering The Traces", "Collect precious cargo"],
        ["Customizer", "Created 5 combo vehicles."],
        ["Day at the Museum", "Chapter 5 completed."],
        ["Delivery Man", "Collect Charlie's supplies"],
        ["Driven", "20 vehicles collected in the vehicle lot."],
        ["Duct Tape Master", "Created every combo weapon."],
        ["Duty Or Death", "Complete Dead Rising 3: Operation Broken Eagle"],
        ["Eagle Has Landed", "Locate the President"],
        ["Engineer", "50 blueprints collected."],
        ["Envious", "Kenny defeated!"],
        ["Expert", "Level 25 reached."],
        ["Eyes in the Sky", "Hack all ZDC Cameras"],
        ["Family Man", "Chapter 3 completed."],
        ["Fashion Plate", "100 clothing items collected in the clothing closet."],
        ["Fit to Lead", "Dead Rising 3: Chaos Rising completed"],
        ["Fly The Coop", "Escaped Los Perdidos Police Department"],
        ["Gang Banger", "Led a full survivor posse."],
        ["Genius of Zombie Slaying", "Killed 72,000 zombies."],
        ["Gluttonous", "Darlene defeated."],
        ["Greedy", "Albert defeated."],
        ["Guardian Angel", "Rescue all Survivors"],
        ["Hacking the Hacker", "Nelson found"],
        ["Hall Monitor", "Defend the school"],
        ["Happy Camper", "Chapter 4 completed."],
        ["Hawg Heaven", "Torque's surprise obtained"],
        ["Help Wanted", "5 survivors added to the survivor bulletin board."],
        ["Hunter and the Hunted", "All Captains defeated"],
        ["Journeyman", "25 blueprints collected."],
        ["Kane's Last Words", "Evidence collected"],
        ["Ladder Climber", "Purchased 10 Attributes."],
        ["Left 100,004 Dead", "Killed 100,004 zombies."],
        ["Live to Fight Again", "Recover all Squad Members"],
        ["Local Hero", "Stranded survivor saved."],
        ["Lusty", "Dylan defeated."],
        ["Man of the People", "15 stranded survivors saved."],
        ["Master Builder", "100 blueprints collected."],
        ["Master Mechanic", "Created every combo vehicle."],
        ["Master of Massacre", "Killed 53,597 zombies."],
        ["Maxed!", "Level 50 reached."],
        ["Med Tech", "Collect all Medical Supplies"],
        ["Morgue-ified", "Chapter 2 completed."],
        ["Nightmare Master", "Chapter 7 completed in Nightmare Mode."],
        ["No Peeking!", "Destroy all ZDC Cameras"],
        ["Out With The Bad", "All Bikers defeated"],
        ["Planner", "5 blueprints collected."],
        ["Prestige Hound", "Completed all PP Trials."],
        ["Prestigious", "Completed 10 PP Trials."],
        ["Prideful", "Jherii defeated."],
        ["Quarantined", "Chapter 1 completed."],
        ["Rest In Peace", "Collect all Dog Tags"],
        ["Shakedown", "Interrogate Spec Ops"],
        ["Sideswiped", "Completed 20 side missions."],
        ["Slothful", "Theodore defeated."],
        ["Sourced", "Source of military signal discovered"],
        ["Specialist", "Maxed out a single attribute."],
        ["Starter", "Chapter 0 completed."],
        ["Stick it to the Man", "All Emergency Phones destroyed"],
        ["Survival Training Master", "25 Survival Training Gold medals earned."],
        ["Survival Training Specialist", "25 Survival Training Silver medals earned."],
        ["Sworn to Protect", "All Survivors rescued"],
        ["T.I.O.D. Disciple", "Created 50 combo weapons."],
        ["Talk It Out", "Question Winnie"],
        ["The Doctor is Out", "Chapter 6 completed."],
        ["The Finer Things", "All bottles of Special Reserve Whiskey collected"],
        ["Them's the Facts", "The Facts completed."],
        ["Throwing Down the Gauntlet", "Survived Spider's trial"],
        ["Well Stocked", "Collect special supplies for the Safe Zone"],
        ["Wrathful", "Zhi defeated."],
        ["Zombie Butcher", "Killed 1,000 zombies."],
        ["Zombie Killer", "Killed 100 zombies."],
        ["Zombie Slayer", "Killed 10,000 zombies."],
    ];

    assert.strictEqual(officialAchievements.length, 88, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});

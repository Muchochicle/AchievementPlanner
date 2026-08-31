import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/state-of-decay.json - 46 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 241540 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("state-of-decay");

test("getPlannerData('state-of-decay') returns real planner data with 46 curated achievements", () => {

    assert.ok(game, "expected real planner data for state-of-decay");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 46);

});

test("every State of Decay achievement has a unique id from 1 to 46 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 46 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 46);
    assert.strictEqual(new Set(apinames).size, 46);

});

test("every State of Decay achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 46 State of Decay achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Arrested Developments", "See things through at the courthouse."],
        ["Badass", "Complete 50 missions or activities with the same character."],
        ["Cannibal Family Picnic", "Get to the Mt. Tanner Ranger Station."],
        ["Come and Knock On Our Door", "Convince another enclave to join your community."],
        ["Double Dead", "Perform a hand to hand double kill special attack."],
        ["Everywhere You Look", "Get 15 people in your community."],
        ["Flugtag", "Send an energy drink flying."],
        ["Freak Hunt", "Complete all Sasquatch hunting missions."],
        ["Get Outta My Dreams", "Kill one of each freak zombie type with your car."],
        ["Get Yo' Freak On", "Kill one of each freak zombie type."],
        ["Gotta Enjoy the Little Things", "Use a car door to kill a zombie."],
        ["Gun Thugs", "Help the Wilkersons resolve their differences."],
        ["Holy Rolling", "Escape Mt. Tanner and find the survivors at the church."],
        ["Home Improvement", "Build a facility."],
        ["Home on the Grange", "Play matchmaker for Quentin and Becca."],
        ["Horde Hoard", "Destroy 10 hordes in one day."],
        ["I Can See My House From Here", "Complete a survey activity."],
        ["I'll Be There For You", "Earn 500 Fame."],
        ["It Was Just a Police Action", "Find out what the Army was up to."],
        ["Land Usage", "Build one of every type of facility."],
        ["Last Voice of Danforth", "In the Lifeline add-on, escape Danforth with Vienna Cho in your community - save all stranded callers to recruit her, then evacuate without losing a community member."],
        ["Manifest Destiny", "Build 8 outposts."],
        ["Maverick", "Survive 2 minutes within a Danger Zone."],
        ["Mercy Shot", "Kill a member of your community to prevent them from turning."],
        ["Movin' On Up!", "Relocate your home base."],
        ["Pest Control", "Destroy 5 infestations in one day."],
        ["Rucks in Trucks", "Deliver 6 rucksacks to your base in the back of a single vehicle."],
        ["Rule #1", "Max out a community member's Cardio skill."],
        ["Survivor", "Escape Trumbull County."],
        ["The Bruce", "Kill 3 zombies with an exploding propane tank."],
        ["The Dead Man", "Kill 5 Bloaters (Breakdown Level 2 or Higher)."],
        ["The Judge", "Perform 50 Zombie Executions (Breakdown Level 3 or Higher)."],
        ["The Mercenary", "Destroy 5 Juggernauts (Breakdown Level 5 or Higher)."],
        ["The Ninja", "Execute 50 Stealth Kills (Breakdown Level 5 or Higher)."],
        ["The Rescuer", "Unlock All Heroes."],
        ["The Sacrifice", "Go Out in a Blaze of Glory (Breakdown Level 1 or Higher)."],
        ["The Scientist", "Reach Breakdown Level 6."],
        ["The Survivor", "Collect 150 Resources (Breakdown Level 4 or Higher)."],
        ["Torn Apart", "Get killed by zombies."],
        ["Trust Me, I'm an Expert", "Earn a skill specialization for one of your community members."],
        ["Under Siege", "Survive 10 sieges on your base in a single playthrough."],
        ["Vehicular Zombicide", "Run over 250 zombies."],
        ["War Never Changes", "In the Lifeline add-on, have Sasquatch detonate his armed atomic bomb in Danforth, survive the final siege, and evacuate via the radio tower."],
        ["Watch the Birdie!", "Distract zombies to complete an objective."],
        ["Wired for War", "Kill 100 zombies with Drone Strikes."],
        ["Ya Always Were An A-Hole Gorman", "Sacrifice your life in a blaze of glory."],
    ];

    assert.strictEqual(officialAchievements.length, 46, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});

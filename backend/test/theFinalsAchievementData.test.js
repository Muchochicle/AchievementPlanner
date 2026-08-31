import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/the-finals.json - 50 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 2073850 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("the-finals");

test("getPlannerData('the-finals') returns real planner data with 50 curated achievements", () => {

    assert.ok(game, "expected real planner data for the-finals");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 50);

});

test("every THE FINALS achievement has a unique id from 1 to 50 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 50 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 50);
    assert.strictEqual(new Set(apinames).size, 50);

});

test("every THE FINALS achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 50 THE FINALS achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Artful Expressionist", "Eliminate an opponent while you are emoting."],
        ["Asset Protection", "Eliminate an opponent trying to steal your cashout, 10 times"],
        ["Attending Physician", "Revive teammates 50 times"],
        ["Blast Caster", "Place an explosive mine on a carriable, then get an elimination by throwing it at an opponent."],
        ["Bombouncer", "Eliminate an opponent by bouncing a grenade on a Jump Pad"],
        ["Busy Body", "Eliminate 3 opponents with a Melee Weapon within 10 seconds"],
        ["Butter Fingers", "Get eliminated by your own grenade."],
        ["Buzzer Beater", "Steal a cashout with less than 10 seconds remaining in the match"],
        ["Charitable Donation", "Eliminate an opponent with a cash box"],
        ["Clip And Slide", "Eliminate an opponent with a headshot while you are sliding"],
        ["Crowd Pleaser", "Finish in first place, 3 times in a row"],
        ["Dead Shot", "Get 300 eliminations with Ranged Weapons"],
        ["Deep Pockets", "Obtain a total of 50,000,000 cash"],
        ["Defense Devotee", "Block a total of 25,000 damage"],
        ["Demolition Expert", "Deal 1,000,000 damage to arenas"],
        ["Dodgeball Champion", "Hit opponents with 3 different carriables within 15 seconds"],
        ["Fatal Florist", "Eliminate an opponent with a flowerpot"],
        ["Field Goal", "Throw a cash box into a cashout station from 20 meters away"],
        ["Gadget Guru", "Get 150 eliminations with Gadgets"],
        ["Golden Bullet", "Get a headshot elimination with the last bullet in the magazine of your primary weapon"],
        ["Green Light", "Play 10 rounds with a Light Build"],
        ["Heavy Hand", "Win 150 rounds with a Heavy Build"],
        ["Highway Patrol", "Eliminate an opponent while you are riding a Zipline, 10 times"],
        ["Hot Shot", "Eliminate an opponent while you are on fire, 5 times in a single round"],
        ["Initial Deposit", "Insert a cash box into a cashout station"],
        ["Just Like Scotty", "Win a round in any mode without being eliminated"],
        ["Last-minute Gift", "Start a cashout with less than 10 seconds remaining in the match"],
        ["Lesson Learner", "Complete the Tutorial"],
        ["Life Of The Party", "Play 10 rounds in a Party"],
        ["Light Years", "Win 150 rounds with a Light Build"],
        ["Mass Medium", "Play 10 rounds with a Medium Build"],
        ["Med Student", "Revive a teammate"],
        ["Medium Rare", "Win 150 rounds with a Medium Build"],
        ["Multitasker", "Eliminate 3 opponents with 3 different items or carriables within 10 seconds"],
        ["Participation Ribbon", "Create a contestant"],
        ["Play The Heavy", "Play 10 rounds with a Heavy Build"],
        ["Pressure Prize", "Hit an opponent in the head with an explosive carriable"],
        ["Pyro Prodigy", "Eliminate 25 opponents with fire"],
        ["Resident Doctor", "Heal teammates for a total of 25,000 health"],
        ["Returning Contestant", "Play 3 rounds of Quick Cash"],
        ["Rising Star", "Play 3 Tournament rounds"],
        ["Savings Specialist", "Obtain a total of 100,000 cash"],
        ["Show Stopper", "Win the final round in Tournament or Ranked Tournament"],
        ["Showboaster", "Use an emote immediately after eliminating an opponent."],
        ["Sky Bridge Saboteur", "Destroy the skybridge on the Seoul map."],
        ["Space Rock Skipper", "Bounce a meteor off a Jump Pad during the limited-time Meteor Showers event."],
        ["Speed Run", "Start a cashout within 15 seconds after opening a vault"],
        ["Stop Payment", "Eliminate an opponent while they are carrying a cash box, 5 times"],
        ["Strong Arm", "Get 150 eliminations with Melee Weapons"],
        ["Toxic Tact", "Eliminate 25 opponents with gas"],
    ];

    assert.strictEqual(officialAchievements.length, 50, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});

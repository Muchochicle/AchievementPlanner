import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/project-cars.json - 45 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 234630 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("project-cars");

test("getPlannerData('project-cars') returns real planner data with 45 curated achievements", () => {

    assert.ok(game, "expected real planner data for project-cars");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 45);

});

test("every Project CARS achievement has a unique id from 1 to 45 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 45 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 45);
    assert.strictEqual(new Set(apinames).size, 45);

});

test("every Project CARS achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 45 Project CARS achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Day In The Life", "Completed a 24 hour race using only realtime progression (and why not stream it?!)"],
        ["Clean As A Whistle", "Won three Online Public races in a row without being involved in a major collision"],
        ["Community Ambassador", "Participated in 20 Driver Network Community Events"],
        ["Conquered. All. Races. Seriously.", "Won every race in a Career Championship"],
        ["Consistency Is King", "Performed three consecutive laps within 0.1 sec of each other"],
        ["Credit Where Credit's Due", "Crashed into the AI counterpart of an SMS employee"],
        ["Defending Champ", "Defended a Career Championship for three consecutive years"],
        ["Do You Smell Somethin'?", "Made your brakes reach a temperature of 1000° C"],
        ["Double Rainbow", "Won the same Career Championship two years consecutively"],
        ["Eastbound & Down", "Ran the California Highway in under 9 mins in a US car"],
        ["Emergency Stop", "Braked to a standstill from 100-0 km/h within 2 secs"],
        ["Exorcist", "Beat a Ghost from the Time Trial Leaderboards"],
        ["Fully Loaded", "Signed 8 Endorsement deals"],
        ["Gladiator", "Won a Quick Race Weekend with Full Damage, Mechanical Failures, and Tire Wear (must be 5+ laps)"],
        ["Grand Chelem", "Got pole position in qualifying, fastest lap in the race and won whilst leading every lap"],
        ["Half Racer, Half Demon", "Drove faster than 333 km/h for over 6.66 consecutive secs"],
        ["Hall Of Fame", "Completed three Historic Goals and became a racing legend!"],
        ["Home Field Advantage", "Won more than 20 events at your Favorite Location"],
        ["I Am The 5%", "Won an Online Public race using manual gears, and no driving aids, from cockpit view"],
        ["Keep Calm And Race On", "Crashed on or before the first corner then went on to win the race"],
        ["Lap Time Wizard", "Set a time at 50 locations (variations and reverse layouts not necessary)"],
        ["Mailbox Full", "Received more than 500 messages from your fans"],
        ["Meticulous", "Completed every Practice, Qualifying, and Race session in every round in a Career Championship"],
        ["My Little Friend", "Overtook a car using Formula A KERS"],
        ["No \"I\" In Team", "Won a Team Championship two years consecutively"],
        ["No Roads Needed", "Got all four wheels in the air for more than 0.88 secs"],
        ["On Your Left", "Lapped an opponent in a race"],
        ["One More For The Road", "Earned all other Trophies/Achievements"],
        ["Pentapodia", "Finished on the podium more than 50 times in an Online Public race"],
        ["Petrolicious Love", "Won more than 50 events with your Signature Car"],
        ["Pit Boss", "Created and saved a Pit Strategy"],
        ["Player 1 Versus The World", "Entered and completed more than 25 Online races"],
        ["Pristine Paintwork", "Completed more than 3 Online races with 50% of them avoiding a major collision"],
        ["Ready To Pounce", "Had a reaction time of less than 0.2 secs off the starting grid"],
        ["Requesting Flyby", "Entered and exited the pit lane without losing a position (cannot be in last place)"],
        ["Reversa Corsa", "Completed a Quick Race Weekend lap of Azure Circuit in reverse from cockpit view without collisions"],
        ["Selfie", "Took a photo of your Signature Car at your Favorite Location"],
        ["Speed Racer", "Set a Pole Position time in an Online Public qualifying session"],
        ["Sunday Driver", "Driven the speed limit (50 km/h) in an Italian car and appreciated the Azure coastal scenery (Free Practice not allowed)"],
        ["Taylor Would Be Proud", "Won 22 Accolades"],
        ["To Affinity & Beyond", "Have an Affinity greater than 50% in all car classes"],
        ["Triple Crown", "Won three Career Championships in three different motorsport disciplines"],
        ["Twerkin'", "Won your first Accolade"],
        ["VIP", "Received 12 Invitations"],
        ["Zero To Hero", "Won the LMP1 World Championship within ten seasons"],
    ];

    assert.strictEqual(officialAchievements.length, 45, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});

import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/motorsport-manager.json - 73 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 415200 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("motorsport-manager");

test("getPlannerData('motorsport-manager') returns real planner data with 73 curated achievements", () => {

    assert.ok(game, "expected real planner data for motorsport-manager");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 73);

});

test("every Motorsport Manager achievement has a unique id from 1 to 73 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 73 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 73);
    assert.strictEqual(new Set(apinames).size, 73);

});

test("every Motorsport Manager achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 73 Motorsport Manager achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["\"Do You Smell Smoke?\"", "Have a driver pass the chequered flag in a race with their engine's condition under 5%"],
        ["\"I Like to Race, Not to Do Laps Alone\"", "Win a 'Driver's Championship'"],
        ["\"In Order to Finish First, You First Have To Finish.\"", "Have a driver win a race"],
        ["\"Just Leave Me Alone, I Know What I'm Doing\"", "Have a driver win a race while they have 'Gone Rogue'"],
        ["\"Let's Put it This Way, I Like Number Seven.\"", "Win 7 'Driver's Championships'"],
        ["\"You Can Cut The Tension With a Cricket Stump\"", "Survived the chairman's ultimatum"],
        ["20/20 Vision", "Have a pit crew where each active member has a 20 rating for their job"],
        ["Adaptable ", "Win the IGTC’s ‘Driver’ and ‘Team’ Championship in the same year with a customly created new team"],
        ["All-Star", "Complete all challenges in the 'All-Star' Tier"],
        ["Backmarker to Best", "Have a driver win a race after starting last on the grid"],
        ["Black Flag", "Get fired"],
        ["Blue Flag", "Win a race by over a minute"],
        ["Building a Legend", "Create a new team"],
        ["Challenged", "Successfully complete your first challenge"],
        ["Chequered Flag", "Finish your first race"],
        ["Democracy Reigns", "Win a vote"],
        ["Dream Team", "Hire a driver and mechanic who have worked together in the past"],
        ["Drivers Are Overrated", "Have a temporary driver get a podium position in a race"],
        ["Dynamic Duo", "Win an endurance racing with only 2 drivers having driven"],
        ["Endurance Champion", "Win the IEC-A"],
        ["Every Dog Has Its Day", "Complete the \"Underdog Challenge\""],
        ["Fastest Crew in the World", "Do a sub 1.92 second pit stop (must include a tyre change)"],
        ["Former Glory", "Win the WMC's 'Team' or 'Driver' championship as Kruger Motorsport"],
        ["Friends in High Places", "Win a vote with 3 voting power or more"],
        ["Hasty Hunters", "Win the ERS ‘Team Championship’ as Predator Team Racing by 2017"],
        ["Hat-Trick", "Have one of your drivers win 3 races consecutively"],
        ["Highway to the Danger Zone", "Finish a race with a driver in the danger zone"],
        ["Hot Lap", "Qualify in pole position by over a second"],
        ["I like it how it is!", "Win a championship by going through the whole season without building or upgrading anything in the HQ."],
        ["I'm Kind of a Big Deal...", "Sign a 5-star sponsor"],
        ["If It Ain't Broke...", "Win a championship by going through the whole season without improving the performance or reliability of any car parts through the Part Improvement screen."],
        ["It Came Like That!", "Have a risky part be discoverd by the GMA"],
        ["Jack of All Trades", "Win the IEC-A championship with each of the three ERS types"],
        ["Jet Skis for Everyone!", "Sign a sponsorship deal worth over 1 million"],
        ["Kaching!", "Hire a driver with an agreed wage of 20 million a year or more"],
        ["Lap Time Leader", "Qualify in pole position 3 times in a row"],
        ["Living Up To Their Namesake", "Hire a 5-star designer as Zampelli Engineering"],
        ["Managerial Mogul", "Complete the 'Top Manager' challenge"],
        ["Millionaire's Club", "Have a budget of over 100 million"],
        ["Money's Overrated", "Win a championship by going through the whole season without signing any new sponsors."],
        ["No \"I\" In Team", "Win the Teams' Championship"],
        ["Nothing But The Best", "Spend over 30 million on a new season's car"],
        ["Once a King, Always a King", "Have the driver Rafael Rodrigues win the 2016 IGTC ‘Driver’s Championship’ as Oranje GT"],
        ["Pit Wall Wunderkind", "Win both the Teams' and Drivers' Championships in one season"],
        ["Practice Makes Perfect!", "Finish top in practice"],
        ["Predator", "Win a 'Driver's Championship' as Predator Team Racing"],
        ["Pro", "Complete all challenges in the 'Pro' Tier"],
        ["Rattletrap to Pocket Rocket", "Fit a car exclusively with 'Legendary' parts"],
        ["Re-Entering", "Get hired"],
        ["Relationship Counsellor", "Max out the driver/mechanic relationship for both your No. 1 and No. 2 drivers"],
        ["Retired", "Fire a driver"],
        ["Rising Star", "Scout an under-18 driver with 5-star potential"],
        ["Rising Tigers", "Get promoted to the IEC-A as the Sangju Tigers"],
        ["Rookie", "Complete all challenges in the 'Rookie' Tier"],
        ["Seasoned", "Complete a Season"],
        ["Silva's Legacy", "Win the WMC's 'Team' or 'Driver' championship as the race team Silva"],
        ["So Hot Right Now", "Reach 100% Marketability"],
        ["State of the Art", "Fully upgrade your HQ"],
        ["Struck Gold", "Scout a 4.5 star (or above) driver"],
        ["Swing Low...", "In the same season, win both the Teams' and Drivers' Championships in WMC as Chariot Motor Group"],
        ["There's Always Time", "Win an endurance race after being at least 120 seconds behind the leader in IEC-A"],
        ["Thorn in My Side", "Win the Teams' Championship as Thornton Motorsport"],
        ["Time To Shine", "Promote a reserve driver"],
        ["Tinkerer", "Build a 'Legendary' part"],
        ["Top Grid Guru", "Start 10 races on pole position in one season"],
        ["Track Literate", "Finish a race on every track variation of every track"],
        ["Ultimate Victory", "Win the WMC’s ‘Driver’ and ‘Team’ Championship in the same year with a customly created new team"],
        ["Variety Is The Spice Of Life", "Finish a race having used 3 different tyre compound types on one car"],
        ["Waiting in the Wings", "Win the WMC’s ‘Team Championship’ by the end of the 2018 season as Kitano Sport"],
        ["Welcome Aboard!", "Hire a driver"],
        ["Where There’s a Will There’s a Way", "Have the driver William Evans win a race"],
        ["World's Best Boss", "Have a driver reach 100% morale"],
        ["You're Here to Race, Not to Have Fun...", "Have a driver reach 1% morale"],
    ];

    assert.strictEqual(officialAchievements.length, 73, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});

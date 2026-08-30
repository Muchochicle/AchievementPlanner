import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/project-cars-2.json - 47 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 378860 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("project-cars-2");

test("getPlannerData('project-cars-2') returns real planner data with 47 curated achievements", () => {

    assert.ok(game, "expected real planner data for project-cars-2");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 47);

});

test("every Project CARS 2 achievement has a unique id from 1 to 47 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 47 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 47);
    assert.strictEqual(new Set(apinames).size, 47);

});

test("every Project CARS 2 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 47 Project CARS 2 achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Accoladed", "Earned your first Career Accolade"],
        ["Advanced Experience", "Completed an event in a Mercedes car at the Mercedes-Benz Driving Events Ice Track 2"],
        ["All Year Round", "Completed a race around a single circuit in all 4 seasons"],
        ["Best Indy World", "Became an Indycar Champion"],
        ["Brand Advocate", "Became a Brand Advocate for a manufacturer"],
        ["Car Zero", "Raced for 4 laps in the Lamborghini Veneno around Red Bull Ring GP"],
        ["Cream Of The Crop", "Won all Factory Drive events for 3 manufacturers"],
        ["Definitely Not a Rookie", "Earned your Pro-Am License"],
        ["Diversity", "Completed a Championship in every Motorsport discipline within Career"],
        ["Done One Online", "Completed your first online race"],
        ["Factory Driver", "Completed the Factory Drives set of events for a single manufacturer"],
        ["Get That Dirt Off Your Shoulder", "Successfully completed a Rallycross season"],
        ["Gimme 50!", "Earned 50 Accolades"],
        ["Hall of Fame", "Earned four Lifetime Goals"],
        ["Hunting For Grip", "Drove a clean lap around Fuji in Storm conditions, in a time less than 2 minutes"],
        ["I Want To Know Your Secret", "Downloaded another players setup from within Time Trial."],
        ["I'm a Pro", "Earned your Pro License"],
        ["I'm Just Here To Watch", "Joined an in-progress online race as a spectator"],
        ["I'm Seasoned", "Completed the first season"],
        ["Invite Only", "Unlocked your first Career Invitational Event"],
        ["Jack Of All Trades", "Won three Championships in three different Motorsport disciplines"],
        ["Manual All The Way", "Completed a successful pit stop with manual control"],
        ["May I Ask You Something", "Used the Race Engineer in Tuning Setup and made changes based off their recommendation."],
        ["Mr Popular", "Completed 10 Career Invitational Events"],
        ["National Pride", "Finished on the podium 50 times in a single drivers Career"],
        ["No Longer a Rookie", "Earned your Amateur License"],
        ["No Man's Fly", "Did a Rallycross jump longer than 20 metres"],
        ["One More For The Road", "Earned all other achievements"],
        ["One-Man Show", "Used 3 different custom car setups for a single car"],
        ["Raving Rookie", "Earned your Rookie License"],
        ["Rest On Your Laurels", "Won your first Championship."],
        ["Results Are In, You're Clean!", "Finished 1st in an online race over 5 laps without making contact"],
        ["Safety First", "Earnt a B Online Reputation Safety Grade."],
        ["Seen It All", "Earned your Veteran License"],
        ["Snap Snap Snap", "Taken a photo in photo mode"],
        ["Straight Six", "Drove a Porsche 911 GT1-98 at 24 Hours of Le Mans Circuit for 24 minutes at 60x time progression."],
        ["Strategic Mind", "Created a pit strategy and then used it when coming into the pits"],
        ["The Director", "Used the Director mode for a full race"],
        ["The Milk Man", "Won a full distance (200 Laps) Indy 500 race"],
        ["This Is The Start", "Created a new driver in Career and signed your first contract"],
        ["Triple Crown", "Won the Indy 500, Le Mans 24 Hours and Azure Circuit Grand Prix"],
        ["Twice At The Top", "Won two different Tier 1 Motorsports"],
        ["Two Affinity And Beyond", "Earned Affinity with two manufacturers"],
        ["Viva Ferrari", "Drove 4 Ferrari cars, around Imola"],
        ["What's Yours Is Mine", "Saved a car setup received from a friend"],
        ["Winter Soldier", "Drove a clean lap around the Nordschleife in the snow, in less than 8 minutes"],
        ["Zero to Hero", "Completed the Zero to Hero lifetime goal (start in Tier 6 and go on to win a Tier 1 Championship)"],
    ];

    assert.strictEqual(officialAchievements.length, 47, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});

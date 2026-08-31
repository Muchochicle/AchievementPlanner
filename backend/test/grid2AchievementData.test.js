import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/grid-2.json - 60 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 44350 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("grid-2");

test("getPlannerData('grid-2') returns real planner data with 60 curated achievements", () => {

    assert.ok(game, "expected real planner data for grid-2");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 60);

});

test("every GRID 2 achievement has a unique id from 1 to 60 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 60 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 60);
    assert.strictEqual(new Set(apinames).size, 60);

});

test("every GRID 2 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 60 GRID 2 achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Different Class", "You've upgraded a car and bumped it to 'Upgraded' class."],
        ["A Vision of What's to Come", "You won a career Promo Event."],
        ["All Night Long", "You took part in and completed an online Endurance race."],
        ["An Old Favourite", "You've won an elimination event in a Pagani Zonda Revolución."],
        ["Aussie Rules", "You beat a lap time of 01:39:00 at Bathurst. (Excludes drift events)"],
        ["Beginner's Luck", "You set the fastest time on the first lap of a Time Attack event."],
        ["Bush-bash", "You completed a Time Attack event at Bathurst."],
        ["C-C-C-Combo Maker", "You reached the maximum multiplier in an Overtake event."],
        ["California Dreaming", "You completed California Big Sur in under 3 minutes. (Excludes drift events)"],
        ["Clubbed to Death", "That's it, folks. The club format is behind you, it's all about the leagues now. Good luck!"],
        ["Could It Be Magic?", "You beat all of the Prestige drivers in career club events."],
        ["Dipping Your Toes", "You've reached level 10 online and opened up a new world of possibilities."],
        ["Drifting Like a Boss", "You've scored 250,000 points in a single drift."],
        ["Eat It!", "You won the first round of a career Touge event using the 5 second rule."],
        ["Even Balboa Had a Montage", "The WSR is so big now that it's even getting montages on TV. You've made it to the big time!"],
        ["Flawless Victory", "You've won an Overtake event making no contact with anything. (Excludes Global Challenge events)"],
        ["Global Domination", "You won a week of Global Challenge."],
        ["Going Global", "The WSR goes from regional to global thanks to your impressive form."],
        ["Gone in 60 Seconds", "You completed a lap of Chicago - Wabash Run driving the Ford Mustang Mach 1 in less than 60 seconds."],
        ["Harder, Better, Faster, Stronger", "You won a race in an upgraded car."],
        ["Harlem Globeshaker", "You raced at every city at least once."],
        ["Here's My Number, Call Me Maybe?", "You returned Callahan's call and became his poster boy for the World Series of Racing."],
        ["Imma Let You Finish", "You amassed more fans than Taylor Swift has Twitter followers. That's 23.5 million, by the way."],
        ["Internet Famous", "The message boards are alight with the talk of the WSR's increasing popularity."],
        ["Jack of All Trades", "You've competed in all race types."],
        ["Keep Your Friends Close... ", "… and your enemies even closer. You beat a Rival on track."],
        ["Making My Way Down Town", "You've driven more than 1,000 miles (1,610km)."],
        ["Master Racer", "You won a career event on the hardest difficulty without using Flashbacks."],
        ["Mo Money, No Problems", "You've gone above and beyond the call of duty and completed 5 career sponsor objectives."],
        ["Natural Ability", "You won an Online Playlist event."],
        ["One For The Team", "You've completed an individual Global Challenge goal and ultimately helped the community."],
        ["Oriental Express", "Look out Asia, here we come."],
        ["Outback and Gone", "You reached a speed of over 220mph (354.056km/h) at Bathurst."],
        ["Pedal to the Medal", "You won a round of a career event without using the brakes."],
        ["Pinball Wizard", "You traded paint with every competitor during one offline race and still won the race."],
        ["Quantum Leap", "You repeated an event using the Timeline."],
        ["Remember Me?", "You lapped a competitor."],
        ["Ring Master", "You finished 5 seconds ahead of the target time in a Vehicle Challenge on the Red Bull Ring."],
        ["Rocket Manski", "You've driven faster than a Russian torpedo, which incidentally is 230 mph (370 km/h)."],
        ["Rouge Racer", "You went faster than 260mph (418.429km/h) at Spa-Francorchamps."],
        ["Sellout", "You've got one thing on your mind: money! You completed 20 career sponsor objectives."],
        ["Shaken, Not Stirred", "You rolled a car at least 7 times and landed on its wheels, just like Bond did."],
        ["Sideways Shenanigans", "You performed a 100m drift."],
        ["Social Butterfly", "You took part in an online playlist and stuck around for at least 5 races."],
        ["Spa Time", "You beat a lap time of 01:49:00 at Spa-Francorchamps. (Excludes drift events)"],
        ["Staying the Distance", "You completed an online Endurance race  at Spa-Francorchamps."],
        ["Super Drift", "You've scored over 300,000 points in a single drift at Spa-Francorchamps."],
        ["SWAGtastic!", "You beat the target time in a Vehicle Challenge."],
        ["T3XT M3SSAG1NG I5 GR8", "Thanks to you, the WSR is now the talk of the town."],
        ["That New Showroom Smell", "Having wowed the crowds in America, it's time to upgrade your digs."],
        ["The Artist", "You've individually applied customised liveries to 5 vehicles."],
        ["The World's Greatest", "Congratulations, you have become the ultimate WSR champion. What an investment!"],
        ["Time Extended", "You've won an online Checkpoint event at Bathurst."],
        ["Toca Juniors No More", "You got your first taste of a Super Touring Car and never looked back."],
        ["Tokyo Drift", "You scored 350,000 drift points in Okutama in a Mazda RX-7 TYPE RZ or a NISMO R34T-R Z-TUNE."],
        ["Touge Fast, Touge Furious", "You shutout an opponent in a career Touge event."],
        ["Turn Back Time", "You've won a drift event in a Koenigsegg CCGT (excludes Global Challenge events)."],
        ["Vanishing Point", "You've won a race in a white Dodge Challenger but lived to tell the tale, unlike Kowalski."],
        ["Winging It", "You've won a LiveRoute event."],
        ["You rOCDed!", "You finished first in every career event, during season play and/or via the timeline."],
    ];

    assert.strictEqual(officialAchievements.length, 60, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});

import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/worms-ultimate-mayhem.json - 38 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 70600 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("worms-ultimate-mayhem");

test("getPlannerData('worms-ultimate-mayhem') returns real planner data with 38 curated achievements", () => {

    assert.ok(game, "expected real planner data for worms-ultimate-mayhem");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 38);

});

test("every Worms Ultimate Mayhem achievement has a unique id from 1 to 38 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 38 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 38);
    assert.strictEqual(new Set(apinames).size, 38);

});

test("every Worms Ultimate Mayhem achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 38 Worms Ultimate Mayhem achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Alexander The Worm", "Play an online game on each new map and win, proving you’re the greatest general"],
        ["Billy No Mates", "Complete the single player story mode"],
        ["Boom Shake The Worm", "Win a round using only grenades and bazooka"],
        ["Cartographer", "Create a random map and have someone save it to their machine"],
        ["Challenge Accepted", "Take your first steps on the road to glory by completing the first challenge."],
        ["Clock Watching", "Try and beat all the set times across all the challenges."],
        ["Credit To The Nation", "Enjoy the game's credits from start to end"],
        ["Davey Jones", "Drown 50 worms all modes count"],
        ["Davey Jones 2", "Drown 20 Worms across any of the new maps "],
        ["Dedicated Ranker", "Can you rise to the challenge and win a ranked Deathmatch on every new map?"],
        ["Doing It Solo", "Complete all Single Player content (Story, Challenges & Tutorials)"],
        ["Eggceptional", "Collect all the Easter Eggs hidden throughout the story mode"],
        ["Embrace The Darkness", "Win 10 games with the last hit coming from a sentry gun all modes count"],
        ["Fan of The Arts", "Collect all gallery images available"],
        ["Feel The Power of The Darkside", "Win a ranked match with two or more worms remaining on each new map"],
        ["Finger of Death", "Kill 5 worms using prod in ranked matches"],
        ["Genghis Worm!", "Kill a total of 600 worms (all modes count)"],
        ["Glide Like A Worm", "Glide using the parachute in one go for more than 25 seconds"],
        ["Grave Digger", "Kill a total of 200 worms (all modes count)"],
        ["Halfway House", "Reach the halfway point of the story mode"],
        ["I am The Worminator", "Kill more than 3 worms in one turn (ranked match only)"],
        ["I Love New", "Play each new map more than 5 times (all modes count)"],
        ["If You Build It They Will Die", "Inflict 2000 damage in total using weapon factory built weapons"],
        ["Join Me Luke", "Win a ranked Deathmatch on a new map with at least one worm ending with more health than they started with"],
        ["Loves a Challenge", "Complete all the challenges"],
        ["Loves Company", "Complete 10 online ranked matches"],
        ["Mr Popular", "Complete 5 four player games (online or offline)"],
        ["Nick of Time", "Complete one challenge under the required time"],
        ["No Challenge At All", "Complete the deathmatch challenge"],
        ["Pimp My Worm", "Creat a team of worms including custom clothes"],
        ["Ranked Up", "Win 10 online ranked matches"],
        ["Shop-a-holic", "Purchase every item in the Shop, including the Kitchen Sink. Some items only unlock after completing every Mayhem Campaign mission and beating every Team 17 Challenge time."],
        ["Slide into First", "Complete any mission"],
        ["Teacher's Pet", "Complete the tutorials"],
        ["Time Attacked", "Beat all the times on the new challenges"],
        ["Time For A Challenge", "Complete all the challenges"],
        ["Total Ranker", "Win 40 online ranked matches across any 3 game styles"],
        ["Wormicide", "Kill a total of 400 worms all modes count"],
    ];

    assert.strictEqual(officialAchievements.length, 38, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});

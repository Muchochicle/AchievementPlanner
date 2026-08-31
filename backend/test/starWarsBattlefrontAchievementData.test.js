import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/star-wars-battlefront.json - 63 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1237980 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("star-wars-battlefront");

test("getPlannerData('star-wars-battlefront') returns real planner data with 63 curated achievements", () => {

    assert.ok(game, "expected real planner data for star-wars-battlefront");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 63);

});

test("every STAR WARS Battlefront (2015) achievement has a unique id from 1 to 63 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 63 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 63);
    assert.strictEqual(new Set(apinames).size, 63);

});

test("every STAR WARS Battlefront (2015) achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 63 STAR WARS Battlefront (2015) achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["\"Gonk? Gonk!\"", "Capture three droids in a match of Droid Run"],
        ["A cunning warrior", "Reach level 3 once with any Trait (Multiplayer)"],
        ["A good blaster at your side", "Get 150 kills in successful matches of Survival"],
        ["A New Hope", "Play every multiplayer game mode in the original game"],
        ["A tremor in the Force", "Play once as all the different heroes in the original game (Multiplayer)"],
        ["Ackbar's Elite", "Complete any Survival mission on Master difficulty without spending a life"],
        ["All right, I'll give it a try", "Earn a star on all training missions"],
        ["Alternative solution", "Get 20 kills with secondary fire using the Bryar Pistol K-16 or Heavy Repeater TL-50"],
        ["Best star-pilot in the galaxy", "Destroy 10 TIE fighters within 2 minutes on the Beggar's Canyon mission"],
        ["City in the Clouds", "Play all the new maps in Bespin (Multiplayer)"],
        ["Collector", "Earn any diorama figurine in the game"],
        ["Crush them with one swift stroke…", "Trample 25 soldiers with an AT-ST (Multiplayer)"],
        ["Determined", "Complete 25 Challenges"],
        ["Distinguished", "Earn 100 Accomplishments"],
        ["Disturbed tranquility", "Play all new maps from Rogue One: Scarif DLC"],
        ["Do we take prisoners?", "Stun 20 enemies with the Shock Grenade (Multiplayer)"],
        ["Do... or do not. There is no try", "Complete the Tutorial"],
        ["Don't get cocky", "Defeat both the Millennium Falcon and Slave I"],
        ["Don't underestimate the Force", "Earn a total of 100 kills while playing as a hero (Multiplayer)"],
        ["Great shot, kid!", "Kill an enemy who is using a Jump Pack (Multiplayer)"],
        ["Greed can be a very powerful ally", "Win 10 rounds of Extraction"],
        ["Hold the line!", "Kill 10 enemies while attacking or defending a control point in Supremacy"],
        ["I never doubted you!", "Win 10 Rounds of Infiltration"],
        ["I suggest a new strategy", "Use a partner's Star Card hand 10 times (Multiplayer)"],
        ["I’ll take that bet", "Get 20 kills with the X-8 Night Sniper and the EE-4. (Multiplayer)"],
        ["I've been waiting for you", "Kill 10 enemies trying to claim your team's pod in Drop Zone"],
        ["Impressive. Most impressive.", "Earn a total of 5 stars from Battle missions in the original game"],
        ["in a galaxy far, far away....", "Win one match in each multiplayer game mode in the original game"],
        ["Judge me by my size, do you?", "Reach Rank 25"],
        ["Master", "Complete all missions on master difficulty in the original game"],
        ["Never tell me the odds!", "Successfully perform Cooling Flush 10 times (Multiplayer)"],
        ["New Recruit", "Complete any mission"],
        ["No such thing as luck", "Get 10 kills with Rebly-V10, DL-18, Scatter Gun and the Dioxis Grenade (Multiplayer)"],
        ["Not bad for a little furball", "Get hit in the head by a rock from an Ewok on Endor"],
        ["Off to a good start", "Win any Battle mission on Normal difficulty against the AI"],
        ["On the ball", "Complete any Survival mission on Master difficulty within 35 minutes"],
        ["Onwards!", "Get 30 kills with the DT-29"],
        ["Patience you must have", "Complete 10 daily challenges"],
        ["Playing the objective", "Have the most kills in a match of Blast"],
        ["Precision shot", "Get 10 headshots with the Cycler Rifle (Multiplayer)"],
        ["Safety ain't the point of a joyride", "Take no damage in the Endor Chase mission"],
        ["Scrap collector", "Earn any collectible Star"],
        ["Shoot first", "Be the first in a match to earn a kill (Multiplayer)"],
        ["Stay in attack formation", "Win 10 Rounds of Battle Station"],
        ["Stay on target", "Kill 10 enemies in a match of Fighter Squadron"],
        ["Stop that Droid", "Restrain R2-D2"],
        ["Support the troops", "Heal 100 teammates"],
        ["Survivor", "Earn a total of 5 stars from Survival missions in the original game"],
        ["Tell Jabba that I've got his money", "Earn a total of 25 000 credits (Multiplayer)"],
        ["That got him!", "Use a tow cable to destroy an enemy AT-AT in Walker Assault"],
        ["That's no moon", "Play all new maps on and around the Death Star"],
        ["The circle is now complete", "Get to Rank 100"],
        ["The Force is strong with this one", "Earn 10 kills in a match as any hero on Hero Hunt"],
        ["The power of the Force", "Defeat a hero while playing as any hero on Heroes vs Villains"],
        ["This is a new day, a new beginning", "Play all the new maps in the Outer Rim (Multiplayer)"],
        ["Together we can rule the galaxy", "Complete any mission with a friend"],
        ["Walker defender", "Destroy a Y-wing in Walker Assault"],
        ["What will you become?", "Get 20 kills with the A180 and the Sonic Imploder"],
        ["What's the cargo?", "Kill 10 enemies carrying the cargo in Cargo"],
        ["When 900 years old you reach...", "Reach Rank 50"],
        ["When surrounded by war...", "Win 10 rounds of Sabotage"],
        ["You have your moments", "Get 5000 Objective Score while playing as any Hero (Multiplayer)"],
        ["Your journey has only started", "Complete all missions in the original game"],
    ];

    assert.strictEqual(officialAchievements.length, 63, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});

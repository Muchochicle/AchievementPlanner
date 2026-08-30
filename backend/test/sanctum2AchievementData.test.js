import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/sanctum-2.json - 50 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 210770 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("sanctum-2");

test("getPlannerData('sanctum-2') returns real planner data with 50 curated achievements", () => {

    assert.ok(game, "expected real planner data for sanctum-2");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 50);

});

test("every Sanctum 2 achievement has a unique id from 1 to 50 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 50 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 50);
    assert.strictEqual(new Set(apinames).size, 50);

});

test("every Sanctum 2 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 50 Sanctum 2 achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Above and Beyond", "Reach rank 30."],
        ["Angry working class", "Finish a map playing Haigen with Best Friends Forever, Reinforcements and Roboticist."],
        ["Balboa", "Complete Rocky Fields with 5 Feats of Strength enabled."],
        ["Better late than never", "Reach rank 50."],
        ["BOOM! Headshot", "Complete Outskirts with 5 Feats of Strength enabled."],
        ["Clean Kill", "Complete Outskirts."],
        ["Coffee Stained", "This is a viral achievement."],
        ["Come at me bro!", "Kill 10 enemies in a row without getting hit."],
        ["Dark Secrets", "Find the secret area on Abandoned Lab."],
        ["Final Destination", "Complete The End in a party of four."],
        ["Fiskeplaske", "Complete Coastline."],
        ["Freedom!", "Reach rank 40."],
        ["Full-time Ass-kicker", "Reach rank 20."],
        ["Game in a game", "Complete a game in a game."],
        ["Gibbs, gibbs everywhere", "Blow up three enemies at the same time"],
        ["Growing Stronger", "Complete a map with a Feat of Strength enabled."],
        ["Halfway Awesome", "Reach Rank 10."],
        ["Heavy Artillery", "Finish a map playing Sweet with the Long Range Specialisation, Core Guardian, and Long Range Superiority."],
        ["Hercules", "Complete a map with 5 Feats of Strength enabled."],
        ["Honey Badger don't care", "Recover from 1 HP three times without dying."],
        ["Hope Rides Alone", "Complete Facility, Rocky Fields, Giant Trees and Swamp."],
        ["Humble Beginnings", "Complete your first map."],
        ["I am SUPER ANGRY", "Finish a map playing Skye with Collateral Damage, Bloodletter and Adrenaline Rush."],
        ["Lab Rat", "Find the secret area on Bio Lab."],
        ["Leaving Loek III", "Complete Arc Islands with 5 Feats of Strength enabled."],
        ["Legolaser aimed shots", "Finish a map playing TSYGAN with Marksman, Steady Aim and Long Range Superiority."],
        ["Loekrise Kingdom", "Find the secret area on Outpost."],
        ["LOOK MOM, IM FLYING", "Finish a map playing Sweet with Rymdskor, Plumber shoes, and Upper Class."],
        ["McBirger's", "Complete Facility with 5 Feats of Strength enabled."],
        ["MLG noscope maximum skill", "Finish a map playing SiMo with Tactical Juxtaposition, Rymdskor and Trickster."],
        ["Moist", "Complete Swamp with 5 Feats of Strength enabled."],
        ["Mr. Perfect", "Complete all waves on a map without losing any core life."],
        ["Norwegian Wood", "Complete Giant Trees with 5 Feats of Strength enabled."],
        ["Not the Bees!", "Have 10 Drones from the Drone Launcher over an enemy."],
        ["One shot, one kill.", "Get a kill with every shot in the sniper clip."],
        ["Pliskeblaske", "Complete Coastline with 5 Feats of Strength enabled."],
        ["ROBOTS, ROBOTS EVERYWHERE", "Finish a map playing SiMo with the G2 Companion, Roboticist and Electrical Outburst."],
        ["Six Pack", "Complete six Game in a Games"],
        ["Slumdog Medicine", "Complete Brightholme."],
        ["Sniper Skye", "Finish a map playing Skye with Tactical Juxtaposition, Marksman, and Steady Aim."],
        ["Street Justice", "Finish a map playing Haigen with Spiked Armor, Desperate Measures and Hydra Blood."],
        ["Swedish police can't track this one", "Finish a map playing TSYGAN with Rymdskor, Trickster and Parthian Tactics."],
        ["Team Player", "Complete one level with 5 Feats of Strength enabled in Co-op."],
        ["The Bas(e)ics", "Build 20 tower bases."],
        ["The Best Defense is Offense", "Upgrade a tower to the max."],
        ["The Last Stand", "Complete Arc Islands."],
        ["Titan", "Reach rank 25."],
        ["Titan Slayer", "Reach rank 35."],
        ["Total Badass", "Complete Facility, Rocky Fields, Giant Trees and Swamp with 5 Feats of Strength enabled."],
        ["We don't go to Brightholme", "Complete Brightholme with 5 Feats of Strength enabled."],
    ];

    assert.strictEqual(officialAchievements.length, 50, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});

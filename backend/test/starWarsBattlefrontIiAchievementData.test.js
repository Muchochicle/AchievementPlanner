import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/star-wars-battlefront-ii.json - 43 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1237950 (fetched through this app's own services/steamApi.js).
// Hidden achievements ship no Steam description; their description here is
// researched from community 100% guides and cited in the frontend guide
// header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("star-wars-battlefront-ii");

test("getPlannerData('star-wars-battlefront-ii') returns real planner data with 43 curated achievements", () => {

    assert.ok(game, "expected real planner data for star-wars-battlefront-ii");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 43);

});

test("every STAR WARS Battlefront II achievement has a unique id from 1 to 43 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 43 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 43);
    assert.strictEqual(new Set(apinames).size, 43);

});

test("every STAR WARS Battlefront II achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 43 STAR WARS Battlefront II achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Dominating Presence", "In Multiplayer, boost 100 allies with the Officer commands."],
        ["A Galaxy at War", "Win one match in each Multiplayer game mode."],
        ["A Job Well Done", "Complete 25 Multiplayer Milestones."],
        ["Ashes of the Empire", "Complete the Resurrection story-update mission 'Ashes of the Empire', described here spoiler-free."],
        ["Balance Point", "Complete the campaign mission 'Balance Point', described here spoiler-free."],
        ["Battle Beyond the Stars", "Win a match of Galactic Assault."],
        ["Cache Grab", "Complete the campaign mission 'Cache Grab', described here spoiler-free."],
        ["Choose Your Path", "Defeat 50 enemies in Heroes Vs Villains."],
        ["Complete Your Training", "Complete all unique Battle Scenarios."],
        ["Dark Forces", "Complete the campaign mission 'Dark Forces', described here spoiler-free."],
        ["Discoveries", "Complete the campaign mission 'Discoveries', described here spoiler-free."],
        ["Do. Or Do Not. There is no Try.", "Play as all launch heroes in Multiplayer."],
        ["General Distress", "Complete the campaign mission 'General Distress', described here spoiler-free."],
        ["Heavy is the Hand", "Win a match of Heroes vs Villains"],
        ["Ignore Your Instincts At Your Peril", "Destroy 25 objectives in Starfighter Assault."],
        ["Inferno", "Complete the Resurrection story-update - 'Inferno', described here spoiler-free."],
        ["Master of Deception", "Complete the campaign - 'Master of Deception', described here spoiler-free."],
        ["Multi-tasking", "Defeat 25 Hero ships with Fighter ships."],
        ["Not All Miss", "In Multiplayer, defeat 3 enemies within one Vanguard usage 5 times."],
        ["Outbound Flight", "Win a match of Starfighter Assault."],
        ["Outcasts", "Complete the campaign mission 'Outcasts', described here spoiler-free."],
        ["Project: Resurrection", "Complete the Resurrection story-update mission 'Project: Resurrection', described here spoiler-free."],
        ["Quick Strike", "Be the first one to defeat an enemy in a Multiplayer match."],
        ["Royalty", "Complete the campaign mission 'Royalty', described here spoiler-free."],
        ["Scoped", "In Multiplayer, get 25 headshots with longblaster rifles."],
        ["Sentry Mode Engaged", "In Multiplayer, defeat 150 enemies with the Heavy's Sentry Gun."],
        ["Strike Back", "Win a match of Strike."],
        ["The Battle of Endor", "Complete the campaign mission 'The Battle of Endor', described here spoiler-free."],
        ["The Battle of Jakku", "Complete the campaign mission 'The Battle of Jakku', described here spoiler-free."],
        ["The Bomber", "Defeat 50 enemies using Dual Proton Torpedoes with the Bomber ship class."],
        ["The Cleaner", "Complete the campaign prologue 'The Cleaner', described here spoiler-free."],
        ["The Dauntless", "Complete the campaign mission 'The Dauntless', described here spoiler-free."],
        ["The Force is Strong With This One", "Reach Rank 50."],
        ["The Interceptor", "Get 20 Killstreaks with Interceptor ships."],
        ["The Observatory", "Complete the campaign mission 'The Observatory', described here spoiler-free."],
        ["The Storm", "Complete the campaign mission 'The Storm', described here spoiler-free."],
        ["There Has Been An Awakening", "Reach Rank 25."],
        ["There is No Such Thing As Luck", "Engage in an Arcade match."],
        ["Under Covered Skies", "Complete the campaign mission 'Under Covered Skies', described here spoiler-free."],
        ["Until Ashes", "Complete the campaign mission 'Until Ashes', described here spoiler-free."],
        ["We are the Spark", "Defeat 500 enemies as a hero on any Multiplayer map."],
        ["What a Blast", "Win a match of Blast."],
        ["X-wing vs. TIE Fighter", "Complete the campaign mission 'X-wing vs. TIE Fighter', described here spoiler-free."],
    ];

    assert.strictEqual(officialAchievements.length, 43, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});

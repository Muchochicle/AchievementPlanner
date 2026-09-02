import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/ys-viii-lacrimosa-of-dana.json - 54 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 579180 (fetched through this app's own services/steamApi.js).
// Hidden achievements ship no Steam description; their description here is
// researched from community 100% guides and cited in the frontend guide
// header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("ys-viii-lacrimosa-of-dana");

test("getPlannerData('ys-viii-lacrimosa-of-dana') returns real planner data with 54 curated achievements", () => {

    assert.ok(game, "expected real planner data for ys-viii-lacrimosa-of-dana");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 54);

});

test("every Ys VIII: Lacrimosa of DANA achievement has a unique id from 1 to 54 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 54 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 54);
    assert.strictEqual(new Set(apinames).size, 54);

});

test("every Ys VIII: Lacrimosa of DANA achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 54 Ys VIII: Lacrimosa of DANA achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A New Adventure", "See the game's true ending."],
        ["Adroit Artisan", "Achieved Lv. MAX with every skill."],
        ["Ancient Leaning Tower", "Story progress marker - reached at a specific point in the adventure, described here spoiler-free."],
        ["Beast Buster", "Defeated 2000 beasts."],
        ["Beast Expert", "Achieved 100% Beast Entries Logged."],
        ["Beyond the Nightmare", "See the true ending on Nightmare difficulty."],
        ["Castaway Cook", "Achieved 100% Meal Entries Logged."],
        ["Craftsman Supreme", "Fully enhanced all weapons."],
        ["Dark Eroded Valley", "Story progress marker - reached at a specific point in the adventure, described here spoiler-free."],
        ["Decorated Defender", "Completed all raids."],
        ["Demon Hunter", "Completed all hunts."],
        ["Dino Slayer", "Defeated 100 Primordials."],
        ["Elegant Wandering Maiden", "Thoroughly explored the map while playing as Dana in her flashback sections."],
        ["End of the Blue Waves", "Story progress marker - reached at the end of the adventure, described here spoiler-free."],
        ["Exceptional Service", "Completed every Castaway Village quest."],
        ["EXTRA Master", "Performed 100 EXTRA Skills."],
        ["Far-off Explorer", "Traveled a total distance of 300 krimelye."],
        ["Flash Guarder", "Performed 100 Flash Guards."],
        ["Flash Mover", "Performed 100 Flash Moves."],
        ["Fortified Village", "Achieved 100% Village Fortifications Built."],
        ["Grand Breaker", "Performed 1000 Breaks."],
        ["Hope Fulfilled", "Story progress marker - reached late in the adventure, described here spoiler-free."],
        ["Inherited Will", "Story progress marker - reached near the end of the adventure, described here spoiler-free."],
        ["Item Collector", "Achieved 100% Items Collected."],
        ["Lacrimosa of the Distant Sea", "Story progress marker - reached late in the adventure, described here spoiler-free."],
        ["Lone Transporter", "Thoroughly explored while playing as Hummel."],
        ["Maiden of the Great Tree", "Story progress marker - reached late in the adventure, described here spoiler-free."],
        ["Material Researcher", "Achieved 100% Material Entries Logged."],
        ["Night on the Gaete Sea", "Story progress marker - reached at a specific point in the adventure, described here spoiler-free."],
        ["People Person", "Achieved 100% People Entries Logged."],
        ["Perfect Map", "Completed the map of the Isle of Seiren."],
        ["Plainspoken Fisherman", "Thoroughly explored while playing as Sahad."],
        ["Prosperous Kingdom", "Cleared every Eternia quest during Dana's sections."],
        ["Proud Noblewoman", "Thoroughly explored while playing as Laxia."],
        ["Reaper of Hall", "Defeated the final boss in the Former Sanctuary Crypt - described here spoiler-free."],
        ["Red-Haired Adventurer", "Thoroughly explored while playing as Adol."],
        ["Reel Big Fisherman", "Achieved 100% Fish Entries Logged."],
        ["Refined Craftsman", "Enhanced a weapon to Lv. MAX."],
        ["Roaring Reputation", "Reached a Reputation of 200 or more with the Castaway Village."],
        ["Silence Breaker", "Defeated Mephorash at the Silent Tower - a story boss, described here spoiler-free."],
        ["Skill Finisher", "Performed a Skill Finish 1000 times."],
        ["Spirit Keeper", "Rescued every spirit in Eternia."],
        ["Splendid Tactician", "Achieved an S Rank in any raid."],
        ["Surpassing Gendarme", "Story progress marker - reached at a specific point in the adventure, described here spoiler-free."],
        ["Tenacious Wild Girl", "Thoroughly explored while playing as Ricotta."],
        ["The Castaway Banquet", "Story progress marker - reached at a specific point in the adventure, described here spoiler-free."],
        ["The Isle of Seiren", "Story progress marker - reached at a specific point in the adventure, described here spoiler-free."],
        ["The Lost World", "Story progress marker - reached at a specific point in the adventure, described here spoiler-free."],
        ["Thriving Village", "Brought all survivors to Castaway Village."],
        ["Towering Coral Forest", "Story progress marker - reached at a specific point in the adventure, described here spoiler-free."],
        ["Treasure Hunter", "Achieved 100% Treasures Found."],
        ["Triple Eights", "Owned 888 of a single item."],
        ["Village Superstar", "Achieved 100% Approval Earned."],
        ["Wide-eyed Wanderer", "Achieved 100% Location Points Found."],
    ];

    assert.strictEqual(officialAchievements.length, 54, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});

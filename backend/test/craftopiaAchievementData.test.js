import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/craftopia.json - 50 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1307550 (fetched through this app's own services/steamApi.js).
// Hidden achievements ship no Steam description; their description here is
// researched from community 100% guides and cited in the frontend guide
// header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("craftopia");

test("getPlannerData('craftopia') returns real planner data with 50 curated achievements", () => {

    assert.ok(game, "expected real planner data for craftopia");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 50);

});

test("every Craftopia achievement has a unique id from 1 to 50 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 50 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 50);
    assert.strictEqual(new Set(apinames).size, 50);

});

test("every Craftopia achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 50 Craftopia achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["1：4：9", "Craft Artificial Monolith."],
        ["1000 Practice Swings", "Obtain 10000 Stored Energies."],
        ["Beanstalk", "Reach the highest point of the big tree in Archipelago."],
        ["Beyond a Hundred Deaths", "Reach Floor 100 of the Boss Rush Dungeon."],
        ["Blasphemy Against Life", "Produce 100 or more lives at Breeding Facility."],
        ["Blasphemy Against the God", "Tame Anubis as a pet."],
        ["Breaker of the Divine Scales", "Defeat Lv 255 Anubis, Harbinger of Divine Punishment."],
        ["Breeder", "Reach Pet Level 50 or higher."],
        ["Calcium Deficiency", "Defeat Bone Dragon."],
        ["Chill Down the Spine", "Clear Ruin of Everfrost."],
        ["Coal Miner", "Mine from Bedrock with Excavator."],
        ["Conqueror of the Gate of Trials", "Reach Floor 10 of the Boss Rush Dungeon."],
        ["Craft of Tanks", "Craft War Tank."],
        ["Craftopia", "Unlock every other achievement in the game."],
        ["Death After Death", "Clear Old Garden of Undead."],
        ["Disassembler", "Reach Refinement Level 100 or higher."],
        ["Dragontamer", "Tame Dragon as a pet."],
        ["Enchanter", "Collect 300 or more kind of Enchantments."],
        ["Enter the Dungeon", "Clear Ruin of Beginning."],
        ["Forehead Flicking", "Defeat Ancient Golem."],
        ["Getting Bored of Slaying Dragons…", "Defeat Dragon."],
        ["Ground Zero", "Reach the deepest point of the large hole in Valley."],
        ["Gryps Conflict", "Defeat Griffon of Golden Sky."],
        ["Height Difference", "Repair Wedge Tower in Brigandine Valley."],
        ["Herbicide", "Defeat Fleur."],
        ["How Many Miles to the Summit?", "Reach Anubis's floating island."],
        ["How Much Is It Worth...?…？", "Repair Wedge Tower in Yarden Meadow's Ruin."],
        ["Is It Higher Than a Windmill?", "Repair Wedge Tower in Millewind Hill."],
        ["Landscape Protection", "Repair Wedge Tower in Owatatsu Archipelago."],
        ["Maneuver Kill", "Clear Old Garden of Storms."],
        ["Millionaire", "Obtain 100,000,000 G."],
        ["Noble Bullfrog", "Clear Labyrinth of Torrent."],
        ["Non-Humanitarian", "Tame Camille as a pet."],
        ["Over the Dungeon", "Clear Grinding Dungeon of Difficulty Hell 100 or more times."],
        ["Pipeline is Lifeline", "Build a continuous pipeline with 200 or more connections."],
        ["Power of Tower", "Repair Wedge Tower in Geezah Plateau."],
        ["Professional Jack of all Trades", "Complete 40 or more quests."],
        ["Put Food on the Table", "Put Livestock Farm in operation."],
        ["Right Spot to Find a Prey", "Repair Wedge Tower in Yarden Meadow's Mountain."],
        ["Shadow That Defies Judgment", "Defeat Lv 255 Judging God <<Anubis>>."],
        ["Skillful Executioner", "Clear Old Garden of Massacre."],
        ["Specialist", "Learn Tier 5 Skill."],
        ["Still Lower Than Mountains", "Repair Wedge Tower in Sherbert Iceberg."],
        ["The Highest Peak", "Reach the highest point of the pinnacle floating on top of the Sherbert Iceberg."],
        ["The Return of the King", "Defeat King Mono."],
        ["The sky's the limit...", "Launch Prototype Rocket."],
        ["This Mineral Used to Be Legendary", "Obtain Adamantite."],
        ["Veteran", "Reach Player Level 50 or higher."],
        ["Who's the Hunter Now?", "Clear Ruin of Hunters."],
        ["You'll Know Squid or Octopus If You Grill", "Catch Kraken."],
    ];

    assert.strictEqual(officialAchievements.length, 50, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});

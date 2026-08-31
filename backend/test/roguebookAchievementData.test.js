import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/roguebook.json - 61 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1076200 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("roguebook");

test("getPlannerData('roguebook') returns real planner data with 61 curated achievements", () => {

    assert.ok(game, "expected real planner data for roguebook");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 61);

});

test("every Roguebook achievement has a unique id from 1 to 61 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 61 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 61);
    assert.strictEqual(new Set(apinames).size, 61);

});

test("every Roguebook achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 61 Roguebook achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Adventuring Party", "Defeat the Roguebook with every pair of heroes"],
        ["Ancient One", "Unlock Aurora"],
        ["Archaeologist", "Collect 10 Treasures from the map."],
        ["Archivist", "Enter 1000 Magic Vaults."],
        ["Aurora Completionist", "Unlock all Aurora cards."],
        ["Aurora Mastery", "Play every Aurora card at least once."],
        ["Avatar of Greed", "Defeat the Avatar of Greed."],
        ["Avatar of Mist", "Defeat the Avatar of Mist."],
        ["Blessed Coin", "Earn over 100,000 gold."],
        ["Bulking up", "Unlock 5 Sorocco cards."],
        ["Carnage", "Gain 1000 Rage."],
        ["Champion", "Finish in the top 50% of a Story tournament."],
        ["Climbing High", "Visit 10 Sky Towers."],
        ["Come back here, Frog.", "Recover your treasure from Fugoro 10 times."],
        ["Conquering the Forest", "Defeat every boss in Chapter 1."],
        ["Conquering the Oversky", "Defeat every boss in Chapter 2."],
        ["Contender", "Participate in a Story tournament."],
        ["Cutting Through", "Unlock 5 Seifer cards."],
        ["Excavator", "Open 500 Gem stones"],
        ["Expert Archaeologist", "Collect 100 Treasures from the map."],
        ["Finalist", "Complete a Story tournament."],
        ["Fire Breath", "Have Sorocco deal 1000 area of effect damage."],
        ["Forbidden Frisbees", "Deal 1000 damage with Daggers."],
        ["Fugoro Completionist", "Unlock all Fugoro cards."],
        ["Fugoro Mastery", "Play every Fugoro card at least once."],
        ["Golden Pinatas", "Defeat 10 Golden Faeries."],
        ["Greed", "Complete a run with 1000 gold remaining."],
        ["Happy Little Tiles", "Reveal 10,000 tiles."],
        ["I can see my house from here", "Visit 500 Sky Towers."],
        ["Ink Mastery", "Use every type of ink at least once."],
        ["Just Borrowing", "Unlock 5 Fugoro cards."],
        ["Level Up", "Reach Party level 2."],
        ["Major Embellishment", "Purchase at least 1 Rank of every embellishment"],
        ["Master Archaeologist", "Collect 500 Treasures from the map."],
        ["Master the Mine", "Reach the end of a Gem Mine."],
        ["Miner", "Open 100 Gem stones"],
        ["Neverending Story", "Visit every original story event at least once."],
        ["New Game +", "Complete an Epilogue challenge."],
        ["New Horizons", "Visit 100 Sky Towers."],
        ["Numismatist", "Play 100 coins."],
        ["Prospector", "Open 10 Gem stones"],
        ["Roguebook Expert", "Complete a run at Epilogue level 10."],
        ["Roguebook Mastery", "Complete a run at max Epilogue level."],
        ["Seifer Completionist", "Unlock all Seifer cards."],
        ["Seifer Mastery", "Play every Seifer card at least once."],
        ["Sharra Completionist", "Unlock all Sharra cards."],
        ["Sharra Mastery", "Play every Sharra card at least once."],
        ["Slowly but Steady", "Unlock 5 Aurora cards."],
        ["Sorocco Completionist", "Unlock all Sorocco cards."],
        ["Sorocco Mastery", "Play every Sorocco card at least once."],
        ["Studying the Blade", "Unlock 5 Sharra cards."],
        ["Tea Party", "Actively use Aurora's Teapot 50 times."],
        ["The Forest of Erianor", "Complete Chapter 1."],
        ["The Full Experience", "Reach Maximum Party level."],
        ["The Oversky", "Complete Chapter 2."],
        ["The Ruins of Heartforge", "Complete Chapter 3."],
        ["Twins Chaos", "Defeat the Twins Chaos"],
        ["Unmask the Maniac", "Unlock Seifer"],
        ["Vault Discovery", "Enter 10 Magic Vaults."],
        ["Vault Explorer", "Enter 100 Magic Vaults."],
        ["You Are Known", "Mark 100 enemies."],
    ];

    assert.strictEqual(officialAchievements.length, 61, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});

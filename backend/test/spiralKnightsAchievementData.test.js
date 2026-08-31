import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/spiral-knights.json - 54 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 99900 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("spiral-knights");

test("getPlannerData('spiral-knights') returns real planner data with 54 curated achievements", () => {

    assert.ok(game, "expected real planner data for spiral-knights");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 54);

});

test("every Spiral Knights achievement has a unique id from 1 to 54 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 54 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 54);
    assert.strictEqual(new Set(apinames).size, 54);

});

test("every Spiral Knights achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 54 Spiral Knights achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Accomplished Alchemist", "Alchemize 25 items."],
        ["Adept Alchemist", "Alchemize 10 items."],
        ["An Emberlight in the Dark", "Pay a visit to Emberlight, the town of gremlin outcasts."],
        ["Applied Entropy", "Build an item to heat level 10."],
        ["Apprentice Alchemist", "Alchemize 5 items."],
        ["Armorer", "Amass 3 armors in your Arsenal."],
        ["Ascendant Alchemist", "Alchemize 50 items."],
        ["Bombardier", "Amass 3 bombs in your Arsenal."],
        ["Bronze Survivor", "Complete a Tier 1 expedition without having to revive."],
        ["Conditioned Response", "Use 10 Remedy Capsules."],
        ["Cradle and All", "Travel the entire Clockworks from depth 0 to depth 29 in a single expedition."],
        ["Dauntless Delver", "Travel the entire Clockworks from depth 0 to depth 29 in a single expedition without having to revive."],
        ["Energize!", "Power up a derelict Mecha Knight."],
        ["Expert Armorer", "Amass 5 armors in your Arsenal."],
        ["Expert Bombardier", "Amass 5 bombs in your Arsenal."],
        ["Expert Gunslinger", "Amass 5 guns in your Arsenal."],
        ["Expert Hatter", "Amass 5 helmets in your Arsenal."],
        ["Expert Shieldbearer", "Amass 5 shields in your Arsenal."],
        ["Expert Swordsman", "Amass 5 swords in your Arsenal."],
        ["First Steps", "Successfully reach the Rescue Camp."],
        ["Five-Star Smith", "Alchemize a 5 star item."],
        ["Four-Star Smith", "Alchemize a 4 star item."],
        ["Free Spirit", "Defeat Lord Vanaduke in the heart of the Firestorm Citadel."],
        ["Fully Loaded", "Unlock and fill every equipment slot."],
        ["Go Deep", "Earn clearance to explore Tier 3 of the Clockworks."],
        ["Gold Survivor", "Complete a Tier 3 expedition without having to revive."],
        ["Gunslinger", "Amass 3 guns in your Arsenal."],
        ["Hardcore", "Descend to the Core Terminal."],
        ["Hatter", "Amass 3 helmets in your Arsenal."],
        ["Helping Hand", "Revive a downed party member."],
        ["Jump Start", "Revive yourself."],
        ["Mad Hatter", "Amass 10 helmets in your Arsenal."],
        ["Master Armorer", "Amass 10 armors in your Arsenal."],
        ["Master Bombardier", "Amass 10 bombs in your Arsenal."],
        ["Master Gunslinger", "Amass 10 guns in your Arsenal."],
        ["Master Shieldbearer", "Amass 10 shields in your Arsenal."],
        ["Master Swordsman", "Amass 10 swords in your Arsenal."],
        ["Mission Accomplished", "Reach the first Clockworks Terminal."],
        ["O Frabjous Day!", "Defeat the fabled Snarbolax that lives deep within the Gloaming Wildwoods."],
        ["One-Star Smith", "Alchemize a 1 star item."],
        ["Pharma Suitable", "Use 10 Health Capsules."],
        ["Royal Pain", "Defeat the Royal Jelly squatting in the Royal Jelly Palace."],
        ["Shieldbearer", "Amass 3 shields in your Arsenal."],
        ["Silver Survivor", "Complete a Tier 2 expedition without having to revive."],
        ["Son of a Nutcracker!", "Hit an opponent with a snowball in Lockdown."],
        ["Spiral Spelunker", "Earn clearance to explore Tier 2 of the Clockworks."],
        ["Star-Spangled Bomber", "Obtain a Firecracker bomb."],
        ["Stellar Set", "Amass an Arsenal that includes a 5 star helmet, armor, shield, gun and bomb."],
        ["Swordsman", "Amass 3 swords in your Arsenal."],
        ["Terrible Twin Turrets", "Defeat the Roarmulus Twins."],
        ["Three-Star Smith", "Alchemize a 3 star item."],
        ["Two-Star Smith", "Alchemize a 2 star item."],
        ["Welcome, Stranger", "Cross the chasm into Haven."],
        ["World of Moorcraft", "Pay a visit to Moorcraft Manor."],
    ];

    assert.strictEqual(officialAchievements.length, 54, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});

import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/fallen-enchantress-legendary-heroes.json - 54 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 228260 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("fallen-enchantress-legendary-heroes");

test("getPlannerData('fallen-enchantress-legendary-heroes') returns real planner data with 54 curated achievements", () => {

    assert.ok(game, "expected real planner data for fallen-enchantress-legendary-heroes");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 54);

});

test("every Fallen Enchantress: Legendary Heroes achievement has a unique id from 1 to 54 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 54 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 54);
    assert.strictEqual(new Set(apinames).size, 54);

});

test("every Fallen Enchantress: Legendary Heroes achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 54 Fallen Enchantress: Legendary Heroes achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Great Seeker", "Win by completing the Master Quest."],
        ["A Leader of Men", "Win by defeating all of your opponents."],
        ["A Mighty Sorcerer", "Win by casting the Spell of Making."],
        ["Adventurer", "Complete a quest."],
        ["Ally from the Swamp", "Recruit Tuatha"],
        ["Built a City", "All nations start with one."],
        ["Captured a City", "You have captured an enemy city!"],
        ["Champion", "Reach level 15 with a champion."],
        ["Darkling Allies", "Recruit Nen Ratcatcher"],
        ["Defeat the Guardian of the World's End", "You've managed to slay Vetrar!"],
        ["Defeat the Lord Who Dwells Below", "You've managed to slay Abeix!"],
        ["Defeat the Lord Who Levels Mountains", "You've managed to slay Torax!"],
        ["Defeat the Pyre of Man", "You've managed to slay Delin!"],
        ["Defeat the Ruin of Summer", "You've managed to slay Morian!"],
        ["Defeated an Army", "You have defeated an army!"],
        ["Defeated Sovereign in Battle", "You defeated a sovereign in battle!"],
        ["Dragon Slayer", "Not since Peter MacNicol has one been slain!"],
        ["Expansionist", "Control 5 cities in a single game."],
        ["Experienced", "Play for 5 hours."],
        ["Expert", "Play for 10 hours."],
        ["Exploiter", "Tap 10 resources in a single game."],
        ["Explorer", "Explore 10 goodie huts in a single game."],
        ["Exterminator", "Defeat a faction."],
        ["Forging Armies", "Design a unit."],
        ["Guard from the Tomb", "Recruit Mausolos"],
        ["Hardcore", "Play for 40 hours."],
        ["Hero", "Reach level 5 with a champion."],
        ["Lady Umber's Assassin", "Recruit Ascian"],
        ["Legendary Hero", "Awarded for completion of the Legendary Hero scenario."],
        ["Lord of Necromancy", "Recruit Gallowman"],
        ["Monster Killer", "You killed a monster!"],
        ["Nice Pants!", "Create a custom sovereign."],
        ["One...More...Turn....", "Play for 100 hours."],
        ["Peacemaker", "Win by forging an alliance with all players."],
        ["Population Manager", "Win and have at least 3,000 population."],
        ["Ratslayer", "Complete 10 quests in a single game."],
        ["Recruited an NPC", "Your Fame has lead a hero to your cause."],
        ["Rise of Altar", "Win as Altar."],
        ["Rise of Capitar", "Win as Capitar."],
        ["Rise of Gilden", "Win as Gilden."],
        ["Rise of Kraxis", "Win as Kraxis."],
        ["Rise of Magnar", "Win as Magnar."],
        ["Rise of Pariden", "Win as Pariden."],
        ["Rise of Resoln", "Win as Resoln."],
        ["Rise of Tarth", "Win as Tarth."],
        ["Rise of Umber", "Win as Umber."],
        ["Rise of Yithril", "Win as Yithril."],
        ["Shopper", "Buy an item from a shop."],
        ["The Brood Warden Champion", "Recruit Kasst"],
        ["The Desert Mage", "Recruit Raza the Wild"],
        ["Trader", "Make 1000 gildar from selling items in shops."],
        ["Urban Sprawl", "Get a city to level 5 in one game."],
        ["Veteran", "Play for 20 hours."],
        ["Waiting Out the Clock", "Win by having the highest score by the turn limit."],
    ];

    assert.strictEqual(officialAchievements.length, 54, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});

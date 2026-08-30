import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/dragon-quest-xi.json - 57 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1295510 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("dragon-quest-xi");

test("getPlannerData('dragon-quest-xi') returns real planner data with 57 curated achievements", () => {

    assert.ok(game, "expected real planner data for dragon-quest-xi");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 57);

});

test("every Dragon Quest XI S achievement has a unique id from 1 to 57 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 57 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 57);
    assert.strictEqual(new Set(apinames).size, 57);

});

test("every Dragon Quest XI S achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 57 Dragon Quest XI S achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Close Call", "Awarded for coming face-to-face with incredible danger, and living to tell the tale."],
        ["A Disciple Worthy of the Name", "Awarded for overcoming a taxing trial and mastering a secret skill."],
        ["A Momentous Decision", "Awarded for making a difficult decision at the end of an already long and arduous quest."],
        ["A Spark Still Shines", "Awarded for setting out into a benighted land to take up your quest again."],
        ["Adventure Awaits!", "Awarded for receiving a warm welcome to Heliodor."],
        ["Beast Blaster", "Awarded for defeating 1000 monsters."],
        ["Beating the House", "Awarded for awakening a new and exciting power."],
        ["Best of the Bastion", "Awarded for claiming a decisive victory and returning light to the land."],
        ["Big Hitter", "Awarded for crafting a +3 piece of equipment on the Fun-Size Forge."],
        ["Bigger Fish to Fry", "Awarded for returning peace to the seas."],
        ["Casino Connoisseur", "Awarded for attaining 10 casino-related accolades."],
        ["Chef de Classe de Médailles", "Awarded for completing the third page of your album de médailles."],
        ["Coming of Age", "Awarded for completing the coming of age ceremony atop Cobblestone Tor."],
        ["Dark Art", "Awarded for saving the village of Phnom Nonh."],
        ["Dedicated Follower of Fashion", "Awarded for collecting all appearance-altering equipment."],
        ["Echoes of an Elusive Age", "Awarded for solving the myriad mysteries of Erdrea."],
        ["Expert Itemologist", "Awarded for collecting 500 different types of item."],
        ["Flawless Sorceress", "Awarded for mastering the way of the wizard."],
        ["Forging Ahead", "Awarded for crafting 10 items on the Fun-Size Forge."],
        ["Hot Spring Hero", "Awarded for saving Hotto from a fiery fate."],
        ["Ice-Breaker", "Awarded for saving the kingdom of Sniflheim from disaster."],
        ["If At First You Don't Succeed", "Awarded for reworking 10 items on the Fun-Size Forge."],
        ["Knight Exemplar", "Awarded for mastering the way of the knight."],
        ["Knight of the Living Dread", "Awarded for bringing an end to an endless nightmare."],
        ["Light of Hope", "Awarded for filling your companions' hearts with hope."],
        ["Living Legend", "Awarded for earning all available achievements."],
        ["Magic Moments", "Awarded for spending some quality time with a special someone."],
        ["Master of the Skies", "Awarded for being fully prepared for the ultimate fight."],
        ["Master Thief", "Awarded for mastering the way of the thief."],
        ["Megastar", "Awarded for mastering the way of the entertainer."],
        ["Mount Olympian", "Awarded for successfully riding six or more mountable monsters."],
        ["New Horizons", "Awarded for setting out in search of new lands."],
        ["Next-Level Luminary", "Awarded for mastering the way of the Luminary."],
        ["Out-Stand-In", "Awarded for having a good run at a good race."],
        ["Peppy-Go-Lucky", "Awarded for performing 25 pep powers."],
        ["Puff-Puff Buff", "Awarded for experiencing the pleasure of the Puff-Puff in all its many forms."],
        ["Quest to Impress", "Awarded for completing 40 quests."],
        ["Ready as We'll Ever Be", "Awarded for obtaining an abiding symbol of hope."],
        ["Saviour of All Erdrea", "Awarded for defeating the Lord of Shadows and restoring the World Tree to its rightful place."],
        ["Saviour of the Tockles' Scriptures", "Awarded for saving all the worlds of the past from certain destruction."],
        ["Sea-Crossed Lovers", "Awarded for easing the heart of an ill-omened lover."],
        ["Sibling Revivalry", "Awarded for achieving a long-awaited atonement."],
        ["Soldier of Smile", "Awarded for encountering some steadfast allies."],
        ["Swordsmith of Light", "Awarded for crafting the finest of all weapons on the Fun-Size Forge."],
        ["Terra Incognita", "Awarded for making your way to an unknown land."],
        ["The Final Fight", "Awarded for fulfilling your destiny at last."],
        ["The Loveliest Catch", "Awarded for reviving an ancient legend."],
        ["The Power of the Luminary", "Awarded for witnessing the power of the Luminary first-hand."],
        ["The World Tree", "Awarded for reaching Yggdrasil at last and learning the truth."],
        ["Ultimate Enlightenment", "Awarded for overcoming the challenges of the Wheel of Harma."],
        ["Undisputed Champion", "Awarded for mastering the way of the martial artist."],
        ["Undisputed Champion of Erdrea", "Awarded for becoming a hero of the Octagonian arena."],
        ["Venerable Elder", "Awarded for mastering the way of the sage."],
        ["Virtuoso Healer", "Awarded for mastering the way of the healer."],
        ["Wild Blue Yonder", "Awarded for opening the gates to the wider world."],
        ["Worrywart", "Awarded for taking extra-special care to ensure that everyone is 100% fighting fit at all times."],
        ["Yggdrasil's Chosen", "Awarded for encountering some steadfast new allies."],
    ];

    assert.strictEqual(officialAchievements.length, 57, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});

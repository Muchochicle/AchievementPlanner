import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/final-fantasy-xii-zodiac-age.json - 41 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 595520 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("final-fantasy-xii-zodiac-age");

test("getPlannerData('final-fantasy-xii-zodiac-age') returns real planner data with 41 curated achievements", () => {

    assert.ok(game, "expected real planner data for final-fantasy-xii-zodiac-age");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 41);

});

test("every FINAL FANTASY XII: The Zodiac Age achievement has a unique id from 1 to 41 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 41 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 41);
    assert.strictEqual(new Set(apinames).size, 41);

});

test("every FINAL FANTASY XII: The Zodiac Age achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 41 FINAL FANTASY XII: The Zodiac Age achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Traitor Redeemed", "Escaped from the Nalbina Dungeons."],
        ["Assault Striker", "Used Attack 300 times."],
        ["Blood Dancer", "Defeated 500 foes."],
        ["Cartographer", "Fully explored every map."],
        ["Champion of Ivalice", "Collected all other achievements."],
        ["Collector", "Obtained a Morbid Urn."],
        ["Conqueror", "Earned 48,000 License Points."],
        ["Eagle Eye", "Defeated Deathgaze."],
        ["Exemplar", "Raised your party's average level above 50."],
        ["Fated Meeting", "Rescued the Princess of Dalmasca."],
        ["Fell Angel", "Defeated Ultima."],
        ["For the Homeland", "Faced the Archadian Empire as an initiate in the Order of the Knights of Dalmasca."],
        ["Freshmaker", "Defeated Carrot."],
        ["Galbana Bloom", "Defeated your first mark."],
        ["High Summoner", "Obtained every Esper."],
        ["Hunter Extraordinaire", "Defeated Yiazmat."],
        ["Imperator", "Completed the 100th trial."],
        ["Jack-of-All-Trades", "Learned every Technick."],
        ["Judge Magister", "Completed the 50th trial."],
        ["Lord of the Kings", "Defeated the Behemoth King."],
        ["Master Swordsman", "Defeated Gilgamesh."],
        ["Master Thief", "Successfully stole 50 times."],
        ["Mist Walker", "Performed every Concurrence."],
        ["Plunderer", "Acquired 100,000 gil."],
        ["Premier Prestidigitator", "Used Technicks 100 times."],
        ["Privateer", "Sold 1,000 pieces of loot."],
        ["Radiant Savior", "Defeated the Hell Wyrm."],
        ["Record Breaker", "Obtained 500,000 Clan Points."],
        ["Reins of History", "Faced Doctor Cid."],
        ["Runeweaver", "Learned every Magick."],
        ["Scrivener", "Completed the Bestiary."],
        ["Sharpshooter", "Defeated the Trickster."],
        ["Spellslinger", "Cast Magicks 200 times."],
        ["Spendthrift", "Spent 1,000,000 gil."],
        ["The Mist Seethes", "Obtained the Dawn Shard."],
        ["The Unrelenting", "Completed a 50-chain in battle."],
        ["Visions of the Dreamer", "Set out from Mt Bur-Omisace."],
        ["Wayfarer", "Took 50,000 steps."],
        ["Wings of My Own", "Restored peace to Ivalice."],
        ["Wyrmslayer", "Defeated Fafnir."],
        ["Zodiac Knight", "Defeated Zodiark."],
    ];

    assert.strictEqual(officialAchievements.length, 41, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});

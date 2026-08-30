import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/dragons-dogma-dark-arisen.json - 59 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 367500 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("dragons-dogma-dark-arisen");

test("getPlannerData('dragons-dogma-dark-arisen') returns real planner data with 59 curated achievements", () => {

    assert.ok(game, "expected real planner data for dragons-dogma-dark-arisen");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 59);

});

test("every Dragon's Dogma: Dark Arisen achievement has a unique id from 1 to 59 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 59 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 59);
    assert.strictEqual(new Set(apinames).size, 59);

});

test("every Dragon's Dogma: Dark Arisen achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 59 Dragon's Dogma: Dark Arisen achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["100 ", "Reached LV 100."],
        ["200 ", "Reached LV 200."],
        ["A New Ally", "Summoned your own pawn."],
        ["A Queen's Regalia", "Dressed a male party member in women's clothing."],
        ["Affinity and Beyond", "Raised a person's affinity to the maximum."],
        ["Cheat Death", "Defeated Death in Bitterblack Isle."],
        ["Closure", "Put an end to all things."],
        ["Come Courting", "Attended an audience with the duke."],
        ["Conqueror", "Defeated Daimon for the first time."],
        ["Destiny", "Accepted the Godsbane blade."],
        ["Dragon Forged", "Strengthened equipment in wyrmfire."],
        ["Eye Contact", "Defeated an evil eye."],
        ["Eye Gouger", "Defeated the Gazer in Bitterblack Isle."],
        ["Foreign Recruit", "Enlisted a pawn to your party from beyond the rift."],
        ["Freedom", "Escaped the yoke of eternity."],
        ["Getting a Head", "Earned the approval of the Enlistment Corps."],
        ["Hardened Veteran", "Completed game in Hard Mode."],
        ["Headshunter", "Defeated a hydra or archydra."],
        ["Human Resources", "Changed your vocation."],
        ["Inhuman Resources", "Changed your main pawn's vocation."],
        ["Into Dripstone Cave", "Entered the azure caverns."],
        ["Into Soulflayer Canyon", "Entered the Soulflayer Canyon."],
        ["Into the Ancient Quarry", "Entered the ancient quarry."],
        ["Into the Frontier Caverns", "Entered the southwestern caves."],
        ["Into the Manse", "Entered the duke's manse."],
        ["It Begins", "Completed the prologue."],
        ["Local Recruit", "Directly enlisted a pawn to your party."],
        ["Mercy", "Dealt the blow of deliverance."],
        ["Onward", "Departed from Cassardis."],
        ["Peace", "Took refuge in an illusion."],
        ["Rough Landing", "Completed the urgent mission."],
        ["Serpents' Bane", "Defeated a drake, wyrm, and wyvern."],
        ["Servitude", "Soar unto a new world."],
        ["Solitude", "Obtained the almighty power of sovereignty."],
        ["The Artisan", "Combined two materials to make an item."],
        ["The Captain", "Enlisted a large number of pawns."],
        ["The Coin Collector", "Earned a total of 10,000,000G."],
        ["The Courier", "Entered Gran Soren."],
        ["The Escort", "Acted as a reliable travel companion."],
        ["The Ever-Turning Wheel", "Completed the adventure a second time."],
        ["The Explorer", "Visited 150 locations."],
        ["The Hero", "Completed all pre-planned, non-notice board quests."],
        ["The Inquisitor", "Defeated the Dark Bishop in Bitterblack Isle."],
        ["The Knave", "Obtained a forgery."],
        ["The Laborer", "Completed 50 notice board quests."],
        ["The Message", "Received the duke's commendation."],
        ["The Messiah", "Defeated the Ur-Dragon."],
        ["The Patron", "Helped Madeleine open her shop."],
        ["The Philanthropist", "Gave 50 presents."],
        ["The Savior", "Used a Wakestone to restore the dead to life."],
        ["The Specialist", "Learned all the skills of a single vocation."],
        ["The Sprinter", "Completed game in Speedrun mode."],
        ["The Tourist", "Visited 50 locations."],
        ["The Vagabond", "Visited 100 locations."],
        ["The Veteran", "Defeated 3,000 enemies."],
        ["Treacherous", "Peered into the very depths of the world."],
        ["True Conqueror", "Defeated Daimon in his true form."],
        ["Well Equipped", "Obtained 350 pieces total of weapons and armor."],
        ["Writ Large", "Received a writ from the castle."],
    ];

    assert.strictEqual(officialAchievements.length, 59, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});

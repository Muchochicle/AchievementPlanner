import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/resident-evil-village.json - 56 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1196590 (fetched through this app's own services/steamApi.js).
// 41 of 56 ship a real, official Steam description, quoted
// verbatim below. The 15 hidden achievements ship no
// Steam description; their conditions here are curatorial, cross-checked
// against PowerPyx, TrueAchievements/XboxAchievements and the Resident
// Evil Wiki, and kept spoiler-light (boss/act name only).
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("resident-evil-village");

test("getPlannerData('resident-evil-village') returns real planner data with 56 curated achievements", () => {

    assert.ok(game, "expected real planner data for resident-evil-village");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 56);

});

test("every Resident Evil Village achievement has a unique id from 1 to 56 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 56 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 56);
    assert.strictEqual(new Set(apinames).size, 56);

});

test("every Resident Evil Village achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 41 officially-described Resident Evil Village achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const hiddenApinames = new Set([
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "20",
        "24",
        "31",
        "42",
        "45",
        "53",
    ]);

    assert.strictEqual(hiddenApinames.size, 15, "sanity check - Resident Evil Village has 15 hidden achievements");

    const officialAchievements = [
        ["Art Collector", "View all concept art."],
        ["Artisan", "Collect every crafting recipe."],
        ["Best Dad Ever", "Finish the story on at least Standard difficulty."],
        ["Bookworm", "Read every single file in the story."],
        ["Combo King", "Get a combo of at least 30 during The Mercenaries."],
        ["Crafter", "Craft an item in the Crafting menu."],
        ["Craftsmaster", "Craft every type of item in Shadows of Rose."],
        ["Cynic", "Destroy a Goat of Warding."],
        ["Dashing Dad", "Finish the story within 3 hours."],
        ["Doll Collector", "View all character and weapon models."],
        ["Fast Reflexes", "Knock a flaming arrow out of the sky with a close combat weapon in the story."],
        ["Frugal Father", "Finish the story without spending more than 10,000 Lei."],
        ["Get the Ball Rolling", "Solve a Labyrinth."],
        ["Great Dad", "Finish the story on at least Casual difficulty."],
        ["Green Teen", "Finish Shadows of Rose on at least Casual difficulty."],
        ["Gunsmith", "Equip a gun with a customizable part."],
        ["Heretic", "Destroy all the Goats of Warding."],
        ["Hooligan", "Break every breakable window in Castle Dimitrescu in a single playthrough."],
        ["Hunter", "Hunt an animal during the story."],
        ["Leader of the Pack", "Take down the Vârcolac Alfa in the story."],
        ["Legendary Cowboy", "Achieve at least an S Rank on all stages in The Mercenaries."],
        ["Lucky Number 7", "Have 777, 7,777, or 77,777 Lei in your possession in the story."],
        ["Mapmatician", "Complete the village map."],
        ["Medium Rare", "Set fire to a Moroaică in the story."],
        ["Patron", "Purchase something from the Duke in the story."],
        ["Petty Thief", "Unlock a simple lock with a lockpick."],
        ["Photographer", "Use Photo Mode."],
        ["Push Comes to Shove", "Push away an enemy after guarding in the story."],
        ["Repairer", "Combine a treasure into its complete form."],
        ["River of Blood", "Complete the Bloody River in Additional Orders."],
        ["Serene Teen", "Finish Shadows of Rose on at least Standard difficulty."],
        ["Squawk Shot", "Shoot down five flying crows in the story."],
        ["Strategist", "Defeat at least three enemies with one attack in the story."],
        ["Supreme Teen", "Finish Shadows of Rose on Hardcore difficulty."],
        ["Tinkerer", "Create every type of item available in the Crafting menu."],
        ["Trick Shot", "Defeat an enemy from long range with the sniper rifle in the story."],
        ["Universe's Best Dad", "Finish the story on the Village of Shadows difficulty."],
        ["Veteran Gunsmith", "Equip every gun with their customizable parts in the story."],
        ["Village of Blood", "Complete the Bloody Village in Additional Orders."],
        ["When You Gotta Go...", "Open the door to every outhouse in the village in a single playthrough."],
        ["World's Best Dad", "Finish the story on at least Hardcore difficulty."],
    ];

    assert.strictEqual(officialAchievements.length, 41, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .filter(a => !hiddenApinames.has(a.apiname))
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});

test("the 15 hidden Resident Evil Village achievements each keep their real name and a non-empty curatorial description", () => {

    const names = [
        ["1", "Not Lycan This..."],
        ["2", "Four Lords"],
        ["3", "That Sucked!"],
        ["4", "Got No Strings"],
        ["5", "Fish Out of Water"],
        ["6", "Up Urs!"],
        ["7", "Temporary Measures"],
        ["8", "Iron Giant Down"],
        ["9", "The Root of the Matter"],
        ["20", "Goooaaal!"],
        ["24", "Quit Hanging Around"],
        ["31", "Timber"],
        ["42", "Don't Trust That Snake Oil"],
        ["45", "Knives Out"],
        ["53", "It's Starting to Grow on Me"],
    ];

    assert.strictEqual(names.length, 15, "sanity check on this test's own reference list");

    for (const [apiname, name] of names) {

        const achievement = game.achievements.find(a => a.apiname === apiname);

        assert.ok(
            achievement && achievement.name === name && achievement.description.length > 0,
            `expected ${apiname} to be named "${name}" with a non-empty curatorial description`
        );

    }

});

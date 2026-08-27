import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/loop-hero.json - 50 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1282730 (fetched through this app's own services/steamApi.js) - 42
// of 50 ship a real, official Steam description. The 8 remaining
// hidden achievements are all built around the game's four chapter
// bosses (the Lich, the Priestess, the Hunter, and Omega) - Steam
// never describes any of them publicly (confirmed via the same API
// call). Their descriptions here are curatorial, based on
// cross-agreeing community documentation of the consistent pattern:
// each boss has one achievement for its first defeat and a second for
// defeating it multiple times (three times for the Lich, Priestess,
// and Hunter; six times for Omega). difficulty/estimatedTime remain
// curatorial judgments, same convention as every other planner
// difficulty/time field in this catalog.
const loopHero = getPlannerData("loop-hero");

test("getPlannerData('loop-hero') returns real planner data with 50 curated achievements", () => {

    assert.ok(loopHero, "expected real planner data for loop-hero");
    assert.ok(Array.isArray(loopHero.achievements));
    assert.strictEqual(loopHero.achievements.length, 50);

});

test("every Loop Hero achievement has a unique id from 1 to 50 and a unique apiname", () => {

    const ids = loopHero.achievements.map(a => a.id);
    const apinames = loopHero.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 50 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 50);
    assert.strictEqual(new Set(apinames).size, 50);

});

test("every Loop Hero achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

    for (const achievement of loopHero.achievements) {

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

test("every one of the 42 officially-described Loop Hero achievement name+description pairs matches the live GetSchemaForGame response", () => {

    // The 8 hidden achievements (the four chapter bosses) are excluded
    // here - Steam never exposes a public description for them - and
    // covered by their own dedicated test below instead.
    const officialAchievements = [
        ["New beginning", "Embark on your first expedition"],
        ["Practically a job", "Embark on your tenth expedition"],
        ["Go-getter", "Embark on your fiftieth expedition"],
        ["First time?", "Die for the first time"],
        ["Groundhog day", "Die ten times"],
        ["Trickster", "Unlock the \"Rogue\" class"],
        ["Grandma says hello", "Unlock the \"Necromancer\" class"],
        ["First blood", "Kill 5 enemies"],
        ["Lost count", "Kill 1000 enemies"],
        ["Trophy collection", "Kill each enemy"],
        ["Part of the world", "Find 100 resources"],
        ["Make a puzzle", "Find all possible types of resources"],
        ["Can't get it back", "Lose 100 resources"],
        ["Foundation stone", "Build the first camp structure"],
        ["Hole in memory", "Dismantle a camp structure"],
        ["Always been here?", "Build the river"],
        ["Small town", "Build all the possible camp structures"],
        ["What's not tied down", "Get 5 camp items"],
        ["Collector", "Get all the camp items"],
        ["From dust and sticks", "Craft 5 items"],
        ["Handyman", "Craft 25 items"],
        ["Easier than making", "Dismantle 5 items"],
        ["Barbarian", "Dismantle 10 items"],
        ["Not gold...", "Synthesize 5 resource with alchemy"],
        ["Still not gold...", "Synthesize 100 resources"],
        ["Alchemist's apprentice", "Transmute 5 resources into hydrogen"],
        ["Don't breathe it in", "Transmute 50 resources into hydrogen"],
        ["Scholar", "Unlock a chapter in the encyclopedia"],
        ["Observer", "Unlock 50 chapters in the encyclopedia"],
        ["Book worm", "Unlock all the encyclopedia"],
        ["Small talker", "Read 50 different dialogues"],
        ["Cardsharp", "Place 1000 cards"],
        ["As anew", "Fill the whole map"],
        ["See the world and not die", "See all the possible tiles"],
        ["Tripped", "Die outside of battle"],
        ["Bartender! Refill!", "Drink 50 potions"],
        ["Around the world", "Complete 100 loops"],
        ["Undying", "Die and resurrect 3 times in one expedition"],
        ["Crunchy company", "Have 10 living skeletons in one battle"],
        ["Fence", "Get 10 orange items in exchange for the trophies in camp"],
        ["In time for lunch", "Defeat the boss in the first expedition"],
        ["Broken geography", "In one expedition place 10 cards you didn't have in your deck, not counting \"Oblivion\""]
    ];

    assert.strictEqual(officialAchievements.length, 42, "sanity check on this test's own reference list");

    const hiddenNames = new Set([
        "Just starting out", "Punching bag", "Glass Queen", "Faith alone is not enough",
        "For whom the horn tolls...", "Hunter's Nightmare", "Memory pieces", "Godslayer"
    ]);

    const dataPairs = loopHero.achievements
        .filter(a => !hiddenNames.has(a.name))
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});

test("the 8 Steam-silent hidden achievements (the four chapter bosses) each still have their own real name and a non-empty curatorial description", () => {

    const hiddenApinames = [
        ["NEW_ACHIEVEMENT_3_5", "Just starting out"],
        ["NEW_ACHIEVEMENT_3_6", "Punching bag"],
        ["NEW_ACHIEVEMENT_3_7", "Glass Queen"],
        ["NEW_ACHIEVEMENT_3_8", "Faith alone is not enough"],
        ["NEW_ACHIEVEMENT_3_9", "For whom the horn tolls..."],
        ["NEW_ACHIEVEMENT_3_10", "Hunter's Nightmare"],
        ["NEW_ACHIEVEMENT_3_11", "Memory pieces"],
        ["NEW_ACHIEVEMENT_3_12", "Godslayer"]
    ];

    assert.strictEqual(hiddenApinames.length, 8, "sanity check on this test's own reference list");

    for (const [apiname, name] of hiddenApinames) {

        const achievement = loopHero.achievements.find(a => a.apiname === apiname);

        assert.ok(achievement && achievement.name === name && achievement.description.length > 0, `expected ${apiname} to be named "${name}" with a non-empty curatorial description`);

    }

});

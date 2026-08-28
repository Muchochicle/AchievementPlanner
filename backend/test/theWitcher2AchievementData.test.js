import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/the-witcher-2.json - 52 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 20920 (fetched through this app's own services/steamApi.js).
// 38 of 52 ship a real, official Steam description, quoted
// verbatim below. The 14 hidden achievements ship no Steam
// description; their conditions here are curatorial, cross-checked against
// each game's wiki plus community 100% guides, and kept spoiler-light.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("the-witcher-2");

test("getPlannerData('the-witcher-2') returns real planner data with 52 curated achievements", () => {

    assert.ok(game, "expected real planner data for the-witcher-2");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 52);

});

test("every The Witcher 2: Assassins of Kings achievement has a unique id from 1 to 52 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 52 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 52);
    assert.strictEqual(new Set(apinames).size, 52);

});

test("every The Witcher 2: Assassins of Kings achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 38 officially-described The Witcher 2: Assassins of Kings achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const hiddenApinames = new Set([
        "ACH_TENDRAKE_DEAD",
        "ACH_DRAUG_DEAD",
        "ACH_DRAGON_DEAD",
        "ACH_LASTDRAGON",
        "ACH_STATE_REASON",
        "ACH_KINGMAKER",
        "ACH_NECROMANT",
        "ACH_SPELLBREAKER",
        "ACH_WITCHHUNTER",
        "ACH_SAMARITAN",
        "ACH_AVENGER",
        "ACH_OLDFRIENDSHIP",
        "ACH_SUMMER",
        "ACH_WINTER",
    ]);

    assert.strictEqual(hiddenApinames.size, 14, "sanity check - The Witcher 2: Assassins of Kings has 14 hidden achievements");

    const officialAchievements = [
        ["Alea Iacta Est", "Complete Chapter 2."],
        ["Apprentice", "Use alchemy to brew five potions or oils."],
        ["Artful Dodger", "Cut off a tentacle using the kayran trap."],
        ["Backbone", "Craft a suit of armor from elements of the kayran's carapace."],
        ["Black Ops", "Sneak through the lower camp without raising the alarm."],
        ["Craftsman", "Hire a craftsman to create an item."],
        ["Eagle Eye", "Hit Count Etcheverry using the ballista."],
        ["Focus", "Perform three successful ripostes in a row."],
        ["Friend of Trolls", "Spare all trolls in the game."],
        ["Gambler", "Win an arm wrestling match, a dice poker game and a fist fight."],
        ["Gladiator", "Defeat all opponents in the Kaedweni arena."],
        ["Great Potion!", "Brew the ostmurk potion."],
        ["Guru", "Achieve character level 35."],
        ["Heartbreaker", "Seduce Ves."],
        ["Intimidator", "Intimidate someone."],
        ["Journeyman", "Achieve character level 10."],
        ["Librarian", "Find all additional information about the insane asylum's history."],
        ["Madman", "Finish the game while playing at the Insane difficulty level."],
        ["Man of the Shadows", "Successfully sneak through Loredo's garden and find the component of the kayran trap."],
        ["Master Alchemist", "Acquire the Mutant ability."],
        ["Master of Magic", "Acquire the Sense of Magic ability."],
        ["Miser", "Collect 10000 orens."],
        ["Mutant!", "Enhance abilities using mutagens at least five times."],
        ["Once Ain't Enough", "Reach the Epilogue of the game."],
        ["Perfectionist", "Kill 10 foes in a row without losing any Vitality."],
        ["Pest Control", "Finish all quests involving the destruction of monster nests."],
        ["Poker!", "Roll five-of-a-kind at dice poker."],
        ["Ricochet", "Kill a foe by deflecting his own arrow at him."],
        ["Swordmaster", "Acquire the Combat Acumen ability."],
        ["Taster", "Drink one potion."],
        ["The Butcher of Blaviken", "Kill 500 foes."],
        ["The Fugitive", "Finish the Prologue."],
        ["Threesome", "Kill three foes at once by performing a group finisher."],
        ["To Aedirn!", "Complete Chapter 1."],
        ["To Be Continued...", "Finish the game at any difficulty level."],
        ["Torn Asunder!", "Kill more than one opponent using a single exploding bomb."],
        ["Tourist", "Tour the camp with Zyvik."],
        ["Trollslayer", "Kill all the trolls in the game."],
    ];

    assert.strictEqual(officialAchievements.length, 38, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .filter(a => !hiddenApinames.has(a.apiname))
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});

test("the 14 hidden The Witcher 2: Assassins of Kings achievements each keep their real name and a non-empty curatorial description", () => {

    const names = [
        ["ACH_TENDRAKE_DEAD", "Oh My God! You Killed the Kayran! You Bastards!"],
        ["ACH_DRAUG_DEAD", "Fat Man"],
        ["ACH_DRAGON_DEAD", "Being Witcher George"],
        ["ACH_LASTDRAGON", "Dragonheart"],
        ["ACH_STATE_REASON", "Reasons of State"],
        ["ACH_KINGMAKER", "Kingmaker"],
        ["ACH_NECROMANT", "Necromancer"],
        ["ACH_SPELLBREAKER", "Spellbreaker"],
        ["ACH_WITCHHUNTER", "Witch Hunter"],
        ["ACH_SAMARITAN", "Sensitive Guy"],
        ["ACH_AVENGER", "Avenger"],
        ["ACH_OLDFRIENDSHIP", "Old Friends"],
        ["ACH_SUMMER", "Summer Solstice"],
        ["ACH_WINTER", "Winter Solstice"],
    ];

    assert.strictEqual(names.length, 14, "sanity check on this test's own reference list");

    for (const [apiname, name] of names) {

        const achievement = game.achievements.find(a => a.apiname === apiname);

        assert.ok(
            achievement && achievement.name === name && achievement.description.length > 0,
            `expected ${apiname} to be named "${name}" with a non-empty curatorial description`
        );

    }

});

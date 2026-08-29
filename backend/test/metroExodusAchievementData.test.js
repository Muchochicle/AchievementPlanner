import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/metro-exodus.json - 68 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 412020 (fetched through this app's own services/steamApi.js).
// 58 of 68 ship a real, official Steam description, quoted
// verbatim below. The 10 hidden achievements ship no Steam description;
// their conditions here are curatorial, cross-checked against the game's
// wiki plus community 100% guides, and kept spoiler-light.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("metro-exodus");

test("getPlannerData('metro-exodus') returns real planner data with 68 curated achievements", () => {

    assert.ok(game, "expected real planner data for metro-exodus");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 68);

});

test("every Metro Exodus achievement has a unique id from 1 to 68 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 68 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 68);
    assert.strictEqual(new Set(apinames).size, 68);

});

test("every Metro Exodus achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 58 officially-described Metro Exodus achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const hiddenApinames = new Set([
        "coachman",
        "d1",
        "righteous_vengeance",
        "carmaheddon",
        "d2",
        "a3",
        "full_band",
        "all_bad",
        "all_good",
        "dlc_01_dodge_master",
    ]);

    assert.strictEqual(hiddenApinames.size, 10, "sanity check - Metro Exodus has 10 hidden achievements");

    const officialAchievements = [
        ["5 o'clock", "Take part in the Admiral's tea party on the TAIGA level."],
        ["A Man of Principle", "Complete the SAM'S STORY chapter earning the Captain's full trust."],
        ["Antibiotic", "Kill 300 mutants."],
        ["Aurora", "Name the locomotive."],
        ["Cinephile", "Organize a documentary screening in the SAM'S STORY chapter."],
        ["Complete road map", "Find maps in the laboratory."],
        ["Decommunization", "Destroy the biggest statue in front of the children's camp on the TAIGA level."],
        ["Dressed for Success", "Find all upgrades for Artyom's suit."],
        ["Driver", "Drive the Bukhanka."],
        ["Duty and conscience", "Make a moral choice in THE TWO COLONELS Chapter."],
        ["Exodus", "Complete the MOSCOW level."],
        ["Father and son", "Provide guidance for Kirill in THE TWO COLONELS Chapter."],
        ["Firebird", "Kill a demon with fire."],
        ["Fisherman", "Kill the Catfish."],
        ["Forest child", "Complete the TAIGA level without attacking anyone or getting noticed."],
        ["Friend of the Crew", "Find the guitar and teddy bear on the VOLGA level."],
        ["Gor'ko!", "Attend the wedding on the SUMMER level."],
        ["Great Owl", "Find all the Night Hunters' secret stashes in the SAM'S STORY chapter."],
        ["Guide", "Pass the Research Facility without killing a Blind One on the DEAD CITY level."],
        ["Gunsmith", "Install a modification of each category on a single weapon."],
        ["Handyman", "Spend 500 consumable resources on crafting."],
        ["Hardcore", "Complete the game in Ranger Hardcore mode."],
        ["Headhunter", "Kill 300 human enemies."],
        ["Iron Mode", "Complete the game in Iron Mode."],
        ["It's just a scratch", "Complete THE TWO COLONELS Chapter without using any Medkits on Normal or higher difficulty."],
        ["Join us on air", "Find a tune on the radio."],
        ["Kaleidoscope", "Kill 3 enemies using sniper scope while wearing the Gas mask and using the Night Vision goggles."],
        ["Last Breath", "After running out of filters in a hazard zone, craft a new one while suffocating."],
        ["Librarian", "Find all 70 hidden Diary pages."],
        ["Long distance passenger", "Find the passenger train car."],
        ["Lord of War", "Collect all the upgrades for Sammy rifle and Stallion pistol in the SAM'S STORY chapter."],
        ["Lower the Bridge", "Complete the VOLGA level."],
        ["Martian", "Patch the Gasmask."],
        ["Master of the Forest", "Stand your ground against the Bear at the first encounter."],
        ["Mind you, it's quite heavy!", "Kill 3 Nosalises with flamethrower's melee attack in THE TWO COLONELS Chapter."],
        ["Music Lover", "Collect all harmonica melodies in the SAM'S STORY chapter."],
        ["Mutation", "Complete the game in New Game+ mode using any modification."],
        ["New order", "Complete the CASPIAN level."],
        ["New Year", "Celebrated the New Year in THE TWO COLONELS Chapter."],
        ["Old world pictures", "Find all 21 post cards."],
        ["Professional", "Make at least one kill with every ranged weapon."],
        ["Putrification", "Pass the putrid tunnel."],
        ["Railwayman", "Get into the Trolley."],
        ["Real Colonel", "Complete THE TWO COLONELS Chapter."],
        ["Regatta", "Get into a boat."],
        ["Robin Hood", "Kill 30 enemies with Crossbow."],
        ["Roller coaster", "Use the bucket lift on the CASPIAN level to reach the Oasis."],
        ["Saboteur", "Melee-kill or stun 50 enemies."],
        ["Silent marksman", "Kill 30 enemies with Tikhar."],
        ["Spoiled dinner", "Complete the YAMANTAU level."],
        ["Stand back", "Kill 50 enemies at long distance."],
        ["Sword of Damocles", "Complete the TAIGA level."],
        ["The Last Hero", "Complete the SAM'S STORY chapter."],
        ["The whole picture", "Find all 9 hidden Diary pages in THE TWO COLONELS Chapter."],
        ["Tidyman", "Spend 500 chemical resources on cleaning weapons."],
        ["Toy seller", "Find 3 toys in New Game+ mode: teddy bear, sun and fish."],
        ["Trapper", "Set all 5 traps in the SAM'S STORY chapter as the Captain requests."],
        ["Untouchable", "Complete SAM'S STORY on Normal or higher difficulty without dying in Batwing encounters."],
    ];

    assert.strictEqual(officialAchievements.length, 58, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .filter(a => !hiddenApinames.has(a.apiname))
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});

test("the 10 hidden Metro Exodus achievements each keep their real name and a non-empty curatorial description", () => {

    const names = [
        ["coachman", "Brakeman"],
        ["d1", "Duke"],
        ["righteous_vengeance", "Righteous vengeance"],
        ["carmaheddon", "Carmaheddon"],
        ["d2", "Damir"],
        ["a3", "Alyosha"],
        ["full_band", "Full Strength"],
        ["all_bad", "Eternal Voyage"],
        ["all_good", "Your Destination"],
        ["dlc_01_dodge_master", "Dodge master"],
    ];

    assert.strictEqual(names.length, 10, "sanity check on this test's own reference list");

    for (const [apiname, name] of names) {

        const achievement = game.achievements.find(a => a.apiname === apiname);

        assert.ok(
            achievement && achievement.name === name && achievement.description.length > 0,
            `expected ${apiname} to be named "${name}" with a non-empty curatorial description`
        );

    }

});

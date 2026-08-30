import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/age-of-wonders-3.json - 74 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 226840 (fetched through this app's own services/steamApi.js).
// None are hidden. 1 achievement(s) ship a blank official
// description despite not being hidden (a Steam/dev data gap) and keep a
// curatorial description instead; every other one is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("age-of-wonders-3");

test("getPlannerData('age-of-wonders-3') returns real planner data with 74 curated achievements", () => {

    assert.ok(game, "expected real planner data for age-of-wonders-3");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 74);

});

test("every Age of Wonders III achievement has a unique id from 1 to 74 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 74 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 74);
    assert.strictEqual(new Set(apinames).size, 74);

});

test("every Age of Wonders III achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 74 Age of Wonders III achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Adventurer", "Complete a quest"],
        ["Archdruid's Triumph", "Win any level with the Archdruid leader class"],
        ["Best Friends Forever", "Form an alliance"],
        ["Blacksmith", "Create an item in the item forge"],
        ["Caster", "Have 50 casting points on your leader"],
        ["Cats Rule Everything", "Win any level with a Tigran leader"],
        ["Challenger", "Start an online game"],
        ["Champion of the Commonwealth", "Win the campaign for the Commonwealth"],
        ["Champion of the Elven Court", "Win the campaign for the Elven Court"],
        ["Champion of Wonders", "Win 10 online games"],
        ["Cold as Ice", "Freeze an enemy unit"],
        ["Community Member", "Play a user created map"],
        ["Dedicated Monogamist", "Max out the race governance for one race in a single game"],
        ["Deep Friendships", "Obtain a Reef Colony"],
        ["Don't Fear the Reaper", "Summon a Dread Reaper"],
        ["Dreadnought's Triumph", "Win any level with the Dreadnought leader class"],
        ["Elephant Whisperer", "Befriend an elephant"],
        ["First Blood", "Win a tactical battle"],
        ["First!!", "Complete an empire quest"],
        ["For Whom the Bell Tolls", "Kill a leader with Invoke Death "],
        ["Fortune's Favor", "Maximize a unit's luck"],
        ["Fourteenth Bloodline", "Obtain a Naga dwelling"],
        ["Friend of Monsters", "Acquire a dwelling"],
        ["Going Postal", "Participate in a PBEM game"],
        ["Grand Master of Wonders", "Win 30 online games"],
        ["Great Unifier", "Win a unifier victory"],
        ["Interracial Harmony", "Max out the race governance for three races in a single game"],
        ["Iron Sky", "Win any level with a Grey Guard leader"],
        ["Join Me in Death", "Recruit a Necromancer hero"],
        ["Keep the Faith", "Win any level with a Keeper of Peace leader"],
        ["Kittens Everywhere", "Have six Tigran cities in a single game"],
        ["Lady of Darkness", "Summon a Fallen Angel"],
        ["Lady of Justice", "Summon a Chthonic Guardian"],
        ["Lady of Light", "Summon an Arch Angel"],
        ["Liberator", "Liberate an oppressed enemy city via a betrayal event"],
        ["Living in a Ghost Town", "Animate a ruined town"],
        ["Mama?", "Hatch an egg"],
        ["Master of Eternal Magic", "Win the Eternal Lords Campaign for the Shadowborn"],
        ["Master of Eternal Silence", "Win the Eternal Lords campaign for the Undead"],
        ["Master of Eternal Winter", "Win the Eternal Lords Campaign for the Frostlings"],
        ["Master of the Unknown", "Win a random scenario"],
        ["Mine Crafted", "A Minecraft reference: recruit the special hero \"Notch\" (Per Notchson), a Human Dreadnought hero wearing a pilgrim hat and monocle who appears among your recruitable heroes. To improve the odds of finding him, start as a Human leader, enable \"Random Heroes match player race\" in Advanced Rules, and raise the Max Number of Heroes."],
        ["Mystical City", "Build a city specialization upgrade"],
        ["Necromancer's Triumph", "Win any level with the Necromancer leader class"],
        ["Overlord", "Get a pure evil alignment"],
        ["Paradise City", "Produce all city-upgrades in a single city"],
        ["Party Pooper", "Use throw filth on an enemy"],
        ["Power Unleashed", "Win any level by claiming a seal victory"],
        ["Protector of the Light", "Get a pure good alignment"],
        ["Rebel of the Commonwealth", "Win as Commonwealth defector"],
        ["Rebel of the Elven Court", "Win as Elven Court defector"],
        ["Represent", "Create a custom leader"],
        ["Rogue's Triumph", "Win any level with the Rogue leader class"],
        ["Scholar", "Research all skills in a single game"],
        ["Scorched Earth", "Raze or plunder a town"],
        ["Seasoned", "Promote a unit to gold"],
        ["Seaworthy", "Embark a unit"],
        ["Settling Down", "Found an outpost"],
        ["Shadowfall", "Win any level with a Shadowborn leader"],
        ["Siege Master", "Win a siege battle"],
        ["Silver Tongue", "Acquire an independent town through diplomacy"],
        ["Sorcerer's Triumph", "Win any level with the Sorcerer leader class"],
        ["Talent Scout", "Recruit 3 heroes in a single game"],
        ["Taste of Victory", "Win an online game"],
        ["The Importance of Being Ernest", "Win the campaign for the Golden Realm"],
        ["Theocrat's Triumph", "Win any level with the Theocrat leader class"],
        ["To Heal a Frozen Heart", "Kill a frozen enemy"],
        ["Treasure Raider", "Clear an exploration site"],
        ["V-Mail", "Win a PBEM game"],
        ["Warlord's Triumph", "Win any level with the Warlord leader class"],
        ["Well Equipped", "Fill all equipment slots on a single leader or hero"],
        ["Who Wants to Live Forever", "Research Harbingers of Death"],
        ["Winter Has Come", "Win any level with a Frostling leader"],
        ["You Work for Me Now", "Force the AI to surrender to you"],
    ];

    assert.strictEqual(officialAchievements.length, 74, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});

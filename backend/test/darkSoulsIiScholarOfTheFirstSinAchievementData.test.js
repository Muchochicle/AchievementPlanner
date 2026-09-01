import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/dark-souls-ii-scholar-of-the-first-sin.json - 38 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 335300 (fetched through this app's own services/steamApi.js).
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("dark-souls-ii-scholar-of-the-first-sin");

test("getPlannerData('dark-souls-ii-scholar-of-the-first-sin') returns real planner data with 38 curated achievements", () => {

    assert.ok(game, "expected real planner data for dark-souls-ii-scholar-of-the-first-sin");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 38);

});

test("every Dark Souls II: Scholar of the First Sin achievement has a unique id from 1 to 38 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 38 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 38);
    assert.strictEqual(new Set(apinames).size, 38);

});

test("every Dark Souls II: Scholar of the First Sin achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 38 Dark Souls II: Scholar of the First Sin achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Abysmal Covenant", "Discover the Pilgrims of Dark covenant (speak to Darkdiver Grandahl in the Shaded Ruins, the Black Gulch and Drangleic Castle)."],
        ["Ancient Dragon", "Acquire the Ashen Mist Heart - reach the Dragon Shrine through Aldia's Keep and speak to the Ancient Dragon."],
        ["Brightstone Bonfire", "Light the primal bonfire in Brightstone Cove Tseldora (after defeating Duke's Dear Freja)."],
        ["Brilliant Covenant", "Discover the Heirs of the Sun covenant (examine the broken Sunlight shrine in Harvest Valley)."],
        ["Change of Clothes", "Give Rosabeth of Melfia something to wear (free her with a Fragrant Branch of Yore and equip her with armour)."],
        ["Clangorous Covenant", "Discover the Bell Keepers covenant (speak to the Bell Keeper's Dwarf at Belfry Luna or Belfry Sol)."],
        ["Covenant of Ancients", "Discover the Dragon Remnants covenant (obtain the Petrified Egg from the Dragon Shrine, then speak to Magerold of Lanafir in the Iron Keep while holding it)."],
        ["Covenant of the Fittest", "Discover the Champion's Covenant (examine Victor's Stone tablet on the cliff in Majula)."],
        ["Covenant of the Meek", "Discover the Way of the Blue covenant (exhaust Crestfallen Saulden's dialogue in Majula)."],
        ["Curious Map", "Light all the flames on the Majula map (defeat eight bosses and obtain two key items, then speak to Cale)."],
        ["Garrulous Miser", "Inherit Laddersmith Gilligan's equipment (buy his ladder in Earthen Peak, defeat Mytha, then buy all three ladders in Majula and exhaust his dialogue)."],
        ["Gathering of Exiles", "Increase Majula's population by getting seven specific NPCs to relocate there."],
        ["Gesture Maestro", "Learn all gestures"],
        ["Gnawing Covenant", "Discover the Rat King covenant (defeat the Royal Rat Vanguard or Royal Rat Authority and speak to the Rat King)."],
        ["Gulch Bonfire", "Light the primal bonfire in the Black Gulch (after defeating the Rotten)."],
        ["Holder of the Fort", "Inherit Captain Drummond's equipment (with the Ashen Mist Heart, defeat the Giant Lord in the Memory of Jeigh, then return to Drummond)."],
        ["Iron Keep Bonfire", "Light the primal bonfire in the Iron Keep (after defeating the Old Iron King)."],
        ["King's Ring", "Acquire the King's Ring (defeat the boss in the Undead Crypt and take the item in the room behind)."],
        ["Last Giant", "Defeat the Last Giant in the Forest of Fallen Giants."],
        ["Looking Glass Knight", "Defeat the Looking Glass Knight in Drangleic Castle."],
        ["Lucatiel", "Inherit Lucatiel of Mirrah's equipment (exhaust her dialogue at all three meeting spots and ensure she survives three boss fights, then meet her in Aldia's Keep)."],
        ["Master of Hexes", "Learn all hexes"],
        ["Master of Miracles", "Learn all miracles"],
        ["Master of Pyromancy", "Learn all pyromancies"],
        ["Master of Sorcery", "Learn all sorceries"],
        ["Moonlight Greatsword", "Inherit Benhart of Jugo's equipment"],
        ["Protector Covenant", "Discover the Blue Sentinels covenant (defeat the Old Dragonslayer, then speak to Blue Sentinel Targray with a Token of Fidelity)."],
        ["Reflections on Disembodiment", "Inherit the equipment of the head of Vengarl (find his helmet in the Shaded Woods clearing and speak to it repeatedly)."],
        ["Sanguinary Covenant", "Discover the Brotherhood of Blood covenant (speak to Titchy Gren in Undead Purgatory with a Token of Spite)."],
        ["Self Recollection", "Reclaim flesh and set out as an Undead"],
        ["Selfless Giver", "Max-out devotion to covenant"],
        ["Sinner's Bonfire", "Light the primal bonfire in Sinner's Rise (after defeating the Lost Sinner)."],
        ["Smith for Life", "Inherit Steady Hand McDuff's equipment (free him, obtain the Dull Ember, and spend 14,000 souls on infusions with him)."],
        ["Supreme Weapon", "Reinforce a weapon to its limit"],
        ["The Dark Soul", "Earn all achievements"],
        ["The Heir", "See the ending (complete the game)."],
        ["This is Dark Souls", "Die for the first time"],
        ["Vendrick", "Defeat Vendrick (an optional boss in the Undead Crypt - collect Giant Souls first to weaken him)."],
    ];

    assert.strictEqual(officialAchievements.length, 38, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});

import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/underrail.json - 55 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 250520 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("underrail");

test("getPlannerData('underrail') returns real planner data with 55 curated achievements", () => {

    assert.ok(game, "expected real planner data for underrail");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 55);

});

test("every UnderRail achievement has a unique id from 1 to 55 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 55 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 55);
    assert.strictEqual(new Set(apinames).size, 55);

});

test("every UnderRail achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 55 UnderRail achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Acid Trip", "Kill 50 enemies with acid"],
        ["Antisocial Tendencies", "Kill 100 humans"],
        ["Back To The Shooting Range...", "Miss 10 aimed shots"],
        ["Backalley Pugilism", "Kill 50 enemies unarmed or with fist weapons"],
        ["Biodeicide", "Kill Tchort, the game's final boss."],
        ["Can't Touch This!", "Evade 3 attacks in a row in a single turn"],
        ["Chuck Attack", "Kill an enemy with Dirty Kick"],
        ["Die by the Sword", "Kill 50 enemies with a sword"],
        ["Do You Feel Lucky, Punk?", "Kill an enemy with the last bullet in the magazine"],
        ["Fire and Ice", "Kill 50 enemies with metathermic psi abilities"],
        ["Fire in the Hole!", "Kill 50 enemies with grenades"],
        ["First Blood!", "Kill a living creature"],
        ["Hitman", "Kill 10 humans using the Execute attack"],
        ["I'm Afraid I Can't Let You Do That", "Get killed by the same robot 3 times in one sitting"],
        ["Impaler", "Kill 50 enemies with a spear"],
        ["It's Always the Blue Wire", "Disarm 50 traps"],
        ["It's Buggy", "Kill 100 insectoids"],
        ["It's Hammer Time!", "Kill 50 enemies with a sledgehammer"],
        ["It's Super Effective!", "Deal over 500 damage with a weapon or an unarmed attack"],
        ["Just a Flesh Wound", "Survive an attack with 1 health"],
        ["Kleptomaniac", "Steal 30 items"],
        ["Look At All The Pretty Stars", "Stun enemies 30 times"],
        ["Look Into My Eyes", "Kill 50 enemies with thought control psi abilities"],
        ["Manual Override", "Hack 50 electronic locks"],
        ["Mine, All Mine!", "Kill 50 enemies with traps"],
        ["Mr. Freeze", "Freeze enemies 30 times"],
        ["Mr. Stabby", "Kill 50 enemies with a knife"],
        ["Mutated Happily Ever After", "Finish the game through the mutant-exclusive endgame - available only after transforming via Mutagen D5 and following the Mutant questline."],
        ["Now You See Me...", "Successfully restealth during combat"],
        ["One Shot - One Kill", "Snipe down a full health enemy"],
        ["Pain Free", "Use 15 morphine shots"],
        ["Phasers Set to Kill", "Kill 50 enemies with energy weapons"],
        ["Put this Apple on Your Head", "Kill 50 enemies with a crossbow"],
        ["Pyromaniac", "Ignite enemies 30 times"],
        ["Rat Meat Gourmand", "Eat 50 meals"],
        ["Reach Out and Touch Somebody", "Kill 50 enemies with psychokinetic psi abilities"],
        ["Resisted Arrest", "Incapacitate enemies 30 times"],
        ["Rest In Pieces", "Shatter an enemy"],
        ["Run and Gun", "Kill 50 enemies with firearms"],
        ["Shroomhead", "Pick 100 mushrooms"],
        ["Skeleton Key", "Pick 50 mechanical locks"],
        ["Snoop Dog", "Discover 10 hidden objects or passages (traps don't count)"],
        ["Somebody Called For an Exterminator?", "Kill 100 rathounds"],
        ["Someone Need A Chill Pill?", "Chill enemies 50 times"],
        ["Spray And Pray", "Kill 3 enemies with a single burst attack"],
        ["Tactical Retreat", "Leave an area during combat"],
        ["Terminator Exterminator", "Kill 50 robots"],
        ["The Other Side", "Use 50 psi boosters"],
        ["There Can Be Only One", "Kill your doppelganger"],
        ["Thrill Junkie", "Use 30 adrenaline shots"],
        ["Universal Recipient", "Use 50 health hypos"],
        ["What Does This Button Do?", "Short-circuit enemies 30 times"],
        ["Within The Budget", "Kill 5 enemies with a single grenade"],
        ["You Throw Like a Girl", "Kill only yourself with a grenade"],
        ["Your Time is Up!", "Kill 50 enemies with temporal manipulation psi abilities"],
    ];

    assert.strictEqual(officialAchievements.length, 55, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});

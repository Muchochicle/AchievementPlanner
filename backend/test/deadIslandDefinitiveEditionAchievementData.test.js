import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/dead-island-definitive-edition.json - 57 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 383150 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("dead-island-definitive-edition");

test("getPlannerData('dead-island-definitive-edition') returns real planner data with 57 curated achievements", () => {

    assert.ok(game, "expected real planner data for dead-island-definitive-edition");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 57);

});

test("every Dead Island: Definitive Edition achievement has a unique id from 1 to 57 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 57 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 57);
    assert.strictEqual(new Set(apinames).size, 57);

});

test("every Dead Island: Definitive Edition achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 57 Dead Island: Definitive Edition achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["10 heads are better than 1", "Kill 10 zombies in a row with headshots."],
        ["A taste of everything", "Kill a zombie with 10 different melee weapons."],
        ["A very special day", "Kill 250 zombies with modified weapons."],
        ["Ah! Spoiled meat!", "Kill a Butcher using an axe."],
        ["Banoi Redemption", "Complete act 4."],
        ["Busy, busy, busy", "Finish 75 quests cumulatively."],
        ["Can't touch this", "Use a hammer to kill a series of 15 zombies without taking damage."],
        ["Cardio", "Travel a distance of 20 kilometers on foot."],
        ["Catch!", "Kill an Infected with a grenade blast."],
        ["Complete a set", "During a single round kill an Infected, Suicider, Ram, Butcher, Floater, Walker."],
        ["Death Incarnate", "Survive wave 30."],
        ["Dedicated student", "Reach level 25."],
        ["Everybody lies", "Use a large medkit to heal an injury of 5% or less."],
        ["Extreme Firefighting", "Set 5 enemies on fire and then kill them with explosives."],
        ["Fancy", "Survive 10 consecutive waves using only custom weapons."],
        ["First!", "Kill a Suicider with a grenade."],
        ["Gesundheit!", "Heal yourself with a medkit 100 times."],
        ["Gladiator school", "Survive 15 consecutive waves with each of the 4 characters."],
        ["Going steady", "Complete 25 quests while playing with at least one co-op partner."],
        ["Gotta find'em all", "Find 60 collectibles."],
        ["Guns don't kill but they help", "Kill 250 zombies using firearms."],
        ["Hack & slash", "Kill 250 zombies using edged melee weapons."],
        ["Hell in paradise", "Complete act 1."],
        ["How many days exactly?", "Play Dead Island - Definitive Edition at least 28 days after starting it for the first time."],
        ["Humanitarian", "Kill 50 human enemies."],
        ["I want one of those", "Customize 25 weapons."],
        ["Karma-geddon", "Kill 50 zombies using a vehicle."],
        ["King of the jungle", "Complete act 3."],
        ["Knock, knock", "Breach a locked door with the first blow."],
        ["Learning the ropes", "Reach level 10."],
        ["Light my fire", "Set 10 zombies on fire simultaneously."],
        ["Looking for trouble", "Survive 5 waves in each of the 4 Arenas."],
        ["Ménage à trois", "Complete 5 quests with 3 co-op partners."],
        ["Morituri te salutant", "Survive 30 consecutive waves with at least one co-op player."],
        ["Nearly there", "Find 120 collectibles."],
        ["Need a hand?", "Join another player's game."],
        ["No raccoons in here", "Complete act 2."],
        ["Oh, no you don't", "Kill a Ram using tackle skill."],
        ["One is all I need", "Kill 5 Infected in a row with a single blow."],
        ["Originality", "Play in a co-op team of 4 different playable characters."],
        ["Out of honey? Chew bees!", "Survive 5 waves using only your fists and legs."],
        ["People Person", "Play with 10 different co-op partners for at least 15 minutes each."],
        ["Rageman", "Kill 100 enemies with Fury attacks."],
        ["Right 4 Life", "Complete act 1 with 4 different characters."],
        ["Road Trip", "Drive a total distance of 10 kilometers."],
        ["Rootin' Tootin' Lootin'", "Loot 5 Exceptional Weapons."],
        ["Savior", "Save 5 people besieged by zombies."],
        ["School of hard knocks", "Reach level 50."],
        ["Steam Punk", "Create weapons to rival the gods of fire or thunder."],
        ["Stick it to the enemy", "Survive 15 consecutive waves using the analog combat controls."],
        ["Tae Kwon Leap", "Kill 25 zombies with your bare fists."],
        ["There and back again", "Explore the entire island."],
        ["Tis but a flesh wound!", "Sever 100 limbs."],
        ["To put it bluntly", "Kill 250 zombies using blunt melee weapons."],
        ["Together in the light", "Complete 5 quests in a single co-op game with the same partners."],
        ["Warranty Void if Used", "Create a customized weapon."],
        ["Wave and Smile", "Play any Arena in co-op."],
    ];

    assert.strictEqual(officialAchievements.length, 57, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});

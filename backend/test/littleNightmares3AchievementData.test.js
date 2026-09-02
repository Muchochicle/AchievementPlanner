import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/little-nightmares-3.json - 44 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1392860 (fetched through this app's own services/steamApi.js).
// Hidden achievements have no Steam description; where present, their
// description here is researched and cited in the frontend guide header.
// difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("little-nightmares-3");

test("getPlannerData('little-nightmares-3') returns real planner data with 44 curated achievements", () => {

    assert.ok(game, "expected real planner data for little-nightmares-3");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 44);

});

test("every Little Nightmares III achievement has a unique id from 1 to 44 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 44 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 44);
    assert.strictEqual(new Set(apinames).size, 44);

});

test("every Little Nightmares III achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 44 Little Nightmares III achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Aim Low (and Alone)", "Win a prize every time"],
        ["Another One in the Bag", "Nothing but net (profits)"],
        ["Birdbrained", "Always ruffling feathers"],
        ["Bullseye", "You gotta aim high"],
        ["Candy Shop", "Sweets for my sweet"],
        ["Capital Punishment", "You're heading for a shock"],
        ["Child's Play", "Complete Chapter 1: Necoropolis."],
        ["Clean Up Your Act", "You may need a raincoat"],
        ["Delivery Feed", "From store to (cage) door"],
        ["DLC0201", "Reserved for unreleased DLC content; Steam has not published this achievement's real name or unlock criteria yet."],
        ["DLC0202", "Reserved for unreleased DLC content; Steam has not published this achievement's real name or unlock criteria yet."],
        ["DLC0203", "Reserved for unreleased DLC content; Steam has not published this achievement's real name or unlock criteria yet."],
        ["DLC0204", "Reserved for unreleased DLC content; Steam has not published this achievement's real name or unlock criteria yet."],
        ["DLC0205", "Reserved for unreleased DLC content; Steam has not published this achievement's real name or unlock criteria yet."],
        ["DLC0206", "Reserved for unreleased DLC content; Steam has not published this achievement's real name or unlock criteria yet."],
        ["Exit Stage Fright", "Survive until the curtain call"],
        ["Filed Away", "Nothing left in the medicine cabinet"],
        ["From Nowhere, With Love", "Complete every chapter while playing as Alone (chapter select allowed)."],
        ["Guiding Hands", "We're connected, you and I"],
        ["Hand-Eye Coordination", "You've stayed at arm's length"],
        ["Hello?", "You can always call on me"],
        ["Home Sweet Nome", "Ready or not, here I come"],
        ["Illuminating Experiences", "The gift of second sight"],
        ["Institutionalized", "The Kids Aren't Alright"],
        ["Just the Ticket", "Keep your eye on the prize"],
        ["Light or Flight", "Look on the bright side"],
        ["Loose Threads", "Little shapes of big things to come"],
        ["Low-Spirited", "Complete every chapter while playing as Low (chapter select allowed)."],
        ["Mastery of The Spiral", "Keep on turning"],
        ["Omnipresence", "Far or near, she can make us fear"],
        ["Peekaboo", "There's a twinkle in that eye"],
        ["Picture Perfect", "A revealing experience"],
        ["Puppet Master", "You didn't break a leg"],
        ["Shadow Puppets", "Flash the mob"],
        ["Showstoppers", "Complete Chapter 3: Carnevale."],
        ["Spanner in the Works", "I can be quite handy when I want to be"],
        ["Special Connection", "Finish Chapter 4 with another player in online co-op."],
        ["Spiral Out", "Complete Chapter 4: Institute."],
        ["Stay Tuned", "Are you taking notes?"],
        ["The Windy City", "Just don't open it indoors"],
        ["Token Gestures", "You hit the jackpot"],
        ["Toybox", "Playtime's over now"],
        ["Unsavory Delicacies", "Rotting from the inside, delicious on the outside"],
        ["Unsupervised", "Complete Chapter 2: Candy Factory."],
    ];

    assert.strictEqual(officialAchievements.length, 44, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});

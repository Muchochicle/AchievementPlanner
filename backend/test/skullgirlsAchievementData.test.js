import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/skullgirls.json - 45 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 245170 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("skullgirls");

test("getPlannerData('skullgirls') returns real planner data with 45 curated achievements", () => {

    assert.ok(game, "expected real planner data for skullgirls");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 45);

});

test("every Skullgirls 2nd Encore achievement has a unique id from 1 to 45 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 45 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 45);
    assert.strictEqual(new Set(apinames).size, 45);

});

test("every Skullgirls 2nd Encore achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 45 Skullgirls 2nd Encore achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Normal Life", "\"Painwheel?\" Must be foreign."],
        ["An Ensemble Cast", "There may be no I in “team,” but there is in “variety.”"],
        ["And It's All Thanks To You", "Poor Ms. Fortune."],
        ["April Fact's Day", "The joke is that she's not a joke."],
        ["Beau-coup de Grâce", "You get a Blockbuster! Everyone gets a Blockbuster!"],
        ["Breaking the Cycle", "Retaliate against repetition."],
        ["By the Scruff of Their Necks", "Just give me five minutes of peace, you unruly Wulfamaniacs!"],
        ["Call the Wardrobe Department", "Make dozens of costume changes."],
        ["Command Override", "Does he really think he can control her...?"],
        ["Conqueror", "No challenge is too great, no obstacle too high."],
        ["Days of Future Cats", "It is for your own good, BEEP BOOP MEOW."],
        ["Deeper Into Enemy Lines", "Nothing more than a pawn."],
        ["Foreshadowing and Cymbalism", "The crash of cymbals, the sound of failure... for your opponent."],
        ["Funded!", "A heartfelt thanks to everyone that believed in Skullgirls and made this happen."],
        ["Getting A Head In the Game", "Sometimes you just need to relax and take the weight off your shoulders."],
        ["Good Hunting, Commander", "A good commander knows how to wield her forces effectively."],
        ["Happy Birthday", "You got a present!"],
        ["Independent Study", "Before you can hope to master others, you must master yourself."],
        ["Instant Hair Dash ", "Let your parasite feel the wind between his tendrils."],
        ["Kind of an Idiot, But Not a Bad Guy", "Hope you can rest in peace, big guy. Or this piece of you can, anyway."],
        ["Lab Monster", "Get out of the Training Room and fight!"],
        ["Let Them All Bathe In My Glory", "It is time for a new kingdom, and a new age! This world so badly needs a wake-up call."],
        ["Me and My Shadows", "Tag-team your opponent all alone."],
        ["Medical Board Will Be Notified", "Your opponents aren’t the only ones under the knife."],
        ["Museum of Unnatural History", "A gallery of strange and peculiar things awaits."],
        ["My Pain Will Be Visited Upon You", "Sometimes you can take it, and sometimes you just want to lash out."],
        ["Nadia Fortune and the Mystery of the Missing Fishfolk", "They already took one family from her, and like hell she's going to let them do it again."],
        ["Not What It Used To Be -- But Neither Am I", "This city and he, they've been through a lot."],
        ["Overruled!", "The prosecution rests, your honor."],
        ["Picking Up Where Marie Left Off", "Bloodying mafia fools? What a hoot!"],
        ["Prima Donna", "Sopranos should always be center stage."],
        ["Prolix", "Words are fun - expand your vocabulary."],
        ["Real Circus Damage", "And now, for the main attraction... Grappling!"],
        ["Sküllgirls", "Graduation day has arrived at last! Mrs. Victoria’s so proud of you."],
        ["Still \"Alive\"", "WHY - WHY WAS I PROGRAMMED TO FEEL PAIN?"],
        ["Survival Serenity", "Survival is no horror."],
        ["The Beast Within", "My, your skeleton is looking positively punishing today!"],
        ["The Kitchen Sink", "Throw everything at them, including..."],
        ["The Other Candidates Will Be Consumed", "As she denied her purpose, they denied her continued existence."],
        ["Threads of Fate", "Follow all threads of fate to their inevitable conclusions."],
        ["Toil and Trouble", "A sesquidecemvir of seven simulacra synergizing simultaneously."],
        ["Training the Next Generation", "One sister's safety dooms another."],
        ["Two Weeks", "Will Squigly decide on her choice and move towards the changing winds?"],
        ["Until You Next Awaken", "It would appear they've become quite inseparable."],
        ["World Warrior Princess", "Wander the world... unintentionally."],
    ];

    assert.strictEqual(officialAchievements.length, 45, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});

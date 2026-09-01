import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/the-longing.json - 25 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 893850 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("the-longing");

test("getPlannerData('the-longing') returns real planner data with 25 curated achievements", () => {

    assert.ok(game, "expected real planner data for the-longing");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 25);

});

test("every THE LONGING achievement has a unique id from 1 to 25 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 25 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 25);
    assert.strictEqual(new Set(apinames).size, 25);

});

test("every THE LONGING achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 25 THE LONGING achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Face", "I'd really like to converse with someone. Anyone..."],
        ["Avid Reader", "I really need to read more..."],
        ["Becoming Darkness", "Where is this darkness?"],
        ["Bed", "A bed would be a nice addition to my furniture. I could probably build one if I had the right materials."],
        ["Birthday", "At least my birthday will be a bit sooner."],
        ["Colorful Stones", "I wish I had more colors for my art studies. It should be possible to find some different colored stones in the cave."],
        ["Crystal Glory", "There are crystals in many colors. I could harvest some of them and decorate my room."],
        ["Disappointing Achievement", "I should make a list of my failings. Maybe that will be a small accomplishment at least."],
        ["Dream", "I wish I could dream of another place."],
        ["Head of a Horse", "It is very lonely down here. From time to time it would be nice to see another pair of eyes."],
        ["Home Improvement", "I could try to enlarge my little home by hacking through the walls."],
        ["Home Sweet Home", "My home is not comfortable enough for this long wait."],
        ["Leaving Darkness", "Will I ever overcome it?"],
        ["Mattock", "A mattock would be a nice tool to have down here."],
        ["Mushroom Gardener", "Luckily I don't need to eat, but it would be nice to grow some pretty mushrooms."],
        ["My Favourite Painting", "I definitely need more pictures on my wall. Especially..."],
        ["Neverending Notebook", "My dream would be to find a book that never ends."],
        ["Running Water", "I could use some running water in my home. Not that I have any need for hygiene, I just like the sound."],
        ["Secret Tower", "The cave is supposedly full of hidden places."],
        ["The Cave", "I wonder when I will have discovered every part of the cave?"],
        ["The End of Longing", "When will my longing end?"],
        ["The Halls of Eternity", "l read about the halls of eternity, a place where time stands still."],
        ["The Library", "There is a secret library somewhere in the kingdom. I could use some more books, so I'd very much like to find it."],
        ["The Map", "I could really use a map of the kingdom."],
        ["Wah Wah Wah Waaah", "I wish I could play my favourite tune on my instrument to ease the pain of solitude."],
    ];

    assert.strictEqual(officialAchievements.length, 25, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});

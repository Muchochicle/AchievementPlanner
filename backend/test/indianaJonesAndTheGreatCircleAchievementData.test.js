import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/indiana-jones-and-the-great-circle.json - 55 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 2677660 (fetched through this app's own services/steamApi.js).
// Hidden achievements ship no Steam description; their description here is
// researched from community 100% guides and cited in the frontend guide
// header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("indiana-jones-and-the-great-circle");

test("getPlannerData('indiana-jones-and-the-great-circle') returns real planner data with 55 curated achievements", () => {

    assert.ok(game, "expected real planner data for indiana-jones-and-the-great-circle");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 55);

});

test("every Indiana Jones and the Great Circle achievement has a unique id from 1 to 55 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 55 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 55);
    assert.strictEqual(new Set(apinames).size, 55);

});

test("every Indiana Jones and the Great Circle achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 55 Indiana Jones and the Great Circle achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Harsh Climb", "Complete the story mission 'A Harsh Climb'."],
        ["A Little Tumble", "Push an enemy off a ledge."],
        ["A Nun in Trouble", "Complete the Fieldwork 'A Nun in Trouble'."],
        ["A Savage Discovery", "Complete the Fieldwork 'A Savage Discovery'."],
        ["A Slippery Customer", "Dodge a power punch."],
        ["A Study in Fear", "Complete the Fieldwork 'A Study in Fear'."],
        ["Apple of Discord", "Hit an enemy with an apple."],
        ["Archivist", "Collect all Journal notes in the game."],
        ["Atonements", "Complete the story mission 'Atonements' (near the end of the campaign)."],
        ["Beneath the Surface", "Solve every Mystery in Sukhothai."],
        ["Bookman", "Learn all abilities from Adventure books."],
        ["Books of Power", "Learn all abilities from Adventure books in Rome"],
        ["Bookworm", "Learn 10 abilities from Adventure books."],
        ["Bread is Life", "Eat an Aish Baladi Bread."],
        ["Celestial Delight", "Eat a Star Fruit."],
        ["Chronicler", "Collect 25 Journal notes in Rome"],
        ["Depths of the City", "Solve every Mystery in Rome (The Order of Giants DLC)."],
        ["Ecco!", "Photograph Ernesto."],
        ["Field Survey", "Collect 50 Journal notes."],
        ["Filling in the Blanks", "Revisit a location."],
        ["Gear Head", "Solve the Cogwheel puzzle in Sukhothai."],
        ["Into the Fire", "Complete the story mission 'Into the Fire'."],
        ["It Belongs in a Museum!", "Collect all of the missing Stelae."],
        ["Literary Bug", "Learn an ability from an Adventure book."],
        ["Little Horn", "Eat a Cornetto."],
        ["Locked Doors Hide Secrets", "Get inside Villa Pia (The Order of Giants DLC)."],
        ["Lost in the Past", "Complete the Fieldwork 'Lost in the Past'."],
        ["Offensive Defense", "Knock out an enemy using only counters."],
        ["Out of the Vatican", "Reach Rome (The Order of Giants DLC)."],
        ["Path of Junia", "Photograph every Inscription in Vatican City and return to Antonio."],
        ["Pest Control", "Hit an enemy with a fly swatter."],
        ["Pet the Cat", "Pet the cat at Via Giulia in Rome"],
        ["Repatriation", "Return all Lost Artifacts."],
        ["Roman Scholar", "Collect all Journal notes in Rome"],
        ["Sanctuary of the Guardians", "Complete the Fieldwork 'Sanctuary of the Guardians'."],
        ["Savage Predicament", "Complete the Fieldwork 'Savage Predicament'."],
        ["Secret of the Queen Mother", "Complete the Fieldwork 'Secret of the Queen Mother'."],
        ["Secrets in the Sand", "Solve every Mystery in Gizeh."],
        ["Shadows out of Time", "Collect all of the Ancient Relics."],
        ["Shutterbug", "Capture 50 Photographs for your Journal."],
        ["Symbol of Initiation", "Collect a Mithraic Artifact"],
        ["The Blessed Pearl", "Complete the story mission 'The Blessed Pearl'."],
        ["The Break-In", "Complete the story mission 'The Break-In'."],
        ["The Golden Idol", "Complete the first story mission, 'The Golden Idol'."],
        ["The Idol of Ra", "Complete the story mission 'The Idol of Ra'."],
        ["The Kid Who Vanished", "Complete the Fieldwork 'The Kid Who Vanished'."],
        ["The Mad Priest", "Complete the Fieldwork 'The Mad Priest'."],
        ["The Order of Giants", "Complete The Order of Giants DLC story."],
        ["The Right Note", "Clobber an enemy with a guitar."],
        ["The Seven Grades", "Collect all Mithraic Artifacts"],
        ["The Stolen Cat Mummy", "Complete the story mission 'The Stolen Cat Mummy'."],
        ["Tour de Force", "Defeat all boxing champions."],
        ["Tuned In", "Bring all radio frequencies to Gina."],
        ["When in Rome", "Solve every Mystery in Vatican City."],
        ["Your Own Medicine", "Disarm an enemy with your whip and then use his weapon to knock him out."],
    ];

    assert.strictEqual(officialAchievements.length, 55, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});

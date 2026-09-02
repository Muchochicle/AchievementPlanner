import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/postal-4-no-regerts.json - 23 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 707030 (fetched through this app's own services/steamApi.js).
// Hidden achievements ship no Steam description; their description here is
// researched from community 100% guides and cited in the frontend guide
// header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("postal-4-no-regerts");

test("getPlannerData('postal-4-no-regerts') returns real planner data with 23 curated achievements", () => {

    assert.ok(game, "expected real planner data for postal-4-no-regerts");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 23);

});

test("every POSTAL 4: No Regerts achievement has a unique id from 1 to 23 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 23 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 23);
    assert.strictEqual(new Set(apinames).size, 23);

});

test("every POSTAL 4: No Regerts achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 23 POSTAL 4: No Regerts achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["4 can play that game!", "Kill 4 fast food Banditos during the Mexi-Cleaner errand with the Fournicator."],
        ["And remember, respect is everything!", "Reach maximum Heat level with the fuzz and survive."],
        ["Breezy, not sleezy", "Get all 10 petition signatures while wearing the drag outfit."],
        ["Can we fix it? No we can't!", "Hit all barrels with emigrants during the Border Smuggler errand."],
        ["Don't forget to wash your hands!", "Flush after taking a piss in a toilet."],
        ["Dude Vinci Code", "Collect all of the Royale Collection paintings."],
        ["Highscore, what does that mean?", "Beat all high scores in the Scooter Challenge."],
        ["Holocaust: Part Trois", "Reunite with an old enemy, again."],
        ["I Wanna Dance With Somebody", "Discover the secret crack den."],
        ["Lame of Thrones", "Install all bidets in the Wipe Compound without killing anyone."],
        ["Look ma, I'm a HOBO!", "Construct your homeless beggar sign."],
        ["Lynched", "Kill all of the Mountain Men while searching for Champ."],
        ["Mean Kitty", "As Cat Dude, kill 10 chicks."],
        ["No Way Trailer Home", "Finish the same errand with all 4 Dude voices."],
        ["One of Uwe's Best", "Finish all Rampages (aka Going POSTAL challenges)."],
        ["One Side, Gramps", "Run over 50 people with the Mobility Scooter."],
        ["Passion of the Christ 2: Crucify This", "Complete the game with no kills."],
        ["PISSASSO", "Turn 10 toilets yellow with piss."],
        ["Roadhouse", "Complete the game by only using kicks to kill people."],
        ["Scooter Tutor", "Beat the Fix Race errand by crossing the finish line with a fully bloodied Scooter."],
        ["Still playing with dolls! ", "Collect all Krotchy, Kunny, and Larry collectibles."],
        ["We still ain't got no budget!", "Kill 100 pigeons from thrown cages."],
        ["Yippee Ki-Yay", "Kill 7 people at the same time using the Revolver's Dude Eye."],
    ];

    assert.strictEqual(officialAchievements.length, 23, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});

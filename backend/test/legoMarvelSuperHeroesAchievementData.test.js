import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/lego-marvel-super-heroes.json - 45 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 249130 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("lego-marvel-super-heroes");

test("getPlannerData('lego-marvel-super-heroes') returns real planner data with 45 curated achievements", () => {

    assert.ok(game, "expected real planner data for lego-marvel-super-heroes");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 45);

});

test("every LEGO Marvel Super Heroes achievement has a unique id from 1 to 45 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 45 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 45);
    assert.strictEqual(new Set(apinames).size, 45);

});

test("every LEGO Marvel Super Heroes achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 45 LEGO Marvel Super Heroes achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Doom with a View", "Complete Level 14 - A Doom with a View"],
        ["Alter Ego", "Perform all big LEGO figure transformations"],
        ["Avengers Assembled", "Collect all Avengers characters in the game (Single Player)"],
        ["Bad Luck?", "Unlock Black Cat (Single Player)"],
        ["Bifrosty Reception", "Complete Level 7 - Bifrosty Reception"],
        ["Billionaire Philanthropist", "Collect 1,000,000,000 studs (Single Player)"],
        ["Brotherhood", "Collect all traditionally evil mutants (Single Player)"],
        ["Can't Hurt Me Bub", "Regenerate as Wolverine"],
        ["Cosplay", "Create a custom character"],
        ["Doctor in the House", "Complete Level 9 - Doctor in the House"],
        ["Don't I Know You?", "Team up Captain America with Human Torch (Co-op)"],
        ["Exploratory Laboratory", "Complete Level 3 - Exploratory Laboratory"],
        ["Falling... with Style", "Complete first Helicarrier skydive"],
        ["Fastball Special", "Perform a special throwing move as Colossus on Wolverine"],
        ["Guardians of the Galaxy", "Unlock all the Guardians of the Galaxy (Single Player)"],
        ["I Am Iron Man", "Collect all Iron Man armors (Single Player)"],
        ["I'm Always Angry!", "Transform into the Hulk 50 times"],
        ["It's Clobberin' Time!", "Defeat 100 enemies as the Thing"],
        ["It's Me Time!", "Read a comic in Deadpool's room on the Helicarrier"],
        ["Juggernauts and Crosses", "Complete Level 8 - Juggernauts and Crosses"],
        ["Magnetic Personality", "Complete Level 13 - Magnetic Personality"],
        ["Menace of Magneto", "Drive to the Baxter Building as Magneto in the Magneto Mobile"],
        ["Post-Credit Party", "Complete House Party Protocol"],
        ["Puny God", "Perform Hulk's special move on Loki"],
        ["Rapturous Rise", "Complete Level 12 - Rapturous Rise"],
        ["Really?", "Collect Howard the Duck (Single Player)"],
        ["Rebooted, Resuited", "Complete Level 5 - Rebooted, Resuited"],
        ["Red Head Detention", "Complete Level 6 - Red Head Detention"],
        ["Road Rage", "Destroy 100 vehicles in the Manhattan hub"],
        ["Rock up at the Lock up", "Complete Level 4 - Rock up at the Lock up"],
        ["Sand Central Station", "Complete Level 1 - Sand Central Station"],
        ["Sinister Six", "Collect Doc Ock, Sandman, Mysterio, Kraven the Hunter, Electro and Vulture (Single Player)"],
        ["Stan-tastic", "Rescue Stan Lee from every peril (Single Player)"],
        ["Stan's Soapbox", "Turn into Stan Hulk"],
        ["Taking Liberties", "Complete Level 11 - Taking Liberties"],
        ["That Sinking Feeling", "Complete Level 10 - That Sinking Feeling"],
        ["The Good, the Bad and the Hungry", "Complete Level 15 - The Good, the Bad and the Hungry"],
        ["The Toast of Croydon", "Create a character called “Trevor” in the character customizer"],
        ["This Is fantastic!", "First time turning Mister Fantastic into a teapot"],
        ["Times Square Off", "Complete Level 2 - Times Square Off"],
        ["To Me, My X-Men", "Collect all traditionally heroic mutants (Single Player)"],
        ["Ultimate True Believer", "Unlock all True Believers (Single Player)"],
        ["Welcome to Level 7", "Play as Agent Coulson"],
        ["You Win a No-Prize!", "Complete game 100% (Single Player)"],
        ["Zoo Believer", "Unlock all animal-themed characters (Single Player)"],
    ];

    assert.strictEqual(officialAchievements.length, 45, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});

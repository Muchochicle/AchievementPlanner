import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/resident-evil-5.json - 70 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 21690 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("resident-evil-5");

test("getPlannerData('resident-evil-5') returns real planner data with 70 curated achievements", () => {

    assert.ok(game, "expected real planner data for resident-evil-5");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 70);

});

test("every Resident Evil 5 achievement has a unique id from 1 to 70 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 70 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 70);
    assert.strictEqual(new Set(apinames).size, 70);

});

test("every Resident Evil 5 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 70 Resident Evil 5 achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Cut Above", "Defeat 5 enemies with the Knife."],
        ["A Friend in Need", "Save partner 10 times when HELP is displayed."],
        ["All Dressed Up", "Purchase all available alternative costumes in Bonus Features."],
        ["Army of One", "Win 30 matches in Slayers."],
        ["Bad Blood", "During the first fight with Wesker, damage him a set number of times."],
        ["Badge of Honor", "Find all the BSAA emblems."],
        ["Baptism by Fire", "Defeat 3 Majini at once with a drum or gas tank explosion."],
        ["Be the Knife", "Deflect a bow gun arrow with your knife."],
        ["Bringing the Pain", "Defeat 100 players using physical attacks in Versus."],
        ["Bull's-eye", "Defeat 30 enemies with the Longbow."],
        ["Cattle Prod", "Defeat 30 enemies with the Stun rod."],
        ["Completed Chapter 1 - 1", "Complete Chapter 1 - 1 on any difficulty setting."],
        ["Completed Chapter 1 - 2", "Complete Chapter 1 - 2 on any difficulty setting."],
        ["Completed Chapter 2 - 1", "Complete Chapter 2 - 1 on any difficulty setting."],
        ["Completed Chapter 2 - 2", "Complete Chapter 2 - 2 on any difficulty setting."],
        ["Completed Chapter 2 - 3", "Complete Chapter 2 - 3 on any difficulty setting."],
        ["Completed Chapter 3 - 1", "Complete Chapter 3 - 1 on any difficulty setting."],
        ["Completed Chapter 3 - 2", "Complete Chapter 3 - 2 on any difficulty setting."],
        ["Completed Chapter 3 - 3", "Complete Chapter 3 - 3 on any difficulty setting."],
        ["Completed Chapter 4 - 1", "Complete Chapter 4 - 1 on any difficulty setting."],
        ["Completed Chapter 4 - 2", "Complete Chapter 4 - 2 on any difficulty setting."],
        ["Completed Chapter 5 - 1", "Complete Chapter 5 - 1 on any difficulty setting."],
        ["Completed Chapter 5 - 2", "Complete Chapter 5 - 2 on any difficulty setting."],
        ["Completed Chapter 5 - 3", "Complete Chapter 5 - 3 on any difficulty setting."],
        ["Completed Chapter 6 - 1", "Complete Chapter 6 - 1 on any difficulty setting."],
        ["Completed Chapter 6 - 2", "Complete Chapter 6 - 2 on any difficulty setting."],
        ["Completed Chapter 6 - 3", "Complete Chapter 6 - 3 on any difficulty setting."],
        ["Crowd Control", "Defeat 30 enemies with the Gatling gun."],
        ["Drive By", "Stop an armored truck by taking out the driver."],
        ["Egg Hunt", "Find all 4 types of eggs."],
        ["Egg on Your Face", "Defeat a Majini with a rotten egg."],
        ["Exploding Heads", "Pull off 20 headshots."],
        ["Eye of the Tiger", "Win 30 matches in Survivors."],
        ["Fireworks", "Shoot an enemy Molotov cocktail, dynamite stick, or hand grenade."],
        ["Get Physical", "Defeat 20 enemies with physical attacks."],
        ["Getaway", "Complete \"Desperate Escape\" on any difficulty setting."],
        ["Go into the Light", "Defeat 2 enemies with one flash grenade."],
        ["Heart Stopper", "Defeat a certain enemy by stabbing it in the heart."],
        ["It Takes Two to Tango", "Chain a 40-defeated combo in Team Slayers."],
        ["It's All About the Points", "Score at least 40,000 points in Survivors."],
        ["It's Just a Bad Dream!", "Complete \"Lost in Nightmares\" with an S rank."],
        ["Keep the Good Times Rolling", "Chain a 20-defeated combo in Slayers."],
        ["Kung Fu Fighting", "Inflict a set amount of damage to Wesker in \"Lost in Nightmares.\""],
        ["Lead Aspirin", "Defeat a Majini with a headshot while it's jumping."],
        ["Let's Get This Party Started!", "Unlock all selectable characters in Versus."],
        ["Lifeguard", "Save partner 10 times when DYING is displayed."],
        ["Masters of Removing", "Work together to save someone special."],
        ["Meat Shower", "Defeat 3 Majini with one grenade or proximity bomb."],
        ["Must've Got Lost", "Complete \"Lost in Nightmares\" on any difficulty setting."],
        ["Night Terrors", "Complete \"Lost in Nightmares\" on Professional."],
        ["Recruit", "Complete all chapters on Amateur."],
        ["Ride the Lightning", "Defeat a Majini using the electric current from a transformer."],
        ["Run the Gauntlet", "Complete \"Desperate Escape\" on Professional."],
        ["Shoot the Messenger", "Defeat 3 Agitator Majini in one playthrough of \"Desperate Escape.\""],
        ["Soldier", "Complete all chapters on Normal."],
        ["Stockpile", "Obtain all available weapons."],
        ["Stop, Drop, & Roll", "Defeat 3 Majini at once by setting oil canisters on fire."],
        ["Take It to the Max", "Completely upgrade all weapons."],
        ["The Great Escape", "Complete \"Desperate Escape\" with an S rank."],
        ["The Team That Slays Together...", "Win 30 matches in Team Slayers."],
        ["The Works", "Chain the maximum number of combos together in one go."],
        ["There's no \"I\" in Team", "Score at least 80,000 points in Team Survivors."],
        ["They Belong in a Museum", "Obtain all treasures in the game."],
        ["They're ACTION Figures!", "Collect all the figurines."],
        ["Veteran", "Complete all chapters on Veteran."],
        ["War Hero", "Complete all chapters on Professional."],
        ["Way of the Warrior", "Defeat 150 enemies singlehandedly in one playthrough of \"Desperate Escape.\""],
        ["We Will Survive", "Win 30 matches in Team Survivors."],
        ["Who Do You Trust?", "Build up a certain level of trust with your partner."],
        ["Wish Upon a Star", "Destroy all 18 of the Score stars found throughout \"Lost in Nightmares.\""],
    ];

    assert.strictEqual(officialAchievements.length, 70, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});

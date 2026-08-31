import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/star-wars-kotor-2.json - 57 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 208580 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("star-wars-kotor-2");

test("getPlannerData('star-wars-kotor-2') returns real planner data with 57 curated achievements", () => {

    assert.ok(game, "expected real planner data for star-wars-kotor-2");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 57);

});

test("every STAR WARS: KOTOR II achievement has a unique id from 1 to 57 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 57 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 57);
    assert.strictEqual(new Set(apinames).size, 57);

});

test("every STAR WARS: KOTOR II achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 57 STAR WARS: KOTOR II achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Certain Set of Skills", "Gain a Prestige class"],
        ["An Elegant Weapon", "Contruct your first Lightsaber"],
        ["Ancient History", "Recruit the Disciple"],
        ["Assassination Protocol: Active", "Learn how to kill Jedi from HK-47"],
        ["Breaking the Oath", "Teach the Handmaiden the ways of the Force."],
        ["Cheater", "Convince the \"champ\" to lose the game without playing."],
        ["Cupid's Rifle", "Listen to HK-47's definition of love."],
        ["Dancing Queen", "Dance for Vogga"],
        ["Destiny, Dominated", "Complete the game on the Dark Side"],
        ["Don't Get Cocky", "Kill all Sith troopers before they can board the Ebon Hawk"],
        ["Fight Another Day", "Flee Korriban after fighting Sion"],
        ["Finders Keepers", "Claim Darth Nihilus' mask."],
        ["Grave Robber", "Loot a body on Korriban"],
        ["Hunger Strike", "Defeat Nihilus"],
        ["Hutt Oil", "Convince Vogga the Hutt to sell fuel to Telos."],
        ["I Am A Jedi", "Acquire all Light Side Powers"],
        ["I Didn't Do It!", "Let the Sith destroy the Peragus Asteroids"],
        ["I hate everything about you", "Reduce a companion's Influence to zero."],
        ["I've Seen How You Use a Hydrospanner", "Have 30 points in Repair."],
        ["If You Only Knew...", "Reach maximum Dark Side points"],
        ["In It For the Money", "Collect 10,000 credits"],
        ["It Was Like That When I Got Here!", "Destroy Peragus Astroids"],
        ["It's a trap!", "Get this by starting the \"Trapped\" Quest on Korriban."],
        ["Larger World", "Get your first Light Side points"],
        ["Last Stand", "Side with the Settlers at Khoonda"],
        ["Laugh It Up, Fuzzball", "Break Hanharr's spirit"],
        ["Let's Blow This Place!", "Have 30 points in Demolitions."],
        ["Lost Girl", "Recruit Mira"],
        ["Lost in Your Work", "Learn Moving Meditation"],
        ["Luminous Beings", "Reach maximum Light Side points"],
        ["Martial Law", "Side with Vaklu on Onderon"],
        ["Never Tell Me the Odds", "Win a Pazaak game with a full board"],
        ["No Jedi can stop us", "Kill all the Jedi masters"],
        ["Nothing Personal", "Change your mind about siding with the Settlers at Khoonda"],
        ["Orphan White", "Recruit the Handmaiden"],
        ["Over Achiever", "Reach Player Level 30"],
        ["Pain Relief", "Defeat Sion"],
        ["Pet Rock", "Get the named Lightsaber crystal"],
        ["Pure Pazaak", "Beat the champ on Nar Shadaa"],
        ["Royal Protocol", "Side with the Queen on Onderon"],
        ["Seeker", "Complete the game on the Light Side"],
        ["Short Circuit", "Install HK-47's unique module"],
        ["Silent, But Deadly", "Have 30 points in Stealth"],
        ["Starting Down the Dark Path", "Get your first Dark Side points"],
        ["Talk Them to Death", "Have Persuasion over 30"],
        ["The First Rule...", "Complete the Handmaiden Battle Circle"],
        ["The Gang's All Here", "Fill the Party Selection screen"],
        ["The Second Rule...", "Complete the Mandalorian Battle Circle"],
        ["The Sith Lord", "Have your character replace any of the Sith Lords on the main menu screen."],
        ["The Walking Carpet", "Recruit Hanharr"],
        ["Training Wheels", "Complete the Prologue"],
        ["Trust Me, I'm a Doctor", "Have 30 points in Treat Injury."],
        ["Unadulterated Violence", "Repair the damaged droid on the Ebon Hawk"],
        ["Unlimited Power", "Acquire all Dark Side Powers."],
        ["We Have to Hack Into the Mainframe!", "Have 30 points in Computer Use."],
        ["You ARE the droid I'm looking for", "Deduce G0-T0's identity"],
        ["Your Eyes Can Deceive You", "Learn Force Sight"],
    ];

    assert.strictEqual(officialAchievements.length, 57, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});

import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/batman-arkham-origins.json - 60 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 209000 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("batman-arkham-origins");

test("getPlannerData('batman-arkham-origins') returns real planner data with 60 curated achievements", () => {

    assert.ok(game, "expected real planner data for batman-arkham-origins");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 60);

});

test("every Batman: Arkham Origins achievement has a unique id from 1 to 60 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 60 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 60);
    assert.strictEqual(new Set(apinames).size, 60);

});

test("every Batman: Arkham Origins achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 60 Batman: Arkham Origins achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Air Marathon", "Glide 26 miles total"],
        ["Anyone see that?", "Complete a predator encounter without ever being spotted"],
        ["Around the World", "Use the Batwing to travel to all Fast Travel points"],
        ["Arsenal, Awesome", "Fully upgrade a weapon in multiplayer"],
        ["Breaking the Ice", "Free all civilians frozen in cryogenic ice"],
        ["City of Assassins", "Story: identify each of Black Mask's assassins."],
        ["Clean Streets", "Complete all Most Wanted missions"],
        ["Clutch", "Kill a Hero to bring back your entire gang when at 0 reinforcements on a full multiplayer server"],
        ["Come Out of the Cold", "Perform 3 ice wall takedowns"],
        ["Counter-intelligence", "Decipher one Extortion File"],
        ["Crime Fighter", "Stop 20 Crime in Progress"],
        ["Crime Scene Investigator", "Complete all Casefiles"],
        ["Down with the Revolution", "Stop Anarky thug operations in South Gotham"],
        ["Drilling for Justice", "Assemble the cryonucleation tunneller - the cryodrill"],
        ["Enigma Unravelled", "Collect all Enigma items"],
        ["Everyone wears masks", "Story: find the Black Mask."],
        ["Fallen Knight", "Reach max level with the Bane faction in multiplayer"],
        ["First Riddler Trophy", "Collect every collectible"],
        ["Flawless Display", "Successfully battle Shiva without taking any damage"],
        ["For Auld Lang Syne", "Stop Freeze and bring Boyle to justice"],
        ["Free Flow Fifty", "Reach x50 Combo"],
        ["Give Them Something to Believe", "Complete New Game Plus"],
        ["Gotham All-Star", "Reach max overall level in multiplayer"],
        ["Gotham Protector", "Master the Gotham Protector Dark Knight track"],
        ["I Am The Night", "Finish I Am The Night Mode"],
        ["I Like Those Odds", "As a Hero, defeat 4 Elites within 40 seconds without using melee in multiplayer"],
        ["I've Got This", "Acquire all upgrades"],
        ["Killing Joke", "Reach max level with the Joker faction in multiplayer"],
        ["Know Thy Enemy", "Defeat each of the enemy players at least once in a multiplayer match"],
        ["Legend", "Earn a level of prestige in multiplayer"],
        ["Legend of the Dark Knight", "Complete all Dark Knight challenges"],
        ["Let it Snow", "Receive the Extreme Environment Suit (XE Suit)"],
        ["Master Wayne", "Take no damage when playing as Bruce Wayne"],
        ["Medalist", "Obtain all medals on the original Ranked Maps in Challenge mode (as Batman)"],
        ["Nobody that matters", "Story: discover who the Joker is."],
        ["Not An Ordinary Criminal", "As an Elite, earn 4000 XP in a single multiplayer match"],
        ["Olympian", "Obtain all medals on the original Campaign maps in Challenge mode (as Batman)"],
        ["One down, several to go", "Complete a Most Wanted entry"],
        ["One eye open", "Story: defeat Deathstroke."],
        ["One of Each", "Use every Freeflow Focus gadget in one combo"],
        ["One Rule", "Story: save a life."],
        ["Paint the Town Red", "Find all Activist tags in Cold, Cold Heart"],
        ["Perfectionist", "Obtain all the medals on Custom maps in Challenge mode"],
        ["Perhaps sooner, Perhaps later", "Story: defeat the Joker."],
        ["Personal Trainer", "Obtain all the medals on Combat Training maps"],
        ["Point Counter-Point", "Complete Deathstroke without failing a single counter"],
        ["Point to Point", "Glide across Bridge without touching ground"],
        ["Predator Paragon", "Take down 6 different Elites in a match, using 6 different methods as Batman or Robin in multiplayer"],
        ["Shadow Vigilante", "Master the Shadow Vigilante Dark Knight track"],
        ["Shut Down", "Shut down an entire Tower Network"],
        ["Silent Knight", "Complete a predator encounter using only silent takedowns"],
        ["Snowjob", "Get 3 enemies frozen in one attack"],
        ["Stalact-tactician", "Takedown 2 enemies with one stalactite"],
        ["Tales of Gotham", "Win a round of each map with each faction in multiplayer"],
        ["Thanks, old friend", "Hear everything Alfred has to say"],
        ["The Innocent and the Predatory", "Capture all of Black Mask's Assassins"],
        ["Voice of the People", "Scan 20 Anarky Tags"],
        ["What hit me?", "Take down 100 enemies who didn't know you were there"],
        ["World's Greatest Detective\t", "Master the World's Greatest Detective Dark Knight track\t"],
        ["Worst Nightmare", "Master the Worst Nightmare Dark Knight track"],
    ];

    assert.strictEqual(officialAchievements.length, 60, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});

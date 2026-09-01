import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/wasteland-2-directors-cut.json - 46 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 240760 (fetched through this app's own services/steamApi.js).
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("wasteland-2-directors-cut");

test("getPlannerData('wasteland-2-directors-cut') returns real planner data with 46 curated achievements", () => {

    assert.ok(game, "expected real planner data for wasteland-2-directors-cut");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 46);

});

test("every Wasteland 2: Director's Cut achievement has a unique id from 1 to 46 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 46 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 46);
    assert.strictEqual(new Set(apinames).size, 46);

});

test("every Wasteland 2: Director's Cut achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 46 Wasteland 2: Director's Cut achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A General and a Gentleman", "Allow Vargas to detonate the nuke in the final assault."],
        ["A Gentle Heart", "Save Binh from Tinker"],
        ["A Night To Remember", "Get an STD"],
        ["Back Where It All Began", "Return to Arizona."],
        ["Better Left Buried", "Find the hidden cache of extraterrestrial cartridges"],
        ["Blast From The Past", "Learn Combat Shooting"],
        ["Call Of The Wild", "Use Animal Whisperer to charm 20 animals"],
        ["Cat Burglar", "Steal the Golden Spike from Kekkahbah's fortress without being detected"],
        ["Civilized", "Convince Mr. Manners and the Mannerites to stop eating people."],
        ["Divine Retribution", "Help Retribution Jones take over Hollywood"],
        ["Elbow Grease", "Repair 10 locks or safes using Mechanical Repair"],
        ["Embrace The Glow", "Send the nuke to the Mad Monks"],
        ["Ezekiel 18:20", "Intervene in a God's Militia execution"],
        ["Fateful Reunion", "Meet Ralphy's father with Ralphy in your party (at the Canyon of Titan checkpoint)."],
        ["Fight Fire With Fire", "Send the nuke to the DBM"],
        ["Goat Simulator", "Get 3 goats following the party at once"],
        ["Hell Bent For Leather", "Help Chris Van Graas Jr. become mayor of Rodia"],
        ["How Rude", "Help Mr. Manners eliminate Tori Robbinson's plot"],
        ["I Am Legend", "Complete Matthias' quest to kill in Los Angeles."],
        ["Know Your Roots", "Find a Wasteland 1 disk (in Darwin Village's underground complex)."],
        ["Locked And Loaded", "Apply 20 weapon mods"],
        ["Moo, I Say", "Tip 5 cows"],
        ["Not Monkeying Around", "Complete the game with a Ranger dressed in a gorilla costume"],
        ["Oops", "Accidentally kill one of your own party members with friendly fire."],
        ["Peace On The Rails", "Make peace between the Atchisons and Topekans"],
        ["Persona Non Grata", "Get Ranger Team Delta sent after you"],
        ["Pop Idol", "Find The Fin's poster"],
        ["Pushed The Button", "Push the button at the end of the Hollywood Sewers."],
        ["Red Wire, Blue Wire", "Disarm the nuke"],
        ["Relics Of A Bygone Age", "Find all hidden shrines in the game"],
        ["Religious Persecution", "Kill all of the God's Militia leadership"],
        ["Scavenger", "Find all of the world map caches"],
        ["Self Actualized", "Put the Robbinsons in power in Angel Oracle"],
        ["Sinister Legacy", "Use the code from Finster's head (PROTEUS) to get into Darwin's underground complex."],
        ["Sinners And Saints", "Make peace between Hollywood and the Bastion"],
        ["Skin 'O Yer Teeth", "Survive a combat encounter with only 1 party member standing"],
        ["Son Of A Motherless Goat", "Outfit 3 rangers in the amigos hat, jacket, and pants"],
        ["Sweet, Sweet Squeezins", "Scotchmo steals 5 bottles of Snake Squeezins from you"],
        ["Tasty!", "Give the Night Terror 20 pieces of candy"],
        ["They Walk Among Us", "Have a party member turn into a pod person"],
        ["Too Much Time On Yer Hands", "Dig up all the holes at Redondo Beach"],
        ["Under Old Management", "Restore Rodia's mayor to office"],
        ["Wasteland Historian", "Read every lore entry in the game"],
        ["Wasteland Justice", "Witness Angela kill Samuel Haas"],
        ["West Of Eden", "Go to Los Angeles."],
        ["What Does This Button Do?", "Set off the nuke in Ranger Citadel's museum (before going to Los Angeles)."],
    ];

    assert.strictEqual(officialAchievements.length, 46, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});

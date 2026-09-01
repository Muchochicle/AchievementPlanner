import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/two-point-museum.json - 49 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 2185060 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("two-point-museum");

test("getPlannerData('two-point-museum') returns real planner data with 49 curated achievements", () => {

    assert.ok(game, "expected real planner data for two-point-museum");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 49);

});

test("every Two Point Museum achievement has a unique id from 1 to 49 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 49 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 49);
    assert.strictEqual(new Set(apinames).size, 49);

});

test("every Two Point Museum achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 49 Two Point Museum achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Absolutely Buzzing", "Have a guest reach 2000 Buzz."],
        ["Art Museum", "Complete chapter 5 of the Undee Docks museum (Arty-Facts DLC)."],
        ["Built on Sand(box)", "Build a level 10 museum in Sandbox Mode."],
        ["Byte at the Museum", "Employ 10 Robo staff (Janitors or Security Guards) in a single museum."],
        ["Comprehensive Curator", "Earn 100 shiny stickers in the Sticker Book."],
        ["Directly to Jail", "Catch a thief who has stolen an exhibit."],
        ["Everything for Everyone", "Display an exhibit from 6 different themes in one museum."],
        ["Ex-plorer", "Lose a staff member on an expedition - send an under-trained or under-equipped team on a risky expedition."],
        ["Exhibition Expert", "Earn a gold trophy in an Exhibition Mode pop-up museum."],
        ["Fancily Dressed Five", "Have 5 visiting children wear onesies of 5 different themes at once."],
        ["Farflung Fixer", "Have 15 Wildlife POIs at Biodiversity Level 3."],
        ["Fauna's Favourite", "Have a member of staff be 5 different animal's favourite Expert."],
        ["Fishes (Plural)", "Have 10 fish born at the museum."],
        ["Frame It 'Til You Make It", "Display a pristine piece of original Art."],
        ["Fully Customised Contraption", "Have a level 3 (III) Custom Contraption, Science exhibit."],
        ["Glass Case of Emotion", "Employ an Art Expert with an understanding of all 7 Emotions."],
        ["Healing Holiday", "Cure an Illness or Injury by sending staff on an expedition to Remedial Springs."],
        ["High-Class Curator", "Reach Curator Class level 7."],
        ["Made Them Yourself", "Complete 20 Workshop projects."],
        ["Map Reader", "Unlock 25 expedition points of interest (POIs)."],
        ["Marine Life Museum", "Complete chapter 5 of Passwater Cove museum."],
        ["Mega Museum", "Have a level 50 museum."],
        ["Mint Condition", "Discover a Pristine quality exhibit on an expedition."],
        ["Model Employee", "Have a single Assistant pose for 5 portraits and/or statues."],
        ["Monster Menagerie", "Display 30 different Wildlife exhibits in a single museum."],
        ["Nomenclature", "Give a fish exhibit a custom name."],
        ["Perked Up", "Install 3 perks on a single exhibit."],
        ["Plant Food", "Have a guest eaten by a Chomper Pit exhibit."],
        ["Please Don’t Touch!", "Display every Famous Art exhibit in a single museum."],
        ["Prehistory Mystery", "Activate a Prehistory Mystery exhibit by placing matching activated Astral Anomalies nearby - Lone Henge at Spoony Dunes (Bone Belt), activated with a Triangular Celestial Cell, is the easiest."],
        ["Product Placement", "Earn $10,000 from Sponsored exhibits."],
        ["Qualified Opinion", "Train a member of staff as much as possible."],
        ["Raining Dragons", "End the reign of the dragons in Scorched Earth expedition map."],
        ["Rising Star", "Complete chapter 1 of Memento Mile museum."],
        ["Science Museum", "Complete chapter 5 of Bungle Wasteland museum."],
        ["Scorched Earth", "During the Fantasy Finds DLC's dragon rampage, choose which point of interest to save - Fairydale or Wishfell - and let the other burn."],
        ["Secret Museum", "Complete chapter 5 of the Pointy Mountains museum (Zooseum DLC)."],
        ["Silverbottom Reunion", "Reunite Twiggy Silverbottom's expedition team in a single Polterguest Room."],
        ["Skill & Bones", "Complete a Dinosaur Bones exhibit."],
        ["Sorry for the litter…", "Produce 5 Wildlife offspring from a single parent."],
        ["Space Museum", "Complete chapter 5 of Pebberley Heights museum."],
        ["Supernatural Museum", "Complete chapter 5 of Wailon Lodge museum."],
        ["Thaw & Order", "Have a donation stand vandalised by a Defrosted Cave-Person."],
        ["The Anomalonians", "Activate the final Astral Anomaly exhibit in the Pebberley Heights Space exhibit chain."],
        ["The Natural", "Roll a natural 20 on the Fates O'Twenty exhibit (Fantasy Finds DLC)."],
        ["Tour de Force", "Create a 5-star tour."],
        ["Two Point Museum", "Complete chapter 5 of Memento Mile museum."],
        ["Uncommon Knowledge", "Reach 30 Enlightenment for any theme."],
        ["Wildlife Museum", "Complete chapter 5 of the Silverbottom Park museum (Zooseum DLC)."],
    ];

    assert.strictEqual(officialAchievements.length, 49, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});

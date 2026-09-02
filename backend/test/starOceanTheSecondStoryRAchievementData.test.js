import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/star-ocean-the-second-story-r.json - 51 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 2238900 (fetched through this app's own services/steamApi.js).
// Hidden achievements ship no Steam description; their description here is
// researched from community 100% guides and cited in the frontend guide
// header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("star-ocean-the-second-story-r");

test("getPlannerData('star-ocean-the-second-story-r') returns real planner data with 51 curated achievements", () => {

    assert.ok(game, "expected real planner data for star-ocean-the-second-story-r");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 51);

});

test("every STAR OCEAN THE SECOND STORY R achievement has a unique id from 1 to 51 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 51 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 51);
    assert.strictEqual(new Set(apinames).size, 51);

});

test("every STAR OCEAN THE SECOND STORY R achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 51 STAR OCEAN THE SECOND STORY R achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Crack in the Seams", "Story progress marker - reached at a specific point in the adventure, described here spoiler-free."],
        ["A Fateful Encounter", "Proof of starting the adventure as Rena."],
        ["A Growing Experience", "Story progress marker - reached at a specific point in the adventure, described here spoiler-free."],
        ["An Otherworldly Paradise", "Story progress marker - reached at a specific point in the adventure, described here spoiler-free."],
        ["Angel beneath the Earth", "Story progress marker - reached near the end of the adventure, described here spoiler-free."],
        ["Astute Angler", "Proof of a first-class fisherman who has caught many kinds of fish and obtained the Masterwork Rod."],
        ["Blue Wings Racing through the Sky", "Story progress marker - reached at a specific point in the adventure, described here spoiler-free."],
        ["Five-Star Chef", "Proof of an ultra elite chef who bested Yarma, the God of Food, in Cooking Master."],
        ["Hero of Light", "Story progress marker - reached late in the adventure, described here spoiler-free."],
        ["Heroic Feet", "Proof of walking more than 40,000 steps."],
        ["Hope of Nede", "Story progress marker - reached late in the adventure, described here spoiler-free."],
        ["Intergalactic Thief", "Proof of successfully pickpocketing 20 times."],
        ["Intertwined Futures", "Proof of seeing more than 15 endings."],
        ["Kidnapped No More", "Story progress marker - reached at a specific point in the adventure, described here spoiler-free."],
        ["Let's Do This as a Team!", "Proof of using assault actions 20 times with set party members."],
        ["Let's Make Something!", "Create an item with an IC skill."],
        ["Master of the Star Ocean", "Proof of one who has completely mastered the ocean of stars."],
        ["Now I'm Really Ticked Off!", "Enter Rage 10 times due to fallen party members."],
        ["Outstanding Insight", "Proof of having 5 correct predictions at the Bunny Races."],
        ["Personal Relations", "Proof of deepening friendship through lots of personal interactions with party members."],
        ["Place of Interest", "Proof of discovering a unique spot for the first time."],
        ["Rapturous Angel", "Story progress marker - reached near the end of the adventure, described here spoiler-free."],
        ["Revenge!", "Story progress marker - reached at a specific point in the adventure, described here spoiler-free."],
        ["Seven-Colored Voices", "Proof of freeing the entire Voice Collection."],
        ["Steady Progress", "Proof of completing 100 challenge missions."],
        ["Super Duper", "Proof of learning a super specialty."],
        ["Tearful Bunnies", "Upset bunnies 10 times."],
        ["The Almighty", "Proof of reaching max level in all 28 IC skills, specialties, and super specialties."],
        ["The Cursed Swordsman", "Proof of recruiting Ashton. \"I said, 'You have to take responsibility for this!'\""],
        ["The Destroyer's Truth", "Story progress marker - reached at the end of the adventure, described here spoiler-free."],
        ["The Evil Stone", "Story progress marker - reached at a specific point in the adventure, described here spoiler-free."],
        ["The Fiery and Fixated Aristocrat", "Proof of recruiting Opera. \"I already have somebody in my life.\""],
        ["The Final Battle Awaits!", "Story progress marker - reached late in the adventure, described here spoiler-free."],
        ["The Gang's All Here", "Proof of assembling a full party of 8 characters."],
        ["The Gentlehearted Zoologist", "Proof of recruiting Noel. \"Survival is a battle, and only the strong survive. Isn't that how it works?\""],
        ["The Hot-Blooded Journalist", "Proof of recruiting Chisato. \"Well, duh! I've got to find out how your story ends.\""],
        ["The Itinerant Archaeologist", "Proof of recruiting Ernest. \"I'm an archaeologist...and if you lived in the States, chances are you've heard of me before.\""],
        ["The Lone Wolf Swordsman", "Proof of recruiting Dias. \"I'm strong because I wanted to protect myself.\""],
        ["The Ore of Hope", "Story progress marker - reached at a specific point in the adventure, described here spoiler-free."],
        ["The Scholarly Pharmacist", "Proof of recruiting Bowman. \"Every expedition needs an experienced, knowledgeable scientist in the party, doesn't it?\""],
        ["The Scientific Whiz Kid", "Proof of recruiting Leon. \"This is nothing for someone like me. I am a genius, after all.\""],
        ["The Spitfire Creator", "Proof of recruiting Welch. \"C'mon, we're gonna whip you into shape!\""],
        ["The Sultry Symbologist", "Proof of recruiting Celine. \"If you want to pick a fight, you had best choose your opponents more carefully...\""],
        ["The Wanderer's Way", "Proof of walking more than 8,000 steps."],
        ["The Warmth of Long Ago", "Story progress marker - reached at a specific point in the adventure, described here spoiler-free."],
        ["The Wise Are No Match for the Grind", "Win 'The Ten Wise Men Return', the post-game battle-arena gauntlet (recommended level 200) at the Fun City arena."],
        ["The Young Inventor", "Proof of recruiting Precis. \"It's just kinda like, la la la!\""],
        ["Time to Hone Our Skills!", "Proof of improving a battle skill, IC, or specialty skill for the first time."],
        ["Trustworthy Forerunner", "Proof of doing battle with an advantage due to the Super Specialty \"Bodyguard.\""],
        ["Visitor from Afar", "Proof of starting the adventure as Claude."],
        ["Whatever the Outcome...", "Story progress marker - reached at a specific point in the adventure, described here spoiler-free."],
    ];

    assert.strictEqual(officialAchievements.length, 51, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});

import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/dungeon-defenders.js";

test("the Dungeon Defenders guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "dungeon-defenders-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "dungeon-defenders");

});

test("the Dungeon Defenders guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Progression & Base Campaign",
            "Challenges & Awards",
            "Lost Eternia Shards & DLC Missions",
            "Seasonal & Expansion Challenges",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 118-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /118 Steam achievements/);

});

test("every one of the 118 official Dungeon Defenders achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Daredevil", "Smithy", "And This Is My Weapon", "Obedience Training", "Pupil", "Veteran", "Defender of Etheria", "To The Limit", "From The Depths", "To The Rooftops", "A Taste of Victory", "Dungeon Crawler", "The Belly of the Beast", "The Body of the Beast", "The Crown of the Beast", "Dungeon Raider", "From Fire with Brimstone", "Through The Crowded Keep", "To The Lofty Summit", "Dungeon Defender", "Where's the Blueprints?", "Friends Forever", "88 Core", "Ella, Ella", "Wizard Hunter", "You No Take Mushroom", "Speed Freak", "In A Fowl Mood", "Core Cardio", "Monster Mania", "Core Destroyer", "Gold Rush", "A Challenger Approaches", "Weapon Master", "Kobold Exterminator", "Monster Madness", "Dancing in the Rain", "Gold Blitz", "Ogre Block Party", "Survivalist", "Thick Skin", "Tough Guy", "Iron Man", "Defense Is the Best Offense", "True Nobility", "O Mighty Smiter!", "Divine Intention", "Perfectionist", "Mastermind", "Brute Force", "Team Effort", "A Matter of Perspective", "Group Hug", "Catch 'em All", "Master Banker", "Good Student", "Legendary Defender", "Jingled All the Way", "Eternia Shard Recovered: Purple", "Nightmare Eternia Shard Recovered: Purple", "Portal Protector", "Nightmare Portal Protector", "Mythical Defender", "Hardcore Mythical Defender", "Dungeon Raider", "Mythical Dungeon Raider", "Playin' Cupid", "Playin' Mythical Cupid", "Transcendent Challenge Champion", "Eternia Shard Recovered: Blue", "Djinn Recruiter", "Nightmare Eternia Shard Recovered: Blue", "Nightmare Djinn Recruiter", "Transcendent Survivalist", "Eternia Shard Recovered: Yellow", "Puzzle Solver", "Nightmare Eternia Shard Recovered: Yellow", "Nightmare Puzzle Solver", "Real Time Strategist", "Mythical Real Time Strategist", "Eternia Shard Recovered: Red", "Nightmare Eternia Shard Recovered: Red", "Boss Crusher", "Nightmare Boss Crusher", "Heroes to the Rescue", "Nightmare Heroes to the Rescue", "I've Got Monsters in My Pocket", "Ultimate Defender", "Anniversary Defender", "Nightmare Anniversary Defender", "Pumpkin Party", "Pumpkin Party Nightmare", "Greater Turkey Hunter", "Nightmare Greater Turkey Hunter", "Not So Silent Night", "Nightmare Not So Silent Night", "Winter Wonderland", "Nightmare Winter Wonderland", "Playin' Anticupid", "Nightmare Playin' Anticupid", "Tinkerer's Defender", "Nightmare Tinkerer's Defender", "EV Reprogrammer", "Nightmare EV Reprogrammer", "Trial by Fire and Lightning", "Nightmare Trial by Fire and Lightning", "Out Of This World", "Nightmare Out Of This World", "Hero of Water", "Nightmare Hero of Water", "Swashbuckler", "Nightmare Swashbuckler", "Crystalline Resurgence", "Nightmare Crystalline Resurgence", "Nightmare A Very Misty Christmas", "Nightmare Exterminator", "Nightmare Slayer of Omenak", "Nightmare Tomb of Etheria"];

    assert.strictEqual(officialAchievementNames.length, 118, "sanity check on this test's own reference list");

    const fullText = GUIDE.sections.map(section => section.body.join(" ")).join(" ");

    const missing = officialAchievementNames.filter(name => !fullText.includes(name));

    assert.deepStrictEqual(missing, [], "every official achievement name must be mentioned somewhere in the guide");

});

test("Tip: paragraphs (strategy) are distinguishable from the surrounding factual paragraphs", () => {

    const tipParagraphs = GUIDE.sections
        .flatMap(section => section.body)
        .filter(paragraph => paragraph.startsWith("Tip:"));

    assert.ok(tipParagraphs.length > 0, "expected at least one clearly-labeled strategy paragraph");

});

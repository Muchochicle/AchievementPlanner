import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/turbo-overkill.js";

test("the Turbo Overkill guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "turbo-overkill-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "turbo-overkill");

});

test("the Turbo Overkill guide has all 8 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Episode 1",
            "Episode 2",
            "Episode 3 & Game Completion",
            "Difficulty Tiers & Collection",
            "Combat Tricks",
            "Level Secrets & Joke Kills",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 67-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /67 Steam achievements/);

});

test("every one of the 67 official Turbo Overkill achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["First Blood", "Point Break", "Hard Boiled", "Police Story", "Predator", "I AM THE LAW", "The Need for Speed", "Runaway Train", "I Will Have My Vengeance", "No Way Home", "The Wild Bunch", "Malfunction. Need Input", "Commando", "Fury Road", "Lethal Weapons", "Consider That A Divorce", "Yippee-Ki-Yay", "Army of Darkness", "We Can Rebuild Him", "No Time To Die", "I'll Be Back", "Silent Running", "Always Bet On Black", "A New Hope", "Metropolis", "The Good, the Bad and the Ugly", "Endgame", "Hasta La Vista, Baby", "Total Recall", "Can I Play, Daddy?", "You Look Like A Good Joe", "Taking Out The Trash", "Ultra Violence", "Overkilled", "Keen Hunter", "Kill 'Em All", "You're A Disease And I'm The Cure", "Event Horizon", "Fat Wads", "Groovy", "Fully Evolved", "Paradise Pile-up", "Endless Pro 1", "Endless Pro 2", "Free Your Mind", "Ion Furious", "Mace Windon't", "Pink Mist", "Rocket Man", "Dodge This", "Buddy, I Think You're Slime", "Better Things To Do", "Pacifist, Minus Chainsaws", "Chenis", "Don't Scratch My Ride", "That's Dope", "Run The Gauntlet", "Jimmy Eat You", "No Maw", "Rip and Tear", "Overqualified", "RoboShark", "Skill Issue", "Gotta Go Fast", "No More Splicing", "No More Games", "Halfpipe"];

    assert.strictEqual(officialAchievementNames.length, 67, "sanity check on this test's own reference list");

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

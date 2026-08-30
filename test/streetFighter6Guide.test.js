import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/street-fighter-6.js";

test("the Street Fighter 6 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "street-fighter-6-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "street-fighter-6");

});

test("the Street Fighter 6 guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Battle Hub & Online Modes",
            "World Tour",
            "Fighting Ground & Training",
            "Hidden Achievements",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 43-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /43 Steam achievements/);

});

test("every one of the 43 official Street Fighter 6 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Get Your Game Face On!", "So This Is the Battle Hub...", "First Encounters", "There's Always Time for Training!", "King of the Ring", "Jungle-Sized Surprise", "Extreme Combat Training", "Over the Top Victory", "Becoming the Avatar", "Fixin' for a Fight", "The Struggle Over Self", "Gazing at the Peak", "Steely Determination", "Dominating Like a Ninja", "Veteran of Battle", "Kickin' it Old School", "Classic Leaderboard Champ", "Entranced by Battle", "Combat Analysis", "Watching Gets Me PUMPED!", "Welcome to the Stable", "Let the Praise Become Your Muscle", "Gotta Be Popular! Uwo!", "Spirits of Encouragement", "Pleased to Meet You!", "Coolheaded Analysis", "My Title, My Life", "Joining the Pack", "Fashion Leader", "Ready to Dance?", "Up on the Big Screen", "Neighborhood Peacekeeper", "Mastery's Bond", "At Journey's End", "Leaving the Nest", "Ha-dough-ken", "Actions Speak Louder", "The Grand Jeté of 100 Battles", "Tales of the Valiant", "Practical Training", "Fighting Fledgling", "Fighters' Codex", "Taking Initiative"];

    assert.strictEqual(officialAchievementNames.length, 43, "sanity check on this test's own reference list");

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

import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/helldivers-2.js";

test("the Helldivers 2 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "helldivers-2-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "helldivers-2");

});

test("the Helldivers 2 guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Combat & Kills",
            "Missions & Objectives",
            "Teamwork & Ship Progression",
            "Skill Challenges",
            "Hidden Achievements",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 38-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /38 Steam achievements/);

});

test("every one of the 38 official Helldivers 2 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Hell Dive", "Hold my primary, I'm going in!", "Gone in 360 seconds!", "Extractamundo!", "Caught them by Supplies!",
        "Samples are a diver's best friend", "Doing your part", "It's the only way to be sure...", "For the greater good!", "Kill it with fire!",
        "Get some!", "That which does not kill you...", "The power of Democracy", "Fully operational", "Ship it!",
        "Nothing is bigger than Freedom", "The taller they are...", "They don't call it Tacticool for nothin'", "Let's call it a draw", "Cool guys don't loo- AAAAH!",
        "Hot Potato!", "Bot Scrapper", "Bug Stomper", "Extractinating the Countryside", "Patriot",
        "Hold My Liber-tea!", "Eat This!", "Democracy ain't done with you yet", "Promote Synergy", "Strapping young lad",
        "In the nick of time", "The Real Deal", "The long arm of Justice", "Stalking is illegal", "Job's done!",
        "Science is done by quantity", "They mostly come at night...", "Spread Managed Democracy",
    ];

    assert.strictEqual(officialAchievementNames.length, 38, "sanity check on this test's own reference list");

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

import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/dead-island-definitive-edition.js";

test("the Dead Island: Definitive Edition guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "dead-island-definitive-edition-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "dead-island-definitive-edition");

});

test("the Dead Island: Definitive Edition guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Combat & Weapon Feats",
            "Exploration, Progression & Co-op",
            "Bloodbath Arena DLC",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 57-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /57 Steam achievements/);

});

test("every one of the 57 official Dead Island: Definitive Edition achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["I want one of those", "One is all I need", "Can't touch this", "Humanitarian", "Light my fire", "10 heads are better than 1", "A taste of everything", "To put it bluntly", "Hack & slash", "Guns don't kill but they help", "Tae Kwon Leap", "Karma-geddon", "Catch!", "Road Trip", "Cardio", "Tis but a flesh wound!", "There and back again", "Gesundheit!", "Everybody lies", "Hell in paradise", "No raccoons in here", "King of the jungle", "Banoi Redemption", "Right 4 Life", "How many days exactly?", "Busy, busy, busy", "Learning the ropes", "Dedicated student", "School of hard knocks", "Knock, knock", "Gotta find'em all", "Nearly there", "Savior", "Need a hand?", "People Person", "Originality", "Together in the light", "Going steady", "Ménage à trois", "Rageman", "Warranty Void if Used", "Steam Punk", "First!", "A very special day", "Oh, no you don't", "Ah! Spoiled meat!", "Rootin' Tootin' Lootin'", "Wave and Smile", "Extreme Firefighting", "Out of honey? Chew bees!", "Complete a set", "Looking for trouble", "Stick it to the enemy", "Gladiator school", "Fancy", "Morituri te salutant", "Death Incarnate"];

    assert.strictEqual(officialAchievementNames.length, 57, "sanity check on this test's own reference list");

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

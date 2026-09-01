import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/deadlink.js";

test("the Deadlink guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "deadlink-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "deadlink");

});

test("the Deadlink guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Runs & Difficulties",
            "Speedruns, Implants & Weapons",
            "Arenas, Bosses & Upgrades",
            "Endgame & Endless",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 74-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /74 Steam achievements/);

});

test("every one of the 74 official Deadlink achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["An honest man", "Go no farther.", "Johnny Neurotic", "Trivial information", "Mars", "Nimrud", "Vishnu", "Hercules", "Sisyphus", "Close call", "Demolition Man", "Hisashi OSHA", "Alexandria", "Fire in the hole!", "Baseline", "College dropout", "Hard Lesson", "Call Of The Void", "Games Done Quick", "Backwards longjump", "Half o-pressed", "Better than sex", "Min-max", "Followed a guide", "Open Source", "I read Plato", "Duck Hunt", "Mujafedin", "Butlerian Jihad", "Toxic attitude\t", "Flame War", "Big Iron", "Blow your load", "Dissociative violence", "Exodus 10:1", "Longinus Podbipięta", "It's just a fucking laser!", "Excellent!", "Imagine my shock", "Shish kebab", "Eyes Wide Shut", "Headhunter", "You are locked in here with me", "Pussifist", "Mike Conley", "Newt-owned", "It werfers flammens", "Air superiority", "Speedrunner", "Arachnophobe", "Apex twin", "Amish paradise", "Man of integrity", "What a riot", "Gruby Damage", "Capitalism, hoe!", "Military Industrial Complex", "The Black Rider", "Erecting a sentry", "I'm the Juggernaut, bitch!", "Merciful", "I cast FIST!", "Little Boy", "Fat Man", "Watt's Up Doc?", "Evolutionary Dead-End", "Wage Slavery", "Iconoclasm", "Size doesn't matter", "Actually, it does", "Black Hole Sun", "Proton Decay", "Big Freeze", "The Big Crunch"];

    assert.strictEqual(officialAchievementNames.length, 74, "sanity check on this test's own reference list");

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

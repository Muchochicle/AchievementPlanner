import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/riptide-gp2.js";

test("the Riptide GP2 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "riptide-gp2-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "riptide-gp2");

});

test("the Riptide GP2 guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Career & Event Mastery",
            "Hydrojets, Online & Stunts",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 29-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /29 Steam achievements/);

});

test("every one of the 29 official Riptide GP2 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["I Did It!", "Amateur", "Professional", "Champion", "Speedy Racer", "Tricky Racer", "Aggressive Racer", "Pro Racer", "Stunt Novice", "Stunt Expert", "Stunt Master", "My First Hydrojet", "Enthusiast", "Collector", "Mechanic", "Tricked Out", "Socialite", "Small Fish", "Big Fish", "Predator", "Still Counts", "It's a Secret", "By A Nose", "So Close!", "Flying High", "Freeky Stylie", "Seasoned Vet", "Call Me Picasso", "Destructive Tendencies"];

    assert.strictEqual(officialAchievementNames.length, 29, "sanity check on this test's own reference list");

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

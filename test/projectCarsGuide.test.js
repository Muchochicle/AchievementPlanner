import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/project-cars.js";

test("the Project CARS guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "project-cars-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "project-cars");

});

test("the Project CARS guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Career & Championships",
            "Driving Feats",
            "Online & Time Trial",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 45-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /45 Steam achievements/);

});

test("every one of the 45 official Project CARS achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["One More For The Road", "Zero To Hero", "Defending Champ", "Triple Crown", "Hall Of Fame", "Fully Loaded", "VIP", "Meticulous", "Conquered. All. Races. Seriously.", "Double Rainbow", "No \"I\" In Team", "Twerkin'", "Taylor Would Be Proud", "Mailbox Full", "Petrolicious Love", "To Affinity & Beyond", "Home Field Advantage", "Selfie", "Half Racer, Half Demon", "Pit Boss", "Ready To Pounce", "Requesting Flyby", "Keep Calm And Race On", "Consistency Is King", "My Little Friend", "Grand Chelem", "A Day In The Life", "Emergency Stop", "No Roads Needed", "Do You Smell Somethin'?", "On Your Left", "Reversa Corsa", "Gladiator", "Sunday Driver", "Eastbound & Down", "Credit Where Credit's Due", "Player 1 Versus The World", "Pentapodia", "I Am The 5%", "Clean As A Whistle", "Pristine Paintwork", "Speed Racer", "Exorcist", "Lap Time Wizard", "Community Ambassador"];

    assert.strictEqual(officialAchievementNames.length, 45, "sanity check on this test's own reference list");

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

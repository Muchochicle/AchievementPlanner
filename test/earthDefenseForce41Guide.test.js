import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/earth-defense-force-4-1.js";

test("the EARTH DEFENSE FORCE 4.1 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "earth-defense-force-4-1-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "earth-defense-force-4-1");

});

test("the EARTH DEFENSE FORCE 4.1 guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Class Difficulty Clears",
            "Enemy Hunter Challenges",
            "Mastery & Co-op",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 51-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /51 Steam achievements/);

});

test("every one of the 51 official EARTH DEFENSE FORCE 4.1 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["A Walk in the Park", "Ranger Danger", "Ranger Power", "Rangers Lead the Way", "Winging It", "Wing of Truth", "Wingmaster", "Lord of the Wings", "Clearing the Air", "The Air Up There", "Air to the Throne", "Incoming Trophy", "Fencing Scholar", "Fencing Free Scholar", "Fencing Provost", "Fencing Master", "This is My Rifle, This is My Gun", "Do You Have a Permit for That?", "I Got a Permit For This One", "Ant Repellant", "Does Whatever a Spider Can't", "Drones Pwned", "Carrier Harrier", "Achilles Approves", "Quadrupeds Quelled", "Let Them Eat Cake", "Kings are Dropping Like Flies", "Red Dead Robotics", "Wait Till Your Fathership Gets Home", "Net Loss", "I Just Really Hate Tunnels", "Shields Yield", "Got the Bees! Got the Bees!", "More Like Dead Queens", "Reaving the Nest", "Dent-ified Flying Objects", "Jumping Ship", "Deroys Destroyed", "Dragon Fall", "Thou Hast Done Well", "Countless Screaming Argonauts", "Call a Taxidermist, I Have an Idea", "The Brains in Pain Fall Mainly for Your Gain", "Ranger Regimen", "Certified Diver", "Breathe Deeply", "Ravager-Proof Fencer", "Professional Hero", "Just Doing My Job", "You're Gonna Be Okay, Son", "Higher and Higher"];

    assert.strictEqual(officialAchievementNames.length, 51, "sanity check on this test's own reference list");

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

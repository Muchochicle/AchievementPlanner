import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/trials-fusion.js";

test("the Trials Fusion guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "trials-fusion-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "trials-fusion");

});

test("the Trials Fusion guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Career, Licenses & Track Challenges",
            "Track-Specific Challenges & Squirrels",
            "After the Incident & Bonus Tracks",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 51-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /51 Steam achievements/);

});

test("every one of the 51 official Trials Fusion achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["I Like What You've Done There", "The Bike is Your Hula Hoop", "Scrooging Around", "That's Not Right!", "Quadratic", "Wax On, Wax Off", "All Your Game Are Belong to Us", "A Wolf in Wolf's clothing", "Through The Fires of Hell", "Bright-Eyed & Bushy-Tailed", "The Fifth Key", "Leaving a Fine Lookin' Fossil", "The Full Cavity Treatment", "Unyielding III", "Full Throttle III", "Is There Anything You Can't Do?", "-1", "Ticket Out of Here", "Swallowed Whole", "Squirrel Scavengers", "Top Dog of the Turf", "Super Trials", "Three Birds, One Stone", "Global Sizzling.", "Silver Spoon Squirrels", "Lobster and Caviar", "Insights into the Past", "Abyssal Interference", "Elemental Triumph", "Gum Chewin' Squirrels", "Let Sleeping Octopus Lie", "Log Lady", "Anger Management", "Curiosity Killed the Cat", "Infernal Squirrels", "The Rising Phoenix", "Lynx vs Machine", "Rabbit One Zero", "Attack of the Clone", "Quantum Squirrels", "Virtual Virtuoso", "Rhetoric & Romance", "The End?", "Level Up", "Underdog", "Dumbstruck", "Brawlin' Squirrels", "The Right Blueprints", "Speedcuber", "Lee Woz 'Ere", "RedLynx to the Sword"];

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

import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/oxygen-not-included.js";

test("the Oxygen Not Included guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "oxygen-not-included-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "oxygen-not-included");

});

test("the Oxygen Not Included guide has all 8 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Imperatives & Survival Milestones",
            "Colony Comfort & Duplicants",
            "Food, Ranching & Critters",
            "Power, Heat & Automation",
            "Exploration & Space",
            "Spaced Out & Late Game",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 51-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /51 Steam achievements/);

});

test("every one of the 51 official Oxygen Not Included achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "The Great Escape", "Home Sweet Home", "Locavore", "Carnivore", "Some Reservations",
        "No Place Like Clone", "Turn of the Century", "Moovin' On Up", "Not 0K, But Pretty Cool", "Super Sustainable",
        "Outdoor Renovations", "Totally Tubular", "Space Race", "And Nowhere to Go", "Get a Room",
        "One Year, to be Exact", "Slick", "Critter Whisperer", "To Pay the Bills", "Honorary Doctorate",
        "It's Not Raw", "Royal Flush", "One Bed One Bath", "Oxygen Not Occluded", "Red Light, Green Light",
        "Art Underground", "Ghosts of Gravitas", "Good Egg", "They Got Better", "Tune Up For What?",
        "Pulling Back The Veil", "Down the Hatch", "Immovable Object", "Easy Livin'", "Job Suitability",
        "First Teleport of Call", "Soft Launch", "Cluster Conquest", "GMO A-OK", "Mine the Gap",
        "Cosmic Archaeology", "Radical Trip", "Sweeter Than Honey", "Morale High Ground", "That's Rad!",
        "Full Steam Ahead", "Data Driven", "Most Valuable Bionic", "Blast Line of Defense", "The Lab: Life Found A Way",
        "Better Together",
    ];

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

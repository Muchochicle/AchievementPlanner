import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/dave-the-diver.js";

test("the DAVE THE DIVER guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "dave-the-diver-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "dave-the-diver");

});

test("the DAVE THE DIVER guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Main-Story Progression",
            "Bancho Sushi & Cooksta",
            "Partner Villages & Farms",
            "Diving, Hunting & Collecting",
            "Hidden Achievements",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 43-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /43 Steam achievements/);

});

test("every one of the 43 official DAVE THE DIVER achievement names is mentioned somewhere in the guide", () => {

    // The full, official list this guide is built from
    // (backend/catalog/games/dave-the-diver.json).
    const officialAchievementNames = [
        "Bancho Sushi is Back!", "Undersea Gunslinger", "New Undersea Friend", "Better Equipment", "Undersea Civilization!",
        "Deep-sea Diver", "Culinary Researcher", "Culinary Master", "Shop's Lookin' Good!", "Influencer",
        "Scrap Metal Collector", "Angry Shark!", "Dave the Sniper", "Mister Melee", "Saved Dave!",
        "A Dark and Cold Place", "Momo's Secret", "Achoo!", "A Peaceful Blue Hole", "Dumplings in the Water",
        "The Seaweed is Growing!", "Feeble Blacksmith", "Weapon Collector", "Arms Craftsman", "Sea People Historian",
        "Predator of the Blue Hole", "Ration Eater", "Catman", "Blacksmith Helper", "Professional Farmer",
        "GYAO! Master", "Photographer", "Strange Fish", "Dev Killer", "Creature Hunter",
        "My Wonderful Rice Field!", "My Wonderful Field!", "God of Lightning", "A Bancho Sushi Regular", "Leadership",
        "Cooksta Influencer", "Artisan's Flame", "Manager"
    ];

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

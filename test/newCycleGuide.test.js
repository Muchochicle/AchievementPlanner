import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/new-cycle.js";

test("the New Cycle guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "new-cycle-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "new-cycle");

});

test("the New Cycle guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Population & Survival",
            "Building, Power & Development",
            "Logistics, Production & Infrastructure",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 55-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /55 Steam achievements/);

});

test("every one of the 55 official New Cycle achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Rising House", "Hope's Hamlet", "City of Second Chances", "Beacon of the Broken World", "Metropolis of Mankind's Might", "First Cycle", "Five Years Forward", "Ten Years of Fortitude", "Persistence Symbol", "Cement Roots", "Quarter-Century Mortar", "Say No to Death", "Muted Mortality", "The Return of Mastery", "Post Academia", "Iron Horse", "Non-modern Expansionism", "Acceptants", "A Palmful", "One Squad", "High ratio", "Cauldron of Attraction", "Rural Nest", "Town-like Density", "A Center of Rebirth", "Where All Roads Lead", "Awakening of Power", "Dynamo", "Bringer of light", "Core Power", "Reflexive", "Regular interventionist", "Old World Tradition", "Belter", "Extra Limbs", "Wrapper", "Onward to Delphi", "Chubby Chef", "The Last Supply Line", "Warehouse Wonderland", "First Ignition", "Big Rig Dreams", "Crossing Into the Last Hope", "Surveyor of the Future", "Shoreline Sanctuary", "The City of Class", "Fashions of the Final Frontier", "Pressure Point", "Birth of Skyscrapers", "Melting the Waste Mountain", "Fence Knitter", "Coating Artisan", "All roads lead to us", "Superior Community Servant", "Manufacturing Workforce"];

    assert.strictEqual(officialAchievementNames.length, 55, "sanity check on this test's own reference list");

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

import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/bridge-constructor-portal.js";

test("the Bridge Constructor Portal guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "bridge-constructor-portal-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "bridge-constructor-portal");

});

test("the Bridge Constructor Portal guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Base Game Chapters",
            "Base Game Feats & Milestones",
            "Portal Proficiency DLC",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 26-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /26 Steam achievements/);

});

test("every one of the 26 official Bridge Constructor Portal achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Extended Testing Opportunity", "Food and Artificial Sunlight", "Post-Insignificance", "Official Pre-Admittance", "Full Chief Custodian candidate", "Spectacularly Lonely", "Centrifugal Convoy Adjustment System", "Entry-Exit Relay Repeater System", "No Hard Feelings", "Aerial Mobility Support System", "66% Loss", "66% Delivery", "0% Non-Delivery", "For Science!", "For More Science!", "You monster.", "Principals of Portalability", "Advanced Tunneling", "Profound Portal Proficiency", "Convoyability 10", "Convoyability 20", "Convoyability 30", "Portal Deficiency Certificate", "Tunneling at Full Capacity", "Deliverance from Non-delivery", "Condolence Letter Delivery Boom"];

    assert.strictEqual(officialAchievementNames.length, 26, "sanity check on this test's own reference list");

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

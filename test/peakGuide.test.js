import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/peak.js";

test("the PEAK guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "peak-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "peak");

});

test("the PEAK guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Early Climbing & Camp",
            "Challenge Runs & Exploration",
            "Biome Mastery & Special Interactions",
            "Late-Game Feats",
            "Hidden Achievement",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 64-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /64 Steam achievements/);

});

test("every one of the 64 official PEAK achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Peak Badge", "Cooking Badge", "Knot Tying Badge", "Beachcomber Badge", "Participation Badge",
        "Trailblazer Badge", "Happy Camper Badge", "Alpinist Badge", "Volcanology Badge", "Bouldering Badge",
        "Toxicology Badge", "Foraging Badge", "Esoterica Badge", "Lone Wolf Badge", "Clutch Badge",
        "Balloon Badge", "Leave No Trace Badge", "Hasty Badge", "Bing Bong Badge", "Naturalist Badge",
        "Gourmand Badge", "Mycology Badge", "First Aid Badge", "Survivalist Badge", "Animal Serenading Badge",
        "Arborist Badge", "Mentorship Badge", "Emergency Preparedness Badge", "High Altitude Badge", "Plunderer Badge",
        "Bookworm Badge", "Endurance Badge", "Nomad Badge", "Ultimate Badge", "Cool Cucumber Badge",
        "Needlepoint Badge", "Aeronautics Badge", "24 Karat Badge", "Resourcefulness Badge", "Daredevil Badge",
        "Megaentomology Badge", "Astronomy Badge", "Bundled Up Badge", "Forestry Badge", "Tread Lightly Badge",
        "Web Security Badge", "Undead Encounter Badge", "Advanced Mycology Badge", "Disaster Response Badge", "Calcium Intake Badge",
        "Competitive Eating Badge", "Applied Esoterica Badge", "Mycoacrobatics Badge", "Cryptogastronomy Badge", "Wanderer Badge",
        "Bellringer Badge", "Well Rested Badge", "Jester Badge", "Hang Gliding Badge", "Medieval History Badge",
        "Last Resort Badge", "Exorcist Badge", "Archery Badge", "Rule Zero Badge",
    ];

    assert.strictEqual(officialAchievementNames.length, 64, "sanity check on this test's own reference list");

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

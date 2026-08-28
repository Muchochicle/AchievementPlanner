import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/pubg-battlegrounds.js";

test("the PUBG: BATTLEGROUNDS guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "pubg-battlegrounds-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "pubg-battlegrounds");

});

test("the PUBG: BATTLEGROUNDS guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Winning & Placement",
            "Weapon Kill Tiers",
            "Total Kills & Combat Feats",
            "Gear, Vehicles & Odd Jobs",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 37-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /37 Steam achievements/);

});

test("every one of the 37 official PUBG: BATTLEGROUNDS achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Last Survivor", "Winner Winner Chicken Dinner!", "Dynamic Duo", "Fantastic Four", "Top 10",
        "Pacifist", "CQB Master", "CQB Expert", "CQB Novice", "Marksman Master",
        "Marksman Expert", "Marksman Novice", "Nade King Master", "Nade King Expert", "Nade King Novice",
        "Long and Winding Road", "Collateral Damage", "Devil Inside Me", "Blood on My Hands", "The First Rule Is…",
        "Killing Spree", "Trigonometry Involved", "Okay, Now I'm Ready", "First Blood", "Shoot the Knee",
        "First Come, First Served", "Agent 48", "Now You See Me, Now You Don't", "Airborne", "Fury Road",
        "Guardian Angel", "Ghost", "Don't Pan Me Bro!", "Fast and Furious", "You Complete Me",
        "Cruising with the Enemy", "Health Junkie"
    ];

    assert.strictEqual(officialAchievementNames.length, 37, "sanity check on this test's own reference list");

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

import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/warhammer-vermintide-2.js";

test("the Warhammer: Vermintide 2 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "warhammer-vermintide-2-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "warhammer-vermintide-2");

});

test("the Warhammer: Vermintide 2 guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Campaign & Skittergate",
            "Hero Progression",
            "Crafting & Gear",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 26-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /26 Steam achievements/);

});

test("every one of the 26 official Warhammer: Vermintide 2 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Escaped!", "The Plot Thickens", "Striking Back", "Reikland Rumble", "The Frozen North",
        "Pact-Smasher", "Righteous Crusade", "Norscannihilation", "Avatar of Drakira", "Witch Hunter General",
        "Champion of Taal", "Conflagration of Doom", "Just Like Cousin Okri", "Pantheon of Heroes", "Tempered by War",
        "Exemplar", "Craftsman", "Master Craftsman", "Waste Not, Want Not", "Make Do And Mend",
        "My First Wargear", "Quite the Find", "Heirloom", "Now You're Showing Off", "Mark of Expertise",
        "Virtuoso",
    ];

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

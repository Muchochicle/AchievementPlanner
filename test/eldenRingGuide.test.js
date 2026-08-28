import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/elden-ring.js";

test("the ELDEN RING guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "elden-ring-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "elden-ring");

});

test("the ELDEN RING guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "The Three Endings",
            "The Shardbearers",
            "Critical Path & Milestones",
            "Optional Bosses",
            "Legendary Collections",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 42-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /42 Steam achievements/);

});

test("every one of the 42 official ELDEN RING achievement names is mentioned somewhere in the guide", () => {

    // The full, official list this guide is built from
    // (backend/catalog/games/elden-ring.json).
    const officialAchievementNames = [
        "Elden Ring", "Elden Lord", "Age of the Stars", "Lord of Frenzied Flame", "Shardbearer Godrick",
        "Shardbearer Radahn", "Shardbearer Morgott", "Shardbearer Rykard", "Shardbearer Malenia", "Shardbearer Mohg",
        "Maliketh the Black Blade", "Hoarah Loux, Warrior", "Dragonlord Placidusax", "God-Slaying Armament", "Legendary Armaments",
        "Legendary Ashen Remains", "Legendary Sorceries and Incantations", "Legendary Talismans", "Rennala, Queen of the Full Moon", "Lichdragon Fortissax",
        "Godskin Duo", "Fire Giant", "Dragonkin Soldier of Nokstella", "Regal Ancestor Spirit", "Valiant Gargoyles",
        "Margit, the Fell Omen", "Red Wolf of Radagon", "Godskin Noble", "Magma Wyrm Makar", "Godfrey, First Elden Lord",
        "Mohg, the Omen", "Mimic Tear", "Loretta, Knight of the Haligtree", "Astel, Naturalborn of the Void", "Leonine Misbegotten",
        "Royal Knight Loretta", "Elemer of the Briar", "Ancestor Spirit", "Commander Niall", "Roundtable Hold",
        "Great Rune", "Erdtree Aflame"
    ];

    assert.strictEqual(officialAchievementNames.length, 42, "sanity check on this test's own reference list");

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

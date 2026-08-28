import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/sifu.js";

test("the Sifu guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "sifu-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "sifu");

});

test("the Sifu guide has all 9 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story & Bosses",
            "The Wude Path",
            "Detective Boards",
            "Combat & Score Feats",
            "Per-Level Custom Challenges",
            "The Arena",
            "Completion",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 61-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /61 Steam achievements/);

});

test("every one of the 61 official Sifu achievement names is mentioned somewhere in the guide", () => {

    // The full, official list this guide is built from
    // (backend/catalog/games/sifu.json).
    const officialAchievementNames = [
        "Fist of the Immortal", "The Old Grandmaster", "The Assault", "The Hateful Pole Fighter", "A Lady's Blood in the Snow",
        "Lady Wing Chun", "Furious Fists", "Muk Yan Master", "Tiger on Fire", "Source of Flying Daggers",
        "Iron Money", "Legendary Talismans of Wuxing", "Scareless", "Prodigal Child", "Kill Nil",
        "Detective Story", "Drunken Fighter", "Martial Artist", "Knowledge Greed", "Healing Memory",
        "Stuntmaster", "Dance of the Praying Mantis", "Street Fighting", "Life is your teacher", "State of constant learning",
        "Qi Gong: Mind", "Qi Gong: Breath", "Qi Gong: Essence", "The 36th Chamber of Kung-Fu", "Master of the Phoenix Eye Fist",
        "I know Kung-Fu", "Ferocity, speed, strength, accuracy", "Old Child", "Sword Stained With Blood", "Lightning Hands",
        "Kung-Fu Tussle", "Path of the Prospect", "Rumble in the Hangar", "The Pit Protector", "Be like water my friend",
        "Take damage to save time", "Warriors from the Mountain", "Come Snap With Me", "Project Arena", "Diligence as a goal",
        "Bloody Sport", "Martial Hub", "Deadly Venom", "Secure, Protect, Leave", "The best strikes are the ones we avoid",
        "A Touch of Acumen", "Crouching Tiger", "Hidden Dragon", "Skill and an even stronger will", "Master of the Flying Assassins",
        "Here Cometh the Iceman", "Fighter in the Pond", "Bonus Stage", "Beatmaker", "Fight the way you practice",
        "A Bit Of Everything, Simultaneously"
    ];

    assert.strictEqual(officialAchievementNames.length, 61, "sanity check on this test's own reference list");

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

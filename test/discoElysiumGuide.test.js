import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/disco-elysium.js";

test("the Disco Elysium guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "disco-elysium-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "disco-elysium");

});

test("the Disco Elysium guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Dialogue-Approach Achievements",
            "Kim, Cuno & Your Partners",
            "The City's Stranger Secrets",
            "Hardcore Mode",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 45-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /45 Steam achievements/);

});

test("every one of the 45 official Disco Elysium achievement names is mentioned somewhere in the guide", () => {

    // The full, official list this guide is built from
    // (backend/catalog/games/disco-elysium.json).
    const officialAchievementNames = [
        "Unbelievably Boring F**k", "Hyperstellar Law Official", "The Opener Of The Eighth Seal", "Literally The Sorriest Cop On Earth", "Biggest Communism Builder",
        "Truly Rabid \"Traditionalist\"", "The World's Most Laughable Centrist", "Baddest Hustler In The Neoliberal Hood", "Expert Advanced Remote Viewer", "Massive Torque Dork",
        "Il Coppo Del'Arte!", "The Most Honourable Cop in The Land", "Enemy Of The Physical Realm", "The Lawbringer", "Baddest Of the Bad Cops",
        "Goodest Of The Good Cops", "Recruit Detective Kim Kitsuragi", "Recruit Detective Kuuno de Ruyter", "The Figurines Won't Win Her Back", "Fairweather t-500 Vitreous Enamel",
        "Gluten-Free Topping Pie", "Venture into the HARDCORE", "True Detective", "Palerunner", "Real Musor",
        "Avowed Inframaterialist", "The Icebreaker", "Networthy Individual", "Committee of la Responsabilité", "What body?",
        "Medal dispenser", "Hardie's Heroes", "Cause a Shitstorm", "Leopard Mindset", "Wheel of Pleasure and Light",
        "Modus: Mullen", "Bother Kim After Hours", "Baddest Brow in Town", "Gurdi-Ball Is Lit", "Get Kim to Wear *The Jacket*",
        "Spectres of Hope", "Old Flame", "Looks Like Progress", "Priceless Facade", "Now For A Difficult Provenance"
    ];

    assert.strictEqual(officialAchievementNames.length, 45, "sanity check on this test's own reference list");

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

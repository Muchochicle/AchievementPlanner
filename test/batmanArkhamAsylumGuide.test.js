import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/batman-arkham-asylum.js";

test("the Batman: Arkham Asylum guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "batman-arkham-asylum-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "batman-arkham-asylum");

});

test("the Batman: Arkham Asylum guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story & Boss Encounters",
            "FreeFlow Combat & Predator Feats",
            "The Riddler & 100% Completion",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 47-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /47 Steam achievements/);

});

test("every one of the 47 official Batman: Arkham Asylum achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Shocking Rescue", "Leave No Man Behind", "Malpractice Needs More Practice", "Born Free", "Just What The Doctors Ordered", "Daydreamer", "Baneful Payback", "Breaking And Entering", "Recurring Nightmare", "Zsasz Cut Down To Size", "Solitary Confinement", "Double Trouble", "Resist The Fear", "Crocodile Tears", "Poisoned Ivy", "Big Bang", "Bigger Bang", "Biggest Bang", "Party Pooper", "Freeflow Combo 20", "Freeflow Combo 40", "Night Glider", "Rope-a-dope-a-dope", "Mano-a-mano", "Catch!", "Freeflow Combo 5", "Freeflow Combo 10", "Freeflow Perfection", "Freak Show Rodeo", "Freeflow Bronze", "Freeflow Silver", "Freeflow Gold", "Predator Bronze", "Predator Silver", "Predator Gold", "Invisible Predator", "Flawless Freeflow Fighter", "Crack The E Nigma", "Arkham Analyst", "Cryptic Investigator", "Lateral Thinker", "Mystery Solver", "Conundrum Cracker", "Mental Athlete", "Riddle Resolver", "World's Greatest Detective", "Perfect Knight"];

    assert.strictEqual(officialAchievementNames.length, 47, "sanity check on this test's own reference list");

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

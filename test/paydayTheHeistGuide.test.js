import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/payday-the-heist.js";

test("the PAYDAY: The Heist guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "payday-the-heist-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "payday-the-heist");

});

test("the PAYDAY: The Heist guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Core Heist Challenges (Part 1)",
            "Core Heist Challenges (Part 2) & Progression",
            "OVERKILL 145+ & Level Milestones",
            "DLC Heists: Counterfeit, Undercover & No Mercy",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 56-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /56 Steam achievements/);

});

test("every one of the 56 official PAYDAY: The Heist achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Diplomatic", "Cheney?", "Intimidating", "Left for dead", "Blood in, blood out", "A bridge too far!", "Dodge this!", "But how?", "Last man standing", "Windowlicker", "Civil disobedience", "Are there more than two?", "You can run but you can't hide", "Shinobi", "Are those the blue ones?", "Gold digger", "Stand together", "Quick draw", "No photos", "Hot lava", "Federal crime", "One shot, one kill - repeat", "Bomb man", "Are you ready yet?", "PAYDAY", "Easy street", "I pushed the button and lived!", "Noob herder", "Don't lose face", "Eagle eyes", "I ain't afraid no more", "Crack-bang", "Lay on hands", "Darkness", "Last Christmas", "You are GOLDEN! OVERKILL salutes you!", "Four more years", "Bank on me", "Hills Street Blues", "Beat the shield", "Brush with death", "Lots of pigs, but no pigs", "Bad code", "Crowd control", "Quick hands", "Pacifist", "Blow-out", "The Saviour", "Detective Gadget", "Under Pressure", "In for a dime, in for a dollar", "Don't panic", "...or was it the blue one?", "That's the wrong door, again!", "Afraid of the dark", "OVERDRILL"];

    assert.strictEqual(officialAchievementNames.length, 56, "sanity check on this test's own reference list");

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

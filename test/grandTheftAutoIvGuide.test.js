import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/grand-theft-auto-iv.js";

test("the Grand Theft Auto IV guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "grand-theft-auto-iv-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "grand-theft-auto-iv");

});

test("the Grand Theft Auto IV guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story Progress & Liberty City Life",
            "Side Content, Rampages & Skill Feats",
            "The Lost and Damned",
            "The Ballad of Gay Tony",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 55-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /55 Steam achievements/);

});

test("every one of the 55 official Grand Theft Auto IV achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Off The Boat", "Lowest Point", "Impossible Trinity", "Full Exploration", "You Won!", "Key To The City", "Warm Coffee", "Gobble Gobble", "One Hundred And Eighty", "King of QUB3D", "It'll Cost Ya", "Order Fulfilled", "Courier Service", "Manhunt", "Assassin's Greed", "Genetically Superior", "Wheelie Rider", "Under The Radar", "Liberty City (5)", "Liberty City Minute", "Rolled Over", "Sightseer", "Pool Shark", "One Man Army", "Gracefully Taken", "That Special Someone", "Cleaned The Mean Streets", "You Got The Message", "No More Strangers", "Fed The Fish", "Dial B For Bomb", "Driving Mr. Bellic", "That's How We Roll!", "Retail Therapy", "Half Million", "Chain Reaction", "Finish Him", "Dare Devil", "Endangered Species", "Walk Free", "TLAD: One Percenter", "TLAD: The Lost Boy", "TLAD: Easy Rider ", "TLAD: Get Good Wood", "TLAD: Full Chat", "TBoGT: Gone Down", "TBoGT: Diamonds Forever", "TBoGT: Maestro", "TBoGT: Snow Queen", "TBoGT: Bear Fight", "TBoGT: Four Play", "TBoGT: Past the Velvet Rope", "TBoGT: Adrenaline Junkie", "TBoGT: Catch the Bus", "TBoGT: Gold Star"];

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

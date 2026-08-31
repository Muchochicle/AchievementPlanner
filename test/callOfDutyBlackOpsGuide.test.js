import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/call-of-duty-black-ops.js";

test("the Call of Duty: Black Ops guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "call-of-duty-black-ops-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "call-of-duty-black-ops");

});

test("the Call of Duty: Black Ops guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Campaign Missions & Feats",
            "Zombies: Core & Menu Secrets",
            "Zombies DLC Maps",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 68-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /68 Steam achievements/);

});

test("every one of the 68 official Call of Duty: Black Ops achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Death to Dictators", "Sacrifice ", "Vehicular Slaughter", "Give me liberty, or give me death", "Slingshot Kid ", "VIP", "A safer place", "Tough Economy", "Looks don't count", "SOG Rules", "Raining Pain", "The Dragon Within", "Heavy Hand", "Up close and personal", "Double Trouble", "Broken English", "Lord Nelson", "Never get off the boat", "Pathfinder", "Mr. Black OP", "With extreme prejudice", "Russian bar-b-q", "Light Foot", "Some wounds never heal", "I hate monkeys", "No Leaks", "Clarity", "Double Whammy", "BLACK OP MASTER", "Stand Down", "Frag Master", "Sally Likes Blood", "Unconventional Warfare", "Cold Warrior", "Down and Dirty", "It's your funeral", "Not Today", "Burn Notice", "Closer Analysis", "The Collector", "See Me, Stab Me, Heal Me", "Hands Off the Merchandise", "Sacrificial Lamb", "\"Insert Coin\"", "Easy Rhino", "Just ask me nicely", "Eaten by a Grue", "The eagle has landers", "They are going THROUGH!", "Space Race", "Chimp on the barbie", "Stand-in", "Ensemble Cast", "Stuntman", "Shooting on Location", "Quiet on the Set", "Time Travel Will Tell", "Blinded By the Fright", "Zomb Disposal", "Monkey See, Monkey Don't", "Small Consolation", "Cryogenic Slumber Party", "One Small Hack for a Man... ", "One Giant Leap ", "Perks in Spaaaaace! ", "Fully Armed and Operational ", "Ground Control ", "Big Bang Theory "];

    assert.strictEqual(officialAchievementNames.length, 68, "sanity check on this test's own reference list");

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

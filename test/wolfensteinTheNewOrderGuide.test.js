import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/wolfenstein-the-new-order.js";

test("the Wolfenstein: The New Order guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "wolfenstein-the-new-order-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "wolfenstein-the-new-order");

});

test("the Wolfenstein: The New Order guide has all 8 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        ["Overview","Story & Difficulty","Collectibles & Enigma Codes","Stealth Perks","Tactical Perks","Assault Perks","Demolition Perks","Suggested Order"]
    );

});

test("the Overview states the verified 50-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /50 Steam achievements/);

});

test("every one of the 50 official Wolfenstein: The New Order achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Gunner","Fergus saved","Wyatt saved","Vive la resistance!","Power to the laser","Hidden in the deep","London uprising","Deliverance","Liberation","Super hero","Über hero","All that glitters","Heart of gold","The lives of others","Secrets revealed I","Secrets revealed II","Secrets revealed III","Secrets revealed IV","Scout I","Knife throwing","Knife sheath +","Knife sheath ++","Silent shot","Vampire","Scout II","Assassin","Deadeye","Quick draw","Quick regeneration","Gun magazine +","Shotgun magazine +","AR magazine +","Marksman magazine +","Quick reload","Double reload","Endurance I","Scavenger","Bullet feeder","Endurance II","Autopanzer","LKW battery +","Dual-wield expert","Throwback","Grenade pouch +","Grenade pouch ++","Bullseye","Rocket magazine +","Vaporize","Sentinel","Hardened"];

    assert.strictEqual(officialAchievementNames.length, 50, "sanity check on this test's own reference list");

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

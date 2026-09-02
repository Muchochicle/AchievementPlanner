import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/ys-viii-lacrimosa-of-dana.js";

test("the Ys VIII: Lacrimosa of DANA guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "ys-viii-lacrimosa-of-dana-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "ys-viii-lacrimosa-of-dana");

});

test("the Ys VIII: Lacrimosa of DANA guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        ["Overview","The Adventure","Isle of Seiren 100%","Castaway Village","Combat & Party","Suggested Order"]
    );

});

test("the Overview states the verified 54-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /54 Steam achievements/);

});

test("every one of the 54 official Ys VIII: Lacrimosa of DANA achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Perfect Map","Item Collector","Treasure Hunter","People Person","Castaway Cook","Reel Big Fisherman","Beast Expert","Material Researcher","Far-off Explorer","Wide-eyed Wanderer","Thriving Village","Fortified Village","Exceptional Service","Village Superstar","Refined Craftsman","Craftsman Supreme","Triple Eights","Beast Buster","Dino Slayer","Skill Finisher","Grand Breaker","Flash Guarder","Flash Mover","EXTRA Master","Splendid Tactician","Decorated Defender","Demon Hunter","Adroit Artisan","Red-Haired Adventurer","Proud Noblewoman","Plainspoken Fisherman","Lone Transporter","Tenacious Wild Girl","Elegant Wandering Maiden","Prosperous Kingdom","Spirit Keeper","Roaring Reputation","Silence Breaker","Reaper of Hall","Beyond the Nightmare","A New Adventure","Night on the Gaete Sea","The Isle of Seiren","Towering Coral Forest","Dark Eroded Valley","The Castaway Banquet","Surpassing Gendarme","The Lost World","Ancient Leaning Tower","Hope Fulfilled","Maiden of the Great Tree","Lacrimosa of the Distant Sea","Inherited Will","End of the Blue Waves"];

    assert.strictEqual(officialAchievementNames.length, 54, "sanity check on this test's own reference list");

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

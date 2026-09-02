import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/star-wars-battlefront-ii.js";

test("the STAR WARS Battlefront II guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "star-wars-battlefront-ii-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "star-wars-battlefront-ii");

});

test("the STAR WARS Battlefront II guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        ["Overview","Campaign","Multiplayer & Starfighter Assault","Resurrection Update","Suggested Order"]
    );

});

test("the Overview states the verified 43-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /43 Steam achievements/);

});

test("every one of the 43 official STAR WARS Battlefront II achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["The Cleaner","The Battle of Endor","The Dauntless","The Observatory","The Storm","Outcasts","Royalty","General Distress","Under Covered Skies","Cache Grab","The Battle of Jakku","Until Ashes","Discoveries","Dark Forces","Balance Point","X-wing vs. TIE Fighter","Master of Deception","A Job Well Done","Outbound Flight","There Has Been An Awakening","The Force is Strong With This One","Not All Miss","A Dominating Presence","Sentry Mode Engaged","Scoped","The Interceptor","The Bomber","Multi-tasking","Complete Your Training","There is No Such Thing As Luck","Ignore Your Instincts At Your Peril","What a Blast","Strike Back","Battle Beyond the Stars","Choose Your Path","Quick Strike","Heavy is the Hand","Do. Or Do Not. There is no Try.","A Galaxy at War","We are the Spark","Project: Resurrection","Ashes of the Empire","Inferno"];

    assert.strictEqual(officialAchievementNames.length, 43, "sanity check on this test's own reference list");

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

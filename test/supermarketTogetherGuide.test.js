import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/supermarket-together.js";

test("the Supermarket Together guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "supermarket-together-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "supermarket-together");

});

test("the Supermarket Together guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        ["Overview","Collective Counters","Money & Store Growth","Feats & Layout Secrets","Suggested Order"]
    );

});

test("the Overview states the verified 51-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /51 Steam achievements/);

});

test("every one of the 51 official Supermarket Together achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Millionaire's Holiday","Basic Restocker","Advanced Restocker","Master Restocker","Basic Recycler","Advanced Recycler","Expert Recycler","Some Success","This Is Rolling","Sky High","Basic Cashier","Advanced Cashier","Expert Cashier","Basic Cleaner","Advanced Cleaner","Expert Cleaner","Careful Cashier","Not On My Guard","Can't Someone Else Do It?","Welcome Mr. Whiskers","Gaining Traction!","KA-CHING!","Basic Decorator","Advanced Decorator","Master Decorator","Observation Duty?","Caught Red Handed","How Is This Still Standing? (A)","Defaulter","Good, Pretty, Cheap","Better, Prettier, Cheaper","Feed The Machine","Condensed Recycling","Might Need Two Ladders","Who Could Resist?","Taxes? In my store?","A Responsible Owner","Turning The Router On","Still Connected","Virtual Benefits","Let's Get To Work","Wrench Specialist","Good Morning Dear Customers","Tool Of Chaos","Please Check My Prices!!","Superfood","A Wider Array Of Products","A Good Wares Selection","How Is This Still Standing Again?","Might Need Two Ladders... Or More","What is this?"];

    assert.strictEqual(officialAchievementNames.length, 51, "sanity check on this test's own reference list");

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

import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/raft.js";

test("the Raft guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "raft-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "raft");

});

test("the Raft guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Building, Crafting & Survival",
            "Hunting & Wildlife",
            "Story Islands & Historians",
            "Gathering, Travel & Excavation",
            "Hidden Achievements",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 104-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /104 Steam achievements/);

});

test("every one of the 104 official Raft achievement names is mentioned somewhere in the guide", () => {

    // The full, official list this guide is built from
    // (backend/catalog/games/raft.json).
    const officialAchievementNames = [
        "Beginner Builder!", "Teamplay!", "Dinnertime!", "It's Better Without The Salt.", "Aye Aye Captain!",
        "Hoarder!", "Farmer!", "Bookworm!", "Intermediate Builder!", "Expert Builder!",
        "Beginner Shark Hunter!", "Intermediate Shark Hunter!", "Expert Shark Hunter!", "Beginner Gatherer!", "Intermediate Gatherer!",
        "Expert Gatherer!", "Beginner Bird Hunter!", "Intermediate Bird Hunter!", "Expert Bird Hunter!", "Beginner Painter!",
        "Intermediate Painter!", "Expert Painter!", "This Goes Here!", "An Ocean Cemetery!", "Is There A Utopia?",
        "Exploring The depths!", "Beginner Survivor!", "Intermediate Survivor!", "Expert Survivor!", "Master Survivor!",
        "Beginner Poison-Puffer Hunter!", "Intermediate Poison-Puffer Hunter!", "Expert Poison-Puffer Hunter!", "Beginner Screecher Hunter!", "Intermediate Screecher Hunter!",
        "Expert Screecher Hunter!", "Not A Great Landing!", "Large Landmass Ahoy!", "A More Complex Concoction!", "Beginner Wrangler!",
        "Intermediate Wrangler!", "Expert Wrangler!", "Some Look Different!", "Beginner Warthog Hunter!", "Intermediate Warthog Hunter!",
        "Expert Warthog Hunter!", "O Captain! My Captain!?", "Mother Lode!", "Pling!", "Fix Errol!",
        "A Revelation!", "Tiny Little Murderer", "Radio Tower Historian!", "Vasagatan Historian!", "Balboa Historian!",
        "Bootleg Fireworks!", "Beginner Lurker Hunter!", "Intermediate Lurker Hunter!", "Expert Lurker Hunter!", "Beginner Bear Hunter!",
        "Intermediate Bear Hunter!", "Expert Bear Hunter!", "Artistic Collection!", "Caravan Town Historian!", "Tangaroa Historian! ",
        "Zip Zap!", "Beginner Ziponaut!", "Intermediate Ziponaut!", "Expert Ziponaut!", "Beginner Excavator!",
        "Intermediate Excavator!", "Expert Excavator!", "Former Glory!", "Plumber Power!", "Bee Keeper!",
        "Beginner Bee-nevolent!", "Intermediate Bee-nevolent!", "Expert Bee-nevolent!", "Boxed In!", "Instrumentalist!",
        "Small Spender! ", "Medium Spender!", "Big Spender!", "Beginner Disruptor!", "Intermediate Disruptor!",
        "Expert Disruptor!", "Launch Initiated!", "Real Fireworks!", "You Should Not Be Here!", "The Renovator!",
        "Explosive Force!", "Beginner Anglerfish Hunter!", "Intermediate Anglerfish Hunter!", "Expert Anglerfish Hunter!", "There Is A Utopia!",
        "All Aboard!", "Beginner Merchant!", "Intermediate Merchant!", "Expert Merchant!", "Powered Up!",
        "That's Not A Boat...", "Cache Collector!", "Varuna Point Historian!", "Temperance Historian!"
    ];

    assert.strictEqual(officialAchievementNames.length, 104, "sanity check on this test's own reference list");

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

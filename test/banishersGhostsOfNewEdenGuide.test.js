import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/banishers-ghosts-of-new-eden.js";

test("the Banishers: Ghosts of New Eden guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "banishers-ghosts-of-new-eden-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "banishers-ghosts-of-new-eden");

});

test("the Banishers: Ghosts of New Eden guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        ["Overview","Story & Choices","Exploration & Collectibles","Combat & Progression","Suggested Order"]
    );

});

test("the Overview states the verified 43-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /43 Steam achievements/);

});

test("every one of the 43 official Banishers: Ghosts of New Eden achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Master Banishers","Cases Closed","Death is a journey","Farewell my love","A Promise made","Final Promise","Reunion","No more Beast","Broken Puppet","Injustice For All","Old moss-head","Nazuku no more","The Curse is lifted","Rose's fate","Burden of Command","Judged Jury","Teacher's Pet","American Vampyr","Second Death","Hidden Door","Until a cure is found","Counterattack","Right on Target","Outburst","Float like a Butterfly","A Farmer's Life","Banishing Move","Soulmates","Teamwork","Gimme Shelter","Demolition Man","Locksmith","Cursed Locksmith","Raider","Bookworm","The Good Hunter","Prospector","Unlimited Power","Bring it on!","A Perfect Tool","Round Figure","Catch 'Em All","Full Potency"];

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

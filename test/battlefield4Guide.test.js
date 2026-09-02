import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/battlefield-4.js";

test("the Battlefield 4 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "battlefield-4-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "battlefield-4");

});

test("the Battlefield 4 guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        ["Overview","Campaign","Multiplayer Core","Expansion Packs","Suggested Order"]
    );

});

test("the Overview states the verified 67-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /67 Steam achievements/);

});

test("every one of the 67 official Battlefield 4 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Storm bringer","A one-man riot","Terror of the deep","Gladiator","Above and beyond the call","Demolition man","Guardian of the fleet","Full arsenal","Fish","Dunn's pride","Braving the storm","Wolves in sheep's clothing","The fall of a Titan","Dead by dawn","Guns at dawn","Fishing in Baku","Antediluvian","It was on the way...","Took a casual look around","Methodical search","Done some searching","No stone left unturned","Every nook and cranny","Stumbled over it","Wolf","Tombstone","Recon","Well placed","Wrecker","Blood wake","War turtle","Infiltrator","Shawshank","For tombstone","For the people","For the cause","Patience is a virtue","Turn around...","Won them all",".45 old school","Bomb squad","Call me \"Sir\"","Fledgling","2 Wheels","Mini Kamikaze","Death From Above","New Superpower","Falling Down","Dirty Job","Torched","Risky Business","Blind Bomber","The Big Leagues","Killing Me Softly","Spotted","Fly Swatter","No Parley","Link Repeater","Bulletproof. Sort Of...","The Metropolitan","RC Assassin","Street Fighter","Snowbound","Your Titan is Ready","Cold Blooded","Has science gone too far?","King in the North"];

    assert.strictEqual(officialAchievementNames.length, 67, "sanity check on this test's own reference list");

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

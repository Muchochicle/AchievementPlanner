import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/sniper-ghost-warrior-contracts-2.js";

test("the Sniper Ghost Warrior Contracts 2 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "sniper-ghost-warrior-contracts-2-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "sniper-ghost-warrior-contracts-2");

});

test("the Sniper Ghost Warrior Contracts 2 guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        ["Overview","The Five Regions","Contract Targets & Secret Kills","Weapons, Skills & Collectibles","Sniping Challenges","Suggested Order"]
    );

});

test("the Overview states the verified 43-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /43 Steam achievements/);

});

test("every one of the 43 official Sniper Ghost Warrior Contracts 2 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["New Toy","Full Arsenal","Better Safe Than Sorry","Small and Lethal","First Payday","Full Potential","Finders Keepers","Hoarder","Mirage","Desert Storm","Take the Nerd Down","The Gun is the Best Hacking Tool","Convict freed","Genuine Professional","Castling","King of The Castle","Meeting Cancelled","Deadly Efficient","Employee of the Year","Sunshine Roof","Sniping the Sniper","Patience is key","Check","Caravan","Karma","Lethal Business","Long Live the Queen","Fatal Accuracy","Discreet","Single Shot Killer","Full House","Thrifty Shooter","Lock, Stock, and Barrel","Turret Operator","Spectre","Venom","One Trick Pony","Horseshoes and Hand Grenades","Quick and Discreet","Look, but Don't Touch","One Shot One Kill","Lungs of Steel","Distance Doesn't Matter"];

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

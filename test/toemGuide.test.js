import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/toem.js";

test("the TOEM guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "toem-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "toem");

});

test("the TOEM guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        ["Overview","Journey & Regions","Photography","One-offs & Basto DLC","Suggested Order"]
    );

});

test("the Overview states the verified 48-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /48 Steam achievements/);

});

test("every one of the 48 official TOEM achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["A sparkling jump","100 followers","A great story","Happy youth","Flight ready","Just a sock","A new job","Calmed down","Collect them all","A true completionist","Business executed","Strong as an oak","Seaworthy","Ice fighter","City professional","Nature's show-stopper","Calm as the sea","The biggest hurdle","The grand clock tower","A majestic hotel","A voyage underwater","Home sweet home","The calm forest","Set sail for good weather","The big city","Snowy peaks","So close now!","Employee of the month","Cosplayer","All geared up","You found us!","Who's a good boy?!","Look at those cuties","The beginning","Going long!","Slow and steady","Experience TOEM","Tropical paradise","Maximum vacation","Splish-splash","The Royal Castle","And some more","A Viking's holiday","Pro gamer","Cool moon","Self portrait","Moonlit beauty","King's new shirt"];

    assert.strictEqual(officialAchievementNames.length, 48, "sanity check on this test's own reference list");

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

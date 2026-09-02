import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/amid-evil.js";

test("the AMID EVIL guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "amid-evil-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "amid-evil");

});

test("the AMID EVIL guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        ["Overview","Episodes","Level Challenges","Combat & Feats","Suggested Order"]
    );

});

test("the Overview states the verified 43-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /43 Steam achievements/);

});

test("every one of the 43 official AMID EVIL achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Abysmal","Hippie","Filthy Cheater","DON'T GO!","Overkiller","Genocider","Heh, Brutal","Armageddon","Amid Difficulty","If you can...","Killer","Explorer","Wheeeeee!","Speed Runner","Scholar","Close Shave","All-out","Soul Sacrifice","Destroyer","Soul Limbo","The almighty power","Seeya","Hardcore","Super Nova","The chosen one","A Real Klutz","NO TOUCHY.","Ready for anything","He swims, he hungers","FNORD","Saviour of the Moon","Saviour of the Sentinels","Saviour of the Sun","Saviour of the Pilgrim","Saviour of the Machine","Saviour of the Mages","Saviour of the Universe","Pummelled ","I banish you to the shadow realm!","The first test","CHAMPION","Indefatigable","Cold Fire"];

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

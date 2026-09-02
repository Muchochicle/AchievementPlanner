import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/the-callisto-protocol.js";

test("the The Callisto Protocol guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "the-callisto-protocol-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "the-callisto-protocol");

});

test("the The Callisto Protocol guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        ["Overview","Campaign Chapters","Difficulty & Completion","Combat, GRP & Secrets","Weapons & New Game","Riot Mode & Final Transmission DLC","Suggested Order"]
    );

});

test("the Overview states the verified 46-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /46 Steam achievements/);

});

test("every one of the 46 official The Callisto Protocol achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["I Do Belong Here","You Need a Gun","The Protocol is About Life","Grim Reaper","The Commonality","Get a Grip","Terminated","Two Heads Are Better Than One","In Striking Distance","Reforged","Giving Back","Mugshot","Float Like A Butterfly","Flesh Wound","Chew 'Em Up","Workplace Hazard","The Outer Way","Desperate Times","If the SHU Fits...","Without A Paddle","Crash Site","In the Pipe, Five by Five","Power Up","What Lies Beneath","Full Circle","Paper Jams","Parole Denied","Recidivist","Lifer","Armed to the Teeth","Glutton for Punishment","You Belong Here","Big Game Hunter","Big Spender","I am the Danger","Bear Trap","Hoard Mode","Subject Alpha","Instigator","One Last Job","Information Overload","Quick Pick","This Isn't About Escape","Keep Fighting","It's Time","Don't Let It Mellow"];

    assert.strictEqual(officialAchievementNames.length, 46, "sanity check on this test's own reference list");

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

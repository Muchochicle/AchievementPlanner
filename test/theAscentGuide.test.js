import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/the-ascent.js";

test("the The Ascent guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "the-ascent-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "the-ascent");

});

test("the The Ascent guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        ["Overview","Main Story","Combat, Hacking & Cyberware","Exploration, Economy & Collectibles","Cyber Heist DLC","Suggested Order"]
    );

});

test("the Overview states the verified 66-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /66 Steam achievements/);

});

test("every one of the 66 official The Ascent achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["We're just getting started","Suicidal","Do Over","Fair trade","Sashimi","Helping hand","What just happened?","Party crashed","A new friend","Power Hungry","Data Digging","Mnemonic Hunt","Everyone's a smuggler","Magenta Power","Nothing personal","Severed Board","Protocol 61A","Something out there","Win","Next level AI","Appreciation","Drop your weapon!","Added extras","Fullchrome","Self improvement","Teamwork","Aficionado","Getting things done","For both our benefits","Anonymous withdrawal","Free candy","Omnihacker","Black ICE","Getting out of the slums","Bounty Hunter","Snooze or lose","Fight smart","Extreme Overcharge","Opportunist","Overkill","Hygiene","Explorer","Tourist","Comprehensive","Curious consumer","Flatliner","One step forward","All the way","Tenuous Grasp","Completed Main Mission","Completed All Missions","Karlan Engineering","Big leagues","Bring a knife to a gunfight","VIP no more","Making Concessions","Unshackled","Love Kills","Complete all Side Missions","Hammering","First Melee Special Move Kill","Not so special","Zell is dead","Brave New World","Vice Express","Open Sesame"];

    assert.strictEqual(officialAchievementNames.length, 66, "sanity check on this test's own reference list");

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

import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/yakuza-kiwami-2.js";

test("the Yakuza Kiwami 2 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "yakuza-kiwami-2-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "yakuza-kiwami-2");

});

test("the Yakuza Kiwami 2 guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        ["Overview","Main Story","Substories & Completion List","Skills, Stats & Combat","Minigames & City","Suggested Order"]
    );

});

test("the Overview states the verified 59-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /59 Steam achievements/);

});

test("every one of the 59 official Yakuza Kiwami 2 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["YAKUZA KIWAMI 2","The Majima Factor","The Dojima Legacy","Fireworks","Enemies on All Sides","A Contest of Kings","Secrets Long Buried","Shots Fired","Caught in the Act","Prisoner of Shangri-La","Honor and Betrayal","Sotenbori Lights","Creed of Hatred","Tiger Drop","Demon, Killer, Father","There Can Only Be One Dragon","Dragon's Blood","Thank You!","Dragon of Legend","Tell Me a Story","Hero of the Story","Story of My Life","Just Getting Started","Making Progress","Maybe You Can Do It","All Done","Battle Skills Master","Heat Action Master","Life Skills Master","For the Children","Skill Master","Life of the Dragon","Strength of the Dragon","Vitality of the Dragon","Heat of the Dragon","Limit Breaker","Peak Kiryu","Amon Defeated","Weapon Master","What a Player","Half Performance, Half Raw Power","You're Not Welcome","Shine, Shine, Four Shine","An Eye for Talent","A New Champion is Born!","Legends of the Nightlife","Be True to Yourself","Movie Buff","My Boss is Crazy","Majima Construction Benefits","Let's Build Some Hills","Majima Construction Foreman","Coin Locker Conqueror","A Taste for Japan","Tourist Season","Opening Up a Can","Repeat Offender","Party Like it's 1988!","Champion of the City"];

    assert.strictEqual(officialAchievementNames.length, 59, "sanity check on this test's own reference list");

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

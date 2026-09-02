import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/ghostwire-tokyo.js";

test("the Ghostwire: Tokyo guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "ghostwire-tokyo-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "ghostwire-tokyo");

});

test("the Ghostwire: Tokyo guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        ["Overview","Story Chapters","Spirits, Missions & Exploration","Combat","Economy & Secrets","The Spider's Thread Update","Suggested Order"]
    );

});

test("the Overview states the verified 66-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /66 Steam achievements/);

});

test("every one of the 66 official Ghostwire: Tokyo achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Beginnings","Trouble","Connection","Contortion","Severance","Binding","Conclusions","Helping Hand","Savior","Salvation of All","Hero of Shibuya","Problem Solver","Wishmaker","Opening a Path","Liberator","Treasure Hunter","Collector","Mind and Body","On the Same Wavelength","Shibuya Is My Back Yard","Echoes of the Past","The Whole Truth","It's All Thanks to Yokai","With Their Powers Combined","Roadside Spirituality","Pilgrim","Your Tail's Showing","Gourmand","DJ Akito","Trendsetter","Talismania","Power Overwhelming","Boundless Spirit","Animal Lover","Amateur Photographer","You Wouldn't Steal a Spirit","Don't Worry About It","Better Together","Visiting Hours Are Over","Heartbreaker","Soul Breaker","One Fell Swoop","Couldn't Take the Heat","Silent Kill","Take a Bow","Go For the Eyes","Sniper","Freeze, Scumbag","A Shrubbery!","Left Yourself Open","Master of Blocking","In Sync","Walking on Air","Big Spender","Pious","Lonely Tsukimi","Scary Stories to Tell at School","Spirit Photographer","Further Liberation","On-The-Job Training","Unparalleled Talismaniac","Unexpected Visitors","Figure Aficionado","Views From the Abyss","Catalog Conqueror","Welcome to Shibuya"];

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

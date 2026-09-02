import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/palia.js";

test("the Palia guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "palia-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "palia");

});

test("the Palia guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        ["Overview","Skills","Collections","Temples & Exploration","Suggested Order"]
    );

});

test("the Overview states the verified 52-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /52 Steam achievements/);

});

test("every one of the 52 official Palia achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Advanced Angler","Advanced Cook","Advanced Gardener","Advanced Miner","Advanced Hunter","Advanced Bug Catcher","Advanced Forager","Advanced Furniture Maker","My First Rare Bug","My First Epic Bug","Kilima and Bahari Bug Collector","Master Kilima and Bahari Bug Collector","My First Rare Fish","My First Epic Fish","Kilima and Bahari Fish Collector","Master Kilima and Bahari Fish Collector","My First Waterlogged Chest","Makeshift Is All Mine","Kilima and Bahari Forage Collector","Chapaa Hunter","Sernuk Hunter","Muujin Hunter","A Tail of Luck","Antlers In A Haystack","Mane of the Hour","Every Mineral is Mine","All the Stars in the Ground","Palia Chef: Cooking by the Book","Master Palia Chef: Cooking by the Book","Palia Chef: A Dish of Spice and Corn","Master Palia Chef: A Dish of Spice and Corn","Palia Chef: Luna New Year","Master Palia Chef: Luna New Year","Glidin' High","Puzzling when Wet","Something's in the Water","Scholar of the Waves","Fiery Flummox","Something's in the Garden","Scholar of the Flames","Bewildered in the Wind","Something in the Sky","Thief of the Gales","Scholar of the Gales","Rooting for Meaning","Something's in the Dirt","Waaaay Under the Table","HOA-mazing","What Brings us Together","Kilima Caches","Plundering the Bay","Pebbled Plunder"];

    assert.strictEqual(officialAchievementNames.length, 52, "sanity check on this test's own reference list");

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

import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/mafia-the-old-country.js";

test("the Mafia: The Old Country guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "mafia-the-old-country-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "mafia-the-old-country");

});

test("the Mafia: The Old Country guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        ["Overview","The Story (Chapters 1-14)","Difficulty & Chapter Challenges","Weapons & Combat","Driving, Collectibles & Customization","Post-Launch Updates & Man of Honor","Suggested Order"]
    );

});

test("the Overview states the verified 62-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /62 Steam achievements/);

});

test("every one of the 62 official Mafia: The Old Country achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["The Carusu","Guest of Honor","Forza San Celeste","The Family Business","A Trip to the Coast","This Thing of Ours","Lira for Lira","Everything’s Golden","The Rat","Total Shutdown","No More Running","Neutral Ground","Most Dutiful Soldier","Everything you Deserve","Only One Way Out","Rare Weapons Expert: Praecisione","The Old Country","True Soldato","Fantasma","Silent Hunter","Trail of Destruction","Garden Rendezvous","Worthy Opponent","Fastest Man in Sicily","Rare Weapons Expert: Lupara","Rare Weapons Expert: Pump-Action","Not So Fast","Driving in Style","Vulpi Misteriusa","Riding in Style","Full Steam Ahead","Live by the Blade","Protected","Bona Furtuna","Man of Honor","Read All About It","The Old Ways","Bombas Away!","Rare Weapons Expert: Vendetti","Secret Assassin","Rare Weapons Expert: Modello","Cold-Blooded","Rare Weapons Expert: Repeater","Salvatore's Apprentice","Mystery Fox Domination","The Collector","Good as New","Daredevil","The Finer Things","Getaway Driver","Classico","Firestarter","Speed Demon","Seasoned Hunter","Deadly Assassin","A Friend of Ours","Against All Odds","The Challenger","A Working Man","The Usual Suspects","Stuntman","Snapshot"];

    assert.strictEqual(officialAchievementNames.length, 62, "sanity check on this test's own reference list");

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

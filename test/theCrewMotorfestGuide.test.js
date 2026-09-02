import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/the-crew-motorfest.js";

test("the The Crew Motorfest guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "the-crew-motorfest-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "the-crew-motorfest");

});

test("the The Crew Motorfest guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        ["Overview","Playlists, Progression & Collection","Free Roam & Stunts","Crew Co-op","Competitive Modes","Suggested Order"]
    );

});

test("the Overview states the verified 50-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /50 Steam achievements/);

});

test("every one of the 50 official The Crew Motorfest achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["The Big League","Main Stage Headliner","Aloha e na hoa!","Setting the Stage","Can't dodge this challenger","Cars, bikes, rides and good vibes","Take the Wheel","Festival Fanfare","Passion Project","Gearhead vs Collector","That Pono feeling","Built Different","Fan Favorite","Walk of Fame","A e s t h e t i c","MotorFeats Madness","Blink and you'll miss it","Madcap","Luck is part of talent","Parade lap","Oahu Sights","Pele Shout-out","English bunt","Local Luxuries","Ensnare the Sun","French Toast","Pack Mentality","The Crew too!","Custo-Mine","Look at us go","Grand Ambitions","The Ascent","I've got a crash on you","That'll Buff Right Out","Rear view mirror smile","Steal the show","Everyone is a critic","Not so lonely at the top","Leagues Above","Doghouse Days","Dai-go-go-go!","Smooth sea ≠ skilled sailor","Sweet tooth","Shaken, not stirred","Kāne Limits","...we don’t need roads","Oahu Mindfulness","Mistakes were made…","Unholy Pizza","Where's down?"];

    assert.strictEqual(officialAchievementNames.length, 50, "sanity check on this test's own reference list");

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

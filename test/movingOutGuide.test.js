import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/moving-out.js";

test("the Moving Out guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "moving-out-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "moving-out");

});

test("the Moving Out guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        ["Overview","Story & Medals","Feats & Secrets","Movers in Paradise DLC","Suggested Order"]
    );

});

test("the Overview states the verified 38-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /38 Steam achievements/);

});

test("every one of the 38 official Moving Out achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["111% Effort","Certified F.A.R.T","Winners Don't Move Rugs","Objectives Complete!","Masters in Moving","PHD In Moving","Moving On Up","Choo Choo","Who's the Boss?","Where we're going we don't need thrones","Remember The Time...","Massive Window Attack","Golden Mover","An Eye for the Details","Rain, hail or shine.","Go Long!","Nick of Time","Minute Mover","Quantity over quality","The Friendly Ghosts","The Bird","That's Not Landfill!","Animal Lover","Look left, then right...","Totally Certified","You Don't Got Mail!","Recertified","Who lives here?","Where to next?","Golden Paradise","Objectives Complete II: The Completionist","Did I do that?","Hot Tub Reward Machine","SMASH!","Zip It Good","Not Landfill 2: Packmore Island's Revenge","Oh the humanity","Weeeeeeeeeeeeee!"];

    assert.strictEqual(officialAchievementNames.length, 38, "sanity check on this test's own reference list");

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

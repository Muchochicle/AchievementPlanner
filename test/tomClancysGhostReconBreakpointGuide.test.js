import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/tom-clancys-ghost-recon-breakpoint.js";

test("the Tom Clancy's Ghost Recon Breakpoint guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "tom-clancys-ghost-recon-breakpoint-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "tom-clancys-ghost-recon-breakpoint");

});

test("the Tom Clancy's Ghost Recon Breakpoint guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        ["Overview","Auroa Campaign","Classes, Gear & Progression","Exploration & Collectibles","Combat Challenges","Raid, Faction Missions & PvP","Suggested Order"]
    );

});

test("the Overview states the verified 50-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /50 Steam achievements/);

});

test("every one of the 50 official Tom Clancy's Ghost Recon Breakpoint achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["A safe haven","End of Act 2","End of Act 3","Breakpoint","Totsiens!","Cry Wolves","You can't stop us, Nomad!","Change hurts","Here's your World 2.0","Tell your story","Absolute Mastery","In the belly of the beast","Born in the purple","Lord of War","Two-faced","Four Honor","Jack of all Guns","This one is mine","Prolific gunsmith","A hero of our time","Wildland Millionaire","Attachments Master","Executive perks","Drone farmer","It's free real estate","Expert Herbalist","A Man of the World","The woe of wit","Heart of Darkness","Master Craftsman","David's Challenge","Hunter becomes the Hunted","Swiss Army Killer","War never ends","Elite Guerrilla","Entry-level combat","Squad Goals","Synchronized and deadly","What a maniac","The night is dark","Snapping turtle","Simple Geometry","You Monster","Sting like a bee","A brutal stop","Bang bang","Bird watching","Expert Marksman","Death from above","Get it off me!"];

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

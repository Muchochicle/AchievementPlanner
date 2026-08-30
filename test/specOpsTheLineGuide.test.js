import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/spec-ops-the-line.js";

test("the Spec Ops: The Line guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "spec-ops-the-line-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "spec-ops-the-line");

});

test("the Spec Ops: The Line guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Chapter Progress, Choices & Difficulty",
            "Combat Feats & Intel",
            "Endings & Final Feats",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 50-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /50 Steam achievements/);

});

test("every one of the 50 official Spec Ops: The Line achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["They Live", "Treacherous Ground", "The Lost Battalion", "Desert Storm", "The Horror", "Three Kings", "The Great Escape", "A Bridge Too Far", "A Man of Action", "A Man of Patience", "Damned if You Do", "Damned if You Don't", "Friendly Fire", "Unfriendly Fire", "A Line, Crossed", "A Line, Held", "Boot", "We Were Soldiers", "The Devil's Disciple", "Marksman - Rifle", "Marksman - Small Arms", "Marksman - Shotgun ", "Marksman - Sniper", "Marksman - Grenade", "Aim High", "Blind Luck", "Good Training", "Army of One", "All You Can Be", "Sierra Hotel", "Close Combat Carnage", "Battle Management", "Spotter", "Recon", "Intel Operative", "The Human Factor", "MFWIC", "Marksman - Heavy Arms", "Damn Close", "Preventive Diplomacy", "Deer Hunter", "Airspace Control", "Applied Force", "Situational Awareness", "In Your Face", "A Farewell To Arms", "Too Late The Hero", "The Road Back", "The Road To Glory", "Adapt and Overcome"];

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

import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/panzer-corps-2.js";

test("the Panzer Corps 2 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "panzer-corps-2-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "panzer-corps-2");

});

test("the Panzer Corps 2 guide has all 8 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Puzzles & Scenarios",
            "Wehrmacht Campaign & Elite Units",
            "Spanish Civil War & Axis Operations 1939-1941",
            "Axis Operations 1942-1946",
            "Frontlines & War Stories DLC",
            "Ghost Division, Westwall & Later DLC",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 130-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /130 Steam achievements/);

});

test("every one of the 130 official Panzer Corps 2 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["You are the Best", "Prepped for Battle", "Mouse Hunter", "Successful Surrender", "The Great Escape", "Impossible is Possible", "Cat Hunter", "Panther Hunter", "Victory Fireworks", "Helpful Enemy", "Double Smart", "Xolved", "Hero of Rzhev", "Hero of Prague Offensive", "Hero of Gothic Line", "Hero of Lorraine", "Hero of Crete", "Hero of Fall Weiss", "Defender of the Reich", "Conquered the Fjords", "Wehrmacht Major", "Wehrmacht Colonel", "Wehrmacht General", "Wehrmacht Field Marshal", "Wehrmacht Generalissimus", "Elite Tank", "Elite Infantry", "Elite Recon", "Elite Artillery", "Elite Anti-Tank", "Elite Anti-Air", "Elite Fighter", "Elite Tactical Bomber", "Elite Strategic Bomber", "Spanish Major", "Spanish Colonel", "Spanish General", "Spanish Field Marshal", "Spanish Generalissimus", "1939 Major", "1939 Colonel", "1939 General", "1939 Field Marshal", "1939 Generalissimus", "1940 Major", "1940 Colonel", "1940 General", "1940 Field Marshal", "1940 Generalissimus", "1941 Major", "1941 Colonel", "1941 General", "1941 Field Marshal", "1941 Generalissimus", "1942 Major", "1942 Colonel", "1942 General", "1942 Field Marshal", "1942 Generalissimus", "1943 Major", "1943 Colonel", "1943 General", "1943 Field Marshal", "1943 Generalissimus", "1944 Major", "1944 Colonel", "1944 General", "1944 Field Marshal", "1944 Generalissimus", "1945 Major", "1945 Colonel", "1945 General", "1945 Field Marshal", "1945 Generalissimus", "1946 Major", "1946 Colonel", "1946 General", "1946 Field Marshal", "1946 Generalissimus", "Ultimate Veteran", "Bulge Major", "Bulge Colonel", "Bulge General", "Bulge Field Marshal", "Bulge Generalissimus", "Poland Major", "Poland Colonel", "Poland General", "Poland Field Marshal", "Poland Generalissimus", "The Captain", "The Lieutenant", "The Nurse", "The Civilian", "The Tanker", "Cyrenaica Italian Major", "Cyrenaica Italian Colonel", "Cyrenaica Italian General", "Cyrenaica Italian Field Marshal", "Cyrenaica Italian Generalissimus", "Cyrenaica British Major", "Cyrenaica British Colonel", "Cyrenaica British General", "Cyrenaica British Field Marshal", "Cyrenaica British Generalissimus ", "Ghost Division Major", "Ghost Division Colonel", "Ghost Division General", "Ghost Division Field Marshal", "Ghost Division Generalissimus", "Westwall Major", "Westwall Colonel", "Westwall General", "Westwall Field Marshal", "Westwall Generalissimus", "First Guards Major", "First Guards Colonel", "First Guards General", "First Guards Field Marshall", "First Guards Generalissimus", "Italy Vol.1 Major", "Italy Vol.1 Colonel", "Italy Vol.1 General", "Italy Vol.1 Field Marshall", "Italy Vol.1 Generalissimus", "All American Major", "All American Colonel", "All American General", "All American Field Marshal", "All American Generalissimus"];

    assert.strictEqual(officialAchievementNames.length, 130, "sanity check on this test's own reference list");

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

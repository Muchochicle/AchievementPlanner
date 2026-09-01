import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/time-wasters.js";

test("the Time Wasters guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "time-wasters-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "time-wasters");

});

test("the Time Wasters guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Rank Victories: First Seven Characters",
            "Rank Victories: Ravebow, Kat, Rosanova, Doc",
            "Solo Challenges",
            "Loyalty Challenges & The 1.0",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 96-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /96 Steam achievements/);

});

test("every one of the 96 official Time Wasters achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Azurene Bronze Victory", "Azurene Silver Victory", "Azurene Gold Victory", "Azurene Platinum Victory", "Azurene Diamond Victory", "Azurene Champion Victory", "Vermillion Bronze Victory", "Vermillion Silver Victory", "Vermillion Gold Victory", "Vermillion Platinum Victory", "Vermillion Diamond Victory", "Vermillion Champion Victory", "Corrosia Bronze Victory", "Corrosia Silver Victory", "Corrosia Gold Victory", "Corrosia Platinum Victory", "Corrosia Diamond Victory", "Corrosia Champion Victory", "Luna Bronze Victory", "Luna Silver Victory", "Luna Gold Victory", "Luna Platinum Victory", "Luna Diamond Victory", "Luna Champion Victory", "Ram Bronze Victory", "Ram Silver Victory", "Ram Gold Victory", "Ram Platinum Victory", "Ram Diamond Victory", "Ram Champion Victory", "Raven Bronze Victory", "Raven Silver Victory", "Raven Gold Victory", "Raven Platinum Victory", "Raven Diamond Victory", "Raven Champion Victory", "TeslAI Bronze Victory", "TeslAI Silver Victory", "TeslAI Gold Victory", "TeslAI Platinum Victory", "TeslAI Diamond Victory", "TeslAI Champion Victory", "Ravebow Bronze Victory", "Ravebow Silver Victory", "Ravebow Gold Victory", "Ravebow Platinum Victory", "Ravebow Diamond Victory", "Ravebow Champion Victory", "Kat Bronze Victory", "Kat Silver Victory", "Kat Gold Victory", "Kat Platinum Victory", "Kat Diamond Victory", "Kat Champion Victory", "Rosanova Bronze Victory", "Rosanova Silver Victory", "Rosanova Gold Victory", "Rosanova Platinum Victory", "Rosanova Diamond Victory", "Rosanova Champion Victory", "Doc Bronze Victory", "Doc Silver Victory", "Doc Gold Victory", "Doc Platinum Victory", "Doc Diamond Victory", "Doc Champion Victory", "Azurene Solo Victory", "Vermillion Solo Victory", "Luna Solo Victory", "Raven Solo Victory", "TeslAI Solo Victory", "Ravebow Solo Victory", "Corrosia Solo Victory", "Ram Solo Victory", "Kat Solo Victory", "Rosanova Solo Victory", "Doc Solo Victory", "Doc Loyalty Victory", "Kat Loyalty Victory", "Raven Loyalty Victory", "Corrosia Loyalty Victory", "Ravebow Loyalty Victory", "Azurene Loyalty Victory", "Ram Loyalty Victory", "TeslAI Loyalty Victory", "Vermillion Loyalty Victory", "Rosanova Loyalty Victory", "Luna Loyalty Victory", "The 1.0 Bronze Victory", "The 1.0 Silver Victory", "The 1.0 Gold Victory", "The 1.0 Platinum Victory", "The 1.0 Diamond Victory", "The 1.0 Champion Victory", "The 1.0 Solo Victory", "The 1.0 Loyalty Victory"];

    assert.strictEqual(officialAchievementNames.length, 96, "sanity check on this test's own reference list");

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

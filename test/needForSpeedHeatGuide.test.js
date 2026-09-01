import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/need-for-speed-heat.js";

test("the Need for Speed Heat guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "need-for-speed-heat-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "need-for-speed-heat");

});

test("the Need for Speed Heat guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story, Driving Stories & Progression",
            "Customization, Challenges & Online",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 42-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /42 Steam achievements/);

});

test("every one of the 42 official Need for Speed Heat achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Welcome to Palm City", "Consider Yourself Noticed", "Worlds Collide", "Home from Home", "Merciless", "Eleven - Fifty Six", "Warp Speed", "The Brightest Stars", "Change My Name", "Two Racers, One Event", "A Bit Of Paradise", "I Said Right Now!", "Be The Very Best", "Comeback Kid", "Carving Turns", "Off the Grid", "Friends Reunited", "Wrap It Up!", "Don't Quit Your Day Job", "Drift, Drift, Drift", "Techin'", "Blame The Vain", "Travis, Who?", "Benefits Are Nice", "You have friends?", "Get Shrimpin'", "At The Last Second", "Graffer", "The Most Wanted", "Full Send", "All For One", "Sideways Style", "The Hackney Dream", "Component Parts", "Redline", "Humble Beginnings", "Notorious", "Cashing In", "Danger Zone", "Swappin'", "Around The World", "Hear Me Roar"];

    assert.strictEqual(officialAchievementNames.length, 42, "sanity check on this test's own reference list");

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

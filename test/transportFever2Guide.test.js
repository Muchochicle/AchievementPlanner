import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/transport-fever-2.js";

test("the Transport Fever 2 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "transport-fever-2-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "transport-fever-2");

});

test("the Transport Fever 2 guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Getting Started & Free-Game Basics",
            "Free-Game Milestones & Challenges",
            "Campaign, Sandbox & Infrastructure",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 61-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /61 Steam achievements/);

});

test("every one of the 61 official Transport Fever 2 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["First bus stop", "First train station", "First line", "First bus arrived", "First steam train arrived", "First ship arrived", "First electric train arrived", "First aircraft arrived", "First passenger waiting", "First passenger on board", "First industry upgraded", "Transport millionaire", "Transport master", "Transport shark", "Transport tycoon", "Transport shark (Hard mode)", "Transport tycoon (Hard mode)", "First cargo item waiting", "First cargo item on board", "Crowd in a train", "No free seats", "Heavily loaded", "City", "Metropolis", "Glacier express", "Industrialist", "Mass production", "Cannot get enough", "Truck Fever", "Antique", "Train Fever", "Museum line", "The ugly smell of success", "Penny pincher", "Speed of light", "High speed", "Cadet", "Old timer", "Campaign expert", "Campaign shark", "Exemplary student", "Campaign tycoon", "Back to the future", "Settled down", "Transport corporation", "Now what?", "Louis Favre", "Charles Alton Ellis", "Trans-Siberian Railway", "Climate change", "Big spender", "Not in my backyard", "The king of the sea", "Aircraft entrepreneur", "Cargo hub", "No country for old trains", "Transport belt", "The future is now, old man", "E.P.E.C.", "Sculpturer", "Bob Ross"];

    assert.strictEqual(officialAchievementNames.length, 61, "sanity check on this test's own reference list");

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

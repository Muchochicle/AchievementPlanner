import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/two-point-hospital.js";

test("the Two Point Hospital guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "two-point-hospital-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "two-point-hospital");

});

test("the Two Point Hospital guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Hospital Basics & Staff",
            "Gold Stars",
            "Region Completions",
            "Scenario Challenges",
            "Hidden Achievements",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 61-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /61 Steam achievements/);

});

test("every one of the 61 official Two Point Hospital achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Give a Man a Hospital...", "Teach a Man to Hospital...", "Dr Know", "Jung at Heart", "Cut Above",
        "Well-Informed", "Always Be Curing", "Bells & Whistles", "I. See. You.", "County-Wide",
        "Inter-Countinental", "Pointy Mountain G.O.A.T", "JUMBO", "Two Point Bounty", "Peer-Reviewed",
        "Double Digits", "Double Double", "I'd Like To Thank My Mother", "Low Brow", "High Brow",
        "Generating Business", "High Altitude Health Service", "The New Gold Standard", "Now Even Cheesier", "De-Lux Suite",
        "Furry Good Review", "Curing Spree", "The (Second) New Gold Standard", "Busman's Holiday", "Life, the Universe and Everything",
        "Symbiosis", "Icebreaker", "Strength in Numbers", "Serial Collaborator", "The (Third) New Gold Standard",
        "Rose Amongst The Pigeons", "Animation & Sanitation", "Kissed by a Nurse", "Stealthily Healthily", "World 1",
        "Vote Windsock", "The (Fourth) New Gold Standard", "Greener Grass", "Environmentally Friendliest", "First Catch Your Plant",
        "World 2", "Character Development", "Good VIBErations", "Sick-in-the-Mud", "The (Fifth) New Gold Standard",
        "Arts & Plaster Casts", "The (Sixth) New Gold Standard", "Days of Suture Past", "Besterizer", "Swiss Cheese Hospital",
        "De-Light Saving Time", "The (Seventh) New Gold Standard", "Intensive Car Unit", "You Got All The Best Lines", "It's a Wind-up",
        "Diversified Portaloo",
    ];

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

import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/the-outer-worlds.js";

test("the The Outer Worlds guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "the-outer-worlds-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "the-outer-worlds");

});

test("the The Outer Worlds guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Difficulty, Build & Combat",
            "Main Story & Halcyon",
            "Peril on Gorgon",
            "Murder on Eridanos",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 68-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /68 Steam achievements/);

});

test("every one of the 68 official The Outer Worlds achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["The Outer Worlds", "Hard", "Supernova", "Best Friend", "The Harder They Fall", "Got Your Back", "Silver Tongue", "Poor Sportsmanship", "Upgrades Available", "Never Seen", "Short Circuit", "Health Insurance", "We All Fall Down", "Tossball All Star", "Everything Must Go", "Everybody Likes Me", "Destroyer of Worlds", "Flawed Hero", "Not the Best Choice", "Well Dressed", "Level 30", "Anything for a Friend", "Elemental Maelstrom", "Patient N", "Skilled", "Jack of All Trades", "Well Balanced Breakfast", "Mad Scientist", "Impossible Mission", "All for One", "One for All", "Welcome to Halcyon!", "Ticket to Anywhere", "Something's Fishy", "Paradise Found", "Hard Time", "Lost and Found", "Pirate Radio", "The Audience Gasps", "SubLight to the End", "Peace in Our Time", "Monarch Abides", "Dentastic", "Mightier than the Sword", "Ludwig was Right", "A Star is Born", "The Cartographer", "Sunburn", "Peril on Gorgon", "Greenlight Protocol", "NDA Protocol", "Peril at Hand", "Synthesize This", "Lucky Stiff", "The Postman", "Good Listener", "Family Reunion", "Special P.E.T. Benefits", "Murder on Eridanos", "You Have Selected Regicide!", "The Rock Or The Hard Place", "The Mystery's Afoot", "No Longer Clueless", "Interrogo Totus", "Alive And Kicking (And Shooting Too!)", "Spectrum Needler Buddy", "Put Out of Their Happiness", "Mutt And Jeff"];

    assert.strictEqual(officialAchievementNames.length, 68, "sanity check on this test's own reference list");

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

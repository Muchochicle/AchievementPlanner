import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/two-point-campus.js";

test("the Two Point Campus guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "two-point-campus-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "two-point-campus");

});

test("the Two Point Campus guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Stars & Career",
            "Students, Staff & Clubs",
            "DLC: Space, Ghosts & Medical School",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 48-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /48 Steam achievements/);

});

test("every one of the 48 official Two Point Campus achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Campus Management 101", "Bachelor of Smarts", "Masters Minded", "PhDarn Good", "Finishing School", "Take a Scroll", "Bookworm Collector", "A Little Wiser", "Cap & Crown", "Bookworm Fanatic", "Like a Millionaire", "A Lot Wiser", "Enough Experts", "Club Sandwich", "The Populous Kids", "Club Dub", "Super Group of Friends", "Best Friends", "Soul Mates", "Spanner That Works", "Magic Staff", "Dropped on OUR Floor", "You Win Some", "You Lose Some", "Jumbo Mega Team", "Do Your Homework", "Smart Money", "Unlocked & Loaded", "We're Listening", "There's Always a Hospital", "Recurring Conditions", "Huzzah!", "Track-a-Mole", "The Academic Rainbow", "Staff Boom", "Space Cadet", "Say, Cheese?", "Galactic Domination", "All Aboard", "The Good Stuff", "Schools 'n Ghosts", "R.I.P & Quiet", "Haunted Housework", "The Old Gold Standard", "Curing Spree!", "Your Own Medicine", "One Wise Cure-All", "Wham & Blast"];

    assert.strictEqual(officialAchievementNames.length, 48, "sanity check on this test's own reference list");

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

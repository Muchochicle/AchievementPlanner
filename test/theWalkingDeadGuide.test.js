import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/the-walking-dead.js";

test("the The Walking Dead guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "the-walking-dead-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "the-walking-dead");

});

test("the The Walking Dead guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Episodes 1-2: A New Day & Starved For Help",
            "Episodes 3-4: Long Road Ahead & Around Every Corner",
            "Episode 5, 400 Days & Bonus",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 48-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /48 Steam achievements/);

});

test("every one of the 48 official The Walking Dead achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Out of the Frying Pan", "Adventures in Babysitting", "In Your Charge", "Rock and a Hard Place", "It's Just One Bullet", "Hey, Bud", "Two Enter, One Leaves", "Everything's Going to be Okay", "Going Hungry", "Conversation Killer", "Thank you for shopping at Save Lots!", "Guess Who's Coming to Dinner", "Too Much Salt Will Kill You", "Taking Charlotte", "You Fight Like A Dairy Farmer", "It's Not Stealing If You Need It", "Goodbye, She Quietly Says", "Bad Blood", "Hit the Road", "What now?", "Handle It", "Unexpected Delay", "Look Behind You", "Lend Me Your Ears", "Georgia's First City", "Down By The River", "Support Group", "Bedside Manor", "Georgia's Last City", "For Whom The Bell Tolls", "The Morning After", "Penultimate", "Into The Fire", "Twice Shy", "There Ain't No Way", "Mercy", "The Marsh House", "What's in the bag? ", "Stay Close To Me", "What Remains", "Chain Gang", "Abandoner", "Friends Like These", "Who Goes There?", "Paradise Lost", "Loose Ends", "Two out of Three", "Reunited"];

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

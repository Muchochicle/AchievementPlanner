import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/frostpunk-2.js";

test("the Frostpunk 2 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "frostpunk-2-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "frostpunk-2");

});

test("the Frostpunk 2 guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "City-Building & Governance",
            "The New London Story",
            "Endgame Challenges & Utopia Builder",
            "Tales & The Utopias",
            "Breach of Trust",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 79-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /79 Steam achievements/);

});

test("every one of the 79 official Frostpunk 2 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["FrostCity", "Urban Planner", "Sneak a Peek", "Thank you for your feedback", "Revered Leader", "Pork Barrel", "Likeable", "Lawmaker", "Checks and balances", "No-brainer", "Settler", "Isolationist", "Power Overwhelming 2.0", "Green Power", "Consistency", "New Oxbridge", "Not on my watch", "People person", "Paradise City", "The End is Just the Beginning", "No lesser evil", "The Ambitions of New London", "The Temptations of New London", "The Demons of New London", "Another day in paradise", "Ambitious", "Coredigger", "Plumber", "Bring it on!", "Don't starve", "Firm, But Civil", "Chancellor of the Exchequer", "Moving out", "Anger management", "Bonfire", "Primus inter pares", "I love democracy", "Megalopolis", "… and fill the earth", "Peacemaker", "Can't stop progress", "Adapted to Weather", "Law and Order", "Visionary", "To each according to his needs", "Idle Hands are the Devil's Playthings", "We Are Not The Same", "Quiet Backwater", "Steward Little", "Mixed Signals", "There is No Final Design", "Guiding Light", "Apocalypse Nah", "Raiders of the Lost Cores", "Born Ready", "No One Left Behind", "Seen Worse", "Gotta Go Fast", "Healer", "Optimist", "Prove Them Wrong", "Miracle Worker", "A Small Step...", "Apex Predator", "π not?", "Art in Ruins", "I Remember", "Trickle-Down Economics", "Got Milk?", "Protean Shake", "Fully Deployed", "We're So Back", "Who Saw That Coming?", "What Dreams May Come", "Way Ahead of You", "Comeback Kid", "Flawless Victory", "Prepper", "Pure Dead Brilliant"];

    assert.strictEqual(officialAchievementNames.length, 79, "sanity check on this test's own reference list");

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

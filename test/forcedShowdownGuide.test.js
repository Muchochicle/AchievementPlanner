import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/forced-showdown.js";

test("the FORCED SHOWDOWN guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "forced-showdown-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "forced-showdown");

});

test("the FORCED SHOWDOWN guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Campaign & Combat Basics",
            "Single-Battle Challenges",
            "Card Play & Arena Modifiers",
            "Contestants & The Mentor's Maze",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 81-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /81 Steam achievements/);

});

test("every one of the 81 official FORCED SHOWDOWN achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Take A Bow", "You're Fired!", "Eat It!", "Calcium Deficiency", "Tanks For Nothing", "The Spice of Life", "PokéMaster", "Crowd Pleaser", "Keep 'em Coming", "Reaper Man", "Contender", "Champion", "Showmanship", "Loot Ninja", "MacGyverism", "Just In Case", "Float Like a Butterfly", "Fit as a Fiddle", "Critical Mass", "/ignore", "Caaareful", "Can't Touch This", "Dat Mana Curve Tho'", "Cheater", "Gotta Go Fast", "Flawless Victory", "Anti-Mage", "Tough Enough", "Tamagochi Master", "Show Off", "Record Breaker", "Just Supplements", "Putting the Magic in MTG", "Trinkets 'r' Me", "Mana Surplus", "Don't Need 'em", "All Spent", "Bend it Like Beckham", "Big Spender", "Straight", "Daylight Robbery", "¡Toro! ¡Toro!", "You are The One", "Spare The Rod", "Pacifist Pet", "Locked and Loaded", "Where are my Rupees?", "The Revolver", "Close One", "Guardian Light On Cooldown", "Lighting the Way", "Strike!", "Instant Karma", "Burned", "Trailblazer", "All Yours", "Greased Lightning", "Thunderous Applause", "Getting Miffed", "Too Much Coffee", "Not a Scratch", "Carnage Complete", "Best Pals", "Beware of Companion", "Surpassing The Mentor", "Maze Runner", "R3-KT Got Wrecked", "Points Of The Maze", "Every Nook And Cranny", "Dismantler", "Pinball Master", "Assembly Line", "Light At The End", "Blazing Through", "In Charge", "Uncaged", "Maze Mission Accomplished", "Line 'em up", "Bubble Pop", "Brace for Impact", "Punching Bag"];

    assert.strictEqual(officialAchievementNames.length, 81, "sanity check on this test's own reference list");

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

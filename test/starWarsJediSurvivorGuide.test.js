import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/star-wars-jedi-survivor.js";

test("the Jedi: Survivor guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "star-wars-jedi-survivor-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "star-wars-jedi-survivor");

});

test("the Jedi: Survivor guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story",
            "Combat Feats",
            "Exploration, Cosmetics & Minigames",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 53-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /53 Steam achievements/);

});

test("every one of the 53 official Jedi: Survivor achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Rooftop Duel", "For Saw Gerrera", "Grab Some Seat", "The Past Made Present", "Survivors, We Adapt", "Among the Masters", "For the Path", "Out of Bedlam", "Tanalorr Bound", "Tragedy", "At the Precipice", "Into the Abyss", "A Place You Could Call Home", "Han Slowlo", "So Uncivilized", "You've Got A Friend", "Catch!", "They Never Saw It Coming", "This Is Canon", "I'm a Living Legend", "Get Down From There", "One With the Force", "Mirror Match", "Pinpoint", "Slam Dunk", "Riposte", "Star Tours", "King of the World", "There Is No Try", "Now, This Isn't Podracing", "Cleaning Up", "They're Probably Fine", "Skywalker", "It's a Trap", "Max Capacity", "Can You Pet the Bogling?", "Caij Match", "Who Gives a Puck", "Perk of the Job", "Greezy Money", "Cobra Cal", "A Presence I've Not Felt Since...", "Hey, Luke At Us", "Road House", "Kitted Out", "Skoova Diving", "Growth Spurt", "Gambler", "Intergalactic Geographic", "Reconnaissance", "Splurgle", "The Jedi Path", "Blood, Sweat, and Tears"];

    assert.strictEqual(officialAchievementNames.length, 53, "sanity check on this test's own reference list");

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

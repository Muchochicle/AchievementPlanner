import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/remnant-ii.js";

test("the Remnant II guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "remnant-ii-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "remnant-ii");

});

test("the Remnant II guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "NPCs, Bosses & World Secrets",
            "Archetypes, Traits & Gear Grinds",
            "DLC: Awakened King, Forgotten Kingdom & Dark Horizon",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 65-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /65 Steam achievements/);

});

test("every one of the 65 official Remnant II achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Blue Goddess", "Familiar Face", "Equal Measures", "Not a Janitor", "Tall Tales", "Chaos", "Dark Designs", "Forever is a Long Time Coming", "Am I Seeing This?", "Ghost in the Machine", "Gleaming the Cube", "Madman's Paradise", "Not so special now", "Power Surge", "Only Human", "Quest for Survival", "The God Gambit", "The Killing Jar", "Traitor", "Red Room", "The Agenda", "Boss'n Up", "Edgelord", "Cutting Edge", "First of Many", "Duality", "Shhh...It's a Secret", "Top Performer", "Not Your Average Trait", "All These Traits...", "Proving Grounds", "Scrap Collector", "Scrap Hoarder", "Strapped", "The Trigger", "The Web", "Was This Supposed To Happen?", "The Collector", "Bad Moon Rising", "Carnage in C-Minor", "Expanding Horizons", "Crafty", "Trait Chaser", "Maxed Out!", "The Ultimate Weapon", "Almost There", "Good, but Could be Better!", "No One Should Have All That Power", "Make Some Room", "Transmutate", "Regicide", "A Foul Feast", "Succession", "Master of the Dark Arts", "You Shall Pass", "Requiem of the Forgotten Kingdom", "Thank You For Being a Friend", "The Burden Hardest to Bear", "Master of Elements", "Triple Takeover", "The Ultimate Doom", "The Master Builder", "B.O.T.", "Master of Technology", "Still Not a Janitor"];

    assert.strictEqual(officialAchievementNames.length, 65, "sanity check on this test's own reference list");

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

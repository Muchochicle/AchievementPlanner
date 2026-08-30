import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/age-of-wonders-planetfall.js";

test("the Age of Wonders: Planetfall guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "age-of-wonders-planetfall-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "age-of-wonders-planetfall");

});

test("the Age of Wonders: Planetfall guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Quests, Leader Wins & Doomsday Weapons",
            "Campaigns & Sandbox Feats",
            "Expansions: Revelations, Invasions & Star Kings / Oathbound",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 80-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /80 Steam achievements/);

});

test("every one of the 80 official Age of Wonders: Planetfall achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Invader", "Emissary", "Builder", "Warmonger", "Diplomat", "Operator", "Economist", "Technologist", "Negotiator", "Conquerer", "Patron", "Spymaster", "Unifier", "Emperor", "Harbinger", "Galactic Matriarchy", "Resistance is Futile", "RedCore Mining Co.", "Escape to Freedom", "Syndicate Collective", "Expeditionary Forces", "Four Noble Truths", "Well Done", "Hello darkness my old friend", "Singularity", "Beyond the Void", "The Alpha Strain", "Pustules Everywhere!", "Wide Awake", "Consortium Dominium", "Homecoming King", "The Art of Deception", "Missing a Few Lungs", "Eye of the Storm", "Story Master", "Galactic Warlord", "Power Play", "The very best, like no one ever was", "Overlord", "No one could survive that!", "Mr. Universe", "Wololo", "All Your Base", "Futurist", "Star Bureaucrat", "Xenophile", "Paragon", "Pariah", "Justice Prevails", "Friendly Fire", "Only way to travel", "Numerous Anomalies", "Eater of the Dead", "It's Essential", "Me, the Kingpin", "Digging Deep", "Heartbreaker", "A New Beginning", "Es'Teq Prophet", "Es'Teq Reformer", "Shakarn Loyalist", "Nihilist", "Shakarn Defector", "Master Infiltrator", "Hear me roar!", "Against all odds", "Line 'em up!", "The superior version", "Now you see me…", "Hide and Seek", "The Fifth Noble Truth", "Alchemist", "Critical Failure", "Mr. Jones", "We built this city", "Is this seat taken?", "Stacked Deck", "Saint George", "Make your own luck", "The True Emperor"];

    assert.strictEqual(officialAchievementNames.length, 80, "sanity check on this test's own reference list");

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

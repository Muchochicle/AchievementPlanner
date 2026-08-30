import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/kingdom-rush.js";

test("the Kingdom Rush guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "kingdom-rush-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "kingdom-rush");

});

test("the Kingdom Rush guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Progression, Stars & Grinds",
            "Heroes, Bosses & Campaign",
            "Tower Feats, Secrets & Full Completion",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 74-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /74 Steam achievements/);

});

test("every one of the 74 official Kingdom Rush achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Home Improvement", "Starry", "Constructor", "First Blood", "Bloodlust", "Daring", "What's that?", "Armageddon", "Super Mario", "Is he dead yeti?", "Engineer", "Specialist", "Nuts and Bolts", "Slayer", "Death from above", "Tactician", "Superstar", "The Architect", "Fearless", "Terminator", "Die Hard", "G.I. Joe", "Cannon Fodder", "Real Estate", "Indecisive", "Impatient", "Forest Diplomacy", "Imperial Saviour", "Like a Henderson", "Twin Rivers Angler", "Shepherd", "Are you not entertained?", "Entangled", "Medic!", "Holy Chorus", "AC/DC", "Clustered", "Elementalist", "Energy Network", "Toxicity", "Rocketeer", "50 shots, 50 kills", "Axe rain!", "Ovinophobia", "Dust to Dust!", "Beam me up, Scotty", "This is the end", "Great Defender", "Heroic Defender", "Iron Defender", "Arachnophobia", "Free Fredo", "Orcs must die", "Lumberjack", "Champion of Linirea", "Legend of Linirea.", "I'am the law", "Coolrunning", "Scrat's Meal", "Plants vs Trolls", "Don't feed the troll", "We dine in hell!", "Army of One", "Hell-o!", "Super Mushroom", "Spore", "Still counts as one", "Nevermore", "Nessie", "Game of Crowns", "Cowabunga", "Ratatouille", "Supreme Defender", "Sunburner!"];

    assert.strictEqual(officialAchievementNames.length, 74, "sanity check on this test's own reference list");

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

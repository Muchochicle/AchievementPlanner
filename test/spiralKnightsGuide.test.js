import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/spiral-knights.js";

test("the Spiral Knights guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "spiral-knights-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "spiral-knights");

});

test("the Spiral Knights guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Progression & Bosses",
            "Alchemy & Arsenal",
            "Gear, Survival & Feats",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 54-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /54 Steam achievements/);

});

test("every one of the 54 official Spiral Knights achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["First Steps", "Welcome, Stranger", "Mission Accomplished", "World of Moorcraft", "Spiral Spelunker", "An Emberlight in the Dark", "Go Deep", "Hardcore", "Royal Pain", "Free Spirit", "O Frabjous Day!", "One-Star Smith", "Two-Star Smith", "Three-Star Smith", "Four-Star Smith", "Five-Star Smith", "Apprentice Alchemist", "Adept Alchemist", "Accomplished Alchemist", "Ascendant Alchemist", "Swordsman", "Expert Swordsman", "Master Swordsman", "Gunslinger", "Expert Gunslinger", "Master Gunslinger", "Bombardier", "Expert Bombardier", "Master Bombardier", "Hatter", "Expert Hatter", "Mad Hatter", "Armorer", "Expert Armorer", "Master Armorer", "Shieldbearer", "Expert Shieldbearer", "Master Shieldbearer", "Stellar Set", "Applied Entropy", "Fully Loaded", "Jump Start", "Helping Hand", "Pharma Suitable", "Conditioned Response", "Energize!", "Bronze Survivor", "Silver Survivor", "Gold Survivor", "Cradle and All", "Dauntless Delver", "Terrible Twin Turrets", "Star-Spangled Bomber", "Son of a Nutcracker!"];

    assert.strictEqual(officialAchievementNames.length, 54, "sanity check on this test's own reference list");

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

import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/verdun.js";

test("the Verdun guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "verdun-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "verdun");

});

test("the Verdun guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Levels & Co-op",
            "Combat Feats & Early Specialisations",
            "Medals",
            "Kill Milestones & Remaining Specialisations",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 59-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /59 Steam achievements/);

});

test("every one of the 59 official Verdun achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Level 25", "Level 50", "Level 75", "Level 100", "War is better with friends I", "War is better with friends II", "War is better with friends III", "War is better with friends IV", "Headhunter", "Corpseman I", "Setting an example", "Blast fishing", "Not alone", "Eagle Eye", "Manual Labour I", "Worth It", "Developers, Developers, Developers", "Buddy", "Comrade", "Blood Brother", "Honneur et Patrie", "Gott Mit Uns", "Sidi Brahim", "In Treue Fest", "We Stand on Guard", "For King and Country", "Providentiae Memor", "Gold x100", "Silver x100", "Bronze x100", "Gold Collector", "Gold Hoarder", "Silver Collector", "Silver Hoarder", "That's another one down!", "Golden Headhunter", "Shoot, Cover, Reload, Repeat", "Hunting the Hun", "There is no I in team", "Offense is the best defence", "Let them, come to us", "#1", "Aimbot", "Headhunter II", "Headhunter III", "Corpseman II", "Corpseman III", "Manual Labour II", "Manual Labour III", "Voor De Koning", "This We'll Defend!", "Semper Fidelis!", "Anker wirf!", "Furchtlos und Treu", "In My Defens God Me Defend", "Advance Australia", "Impavidum Ferient Bella!", "Do You Even Die?", "Extreme Headhunter"];

    assert.strictEqual(officialAchievementNames.length, 59, "sanity check on this test's own reference list");

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

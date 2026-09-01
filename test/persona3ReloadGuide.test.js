import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/persona-3-reload.js";

test("the Persona 3 Reload guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "persona-3-reload-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "persona-3-reload");

});

test("the Persona 3 Reload guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story & Full-Moon Bosses",
            "Tartarus & Battle",
            "Daily Life & The Answer",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 56-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /56 Steam achievements/);

});

test("every one of the 56 official Persona 3 Reload achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Awakened Power", "SEES the Day", "Back on Track", "Empowered Protector", "Never Toy with Matters of the Heart", "Armor Disarmed", "Dodging Lightning", "Twist of Fate", "A Sense of Finality", "The Great Seal", "From Shadows into Light", "The Fool's Journey", "Distinguished Visitor", "Top of the Class", "A Legacy of Friendships", "People Person", "That Special Someone", "Unbreakable Link", "A Newfound Strength", "The Power of Choice", "There's No \"I\" in \"Team\"", "The Strength of Our Hearts", "Extracurricular Excellence", "Get a Load of Those Numbers!", "Shrouded Assassin", "The Thrill of the Hunt", "Making the Dream Work", "Glimpse of the Depths", "Briefcase Burglar", "Shattered Plumes", "The Horror of the Shade", "Reaper Reaped", "The First of Many", "Fusion Artisan", "Birthday Present", "Path to Salvation", "Tempting Fate", "Eat Your Veggies, Peas!", "The Grindset Mindset", "Specialist", "Peak Performance", "Dorm Life", "Gourmand", "Benevolent Purr-tector", "In High Demand", "Beyond the Darkness", "Through Thick and Thin", "Eagle Eye", "Realized Power", "The Vengeful One", "The Determined One", "The Disillusioned One", "The Selfless One", "The Steadfast One", "The One Who Dreamt", "Together, Into Tomorrow"];

    assert.strictEqual(officialAchievementNames.length, 56, "sanity check on this test's own reference list");

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

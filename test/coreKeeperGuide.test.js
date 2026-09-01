import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/core-keeper.js";

test("the Core Keeper guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "core-keeper-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "core-keeper");

});

test("the Core Keeper guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Bosses: Slimes, Titans & Hydras",
            "Skills, Legendary Items & Secrets",
            "Endgame Bosses & Legendary Weapons",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 55-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /55 Steam achievements/);

});

test("every one of the 55 official Core Keeper achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["A Slimey Encounter", "Bugging Out", "Watch Your Step", "From the Skies!", "You're a Wizard", "Toxic Personality", "From the Depths!", "Slippery When Wet", "Just Deserts", "Burning Through", "Slippery Shinobi", "Diggy Diggy Hole", "Cheese it!", "Completely Hooked", "Nature Nurturer", "...Sting like a bee", "Robin Hood", "Health Conscious", "Float like a butterfly...", "Crafty Explorer", "The Heart of the Cards", "The Rune Song", "The Phantom Spark", "The Soul Seeker", "Gossip Group", "Legendary Fossil", "In a Rush", "Certified Chef", "Farmer Midas", "A Throne Fit for a King", "Rock and Stone!", "Impersonator Syndrome", "5 Centimeters Per Second", "A Strange Song", "Your Very First", "Thalassophobia", "I want ’em all!", "A Good Life", "Pet Prodigy", "A Wizard Is Never Late", "Stay Away From The Summoner!", "Song of the Woods", "Howl of the Sea", "Roar of the Flames", "Visitor From A Dying World", "Cambrian Behemoth", "Legion Commander", "Wielder of Legends", "Beam Me Up", "Explosion Mastery", "Silence the Symphony", "Whisper of the Void", "Calculated Prophecy", "The Credence of Ruin", "The Titan Breath"];

    assert.strictEqual(officialAchievementNames.length, 55, "sanity check on this test's own reference list");

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

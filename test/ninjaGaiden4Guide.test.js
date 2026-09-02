import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/ninja-gaiden-4.js";

test("the NINJA GAIDEN 4 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "ninja-gaiden-4-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "ninja-gaiden-4");

});

test("the NINJA GAIDEN 4 guide has all 8 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Completion & Core Combat",
            "Raven Gear & Story Seals",
            "Difficulty, Fortitude & Weapon Mastery",
            "Missions, Combat Feats & Chapter Challenges",
            "Full Mastery & Completion",
            "The Two Masters DLC",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 53-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /53 Steam achievements/);

});

test("every one of the 53 official NINJA GAIDEN 4 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["True Ninja", "The Art of Obliteration", "Bloodraven Form", "The Art of the Bloodbath Kill", "The Art of the Bloodbath Slaughter", "Raven Gear: Caddis Wire", "Raven Gear: Dragonfly Glider", "Raven Gear: Pond Strider", "Oh, Foxy Lady", "It's a Dog! It's a Plane! It's...", "Smile, You Son of a...", "Priestess of the Dark Dragon", "Return of the Super Ninja", "The Priestess's Wish", "Bloodsoaked Fate", "A New Master Ninja", "Way of the Master Ninja", "Ninja Fortitude", "Master of the Blade", "Master of the Drill", "Master of the Hammer", "Master of the Toolbox", "Wielder of Darkness", "Consumed by Corruption", "Ninja Business", "NinjaCoin Miner", "Need, not Greed", "Way of the Dragon", "Combo Master", "The Grind Never Stops", "Free as a Bird", "Surf Ninja", "Laser's Edge", "Master of Takeminakata", "Master of Yatousen", "Master of Magatsuhi", "Master of Kage-Hiruko", "Master of the Dark Dragon Blade", "Master of Combat", "The One Who Obliterates", "Critter Collector", "Work Horse", "Annihilator", "Shadow Incarnate", "Challenger of Challenges", "The Pursuit of Duty", "A Life Dedicated to Duty", "The Two Masters", "Way of the New Master Ninja", "Scornful Mother of the Damned", "More Machine than Fiend", "Ultimate Challenge", "Conqueror of the Abyss"];

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

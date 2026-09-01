import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/rivals-of-aether-ii.js";

test("the Rivals of Aether II guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "rivals-of-aether-ii-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "rivals-of-aether-ii");

});

test("the Rivals of Aether II guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Character Levels",
            "Arcade & Signature KOs",
            "Skill Challenges & Basics",
            "DLC Characters",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 75-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /75 Steam achievements/);

});

test("every one of the 75 official Rivals of Aether II achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["The Fire's Roar", "The Poisonous Pacifist", "The Wind's Fury", "Earth's Bastion", "The Sylvan Watcher", "Hero of Julesvale", "The Flame's Salvation", "The Molten Emperor", "The Puddle Jumper", "The Exiled Flame", "Path Of Conquest", "Path Of Peace", "Path Of Deputation", "Path Of Tenacity", "Path Of Vigilance", "Path Of Revelation", "Path Of Vengence", "Path Of Tyranny", "Path Of Restoration", "Path Of Vindication", "The Reckless Flame", "The Poisonous Storm", "The Terrible Tempest", "The Boulder Barrage", "The Vicious Vine", "The Rising Arrow", "The Unlimited Sight", "The Igneous Axe", "The Bubble Butt", "The Deadly Deception", "Flash In The Pan", "Pacifist Punching Bag", "The Towering Tornado", "Rock The Block", "Maypals!", "Julesvale Juggle", "Future Foreseer", "King's Court", "The Daring Orca Hop", "Long Con", "A Thousand words", "Quick To Listen", "Friendly Symbiosis", " Vainglory ", "Power Down", "Still Skeptical", "The Glacier's Might", "Path of Solitude", "The Icy Plummet", "Ice is Right!", "The Amethyst Fist", "Path of Refinement", "The Shimmering Somersault", "Double Terminated ", "The Storm Architect", "Path of Inception", "The Elegant Electrocution", "Stuck and Struck", "The Ferrous Fossil", "Path of Ferocity", "Sedimentary Stomp", "The Drills Are Alive", "Achievemint", "The Crowd Magnet", "Path of Grandiosity", "The Furnishing Flux", "Heavenly Polarity Piledriver", "The Swagger of the Sea", "Path of Plunder", "Gone Fishing", "Bootyful", "The Lost Mireling", "Path of Deliverance", "Alley Goop", "Slime Time"];

    assert.strictEqual(officialAchievementNames.length, 75, "sanity check on this test's own reference list");

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

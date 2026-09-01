import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/doom-the-dark-ages.js";

test("the DOOM: The Dark Ages guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "doom-the-dark-ages-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "doom-the-dark-ages");

});

test("the DOOM: The Dark Ages guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Campaign & Champion Kills",
            "Weapons, Shields & Upgrades",
            "Collectibles, Chain Spear & Revelations",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 38-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /38 Steam achievements/);

});

test("every one of the 38 official DOOM: The Dark Ages achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["A Dark Beginning", "Supersized Brawl", "Bringing the House Down", "Jailbreak", "Too Angry to Die", "Argent Return", "The Only Thing They Fear", "Game Complete", "Vagary Down!", "Agaddon Champion Down!", "Komodo Champion Down!", "Upgraded", "Fully Loaded", "Gunpletionist", "Gimme That", "Shield Adept", "Ancestral Blessing", "Powerful Investment", "Melee Expert", "Berserker", "Essential Upgrade", "Essential Ammo", "Essential Armor", "Essential Health", "Essentially Unstoppable", "Challenge Completed", "Toy Collector", "Lore Nerd", "Revelations Complete", "Hellwalker", "Time to Hunt", "Spear Adept", "Spear Mastery", "Some Assembly Required", "Archeologist", "Time is Money", "Hello, Old Friend", "Xal’Goroth Defeated"];

    assert.strictEqual(officialAchievementNames.length, 38, "sanity check on this test's own reference list");

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

import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/bioshock-2.js";

test("the BioShock 2 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "bioshock-2-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "bioshock-2");

});

test("the BioShock 2 guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Single-Player Campaign",
            "Upgrades, Hacking & Research",
            "Combat, Plasmids & Completion",
            "Multiplayer",
            "Protector Trials & Minerva's Den DLC",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 68-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /68 Steam achievements/);

});

test("every one of the 68 official BioShock 2 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Daddy's Home", "Protector", "Sinclair's Solution", "Confronted Grace", "Defeated the Preacher", "Nose for News", "Found Lamb's Hideout", "Reunion", "Heading to the Surface", "Escape", "Bought a Slot", "Max Plasmid Slots", "Upgraded a Weapon", "Fully Upgraded a Weapon", "All Weapon Upgrades", "Distance Hacker", "Prolific Hacker", "Master Hacker", "First Research", "One Research Track", "Research Master", "Grand Daddy", "Adopted a Little Sister", "Master Gatherer", "Fully Upgraded a Plasmid", "All Plasmids", "Unbreakable", "Look at You, Hacker", "Trap Master", "Counterattack", "Master Protector", "Big Spender", "Dealt with Every Little Sister", "Against All Odds", "Savior", "Big Brass Balls", "Rapture Historian", "Unnatural Selection", "Welcome to Rapture", "Disgusting Frankenstein", "\"Mr. Bubbles-- No!\"", "Mother Goose", "Two-Bit Heroics", "Parasite", "Little Moth", "Skin Job", "Choose the Impossible", "9-Irony", "Proving Grounds", "Man About Town", "Aqua Incognita", "Territorial", "Reincarnation", "Litmus Test", "Acid Test", "Trial By Fire", "Enemy of the Family", "Guardian Angel", "Perfect Protector", "Get a Bigger Bucket", "Login", "Root Access Granted", "Logout", "SUDO", "Garbage Collection", "High Score", "Lancer Killer", "ADAM Addict"];

    assert.strictEqual(officialAchievementNames.length, 68, "sanity check on this test's own reference list");

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

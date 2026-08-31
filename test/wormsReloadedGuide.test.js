import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/worms-reloaded.js";

test("the Worms Reloaded guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "worms-reloaded-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "worms-reloaded");

});

test("the Worms Reloaded guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Base Game Feats",
            "Forts Pack",
            "Puzzle Pack & Time Attack",
            "Retro Pack & Extras",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 61-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /61 Steam achievements/);

});

test("every one of the 61 official Worms Reloaded achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Armageddon An Award", "Cheeky Flocker", "Fast, Pink And Hard", "Fire Starter", "Get Your Lob On", "Going Solo", "Hallelujah!", "Likes The Drink", "Oldest Swinger In Town", "Prod For Victory", "Ranked Master", "Six Pest", "People's Champ!", "Death Matched", "King's Defender", "Crate Scott", "Vital Ballistics", "Bridge Burner", "Call off the Strike", "Gone Bananas", "Holy Moly", "Head Hunter", "Dream Team", "Stalwart", "Soak-Crates", "Amateur Puzzler", "Detective", "Super Sleuth", "Damage Dodger", "Pain Prevention", "Odynophobiac", "Economical", "Thrifty", "Gnat's Nostril", "Lightfoot", "Ain't Got Time to Speed", "Done in 20 Seconds", "Swift Exit", "Ain't No Lap Dog", "The Cratest", "Bullet Dodger ", "Gun Shy", "Twinkle Toes", "Defused", "Fall Guy", "Down-to-Earth", "Lightning Bolt", "Me Sane Bolt", "Nut 'n' Bolt", "Last Worm Scout", "Can't Be Rocked", "An Apple a Day...", "Worminator", "Leave No Worm Behind", "Child's Play", "Crate Fishing", "Modernist", "So Last Year", "Stuck in the 90s", "Summer of '69", "12 Days of Winterval"];

    assert.strictEqual(officialAchievementNames.length, 61, "sanity check on this test's own reference list");

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

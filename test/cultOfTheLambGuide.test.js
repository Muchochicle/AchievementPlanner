import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/cult-of-the-lamb.js";

test("the Cult of the Lamb guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "cult-of-the-lamb-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "cult-of-the-lamb");

});

test("the Cult of the Lamb guide has all 11 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Getting Started",
            "Growing the Flock",
            "The Four Bishops",
            "The One Who Waits & the True Ending",
            "Cult Rituals & Management",
            "Exploration & World",
            "Collections - The Completionist Achievements",
            "Minigames, Followers & Side Quests",
            "The Woolhaven DLC",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 57-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /57 Steam achievements/);

});

test("every one of the 57 official Cult of the Lamb achievement names is mentioned somewhere in the guide", () => {

    // The full, official list this guide is built from
    // (backend/catalog/games/cult-of-the-lamb.json).
    const officialAchievementNames = [
        "First Follower", "Deal with the Devil", "Preacher of Truth", "The First Death", "Death to Non-Believers",
        "The Flock Grows", "Flock of Many", "Flock of All", "See No Evil", "Speak No Evil",
        "Hear No Evil", "Think No Evil", "Do No Evil", "Order", "Sate",
        "Cure", "Peace", "Keeper of Secrets", "Leader of the Crusade", "Bringer of Light",
        "Full Flock", "Full Deck", "Teach a Lamb to Fish", "Crosser of Thresholds", "Sacrificial Beast",
        "Weigher of Souls", "Hoarder of Wealth", "Weapons of Plenty", "Curses of Plenty", "Devotion",
        "Transform", "Transmute", "Cannibal", "Gospel", "Game of Chance",
        "Master of Chance", "Godhood", "Relics of the Old Faith", "Shake Down", "True Love Found",
        "Slayer of Souls", "Leader of Leaders", "Holder of History", "Setter of Trends", "Apostles",
        "Aesthetics of the Lamb", "Regenerate", "Propagate the Flock", "Maker of Legends", "The Prodigal Child",
        "Eat the Rich", "The Complete Collection", "Woolhaven Reborn", "Swing of the Axe", "Killer Instinct",
        "Rot No More", "Respect Thy Mother"
    ];

    assert.strictEqual(officialAchievementNames.length, 57, "sanity check on this test's own reference list");

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

import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/monster-hunter-world.js";

test("the Monster Hunter: World guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "monster-hunter-world-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "monster-hunter-world");

});

test("the Monster Hunter: World guide has all 8 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story Progression (Base Game)",
            "Story Progression (Iceborne)",
            "Hunting, Capturing & Crowns",
            "Research, Gear & Facilities",
            "Endemic Life & Collectibles",
            "Multiplayer & Quests",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 100-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /100 Steam achievements/);

});

test("every one of the 100 official Monster Hunter: World achievement names is mentioned somewhere in the guide", () => {

    // The full, official list this guide is built from
    // (backend/catalog/games/monster-hunter-world.json).
    const officialAchievementNames = [
        "Conqueror of the New World", "Welcome to the New World", "Nothing Stops This Commission", "Defender of Astera", "Into the Deep",
        "Death Begets Life", "The Empress of the Highlands", "One Shall Stand, One Shall Fall", "The Sapphire Star", "The Hunters Life for Me",
        "An Inquisitive Mind", "The Franchise Hunter", "Step into the Arena", "Nowhere to Go but Up", "New World Settler",
        "The Art of Camouflage", "Angling for a Bite", "Mmm, So Tasty!", "The Bigger They Are...", "A Living Fossil",
        "Snuggles for All", "Bristles for All", "Rainbow Bright", "Commissioned Work", "Bourgeois Hunter",
        "Impregnable Defense", "Power is Everything", "Movin On Up", "First Friends", "Bosom Buddies",
        "Monster Ph.D.", "Temper Temper", "Indomitable", "Miniature Crown", "Miniature Crown Collector",
        "Miniature Crown Master", "Giant Crown", "Giant Crown Collector", "Giant Crown Master", "Capture Novice",
        "Capture Pro", "Elderslayer", "Monster Slayer", "Monster Hunter", "HELP!",
        "I Am the Reinforcements", "Hunters United", "Hunters United Forever", "Spreading the Word", "Established Hunter",
        "Conqueror of the Hinterlands", "The Beginning of a New Expedition", "Time to Get Serious", "The Elusive Elder Dragon", "Indomitable Spirit",
        "The Old Everwyrm", "An End and a Beginning", "To the Land of Discoveries", "Evolving Ecology", "In Search of Rare Materials",
        "Insatiable Investigator", "Fate's Conclusion", "Master Explorer", "Source of Relaxation", "Clutch Claw Neophyte",
        "Golden Gleam", "Friendly Pointer", "Sweet Melody", "Submerged Mystery", "Celestial Illusion",
        "Deft Digger", "Creatures of the Earth", "Unwavering Defense", "Devastating Offense", "Personal Treasure",
        "First Ride", "Experienced Rider", "Fledgling Collector", "Veteran Collector", "Ultimate Collector",
        "Remodeler", "Interior Decorator", "Architectural Artist", "Eager Engineer", "Skilled Steamworker",
        "Another Miniature Crown", "Another Giant Crown", "Fledgling Observer", "Outstanding Observer", "Helpful Hunter",
        "Master of Masters", "Monster Master", "True Miniature Crown Collector", "True Large Crown Collector", "The True Hunt Begins",
        "Hunter Prodigy", "Master Capturer", "Master Slayer", "Confronting the Unknown", "Seen It All"
    ];

    assert.strictEqual(officialAchievementNames.length, 100, "sanity check on this test's own reference list");

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

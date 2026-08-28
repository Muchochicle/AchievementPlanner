import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/monster-hunter-rise.js";

test("the Monster Hunter Rise guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "monster-hunter-rise-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "monster-hunter-rise");

});

test("the Monster Hunter Rise guide has all 9 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Base Game: Story & the Rampage",
            "Base Game: Hunter Progression & Guild Milestones",
            "Base Game: Kamura Village, Buddies & Facilities",
            "Base Game: Exploration, Ecology & Collectathons",
            "Sunbreak: Master Rank Story",
            "Sunbreak: Anomaly Investigations & Risen Endgame",
            "Sunbreak: Progression, Followers & Collectathons",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 100-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /100 Steam achievements/);

});

test("every one of the 100 official Monster Hunter Rise achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Apex Shortsword", "Tempestuous Triumph Scroll", "Beat-up Construction Kit", "Badge of Excellence", "Kamura Amulet",
        "Ancestral Blade", "Calamity Conqueror Scroll", "Fan of Fading Crimson", "Fan of Ascendancy", "Fan of True Ascendancy",
        "Aspiring Hunter Certificate", "Adept Hunter Certificate", "Rampage Nemesis Certificate", "Arena Fighter Certificate", "Spiritwood Necklace",
        "Frozen Lampsquid Earring", "Prismatic Chalice", "Silver Cactus Ring", "Heliotrope Bracelet", "Wreath of Honor",
        "Kamura Pinwheel", "Shabby Canyne Saddle", "Great Wirebug Plate", "Hunting Helpers Plate", "Golden Spiribug Plate",
        "Antique Bookmark", "Deft-hand Rod", "Well-done Grillmeister", "Copper Ecologist's Award", "Silver Ecologist's Award",
        "Gold Ecologist's Award", "Extravagant Cashbox", "Well-worn Cashbox", "Thank-mew Letter", "Good Luck Charm",
        "From Palicoes, with Love", "Palamute Gear Tune-up Kit", "Luxury Armor Stand", "Colorful Armor Stand", "Petalace Arrangement Vase",
        "Master's Black Belt", "Chef's Trusty Tools", "Sturdy Padlock", "Cohoots' Dresser", "Runner's Sandals",
        "Dreadnought Destroyer Plaque", "Five-in-One Plaque", "Seasoned Jockey Plaque", "Mini Crown Plaque", "Gold Crown Plaque",
        "Royal Request for Cooperation", "Long-Distance Binoculars", "Survey Cape", "Azure Feather Fountain Pen", "Majestic Desk Banner",
        "Royal Declaration of Gratitude", "Record of Utmost Valor - Master", "Snowy Cohoot Mini-Pouch", "Record of Utmost Valor - Arena", "Painting - Foreign Threads",
        "Painting - Seicho's Place", "Cups of Friendship", "Painting - Crimson Nightmare", "Sea-Blue Amulet", "Copal Brooch",
        "Beloved Bouquet", "Familiar Construction Kit", "Great Wirebug Medal", "Immaculate Bookmark", "Natural Picture Frame",
        "Transcender's Red Sash", "Great Helmet", "Gorgeous Helm", "Solid Padlock", "Maestro's Trusty Tools",
        "Secret Honey Jar", "Napping Felyne & Canyne", "Sojourn Necklace", "Buddy Whistle", "Flaky Canyne Pie",
        "Polychrome Acorn", "Windbreaker Scarf", "Jewelgrass Planter", "Unbreakable Bag", "Comfortable Sandals",
        "Hunter's Bronze Shield", "Hunter's Silver Shield", "Hunter's Gold Shield", "Miniature Crown Shield", "Gold Crown Shield",
        "Anomaly Hunt Silver Trophy", "Anomaly Hunt Gold Trophy", "Anomaly Research Report", "Vermilion Amber Essence", "Bahari's Hand-Wound Birdie",
        "Smithy's Custom-made Gloves", "Smithy's Tools of the Trade", "Surmounter’s Slaying Shield", "Shining Surmounter’s Shield", "Hero's Accolade"
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

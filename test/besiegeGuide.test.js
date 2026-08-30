import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/besiege.js";

test("the Besiege guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "besiege-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "besiege");

});

test("the Besiege guide has all 8 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Building & Movement Basics",
            "Campaign Challenges I",
            "Special Techniques & Campaign II",
            "DLC & Fragment Hunts I",
            "DLC & Fragment Hunts II",
            "Hidden Achievements (The Broken Beyond)",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 54-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /54 Steam achievements/);

});

test("every one of the 54 official Besiege achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "A Swift Siege", "The Handyman", "Gotta Go Fast", "A Whole New World", "Sharing is caring",
        "The copy-cat", "Thunderstruck", "All Under Control", "Carnage", "Pyromaniac",
        "Raw Fodder", "Piloting 101", "Professional Hunchback", "As Mutton", "Birbecue",
        "Supply Chop", "Bomb Battlefield", "Lord of the Lyre", "Duke of the Skies", "The Frozen Monarch",
        "Automaton", "Through and Through", "Golden Eye", "Tree Hugger", "Atlas' Challenge",
        "Emperor of Sand", "Conqueror", "Bonus Round", "Demolition Expert", "Freezing Frontier",
        "Frozen Goods", "Ironweaver", "Where's Woolly?", "Sword Buster", "Master of Tides",
        "Cold as Ice", "Target Practice", "Shell Shock", "A Pirate's Life", "Bandicoot",
        "Chained Chomp", "Mine or Inconvenience", "Raider", "Spawn Camper", "Completionist",
        "Autilis Explorer", "Hostile Negotiations", "Leave None Alive", "Mortissimo", "Up Hill Struggle",
        "Sandworm", "Hail Mary", "Tyrant of The Void", "Aranea Completionist",
    ];

    assert.strictEqual(officialAchievementNames.length, 54, "sanity check on this test's own reference list");

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

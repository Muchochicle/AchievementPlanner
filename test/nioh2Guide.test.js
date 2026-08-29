import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/nioh-2.js";

test("the Nioh 2 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "nioh-2-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "nioh-2");

});

test("the Nioh 2 guide has all 9 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story Missions",
            "Character & Combat Mastery",
            "Blacksmith, Bathhouse & Collectibles",
            "World & Mission Feats",
            "DLC: The Tengu's Disciple",
            "DLC: Darkness in the Capital",
            "DLC: The First Samurai",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 88-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /88 Steam achievements/);

});

test("every one of the 88 official Nioh 2 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "You Are Nioh", "The Beginning of a Samurai", "Full-fledged Samurai", "Dawn of a Dream", "An Electrifying Triumph",
        "Hideyoshi", "The Paths We Tread", "Dream's Toll", "Mother and Child", "What is Written",
        "Dream Within a Dream", "A Weapon's Mind", "Sword Master", "Dual Sword Master", "Spear Master",
        "Axe Master", "Kusarigama Master", "Odachi Master", "Tonfa Master", "Hatchet Master",
        "Switchglaive Master", "Ninjutsu Master", "Onmyo Magic Master", "Burst Breaker", "Match Made in Heaven",
        "Latest Masterpiece", "Remodeling Novice", "Tea Connoisseur", "Lover of Letters", "Trinket Triumph",
        "Teamwork", "Help Wanted", "Twilight Walker", "Spa Healer", "Spa Lover",
        "Yokai Quelling Master", "Kodama Leader", "Friend of Guardians", "Sudama Swapper", "Core Score",
        "Friend to the Kodama", "Soul Searcher", "Fuse It or Lose It", "Seasoned Traveler", "Let There Be Light",
        "Grazer Eraser", "Dungball Roller", "Hidden Hopes", "Clean Sweep", "Devout Believer",
        "Seven Wonders", "Feather Buster", "Bold Wrangler", "Schemer", "Peal of Ten Thousand Bells",
        "A Kindred Light", "The Will to Fight", "Casting Out the Shadows", "Kodama General", "Splitstaff Master",
        "Poetry in Motion", "Spa Addict", "Sundering Arrows", "Heretical Glow", "Tengu Crusher",
        "Demonic Parade-Goer", "The Demon and the Phoenix", "Guardian of the Gate", "What Must Be Done", "Kodama Pathfinder",
        "Fist Master", "The Flame That Lights the Darkness", "Spa Fanatic", "The Ultimate Recognition", "Tsuchigumo Exterminated",
        "Behind the Bamboo Blinds", "True Atonement", "All Things Begin", "A Dream of Peace", "Spirit Guide",
        "Cleansing Caskmaster", "Scent of Danger", "Spa Connoisseur", "A Friend Indeed", "The Demons' Den",
        "Way of the Vanquisher", "Honoring the Dead", "The Path We've Taken",
    ];

    assert.strictEqual(officialAchievementNames.length, 88, "sanity check on this test's own reference list");

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

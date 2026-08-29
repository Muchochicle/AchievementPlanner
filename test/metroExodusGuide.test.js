import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/metro-exodus.js";

test("the Metro Exodus guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "metro-exodus-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "metro-exodus");

});

test("the Metro Exodus guide has all 10 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story & Levels",
            "Vehicles & Exploration",
            "Set-Piece & Side Events",
            "Combat & Weapons",
            "Collectibles & Difficulty",
            "The Two Colonels (DLC)",
            "Sam's Story (DLC)",
            "Hidden Achievements",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 68-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /68 Steam achievements/);

});

test("every one of the 68 official Metro Exodus achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Brakeman", "Exodus", "Aurora", "Regatta", "Railwayman",
        "Friend of the Crew", "Long distance passenger", "Fisherman", "Duke", "Lower the Bridge",
        "Righteous vengeance", "Spoiled dinner", "Driver", "Carmaheddon", "Roller coaster",
        "Complete road map", "Damir", "New order", "Gor'ko!", "Decommunization",
        "Master of the Forest", "5 o'clock", "Forest child", "Alyosha", "Sword of Damocles",
        "Putrification", "Guide", "Full Strength", "Hardcore", "Eternal Voyage",
        "Your Destination", "Professional", "Gunsmith", "Tidyman", "Handyman",
        "Dressed for Success", "Martian", "Last Breath", "Antibiotic", "Stand back",
        "Silent marksman", "Robin Hood", "Headhunter", "Saboteur", "Kaleidoscope",
        "Firebird", "Librarian", "Old world pictures", "Join us on air", "Toy seller",
        "Mutation", "Iron Mode", "New Year", "Duty and conscience", "Father and son",
        "Real Colonel", "The whole picture", "Mind you, it's quite heavy!", "Dodge master", "It's just a scratch",
        "Cinephile", "Trapper", "Untouchable", "The Last Hero", "A Man of Principle",
        "Great Owl", "Music Lover", "Lord of War",
    ];

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

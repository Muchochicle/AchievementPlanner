import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/f1-24.js";

test("the F1 24 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "f1-24-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "f1-24");

});

test("the F1 24 guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Racing Milestones",
            "My Team & Two-Player",
            "Driver Career",
            "F1 World",
            "Compendium, Fanzone & Misc",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 50-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /50 Steam achievements/);

});

test("every one of the 50 official F1 24 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Lights, Camera, Action!", "Downtown Snapper", "Tremendous Trio", "Up At The Pointy End", "Takes The Flag!",
        "Showing Them How It's Done", "A Great Weekend", "Well Seasoned", "A Lump In My Throat", "Mechanical Marvel",
        "All Areas Covered", "Front Row Friends!", "Development Race", "Crafty!", "One Of A Kind",
        "Pass The Spanner", "Up And Running", "Safely Does It", "Got, got, got, got..", "99 Club",
        "Custom Hotshot", "Laser Focused", "Just Better", "It's Getting Hot In Here", "It's Not Me, It's You",
        "Not Making Friends", "Rise To The Challenge!", "GOAT", "Objectively Dynamic", "Strong Relations",
        "Silly Season", "Extra Curricular", "Target Acquired", "Do I Recognise You?", "The First Of Many",
        "Sign On The Dotted Line", "Perk-fection", "Sum of its Parts", "Vending Machine", "Going Up",
        "Double Dutch", "Full English", "True Fan", "Reach Out to the Fans", "Hey Big Fan Token Spender!",
        "In the Zone", "Tough Choices", "Express Your Fandom", "All The Points", "Everyone's a winner",
    ];

    assert.strictEqual(officialAchievementNames.length, 50, "sanity check on this test's own reference list");

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

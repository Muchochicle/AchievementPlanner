import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/hotshot-racing.js";

test("the Hotshot Racing guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "hotshot-racing-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "hotshot-racing");

});

test("the Hotshot Racing guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Grand Prix & Character Wins",
            "Arcade & Cops & Robbers",
            "Drive or Explode & Time Trial",
            "Boosts, Customisation & Online",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 53-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /53 Steam achievements/);

});

test("every one of the 53 official Hotshot Racing achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Barely Breathing", "Wheeler Dealer", "Follow Your Dreams", "Gentrified", "Daredevil", "Artiste", "Speedster", "Raving", "Family Man", "Not a Robot", "Hotshot", "Newbie", "Competent", "Professional", "World Class", "Hustler", "Show Off…", "Globetrotter", "Referral Bonus", "Beat the Rap", "Dunkin'", "Seeing Double", "Catch my Drift", "Reverse Psychology", "Precision", "The Destroyer", "K.O.", "Supersonic", "Not Your Lucky Day", "C4", "Stick it to the Dev", "Follow the Crowd", "Machine in the Ghost", "Marking Territory", "Practise Makes Perfect", "BWM Driver", "Grafting hard", "Pacifist", "Serial Sprinter", "Redemption Arc", "Speedy Exit", "Phew!", "Destruction Level 99", "Overachiever", "Trophy Hunter", "On Cloud 9", "The Peacock", "Fishing for Compliments", "Self Reflection", "Carbon Fibre Optic", "Barrel-ly Made It", "Barreling Along", "Download Diva"];

    assert.strictEqual(officialAchievementNames.length, 53, "sanity check on this test's own reference list");

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

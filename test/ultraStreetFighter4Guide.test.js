import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/ultra-street-fighter-4.js";

test("the Ultra Street Fighter IV guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "ultra-street-fighter-4-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "ultra-street-fighter-4");

});

test("the Ultra Street Fighter IV guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Unlocks & Combo Feats",
            "Arcade & Trial Mode",
            "Online: Ranked, Multiplayer & Team Battle",
            "Character Arcade Clears & Ultra Feats",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 67-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /67 Steam achievements/);

});

test("every one of the 67 official Ultra Street Fighter IV achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Overachiever", "Fashion Plate", "Dan the Man", "Entitled", "Iconoclast", "Special Movement", "EXtra! EXtra!", "Super, Man!", "Ultra, Man!", "It Takes Focus", "Superior Super", "Ultimate Ultra", "Sunspotter", "Absolute Perfection", "Clear Headed", "All Clear", "Herculean Effort", "Hard Times", "Long Time No See", "Rival Schooled", "Speed Freak", "Good Start", "Trail of Trials", "Trial Athlete", "Oh! My Car!", "Barrel of Laughs", "It Begins", "First Timer", "Threepeat", "Fivepeat", "Tenpeat", "Moving On Up", "Now You C Me...", "From C to Shining C", "Road to Victory", "Battle Master", "Legendary Fighter", "Worldly Warrior", "Bring it on!", "This is Madness!", "Team Player", "Team Mate", "Teamworker", "Keep on Truckin'", "Three For The Road", "Endless Ten", "Replayer", "Endless Lobbyist", "Team Lobbyist", "Quarter Up", "The Awakening", "Birth of the Oni", "Just Enough!", "Up to Snuff", "Overwhelming Power", "Transcendent", "Prep Time", "New Threads", "For the Utopia!", "The world is my stage", "Toxic Beauty", "Giant Attack", "A dish best served cold", "Double Feature", "All For One", "Ultra Effective", "Good old times"];

    assert.strictEqual(officialAchievementNames.length, 67, "sanity check on this test's own reference list");

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

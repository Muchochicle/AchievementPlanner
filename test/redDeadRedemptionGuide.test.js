import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/red-dead-redemption.js";

test("the Red Dead Redemption guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "red-dead-redemption-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "red-dead-redemption");

});

test("the Red Dead Redemption guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story & Secrets",
            "Challenges & Completion",
            "Undead Nightmare & Mythical Creatures",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 51-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /51 Steam achievements/);

});

test("every one of the 51 official Red Dead Redemption achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["That Government Boy", "Land of Opportunity", "Sons of Mexico", "No More Fancy Words", "A Savage Soul", "The Benefits of Civilization", "Into the Sunset", "Nurture or Nature?", "High Roller", "No Dice", "What About Hand Grenades?", "Austin Overpowered", "Evil Spirits", "Instinto Asesino", "Fightin' Around the World", "Strange Things are Afoot", "People are Still Strange", "Buckin' Awesome", "Clemency Pays", "Dastardly", "Exquisite Taste", "Bearly Legal", "He Cleans Up Well!", "More than a Fistful", "Frontiersman", "The Gunslinger", "Man of Honor / Chivalry's Dead", "Gold Medal", "Manifest Destiny", "On the Trail of de Vaca", "Friends in High Places", "Redeemed", "Spurred to Victory", "Heading South on a White Bronco", "Mowing Them Down", "In a Hail of Bullets", "Long Arm of Marston", "Bullseye", "Unnatural Selection", "Axe Master", "Master Exploder", "The Downward Spiral", "Judge A Man By The...", "The Superior Dance", "All's Right With the World", "Spinning Plates", "Zed's Dead, Baby", "Mad Marston: The Trail Warrior", "Fan Service", "Chupathingy", "Six Years In The Making"];

    assert.strictEqual(officialAchievementNames.length, 51, "sanity check on this test's own reference list");

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

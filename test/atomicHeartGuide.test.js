import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/atomic-heart.js";

test("the Atomic Heart guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "atomic-heart-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "atomic-heart");

});

test("the Atomic Heart guide has all 8 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story & Bosses",
            "Crafting, Upgrades & Skills",
            "Exploration & Research",
            "Combat Challenges",
            "Expansions & Post-Game",
            "Hidden Achievement",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 82-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /82 Steam achievements/);

});

test("every one of the 82 official Atomic Heart achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "The Motherland Does Not Forget its Heroes", "Strike", "Medium Rare", "Make It Go Round", "Plyusch Rush",
        "Show's Over", "Dew Point", "Murderous Beauty", "Chop Chop Chop", "Happy Polymerization Day!",
        "Pistils and Stamens", "Tickets, Please!", "Quite an Achievement", "Curtain", "Medical Checkup",
        "Freedom Reflex", "Kommunism 2.0", "Atomic Heart", "Artisan", "Weapon Master",
        "Lord of War", "Chemist", "Polymerization", "Apple Pie", "The Great Inventor",
        "Lefthand Mastery", "How Can I Help You?", "Beast Friend", "The Necromancer", "Burning Ears",
        "More Than Profit", "Explorer", "Clean-up", "Scanner", "Avatar",
        "Hothead", "Below Zero", "Assimilation Procedure Interrupted", "Bull's Eye!", "Alcoholics Anonymous",
        "Triple Penetration", "Hands on the Hood", "Weird Science", "Lord of the Flies", "A Girl's Best Friend",
        "Return to Utopia", "Divide et Impera", "Time in a Bottle", "John Silver's Crew", "Ultimate Storm",
        "Maximum Strength", "Apple Pie 3826", "Conservationist", "The Casino Isn't Always in the Black", "Slashing Through the Limbo Waves",
        "Conqueror of Annapurna", "Conqueror of Chomolungma", "Daring as a Bullet is Sharp", "Don't Mess With the Major", "Gold Rush",
        "Overkill", "Moby Dick", "Master of Survival", "Demonstration of Violence", "And now—CHAR-les",
        "Water Sports", "You've Read the Manual!", "I'm here if you need to talk", "Hic Sunt Dracones", "Marco... Polo!",
        "Final Burn-down", "Let's Shake on It!", "Validol's Our Bro", "Fluffy Easter Egg", "Better Late Than Never",
        "Secret Meeting", "Terminator's Death", "Clean in Two", "For Chief's a Jolly Good Fellow", "Farewell, Old Friend",
        "This Is the End", "Crystal Platinum",
    ];

    assert.strictEqual(officialAchievementNames.length, 82, "sanity check on this test's own reference list");

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

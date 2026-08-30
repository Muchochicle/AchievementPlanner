import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/sunset-overdrive.js";

test("the Sunset Overdrive guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "sunset-overdrive-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "sunset-overdrive");

});

test("the Sunset Overdrive guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Combat, Style & Progression",
            "Kill Feats, Collectibles & Challenges",
            "Story Missions, Forts & Challenge Scores",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 80-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /80 Steam achievements/);

});

test("every one of the 80 official Sunset Overdrive achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Orange Soda", "Perfection", "The Floor is Lava", "Stylish Kills", "Let me Count the Ways", "Favorite", "Many Favorites", "I Like Them All", "Amped Up", "Badge", "Who is Sending These?", "Can't Commit", "The .1%", "Overachiever", "Appreciation", "Not so Secret Ingredient", "Roleplay While Rolepaying", "Vat Pack Rat", "Ultimate Collection", "Defender of the Realm", "Revolutionary", "Equal Opportunity", "A Challenger Appears", "Second Place", "The Champion", "Orange Soda II", "Grind Kills", "Bounce Kills", "Trap Kills", "Flung to Safety", "Grind Melee", "Out of Stock", "Crash Landing", "Overdrive", "More Overdrive", "Intel", "Explorer", "Big Brother", "Wire Tapping", "It's Art Ok", "Shoe Closet", "Going to Need a Bigger Closet", "I Should Get Paid for This", "Replay", "Not the Boss of Me", "What's Your Sign?", "Hot Air", "Litter", "Mixology 101", "Oh the Horror!", "Dusk 'til Dawn", "Buck National", "Plan B", "That Balloon", "Scouts Honor", "Ultra Mega Kill", "Save Everyone", "Excalibro", "This is my City Now", "Lost and Found", "Crude Oil", "Big Tobacco", "It's Full of Stars", "Seas the Day", "Calamari", "Big Break", "A Boy's Best Friend is his Mother", "Cosplay", "Ballin'", "Language Lessons", "Saved", "Special Delivery", "The Most Punchable Face", "The Pitch", "Hardcore Buck National vs The Apocalypse", "Hardcore Buck Strikes Back", "Hardcore Buck Stops Here", "Dawwwwww", "Worst Job in the Kingdom", "Fizzie Says April Fools"];

    assert.strictEqual(officialAchievementNames.length, 80, "sanity check on this test's own reference list");

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

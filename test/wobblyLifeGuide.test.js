import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/wobbly-life.js";

test("the Wobbly Life guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "wobbly-life-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "wobbly-life");

});

test("the Wobbly Life guide has all 8 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Odd Jobs I",
            "Odd Jobs II & Farm Life",
            "Museum, Fishing & Construction",
            "Story Missions",
            "Space Jobs & Adventures",
            "Hidden Achievements",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 68-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /68 Steam achievements/);

});

test("every one of the 68 official Wobbly Life achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "A Wobbly Start", "A Speedy Slice", "Flipping The Perfect Burger", "Monster Manager", "Speedy Nee-Naw",
        "Rapid Delivery To Your Door", "Creative Courier", "Putting The Pedal To The Metal", "Taking To The Skies!", "Making Waves",
        "A Supernatural Delivery", "Cleaning Up The Island", "Awesome Archaeologist", "Making Grandma Proud", "Look At Me Grandma!",
        "High Roller", "There's A Big Spender In Wobbly Town", "Explorer Extraordinaire", "Powering The Whole Island", "Feeding Frenzy",
        "Plowing Ahead", "Growing Your Own", "Cream Of The Crop", "Mining The Glowy Green Ore", "Your New Best Friend",
        "A Deep Spooky Wobbly Secret", "Helping The Wobbly That Time Forgot", "What A Clever Wobbly", "You're My Wobbly Hero", "Lumber Legend",
        "Formula Frenzy", "A Tiny Adventure", "Recovering The Past", "Frantic Fares", "A Sweet Day At Work",
        "Trivializing The Trials", "Dazzling On The Dance Floor", "Relentless Reeler", "Marine Master", "A Jelly Fueled Journey",
        "The Rapid Recycler", "One Happy Hammerer", "A Daring Demolition", "The Balloon Buster", "My Best Work",
        "One Big Sleep", "Into The Storm", "Drain Diver", "Piecing It All Together", "Committed Collector",
        "Proud Protector", "Space Mine Specialist", "Throwing Space Shapes", "No Delivery Too Far", "Wonderous Waiter",
        "Wrench Wizard", "Rapid Rockets", "Spaceship Saviour", "Luggage Lifter", "A New Frontier",
        "Cosmic Collector", "Creative Cadet", "Super Student", "Uncovering The Clues", "Galactic Gift Finder",
        "Well That Was Weird", "Hey Gran, I'm Space Rich!", "Stealthy Sneaker",
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

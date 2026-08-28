import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/pizza-tower.js";

test("the Pizza Tower guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "pizza-tower-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "pizza-tower");

});

test("the Pizza Tower guide has all 9 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Floor 1",
            "Floor 2",
            "Floor 3",
            "Floor 4",
            "Boss Fights",
            "S Rank & P Rank",
            "Halloween Content",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 74-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /74 Steam achievements/);

});

test("every one of the 74 official Pizza Tower achievement names is mentioned somewhere in the guide", () => {

    // The full, official list this guide is built from
    // (backend/catalog/games/pizza-tower.json).
    const officialAchievementNames = [
        "John Gutted", "Let's Make This Quick", "Primate Rage", "Shining Armor", "Spoonknight",
        "Spherical", "Thrill Seeker", "Volleybomb", "Delicacy", "Very Very Hot Sauce",
        "Eruption Man", "Unsliced Pizzaman", "Peppino's Rain Dance", "Unnecessary Violence", "Alien Cow",
        "Ghosted", "Pretend Ghost", "Alive and Well", "No One Is Safe", "Cube Menace",
        "Good Egg", "Non-Alcoholic", "Already Pressed", "Royal Flush", "Blowback",
        "X", "Demolition Expert", "Bee Nice", "Lumberjack", "Bullseye",
        "Turbo Tunnel", "Blast'Em Asteroids", "Man Meteor", "Primo Golfer", "Nice Shot",
        "Helpful Burger", "Pan Fried", "Strike!", "Say Oink!", "Can't Fool Me",
        "Food Clan", "Penny Pincher", "Unflattening", "Whoop This!", "There Can Be Only One",
        "Frozen Nuggets", "Season's Greetings", "Ice Climber", "Cross To Bare", "Haunted Playground",
        "Skullsplitter", "And This... Is My Gun On A Stick!", "Let Them Sleep", "Jumpspared", "Decorated Veteran",
        "Sharpshooter", "Trip to the Warzone", "The Critic", "The Ugly", "Denoise",
        "Faker", "Face Off", "S Ranked #1", "S Ranked #2", "S Ranked #3",
        "S Ranked #4", "S Ranked #5", "P Ranked #1", "P Ranked #2", "P Ranked #3",
        "P Ranked #4", "P Ranked #5", "Pumpkin Munchkin", "Tricksy"
    ];

    assert.strictEqual(officialAchievementNames.length, 74, "sanity check on this test's own reference list");

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

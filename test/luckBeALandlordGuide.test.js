import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/luck-be-a-landlord.js";

test("the Luck be a Landlord guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "luck-be-a-landlord-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "luck-be-a-landlord");

});

test("the Luck be a Landlord guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Symbol Synergies - Part 1",
            "Symbol Synergies - Part 2",
            "Symbol Synergies - Part 3",
            "Symbol Synergies - Part 4",
            "Milestones, Essences & Endless",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 186-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /186 Steam achievements/);

});

test("every one of the 186 official Luck be a Landlord achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Amethyst", "Anchor", "Apple", "Geologist", "Banana",
        "Banana Peel", "Bar of Soap", "Bartender", "Bear", "Beastmaster",
        "Bee", "Beehive", "Beer", "Big Ore", "Big Urn",
        "Billionaire", "Bounty Hunter", "Breakfast", "Bronze Arrow", "Bubble",
        "Buffing Capsule", "Candy", "Card Shark", "Cat", "Cheese",
        "Chef", "Chemical Seven", "Cherry", "Chick", "Chicken",
        "Clubs", "Coal", "Coconut", "Coconut Half", "Coin",
        "Comedian", "Cow", "Crab", "Credits", "Crow",
        "Cultist", "Three-Sided Die", "Five-Sided Die", "Dame", "Diamond",
        "Diamonds", "Diver", "Dog", "Dove", "Dwarf",
        "Egg", "Eldritch Creature", "Emerald", "Essence Capsule", "Essences",
        "Farmer", "Flower", "Frozen Fossil", "Gambler", "General Zaroff",
        "Golden Arrow", "Golden Egg", "Goldfish", "Golem", "Goose",
        "Guillotine Essence", "Hearts", "Hex of Destruction", "Hex of Draining", "Hex of Emptiness",
        "Hex of Hoarding", "Hex of Midas", "Hex of Tedium", "Hex of Thievery", "Highlander",
        "Honey", "Hooligan", "Hustling Capsule", "Item Capsule", "Jellyfish",
        "Joker", "Key", "King Midas", "Landlord Defeated", "Light Bulb",
        "Lockbox", "Wealthy Capsule", "Magic Key", "Magpie", "Martini",
        "Matryoshka Doll", "Mega Chest", "Midas Bomb", "Milk", "Mine",
        "Miner", "Monkey", "Moon", "Mouse", "Mrs. Fruit",
        "Ninja", "Omelette", "Orange", "Ore", "Owl",
        "Oyster", "Peach", "Pear", "Pearl", "Piñata",
        "Pirate", "Present", "Pufferfish", "Rabbit", "Rabbit Fluff",
        "Rain", "Lucky Capsule", "Removal Capsule", "Reroll Capsule", "Robin Hood",
        "Ruby", "Safe", "Sand Dollar", "Sapphire", "Seed",
        "Shiny Pebble", "Silver Arrow", "Sloth", "Snail", "Spades",
        "Spirit", "Strawberry", "Sun", "Target", "Tedium Capsule",
        "Thief", "Time Capsule", "Toddler", "Tomb", "Treasure Chest",
        "Turtle", "Urn", "Void Creature", "Void Fruit", "Void Stone",
        "Watermelon", "Wildcard", "Wine", "Witch", "Wolf",
        "Apartment Floor 1", "Apartment Floor 2", "Apartment Floor 3", "Apartment Floor 4", "Apartment Floor 5",
        "Apartment Floor 6", "Apartment Floor 7", "Apartment Floor 8", "Apartment Floor 9", "Apartment Floor 10",
        "Apartment Floor 11", "Apartment Floor 12", "Apartment Floor 13", "Apartment Floor 14", "Apartment Floor 15",
        "Apartment Floor 16", "Apartment Floor 17", "Apartment Floor 18", "Apartment Floor 19", "Apartment Floor 20",
        "5 Wins", "10 Wins", "25 Wins", "50 Wins", "100 Wins",
        "250 Wins", "500 Wins", "777 Wins", "Guillotine Essence (2)", "Guillotine Essence (3)",
        "Guillotine Essence (4)", "Guillotine Essence (5)", "Guillotine Essence (10)", "Guillotine Essence (25)", "Guillotine Essence (50)",
        "Guillotine Essence (77)",
    ];

    assert.strictEqual(officialAchievementNames.length, 186, "sanity check on this test's own reference list");

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

import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/sun-haven.js";

test("the Sun Haven guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "sun-haven-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "sun-haven");

});

test("the Sun Haven guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Early Farm, Bosses & Character",
            "Town, Relationships & Skills",
            "Combat, Mines & Crafting",
            "Museum, Collections & Regions",
            "Endgame & The Great City",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 190-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /190 Steam achievements/);

});

test("every one of the 190 official Sun Haven achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "With a Cluck Cluck Here", "And a Moo Moo There", "Weed Killer", "One More Thyme", "Rocky Road",
        "Rock and Roll", "To the Bottom", "Defeat King Slimius XVII", "We Have a Winner!", "Customize your Character I!",
        "Customize your Character II!", "Create a Naga Character", "Create a Human Character", "Create an Elf Character", "Create a Demon Character",
        "Create an Elemental Character", "Create an Angel Character", "Create an Amari Character", "Dungeoneer I", "Dungeoneer II",
        "Dungeoneer III", "Appease the Moon Dragon", "Defeat the Moon Dragon", "Dynus's Gems", "Dynus's Harvest",
        "Dynus's World", "Dynus's Hoard", "Dynus's City", "Dynus's Orchard", "Dynus's Feast",
        "Dynus's Future", "Legendary Fisherman", "Small Catch", "Large Catch", "Defeat the Heat Viper",
        "A Second Chance", "Justice", "Made of Money", "Defender of the Forest", "An Unexpected Friend",
        "Big Heart", "Extra Big Heart", "Die", "Jump 100 Times", "Jump 1000 Times",
        "Novice Miner", "Novice Explorer", "Novice Fighter", "Novice Farmer", "Novice Angler",
        "Adept Farmer", "Adept Fighter", "Adept Explorer", "Adept Miner", "Expert Miner",
        "Expert Explorer", "Expert Fighter", "Expert Farmer", "Expert Angler", "Advanced Miner",
        "Advanced Explorer", "Advanced Fighter", "Advanced Farmer", "Advanced Angler", "Master Farmer",
        "Master Explorer", "Master Miner", "Master Fighter", "Master Angler", "Magic Touch",
        "Overflowing with Magic", "Wholesome Neighbor", "Fashion Icon", "Just a Trim", "Good Samaritan",
        "Novice Spelunker", "Adept Spelunker", "Advanced Spelunker", "Expert Spelunker", "Past Your Bedtime",
        "Pocket Change", "A Small Fortune", "Deep Pockets", "Wealthy", "Treasury",
        "Rich", "Royalty", "Mana In Hand", "Mana Out of Hand", "Riding into the Sunset",
        "Better with a Friend", "Better with a Group", "Better with a Team", "Better with a Party", "A Complete Collection",
        "Your New Best Friend", "I Do", "To Woo a Merchant", "To Woo the Archmage", "To Woo a Blacksmith",
        "To Woo an Adventurer", "To Woo a Prince", "To Woo an Architect", "To Woo a Doctor", "To Woo a Witch",
        "To Woo a Baker", "To Woo a Counselor", "To Woo a Seamstress", "To Woo an Enchantress", "To Woo a Wind Mage",
        "To Woo the Captain", "To Woo a Musician", "Golden Love", "Fiery Love", "Love at First Sight",
        "Freeing Love", "Princely Love", "Demonic Love", "Heartfelt Love", "Hopping Love",
        "Sweet Love", "Artistic Love", "Nya Love", "Magical Love", "Worldly Love",
        "Protective Love", "Symphonic Love", "Heartbreaker", "An Apple a day...", "A Hop, Skip, and a Jump",
        "Blast Off", "Chef's Kiss", "Tree House", "Monster House", "Dynus's Fish",
        "Adept Fisher", "A Dream of Romance", "A Dream of Peace", "A Dream of Adventure", "A Dream of Riches",
        "To Woo an Assassin", "To Woo the Forgetful", "To Woo the Assistant", "Sharp Love", "Long Lost Love",
        "Sprouting Love", "Train Skipper", "To Woo an Angel", "To Woo a Warrior", "To Woo the Moon",
        "Angelic Love", "Valiant Love", "Cosmic Love", "Sizzlin' Summer", "Falling Down",
        "'Tis the Season", "A New Year", "Candy Crushed I", "Candy Crushed II", "Candy Crushed III",
        "Candy Crushed IV", "Lumberjacked I", "Lumberjacked II", "Lumberjacked III", "Lumberjacked IV",
        "Snake Slayer I", "Snake Slayer II", "Snake Slayer III", "Snake Slayer IV", "To Woo a Hero",
        "Heroic Love", "To Woo a Corsair", "Bucket of Love", "The Deeps", "Defeat Qwiz'lothra",
        "Slime Squisher", "Spell Booster", "Teleport: Sun Haven", "Teleport: Nel'Vari", "Teleport: Withergate",
        "Teleport: Brinestone Deeps", "To Woo a Detective", "Timeless Love", "To Woo a Historian", "Historic Love",
        "Legendary Hammer Wielder", "Legendary Great Sword Wielder", "The Great City", "Teleport: The Great City", "Crime Doesn't Pay",
    ];

    assert.strictEqual(officialAchievementNames.length, 190, "sanity check on this test's own reference list");

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

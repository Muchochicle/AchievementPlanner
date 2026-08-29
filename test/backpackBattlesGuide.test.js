import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/backpack-battles.js";

test("the Backpack Battles guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "backpack-battles-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "backpack-battles");

});

test("the Backpack Battles guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Basics, Classes & PvP",
            "Combat Feats & Milestones",
            "Crafting - Part 1",
            "Crafting - Part 2",
            "Crafting - Part 3",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 230-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /230 Steam achievements/);

});

test("every one of the 230 official Backpack Battles achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Stylish", "Post Match Analysis", "I Have Friends!", "My Treasure", "For the Trees!",
        "That Might Be Poisonous", "Burn! Burn Everything!", "Go Berserk!", "Let's Go On an Adventure!", "That Was Magical!",
        "Big Red Number", "Rushdown", "Staring Contest", "Buff", "Plaguebringer",
        "Honk!", "Pacifist", "Untouchable", "Close One!", "You'll Get It Some Day",
        "Big Pockets", "Overflowing", "Give Me Everything", "And It's Gone", "Reset",
        "Sale!", "Perfection", "Mother of Dragons", "It's Time For a C-C-C-Cardgame!", "Tripple Bow Technique",
        "Rawr!", "I'm the Library!", "Catch 'em All!", "Potion Master", "Bloodsucker",
        "Archmage", "I Am Cooking", "Multiwielding", "Buy Me More Jewelery", "Treasure Hunter",
        "Pig Farmer", "Amulet Addict", "Shopping Spree", "You Are Winner", "Shopping Addict",
        "Dicemaster", "Can Touch, Will Hurt.", "Piggy Smash!", "I Dig It!", "Barbecue Season",
        "Coal on a Stick", "Praise Shell!", "Don't Hurry, Be Happy", "Sheep Unite!", "A True Hero",
        "I'm a Wizard!", "Give me Your Strongest Potion!", "The Bringer of Ick", "I'm Not a Cat, I'm a Wolverine!", "Whoa, Portable Fire!",
        "A Valued Customer", "Blueberry Juice", "Endless Riches", "Holds Everything! (Conditions Apply)", "Tastes Like Tomato",
        "Does It Bleed?", "Most Heroic Banana Juice", "Turning Into Stone Can Be a Good Thing", "May Nibble You", "A Taste For Blood",
        "Hey, My Sword...!", "The King of the Kitchen", "Sip From the Mana Fountain", "Uuuuh, Spooky Ghostly Dagger Thingy.", "An Even Truer Hero!",
        "Behold, Falcons May Wield This.", "I Bring Pandamonium!", "Never Sits Right", "Fancy Blue Light", "Bluberry Smoothie",
        "It's So Heavy", "Bad For the Neck", "Train Your Arms", "Snekk Stick", "A Bit Uncomfortable",
        "Venomous Poker", "I Bet You Feel Cool Now", "Dubious Vines", "Cross the Blades!", "Your Hands Feel Cold...",
        "Join the Dark Side!", "Shiny Slimy", "Pray to the Spear", "Not Actually From the Moon", "A Bad Influence",
        "By the Power of the Moon!", "It seems Fine Tho.", "Electrolytes!", "You Are The King?", "Bow To The King",
        "I Built You!", "Now New, With All the Colors!", "Am I a Ninja Now?", "Shoot With Caution", "My Lucky Bow",
        "Filthspewer 2000", "My Lucky Charm", "A Symbol of Great Eyesight", "Shootin' Thornies", "Hit 'em again!",
        "Even the Bow is Poisonous", "Summon the Spirits of Crit", "Nice Goobs!", "We Call Him Robby.", "Someone Said Vegetable Soup?",
        "At Least He Likes It", "Like love, but the other way around.", "With Even More Toxins!", "What a Massive... Surprise!", "Never Taste It.",
        "Taste the Rainbow!", "Now Even Worse!", "Smells Like Iron", "Holy Drinking", "Warm Hands",
        "Azor Ahoi?", "Sun Protection", "Shiny Plate", "The Buttercutter", "It's Drippin'!",
        "FIREBALL!", "Never Trust It", "It Burns Twice", "Chili-flavored Rainbow", "Lizard Friend",
        "Keeping It Cool", "Sliding Defense", "Biting Cold", "A Rare Breed", "Twice the Axe",
        "Family Treasure", "Ethically Sourced Dragon Skin", "Let Your Anger Out", "Just Stylish", "Intimidation Tactics",
        "Let's Go Clubbing", "Cheesy", "Rainbow Rage!", "Ready for Barking!", "Protected Pupper!",
        "Puppy Power!", "Hermes", "Senior Sand", "Marvelous Creature", "Mirror Mirror on the Wall",
        "Icy Vegetation", "Shiny Shiny", "It Loves the Shade", "Do Not Divide by this Blade", "Hungry Hungry Sphere",
        "Magical Gal", "My Little Cupcake", "Bibidi Babedi Boo - Goo!", "By the Power of the Cupcake!", "Roped Into Something",
        "Heroic Protection", "Bananarang!", "Solvent Swine", "I Totally Work Here", "A Massive B",
        "I love you too, shield!", "The Powerful Dragon Knight", "He looks so healthy.", "B-B-B-BROCCOLIENERGY!", "Alternative Crossblades",
        "The Longest Spear (Allegedly)", "Oh, My Dagger Rang", "It's Cozy Up There", "Caw!", "Only Looky, No Licky",
        "Enter Hyper-Hedgehog Form!", "The Coolest", "Hey Lady, Your Greatsword is Melting", "Faster Than Expected, But Still Slow", "A Good Old Physical Barrier",
        "Can I Eat It? Can It Eat Me?", "That's Great Sage", "Hey Lily", "Trust me, I'm an engineer!", "Gigacharged",
        "Hey, those cost money!", "I can fix that", "All the lumens!", "S.I.T. routine enabled!", "Mix between cop-robot and man-bat.",
        "Massive Brainacle", "Mana Hydraulics", "Mana for everybody!", "Thor, the God of Bonking", "Manazort Combine!!!",
        "Manananananananananananananananana", "A toast to toast!", "Not for Breakfast", "Delicious Prismacrust", "Throws everything",
        "Zap! Zap! ZOP!", "Energy, the source of my power!", "Who SAW that coming?", "Do you...smell that?", "Hah! The toast is a lie!",
        "Potential energy is the best energy", "Completely AutoNOM", "One With the Woods", "Eater of Souls", "Lord Ribbiton of Schwamp",
        "Doubleburn? Secondary Scorch? Twinferno?", "Oh Blazing Beak!", "Better Whetter", "Pure Steelyness!", "Hard Skin, Soft Heart",
        "Good 'ol axe on a stick", "A good engagement ring (with the right stats)", "All the vitamin K!", "Sugarbreath!!", "Poke it -> Die",
        "Impressive But Impractical", "Natural Defense", "Your defense is garlacking.", "Souped up and ready to go!", "Quick, use Thunderthingy!",
    ];

    assert.strictEqual(officialAchievementNames.length, 230, "sanity check on this test's own reference list");

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

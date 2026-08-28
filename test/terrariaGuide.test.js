import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/terraria.js";

test("the Terraria guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "terraria-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "terraria");

});

test("the Terraria guide has all 9 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Early Milestones",
            "Pre-Hardmode Bosses",
            "Entering Hardmode",
            "Hardmode Bosses",
            "Events & Invasions",
            "Exploration & The World",
            "The Angler & Fishing",
            "Gear, Collections & Feats"
        ]
    );

});

test("the Overview states the verified 137-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /137 Steam achievements/);

});

test("every one of the 137 official Terraria achievement names is mentioned somewhere in the guide", () => {

    // The full, official list this guide is built from
    // (backend/catalog/games/terraria.json).
    const officialAchievementNames = [
        "Timber!!", "No Hobo", "Stop! Hammer Time!", "Ooo! Shiny!", "Heart Breaker",
        "Heavy Metal", "I Am Loot!", "Star Power", "Hold on Tight!", "Eye on You",
        "Smashing, Poppet!", "Worm Fodder", "Mastermind", "Where's My Honey?", "Sting Operation",
        "Boned", "Dungeon Heist", "It's Getting Hot in Here", "Miner for Fire", "Still Hungry",
        "It's Hard!", "Begone, Evil!", "Extra Shiny!", "Head in the Clouds", "Like a Boss",
        "Buckets of Bolts", "Drax Attax", "Photosynthesis", "Get a Life", "The Great Southern Plantkill",
        "Temple Raider", "Lihzahrdian Idol", "Robbing the Grave", "Big Booty", "Fish Out of Water",
        "Obsessive Devotion", "Star Destroyer", "Champion of Terraria", "Bloodbath", "Slippery Shinobi",
        "Goblin Punter", "Walk the Plank", "Kill the Sun", "Do You Want to Slay a Snowman?", "Tin-Foil Hatter",
        "Baleful Harvest", "Ice Scream", "Sticky Situation", "Real Estate Agent", "Not the Bees!",
        "Jeepers Creepers", "Funkytown", "Into Orbit", "Rock Bottom", "Mecha Mayhem",
        "Gelatin World Tour", "Fashion Statement", "Vehicular Manslaughter", "Bulldozer", "There are Some Who Call Him...",
        "Deceiver of Fools", "Sword of the Hero", "Lucky Break", "Throwing Lines", "Dye Hard",
        "Sick Throw", "The Frequent Flyer", "The Cavalry", "Completely Awesome", "Til Death...",
        "Archaeologist", "Pretty in Pink", "Rainbows and Unicorns", "You and What Army?", "Prismancer",
        "It Can Talk?!", "Watch Your Step!", "Marathon Medalist", "Glorious Golden Pole", "Servant-in-Training",
        "Good Little Slave", "Trout Monkey", "Fast and Fishious", "Supreme Helper Minion!", "Topped Off",
        "Slayer of Worlds", "You Can Do It!", "Matching Attire", "Benched", "Fae Flayer",
        "Just Desserts", "Don't Dread on Me", "Hero of Etheria", "Infinity +1 Sword", "Boots of the Hero",
        "A Rather Blustery Day", "Quiet Neighborhood", "Hot Reels!", "Heliophobia", "Leading Landlord",
        "Feeling Petty", "Hey! Listen!", "Jolly Jamboree", "Dead Men Tell No Tales", "An Eye For An Eye",
        "Feast of Midas", "Unusual Survival Strategies", "Black Mirror", "Ankhumulation Complete", "Torch God",
        "A Rare Realm", "The Great Slime Mitosis", "A Shimmer In The Dark", "And Good Riddance!", "To Infinity... and Beyond!",
        "Book Worm", "Boulder Lord", "Queen Machine", "Rollin’ In Your Grave", "Fear The Sun",
        "It’s Shaling Outside", "Extra Life", "Grave Mistake", "Spicy Licks", "Organized Chaos",
        "On Fleek", "Fortune Favors the Bould", "Training Day", "Mini-Me", "Terrarist",
        "New Digs", "My People Need Me", "Going Oldschool", "Sea You Later", "Trash Compactor",
        "Conservationist", "Interdimensional Recycling"
    ];

    assert.strictEqual(officialAchievementNames.length, 137, "sanity check on this test's own reference list");

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

import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/powerwash-simulator.js";

test("the PowerWash Simulator guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "powerwash-simulator-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "powerwash-simulator");

});

test("the PowerWash Simulator guide has all 11 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Equipment & Appearance",
            "Base Career Jobs",
            "Career Progression & Challenge Mode",
            "SpongeBob SquarePants Special Pack",
            "Back to the Future Special Pack",
            "Warhammer 40,000 Special Pack",
            "Alice in Wonderland Special Pack",
            "Shrek Special Pack",
            "Wallace & Gromit Special Pack",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 100-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /100 Steam achievements/);

});

test("every one of the 100 official PowerWash Simulator achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Soap Connoisseur", "Fully Equipped", "Urban Xpert", "Heavy Hitter", "Unlimited Powerwash",
        "Fashionista", "Powerful Pressure Purist", "First Steps", "StegoScore", "Gutted",
        "Pave the Way", "Sole Task", "Tall Order", "Watermelon Shot", "I Can See Clearly Now",
        "Impeccable Balance", "Lantern Hunter", "Live by the Blade", "Merrily Go Round", "Gnome Sweet Gnome",
        "Delaying the Inevitable", "Shine Bright", "Suspicious Modifications", "Tyresome", "Best Buds",
        "Blast from the Past", "Bucket List", "Delicate Excavation", "All Hands on Deck", "As It Was Foretold...",
        "Coconut Dodge", "Starting Out", "Raking It In", "Big Business", "Super Star",
        "Good Dings to Come", "Head First", "Going for Gold", "Gold Standard", "Side Hustle",
        "Naughty Nautical Neighbors", "Bus is here!", "Employee of the Month", "Feast Your Eyes…", "It's Supposed to be Invisible!",
        "Mermaidman and Barnacleboy Unite!", "It's not a Boulder, It's a Rock!", "Bucket Sweet Bucket", "I've Come for Your Pickle", "It's Not My Wallet",
        "Great Scott!", "OUTAGRIME", "Save the Clocktower!", "2015? You Mean We're in the Future?", "Your Future is Whatever You Make it",
        "88 Miles Per Hour!", "May it Stand for All Time!", "Shark Still Looks Fake", "Back to the Theater", "This is What Makes Time Travel Possible",
        "Courage and Honor!", "Eternal Service", "Cadia Stands!", "Sacristan's Duty", "Sanguinius Would Be Proud",
        "We March for Macragge!", "Degrees of Redemption", "The Emperor Protects", "Astra Militarum's Secret Weapon", "Descend into Shadow, Rise into Light",
        "Down the Rabbit-Hole", "The Rabbit Sends in a Little Bill", "Advice from a Caterpillar", "A Mad Tea-Party", "Who Stole the Tarts?",
        "I Really Must be Getting Home", "Oh My Ears and Whiskers!", "Metamorphosis", "Like a Tea Tray in the Sky", "Such a Curious Croquet-Ground",
        "A Sacrifice I am Willing to Make", "Honeymoon!? With Whom?", "Get Out Of My Swamp!", "Working Hard or Hardly Working? ", "That'll do, Donkey",
        "Somebody Once Told Me…", "Welcome to Duloc...", "Are We There Yet?", "Look At Me Shrek, I'm Trotting", "Like That's Ever Gonna Happen…",
        "Home Sweet Home", "Right house proud", "All knitted up!", "Now we’re motoring!", "We have touchdown!",
        "All aboard!", "Pond possession!", "Baaath time!", "Squeaky-clean strides!", "The Art of Cleaning",
    ];

    assert.strictEqual(officialAchievementNames.length, 100, "sanity check on this test's own reference list");

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

import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/endless-space-2.js";

test("the Endless Space 2 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "endless-space-2-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "endless-space-2");

});

test("the Endless Space 2 guide has all 8 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Faction-Specific Feats",
            "Exploration, Lore & Economy",
            "Heroes, Playtime & Technology",
            "Victory Conditions",
            "Difficulty Ladder & Vaulters DLC",
            "Hissho, Umbral Choir & Nakalim DLC",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 115-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /115 Steam achievements/);

});

test("every one of the 115 official Endless Space 2 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Ctrl + Alt + Delete", "Sins of the Fathers", "There Can Be Only Me", "All for One…", "The Eighth Plague",
        "Dust. Powerful Stuff.", "Buying Elections", "Through the Looking Glass", "88 MPH!!!", "Yin and Yang",
        "Sophon'd Of Science", "Galaxy2Gether", "Tree Huggers", "By Your Command", "The Empire's Death Star",
        "Endleus Vult!", "By Our Grace You Were Elevated", "The Final Frontier", "Home Is Where the Heart Is", "Loremeister",
        "Virtually Endless", "The Other Clone Wars", "Don’t Ever Take Sides Against the Family Again", "What If There Is No Tomorrow?", "The Cake Was Delicious",
        "Branching Out", "Absolute Power", "Am I My Brother's Keeper?", "Aurigan Trail", "Back to School",
        "A Small Loan of a Million Dust", "Scrooge McDust", "King Midust", "Cash Cow", "Harvester",
        "Massively Massive Mass Production", "Labs and Fabs", "Strategically Loaded", "We Hit Pay Dust!", "Vive la Révolution !",
        "Corridors of Power", "Friends With Benefits", "Getting Schooled", "Graduation Day", "Heroic Patience",
        "Endless Gamer", "Ad Astra!", "Cornering the Market", "Stellar Utopia", "The Art of War",
        "Brains Over Brawn", "The Root of the Problem", "Et Tu, Brute?", "The Unstoppable Force", "I'll Bite Your Legs Off!",
        "Dice with the Universe", "Numbers. They Don't Lie.", "Bow Before Me!", "Feel the Glory", "Maybe It Does Buy Happiness",
        "I Am the Eternal End", "I Did It My Way!", "They Saw Madness - I Found Genius", "Still Hungry", "I Know the Families",
        "Order and Balance", "They Have Always Been First", "It Will Not End with Fire", "Whatever the Cost, Whatever the Effort", "We Will See The Heretic Drown in His Blasphemies",
        "Baby Steps", "Training Wheels", "Just Warming Up", "Strove, Sought, Found, Did Not Yield", "Barely Broke a Sweat",
        "Piece of (True) Cake", "The Learner Is Now the Master", " Lost and Found", "My People, the Vaulters", "Roach Control",
        "Cogito Argosy", "No Mercy", "Stop Right There, Criminal Scum!", "I'm the Captain Now", "I've Got a Jar of Dust",
        "Endless Day", "For Honor", "Semper Fidelis", "Perfect Warriors", "Are You Entertained?",
        "Eternal Glory", "We Spared No Expense", "Is It Overheating Yet?", "I Smell Burning Redsang", "Not a Scratch",
        "To the Death", "Umbral Wisdom", "The Spider", "Rapture", "Wanderlust",
        "I need to mine", "It's treason, then", "The seed is strong", "Thank god they use USB too", "Predator",
        "Rule from the Shadows", "So Shall It Be", "Prophetic Perfection", "Righteous Reliquary", "Acade-me",
        "Not For Profit", "Shared Vision", "Laying Down the Law", "Making Amends", "Academic Pursuits",
    ];

    assert.strictEqual(officialAchievementNames.length, 115, "sanity check on this test's own reference list");

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

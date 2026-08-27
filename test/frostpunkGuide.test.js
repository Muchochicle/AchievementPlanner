import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/frostpunk.js";

test("the Frostpunk guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "frostpunk-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "frostpunk");

});

test("the Frostpunk guide has all 11 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Economy & City-Building",
            "Society",
            "New Home",
            "Refugees",
            "The Arks",
            "Fall of Winterhome",
            "Endless Mode",
            "The Last Autumn",
            "On The Edge",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 115-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /115 Steam achievements/);

});

test("every one of the 115 official Frostpunk achievement names is mentioned somewhere in the guide", () => {

    // The full, official list this guide is built from
    // (backend/catalog/games/frostpunk.json).
    const officialAchievementNames = [
        "Built to Serve", "Advanced Designs", "Expats", "Oxbridge", "City of Steam",
        "City of Man", "Unskilled Labour", "Urban Planner", "Power Overwhelming", "Vegetarian",
        "Carnivore", "Worse than London", "Better than London", "Hyperefficient", "Tis but a Scratch",
        "Charcoaled", "Satellites", "Central Heating", "Autonomous City", "Shai Hulud Summoner",
        "Once More unto the Breach", "Bread and Games", "Promised Land", "Politician", "Bad at Politics",
        "The Scientific Method, vol. 1", "The Scientific Method, vol. 2", "Please, Sir, I Want Some More", "Leader", "Iron Man (New Home)",
        "Compassionate", "United", "Lost Souls", "Golden Path", "The Saviour",
        "The Iron Saviour", "My Turn to Speak", "Banksy", "Negotiator", "Refugee",
        "Iron Man (Refugees)", "The Union", "Search and Rescue", "Unknown Ship", "Technocrat",
        "Iron Man (The Arks)", "Everybody Lived for Once", "Conservationist", "Sprinter", "New Home Survivor",
        "Refugees Survivor", "The Arks Survivor", "Winterhome", "All children on board", "Full Dreadnought",
        "The Winterhome Survivor", "Iron Man (Fall of Winterhome)", "Master Archivist", "A Tomb for Memories", "Hi Marek!",
        "Full House", "Notting Hollow", "Let There Be Light", "Hyde Park Corner", "Walk on the Grass",
        "Backup Plan", "Marathon Medium", "Ultramarathon Medium", "Marathon Hard", "Ultramarathon Hard",
        "Marathon Extreme", "Ultramarathon Extreme", "There was no Waldo", "Rise of the Machines", "By the Sweat of their Brow",
        "Builder", "The Last Autumn Survivor", "Iron Man (The Last Autumn)", "Perfectionist", "I'll Be Home for Christmas",
        "On the Waterfront", "Fisher King", "Not great, not terrible", "Messrs Gabriel", "Emissions Reduction",
        "All Along the Watchtower", "Arise Ye Workers", "Bonus Pater Familias", "No Crunch", "Ducks in a Row",
        "Weathering the Storm", "Winter Ready", "One More Day Syndrome", "A for Effort", "It Was Me All Along",
        "This is New London, Over", "Bald Mountain", "You Had To Do It", "Green Thumb", "Defender of the Oppressed",
        "Guardian", "First Steps", "Contractor", "Frostland Explorer", "I Feel Lucky",
        "All Your Base Are Connect To Us", "Social Activist", "Slave Driver", "Unforgiven", "We Are In This Together",
        "Iron Man (On The Edge)", "On The Edge Survivor", "Endless Social Activist", "I See Friends Holding Hands", "Endless Slave Driver"
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

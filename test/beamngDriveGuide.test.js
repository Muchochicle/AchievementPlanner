import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/beamng-drive.js";

test("the BeamNG.drive guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "beamng-drive-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "beamng-drive");

});

test("the BeamNG.drive guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Campaigns & Tutorials",
            "Free Roam Distance & Stunts",
            "Challenges & Skills",
            "Career Mode - Onboarding & Deliveries",
            "Career Mode - Vehicles & Economy",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 58-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /58 Steam achievements/);

});

test("every one of the 58 official BeamNG.drive achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Senseless Destructor", "Beginner's Racing License", "A Rocky Start", "Outstanding Performance", "Long Way Around",
        "Quite a lot of Vehicles", "Just a few Vehicles", "Rolling Around", "Weightless in the Air", "Vehicle Explorer",
        "World Explorer", "This one's my Favourite", "Real Mileage", "Freeform Delivery", "Crawling",
        "Bus Driver", "Chase Player", "Parking Enthusiast", "AI Racer", "Time Trials Driver",
        "Rally Pro", "Rally Driver", "Sideways for Days", "Impressive Drift", "Drag Racer",
        "Filling up the Tank", "Challenge Complete!", "First Challenge", "Picture Perfect", "Save it for later",
        "Vehicle Customization", "Freeroam Tutorial Completionist", "Freeroam Basics", "Paid the Price", "On Schedule",
        "Bulk Delivery", "Car Jockey", "First Delivery", "Policy Review", "High End Performance",
        "Performance Review", "That was Expensive", "Claim Filed", "Three-Car Garage", "Flip Profit",
        "M1N3 N0W", "Too Late!", "Deal Maker", "Good Deal", "Serious Purchase",
        "Six-Figure Club", "First Paycheck", "New Territory", "First Assignment", "Keys to Success",
        "Extra Credit", "First Rollout", "Welcome to APM",
    ];

    assert.strictEqual(officialAchievementNames.length, 58, "sanity check on this test's own reference list");

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

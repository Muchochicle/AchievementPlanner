import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/forza-motorsport-2023.js";

test("the Forza Motorsport guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "forza-motorsport-2023-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "forza-motorsport-2023");

});

test("the Forza Motorsport guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Career, Basics & Social",
            "Car Progression & Upgrades",
            "Multiplayer, Free Play & Rivals",
            "Endurance, Weather & Skill Feats",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 57-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /57 Steam achievements/);

});

test("every one of the 57 official Forza Motorsport achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Welcome to Forza", "On the House", "Make it Yours", "Express Yourself", "My First Art Show", "Influencer", "Race Engineer", "Setting the Standard", "Paparazzi", "Highlight Reel", "Welcome to Builders Cup", "Built Not Bought", "Just Getting Started", "Journeyman Builder", "Pro Builder", "Legendary Builder", "It’s not the car...", "Getting Familiar", "Pride and Joy", "Brand Ambassador", "Aficionado", "Garage Royalty", "Tinkerer", "Body Builder", "Heart Transplant", "In the Big Leagues", "Clean Driving", "Safety Star", "Safety Superstar", "Pole Position", "Podium Prodigy", "Rain or Shine", "Freedom!", "Leisure Cruise", "Time Traveler", "New Rival", "Amateur Rival", "Enthusiastic Rival", "Experienced Rival", "Endurance Legacy", "American Challenger", "Sightseeing", "When in Rome…", "Free as a Bird", "Flying", "Stiff Competition", "Night Owl", "Rain Meister", "Contender", "Competitor", "Racecraft", "Self-Improvement", "Technique", "Excellence", "Strategist", "Running on Fumes", "Well Rounded"];

    assert.strictEqual(officialAchievementNames.length, 57, "sanity check on this test's own reference list");

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

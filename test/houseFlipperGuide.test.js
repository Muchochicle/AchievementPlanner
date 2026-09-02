import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/house-flipper.js";

test("the House Flipper guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "house-flipper-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "house-flipper");

});

test("the House Flipper guide has all 8 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Client Personas",
            "Getting Started, Business & Real Estate",
            "Beach Please & Late-Game Business Feats",
            "Pets DLC",
            "Museum Piece & Farm DLC",
            "Dine Out DLC",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 96-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /96 Steam achievements/);

});

test("every one of the 96 official House Flipper achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Family man", "Geek", "Worth every penny", "I'm a Belieber", "Wall Street Shark", "Mr. Mystery", "Just enough", "The Tactical Prepper", "The Survivalist", "Doomsday Prepper", "Alpha Male", "Pro-creative", "Artistic soul", "First money", "Millionaire", "Game over", "Do it ASAP", "Perfectionist", "Knock, knock", "Negotiator", "Strongman", "Car mechanic", "You're doing it wrong.", "Junior estate agent", "Estate agent", "Real estate agent", "Give it some fresh air", "Beginner gardener", "Competitor", "Perfect Layout", "According to the rules.", "Fully equipped.", "Call me Edward.", "Gardener", "Vegan", "Let's go swimming.", "Whack-A-Mole", "Don Quixote", "Down to the last penny", "Truly open space", "Whole family", "All the possibilities!", "Chimney sweeper", "Modern solutions", "Time warp", "Oliver's way", "Greta's touch", "Homer's house", "Renovator", "Beach please", "I hope there's no cellar", "Windows update", "The furnisher", "I fixed it!", "Panorama", "Luxury is always in style", "I am rich", "The Wi-Fi password, anyone?", "You are too creative!", "Step up your game", "The choice is yours", "What's in the box?", "A journey full of fluffiness", "Welcome to Cozy Village", "Caretaker", "Fresh, clean, and dry", "It's playtime!", "Tap-tap-tap...", "Versatile caretaker", "The floor is your canvas", "Teamwork", "They grow up so fast...", "Picture perfect", "This belongs in a museum", "Old McDonald", "Drone master", "The bigger the better", "Music to my ears", "Captain Hook", "Don’t hold your horses", "Hardworking farmer", "They're all in one basket", "Just don't get lost!", "A long day in the countryside", "Talented roofer", "Free spirit", "Appetite comes with eating", "The way to one's heart…", "The cherry on top", "5 Flipper stars", "Why live on bread and water?", "Property manager", "Land in hot water", "Table, Deck Yourself!", "Don't judge a restaurant by its sign", "Flavours Hunter"];

    assert.strictEqual(officialAchievementNames.length, 96, "sanity check on this test's own reference list");

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

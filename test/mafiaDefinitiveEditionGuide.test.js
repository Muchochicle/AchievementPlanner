import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/mafia-definitive-edition.js";

test("the Mafia: Definitive Edition guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "mafia-definitive-edition-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "mafia-definitive-edition");

});

test("the Mafia: Definitive Edition guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story Missions",
            "Difficulty & Race",
            "Police & Driving",
            "Garage & Collectibles",
            "Hidden Achievement",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 43-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /43 Steam achievements/);

});

test("every one of the 43 official Mafia: Definitive Edition achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "A Chase through the Night", "The Back Streets of Little Italy", "The Way this City Works", "Gangs of Lost Heaven", "Neighborhood Hero",
        "Good Night for a Walk Anyways", "Storm Cloud over Chinatown", "Murder in the House of God", "Your Canuck Cousins", "Rat in the House",
        "Blood on Beech Hill", "Best Laid Plans", "The Day the War Began", "Death on the Water", "When God Stops Smiling",
        "The Day the War Ended", "A View from the Top", "Into the Lion's Den", "That Last Big Score", "Friends and Family",
        "A Life of Crime", "Supercharged", "Lined Pockets", "Not Taken In", "Heat from the Cops",
        "Car Enthusiast", "That Motor can Move", "Stunt Rider", "Quite the Collection", "Motor Museum",
        "Pulp Fiction", "Lending Library", "Comic Violence", "Picture Book Connoisseur", "Family History",
        "Full Set", "On the Trail", "Car Thief Number One", "Mystery Fox Discovered", "Mystery Fox Domination",
        "The Whole Story", "Not Classy", "Made Man",
    ];

    assert.strictEqual(officialAchievementNames.length, 43, "sanity check on this test's own reference list");

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

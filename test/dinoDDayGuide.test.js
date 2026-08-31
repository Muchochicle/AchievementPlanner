import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/dino-d-day.js";

test("the Dino D-Day guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "dino-d-day-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "dino-d-day");

});

test("the Dino D-Day guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "General & Human-Soldier Feats",
            "Weapon Life-Kills & Pterosaur",
            "Dinosaur Classes",
            "Support Classes & Objectives",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 77-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /77 Steam achievements/);

});

test("every one of the 77 official Dino D-Day achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Bite the Hand that Feeds You", "Helmet Trick", "It's the Rapture!", "Out, but not down", "Paint the town red", "Reich Rolled", "Sneaky Snacker", "Star Spangled Hammer", "Tonight, you dine in Hell!", "Clever Girl", "Griefosaurus", "Achilles Meal", "Griefosaurus Rex", "What's gonna happen to the goat?", "ThrOWNAGE", "Nazis...I hate these guys.", "Pull!", "Bad Hare Day", "That's just Garand", "Keep Calm and Carry One", "Open BAR, dude", "French Persistence", "Uz Prieksu!", "More like \"Stompson\"", "Divine Wind", "Rest for the Unwary", "Avenge me!", "Struck by the Streicher", "Stricken by the Streicher", "Bad Medicine", "Combo Meal", "Mourning Breath", "Primal Purge", "Snack Attack", "Spit Us Out The Bomb", "Paint the Town Yellow", "Horned Devil", "Trigger Time", "Give 'Em the Bird", "Party Fowl", "Wall Art", "Thankskilling", "Hock a Luger", "Kiss the Cook", "Adding Insult to Injury", "It DOES burn when you pee!", "Turkey Dinner", "Operation Torch", "I regret nothing!", "Two for One Special", "Threepeat", "Is this a bad time?", "This is my BOOM stick(y)!", "It ain't easy being greasy...", "Cloudy with a chance of Death!", "Bandage a Trois", "Combat Vet(erinarian)", "German Efficiency", "Frankenhurter", "He who controls the points...", "There's no 'I' in plane", "I choose you!", "Exercise your options", "The bigger they are...", "...the harder they fall.", "Cap'd", "Santa's Little Helper", "THAT WAS FREAKING AMAZING!", "You Can't Go Home Again", "If it bleeds we can kill it...", "I Regret Everything", "Kelly's Heroes", "Let's Ragnaroooooook!", "Shoot her!", "The Silence of the Lambs", "Tanks a lot", "There Can Be Only One"];

    assert.strictEqual(officialAchievementNames.length, 77, "sanity check on this test's own reference list");

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

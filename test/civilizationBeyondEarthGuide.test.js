import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/civilization-beyond-earth.js";

test("the Civilization: Beyond Earth guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "civilization-beyond-earth-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "civilization-beyond-earth");

});

test("the Civilization: Beyond Earth guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Sponsors, Difficulty & Victory Types",
            "Maps, Wonders & City Milestones",
            "Virtues, Affinities & Combat",
            "Rising Tide Expansion",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 90-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /90 Steam achievements/);

});

test("every one of the 90 official Civilization: Beyond Earth achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Chief Extraterrestrial Officer", "The Big Payoff", "Shining Path", "Gagarin's Legacy", "Father of Nations", "The Art of the Infinite", "Never Surrender", "Moksha", "Grand Galactic Inquisitor", "Beep… Beep…. Beep...", "Godspeed", "Поехали! (Pojexali!)", "8 Days or Bust", "Order of Lenin", "The Eagle Has Landed", "Resistance is Futile", "We Are Not Alone", "Phone Home", "Planned Obsolescence", "It's Full of Stars", "Steely Eyed Missile Man", "Aim to Misbehave", "Tiny Big Planet", "That's No Moon", "Pale Blue Dot", "The View is Tremendous", "Poseidon's Children", "That New Planet Smell", "A Planet the Very Brother of Your Own", "When Maui Came To This World", "United Federation of Planets", "Cylon Computer Virus", "Valley of the Time Tombs", "The Machineries of Joy", "I'm in the middle of some calibrations", "Mighty Fine Shindig", "Energize", "What Was Once Only Imagined", "Making Way for a Hyperspace Bypass", "I'm On Another Boat", "Game over, man!", "42", "C'mon you apes, you wanna live forever?", "Live Long and Prosper", "Logic is the beginning of wisdom", "No bucks, No Buck Rogers", "Mark II", "Enemy Within", "Patent Pending", "Rules of Acquisition", "There is no Try", "I've made a lot of special modifications myself", "The Only Good Bug is a Dead Bug", "Walk Without Rhythm", "Light This Candle", "Just Like Voskhod 2", "Cruel and Unusual Geography", "Fearful Symmetry", "A Fistful of Dollars", "For A Few Dollars More", "Once Upon A Time In Space", "Homo Aliena", "So Say We All", "The Sound Of Inevitability", "Salam", "Thy Sea So Great", "Willing is Not Enough", "Shadow and Light", "Splashdown", "The Voyageur", "Terror From the Deep", "Neptune's Glory", "Ramming Speed", "Liberty Bell 7", "Let's Make a Deal", "The Prince", "Lingua Franca", "Ahimsa", "It Belongs in a Museum", "You Have Chosen Wisely", "'X' Never Marks the Spot", "Fortune and Glory", "More Than Meets The Eye", "Best of Both Worlds", "The Frontier is Everywhere", "Winter is Coming", "The Stuff of Legend", "The Halls of R'lyeh", "Shai-Hulud", "Silent Service"];

    assert.strictEqual(officialAchievementNames.length, 90, "sanity check on this test's own reference list");

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

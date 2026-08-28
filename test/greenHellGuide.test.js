import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/green-hell.js";

test("the Green Hell guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "green-hell-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "green-hell");

});

test("the Green Hell guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Survival Basics",
            "Survival Challenges & Story",
            "Animal Husbandry",
            "Spirits of Amazonia",
            "Hidden Achievements",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 68-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /68 Steam achievements/);

});

test("every one of the 68 official Green Hell achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "You are not prepared", "Soul Vine", "It's all over, again", "Just, wait for me…", "Greedy",
        "Green Hell", "Globetrotter", "I made fire!", "Welcome to the jungle", "I made it",
        "The first step to greatness", "Tastes like chicken...", "Self-defense", "Caveman", "Vegan!",
        "Pacifist", "Casted Far Away", "Making progress", "Iron Man", "I'm saved",
        "It's all their fault", "Am I losing it?", "Leeches, leeches everywhere", "Improvise, adapt, survive", "Home Sweet Home",
        "I have it!", "Fresh Water", "I don't need to sleep", "Keeper of the flame", "Going back home",
        "Gotcha!", "King of the jungle", "Do you want to play with a snowman?", "Pyromaniac", "Mr... I don't feel so good",
        "Got to catch them all", "I'm not afraid of any work", "Gardener", "Cartographer", "Librarian",
        "Mu'agi Friend", "Un'garaca Friend", "Habbacu Friend", "Babysitter", "Molineria-man",
        "Rest in peace", "Cleaning volunteer", "Fishing in troubled waters", "Handyman", "Cage opener",
        "Map Collector", "This is how it began", "This is Jake Higgins...", "The Ritual of Mu'agi", "The Ritual of Habbacu",
        "The Ritual of Un'garaca", "Are we there yet?", "Work hard, play hard", "Oyohua Mu'agi", "Oyohua Habbacu",
        "Oyohua Un'garaca", "The Legends of Mu'agi", "The Legends of Un'garaca", "The Legends of Habbacu", "Thats the spirit!",
        "A new friend", "Emotional support", "Circle of Life"
    ];

    assert.strictEqual(officialAchievementNames.length, 68, "sanity check on this test's own reference list");

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

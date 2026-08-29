import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/like-a-dragon-ishin.js";

test("the Like a Dragon: Ishin! guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "like-a-dragon-ishin-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "like-a-dragon-ishin");

});

test("the Like a Dragon: Ishin! guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Completion, Virtue & Records",
            "Bonds, Substories & Combat",
            "Second Home, Minigames & Locales",
            "Hidden Achievements",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 56-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /56 Steam achievements/);

});

test("every one of the 56 official Like a Dragon: Ishin! achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Bakumatsu Boss", "Home, Sweet Home", "Losing a Brother", "A Messy Investigation", "That Was Close!",
        "The Bottom Drops Out", "Secrets Revealed", "Cold Betrayal", "Hero of a Nation", "Legend of an Era",
        "Ultimate Champion", "Halfway There", "Taskmaster", "Nominally Virtuous", "Fairly Virtuous",
        "Extraordinarily Virtuous", "Divinely Virtuous", "The Gods Smile Upon Thee", "The Gods Rejoice at Thee", "The Gods Sing Thy Praises",
        "The Gods Hath Been Humbled", "Making a Difference", "Everybody Loves Ryoma", "I'll Have One of Everything", "Kyo's Little Helper",
        "Saint of Kyo", "Savior of Kyo", "Student Among Masters", "You've Got Soul", "On the Level",
        "Limit Breaker", "This is MY Ring!", "Revelation Reveler", "Bring Down the Hammer", "Showoff",
        "The Abyss Stares Back", "Bandit Rustler", "Bandit Wrangler", "Sanada Takedown", "Drop and Give Me 100",
        "Tengu Tamer", "An Honest Day's Work", "Chef's Special", "Side Hustler", "A Well-Rounded Cast",
        "Platonic Bliss", "World's Greatest Uncle", "Now It Feels Like Home", "The Man Who Does It All", "Easy Come, Easy Go",
        "Noodle-Slinger Supreme", "Sing Your Heart Out", "Lord of the Dance", "Cocksure", "Like a Dragon in Heaven",
        "Social Butterfly",
    ];

    assert.strictEqual(officialAchievementNames.length, 56, "sanity check on this test's own reference list");

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

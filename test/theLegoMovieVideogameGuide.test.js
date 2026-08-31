import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/the-lego-movie-videogame.js";

test("the The LEGO Movie - Videogame guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "the-lego-movie-videogame-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "the-lego-movie-videogame");

});

test("the The LEGO Movie - Videogame guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story Levels",
            "Collectibles & 100%",
            "Character & Combat Feats",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 48-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /48 Steam achievements/);

});

test("every one of the 48 official The LEGO Movie - Videogame achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Cover Your Butt!", "Lets Get Craaazzzyyyy", "Darn Darn Darn Darny Darn!", "Are You A DJ?", "Freeze, Turkeys!", "Rest In Pieces", "No Frowny Faces", "Every Man For Himself!", "You Can't Build 'Em All At Once", "Why Are My Pants Cold and Wet?", "This Bedoubled Land Couch", "See You Later Alligator", "Found Your Pants, Series Is Over", "I Am A Master Builder!", "Release Every Micro Manager!", "You Can Still Change Everything", "Honey, Where Are My Pants?", "You Are The Special", "Welcome To Bricksburg", "Build Things Only You Can Build", "Including, But Not Limited To", "The Special People In Your Life", "Always Read The Instructions!", "Midas Touch", "Business Business Business", "Everything Is Awesome!", "Really hard? This be Impossible!", "The Opposite Of Happiness", "Ah! The Kragle!", "Building Bad", "Pow Pow! Bullet Bullet! Gun!", "Ayayaya!", "I Could Sing This Song For Hours", "No Way, This Is My Jam.", "Firestarter", "First Try!", "I Am The Computer", "Wear Clothes… Check!", "A House Divided", "SPACESHIP SPACESHIP!", "I Super Hate You Right Now", "It's Just Business", "The Prophecy, I Made It Up!", "END OF THE LINE!", "Glues Your Daddy?", "To The Invisible Jet!", "Grrrg!", "Too Bad!"];

    assert.strictEqual(officialAchievementNames.length, 48, "sanity check on this test's own reference list");

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

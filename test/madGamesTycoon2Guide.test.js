import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/mad-games-tycoon-2.js";

test("the Mad Games Tycoon 2 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "mad-games-tycoon-2-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "mad-games-tycoon-2");

});

test("the Mad Games Tycoon 2 guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Genre & Game-Type Milestones",
            "Awards, Sales & Studio Growth",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 73-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /73 Steam achievements/);

});

test("every one of the 73 official Mad Games Tycoon 2 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Hurrican", "Marble Maze", "Dr. Lario", "The Island of Monkeys", "Dungeons and Masters", "The Civilizations", "Super Lario World", "Spaceship: Elite", "California Cup", "Mad Oil Tycoon", "Backstreet Fighter", "Simulation City: 1602", "Dragon's Cave", "Commander Yuri", "BOOM", "Better Than a Book", "Max Brain", "The Test Drivers", "Retromania", "World of Meridian", "Is the Game Really Free?", "Insert Coin!", "Everyone Likes Snakes", "Born to Be a Programmer", "Console War", "This Fits in My Pocket", "Bonus Payment", "Bundles", "Discount", "Complete Edition", "Spin Off", "I, II, III, IV", "Game Porting Made Easy", "Better Than the Original?", "Trendsetter", "Game of the Year", "Developer of the Year", "Publisher of the Year", "Eye Candy", "A Great Soundtrack", "This Can't Be Right!", "Overhype!", "Contractors", "That Was a Lot of Jobs!", "Now I Will Become Rich", "This Is the Future!", "Publisher!", "My Best Friend!", "Gold", "Platin", "Diamond", "80%", "90%", "100%", "Everyone Loves Me!", "I Don't Like to Be Alone", "This Is My Team!", "Intellectual Property", "Legendary Game Company", "Masterful", "Employer I", "Employer II", "Employer III", "Pocket Money", "That Is Not Enough!", "Three Commas Club", "Console war II", "Market Leader", "My Name Is Sid Maier", "Shopping Tour I", "Shopping Tour II", "Shopping Tour III", "Day Zombie"];

    assert.strictEqual(officialAchievementNames.length, 73, "sanity check on this test's own reference list");

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

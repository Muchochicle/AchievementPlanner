import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/batman-arkham-origins.js";

test("the Batman: Arkham Origins guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "batman-arkham-origins-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "batman-arkham-origins");

});

test("the Batman: Arkham Origins guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Main Story",
            "Gotham Crime & Collectibles",
            "Combat, Predator & Challenges",
            "New Game Plus & Multiplayer",
            "Cold, Cold Heart",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 60-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /60 Steam achievements/);

});

test("every one of the 60 official Batman: Arkham Origins achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["City of Assassins", "One eye open", "Nobody that matters", "Everyone wears masks", "One Rule", "Perhaps sooner, Perhaps later", "Shut Down", "Counter-intelligence", "Enigma Unravelled", "First Riddler Trophy", "One down, several to go", "The Innocent and the Predatory", "Shadow Vigilante", "Gotham Protector", "Worst Nightmare", "World's Greatest Detective\t", "Legend of the Dark Knight", "Crime Scene Investigator", "Crime Fighter", "Thanks, old friend", "Personal Trainer", "Perfectionist", "I've Got This", "Free Flow Fifty", "Anyone see that?", "What hit me?", "Silent Knight", "Point to Point", "Around the World", "Flawless Display", "Point Counter-Point", "One of Each", "Air Marathon", "Medalist", "Olympian", "Voice of the People", "Clean Streets", "Give Them Something to Believe", "I Am The Night", "Predator Paragon", "Killing Joke", "Fallen Knight", "Gotham All-Star", "Clutch", "Tales of Gotham", "I Like Those Odds", "Not An Ordinary Criminal", "Arsenal, Awesome", "Legend", "Know Thy Enemy", "Master Wayne", "Let it Snow", "Drilling for Justice", "For Auld Lang Syne", "Paint the Town Red", "Breaking the Ice", "Down with the Revolution", "Snowjob", "Stalact-tactician", "Come Out of the Cold"];

    assert.strictEqual(officialAchievementNames.length, 60, "sanity check on this test's own reference list");

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

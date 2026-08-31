import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/60-seconds.js";

test("the 60 Seconds! guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "60-seconds-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "60-seconds");

});

test("the 60 Seconds! guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Survival Milestones & Endings",
            "Events & Characters",
            "Difficulty, Choices & Trades",
            "Challenges & Secret Storylines",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 56-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /56 Steam achievements/);

});

test("every one of the 56 official 60 Seconds! achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Prepper", "I will survive!", "Survivalist", "Last man standing", "Konrad style!", "Souper!", "2-1-6", "Danger zone", "All thumbs", "Cuckoo's nest", "Gotta get 'em all", "Atomic drill", "This is the end", "Rescue time!", "Bughunter", "One way ticket", "Friend in need", "Family guy", "Tora! Tora! Tora!", "Lumbersexual", "Home, sweet home", "New species", "Duck and cover!", "Miracle", "New order", "Pro gamer", "Unplugged", "Enola Gay", "Manhattan Project", "Dead Hand", "Be Prepared", "A New Hope", "Pacifist", "Unbreakable", "No stone unturned", "What goes around...", "Naysayer", "Yes Man", "A gift", "Liberation", "The Dark Side", "Fair Exchange", "Holidays!", "Challenger", "Mad Hatter", "Out of the Bag", "Raining Cats and Dogs", "Soup Can into Space", "Men in Black", "Cat Lady", "Feline Domination", "Girl Power", "Disco Roach", "Enigma", "Dawkins Residence", "Not Alone"];

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

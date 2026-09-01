import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/danganronpa-2-goodbye-despair.js";

test("the Danganronpa 2: Goodbye Despair guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "danganronpa-2-goodbye-despair-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "danganronpa-2-goodbye-despair");

});

test("the Danganronpa 2: Goodbye Despair guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story Chapters",
            "Report Cards, Collectibles & Pets",
            "Island Mode, Skills & Performance",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 47-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /47 Steam achievements/);

});

test("every one of the 47 official Danganronpa 2: Goodbye Despair achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Murderous Marooning", "Dead Man's Party", "Death, Lies, and Video Games", "Is It Medicine or Social Skill?", "Bred for Destruction", "Abandon All Hope", "Goodbye Academy of Despair", "Hope Springs Eternal", "Overlord's Vassal", "Grease Monkeying Around", "The Game Hungers for Seconds...and Thirds", "Cooking With Passion", "Caught in a Rad Bromance", "Honor and Humanity", "Starving for Affection", "Co-Op Partner", "A Royal Affair", "It's Lolita Complicated", "Picture Perfect", "Helloooooooooooooooo Nurse!", "Dynamic Duet", "Feudal Friendship", "Mr. Congeniality", "The 1 Percent", "Look at This Stuff, Isn't it Neat?", "For the Hoard", "Be Beary, Beary Quiet...", "I Should Start a Circus", "Can We Keep Him?", "Gotta Raise 'Em All!", "I Wanna Soak Up Some Sun", "Life's a Real Beach", "Halfway There!", "Capped Out!", "Walking the Walk", "Nice Calves", "Hey, Big Vendor", "A Fool and His Money...", "A Magical Ending", "Monomi Won't Miss These, Right?", "This Belongs in a Museum!", "Any Objections?", "Case Closed", "Blowin' Through My Screen", "The Airborne Static Event", "I'm Sorry, What Were You Saying?", "Hope's Last Reward"];

    assert.strictEqual(officialAchievementNames.length, 47, "sanity check on this test's own reference list");

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

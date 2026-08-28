import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/content-warning.js";

test("the Content Warning guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "content-warning-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "content-warning");

});

test("the Content Warning guide has all 8 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Weekly & Per-Video View Milestones",
            "Uploads & Money",
            "Unlocks & New Rooms",
            "Network Deals",
            "Filming Monsters & Events",
            "Emotes & Messing Around",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 48-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /48 Steam achievements/);

});

test("every one of the 48 official Content Warning achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Spööktube Sensation", "Spööktube Famous", "Spööktube Superstar", "Spööktube Cloutlord", "Behind the Screens",
        "Face Off", "Archivist", "Hat Trick", "Spööktube Pioneer", "Spööktube Master",
        "Bouncy Break", "On Air", "We’ll Fix It in Post", "Home Theater", "Swimfluencer",
        "Pocket Change", "Rolling in It", "Certified Medic", "Eh, Guys?", "Sir Slap",
        "Not a Bot!", "Verified Human", "Norf or Nothing", "Money Money", "Breaking News!",
        "Dancing Queen", "Don’t Try This at Home", "Gotta Film 'Em All", "Explosive Content", "Sigma",
        "Spööktube Bronze", "Spööktube Silver", "Spööktube Gold", "Spööktube Platinum", "Bat Nap",
        "Shroomed Out", "Big Slap", "Did you see that?", "Ewan Conan", "Ancient Gesture",
        "Peace & Love", "Big Zap", "Any% Done", "Jello'd", "Lost & Found",
        "Party Time!", "Oops!", "Let’s Get Loud!"
    ];

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

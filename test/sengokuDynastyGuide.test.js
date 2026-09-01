import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/sengoku-dynasty.js";

test("the Sengoku Dynasty guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "sengoku-dynasty-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "sengoku-dynasty");

});

test("the Sengoku Dynasty guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Dynasty, Perks & Endgame",
            "First Steps & Life",
            "Crafting, Villagers & Regions",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 40-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /40 Steam achievements/);

});

test("every one of the 40 official Sengoku Dynasty achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Personal Enlightenment", "We live in a society", "The Honorable Restoration", "Bushidō Mastery", "Spiritual Mastery", "Craftsmanship Mastery", "Daimyō", "Best Superpower", "Questing: Not Just for Heroes", "The Great Unifier", "Gotta Slay 'Em All", "Guardian of Needs", "From Drab to Fab", "It ain't much but it’s honest work", "Gourmet", "Timberrrr!", "I believed I could fly", "No More Couch Surfing!", "Branching Out", "Don't You Dare Chop It!", "For the sake of sake", "There's nowhere to run!", "Stop oinking!", "Bad dog!", "Bearly Survived!", "What's Up, Doc?", "What Does the Fox Say?", "Hands Off My Gold!", "Who smelt it dealt it", "Bronze Age", "Finally, the proper toys", "Unleashing the Power of Steel!", "Look at this gem!", "One Less Mouth to Feed!", "Hot Springs and Chill", "Get my bearings", "2 is a company, 3 is a crowd", "Thousand Gold Club", "Foothold situation", "Breaking the Mold"];

    assert.strictEqual(officialAchievementNames.length, 40, "sanity check on this test's own reference list");

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

import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/final-fantasy-ix.js";

test("the FINAL FANTASY IX guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "final-fantasy-ix-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "final-fantasy-ix");

});

test("the FINAL FANTASY IX guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Synthesis, Magic & Combat Milestones",
            "Superbosses, Minigames & Story",
            "Eidolons, Ultimate Weapons & Elemental Guardians",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 85-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /85 Steam achievements/);

});

test("every one of the 85 official FINAL FANTASY IX achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Coming Together I", "Coming Together II", "That Old Black Magic", "A Healing Touch", "I'm So Blue", "You Called?", "Let the Bodies Hit the Floor I", "Let the Bodies Hit the Floor II", "Let the Bodies Hit the Floor III", "Driving the Hard Bargain", "A Pillar of Support", "Cracking the Code", "One Nag Too Many", "Follow Your Nose", "Beach Bum", "Diggin' It", "Back Online", "Well Lubricated", "Frog Wrangler", "Going for the Gold", "Auctioneer", "Sword of Kings", "Beating the Ragtime Blues", "Mister Nice Guy", "To Ozma and Back", "My Little Airship", "Earning the Queen's Favor", "What's Your Sign?", "Another Man's Treasure", "Dragon Lady", "Hail to the King", "Skip to My Lou", "A Round of Applause", "A-Hunting We Will Go", "All's Well That Ends Well", "End of the Road", "The One Ring", "Peek-A-Boo", "Track Star", "Found in the Shuffle", "Taking the Black", "It's All in the Cards I", "It's All in the Cards II", "It's All in the Cards III", "Take to the Skies", "Backstabber", "Sticky Fingers", "The Best Offense", "Femme Fatales?", "The B-Team", "A Clean Bill of Health", "Getting Emotional", "Overly Emotional", "Still I Rise", "You're Cold as Ice", "Heat of the Moment", "Bring on the Thunder", "Bringing Down the House", "The Dim Mak", "Surf's Up", "King of Dragons", "Firin' Mah Lazer", "Here to Help", "Wolf Insanity", "Rise from the Ashes", "Wolf in Mog's Clothing", "Movie Critic", "Over the Moon", "Kain's Legacy", "Close But No Cigar", "The Ultimate Claws", "The Ultimate Flute", "The Ultimate Mace", "The Ultimate Fork", "The Ultimate Sword", "The Ultimate Rod", "The Ultimate Racket", "The Ultimate Dual Blade", "Path of the Samurai", "Your Lucky Day", "Out of Harm's Way", "Putting Out the Fire", "Gone with the Winds", "All Washed Up", "Hitting Rock Bottom"];

    assert.strictEqual(officialAchievementNames.length, 85, "sanity check on this test's own reference list");

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

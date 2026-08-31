import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/street-fighter-5.js";

test("the Street Fighter V guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "street-fighter-5-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "street-fighter-5");

});

test("the Street Fighter V guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story, Tutorial & Character Levelling",
            "Player Level, Titles & Network Battles",
            "Ranked Matches & Leagues",
            "Combat Feats, Replays & Survival",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 45-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /45 Steam achievements/);

});

test("every one of the 45 official Street Fighter V achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["The Never-Ending Path", "Mastering The Basics", "Your Story Starts Here", "Lucky We Met!", "The 16 Trials", "One Step Forward", "Quantity Over Quality", "No Rest For The Wicked", "Slow But Steady Wins The Race", "Vindicated Honor", "Burning Spirit", "Number 2 Is The New Number 1", "Make A Name For Yourself", "Sultan Of Titles", "Fighting On The Internet", "All Going To Plan!", "A Fiendish Trap", "Waiting Is Half The Fun", "I Know Kung Fu!", "Addicted To Winning", "Working Up An Appetite!", "Ceaseless Effort", "Bam, Bam, Win!", "Always Someone Stronger", "Savoring The Win Streak", "First Promotion!", "Muscles Bring Victory!", "Let's fight someone strong!", "Go Out With A Bang", "Critical Beauty", "Not Over 'Til It's Over", "Enlightenment", "Sudden Reversal", "Playing Favorites", "All In A Name", "Failing To Prepare Is Preparing To Fail", "See You In My Dreams!", "Not-So-Secret Admirer", "Global Network", "Bodybuilding Is Life", "Win Or Die Tryin'", "A True Warrior's Spirit", "Back From Hell", "Priceless", "The outfit is the highlight of battle"];

    assert.strictEqual(officialAchievementNames.length, 45, "sanity check on this test's own reference list");

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

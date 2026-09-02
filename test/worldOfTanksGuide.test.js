import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/world-of-tanks.js";

test("the World of Tanks guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "world-of-tanks-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "world-of-tanks");

});

test("the World of Tanks guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        ["Overview","Onboarding & Tech Tree","Personal Missions & Progression","Damage, Support & Defense","Kills, Mastery & Battle Awards","Suggested Order"]
    );

});

test("the Overview states the verified 60-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /60 Steam achievements/);

});

test("every one of the 60 official World of Tanks achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Tyger Tyger, burning bright","...And That's How You Do It","Trial by Fire","According to Plan","On the Road to Perfection","We're Gonna Need Bigger Guns!","Works Like a Dream","Nine Out of Ten","Top Shelf","Earning Your Stripes","On the Right Track","Smooth Operation","Pocket Money","Toss a Coin","King Midas","Quick Learner","Battle-Hardened","Experience Is the Best Teacher","Save It for Later","An All-Purpose Resource","Knowledge Is Power!","Heavy-Duty","Sweet Spot","A Real Stunner","Finding a Happy Medium","Hunter","A Tough Nut to Crack","Far-Reaching Support","Small but Smart","Tank Hunter","Masterclass","It Ain't Much, but It's Honest Work","Nothing Personal","This Is Just the Beginning","Not Great, Not Terrible","Acing It","Three Cheers","High Five","Penetration!","On the March","David and Goliath","Boy Scout","Last Man Standing","Dodge This","Precise Hit","A Whole New Level","Is That Adamantium?","One-Two Punch","You Can't See Me","Superiority Distance","End of the Line","Top League","Main Gun","All Your Base","Decorated War Hero","Found You!","I Am Invincible!","I Shall Be Your Eyes","Left Click to Shoot","Above and Beyond"];

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

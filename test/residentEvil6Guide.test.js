import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/resident-evil-6.js";

test("the Resident Evil 6 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "resident-evil-6-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "resident-evil-6");

});

test("the Resident Evil 6 guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Campaign Chapters",
            "Difficulty & Progression",
            "Combat Feats & Collectibles",
            "Mercenaries & Multiplayer Modes",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 70-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /70 Steam achievements/);

});

test("every one of the 70 official Resident Evil 6 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["The Longest Night", "Gone to Hell", "Buried Secrets", "Get on the Plane", "Big Trouble in China", "The Trouble with Women", "Rescue the Hostages", "Tragedy in Europe", "After Her!", "There's Always Hope", "Duty Calls", "Money Talks", "A Revolting Development", "Let's Blow This Joint", "Still on the Run", "See You Around", "I Spy", "Counterintelligence", "This Takes Me Back", "Ada's Demise", "What's Next?", "Green around the Ears", "Normal Is Good", "Back in My Day", "Leave It to the Pro", "Check Out My Dogs", "Titular Achievement", "One Is Better Than None", "Mad Skillz", "Silent Killer", "Finish What You Start", "Bob and Weave", "Down, Not Out", "Lifesaver", "Weapons Master", "Give a Little Push", "Rising Up", "They're ACTION Figures!", "Stuntman", "Bring the Heat", "High Voltage", "Zombie Massacre", "J'avo Genocide", "B.O.W.s Are Ugly", "I Prefer Them Alive", "Flying Ace", "Hard Choice", "Sneaking Around", "Covered in Brass", "Heirlooms", "Surrounded on All Sides", "Take the Stage", "Killer Combo", "You Are S.O.L.", "Kill or Be Killed", "Last Man Standing--Again", "Take 'Em All Down", "Kung Fu Fighting", "Staying Alive", "Team Effort", "Not without a Fight", "Invincible", "Easy Pickings", "One Is Never Enough", "Held Captive", "Everybody Dies", "Civilian Casualties", "Murder Spree", "Two Sides of the Same Coin", "Protect and Serve"];

    assert.strictEqual(officialAchievementNames.length, 70, "sanity check on this test's own reference list");

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

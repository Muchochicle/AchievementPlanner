import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/final-fantasy-x-x2-hd.js";

test("the FINAL FANTASY X/X-2 HD Remaster guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "final-fantasy-x-x2-hd-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "final-fantasy-x-x2-hd");

});

test("the FINAL FANTASY X/X-2 HD Remaster guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Final Fantasy X: Story & Aeons",
            "Final Fantasy X: Completion & Superbosses",
            "Final Fantasy X-2: Story, Dresspheres & Iutycyr Tower",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 69-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /69 Steam achievements/);

});

test("every one of the 69 official FINAL FANTASY X/X-2 HD Remaster achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["FINAL FANTASY X Completion", "Speaking in Tongues", "Teamwork in FINAL FANTASY X !", "The Right Thing", "A Talent for Acquisition", "All Together", "Heartstrings", "Show Off!", "Striker", "Chocobo License", "Overcoming the Past", "The Destination of Hatred", "Lightning Dancer", "Feel the Pain", "It's All About the Money", "Delta Attack!", "Theater Enthusiast", "Chocobo Rider", "Power Strike", "Under the Table", "Messenger from the Past", "Mega Strike", "Chocobo Master", "Sphere Master", "Blitzball Master", "Learning!", "Summon Master", "Weapon Master", "Master Linguist", "Perfect Sphere Master", "Perseverance", "Overcoming the Nemesis", "The Eternal Calm", "A Journey's Catalyst", "FINAL FANTASY X-2 Completion", "Dressed for the Occasion", "Specialty", "Good Listener", "Tricky Trapper", "Zeroed Out", "Defeating an Old Friend", "Dousing the Fire", "Sphere Breaker", "Alchemist", "Learner", "Millionaire", "Teamwork in FINAL FANTASY X-2 !", "Excellent Negotiator", "Complete Ability", "Gambler's Dream", "Lifetime Support", "Complete Episode ", "Treasure Hunter", "The Gunner", "Full Chain", "Overkill", "Chocobo Whisperer", "Sphere Hunter", "Dancing Queen", "Monster Master", "Founder", "Machine of War", "Sweet Perfection", "Just Starting", "Still a Ways ", "Midway Through", "Almost There", "Tonberry's Treasure", "Giant Tower"];

    assert.strictEqual(officialAchievementNames.length, 69, "sanity check on this test's own reference list");

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

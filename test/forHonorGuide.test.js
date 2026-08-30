import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/for-honor.js";

test("the For Honor guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "for-honor-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "for-honor");

});

test("the For Honor guide has all 9 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story Campaign",
            "Faction & Hero Reputation",
            "PvP Combat Feats",
            "PvP Mode Mastery",
            "Gear & Customization",
            "Faction War & Seasons",
            "Breach, Arcade & Wu Lin",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 60-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /60 Steam achievements/);

});

test("every one of the 60 official For Honor achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Dishonorable Discharge", "Working Hard for the Loot", "If you want peace, prepare for war", "Welcome To The Blackstone Legion", "Hooligan",
        "Lore Master", "An Average Accomplishment", "A Remarkable Accomplishment", "An Exceptional Accomplishment", "A Beginning",
        "A Middle", "An End", "Getting the band back together", "Get Knighted", "Impressive",
        "I've Heard Your Name", "Legendary Hero", "Long Way Down", "Anything Can Be A Weapon", "Unfair Fight",
        "Heads Up!", "Principled Warrior", "Do it for the Honor!", "I've Got Your Back!", "You're On Fire!",
        "Look At All These Feats", "Revenge Spammer", "You Can't Touch This", "Like Killing Ants", "Duelist",
        "Duel Master", "Brawler", "Brawl Master", "Dominator", "Dominion Master",
        "Skirmisher", "Skirmish Master", "Eliminator", "Elimination Master", "Gear Head",
        "Discerning Taste", "Play Your Way", "Swag Up", "Makeover!", "Evening Wear",
        "You're So Vain", "You're A Wizard", "Cry Havoc", "Let Slip The Dogs Of War", "For Honor!",
        "A Reservist", "Active Duty", "Warmonger", "Protector", "Breach Apprentice",
        "Breach Master", "Quest for Glory", "Serial Quester", "An Unstoppable Force", "Loyalty and Righteousness",
    ];

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

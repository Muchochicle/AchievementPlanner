import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/metro-2033-redux.js";

test("the Metro 2033 Redux guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "metro-2033-redux-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "metro-2033-redux");

});

test("the Metro 2033 Redux guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Weapon & Kill Feats",
            "Mission-Specific Objectives",
            "Collectibles, Trading & Utility",
            "Game Modes & Endings",
            "Hidden Achievement",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 49-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /49 Steam achievements/);

});

test("every one of the 49 official Metro 2033 Redux achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Air Bender", "Cowboy", "Demolitionist", "DJ Artyom", "Enlightened",
        "Fire in the hole", "Fire!", "Generous", "Gunman", "Heavy Reader",
        "Hedge-hopper", "Hunter", "Inquisitor", "Invisible man", "Ka-Boom!",
        "Manhattan Project", "Trigger Happy", "Toast!", "Merciful", "Metro Trader",
        "Snake", "Ninja", "Nosalis hunter", "Pathoanatomist", "Blogger",
        "Pyro", "Quick Draw", "Raider", "Ranger", "Rescue Ranger",
        "Thief", "Scrooge", "Shocking", "Slice & Dice", "Sniper",
        "Marksman", "Soft Touch", "Spartan 2033", "Spider hunter", "Stunning",
        "Survivor 2033", "Tank", "Tonic Man", "If it's hostile, you kill it.", "Warrior",
        "Watchman hunter", "Weaponsmith", "Wheeler-Dealer", "Who goes there?"
    ];

    assert.strictEqual(officialAchievementNames.length, 49, "sanity check on this test's own reference list");

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

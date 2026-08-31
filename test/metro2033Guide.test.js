import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/metro-2033.js";

test("the Metro 2033 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "metro-2033-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "metro-2033");

});

test("the Metro 2033 guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Combat & Level Feats",
            "Exploration & Morality",
            "Weapon Mastery & Ranger Mode",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 48-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /48 Steam achievements/);

});

test("every one of the 48 official Metro 2033 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Air gunner", "Ka-Boom!", "Cowboy", "Demolitionist", "Enlightened", "Fire in the hole", "First blood", "Hedge-hopper", "Invisible man", "Fugitive", "Exorcist", "Heavy Metal", "If it's hostile, you kill it.", "Inquisitor", "Slice & Dice", "Merciful", "Ninja", "Nosalis hunter", "Old school", "Pathoanatomist", "Pyro", "Quick-witted", "DJ Artyom", "Raider", "Rescue Ranger", "Heavy Reader", "Soft Touch", "Scrooge", "Sniper", "Wheeler-Dealer", "Ranger", "Quick Draw", "Tank Buster", "Metro Trader", "Explorer", "Generous", "Metro dweller", "Realist", "Sherlock", "Air Bender", "Gunman", "Shocking", "Sterling Effort", "Sticks like a bur", "Stunning", "Survivor", "Weaponsmith", "Last Man Standing"];

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

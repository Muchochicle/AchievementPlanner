import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/warno.js";

test("the WARNO guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "warno-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "warno");

});

test("the WARNO guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Operations & Early Campaigns",
            "Multiplayer, Skirmish & Progression",
            "More Operations & Later Campaigns",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 49-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /49 Steam achievements/);

});

test("every one of the 49 official WARNO achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Horsemen of the Apocalypse", "March of the Tankmen", "It's a Trap!", "Steel Beasts", "Twilight of the Gods", "En garde!", "For Queen and Country", "Vanguard", "Civil War", "It takes two men to make one brother", "Allons! Allons!", "Breakthrough", "The Kassel Airlift", "Operation Tauroggen", "With a little help from my friends", "Kulachniy Boy", "Highway to Hell", "The Mother Road", "Conqueror", "Destructor", "Wingman", "Teammate", "Companiable", "Party Animal", "Lieutenant", "Captain", "Major", "Colonel", "Major General", "Rookie", "Trained", "Elite", "Keep your friends close...", "Hamburg Hustle", "When the Winged Hussars arrived", "Ordeal by fire", "Brotherhood Under Fire", "Tides of war", "Faster, stronger", "We once shared this crown", "Fallen Kingdom", "Siegfried's Wrath", "Delayed Retribution", "Glory or Attrition", "The Hydra", "The Hammer", "The Anvil", "Resilience", "Airdrop Denied"];

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

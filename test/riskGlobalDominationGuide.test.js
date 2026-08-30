import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/risk-global-domination.js";

test("the RISK: Global Domination guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "risk-global-domination-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "risk-global-domination");

});

test("the RISK: Global Domination guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Combat & Conquest",
            "Losses & Special Maps",
            "Wins & Multiplayer",
            "Playtime & Quirky Feats",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 55-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /55 Steam achievements/);

});

test("every one of the 55 official RISK: Global Domination achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Card Collector", "Card Connoisseur", "Full Deck", "Rising Star", "Unquenchable Thirst for Glory",
        "System Error", "Cower Puny Humans", "Corps Creator", "Battalion Builder", "Army Assembler",
        "1K Down", "The Big 5-0-0-0", "Take No Prisoners", "Short Holiday", "Long Vacation",
        "World Tour", "Shields Up", "Stonewall", "Impenetrable", "Better Luck Next Time",
        "Unlucky Streak", "Slippery Slope", "Anti-Victor", "Fourth time's a Charm", "The World is Yours",
        "Magnifique", "Veteran", "World Debut", "Global Gamer", "Planetary Player",
        "International Champion", "Solo Effort", "Make It On Your Own", "Army Of One", "Lone Wolf",
        "Friendship", "Peacemaker", "Socialite", "Wanna Rumble?", "Pen Pal",
        "No Strings Attached", "Making Connections", "Fanatic", "Long Engagement", "Familiar Ground",
        "Spoils of War", "Land Baron", "Smiley Face", "Loaded Dice", "All Four One, One For All",
        "The Chameleon", "Private Eyes", "Well Educated", "Matchmaker", "Cashed Up",
    ];

    assert.strictEqual(officialAchievementNames.length, 55, "sanity check on this test's own reference list");

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

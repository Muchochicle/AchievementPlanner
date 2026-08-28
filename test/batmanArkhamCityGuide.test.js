import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/batman-arkham-city.js";

test("the Batman: Arkham City guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "batman-arkham-city-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "batman-arkham-city");

});

test("the Batman: Arkham City guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Main Story & Side Missions",
            "The Riddler",
            "Collectibles, Upgrades & Combat Feats",
            "Challenge Maps (Riddler's Revenge)",
            "Completion, New Game Plus & DLC",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 64-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /64 Steam achievements/);

});

test("every one of the 64 official Batman: Arkham City achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "I'm Batman", "Acid Bath", "Savior", "Chimney Sweep", "One-Armed Bandit",
        "Communication Breakdown", "Gladiator", "Wrecking Ball", "Lost And Found", "Sandstorm",
        "Hide And Seek", "Ghost Train", "Freefall", "Exit Stage Right", "Contract Terminated",
        "Serial Killer", "Mystery Stalker", "Broken Toys", "Dial Z For Murder", "Stop the Clock",
        "Bargaining Chip", "AR Knight", "Fully Loaded", "Aggravated Assault", "IQ Test",
        "Conundrum", "Mastermind", "Puzzler", "Intellectual", "Brainteaser",
        "Genius", "Bronze Revenge", "Silver Revenge", "Gold Revenge", "Campaign Bronze",
        "Campaign Silver", "Campaign Gold", "Flawless Freeflow Fighter 2.0", "Twice Nightly", "Pay Your Respects",
        "Storyteller", "Perfect Freeflow 2.0", "Gadget Attack", "Perfect Knight - Day 2", "Sphinx' Riddle",
        "Arkham City Sirens", "Pick Pocket", "Family Jewels", "Feline Revenge", "Campaign Kitty",
        "Robin Revenge", "Campaign Wonder", "Nightwing Revenge", "Campaign Nightwing", "Lost Property",
        "Breaking and Entering", "How's It Hanging?", "The Last Laugh", "Frequent Flyer", "Battering Ram",
        "Snap To It", "Bomb Squad", "A Few New Tricks", "Party's Over"
    ];

    assert.strictEqual(officialAchievementNames.length, 64, "sanity check on this test's own reference list");

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

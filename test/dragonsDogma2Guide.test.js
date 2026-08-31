import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/dragons-dogma-2.js";

test("the Dragon's Dogma 2 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "dragons-dogma-2-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "dragons-dogma-2");

});

test("the Dragon's Dogma 2 guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Main Story & Vocations",
            "Adventuring, Pawns & Feats",
            "Endgame, Bosses & Exploration",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 54-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /54 Steam achievements/);

});

test("every one of the 54 official Dragon's Dogma 2 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["First Taste of Freedom", "Arisen", "Seat of the Proxy", "Across the Border", "Dragon's Dogma 2", "Peace", "I, Talos", "Closure", "Versatile", "Duo Destinies", "Trickster of the Trade", "Arrows and Incantations", "Jack of All Trades, Master of...All Trades", "An In-Tents Adventure", "A House? In This Economy?", "One Speed Only", "The Savior", "Just a Stone's Throw Away", "A Badge of Honor", "Gigantus, I Hardly Knew Ye", "Full Marks", "Off with Its Head!", "Master of the Maisters", "The Specialist", "A Pawn of Many Talents", "Wish upon the Rift", "Myrmecoleon Delights", "The Collector", "The Philanthropist", "Affinity and Beyond", "Dragon Forged", "The Guardian", "The Hero", "This'll Cure What Ails Ye", "Cyclops Abridged", "Harpy Joyride", "Quit Playing Dead", "Dragon's Dogma", "An Eye for an Eye", "Getting a Head", "The Barbecue-Maister", "Nobles' Night Out", "Thought I'd Lost You", "Reaper's Scorn", "Before Dawn Breaks", "The Tourist", "Are We There Yet?", "The Regriffining", "Back Where It All Began", "Plenty Arisen to Go Round", "Roost of the Dragon", "Hope You Brought a Lantern", "To the Victor Go the Spoils", "I'm In"];

    assert.strictEqual(officialAchievementNames.length, 54, "sanity check on this test's own reference list");

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

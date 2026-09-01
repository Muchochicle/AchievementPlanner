import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/greedfall.js";

test("the GreedFall guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "greedfall-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "greedfall");

});

test("the GreedFall guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Main Story, Coup & Endings",
            "Difficulty, Companions & Combat",
            "Progression, Crafting & DLC",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 63-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /63 Steam achievements/);

});

test("every one of the 63 official GreedFall achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["All sails set!", "The Prince's secrets", "Missed coup", "Betrayal in blood", "In the name of the Enlightened", "A preserved Alliance", "Waterproof", "Outside the stone prison", "Influence game", "En on míl frichtimen", "Something is rotten", "All for one, one for all!", "A better world", "Back to the roots", "A big step towards peace", "Island for sale", "New gods", "A passion for extreme", "Serve to convince", "Friendship above all", "Guardian of love", "Minundhanem", "Love and botany", "Love and the sea", "Arena Excellence", "Carants", "Thélème's chosen", "Favoured with the Bridge Alliance", "Explorer", "Melee virtuoso", "War mage", "Musketeer", "Deceitful", "Poisoning artist", "Another sip?", "Shadow blade", "Master of the woods", "King of the peaks", "Swamp creature", "The wrecker", "The legend of the plains", "Hunting with hounds", "The monsters' nightmare", "Coercive diplomacy", "Full pockets", "Curiosity cabinet", "Worthy of legends", "In the footsteps of the masters", "The art of war", "Incomparable technique", "Magical perfection", "Full of talent", "Expertise", "Cat burglar", "Artisan", "Alchemist", "On the path to power", "In search of perfection", "Wildcat Hunter", "Unique Weapons", "A Dangerous Fiancée", "Cancelled Wedding", "De Vespe Secret Archives"];

    assert.strictEqual(officialAchievementNames.length, 63, "sanity check on this test's own reference list");

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

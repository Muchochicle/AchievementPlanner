import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/a-total-war-saga-troy.js";

test("the A Total War Saga: TROY guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "a-total-war-saga-troy-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "a-total-war-saga-troy");

});

test("the A Total War Saga: TROY guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Campaign Victories",
            "Monsters, Battles & Faction Feats",
            "Divine Favour, Barters & DLC Factions",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 69-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /69 Steam achievements/);

});

test("every one of the 69 official A Total War Saga: TROY achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Homer's Favourite", "Your Likeness in the Sky", "King of the Bronze Age", "Bulwark of the Achaeans", "The Greatest Warrior", "Destiny Awaits", "Shepherd of the People", "Surpassed Tydeus", "Of the Shining Helm", "A Queen's Legacy", "Honour Restored", "Master of Trickery", "Godlike Alexandros", "Vengeance Incarnate", "Heir of Two Kingdoms", "Hound of Hell", "King of all Animals", "Immortal Serpent", "Bread Feeds War", "Good Boy!", "Broken Prophecy", "Poseidon's Wrath", "My Kingdom for a Horse", "A Deal They Can't Refuse", "Sole Heir", "Daughters of Ares", "All the Queen's Horses", "For Themiscyra!", "Reunited", "This is Total War", "Challenge Accepted", "The Rage of Achilles", "Face Me!", "Speak to the Divine", "Speak to the Dead", "The Host's Champion", "Say Cheese!", "Hidden Island", "Isolationist", "Protector of Ilion", "The Great Cause\t", "An Arrow to the Heel", "Making Sacrifices", "Realm Conqueror", "First!", "Odyssey", "Marriage Over Lust", "Apollo's Plague", "King of all Men", "Love and Beauty", "Healing and Music", "War Ensemble", "The Great Hunt", "Wisdom and Strategy", "Hammer of the Gods", "Protector of the Hearth", "The Sea's Favour", "Ruler of Olympus", "Bamboozle", "Yoink", "Let it Flow", "Tropaion", "Heroic Retinue", "The Adventurer King", "Fame Everlasting", "Doom that crossed the sea", "Thrace Triumphant", "The Old Gods Speak", "Countless Hosts of Thrace"];

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

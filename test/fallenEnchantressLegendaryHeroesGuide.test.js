import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/fallen-enchantress-legendary-heroes.js";

test("the Fallen Enchantress: Legendary Heroes guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "fallen-enchantress-legendary-heroes-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "fallen-enchantress-legendary-heroes");

});

test("the Fallen Enchantress: Legendary Heroes guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "First Steps & Bosses",
            "Victory Types & Factions I",
            "Champions, Quests & Playtime",
            "Legendary Hero Recruits & More Factions",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 54-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /54 Steam achievements/);

});

test("every one of the 54 official Fallen Enchantress: Legendary Heroes achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Monster Killer", "Defeated Sovereign in Battle", "Captured a City", "Built a City", "Recruited an NPC", "Defeated an Army", "Dragon Slayer", "Defeat the Lord Who Dwells Below", "Defeat the Pyre of Man", "Defeat the Ruin of Summer", "Defeat the Lord Who Levels Mountains", "Defeat the Guardian of the World's End", "Legendary Hero", "A Leader of Men", "A Great Seeker", "A Mighty Sorcerer", "Peacemaker", "Waiting Out the Clock", "Population Manager", "Rise of Altar", "Rise of Gilden", "Rise of Pariden", "Rise of Tarth", "Rise of Kraxis", "Rise of Magnar", "Rise of Resoln", "Rise of Yithril", "Hero", "Champion", "Adventurer", "Ratslayer", "Shopper", "Trader", "Experienced", "Expert", "Veteran", "Hardcore", "One...More...Turn....", "Urban Sprawl", "Expansionist", "Exploiter", "Explorer", "Exterminator", "Nice Pants!", "Forging Armies", "Guard from the Tomb", "The Desert Mage", "The Brood Warden Champion", "Ally from the Swamp", "Lord of Necromancy", "Darkling Allies", "Lady Umber's Assassin", "Rise of Capitar", "Rise of Umber"];

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

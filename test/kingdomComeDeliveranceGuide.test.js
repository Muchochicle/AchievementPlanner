import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/kingdom-come-deliverance.js";

test("the Kingdom Come: Deliverance guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "kingdom-come-deliverance-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "kingdom-come-deliverance");

});

test("the Kingdom Come: Deliverance guide has all 10 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Vice, Virtue & Skill Stats",
            "Merciful & More Milestones",
            "Skalitz & Prologue Secrets",
            "The End & Further Secrets",
            "From the Ashes & the Rattay Tourney",
            "The Amorous Adventures of Bold Sir Hans Capon",
            "Band of Bastards",
            "A Woman's Lot",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 82-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /82 Steam achievements/);

});

test("every one of the 82 official Kingdom Come: Deliverance achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Alcoholic", "Insomniac", "Fatso", "Anorectic", "Bookworm", "Edward Kelly", "Stealth Killer", "Hunter", "Bard", "King Charming", "Completionist", "Merciful", "Serial Killer", "Traveller", "Knightrider", "Ranger", "Pilgrim", "Thief", "Level Cap", "Fighter", "Sniper", "Haggler", "Scrooge", "Convict", "David Horak", "Gambler", "Blacksmith's Son", "Cavalier", "Awakening", "Buddy", "Ginger", "Runt", "Monk", "Bastard", "Conqueror", "Talmberger", "The End", "Firestarter", "Sinner", "Plague Doctor", "McLovin", "Casanova", "Judas", "Freud", "Master Huntsman", "Robber Baron", "Spoilsport", "Bad Trip ", "Virgin", "Hardcore Henry", "'Tis but a scratch", "Kingdom Did Not Come", "Bailiff", "Trial-and-Error", "Perfectionist", "Friends without Benefits", "Arena Master", "True Friend", "Wingman", "I Can Quit Anytime", "Lord Capon's Ghost", "Ledetchko Revenant", "Christian Burial", "Not-so-Christian Burial", "Tracker", "Chivalrous Soul", "Pinky Promise", "Torturer", "Mercenary's Honour", "Game Over", "Lost Trinket", "Saviour", "Death by Splinter", "Woman's Lot", "Bad Girl", "Like a Ghost", "You had one job!", "Voyeur", "Full House Sinner", "Infernal Justice", "Angel of Mercy", "Cleric's Pet"];

    assert.strictEqual(officialAchievementNames.length, 82, "sanity check on this test's own reference list");

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

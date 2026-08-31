import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/torchlight.js";

test("the Torchlight guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "torchlight-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "torchlight");

});

test("the Torchlight guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Progress, Wealth & Pet",
            "Enchanting, Quests, Gambling & Mods",
            "Combat, Bosses & Difficulty",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 66-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /66 Steam achievements/);

});

test("every one of the 66 official Torchlight achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["The Adventure Begins", "Master Smasher", "Beast of Burden", "Rich", "Deep Pockets", "Gibbed", "Deep Delver", "Epic Strike", "True Delver", "Angler", "Fisherman", "Fisher King", "Pet Trainer", "Sorcelator's Servant", "Enchanted", "Enchantment Overload", "Shape-Shifter", "Transmogrifier", "Fetch a Fair Price", "The Need for Greed", "Bum Luck", "Sir Mixes-a-lot", "Questor", "Down the Hatch", "Gambling Enthusiast", "Gambling Addict", "Gambling Fiend", "Mod Squad", "Mod Maniac", "Modpocalypse", "Lucky Gambler", "Pension Plan", "The Long Haul", "Passing the Torch", "Noble Lineage", "Line of Kings", "Ka-Chunk!", "Price of Loyalty", "Superstar", "Walkabout", "Tormented", "Trolling for Punishment", "Wabam!", "Supreme Slayer", "Over the Brink", "A Lich to Scratch", "Tree Hugger", "When this Town's a Rockin'", "Big and Green and Dead all Over", "Purple People Defeater", "Only a Master of Evil", "Perfect Victory", "Beast Slayer I", "Beast Slayer II", "Beast Slayer III", "Hardcore Victor", "Hardcore Hero", "Hardcore Champion", "Hardcore God", "Swift Execution", "Speed King", "Hat Trick", "Potion Whiz", "Cash for Trash", "The Horse Whisperer", "Universally Understood"];

    assert.strictEqual(officialAchievementNames.length, 66, "sanity check on this test's own reference list");

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

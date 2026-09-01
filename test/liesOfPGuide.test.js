import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/lies-of-p.js";

test("the Lies of P guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "lies-of-p-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "lies-of-p");

});

test("the Lies of P guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Weapons, Upgrades & Endings",
            "Combat & Base-Game Bosses",
            "Character Stories & Overture DLC",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 53-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /53 Steam achievements/);

});

test("every one of the 53 official Lies of P achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Real boy : They all lived happily ever after", "Free from the puppet string", "Rise of P", "The First Puppet", "Strongest Normal Weapon", "Strongest Special Weapon", "Strongest Legion Arm", "Extreme Potential", "Pianist of Krat", "Legion Arm Collector", "Special Weapon Collector", "Normal Weapon Collector", "Golden Melody", "Learning about Emotions", "Veteran Explorer", "End of Riddles", "First Lie", "Stargazer’s Guide", "Exploring Possibilities", "The Ultimate Defense Technique", "Fatal Blow", "The Bastards and the Sweepers", "Parade Master", "Scrapped Watchman", "King's Flame", "Fallen Archbishop", "The Delayed Match", "King of Puppets", "The Champion of Evolution", "Puppet-Devouring Green Monster", "Corrupted Parade Master", "Revenge of Black", "The Complete One", "The Awakened God", "Bear Gold Coin Fruit", "From Across the Rift", "The Story of the Prince", "The Story of the Refined Old Lady", "The Story of the One Who Dreamed", "The Story of One Father", "The Story of a Stranger Girl", "The Story of the Blue Butterfly", "The Rose's Memory", "Enduring Resolve", "True Combat Gear Collector", "Beyond Limitless Potential", "Memory's Melody", "To Be Human", "Tracker of Dark Secrets", "Puppeteer of Death", "Anguished Guardian", "The Blood Artist", "Honor and Revenge"];

    assert.strictEqual(officialAchievementNames.length, 53, "sanity check on this test's own reference list");

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

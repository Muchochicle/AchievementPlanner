import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/galaxy-on-fire-2.js";

test("the Galaxy on Fire 2 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "galaxy-on-fire-2-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "galaxy-on-fire-2");

});

test("the Galaxy on Fire 2 guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Early Combat & Survival Medals",
            "Trading, Booze & Exploration Medals",
            "Travel, Bombs & Aliens Medals",
            "Wealth, Command & Completion Medals",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 92-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /92 Steam achievements/);

});

test("every one of the 92 official Galaxy on Fire 2 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Veteran", "Survivor Bronze", "Survivor Silver", "Survivor Gold", "Geologist Bronze", "Geologist Silver", "Geologist Gold", "Adv. Geologist Bronze", "Adv. Geologist Silver", "Adv. Geologist Gold", "Killer Bronze", "Killer Silver", "Killer Gold", "Carrier Bronze", "Carrier Silver", "Carrier Gold", "Miner Bronze", "Miner Silver", "Miner Gold", "Adv. Miner Bronze", "Adv. Miner Silver", "Adv. Miner Gold", "Personal Need Bronze", "Personal Need Silver", "Personal Need Gold", "Barkeeper Bronze", "Barkeeper Silver", "Barkeeper Gold", "Garbage Man Bronze", "Garbage Man Silver", "Garbage Man Gold", "Space Tourist Bronze", "Space Tourist Silver", "Space Tourist Gold", "Explorer Bronze", "Explorer Silver", "Explorer Gold", "Handyman Bronze", "Handyman Silver", "Handyman Gold", "Engineer Bronze", "Engineer Silver", "Engineer Gold", "Addict Bronze", "Addict Silver", "Addict Gold", "Workaholic Bronze", "Workaholic Silver", "Workaholic Gold", "Globetrotter Bronze", "Globetrotter Silver", "Globetrotter Gold", "Tour Operator Bronze", "Tour Operator Silver", "Tour Operator Gold", "Ninja Bronze", "Ninja Silver", "Ninja Gold", "Nuclear Armament Bronze", "Nuclear Armament Silver", "Nuclear Armament Gold", "Alien Hunter Bronze", "Alien Hunter Silver", "Alien Hunter Gold", "Harum-Scarum", "Weapon Fanatic Bronze", "Weapon Fanatic Silver", "Weapon Fanatic Gold", "Looter Bronze", "Looter Silver", "Looter Gold", "Moneybags Bronze", "Moneybags Silver", "Moneybags Gold", "Chatterbox Bronze", "Chatterbox Silver", "Chatterbox Gold", "Commander Bronze", "Commander Silver", "Commander Gold", "Renegade", "Mason Bronze", "Mason Silver", "Mason Gold", "Void Terror", "Space Saver Bronze", "Space Saver Silver", "Space Saver Gold", "Naysayer", "Daredevil", "Tracker", "Champion"];

    assert.strictEqual(officialAchievementNames.length, 92, "sanity check on this test's own reference list");

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

import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/trine-enchanted-edition.js";

test("the Trine Enchanted Edition guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "trine-enchanted-edition-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "trine-enchanted-edition");

});

test("the Trine Enchanted Edition guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Level Completion & Experience Collection",
            "Skill Challenges & Bonus",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 33-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /33 Steam achievements/);

});

test("every one of the 33 official Trine Enchanted Edition achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Astral Introduction", "Academy Master", "Hallways Master", "Wolvercote Master", "Graveyard Master", "Caverns Master", "Crypt Master", "Dungeon Master", "Castle Master", "Forest Master", "Thicket Master", "Ruins Master", "Mines Master", "Village Master", "Forge Master", "Tower Master", "Master Collector", "Completed!", "What's next?", "Treasure Hunter", "What a View!", "Whoops!", "Better Than Developers!", "The Cool Way", "Survivalist", "Dead on arrival", "Still no fireball", "Undead have rights, too!", "Spring master", "Way Out of the Trine", "Summer Dip", "Winter Secrets", "Enchanted"];

    assert.strictEqual(officialAchievementNames.length, 33, "sanity check on this test's own reference list");

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

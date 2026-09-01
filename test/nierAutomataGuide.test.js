import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/nier-automata.js";

test("the NieR:Automata guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "nier-automata-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "nier-automata");

});

test("the NieR:Automata guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Route A & B: Story Beats",
            "Route C/D & the True Ending",
            "Collections, Upgrades & Combat Feats",
            "Jokes & Secrets",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 47-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /47 Steam achievements/);

});

test("every one of the 47 official NieR:Automata achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Resuscitated Body", "Vestiges of Prosperity", "It's a Healthy Baby Boy!", "We Await Your Next Visit", "Creation and Insurrection", "The Mechanical Kingdom", "Ruler of the Deep", "Those Who Love Humans", "Iron Soul", "One Battle Ends", "A New Battle Begins", "Final Wish", "Treacherous Blade", "Farewell, Pascal", "Justice", "Crime and Punishment", "Leaving for the New World", "Beautiful World", "The Minds That Emerged", "The Circle of Death", "Cherish Our Resources", "First Errand", "The Mercenary", "Information Master", "Destruction is My Job", "Chip Collector", "Weapons Maniac", "Tools of the Trade", "Inorganic Blade", "Supreme Support Weapons", "Fighting's Not My Thing", "A Scanner's Power", "Machines vs. Machines", "The Power of Hate", "Ruler of the Skies", "Harvest King", "Pod Hunter", "Desire Without Emotion", "Animal Rider", "A Round by the Pond", "Wait! Don't Kill Me!", "What Are You Doing?", "Not That I Mind...", "Come Take a Look!", "Naughty Children", "Transcendent Being", "Lunar Tear"];

    assert.strictEqual(officialAchievementNames.length, 47, "sanity check on this test's own reference list");

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

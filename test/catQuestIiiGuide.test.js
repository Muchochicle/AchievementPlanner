import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/cat-quest-iii.js";

test("the Cat Quest III guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "cat-quest-iii-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "cat-quest-iii");

});

test("the Cat Quest III guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Bosses, Bounties & Collections",
            "Puzzles, Dungeons & Spells",
            "Questlines & Secrets",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 30-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /30 Steam achievements/);

});

test("every one of the 30 official Cat Quest III achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Paws Over Tentacles", "Quack Goes the Ducky", "Rock on, Supurrstar!", "King of Pi-rats No More", "Furry Spicy yet Supurr Sweet", "Furst Bounty", "Bounty Domiewnator", "Armeowry Amateur", "Armeowry Enjoyer", "Armeowry Furshionista", "Ship Miewtenant", "Ship Furst Mate", "Ship Mewster", "Purrzzler", "Purroblem Solver", "Once Bitten, 8 Times Shy", "Purrsitively Golden", "Love is Furever", "Treasure Rummeowger", "Treasure Pouncer", "Treasure Expurrlorer", "Spellmewster", "Meowsterwork", "No Necromeowncy Here!", "A Painful Pawst, Avenged", "Happurrly Ever After", "Commewnity Helper", "My North Star was Always You", "Furst Secret", "Secret Purrlunderer"];

    assert.strictEqual(officialAchievementNames.length, 30, "sanity check on this test's own reference list");

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

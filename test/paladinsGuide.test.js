import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/paladins.js";

test("the Paladins guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "paladins-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "paladins");

});

test("the Paladins guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Kills, Mastery & Party",
            "Match Feats & Account",
            "Progression & Ranked",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 58-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /58 Steam achievements/);

});

test("every one of the 58 official Paladins achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Double Kills Bronze", "Double Kills Silver", "Double Kills Gold", "Double Kills Platinum", "Double Kills Diamond", "Champion Mastery I", "Champion Mastery II", "Champion Mastery III", "Champion Mastery IV", "Champion Mastery V", "Champion Mastery VI", "Champion Mastery VII", "Champion Mastery VIII", "Champion Mastery IX", "Champion Mastery X", "Survivor", "Boom Headshot", "Bronze Friends Forever", "Silver Friends Forever", "Friends Forever Gold", "Friends Forever Platinum", "Friends Forever Diamond", "Teamed Up Bronze", "Teamed Up Silver", "Teamed Up Gold", "Teamed Up Platinum", "Teamed Up Diamond", "Beta Player", "Untouched", "Questions Later", "From The Grave", "Hard Carry", "Well Trained", "Bounty Hunter", "Counter-Air Defense", "Give 110 Percent", "Gone Spelunking", "I Like Big Numbers", "Last One Standing", "Master Collector", "Not Like This", "Send Off", "Sniper", "A New Challenger", "Bullet Sponge", "Surgeon General", "Citizen of the Realm", "This is My Style", "Battle Thirsty", "To the Victor go the Spoils", "Millionaire", "Unstoppable", "Big Spender", "Pinnacle", "Witness to History", "Variety is the Spice of Life", "The Dedicated", "The Insane"];

    assert.strictEqual(officialAchievementNames.length, 58, "sanity check on this test's own reference list");

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

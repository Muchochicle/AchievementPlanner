import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/serious-sam-3-bfe.js";

test("the Serious Sam 3: BFE guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "serious-sam-3-bfe-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "serious-sam-3-bfe");

});

test("the Serious Sam 3: BFE guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Campaign & Difficulty",
            "Enemy Kill Feats",
            "Egypt, Secrets & Story Beats",
            "Co-op & Versus",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 62-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /62 Steam achievements/);

});

test("every one of the 62 official Serious Sam 3: BFE achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Serious Beginner", "Serious Sam", "Are You Serious!?", "Serious Run", "Ophthalmologist", "Cardiac Surgeon", "Chiropractor", "Kleer Wrestler", "Bug Hunt", "Arachnophobia", "Scorpion Slayer", "Load of Scrap", "Trick Shot", "Useful Trophy", "Berserker", "Old School", "Chain Explosion", "Kung-fu Fighter", "Wall of Bullets", "Apprentice Egyptologist", "Master Egyptologist", "Wanted Dead or Alive", "Get the hell off my ride!", "All Your Base Are Belong To Us!", "Problem solver", "Painful Divorce", "Mission completed", "Detroit Steel", "The doorman should wear a suit", "Rodeo Surfer", "Skewer", "Up Close and Personal", "Killer Jewelry", "Headsman", "Bone Crusher", "Circle of death", "Clay Pigeons", "Maintenance time", "Look, it's a secret", "Top Secret", "Classic Outfit", "Queen Hatshepsut", "Vista", "Co-op Beginner", "Co-op Master", "Coin-op Co-op", "Life Saver", "Gold Rush", "Deathmatch Beginner", "Deathmatch Master", "Look Ma, I won!", "Hammer Time", "Beast Hunter", "Flag Thief", "Instant Killer", "Last Man Standing", "Heavy Weight Champion", "Survivor", "Golden Survivor", "Christmas In Cairo", "Jewel of the Nile", "Reindeer Hunter"];

    assert.strictEqual(officialAchievementNames.length, 62, "sanity check on this test's own reference list");

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

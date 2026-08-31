import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/age-of-mythology-extended-edition.js";

test("the Age of Mythology: EE guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "age-of-mythology-extended-edition-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "age-of-mythology-extended-edition");

});

test("the Age of Mythology: EE guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Campaigns & Game Modes",
            "God Commanders & Foes",
            "Multiplayer & Battle Stats",
            "1-vs-N AI Gauntlets & Tale of the Dragon",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 70-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /70 Steam achievements/);

});

test("every one of the 70 official Age of Mythology: EE achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Ruler of the Trident", "Ruler of Atlantis", "Ruler of Gold", "Ruler of Knowledge", "Supremacy Certified", "Conquest Certified", "Lightning Certified", "Deathmatch Certified", "Treaty Certified", "Master of Supremacy", "Master of Conquest", "Master of Lightning", "Master of Deathmatch", "Master of Treaty", "Commander of Zeus", "Commander of Hades", "Commander of Poseidon", "Commander of Ra", "Commander of Isis", "Commander of Set", "Commander of Thor", "Commander of Odin", "Commander of Loki", "Commander of Kronos", "Commander of Oranos", "Commander of Gaia", "Foe of Zeus", "Foe of Hades", "Foe of Poseidon", "Foe of Ra", "Foe of Isis", "Foe of Set", "Foe of Thor", "Foe of Odin", "Foe of Loki", "Foe of Kronos", "Foe of Oranos", "Foe of Gaia", "Leader of the Fearless", "One Among the Eager", "Champion of the Community", "One Among the Flock", "Aimless Wonderer", "Remember the Fallen", "Annihilation", "Time to Rebuild", "Demolition", "Creating a Masterpiece", "Horror Unleashed", "Stone and Steel", "Eradicator of the Machine", "Defeat the Soldier", "Defeat the Squad", "Defeat the Troop", "Defeat the Platoon", "Defeat the Company", "Defeat the Battalion", "Defeat the Regiment", "Defeat the Brigade", "Defeat the Division", "Defeat the Army", "Defeat the Horde", "Hour of Alpacas", "Commander of Fu Xi", "Commander of Nü Wa", "Commander of Shennong", "Foe of Fu Xi", "Foe of Nü Wa", "Foe of Shennong", "Ruler of Dragons"];

    assert.strictEqual(officialAchievementNames.length, 70, "sanity check on this test's own reference list");

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

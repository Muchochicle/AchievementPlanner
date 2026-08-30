import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/wolfenstein-the-old-blood.js";

test("the Wolfenstein: The Old Blood guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "wolfenstein-the-old-blood-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "wolfenstein-the-old-blood");

});

test("the Wolfenstein: The Old Blood guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Campaign & Endings",
            "Nightmare Levels",
            "Challenge Maps & Collectibles",
            "Perk Unlocks",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 50-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /50 Steam achievements/);

});

test("every one of the 50 official Wolfenstein: The Old Blood achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Undercover", "Freedom", "Revenge", "Kessler saved", "Annette saved", "Hero", "Super hero", "Über hero", "Die, Grösse, die!", "German Alps nightmare", "Prison nightmare", "Docks nightmare", "Wolfenstein Keep nightmare", "Escape! nightmare", "Wulfburg nightmare", "Ruins nightmare", "Old town nightmare", "Guten tag!", "Research centre combat master", "Prison docks combat master", "Keep foyer combat master", "Cable car platform combat master", "Caves combat master", "Paderborn bridge combat master", "Wulfburg square combat master", "Workshop combat master", "Bathhouse combat master", "Graveyard combat master", "Paperboy", "Postman", "All that glitters", "Glittering gold", "The ecstasy of gold", "Gold master", "Eagle Eye", "Health upgrade I", "Health upgrade II", "Health upgrade III", "Armor upgrade I", "Armor upgrade II", "Ammunition upgrade", "Grenade belt", "Vampire", "Kampfpistole ammo storage upgrade", "Schockhammer clip upgrade", "Bombenschuss clip upgrade", "Carry heavy machinegun", "Reload mash", "Quick turn", "Tough Skin"];

    assert.strictEqual(officialAchievementNames.length, 50, "sanity check on this test's own reference list");

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

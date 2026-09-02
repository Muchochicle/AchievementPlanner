import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/stellar-blade.js";

test("the Stellar Blade guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "stellar-blade-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "stellar-blade");

});

test("the Stellar Blade guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        ["Overview","Story Bosses & Areas","Endings","Collectibles & Upgrades","Side Quests & Combat","New Game +","Suggested Order"]
    );

});

test("the Overview states the verified 45-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /45 Steam achievements/);

});

test("every one of the 45 official Stellar Blade achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["EVE Protocol","Camp Preparation","Abaddon","Corrupter","Gigas","Brute","Altess Levoire","Stalker","Juggernaut","Tachy","Behemoth","Abyss Levoire","Belial","Karakuri","Demogorgon","Raven","Return to the Colony","Cost of Lost Memories","Making New Memories","Can Collector","Nano Suit Collector","Records Collector","Lonely Fisherman","Box Hunter","Naytiba Researcher","Meticulous Explorer","Perfect Exospine","Perfect Blood Edge","Perfect Rechargeable Tumbler","Perfect Physical Enhancement","Perfect Beta Energy Enhancement","Thorough Technician","Beyond Fate","Sisterly Love","Beep!","Battlefield Martial Artist","Agile Gladiator","Silent Executioner","Naytiba Hunter","Relentless Destroyer","Revenging Agent","Cold-blooded Sniper","Cruel Liberator","Repeating Protocols","Infinite Blade"];

    assert.strictEqual(officialAchievementNames.length, 45, "sanity check on this test's own reference list");

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

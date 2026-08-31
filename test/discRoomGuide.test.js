import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/disc-room.js";

test("the Disc Room guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "disc-room-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "disc-room");

});

test("the Disc Room guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Gatekeepers & Golden Rooms",
            "Hard Mode, Survival & Exploration",
            "Abilities, Secrets & Antics",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 35-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /35 Steam achievements/);

});

test("every one of the 35 official Disc Room achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["STRONG SCIENCE", "VIOLENT NATURE", "CELESTIAL BODY", "PITCH BLACK", "BIG BANG", "GOLD I", "GOLD II", "GOLD III", "GOLD IV", "VOYAGER", "AGAIN", "I CAME I SAWED I CONQUERED", "WHO’S COUNTING? ", "MINIT", "HIGH HELL", "LET IT RIP", "GOTTA CATCH 'EM ALL", "EXPLORER I", "EXPLORER II", "PIONEER", "IN THE ZONE", "I AM THE ZONE", "I AM THE DISC", "ENIGMA", "MULTITASKER", "MULTICASKET", "POWER SURGE", "SPEED DEMON", "SKELETON REVIVAL", "TELEPORTER ACCIDENT", "THERE’S ENOUGH FOR EVERYBODY", "FLOORED", "THE WALLS HAVE EYES", "SPAWN KILL", "RAGEQUIT"];

    assert.strictEqual(officialAchievementNames.length, 35, "sanity check on this test's own reference list");

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

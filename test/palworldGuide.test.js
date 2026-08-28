import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/palworld.js";

test("the Palworld guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "palworld-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "palworld");

});

test("the Palworld guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Catching & Taming",
            "Base, Labor & Combat",
            "Exploration & Effigies",
            "Tower Sovereigns & Bosses",
            "The Endgame",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 75-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /75 Steam achievements/);

});

test("every one of the 75 official Palworld achievement names is mentioned somewhere in the guide", () => {

    // The full, official list this guide is built from
    // (backend/catalog/games/palworld.json).
    const officialAchievementNames = [
        "Hillside Sovereign", "Forest Sovereign", "Desert Sovereign", "Volcano Sovereign", "Astral Sovereign",
        "Beginning of the Legend", "Newbie Pal Tamer", "Intermediate Pal Tamer", "Skilled Pal Tamer", "Seasoned Pal Tamer",
        "Twilight Siren", "Eclipsed Siren", "Blossom Sovereign", "Incarnation of the Eternal Flame", "Exceptional Pal Tamer",
        "Overhunting", "Inhuman Act", "Legendary Celestial Dragon", "Holy Knight of Legend", "Dark Knight of Legend",
        "Legendary Steed of Ice", "Trail of the Castaway", "Palpagos Guru", "All for One", "Voice of Resentment",
        "Senior Adventurer", "Conqueror of the Sea", "Champion of the Palpagos Islands", "Sphere Craftsman", "Iron Heart",
        "Blood and Iron", "Feybreak Sovereign", "Invader from Space", "Palpagos Guardian", "Pal Labor Student",
        "Pal Labor Researcher", "Pal Labor Professor", "Novice Pal Dispatcher", "Elite Pal Dispatcher", "Freshman Surveyor",
        "Junior Surveyor", "Senior Surveyor", "Predator Hunter", "No-Fly Zone", "Novice Angler",
        "Seasoned Angler", "Veteran Angler", "Lunker Hunter", "Silver Champ", "Arena Champion",
        "Best Friends Forever", "Successful Infiltration", "Unstoppable Streak", "A Nose for Treasure", "Rookie Pal Slayer",
        "Alpha Pal Slayer", "King of Salvation", "Forest Guru", "Volcano Guru", "Desert Guru",
        "Snowy Mountain Guru", "Sakurajima Guru", "Feybreak Guru", "Sunreach Guru", "World Tree Guru",
        "Forest Traveler", "Island Traveler", "World Traveler", "Meddling With Mutation", "Hidden Potential",
        "Arena Legend", "Sunreach Sovereign", "Legendary Ocean King", "To the World Tree", "Savior of Palpagos"
    ];

    assert.strictEqual(officialAchievementNames.length, 75, "sanity check on this test's own reference list");

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

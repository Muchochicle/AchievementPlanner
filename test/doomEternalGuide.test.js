import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/doom-eternal.js";

test("the DOOM Eternal guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "doom-eternal-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "doom-eternal");

});

test("the DOOM Eternal guide has all 8 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Campaign & Bosses",
            "Upgrades & Collectibles",
            "Slayer Gates, Cheats & Extra-Life Modes",
            "BATTLEMODE",
            "The Ancient Gods Part One",
            "The Ancient Gods Part Two & Horde Mode",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 50-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /50 Steam achievements/);

});

test("every one of the 50 official DOOM Eternal achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Doomsday", "The Hunters Became the Hunted", "Interplanetary Fracking", "Thumbs Down", "Reforged and Refueled",
        "Nontraditionalist", "Iconoclast", "The Once and Future Slayer", "Treasure Hunter", "Master of Fasting",
        "Running Up the High Score", "Crystal Craving", "King of the Crystals", "This One's my Favorite", "They're ALL My Favorite",
        "Homemaykr", "Extra Extra Lives", "Reforged the Genie Lamp", "Metal Head", "Playset Sold Separately",
        "If Only I Could Read…", "Bonus Stage", "Breaker of Gates", "Gunpletionist", "Meet Your Unmaykr",
        "Darn It, They Keep BREAKING", "Mix and Match", "Fight Like Hell", "Blood Bath", "Man vs Monsters",
        "Weapons Expert", "Truce between Demons", "It's a Magic Number", "Torrential Pain", "To Take a Life Sphere",
        "Regime Change", "1-Upsmanship", "Lucky Charm Bracelet", "Hypersonic", "Required Reading",
        "Crystal Spelunker", "Cross the Threshold", "Siege the Day", "Tougher Than Nails", "Rest Your Weary Fists",
        "Live Die Reload", "Critical Literature", "Let's Play", "Reinvent the Weapon Wheel", "Game Over"
    ];

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

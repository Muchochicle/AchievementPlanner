import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/shadow-of-mordor.js";

test("the Middle-earth: Shadow of Mordor guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "shadow-of-mordor-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "shadow-of-mordor");

});

test("the Middle-earth: Shadow of Mordor guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Progression, Weapons & Collectibles",
            "Uruk Manipulation & Combat Feats",
            "Beasts, DLC Challenges & Endgame",
            "Hidden Achievements",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 74-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /74 Steam achievements/);

});

test("every one of the 74 official Middle-earth: Shadow of Mordor achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Paths of the Dead", "Crowned with Living Light", "Stinking Rebels", "The Maker's Bow", "Legend of the Maker",
        "Gorthaur the Cruel", "The Last Shadow", "Legend of Shadow", "Height of Despair", "You Will Obey",
        "Black Celebration", "Memories of Eregion", "The Bright Master", "The Spirit of Mordor", "Scout of the Morannon",
        "Thrill of the Hunt", "The White Rider", "Beyond Hope", "Divide and Conquer", "To Rule them All",
        "A New Master", "Bearer of the Shining Lamp", "Ranger of Ithilien", "Master of the Wilds", "The Free Folk",
        "Liberator", "Repaid in Blood", "Shadows of the Ancient Past", "Ratbag the Great and Powerful", "No Power in Numbers",
        "Fire of Justice", "Legend of Vengeance", "The White Wizard", "The Hand is Severed", "For My Brother",
        "Rise and Fall", "The Hammer Falls", "Burning Vengeance", "And it Burns, Burns, Burns", "Unleashed",
        "Fly you fools!", "Jaws of Death", "Iron of Death", "A Graug's Heel", "Power Vacuum",
        "Strike True", "Paid in Blood", "The Cold Light", "Lord and Master", "A Mighty Doom",
        "The Tower Crumbles", "A Short Introduction", "The Most Dangerous Game", "Jaws of Shadow", "Wretched Retch",
        "Ghûls Gone Wild", "Rattle the Hive", "O Mother, Where Art Thou?", "I Had To Put Him Down", "The Flames Make It Go Faster",
        "Nom Nom Nom!", "Hot Flashes", "The Collector", "The Hunt is my Mistress", "Betrayed",
        "The Scouring of Mordor", "Burning Shadow", "Dominion", "Battle Forged", "From Shadow to Shadow",
        "The Silver Fist", "Eregion Reforged", "Beyond Epic", "Lord of the Ring",
    ];

    assert.strictEqual(officialAchievementNames.length, 74, "sanity check on this test's own reference list");

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

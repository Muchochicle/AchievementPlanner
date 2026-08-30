import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/game-of-thrones-telltale.js";

test("the Game of Thrones (Telltale) guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "game-of-thrones-telltale-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "game-of-thrones-telltale");

});

test("the Game of Thrones (Telltale) guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Episodes 1-2: Iron From Ice & The Lost Lords",
            "Episodes 3-4: The Sword in the Darkness & Sons of Winter",
            "Episodes 5-6: A Nest of Vipers & The Ice Dragon",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 48-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /48 Steam achievements/);

});

test("every one of the 48 official Game of Thrones (Telltale) achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Through the Night", "Justice or Mercy?", "A Long Road Ahead", "Defiance or Diplomacy?", "A Lord's Judgement", "A Lord's Depute", "A Lord's Reception", "Squire", "A Ransom's Reward", "Fight for Life", "Unfamiliar Faces", "Strength of Mind", "The Pressures of Family", "Love and Hostility", "Initiation Completed", "Knight", "Storied Sights", "Brothers", "Garrisons", "Rendezvous", "Relief for the Parched", "Intentions Known", "Your Grace", "Master of Arms", "The Old, the True, the Brave", "None so Wise", "Pride and Purpose", "Honed and Ready", "Ever Vigilant", "Righteous in Wrath", "The Sun of Winter", "Castellan", "Set Down Our Deeds", "Here We Stand", "We Light the Way", "We Do Not Sow", "As High as Honor", "Unbowed, Unbent, Unbroken", "Family, Duty, Honor", "Grand Maester", "Ours is the Fury", "Our Blades are Sharp", "Growing Strong", "Hear Me Roar!", "Fire and Blood", "Winter is Coming", "Iron from Ice", "Sentinel"];

    assert.strictEqual(officialAchievementNames.length, 48, "sanity check on this test's own reference list");

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

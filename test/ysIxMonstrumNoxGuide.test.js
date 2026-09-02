import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/ys-ix-monstrum-nox.js";

test("the Ys IX: Monstrum Nox guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "ys-ix-monstrum-nox-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "ys-ix-monstrum-nox");

});

test("the Ys IX: Monstrum Nox guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        ["Overview","The Story","The Monstrum","Endgame Challenges","Balduq 100%","Progression & Combat","Suggested Order"]
    );

});

test("the Overview states the verified 54-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /54 Steam achievements/);

});

test("every one of the 54 official Ys IX: Monstrum Nox achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["King of the Monstrums","Cartographer","Seeker of Fortune","Good Samaritan","Debonair Socialite","Monster Zoologist","Material Girl","I Would Walk 300 Krimelye","Ambassador of the Dandelion","Hermetic Bastion","Fields of Blue","Art Critic","Intrepid Tourist","Shopaholic","Twilight Guardian","Errant Millionaire","Haute Cuisine","Virtuoso","Dressed to Kill","Golden Anvil","Apex Predator","Culling the Herd","Lemures Exterminator","Heartbreaker","Impervious","Untouchable","Overdrive","Showstopper","Zenith of the Grimwald","Conqueror of the Nox","Vanquisher of the Nox","Crimson King, the Radiant","White Cat, the Nimble","Hawk, the Peerless","Doll, the Resplendent","Raging Bull, the Unyielding","Renegade, the Cunning","Greased Lightning","Fleeting Mirage","Paragon","Indomitable Champion","Nightmare Survivor","Banisher of Dawn","To Freedom","Adol, the Fugitive","Monstrum Nox","The White Cat's Melancholy","The Feral Hawk's Fury","The Doll's Search","The Raging Bull's Treasure","The Renegade's Secret","Capriccio of the Prison","Thus Spoke the Alchemist","Monstrum Nox"];

    assert.strictEqual(officialAchievementNames.length, 54, "sanity check on this test's own reference list");

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

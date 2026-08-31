import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/rise-of-the-triad.js";

test("the Rise of the Triad guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "rise-of-the-triad-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "rise-of-the-triad");

});

test("the Rise of the Triad guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Episode & Level 100%",
            "Bosses & Difficulty",
            "Combat & Challenge Feats",
            "666-Kill Weapon Mastery",
            "Secrets & Oddities",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 80-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /80 Steam achievements/);

});

test("every one of the 80 official Rise of the Triad achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["In the Thick of It", "Burned and Amazed", "Too Much Room", "Spring Surprise", "General Darian's Lair", "Buried in a Lunchbox", "Assault the Base", "Into the Castle", "You're Tearing Me Apart!", "Spiraling In", "Four Way Chamber", "Look Ma! No Legs!", "Do You Even Stand?", "Breach the Castle", "Robotricks", "Down and Over", "Dead in 5 Seconds", "Clear and Present Dangers", "Know Thine NME", "Enemosity", "What Lies Beneath", "Monky Business", "Fire and Brimstone", "Backfire", "Circles of Fire", "El Oscuro", "Cult Following", "Cult Classic", "1 On 1", "Weak Legs", "Robo Nono", "Deck the Hall", "Walk in the Park", "Over Easy", "With a Vengeance!", "Old School", "Knife Party", "Beaglefaaaace!", "Raining Blood", "Dat Nostalgia", "Slow Your Roll, Bro", "Consider This An Intervention", "Aaron the Porridge Baron", "I'm a Plumber By Trade", "This is my Doomstick!", "Ludicrosity", "ATGM", "Head Hunter", "Steppin' Razer", "Sausage Fest", "Gib Fest", "Collateral Damage", "Seven Ten", "Rocket Scientist", "Munchies", "Juiced", "Tequila", "Spray and Pray", "Rock-It Man", "Hot Blooded", "Double Vision", "Shit Faced", "You Shall Not Pass", "Nukem", "Global Warming", "You're The Dog Now, Man!", "Judgement Day", "It's Like DLC, But Free!", "Come at me World", "Executioner", "You Suck", "WARP ZONED", "Holy Shit", "Shop Smart, Shop S Mart", "Grandma's Boy", "That's Dope", "Bonus Bonus", "Tryhard", "Fool Me Once", "Triple Triad"];

    assert.strictEqual(officialAchievementNames.length, 80, "sanity check on this test's own reference list");

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

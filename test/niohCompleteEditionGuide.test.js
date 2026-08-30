import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/nioh-complete-edition.js";

test("the Nioh: Complete Edition guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "nioh-complete-edition-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "nioh-complete-edition");

});

test("the Nioh: Complete Edition guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Main Campaign & Weapon Mastery",
            "Crafting, Collectibles & Side Content",
            "DLC: Dragon of the North, Defiant Honor & Bloodshed's End",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 79-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /79 Steam achievements/);

});

test("every one of the 79 official Nioh: Complete Edition achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["You Are Nioh", "A Long Journey Begins", "They Call Him Anjin", "An Agreement Forged", "Wandering Spirit", "A Question of Intentions", "Onward to a Decisive Battle", "The Battle Ends", "A True Samurai", "Freedom Restored", "Battle's End", "Making Rounds", "The Beginning of a Samurai", "Full-fledged Samurai", "Ultimate Pro", "Sword Master", "Dual Sword Master", "Spear Master", "Axe Master", "Kusarigama Master", "Ninjutsu Master", "Onmyo Magic Master", "Disguiser", "Fashionista", "Refashion", "Latest Masterpiece", "Legendary Swordsmith", "Regular Smith Customer", "Master of Quality", "Teamwork", "Yokai Telepathy", "Master of Chaos", "Twilight Walker", "Spa Healer", "Divine Obtainer", "Yokai Quelling Master", "Spa Lover", "Gesture Master", "Kodama Leader", "Friend of Guardians", "Dungball Roller", "Ugly Fellow", "Keeper of the Flame", "Ressurector of the Hiragumo", "Nue Slayer", "End Times", "A Reunion with Hanzo", "Awakened Ambition", "The Smoldering Flames of War", "Oshu Guide", "Odachi Master", "The Chosen One", "Hot Spring Enthusiast", "Female Impersonator", "Eluding the Dragon", "Conqueror of Aoba Castle", "Good Listener", "Infiltrating Sanada Maru", "Gesture of Reconciliation", "Battlefield Guide", "Tonfa Master", "Cleanliness is Next to Godliness", "Tonfa Triumph", "Master of the Twin Sticks", "British Militarism", "Will of the Sanada", "From Heaven on High", "Holy Trinity", "Spirit Stones Run Amok", "To Yodogimi's Side", "Turmoil's End", "Wrinkly Soaker", "The Ultimate Guide", "Battle-Hardened Veteran", "The Master's Master", "Journey into The Abyss", "Cannon Fodder", "Ornithicide", "The Sinister Arts"];

    assert.strictEqual(officialAchievementNames.length, 79, "sanity check on this test's own reference list");

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

import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/rage.js";

test("the RAGE guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "rage-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "rage");

});

test("the RAGE guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Gadgets & Combat Feats",
            "Vehicles, Cards & Minigames",
            "Campaign Dungeons & Progression",
            "Legends of the Wasteland & Multiplayer",
            "The Scorchers",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 60-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /60 Steam achievements/);

});

test("every one of the 60 official RAGE achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Arts and Crafts", "Tinkerer", "Passive Aggressive", "Three Birds, One Bomb Car", "Keep 'Em Coming", "Mechanocide", "Jetpacker", "Silent But Deadly", "Hat Trick", "Decapathon", "Open Minded", "Jumper", "Gotta Have 'Em All", "Master Chef", "Hardest Deck", "JACKPOT!", "Just a Flesh Wound", "Deliverance", "Minigamer", "Lead Foot", "Rage Cup", "Demolition Man", "It's Good!", "Roadkill", "Ghost Buster", "Waste Management", "Gladiator", "It's Alive!", "Wellness Plan", "Debunked", "ytiC daeD", "Jail Break", "Vault Assault", "Power Struggle", "Decrypted", "Mutie Blues", "Bringin' Home the Bacon", "Mr. Oddjob", "Dev Graffiti", "Hey, not too rough", "Hurt me plenty", "Ultra-violence", "RAGE Nightmare", "Obsessive Compulsive", "The Legend Begins...", "Anthology", "A True Legend", "No Room for Sidekicks", "Fresh Meat", "MVP", "Night Terrors", "Cavernous Stumble", "Plans Refined", "Thrash Canyon", "Fired Up!", "Lucky  Charms", "Foursome", "Wall Hack", "Rebar Pie", "Rite of Passage"];

    assert.strictEqual(officialAchievementNames.length, 60, "sanity check on this test's own reference list");

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

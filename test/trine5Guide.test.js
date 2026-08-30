import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/trine-5.js";

test("the Trine 5 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "trine-5-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "trine-5");

});

test("the Trine 5 guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Level Completions",
            "Collectibles",
            "Trick Feats & Hidden Secrets",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 62-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /62 Steam achievements/);

});

test("every one of the 62 official Trine 5 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Quiet as a mouse", "Stone into sand", "Solitary spa time", "Cake and betrayal", "Means to an end", "Shady shortcut of a thief", "The Great Council", "The shameful Villains of Trine", "Trapped and forgotten", "Watery Woes", "Goodbye, Sweet Gems", "Some climbing to do", "Barbara! We're coming!", "The Autumn Light", "The Swamp Witch", "Memoirs of a squire", "Wings and Metal and Hot Air", "Lampaca Lands", "My Humble House", "The Empty Throne", "The Clockwork Conspiracy", "Checking out Everything", "The Haunted Hunt", "More than Soap Bubbles", "The Juiciest Fruits", "The Thoroughfare Tracking", "The Shady Spoils", "Combing Through the Castle", "Treasures from the Tower", "Escaping, yet exploring", "Casting the Hook", "Leaving No Stone Unturned", "Looking High and Low", "Gazing Stars", "Woodsy Wisdom", "Scouting the Swamp", "Knight's Quest", "Shipwide Search", "Floating Bounty", "Palace Pursuit", "Experienced Heroes", "The Postmaster", "The Fashionmonger", "The Gossip", "Boreal Bowling", "Ferocious Flora", "Ace Boom-Boom", "Go Out for a Spin", "Made of Sugar", "Fragile: Handle with Care", "As Luck Would Have It", "The Famous Box Wizard", "Driving Out the Evil", "The Red Rose Inn Takeout", "Frolicking Fungi", "Tentacle Tag", "Friends in High Places, literally", "Flimflam Doppelgangers", "One Fell Swoop", "See-through Fisticuffs", "Better than Fireballs", "Sledding Stretch"];

    assert.strictEqual(officialAchievementNames.length, 62, "sanity check on this test's own reference list");

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

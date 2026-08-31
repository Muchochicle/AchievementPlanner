import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/oceanhorn-monster-of-uncharted-seas.js";

test("the Oceanhorn guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "oceanhorn-monster-of-uncharted-seas-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "oceanhorn-monster-of-uncharted-seas");

});

test("the Oceanhorn guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Early Adventure & Combat",
            "Puzzles, Feats & Shop",
            "Adventurer Levels",
            "Late-Game & Fishing",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 63-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /63 Steam achievements/);

});

test("every one of the 63 official Oceanhorn achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Pocket Money", "Smart Guy", "Not Far from Tree", "Frutti di Terra", "Fire Walk with Me", "Seasnake", "First Piece", "Exterminator", "Rusty's Treasure", "Tough as a Boot", "Crimson Collector", "Down for Swimming", "Legend", "Cosmopolitan", "Encyclopedia Monstrum", "Unspawn", "Blockbuster", "Vitality", "Blast'em!", "Scholar", "Champion from Below", "Hat Trick", "Train Wreck", "Still Going", "Bouncer", "Ceramic Killer", "Making Friends", "Secret Sword Art", "Bomber Archeologist", "Fabled Gardener", "Hard Worker", "Town Sheriff", "Hey, Big Spender!", "Wizard", "Old Enemy", "Fast Blade", "Sticky Finger", "Shish Kebab", "Honey Man", "Traveler", "Wayfarer", "Pilgrim", "Rookie Adventurer", "Adventurer", "Pathfinder", "Spellbinder", "Explorer", "Voyager", "Vanguard", "Centurion", "Knight of Arcadia", "Master", "Archmage", "Witness", "Sleeping Giant", "Secret Passage", "Catch Sol Fish", "Catch Blue Fin", "Catch Fireback", "Catch Arcadian Pike", "Catch Goliath", "Catch Ghost Fish", "Catch Botfish"];

    assert.strictEqual(officialAchievementNames.length, 63, "sanity check on this test's own reference list");

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

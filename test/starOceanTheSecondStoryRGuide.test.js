import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/star-ocean-the-second-story-r.js";

test("the STAR OCEAN THE SECOND STORY R guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "star-ocean-the-second-story-r-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "star-ocean-the-second-story-r");

});

test("the STAR OCEAN THE SECOND STORY R guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        ["Overview","Getting Started & Story","Party Members","Battle & Skills","Exploration, Minigames & Endings","Suggested Order"]
    );

});

test("the Overview states the verified 51-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /51 Steam achievements/);

});

test("every one of the 51 official STAR OCEAN THE SECOND STORY R achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Master of the Star Ocean","Visitor from Afar","A Fateful Encounter","The Evil Stone","Kidnapped No More","A Growing Experience","Whatever the Outcome...","The Ore of Hope","Revenge!","An Otherworldly Paradise","Blue Wings Racing through the Sky","The Warmth of Long Ago","A Crack in the Seams","The Final Battle Awaits!","Hero of Light","Hope of Nede","Angel beneath the Earth","Rapturous Angel","The Destroyer's Truth","The Sultry Symbologist","The Cursed Swordsman","The Spitfire Creator","The Young Inventor","The Scholarly Pharmacist","The Fiery and Fixated Aristocrat","The Itinerant Archaeologist","The Lone Wolf Swordsman","The Scientific Whiz Kid","The Gentlehearted Zoologist","The Hot-Blooded Journalist","The Gang's All Here","Trustworthy Forerunner","Now I'm Really Ticked Off!","Let's Do This as a Team!","Time to Hone Our Skills!","Let's Make Something!","Tearful Bunnies","Astute Angler","Intergalactic Thief","Super Duper","The Almighty","Steady Progress","Personal Relations","Place of Interest","Five-Star Chef","Outstanding Insight","The Wanderer's Way","Heroic Feet","Seven-Colored Voices","Intertwined Futures","The Wise Are No Match for the Grind"];

    assert.strictEqual(officialAchievementNames.length, 51, "sanity check on this test's own reference list");

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

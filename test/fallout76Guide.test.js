import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/fallout-76.js";

test("the Fallout 76 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "fallout-76-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "fallout-76");

});

test("the Fallout 76 guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Main Story & Early Quests",
            "Events, Survival & Exploration",
            "Wastelanders & Content Updates",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 72-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /72 Steam achievements/);

});

test("every one of the 72 official Fallout 76 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Reclamation Day!", "First Contact", "Final Departure", "Second Helpings", "Into the Fire", "Recruitment Blues", "Heart of the Enemy", "Key to the Past", "Coming to Fruition", "Bunker Buster", "One of Us", "Officer on Deck", "Happy C.A.M.P.er", "We Must Rebuild", "Appalachian HOA", "Mistress of Mystery", "Personal Matters", "Queen of the Hunt", "Monster Mash", "Scorched Earth", "Breach and Clear", "Never Go it Alone!", "Second Skin", "A Fighting Chance", "Fallout Forever", "LITerally", "Ground Zero", "Perked Up", "Gimme Gimme!", "Code Cruncher", "Monet of Murder", "Tested Mettle", "A Real Challenger", "Field Medic", "Moneybags", "Retro Now", "Giant Slayer", "Pioneer Scout", "Bounty Hunter", "Kill or Be Killed", "Good Grief!", "Pest Control", "Junker Funk", "Photo Bomber", "Ain't He the Cutest?", "Shwag", "Wild West Virginian", "Appalachian Trailblazer", "American Hero", "I Am Become Death", "Wayward Child", "Overdue Reunions", "Go for the Gold", "A Golden Future", "Wish Upon A Star", "Behind the Curtain", "A Solid Foundation", "Friends in Low Places", "Gold Rush", "The New Fort Knox", "Steel Brethren", "Smooth Operator", "Gold Star Crafter", "Welcome To The Pitt", "Seeking Refuge", "Troglodiced", "America’s Playground", "Rip and Tear", "The House Always Wins", "Community Service", "Devil's Bargain", "Weed Killer"];

    assert.strictEqual(officialAchievementNames.length, 72, "sanity check on this test's own reference list");

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

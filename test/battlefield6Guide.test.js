import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/battlefield-6.js";

test("the Battlefield 6 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "battlefield-6-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "battlefield-6");

});

test("the Battlefield 6 guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Campaign",
            "Campaign Secrets",
            "Multiplayer",
            "REDSEC: Battle Royale & Gauntlet",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 53-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /53 Steam achievements/);

});

test("every one of the 53 official Battlefield 6 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Stand Alone", "Rock of Gibraltar", "Devil in the Dark", "Secret Service", "High Roller", "Damned If You Do", "Cloak and Dagger", "In Memoriam", "Dogs of War", "Hounds of War", "Wolves of War", "Pack Leader", "Peak Performance", "Liquidator", "One Stone", "Armor Annihilation", "End of an Era", "Efficiency", "Deep-Six", "Sidearm Savant", "Looks Like A Nail", "Bullseye Blitz", "Roadside Assistance", "Being Watched", "No Reinforcements", "Private First Class Montes", "Lance Corporal Matkovic", "Sergeant Redford", "Command and Conquest 2", "Front line ", "Super Bomb man", "Five by Five", "Wrench Monkey", "Stolz der Nation", "A Joyful Nurse", "Medal of Honor", "Heavy Weaponry", "1200", "Road Rash", "A Little C-4 Knocking on Your Door", "First Blood 2", "Punished", "May the Odds Forever Be in Your Favor", "Here's Your Birthday Present ", "Collector", "Stone Cold", "Rise from Your Grave", "Army of Two", "Never-Ending Game", "Everybody Fights, Nobody Quits", "Mission Accepted", "Dog of War", "Mozambique Here!"];

    assert.strictEqual(officialAchievementNames.length, 53, "sanity check on this test's own reference list");

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

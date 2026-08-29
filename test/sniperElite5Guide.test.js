import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/sniper-elite-5.js";

test("the Sniper Elite 5 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "sniper-elite-5-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "sniper-elite-5");

});

test("the Sniper Elite 5 guide has all 9 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Campaign",
            "Multiplayer & Survival",
            "Weapon Mastery",
            "Combat Techniques",
            "Collectibles & Map Secrets",
            "Season Pass Missions",
            "Hidden Achievements",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 71-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /71 Steam achievements/);

});

test("every one of the 71 official Sniper Elite 5 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Meeting Resistance", "Confirming Suspicions", "The Kraken Wakes", "It's Starting to Crack", "Change the Channel",
        "Taking it Back", "Target America", "The Kraken Sleeps", "Can't Outrun A Bullet", "Climbing the Ladder",
        "Liberté", "Best of the Best", "No Stone Unturned", "Opposing Force", "Enemy at the Gates",
        "Fields of Glory", "Just a Flesh Wound", "Organ Grinder", "Strategist", "Master of Pistols",
        "Master of Secondaries", "Master of Rifles", "Master-at-arms", "Gunslinger", "Skirmisher",
        "Sharpshooter", "The Long Game", "Set Europe Ablaze", "Precision Is Key", "Out of Scope",
        "Rigged to Blow", "My Little Friend", "Explosive Efficiency", "Lord of War", "Die Nussknacker Sweet!",
        "Resourceful", "Der Geist", "As quiet as a mouse", "Close Quarters", "Snake in the Grass",
        "From Paris with Love", "Burn after reading", "Souvenir hunter", "Eagle Eyed", "Tinkerer",
        "It'll Buff Right Out", "Locomotion Commotion", "Up close and personal", "Road Rage", "Don't hold your breath",
        "Brains of the Operation", "Sight Beyond Sights", "Shoot for the Moon", "Führerious Repetition", "Reich To The Point",
        "From Führer Away", "Covert Elimination", "Alpha", "Herr Today, Gone Tomorrow", "Operation Foxley",
        "Das Familienjuwel", "Last Resort", "Siegebreaker", "Ghost of Falaise", "Operation Overlord",
        "If You Go Down To The Woods Today", "Fight Another Day", "Stroll in the Woods", "Shipbreaker", "Sink or Swim",
        "Going Overboard",
    ];

    assert.strictEqual(officialAchievementNames.length, 71, "sanity check on this test's own reference list");

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

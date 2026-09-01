import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/tempest-rising.js";

test("the Tempest Rising guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "tempest-rising-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "tempest-rising");

});

test("the Tempest Rising guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "GDF Campaign",
            "Dynasty Campaign",
            "Unit & Ability Mastery",
            "Skirmish & Multiplayer",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 98-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /98 Steam achievements/);

});

test("every one of the 98 official Tempest Rising achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Signal Lost", "Signal Lost +", "The Hornet's Nest", "The Hornet's Nest +", "Paradropped", "Paradropped +", "Retaliation", "Retaliation +", "The Pass", "The Pass +", "Pull That Base Apart", "Pull That Base Apart +", "Public Relations", "Public Relations +", "The Ancient Basin", "The Ancient Basin +", "Ancient Power", "Ancient Power +", "The Fall of Alexandria", "The Fall of Alexandria +", "Heart of Glass", "Heart of Glass +", "GDF Recruit", "GDF Sergeant", "GDF Colonel", "GDF General", "Harvest The Tempest", "Harvest The Tempest +", "The Informant", "The Informant +", "Redirection", "Redirection +", "Where it Hurts", "Where it Hurts +", "Rat Catcher", "Rat Catcher +", "Harvesting Duty", "Harvesting Duty +", "Sins of the Son", "Sins of the Son +", "Buried", "Buried +", "Power of the Tempest", "Power of the Tempest +", "The Fall of a Dynasty", "The Fall of a Dynasty +", "Fire Of The Gods", "Fire Of The Gods +", "Dynasty Conscript", "Dynasty Field Officer", "Dynasty Major", "Dynasty Minister of War", "Deprived", "Western BBQ", "Clay Pigeons", "Squatters Rights", "Dude! Where's my car?", "Making Bacon Pancakes", "Marked for life", "Not a step back!", "Firewatch", "Plowing the Fields", "High Voltage!", "Reduce, Reuse, Recycle!", "Road paved with bad intentions", "I'm a mechanical man", "What's mine is mine, what's yours is now mine too", "Drive By Mechanic", "Same-Day Delivery", "Doctor's Visit", "Cloudy with a Chance of Explosions", "Hidden in Plain Sight", "Keep rollin', rollin'", "Hovering Hammer of Doom", "Base-Builder’s Fiesta", "The Ultimate Silo-fest", "Air Traffic Controller", "Fortress of Solitude", "Tempest Hoarder", "The Great Explosive Barrel Massacre", "You Can't See Me", "Multitasker", "Marked for Death", "Bug Zapper", "Pinata Party", "Rambo", "Obstacle Course", "Boot Camp", "Live Fire Exercise", "Conscription", "Training Grounds", "Academy of War", "Last Man Standing", "Going Commando", "Partying like its 1998", "The Midas Touch", "Around the block", "Participation Trophy"];

    assert.strictEqual(officialAchievementNames.length, 98, "sanity check on this test's own reference list");

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

import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/dead-rising-3.js";

test("the Dead Rising 3 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "dead-rising-3-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "dead-rising-3");

});

test("the Dead Rising 3 guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Kill Counts, Chapters & Bosses",
            "Progression, Crafting & Side Content",
            "DLC: Operation Broken Eagle & Fallen Angel",
            "DLC: Chaos Rising & The Last Agent",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 88-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /88 Steam achievements/);

});

test("every one of the 88 official Dead Rising 3 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Zombie Killer", "Zombie Butcher", "Zombie Slayer", "Master of Massacre", "Genius of Zombie Slaying", "Left 100,004 Dead", "Starter", "Quarantined", "Morgue-ified", "Family Man", "Happy Camper", "Day at the Museum", "The Doctor is Out", "Them's the Facts", "Complete Package", "Lusty", "Greedy", "Slothful", "Prideful", "Gluttonous", "Wrathful", "Envious", "Apprentice", "Expert", "Maxed!", "Planner", "Journeyman", "Engineer", "Master Builder", "Specialist", "Gang Banger", "Be a Dick!", "T.I.O.D. Disciple", "Duct Tape Master", "Customizer", "Master Mechanic", "A Little Ambition", "Ladder Climber", "Nightmare Master", "Prestigious", "Almost Famous", "Prestige Hound", "Certified Survivalist", "Survival Training Specialist", "Survival Training Master", "Sideswiped", "Local Hero", "Man of the People", "Help Wanted", "Collector", "Driven", "Fashion Plate", "Eyes in the Sky", "Counter Terrorist", "Live to Fight Again", "Rest In Peace", "Covering The Traces", "Cleaning House", "Delivery Man", "Eagle Has Landed", "Duty Or Death", "No Peeking!", "Burn Baby Burn", "Guardian Angel", "Med Tech", "Talk It Out", "Hall Monitor", "Well Stocked", "Shakedown", "Angel Gets Her Wings", "Stick it to the Man", "The Finer Things", "Add to The Collection", "Fly The Coop", "Throwing Down the Gauntlet", "Builder's Apprentice", "Hunter and the Hunted", "Hawg Heaven", "Fit to Lead", "Bag of Chips", "Bootleg Operator", "Sworn to Protect", "Ashes to Ashes", "Out With The Bad", "Hacking the Hacker", "Sourced", "Kane's Last Words", "Agent of Justice"];

    assert.strictEqual(officialAchievementNames.length, 88, "sanity check on this test's own reference list");

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

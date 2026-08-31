import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/motorsport-manager.js";

test("the Motorsport Manager guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "motorsport-manager-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "motorsport-manager");

});

test("the Motorsport Manager guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Team & Driver Management",
            "Championships & Restrictions",
            "Named Teams, Challenges & Endurance",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 73-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /73 Steam achievements/);

});

test("every one of the 73 official Motorsport Manager achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Millionaire's Club", "Top Grid Guru", "Backmarker to Best", "Welcome Aboard!", "Retired", "Kaching!", "Every Dog Has Its Day", "Track Literate", "\"In Order to Finish First, You First Have To Finish.\"", "Hat-Trick", "Practice Makes Perfect!", "Lap Time Leader", "Hot Lap", "Blue Flag", "\"Do You Smell Smoke?\"", "Variety Is The Spice Of Life", "So Hot Right Now", "State of the Art", "Drivers Are Overrated", "Dream Team", "Time To Shine", "Relationship Counsellor", "Struck Gold", "Rising Star", "World's Best Boss", "You're Here to Race, Not to Have Fun...", "Democracy Reigns", "Friends in High Places", "Tinkerer", "Rattletrap to Pocket Rocket", "Nothing But The Best", "I like it how it is!", "Jet Skis for Everyone!", "I'm Kind of a Big Deal...", "No \"I\" In Team", "Pit Wall Wunderkind", "\"I Like to Race, Not to Do Laps Alone\"", "If It Ain't Broke...", "Money's Overrated", "Seasoned", "\"Let's Put it This Way, I Like Number Seven.\"", "\"You Can Cut The Tension With a Cricket Stump\"", "Black Flag", "Re-Entering", "Managerial Mogul", "\"Just Leave Me Alone, I Know What I'm Doing\"", "Chequered Flag", "It Came Like That!", "Silva's Legacy", "Predator", "Former Glory", "Living Up To Their Namesake", "Thorn in My Side", "Swing Low...", "Building a Legend", "Ultimate Victory", "Adaptable ", "Where There’s a Will There’s a Way", "Hasty Hunters", "Waiting in the Wings", "Once a King, Always a King", "Challenged", "Rookie", "Pro", "All-Star", "Endurance Champion", "There's Always Time", "Highway to the Danger Zone", "Rising Tigers", "Dynamic Duo", "Jack of All Trades", "Fastest Crew in the World", "20/20 Vision"];

    assert.strictEqual(officialAchievementNames.length, 73, "sanity check on this test's own reference list");

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

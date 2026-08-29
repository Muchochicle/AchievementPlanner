import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/dirt-rally-2.js";

test("the DiRT Rally 2.0 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "dirt-rally-2-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "dirt-rally-2");

});

test("the DiRT Rally 2.0 guide has all 9 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Career, My Team & Custom Events",
            "Historic Championships",
            "Rally Locations & Feats",
            "Rallycross",
            "Cars & Purchases",
            "Community & Driving Challenges",
            "Hidden Achievement",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 71-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /71 Steam achievements/);

});

test("every one of the 71 official DiRT Rally 2.0 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Keepin it Real", "A Household Name", "Some Minor Wear and Tear", "Around the Gloeb", "Tough Competition",
        "Monster Energy Supercharge Award", "It Would Be Bakke'RUDE Not To", "Clown Car", "Flight School", "We Had to Change the Girboks",
        "CAUTION, Don't Cut", "Don't Knock my Line", "Golf Club", "Against the Clock", "The Right Way Up",
        "Going the Extra Mile", "Speedy Machine", "Bringing the Thunder", "Velkommen til Hell", "Eat my DiRT",
        "Rally North America", "Wheel Spin", "Wouldn't Expect Anything More", "Consistency is Key", "Modern Art",
        "Back to the 80s", "Classic Rally 2.0", "Past and Present", "Taking the Scenic Route", "An Expensive Hobby",
        "Group B Master", "Adaptable", "UPGRADED", "World RX Champion", "Rocky Road",
        "Time Machine", "On the Ladder", "When in Doubt...", "That's Dedication", "Fire Up That Car... Again",
        "Antilag Engaged", "Living the Dream", "Watch the DELTA", "Focused", "Qualified",
        "Fine Tuned", "A Noteworthy AdVANTAGE", "Viva España", "Pro Driver", "Polo Club",
        "On Thin Ice", "Rock 'n' Roll", "To all those who doubted...", "Kickin' 80s Vibe", "Mr Rallycross",
        "The Home Favourite", "The Hills are Alive...", "SEND IT", "Finnesse", "Flying Finn",
        "Greece Lightning", "Have a Break", "Rainmeister", "Launch Event", "Sunday Driver",
        "The Cartel", "Building a Legacy", "If in Doubt...", "...Flatout", "In Its Element",
        "Pedal to the Metal",
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

import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/just-cause-4.js";

test("the Just Cause 4 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "just-cause-4-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "just-cause-4");

});

test("the Just Cause 4 guide has all 8 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Campaign & Regions",
            "Collectibles & Discovery",
            "Side Ops & Companions",
            "Grappling Hook & Feats",
            "Dare Devils & Los Demonios (DLC)",
            "Hidden Achievements",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 61-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /61 Steam achievements/);

});

test("every one of the 61 official Just Cause 4 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "We Put a Giant Gun on It", "Show Me the Way", "I Feel the Need...", "...The Harder They Fall", "Stunt Driver",
        "All the Right Moves", "Wanderlust", "A Scorpion's Tale", "Fully Stocked", "What If I... Dive Down?",
        "Bring It Down!", "Been Around the World", "Here to Stay", "I Like to Keep My Options Open", "Last Action Hero",
        "Knowledge is Power", "His name is Luis", "Rico's Roughnecks", "Allow Me to Introduce Myself", "We're in Business",
        "Know My Name", "A Whole Army of Chaos", "A Higher Love", "Lift Off", "Classic Hits",
        "Don't Choke on My Smoke", "Chaos Milestone", "Pinball Dreams", "A Game of Chicken", "Cow-Moo-Flage",
        "Where I Belong", "Rico was Here", "Weapon Stash", "Bomb Disposal", "Rookie of the Year",
        "Dare Devil of Destruction", "Che's Way", "Doña of Demolition", "Rey Slayer", "Rough Rider",
        "Demo Pro", "Tiger Tamer", "Solino Grand Prix", "Now Who's the Idiot?", "Never Speak of This Again",
        "A Nightmare On Kusi Street", "Silence of the Llamas", "The Power of Rico Compels You", "Solino Chainsaw Massacre", "They Came From the Lake",
        "Demons on a Plane", "The Flying Dead", "Moocifer", "Interception", "Not My First Rodeo",
        "Drone Joust", "Danger Drone", "He Talked Too Much", "Skitchin'", "Long Board",
        "Hover or Die",
    ];

    assert.strictEqual(officialAchievementNames.length, 61, "sanity check on this test's own reference list");

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

import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/hitman-world-of-assassination.js";

test("the HITMAN World of Assassination guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "hitman-world-of-assassination-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "hitman-world-of-assassination");

});

test("the HITMAN World of Assassination guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Prologue & General",
            "HITMAN 3 Locations",
            "Special Assignments & Bonus Missions",
            "HITMAN 2 Locations",
            "HITMAN 1 Locations",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 83-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /83 Steam achievements/);

});

test("every one of the 83 official HITMAN World of Assassination achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "The Result of Previous Training", "Cleared for Field Duty", "Seizing the Opportunity", "The Creative Assassin", "Silent Assassin",
        "Training Escalated", "Top of the Class", "A New Profile", "Tools of the Trade", "Unseen Assassin",
        "Shortcut Killer", "Stylish Assassin", "Death From Above", "Dune Raider", "Treacherous Architecture",
        "Keep Your Eyes Peeled", "Rise Up", "Stair Master", "Master of the Household", "No Stone Unturned",
        "Upstairs, Downstairs", "Family Feud", "Full House", "The Great Outdoors", "Death of the Party",
        "Followed the Trails", "Partied Out", "Bird Art", "Last Call", "Warehouse Veteran",
        "NEXUS-47", "Surveillance Master", "Future Shock", "Console Cowboy", "Icebreaker",
        "Hack the Planet", "The Last Tango", "Master the Terroir", "Ripe for the Picking", "Evil Wine Club",
        "Rich Harvest", "Vineyard Virtuoso", "Nightmare Fuel", "Bullet Train", "Count Down From 47",
        "Train Surfing", "Last Stop", "Seven Figures", "Hawkeye", "Pure Poetry",
        "Break the Bank", "Top of the Heap", "In a League of Their Own", "Never Knew What Hit Them", "Capital Punishment",
        "Island and Chill", "Null and Void", "Infiltrator", "Local Knowledge", "Damage Control",
        "Miami Wise", "Tactical Strike", "Dark Tourist", "Pirate Hunter", "Keys to the City",
        "Long Shot", "Pillar of the Community", "This is Maintenance", "Honorary Member", "Silent Sniper",
        "When No One Else Dares", "City of Light", "Die By the Sword", "Amalfi Pearl", "Too Big to Fail",
        "Ancient Marrakesh", "Perfectionist", "Shining Bright", "One Night in Bangkok", "Guerrilla Warfare",
        "Mission Complete", "A Long Time Coming", "Sayōnara"
    ];

    assert.strictEqual(officialAchievementNames.length, 83, "sanity check on this test's own reference list");

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

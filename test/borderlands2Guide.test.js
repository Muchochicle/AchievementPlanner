import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/borderlands-2.js";

test("the Borderlands 2 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "borderlands-2-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "borderlands-2");

});

test("the Borderlands 2 guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Main Campaign",
            "Levelling & Combat Feats",
            "Exploration",
            "Side Missions & Base-Game Feats",
            "Campaign DLC",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 75-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /75 Steam achievements/);

});

test("every one of the 75 official Borderlands 2 achievement names is mentioned somewhere in the guide", () => {

    // The full, official list this guide is built from
    // (backend/catalog/games/borderlands-2.json).
    const officialAchievementNames = [
        "First One's Free", "Dragon Slayer", "A Road Less Traveled", "New In Town", "An Old Flame",
        "No Man Left Behind", "Wilhelm Screamed", "Sky's The Limit", "Can See My House From Here", "Farewell, Old Girl",
        "Got The Band Back Together", "Identity Theft", "An Angel's Wish", "Bombs Away", "Knowing Is Half The Battle",
        "Cool Story, Bro", "Challenge Accepted", "Goliath, Meet David", "Went Five Rounds", "Not Quite Dead",
        "Better Than You Were", "Always Improving", "Capped Out... For Now", "Arctic Explorer", "Urban Explorer",
        "Highlands Explorer", "Blight Explorer", "World Traveler", "Sugar Daddy", "Decked Out",
        "Sabre Rattler", "Phased and Confused", "So Much Blood!", "Cute Loot", "Tribute To A Vault Hunter",
        "Definitely An Italian Plumber", "High-Flying Hurler", "Token Gesture", "What does it mean?", "Unseen Predator",
        "Build Buster", "Well, That Was Easy", "How Do I Look?", "Thresher Thrashed", "Friendship Rules",
        "Better Than Money", "Up High, Down Low", "Bounty Hunter", "Did It All", "Feels Like The First Time",
        "Treasure Hunter", "Gadabout", "Completionist", "Explosive", "Motorhead",
        "Obsessed", "Face Off", "Done That", "Been There", "I Totes Planned That Boss",
        "Yaaaaaay", "Shorty, You So Best", "Girl's Gotta Eat", "It's Like That One Video", "They Was All \"Hey That's Mine\"",
        "Dang Girl You Ace At This Game", "Hmmmmm", "Keep Rollin' Rollin' Rollin'", "Make it Raaaaaid", "Anyway, Here's \"Firewall\"",
        "Chocolate Chip Confirmed", "Spicy Boy", "Decrypted!", "Painbow Connection", "3 or Bust"
    ];

    assert.strictEqual(officialAchievementNames.length, 75, "sanity check on this test's own reference list");

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

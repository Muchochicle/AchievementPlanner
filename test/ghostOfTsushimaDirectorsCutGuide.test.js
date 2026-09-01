import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/ghost-of-tsushima-directors-cut.js";

test("the Ghost of Tsushima guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "ghost-of-tsushima-directors-cut-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "ghost-of-tsushima-directors-cut");

});

test("the Ghost of Tsushima guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story: Jin's Journey",
            "Combat, Exploration & Collectibles",
            "Iki Island Expansion",
            "Legends Co-op Mode",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 77-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /77 Steam achievements/);

});

test("every one of the 77 official Ghost of Tsushima achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Living Legend", "Gathering Storm", "Point of No Return", "Company of Wolves", "Stoking the Flame", "Family Reunion", "Leader of the People", "Birthright", "Dying Embers", "The Ghost", "The Exiled Alliance", "Sovereign End", "Mono No Aware", "The Warrior Monk", "The Vengeful Warrior", "The Unbending Archer", "The Headstrong Thief", "Teller of Tales", "Helping Sword Hand", "Flash of Steel", "Witness Protection", "All in the Wrist", "Open for Business", "There Can Be Only One", "Have a Nice Fall", "Haunting Precision", "The Ghost of Legend", "Quick Study", "Every Trick in the Book", "The Perfect Storm", "A Charming Man", "Gifted", "Slay", "Light the Way", "Den of Thieves", "Favor of the Kami", "Honor the Unseen", "Lost and Found", "Monochrome Masters", "Cooper Clan Cosplayer", "Dirge of the Fallen Forge", "A Moment in Time", "Avid Reader", "Know Your Enemy", "Body, Mind, and Spirit", "Hero of the People", "A Fight For The Isle….", "Good Riddance", "Securing Sanctuary….", "Mass Eviction", "A New Safe Haven", "Master Liberator", "Transcendence", "Ultimate Warrior", "Ultimate Truth", "Promising Start", "True Understanding", "Self-Actualized", "Grand Opening", "A Legend for All Time", "Out of the Past", "Friend to All Raiders", "The Benefit of All Beings", "The Butcher Redeemed", "Treasures of the Past", "Elegy for Kazumasa", "Common Courtesy", "Monkey See", "Pride of Ishikawa", "Chiyoko's Song", "A Few Splinters", "Well-Rounded Warrior", "Blood on Your Hands", "Honor Bound", "Champion of the Kami", "Cursed No More", "A Painful Blockage"];

    assert.strictEqual(officialAchievementNames.length, 77, "sanity check on this test's own reference list");

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

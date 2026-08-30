import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/metal-gear-rising-revengeance.js";

test("the Metal Gear Rising: Revengeance guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "metal-gear-rising-revengeance-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "metal-gear-rising-revengeance");

});

test("the Metal Gear Rising: Revengeance guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story Files & S-Rank",
            "File-Specific Feats",
            "Boss No-Damage Fights & Kill Counts",
            "Combat Techniques & Collectibles",
            "DLC: Jetstream & Blade Wolf",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 60-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /60 Steam achievements/);

});

test("every one of the 60 official Metal Gear Rising: Revengeance achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["File R-00: Status - Closed", "File R-01: Status - Closed", "File R-02: Status - Closed", "File R-03: Status - Closed", "File R-04: Status - Closed", "File R-05: Status - Closed", "File R-06: Status - Closed", "File R-07: Status - Closed", "Stormbringer", "Steel Tail", "No Flash Photography!", "Dwarf Raiden", "A Walk in the Dark", "Menace to Society", "Great Escape", "Surprise Attack!", "Prodigal Murderer", "Genius Destroyer", "Truly Human", "Chosen by History", "The Politics of Silencing Foes", "Anti-Cyborg Sentiment", "The Bigger They Are...", "Demilitarized Zone", "Herpetophobia", "Silverback", "Extinction Level Event", "Pond Scum", "Wolf Hunter", "Slider Strike", "Jumping the Shark", "Looking Out for the Little Guys", "Tearing Away the Disguise", "Datsu Right", "What Doesn't Kill You...", "Assassin Behind Closed Doors", "You Don't Run from Chance", "A Lover, Not a Fighter", "Assault with a Deadly Weapon", "Rip 'Em Apart!", "Love at First Sight", "Ich Liebe Kapitalismus!", "A Big Fan of Lefties", "Amateur Radio Operator", "Peekaboo", "Data Mining", "Humanitarian Assistance", "Analysis Complete", "VR Master", "Virtually Flawless", "DL-VR Master", "Hero of the Metaverse", "DL-Story-01: Status - Closed", "You're Hired", "Jetstream", "Draw, Pardner!", "DL-Story-02: Status - Closed", "Wolf's Pride", "Fangs of Fury", "Predatory Instincts"];

    assert.strictEqual(officialAchievementNames.length, 60, "sanity check on this test's own reference list");

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

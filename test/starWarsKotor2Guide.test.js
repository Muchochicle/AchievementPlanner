import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/star-wars-kotor-2.js";

test("the STAR WARS: KOTOR II guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "star-wars-kotor-2-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "star-wars-kotor-2");

});

test("the STAR WARS: KOTOR II guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story & Endings",
            "Companions & Planet Choices",
            "Alignment, Skills & Feats",
            "Late-Game Secrets",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 57-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /57 Steam achievements/);

});

test("every one of the 57 official STAR WARS: KOTOR II achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Training Wheels", "It Was Like That When I Got Here!", "I Didn't Do It!", "Larger World", "Starting Down the Dark Path", "An Elegant Weapon", "Hunger Strike", "Pain Relief", "Seeker", "Destiny, Dominated", "Short Circuit", "Royal Protocol", "Martial Law", "The First Rule...", "The Second Rule...", "Unadulterated Violence", "Lost in Your Work", "Your Eyes Can Deceive You", "The Walking Carpet", "Lost Girl", "Grave Robber", "Fight Another Day", "Laugh It Up, Fuzzball", "Pure Pazaak", "Pet Rock", "Last Stand", "Nothing Personal", "Orphan White", "Ancient History", "A Certain Set of Skills", "Luminous Beings", "If You Only Knew...", "Never Tell Me the Odds", "In It For the Money", "Talk Them to Death", "Don't Get Cocky", "The Gang's All Here", "I hate everything about you", "Unlimited Power", "I Am A Jedi", "Dancing Queen", "No Jedi can stop us", "Over Achiever", "Silent, But Deadly", "Let's Blow This Place!", "I've Seen How You Use a Hydrospanner", "We Have to Hack Into the Mainframe!", "Trust Me, I'm a Doctor", "It's a trap!", "Hutt Oil", "Cheater", "Finders Keepers", "The Sith Lord", "Breaking the Oath", "You ARE the droid I'm looking for", "Assassination Protocol: Active", "Cupid's Rifle"];

    assert.strictEqual(officialAchievementNames.length, 57, "sanity check on this test's own reference list");

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

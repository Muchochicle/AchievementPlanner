import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/just-cause-3.js";

test("the Just Cause 3 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "just-cause-3-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "just-cause-3");

});

test("the Just Cause 3 guide has all 9 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Chaos & Base Destruction",
            "Challenges & Gears",
            "Collectibles & Exploration",
            "Liberation & Story",
            "Combat Mastery & Encounters",
            "Sky Fortress & Mech Land Assault",
            "Bavarium Sea Heist",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 66-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /66 Steam achievements/);

});

test("every one of the 66 official Just Cause 3 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["(Just) Causin' Chaos", "Chaos is My Middle Name", "Chaos Millionaire", "...Without Bullets!", "This was Supposed to be a Western", "Bragging Rights", "Getting it in Gear", "You've Got Gear", "A Real Gear-Getter", "All the Gears", "Earth, Wind and Sea", "Caught 'Em All!", "Consummate Daredevil", "Tomb Raider", "Remember the Fallen", "Diary of the Madman", "Old School Cool", "No Stone Unturned", "Top of the World", "Feat Fetish", "My Little Rocket Man", "You're Outta Here!", "Baker's Dozen", "Vive le Revolution", "Hope Springs Eternal", "Taming the Dracon", "Heart of Stone", "Unlocked and Fully Loaded", "Take That, You Pipeline Jerks", "Enjoy Your Homecoming", "What a Disaster", "The Power of Bavarium", "These Mines are the Pits", "F!#& YOU, MISSILE", "Finally on the Offensive", "Mistakes and Triumphs", "Winner Takes All, Again", "Forgive Me, Father...", "Can't Touch This", "MOD Initiate", "MOD Specialist", "MOD Tinkerer", "Son of Medici", "Anything You Can Do...", "First Encounter", "Supply and Demand", "Three Holy Hideaways", "Like a Fish... in the Air!", "Look at the Sly Fox", "My Name is Eden", "Break a Leg!", "Stock-Keeping", "Quite the Connoisseur", "A True Master", "In the Heart of Darkness", "Certified eDEN Mech Operator", "eDEN Employee of the Year", "One Mech of a Ride", "Free Birds", "This Is Not A Fireball", "One Last Score", "Loochador Master", "The Flying Medician", "I Should Buy A Boat", "Lightning Bolt!", "Staying Power"];

    assert.strictEqual(officialAchievementNames.length, 66, "sanity check on this test's own reference list");

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

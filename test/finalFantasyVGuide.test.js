import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/final-fantasy-v.js";

test("the FINAL FANTASY V guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "final-fantasy-v-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "final-fantasy-v");

});

test("the FINAL FANTASY V guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story Progression",
            "Superbosses, Weapons & Collection",
            "Job Mastery",
            "Character Levels",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 96-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /96 Steam achievements/);

});

test("every one of the 96 official FINAL FANTASY V achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["FINAL FANTASY V Master", "Say Hello, Syldra!", "What!?", "He's a She!", "Fear of Heights", "Too Late", "Scientific Genius", "Our Only Hope", "Couldn't Tell", "The Skies Are Yours!", "The Return", "Galuf's World", "Enough of a Beating", "Kupo!", "Lupine Attack", "Under the Sea", "Not Dead Yet!", "Morphing Time!", "Mwa-hahahaha!", "Turtle!", "Tablets in the Bag!", "Lali-ho!", "Made It!", "Forget Something?", "Warriors of Light", "The Real Letter", "Dimensional Assassins", "Master Mimic", "Mechanical Warrior", "Mechanical Warrior II", "Demon Dragon", "Neo Demon Dragon", "The Void", "Fallen Warrior", "Legendary Weapons", "Bronze Hunter", "Silver Hunter", "Gold Hunter", "Platinum Hunter", "Bestiary (32 Pages)", "Bestiary (96 Pages)", "Bestiary (192 Pages)", "Bestiary (323 Pages)", "Low Cash Flow", "Gil Cave Time!", "Flush with Gil", "Gil to Burn", "Piano Master", "Treasure Hunter", "Master of Attack & Defense", "Don't Think, Feel!", "Band of Thieves", "Wind Rider", "Ninja Legend", "Four Samurai", "Skull Buster", "Marksman", "One Deadly Blow", "Master of White Magic", "Master of Black Magic", "Master of Time and Space", "Master Summoner", "Learns from Monsters", "Ebony and Ivory", "Catch and Release", "Trial and Error", "Child of the Earth", "The Music Man", "A One and a Two...", "Undead Freak", "Prediction Machine", "Blistering Bombardment", "Battle Master", "Master of Mimicry", "Job Master", "The Wind Calls", "It's Not Over Yet", "The Wind Won't Stop!", "Check Me Out!", "Don't Mess with Me", "Safe Journey!", "A Promise to Return", "Didn't Mean to Worry You", "In Your Debt", "Chancellor' Relief", "Where Am I?", "Give Me Strength", "Thanks Everyone!", "Gotta Be Kidding", "Gone Too Far!", "That Long Journey Smell", "Careful Captain!", "Time's a-Wasting!", "It'll Work Out!", "Look at Me Now!", "Customer Appreciation"];

    assert.strictEqual(officialAchievementNames.length, 96, "sanity check on this test's own reference list");

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

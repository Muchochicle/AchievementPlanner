import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/brawlhalla.js";

test("the Brawlhalla guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "brawlhalla-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "brawlhalla");

});

test("the Brawlhalla guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Progression: Gold, Levels & Weapon Legends",
            "Matchmaking & Win Milestones",
            "Combat Feats & Advanced Challenges",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 65-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /65 Steam achievements/);

});

test("every one of the 65 official Brawlhalla achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Cash Money", "Deep Pockets", "The Midas Touch", "Just One More Game!", "The Big 2-0", "Time Flies When You're Having Fun", "Feels Like the First Time", "It's Hammer Time", "Cutting Edge", "Pew Pew Pew", "Sir Lances-a-lot", "Getting to the Point", "It Slices, It Dices", "Not an Axe-ident", "Making Your Foes Quiver", "Knuckle Sandwich", "Gardening with a Black Thumb", "Welcome to Brawlhalla!", "Matchmaker, Make Me a Match", "Four's a Party", "Calm Before the Storm", "Our Powers Combined", "Til KO Do Us Part", "Let's Do This Again Next Week", "See Ya", "Home Run King", "I Believe You Can Fly", "Just Getting Started", "Witness Me!", "All I Do Is Win", "Practice Makes Perfect", "They Grow Up So Fast", "Putting in Work", "Twice as Nice", "Go Long!", "Can't Touch This", "The Surpri-saac Newton", "Kill Them with Kindness", "And the Crowd Goes Wild!", "Cannon Fodder", "Launched into Orb-it", "Big Hunk of Metal", "Now I Can Use Black in Strikeout", "Jack of All Trades", "Falling with Style", "BOMBHALLA!!", "Carry the Team", "Wall Cleaner", "To Hell and Back", "Check Out My Fresh Kicks", "Dribbling off Your Face", "High Stakes Hot Potato", "Hit for the Cycle", "You're Telling Me the Sky Forged This?", "I'd Rather Be SHINAYYY", "Established Main", "Halfway There! Right!?", "The Split Difference", "Sandbagger", "Download Complete", "Lighter than Air", "No Spam Zone", "Thrice as Nice", "Sweep ALL the Legs", "Brawling 25/8"];

    assert.strictEqual(officialAchievementNames.length, 65, "sanity check on this test's own reference list");

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

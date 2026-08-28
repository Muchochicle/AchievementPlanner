import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/fallout-new-vegas.js";

test("the Fallout: New Vegas guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "fallout-new-vegas-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "fallout-new-vegas");

});

test("the Fallout: New Vegas guide has all 12 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Character & Skill Milestones",
            "The Mojave Main Quest",
            "Companion & Side Quests",
            "Casinos & Gambling",
            "Hardcore Mode",
            "Dead Money",
            "Honest Hearts",
            "Old World Blues",
            "Lonesome Road",
            "Gun Runners' Arsenal",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 75-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /75 Steam achievements/);

});

test("every one of the 75 official Fallout: New Vegas achievement names is mentioned somewhere in the guide", () => {

    // The full, official list this guide is built from
    // (backend/catalog/games/fallout-new-vegas.json).
    const officialAchievementNames = [
        "New Kid", "Up and Comer", "The Boss", "Ol' Buddy Ol' Pal", "The Whole Gang's Here",
        "Crafty", "Mod Master", "Walker of the Mojave", "Master of the Mojave", "Globe Trotter",
        "You Run Barter Town", "Blast Mastery", "Love the Bomb", "Lead Dealer", "No Tumbler Fumbler",
        "Stim-ply Amazing", "New Vegas Samurai", "Jury Rigger", "Hack the Mojave", "Artful Pocketer",
        "Outstanding Orator", "Desert Survivalist", "Old-Tyme Brawler", "Know When to Fold Them", "One Armed Bandit",
        "Little Wheel", "Double Down", "Caravan Master", "The Courier Who Broke the Bank", "Hardcore",
        "Ain't That a Kick in the Head", "They Went That-a-Way", "Ring-a-Ding-Ding", "The House Always Wins", "For the Republic",
        "Render Unto Caesar", "Wild Card", "All or Nothing", "Veni, Vidi, Vici", "Eureka!",
        "No Gods, No Masters", "Come Fly With Me", "Talent Pool", "Return to Sender", "Arizona Killer",
        "You'll Know It When It Happens", "G.I. Blues", "That Lucky Old Sun", "Volare!", "The Legend of the Star",
        "Assemble Your Crew", "Cash Out", "Having a Ball", "Safety Deposit Box", "Sierra Souvenir Aficionado",
        "May my Hand Forget its Skill", "In a Foreign Land", "O Daughter of Babylon", "When We Remembered Zion", "Restore Our Fortunes",
        "Cardiac Arrest!", "Making Friends", "Make up your Mind", "Outsmarted", "Spinal-Tapped",
        "ED-Ecated", "Condemned to Repeat It", "Hometown Hero", "Rocket's Red Glare", "Warhead Hunter",
        "Curios and Relics", "Master of the Arsenal", "Up to the Challenge", "Combat Veteran", "Pros Only"
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

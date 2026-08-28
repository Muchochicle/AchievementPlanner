import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/bloons-td-6.js";

test("the Bloons TD 6 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "bloons-td-6-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "bloons-td-6");

});

test("the Bloons TD 6 guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Achievements (Part 1)",
            "Achievements (Part 2)",
            "Achievements (Part 3)",
            "Achievements (Part 4)",
            "Hidden Achievements",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 156-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /156 Steam achievements/);

});

test("every one of the 156 official Bloons TD 6 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Impoppable", "MOAB Assassin", "BFB Brawler", "ZOMGinator", "Me Did A Job On DDT",
        "Sapper", "First Win", "Grasshopper", "Next Level", "Acolyte",
        "Advanced Player", "Big Monkey", "Mega Monkey", "Hero Time", "Hero Powers Activate",
        "Bigger, Badder", "Epic Hero", "Monkey Avenger League", "You've Got The Power", "Power User",
        "Empowered", "Student", "Scholar", "Knowledgeable Primate", "Dr. Monkey",
        "First Monkeys First", "War Monkeys", "Abracadabmonkey", "Unsung Monkeys", "Inflated",
        "Survivor", "Indie", "Poppable", "Thrifty", "Bloonzilla!",
        "Role Reverser", "Medal Winner", "Decorated Hero", "Red And Blue Makes...", "Infrared",
        "Our Powers Combined", "Challenger", "Challenge Apprentice", "Challenge Master", "Perfect Week",
        "Bloons Master", "Superior Bloons Master", "Ultimate Bloons Master", "Super BAD", "Co-operation",
        "Four times the fun", "Triple threat", "Collaborate!", "When the going gets tough...", "Kind Benefactor",
        "Generous Benefactor", "Monkey Contributor", "Monkey Philanthropist", "Powershare", "Power overwhelming!",
        "Insta-defense", "Co-op Popper", "Big Bloons", "Alchermistman and Bloonacleboy", "2TC",
        "Snap of your fingers", "Bill Greates", "Bloontona 500", "Rookie of the year", "Rising star",
        "Top of your game", "The greatest challenge", "Lookin fab", "Therpopylae", "Bloon Master Populous",
        "I see you", "Tetrimino", "All for one and one for one", "Master of Life", "Rainbow is Magic",
        "Strangely Adorable", "Josh's Constant", "What did it cost? - Everything:", "2 MegaPops", "A Crate Time",
        "Axis of Havoc", "Tower Keeper", "A year in the making", "Kali Maaaaaaaa", "Golden Ticket",
        "Adventurer", "Seasoned Adventurer", "No Stone Left Unturned", "12 Tasks of Monk-ules", "Modysseus Rises",
        "Modysseus Forever", "Full Speed Ahead!", "All About That Bling", "Mo Heroes, Mo Problems", "Chunky Monkeys",
        "Oathbreakers", "Living on the Edge", "Freaky Friday", "Monkey Fan Club", "Ready Player One?",
        "Crash of the Titans", "A La Code", "Regifted", "Coupon Crazy", "Instant Gratification",
        "Insta Century", "Limited Run", "Tools to Darwin", "Stubborn Strategy", "Achievement of Achievements",
        "Hook, Line, and Sinker", "Moving House", "Social Butterfly", "So Shiny!", "Glittering Gold",
        "Glorious Gold", "Magical Gold", "Team Player", "Team Captain", "Ultimate Team-up",
        "What is this new Bloonery?", "Who's the Boss?", "I'm the Boss", "Apotheosis", "Like a Boss",
        "Perfect Paragon", "Davids vs Goliath", "So Spiiicey Ninja Kiwi", "No Harvest", "Student Loans",
        "Not Lacking Critical Information", "Sticky Situation", "Big Spender", "The Daily Reid", "I'll Be Back",
        "Conquested Territory", "Stage of Empires", "Territory Sampler", "Invigoration", "Side Quest",
        "World League Training", "Life Experience", "Heavy Investment", "25 to Life", "Community Connoisseur",
        "Nah, I'd Win", "They call me Cave Monkey!", "First Steps", "Season Starts", "Mid Season",
        "Season Champion"
    ];

    assert.strictEqual(officialAchievementNames.length, 156, "sanity check on this test's own reference list");

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

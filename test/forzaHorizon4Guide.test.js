import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/forza-horizon-4.js";

test("the Forza Horizon 4 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "forza-horizon-4-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "forza-horizon-4");

});

test("the Forza Horizon 4 guide has all 8 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Horizon Life & Progression",
            "Skill Feats & Base-Game Challenges",
            "Fortune Island DLC",
            "Horizon Stories & Seasonal Championships",
            "LEGO Speed Champions DLC",
            "Series Update Content: Top Gear, The Eliminator, Super7 & More",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 178-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /178 Steam achievements/);

});

test("every one of the 178 official Forza Horizon 4 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Welcome to Britain", "Pride Before the Fall", "Snow Problem", "Optional Extras", "Spring Into Action", "Welcome to a New Horizon", "Jolly Cooperation", "Human After All", "There’s No 'I' in Team", "Teamwork Makes the Dream Work", "Life of the Party", "Whatever Next?", "Colossus of Roads", "Muddied", "Bouncy Bouncy, Having Such a Good Time!", "I Live My Life…", "Moonlighting", "Horizon Fashion Week", "Official Horizon Board Game", "I Feel the Need", "Apex Predator", "Pilot’s License", "\"Do you know what 'DK' stands for?\"", "Auto Barn", "Antique Restorer", "Taking the Grand Tour", "An Illustrious Career", "Star Centurion", "Week Complete", "Crowning Achievement", "Special Edition", "Test your Might", "First-Time Adventurer", "The Spirit of Adventure", "Certified Adventurer", "Well Seasoned", "Overachiever", "Purple Split!", "Hit the Jackpot", "Stunt Superhero", "First Love", "Go the Distance", "The Noisy Cartographer", "At One with the Car", "Master of Many", "Accomplished Driver", "Horizon Superstar", "Reaping the Rewards", "Tortoise and the Hare", "Hatch Me If You Can", "Record Breaker", "Ground Force", "Coronation Trickin'", "Never Tell Me the Odds", "Tame the Monster", "Welcome to Fortune Island", "Made the Cut", "Top 50%", "The Final Twelve", "The Island Conqueror!", "Hunter Gatherer", "Driving Detective", "Get Rich and Drive Tryin'", "Paved with Gold", "Fortune for All", "Seasoned to Victory", "Drift Club Island", "Not Just Straight-line Speed", "Drifters Paradise", "Trailblazing", "In the Zone", "It's a Trap!", "Frequent Flyer", "Better get Kraken", "Wait…how did you do that?", "Full of Zest", "Leviathan Slayer", "The OG", "Exodus of Exocet", "Second Century", "From Aston Martin to Bentley", "A Pleasant Racing Green", "Taxi!!!", "The Big One", "Triple-A Taxis", "Skillz", "Skill Master", "SKILLING STREAK!", "A Race in the Crowd", "Spring into Racing", "A Summer in Pole Position", "Autumn-mobiles", "Winter is Running", "#FORZATHON Sweep", "You should take a rest!", "Time for an Adventure!", "There is no Team in Victory", "Welcome to LEGO® Speed Champions", "Clutch Isn't Just for Cars", "Out-of-Towners", "Master Builder", "75890", "Learning to Fly", "75892", "Speed Champion", "Brick Built", "Scandinavian Brick", "In the Brick of Time", "Attraction to Traction", "Fast Forward", "LEGO® of Your Fears", "Flawless Brickstory", "Eat, Sleep, Race, Repeat", "Winner, Winner, Brick'n Dinner", "Microscale Explorer", "Elementary", "Swamp Gas from a Weather Balloon", "Danish Hasty", "Brick Horsepower", "Mini Adventure", "Smashing", "Eventful", "Seeing Stars", "You're Gonna Need a Bigger Tote", "LEGO® Valley Tour", "Wyldstyle", "Gotta Smash Them All", "Tonight...", "Snorkels Not Needed", "The World's Least Obedient Racing Driver", "How Hard Could it Be?", "The Wonderful World of Car Insurance", "Simples!", "German Efficiency", "A Creature of Habit", "Stunt Puller", "Cashing In", "Perfectionist", "Encore?", "Welcome to The Eliminator", "The Variator", "Teeth Cut", "Process of Elimination", "YOU ARE THE ELIMINATOR", "Scavenger", "First Blood", "Ransacked", "Head Hunter", "Top of the Food Chain", "Last Car Standing", "Heads Up", "Pacifist", "Underdog", "Bully", "A New Challenger Approaches", "Make Louis Proud", "We Have the Technology", "Wolf in Sheep's Clothing", "Kingmaker", "Release the Quacken", "Intact... Mostly", "Going the Extra Mile", "Stay Safe", "Stay Home", "First Promo-tion", "Picture Perfect", "Backbone of Britain", "Tunnel Vision", "Bouncin’ Buggies", "A Wild Challenge Card Appears!", "Foundations", "The Horizon Super7", "Seven Squared", "High Roller", "Block-Buster", "The Magnificent 77", "The Prop-abilities are endless", "Toy Box"];

    assert.strictEqual(officialAchievementNames.length, 178, "sanity check on this test's own reference list");

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

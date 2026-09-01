import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/halo-infinite.js";

test("the Halo Infinite guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "halo-infinite-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "halo-infinite");

});

test("the Halo Infinite guide has all 8 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Campaign Story, Difficulty & Bases",
            "Open World & Collectibles",
            "Campaign Combat & Vehicle Feats",
            "Customization, Progression & Training",
            "Multiplayer Medals & Modes",
            "Mission Challenges & Co-op",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 144-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /144 Steam achievements/);

});

test("every one of the 144 official Halo Infinite achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["First Contact", "Together. Again?", "Ascension", "Zeta", "Fallen", "Unearthed", "Hunter. Killer.", "Pelican Down", "One Down…", "Brothers Grim", "Light the Way", "What Will It Take?", "Hear These Words!", "Together. Again.", "Reckoning", "Legends", "Too Many Goodbyes", "Set a Fire in Your Heart", "Bare Your Fangs", "Fight Hard, Die Well ", "Headmaster", "Evasive Maneuvers ", "Grab Some Cover", "Visionary", "Thrusters On Full", "Impervious", "Big Brother", "Outpost Discovery", "Bunker Buster", "Reclaimer", "Resurgency", "Who is Max Valor?", "We're On Our Way", "No One Left Behind", "Headhunter", "Bloodstars' Bane", "Dispatches From the Front", "Canon Collector", "Two Sides to Every Story", "Know Your Enemy", "Infinity Down", "Rubicon Protocol", "Hidden Experience", "Mjolnir Master", "Getting Defensive", "Reaching Out", "Money in the Bank", "Armory Amore", "Eld Aficionado", "Haruspis", "Headstrong", "Catacomb", "Please Shut Up", "Off the Air", "Gun Runner", "Forza Veloce", "Passing the Gas", "Nosebleed", "Those Wonderful Toys", "Aegis Fate", "All-Seeing I ", "Run Rabbit, Run", "Whip-Riding the Ghost", "Wait, I Can Throw Those?", "Bring Shiela Home Safely", "Takes One to Make One", "Wars with Friends", "Wanna Have a Catch?", "A True Test of Legends ", "Which One of Us is the Machine?", "Passion for Fashion", "\"Need a Weapon?\"", "That Thing on the Left is the Brake", "Reporting for Duty", "I'm Ready, How 'Bout You?", "Humble Beginnings", "Battle Tested", "Clocking In", "We Have a Job For You", "Limited Addition", "You're Up, Rook'", "All About the Grind", "Get the Popcorn", "Customary", "Getting Strong Now", "Sparring Partners", "Sharpshooter", "Deadeye", "Augmented", "Doing Your Part", "Just the Two of Us", "Make a Little More Noise", "Greased Lightning", "Peak Performance", "Slaying with Style", "Back to the Chopper", "New Kid on the Block", "Party Bus", "Watt Say You?", "Peeker's Disadvantage", "Brutality", "Sick Burn", "Kebab", "Skyhook Shot", "Working Remote", "Secret Stash", "Bomb Returned", "Do You Even Gift?", "Multi-class Racer", "They See Me Rollin'", "One Shot, Top Mid", "Enemies Everywhere!", "Natural Formation Location Sensation", "A Fellow of Infinite Jest", "Running Laps", "Zone Ranger", "MEDIC!", "Control Freak", "Straight to the Bank", "Mix Things Up", "Stick Around", "Rapid Unscheduled Disassembly", "Out with a Bang", "Workplace Safety Violation", "Conservation of Momentum ", "It Really Does Beat Everything", "Vintage Fisticuffs", "Spire Stalker", "Turnabout is Fair Play", "More Than He Bargained For", "Gatecrasher", "What's Rightfully Ours", "Wardens of Zeta", "First Responders", "Hunting Party", "Air Raid", "Cow Catcher", "Gruesome Twosome", "Keep It Steady", "Rolling Thunder", "Inseparable", "You, Me, Same Page", "Controlled Demolition", "Wolves at the Doors"];

    assert.strictEqual(officialAchievementNames.length, 144, "sanity check on this test's own reference list");

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

import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/xcom-2.js";

test("the XCOM 2 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "xcom-2-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "xcom-2");

});

test("the XCOM 2 guide has all 8 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Campaign & Story",
            "Tactical Feats",
            "Strategy & Challenge Runs",
            "Alien Hunters",
            "Shen's Last Gift",
            "War of the Chosen & Tactical Legacy Pack",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 88-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /88 Steam achievements/);

});

test("every one of the 88 official XCOM 2 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Earth Avenged", "Defender of Humanity", "Immortal Commander", "Tinker", "Rise of the Resistance", "First Blood", "Rebel Radio", "Codebreaker", "Room to Grow", "Shadow Broker", "Rumor Hunter", "A Horrible Truth", "A Grim Key", "A Dark Doorway", "A Line Crossed", "A God Falls", "Meat Over Metal", "Like Clockwork", "Mechlord", "Nick of Time", "Locked and Loaded", "Excalibur", "David and Goliath", "Breathing Room", "Come Back To Me", "Stop Hitting Yourself", "Shen's Legacy", "Bring It Down", "Have a Nice Trip", "Car Wrecked", "Exquisite Timing", "Who Needs Tygan?", "The Few and the Proud", "The Untouchables", "Pile 'Em Up", "The Most Dangerous Game", "Overpowered", "Heroes of the Resistance", "Cyberlord", "Heavy Metal", "The Sun Never Sets", "Global Resistance", "Beginner's Luck", "Brutal Collection", "With Extreme Prejudice", "A Better Human Being", "A Final Stand", "Harder, Better, Faster, Stronger", "Now Am I Become Death", "Valhalla", "A Forbidden Experiment", "Viper Vanquisher", "Berserker Breaker", "Archon Annihilator", "Kingslayer", "Deadly Arsenal", "Now I Am The Master", "Enemy Adopted", "Regicide", "Not Throwing Away My Shot", "A Torch Passed", "Our New Overlords", "Rise of the Robots", "Matter Over Mind", "Running on Fumes", "Bells and Whistles", "Always be Shooting", "Axles to Axles, Bolts to Bolts", "Just Like Dad Used To Make", "Make ‘em go Boom", "A New Alliance", "A Rival Silenced", "Zombies in a Barrel", "Born in the Darkness", "Circle of Psi", "Can't Stop the Fighting", "It Takes Two", "Weary Warriors", "Fully Operational Resistance", "No One Left Behind", "Deja Vu All Over Again", "Bug Fisherman", "Fully Operational Battlestation", "The Gang's All Here", "Campaign Microcosm", "Honorary Level Designer", "Playing For Score", "There's A Future In The Past"];

    assert.strictEqual(officialAchievementNames.length, 88, "sanity check on this test's own reference list");

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

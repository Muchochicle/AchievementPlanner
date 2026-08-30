import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/cossacks-3.js";

test("the Cossacks 3 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "cossacks-3-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "cossacks-3");

});

test("the Cossacks 3 guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Multiplayer, Campaigns & Skill Feats",
            "Economy, Units & Buildings",
            "Advanced Units, Sieges & Tutorial",
            "Campaign Mission Objectives",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 103-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /103 Steam achievements/);

});

test("every one of the 103 official Cossacks 3 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Captain", "Colonel", "Field marshal", "First blood", "Duelist", "Old warrior makes a wise warrior", "Field marshal general of the Empire", "To punish the king", "Glory of the French fleet", "There and back again", "Vityaz", "Generalissimo", "Death to the tyrants!", "Rule, France!", "Brothers, raise the crystal chalices", "I am Tsar!", "Frantic struggle", "Uneven chances", "Surrounded at all sides", "Ship's boy", "Boatswain", "Sea wolf", "The passage of time", "By the sweat of your brow", "Scientific breakthrough", "Patron of sciences", "To the bowels of Earth", "Sea sickness", "Marching as one", "On your shield", "Black friday", "Soldiers of fortune", "Metal hedgehog", "A bayonet is stupid, a bullet is smart.", "Big bang", "Horse breeder", "Agrarian development", "Unbreakable walls", "Cannon master", "Iron hailstorm", "Admiral", "Above the clouds", "Shipwright", "The Hussars can't be defeated, nor stopped, nor contained", "The beginnings of the regular army", "Two thousand subjects", "Four thousand subjects", "The holy man", "Fortification engineer", "The builder of walls", "Mining development", "Angelic patience", "Lord of the cupids", "Turkish invasion", "Reapers on the mountain", "The Thunderer", "Iron curtain", "One for all, and all for one!", "Scotland the Brave", "Heroic power", "Two Ukrainians make three hetmans", "The architect", "City builder", "The Lion of the North", "Old Fritz", "Grand Sultan", "Great Bey", "The King of Croats", "Military traditions", "The conqueror", "Turn the cannons!", "The destroyer", "The scourge of God", "Capable war minister", "Lord of the sea", "Engineer's deed", "Officer's patent", "Sharp sight", "Noble spirit", "Ruthlessness", "Treasure hunter", "Practical thinking", "Bulldog grasp", "Bloody peasants!", "Successful pursue", "Trench warfare", "Prudence", "The devil's cunning", "It's all about respect", "Conscience defies compromises", "Conquest of Sicily", "Break your chains", "The doom of the tsar of turks", "Payback for Samuil Kishka", "The towers shall fall", "Good morning!", "Hold the wall!", "Slayer of infidels", "Master of sieges", "Unassailable wall", "Blitzkrieg", "Sir, you're fired", "Down with the gang!"];

    assert.strictEqual(officialAchievementNames.length, 103, "sanity check on this test's own reference list");

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

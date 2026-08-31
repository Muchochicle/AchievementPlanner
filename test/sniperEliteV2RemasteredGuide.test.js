import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/sniper-elite-v2-remastered.js";

test("the Sniper Elite V2 Remastered guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "sniper-elite-v2-remastered-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "sniper-elite-v2-remastered");

});

test("the Sniper Elite V2 Remastered guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Marksmanship & Kill Feats",
            "Campaign Missions & Secondary Objectives",
            "Co-op / Overwatch & DLC",
            "Remaster Feats & Multiplayer",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 71-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /71 Steam achievements/);

});

test("every one of the 71 official Sniper Elite V2 Remastered achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Front and Center", "Mousetrap Fuse", "Ear Plugs", "Fuel Tank", "Silent but Deadly", "Deadeye", "Go the Distance", "Iron Lung", "Potato Masher", "World Record", "Gung Ho", "Head Honcho", "Jungle Juice", "Pass the Buck", "Double Dose", "Cooking Off", "Make Every Bullet Count", "Hide and Hope", "Gold Rush", "Trainee Sniper", "Novice Sniper", "Apprentice Sniper", "Journeyman Sniper", "Skilled Sniper", "Pro Sniper", "Expert Sniper", "Master Sniper", "Veteran Sniper", "Feared Sniper", "Legendary Sniper", "Sniper Elite", "Get Off the Ground", "High and Mighty", "Fish Tank", "Kilroy was Here", "Target Spotted!", "Target Eliminated!", "Bedpan Commando", "Bomb Happy", "Detonator", "Can Do!", "Silence is Golden", "Smoking Kills", "You were only supposed to...", "Watchmen", "Secret Service", "Shoot the Alps", "War Reporter", "Flesh Wounds", "Target Führer", "Ambush King", "Competitive Nature", "Windy Sniper", "First Kill", "Social Killer", "Big Bang Splat", "Kill Tally Survivor", "Kill Tally Killer", "Flag Bearer", "Dog Tag Collector", "War Host", "A Stones Throw", "Target Exploded", "Team Leader", "Cooperative Play", "A Seasoned Sniper", "Long Shot Hot Shot", "He Tripped!", "Sneaky", "Fingered", "Exploding Pants"];

    assert.strictEqual(officialAchievementNames.length, 71, "sanity check on this test's own reference list");

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

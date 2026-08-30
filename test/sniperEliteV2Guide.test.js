import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/sniper-elite-v2.js";

test("the Sniper Elite V2 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "sniper-elite-v2-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "sniper-elite-v2");

});

test("the Sniper Elite V2 guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Sniping Skill & Trick-Shot Feats",
            "Campaign Missions & Challenges",
            "Co-op Overwatch & DLC Missions",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 47-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /47 Steam achievements/);

});

test("every one of the 47 official Sniper Elite V2 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Front and Center", "Mousetrap Fuse", "Ear Plugs", "Fuel Tank", "Silent but Deadly", "Deadeye", "Go the Distance", "Iron Lung", "Potato Masher", "World Record", "Gung Ho", "Head Honcho", "Jungle Juice", "Pass the Buck", "Double Dose", "Cooking Off", "Make Every Bullet Count", "Hide and Hope", "Gold Rush", "Trainee Sniper", "Novice Sniper", "Apprentice Sniper", "Journeyman Sniper", "Skilled Sniper", "Pro Sniper", "Expert Sniper", "Master Sniper", "Veteran Sniper", "Feared Sniper", "Legendary Sniper", "Sniper Elite", "Get Off the Ground", "High and Mighty", "Fish Tank", "Kilroy was Here", "Target Spotted!", "Target Eliminated!", "Bedpan Commando", "Bomb Happy", "Detonator", "Can Do!", "Silence is Golden", "Smoking Kills", "You were only supposed to...", "Watchmen", "Secret Service", "Shoot the Alps"];

    assert.strictEqual(officialAchievementNames.length, 47, "sanity check on this test's own reference list");

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

import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/king-arthur-knights-tale.js";

test("the King Arthur: Knight's Tale guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "king-arthur-knights-tale-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "king-arthur-knights-tale");

});

test("the King Arthur: Knight's Tale guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        ["Overview","Campaign & Story","Camelot & Heroes","Combat Feats","Suggested Order"]
    );

});

test("the Overview states the verified 59-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /59 Steam achievements/);

});

test("every one of the 59 official King Arthur: Knight's Tale achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Back from the Dead","Knights of the Cresenct Table","Ultra-Heavy","Ready to Fight","Field Day","Treasure Hunter","Crypt? What Crypt?","The Very Purpose of a Knight","I Shall Bere Your Noble Fame ","Knights of the Round Table ","Disciples of the Four Branches","Alright… We'll Call It a Draw","A Person of Principle","A Second Chance ","It's Only a Model ","Master Builder","Wisdom is Better","One Brick at a Time","Decisions, Decisions","A Powerful Trinket","The Penny Knight","Forever a Trainee","'Tis but a Scratch!","Master of the Elements","Cleave It To Me","It's a Trap!","None Shall Pass","Get Lost!","Out of My Way!","Frugal Knights","Overwatcher","Bully King","AvaLAN Party","Fire Walk With Me","Surprise Party","Bloodbath","Floor Sweep","Fortune Favors Fools","One Step Ahead","Just a Flesh Wound","My Life for Camelot","Team Arrowhead","Conqueror of Avalon","Dawn Before Midnight","The Wounded King","His Final Despair","The Dark Lord of Camelot","See the Consequences","Explorer of Avalon","Savior of Avalon","Demon Slayer","Valiant Defender","Pray for my Soul","Just a Rotting Corpse","Tristan & Isolde","The Trials of Sir Tewelyn","Painted Devils","Rogues and Renegades","Silver Twilight"];

    assert.strictEqual(officialAchievementNames.length, 59, "sanity check on this test's own reference list");

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

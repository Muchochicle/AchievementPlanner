import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/gears-tactics.js";

test("the Gears Tactics guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "gears-tactics-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "gears-tactics");

});

test("the Gears Tactics guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        ["Overview","Campaign & Story","Kills & Combat Feats","Skills, Side Missions & Loadout","Jacked Game Mode","Completion","Suggested Order"]
    );

});

test("the Overview states the verified 61-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /61 Steam achievements/);

});

test("every one of the 61 official Gears Tactics achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Grubslayer","Grubslaughter","Grubpocalypse","I could do this all day","Tick Tick Tick...","Boom!","God-like","Immortal","Tactics!","World on Fire","Hell of a shot","The bigger they are, the harder they fall","Maybe too much spine...","Broken hand, broken heart","Dead men tell no tales","Champion of Vasgar","Hero of Vasgar","Savior of Vasgar","Smash!","Fortuna Audaces Sequitur","Everyone stay cool, this is a robbery!","Stronger Together","We’re in the endgame now","Legen (wait for it)…","…dary!","I am Ironman","I never miss","Happy Killmore","I've got your 'BOOM' right here!","The path of the righteous man","BOGO","Trick Shot","Demolition Expert","High Noon","Ain't no one like me, 'cept me!","Immortal Legion","Seriously Tactical","Check out the big brain on Brett!","Piñata","Snafu","Aw man, I shot Marvin in the face","Oh I'm sorry did I break your concentration?","We should have shotguns for this...","Backdoor Man","Three Count","Trouble in Paradise","Midnight Hour","Up Up Down Down","The Big Ending","Great vengeance and furious anger...","Zed's dead, baby.","For he is truly his brother's keeper...","Number 5 is alive!","One For All!","Jack and the Beanstalk","All For One!","You can't see me!","I've done the whole mind control thing...","Untouchable","Suit Up!","Seriously Jacked"];

    assert.strictEqual(officialAchievementNames.length, 61, "sanity check on this test's own reference list");

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

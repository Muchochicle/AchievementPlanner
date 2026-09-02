import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/golf-with-your-friends.js";

test("the Golf With Your Friends guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "golf-with-your-friends-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "golf-with-your-friends");

});

test("the Golf With Your Friends guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        ["Overview","Counters & Scoring","Courses on Classic","Courses on Dunk & Hockey","Suggested Order"]
    );

});

test("the Overview states the verified 83-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /83 Steam achievements/);

});

test("every one of the 83 official Golf With Your Friends achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Beginner Putter","Amateur Putter","Master Putter","TIMBER!","Friends With Pharaoh's","Hole in one!","Not enough time in the day!","Not enough time in the week!","Raise the limit!","Fly, fly away!","Nice shot!","Getting good!","On par!","Magical!","BOO!","Sweet tooth!","Roar!","Timber Hoops","Dunks with Pharaohs","Midnight swish","Nightmarish game of basketball ","Sweet dunk!","Prehistoric lay-Up","Treemendous!","Parfect!","Twinkle twinkle little par","Can't spook me!","That was a rocky road","Your Ancestors would be proud","Paaarrrrrrr!","CANNON BALL!!!","Anchors aweigh!","Haunted Hat Trick","Shoot out in the sand","Penalty shot with pirates","Face off in the forest","Light the Lamp","Sweet shot","Dino defender","Blast off!","Incoming!","Unnatural History","Crash Landed","Space Jamming","Catch!","A History of Dunk ","Ring of Fire","One small goal for man","Hockey Hand Grenade ","Hockey, A History","Fire Puck","Scientific Precision","Targetted Destruction","Historic Achievement","The Highest Ground","Locked Up","Prison Yard Dunk","Sin Binned","No Prison Can Hold Me!","Golf With Your Friends","Who's The Food Now?","The Course Is That Way","Stay On Target","Under the Sea","Deep Dunker","Back of the Net","Blacklight Boss","Castle Crashing","I'm The King of the Castle","Belle of the Ball","Bouncing on Ice","Into the Void","Eye See You!","Dunking in the Dark","Howe Did I Get Here?","Back In Time For Tee","You’re the Best, By Par","Folly-oop","Ruins or Rink?","Friends in High Places","Pride of Zeus","Hermes' Apprentice","Slapshot that on a Vase!"];

    assert.strictEqual(officialAchievementNames.length, 83, "sanity check on this test's own reference list");

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

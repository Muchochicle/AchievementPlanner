import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/battlefield-hardline.js";

test("the Battlefield Hardline guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "battlefield-hardline-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "battlefield-hardline");

});

test("the Battlefield Hardline guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        ["Overview","Single-Player Campaign","Multiplayer","Suggested Order"]
    );

});

test("the Overview states the verified 62-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /62 Steam achievements/);

});

test("every one of the 62 official Battlefield Hardline achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["On the Job","Pressure Applied","Bumpy Ride","Deal? What Deal?","Good Guys","You Probably Have Questions","Snow Blind","Hollyweird","From Their Cold, Dead Hands","Some Damn Fine Fireworks","Served Cold","Keep Digging, Detective","By the Book","You Tazed Him, Bro!","Watched, Dawg","You're Getting Good at This","Damn Thing Doesn't Work","Cape and Ears Not Included","Fast Rope Expert","Almost an Expert","True Detective","Motley Crew","Real Action Hero","Their Own Medicine","Graceful Exit","Knock Knock","A Craftsman's Tools","Hollywood Hideaway","BYOB","Social Climber","Case Closed","Super Cop","Blue Eagle","Bring 'em to Justice","Dare Devil","One Good Cop","World's Greatest Detective","The Big Score","Electric Company","Menz in the Hood","Dead or Alive","Got Your Back","Enforcing the Law","Operation Successful","Mechanical Trigger Finger","Have Some Professionalism","Tommy's Favorite","Nailed It!","That's Not a Knife!","Small Crew, Big Job!","Become Legend","Grandpa's Automatic","Bag of Tricks","I'll Be Back!","Here's Johnny!","Test Your Mettle","The Ultimate Betrayal","Bio-Beware!","Locked & Loaded, Good to Go","Dressed to the Sixteens","Bolt From the Blue","Ghost Ride the Whip"];

    assert.strictEqual(officialAchievementNames.length, 62, "sanity check on this test's own reference list");

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

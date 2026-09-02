import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/lonely-mountains-downhill.js";

test("the Lonely Mountains: Downhill guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "lonely-mountains-downhill-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "lonely-mountains-downhill");

});

test("the Lonely Mountains: Downhill guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        ["Overview","Bikes, Cosmetics & Base Mountains","Base Challenges & Resting Places","Crashes & Feats","DLC Islands","Suggested Order"]
    );

});

test("the Overview states the verified 84-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /84 Steam achievements/);

});

test("every one of the 84 official Lonely Mountains: Downhill achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["n+1","Now we're a familiy!","4WD","Welcome to the Ride Club","Can you ever have enough bikes?","Fashion Victim","Riding in Style","Born to ride!","The Legend of the Fall","Drop it like it's rock!","The Rocky Mountain Rider Show","Just Trailing","Bikeopath","Indian Summer Ride","Riding High","From Rock to Rock","It's all Downhill from here","Free Rider","No ride like a night ride","The Ride is Dark and Full of Terrors","Stop and Smell the Brakes","Top of the World","Peace and Quiet","Moments > Segments","Lonely Places","Highlander","Falling is like flying 99% of the time","Ride Forest! Ride!","Do it like Jason!","Rolling, Rolling, Rolling!","No brakes, high stakes!","Ride it like you stole it","Jack of all Trails","Like a Gazelle","Lycra Runner","Off the beaten tracks","Offroad King","Gravity","King of Bikes and Master of Mountains","Who pays all the hospital bills?","Sticks and Stones do break your bones!","I hope the bike is okay!","That needs a bandage","Tree Hugger","You Rock!","Spikey Bikey!","Maybe try a boat?","1621","Message in a tree","Welcome to Eldfjall","That was easy, wasn't it?","On Fire!","One with the mountain","Night Rider","My private island","It's hot in here","Welcome to Lostman's Grove!","Easy Rider","No Risk, No Ride","Eat. Sleep. Bike. Repeat","Ride the Night Away","Into The Wild","Just keep riding","Welcome to Phantom Heights!","Easy peasy, Lemon squeezy","Lord of the Rides","Nothing like a good days ride","Just a One Night Ride","Life's simple Pleasures","Mamma mia, here I go again","Welcome to Whispering Lake!","Child's Play","Natural Born Rider","The Rider is dead, long live the Rider","All Riders are grey in the dark","My Happy Place","It's Groundhog Day","Welcome to the Carnelian Cavern!","Easy as ABC","Ride Hard or Ride Home","Unstoppable","Wanna Rock And Ride All Night","Places in the Sun","Oops, I did it again!"];

    assert.strictEqual(officialAchievementNames.length, 84, "sanity check on this test's own reference list");

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

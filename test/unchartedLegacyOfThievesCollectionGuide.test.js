import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/uncharted-legacy-of-thieves-collection.js";

test("the UNCHARTED: Legacy of Thieves Collection guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "uncharted-legacy-of-thieves-collection-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "uncharted-legacy-of-thieves-collection");

});

test("the UNCHARTED: Legacy of Thieves Collection guide has all 9 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        ["Overview","Uncharted 4: Completion & Collectibles","Uncharted 4: Combat Feats","Uncharted 4: Secret Trophies","The Lost Legacy: Completion & Collectibles","The Lost Legacy: Combat & Driving Feats","The Lost Legacy: Secret Trophies","100% Completion","Suggested Order"]
    );

});

test("the Overview states the verified 101-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /101 Steam achievements/);

});

test("every one of the 101 official UNCHARTED: Legacy of Thieves Collection achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Charted! - Explorer","Charted! - Light","Charted! - Moderate","Charted! - Hard","Charted! - Crushing","Charted! - Speedrun","First Treasure","Treasure Hunter","Treasure Master","Relic Finder","Jot This Down","Lost Art of Journaling","Take a Note","Lost History","Head of the Class!","You Have a Head for this Business","Hangman's Bullet","Stealth First Ask Questions Later","Shh Sleep Now","I Thought I Heard Something","Run-and-Gunner","Leapfrog","Unstoppable!","Sharpshooter","Rushing Roulette","Ghost in the Cemetery","Butterfingers","Boom County","Defeat 10 in 60 -- China Lake GL","Hang Tough!","Run the Table","Hitting a Brick Wall","Peaceful Resolution","Wingman","Cliffhanger","Ludonarrative Dissonance","Don't Feed the Animals","I Accidentally All the Guns","Not a Cairn in the World","I Can See My House From Here!","Trials and Tribulations","Best Score!","Gift of Gab","Marco Polo Returns!","Stage Fright","Just Floor It!","On Porpoise","Still Got It!","Glamour Shot","Swordmaster","Legacy Found!","Progress Demands Sacrifice","Casual Treasure Hunter","Hardcore Treasure Hunter","Collector of Antiquities","Shake For Your Fortune","Token For Granted","Yas Queen","Five Finger Discount","Picks or It Didn't Happen","#nofilter","Pics or It Didn't Happen","Getting to Know You","Si Vis Pacem Para Bellum","Were You Counting?","10 Up, 10 Down","Frazer. Chloe Frazer.","Itchy Trigger Finger","Stay and Pray","Tip of the Hat","Royal Demolitionist","On the Grid","I Was Never Here","C-Phoria","Just the Wind","Now You See Me...","Wingwoman","The Way of the Warrior","The Sampler","Make an Entrance","Bring in the Big Guns","4x4x4","Drop Me a Line","Your Prize","Best Driver in the Business","Flawless Gauntlet","Quiet as a Mouse","Jungle Gym","Stunt It!","Shadow Theater","Marco Po-No","Fingersmith","Overkill","Cannonball!","Right Under Your Nose","Combat Racing","Backseat Driver","Here, Catch!","Let's Not Get Caught","A Thief's Legacy","Don't Ruin The Moment"];

    assert.strictEqual(officialAchievementNames.length, 101, "sanity check on this test's own reference list");

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

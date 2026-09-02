import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/arma-3.js";

test("the Arma 3 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "arma-3-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "arma-3");

});

test("the Arma 3 guide has all 8 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        ["Overview","The East Wind & Bootcamp Campaigns","Apex Protocol, Contact & Old Man","Laws of War, Tac-Ops, Tanks & Art of War DLC","Showcases, Firing Drills & Time Trials","Zeus, Eden Editor & Workshop","Helicopters & VR Training","Suggested Order"]
    );

});

test("the Overview states the verified 123-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /123 Steam achievements/);

});

test("every one of the 123 official Arma 3 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Tactical Withdrawal","Guerilla Warfare","Question of Loyalty","Peacekeeper","Every Man for Himself","Start Your Engines","Aspiring Kart Racer","Formula Kart","Clean Race","Speed Demon","Competitive Shooter","Aspiring Sharpshooter","Firing Drills Champion","Clean Drill","Bonus Targets","Hero's Journey","Deity for a Day","Godly Creations","Worshiper","Merciful God","This is War","Scapegoat","First Deployment","K.I.A.","Drill Instructor","Ready for Duty","Star Recruit","Virtual Reality","Virtual Command","Real Virtuality","Lock and Load","Contributor","Subscriber","Perfectionist","Relentless Creator","Virtual Pilot","Advanced Virtual Pilot","Virtual NOE Flight","Aspiring Stunt Pilot","Golden Rotorhead","Nap of the Earth","Dust-Off","Airbridge","Showtime","Meet and Greet","Showcasing","Virtual Shooter","Bad Omens","Dodge This","Hacker","Carrier","Hip Shooter","Conservative Sharpshooter","Virtual Vehicle Inspection","Mass Virtual Destruction","Rock Stable","Marksmen Weapon Master","Model Student","Puppeteer","Dressing Doll","New Dimension","Firestarter","Fast Extract","Warlock Down","Better With Friends","Lone Wolf","The Bigger Picture","None The Wiser","Welcome to Tanoa","Transport Service","Game Plan","With Mark of the Serpent","Changing the Balance","Mr. Anderson","Bomberman","Deadstick Landing","Get Arrested","Armed and Dangerous","Punch Out","Remnants of War","Memories of Oreokastro","Humanitarian","Explosive Treasure","Collateral Damage","Aspiring Aid Supplier","Fast Aid","Different Perspective","Forward Observer","Beyond Hope","Changing Places","Stepping Stone","Seasoned Warfighter","Steel Pegasus","Savior","Lifeline","Tank Rally","Hammer Time","No Requiem","From Within","Easy Money","Steel Sniper","Commander","Size Doesn't Matter","In It Together","Dome Free","Devil's Due","Status Quo","Man of the People","Respectfully, Sir","Loyalist","This is War 2.00","Fortress of Fun","Lost and Found","Picture Perfect","Dressed to Impress","Art and Soul","Connoisseur","Dead Letter","Still Life","Renaissance Man","Arma Invaders","Mod Lover","Arma'd"];

    assert.strictEqual(officialAchievementNames.length, 123, "sanity check on this test's own reference list");

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

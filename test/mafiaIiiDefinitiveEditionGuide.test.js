import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/mafia-iii-definitive-edition.js";

test("the Mafia III: Definitive Edition guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "mafia-iii-definitive-edition-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "mafia-iii-definitive-edition");

});

test("the Mafia III: Definitive Edition guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        ["Overview","Main Story","Underbosses & Rackets","Combat & Driving Feats","Faster, Baby! & Stones Unturned DLC","Sign of the Times DLC","Suggested Order"]
    );

});

test("the Overview states the verified 85-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /85 Steam achievements/);

});

test("every one of the 85 official Mafia III: Definitive Edition achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Before They Bury You","Pray on the Way Up","It's a Brave New World","Fish Gotta Eat","Everyone Will Notice","My Name is Lincoln Clay","Little Late for That","The Poor Sumb****","Burn Like Napalm","Certainly Was Exciting","Yet Here We Are","Somethin' I've Gotta Do","For Old Time's Sake","Cut & Run","We Partners Now","Sure Thing, Boss","IRA Don't Ask","I Need a Favor",".45 in My Hand","Cash in Hand","Baby, You're a Rich Man","Racketeer","We're in This Together","Just You and Me","Trust","Family","Hole in Your Pocket","Big Earner","The New Boss","Live Another Day","No Loose Ends","Can't Trust a Rat","Custom 358","Testing the Shocks","New Bordeaux Drifter","One Good Turn","Wrecker","Combat Specialist","Shh, shh","Closed Casket","Softened 'Em Up","I'm Goin' In!","Standard Communication Grid","Recruited to 5th SFG","Bon Appétit!","Next Time Swim Faster","Sending A Message","Code 112","Insurance Risk","Never Saw it Coming","Flambé","Real Nice Time","The Connection to Cuba","There's a War Goin' On","Jesuit in New Mexico","Another Brother Falls","Kickin' Up Dust","Ain't Nowhere Safer","Concerned Citizens","Herbalist","Mr. Green Thumb","That Good Connect","Campaign Strategy","Danger Close","Trap Game Strong","Creature of Habit","Devotchka","Big Money","Aid and Comfort","There Are No Dominos","Operation: Deep Sleep","Did I Forget Something?","Big Fat Party Animal","Skip Trace","Spotter","A Little Closure","Covered in Blood","Haunted Places","…Worse Than Dying","Barkeep","Amateur Bouncer","Pour Sammy!","Pop, Pop","Blade of Death","Street Rocket"];

    assert.strictEqual(officialAchievementNames.length, 85, "sanity check on this test's own reference list");

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

import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/final-fantasy-xv-windows-edition.js";

test("the FINAL FANTASY XV WINDOWS EDITION guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "final-fantasy-xv-windows-edition-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "final-fantasy-xv-windows-edition");

});

test("the FINAL FANTASY XV WINDOWS EDITION guide has all 8 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        ["Overview","Main Story: The 15 Chapters","Exploration, Camp Skills & Driving","Combat, Magic & Summons","Sidequests, Hunts & Superbosses","Episode DLCs (Gladiolus, Prompto, Ignis, Ardyn)","Royal Edition Additions","Suggested Order"]
    );

});

test("the Overview states the verified 97-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /97 Steam achievements/);

});

test("every one of the 97 official FINAL FANTASY XV WINDOWS EDITION achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Insomnia's Waking Nightmare","Departure","No Turning Back","The Open World","Living Legend","Dark Clouds","A Way Forward","Party of Three","Seaworthy","Callings","The Heart of a King","In the Dark","End of Days","Redemption","Homecoming","Chosen King","Learner's Permit","Chocobo Jockey","Regalia Pilot","Quadruple Threat","Faithful Heir","New Power","Self-Improved","Self-Mastered","Angling Rookie","Survival Rookie","Photo Rookie","Cooking Rookie","Angling Expert","Survival Expert","Photo Expert","Cooking Expert","Just Hangin' Around","Brother-in-Arms","Blind Spot","Noct You Like a Hurricane","The Power of Kings","Magical Worker","Black Mage","Divine Intervention","High Five for Justice!","Immortal Photobomb","Spinning a Yarn I","Spinning a Yarn II","Spinning a Yarn III","Spinning a Yarn IV","Spinning a Yarn V","Weaving a Tapestry","My First Hunt","Tortoise Toppler","Picker-Upper","Column Colossus","Master and Pupil","Shield of the Chosen King","Transcendence","No Pain, No Gain","A New Blademaster","Unseen Assassin","Sharp Shooting","Field Photographer","Unbreakable Bonds","An Emperor Deposed","The Dragoonslayer","Dogged Rider","Seize the Moment","Love Turned Tragic","Beacon of Hope","Kingly Blessing","One with Your Blade","Come Back, Kenny!","Royal Retinue Rumble","Cleaving a Path","Let There Be Light","Hidden Power","Swift Retaliation","Master of the Elements","A Noble Sacrifice","Altissian Ambassador","Another Path","A New Protagonist","Maiden Voyage","Narwhal Watching","Pursuit of Knowledge","Speed Daemon","The Power Within","Tri-Headed Triumph","Through the Dimensional Rift","Blessed by All","Chocobreeder","Beacons of Hope","Fallen Savior","The Pyreburner's Keeper","King of the Daemons","The Nightmare Ends","Mastering the Darkness","Insomnia Insurgence","Return of the Founder King"];

    assert.strictEqual(officialAchievementNames.length, 97, "sanity check on this test's own reference list");

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

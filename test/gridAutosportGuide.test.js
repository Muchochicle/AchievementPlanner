import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/grid-autosport.js";

test("the GRID Autosport guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "grid-autosport-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "grid-autosport");

});

test("the GRID Autosport guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Career: Disciplines & Championships",
            "Online & Custom Cup",
            "Time Challenges & Legends DLC",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 60-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /60 Steam achievements/);

});

test("every one of the 60 official GRID Autosport achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Sign on the dotted line", "Just warming up", "First of Many", "Brand Awareness", "Through the Hoops", "Top step", "Well rounded education", "Extra curricular", "Toured with the Best", "Endured with the Best", "Raced with the Best", "Flowed with the Best", "Battled with the Best", "No longer the rookie", "Moving up in the world", "A good track record", "Making your mark", "Been around the block", "One for the cabinet", "It's been a long road", "Pop the cork", "I make this look good", "King of the Streets", "Done the Tour", "No longer afraid of the dark", "Mr Consistent", "Need some new tyres", "Street Cred", "I've got what Rick Scott's got", "Everyone's a winner", "A True Legend", "Here are the keys", "Member of the Pack", "Durable", "Downforce to be reckoned with", "Tuned In", "Streetwise", "Tek-Domination", "An icon in the pit lane", "FTW", "I've stopped counting", "Just the way I like it", "Long-Haul Legend", "Leading them off", "Tweak to Peak", "Jack of all Trades", "Badge of Honour", "The Journeyman", "Sofa, so good", "Side-splitting", "Riviera Runaway", "Golden Coast", "King of the Hill", "Pearl of the Orient", "British Touring Legend", "European Touring Legend", "International Touring Legend", "Holeshot", "Flight of the Condors", "Drag Queen"];

    assert.strictEqual(officialAchievementNames.length, 60, "sanity check on this test's own reference list");

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

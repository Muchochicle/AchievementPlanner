import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/tom-clancys-the-division-2.js";

test("the Tom Clancy's The Division 2 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "tom-clancys-the-division-2-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "tom-clancys-the-division-2");

});

test("the Tom Clancy's The Division 2 guide has all 8 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        ["Overview","Washington, D.C. Campaign","Progression, Gear & Specializations","Open World & Co-op","Dark Zone, PvP & Raids","Warlords of New York","Battle for Brooklyn","Suggested Order"]
    );

});

test("the Overview states the verified 67-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /67 Steam achievements/);

});

test("every one of the 67 official Tom Clancy's The Division 2 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Checking In","Opening the Vault","Bunker Buster","Sick Note","Jailbreak","Global Communications","Getting the Word Out","Season Ticket","Strategic Extraction","Into the Wilderness","State of the Union","Hard as Nails","Rebuilding DC","Undressed to Kill","Command and Control","Group Therapy","A Friend in Need","Help Me!","Suits You, Sir!","TV Cop","Negative Ramos!","Patchwork","Resourceful Agent","Dark Zone: Safe House","Dark Zone: Extraction","Dark Zone: Takedown","First Among Equals","Clan War","Big Game Hunter","Autograph Hunter","Arrow to the Knee","Next Level Operative","Strength in Numbers","For Posterity","Crafty Collector","Taste of the Exotic","Specialized","Best of the Best","Project Management","King of the Skill","Dress to Impress","Dark Zone: Occupied Hijack","Washington Raiders","Caged Animal","Country Retreat","Drilling Down","Reactor Heist","To Sum It All Up","You Can't Have Him","Jail Break","Deep Underground","Plummeting Stock","Boiling Point","Liberation","Almost a band","Under Lady Liberty's Gaze","Extreme Manhunt","Shut that door (again)","Over The Hill","Iron Breakers","Brooklyn Brains","Brooklyn Controller","Brooklyn Bounty Hunter","Brooklyn Local","Brooklyn Buddies","Brooklyn Backup","Hometown Hero"];

    assert.strictEqual(officialAchievementNames.length, 67, "sanity check on this test's own reference list");

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

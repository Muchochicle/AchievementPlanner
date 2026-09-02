import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/wolfenstein-youngblood.js";

test("the Wolfenstein: Youngblood guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "wolfenstein-youngblood-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "wolfenstein-youngblood");

});

test("the Wolfenstein: Youngblood guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        ["Overview","Story & Bosses","Combat & Kills","Weapons, Abilities & Upgrades","Exploration & Collectibles","Suggested Order"]
    );

});

test("the Overview states the verified 60-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /60 Steam achievements/);

});

test("every one of the 60 official Wolfenstein: Youngblood achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Teamwork","Resistor","Swatter","Immovable object","Bomber","Supreme ninja","Stealthy","Ripper","Trigger happy","Prepper","A red mist","Rasputin","Intruder","Partisan","Airborne","Sting like a bee","Hard boiled","Right tool for the job","Heavy artillery","American Football","Predator","Supportive","Tacticool","Kitted out","Gear head","A better you","Extra everything","More human than human","See my vest","Brother 1","Brother 2","Brother 3","God Key","Plain sight","World's best Dad","Among friends","Airship down","Explorer","Expert explorer","Tribute","Audiophile","Librarian","Hacker","3-D","Banker","Dark Days","Cinephile","One woman army","Gunslinger","Chopper","A cloud of lead","Electric feel","Dust to dust","Demolition woman","Hammer time","Spray and pray","Get the strap","Chop and slice","God mode","Vive la révolution!"];

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

import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/dead-space-3.js";

test("the Dead Space 3 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "dead-space-3-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "dead-space-3");

});

test("the Dead Space 3 guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        ["Overview","Main Story","Difficulty & Modes","Collectibles & Crafting","Combat & Secrets","Suggested Order"]
    );

});

test("the Overview states the verified 58-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /58 Steam achievements/);

});

test("every one of the 58 official Dead Space 3 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Stranger in a Strange Land","Space Odyssey","Critical Mass","Snow Crash","Intestinal Fortitude","Hydra","Together as One","Infernal Machine","Shoot for the Moon","Under a Buck","Space Ace","Hungry","Drill Sergeant","Weedkiller","Get On My Level","The Explorer","Aren't You Thankful?","Epic Tier 4 Engineer","Survivalist","Gun Collector","Aliens","The Professor","The Librarian","The Armorer","There's Always Peng!","My Buddy","Metal Detector","Strapped","Circuit's Edge","EMT","Full House","RIG Master","Master Plan","From the Jaws","Share and Share Alike","Medic!","Ghosts of the Past","Architect","Axes High","Payback","Close Encounter","Go for the Limbs!","And Then We Doubled It!","Slow Mo","Blast Corps","Shootbang","Empty Chamber","Dropping Acid","Electric Lawnmower","Overpowered Healing","Bad Moon Rising","Heretic","True Believer","Get to the Chopper!","Pure Lunacy","Just the Tip","Heaven Can Wait","Supercharger"];

    assert.strictEqual(officialAchievementNames.length, 58, "sanity check on this test's own reference list");

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

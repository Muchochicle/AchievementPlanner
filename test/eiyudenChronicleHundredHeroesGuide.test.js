import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/eiyuden-chronicle-hundred-heroes.js";

test("the Eiyuden Chronicle: Hundred Heroes guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "eiyuden-chronicle-hundred-heroes-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "eiyuden-chronicle-hundred-heroes");

});

test("the Eiyuden Chronicle: Hundred Heroes guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        ["Overview","Story & Heroes","The Town","Minigames & Guild","Combat & Grinds","Suggested Order"]
    );

});

test("the Overview states the verified 56-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /56 Steam achievements/);

});

test("every one of the 56 official Eiyuden Chronicle: Hundred Heroes achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Legendary Hero","Last One to Appear","Hero’s Victory","I Love Weapons!","Town-Building Hero","Hero Beyond Time and Space","Invincible Hero","Monument Builder","Hero of Commerce","A Place for Heroes to Return","Treasure Hunter","The Primal Lens","A Day in the Life of the Watch","Hometown on Fire","Raising the Flag of Resistance","Conquering the Proving Grounds","Hishahn is Defended","Valorous Shi’arcs","Bidding Father Farewell","I Will Reclaim This Place","Songs of Valor on the Great Sandy Sea","Sweet Taste of Victory","Eve of the Battle","Trusted Hero","Hero Combo Master","Polished Partner","Hot Spring Enthusiast","Hero of Destruction","Know Thy Enemy, Know Thyself","Expert Appraiser","Town Building Beginner","The Hero Who Fished the World","The Hero Whom the Runes Smile On","I Like Runeshards!","Gourmand Hero","Art Is Explosive!","I Love Animals!","Eggfoot Breeder","Eggfoot Race Hero","Whirled Peace","Beigoma Collector","Card Game Champ","Card Collector","Valorous Finned Hero","Skilled in War","Epic Success!","A Distinguished Theater","A Big Bag and a Big Sack","Honorable Statue","Hot Spring Revelry","Take a Proper Rest","Binge Shopping Hero","Are You Working Hard?","Guild Founder","Bond of Heroes","Ace Forager"];

    assert.strictEqual(officialAchievementNames.length, 56, "sanity check on this test's own reference list");

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

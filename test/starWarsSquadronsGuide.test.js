import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/star-wars-squadrons.js";

test("the STAR WARS: Squadrons guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "star-wars-squadrons-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "star-wars-squadrons");

});

test("the STAR WARS: Squadrons guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        ["Overview","Campaign","Fleet Battles & Multiplayer","Dogfights & Combat Feats","Progression & Customization","Suggested Order"]
    );

});

test("the Overview states the verified 47-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /47 Steam achievements/);

});

test("every one of the 47 official STAR WARS: Squadrons achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["The Galaxy's Finest (Story Mode)","The Galaxy's Finest (Pilot)","The Galaxy's Finest (Veteran)","The Galaxy's Finest (Ace)","Dressed for the Job You Want","A Starfighter of Your Own","Special Modifications","Victory for the New Republic","Victory for the Empire","Heavy Hitter","Begin the Ceremony","Found Your Place","I Have You Now","Stay on Target","Stronger Together","Stun 'Em","Sound Strategy","Fearless","Back From the Brink","I Know a Few Maneuvers","Trigger Happy","Squadron Hunter","Unkillable","The Trap is Set","Shallow Grave","Across the Stars","Got 'Em","Denied","Mission Accomplished","Fully Decorated","Fracture at Fostar Haven","Together, Vanguard","Asset Secured","Temporary Guardian","Safety in the Storm","Flames Over Mon Cala","Baited","Against the Current","Punch It","Combat Pilot","Unstoppable Ace","Ultimate Weapon","Stomped","A Better Idea","A Promising Career","Seasoned Star Pilot","Great Shot, Kid"];

    assert.strictEqual(officialAchievementNames.length, 47, "sanity check on this test's own reference list");

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

import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/horizon-forbidden-west-complete-edition.js";

test("the Horizon Forbidden West Complete Edition guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "horizon-forbidden-west-complete-edition-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "horizon-forbidden-west-complete-edition");

});

test("the Horizon Forbidden West Complete Edition guide has all 10 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        ["Overview","Main Story","Faction & Companion Quests","World Activities","Machines, Mounts & Gliding","Gear & Skills","New Game+ & Ultra Hard","Burning Shores DLC","100% Completion","Suggested Order"]
    );

});

test("the Overview states the verified 80-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /80 Steam achievements/);

});

test("every one of the 80 official Horizon Forbidden West Complete Edition achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["All Achievements Obtained","Reached Level 20","Reached Level 30","Reached Level 50","Reached the Daunt","Secured Passage to the Embassy","Attended the Embassy","Established the Base","Recovered AETHER","Recovered POSEIDON","Recovered DEMETER","Recovered Beta","Discovered Faro's Fate","Flew on the Wings of the Ten","Discovered Nemesis","Chose a Desert Commander","Saved the Daunt","Aided Kotallo","Healed the Land-gods","Recovered Alva's Data","First Tallneck Overridden","All Tallnecks Overridden","First Rebel Camp Completed","Defeated Asera","First Core Overridden","All Cores Overridden","Obtained 3 Stripes at a Hunting Ground","Obtained 3 Stripes at All Hunting Grounds","All Acquisition Machines Killed","All Recon Machines Killed","All Combat Machines Killed","All Transport Machines Killed","Rode All Regular Mounts","All Machine Types Scanned","Completed a Long Glide","Completed 2 Flying Mount Quests","Won 2 Gauntlet Runs","Completed a Set of Salvage Contracts","Completed 4 Rebel Outposts","Completed 3 Relic Ruins","Completed Arena Challenge Set","Defeated Machine Strike Challengers","Obtained All Weapon Classes","Used all Elemental States","Performed 3 Melee Combos","Stealth Killed 10 Machines","Tore off 100 Components","Picked up 5 Heavy Weapons","10 Types of Machine Overridden","Defeated the Enduring","Fully Upgraded a Valor Surge","Upgraded 3 Weapons","Upgraded 3 Outfits","Upgraded Every Pouch Type","Enhanced Weapon with Coils","Unlocked 3 Weapon Techniques","Skill Tree Learned","Recovered 5 Different Collectables","Used Dye Flowers","Completed New Game+","Completed Ultra Hard","Obtained All New Game+ Rewards","All Quests Completed","Discovered the Ascension","Confronted Londra","Aided the Quen","Defeated Londra and His Horus","All New Skills Learned","Reached Level 60","Used Brimshine","Equipped an Elite Coil or Weave","Specter Gauntlet Upgraded","Cauldron THETA Core Overridden","All New Machines Scanned","Completed the Dino Digits Quiz","Recovered the Delvers' Trove","Recovered All Aerial Captures","Used Grapple Strike on Machines","Killed Machines While Gliding","Killed Bileguts and Stingspawn"];

    assert.strictEqual(officialAchievementNames.length, 80, "sanity check on this test's own reference list");

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

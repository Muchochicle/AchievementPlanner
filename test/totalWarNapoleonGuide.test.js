import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/total-war-napoleon.js";

test("the Total War: NAPOLEON guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "total-war-napoleon-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "total-war-napoleon");

});

test("the Total War: NAPOLEON guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Single-Player Campaigns & Feats",
            "Multiplayer Battles",
            "Multiplayer & Peninsular Campaigns",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 71-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /71 Steam achievements/);

});

test("every one of the 71 official Total War: NAPOLEON achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Revolutionary Cocarde", "The Ribbon of the Promising Strategist ", "The Bronze Date", "Russian Doll on Green Ribbon", "Bronze Tower of Pisa", "The Silver Dromedairy Legionaire", "Quadriga in Prussian Silver", "The Silver Olive Chaplet", "Golden Obelisk of the Pharaos", "The Imperial Crown on Brocade Band", "Hero of Arcole Commemorative Medal", "The Hand-and-Dagger on Black Chain", "The Seal of the Grand Coalition", "The People's Crown", "The Hero's Skull Badge ", "The Merchant's Navy Medal of Gratitude ", "Nautic Star Emblem", "Hardened Veteran's Badge", "The Imperial Wreath", "The Imperial School of Strategy Crest", "Shield of the Protector", "Diplomat's Pin", "The Medallion of the Imperial Psychopath", "The Explorers' Society Badge", "The Bronze Armchair of Comfort", "The Lion and Sabers Medal", "Marksman Brooch", "Imperial Fencing Academy Master's Needle ", "Historians' College Acknowledgement Badge", "Palace Guard Pendant", "The Eye of the Ever Watchful General", "Grand General Star", "Platinum Star of Glory", "The Leaden Seahorse", "Sailor's Medal", "Treasure Galleon Pendant", "The Star of the Fearless Buccaneer", "The Navy Cross", "Medal of the Unrelenting Storm", "The Golden Swallow", "Poseidon's Carriage in Gold", "Pendant of the Seven Winds", "Skull and Sabres on Iron Chain", "Defender's Cross of Honour", "Officer's Achievement Medal", "Mercenary Coin", "The Charging Guard Regiment Emblem", "The Horse-and-Cannon", "Veteran's Badge of Service", "Bella Ragazza Locket", "Nice City Key", "The Silver Sun", "The Crossed Sabres and Crescent", "Bronze Star on Red Ribbon", "The Imperial Laurels ", "Raging Bear Star", "The Imperatorial Double Eagle", "Quadriga with Iron Cross", "Royal Navy Glorious Fleet Badge", "The Golden Lightning", "Fighting Giants Commemorative Medallion", "St. Martin's Medal", "The Tireless Watchman Brooch", "Distinguished Service Medal", "The Spanish Crown", "Duke of Ciudad Rodrigo", "Marquis of Torres Vedras", "Conquistador Medal", "Duke of the Victory", "The Medallion of Secular Enlightenment", "Sangria Bottle of Friendship"];

    assert.strictEqual(officialAchievementNames.length, 71, "sanity check on this test's own reference list");

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

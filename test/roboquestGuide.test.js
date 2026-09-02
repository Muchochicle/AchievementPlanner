import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/roboquest.js";

test("the Roboquest guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "roboquest-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "roboquest");

});

test("the Roboquest guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        ["Overview","Runs & Progression","Combat Milestones","Classes & Loot","More Classes & Gathering","Feats, Secrets & Endless","Suggested Order"]
    );

});

test("the Overview states the verified 86-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /86 Steam achievements/);

});

test("every one of the 86 official Roboquest achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Haven 8","Taking it Back!","Moonwalker","Iron Maiden","Home Sweet Home","Oopsie...","Boss Punisher (Bronze)","Boss Punisher (Gold)","Boss Punisher (Silver)","Meet my Brobot","Field Mechanic","Party Bus","It's Gonna be a Looong Journey","Booyakasha","Special Delivery","Commando","Gotta Catch' Em All","Crystal Claimer (Bronze)","Crystal Claimer (Gold)","Crystal Claimer (Silver)","Damage Dealer (Bronze)","Damage Dealer (Gold)","Damage Dealer (Silver)","Just in Time","Robo-Regulator (Bronze)","Robo-Regulator (Gold)","Robo-Regulator (Silver)","Science Above All!","For the Swarm!","Engineer","Waaaaarp Zone!","Reboot","Best Buddy Forever","Hardened Guardian","Ultimate Guardian","The Power of Friendship","Perfect Run","Inspector Gadget (Bronze)","Inspector Gadget (Gold)","Inspector Gadget (Silver)","Ammo Belt","The Last Bastion","Whack-A-Mole","Mamma Mia","Bazaar Best Friend","Confrérie du Croissant","Pimp my Buddy","Legen... wait for it... dary!","Nest of Corruption","Log Collector (Bronze)","Log Collector (Gold)","Log Collector (Silver)","My Little Buddy","Shovel Knight","Elementary","Final Flash","Elementalist","Muscle +4000","Faster Than Light","Energy Wallet","Powercell Gatherer (Bronze)","Powercell Gatherer (Gold)","Powercell Gatherer (Silver)","What's That Lever For?","Fast and Furious","Sushi Master","Recon","The Long Hunt","Bot Skewer","Ranger","Spare Some Change?","Easy Peasy","Master Gambler","Wrench Picker (Bronze)","Wrench Picker (Gold)","Wrench Picker (Silver)","Superbot","Revenge","Hero Landing","Captain Mc Slice","Butlers Never Die","Portal Online!","Endless Journey","Evolution","BOOSTER!","Overperked"];

    assert.strictEqual(officialAchievementNames.length, 86, "sanity check on this test's own reference list");

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

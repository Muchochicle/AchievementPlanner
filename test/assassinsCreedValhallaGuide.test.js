import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/assassins-creed-valhalla.js";

test("the Assassin's Creed Valhalla guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "assassins-creed-valhalla-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "assassins-creed-valhalla");

});

test("the Assassin's Creed Valhalla guide has all 8 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        ["Overview","Main Story","Settlement, Raids & World Activities","Legendary Feats & Endgame","Wrath of the Druids DLC","The Siege of Paris DLC","Dawn of Ragnarok & The Forgotten Saga DLC","Suggested Order"]
    );

});

test("the Overview states the verified 92-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /92 Steam achievements/);

});

test("every one of the 92 official Assassin's Creed Valhalla achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["The Saga Begins","To England!","Hard Choices","The Order Is Revealed","The Good Saxon","Take My Hand","Calling in a Favor","The Enemy of My Enemy","In the Footsteps of the Gods","As It Was Foretold","England Subdued","Disorder of the Ancients","Rampage","It's Alive!","Tranquility","Equilibrium","Old School Treasure Hunt","Skadi's Hobby","Witch Hunter","Equine Attack","Silent Viking","Everyday Life","Overdesign II","Completionist All the Way!","Row Rage","We're in the End Game Now","A Picture of Grace","Builder","Home Sweet Home","Pioneer","Home Decor","Not the Norse You're Looking For","Face My Might!","Ultimate Refinement","Flying Eivor","Twinkle Twinkle","Archaeologist","Orlog Champion","Good Catch!","Full Mastery","Is There Anybody Out There?","Slam Master","Caladfwlch","It's Not a Bug, It's a Feature!","Seahorse","The Hidden Truth","Master Hunter","Dreamcatcher","Godly Reward","Worthy","Irish Legend","Ireland's Deliverance","Dawn of the Druids","Like a Druid","All Roads Lead to Dublin","The Legend of St. Patrick","King’s Maker","Double Trouble","Decked Out","All That Glitters","A True Master","Do What Is Right","Know What Is Right","We Nobles Three","Vive la Résistance","Future Past","Bad Bull","Vendange","Pat the Cats","Lèse-majesté","Spelunker","Crypt-ologist","Over the Hills…","Ashes of Svartalfheim","Hugr Incarnate","Expert Storyteller","It's All in the Wrist","Aesir Spelunker","Motsognir's Blessing","See No Evil","Flying Fortress","Full Master","Sacrificial Victory","Freedom Fighter","Pure of Heart","Crossing Dókkerland","High Kick","Royal Treatment","A Favored Customer","The Queen's Fall","Returning to the Roots","Heroes of Ancient Britain"];

    assert.strictEqual(officialAchievementNames.length, 92, "sanity check on this test's own reference list");

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

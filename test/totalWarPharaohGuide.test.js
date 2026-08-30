import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/total-war-pharaoh.js";

test("the Total War: PHARAOH guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "total-war-pharaoh-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "total-war-pharaoh");

});

test("the Total War: PHARAOH guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Ultimate Victories & Exploration",
            "Ancient Legacies & Leader-Specific Feats",
            "The Sea Peoples Update",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 76-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /76 Steam achievements/);

});

test("every one of the 76 official Total War: PHARAOH achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["My Name is Ozymandias, King of All This Land", "I am the Servant of Sutekh, He Needs No Other", "The Soul of Ra, Beloved of the Gods", "Small But Mighty", "Local Gods for Local People", "Born of Amun", "He Who Made Himself", "The Maker of Kings", "The Saviour of Hatti", "Horned is the Hunter", "Ultimate Explorer", "Levantine Rambler", "Anatolian Traveller", "God as Man", "Aspire to Greatness", "All This Mayhem", "The Great Idealist", "Foremost Among the Noble", "The Divine Potter", "Born of Thoth", "Intrepid Reformer", "The Eager Beaver", "Waiting for the Sun", "The Isolationist", "Stabby, Stabby, Stabbiness!", "The Usurper", "Humbler Origins", "Plans Within Plans", "Heqa-waset", "Gold Merchant", "The Great Water", "Seizure Through Stealth", "All Property is Theft", "The Crysophilist", "Tarhunna? TarhunNAH, More Like...", "I am the Deer King!", "Billy No Mates", "The Two Powerful Ones", "Reverse the Tide", "The Great Ancestor", "Manifest Death", "Burn the World", "The Future is Now", "Onwards & Upwards", "Internal Intrigues", "Revenge, Served Sweet & Cold", "Who is the Little One? A Pet Perhaps?", "A Man's World", "For the Public Good", "Lovers in Arms", "All Hope in Eclipse", "Universal Balance", "Isfet Rising", "Fortune Favours the Bold", "Fury & Flames", "Kemetian Adventurer", "Two Souls United", "Total Peleset", "Conqueror & Settler", "Father of the Peleset", "Leader of the Sea Peoples", "Sea Squatter", "The Divine Firestarter", "I Will Be Your Villain", "I Love the Smell of Collapse in the Morning!", "Tribal Unity", "Tribal Excellence", "Spoiled by War", "I Come in Peace", "To the Sea We Shall Return", "Look Upon Me and Despair!", "Lord of Fear", "Join the Dark Side!", "...but the Women and Children Too!", "The Light, the Dark & the Blood Between", "They Came from the Sea"];

    assert.strictEqual(officialAchievementNames.length, 76, "sanity check on this test's own reference list");

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

import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/imperator-rome.js";

test("the Imperator: Rome guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "imperator-rome-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "imperator-rome");

});

test("the Imperator: Rome guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Government, Research & Milestones",
            "Nation Formables & Regional Conquests",
            "Wonders, Missions & Achievements of Legend",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 72-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /72 Steam achievements/);

});

test("every one of the 72 official Imperator: Rome achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Cincinnatus", "Tribal Concord", "Render Unto Caesar", "A New Home", "Alea Iacta Est", "Soldier of Fortune", "Panem Et Circenses", "International Relations", "Strategic Reserve", "Triumvir", "Legacy of Aristotle", "Do Not Disturb My Circles", "Tribal Assembly", "Hispania Universalis", "What have the Romans ever done for us?", "Punic Ascendance", "Times New Roman", "Antipater's Dream", "The Besieger", "Over 9000!", "The Romans are Crazy", "Carthago Delenda Est", "New Kingdom", "Pyrrhic Victory", "Perfidious Albion", "Imperial Ambition", "Envy of the World", "Pan-Hellenic League", "Mystery Solved", "Soter", "To the End of the World", "Three Great Fires", "Holy Fire", "No More Worlds Left to Conquer", "Garum Nobile", "True Vandal", "Germania Magna", "The Man who would be King", "Ashoka's Pillars", "Mare Nostrum", "Megalopolis", "The Bois Are Back in Town", "Molon Labe!", "The Spice Must Flow", "Kingdom of David", "rednaxelA", "Heraclea Persica", "Tyrian Purple", "Pax Aeterna", "City of the World's Desire", "Pentecontaetia", "Laconic If", "Potter to King", "Pytheas' Legacy", "Brennus' Revenge", "Holy Pilgrim", "Catch them All", "An Unexpected Turn", "Wonder Builder", "The Great Destroyer", "On the Measure of the Earth", "The Corners of the World", "Land of the Rising Sun", "Gazophylax This!", "King of the Blind", "Periplus of the Seas", "Legio Augusta", "Nikator", "Hall of the Mountain King", "Ktistes", "Proclamation of Tyre", "Eumenes' Footsteps"];

    assert.strictEqual(officialAchievementNames.length, 72, "sanity check on this test's own reference list");

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

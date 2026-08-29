import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/marvels-midnight-suns.js";

test("the Marvel's Midnight Suns guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "marvels-midnight-suns-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "marvels-midnight-suns");

});

test("the Marvel's Midnight Suns guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Abbey, Friendships & Systems",
            "Mysteries, Words of Power & Combat",
            "DLC: Deadpool, Venom, Morbius, Storm & Dracula",
            "Hidden Achievements",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 72-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /72 Steam achievements/);

});

test("every one of the 72 official Marvel's Midnight Suns achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Lilith Returns", "Oshtur's Gift", "A Light Extinguished", "Big Mad", "Family is Forever",
        "Are You On Superlink?", "Did We Just Become Best Friends?", "Friendship is Magic", "Hunter the Explorer", "Cape of Many Colors",
        "And Look Good Doing It", "Make a House a Home", "Might Need Pockets", "Fire Burn and Cauldron Bubble", "With a Box of Scraps",
        "You Absolute Legend", "Fully Operational", "The Best Girl", "Unrequited Love", "Extracurricular Activities",
        "Spread the Pain", "Some Minor Adjustments", "T.H.R.E.A.T. Eliminated", "Elemental, My Dear Agatha", "Atum's Call",
        "Hyppus' Aid", "Set's Favor", "The Keymaster", "Wisdom of the Woods", "A Coven Restored",
        "A Mother's Gift", "A Shining Light", "A Growing Darkness", "Fully Armed", "Challenge Accepted",
        "You Have the Lead", "Back in Time for Lunch", "We Have Ways", "KKRRAKATHOOM", "Quantity is Quality",
        "Collateral Damage", "Dream Team", "Speed Kills", "Kitchen Sink", "Wilhelm Scream",
        "Not a Scratch", "Pinball Wizard", "Needful Things", "Trading Up", "Big Guns",
        "Big Game Hunter", "The Good, the Bad, and the Undead", "Dr. Deadpool, MD, PhD, JD, RN, CPA", "That Special Feeling", "Time to Make the Chimichangas!",
        "Hemophobic", "Redemption", "Comeback King", "Lethal Protector", "Never Been Satisfied",
        "It's All Connected", "The Hunger", "Beyond Biochemistry", "Bond of Blood", "Living Vampire",
        "What's In This, Anyway?", "Blood Storm", "Elemental Teachings", "Blessings of the Goddess", "Patience, Young One",
        "Shocking Development", "Dracula's Tomb",
    ];

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

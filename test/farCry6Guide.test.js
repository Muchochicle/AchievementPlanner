import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/far-cry-6.js";

test("the Far Cry 6 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "far-cry-6-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "far-cry-6");

});

test("the Far Cry 6 guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        ["Overview","Story & Yara","Combat & Collectibles","Special Operations","Villain Episodes DLC","Lost Between Worlds DLC","Suggested Order"]
    );

});

test("the Overview states the verified 99-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /99 Steam achievements/);

});

test("every one of the 99 official Far Cry 6 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Yo Soy Dani Rojas","Hidden In Plain Sight","Cutting Foreign Ties","Montero Justicia","Voz del Pueblo","Viva La Revolución","Ninjerilla","Co-Dependent","Liberty","Finders Keepers!","Check It Out","Friendly Skies","It's Raining Treasure!","Undying Tradition","Top of the Pecking Order","Speed Racer","Beginner's Luck","Overheated","Alpha Guerrilla","Road Rage","Armed to the Teeth","Hogar Dulce Hogar","Backpacking","Fry Cry","That's My Jam","That's Puzzling","Car Cry","Recrooster","Loyal Army","@CanYouPetTheCroc","Strutting His Stuff","Secret Weapon","Heated Conflict","Jawson Brody","Sophishticated","Outdated Tech","Oh No You Don't!","Not So Special","Not So Tough","Ultimate Predator","Slip Sliding Away","Hit 'n Run","Didn't See That Coming!","Death From Above","Toxic Influence","Fashionista","Do It Yourself","Glamping","Furiously Fast","Glorious Leader","Stay Cool","Hidden Cash","Termination Phase","Crocodile Tears","Extinction Level Event","Everything Must Go","Queenslayer","Agua Mala","No, I Won","I Rule This Kingdom","The 1%","This Is Your Brain","Freudian Field Day","Dear Diary","Puff, Puff, Vaas","So Much For Poetics","Self-Help","Definition of Insanity","True End(ing)","Mind Monarch","Pocket Money","Enlightened Monarch","Accessorizing","Early Drafts","Vanity Project","Radio is More My Thing","Min-Maxed","What's a King to a God?","A New Dawn","Crusader","Non-Profit","Pilgrimage","Prepper","Family History","False Idols","Parables","Heavenly Father","Walking the Path","Back Home","Intergalactic Mechanic","Refracted Yara","Now You're Riftin'","Flawless Clarity","Into the Void","Mighty Minotaur","Yaran National Scuba Team","Sun Striker","Demolitions Expert","Crystal Crusader"];

    assert.strictEqual(officialAchievementNames.length, 99, "sanity check on this test's own reference list");

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

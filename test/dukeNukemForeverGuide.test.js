import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/duke-nukem-forever.js";

test("the Duke Nukem Forever guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "duke-nukem-forever-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "duke-nukem-forever");

});

test("the Duke Nukem Forever guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Kill Counts & Weapon Feats",
            "Antics & Minigames",
            "Campaign, Collectibles & Bosses",
            "The Doctor Who Cloned Me DLC & Hidden Feats",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 62-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /62 Steam achievements/);

});

test("every one of the 62 official Duke Nukem Forever achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Extermination", "Annihilation", "Nuclear Devastation", "Hippy-Stomper", "Judge, Jury, Executioner", "Trapper", "Freeze Well!", "Road Rage", "Fork the Pork", "Dead Useful", "Tosser... in the Literal Sense", "Duke Angry, Duke Smash!", "Noms", "On the Noggin'", "Substance Abuser", "Natural Disaster 3x", "Full Body Tourettes", "Turd Burglar", "I Need a Towel", "Baron von Nukem", "I Need a Date", "Sticky Bomb Like You!", "Big Guns, Big Ships", "Air-Duke", "Balls of Steel", "Flagon of Chuckles", "Juiced", "He's Got a Hologram!", "Drawrings", "I Am All That Is Man", "Gunslinger", "Piece of Cake", "Let's Rock", "Come Get Some", "Damn, I'm Good", "Special Thanks", "Bucket Head", "Call Waiting", "Party Animal", "Pescaphobe", "Sunday, Black Sunday", "Nobody Likes a Whiner", "Lots of Whacking", "Companion Barrel", "One-Eyed Freak", "Pit Champion", "Not Bad for a Human", "A Good Dam Fight", "Octacide", "Beating the One-Eyed Worm", "Bubble Buster", "Threesome", "Passive Aggressive", "Bloody Red Rover", "Scientits", "Heart to Heart", "Another Piece of Cake", "Let's Rock Out", "Come Get a Little More", "Damn, I'm REALLY Good", "I Am All That Is Man - Again!", "Hedonist, not Misogynist"];

    assert.strictEqual(officialAchievementNames.length, 62, "sanity check on this test's own reference list");

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

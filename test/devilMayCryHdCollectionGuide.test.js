import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/devil-may-cry-hd-collection.js";

test("the Devil May Cry HD Collection guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "devil-may-cry-hd-collection-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "devil-may-cry-hd-collection");

});

test("the Devil May Cry HD Collection guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Devil May Cry (DMC1)",
            "Devil May Cry 2 (DMC2)",
            "Devil May Cry 3: Dante's Awakening (DMC3)",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 99-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /99 Steam achievements/);

});

test("every one of the 99 official Devil May Cry HD Collection achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Every Knee Will Bend", "Every Head Will Bow", "Every Tongue Will Confess", "Barehand Beauty", "A Secret Revealed ", "First Blood", "Blood Letting", "Over 9000!", "Highest Honor", "The Sky's The Limit", "Vita Maxima", "Magica Maxima", "Caeruleus Diabolus", "Two Heads are Better Than One", "Monkeying Around", "No Joke", "Sin City", "Deep One", "That's A Big Mother...", "Hungry Like the Wolves", "Ball 'n Chain", "Not Just Any Ordinary Human", "Never Forget a Face", "Extinguished", "Stylish!", "En Vogue", "Armed and Dangerous", "Arms Race", "Like A Hot Knife Through Butter", "To The Max", "Full Armory", "Check Out My Collection", "Take Heart, Lucia", "Seeing Red", "Locked 'n Loaded", "Give 'em Hell", "Maximize Your Health", "Trend Setter", "The Path Less Travelled", "Who's Laughing Now?", "Big Spender", "Asylum", "Step Into The Light", "That's Not Lady-Like", "Brotherly Love", "Rough Rider", "Lights Out", "Lightning In A Bottle", "Inside Out", "Sibling Rivalry", "Double Trouble", "Pest Control", "Man's Best Friend", "Hellish Honor", "Devilish Deed", "Bloody Hell", "Blood Donor", "Blood, Sweat, and Tears", "To Hell With That", "Left No Stone Unturned", "Worst Kept Secret", "Am I My Brother's Keeper", "Heaven Can Wait", "Hell Hath No Fury…", "To Hell And Back", "Gone To Hell", "Hell of a Start", "Blood Flows Red", "Redemption", "Blue Demon", "Blue Devil", "Gun Collector", "The Devil Made Me Do It", "Untouchable", "I Read You Like A Book", "Bookworm", "Table Of Contents", "Hot As Hell", "Thunderstruck", "The Devil Went Down To...", "The Nightmare is Over", "Good Night", "Fallen Angel", "Night Terrors", "Plucked", "Cold Turkey", "Broken Halo", "Bird of Prey", "Squashed Like A Bug", "You're No Angel", "Arachnophobia", "Smashing  Sensation", "The Secret's Out", "The Secret Six", "Can You Keep A Secret?", "The Devil's In The Details", "Combustible!!!", "Boiling!!", "Warming Up!"];

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

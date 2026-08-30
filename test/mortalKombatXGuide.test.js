import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/mortal-kombat-x.js";

test("the Mortal Kombat X guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "mortal-kombat-x-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "mortal-kombat-x");

});

test("the Mortal Kombat X guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story, Towers & Progression",
            "Combat, Fatalities & Character Feats",
            "Invasion, Klassic Tower & Kombat Pack Feats",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 73-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /73 Steam achievements/);

});

test("every one of the 73 official Mortal Kombat X achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Tower Kompetitor", "Tower Warrior", "Tower Master", "Tower God", "Challenge Accepted", "BUDDY!!!", "Pledge Yourself", "Faction Champion", "No Loyalty", "Jump Ship", "Time Out", "Keep it Secret", "Statistical Advantage", "Moving Up", "Elder God", "A New Beginning", "There is a Ruler", "Inner Strength", "Return Kustomer", "Royalty", "Good to be King", "Giving Respect", "Respected Fighter", "Terrifying Encounter", "I'm number 1", "Juggernaut", "A Kontender", "Bill of Goods", "Dropping Fools", "Hit the Dojo", "Unstoppable", "That's How You Do It", "Knockout", "FINISH HIM", "Bloody Good Time", "Straight Power", "Brutal End", "Dark Future", "Need a Doctor", "Master", "Only a Real Master", "Well Rounded", "It's a Gusher", "Blanche Advantage", "Hara Kiri", "Back It Up", "Real Icon", "So Bored", "Jumping Bean", "Trolling", "All the Pieces", "Luck be a Lady", "The Kollector", "Disco", "Almighty", "Not Dead Yet", "Stay Back", "DIE WILL YOU", "INVASION", "Can't Stop This", "Where It All Started", "The Kraken", "What Doesn't Kill You Makes You Still Alive", "Lands-Down", "Fox Finish", "Dance The Night Away", "Throwback", "Getting Tipsy", "Hug It Out", "The Grinder", "Robots Rule", "Going The Distance", "All I Do Is Win"];

    assert.strictEqual(officialAchievementNames.length, 73, "sanity check on this test's own reference list");

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

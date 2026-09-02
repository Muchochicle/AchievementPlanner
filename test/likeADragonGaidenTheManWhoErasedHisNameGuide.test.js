import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/like-a-dragon-gaiden-the-man-who-erased-his-name.js";

test("the Like a Dragon Gaiden: The Man Who Erased His Name guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "like-a-dragon-gaiden-the-man-who-erased-his-name-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "like-a-dragon-gaiden-the-man-who-erased-his-name");

});

test("the Like a Dragon Gaiden: The Man Who Erased His Name guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        ["Overview","Main Story","Combat & Abilities","The Castle: Coliseum & Akame Network","Minigames & Diversions","Suggested Order"]
    );

});

test("the Overview states the verified 62-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /62 Steam achievements/);

});

test("every one of the 62 official Like a Dragon Gaiden: The Man Who Erased His Name achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["The Dragon of Dojima","Hidden Dragon","Castle on the Water","The Man Who Knew Too Much","The Laughing Man","The Man Who Erased His Name","Fledgling Dragon","Respectable Dragon","Ferocious Dragon","Legendary Dragon","Like a Bee","Like a Snake","Like a Spider","Like a Firefly","Always Prepared","Extremely Heated","Untouchable","Silver Tier","Gold Tier","Platinum Tier","Taking Requests","At Your Service","Go-To Guy","Neighborhood Watch","Neighborhood Defender","Neighborhood Hero","Drinkin' and Linkin'","Rookie Fighter","Up-and-Coming Fighter","Favored Fighter","Prizefighter","Hell's Keeper","Hell's Patron","Hell's Champion","Welcome to the Family","Strength in Numbers","They Can't Stop Us All","To Train in Life","To Train in Death","To Train Beyond","First King Dethroned","Second King Dethroned","Third King Dethroned","Fourth King Dethroned","The World's Strongest","Fashion Scrub","Fashionista","Trendsetter","The Man Who Had Too Many Hobbies","Heavenly VIP","Castle VIP","Retro Gamer","Arcade Dweller","Pocket Circuit Pro","Left in the Dust","Bullseye","Royal Gambler","Rising Superstar","Surgical Precision","Locked Up","Whip-Splash","Gotta Catch Some Balls!"];

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

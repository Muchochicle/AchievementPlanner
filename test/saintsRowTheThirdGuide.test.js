import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/saints-row-the-third.js";

test("the Saints Row: The Third guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "saints-row-the-third-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "saints-row-the-third");

});

test("the Saints Row: The Third guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story Missions",
            "City Takeover & Activities",
            "Challenges & Open-World Feats",
            "DLC Mission Packs",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 83-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /83 Steam achievements/);

});

test("every one of the 83 official Saints Row: The Third achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Dead Presidents", "The Welcome Wagon", "Opulence, You Has It", "We're Takin' Over", "Tower Defense", "Kuh, Boom.", "Gotta Break Em In", "I Heart Nyte Blayde", "kill-deckers.exe", "Titanic Effort", "Once Bitten... Braaaaaaains", "Murderbrawl 31", "Too Close to the Son", "Gangstas... In Space!", "Hanging With Mr. Pierce", "Mourning Stars", "Hack the Planet", "You're the Best...", "Bright Lights, Big City", "Ouch.", "Tune In, Drop Off", "And Boom Goes the Dynamite", "Fence Killa 2011", "Your Backseat Smells Funny", "Double Dose of Pimping", "Porkchop Sandwiches", "Go Into the Light", "Tank You Very Much", "Have A Reality Climax", "Everything is Permitted", "Hi-Jack It", "Getting the Goods", "Life of the Party", "Shake and Bake", "You're My Hero!", "Ow My Balls!", "Gender Equality", "Bo-Duke-En", "Love/Hate Relationship", "Gellin' Like Magellan", "Who Loves Ya Baby", "Stay Classy Steelport", "The American Dream", "A Better Person", "Haters Gonna Hate", "Cowboy Up", "Pimped Out Pad", "Flash the Pan", "Third and 30", "Jumped In", "Bromance in the Row", "Crew of Two", "Partners in Crime", "Cooked To Perfection", "Get Off My Back", "Stick the Landing", "Cat on a Hot Tin Roof", "Flame On", "Feeding Time", "Murder in the Jungle", "Storm the Yarn", "C-C-C-Combo Breaker", "Genki Bowl Champ", "I Do My Own Stunts", "First Contact", "Union Buster", "Xenaphobe", "Lights! Camera! Action!", "Pew! Pew! Pew!", "Warrior Princess", "Revenge of the Navigator", "Do a Barrel Roll!", "C-List Celebrity", "B.A.M.F.", "Public Enemy #1", "Weird Science", "Eye of the Bee-Holder", "Sting Operation", "Tour de Farce", "Supaa-Excellent!", "Send in the Clones", "The Johnnyguard", "My Pet, Monster"];

    assert.strictEqual(officialAchievementNames.length, 83, "sanity check on this test's own reference list");

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

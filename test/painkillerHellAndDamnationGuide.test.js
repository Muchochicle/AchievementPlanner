import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/painkiller-hell-and-damnation.js";

test("the Painkiller Hell & Damnation guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "painkiller-hell-and-damnation-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "painkiller-hell-and-damnation");

});

test("the Painkiller Hell & Damnation guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Ability Card Unlocks",
            "Challenges & Feats (Part 1)",
            "Challenges & Feats (Part 2)",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 107-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /107 Steam achievements/);

});

test("every one of the 107 official Painkiller Hell & Damnation achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Endurance", "Haste", "Time Bonus", "Speed", "Fury", "Double Haste", "Dexterity", "Iron Will", "Rage", "Double Time Bonus", "Triple Haste", "Soul Keeper", "Blessing", "Replenish", "Dark Soul", "Soul Catcher", "Forgiveness", "Greed", "Vitality", "Divine Intervention", "Soul Redeemer", "Mercy", "Name of the Beast", "Upside Down Beast", "Farmer", "Adventurer", "Grave Digger", "Penthouse Down", "Evil's Orphans", "Neighbor of the Beast", "Spammer", "I have friends", "Warehouseman", "Barrel hater", "Tornado", "Five Points", "Demon Kangaroo", "Mass Chopper", "Nightmare Lover", "Sweet dreams", "Militarist", "Sniping Elite", "Plague", "Beard Grill", "Collector", "Twister", "Mountebank", "Sport Season", "Insolent", "Ghost", "Surgeon", "Mirror Effect", "Skewers", "Robber", "Untouched", "Malicious", "4x4", "Best of the Best", "Last moment", "Employee of the month", "Scavenger", "Jumping Death", "Hygienic", "Hard-bitten", "Halloween", "Satan Claus", "Psycho", "Illuminati", "Bridge Player", "Town Cleaner", "Conclave", "Battle Robber", "Frag'n'Stein", "Evil Eggs", "Monk", "Gondolier", "Tenor", "Railwayman", "Priest", "Pope", "Savant", "Mourner", "Psychiatrist", "Doctor", "Squint", "Pigsticker", "Miner", "Prisoner", "Snowman", "Undertaker", "City Lights", "Bin Garner", "Stoned", "Tank Killer", "Merciful", "Fireproof", "Charged", "I ain't afraid o' no ghost", "Medical Supply", "Castle Break", "Pope Up", "Flipper", "DYI", "Holy Sheet", "Destroyer", "Hamster", "Factorize"];

    assert.strictEqual(officialAchievementNames.length, 107, "sanity check on this test's own reference list");

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

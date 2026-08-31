import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/magicka.js";

test("the Magicka guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "magicka-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "magicka");

});

test("the Magicka guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Boss Kills",
            "Spellcasting & Combat Feats",
            "Adventure Feats & Challenges",
            "DLC Campaigns & Scenarios",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 88-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /88 Steam achievements/);

});

test("every one of the 88 official Magicka achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Cooking by the book", "An eye for an eye", "No more trolling", "Solid Snake", "There is no goat level ", "Saved by the king ", "KHAAAAAAAAN!", "88mph ", "More like the Aristocats ", "Play it again, Vlad ", "Don't fear the reaper ", "Dragon \"Slayer\" ", "I think Magicka is a pretty cool guy ", "Basic Element ", "Vanilla Ice ", "Let off some steam ", "State Alchemist ", "I'm the wizard king, I can do anything! ", "The Enchanter", "Houdini ", "IMMA FIRIN' MAH LAZER!!!! ", "RPG much? ", "It's over nine thousand!!!! ", "Never cross the beams ", "There can be only one ", "Wingardium Leviosa ", "\"Oh gravity, thou art a heartless bitch\" ", "It's raining (beast)men ", "101st Airborne ", "First Blood ", "This is Magicka! ", "The perfect storm ", "One in a million? ", "OMG! They killed Yellow! ", "Blue… No Yelloooow! ", "Better you than me ", "Killing your friends, you're doing it wrong ", "Finders keepers ", "Deep Impact ", "We are the champions ", "I call it a Hawking Hole ", "Mission improbable ", "Stuff of legends ", "I put on my robe and wizard hat ", "Sherlock Holmes ", "MU-MU-MU-MULTIKILL! ", "Too fancy for fireballs? ", "Bad Taste ", "King's Quest ", "Lead farmer", "Good Company", "Nothing but a man, who can never fail", "Seven day cruise", "Swedish Summer Achievement", "No Power = No Responsibility", "From whence you came...", "Fhtagn once more!", "Banisher of horrors", "Breezed through", "Handling the frustration", "Driven mad", "Ice Age", "Friendship is Magicka", "Let Me In", "The Crusader Breakings", "A Bridge too Near", "Amarth Faeg!", "Interred with the Vampire", "Hurt me plenty", "Just a breeze of blue cheese", "Hey, mach-arena!", "Not what they signed up for", "Is that the wurst you can do?", "Tenderized!", "I don't believe in Orcs", "Enduring the Tide", "Being the Tide", "Don't mach such a mess", "Wiped Out", "Khan't we all just get along?", "The postwizard", "Ultra-Violence", "Street smart", "City tour guide", "I don't believe in Trolls", "The others were dwarfed by you", "That was a fairy fight", "The clone wars"];

    assert.strictEqual(officialAchievementNames.length, 88, "sanity check on this test's own reference list");

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

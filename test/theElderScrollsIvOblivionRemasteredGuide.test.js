import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/the-elder-scrolls-iv-oblivion-remastered.js";

test("the The Elder Scrolls IV: Oblivion Remastered guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "the-elder-scrolls-iv-oblivion-remastered-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "the-elder-scrolls-iv-oblivion-remastered");

});

test("the The Elder Scrolls IV: Oblivion Remastered guide has all 9 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "The Main Quest",
            "The Dark Brotherhood",
            "The Arena",
            "The Thieves Guild",
            "The Mages Guild",
            "The Fighters Guild",
            "Shivering Isles",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 60-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /60 Steam achievements/);

});

test("every one of the 60 official The Elder Scrolls IV: Oblivion Remastered achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Escaped the Imperial Sewers", "Closed an Oblivion Gate", "Located the Shrine of Dagon", "Delivered Daedric Artifact", "Destroyed the Great Gate", "Champion of Cyrodiil", "Murderer, Dark Brotherhood", "Slayer, Dark Brotherhood", "Eliminator, Dark Brotherhood", "Assassin, Dark Brotherhood", "Silencer, Dark Brotherhood", "Speaker, Dark Brotherhood", "Listener, Dark Brotherhood", "Pit Dog, Arena", "Brawler, Arena", "Bloodletter, Arena", "Myrmidon, Arena", "Warrior, Arena", "Gladiator, Arena", "Hero, Arena", "Champion, Arena", "Grand Champion, Arena", "Pickpocket, Thieves Guild", "Footpad, Thieves Guild", "Bandit, Thieves Guild", "Prowler, Thieves Guild", "Cat Burglar, Thieves Guild", "Shadowfoot, Thieves Guild", "Master Thief, Thieves Guild", "Guildmaster, Thieves Guild", "Associate, Mages Guild", "Apprentice, Mages Guild", "Journeyman, Mages Guild", "Evoker, Mages Guild", "Conjurer, Mages Guild", "Magician, Mages Guild", "Warlock, Mages Guild", "Wizard, Mages Guild", "Master-Wizard, Mages Guild", "Arch-Mage, Mages Guild", "Associate, Fighters Guild", "Apprentice, Fighters Guild", "Journeyman, Fighters Guild", "Swordsman, Fighters Guild", "Protector, Fighters Guild", "Defender, Fighters Guild", "Warder, Fighters Guild", "Guardian, Fighters Guild", "Champion, Fighters Guild", "Master, Fighters Guild", "Tourist, Shivering Isles", "Aspirant, Shivering Isles", "Citizen, Shivering Isles", "Madman, Shivering Isles", "Honored Madman, Shivering Isles", "Duke Dementia, Shivering Isles", "Duke Mania, Shivering Isles", "Regent, Shivering Isles", "Defender, Shivering Isles", "Madgod, Shivering Isles"];

    assert.strictEqual(officialAchievementNames.length, 60, "sanity check on this test's own reference list");

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

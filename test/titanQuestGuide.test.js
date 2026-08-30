import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/titan-quest.js";

test("the Titan Quest Anniversary Edition guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "titan-quest-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "titan-quest");

});

test("the Titan Quest Anniversary Edition guide has all 8 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Mastery Completion & Crafting",
            "The Main Campaign & World Bosses",
            "Feats, Hardcore Runs & Skill Challenges",
            "Ragnarok: The Northern Lands",
            "Atlantis & Eternal Embers",
            "Hidden Achievements",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 115-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /115 Steam achievements/);

});

test("every one of the 115 official Titan Quest Anniversary Edition achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Achilles' Equal", "One Man Phalanx", "Artisan", "Master Artificer", "Son of Hephaestus", "Survivalist", "Archeologist", "It's dangerous to go alone.", "Recycling", "Medic!", "Trail of Ashes", "I am the Storm", "Titanic Game Hunter", "Master of Shadows", "The power of Osiris", "Force of Nature", "Living the Dream", "Breaker of Chains", "A matter of principle", "Down to the 'core", "Beast of Beliar", "What it says on the tin", "Turtle Power", "No burned village?", "The first threshold", "Nobody did this", "Hearts of Stone", "Taste the beast!", "Found a bug", "Pharaoh's curse", "Tough crowd", "No more sequels", "Fight in the shade", "Discount mercenary", "Best served cold", "Be a man!", "Imperial summit", "Worthy of song", "Can't always use more", "I O U", "Don't Pay the Ferryman", "Echoes in Eternity", "When Gods Fall", "Odysseus' 11", "Hardcore Player", "Hardcore Master", "Hardcore Legend", "I have minions for that", "Greece Lightning", "Avatar of Thanatos", "Masterful start", "Sisyphus go home!", "Strength of Atlas", "Hercules", "Someone your size", "K.O.", "Magebreaker", "Double Standard", "Daemon ex machina", "Call of Nature", "Surprise!", "Target immobilized", "Delirium", "Epidemic", "Morpheus", "Circe", "Sick lewt", "Good point", "Together we stand", "Fifty Shades", "The power of Set", "Rock beats scissors", "Specialist", "Agreeable pursuit", "Out there on the dunes", "Dark corners of the map", "Wodan's Knowledge", "Precision Dvergan Engineering", "Bloody Roots", "New lands", "The one she forgot", "What lies below", "Mission Accomplished", "Delayed until further notice", "Rheingold", "Give me your Lupines", "Detective", "Altoholic", "Dear diary...", "Clawsome!", "Weedkiller", "Marduked", "I AM TITAN SLAYER", "Beginner's Luck", "Double or Nothing", "High Roller", "The Fourth Peril", "The Dragon King", "The Forgotten King", "The Setting Sun", "Brewmaster", "Bao", "BAO", "Old Friend", "Danger Noodle", "No Stone Unturned", "Revenge", "Emperor's New Clothes", "Peach of Immortality", "I don't like sand", "Nesting Doll", "Connoisseur", "The Line of Epic Heroes", "You must not read from the book!", "Amusing Mudcrab"];

    assert.strictEqual(officialAchievementNames.length, 115, "sanity check on this test's own reference list");

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

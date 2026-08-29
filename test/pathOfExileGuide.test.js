import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/path-of-exile.js";

test("the Path of Exile guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "path-of-exile-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "path-of-exile");

});

test("the Path of Exile guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Labyrinth, Acts & Story Bosses",
            "Act Bosses & Encounters - Part 1",
            "Act Bosses & Encounters - Part 2",
            "Endgame & Pinnacle Bosses",
            "Atlas, League & Expansion Bosses",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 127-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /127 Steam achievements/);

});

test("every one of the 127 official Path of Exile achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Challenger", "Leader", "Lord", "Fearless", "Dauntless",
        "Indomitable", "Mercy Killing", "The Star of Wraeclast", "A New Dawn", "Rest for the Wicked",
        "Hunter", "Saviour", "Usurper", "Assassin", "Champion",
        "Conqueror", "Seeker", "Freedom", "Beginning of the End", "Foot of the Mountain",
        "Scaling the Ladder", "Diminishing Returns", "Survivor", "Undying", "Immortal",
        "Eternal", "Locomancer", "No Loose Ends", "All Ears", "No Stone Unturned",
        "Left to Chance", "Well-Connected", "Gemling", "Overcharged", "Elemental Trinity",
        "Geared Up", "Cryomancer", "One of a Kind", "Paradigm Shift", "Explorer",
        "Traitor", "Golden Touch", "Ancestral Power", "Out of the Gate", "Capture the Flag",
        "Zombie Horde", "Elemental Aegis", "Dream within a Dream", "Beginner's Luck", "Full Clear: Dread Thicket",
        "Specialist", "Full Clear: Catacombs", "Raise the Bar", "Full Clear: Archives", "Band Together",
        "Full Clear: Ship Graveyard Cave", "Vaal Gemling", "Full Spectrum", "Behold My Army", "Hostile Territory",
        "Cut-throat", "Dream Corruption", "Virtue Corruption", "Dream Enrichment", "Identity Corruption",
        "Full Clear: Apex of Sacrifice", "Gladiator", "Cleanser", "Purifier", "Umbra Slayer",
        "Dispelling the Curse", "Bringer of Pain", "Releaser of Souls", "Soothsaying", "End of the Nightmare",
        "Invested with Blood", "Defence Against the Darkness", "Stranger in a Strange Land", "Engulfed in Flames", "Time Capsule",
        "Maraketh Steel", "Alchemist's Stone", "Imperfections", "Unique Influence", "Unforgettable",
        "Fall of Oriath", "King Tide", "Widow's Lament", "Eternal Eclipse", "Rule of Three",
        "Sin and Salvation", "Apprentice Cartographer", "Journeyman Cartographer", "Master Cartographer", "Atlas of Worlds",
        "Grandmaster", "Sacrifice of the Vaal", "New World Order", "Breachlord", "Ascendancy",
        "Ruler of the Court", "Shaper of Worlds", "Emperor", "Untouchable", "Heretic",
        "Loyal to the End", "Treasure Hunter", "Deicide", "Two of a Kind", "Decimation",
        "One Small Step", "Beyond Death", "All in a Day's Work", "The Forsaken Masters", "Deadly Sins",
        "Omnipotent", "Essence Corruption", "Quintessence", "Warlord", "Augmentation",
        "King Cartographer", "Sirus, Awakener of Worlds", "Defeat The Maven", "The Star-Strewn Abyss", "The Unearthly Devourer",
        "The Scintillating Flame", "The Ravenous Maw",
    ];

    assert.strictEqual(officialAchievementNames.length, 127, "sanity check on this test's own reference list");

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

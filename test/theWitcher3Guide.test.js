import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/the-witcher-3.js";

test("the The Witcher 3: Wild Hunt guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "the-witcher-3-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "the-witcher-3");

});

test("the The Witcher 3: Wild Hunt guide has all 9 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Main Story",
            "Difficulty Runs",
            "Quest Decisions",
            "Contracts & Combat Feats",
            "Character, Gear & Gwent",
            "Hearts of Stone",
            "Blood and Wine",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 78-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /78 Steam achievements/);

});

test("every one of the 78 official The Witcher 3: Wild Hunt achievement names is mentioned somewhere in the guide", () => {

    // The full, official list this guide is built from
    // (backend/catalog/games/the-witcher-3.json).
    const officialAchievementNames = [
        "Lilac and Gooseberries", "A Friend in Need", "Necromancer", "Family Counselor", "Something More",
        "Xenonaut", "The King is Dead", "Passed the Trial", "Ran the Gauntlet", "Walked the Path",
        "Geralt: The Professional", "Kingmaker", "Assassin of Kings", "Friends With Benefits", "Full Crew",
        "Dendrologist", "The Enemy of My Enemy", "Humpty Dumpty", "Environmentally Unfriendly", "Kaer Morhen Trained",
        "Can't Touch This!", "That Is the Evilest Thing", "Mutant", "Butcher of Blaviken", "Triple Threat",
        "Brawler", "Overkill", "Master Marksman", "What Was That?", "Even Odds",
        "Globetrotter", "Pest Control", "Card Collector", "Gwent Master", "Let's Cook!",
        "Bombardier", "Bookworm", "Armed and Dangerous", "Power Overwhelming", "Brawl Master",
        "Fast and Furious", "Munchkin", "Fire in the Hole", "Fist of the South Star", "Geralt and Friends",
        "All In", "Shrieker", "Fearless Vampire Slayer", "Woodland Spirit", "Fiend or Foe?",
        "Ashes to Ashes", "The Doppler Effect", "I'm Not Kissing That", "Let the Good Times Roll!", "Shopaholic",
        "Curator of Nightmares", "Pacta Sunt Servanda", "When It's Many Against One…", "Return to Sender", "Can Quit Anytime I Want",
        "Wild Rose Dethorned", "I Wore Ofieri Before It Was Cool", "Moo-rderer", "Rad Steez, Bro!", "Killed It",
        "The Witcher's Gone South", "Last Action Hero", "Kling of the Clink", "A Knight to Remember", "Embodiment of the Five Virtues",
        "Playing House", "Turned Every Stone", "I Have a Gwent Problem", "The Grapes of Wrath Stomped", "Dressed to Kill",
        "Weapon \"W\"", "Hasta la Vista™", "David and Golyat"
    ];

    assert.strictEqual(officialAchievementNames.length, 78, "sanity check on this test's own reference list");

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

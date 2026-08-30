import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/mass-effect-legendary-edition.js";

test("the Mass Effect Legendary Edition guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "mass-effect-legendary-edition-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "mass-effect-legendary-edition");

});

test("the Mass Effect Legendary Edition guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Mass Effect 1",
            "Mass Effect 2: Recruitment & Loyalty",
            "Mass Effect 2: Combat & Exploration",
            "Mass Effect 3",
            "Legendary Edition Cross-Game",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 127-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /127 Steam achievements/);

});

test("every one of the 127 official Mass Effect Legendary Edition achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Medal of Honor", "Medal of Heroism", "Distinguished Service Medal", "Council Legion of Merit", "Honorarium of Corporate Service",
        "Lift Mastery", "Throw Mastery", "Warp Mastery", "Singularity Mastery", "Barrier Mastery",
        "Stasis Mastery", "Damping Specialist", "AI Hacking Specialist", "Electronics Specialist", "Sabotage Specialist",
        "First Aid Specialist", "Neural Shock Specialist", "Meritorious Service Medal", "Archivist", "Completionist",
        "Medal of Exploration I", "Medal of Exploration II", "Medal of Exploration III", "Soldier Ally", "Sentinel Ally",
        "Krogan Ally", "Turian Ally", "Quarian Ally", "Asari Ally", "Principled",
        "Spectre Inductee", "Charismatic", "Search and Rescue", "Colonial Savior", "Mission Accomplished",
        "Missing in Action", "Very Elusive", "Colony Defense", "Ghost Ship", "Suicide Mission",
        "Against All Odds", "No One Left Behind", "Friend or Foe", "The Archangel", "The Assassin",
        "The Convict", "The Justicar", "The Krogan", "The Professor", "The Quarian",
        "A House Divided", "Battlemaster", "Cat's in the Cradle", "Catharsis", "Doppelganger",
        "Fade Away", "Ghost of the Father", "The Cure", "The Prodigal", "Treason",
        "Big Game Hunter", "Head Hunter", "Incineration Specialist", "Merciless", "Overload Specialist",
        "Tactician", "Warp Specialist", "Agent", "Galactic Explorer", "Operative",
        "Scientist", "Weapon Specialist", "Scholar", "Power Full", "Revenge!",
        "Broke, Blind, and Bedlam", "Digital Exorcist", "Heart of Darkness", "Driven", "Bringer of War",
        "Mobilizer", "World Shaker", "Pathfinder", "Tunnel Rat", "Party Crasher",
        "Hard Target", "Saboteur", "Arbiter", "Last Witness", "Executioner",
        "Well Connected", "Fact Finder", "Liberator", "Problem Solver", "Patriot",
        "Legend", "Shopaholic", "Master and Commander", "Lost and Found", "A Personal Touch",
        "Combined Arms", "Focused", "Untouchable", "Shield Breaker", "Sky High",
        "Pyromaniac", "Eye of the Hurricane", "Mail Slot", "Hijacker", "Giant Killer",
        "Always Prepared", "Gunsmith", "Under Pressure", "Savior", "Last Resort",
        "The One and Only", "Insanity I", "Insanity II", "Insanity III", "Paramour I",
        "Paramour II", "Paramour III", "Long Service Medal", "Recruit", "Soldier",
        "Veteran", "Bruiser",
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

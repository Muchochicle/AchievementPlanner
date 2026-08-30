import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/wildermyth.js";

test("the Wildermyth guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "wildermyth-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "wildermyth");

});

test("the Wildermyth guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Campaigns & Difficulty",
            "Monster Kills & Story Feats",
            "Theme Transformation Abilities",
            "Heroes, Relationships & Battles",
            "The Omenroad DLC & Dungeon Bosses",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 94-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /94 Steam achievements/);

});

test("every one of the 94 official Wildermyth achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Daybreak", "War Endured", "Echoes Die", "Everfading", "In Soil, In Smoke", "A Story of Heroes", "Another Tale to Tell", "Worldwalker", "A Lowly Crust of Beef", "Let Me Get My Chisel", "Back into the Sea", "Bonebreakers", "Empty the Caves", "No More Nightmares", "Drauvenslayers", "No Time for Clawmonsters", "War-Ender", "Core Failure", "Turncoat", "All My Birds, Safely Home", "Wingknight's Prowess", "Bears are Scary", "Fight Like a Bird", "Grillmaster", "Solid as the Hills", "Some Say I'm Too Flashy", "Tempest", "Into Mulch", "We Call That Mortificient!", "Symbiosis", "I'm Not Smiling", "Astrology", "Thwack!", "A Temperamental Shrub", "Lochias's Hunger", "Thematic Divergence", "Completing the Look", "We Emerge Changed", "Storied Past", "Me and My Familiar", "A Mythic Menagerie", "The Power of Friendship", "Cutthroat Competitors", "How Romantic!", "Plague Doctor", "Chain Reaction", "Passing Shadow", "The Cost of Heroism", "This Too Shall Pass", "Pyrrhic Victory", "Legends Never Die", "Who's Counting?", "Peacemaker", "Overwhelming Monstrosity", "Gotta Ca... Must Collect All of Them", "A Hunger, Sated", "Neverbefore", "The Relentless", "The Lethal", "The Bulwark", "The Survivor", "The Hurricane", "The Collector", "The Artist", "The Unscathed", "The Monstrous", "The Shredder", "The Hardy", "The Virulent", "Malthides, Brute Toxinist", "Uur, Ancient Amalgam", "Bogmother", "Head Chef", "Gracnaw's Dragon", "Granny Gloomfire", "The Gardener", "The Glorysword Clayn", "The Horn Grownup", "Symbiotic Advisor", "The Umbercryst Martyr", "Luthin the Mirrormaster", "The Riftspore Apostle", "Admiral of the Air", "Starwing", "Ollend the Abductor", "The Doorman", "The Twins", "Party Wagon", "King Carrion", "Outset", "Pathbeater", "Making Tracks", "Seasoned Traveler", "Waymaster"];

    assert.strictEqual(officialAchievementNames.length, 94, "sanity check on this test's own reference list");

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

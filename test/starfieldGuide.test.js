import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/starfield.js";

test("the Starfield guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "starfield-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "starfield");

});

test("the Starfield guide has all 8 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Main Quest & Constellation",
            "The Four Factions",
            "Outposts, Ships & Exploration",
            "Character Progression",
            "Shattered Space",
            "Free Updates & Easter Eggs",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 82-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /82 Steam achievements/);

});

test("every one of the 82 official Starfield achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["For All, Into the Starfield", "One Small Step", "Into the Unknown", "All That Money Can Buy", "Further Into the Unknown", "High Price to Pay", "In Their Footsteps", "Entangled", "Unearthed", "One Giant Leap", "Supra et Ultra", "The Devils You Know", "A Legacy Forged", "Deputized", "Surgical Strike", "The Hammer Falls", "Back to the Grind", "Guilty Parties", "Executive Level", "Rook Meets King", "The Best There Is", "Legacy's End", "Home Sweet Home", "Shipping Magnate", "Industrialist", "Chief Engineer", "Stellar Cartography", "The Stars My Destination", "Boots on the Ground", "Fixer", "Privateer", "Life Begets Life", "Rock Collection", "Cyber Jockey", "Jacked In", "Soldier of Fortune", "Replicator", "The Family You Choose", "Starcrossed", "War of Angels", "Fleet Commander", "Thirst for Knowledge", "Dark Matter", "Another Bug Hunt", "I Use Them For Smuggling", "Dust Off", "Traveler", "Elite", "Space Opera", "Reach for the Stars", "What Remains", "The Promised, Broken", "Zealous Overreach", "Conflict in Conviction", "Exhuming the Past", "The Other Side", "The Scaled Citadel", "The Great Unknown", "Facing Your Fears", "Redemption Arc", "Five of a Kind", "Savior of the Promised", "Lost Luxury", "Into the VOID", "Battle of the Unifier", "This for That", "Greater Than", "Less Than", "Incursion Fighter", "Incursion Exterminator", "Incursion Eliminator", "Overclocked", "Half the Battle", "Fully Equipped", "Top Tier", "Just Like Grandma Used to Make", "They’re Not Toys!", "Contract Killer", "Stay of Execution", "Master of Magnetism", "Riddle Management", "Quantum Hoarder"];

    assert.strictEqual(officialAchievementNames.length, 82, "sanity check on this test's own reference list");

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

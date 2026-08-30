import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/sniper-elite-3.js";

test("the Sniper Elite 3 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "sniper-elite-3-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "sniper-elite-3");

});

test("the Sniper Elite 3 guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Campaign Missions & Difficulty",
            "Collectibles, Completion & Mission Feats",
            "Combat Feats, Ranks & Multiplayer",
            "DLC: Hunt the Grey Wolf & Save Churchill",
            "DLC: Overwatch & Sniper Rifles Pack",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 77-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /77 Steam achievements/);

});

test("every one of the 77 official Sniper Elite 3 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["The Gazala Gallop", "Wonderwall", "Through the fire…", "No refuge", "In the nick of time", "Crouching Tiger, Hidden Ratte", "Demolition Man", "Pest Control Specialist", "Oscar Mike", "Make it go boom", "Sniping with friends", "Time to reload", "Regular soldier", "Hard as nails", "True sniper", "Casual Reader", "Archivist", "The gathering", "Nesting instinct", "A shot in the dark", "Nothing is optional", "Dedicated soldier", "You'll try anything once", "Ghost of Tobruk", "Well, well, well", "End of the 'lein'", "I Fort this would be difficult", "I Siwa you did there", "Double tap", "Three birds, one stone", "Long way down", "Advantage: Sniper", "Definitely no \"90-day wonder\"", "Officer material", "Through the looking glass", "Hidden and dangerous", "Competitive streak", "An ode to Rube Goldberg", "Tagged", "This is my rifle…", "Prepared for any eventuality", "A few of my favourite things", "Tactical distractor", "Wait for it…", "Double the distance", "Conserving oxygen", "The Everyman", "Highly decorated", "Indestructible", "Charlie's Challenge", "Elite fan", "Threat assessment", "Sweating bullets", "In the middle", "Convenience is key", "Saved by the bell", "No escape", "Grenadier", "Fast-moving target", "… And stay dead!", "Herr Charles", "Surprise, surprise", "Living in the shadows", "Nothing to lose", "Meltdown", "Shoot to thrill", "T.N.T.", "Dry bone valley", "Feast your eyes", "Blood and thunder", "The Hunter", "Coast to Coast", "You may fire when ready...", "Bring it Down", "1200 Rounds of Awesome!", "Explosive Hunter", "Specialist"];

    assert.strictEqual(officialAchievementNames.length, 77, "sanity check on this test's own reference list");

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

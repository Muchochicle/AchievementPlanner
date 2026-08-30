import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/defense-grid-2.js";

test("the Defense Grid 2 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "defense-grid-2-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "defense-grid-2");

});

test("the Defense Grid 2 guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Kills, Medals & Economy",
            "Tower Types & Special Weapons",
            "Challenge Wins, Campaign & Multiplayer",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 65-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /65 Steam achievements/);

});

test("every one of the 65 official Defense Grid 2 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Eradicator", "First Blood", "Annihilator", "Exterminator", "Xenocide", "Field Promotion", "Flawless Victory", "Salvage Rights", "Liquidator", "Surplus", "Penny Pincher", "Filthy Rich", "Arsenal", "Full Defense", "Indecisive", "Happy Returns", "Hey! That's mine!", "Yellow Beats Green", "Retry", "If At First You Don't Succeed, Retry Again", "Leadhead", "Burn Baby Burn", "Pew Pew", "Not So Fast", "Great Ball of Fire", "High Voltage", "Kaboom!", "The Not-So-Friendly Skies", "Head Trauma", "Would You Like a Boost With That?", "Death From Above", "No Fast Blast", "More Please", "Pumped Up Towers", "Go To Your Home", "Shoot That Guy", "Tower Expert", "Close Call", "No Sale", "Diversity", "What IS that?", "Full House", "Gun Crazy", "Firebug", "Shell-shocked", "Minimalist", "Base Defender", "Planet Defender", "Master Strategist", "Alien Tears", "Full Potential", "Now With Sprinkles", "10 Items No Less", "Master Builder", "The Path Most Traveled", "Confident", "Thanks For Playing!", "Warning Shots", "Winning Shots", "Brothers in Arms", "Go Team!", "Boot Camp", "Siege Breaker", "Master Siege Breaker", "Untouchable"];

    assert.strictEqual(officialAchievementNames.length, 65, "sanity check on this test's own reference list");

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

import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/doom-3.js";

test("the DOOM 3 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "doom-3-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "doom-3");

});

test("the DOOM 3 guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "DOOM 3 Campaign, Bosses & Secrets",
            "Resurrection of Evil & The Lost Mission",
            "Multiplayer & Classic DOOM / DOOM II",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 65-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /65 Steam achievements/);

});

test("every one of the 65 official DOOM 3 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["DOOMed Recruit", "DOOMed Marine", "DOOMed Veteran", "DOOMed Nightmare", "DOOMed Collector", "I Like to Watch", "That was Close!", "Goody Finder", "Unarmed Badass", "To Be or Not to Be", "Double the Fun!", "Killing time", "Boomtastic", "Ready for Action!", "Not a Scratch", "RAGE", "Speed Run", "Sticky Situation", "Cookie Stealer", "You're Not My Boss!", "Big Boy", "Bot Buddy", "Ripped!", "All of Us", "You Laugh, It Works", "Turncoat", "Soulfood", "Evil Recruit", "Evil Marine", "Evil Veteran", "Evil Nightmare", "Evil Collector", "Too Slow, Fool!", "Gimme Time!", "Gimme Power!", "Shocking!", "Eat This!", "Play Catch", "Fists of Fury", "Lost Recruit", "Lost Marine", "Lost Veteran", "Lost Nightmare", "Lost Collector", "Telefragged!", "Crushed!", "Ninja Killer", "Clean Sheet", "Berserked!", "2 Deaths - 1 Gun", "Neophyte", "DOOM: Episode 1", "DOOM: Episode 2", "DOOM: Episode 3", "DOOM: Episode 4", "DOOM: Rampage", "DOOM: Nightmare", "DOOM: Burning Out of Control", "DOOM II: Just Getting Started", "DOOM II: From Earth to Hell", "DOOM II: And Back Again", "DOOM II: Superior Firepower", "DOOM II: A Really Big Gun", "DOOM II: Burning Out of Control", "DOOM II: An Important Looking Door"];

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

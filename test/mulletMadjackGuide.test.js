import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/mullet-madjack.js";

test("the MULLET MADJACK guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "mullet-madjack-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "mullet-madjack");

});

test("the MULLET MADJACK guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "First Runs & Weapons",
            "Kill Feats & Enemies",
            "Bosses, Chapters & Sneakers",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 48-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /48 Steam achievements/);

});

test("every one of the 48 official MULLET MADJACK achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["NANI? ナニ？", "WELCOME TO PEACE CORP!", "BACK TO FLOOR ONE!", "UNBOXING", "PHANTER", "IS THAT A KATANA?!?!", "KAMIKAZE", "BANDIT", "SUNFIRE", "ANTI MATERIAL SCHARFSCHÜTZENGEWEHR", "PEW PEW!", "NO RELOAD!", "BOOMSTICK", "GANGSTA STYLE", "SPACE MARINE", "IT'S KIND OF MAGIC!", "SY... ONARA!!!", "NUTJOB", "REST IN PIECES!!!", "ENVIRONMENTALIST", "LET’S KICK SOME ICE!", "SUGAR BOMB!", "THE MANGA IS BETTER!", "RIOTER", "SLIDER", "KICK THEM ALL!", "D-FENS", "INVISIBLE!", "WANDERER", "CAT PERSON", "90’S EXPERIENCE", "SURVIVOR", "CHECKPOINT!", "BEHOLD!", "GOLDEN BOY", "HEADSHOT!", "BALLS OF STEEL!", "GOODBYE MR. DOPAMINE", "HEADHUNTER", "I SEE YOU!!!", "IS THIS A MECHA ANIME?", "OBEY AND CONSUME", "S-rank", "BLUE SNEAKERS!", "PURPLE SNEAKERS!", "GREEN SNEAKERS!", "YELLOW SNEAKERS!", "SNIPER!"];

    assert.strictEqual(officialAchievementNames.length, 48, "sanity check on this test's own reference list");

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

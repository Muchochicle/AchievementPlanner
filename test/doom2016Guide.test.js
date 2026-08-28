import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/doom-2016.js";

test("the DOOM (2016) guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "doom-2016-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "doom-2016");

});

test("the DOOM (2016) guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Campaign & Bosses",
            "Upgrades & Collectibles",
            "Combat Feats",
            "Challenges & Arcade Mode",
            "Multiplayer & SnapMap",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 54-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /54 Steam achievements/);

});

test("every one of the 54 official DOOM (2016) achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Shoot it Until it Dies", "Outnumbered? No Problem", "Who's Next?", "E1M1", "Into the Unknown",
        "Knee-Deep in the Dead", "A Toe into Madness", "Up Close and Personal", "Specialist", "IDKFA",
        "Hot Swapper", "Historian", "Timing is Everything", "Every Nook and Cranny", "Argent Overload",
        "Argent Fiend", "A Gift from Beyond", "The Circle is Complete", "Tinkering", "Overclocked",
        "Thorough Shopper", "Butcher", "Rip and Tear", "Juicin' it up", "Momentum Shift",
        "IDDQD", "What Else Ya Got?", "IPXSETUP.EXE", "Combat tested, Doomguy approved", "An Old Friend",
        "Shareware", "No Rest for the Living", "Entryway", "Tenderizing the Crops", "Marked for Death",
        "Motion in the Explosion", "Sitting Duck", "Computing with Style", "Threat Assessment", "Eat Your Vitamins",
        "Reaping all the Benefits", "Beauty is Pain", "Like Nobody is Watching", "Filling the Trophy Case", "Go for the Gold",
        "Arcade Stockpile", "Bowling for Gibs", "Head First", "Successful Launch", "Fashion Fanatic",
        "Insult to Injury", "On Track", "A Memorable Performance", "Slotted for Success"
    ];

    assert.strictEqual(officialAchievementNames.length, 54, "sanity check on this test's own reference list");

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

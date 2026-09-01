import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/dying-light-2.js";

test("the Dying Light 2 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "dying-light-2-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "dying-light-2");

});

test("the Dying Light 2 guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story & City Facilities",
            "Activities, Proficiency & Money",
            "Combat Feats, Collectibles & Bloody Ties",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 65-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /65 Steam achievements/);

});

test("every one of the 65 official Dying Light 2 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Into the Unknown", "First Shot", "Herzlich Wilkommen!", "Under Pressure", "On the Trail of the Enemy", "Light in the Darkness", "Get Outta My House!", "Debris and Ashes", "We Will Be Heard!", "Known Associate", "Brush with Death", "Going Down", "Family First", "Your World, Your Rules", "Municipal Services", "Tunnel Entrance", "Tube Map", "Sancho Panza", "Tickets, Please!", "Don Quixote", "Can't You Read the Signs?", "Find Anything Interesting?", "It Wasn't That Hard, Was It?", "Revenants", "Flag Burning", "Ban Hammer", "You Never Forget Your First...", "Oh, So This Is How It Works!", "A Friend in Need...", "Parkour Master", "Combat Master", "Boot Licker", "Who Wants To Be a...", "Man On a Mission", "Ultramarathon", "After the Fall", "Good Night & Good Luck", "Can't Touch This!", "Night Hunter", "Death From Afar", "Tanning Salon", "Terminal Headache", "Slowpoke!", "Being All Social", "That's Teamwork!", "Lightning Reflexes", "Modder", "Fit as a Fiddle", "Ironheart", "You're Going Down!", "Don't Look Up", "Get the Point?", "True Nightrunner", "Bing Bang Boom!", "Archivist", "Audiophile", "Street Art Aficionado", "Nemesis", "Enter the Hall", "Night of Terrors", "My Friend, Ciro", "Skullcrusher", "The Madman of Villedor", "True Champion", "Connoisseur"];

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

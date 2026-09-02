import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/hot-wheels-unleashed-2-turbocharged.js";

test("the HOT WHEELS UNLEASHED 2 - Turbocharged guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "hot-wheels-unleashed-2-turbocharged-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "hot-wheels-unleashed-2-turbocharged");

});

test("the HOT WHEELS UNLEASHED 2 - Turbocharged guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        ["Overview","Racing Basics","Career & Bosses","Collection & Upgrades","DLC Career Packs","Suggested Order"]
    );

});

test("the Overview states the verified 55-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /55 Steam achievements/);

});

test("every one of the 55 official HOT WHEELS UNLEASHED 2 - Turbocharged achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Rookie","Acrobat","Out of control","Drifting teacher","Like lightning!","Now try online","Globetrotter","Versatile riding","Masterful!","Drift champ","It's me you have to beat","Immortal","Look, Mom! No track!","Shapeshifter","Terror of the road","Stage animal","Solo","International license","Well begun…","Challenge accepted!","I'm in charge here!","The Octopus","The Scorpion","The Terrordactyl","The Yeti","The Nitro Bot","Extreme conditions","Can you keep a secret?","…Is half done","Eagle eye","Shopping time!","Spendthrift","Spin the wheel","Beyond the limit","Extra gear","Perfectionist","Better too much","Spoiled for choice","Tools of the trade","A little nest egg","You're good at this!","Magic trick","Mission complete","Ignition","The Speed of Silence","The Ultimate Race","Italian heart","Bel Paese","Pizza, pasta, and engines","Too Fast","Too Furious","For the family","They're among us","Out of this world","I want to believe"];

    assert.strictEqual(officialAchievementNames.length, 55, "sanity check on this test's own reference list");

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

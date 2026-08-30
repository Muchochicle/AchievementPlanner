import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/pvz-battle-for-neighborville.js";

test("the PvZ: Battle for Neighborville guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "pvz-battle-for-neighborville-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "pvz-battle-for-neighborville");

});

test("the PvZ: Battle for Neighborville guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Character Vanquish & Utility Feats",
            "Story Quests & Region Bosses",
            "General Feats & Ability Challenges",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 50-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /50 Steam achievements/);

});

test("every one of the 50 official PvZ: Battle for Neighborville achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Peaskeeper", "Overgrowth", "Cactus Makes Perfect", "Snack Time", "Popped!", "Zest of the Best", "Comin' up Roses", "Mind the Cap", "Barbecue, Anyone?", "Going Totally Nuts", "One-Boot Camp", "Medical Miracle", "Job Well Done", "DE-FENCE! CLAP-CLAP! DE-FENCE!", "Impossibly Impressive", "SuperB", "Aye Spy with My Little Aye", "Blast From the Past", "Clearing the Dance Floor", "One BIG Step for Zombies", "Gone Camping!", "Open-Minded", "dniweR ,dniK eB", "Sawing Logs", "New Sheriff in Town", "Podcast Subscriber", "Truest Grit", "Cool It!", "Hat's All Folks!", "Urban Brawl", "Chums and Chainz", "Nighty Night Club", "Classical Pea-anist", "Zombie See Zombie Do", "The Medal's Medal!", "Get Back out There!", "Broken Ice", "Beans-Eye", "Good to Grow", "Build-A-Buddy", "Myth Maker", "Weeee!", "Paradise Paver", "Brainz Unattained", "Time to Seriously Go Outside", "Natural Twenty", "Giddy Up", "Midnight Jog", "Science Friction", "Tornado Fandango"];

    assert.strictEqual(officialAchievementNames.length, 50, "sanity check on this test's own reference list");

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

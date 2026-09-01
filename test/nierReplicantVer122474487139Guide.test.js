import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/nier-replicant-ver-1-22474487139.js";

test("the NieR Replicant ver.1.22 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "nier-replicant-ver-1-22474487139-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "nier-replicant-ver-1-22474487139");

});

test("the NieR Replicant ver.1.22 guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story, Party & Endings",
            "Collections, Grinds & Fast Run",
            "Boss Time Attacks & Secrets",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 47-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /47 Steam achievements/);

});

test("every one of the 47 official NieR Replicant ver.1.22 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["The Final Verse", "The Book of Legend", "The Wild Companion", "The Mellow Companion", "Release", "Gratitude", "Key Collector", "A World in Flux", "Combo Fanatic", "Combo Master", "The Magic Man", "Wordsmith", "Weapons Collector", "Village Handyman", "Jack of All Trades", "Go-To Guy", "Dear Diary", "Man of Means", "Educated Warrior", "Call Her Back", "Lingering Memories", "Thank You", "Something Very Special", "e8 a8 98 e6 86 b6 e3 82 b5 e3 83 bc e3 83 90 e3 83 bc", "Legendary Gardener", "Fish of Legend", "A Round by the Pond", "Material Hunter", "Upgrade Apprentice", "Reform Specialist", "Forging Master", "All Aboared!", "The Sheep Whisperer", "Lightspeed Fighter", "King of the Lost Shrine", "A True Friend", "Boss of the Junk Heap", "Scourge of The Aerie", "Protector of Facade", "The Little Mermaid", "Permission Granted", "A Dirge for the Hero", "Soul Crusher", "Book Burner", "The Once and Final King", "The Strongest Bond", "Daredevil"];

    assert.strictEqual(officialAchievementNames.length, 47, "sanity check on this test's own reference list");

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

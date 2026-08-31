import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/red-faction-armageddon.js";

test("the Red Faction: Armageddon guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "red-faction-armageddon-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "red-faction-armageddon");

});

test("the Red Faction: Armageddon guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Campaign & Difficulty",
            "Vehicle, Weapon & Combat Feats",
            "Infestation Mode",
            "Path to War DLC",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 58-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /58 Steam achievements/);

});

test("every one of the 58 official Red Faction: Armageddon achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Unto The Breach", "Secrets Long Buried", "We're Not Alone", "Vanguard", "Things Fall Apart", "Survival Of The Fittest", "I'm All You've Got", "Weather The Storm", "Family Business", "Must Go Faster", "Old Friends, Older Enemies", "Plan B", "Knock, Knock", "Losses", "One Big, Ugly Motha…", "That Coulda Gone Better", "I Need A Nap", "Breathe Easy", "Crusader", "Ooooh Yeah!", "Martian Drive-By", "Hit 'N Run", "Exterminator", "Chronicler", "Salvager", "Nanergy!", "Money Well Spent", "Martian Can Opener", "Cheater!", "It's All In The Wrist", "Haymaker", "Zero G War", "Hold Still", "Lock And Load", "Back At Ya!", "Liftoff", "Martian Matchmaker", "Catch!", "In. The. Face!", "What Is Best In Life?", "Boom Goes The Dynamite", "Crack Shot", "Soldier", "Commando", "Honorary Mason", "Bug Hunt", "Field Surgeon", "All For One, One For All", "Air Superiority", "Bird of Prey", "Swath of Destruction", "Armored Cavalry", "Nuke It from Orbit", "Wrecking Ball", "A Taste of their Own", "Triple Threat", "Stick Around", "Full of Malice"];

    assert.strictEqual(officialAchievementNames.length, 58, "sanity check on this test's own reference list");

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

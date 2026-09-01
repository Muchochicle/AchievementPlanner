import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/the-evil-within-2.js";

test("the The Evil Within 2 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "the-evil-within-2-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "the-evil-within-2");

});

test("the The Evil Within 2 guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story & Difficulty",
            "Upgrades, Crafting & Collectibles",
            "Combat & Chapter Feats",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 51-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /51 Steam achievements/);

});

test("every one of the 51 official The Evil Within 2 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Rookie", "Survivor", "Against All Odds", "You Asked For It... Again", "Welcome to Union", "Taken", "Not Running This Time", "The Team Psychologist", "Premature Finale", "Another Ally", "Crossing to the Other Side", "Spiritual Awakening", "Fire Walk With Me", "Overcome the Past", "Everything Comes Crumbling Down", "Unfortunate Consequence", "Backup Ain't Coming", "Sykes Out", "Finally Free", "You Got Red in You", "Stick it in My Veins", "Making Things a Little Easier", "Now You're Playing with Power", "A Little Extra Kick to it", "They Never Even Stood A Chance", "DIY", "Handyman", "Echoes Within STEM", "Doing Some Detecting", "Diligent Reader", "Half the Stash", "Locksmith", "Good to See You Again", "Chatting With Kidman", "Powerhouse", "All in the Family", "Caffeine Addict", "Thinning Them Out", "Clearing a Path", "Smoke Assassin", "Shock Therapy", "Wait For It...", "Kick, Shoot, Burn", "Bootable Offense", "I Am The Night", "Sometimes Fighting Isn't the Answer", "Death From Above", "No More Playing With Fire", "Melancholy Memories", "I'll Take You Down Myself", "That Cinematic Feel..."];

    assert.strictEqual(officialAchievementNames.length, 51, "sanity check on this test's own reference list");

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

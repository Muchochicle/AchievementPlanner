import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/mina-the-hollower.js";

test("the Mina the Hollower guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "mina-the-hollower-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "mina-the-hollower");

});

test("the Mina the Hollower guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        ["Overview","Story & Progression","Weapon Feats","Trinket Feats","Suggested Order"]
    );

});

test("the Overview states the verified 50-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /50 Steam achievements/);

});

test("every one of the 50 official Mina the Hollower achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Hollow Victory","Fully Equipped","Hollowin' Again!","Thorne Beater","Sparks of Genius","Big Spender","First Purchase","Fishin' Reactor","Renegade Roundup","Minigame Master","Hardifier","Weirdifier","Speed Runner","Untouchable","Bone Pincher","Bone Keeper","Off the Grid","Steed Hopper","Drag Race","Bounding Bonanza","Skippin' Stone","Four-Point Hatchet","Boomerang Blade","Wormhole","Bashful","Light 'em Up","Pitfall Parasol","Beckoning Buddy","Haunting Reach","Mist Glide","Fogburst","Tip Tapper","Hammerama","Sniper Dagger","Perfect Guard","Buster Bounce","Combo Conductor","Shock Tactician","Plasma Survivor","Joule Junkie","Pendulum Master","Traumatized","Masochist","Pawned Off","Bonestone Tycoon","Lopsided","Below Zero","Trash Juggler","Opossum Impressem","Feat Accompli"];

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

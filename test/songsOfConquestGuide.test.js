import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/songs-of-conquest.js";

test("the Songs of Conquest guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "songs-of-conquest-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "songs-of-conquest");

});

test("the Songs of Conquest guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Combat Feats & Spells",
            "Factions, Campaigns & Win Conditions",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 75-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /75 Steam achievements/);

});

test("every one of the 75 official Songs of Conquest achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Bringer of Ruin", "The Song of Stoutheart", "Death To Diplomacy", "Dressed For Success", "Attack Bonanza", "The Price of Freedom", "A Life's Worth", "This Spot's Taken", "Hello There", "Versatile Wielder", "Unlimited Power!", "Fully Charged", "Coming Through!", "Critical Hit", "Deepstrike", "Die by the Bow", "Die by the Staff", "Die by the Sword", "Double Kill", "Barbecue", "In The Thick Of It", "Full House", "Infernal Influence", "Killing Spree", "Together For Her", "An Empress's Hope", "Multi Kill", "Proof That Luck Can Be Consistent", "Death From Above", "Whoops!", "From the Ashes", "The Marsh Expands", "Don't Touch My Stuff", "Such A Fungi", "Sorcerous Spree", "Get Over Here!", "Cleave", "Landlord Extraordinaire", "Trojan Horse", "Ultra Kill", "Adept", "Veteran", "Master", "Grand Master", "Humiliation", "Pyrrhic Victory", "Expert Essence Employment", "Veni, Vidi, Vici", "Venisti, Vidisti, Perdidisti", "Kneel, peasant!", "Contractually Obligated to Win", "I Like It A Loth", "Here be Dragons", "Oops!", "Ready, Set, Go", "No Challenge At All", "Grisfest", "So Long, and Thanks for All the Fish", "Steadfast", "Great Deeds Done", "Core Kernel of Essence", "Smothered", "No Free Lunge", "Heart to Heart", "Personal Growth", "Boycott", "Zounds like a Loth", "Rise Eternal", "Restoration of Grey Tor", "Winning Is Like Li", "Sheng Happens", "There Can Be Only Xuan", "Once Divided Now United", "Three Houses", "The Houses United"];

    assert.strictEqual(officialAchievementNames.length, 75, "sanity check on this test's own reference list");

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

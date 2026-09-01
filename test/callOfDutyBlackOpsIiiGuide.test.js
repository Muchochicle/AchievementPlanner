import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/call-of-duty-black-ops-iii.js";

test("the Call of Duty: Black Ops III guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "call-of-duty-black-ops-iii-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "call-of-duty-black-ops-iii");

});

test("the Call of Duty: Black Ops III guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Campaign",
            "Zombies: Shadows of Evil & Der Eisendrache",
            "Zombies: Zetsubou, Gorod Krovi, Revelations & the Classic Maps",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 98-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /98 Steam achievements/);

});

test("every one of the 98 official Call of Duty: Black Ops III achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Disavowed", "A Second Chance", "High Tide", "Belly of the Beast", "Into the Abyss", "Blood for Blood", "Friends and Foes", "Understanding Madness", "Fly, Swim, Shoot", "200 Stories of Sheer Adventure!", "Full Circle", "No One Will Believe You", "Another Side of the Story", "Hold Still!", "Rolling Heavy", "Sting like a Talon", "Decimator", "Curator", "Gun Game", "Personal Decorator", "Doing Camo Right", "Maximum Firepower", "Walking Encyclopedia", "Crackshot", "Can't Hide", "Biff! Bap! KaPow!", "Inertial Distance", "For real this time", "Foe To Friend", "Throwing Flak", "Unlocked Potential", "Lock, Stock, And Then Some", "In Their Sleep", "Silverback In Black", "The Beginning of the End", "From the Shadows", "Not out of Gobblegum!", "Sorry, we’re DEAD", "Strike!", "Beat CoP", "The Spider and the Fly", "Margwa Party", "Parasite-Seeing", "Welcome to the Club", "Battle Tested", "Tactical Specialist", "Deadly Specialist", "My Brother’s Keeper", "Der Meisterbogenschuetze", "None Left Standing", "Take a Bow", "Not Big Enough", "Time to Slam", "Quick Off Your Feet", "That’s a lot of Jigawatts!", "Fling Me to the Moon", "Death From Above", "Seeds of Doubt ", "Sanguine Serum", "Herbal Remedy", "The Ultimate Sacrifice ", "Crop Duster", "Iron Lung", "In the Belly of the Beast", "Assault With Battery", "Web of Defeat", "One Too Many", "Love And War", "Wield a Fist of Iron", "Time Attack", "Taking Flight", "Not One Inch", "Viktorious Revenge", "Vaporeyezed", "Fire Mission", "Blown Away", "Zombiepult", "For The Good Of All", "A Better Tomorrow", "Pack-A-Punch-ectomy", "Keep Close", "Death Ray", "The Grand Tour", "Wardrobe Change", "Wonderful", "Controlled Chaos", "It's a Trap!", "The Eagle has Landers", "Chimp on the Barbie", "Time Travel Will Tell", "Small Consolation ", "Cryogenic Slumber Party", "Ground Control", "Little Lost Girl", "Overachiever", "I said we’re CLOSED!", "Acted Alone", "I’ve seen some things…"];

    assert.strictEqual(officialAchievementNames.length, 98, "sanity check on this test's own reference list");

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

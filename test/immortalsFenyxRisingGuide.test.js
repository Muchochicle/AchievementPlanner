import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/immortals-fenyx-rising.js";

test("the Immortals Fenyx Rising guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "immortals-fenyx-rising-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "immortals-fenyx-rising");

});

test("the Immortals Fenyx Rising guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        ["Overview","Gods & Story","Exploration & Combat","Upgrades & Collections","DLC Packs","Suggested Order"]
    );

});

test("the Overview states the verified 68-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /68 Steam achievements/);

});

test("every one of the 68 official Immortals Fenyx Rising achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["The Giving Tree","Big Chicken","The Iron Giant","Sassy, Lost Child","God of War","Goddess of Wisdom","Messenger of the Gods","Goddess of Love","God of the Forge","Brother Battle","Mission Complete","Logs and Monsters","Bird's-Eye View","Tippy-Top","The Floor is Lava","Oceancookie","Among the Stars","Fenyx the Horseman","To Good Health","Projectile Pro","C-C-C-Combo","Your Own Medicine","It's A Bird!","Look, No Hands!","Wraithless in Battle","Ornithology","Wing Nut","Who's the Boss?","Hades's New Neighbor","Don't Shoot the Messenger","Shard Miner","Armed and Dangerous","Moonlight Treasure","Toot or Boot?","From the Ashes","Not Too Close to the Sun","Servant to the Gods","One Chore Down","More than Twelve Labours","Toil and Trouble","Potion Professional","Powered Up","Show Your Moves","Weapon Master","Join the Creed","Fully Charged","Down in Flames","Last Hero Standing","Beauty's in the Eye","Photobomb","Better Luck Next Time","Putting in Overtime","Overblessed","Tested and Approved","Wardrobe Warrior","Zoomies","The Goddess of Creation","The Last Warlord","Divine","Stuff of Legends","Lighter Than Air","Balanced","The Ultimate Price","Opportunist","Full House","Masochist","Stomp-A-Mole","Ash the Leech"];

    assert.strictEqual(officialAchievementNames.length, 68, "sanity check on this test's own reference list");

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

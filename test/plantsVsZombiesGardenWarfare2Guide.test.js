import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/plants-vs-zombies-garden-warfare-2.js";

test("the Plants vs. Zombies: Garden Warfare 2 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "plants-vs-zombies-garden-warfare-2-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "plants-vs-zombies-garden-warfare-2");

});

test("the Plants vs. Zombies: Garden Warfare 2 guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        ["Overview","Modes & Progression","Character Feats","Ops Missions & Gnome Kings","Secrets & Mystery Portal","Suggested Order"]
    );

});

test("the Overview states the verified 63-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /63 Steam achievements/);

});

test("every one of the 63 official Plants vs. Zombies: Garden Warfare 2 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Time to Go Outside","Star Crazy","Rinsed 'Em","Gramma Z Says...","Insanity","Catching Waves","Not the Boss of Me","It's My Island","Really Epic!","The Boss is Watching","Stomp the Yard","Just Peachy!","Simply Super","My Place or Yours","Specialist","Hawkguy","Prance vs Samba","Playdate","Who Can You Trust?","Always IMProvising","Hero to Zero","Skinchanger","VIPs Only!","You've Goat to Be Kidding Me!","Aww Shucks!","Corn Identity","Gnomore!","Gnome Man's Land","My Favourite Z-Mech on the Citadel","Goat Any Last Words?","Goatmeal","Behind Enemy Vines","Just Sprouted","On the Cob","Her Majesty","Mango Tango","Curseproof","Yuck!","The Bean Situation","Got Golden","Warp Tour","What a Trip","What's the Catch?","Lawn Care","West Indian Lilac","String Theory","King of Summer","King of Winter","King of Spring","King of Autumn","RGBY","It's Not a Door...it's a Portal!","The Secret of Secrets","Boss Battle","Boss Battle Boss","Team Player","This is Craaazy!","Boss Battle Specialist","Alright Meow","Somewhere Over the Rainbow","More Secrets?","Open the Door Get on the Floor","Together we Win"];

    assert.strictEqual(officialAchievementNames.length, 63, "sanity check on this test's own reference list");

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

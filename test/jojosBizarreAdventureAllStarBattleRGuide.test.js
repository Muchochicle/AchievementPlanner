import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/jojos-bizarre-adventure-all-star-battle-r.js";

test("the JoJo's Bizarre Adventure: All-Star Battle R guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "jojos-bizarre-adventure-all-star-battle-r-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "jojos-bizarre-adventure-all-star-battle-r");

});

test("the JoJo's Bizarre Adventure: All-Star Battle R guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "All-Star Battle Mode: Story Panels",
            "Battle Techniques, Secret Missions & Arena Gimmicks",
            "Completion Sets, Tournament & Online",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 46-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /46 Steam achievements/);

});

test("every one of the 46 official JoJo's Bizarre Adventure: All-Star Battle R achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["JoJo's Bizarre Adventure", "A Curious Fate", "Ode to Humanity", "Phantom Blood", "True warriors love friendship and respect!", "Battle Tendency", "Can't Hate The Guy", "Ain't beating them!", "Stardust Crusaders", "One hell of an experience!", "Diamond is Unbreakable", "First we need strength!", "Golden Wind", "I'm... Emporio.", "Stone Ocean", "So this is the Real Man's World!", "Steel Ball Run", "This is a story about lifting a curse...", "JoJolion", "We'll train your arse off!", "Let's drink tea and have a nice chat, eh?", "Some words of praise would be nice!", "My heart resonates!", "Great!", "Di molto!", "I knew I could count on you.", "Come prepared or not at all.", "Swish!", "That's the look of a real man!", "The hell is this, a punching contest?", "So you saw it...", "You! You were looking!", "You've mastered this game, haven't you!", "An Adventurer is the only thing you can be!", "Whoa! Look out above you!", "Sucks to be you!", "Tacos", "YadaaaaaaAAAAABAAAAAAAAAA", "Don't come near me!", "I... I'm so happy!", "Your \"end\" has no ending!", "There can be only one!", "A million-to-one luck-sucking leech!", "This is... The World!", "I've gotta get them before they get me!", "I reject my humanity!"];

    assert.strictEqual(officialAchievementNames.length, 46, "sanity check on this test's own reference list");

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

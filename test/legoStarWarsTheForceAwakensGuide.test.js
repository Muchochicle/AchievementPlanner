import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/lego-star-wars-the-force-awakens.js";

test("the LEGO Star Wars: The Force Awakens guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "lego-star-wars-the-force-awakens-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "lego-star-wars-the-force-awakens");

});

test("the LEGO Star Wars: The Force Awakens guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "The Force Awakens: Story Chapters",
            "New Star Wars Adventures & Story Completion",
            "Collectibles: True Jedi, Minikits, Red Bricks & 100%",
            "Combat, Character & Hub Feats",
            "Downloadable Adventure Packs",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 69-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /69 Steam achievements/);

});

test("every one of the 69 official LEGO Star Wars: The Force Awakens achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["I'll Come Back For You!", "Classified? Me Too.", "The Garbage Will Do", "...What Was The Second Time?", "Eyes Of A Man Who Wants To Run", "Don't Let These Dogs Scare You", "You Wouldn't Like It", "Is There A Garbage Chute?", "A Bag Full Of Explosives", "It Belongs To Me!", "Speechless", "A Long Time Ago....", "Never Tell Me The Odds", "Travelled Too Far. Seen Too Much", "Used To Have A Bigger Crew", "The Crimson Corsair", "Hello! Were You Looking For Me?", "It's A Trap!", "There Has Been An Awakening...", "It's True. All of it...", "The Force, It's Calling To You.", "Just A Scavenger", "I Can Fly Anything", "Unlearn What You Have Learned.", "They're Shooting At Both Of Us!", "I'm Getting Pretty Good At This!", "Bow To The First Order!", "A Big Deal In The Resistance", "He's No Good To Me Dead", "Less Than 12 Parsecs", "60 Portions!", "Force Is Strong With This One", "Red Leader", "Cryptosurgeon", "The New Jedi Will Rise", "We Need More Troops!", "Don't Get Cocky!", "I Like That Wookiee...", "Hey! That's Miiiiiiine!", "Quick On The Draw", "Not The Droid You're Looking For", "Traitor!", "Family Reunion", "Show Me, Grandfather", "STOP.....Kylo Time", "Little Short For A Stormtrooper?", "Anything Else?", "Chewie, We're Home", "Stormtrooper Syndrome", "We Are In Quite A Predicament", "I Retrieved The Information...", "...But At A Terrible Cost", "What He Was Programmed To", "Thought We'd Never Find You", "Kinda Like To Get Back To Work", "A Use For Scrap...", "Who's Gonna Pick That Stuff Up?", "Quite The Marksman!", "Greatest Pilot I've Ever Met", "We Must Have The Girl", "On Your Wing, Epsilon Six", "I'll Remedy That Immediately Sir", "Those Beasts!", "I Shall Deal With Her On My Own", "Hey! That's Not Yours!", "I Loosened The Lid", "Time To Earn Your Passage R3", "Another Textbook Landing", "Crush The First Order"];

    assert.strictEqual(officialAchievementNames.length, 69, "sanity check on this test's own reference list");

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

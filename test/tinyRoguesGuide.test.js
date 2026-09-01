import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/tiny-rogues.js";

test("the Tiny Rogues guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "tiny-rogues-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "tiny-rogues");

});

test("the Tiny Rogues guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "World 1 Floors & Death",
            "Challenges & Cinders",
            "Progression & Realms",
            "Build Feats & World Objectives",
            "World 2 Bosses & Endgame",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 86-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /86 Steam achievements/);

});

test("every one of the 86 official Tiny Rogues achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Born To Lose", "Master Of Puppets", "Welcome To The Jungle", "Thriller", "Have You Ever Seen The Rain", "Smoke On The Water", "Through The Fire And Flames", "Losing My Religion", "Down Under", "(Don't fear) The Reaper", "For Whom The Bell Tolls", "We Are The Champions", "Iron Man", "Thunderstruck", "With or Without You", "Angel of Death", "House Of The Rising Sun", "Holding Out For A Hero", "Money For Nothing", "Where Is My Mind?", "Stand On Your Own", "No Easy Way Out", "The Heat Is On", "Danger Zone", "Edge Of Seventeen", "The Chain", "The Gambler", "I'm Still Standing", "A Secret Place", "Drink", "Hotel California", "Running up that Hill", "Can't Stop", "It's My Life", "In Too Deep", "Maniac", "Highway to Hell", "Stairway to Heaven", "Dancing in the Dark", "Sympathy For The Devil", "Paradise City", "It’s a Long Way to the Top", "With A Little Help From My Friends", "Breaking the Law", "Don't You (Forget About Me)", "Never Too Much", "Material Girl", "Take On Me", "Heaven Is a Place on Earth", "Total Eclipse of the Heart", "Karma Chameleon", "Whats Up", "Around the World", "Here I Go Again", "Bring Me to Life", "Back In Black", "Knockin' On Heaven's Door", "Hells Bells", "Everybody Wants to Rule the World", "Magical Mystery Tour", "T.N.T", "Maneater", "Toxicity", "The Trooper", "Another Brick in the Wall", "Trapped Under Ice", "War Pigs", "Otherside", "Gimme chocolate!!", "Gonna Fly Now", "U Can't Touch This", "Crazy Train", "Don't Stop Believin'", "If You Want Blood (You've Got It)", "Have a Drink on Me", "The Bad Touch", "The Alchemist", "Hit Me With Your Best Shot", "Rainbow in the Dark", "Cherry Bomb", "Born To Be Wild", "All Star", "I'm a Believer", "Livin' on a Prayer", "You Give Love a Bad Name", "Wanted Dead or Alive"];

    assert.strictEqual(officialAchievementNames.length, 86, "sanity check on this test's own reference list");

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

import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/shovel-knight.js";

test("the Shovel Knight guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "shovel-knight-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "shovel-knight");

});

test("the Shovel Knight guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Shovel of Hope (Shovel Knight)",
            "Plague of Shadows (Plague Knight)",
            "Specter of Torment (Specter Knight)",
            "King of Cards (King Knight)",
            "Showdown",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 138-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /138 Steam achievements/);

});

test("every one of the 138 official Shovel Knight achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Victory!", "Music Lover", "Master Angler", "Decked Out", "Relic Roundtable",
        "I Scream For Ichor", "Nice Hat...", "Reflect Lord", "Again!", "Hall Champion",
        "Well Met", "Halfway", "Hey Big Spender", "No Damage!", "Impossible!",
        "Penny Pincher", "Perfect Platformer", "Checkpointless", "First Purchase", "Master Shoveler",
        "Flare Wander", "Another Dimension", "Super Sphere", "Knuckle Down", "Reflected Riches",
        "Arc of Iron", "Flying Feat", "Boom!", "Clearing a Path", "I'm Alive!",
        "True Shovelry", "HurryUp!", "Order of Hoarders", "Get the Point", "Untouched",
        "Shovel Economy", "On a Diet", "Sparker", "You're Fired", "Pungent",
        "Juggler", "Dirt Poor", "Hooper", "Troupple Acolyte", "Only You",
        "Victory!", "Mint Condition", "Maxed Out", "Again!", "Hall Villain",
        "No Damage!", "Penny Pincher", "Naked Plague", "Hurry Up!", "Checkpointless",
        "Untouched", "Defend the Lab!", "Trading Up", "Hang Time", "Bomb Jump Blitz",
        "Poor Oolong", "Bomb Economy", "Creep", "Teetotaler", "Get Out Of My Room!",
        "Victory!", "Skull Seeker", "Spec'd Out", "Again!", "Naked Specter",
        "No Damage!", "Hurry Up!", "Checkpointless", "Untouched", "Wisp Whisperer",
        "Vector Victor", "Make A Killing", "Inhuman Resources", "Harvest of Heights", "Scythe Economy",
        "Get Out Of My Room!", "Spirit of Giving", "Darkslide", "Curio Conquest", "Melancholy",
        "Victory!", "Merit Badge", "Decked Out", "Again!", "Cartography King",
        "Card Completionist", "House Champ", "Beeline", "Naked King", "Hurry Up!",
        "Fearless Champ", "King of Cards", "Patron of the Arts", "Get Out Of My Room!", "That's Mine!",
        "I'm a Cheater!", "Heirlooms Only!", " \tJump Economy", "Heartless", "Gem Sweep",
        "Smack Back", "Destruction Dominoes", "Dark Dunk", "Fancy Feet", "Stay Where You Are!",
        "From Shadow!", "Aerial Ace", "Undermined", "Chain Reaction", "Plower Power",
        "Whoops!", "Hover Queenie", "The Storm Is Coming!", "Reize for the Sky", "Hat Trick",
        "Shrouded Strike", "Elementary!", "From Nowhere", "Hops and Dreams", "Liquid Assets",
        "Done In One", "Percy's Pal", "Sure-Footed", "Item Lord", "Order of Thwarters",
        "Warp Walker", "Shatterer", "Magma Day", "Troupple Tango", "Eliminator",
        "Stomped!", "Clutch!", "Chester's Chum",
    ];

    assert.strictEqual(officialAchievementNames.length, 138, "sanity check on this test's own reference list");

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

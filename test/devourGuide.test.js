import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/devour.js";

test("the DEVOUR guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "devour-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "devour");

});

test("the DEVOUR guide has all 11 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "General & Cross-Map",
            "Character Wins (Hard & Nightmare)",
            "The Farmhouse",
            "The Asylum",
            "The Inn",
            "The Town",
            "The Slaughterhouse",
            "The Manor",
            "The Carnival",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 131-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /131 Steam achievements/);

});

test("every one of the 131 official DEVOUR achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Old Fashioned Romantic", "Medium Rare", "Three’s A Crowd", "​​Halfway There", "Feeling Lucky?",
        "​​Ain’t Got Time To Bleed", "​​Survivors", "​​Left For Dead", "​​Twenty’s Plenty", "Medic",
        "​​All Work And No Play", "​​KO", "​​Demonology", "Hurt Me Plenty", "MVP",
        "Carried", "Hide And Seek", "Open Sesame", "​​I Think I’m Getting The Hang Of This", "Twisted Firestarter!",
        "​​Wouldst Thou Like To Live Deliciously?", "Sting Like A Bee", "Pacifier", "Shhh", "No More Room In Hell",
        "​​G.O.A.T", "Leave No One Behind", "Moonwalk", "Piece O' Cake", "No Rest For The Wicked",
        "Nikola", "The Doctor Will See You Now", "May Queen", "Crispy", "Ratched",
        "Come To Mamma", "Interrupted", "Cast Him Into The Darkness", "Icon of Sin", "In Your Prime",
        "Not Today, Satan!", "You've Got Red On You", "Out Of The Cuckoo's Nest", "The Trashman", "Tranquillised",
        "Arachnophobia", "Huntsman", "Curse Breakers", "Pollination", "Eggcellent",
        "That's A Lot Of Legs", "Peek-A-Boo!", "Cleansing", "Venomous", "Better The Devil You Know",
        "Goblins Be Thine", "An Excellent Day For An Exorcism", "Unharmed (Normal)", "Unharmed (Hard)", "Unharmed (Nightmare)",
        "Running On Empty (Normal)", "Running On Empty (Hard)", "Running On Empty (Nightmare)", "If The Shoe Fits", "Rodeo",
        "Lone Wolf", "Posse Up", "Unholy Communion", "No Mercy", "Reach For The Sky",
        "This Town Ain't Big Enough", "Destroyer Of Words", "Cursed", "That's The Spirit", "Down, Pig!",
        "Slice And Dice", "Team Spirit", "Little Squealers", "A Hundred Yards Of Prime Rib", "Blood Bond",
        "The Butcher", "That Is One Big Pile Of Shit", "This Is Starting To Get Boaring", "Minced Meat", "Bone Collector",
        "Tetanus Shot", "Nerves Of Steel (Anna)", "Nerves Of Steel (April)", "Nerves Of Steel (Cultist)", "Nerves Of Steel (Frank)",
        "Nerves Of Steel (Kai)", "Nerves Of Steel (Molly)", "Nerves Of Steel (Nathan)", "Nerves Of Steel (Sam)", "Nerves Of Steel (Zara)",
        "Demon Tamer (Anna)", "Demon Tamer (April)", "Demon Tamer (Cultist)", "Demon Tamer (Frank)", "Demon Tamer (Kai)",
        "Demon Tamer (Molly)", "Demon Tamer (Nathan)", "Demon Tamer (Sam)", "Demon Tamer (Zara)", "Here, Piggy!",
        "Goat Curry", "Ratatouille", "Through The Looking Glass", "Who You Gonna Call?", "Heartbreaker",
        "Open Casket", "Spectre", "Wedding Crashers", "Flight Risk", "Gravedigger",
        "Let Them Eat Cake", "Ticklish", "Jilted", "Glow Up", "Send in the Clowns",
        "You Must Be This Tall To Ride", "Escape Artist", "Last Laugh", "Ringleader", "You'll Float Too",
        "Monkeying Around", "Mercy Killing", "KABOOM!", "Step Right Up", "Slapstick",
        "Fortunate",
    ];

    assert.strictEqual(officialAchievementNames.length, 131, "sanity check on this test's own reference list");

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

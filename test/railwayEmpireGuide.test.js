import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/railway-empire.js";

test("the Railway Empire guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "railway-empire-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "railway-empire");

});

test("the Railway Empire guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Core Gameplay & USA Campaign",
            "USA Scenarios & Free-Game Milestones",
            "Mexico, Canada & South America DLC",
            "Europe, Down Under & Japan DLC",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 128-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /128 Steam achievements/);

});

test("every one of the 128 official Railway Empire achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["From A to B", "Jumbled routes", "Lost my train of thought", "Quiet times", "Lots of traffic today", "Traffic chaos", "I'll scratch your back if...", "Favoritism", "Bridging the gap", "Right through the middle", "Tent camp", "Track to the Future", "TRAINing Day", "Train or Die", "Railway to Hell", "Train Jam", "Easy come easy go", "Bold and beautiful", "All mine!", "What is a steam engine", "The future of the railway", "Isn't that great", "Eager to learn", "It belongs in a museum", "All beginnings are difficult", "Egomaniac", "We brake for nobody", "Full steam ahead", "Fully loaded", "Medium-sized business", "Let off some steam", "Mountain goat", "Mantled guereza", "Bull and bear", "Gun dog", "Bookworm", "Historic moment", "Let's go!", "Perfectionist", "Cowboy", "Lone wolf", "Trainee mechanic", "Megalomaniac", "Sunny boy", "Oil tycoon", "Hillbilly", "Lightning flash", "Monopolist", "Mystery steam ride", "Online shop", "Fill her up, please", "Go with the flow", "The age of the automobile", "Auctioneer", "No dough, no show!", "¡Viva México!", "El Presidente", "Mexico First", "Open Borders", "Gran Fiesta", "El Mariachi", "Speedy Gonzalez", "Centennium", "Due South", "Robin Sparkles", "Winter is coming", "Just in beaver", "Dog sleigh", "The Loonie", "On track", "I made it eh", "Pompa Colada", "Donpirinha", "Roger Libre", "El Dorado", "Livin' La Vida Loco", "Loco Cabana", "Llamas in Pyjamas", "Cocktail Party", "In a snap", "Cheeky geezer", "Platform Nine and Three-Quarters", "Got balls", "Tickety-boo", "Have a butchers", "Gallivanting", "Pile it on", "The Train Prince; or, Iron Henry", "The Emperor's New Rails", "Henschel and Gretel", "The Customs and the Seven Young Rail Spikes", "Railpunzel", "Rumpelstilttrain", "The Valiant Little Conductor", "The Steaming Beauty", "Quiche le train", "Train au chocolat", "Train brûlée", "Train au Vin", "Crêpe exprès", "Trackatouille", "Loc-Monsieur", "Train de canard", "FULLSTÄNDIG", "PRÄSIDËNTLǺ", "RAGNALÖK", "PARADÖX", "KONGLÖMERǺD", "NÖNSTÖPP", "LOKI", "LǺNGSTRUMP", "Drop bear", "Over-koala-fied", "Investi-gator", "Not emused", "Pouch potato", "Tunnel-web spider", "Beaver duck", "Snake-a-rang", "Heavyweight", "Lokozuna", "Loco-deshi", "Loco-sensei", "Locozilla", "Bowing at 45°", "100 Locogami", "Feast of iron mobility", "Monster snack"];

    assert.strictEqual(officialAchievementNames.length, 128, "sanity check on this test's own reference list");

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

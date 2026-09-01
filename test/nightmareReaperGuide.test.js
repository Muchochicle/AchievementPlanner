import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/nightmare-reaper.js";

test("the Nightmare Reaper guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "nightmare-reaper-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "nightmare-reaper");

});

test("the Nightmare Reaper guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Combat, Movement & Level Feats",
            "Skill Tree & World Levels",
            "Weapons, Loot & Kill Grinds",
            "Campaign DLCs & Endings",
            "Modifiers, Jade, Arenas & NG+",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 149-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /149 Steam achievements/);

});

test("every one of the 149 official Nightmare Reaper achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Offender", "Repeat offender", "Killer", "Unstoppable", "Bunny hopper", "Burning soles", "Soccer", "Watch your step", "Refreshing", "Monster", "Wall hugger", "Raider", "Completionist", "Birch", "Maple", "Oak", "Pine", "Aspen", "Fir", "Spruce", "Dirt digger", "Ice climber", "Cemetary man", "Valley of the gods", "Big hands", "Breaststroke", "Factory worker", "Climate change", "Claustrophobia", "Psychedelic", "The hunter", "Schamalayan", "Red gold", "On the roof", "Its", "Dead evil", "Overlook hotel", "Brimstone", "Loot", "Shiny", "Wait for it", "A real weapon", "Epic", "Just a dream", "Garage sale", "Convenience store", "Department store", "Worldwide chain", "Bloody hands", "It won't come out", "Wardrobe change", "Pleasant bath", "The things", "You own", "End up", "Owning you", "Money", "Does not", "Bring", "Happiness", "Bull", "Tornado", "Volcano", "Asteroid", "Old man", "Turtle", "Sloth", "Snail", "Hare", "Horse", "Greyhound", "Cheetah", "River", "Glass", "Gold", "Mirror", "Street fight", "Hold up", "Bank robbery", "War", "Headshot", "Sniper", "Surgeon", "Brain fetish", "Kebab", "Loot slime", "Flame trap", "Ghost head", "Slot machine", "Heavy traffic", "I hate mondays", "Poison ivy", "Contraband", "Rusty bucket", "Industrial revolution", "Ticket please", "Blood donator", "Cholinesterase", "Painkiller", "Patient", "Problematic", "Addict", "Breaking good", "Clear!", "Salvation", "Condemnation", "Mixed bag", "Private savings", "Extraterrestrial", "Hallowbrook", "Where am I?", "Hold your breath", "Cara loft", "Sulfur", "Barbecue", "Art of the deal", "Game of chance", "Overconfidence", "Hardcore pat", "Disrespect", "Storm ice and fire", "Blood is fuel", "Last laugh", "Bold and brash", "Belongs in the trash", "Lead", "Mercury", "Uranium", "Grape", "Lime", "Avocado", "Watermelon", "Mac", "Ta", "Bi", "Lis", "Perseverance", "Courage", "Foolishness", "Court", "Field", "Stadium", "Good doggy", "Raining cats and dogs", "Kennel", "Pet training", "Not too rough", "Hurt me plenty", "Ultra-violence"];

    assert.strictEqual(officialAchievementNames.length, 149, "sanity check on this test's own reference list");

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

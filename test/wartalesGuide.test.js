import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/wartales.js";

test("the Wartales guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "wartales-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "wartales");

});

test("the Wartales guide has all 9 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Company Building & Early Contracts",
            "Exploration, Crime & Diplomacy",
            "Trade, Terrain & Survival",
            "Monster Hunts & Collections",
            "Equipment, Economy & Tavern Life",
            "Combat Mastery & Regional Sagas",
            "Curse of Rigel & Pirates of Belerion DLC",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 235-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /235 Steam achievements/);

});

test("every one of the 235 official Wartales achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "A fledgling fellowship", "One big happy family", "You don't scare me", "Sightseer", "In conclusion...",
        "A job’s a job", "Workaholic", "A taste for comfort", "Explorers", "Pest control",
        "The legend starts here", "Are you not entertained?!", "Who you gonna call?", "One hell of a hammering", "Tis but a scratch",
        "Not today, Death!", "Survivors", "Please observe social distancing", "Well, well, well, what have we here?", "Started from the bottom... ",
        "Souls mates", "A Hate/Hate Relationship…", "The Great Escape", "Brought a blade to a whip fight", "What's the buzz?",
        "The Colour of War", "The fate of Tiltren", "Fatherly Love", "The Tiltren Dream", "The fate of Arthes",
        "The Ghost of Harag", "Territory at war", "The fate of Vertruse", "Survive THIS!", "Blood of the vines",
        "The fate of Ludern", "28 years later", "This is my swamp.", "Heist of the century", "Wiping the slate clean",
        "Public enemy #1", "Eternal work of art", "Built to last", "Those about to die will salute you", "In it for the money",
        "A job well done", "In and out, nobody gets hurt", "Victory favours the brave... and the bold\"", "End of freedom", "The fate of Grinmeer",
        "Influence of Brokers", "Let me in!", "Secret code", "Massive weapon incoming", "Prepare for trouble... And make it double",
        "Poison you said?", "A taste for luxury", "Leader of the pack", "Stockholm syndrome", "Savvy businessman ",
        "Treasure hunter", "Soft kitty, warm kitty...", "The power of friendship", "Teamwork makes the dream work", "First aid",
        "Are you still not entertained?", "High and mighty", "Eye to eye", "Got some rare things on sale, stranger!", "Breaking the ice",
        "Pale ontology", "God is playing dice", "The fate of Drombach ", "Destroyer of worlds", "Coming from old money",
        "This ship has sailed", "No good to man or beast", "Its vision is based on movement", "This isn’t even my final form", "Embrace tradition",
        "Sport in a storm", "Can’t touch it", "The balls are in your court", "Running of the boar", "Maze runner",
        "Break a leg", "Big bad wolf", "Not a ghost of a chance", "The phantom pain", "Animal control",
        "Elected dogcatcher", "In the wolf’s mouth", "Feels like home", "Where the water tastes like wine", "War is the most profitable business",
        "Rags to riches", "In all weathers", "Off the beaten track", "Rock solid", "Et tu, Brute?",
        "I am become death", "Born to fight", "Memento mori", "Written in the stars", "The beehive",
        "Travelling light", "All modern comforts", "Dead aim", "On our way to slay Hrimgandr", "Only your strongest potions",
        "Jack of all trades", "Spice wars", "The only show in town", "The rat pack", "Judging the book by its cover",
        "Safety first", "Those guys again?", "Down in history", "A run for your money", "The rich get richer",
        "Property is theft", "Crime and accomplishment", "It belongs in a museum", "Guardians of the Ancient secrets", "Show of hands",
        "Be like water", "Hopping mad", "Smoke on the water", "Hic Sunt Dracones", "Billboard Hot 10",
        "Treasure Island", "Most Wanted", "Gotta Catch 'Em All", "My job is just beach", "Back at sea",
        "Wonder of the seas", "Fully equipped", "Wave Race", "Battleship", "Single-handed sailor",
        "Emergency exit", "Via Maris", "Adventure is just bad planning", "Explorers of the seven seas", "The Miraculous Catch of Fish",
        "Beyond the Sea", "Anyone can cook", "Best plonk in town", "Scaling up", "Reaching the top",
        "Retired heroes", "Let him cook", "Flourishing business", "Food for thought", "Trouble brewing",
        "My friend's enemy is also my friend", "Heaven's kitchen", "Haute Cuisine", "That rat skewer is raw !", "Patience is a virtue",
        "The pint glass menagerie", "The price of fame", "There's honor among thieves", "Pleasing everyone", "Eat, drink and be merry",
        "If it's expensive, it must be good", "Rebranding", "Men of Steel", "Mithridatism", "Hot Ones",
        "Eye of the Cyclone", "With your eyes closed!", "Champions of the Black market", "Not my fault!", "Hostile environment",
        "Long-distance relationship", "The mercenary strikes back", "What do we do in the Shadows", "Two for the show", "As good as old",
        "The coward’s way out", "Master hunter", "My job here is done", "The Fate of Ormance", "Back in business",
        "Friendship is magic", "I had to do it to em", "The more the merrier", "I’m too old for this", "Beware of the cat",
        "I got friends on the other side", "Knock Knock", "Land of the free", "Rising from the ashes", "King of terrors",
        "Disciple of Saint Lenaid", "The fate of Brigga", "Perseverance is a quality", "No need for assistance", "There can be only one!",
        "Spirited away", "The curse of Brigga", "Ossuary", "This is fine", "The Fairest Kingdom",
        "Diversity Rules", "Loyal Subjects", "Factory", "Paradise on Earth", "I have heard you!",
        "You got a friend in me", "Caligula", "The fate of Rigel", "Together stronger", "Belit's Knowledge",
        "Plagueridden survivors", "Lesser preys", "Sons of the forest", "Insane deals", "First in class",
        "Stay with me", "Mad scientist", "Shepherd", "Catperson", "Frankenstein",
        "Impossible love", "For Science", "The fate of Lombelle", "City Hunter", "Risky investment",
        "Urban exploration", "Who threw that stone?", "Chicken Run", "General's voice", "White Knights",
    ];

    assert.strictEqual(officialAchievementNames.length, 235, "sanity check on this test's own reference list");

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

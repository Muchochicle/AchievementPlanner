import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/northgard.js";

test("the Northgard guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "northgard-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "northgard");

});

test("the Northgard guide has all 10 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Founding a Village & Early Survival",
            "Clan Mastery & Saga Chapters I",
            "Trade War, Fimbulvinter & Conquest",
            "Building, Defense & More Clan Mastery",
            "Conquest Victories & Clan Achievements",
            "Diplomacy, Chaos & Clan Achievements",
            "Sagas, Relics & Clan Mastery",
            "Bifröst Multiplayer & Endgame Clan Mastery",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 289-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /289 Steam achievements/);

});

test("every one of the 289 official Northgard achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Warlord", "Great Merchant", "King of Northgard", "The Wise", "The Protector",
        "The Mystic", "The Smith", "Expansionist", "Lore Seeker", "Purge",
        "Wolf Hunter", "Explorer", "Squalid Living", "Raider", "Dragonslayer",
        "Friend of the Jötnar", "Aggressor", "Proud", "Survivor", "Trader",
        "Guardian", "Legendary Guardian", "Bear Hunter", "Plowshares to Swords", "Slaughterhouse",
        "Scholar", "The Wall", "Iron Miner", "Stone Miner", "Great Explorer",
        "Storyteller", "Sheep Master", "Berserk", "Merchant", "Goat Master",
        "Raven Master", "Stag Master", "Wolf Master", "Warrior Rank", "Warchief Rank",
        "Thane Rank", "Jarl Rank", "Stalwart", "Bear Master", "Bird Enthousiast",
        "Bird Lover", "Hot water", "Northern SPA", "Contact with Thor", "Thor Fanatic",
        "Kobold Wipe Out", "Kobolds and Friends", "Recluse", "Boar Master", "Nature's Wonders",
        "King Rank", "High King Rank", "Norse God", "Chapter 1 - Exodus", "Chapter 2 - Foothold",
        "Chapter 3 - Settlement", "Chapter 4 - Trade War", "Chapter 5 - Punitive Expedition", "Chapter 6 - Intervention", "Chapter 7 - Jötunnheim",
        "Chapter 8 - Contest", "Chapter 9 - Tremors", "Chapter 10 - Fimbulvinter", "Chapter 11 - Bifrost", "Secrets of Exodus",
        "Secrets of Foothold", "Secrets of Settlement", "Secrets of Trade War", "Secrets of Punitive Expedition", "Secrets of Intervention",
        "Secrets of Jötunnheim", "Secrets of Contest", "Secrets of Tremors", "Secrets of Fimbulvinter", "Secrets of Bifrost",
        "Secrets of Rig's Saga", "Hanging out with friends", "It's a Wonderful Life", "Dances with wolves", "Deer Hunter",
        "The Long Game", "For a Few More Krowns", "Big Fish", "The Explorer", "The End",
        "Conqueror", "Through Helheim and back", "Snake Master", "Devious", "Tear of the Earth",
        "Myr'Killer", "Myrkalfar & Co.", "Grave Raider", "Tactician Expert", "Guardian Expert",
        "Conqueror Expert", "Rock Smasher", "The Melting Stones", "Ragnarok", "Dragon Master",
        "Blood Taste", "You Will Fight For Me", "Uprising", "Do you want to build a snowman?", "The Great Cauldron",
        "Hammer Time", "Knowledge is a Fruit", "Try Not to Break This One", "The Taste of Blood", "This is Mine Now",
        "A \"Small\" Delivery", "This is not Over Compensation", "Do NOT Step on its Tail", "Why so Serious", "The Benefits of Dark Magic",
        "Overcooked", "Nothing personal", "Educated Colonization", "Life is Over-Rated", "7 Wonders",
        "The Wonder Collector", "Great Defense", "Wonder Builder", "Builder", "Horse Master",
        "Let Them Be Stronger", "Day of the Tentacle", "Kraken Master", "Victorious Squid", "Fresh Sea Air",
        "Pride of the Kraken", "Wolf Conqueror", "Stag Conqueror", "Goat Conqueror", "Bear Conqueror",
        "Raven Conqueror", "Boar Conqueror", "Snake Conqueror", "Dragon Conqueror", "Horse Conqueror",
        "Kraken Conqueror", "Domination", "Perfectionist", "Emperor", "Sovereign",
        "I came, I saw, I conquered.", "Unstoppable Force", "Ox Master", "Ox Conqueror", "I need more RAM!",
        "Destruction Derby", "This isn't even my final form!", "Who needs houses?", "I saw some lights", "What is better than 1 Giant Champion ?",
        "A wild Viking appears!", "Poltergeist", "Let me borrow this...", "Mimirsbruh", "It's just a scratch...",
        "Mass purification", "Gardening", "Another shrubbery!", "The cat's out of the bag", "Lynx Master",
        "I see you !", "The Poacher Game", "The Last Resort", "It's a trap!", "Lynx Conqueror",
        "Aggressive Negotiations", "Squirrel Master", "The Root of our Clan", "Squirrel Conqueror", "I’m a Generous God",
        "Just a little help for my friends", "UNLIMITED FLOWER!", "Live and Let Live", "Spygame", "Clean Slate",
        "My Little Neutral: Friendship is Magic", "If I can't have them no one can", "In your face", "That still only counts as one", "The Rat King",
        "Rat Master", "Rat Conqueror", "Just Want to Watch the World Burn", "Can I go home now ?", "Lord of Cinder",
        "Megastore", "Spread Your Wings", "Eagle Master", "Eagle Conqueror", "Pandora's Box",
        "Airdropped supplies", "Finders keepers", "Don't kick the eagles' nest", "Building a what?!", "The Lion Queen",
        "Lion Master", "Do you have a moment to talk about our Lord and Savior?", "Everything the light touches", "Guess who's back? (everyone)", "The Twelve Peers",
        "Monk is not dead", "Faithbook", "Midas was an amateur", "Lion Conqueror", "Twilight of the Gods",
        "Cross Roads", "Paladin and the forty fiefs", "Namsborg", "The Blade of Orléans", "Paris Syndrome",
        "Operation Neptune", "The Sword in the stone", "Arma-get-out", "Rig's brigade grabs Briga", "Pope Culture",
        "Serf's Up", "Joan’s Arc", "Noblesse Oblige", "Hard Celtzer", "The Tortoise and the heir",
        "Extreme Junction", "Final Cross", "Gaul Trap", "Fenrir? More like Fen RIP", "Rollolo",
        "Ragenold of Nantes", "Godfred of Frise", "Rollo of Rouen", "PlayWithFire", "Lord of Lords",
        "Stoat Master", "Power to the People", "Where is Your God Now?", "Cultural Assimilation", "You're Welcome!",
        "Stoat Conqueror", "Now you know how that Feels", "The little shop of Gifts", "Knowledge is Power", "Natural Reserve",
        "The Old Guard", "Call of the Wild", "Owl Conqueror", "I See You", "Owl Master",
        "A Meal fit for a King", "Child of Ragnarök", "Hounds Master", "Unleash the Beast", "Toughskin Siblings",
        "Improvised Carpentry", "How Do You Like it Now?!", "Hounds Conqueror", "Bifröst Explorer", "Bifröst Survivor",
        "Midgard Explorer", "Muspelheim Explorer", "Niflheim Explorer", "Nidavellir Explorer", "Idavoll Explorer",
        "Bifröst Ultimate Explorer", "Foreign Legion", "Enter At Your Own Risk", "I.O.U", "Solid as a Rock",
        "Turtle Master", "Everything has a price", "Turtle Conqueror", "It's about the journey...", "Hostile takeover",
        "Small but sturdy", "The Value of Friendship", "No Place Like Mine", "Valhalla's Vanguard", "Rock Solid Statement",
        "Not a poney, yet not a bird", "Hippogriff Master", "Rocks are the solution", "Hippogriff Conqueror",
    ];

    assert.strictEqual(officialAchievementNames.length, 289, "sanity check on this test's own reference list");

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

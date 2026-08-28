import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/civilization-5.js";

test("the Sid Meier's Civilization V guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "civilization-5-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "civilization-5");

});

test("the Sid Meier's Civilization V guide has all 8 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Leader Victories",
            "Base Game: Gameplay & Milestones",
            "Base Game: Special & Easter-Egg Achievements",
            "Gods & Kings (Expansion)",
            "Brave New World (Expansion)",
            "Scenarios",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 286-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /286 Steam achievements/);

});

test("every one of the 286 official Sid Meier's Civilization V achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "First in the Hearts of Your Countrymen", "Video et Taceo", "Vivre La Revolution", "Blood and Iron", "Star of the North",
        "Veni, Vidi, Vici", "The Man Who Would Be King", "Amongst the Catacombs of Nephren-Ka", "The African King", "Arabian Knights",
        "Age of Empire", "Give Peace a Chance", "Empire of the East", "A Woman's Work", "Rising Sun",
        "First of the Mohicans", "Montezuma's Revenge…", "A Magnificent Victory", "Master of the Universe", "Baby Steps",
        "Taking off the Training Wheels", "The Alexman", "Charming.  Really.", "The Once and Future King", "The Golden Path",
        "The World Is a Mess, and I Just Need to Rule It", "Flawless Strategy", "It's Just You and Me, Kid", "I Need More Elbow Room", "Living in Smallville",
        "It's Standard Issue", "Do You Want to Super Size That?", "Ruler of the Twelve Colonies ", "Plate Tectonics", "Going It Old School",
        "Island Hopping", "Battlefield Earth", "Gotta Catch 'Em All", "Last Man Standing", "Say Hello to My Little Friend",
        "Neighborhood Bully", "Engineer", "Harder, Better, Faster, Stronger", "Moving on Up", "Two Men Enter, One Man Leave",
        "Second City", "Treasure Hunter", "We Have the Technology", "The Wonder Years", "Enlightened Ruler",
        "Model of a Modern Major-General", "Peace and Prosperity", "City of Lights", "City of Science", "City of Gold",
        "Land Baron", "It's Super Effective", "I'm on a Boat!", "Here Ends the Noble Savage", "Seriously?!?",
        "One to Rule Them All", "Go Boldly Where No Man Has Gone Before", "The Best State of a Republic", "The Pen is Mightier", "Exterminate! Exterminate!",
        "To Stand the Test of Time", "I Can Has Nukes?", "Experimenter", "Expansionist", "With Liberty and Justice for All",
        "Lux Perpetua Luceat Eis", "Diplomacy by Other Means", "With an Iron Fist", "Master of the House", "Death Before Shame",
        "Team Player", "Money Doesn't Grow on Trees", "Eighty-Eight Miles per Hour", "Freedom Isn't Free", "The Explorer",
        "The Appian Way", "Forty-Niner", "Merchant King", "Marco Polo", "Magellan",
        "Paul Bunyan", "God Is Great", "Flying Fortress", "Arab Trader", "Gardens of Lake Texcoco",
        "Riddle of the Sphinx", "Three Musketeers", "People of the Longhouse", "Bollywood", "Kamikaze Attack",
        "From Archaemennid to Safavid", "All Roads Lead to Rome", "Sun Tzu's Art of War", "Barbarian Warlord", "Barbary Pirate",
        "Tomb Raider", "War Canoe Attack", "My Little Pony", "Ruler of the Seas", "Conquest of the World",
        "He Threw a Car at My Head!", "Panzer \"Shafernator\" General", "By the Waters of Babylon", "The Golden Horde", "Khan",
        "Great Khan", "Supreme Khan", "Kublai Khan", "Genghis Khan", "Khaaan!",
        "Nobody Expects the Spanish Inquisition", "King of the Mountain", "Siglo de Oro", "Tout le Monde Francophone?", "Tea and Crumpets for Everyone",
        "Macho Picchu", "Huitzilopochtli's Arrow", "League of Extraordinary Hoyanehs", "All Aboard the Orient Express", "Dr. Heidegger's Experiment",
        "Raleigh's Road to Riches", "Au in the EU", "Law of the Splintered Paddle", "Surviving the Marquesas", "Bora! Bora! Bora!",
        "Head and Shoulders Above the Rest", "Ngata Chance", "Book 'em Danno!", "Heads Up!", "Do you have a little Captain in you?",
        "This isn't Kansas", "Searching for the Precious", "Hands Free to Victory!", "Where's the Biathlon?", "Pillage, Then Burn",
        "Time to Stitch a Tapestry", "Odin's Chosen Warrior", "Purple People Eaters", "This was their Finest Hour", "Fetchez la Vache!",
        "You The Conqueror", "Surviving Domesday", "Surviving Ragnarok", "The Choson One", "Turtle Power",
        "Samurai Delicatessen", "Fear the Turtle", "Yow Ming!", "Emperor Fu Manchu", "Taekwon-DOH!",
        "Dragon Emperor", "A Righteous Victory", "Honoring the Ancestors", "Seoul Power", "Zeupiter",
        "Bolt and Arrow", "Rest in Gold Pieces", "Party in hattUSA", "Grecian Formula", "Epic Gilgamesh",
        "Ra's Mighty Truth", "It satrap!", "Thoughtful Telemachus", "Odysseus the Great Tactician", "Far-Shooting Apollo",
        "Bright-Eyed Athena", "All-Achieving Zeus", "Wonderwall", "Reverse Engineer", "Know Thy Enemy",
        "Austrian Succession", "Dancer, Actress, Empress, Victor", "No White Flag Here", "Celtic Thunder", "Colonize This!",
        "Scourge of Everyone", "Baktun the Future", "Silent No More", "Defender of the Faith", "Gad Zeus!",
        "Propheteering", "Sticky Fingers", "Junta for Red October", "Smooth Talking", "Whack a Mole",
        "Access Denied", "Missionary Man", "Holier Than Thou", "We are Family", "Indoctrinated!",
        "Renaissance Man", "Et tu, Brute", "Modern Major-General", "From Russia with Love", "The Last Crusade",
        "Holy Father", "Capture of Brielle", "Hannibal’s Crossing", "RAM Usage", "Lion of the North",
        "Rastafari Messiah", "Greek Fire", "Longest. Name. Ever.", "Yoink!", "Apocalypse Now",
        "Intelligence Network", "Gimme Your Lunch Money!", "Richard the Lionheart", "Mehmet the Conqueror", "Never take our freedom!",
        "The Yokes on the Mongols", "Reconquista Who?", "Quite Accomplished", "Gentlemen's Agreement", "Sky Admiral",
        "Turks Shmurks!", "Double KO", "Pax Romana Aeternum", "I Missed That Day in History Class", "I Sunk Your Imperial Capital!",
        "Nobody expects...", "Tablet Tech Pioneer", "Pedro's Party People", "The Java Script", "This Desert Life",
        "King of the Wisent", "In Hoc Signo Vinces", "The Great Spirit", "Queen of the Adriatic", "Wanna Be the King of the Zulus",
        "One Small Step", "Yuri-ka!", "Rocking in the Free World", "Workers of the World - Unite!", "Strength Through Joy",
        "Games Without Frontiers", "Axis Powered", "Better Red Than Dead", "Everybody Wants to Rule the World", "Knowledge is Power",
        "Vote for Pedro", "Enemy Blade No More", "Here's Looking at You, Kid", "Poland Can into Space", "What's Yours is Mine",
        "Sacagawea's Legacy", "The Great Betrayal", "Run 50 Miles and Fight a Battle", "Highway Robbery", "Silk Road",
        "Greed is Good", "Built in (Almost) a Day", "Merchant Prince", "Raiders of the Lost Ark", "Losing My Marbles",
        "It Belongs in a Museum", "British Invasion", "Rock the Kasbah", "Radio Free Europe", "Tear Down this Wall!",
        "Pyramid Scheme", "Lingua Franca", "Flip-Flop", "Dark Horse", "Herculean Effort",
        "Soma Tablets for Everyone", "That's XCOM baby!", "Legends of the Hidden Temple", "Artistic License", "I Prefer my Africa Scrambled",
        "Praise the Victories", "Ottoman Carpentry", "Dr Livingstone I presume?", "The Rhodes Colossus", "Nigerian Bank Account",
        "Discoverer", "Glory, glory, hallelujah!", "Standing like a Stone Wall", "Red Badge of Courage", "Pickett's Recharge",
        "Sheridan's Valley Campaign"
    ];

    assert.strictEqual(officialAchievementNames.length, 286, "sanity check on this test's own reference list");

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

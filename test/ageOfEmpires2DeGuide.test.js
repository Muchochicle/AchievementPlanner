import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/age-of-empires-2-de.js";

test("the Age of Empires II: Definitive Edition guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "age-of-empires-2-de-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "age-of-empires-2-de");

});

test("the Age of Empires II: Definitive Edition guide has all 9 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Standard Game Victories",
            "Campaign Completion",
            "Campaign & Scenario Challenges I",
            "Campaign & Scenario Challenges II",
            "Campaign & Scenario Challenges III",
            "Campaign & Scenario Challenges IV",
            "AI & Meta",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 357-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /357 Steam achievements/);

});

test("every one of the 357 official Age of Empires II: Definitive Edition achievement names is mentioned somewhere in the guide", () => {

    // The full, official list this guide is built from
    // (backend/catalog/games/age-of-empires-2-de.json).
    const officialAchievementNames = [
        "Aztec Victory", "Berber Victory", "Briton Victory", "Bulgarian Victory", "Burmese Victory",
        "Byzantine Victory", "Celtic Victory", "Chinese Victory", "Cuman Victory", "Ethiopian Victory",
        "Frankish Victory", "Gothic Victory", "Hunnic Victory", "Inca Victory", "Hindustani Victory",
        "Italian Victory", "Japanese Victory", "Khmer Victory", "Korean Victory", "Magyar Victory",
        "Malay Victory", "Malian Victory", "Mayan Victory", "Mongol Victory", "Persian Victory",
        "Portuguese Victory", "Saracen Victory", "Slavic Victory", "Spanish Victory", "Tatar Victory",
        "Teutonic Victory", "Turkish Victory", "Vietnamese Victory", "Viking Victory", "Guardian of Scotland",
        "Iron Maid", "Custodian of the Holy Land", "For the Horde!", "The Emperor Strikes Back", "Huney, I Shrunk the Romans",
        "El Campeador", "Emperor of Tenochtitlan", "The Thicker the Hay, the Easier Mowed", "Vladislav, Baby Don't Hurt Me", "A Tale of One City",
        "Renaissance Man", "Earth Shaker", "The Blind Archer", "Master of the Maghreb", "King of Africa",
        "Age of Discovery", "Destroyer of Axum", "Island Hopper", "King of the Just Laws", "Cakkavatti",
        "Rebel with a Cause", "Empire of the Steppes", "The Cabbage King", "Yes we Khan!", "Battle Beast",
        "Wololo", "Unexpected", "Losing Your Religion", "Chain Reaction", "Kaboom",
        "Bull's Eye", "The Wonder, the Wonder, the...Oh, Never Mind", "A Truly Holy Emperor", "No Wonder on my Watch", "Diplomacy is for the Meek",
        "The Kushluk Assassination", "I Was in China Before", "Offense Is the Best Defense", "The Go-Getter", "Furor Teutonicus",
        "Truly Countless Bodies", "Hot & Spicy", "Battleship", "Relic Hoarder", "The Missionary",
        "Turkish Delight", "Lone Warrior", "Fire with Fire", "Raging Wildfire", "Chasing the Crown",
        "Friends, Countrymen, Lend Me Your Ears", "Numerous As the Grains of Sand", "Rome Was Destroyed in One Day", "Smoke on the Water", "With the Help of My Sisters",
        "Roar like a Lion", "An Army Marches on Its Stomach", "No Royal Hair Touched", "Not a Greek Tragedy", "Cuman Flush",
        "He Won't Be Back", "Pitched Battle", "D-Day (D stands for Demo)", "Eternal Gratitude", "It's a Treb!",
        "Mango Shots", "Hun, What Are You doing?", "Knocking On Your Door", "Castle Crusher", "Out With a Bang",
        "Lithuanian Victory", "Karambolage", "Elephantastic", "Fighting From Afar", "90kg Over 300 Meters",
        "Frankly My Dear...", "Anyone Order a Pizza?", "Sushi Lover", "Out of Their Element", "Castle of Doubt",
        "The Wonder, the Wonder, Noooooo...", "Pleasant Peasant", "Supremely Unexpected", "The King Is Dead, Long Live the King!", "Marco Polo",
        "Relic Hunter", "Bird Shooting", "Dark Dinner", "Dark Humor", "Masterpiece",
        "Final Countdown", "Howdy Neighbor", "Too Lame To Tame", "Rest in Peace", "With Moderation",
        "Rough Ride", "Barbaric Manners", "Prominent Player", "Sheep Hoarder", "Homeless",
        "Easy Going", "No Suntzu Light", "Age of Empires", "The English Justinian", "The Good, the Bold, and the Fearless",
        "Haute Culture", "Unchivalrous Pragmatist", "Throne Thief", "Malleus Scotorum", "No Wheels",
        "A Second Hastings", "Shut Up La Hire!", "Self-Made Man", "Haute, Haute, brief candle!", "Italy Jones and the First Crusade",
        "Burgundian Victory", "Sicilian Victory", "Golden Spurs", "Tour d'Italie", "Bond of Brothers",
        "Tolerant Piety", "Scattered Horde", "Mint Condition", "Star of the Poles", "Protector of the Realm",
        "No Baggage", "No Quarter", "Man of the Chalice", "Malevolent Marauder", "Zizkov Hill",
        "Against All", "Bohemian Victory", "Polish Victory", "Rhapsody of the Bohemians", "Fast Food",
        "The Persian Tiger", "Never Trust a Campaign AI", "An Offer You Khan't Refuse", "The Renovator", "Like Father, Like Son",
        "No Rest for the Wicked", "Eye of the Tiger", "No Wonder You Won", "Won't You Take Me by the Hand", "Huna Join Me?",
        "Construction Cancellation", "Parinirvana", "Raja of the People", "Hopeless Romantic", "Inspiring Poet",
        "Bengali Victory", "Dravidian Victory", "Gurjara Victory", "Face My Ratha", "King of the Seas",
        "Forged in the Heat of Battle", "Not Just a Militia", "Family Feudal", "Can I be Frank with You?", "Challenge Accepted",
        "Going for the Gold", "Wingman", "Baby Boomer", "Bull Market", "Bon Voyage",
        "Prepare for Boar!", "The God of War", "Not Cutting Corners", "Expedited Delivery", "Ur Out of Here",
        "Back to Square One", "What Would Alexander Have Done?", "Greece'd Lightning", "The Best Defense...", "Optimus Princeps",
        "Are You Not Entertained?", "I Am Legion", "You Have No Power Here!", "Roman Victory", "Assyrian Victory",
        "Babylonian Victory", "Carthaginian Victory", "Choson Victory", "Egyptian Victory", "Greek Victory",
        "Hittite Victory", "Lac Viet Victory", "Macedonian Victory", "Minoan Victory", "Palmyran Victory",
        "Persian Victory", "Phoenician Victory", "Roman Victory", "Shang Victory", "Sumerian Victory",
        "Yamato Victory", "Ride for Ruin!", "Calm, Cool, and Collected", "Agile as a Sparrow", "I Wonder Why I Did That?",
        "Forged in Iron", "Chariotable Numbers", "Builder of Civilizations", "Tactical Retreat", "Philhellene",
        "Law Maker", "Call Me Ismail", "Sneak Attack", "Landslide Election", "I Ain't 'Fraid of No Guns",
        "Lord of the Mountains", "Bounty Hunter", "Raiding Party!", "Church Sanctuary", "Georgia On My Mind",
        "Game's Over Yury", "Auntie Dearest", "Alexandra the Great", "Armenian Victory", "Georgian Victory",
        "Heroes and Villains", "Lost Vikings", "The Old-fashioned Way", "Daimyo of the Nine Provinces", "Plebeian Preserver",
        "Vandalized", "United We Fall", "Age of Vikings", "Generational Ambitions", "Bread and Circuses",
        "Galleon Bling", "So Epic", "Civis Romanus", "Seeds of Their Own Destruction", "A Most Convenient Death",
        "Faster Than a Speeding Cannonball", "Trust No One", "Coup D'état", "Saxon Revenge", "Shogun",
        "Nemesis", "Enter the Epic", "Leader of Men", "Fight in the Shade", "First Citizen",
        "All Accounted For", "A Suitable Satrap", "Friend of Artemisia", "The Great King's Wrath", "Marathonomachos",
        "Admirable Admiral", "Thundering Zeus!", "Friend of the Helots", "Tomb Raider", "Sack and Burn",
        "Crisis Management", "Blockade Breaker", "Philolacon", "Reject the Regent", "Combined Arms",
        "By Ahuramazda's Grace", "Political Animal", "Promachos", "Achaemenid Victory", "Athenian Victory",
        "Spartan Victory", "But It's Provocative", "Wei Victory", "Shu Victory", "Wu Victory",
        "The Imperial Uncle", "A Hero Comes; He Gains Renown", "Awaken the Dragon", "Man of the People", "Hero of Chaos",
        "Horses for Courses", "Like Taking Candy From A Baby", "Do Not Pursue Lü Bu", "King of the Southlands", "The Tiger of Jiangdong",
        "The Little Conqueror", "I Am Coming For You, Liu Biao", "Drive-By Barrage", "Shu'ing Enemies", "Time for a Raise",
        "Wei March on Our Stomachs", "Acid Rain", "Dare to Die", "Jurchens Victory", "Khitans Victory",
        "Fireworks Show", "I'm On Fire... Fireball!", "I Am the Storm", "Steppe People", "Iron Army",
        "Medieval Slasher", "The Great", "More Danger, More Glory", "Basileus", "Blood in the Streets",
        "Supply Surplus", "Alexandria Eschate", "Amphibious Assault", "Chokehold", "Indica",
        "Sing, Goddess, the Wrath of Alexander", "Macedonian Victory (Chronicles)", "Thracian Victory", "Puru Victory", "Chile Con Carnage",
        "Homeland Insecurity", "Our Little Ponies", "Golden Paths", "One Does Not Simply Take Iraca", "Expedition Impossible",
        "Warden of the Jungle", "Dynamite Deluxe", "Tupi or not Tupi", "Mapuche Victory", "Muisca Victory",
        "Tupi Victory", "Surveillance Network"
    ];

    assert.strictEqual(officialAchievementNames.length, 357, "sanity check on this test's own reference list");

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

import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/europa-universalis-4.js";

test("the Europa Universalis IV guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "europa-universalis-4-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "europa-universalis-4");

});

test("the Europa Universalis IV guide has all 8 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Mechanics & Milestones",
            "Nation Challenges - Part 1",
            "Nation Challenges - Part 2",
            "Nation Challenges - Part 3",
            "Nation Challenges - Part 4",
            "Nation Challenges - Part 5",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 373-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /373 Steam achievements/);

});

test("every one of the 373 official Europa Universalis IV achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "For the Glory", "That's a Grand Army", "That's a Grand Navy", "Defender of the Faith", "Until death do us apart",
        "That is mine!", "Victorious!", "The Emperors new clothes", "Down Under", "Isn't this the way to India?",
        "Azur semé de lis or", "Not so sad a state...", "Seriously?!", "It's all about the money", "Respected",
        "True Catholic", "Truly Divine Ruler", "Italian Ambition", "Cold War", "Royal Authority",
        "Viva la Revolución!", "Brothers in Arms", "No Pirates in my Caribbean", "Master of India", "Sweden is not overpowered!",
        "My armies are invincible!", "This navy can take it all", "The pen is mightier than the sword", "Traditional Player", "It's all about luck",
        "All belongs to Mother Russia", "At every continent", "Spain is the Emperor", "An early Reich", "Poland can into space",
        "World Discoverer", "The Chrysanthemum Throne", "Basileus", "Aggressive Expander", "A Kaiser not just in name",
        "Norwegian Wood", "African Power", "No Trail of Tears", "One Night in Paris", "Definitely the Sultan of Rum",
        "Market Control", "Ruina Imperii", "World Conqueror", "The Three Mountains", "Jihad",
        "Sunset Invasion", "Luck of the Irish", "Trade Hegemon", "Winged Hussars", "Grand Coalition",
        "Double the Love", "Just a Little Patience", "Liberty or Death", "Nobody wants to die", "Turning the Tide",
        "In the Name of the Father", "The Rising Sun", "The Five Colonies", "The Re-Reconquista", "Turn the Table",
        "The Great Khan", "Four For Trade", "The Grand Armada", "Je maintiendrai", "A Protected Market",
        "Queen of Mercury", "A Pile of Gold", "Sons of Carthage", "The Princess is in this Castle", "Electable!",
        "Vasa or Wettin?", "Sinaasappel!", "One King to Rule!", "Venetian Sea", "The Iron Price",
        "A Manchurian Candidate", "Center of Attention", "Total Control", "This Revolution Was Crushed", "Land of Eastern Jade",
        "That's a Silk Road", "My True Friend", "Marshy March", "Shahanshah", "Die Please Die",
        "Holy Trinity", "Switzerlake", "King of Jerusalem", "Krabater", "Lion of the North",
        "Guarantor of Peace", "Foremost Servitor of Jagannath", "Bengal Tiger", "Prester John", "Auld Alliance Reversed",
        "Gothic Invasion", "Kow-Tow", "Barbarossa", "Georgia on my Mind", "Albania or Iberia",
        "The Spice Must Flow", "Raja of the Rajput Reich", "The Sun Never Sets on the Indian Empire", "Over a Thousand!", "Dracula's Revenge",
        "Arabian Coffee", "Even Better than Piet Heyn", "A Sun God", "On the Edge of Madness", "Magellan’s Voyage",
        "Imperio español", "Blockader", "This is Persia!", "Kirishitan Japan", "Hessian Mercenaries",
        "Baltic Crusader", "Neither Holy, Nor German", "Colonial Management", "Voting Streak", "An Industrial Evolution",
        "City of Cities", "One Family to Rule them All", "This is My Faith", "Bleed Them Dry", "Subsidize my Love",
        "Take that, von Habsburgs!", "The White Elephant", "The Buddhists Strike Back", "Better than Napoleon", "Big Blue Blob",
        "Full House", "Black Jack", "A Decent Reserve", "The Six Nations", "The Bohemians",
        "Komnenoi Empire", "Lucky Lucca", "A Fine Goosestep", "Meissner Porcelain", "All Your Trade Are Belong to Us",
        "Grand Duchy", "Rags and Riches", "Strait Talk", "Academical", "One Faith",
        "Dar al-Islam", "The Uncommonwealth", "The Burgundian Conquest", "The Third Way", "Back to the Piast",
        "Great Perm", "Lazarus", "Frozen Assets", "Tatarstan", "Terra Mariana",
        "Blood for the Sky God!", "Pyramid of Skulls", "Trustworthy", "The Continuation of Diplomacy", "Factionalism",
        "From Humble Origins", "Ideas Guy", "For Odin!", "Rekindling the Flames", "First Come, First Serve",
        "Mare Nostrum", "Kuban Cigars", "Kushite Restoration", "The Fezzan Corridors", "Victorian Three",
        "The Animal Kingdom", "Golden Horn", "Kinslayer", "Choson One", "Sailor Mon",
        "Networking", "The White Company", "Time Bandit", "With a little help..", "Just Resting In My Account",
        "We bled for this", "Pick Your Poison", "Not just Pizza", "All That's Thine Shall Be Mine", "A Blessed Nation",
        "Queen of Conquest", "AAA Credit", "Hoarder", "Gentle Persuasion", "Combined Arms",
        "Cities of Cibola", "Turkish Delight", "Baa Baa Black Sheep", "Fanatic Collectivist", "Core-fu",
        "Rozwi Empire", "The Sudanese Expedition", "A tale of two Families", "Abu Bakr II’s Ambition", "Consulate of the Sea",
        "Live Long and Prosper", "Tear Down This Wall", "A Golden Empire", "Cherrypicking", "These Banners need a Saga",
        "Sweet Harmony", "Sakoku Law", "Absolutely", "Carthago Delenda Est", "Qing of China",
        "Three Trivial Tributary Tribes", "Made in Japan", "The First Toungoo Empire", "Disciples of Enlightenment", "Where the heart is",
        "Rise of the White Sheep", "I’ll graze my horse here.. And here…", "Gold Rush", "The Navigator", "Turtles all the way down",
        "Dovmont's Own", "Redecorating", "Breaking the Yoke", "Back in Control", "Mass Production",
        "Relentless Push East", "Laughingstock", "Lessons of Hemmingstedt", "It's All Greek To Me", "The 52 Garhs",
        "Bunte Kuh", "Good King René", "Saladin's Legacy", "Avar Khaganate", "Protect the Secret",
        "Great Moravia", "A Hero’s Welcome", "David the Builder", "Voltaire's Nightmare", "Pandya Empire",
        "The Prince of Egypt", "Around the World in 80 Years", "Hard Bargaining", "Early-Modern Warfare", "Sworn Fealty",
        "Parisian Pasha", "Multiculturalism", "Narcissism", "The Levant Turnabout", "Cowardly Tactics",
        "Home and Away", "Sun Invasion", "Sleepless in Seattle", "Philippine Tiger", "Empire of Mann",
        "Dude, Where's my Boat?", "Bright Spark", "Anglophile", "Industrial Powerhouse", "Chop Chop",
        "Mewar Never Changes", "Fine Financials", "The Coin is Stronger than the Sword", "Sweet Home Qaraqorum", "The Ostenders",
        "Ganges Khan", "Foul Mouthed", "Populists in Government", "Maharana Pratap", "Eat your Greens",
        "Emperor of Hindustan", "Tiger of Mysore", "True Heir of Timur", "Østindisk Kompagni Te", "Sikh Pun",
        "Pirate Bay of Janjira", "Never say Nevers", "Forgive me, for I have Sindh", "Cotton Kandy", "The Pheasant Strut",
        "Trophy Hunter", "Yarr Harr a Pirate's Life For Me", "Why is the Rûm gone!?", "You Get A New Home, And You Get A New Home", "Forever Golden",
        "Basque in Glory", "An Unlikely Candidate", "Spanish Fly", "The League of Mayapan", "Where Am I?",
        "AEIOU", "Napoleon’s Ambition", "Everything's Coming Up Mulhouse", "Global Hegemony", "God Tier",
        "Spaghetti Western", "Don’t be Cilli", "Inner Turmoil", "Stern des Südens", "Kingdom of God",
        "Stiff Upper Lippe", "On the Rhodes Again", "Czechs and Balances", "Mary of Lotharingia", "Holiest Roman Empire",
        "Wonderful", "Spice Girls", "To the Bone", "Keep the Flame Burning", "New, New Deli",
        "The Power of Three", "Quizquiz Pro Quo", "That's No Mon", "Mansa Musa", "Ultimate Military",
        "Golden Wind", "Fugger Banking", "Where are the penguins?", "This is fine", "KHAAAAAAN",
        "Knights of the Caribbean", "Australia-Hungary", "Shemot is Not", "One nation to rule them all", "Swahili Persuasion",
        "I don't like sand", "Surfing USA", "Imposter Syndrome", "Atwix Legacy", "Brick by Brick",
        "Super Trooper", "Assembly Instructions Needed", "Let It Go!", "Holy Horder", "For the Emperor!",
        "The Freest Man in the World", "Crossing the Finnish Line", "Purify the Temple", "Almost Prussian Blue", "Hanukkah Mutapa",
        "From Frankfurt to the Andes", "Mehmet's Ambition", "Triple the Rome", "No Country for Old Tercios", "All Blue",
        "Stardust Crusaders", "Copium Wars ", "Brentry", "The Reapers", "King of Kings",
        "Restore the Pentarchy", "Mets Hayk", "Desert Power", "Breadbasket of the World", "Truly Good Maaaaa-tch",
        "The Last Crusade", "Legacy of Saint George", "The Zoro-Austrians", "It's all coming together", "Doge Coins",
        "Veritas Vincit", "The Eagle flies alone", "Mayapahit?", "There Khan only be one!", "Baborg",
        "Get out of my swamp!", "Timurizz", "The Hungarian Games",
    ];

    assert.strictEqual(officialAchievementNames.length, 373, "sanity check on this test's own reference list");

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

import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/civilization-vi.js";

test("the Civilization VI guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "civilization-vi-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "civilization-vi");

});

test("the Civilization VI guide has all 12 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Victories & Difficulty",
            "Leaders of the Base Game",
            "Maps, Era Starts & Special Victories",
            "Civ-Specific & One-Off Feats (Base Game)",
            "The Six Scenario Packs",
            "Rise and Fall",
            "Gathering Storm",
            "Red Death (Battle Royale)",
            "New Frontier Pass & Pirates",
            "Leader Pass",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 320-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /320 Steam achievements/);

});

test("every one of the 320 official Civilization VI achievement names is mentioned somewhere in the guide", () => {

    // The full, official list this guide is built from
    // (backend/catalog/games/civilization-vi.json).
    const officialAchievementNames = [
        "Game, Settler, Match", "Irish Heartbeat", "Warlording Over Others", "Machiavelli's Great Work", "The Divine Right of Kings",
        "Emperor's New Groove", "12 Labors of Hercules", "God-Like", "Mission to Mars", "Nirvana",
        "Buying Your Blue Jeans and Listening to Your Pop Music", "Veni, vidi, vici", "Crusader King", "Valois Dynasty", "Daughter of Isis",
        "Be the Change You Wish to See In the World", "First to Civilize", "For Sparta!!!", "Varangian Guard", "Katsu!",
        "Montezuma's Revenge", "Mwene Kongo", "Emperor of Brazil", "Oratorical Skills", "Bronze Horseman",
        "Non Sufficit Orbis", "Elixir of Immortality", "Sultan of Egypt", "Warrior Queen", "Rome If You Want To",
        "Let Teddy Win", "I Am Amused", "Gift From the Storm God", "Legends of the Hidden Temple", "Army of Cthulhu",
        "100th Anniversary", "Arabian Knights", "Huey Tlatoani", "2016 Ready", "Crouching Tiger Hidden Cannon",
        "Walk Like an Egyptian", "Flight Slingulator", "For Queen and Country", "Loire Valley", "Third Crusade",
        "12 Olympians", "Give Peace a Chance", "Meiji Restoration", "City of Kongo", "Viking Raid",
        "Missed That Day in History Class", "Trans-Siberian Railroad", "Scythian Horse Rush", "Nobody Expects the Spanish Inquisition", "Epic of Gilgamesh",
        "The Origin of Species", "Oneth By Land Twoeth By Sea", "Here's Looking At You Kid", "Four Corners Offense", "Six Shooter",
        "Eight is Enough", "Ten Commandments", "Dirty Dozen", "Tectonic Shift", "Mare Nostrum",
        "The Taste of Victory", "Riffle and Bridge", "Alfred Wegener's Legacy", "Archimedes Bath", "Civ 6 Civets System",
        "Luftballons", "Pizza Party!", "Seven Wonders of the Post-Apocalyptic World", "Repo Man", "District 12",
        "Land Party", "Escort Service", "If You Build It, They Will Come", "Voyage of the Mayflower", "Everything is Awesome!!!",
        "Investment Banking", "A Case for War", "Naming Rights", "A Revolution Without Dancing", "Secret Service",
        "Silver Anniversary", "New Orleans Style Spanish Rice", "Man on the Moon", "We Are The Champions", "Selfie",
        "Island Hopping", "The Test of Time", "After Antiquity", "Out of the Dark Ages", "Renaissance Man",
        "Captain of Industry", "Modern Major General", "Splitting the Atom", "Through the Digital Age", "Unique Snowflake",
        "Even Our Castles Have Castles", "Finn MacCool's Pipe Organ", "What Do You Mean, \"Active Volcano?\"", "Absolutely Nothing Rotten in the State of Denmark", "More Hacksilver For Harald",
        "Master of the Baltic", "God of the Sea", "Armor of Faith", "You Are A Terrible Person", "Winged Hussar Mastery",
        "Always Bet On Black", "The Grandest of Hetmans", "God-Like Legacy", "A Smashing Victory", "Wood for Sheep",
        "Revenge of the Banana Benders", "Crow-eater Conquest", "Gumsucker Punch", "Sandgroper Sweep", "Meanwhile, in Australia",
        "Quite a Crowded House", "Midnight Oil", "Attack of the Drop Bear", "Never Lost a Battle", "King of the Four Corners of the World",
        "Greatest Is As Greatest Does", "Some Wine For Your Soldiers?", "Envoy Convoy", "No More Worlds To Conquer", "You're the Demonstrably Greatest",
        "He Named Them All After Himself?", "Resplendent Panoply", "I Quenched Your Thirst For Blood", "gg nub", "Pyramid Scheme",
        "Claim the Fourth Cataract", "The 25th Dynasty", "Overclocked Conviction", "More Wind for the Wind God", "Total A-Nile-hilation",
        "That's Some Good Kerma", "Sea of the Bow", "From Med to Red to the Land of the Dead", "Cardamom and Mangos and Elephants", "All Beneath the Wings of Garuda",
        "What is Mind? No Matter. ", "What is Matter? Nevermind. ", "Wat is Love", "Thalassocratophile ", "Try To Snatch the Pebble From My Hand ",
        "Raid Healer", "Many Signs and Wonders ", "Do You Have A Moment To Talk About Salvation?", "uSuthu! uSuthu!", "A Burning Splendor",
        "A small Country, a great people, so sorely tried", "Lord of All Who Live in Felt Tents", "From Peonies to Doricheon", "Let gentle blood shew generous might", "Radiant Deeds, Bright as Sunshine",
        "Deeds of a Monarch-Scorning People", "Justice and Lasting Peace", "Master and Commander", "Reverse Colonialism", "Buying your Deels and Listening to Your Throat Singing",
        "Triple Seven", "Mulligan", "Adamantine Confederacy", "I Thought We'd Moved Past This Joke", "Advanced Seminar in Astrophysics",
        "Ibutho", "Holy Righteous Queen Tamar", "Subject Matter Expert", "Getting the Band Back Together", "Drama Queen",
        "Curse your sudden but inevitable betrayal!", "Blackest Queen", "Bromance", "Die Another Day", "Circle of Life",
        "Extend the Olive Branch", "Shopping Spree", "Desperate Times Call For Desperate Measures", "Frenemy", "Elcano's Revenge",
        "Dark Horse", "Taxation Without Representation", "Victory Belongs to the Most Persevering", "I'm going to break the wheel", "What Could Possibly Go Wrong?",
        "Metroplex", "Treasures of Heaven and Earth", "Lord of Tahuantinsuyo", "Queen of the Byrsa", "Padishah Efendim",
        "Literally Playable", "The Sunny Way", "Majestrix of the Court of Love", "The Laurels of Virtues and Letters", "Tu Meke",
        "The Art of Telling Plain Truths", "Rivals on Ice", "Sid Meier's Ditchdigging Simulator", "An Engineer's Dream", "When Diplomacy Fails",
        "A Man A Plan A Canal Panama", "Surprise Attack", "One Tree Hill", "Seahenge", "Rock God",
        "Nobel-er than the Noblest", "Airing Your Grievances", "Peacekeeper", "Shield of Christianity", "Po-tay-toes!",
        "One does not simply walk into Ngauruhoe", "Hajj", "Purple Reign", "Nobody's Business But the Turks", "Smörgåsbord",
        "Meet the New Boss, Same as the Old Boss", "Let Our Powers Combine – Wait Heart is Missing!", "Toward Carbon Neutrality", "Future is Now", "And the Walls Kept Tumbling Down",
        "Real Estate Disclosures Required", "Eat, Drink and Be Merry", "Santé Passe Richesse", "Bendición", "Gesundheit",
        "I'm Not Dead Yet", "Aggressive Strain", "Medieval Medicine", "Élan", "Auftragstaktik",
        "With The Army You Have", "Vernichtungsstrategie", "Croix de Lorraine", "Big Bertha", "Danse Macabre",
        "Hello Cleveland!", "The Test of Royale", "Do Unto Others", "Have Them Do Unto You", "Reinforcements Have Arrived",
        "The Good Die Young", "The stars are right", "El Libertador", "Court of Itzamna", "To plow the sea",
        "I'll melt with you", "The end of the world as we know it", "The accursed share", "Ashes of Time", "Experience Is Everything",
        "It's Alive!", "Hope Springs Eternal", "From the Outer Darkness", "Getting Pruney", "U mad, bro?",
        "It Hungers", "NERDS!", "They're coming to get you, Barbara", "Out of Sight, Out of Mind", "The Lion of Judah",
        "Battle of Adwa", "The Mask of Baphomet", "Voice of Aiwass", "Dead But Dreaming", "This Blood is the Life",
        "One Eye in One Hundred", "Et tu, Gallia?", "Rome is Where the Heart is", "Crom Laughs at Your Tanks", "Things Fall Apart",
        "The City Ever-Shining", "No Light Without the Dark", "The Abyss is Hungry", "Naval Supremacy", "Port in Every Storm",
        "Love It When a Plan Comes Together", "I am a Pirate King!", "Forced Retirement", "Liquid Assets", "Mine! Mine! Mine!",
        "I am Kind of a Big Deal", "I Want You to Hit Me as Hard as You Can", "Babylon Rocker", "Let's Do the Time Warp Again", "Sing, O Muse",
        "Clash of the Titans", "The Brave Live Forever", "Steel-Driving Man", "The Dream Team", "I will not bend my back",
        "For he on honey-dew hath fed", "Top Hat and Monocle", "Jack of all Trades, Master of None", "Robber Baron", "Limited Edition",
        "Finder's Fee", "Frenemies", "The Spice Must Flow", "Ultramar Português", "Re-Animator",
        "Well Hello Mr. Fancypants", "It's a Trap!!!", "Salad Sensation", "Addressing Gettysburg", "The Self-Made Throne",
        "I Will Wait", "Claimants of the Peacock Throne", "Live Yongle Reaction", "Mother’s Day", "Valley of Kings",
        "Dawn of a Dynasty", "Father of Korean Literature", "Partial Completionist", "The Power Beside the Throne", "The Triumphs of Oriana"
    ];

    assert.strictEqual(officialAchievementNames.length, 320, "sanity check on this test's own reference list");

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

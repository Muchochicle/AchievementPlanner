import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/killing-floor-2.js";

test("the Killing Floor 2 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "killing-floor-2-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "killing-floor-2");

});

test("the Killing Floor 2 guide has all 8 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Early Maps & First Five Perks",
            "Demolitionist, Gunslinger & More Maps",
            "Sharpshooter, Bosses & General Milestones",
            "SWAT, Survivalist & Holiday Maps",
            "Objective Mode & Event Maps",
            "Later Expansion Maps",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 307-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /307 Steam achievements/);

});

test("every one of the 307 official Killing Floor 2 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Tower Tussle", "Seine Skirmish", "Bastille Brawl", "Arc Action", "You Can't Fight In Here, This Is The Control Room",
        "This Is What Happens When You Meet A Zed In The Alps", "The Shield Doors Must Be Closed", "Fear Is For The Zeds, My Little Lord", "Open For Testing", "Limited Contact",
        "Restricted Access", "Controlled Environment", "Just Visiting", "Mind Your Manor", "Settling In",
        "Lord of the Manor", "Paris Plunder", "Outpost Offerings", "Biotics Bling", "Manor Money",
        "The Suite Life", "Unsinkable II", "Bow Movement", "Seas The Day", "A Light In The Darkness",
        "This Is No Mine", "This Is A Tomb, Theirs", "They Shall Not Pass", "Point Paper", "Catacombs Cash",
        "Reach Level 5 Berserker", "Reach Level 10 Berserker", "Reach Level 15 Berserker", "Reach Level 20 Berserker", "Reach Level 25 Berserker",
        "Reach Level 5 Medic", "Reach Level 10 Medic", "Reach Level 15 Medic", "Reach Level 20 Medic", "Reach Level 25 Medic",
        "Reach Level 5 Commando", "Reach Level 10 Commando", "Reach Level 15 Commando", "Reach Level 20 Commando", "Reach Level 25 Commando",
        "Reach Level 5 Support", "Reach Level 10 Support", "Reach Level 15 Support", "Reach Level 20 Support", "Reach Level 25 Support",
        "Reach Level 5 Firebug", "Reach Level 10 Firebug", "Reach Level 15 Firebug", "Reach Level 20 Firebug", "Reach Level 25 Firebug",
        "Reach Level 5 Demolitionist", "Reach Level 10 Demolitionist", "Reach Level 15 Demolitionist", "Reach Level 20 Demolitionist", "Reach Level 25 Demolitionist",
        "Reach Level 5 Gunslinger", "Reach Level 10 Gunslinger", "Reach Level 15 Gunslinger", "Reach Level 20 Gunslinger", "Reach Level 25 Gunslinger",
        "Normal Berserker", "Hard Berserker", "Suicidal Berserker", "Hellish Berserker", "Normal Medic",
        "Hard Medic", "Suicidal Medic", "Hellish Medic", "Normal Commando", "Hard Commando",
        "Suicidal Commando", "Hellish Commando", "Normal Support", "Hard Support", "Suicidal Support",
        "Hellish Support", "Normal Firebug", "Hard Firebug", "Suicidal Firebug", "Hellish Firebug",
        "Normal Demolition", "Hard Demolition", "Suicidal Demolition", "Hellish Demolition", "Normal Gunslinger",
        "Hard Gunslinger", "Suicidal Gunslinger", "Hellish Gunslinger", "Perked Up", "Killer Korn",
        "Lager Me Up", "I'll Dopple Bock", "Kein Bier Vor Vier", "Black Forest Babies", "Plow the Field",
        "Sow the Seed", "Water the Crops", "Reap what you Sow", "Darkness Dolls", "Walked into the wrong room",
        "Mercenaries get paid", "Like what, kill him again?", "I was trained by the best. British Intel.", "Perilous Prison", "School's Out Forever",
        "Reach Level 5 Sharpshooter", "Reach Level 10 Sharpshooter", "Reach Level 15 Sharpshooter", "Reach Level 20 Sharpshooter", "Reach Level 25 Sharpshooter",
        "Normal Sharpshooter", "Hard Sharpshooter", "Suicidal Sharpshooter", "Hellish Sharpshooter", "Never Got the Hang of Thursdays",
        "Don't Panic", "Give Up and Go Mad Now", "So Long and Thanks for All the Zeds", "Can't Be Contained", "Mind the Gap",
        "Can't Make an Omelette Without Killing a Few People", "There Is No I in Team, But There Is an I in Pie", "Who Died and Made You #*%$&@ King of the Zombies?", "You've Got Red on You", "Dead Silence",
        "Quick on the Trigger", "It's Only a Flesh Wound", "Hack and Slash", "Die Volter", "Win Hard",
        "Win Suicidal", "Win Hell on Earth", "Mr. Perky 5", "Mr. Perky 10", "Mr. Perky 15",
        "Mr. Perky 20", "Mr. Perky 25", "Win 1", "Win 10", "Win 25",
        "VS Zed Win", "VS Human Win", "Hold Out", "I Got Your Back", "Benefactor",
        "Hell is Other People", "If You Are Going Through Hell, Keep Going", "Hell is Just a Frame of Mind", "All Hope abandon, Ye Who Enter Here", "Infernal Relics",
        "Reach Level 5 SWAT", "Reach Level 10 SWAT", "Reach Level 15 SWAT", "Reach Level 20 SWAT", "Reach Level 25 SWAT",
        "Normal SWAT", "Hard SWAT", "Suicidal SWAT", "Hellish SWAT", "Reach Level 5 Survivalist",
        "Reach Level 10 Survivalist", "Reach Level 15 Survivalist", "Reach Level 20 Survivalist", "Reach Level 25 Survivalist", "Normal Survivalist",
        "Hard Survivalist ", "Suicidal Survivalist", "Hellish Survivalist", "Surfs Up", "Gnarly",
        "Close-out", "Blown Out", "ALAN!!!!!!", "How Bout Some Gas?", "But what if we added Gas?",
        "Let's Try Some Gas", "That's enough gas....", "Hans Off the Merchandise", "The War Room", "The Mineshaft Gap",
        "Peace is Our Profession", "How I Learned to Love the Bomb", "Davy Crockett", "It's a Bloody World After All", "The Goriest Place on Earth",
        "The House the Zed Built", "Where Nightmares Come True", "The Wonderful World of Merchandising", "I Got a Rock", "Yuck, Candy Corn",
        "Fun Size? What is Fun Size?", "Victory! Full Size Candy Bar!", "Letting the Demons Out", "Stocking Full of Coal", "Bundle of Switches",
        "A Whupping", "Carried off to the Underworld", "A World Under Glass", "Training Simulation", "Test Trials",
        "Code Dead", "Fatal Exception", "It's aD.A.R.able", "A Spark to Light the Way", "Bolting through the Core",
        "High Voltage", "I Have the Power!", "Surge Breaker", "A Little Turbulence", "Flying Unfriendly Skies",
        "Soar, Gore, and More", "Mile High Dead Club", "Powered by Steam", "Station Stabilization", "Fun Near the Sun",
        "Space Race", "Houston, We Don't Have a Problem", "Shocking Discovery!", "Castle Crashers", "Party Hard!",
        "Dance on the Gore Floor", "Rest In Pieces", "Spooky Scary Skeletons", "Death's Door", "Cookies and Milk",
        "Slaying with Santa", "A Deadly Carol", "You're On The Badass List", "Yule Shoot Your Eye Out", "Cleanup On Aisle 3",
        "Shoot One Get Two Free", "Savings to Die For", "Red Friday", "A Special Deal", "It's All Downstream From Here",
        "Zeds Be Dam", "Overflow Controlled", "Dam You're Good!", "Money Down the Drain", "Burning Out the Fuse",
        "Touchdown Brings Me Down", "High as a Kite", "It's Cold as Hell", "All This Science I Don't Understand", "Droning On",
        "Data Deliverier ", "Island Isolation", "Someone Call a Chopper?", "It's Snow Good. ", "Giving the Cold Shoulder",
        "Frozen Assets", "The Snow Must Go On", "Cackling Crazy", "Non Compos Mentis", "Money Mania",
        "An Explosive Ending", "The World On Fire", "Science Finds A Way", "Laboratory Matricide", "The Oldest and Strongest Emotion",
        "With Strange Aeons Even Death May Die", "Oleaginous Old Ones", "End of the Line", "Experimental Progress...", "Experimental Success!",
        "Nobel Prize for Destruction", "Just Like the Simulations", "Firing Range Master", "You are my Only Hope", "Into the Mouth of Hell",
        "A British Hell on Earth", "Old Skull", "Deliverance", "Absolution", "From Here to Eternity",
        "Ignorance is Strength", "Big Brother is Watching You", "Like Tears in Rain", "One Small Step for Man", "One Giant Leap for Mankind",
        "The Dark Side of the Moon", "Inside the Oblivion Maze", "The Abyss Stares Back at You", "Forgotten Knowledge", "Killing in the Evening",
        "Horzine Rail Express", "Hidden Globes", "Dangerous Waves", "Sea of Zeds", "Marine Research",
        "Medieval Threats", "Zeds Are In Town", "Not Night Lamps", "Trainwreck", "Crash Course",
        "Lost Goods", "In too Deep", "Deadly Fishbowl", "Projections from the Deep", "Bye bye Volter",
        "Nightmare’s over", "Cult of Personality",
    ];

    assert.strictEqual(officialAchievementNames.length, 307, "sanity check on this test's own reference list");

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

import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/plague-inc-evolved.js";

test("the Plague Inc: Evolved guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "plague-inc-evolved-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "plague-inc-evolved");

});

test("the Plague Inc: Evolved guide has all 12 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Disease Victories & Cheats",
            "Symptom & Transmission Combos",
            "More Combos & Official Scenarios I",
            "Scenarios, Necroa & Simian Flu I",
            "Simian Flu & Combos",
            "Mastery, Multiplayer & Vampire I",
            "Shadow Plague & Vampire Combos",
            "Scenarios, Board Games & Fake News I",
            "Fake News & Cure Mode",
            "Cure Mode, Frozen Virus & Scenario Clears",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 250-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /250 Steam achievements/);

});

test("every one of the 250 official Plague Inc: Evolved achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Worm Food", "Not Another Zombie Game", "The Glorious Dead", "Insane Bolt", "Bacteria Victory", "Virus Victory", "Fungus Victory", "Parasite Victory", "Prion Victory", "Nano-Virus Victory", "Unlock Cheatmodes", "Banana Skin", "Big Bang", "Bottle Smasher", "Brainzzzz", "Breathe Deep", "Brown Streets", "Chinese Nuclear Retaliation", "Contaminated Package", "Dead End", "Don't Ask Me", "Due Diligence", "Evolve your disease", "Flash Mob", "Getting Colder", "Hide and Seek", "I'll Be Back", "Is it a bird?", "It's a Trap!", "Jaws", "Long Shot", "Non Starter", "Oink oink", "Olympic Spoiler", "Patient Who?", "Peer Pressure", "Plague in Space", "Red Rain", "Revenge of Osiris", "RMS Watch List", "Runner", "Russian Nuclear Retaliation", "Spitter", "STALKERs delight", "Tank", "Tasty", "Test This!", "The End Plague", "Touchscreen Trash", "Uh Oh", "Use your head", "Walking Contradiction", "Who needs DEET", "Z Com: Enemy Undead", "Assuming Direct Control", "Neurax Worm Victory", "Bio-Weapon Victory", "Complete Black Death", "Complete Created Equal", "Complete Global Warming", "Complete Golden Age", "Complete Ice Age", "Complete Mirror Earth", "Complete Pirate Plague", "Complete Shut Down Everything", "Complete Smallpox", "Complete Sovereign Default", "Complete Swine Flu", "Complete Volcanic Ash", "Complete Who Cares", "Complete Xenophobia", "Super Sparrow", "Lava God", "Mr President", "Unknown Origin", "Nipah Virus", "Frozen Virus", "Artificial Organs", "Call PETA", "Contagion Cancelled", "Who needs Science", "Who needs brains", "I never asked for this", "Bacteria Master", "Virus Master", "Fungus Master", "Parasite Master", "Prion Master", "Nano-Virus Master", "Bioweapon Master", "Neurax Master", "Necroa Master", "Normal Shuffle", "Mega-Brutal Shuffle", "Bingo!", "Lottery Winner!", "Boomer", "Apes will Rise!", "Not Just a Pretty Face", "Film Fanatic", "Great EscApe", "Trojan Horse", "Published Scenario", "Did I mean to do that?", "Family. Future.", "Go Simian-faeces", "The Traveller", "EvacuApe", "Apes. Together. Strong.", "ExterminApe", "Shouldn't Keep Pets", "An Ape is for Life…", "Simian Master", "No Idea", "Do it like they do", "Ape's Creed", "Like flies round…", "Rude Awakening", "Red Ape Redemption", "Blind Genius", "Not Necroa", "Attack of the Drones", "On The Naughty List", "Ultimate Christmas", "Complete Teleportation", "Complete Santa's Little Helper", "GLaDOS Says Hi", "The Future is Bright", "Genetic Challenger", "Genetic Domination", "Beta Infection", "Ndemic Infection", "Tutorial", "Nuclear Warfare", "Brief Acquaintance", "One Night Stand", "Friends With benefits", "BFF", "Comrade-In-Arms", "Disease Master", "Scenario Master", "Fully Evolved", "Luck of the Devil", "Heart of Darkness", "Batmobile", "Vampire Master", "Blood Pets", "Purity of the Chosen", "Home Sweet Home", "Van Helsing's Doom", "Twilight Lied", "Rock Bottom", "Watery Grave", "Pus Explosion", "Wolf Pack", "I am your Father", "Making Amends", "Greyscale", "Power Overwhelming", "Sadomasochist", "Count Countula", "Mr. Universe", "Dark Night", "Silent but Deadly", "Dentist's Dream", "Uphill Ice Skating", "Evil is a point of view", "Blood Trumps All", "Carpe Jugulum", "Welcome to Hellmouth", "Diamond Skin", "Bat Cave", "Essential Vitamins", "Plague Dogs", "Chiroptophobia", "No Brexit", "Soft Brexit", "Hard Brexit", "Brutal Brexit", "Complete Mad Cow Disease", "Sushi Crisis", "Complete Flight Club", "Complete Where is Everyone?", "Kind Of A Big Deal", "A Colt Classic", "Infecting Tabletops", "Sinking Feelings", "Party Hard", "Taking Risks", "Catan You Believe It?", "Spelling Out Success", "Killer Combo", "Anything But Trivial", "Welcome To The Jungle!", "Plague-opoly", "Awkward!", "Complete Ultimate Board Games", "Complete Science Denial", "The Cure Is A Lie", "Making 'heat' waves", "Hack Job", "Gamergate", "Generational tension", "District 9", "Independence Day", "Loch Ness Monster", "Too cute to lie", "Filter bubble", "Post-truth society", "We love fact checkers", "On the fence", "Bacteria Cured!", "Virus Cured!", "Parasite Cured!", "Nano-Virus Cured!", "Fungus Cured!", "Prion Cured!", "Bio-Weapon Cured!", "Anti Vaxxer", "Doomsday Save", "I will find you", "Shut down everything", "In it together", "Humans weren't meant to fly", "We're here to help", "Report thy neighbour", "Happy Frogs", "Rules are for losers", "Weapon X", "Frozen Virus Cured!", "Support Bubble", "Snow Way", "Ice Find", "Freeze things happen", "Outbreak Survivor", "Outbreak Veteran", "Outbreak Legend", "Diamonds Are Forever", "Hello, World!", "To Infinity and Beyond", "Phone Home", "There Can Be Only One", "One Vision, One Purpose", "Winter Has Come", "Co-Op Mode", "Highway to Hell", "Thinning the Herd", "Connect the Dots", "Out of the Blue", "Gotta Hand It to you"];

    assert.strictEqual(officialAchievementNames.length, 250, "sanity check on this test's own reference list");

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

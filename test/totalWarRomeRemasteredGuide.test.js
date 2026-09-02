import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/total-war-rome-remastered.js";

test("the Total War: ROME REMASTERED guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "total-war-rome-remastered-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "total-war-rome-remastered");

});

test("the Total War: ROME REMASTERED guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Campaigns & Roman Civil War",
            "Historical Battles & Wonders",
            "Barbarian Invasion",
            "Alexander",
            "Multiplayer & General Mechanics",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 192-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /192 Steam achievements/);

});

test("every one of the 192 official Total War: ROME REMASTERED achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Hail Caesar!", "Brutal Victory", "Islands in the Stream", "Walk Like an Egyptian", "In the Footsteps of Alexander", "A Very Large Oxhide in Very Thin Strips", "Parthing the Time", "The Sheer Gaul", "Ich bin ein Berliner!", "It's All Greek", "Rule Britannia", "Now Go Play The Expansion!", "Diadochi Underdog", "Battle Tanks in an Age of Spears", "Falxes are Overpowered in d20", "The Hardest Route", "Feminist Wave", "Iberian Adventures", "Spartacus Would be Proud", "Little Caesar", "Nasty, Brutish and Short", "Afri-carnage", "Trip to Giza", "Cutting the Gordian Knot Again", "Having a Ba'al", "The Quickest Parth", "Your Place or Rhine?", "Maximum Efficiency", "A Sprint, Not a Marathon", "Talk the Torc", "Between the Hammer and the Anvil", "Bu-But I Do Want to Play as Pontus!", "Nobody's Vassal", "Transylvanian Hunger", "Go Light or Go Home", "Here Comes the Hot Stepper", "Iberian Holiday", "Not Just a Pretty Thrace", "Crossing the Rubicon", "Top of the Pile", "Romanes Eunt Domus", "Brutal Defeat", "Caught Scipii-ing", "Usurper", "Conqueror", "Even That Little Armorican Village...", "Better luck next millenium", "Fog on the Rhine", "Alexander Turning in His Grave", "Hellenism's End", "Parthian Shot", "Histria repeating", "Comfortably Numidia", "Better Luck in the Fifteenth Century", "Ptolemnity", "Carthago delenda est", "Beside The Black Seaside", "Tigranes the not-so-Great", "Parthe gone", "Steppe Down", "About Thrace", "Hannibal riding high", "Hell(enistic) of a Showdown", "Celtic brothers", "The Empire Strikes Back", "It's A Trap!", "And Without Those Anti-Elephant Wagons, Too...", "Gold Rush", "Phalanx for the Memories", "Quintili Vare, Legiones Redde!", "This is Sparta!", "Time Commanders Participation Award", "Clash of the Titans", "Shadow of the Colossus", "The Hunter and the Hunted", "Light The Way", "Cultural Monopoly", "The Student Becomes the Master", "Rock Me, Marius", "Bye-Byzantium", "Full Octavian", "Hun and Gun", "Every Day is Halloween", "I Am the God of Hellfire...", "Not-so-mindless Vandalism", "Charlemagne-ia", "Heavy Metal Thunder", "Blue Meanies", "Bringing the Sass", "Like a Boss-phoran", "Ecstasy and Danger", "Romano-Britain's Got Talent", "Slavs to the Rhythm", "Grand Cru", "Berber-ian Invasion", "Suebi Got Back", "The Iron Crown", "Constanti-nope-le", "Divided They Fall", "Huns on the Run", "Coffin Fodder", "Horses for Courses", "Vandemonium", "Frankly my dear...", "I Shed Saxon Blood!", "Poor Suebi", "Civilisation Halted", "Pict On", "Back to Bornholm", "Lombarded", "Lights Out", "I Don't Like Sand", "Slavish Devotion", "Ain't it Grand to be Blooming Well Dead!", "Ostracised", "Rebel Yell", "Rebel Rebel", "The Darker the Night, the Brighter the Stars", "Stonehenge, 'Tis a Magic Place", "He's Not the Messiah, He's a Very Naughty Boy", "C'mon Baby Light my Fire", "Proud Member of the Midnight Crew", "Life in the Great Outdoors", "Whosever Pulleth Out This Sword...", "Short-lived Alliance", "You Big Brained Barbarian You", "Cultural Conquest", "Thrace the Truth", "Personal Vendetta", "Superior Tactics", "Dahae Hard", "Alexander, a Legend Among Men", "Alexander the Great, a God Among Men", "We Can Still Do This Without Him, Right?", "Alexander the Great, He Died of Fever in Babylon", "Alexander the Great Struck Fear into the Heart of Persia", "He Founded a City, and Called it Alexandria", "Father and Son", "Cleitus the Black Seals His Fate", "Scorched Earth Tactics", "Darius' First Stand", "Darius' Last Stand", "Porus Defence", "Blessed Victory", "Rome Takes Notes", "By The Book", "Historical Rematch", "Mysterious Melee", "Everything's Better With Elephants", "Hellenistic Civilisation", "Darius III's Revenge", "Arching for Victory", "Sikandar", "Get Your Hands Dirty", "Keep Your Hands Clean", "Veni, Vidi, Vici", "Start as You Mean to Go On", "Enduring Wonder", "We Demand... A Shrubbery!", "The British Museum Strikes Again", "Frater, Can You Spare a Dime?", "Benevolent Dictator", "Take These Chains", "Raze-ing Hell", "Do You Even Lift?", "Make it Rain", "The Sun Never Sets...", "Who Are You, Who Are So Wise in the Ways of Science?", "Carry Death Out of the Village", "Tinker, Tailor, Soldier, Spy...", "Choose Your Own Adventure", "Rock, Paper, Scissors?", "Commodus in the Arena", "Any Time, Any Place", "Ultimate Sacrifice", "Flawless Victory!", "Skin of Your Teeth", "Bloodlust", "Live To Win", "Take It All", "Fight 'til you Drop", "In Cahoots with the Mahouts", "Let Slip the Dogs of War", "This Little Piggy...", "With a Little Help From My Friends", "Patrician Realness", "Global Monopoly", "Own it!", "Gotta Catch 'Em All", "My Trade Goods Bring all the Boys to the Yard", "Fresh Mint", "He Wept For There Were No More Worlds to Conquer"];

    assert.strictEqual(officialAchievementNames.length, 192, "sanity check on this test's own reference list");

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

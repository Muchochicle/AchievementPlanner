import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/plague-inc-evolved.json - 250 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 246620 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("plague-inc-evolved");

test("getPlannerData('plague-inc-evolved') returns real planner data with 250 curated achievements", () => {

    assert.ok(game, "expected real planner data for plague-inc-evolved");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 250);

});

test("every Plague Inc: Evolved achievement has a unique id from 1 to 250 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 250 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 250);
    assert.strictEqual(new Set(apinames).size, 250);

});

test("every Plague Inc: Evolved achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

    for (const achievement of game.achievements) {

        assert.ok(
            Number.isInteger(achievement.difficulty) && achievement.difficulty >= 1 && achievement.difficulty <= 5,
            `${achievement.name} has an out-of-range difficulty: ${achievement.difficulty}`
        );

        assert.ok(
            Number.isInteger(achievement.estimatedTime) && achievement.estimatedTime > 0,
            `${achievement.name} has an invalid estimatedTime: ${achievement.estimatedTime}`
        );

        assert.ok(achievement.name?.length > 0, "achievement is missing a name");
        assert.ok(achievement.description?.length > 0, `${achievement.name} is missing a description`);
        assert.ok(achievement.apiname?.length > 0, `${achievement.name} is missing an apiname`);

    }

});

test("every one of the 250 Plague Inc: Evolved achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Colt Classic", "Discover the Steeplechase board game combo"],
        ["An Ape is for Life…", "…Not just for Christmas"],
        ["Anti Vaxxer", "Save the world without using a vaccine"],
        ["Anything But Trivial", "Discover the Trivial Pursuit board game combo"],
        ["Ape's Creed", "Discover the Assassin Combo"],
        ["Apes will Rise!", "Destroy humanity with the Simian Flu and let the apes take over"],
        ["Apes. Together. Strong.", "Gather 500,000 apes in a single country"],
        ["Artificial Organs", "Score 3 biohazards with Artificial Organs scenario"],
        ["Assuming Direct Control", "Win a game by enslaving humanity with the Neurax Worm"],
        ["Attack of the Drones", "Have a colony destroyed by a drone"],
        ["Awkward!", "Discover an inappropriate board game combo"],
        ["Bacteria Cured!", "Save the world from Bacteria on any difficulty "],
        ["Bacteria Master", "Beat Bacteria on mega-brutal difficulty"],
        ["Bacteria Victory", "Win a game with Bacteria on Normal Difficulty or higher"],
        ["Banana Skin", "Prevent PfiGlax modifing the Necroa Virus"],
        ["Bat Cave", "Discover the Bat Cave Combo"],
        ["Batmobile", "Transform vampire into a bat and fly somewhere"],
        ["Beta Infection", "Play a multiplayer VS game to completion with someone who already has the Beta Infection achievement"],
        ["BFF", "Win a Co-op multiplayer game on Brutal Difficulty"],
        ["Big Bang", "Kill the DarkWater research team"],
        ["Bingo!", "Win 5 times in a row on normal difficulty with the lucky dip strain enabled"],
        ["Bio-Weapon Cured!", "Save the world from Bio-Weapon on any difficulty with a vaccine"],
        ["Bio-Weapon Victory", "Win a game with Bio-Weapon on Normal Difficulty or higher"],
        ["Bioweapon Master", "Beat Bioweapon disease type on mega-brutal difficulty"],
        ["Blind Genius", "Discover the Blind Genius Combo"],
        ["Blood Pets", "Create slaves for your vampire"],
        ["Blood Trumps All", "Discover the Blood Trumps All Combo"],
        ["Boomer", "Discover the Boomer combo"],
        ["Bottle Smasher", "Smash a Blue cure bubble and slow down the Research Team"],
        ["Brainzzzz", "Discover the Waking Dead combo"],
        ["Breathe Deep", "Infect the Chernobyl research team"],
        ["Brief Acquaintance", "Play a Co-op multiplayer game through to the end"],
        ["Brown Streets", "Discover the Public Defecation combo"],
        ["Brutal Brexit", "Put Britain on the road to madness when it leaves the EU"],
        ["Call PETA", "Make a celebrity cry"],
        ["Carpe Jugulum", "Discover the Carpe Jugulum Combo"],
        ["Catan You Believe It?", "Discover the Settlers Of Catan board game combo"],
        ["Chinese Nuclear Retaliation", "Make the USA nuke China"],
        ["Chiroptophobia", "Drive out cavers before sampling the Shadow Pool"],
        ["Co-Op Mode", "Beat the Anti-Vax Scenario on Normal"],
        ["Complete Black Death", "Score 3 biohazards with Black Death scenario"],
        ["Complete Created Equal", "Score 3 biohazards with Created Equal scenario"],
        ["Complete Flight Club", "Score 3 biohazards in the Flight Club scenario"],
        ["Complete Global Warming", "Score 3 biohazards with Global Warming scenario"],
        ["Complete Golden Age", "Score 3 biohazards with Golden Age scenario"],
        ["Complete Ice Age", "Score 3 biohazards with Ice Age scenario"],
        ["Complete Mad Cow Disease", "Score 3 biohazards in the Mad Cow scenario"],
        ["Complete Mirror Earth", "Score 3 biohazards with Mirror Earth scenario"],
        ["Complete Pirate Plague", "Score 3 biohazards in the Pirate Plague scenario"],
        ["Complete Santa's Little Helper", "Score 3 biohazards in the Santa's Little Helper scenario"],
        ["Complete Science Denial", "Score three biohazards in the Science Denial scenario"],
        ["Complete Shut Down Everything", "Score 3 biohazards in the Shut Down Everything scenario"],
        ["Complete Smallpox", "Score 3 biohazards with Smallpox scenario"],
        ["Complete Sovereign Default", "Score 3 biohazards with Sovereign Default scenario"],
        ["Complete Swine Flu", "Score 3 biohazards with Swine Flu scenario"],
        ["Complete Teleportation", "Score 3 biohazards in the Teleportation scenario"],
        ["Complete Ultimate Board Games", "Score three biohazards in the Ultimate Board Games scenario"],
        ["Complete Volcanic Ash", "Score 3 biohazards in the Volcanic Ash scenario"],
        ["Complete Where is Everyone?", "Score 3 biohazards in the Where is Everyone? scenario"],
        ["Complete Who Cares", "Score 3 biohazards with Who Cares scenario"],
        ["Complete Xenophobia", "Score 3 biohazards with Xenophobia scenario"],
        ["Comrade-In-Arms", "Win a Co-op multiplayer game on Normal Difficulty"],
        ["Connect the Dots", "Beat the Measles Scenario on Normal"],
        ["Contagion Cancelled", "Prevent a film about your plague being made"],
        ["Contaminated Package", "Let humans spread the disease via blood transfusion"],
        ["Count Countula", "Carefully count your vampire's feeds"],
        ["Dark Night", "Discover the Dark Night Combo"],
        ["Dead End", "Stop DarkWater from discovering a Necroa Virus weakness"],
        ["Dentist's Dream", "Discover the Dentist's Dream Combo"],
        ["Diamond Skin", "Discover the Diamond Skin Combo"],
        ["Diamonds Are Forever", "Turn the planet into a crystal"],
        ["Did I mean to do that?", "Reverse Simian evolution"],
        ["Disease Master", "Complete all disease types on mega-brutal difficulty"],
        ["District 9", "Convince the world that the newcomers don't belong"],
        ["Do it like they do", "Discover the Discovery Channel Combo"],
        ["Don't Ask Me", "Make the PfiGlax modification project fail"],
        ["Doomsday Save", "Save the world with less than 5% of the world's population left"],
        ["Due Diligence", "Stop PfiGlax finding a link to the Necroa Virus"],
        ["Essential Vitamins", "Discover the Essential Vitamins Combo"],
        ["EvacuApe", "Evade a drone attack"],
        ["Evil is a point of view", "Discover the Evil is a point of view Combo"],
        ["Evolve your disease", "Evolve your disease to become stronger"],
        ["ExterminApe", "Scare humans into becoming hostile to apes"],
        ["Family. Future.", "Create an ape colony to bring intelligent apes together"],
        ["Film Fanatic", "Recreate the setting of the Dawn of the Planet of the Apes film"],
        ["Filter bubble", "Beat the Fake News Scenario on Normal"],
        ["Flash Mob", "Successfully use the Zombie Horde active ability"],
        ["Freeze things happen", "Unleash a new outbreak of the Frozen Virus"],
        ["Friends With benefits", "Win a Co-op multiplayer game on Casual Difficulty"],
        ["Frozen Virus", "Score 3 biohazards with Frozen Virus scenario"],
        ["Frozen Virus Cured!", "Save the world from Frozen Virus on any difficulty with a vaccine"],
        ["Fully Evolved", "Unlock all other Achievements"],
        ["Fungus Cured!", "Save the world from Fungus on any difficulty"],
        ["Fungus Master", "Beat Fungus disease type on mega-brutal difficulty"],
        ["Fungus Victory", "Win a game with Fungus on Normal Difficulty or higher"],
        ["Gamergate", "Please don't review bomb us"],
        ["Generational tension", "Convince the world. Divide the world."],
        ["Genetic Challenger", "Play a VS multiplayer game through to the end"],
        ["Genetic Domination", "Play and win a VS multiplayer game"],
        ["Getting Colder", "Trick the Egyptian DNA tests"],
        ["GLaDOS Says Hi", "Make a teleport attempt end in tragedy"],
        ["Go Simian-faeces", "Destroy a Gen-Sys lab"],
        ["Gotta Hand It to you", "Beat the Leprosy Scenario on Normal"],
        ["Great EscApe", "Break apes out of the primate shelter"],
        ["Greyscale", "Infect Stonehenge explorers"],
        ["Hack Job", "Convince the world that the elections were rigged"],
        ["Happy Frogs", "Initiative combo: Happy Frogs"],
        ["Hard Brexit", "Encourage Britain to have a 'hard' Brexit"],
        ["Heart of Darkness", "Send your vampire into a Blood Rage"],
        ["Hello, World!", "Awaken an alien consciousness"],
        ["Hide and Seek", "Prevent link with Chernobyl exclusion zone"],
        ["Highway to Hell", "Beat the Hell On Earth Scenario on Normal"],
        ["Home Sweet Home", "Set up a vampire lair"],
        ["Humans weren't meant to fly", "Initiative combo: Humans weren't meant to fly"],
        ["I am your Father", "Resurrect Count Dracula"],
        ["I never asked for this", "Feel the negative side of artificial organs"],
        ["I will find you", "Investigate a new disease outbreak"],
        ["I'll Be Back", "Successfully use the Zombie re-animate active ability"],
        ["Ice Find", "Study the DrillZero site"],
        ["In it together", "Initiative combo: In it together"],
        ["Independence Day", "Convince the world with an otherworldly threat"],
        ["Infecting Tabletops", "Discover a very familiar board game combo"],
        ["Insane Bolt", "Sprint to victory and set a world record by winning the game with Bacteria in under 365 days"],
        ["Is it a bird?", "Discover the Vampire Bat combo"],
        ["It's a Trap!", "Wipe out the Giza expedition"],
        ["Jaws", "Discover the Blood in the Air combo"],
        ["Killer Combo", "Discover the Cluedo/Clue board game combo"],
        ["Kind Of A Big Deal", "Discover the Poker board game combo"],
        ["Lava God", "Get 3 biohazards with each disease on Normal or higher in Volcanic Ash scenario"],
        ["Like flies round…", "Discover the Fly Magnet Combo"],
        ["Loch Ness Monster", "Convince the world of a legend in the loch"],
        ["Long Shot", "Discover the Projectile Vomiting combo"],
        ["Lottery Winner!", "Win 5 times in a row on mega brutal difficulty with the lucky dip strain enabled"],
        ["Luck of the Devil", "Destroy a Templar fort with near death vampire"],
        ["Making 'heat' waves", "Convince the world there is no environment crisis"],
        ["Making Amends", "Help tourists repair the damage to Stonehenge"],
        ["Mega-Brutal Shuffle", "Win 5 times in a row on mega-brutal difficulty with the shuffle strain enabled"],
        ["Mr President", "Get 3 biohazards with each disease on Normal or higher in the Shut Down Everything Scenario"],
        ["Mr. Universe", "Discover the Mr. Universe Combo"],
        ["Nano-Virus Cured!", "Save the world from Nano-Virus on any difficulty"],
        ["Nano-Virus Master", "Beat Nano-Virus disease type on mega-brutal difficulty"],
        ["Nano-Virus Victory", "Win a game with Nano-Virus on Normal Difficulty or higher"],
        ["Ndemic Infection", "Play a multiplayer VS game with someone who already has the Ndemic Infection"],
        ["Necroa Master", "Beat Necroa Virus disease type on mega-brutal difficulty"],
        ["Neurax Master", "Beat Neurax Worm disease type on mega-brutal difficulty"],
        ["Neurax Worm Victory", "Win a game with Neurax Worm on Normal Difficulty or higher"],
        ["Nipah Virus", "Score 3 biohazards with Nipah Virus scenario"],
        ["No Brexit", "Stop Britain leaving the EU"],
        ["No Idea", "Evolve 'Total Brain Death' in the first year and win"],
        ["Non Starter", "Stop DarkWater from analysing the Necroa Virus"],
        ["Normal Shuffle", "Win 5 times in a row on normal difficulty with the shuffle strain enabled"],
        ["Not Another Zombie Game", "Win a game with the Necroa Virus without making a single zombie"],
        ["Not Just a Pretty Face", "Make every ape in the world intelligent"],
        ["Not Necroa", "Discover the Zombie Panic Combo"],
        ["Nuclear Warfare", "Launch a Nuclear Strike in a multiplayer game"],
        ["Oink oink", "Discover the Swineflu Combo"],
        ["Olympic Spoiler", "Help the Olympics go viral"],
        ["On the fence", "Tear the world in two with indecision"],
        ["On The Naughty List", "Put humanity on Santa's naughty list"],
        ["One Night Stand", "Win a Quick Match Co-op multiplayer game"],
        ["One Vision, One Purpose", "Beat Xenolith on mega-brutal difficulty"],
        ["Out of the Blue", "Beat the Cure Mania Scenario on Normal"],
        ["Outbreak Legend", "Win 20 Outbreaks"],
        ["Outbreak Survivor", "Win 5 Outbreaks"],
        ["Outbreak Veteran", "Win 10 Outbreaks"],
        ["Parasite Cured!", "Save the world from Parasite on any difficulty"],
        ["Parasite Master", "Beat Parasite disease type on mega-brutal difficulty"],
        ["Parasite Victory", "Win a game with Parasite on Normal Difficulty or higher"],
        ["Party Hard", "Discover a compulsory enjoyment board game combo"],
        ["Patient Who?", "Stop the CDC finding Patient Zero"],
        ["Peer Pressure", "Have your plague discovered after riots force a government investigation"],
        ["Phone Home", "Emit a powerful void signal"],
        ["Plague Dogs", "Discover the Plague Dogs Combo"],
        ["Plague in Space", "Infect astronauts before they launch a space mission"],
        ["Plague-opoly", "Discover the Monopoly board game combo"],
        ["Post-truth society", "Beat the Fake News Scenario on Brutal"],
        ["Power Overwhelming", "Consume the bones at Stonehenge"],
        ["Prion Cured!", "Save the world from Prion on any difficulty"],
        ["Prion Master", "Beat Prion disease type on mega-brutal difficulty"],
        ["Prion Victory", "Win a game with Prion on Normal Difficulty or higher"],
        ["Published Scenario", "Publish a Plague Inc:Evolved Scenario to Steam Workshop"],
        ["Purity of the Chosen", "Create a new vampire"],
        ["Pus Explosion", "Oooze pus everywhere!"],
        ["Red Ape Redemption", "Discover the Red Ape Redemption Combo"],
        ["Red Rain", "Discover the Profuse Bleeding combo"],
        ["Report thy neighbour", "Initiative combo: Report thy neighbour"],
        ["Revenge of Osiris", "Invalidate the knowledge of the pharaohs"],
        ["RMS Watch List", "Get your Plague on the RMS Watch List"],
        ["Rock Bottom", "Consume the cavers exploring the Shadow Pool"],
        ["Rude Awakening", "Discover the Rude Awakening Combo"],
        ["Rules are for losers", "Initiative combo: Rules are for losers"],
        ["Runner", "Discover the Runner combo"],
        ["Russian Nuclear Retaliation", "Make the USA nuke Russia"],
        ["Sadomasochist", "Beat Shadow Plague with no Shadow Slaves"],
        ["Scenario Master", "Score 3 biohazards in every Official scenario"],
        ["Shouldn't Keep Pets", "Allow all the apes to die"],
        ["Shut down everything", "Do as Madagascar does"],
        ["Silent but Deadly", "Discover the Silent but Deadly Combo"],
        ["Simian Master", "Beat the Simian Flu on mega-brutal difficulty"],
        ["Sinking Feelings", "Discover the Battleship board game combo"],
        ["Snow Way", "Try to cover up the DrillZero site"],
        ["Soft Brexit", "Help Britain softly leave the EU"],
        ["Spelling Out Success", "Discover the Scrabble board game combo"],
        ["Spitter", "Discover the Spitter combo"],
        ["STALKERs delight", "Cause a nuclear meltdown"],
        ["Super Sparrow", "Get 3 biohazards with each disease on Normal or higher in the Pirate Plague Scenario"],
        ["Support Bubble", "Fund all the special Field Operative upgrades in Frozen Virus"],
        ["Sushi Crisis", "Start a Sushi Crisis in Japan"],
        ["Taking Risks", "Discover the Risk board game combo"],
        ["Tank", "Discover the Tank combo"],
        ["Tasty", "Discover the Bath Time combo"],
        ["Test This!", "Force Chernobyl research to be put on hold"],
        ["The Cure Is A Lie", "Inspire an anti-cure protest"],
        ["The End Plague", "Win one game with any disease type and any difficulty"],
        ["The Future is Bright", "End the game with apes and humans living together peacefully"],
        ["The Glorious Dead", "Win a game with the Necroa Virus"],
        ["The Traveller", "Move intelligent apes to a new country"],
        ["There Can Be Only One", "Turn the planet into a crystal without using meteors"],
        ["Thinning the Herd", "Beat the Herd Immunity Scenario on Normal"],
        ["To Infinity and Beyond", "Shatter the planet into fragments"],
        ["Too cute to lie", "Convince the world it's not feline fine"],
        ["Touchscreen Trash", "Disrupt the iCure and stop it helping cure research"],
        ["Trojan Horse", "Create a trojan plane and use it to infect a new country with the Neurax Worm"],
        ["Tutorial", "Complete the Tutorial"],
        ["Twilight Lied", "Let Humanity discover your vampire"],
        ["Uh Oh", "Discover the Oops symptom combo"],
        ["Ultimate Christmas", "Discover the Ultimate Christmas Combo"],
        ["Unknown Origin", "Score 3 biohazards with Unknown Origin scenario"],
        ["Unlock Cheatmodes", "Unlock the cheats by winning a game on Normal for ALL disease types"],
        ["Uphill Ice Skating", "Discover the Uphill Ice Skating Combo"],
        ["Use your head", "Discover the Cranial Dispersion combo"],
        ["Vampire Master", "Beat Shadow Plague on mega-brutal difficulty"],
        ["Van Helsing's Doom", "Destroy a Templar fort"],
        ["Virus Cured!", "Save the world from Virus on any difficulty"],
        ["Virus Master", "Beat Virus disease type on mega-brutal difficulty"],
        ["Virus Victory", "Win a game with Virus on Normal Difficulty or higher"],
        ["Walking Contradiction", "Discover the Walking Contradiction combo"],
        ["Watery Grave", "Drown Templar scientists in the Shadow Pool"],
        ["We love fact checkers", "Get Fact Checked"],
        ["We're here to help", "Initiative combo: We're here to help"],
        ["Weapon X", "Initiative combo: Weapon X"],
        ["Welcome to Hellmouth", "Discover the Welcome to Hellmouth Combo"],
        ["Welcome To The Jungle!", "Discover a cursed board game combo"],
        ["Who needs brains", "Take humanity back to the stone age"],
        ["Who needs DEET", "Avoid insect bites"],
        ["Who needs Science", "Show the world how useful homeopathy is"],
        ["Winter Has Come", "Beat the Zombies Vs Earth Scenario on Normal"],
        ["Wolf Pack", "Hunt down historian searching for Dracula's tomb"],
        ["Worm Food", "Win a game by eradicating humanity with the Neurax Worm"],
        ["Z Com: Enemy Undead", "Destroy a Z Com fortress"],
    ];

    assert.strictEqual(officialAchievements.length, 250, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});

import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/team-fortress-2.js";

test("the Team Fortress 2 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "team-fortress-2-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "team-fortress-2");

});

test("the Team Fortress 2 guide has all 15 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "General & Milestone Achievements",
            "Scout",
            "Soldier",
            "Pyro",
            "Demoman",
            "Heavy",
            "Engineer",
            "Medic",
            "Sniper",
            "Spy",
            "Map Achievements",
            "Halloween & Seasonal Events",
            "Mann vs. Machine",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 520-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /520 Steam achievements/);

});

test("every one of the 520 official Team Fortress 2 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Head of the Class", "World Traveler", "Team Doctor", "Flamethrower", "Sentry Gunner",
        "Nemesis", "Hard to Kill", "Master of Disguise", "With Friends Like these...", "Dynasty",
        "Hardcore", "Grey Matter", "First Do No Harm", "Quadruple Bypass", "Group Health",
        "Surgical Prep", "Trauma Queen", "Double Blind Trial", "Play Doctor", "Triage",
        "Preventive Medicine", "Consultation", "Does It Hurt When I Do This?", "Peer Review", "Big Pharma",
        "You'll Feel a Little Prick", "Autoclave", "Blunt Trauma", "Medical Breakthrough", "Midwife Crisis",
        "Ubi concordia, ibi victoria", "Grand Rounds", "Powerhouse Offense", "Lightning Offense", "Relentless Offense",
        "Impenetrable Defense", "Impossible Defense", "Infernal Medicine", "Doctor Assisted Homicide", "Placebo Effect",
        "Sawbones", "Intern", "Specialist", "Chief of Staff", "Hypocritical Oath",
        "Medical Intervention", "Second Opinion", "Autopsy Report", "FYI I am A Medic", "Family Practice",
        "House Call", "Bedside Manner", "Blast Assist", "Medic Milestone 1", "Medic Milestone 2",
        "Medic Milestone 3", "Combined Fire", "Weenie Roast", "Baptism by Fire", "Fire and Forget",
        "Firewall", "Cooking the Books", "Spontaneous Combustion", "Trailblazer", "Camp Fire",
        "Lumberjack", "Clearcutter", "I Fry", "Firewatch", "Burn Ward",
        "Makin' Bacon", "Plan B", "Pyrotechnics", "Arsonist", "Controlled Burn",
        "Firefighter", "Pyromancer", "OMGWTFBBQ", "Got A Light?", "BarbeQueQ",
        "Dance Dance Immolation", "Pilot Light", "Freezer Burn", "Next of Kindling", "Hot on Your Heels",
        "Second Degree Burn", "Hotshot", "Fire Chief", "Attention Getter", "Hot Potato",
        "Dead Heat", "Pyro Milestone 1", "Pyro Milestone 2", "Pyro Milestone 3", "Heavy Milestone 1",
        "Heavy Milestone 2", "Heavy Milestone 3", "Iron Kurtain", "Party Loyalty", "Division of Labor",
        "Red Oktoberfest", "Show Trial", "Crime and Punishment", "Class Struggle", "Soviet Block",
        "Stalin the Kart", "Supreme Soviet", "Factory Worker", "Soviet Union", "0wn the Means of Production",
        "Krazy Ivan", "Rasputin", "Icing on the Cake", "Crock Block", "Kollectivization",
        "Spyalectical Materialism", "Permanent Revolution", "Heavy Industry", "Communist Mani-Fisto", "Redistribution of Health",
        "Rationing", "Vanguard Party", "Pushkin the Kart", "Marxman", "Gorky Parked",
        "Purge", "Lenin A Hand", "Five Second Plan", "Photostroika", "Konspicuous Konsumption",
        "Don't Touch Sandvich", "Borscht Belt", "First Blood", "First Blood, Part 2", "Quick Hook",
        "A Year to Remember", "The Cycle", "Closer", "If You Build It", "Gun Down",
        "Scout Milestone 1", "Scout Milestone 2", "Scout Milestone 3", "Batter Up", "Doctoring the Ball",
        "Dodgers 1, Giants 0", "Batting the Doctor", "I'm Bat Man", "Pop Fly", "Round-Tripper",
        "Triple Steal", "Artful Dodger", "Fall Classic", "Strike Zone", "Foul Territory",
        "The Big Hurt", "Brushback", "Moon Shot", "Beanball", "Retire the Runner",
        "Caught Napping", "Side Retired", "Triple Play", "Stealing Home", "Set the Table",
        "Block the Plate", "Belittled Beleaguer", "No-Hitter", "Race for the Pennant", "Out of the Park",
        "Rode Hard, Put Away Wet", "Be Polite", "Be Efficient", "Have a Plan", "Kill Everyone You Meet",
        "Triple Prey", "Self-destruct Sequence", "De-sentry-lized", "Shoot the Breeze", "Dropped Dead",
        "The Last Wave", "Australian Rules", "Kook the Spook", "Socket to Him", "Jumper Stumper",
        "Not a Crazed Gunman, Dad", "Trust Your Feelings", "Überectomy", "Consolation Prize", "Enemy at the Gate",
        "Parting Shot", "My Brilliant Career", "Shock Treatment", "Saturation Bombing", "Rain on Their Parade",
        "Jarring Transition", "Friendship is Golden", "William Tell Overkill", "Beaux and Arrows", "Robbin' Hood",
        "Pincushion", "Number One Assistant", "Jarate Chop", "Shafted", "Dead Reckoning",
        "Triplecrossed", "For Your Eyes Only", "Counter Espionage", "Identity Theft", "The Man from P.U.N.C.T.U.R.E.",
        "FYI I am a Spy", "The Man with the Broken Guns", "Sapsucker", "May I Cut In?", "Agent Provocateur",
        "The Melbourne Supremacy", "Spies Like Us", "A Cut Above", "Burn Notice", "Die Another Way",
        "Constructus Interruptus", "On Her Majesty's Secret Surface", "Insurance Fraud", "Point Breaker", "High Value Target",
        "Come in from the Cold", "Wetwork", "You Only Shiv Thrice", "Spymaster", "Sap Auteur",
        "Joint Operation", "Dr. Nooooo", "Is It Safe?", "Slash and Burn", "Diplomacy",
        "Skullpluggery", "Sleeper Agent", "Who's Your Daddy?", "Deep Undercover", "Sniper Milestone 1",
        "Sniper Milestone 2", "Sniper Milestone 3", "Spy Milestone 1", "Spy Milestone 2", "Spy Milestone 3",
        "Candy Coroner", "Ghastly Gibus Grab", "Scared Stiff", "Attack o' Lantern", "Costume Contest",
        "Soldier Milestone 1", "Soldier Milestone 2", "Soldier Milestone 3", "Tri-Splatteral Damage", "Death from Above",
        "Dominator", "War Crime and Punishment", "Spray of Defeat", "Guns of the Navar0wned", "Mutually Assured Destruction",
        "Wings of Glory", "Engineer to Eternity", "Trench Warfare", "Bomb Squaddie", "Where Eagles Dare",
        "Banner of Brothers", "Screamin' Eagle", "Crockets Are Such B.S.", "Geneva Contravention", "Semper Fry",
        "The Longest Daze", "Gore-a! Gore-a! Gore-a!", "War Crime Spybunal", "Hamburger Hill", "Frags of our Fathers",
        "Duty Bound", "The Boostie Boys", "Out, Damned Scot!", "Backdraft Dodger", "Ain't Got Time to Bleed",
        "Near Death Experience", "For Whom the Shell Trolls", "Death from Below", "Worth a Thousand Words", "Brothers in Harms",
        "Medals of Honor", "Ride of the Valkartie", "S*M*A*S*H", "Kilt in Action", "Tam O'Shatter",
        "Shorn Connery", "Laddy Macdeth", "Brainspotting", "Left 4 Heads", "Well Plaid!",
        "Slammy Slayvis Woundya", "The Scottish Play", "Blind Fire", "Three Times a Laddy", "Loch Ness Bombster",
        "Double Mauled Scotch", "Caber Toss", "There Can Be Only One", "Tartan Spartan", "Demoman Milestone 1",
        "Demoman Milestone 2", "Demoman Milestone 3", "The Argyle Sap", "Scotch Guard", "Bravehurt",
        "Cry Some Moor!", "The Stickening", "Glasg0wned", "Scotch Tap", "The Targe Charge",
        "Beat Me Up, Scotty", "Something Stickied This Way Comes", "The High Road", "Bloody Merry", "Second Eye",
        "He Who Celt It", "Robbed Royal", "Highland Fling", "Pipebagger", "Spynal Tap",
        "Sticky Thump", "Revengineering", "Pownd on the Range", "Engineer Milestone 1", "Engineer Milestone 2",
        "Engineer Milestone 3", "Battle Rustler", "The Extinguished Gentleman", "Search Engine", "Building Block",
        "Unforgiven", "Quick Draw", "The Wrench Connection", "Silent Pardner", "Fistful of Sappers",
        "Doc, Stock, and Barrel", "Best Little Slaughterhouse in Texas", "Frontier Justice", "Six-String Stinger", "Uncivil Engineer",
        "Texas Two-Step", "Doc Holiday", "No Man's Land", "Trade Secrets", "Death Metal",
        "Land Grab", "Get Along!", "How the Pests Was Gunned", "Honky Tonk Man", "Breaking Morant",
        "Rio Grind", "Patent Protection", "If You Build It, They Will Die", "Texas Ranger", "Deputized",
        "Drugstore Cowboy", "Circle the Wagons", "Built to Last", "(Not So) Lonely Are the Brave", "Sleepy Holl0WND",
        "Masked Mann", "Sackston Hale", "Gored!", "That's a Wrap", "We Can Fix It In Post",
        "Time For Your Close-Up, Mr. Hale", "Ready for Duty", "Riftwalker", "Home Movie", "Local Cinema Star",
        "Indie Film Sensation", "Blockbuster", "Star of My Own Show", "Escape the Heat", "Optical Defusion",
        "Dive Into a Good Book", "Gift Grab", "Cap Trap", "Foundry Force Five", "Two Minute Warring",
        "The Crucible", "Five the Fast Way", "Claim Jumper", "Terminated, Too", "Real Steal",
        "Classassin", "Raze the Roof", "Dead Heat", "Foundry Milestone", "Steel Fragnolias",
        "Mission Control", "Flight Crew", "The Fight Stuff", "Plan Nine to Outer Space", "Failure to Launch",
        "Rocket Booster", "Best Case Scenario", "Cap-ogee", "Space Camp", "Lift-offed",
        "Escape Ferocity", "Doomsday Milestone", "The Great Deflate", "BFF²", "Mass Hysteria",
        "A Fresh Pair of Eyes", "Full Spectrum Warrior", "Wage Against the Machine", "Frags to Riches", "Fast Cache",
        "T-1000000", "Brotherhood of Steel", "Hack of All Trades", "Clockwork Carnage", "Balls-E",
        "Clockwork Conqueror", "Spam Blocker", ".executioner", "Deus Ex Machina", "Raid Array",
        "Ghost in the Machine", "Kritical Terror", "German Engineering", "Undelete", "Shell Extension",
        "System Upgrade", "Maximum Performance", "Engine Block", "Negative Charge", "Silicon Slaughter",
        "Metal Massacre", "Ctrl + Assault + Delete", "Sly Voltage", "Turbocharger", "Heavy Mettle",
        "Vial Sharing", "Tech Wrecker", "Do Androids Dream?", "Spark Plugger", "Hard Reset",
        "Real Steal", "A Lovely Vacation Spot", "Wizards Never Prosper", "Helltower: Hell's Spells", "Helltower: Competitive Spirit",
        "Helltower: Mine Games", "Helltower: Skeleton Coup", "Helltower: Spelling Spree", "Helltower: The Mann-tastic Four", "Helltower: Hat Out of Hell",
        "Helltower: Hell on Wheels", "Stand and Deliver", "Process of Elimination", "Snakewater Salesman", "Snakebit",
        "The Snakeout", "Mutually Air-Sured-Destruction", "Log Jammin", "Palace-Aid", "Crasher Crusher",
        "Chippin' In", "Now Legal To Eat", "Get Off My Lawn", "Software Downgrade", "Urban Strike",
        "Bot-Buster", "A Bygone Century", "Bank On It", "Wall of Pain", "Reanimator 2",
        "Robot Flush", "Dazed and Defused", "Nose Dive", "Punching Bag", "Emergency Brake",
        "Back in Business", "Back 2 Back", "Severed Ties", "Hipshot", "Eagle Eye",
        "Prime Cuts", "Upper Hand", "Project Excelsior", "Dogfight", "Air Raid",
        "Operation High Dive", "Flight Control", "U-Turn", "Chain Reaction", "Head-On Collision",
        "Fast Fingers", "Maximum Potential", "Bombs Away!", "Flight Cancelled", "Party Crasher",
        "Conga Line", "On The Rocks", "Running With Scissors", "May I Cut In, Too?", "Showboat",
        "Flip-Kabob", "Carnival of Carnage: Bumper Crop", "Carnival of Carnage: Up All Night To Get Ducky", "Carnival of Carnage: Hat Trick", "Carnival of Carnage: ReinKartnation",
        "Carnival of Carnage: Arms Reduction", "Carnival of Carnage: Step Right Up", "Carnival of Carnage: Bumper to Bumper to Bumper", "The Power and the Glory", "Balance of Power",
        "Power Trip", "Power Down", "Wet Work", "Tune Merasmus's Multi-Dimensional Television", "Jackpot!"
    ];

    assert.strictEqual(officialAchievementNames.length, 520, "sanity check on this test's own reference list");

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

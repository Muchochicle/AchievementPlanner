import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/forza-horizon-4.json - 178 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1293830 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("forza-horizon-4");

test("getPlannerData('forza-horizon-4') returns real planner data with 178 curated achievements", () => {

    assert.ok(game, "expected real planner data for forza-horizon-4");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 178);

});

test("every Forza Horizon 4 achievement has a unique id from 1 to 178 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 178 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 178);
    assert.strictEqual(new Set(apinames).size, 178);

});

test("every Forza Horizon 4 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 178 Forza Horizon 4 achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["\"Do you know what 'DK' stands for?\"", "Reach level 10 in The Drift Run."],
        ["#FORZATHON Sweep", "Complete 1 Weekly and 7 Daily #FORZATHON activities in the same week."],
        ["75890", "Win the LEGO® Speed Champions F40 event."],
        ["75892", "Win the LEGO® Speed Champions Senna event."],
        ["A Creature of Habit", "Complete all Seasonal Championships in a Festival Playlist Series."],
        ["A New Challenger Approaches", "Win the LEGO Bugatti Chiron Speed Champions Event"],
        ["A Pleasant Racing Green", "Earn 30 stars on \"British Racing Green\"."],
        ["A Race in the Crowd", "Complete 3 Blueprint Events created by other players."],
        ["A Summer in Pole Position", "Win all Seasonal Championships in one Summer season."],
        ["A Wild Challenge Card Appears!", "Complete your first challenge Card in Freeroam"],
        ["Accomplished Driver", "Reach Level 20."],
        ["An Illustrious Career", "Finish 40 different Horizon Story chapters."],
        ["Antique Restorer", "Find and restore 15 Barn Finds."],
        ["Apex Predator", "Reach Speed Zone Hero level 10."],
        ["At One with the Car", "Apply every Car Mastery available for a single car."],
        ["Attraction to Traction", "Earn all stars possible from Speed Zones in LEGO® Valley."],
        ["Auto Barn", "Find and restore your first Barn Find."],
        ["Autumn-mobiles", "Win all Seasonal Championships in one Autumn season."],
        ["Backbone of Britain", "Pass the M68 Speed Trap at 190MPH in the 2011 Ford Transit SSV."],
        ["Better get Kraken", "Complete The Kraken in less than 6 minutes in the Saleen S5S Raptor."],
        ["Block-Buster", "Complete a Challenge Card in any Hoonigan Car"],
        ["Bouncin’ Buggies", "Get 40 Air Skills in any Offroad Buggy."],
        ["Bouncy Bouncy, Having Such a Good Time!", "Reach Round 10 in the Horizon Cross Country Series."],
        ["Brick Built", "Discover the LEGO® Speed Champions Barn Find."],
        ["Brick Horsepower", "Complete the LEGO® Goliath in the LEGO® McLaren Senna."],
        ["Bully", "Eliminate a car at least 5 levels lower than you in a Head-to-Head race."],
        ["Cashing In", "Earn 1 Season Completion Bonus."],
        ["Certified Adventurer", "Qualify for a League in Ranked Team Adventure."],
        ["Clutch Isn't Just for Cars", "Start building your Master Builder's House."],
        ["Colossus of Roads", "Reach Round 10 in the Horizon Road Racing Series."],
        ["Coronation Trickin'", "Bank a Skill Chain of 195,300 or more points."],
        ["Crowning Achievement", "Purchase a castle."],
        ["Danish Hasty", "Unlock the Brick Challenge 'Danish Hasty' then maintain 200mph in the LEGO® F40 for 10 seconds."],
        ["Drift Club Island", "Earn 21 Stars in Drift Club on Fortune Island."],
        ["Drifters Paradise", "Get 3 Stars on every Drift Zone on Fortune Island."],
        ["Driving Detective", "Find/Smash 5 Treasure Chests."],
        ["Eat, Sleep, Race, Repeat", "Complete all the Race Events in LEGO® Valley."],
        ["Elementary", "Smash all Bonus Boards in LEGO® Valley."],
        ["Encore?", "Complete all activities in a single Festival Playlist Series."],
        ["Eventful", "Complete all 'Event' Brick Challenges."],
        ["Exodus of Exocet", "Get a time of 40 seconds or better in the Exomotive Exocet at the Halcyon Point Trailblazer Gate."],
        ["Fast Forward", "Earn all stars possible from Speed Traps in LEGO® Valley."],
        ["First Blood", "Win a Head-to-Head in The Eliminator."],
        ["First Love", "Buy your first car from the Autoshow."],
        ["First Promo-tion", "Take your first picture for Horizon Promo."],
        ["First-Time Adventurer", "Complete your first Team Adventure."],
        ["Flawless Brickstory", "Earn 27 Stars in the LEGO® Speed Champions Horizon Story."],
        ["Fortune for All", "Complete Round 3 of a #Forzathon Live Event on Fortune Island."],
        ["Foundations", "Add your first object in Blueprint Builder"],
        ["Frequent Flyer", "Get 3 Stars on every Danger Sign on Fortune Island."],
        ["From Aston Martin to Bentley", "Complete ten chapters of \"British Racing Green\"."],
        ["Full of Zest", "3 Star the The Forest Run Trailblazer Gate in the Peel P50."],
        ["German Efficiency", "Earn 30 stars on \"The Car Files\"."],
        ["Get Rich and Drive Tryin'", "Find/Smash all 10 Treasure Chests."],
        ["Go the Distance", "Win a race at The Colossus, The Gauntlet, The Titan or The Marathon."],
        ["Going the Extra Mile", "Earn all 27 stars from the \"Express Delivery\" story."],
        ["Gotta Smash Them All", "Complete all 'Smashable' Brick Challenges."],
        ["Ground Force", "Get 3 stars at a Danger Sign in a vehicle from the Trucks Car Type."],
        ["Hatch Me If You Can", "Complete the Festival Drag Strip in a Hot Hatch in under 25 seconds."],
        ["Head Hunter", "Win 3 Head-to-Head races within a single game of The Eliminator."],
        ["Heads Up", "Win a game of The Eliminator without acquiring any Car Drops."],
        ["High Roller", "Achieve Level <10> in the S7 Thread"],
        ["Hit the Jackpot", "Spin your first Super Wheelspin."],
        ["Horizon Fashion Week", "Unlock 100 clothing items for your character."],
        ["Horizon Superstar", "Gain Superstar Status by reaching Level 200."],
        ["How Hard Could it Be?", "Earn 21 stars on \"The Top Gear Horizon Special\"."],
        ["Human After All", "Complete 5 PvP Races."],
        ["Hunter Gatherer", "Find/Smash your first Treasure Chest."],
        ["I Feel the Need", "Reach Speed Trap Hero level 10."],
        ["I Live My Life…", "Reach Round 10 in the Horizon Drag Racing Series."],
        ["In the Brick of Time", "Earn all stars possible from Trailblazers in LEGO® Valley."],
        ["In the Zone", "Get 3 Stars on every Speed Zone on Fortune Island."],
        ["Intact... Mostly", "Complete all chapters of the \"Express Delivery\" story."],
        ["It's a Trap!", "Get 3 Stars on every Speed Trap on Fortune Island."],
        ["Jolly Cooperation", "Complete 5 Horizon Life Co-op Races."],
        ["Kingmaker", "Earn all 30 stars from the \"Upgrade Heroes\" story."],
        ["Last Car Standing", "Win a game of The Eliminator."],
        ["Learning to Fly", "Earn 3 stars from the Airport Leap Danger Sign twice in under 45 seconds."],
        ["LEGO® of Your Fears", "Earn all stars possible from Danger Signs in LEGO® Valley."],
        ["LEGO® Valley Tour", "Complete all 'Discovery' Brick Challenges."],
        ["Leviathan Slayer", "Complete The Leviathan in less than 8 minutes in the Ford Fiesta ST RX43."],
        ["Life of the Party", "Take part in 20 #FORZATHON Live Events, completing at least Round 1 in each."],
        ["Made the Cut", "Reach Round Two of the Island Conqueror."],
        ["Make Louis Proud", "Complete the LEGO Goliath in less than 4 minutes in the LEGO Bugatti Chiron."],
        ["Master Builder", "Become a Master Builder by finishing your House."],
        ["Master of Many", "Apply 50 Car Masteries."],
        ["Microscale Explorer", "Discover all the roads in LEGO® Valley."],
        ["Mini Adventure", "In the LEGO® Mini Cooper, drive from the Oasis Island to Lighthouse in under 1 minute 45 seconds."],
        ["Moonlighting", "Reach Round 10 of Street Scene."],
        ["Muddied", "Reach Round 10 in the Horizon Dirt Racing Series."],
        ["Never Tell Me the Odds", "Win a race in the Peel P50."],
        ["Not Just Straight-line Speed", "Earn at least 1 star at a Trailblazer Gate."],
        ["Official Horizon Board Game", "Smash all 200 Bonus Boards."],
        ["Optional Extras", "Apply your first Car Mastery."],
        ["Out-of-Towners", "Have your House visited by some unexpected guests."],
        ["Overachiever", "Complete a Season PR Stunt and receive a reward."],
        ["Pacifist", "Survive until the Final Showdown in a Level 1 car."],
        ["Paved with Gold", "Drive every Road in Fortune Island."],
        ["Perfectionist", "Earn all 8 Season Completion Bonuses in the same Series."],
        ["Picture Perfect", "Take photos of 200 different cars for Horizon Promo."],
        ["Pilot’s License", "Reach Danger Sign Hero level 10."],
        ["Pride Before the Fall", "Qualify for Horizon Autumn."],
        ["Process of Elimination", "Play 50 games of The Eliminator."],
        ["Purple Split!", "In Rivals, beat a Rival without receiving a \"dirty time\" penalty."],
        ["Ransacked", "Collect 5 Car Drops within a single game of The Eliminator."],
        ["Reaping the Rewards", "Complete a race of 3 or more laps at The Goliath in a Forza Edition Car."],
        ["Record Breaker", "Get 258mph on a Speed Trap in the Bugatti Veyron Super Sport."],
        ["Release the Quacken", "Earn 3 stars from Chapter Two of the \"Express Delivery\" story."],
        ["Scandinavian Brick", "Earn all stars possible from Drift Zones in LEGO® Valley."],
        ["Scavenger", "Collect 100 Car Drops in The Eliminator."],
        ["Seasoned to Victory", "Complete a Seasonal Championship on Fortune Island."],
        ["Second Century", "Complete the first chapter of \"British Racing Green\"."],
        ["Seeing Stars", "Complete all 'PR Stunt' Brick Challenges."],
        ["Seven Squared", "Complete the Super7 7 times"],
        ["Simples!", "Complete ten chapters of \"The Car Files\"."],
        ["Skill Master", "Complete ten chapters of \"Skill Streak\"."],
        ["SKILLING STREAK!", "Earn 30 stars on \"Skill Streak\"."],
        ["Skillz", "Complete the first chapter of \"Skill Streak\"."],
        ["Smashing", "Smash 500 Bonus Cubes in LEGO® Valley."],
        ["Snorkels Not Needed", "Earn 3 stars on the first chapter of \"The Top Gear Horizon Special\"."],
        ["Snow Problem", "Qualify for Horizon Winter."],
        ["Special Edition", "Get your first Forza Edition Car from a Wheelspin."],
        ["Speed Champion", "Become the Speed Champion."],
        ["Spring Into Action", "Qualify for Horizon Spring."],
        ["Spring into Racing", "Win all Seasonal Championships in one Spring season."],
        ["Star Centurion", "Get 100 stars in Horizon Stories."],
        ["Stay Home", "Purchase the Sunflower Meadows Player House."],
        ["Stay Safe", "Get 25 Clean Racing Skills in any A Class Car."],
        ["Stunt Puller", "Complete all Seasonal PR Stunts in a Festival Playlist Series."],
        ["Stunt Superhero", "Get 3 stars on every PR Stunt."],
        ["Swamp Gas from a Weather Balloon", "Collect all Alien Debris in LEGO® Valley."],
        ["Taking the Grand Tour", "View every Beauty Spot."],
        ["Tame the Monster", "Complete a race in an S1 class Rally Monster."],
        ["Taxi!!!", "Complete the first chapter of \"Isha's Taxis\"."],
        ["Teamwork Makes the Dream Work", "Complete Round 3 of a #FORZATHON Live Event."],
        ["Teeth Cut", "Play 25 games of The Eliminator."],
        ["Test your Might", "Complete The Trial."],
        ["The Big One", "Complete ten chapters of \"Isha's Taxis\"."],
        ["The Final Twelve", "Reach Round Ten of the Island Conqueror."],
        ["The Horizon Super7", "Complete your First Super7"],
        ["The Island Conqueror!", "Come First in the Fortune Island Finale Races - The Leviathan and The Kraken."],
        ["The Magnificent 77", "Play 77 Challenge Cards."],
        ["The Noisy Cartographer", "Drive down every road in Britain."],
        ["The OG", "Get over 180mph in the Koenigsegg CC8S at the Lady On The Lake Speed Trap."],
        ["The Prop-abilities are endless", "Place over 10 different objects in Blueprint Builder"],
        ["The Spirit of Adventure", "Reach level 5 in Racing Team Adventure, Games Team Adventure, or Anything Goes Team Adventure."],
        ["The Variator", "Drive 10 different cars in The Eliminator."],
        ["The Wonderful World of Car Insurance", "Complete the first chapter of \"The Car Files\"."],
        ["The World's Least Obedient Racing Driver", "Complete seven chapters of \"The Top Gear Horizon Special\"."],
        ["There is no Team in Victory", "Get ranked in Free-for-All Adventure."],
        ["There’s No 'I' in Team", "Take part in your first #FORZATHON Live Event."],
        ["Time for an Adventure!", "Play your first unranked Free-for-All Adventure."],
        ["Tonight...", "Complete the first chapter of \"The Top Gear Horizon Special\"."],
        ["Top 50%", "Reach Round Five of the Island Conqueror."],
        ["Top of the Food Chain", "Drive a level 10 car in The Eliminator."],
        ["Tortoise and the Hare", "Complete a PvP Showdown Race in an X class and a D class car."],
        ["Toy Box", "Complete a Challenge Card in any Hot Wheels Car"],
        ["Trailblazing", "Get 3 Stars on every Trailblazer Gate on Fortune Island."],
        ["Triple-A Taxis", "Earn 30 stars on \"Isha's Taxis\"."],
        ["Tunnel Vision", "Get 100 Near Miss Skills in any S2 Car."],
        ["Underdog", "Eliminate a car at least 5 levels higher than you in a Head-to-Head race."],
        ["Wait…how did you do that?", "Get 3 stars on the Needle Fall Danger Sign in the Morris Minor Traveller."],
        ["We Have the Technology", "Complete the first chapter of the \"Upgrade Heroes\" story."],
        ["Week Complete", "Complete a #FORZATHON Weekly Challenge."],
        ["Welcome to a New Horizon", "Qualify for the Horizon Roster."],
        ["Welcome to Britain", "Arrive at the Horizon Festival."],
        ["Welcome to Fortune Island", "Set up the Horizon Festival on Fortune Island."],
        ["Welcome to LEGO® Speed Champions", "Arrive at your Master Builder's LEGO® Baseplate."],
        ["Welcome to The Eliminator", "Play your first game of The Eliminator."],
        ["Well Seasoned", "Complete a Season Championship and receive a reward."],
        ["Whatever Next?", "Complete every Showcase Event."],
        ["Winner, Winner, Brick'n Dinner", "Win all the Race Events in LEGO® Valley."],
        ["Winter is Running", "Win all Seasonal Championships in one Winter season."],
        ["Wolf in Sheep's Clothing", "Complete all chapters of the \"Upgrade Heroes\" story."],
        ["Wyldstyle", "Complete all 'Skill' Brick Challenges."],
        ["YOU ARE THE ELIMINATOR", "Win 25 Head-to-Heads in The Eliminator."],
        ["You should take a rest!", "Complete 3 consecutive #FORZATHON Live events."],
        ["You're Gonna Need a Bigger Tote", "Complete all 'Collectable' Brick Challenges."],
    ];

    assert.strictEqual(officialAchievements.length, 178, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});

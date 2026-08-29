import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/forza-horizon-5.json - 164 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1551360 (fetched through this app's own services/steamApi.js).
// This game has no hidden achievements: all 164 ship a real, official
// Steam description, quoted verbatim below.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("forza-horizon-5");

test("getPlannerData('forza-horizon-5') returns real planner data with 164 curated achievements", () => {

    assert.ok(game, "expected real planner data for forza-horizon-5");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 164);

});

test("every Forza Horizon 5 achievement has a unique id from 1 to 164 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 164 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 164);
    assert.strictEqual(new Set(apinames).size, 164);

});

test("every Forza Horizon 5 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 164 Forza Horizon 5 achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const officialAchievements = [
        ["A Forza Edition to my Collection", "Earn a Forza Edition car from a Wheelspin or Super Wheelspin"],
        ["A Heart of Gold", "Send another player a Gift Drop"],
        ["A New Era", "Complete all chapters in the Icons of Speed Story"],
        ["A Royal Affair", "At sunrise, take a photo of your car with some monarch butterflies at Hotel Mirador Balderrama"],
        ["A True Icon", "Earn 3 Stars in all chapters of the Icons of Speed Story"],
        ["Adaptable", "Complete the On a Wing and a Prayer Showcase Event"],
        ["Adrenaline Rush", "Build the Horizon Rush Outpost"],
        ["Album Cover", "Take a photo of the 2021 Mercedes-AMG ONE for Horizon Promo"],
        ["Altitude Quickness", "Win all Race Events"],
        ["An Item Of Extreme Value", "Discover and photograph the Golden Tlaloc Totem"],
        ["Another One Bites the Dust", "Earn 100 Levels in Horizon Open"],
        ["Aquanaut", "Win any race that includes sections of Hot Wheels Water Flume Track"],
        ["As The Clock Strikes Midnight", "Complete Skill Mode at the Neon Airstrip whilst driving any Aventador"],
        ["Ask Any Racer, Any Real Racer", "Build the Horizon Street Scene Outpost"],
        ["Attracted to Victory", "Win any race that includes sections of Hot Wheels Magnet Track"],
        ["AWDyssey", "Build the Horizon Wilds Outpost"],
        ["Back in the Saddle", "Complete a Horizon Open Custom Race in the 2021 Ford Bronco"],
        ["Back To School", "Complete the first chapter in the Icons of Speed Story"],
        ["Backwards, At Night, In The Rain", "Complete all of Ramiro's Reputation Challenges"],
        ["Badge of Honour", "Earn a Badge"],
        ["Beach Bomb", "Earn 3 stars at the Canyon Jump Danger Sign in a 1963 Volkswagen Type 2 De Luxe"],
        ["Better Than New ", "Restore 14 Barn Finds in México"],
        ["Better Together", "Win your first Horizon Race event"],
        ["Blast From the Past", "Complete all chapters of the 'Horizon Origins' Story"],
        ["Blending In", "Win as a Hider in Hide and Seek"],
        ["Bounty Hunter", "Complete 25 matches of Hide and Seek as a Seeker"],
        ["Cactus Makes Perfect", "Smash 500 cacti during México's Wet Season "],
        ["Canyon Master", "Earn 3 Stars from every freeroam PR Stunt in Sierra Nueva"],
        ["Cash and Rally", "Make your way up to the 7th Tier of Grit Reapers Reputation Challenges"],
        ["Catching a Break", "Successfully hit a total of 20 Seekers with Chase Breaker in a game of Hide and Seek"],
        ["Chicken Dinner", "Win your first game of The Eliminator"],
        ["Competition, Experimentation, and Creativity", "Play another player's EventLab creation utilizing Hot Wheels track pieces"],
        ["Complete Collection", "Find and smash all 250 Bonus Boards in México"],
        ["Completed It Mate", "Complete all the Reputation Challenges"],
        ["Course Connoisseur", "Win all Horizon Race events"],
        ["Cover to Cover", "Earn 3 stars on all chapters in a single Horizon Story"],
        ["Covering Ground", "Drive 50 miles in Hide and Seek"],
        ["Dedicated to the Cause", "Reach a Streak of 20 in Hide and Seek"],
        ["Demolisher", "Earn 200 Wreckage Skills in Free Mode"],
        ["Drift Club Mexico", "Earn 3 stars in all chapters of the 'Drift Club' Horizon Story"],
        ["Drifting, Drifting, Drifting", "Earn 150 Drift or E-Drift Skills in Free Mode"],
        ["Driving in a...", "Complete Skill Mode in the Winter Wonderland whilst driving any Lotus"],
        ["Dust in the Lens", "Take a photo featuring the Gran Telescopio and a dust storm"],
        ["Enter the Realm", "Enter any Realm in either Free Mode or Skill Mode"],
        ["Far from the Mudding Crowd", "Build the Horizon Apex Outpost"],
        ["First Love", "Purchase your first car from the Autoshow"],
        ["Fit to Print", "Take 50 photos of Legendary cars for Horizon Promo"],
        ["Follow My Lead", "Complete all of Alejandra's Reputation Challenges"],
        ["Ford of the Wings ", "Earn 3 Stars at the Eagle's Perch Danger Sign in a Ford Supervan 3 "],
        ["Free Bird", "Earn 100 Speed Skills in Free Mode"],
        ["Fresh Pressed Orange Routes", "Discover every road in Hot Wheels Park"],
        ["Front Runner", "Finish 5 Horizon Tour Race Events ahead of all Drivatars"],
        ["Generating Alternate Smash Flows", "Smash all 30 Apex Predators Boards"],
        ["Get My Good Side", "Take a photo of your character outside a car"],
        ["Give it the Beans!", "Earn 3 Stars on all chapters of both Hi and Low stories"],
        ["Give Me Five!", "Apply and purchase an upgrade to 5 cars at the Horizon Test Track"],
        ["Good Carma", "Give another player some Kudos to show your appreciation"],
        ["Gotta Pop 'Em All", "Smash all of the Floating Tanks in Hot Wheels Park"],
        ["Gotta Smash 'Em All", "Complete 5 Seasonal Smashable Challenges"],
        ["Hall of Famer", "Reach the Horizon Hall of Fame"],
        ["Hi Five", "Complete all chapters of the Donut Media Hi Story"],
        ["Hider and Seeker", "Complete a match of Hide and Seek as both the Hider and the Seeker"],
        ["High Roller", "Spin 25 Wheelspins while in Hot Wheels Park"],
        ["Hoonigan Impressionist", "Smash a Pinata in the 'Drift Club Mexico' Chapter of the 'Drift Club' Horizon Story"],
        ["Horizon Badlands Champion", "Become the Horizon Badlands Rally Champion"],
        ["Hot Wheels All Star", "Earn 3 Stars from every PR Stunt in Hot Wheels Park"],
        ["Hot Wheels Legend", "Win the Hot Wheels Goliath event and become the Hot Wheels Legend"],
        ["Hot Wheels, Hot Laps", "Post a clean time for every Rivals route in Hot Wheels Park"],
        ["How to Race Friends and Influence People", "Earn 3 stars in the 'Tristan' Chapter of the 'Born Fast' Horizon Story"],
        ["I Ain't Gonna Change", "Complete all of Alex's Reputation Challenges"],
        ["I Have the High Ground ", "Win 3 Rivals Events in 3 different PI Classes while driving the same car"],
        ["I'll Just Take This Now", "Win your first Midnight Battle"],
        ["I'm an Expert Now", "Complete the Expert Qualifier Event"],
        ["Icebreaker", "Participate in a Horizon Arcade Event"],
        ["Icy Roads Ahead", "Win any race that includes sections of Hot Wheels Ice Track"],
        ["In The Still Of The Night", "Join the Grit Reapers Team"],
        ["It's Rally Time!", "Join the Horizon Raptors Team"],
        ["Jackpot", "Fully complete a run of Super7"],
        ["Join the Club", "Complete all chapters of the 'Drift Club' Horizon Story"],
        ["Just Reppin'", "Make your way up to the 7th Tier of Apex Predators Reputation Challenges"],
        ["Juuuuust Right", "Take a photo using any guidelines 3 times"],
        ["Keep Calm And Rally On", "Win all Horizon Rally events"],
        ["Keep That Camera Rolling", "Take a photo of 25 different cars in Free Mode"],
        ["Lay of The Land", "Complete a match in every arena in Hide and Seek"],
        ["Leaving Tracks", "Drive 50 miles (80.5km) at the Horizon Test Track"],
        ["Lessons in Hot Wheels History", "Complete the first Chapter of the Hot Wheels Horizon Story"],
        ["Life Skills", "Bank 1 Million Skill Points in Sierra Nueva"],
        ["Living Legend", "Earn 294 stars from PR Stunts in México"],
        ["Living up to the Rep", "Make your way up to the 7th Tier of Horizon Raptors Reputation Challenges"],
        ["Long Gone", "Win the Goliath Race Event"],
        ["Low Five", "Complete all chapters of the Donut Media Low Story"],
        ["Made in Mexico", "Complete all chapters of the 'Made in Mexico' Horizon Story"],
        ["Major in Hot Wheels History", "Complete all Chapters in the Hot Wheels Horizon Story"],
        ["Manufacturer Affinity ", "Earn a Manufacturer Bonus"],
        ["Master of Realms", "Complete Skill Mode in every Realm"],
        ["Maxing Out", "Maintain a speed of 200mph (321.8km/h) for 10 seconds at the Horizon Test Track"],
        ["Memory Lane", "Earn 3 stars in all chapters of the 'Horizon Origins' Story"],
        ["Mi Casa", "Unlock the first Player House"],
        ["Min, Meet Max", "Complete all Events in a Festival Playlist Series"],
        ["Missions Complete!", "Complete All Missions"],
        ["Missions!", "Complete 5 Missions"],
        ["Mogul ", "Purchase all 7 Player Houses"],
        ["More Missions!", "Complete 25 Missions"],
        ["Never Back Down", "Reach a Streak of 50 in Hide and Seek"],
        ["New Tune", "Find a place to install the Horizon Pulse Radio Beacon"],
        ["Nighthawk", "Win every Midnight Battle"],
        ["No One Expects the Hot Wheels Expedition", "Arrive at the Horizon Hot Wheels Outpost"],
        ["No Stone Unturned", "Complete your first Expedition"],
        ["On the Road Again", "Complete the first chapter of the Donut Media HiLow Story"],
        ["One for All", "Complete a Horizon Open Custom Race in the 2021 Mercedes-AMG One"],
        ["Over-Qualified", "Earn 3 Stars from each of the Hot Wheels Qualifier events"],
        ["Party Like It's 1987", "Complete Skill Mode at the Summer Party whilst driving the 1987 Pontiac Firebird"],
        ["Picking Up The Tab", "Win all three Team Champion Races"],
        ["Pink Slip", "Win your first Team Champion Race"],
        ["Points Mean Prizes", "Complete any Seasonal Activity in Hot Wheels Park"],
        ["Professor of Hot Wheels History", "Earn 3 Stars from every Chapter in the Hot Wheels Horizon Story"],
        ["Pros, No Cons", "Complete the Pro Qualifier Event"],
        ["Put it on my Smash Drive", "Smash 150 Grit Reapers Crates"],
        ["Putting on a Show", "Win every Showcase Event"],
        ["Race into Action", "Complete any Horizon Race Event"],
        ["Racing and Pacing and Plotting the Course", "Win 80 different Race Events in México"],
        ["Ride and Seek ", "Discover and drive every road in México"],
        ["Right At Home", "Complete Skill Mode at Día de Muertos whilst driving any Nissan"],
        ["Road Book", "Discover every road in Sierra Nueva"],
        ["Road Rally", "Join the Apex Predators Team"],
        ["Rouen", "Win your first Horizon Rally event"],
        ["Seasoned Veteran", "Complete a Festival Playlist activity in every season"],
        ["Shaken Not Third", "Win any race that includes sections of Hot Wheels Rumble Track"],
        ["Show Me Your Moves!", "Play any EventLab Event created by another player"],
        ["Smash Happy", "Smash all 4 Bonus Boards in the 'Horizon Origins' Story"],
        ["Smashlicious", "Smash 15 Apex Predators Boards"],
        ["Smashtastic", "Smash 150 Piñata Trucks!"],
        ["Soared and Board", "Smash all Bonus Boards in Hot Wheels Park"],
        ["Spanning Generations", "Drive a car from every decade around Free Mode"],
        ["Stunning Photography", "Take a photo during a tropical storm"],
        ["Stunt-tacular", "Complete Skill Mode in the Stunt Park whilst driving any Hoonigan"],
        ["Supersonic", "Finish a lap of the Hot Wheels Goliath event in under 6 minutes"],
        ["That Time of Year", "Complete any Seasonal Activity in Sierra Nueva"],
        ["The Big Reveal", "Win as a Seeker in Hide and Seek"],
        ["The Grand Opening", "Earn 10 Levels in Horizon Open"],
        ["The Hidden", "Complete 5 matches of Hide and Seek as a Hider"],
        ["The Rookie", "Complete the Rookie Qualifier Event"],
        ["There’s Always Money in the Baja Stand", "Build the Horizon Baja Outpost"],
        ["This Is The Way", "Start a new chapter of the Horizon Adventure"],
        ["Tidy Little Bow", "Complete Skill Mode in the Oval Track whilst driving the 2013 KTM X-Bow R"],
        ["Time-Wyrm", "Maintain a speed of 88mph or above for 1 minute at the Lunar Drift Arena in Horizon Realms"],
        ["Timeless", "Take a photo at every time setting"],
        ["Tourist Attraction", "Complete your first Horizon Tour Race Event"],
        ["Treasure Hunter", "Find all Treasure Chests in a Festival Playlist Series"],
        ["Unbeatable Triumph", "Win 6 different Race Events against Unbeatable Drivatars"],
        ["Unlimited Prowess!", "Complete Round Three in all 5 Themes of Horizon Arcade"],
        ["Unlimited Rally", "Cross your first Split-Gate in a Horizon Rally event"],
        ["V.U.H.L", "Earn 3 stars in all chapters of the 'Made in Mexico' Horizon Story"],
        ["Viva Horizon!", "Unlock your first Horizon Finale Event"],
        ["Water Performance", "Earn 3 stars at the Puerta Pétrea and La Marisma Trailblazers within 3 minutes and 30 seconds"],
        ["Welcome to México", "Arrive at Horizon Festival México"],
        ["Welcome to Mexico 2.0", "Complete the 'Welcome to Mexico' chapter of the 'Horizon Origins' Story"],
        ["Welcome to Sierra Nueva", "Arrive at the Horizon Badlands Outpost"],
        ["Winging It", "Complete Skill Mode in the Lunar Drift Arena whilst driving any Aston Martin"],
        ["WORT, WORT, WORT!", "Complete the Elite Qualifier Event"],
        ["You Could Say I'm a Fan", "Earn a Manufacturer Bonus for a collection of 25 or more cars "],
        ["You Might Need a Map", "Drive a total of 20 miles at the Stadium Maze in Horizon Realms"],
        ["You're On Thin Ice", "Complete Skill Mode in the Ice Rink whilst driving the 2015 Volvo V60 Polestar"],
        ["You're the Champion", "Win any Event in Horizon Open"],
    ];

    assert.strictEqual(officialAchievements.length, 164, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});

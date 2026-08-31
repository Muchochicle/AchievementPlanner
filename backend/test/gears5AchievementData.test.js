import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/gears-5.json - 181 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1097840 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("gears-5");

test("getPlannerData('gears-5') returns real planner data with 181 curated achievements", () => {

    assert.ok(game, "expected real planner data for gears-5");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 181);

});

test("every Gears 5 achievement has a unique id from 1 to 181 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 181 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 181);
    assert.strictEqual(new Set(apinames).size, 181);

});

test("every Gears 5 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 181 Gears 5 achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Breath of Fresh Air", "Complete Chapter 4 of the Hivebusters DLC campaign."],
        ["A Challenger Emerges", "Unlocked a reward in any Competitive playlist"],
        ["A Gear of Many Talents", "Completed a Versus match in each of Regency, River, Nexus, Clocktower, and Gridlock"],
        ["A Good Plan, Violently Executed", "Execute 100 Rejects (any mode)"],
        ["A Mouthful of Boom", "Headshot the Swarmak at the theatre"],
        ["A Nice Present For You", "Killed an enemy using a planted Grenade in Gridiron mode"],
        ["A Real Gear", "Reached Re-Up 50"],
        ["A Very Particular Set of Skills", "Acquire 30 Skill Cards of Level 3 or above"],
        ["A War That Will Be Won", "Re-upped 40 Times"],
        ["Absolute Carnage", "Dealt Dealt 100,000,000 damage in Versus damage in Versus"],
        ["All Aboard the Crazy Train!", "Complete all Acts of the Campaign on Insane"],
        ["All of Allfathers", "Win a Versus round on every customized map piece in Allfathers Arena (9)"],
        ["An Enemy Among Us", "Get a kill with a Hijacked Pouncer, Warden, Stump and Elite Hunter in Campaign"],
        ["And I'll Form the Head!", "Kill a Boss in Horde while all 5 players have active Ultimate Abilities"],
        ["And Stay Down!", "Eliminated 25,000 enemies in Horde or Escape "],
        ["And… He's All Yours", "Upgrade Del's New Best Friend"],
        ["Back Atcha", "Get a kill with ricochet bullets using Jack's Barrier Ability "],
        ["Back In Style", "Won 10 matches of Execution"],
        ["Back on Your Feet, Soldier!", "Use Jack's Stim upgraded ability to revive a DBNO friendly in Campaign"],
        ["Bah! Child's Play", "Escaped a Hive with Paduk"],
        ["Batista Bomb", "Completed all chapters in one Act while Batista as Marcus is enabled"],
        ["Be Aggressive, Devious", "Re-up 30 Times"],
        ["Beginning of a Beautiful Friendship", "Play a match of Arcade"],
        ["Ben Would Have Loved This Thing", "Got an elimination with the Scorcher"],
        ["Bernie is Back", "Won 5 matches with Bernie COG character"],
        ["BFFs", "Complete a Versus match with a team of four Level 5 Gears Allies"],
        ["Break Them. Brutalize Them.", "Got 1000 points in a Competitive match from ring breaks"],
        ["Breezing Through", "Completed a match of Horde Frenzy on Turbine"],
        ["Brothers in Arms", "Completed 12 consecutive waves of Horde Frenzy with Baird & Paduk in your Squad"],
        ["Brought a Knife to a Gun Fight", "Complete an Escape Hive without firing a shot on Master Difficulty"],
        ["Buying Time", "Use the Scrubber Room to slow down the Venom in Escape"],
        ["Can't Stop, Won't Stop", "Beat 50 Consecutive Waves of Horde (any difficulty)"],
        ["Chamber of Horrors", "Completed a match of Horde Frenzy on Atrium"],
        ["Class Act", "Reached level five on any one Assault, one Tank and one Support "],
        ["Close Call", "Win a Match of Arcade Blitz where the opposition team is within 25 points of winning"],
        ["Come From Behind", "Be 10 kills behind the leader of a Free For All round, then come back to win"],
        ["Compulsive Horder", "Reach Character Level 15 with Infiltrator, Demolitions, Mechanic, Veteran, Marksman and Jack"],
        ["Controlled Bursts", "Won a Match of Horde Frenzy (any difficulty)"],
        ["Cool Off, Baby!", "Killed 100 enemies using Brawler Class Flame Ability & Flame Skill Cards in Horde or Escape"],
        ["Corporal Punishment", "Reach the rank of Corporal in a Tour of Duty "],
        ["Covering Fire", "Got 50,000 assists in Versus"],
        ["Cutting it Close", "Secure the UIR rocket"],
        ["Decorated Soldier", "Won a match of Gridiron with an Operation 4 Hero or Villain"],
        ["Designation: Scorpio", "Complete Chapter 1 of the Hivebusters DLC campaign."],
        ["Destroy From Within", "Escape all Operation 2 Hives on Experienced Difficulty or Higher"],
        ["Destroy Them, My Children", "Re-up 20 Times"],
        ["Destroyed Beauty", "Won a Versus match on Ephyra"],
        ["Destruction ", "Dealt 60,000,000 damage in Horde or Escape"],
        ["Did We Just Become Best Friends?", "Reach Level 5 with an ally in Gears Allies"],
        ["Didn't Want to Look Too Civilized", "Collect 20 Epic character skins"],
        ["Discovered the True Threat to Sera", "Complete all Acts of the Campaign (Any difficulty)"],
        ["Dynamic Duo", "Won 10 Competitive Matches of 2vs2 Gnashers"],
        ["Efficient Excellence", "Won a Match of Horde Frenzy on Master Difficulty"],
        ["Electroblade", "Killed 50 enemies using Lahni's Electroblade Ability in the Hivebuster Campaign Expansion as Lahni"],
        ["Enter Hivebusters", "Completed all Chapters of the Hivebusters DLC (any difficulty)"],
        ["Event Planner", "Won 10 matches in Versus Events"],
        ["Expanded Expertise", "Reach Character Level 15 with Combat Medic, Pilot, Gunner, Robotics Expert or Brawler"],
        ["Exterminating the Hollow", "Got 100 eliminations in Nexus"],
        ["Eyes on Target", "Got 12,500 assists in Versus"],
        ["Face the Creature", "Complete Chapter 6 (the final chapter) of the Hivebusters DLC campaign."],
        ["Fresh Grubs", "Completed a Featured Horde Map from Operation 4"],
        ["Fresh Lineup", "Escape a Hive with a team of COG Soldier, Lizzie Carmine, Clayton Carmine, Baird or Cole"],
        ["Generally Awesome", "Reach the rank of General in Tour of Duty "],
        ["Gimme, Gimme, Gimme", "Use Jack's Fetch ability to acquire each Heavy Weapon in Campaign "],
        ["Go, Hunt In Packs", "Re-up 10 Times"],
        ["Grave Consequences", "Won a Versus match on Tomb"],
        ["Grind Season", "Won 25 Ranked matches in one Competitive Season"],
        ["Gun Collector", "Own 360 weapon skins"],
        ["Hi-Ho, Silverback", "Kill 200 enemies using the Silverback in Horde"],
        ["Highly Capable", "Master an Operation 3 Escape Hive and Horde Map"],
        ["Hives: Busted", "Escape all Operation 3 Hives on Experienced Difficulty or Higher"],
        ["Homegrown Hive", "Complete a Featured community built Escape Hive"],
        ["HordeBusters", "Complete 50 Waves of Horde with Mac, Keegan and Lahni in your squad"],
        ["I Made It All By Myself", "Create and publish an Escape Hive"],
        ["I Was Born in a Crossfire Hurricane", "Use Jack's Flash ability to stun 3 enemies at once in Campaign"],
        ["I'm Rubber, You're Glue!", "Killed 100 enemies using Gunner Class Reflect ability in Horde or Escape"],
        ["I'm The Captain Now", "Reach the rank of Captain in Tour of Duty "],
        ["Illustrious", "Reached Character Level 15 with 10 Characters"],
        ["In the Name of..", "Acquire Character Skins for 3 different post launch Characters"],
        ["In Total Control", "Won a Control and/or KOTH match on 10 different maps"],
        ["Ironed Out", "Completed all chapters in Ironman Mode on Experienced difficulty or above"],
        ["It Takes Three to Make a Thing Go Right", "Complete an Act of Campaign in 3-player co-op"],
        ["It’s Not Hoarding if Your Stuff is Cool", "Collect all Campaign Collectibles"],
        ["It's Time We Fight Them Together", "Save the Riftworm village"],
        ["Jack of All Trades", "Acquire all of Jack's Ultimate upgrades in Campaign"],
        ["Jack of One Trade", "Complete an Act of the Campaign as playable Jack (any difficulty)"],
        ["JACKed Up!", "Fully upgrade Jack's Abilities and Passives in Campaign"],
        ["Jameson Shipping Depot", "Find a way into New Hope"],
        ["Just Showing it Off", "Killed 10 enemies using a weapon with a Custom Skin"],
        ["Last Rites", "Won a Versus match on Ritual"],
        ["Lay of the Land", "Complete a Versus Match on Allfathers Arena,  Lift, Mid, Boxes, Nethercutt, Pit & Core"],
        ["Legendary Operator", "Reached Legend 25 in an Operation"],
        ["Let's Get You Some Answers", "Use the Comm Towers to locate the hidden facility"],
        ["Let's Keep Pissin it Off!", "Survive the Kraken fight"],
        ["Let's Try That One Again, Shall We?", "Woke-up in the Med bay while escaping a Hive in Escape"],
        ["Line Them Up", "Defeat 10 different opponents in a Free For All Match"],
        ["LOOTenant", "Reach the rank of Lieutenant in Tour of Duty "],
        ["Make 'em Bleed", "Dealt 30,000,000 damage in Versus "],
        ["Master Escape Artist", "Reach Character Level 15 with Tactician, Anchor and Blademaster Class "],
        ["Master of My Domain", "Complete a Launch Hive on each difficulty (The Hive, The Descent, The Gauntlet or The Mines)"],
        ["My Body is Ready", "Complete Boot Camp"],
        ["My Place in the Machine", "Completed 5 Matches in a Competitive playlist"],
        ["New Hivebusters", "Escape a Hive with Lizzie Carmine, Clayton Carmine, Baird or Cole"],
        ["New Island, New Mission", "Complete Chapter 3 of the Hivebusters DLC campaign."],
        ["Not There to Buy a Timeshare", "Launch the Rocket"],
        ["Nothin' But Bits!", "Killed 100,000 enemies in Versus"],
        ["Now I Gotta Get Up Again", "Reinforce Carmine at the Plaza"],
        ["Now We Understand Each Other", "Master All Featured Horde Maps from Operation 4 "],
        ["On the Razor's Edge", "Got 5 kills while inside Hivebuster Venom"],
        ["Once More From the Top", "Re-up!"],
        ["One Sec, I'll Be Right Back", "Switch characters in an Arcade match and kill an opponent who previously killed you"],
        ["One, Two, Three Sorties", "Completed 3 Objectives for Tour of Duty in a day"],
        ["Operation: Ride the Snatcher", "Completed the Hivebusters DLC in 3-Player Co-Op (Scorpio squad, dupes not allowed)"],
        ["Optimal Armaments", "Complete a Match of Arcade Blitz as a Hero or Villain from Operation 2 or Operation 3"],
        ["Out of the Frying Pan", "Complete Chapter 2 of the Hivebusters DLC campaign."],
        ["Pass the Soap", "Pass through a refuge shower with 3 Hivebusters in the same shower cubicle"],
        ["Paydirt", "Score a Touchdown with the Flag in GridIron"],
        ["Payload Delivered", "Escaped all Operation 4 Hives on Experienced Difficulty or Higher"],
        ["Pennies from Heaven", "Scavenge supplies from all fallen Condors in Act 2 and Act 3"],
        ["Perky's Revenge!", "Get a kill with 3 Perks active in Horde"],
        ["Places to Go, Monsters to Kill", "Won a Ranked match in each of Regency, River, Nexus, Clocktower, and Gridlock"],
        ["Planned and Executed", "Execute both members of the enemy team within a round of 2vs2 Gnashers"],
        ["Proficiency", "Master an Operation 2 Escape Hive and Horde Map"],
        ["Protect This House", "Got a Denial on an Enemy while they were inside your Endzone with the flag in Gridiron Mode"],
        ["Re-Up Mastery", "Reached Re-Up 60 "],
        ["Ready to Frontline", "Killed 50 enemies through your Barrier Ability in the Hivebuster Campaign Expansion as Mac"],
        ["Reduce, Reuse, Recycle", "As Jack, convert one of each weapon to Power using the Forge in Horde"],
        ["Relic Hunter", "Equip 3 Relic Weapons at one time in Campaign"],
        ["Relics of the Past", "Kill an enemy with every Relic Weapon in Campaign"],
        ["Renewed, Not Consumed", "Found all Character Ability upgrades in the Hivebusters DLC"],
        ["Resourceful", "Defeat an opponent with every Pickup Weapon in a single Free For All Match"],
        ["Rest in Pieces", "Eliminated 100,000 enemies in Horde or Escape "],
        ["Ring Leader", "Win a Match of Arcade Blitz with the most Points earned in a Ring"],
        ["Rite of Passage", "Completed all Chapters of the Hivebusters DLC on Insane"],
        ["Safe and Sound", "Secure the UIR satellites"],
        ["Sampler", "Complete a Match of Free For All, Arcade Blitz and Gridiron"],
        ["Searching for Answers", "Collect all Campaign Collectibles in the Hivebusters DLC"],
        ["Seraninja", "Use Jack's Cloak ability to cloak and execute 3 enemies before de-cloaking in Campaign"],
        ["Sergeant at Arms", "Reach the rank of Sergeant in Tour of Duty"],
        ["Seriously 5.0 - Chapter 1", "Insane Campaign, Master Horde & Escape Launch Maps & Characters, 20 Re-ups, General in Tour"],
        ["Seriously 5.0 - Chapter 2", "50 Re-Ups, Inconceivable Campaign, Mastered All hives & Horde Maps , All Classes at Level 20 "],
        ["Shock and Awe", "Use Jack's Shock Trap ability to shock 6 enemies at once in Campaign"],
        ["Showin’ a Little Skin", "Completed a chapter of Campaign while using a Custom Skin"],
        ["Shutout", "Win a match of Gridiron and keep your opponents scoreless"],
        ["Sire, Interrupted", "Kill a Sire while it's kidnapping a teammate (any mode)"],
        ["So There's the Hero", "Collected first Heroic skin"],
        ["Solid Gold", "Beat the Gold Time in a Featured Escape"],
        ["Stop 'Em Cold", "Defeat the Matriarch in Escape using the Relic Dropshot"],
        ["Such Carnage", "Got 2000 points in a Competitive match from eliminations"],
        ["Supplies for the Effort", "Activated Resupply ability 25 times in the Hivebuster Campaign Expansion as Keegan"],
        ["Swift and Grimy", "Completed 60 Waves of Horde Frenzy on Insane or Higher"],
        ["Take a Look Around", "Completed a Versus match on Reactor, Blood Drive & Checkout"],
        ["Take Command", "Completed a match of Horde Frenzy on Command"],
        ["Teamwork Makes the Dream Work", "Mastered an Escape Hive and Horde Map from Operation 4"],
        ["That Old COG Technology", "Open the old COG gate in Kadar Valley"],
        ["That’s Inconceivable!", "Completed all chapters on Inconceivable difficulty"],
        ["The Awakening", "Activated Keegan, Lahni and Mac's Abilities in the Hivebuster Campaign Expansion"],
        ["The Centaur Set", "Maxed out each of the Anchor, Gunner, Pilot, Veteran, Brawler classes"],
        ["The Path To Victory", "Re-up 5 Times"],
        ["The Spirit Walk", "Complete Chapter 5 of the Hivebusters DLC campaign."],
        ["The Three Musketeers", "Inflict 9000 damage in Escape while 3 Ultimate Abilities are active"],
        ["Then We Watch Each Other's Back", "Plant the last beacon in the Old Ephyra ruins"],
        ["These New Recruits Got Grit", "Complete 50 Consecutive Waves of Horde with Lizzie Carmine, Clayton Carmine, Baird or Cole"],
        ["Throw a Switch, See What Happens", "Assemble the UIR Hammer of Dawn rocket"],
        ["Total Annihilation", "Do 400,000,000 damage in Horde or Escape"],
        ["Total Devastation", "Dealt 200,000,000 damage in Horde or Escape"],
        ["Trusted Advisor", "Won 5 matches with the Vrol character"],
        ["Victory Seized", "Place first in a Match of Free For All"],
        ["We Need the Old Plan", "Kill the Matriarch"],
        ["What's This Thing Doing Here?", "Acquired any Weapon from the Fabricator in Escape"],
        ["Where's My Product Endorsement Deal?", "Win 5 matches of Arcade"],
        ["Who You Gonna Call? Hivebusters!", "Complete 5 Escape Hives as each one of Mac, Lahni and Keegan"],
        ["Who's Your Escape Main?", "Reach Character Level 15 with either Tactician, Anchor or Blademaster Class "],
        ["Who's Your Horde Main?", "Reach Character Level 15 with Infiltrator, Demolitions, Mechanic, Veteran, Marksman OR Jack"],
        ["Withdrawal Symptoms", "As a team, collect Power from all 4 Power Taps within one wave of Horde "],
        ["Year of the Scorpion", "Completed all Year One Escape Hives"],
        ["Yep, I'd say they're dead", "Killed 25,000 enemies in Versus "],
        ["You Better Run!", "Killed 100 enemies under the effect of Nomad's Fear ability, as Nomad Class, in Horde or Escape"],
        ["You Know I Ain't Going Out Like That", "Get back to the New Ephyra wall"],
        ["You've Got a Friend in Me", "Make a new Ally in Gears Allies "],
        ["You've Got Character, Kid", "Own 50 character skins"],
    ];

    assert.strictEqual(officialAchievements.length, 181, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});

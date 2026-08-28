import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/company-of-heroes-2.js";

test("the Company of Heroes 2 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "company-of-heroes-2-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "company-of-heroes-2");

});

test("the Company of Heroes 2 guide has all 8 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Progression & Play Counts",
            "Campaign",
            "Theatre of War",
            "In-Battle Combat Feats",
            "Multiplayer",
            "Event Achievements",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 452-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /452 Steam achievements/);

});

test("every one of the 452 official Company of Heroes 2 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Attrition over Annihilation", "Soviet Vehicle Specialist", "Panzer Krieg", "Annihilator", "Annihilation over Attrition",
        "Blood Toll", "Attrition", "War Games IV", "War Games III", "War Games II",
        "War Games I", "Total Victory", "Overwhelming Might", "Heartbreaking Loss", "Attrition Expert",
        "Challenging Victory", "Soviet Team Weapon Specialist", "German Team Weapon Specialist", "To the Last Bullet", "War Footing Munitions III",
        "War Footing Munitions II", "War Footing Munitions I", "War Footing Fuel III", "War Footing Fuel II", "War Footing Fuel I",
        "Command Economy", "Soviet Battle Medallion", "German Battle Medallion", "Delaying the Inevitable", "Human Wave",
        "Fusilier", "Soviet Infantry Specialist", "War Material", "Staunch Defense", "IS-2 Specialist",
        "One Tank Army", "Sibling Rivalry (Soviet)", "Sibling Rivalry (German)", "Top of the Food Chain", "King Tiger",
        "KV-8 Specialist", "Even Heavy Armor Cannot Withstand Fire of this Magnitude", "Death from Afar", "Elefant Frenzy", "Tank Hunter",
        "Deadly Purpose", "Ramming Speed!", "Multi-talented", "Light Snack", "Evenly Matched",
        "Panzer IV Specialist", "Massacre", "Not Simply Anti-Air", "Outrun and Outgun", "Up Close and Personal",
        "It's Super Effective!", "Sniper Hunter", "Flame On!", "More Than Just a Personnel Carrier", "No-Fly Zone",
        "Now That's What I Call Recon", "M3A1 Specialist", "Penetrating Performance", "Explosivist", "Knife through Butter",
        "'Pak's Quite a Punch", "Pak43 Specialist", "Unstoppable Force", "Long Distance Combat", "Never Know What Hit 'Em",
        "Outranged", "Wrong Place, Wrong Time", "Sitting Ducks", "Blow It All Up!", "Missiles Everywhere!",
        "Death from Above", "Rocket Siege", "A Tool for Every Occasion", "With Extreme Difficulty", "Oorah!",
        "Burn Baby Burn", "Panzer Grenadier Specialist", "Commando Style", "Heavy Weapons", "Stealing the Spotlight",
        "To the Frontlines!", "Flanking Maneuvers", "Satchel of Trouble", "Torched", "Infantry Annihilator",
        "Sturmpanzer IV Specialist", "Destined for Destruction", "StuG Lover", "Nothing Left Standing", "Beast Killer",
        "Tank Destroyer", "SU-76 Specialist", "Indirect but Deadly", "Special Ingredients", "Brotherly Love (German)",
        "MG42 Specialist", "Shooting Gallery", "Brotherly Love (Soviet)", "HMG Hero", "Hit the Deck!",
        "Tougher Meat", "Direct Indirect Fire", "Lucky Shot", "PM-41 82mm Mortar Specialist", "Kinslayer",
        "Target Practice", "Mortar Hero", "Bigger is Better", "HM-38 120mm Mortar Specialist", "Heavy Tank Production I",
        "Medium Tank Production I", "Medium Tank Production II", "Light Vehicle Production I", "Assault Gun Production I", "Assault Gun Production II",
        "Artillery Production I", "Artillery Production II", "Anti-tank Gun Production I", "HMG Production I", "Mortar Production I",
        "Infantry Production I", "Infantry Production II", "Light Vehicle Production II", "Artillery Specialist", "Assault Gun Specialist",
        "Anti-Tank Gun Specialist", "Heavy Tank Specialist", "Heavy Machine Gun Specialist", "Light Vehicles Specialist", "Medium Tank Specialist",
        "Mortar Specialist", "Infantry Specialist", "Armored Assassin", "Invulnerable", "Mobile Bombardment",
        "Master Flanker", "Sniper Hero", "Never Make an Engineer Mad", "Battlefield Menace", "Hold the Line",
        "Don't Step on the Grass", "Senior Private", "Corporal", "Senior Corporal", "Junior Sergeant",
        "Sergeant", "Senior Sergeant", "Master Sergeant", "Sergeant Major", "Warrant Officer",
        "Senior Warrant Officer", "Junior Lieutenant", "Lieutenant", "Senior Lieutenant", "Captain",
        "Senior Captain", "Major", "Lieutenant Colonel", "Colonel", "Brigadier General",
        "Major General", "Campaign Conscript", "Campaign Officer", "Campaign Lieutenant", "Campaign Commander",
        "Campaign General", "Theater of War Challenge Conscript", "Theater of War Challenge Officer", "Theater of War Challenge Lieutenant", "Theater of War Challenge Commander",
        "Theater of War Challenge General", "Theater of War Scenario Conscript", "Theater of War Scenario Officer", "Theater of War Scenario Lieutenant", "Theater of War Scenario Commander",
        "Theater of War Scenario General", "Theater of War Battle Conscript", "Theater of War Battle Officer", "Theater of War Battle Lieutenant", "Theater of War Battle Commander",
        "Theater of War Battle General", "Comp-Stomp Conscript", "Comp-Stomp Officer", "Comp-Stomp Lieutenant", "Comp-Stomp Commander",
        "Comp-Stomp General", "Automatch Conscript", "Automatch Officer", "Automatch Lieutenant", "Automatch Commander",
        "Automatch General", "Stalingrad Rail Station - Conscript", "Scorched Earth - Conscript", "Support is on the Way - Conscript", "The Miraculous Winter - Conscript",
        "Stalingrad - Conscript", "Stalingrad Aftermath - Conscript", "Land Bridge to Leningrad - Conscript", "Tiger Hunting - Conscript", "Radio Silence - Conscript",
        "Lublin - Conscript", "Behind Enemy Lines - Conscript", "Poznan Citadel - Conscript", "Halbe - Conscript", "The Reichstag - Conscript",
        "Stalingrad Rail Station - Captain", "Scorched Earth - Captain", "Support is on the Way - Captain", "The Miraculous Winter - Captain", "Stalingrad - Captain",
        "Stalingrad Aftermath - Captain", "Land Bridge to Leningrad - Captain", "Tiger Hunting - Captain", "Radio Silence - Captain", "Lublin - Captain",
        "Behind Enemy Lines - Captain", "Poznan Citadel - Captain", "Halbe - Captain", "The Reichstag - Captain", "Stalingrad Rail Station - General",
        "Scorched Earth - General", "Support is on the Way - General", "The Miraculous Winter - General", "Stalingrad - General", "Stalingrad Aftermath - General",
        "Land Bridge to Leningrad - General", "Tiger Hunting - General", "Radio Silence - General", "Lublin - General", "Behind Enemy Lines - General",
        "Poznan Citadel - General", "Halbe - General", "The Reichstag - General", "Campaign - Conscript", "Campaign - Captain",
        "Campaign - General", "Blitzkrieg - Conscript", "Officer Assassination - Conscript", "Defense of Schildkröteberg - Conscript", "Cold Weather - Conscript",
        "Indirect Fire - Conscript", "Winter Defense - Conscript", "Blitzkrieg - Captain", "Officer Assassination - Captain", "Defense of Schildkröteberg - Captain",
        "Cold Weather - Captain", "Indirect Fire - Captain", "Winter Defense - Captain", "Blitzkrieg - General", "Officer Assassination - General",
        "Defense of Schildkröteberg - General", "Cold Weather - General", "Indirect Fire - General", "Winter Defense - General", "Encirclement at Smolensk - Conscript",
        "Faceoff at Rostov - Conscript", "Brody Tank War - Conscript", "General Winter - Conscript", "Encirclement at Smolensk - Captain", "Faceoff at Rostov - Captain",
        "Brody Tank War - Captain", "General Winter - Captain", "Encirclement at Smolensk - General", "Faceoff at Rostov - General", "Brody Tank War - General",
        "General Winter - General", "Leningrad Approach - Conscript", "Battle of the Crimea - Conscript", "Battle of Oka River - Conscript", "First Battle of Kharkov - Conscript",
        "Moscow Lines - Conscript", "Battle of Minsk - Conscript", "Moscow Approach - Conscript", "Battle of Pripyat River - Conscript", "Leningrad Approach - Captain",
        "Battle of the Crimea - Captain", "Battle of Oka River - Captain", "First Battle of Kharkov - Captain", "Moscow Lines - Captain", "Battle of Minsk - Captain",
        "Moscow Approach - Captain", "Battle of Pripyat River - Captain", "Leningrad Approach - General", "Battle of the Crimea - General", "Battle of Oka River - General",
        "First Battle of Kharkov - General", "Moscow Lines - General", "Battle of Minsk - General", "Moscow Approach - General", "Battle of Pripyat River - General",
        "Theater of War - 1941 - Scenarios", "Theater of War - 1941 - Battles", "Theater of War - 1941 - Challenges", "Theater of War - 1941 - Conscript", "Theater of War - 1941 - Captain",
        "Theater of War - 1941 - General", "M.01 - German Engineering", "M.01 - Compassion in War", "M.01 - Soviet Zeal", "M.02 - What's Mine is Mine",
        "M.02 - Invaluable Resources", "M.03 - Something Borrowed", "M.03 - Mtsensk Mine Field", "M.03 - Hardened Armor", "M.04 - Revenge",
        "M.04 - Cool Efficiency", "M.05 - Some Room to Breathe", "M.05 - Help from the North", "M.05 - The Silent Organs", "M.06 - Scout vs. Sniper",
        "M.06 - Get Out of the Truck!", "M.06 - Repel and Repair", "M.07 - Direct Fire", "M.07 - Suchka Specialist", "M.07 - Point Blank Demolition",
        "M.08 - No Help Needed", "M.09 - All on Your Own", "M.09 - The Spice of Life", "M.10 - Glass Cannons", "M.10 - Gate Crusher",
        "M.11 - Armia Krajowa", "M.11 - Snipe the driver", "M.12 - Howitzer Hunter", "M.12 - Solo Commander", "M.12 - To the Rescue",
        "M.13 - Halbe Massacre", "M.13 - The Might of the Red Army", "M.14 - Claimed for the Motherland", "M.14 - Before the Winter", "M.14 - Boots in the Streets",
        "Help Indeed", "Winter Driver", "Gold Weather", "Massive Destruction", "Rocket Recovery",
        "Indirect Gold", "Panzer Theft", "To the Front", "Gold Defense", "Clean Sweep",
        "Armored and Dangerous", "Goldkrieg", "Sharpshooter", "Scrounger", "Gold Assassin",
        "Hard Shell", "Triple Triple", "Turtle Gold", "I Need No Help", "Panzer Graveyard",
        "Cookout", "Halftracked", "In the Noose", "Uncompromising", "Red Dead",
        "Silence the Guns", "M.10 - Zero-Risk Market", "Retreat at the Don - Captain", "Retreat at the Don - General", "Kharkov Pursuit - Conscript",
        "Kharkov - Pursuit - Captain", "Kharkov Pursuit - General", "Convoy - Conscript", "Convoy - Captain", "Convoy - General",
        "Tiger Ace - Conscript", "Tiger Ace - Captain", "Tiger Ace - General", "Assault on Voronezh - Conscript", "Assault on Voronezh - Captain",
        "Assault on Voronezh - General", "Theater of War - Case Blue - Conscript", "Theater of War - Case Blue - Captain", "Theater of War - Case Blue - General", "Retreat at the Don - Conscript",
        "Stalingrad Resistance - Conscript", "Stalingrad Resistance - Captain", "Stalingrad Resistance - General", "Winter Storm - Conscript", "Winter Storm - Captain",
        "Winter Storm - General", "Stalingrad Encirclement - Conscript", "Stalingrad Encirclement - Captain", "Stalingrad Encirclement - General", "Tatsinskaya Raid - Conscript",
        "Tatsinskaya Raid - Captain", "Tatsinskaya Raid - General", "Bridge Defense - Conscript", "Bridge Defense - Captain", "Bridge Defense - General",
        "Kalach - Conscript", "Kalach - Captain", "Kalach - General", "Theater of War - Victory at Stalingrad - Conscript", "Theater of War - Victory at Stalingrad - Captain",
        "Theater of War - Victory at Stalingrad - General", "Assault Grenadiers", "BLITZKRIEG", "Makeshift Artillery", "Someone Needs to Man those Guns!",
        "Just a Scratch!", "BOOM!", "Size Doesn't Matter", "We're Going to Need a Bigger Gun", "They're Coming Out of the Woodwork!",
        "SURPRISE!", "Rapid Fire Anti-Tank", "Defending the Motherland", "They don't Call Him Ace for Nothing!", "Breaking Lines - Conscript",
        "Breaking Lines - Captain", "Breaking Lines - General", "General Mud - Conscript", "General Mud - Captain", "General Mud - General",
        "Kharkov Divide - Conscript", "Kharkov Divide - Captain", "Kharkov Divide - General", "No Retreat No Surrender - Conscript", "No Retreat No Surrender - Captain",
        "No Retreat No Surrender - General", "Panzer Crossing - Conscript", "Panzer Crossing - Captain", "Panzer Crossing - General", "Retreat to the Donets - Conscript",
        "Retreat to the Donets - Captain", "Retreat to the Donets - General", "Storming the Donets - Conscript", "Storming the Donets - Captain", "Storming the Donets - General",
        "Heavy Rain - Conscript", "Heavy Rain - Captain", "Heavy Rain - General", "Occupation - Conscript", "Occupation - Captain",
        "Occupation - General", "Occupation - Blood in the Snow", "Spring Rasputitsa - Conscript", "Spring Rasputitsa - Captain", "Spring Rasputitsa - General",
        "Spring Rasputitsa - Bombers on Approach", "Theater of War - Southern Fronts - Conscript", "Theater of War - Southern Fronts - Captain", "Theater of War - Southern Fronts - General", "Snore, Snore, Total Bore!",
        "Romeo is Dead!", "Romani Ite Domum"
    ];

    assert.strictEqual(officialAchievementNames.length, 452, "sanity check on this test's own reference list");

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

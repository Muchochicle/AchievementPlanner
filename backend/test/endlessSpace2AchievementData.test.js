import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/endless-space-2.json - 115 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 392110 (fetched through this app's own services/steamApi.js).
// This game has no hidden achievements: all 115 ship a real, official
// Steam description, quoted verbatim below.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("endless-space-2");

test("getPlannerData('endless-space-2') returns real planner data with 115 curated achievements", () => {

    assert.ok(game, "expected real planner data for endless-space-2");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 115);

});

test("every Endless Space 2 achievement has a unique id from 1 to 115 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 115 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 115);
    assert.strictEqual(new Set(apinames).size, 115);

});

test("every Endless Space 2 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 115 Endless Space 2 achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const officialAchievements = [
        [" Lost and Found", "Complete the Vaulters faction lore quest"],
        ["88 MPH!!!", "As the Riftborn, use a Fold Singularity to keep a fleet moving after warping through a Wormhole"],
        ["A Small Loan of a Million Dust", "Gain 1  000 000  Dust, across any number of playthroughs"],
        ["Absolute Power", "Complete the United Empire faction lore quest"],
        ["Acade-me", "Roles collector - Became all 4 Roles of the Academy in a single match"],
        ["Academic Pursuits", "Take control of the Academy's Home System by force"],
        ["Ad Astra!", "Play for 300 turns, across any number of playthroughs"],
        ["All for One…", "As Horatio, splice the genes of at least 6 populations in a single game"],
        ["Am I My Brother's Keeper?", "Complete the Vodyani faction lore quest"],
        ["Are You Entertained?", "As a Hissho, destroy at least 20 CP in less than one phase of space battle"],
        ["Aurigan Trail", "Control a trade route leading from your starting star system to the system containing the legendary planet Auriga - by Ishmishmish"],
        ["Baby Steps", "Win a game in Sandbox or higher difficulty against AI"],
        ["Back to School", "Discover the Academy with a Hero-led fleet"],
        ["Barely Broke a Sweat", "Win a game in Serious or higher difficulty against AI"],
        ["Bow Before Me!", "Win a Supremacy Victory"],
        ["Brains Over Brawn", "Unlock the whole Science and Exploration technology quadrant in a single game"],
        ["Branching Out", "Complete the Unfallen faction lore quest"],
        ["Buying Elections", "As the Lumeris, use Dust to help the Pacifist party three times during elections in a single game"],
        ["By Our Grace You Were Elevated", "As the Vodyani, leech at least 500 Essence in one turn"],
        ["By Your Command", "As the United Empire use your influence to research Liquid Composites and buy a Carrier ship in the same turn"],
        ["Cash Cow", "Have 1 system which produces more than 1 000 Dust"],
        ["Cogito Argosy", "As the Vaulters, colonize Auriga and assign OPBOT as its System Governor"],
        ["Cornering the Market", "Unlock the whole Economy and Trade technology quadrant in a single game"],
        ["Corridors of Power", "Have one system which produces more than 500 Influence"],
        ["Ctrl + Alt + Delete", "Win the Academy Quest on the Rejuvenator side"],
        ["Dice with the Universe", "Win a Science Victory"],
        ["Don’t Ever Take Sides Against the Family Again", "Complete the Lumeris faction lore quest"],
        ["Dust. Powerful Stuff.", "As the Lumeris, sell 3 of your outposts in a single game"],
        ["Endless Day", "You have unlocked the Endless archivist; the being that watches the watchers…"],
        ["Endless Gamer", "Play for 10,000 turns, across any number of playthroughs"],
        ["Endleus Vult!", "As the Vodyani, destroy another Vodyani's Ark and recover the wreck for yourself"],
        ["Et Tu, Brute?", "Use Privateers to secretly attack a fleet or a system belonging to a member of your Alliance"],
        ["Eternal Glory", "Win with the Hissho without having ever been under 50% Keii"],
        ["Feel the Glory", "Win a Wonder Victory"],
        ["For Honor", "Win as the Hisshos"],
        ["Friends With Benefits", "Have three mutually beneficial agreements active at the same time between you and another empire"],
        ["Galaxy2Gether", "As the Unfallen, assimilate the Eyder minor civilization into your empire"],
        ["Getting Schooled", "Level up a Hero to level 10"],
        ["Graduation Day", "Level up a Hero to level 20"],
        ["Harvester", "Have 1 system which produces more than 1 000 Food"],
        ["Heroic Patience", "Play for 1,000 turns, across any number of playthroughs"],
        ["Home Is Where the Heart Is", "Colonize one of each type of planet in one game - by C0ldSn4p"],
        ["I Am the Eternal End", "Win by eliminating all the other empires"],
        ["I Did It My Way!", "Win with a Custom Faction"],
        ["I Know the Families", "Win with the Lumeris"],
        ["I need to mine", "Reach 100 Bandwidth"],
        ["I Smell Burning Redsang", "Win a game without ever capturing a system after a successful ground battle"],
        ["I'll Bite Your Legs Off!", "Win a game never winning a battle - by Kweel_Nakashyn"],
        ["I'm the Captain Now", "Use Boarding Pods to hijack a Pirate Ship"],
        ["I've Got a Jar of Dust", "Buy 5 Pirate Marks in a single game"],
        ["Is It Overheating Yet?", "Fire one single Obliterator twice in the same turn"],
        ["It Will Not End with Fire", "Win with the Unfallen"],
        ["It's treason, then", "Have one of your planets be empty after using the \"Raid\" action"],
        ["Just Warming Up", "Win a game in Normal or higher difficulty against AI"],
        ["King Midust", "Gain 4  000 000  Dust, across any number of playthroughs"],
        ["Labs and Fabs", "Have 1 system which produces more than 1 000 Science"],
        ["Laying Down the Law", "Spear of Isyander - Destroy an enemy Fleet of at least 20 CP with the Academy attack Master Fleet"],
        ["Loremeister", "Complete all the base game faction lore quests (Sophon, Cravers, Vodyani, Lumeris, United Empire, Horatio, Riftborn and Unfallen)"],
        ["Making Amends", "Lots of reparation - Accumulate 20000 amount of reparations to the Academy, and then get a clean slate"],
        ["Massively Massive Mass Production", "Have 1 system which produces more than 1 000 Industry"],
        ["Maybe It Does Buy Happiness", "Win an Economic Victory"],
        ["My People, the Vaulters", "Win with the Vaulters"],
        ["No Mercy", "Assimilate the Sisters of Mercy minor faction by invading their system"],
        ["Not a Scratch", "Use a Behemoth to reassemble all the planets in a system destroyed by an Obliterator or Core cracker"],
        ["Not For Profit", "As Master of Dust, gift 15000 amount of Dust in a single match"],
        ["Numbers. They Don't Lie.", "Win a Score Victory"],
        ["Order and Balance", "Win with the Riftborn"],
        ["Perfect Warriors", "Have the 4 honorable actions active at once"],
        ["Piece of (True) Cake", "Win a game in Impossible or higher difficulty against AI"],
        ["Predator", "Destroy 3 enemy fleets of at least 4 CP with the same invisible fleet"],
        ["Prophetic Perfection", "Complete the Nakalim faction quest"],
        ["Rapture", "Abduct the entire population of an enemy star system"],
        ["Righteous Reliquary", "As a Nakalim gather 50 Relics through a match"],
        ["Roach Control", "As the Vaulters, teleport a Fleet of 7 CP (or more) to a Pirate Lair"],
        ["Rule from the Shadows", "Win as the Umbral choir"],
        ["Scrooge McDust", "Gain 2  000 000  Dust, across any number of playthroughs"],
        ["Semper Fidelis", "Complete the Hissho faction lore quest"],
        ["Shared Vision", "Galaxy Academization- As a Nakalim help the Academy control over half of a huge galaxy"],
        ["Sins of the Fathers", "Win the Academy Quest on the Defender side"],
        ["So Shall It Be", "Win as Nakalim"],
        ["Sophon'd Of Science", "As the Sophons, research 10 technologies with a 50% Omniscience bonus in a single game"],
        ["Stellar Utopia", "Unlock the whole Empire Development technology quadrant in a single game"],
        ["Still Hungry", "Win with the Cravers"],
        ["Stop Right There, Criminal Scum!", "Destroy 4 Pirate Lairs in a single game"],
        ["Strategically Loaded", "Have 100 of each strategic resource"],
        ["Strove, Sought, Found, Did Not Yield", "Win a game in Hard or higher difficulty against AI"],
        ["Thank god they use USB too", "Hack an enemy Home System without passing or starting through any node you own"],
        ["The Art of War", "Unlock the whole Military technology quadrant in a single game"],
        ["The Cake Was Delicious", "Complete the Sophons faction lore quest"],
        ["The Eighth Plague", "As the Cravers, fully deplete all the planets of 3 systems you captured from your opponents"],
        ["The Empire's Death Star", "As the United Empire, destroy a Terran planet by firing a Carrier's Core Cracker"],
        ["The Final Frontier", "Be the first to explore 100% of the Galaxy"],
        ["The Learner Is Now the Master", "Win a game in Endless difficulty against AI"],
        ["The Other Clone Wars", "Complete the Horatio faction lore quest"],
        ["The Root of the Problem", "In a single game, invade 5 enemy systems benefiting from being entwined with Unfallen Vines and un-entwine them"],
        ["The seed is strong", "Have an enemy system filled with 5 Sleepers you own"],
        ["The Spider", "Own at least 1 Sanctuary in 5 opponent Empires"],
        ["The Unstoppable Force", "Win a Conquest Victory"],
        ["There Can Be Only Me", "As Horatio, invade the home system of another Horatio player"],
        ["They Have Always Been First", "Win with the Sophons"],
        ["They Saw Madness - I Found Genius", "Win with Horatio"],
        ["Through the Looking Glass", "As the Riftborn, form an Alliance with 3 non-Riftborn empires"],
        ["To the Death", "Destroy an enemy Behemoth with a fleet containing a Juggernaut"],
        ["Training Wheels", "Win a game in Easy or higher difficulty against AI"],
        ["Tree Huggers", "As the Unfallen, extend Vines to 5 systems of an empire with whom you have signed a Peace agreement"],
        ["Umbral Wisdom", "Complete the Umbral Choir faction quest"],
        ["Virtually Endless", "Complete the Cravers faction lore quest"],
        ["Vive la Révolution !", "Have four laws active at the same time in a game where you've changed your government type and leading party at least once"],
        ["Wanderlust", "Displace your Home system to each different Special node type in the Galaxy"],
        ["We Hit Pay Dust!", "Have 3 Trade Companies that are level 7 or higher"],
        ["We Spared No Expense", "Own 1 Obliterator, 1 Juggernaut and 1 Citadel at once"],
        ["We Will See The Heretic Drown in His Blasphemies", "Win with the Vodyani"],
        ["What If There Is No Tomorrow?", "Complete the Riftborn faction lore quest"],
        ["Whatever the Cost, Whatever the Effort", "Win with the United Empire"],
        ["Yin and Yang", "As the Sophons, assimilate the Mavros minor civilization by assisting them through a Quest "],
    ];

    assert.strictEqual(officialAchievements.length, 115, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});

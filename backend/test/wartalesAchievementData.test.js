import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/wartales.json - 235 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1527950 (fetched through this app's own services/steamApi.js). 9 achievement(s) are hidden and ship a blank official
// description; those keep a curatorial description instead, and every
// other one is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("wartales");

test("getPlannerData('wartales') returns real planner data with 235 curated achievements", () => {

    assert.ok(game, "expected real planner data for wartales");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 235);

});

test("every Wartales achievement has a unique id from 1 to 235 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 235 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 235);
    assert.strictEqual(new Set(apinames).size, 235);

});

test("every Wartales achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 235 Wartales achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["28 years later", "Defeat the champion of Ludern"],
        ["A fledgling fellowship", "Have a troop of 10 companions"],
        ["A Hate/Hate Relationship…", "Two companions hate each other"],
        ["A job well done", "Complete 5 forges in a row perfectly"],
        ["A job’s a job", "Complete a contract"],
        ["A run for your money", "Establish a trade route"],
        ["A taste for comfort", "Build 5 different camp tools"],
        ["A taste for luxury", "Eat a feast"],
        ["Adventure is just bad planning", "Visit every island in Belerion"],
        ["All modern comforts", "Upgrade 10 different camp tools"],
        ["Animal control", "Complete the Grinmeerian hunt"],
        ["Anyone can cook", "Open a tavern"],
        ["Are you not entertained?!", "Triumph in an arena"],
        ["Are you still not entertained?", "Complete 10 minigames in co-op"],
        ["As good as old", "Complete the Tomb of the Ancients in Ormance"],
        ["Back at sea", "Repair your boat after each of its components was damaged"],
        ["Back in business", "Build a travel post in Ormance"],
        ["Battleship", "Land 25 shots with the ballista"],
        ["Be like water", "Complete the Tomb of the Ancients in Belerion"],
        ["Belit's Knowledge", "Complete the Tomb of the Ancients in Rigel"],
        ["Best plonk in town", "Earn your first Taverners' Guild star"],
        ["Beware of the cat", "Capture a smilodon"],
        ["Beyond the Sea", "Find the Admiral's treasure"],
        ["Big bad wolf", "Complete the Tiltrenian hunt"],
        ["Billboard Hot 10", "Enter the Lords of the Sea ranking"],
        ["Blood of the vines", "Complete all points of interest in Vertruse"],
        ["Born to fight", "Find the Fighters’ treasure"],
        ["Break a leg", "In a game of rouste, have every oponent on the ground at once"],
        ["Breaking the ice", "Capture a snow crawler"],
        ["Brought a blade to a whip fight", "Kill a prisoner with a whip"],
        ["Built to last", "Complete the Tomb of the Ancients in Arthes"],
        ["Caligula", "In The Fief expansion, appoint a pony as a General of your fief."],
        ["Can’t touch it", "Defeat the Vertrusian team in a game of rouste"],
        ["Catperson", "In the Curse of Rigel expansion, find and interact with all of the region's hidden cats."],
        ["Champions of the Black market", "Triumph in all the pits"],
        ["Chicken Run", "Catch a chicken for your tavern's menagerie - a rare random event with a low chance of appearing."],
        ["City Hunter", "Complete the Lombelle hunt"],
        ["Coming from old money", "Complete the Tomb of the Ancients in Vertruse"],
        ["Crime and accomplishment", "Finish the Crime and Chaos path"],
        ["Dead aim", "Craft every ghost weapon"],
        ["Destroyer of worlds", "Complete the Tomb of the Ancients in Drombach"],
        ["Disciple of Saint Lenaid", "Rebuild all points of interest in Ormance"],
        ["Diversity Rules", "Have a fief with all building types"],
        ["Down in history", "Finish the Power and Glory path"],
        ["Eat, drink and be merry", "Make at least 100 coins in a rest with an Upscale tavern"],
        ["Elected dogcatcher", "Complete the Drombachian hunt"],
        ["Embrace tradition", "Defeat the Grinmeerian team in a game of rouste"],
        ["Emergency exit", "Use a rope to jump into the sea during the Pirates of Belerion expansion's content."],
        ["End of freedom", "Defeat the champion of Grinmeer"],
        ["Et tu, Brute?", "Find the Merchant’s treasure"],
        ["Eternal work of art", "Complete the Tomb of the Ancients in Tiltren"],
        ["Explorers", "Complete a Tomb of the Ancients"],
        ["Explorers of the seven seas", "Complete every point of interest in Belerion"],
        ["Eye of the Cyclone", "Triumph in the pit of Ludern"],
        ["Eye to eye", "Complete all points of interest in Drombach"],
        ["Factory", "Produce a total of 1,000 items"],
        ["Fatherly Love", "Defeat the champion of Tiltren"],
        ["Feels like home", "Build a travel post in Tiltren"],
        ["First aid", "As a group, save a companion from dying 10 times in co-op"],
        ["First in class", "Find the Hermit's treasure"],
        ["Flourishing business", "Retrieve a total of 1000 krowns from your tavern"],
        ["Food for thought", "Steal every secret cooking recipe"],
        ["For Science", "Complete all Rigel research"],
        ["Frankenstein", "Apply all grafts to a lycan"],
        ["Friendship is magic", "Find the Citizen's treasure"],
        ["Fully equipped", "Build all different boat components"],
        ["General's voice", "Sing 5 times the Ode to the Good General"],
        ["God is playing dice", "Discover the truth about the Eye’s punishment"],
        ["Got some rare things on sale, stranger!", "Defeat the champion of Drombach"],
        ["Gotta Catch 'Em All", "Catch 12 different species of fish"],
        ["Guardians of the Ancient secrets", "Finish the Mysteries and Wisdom path"],
        ["Haute Cuisine", "Serve your first feast"],
        ["Heaven's kitchen", "Top the taverns' ranking"],
        ["Heist of the century", "Attack a Golden Merchant Caravan and win, without letting any merchants flee"],
        ["Hic Sunt Dracones", "Visit every wind zone in Belerion"],
        ["High and mighty", "Triumph in the Lisbeth arena"],
        ["Hopping mad", "Defeat the champion of Belerion"],
        ["Hostile environment", "Win a pit fight in Tiltren by letting neutral units deal all the final blows"],
        ["Hot Ones", "Triumph in the pit of Vertruse"],
        ["I am become death", "Find the General’s treasure"],
        ["I got friends on the other side", "Recruit a Skelmar"],
        ["I had to do it to em", "Shoot 6 times in one turn with a crossbow"],
        ["I have heard you!", "Complete 50 audiences"],
        ["I’m too old for this", "Reach level 15"],
        ["If it's expensive, it must be good", "Make at least 100 coins in a rest with a Working class tavern"],
        ["Impossible love", "Have a human companion in a relationship with a lycanthrope"],
        ["In all weathers", "Build a travel post in Drombach"],
        ["In and out, nobody gets hurt", "Do not lose any HP in a fight where you are outnumbered"],
        ["In conclusion...", "Complete all scenario and secondary quests"],
        ["In it for the money", "Have 1,000 krowns in less than 1 month"],
        ["In the wolf’s mouth", "Complete the Ludernian hunt"],
        ["Influence of Brokers", "Complete all points of interest in Grinmeer"],
        ["Insane deals", "Build a travel post in Rigel"],
        ["It belongs in a museum", "Find a vernacular artifact"],
        ["Its vision is based on movement", "Behold the beast"],
        ["Jack of all trades", "Reach the apprentice level in 8 different jobs"],
        ["Judging the book by its cover", "Restore a codex in less than 6 guesses"],
        ["King of terrors", "Defeat the High-Jarl Sven in the Curse of Rigel expansion's climactic scenario."],
        ["Knock Knock", "Win a siege"],
        ["Land of the free", "Free a barony"],
        ["Leader of the pack", "Get a company with 1 bear, 1 wolf, 1 boar and 1 crocswine"],
        ["Lesser preys", "Complete the Rigel hunt"],
        ["Let him cook", "Have a companion become a Master in their craft while working in the tavern"],
        ["Let me in!", "Find a way to enter Alazar's Embassy, in Grinmeer"],
        ["Long-distance relationship", "In Vertuse's pit, push an enemy 10 meters away."],
        ["Loyal Subjects", "Start 50 mandates"],
        ["Mad scientist", "Give lycanthropy to a companion with an item"],
        ["Massive weapon incoming", "Triumph in the Hoevendorp arena"],
        ["Master hunter", "Complete the Ormance hunt"],
        ["Maze runner", "Defeat the Arthesian team in a game of rouste"],
        ["Memento mori", "Find the Artist’s treasure"],
        ["Men of Steel", "Triumph in the pit of Arthes"],
        ["Mithridatism", "Triumph in the pit of Tiltren"],
        ["Most Wanted", "Reach the top of the Lords of the Sea ranking"],
        ["My friend's enemy is also my friend", "Obtain every faction's reward"],
        ["My job here is done", "Complete every point of interest in Ormance"],
        ["My job is just beach", "Defeat the Belerian team in a game of rouste"],
        ["No good to man or beast", "Triumph in the Nairolf arena"],
        ["No need for assistance", "Defeat an animal group in a hunt without a trace bonus"],
        ["Not a ghost of a chance", "Complete the Vertrusian hunt"],
        ["Not my fault!", "Win a pit fight in Arthes without hitting a single enemy"],
        ["Not today, Death!", "Retreat from combat"],
        ["Off the beaten track", "Build a travel post in Ludern"],
        ["On our way to slay Hrimgandr", "Craft every rimesteel weapon"],
        ["One big happy family", "Have a troop of 20 companions (humans and/or animals)"],
        ["One hell of a hammering", "Craft an item of superior quality at forge"],
        ["Only your strongest potions", "Equip your whole troupe with oiled weapons"],
        ["Ossuary", "Craft all the Beast weapons"],
        ["Pale ontology", "Discover the truth about dragons"],
        ["Paradise on Earth", "Reach 90% in all needs"],
        ["Patience is a virtue", "Bring an alcohol to its maximum aging level"],
        ["Perseverance is a quality", "Defeat the Beast of Brigga in the Beast Hunt content without using a Master Trap."],
        ["Pest control", "Clean a rat invasion"],
        ["Plagueridden survivors", "Defeat the champion of Rigel"],
        ["Please observe social distancing", "Kill 3 enemies with a single AoE attack"],
        ["Pleasing everyone", "Have 10 different factions visit your tavern on the same day"],
        ["Poison you said?", "Triumph in the Smot arena"],
        ["Prepare for trouble... And make it double", "Triumph in the Bernna arena"],
        ["Property is theft", "Perform a burglary"],
        ["Public enemy #1", "Defeat a guard whilst you are wanted"],
        ["Rags to riches", "Build a travel post in Grinmeer"],
        ["Reaching the top", "Move your tavern to Gosenberg"],
        ["Rebranding", "Upgrade your tavern's walls and floor"],
        ["Retired heroes", "Fill a weapons rack with legendary weapons"],
        ["Rising from the ashes", "Rebuild a point of interest in Ormance"],
        ["Risky investment", "Build a travel post in Lombelle"],
        ["Rock solid", "Find the Builder’s treasure"],
        ["Running of the boar", "Defeat the Ludernian team in a game of rouste"],
        ["Safety first", "Equip your whole troupe with helmet"],
        ["Savvy businessman ", "Gain 2.000 Krowns by selling Trading Goods"],
        ["Scaling up", "Move your tavern to Marheim"],
        ["Secret code", "Unmask Rooks"],
        ["Shepherd", "In the Curse of Rigel expansion, find and safely bring home all three lost ponies for the Rigel Stables."],
        ["Show of hands", "Triumph in the Oris arena"],
        ["Sightseer", "Complete all quests in a region"],
        ["Single-handed sailor", "Set sail with just one human on board"],
        ["Smoke on the water", "Complete the Belerian hunt"],
        ["Soft kitty, warm kitty...", "Pet all 9 cats hidden throughout the base game's regions - clicking a cat gives it a scratch, a happy meow, and a small Happiness bonus."],
        ["Sons of the forest", "Complete every POI in Rigel"],
        ["Souls mates", "Two companions have declared their love for each other"],
        ["Spice wars", "Prepare 10 delicious meals"],
        ["Spirited away", "Prevent an animal from being transformed into a ghost pack monster after a rest"],
        ["Sport in a storm", "Defeat the Drombachian team in a game of rouste"],
        ["Started from the bottom... ", "Have a total of 5000 krowns"],
        ["Stay with me", "Cure 5 companions before they become lycanthropes"],
        ["Stockholm syndrome", "One of your prisoners wanted to join your company, and you accepted it"],
        ["Survive THIS!", "Defeat the champion of Vertruse"],
        ["Survivors", "Reach day 100 in expert difficulty"],
        ["Teamwork makes the dream work", "Defeat a Champion in co-op"],
        ["Territory at war", "Complete all points of interest in Arthes"],
        ["That rat skewer is raw !", "Get some help from Brandon Lesley"],
        ["The balls are in your court", "Defeat the Tiltrenian team in a game of rouste"],
        ["The beehive", "Have at least 10 companions assigned to different tools in your camp"],
        ["The Colour of War", "Use War Paint on a companion"],
        ["The coward’s way out", "Defeat the champion of Ormance"],
        ["The curse of Brigga", "Defeat the Beast of Brigga a second time, after it returns."],
        ["The Fairest Kingdom", "Reach the maximum fief level"],
        ["The fate of Arthes", "Finish the Arthes scenario"],
        ["The fate of Brigga", "Finish the Brigga scenario"],
        ["The fate of Drombach ", "Finish the Drombach scenario"],
        ["The fate of Grinmeer", "Finish the Grinmeer scenario"],
        ["The fate of Lombelle", "Finish the Lombelle Scenario"],
        ["The fate of Ludern", "Finish the Ludern scenario"],
        ["The Fate of Ormance", "Finish the Ormance scenario"],
        ["The fate of Rigel", "Finish the Rigel Scenario"],
        ["The fate of Tiltren", "Finish the Tiltren scenario"],
        ["The fate of Vertruse", "Finish the Vertruse scenario"],
        ["The Ghost of Harag", "Defeat the champion of Arthes"],
        ["The Great Escape", "Catch a prisoner that had escaped"],
        ["The legend starts here", "Acquire 1 legendary weapon"],
        ["The mercenary strikes back", "In Ludern's pit, 2 engaged units have been struck by lighting."],
        ["The Miraculous Catch of Fish", "Finish the Belerion scenario"],
        ["The more the merrier", "Use a man power skill"],
        ["The only show in town", "Triumph in an arena without failing a single requirement"],
        ["The phantom pain", "Complete the Arthesian hunt"],
        ["The pint glass menagerie", "Have a cat, a chicken and a pig in your tavern at the same time"],
        ["The power of friendship", "Complete a bounty in co-op"],
        ["The price of fame", "Surpass a tavern's ranking after taking prestige from it"],
        ["The rat pack", "Clean 5 different rat invasions"],
        ["The rich get richer", "Finish the Trade and Craftsmanship path"],
        ["The Tiltren Dream", "Complete all points of interest in Tiltren"],
        ["There can be only one!", "Have an allied fierce animal kill an enemy fierce animal"],
        ["There's honor among thieves", "Reach the tolerated security level while 3 or more thieves are assigned"],
        ["This is fine", "Wake up in the middle of the Beast's mist after a rest"],
        ["This is my swamp.", "Complete all points of interest in Ludern"],
        ["This isn’t even my final form", "Triumph in the Kriskhed arena"],
        ["This ship has sailed", "Complete the Tomb of the Ancients in Grinmeer"],
        ["Those about to die will salute you", "Complete the Tomb of the Ancients in Ludern"],
        ["Those guys again?", "Triumph in the Arena of Legends"],
        ["Tis but a scratch", "Have a companion die"],
        ["Together stronger", "Triumph in the Rigel arena"],
        ["Travelling light", "Build 15 different camp tools"],
        ["Treasure hunter", "Collect every treasure hidden in Grinmeer"],
        ["Treasure Island", "Find the treasure of a Lord of the Sea"],
        ["Trouble brewing", "Steal every secret brewing recipe"],
        ["Two for the show", "Triumph in the Attia arena"],
        ["Urban exploration", "Complete every POI in Lombelle"],
        ["Via Maris", "Build a travel post in Belerion"],
        ["Victory favours the brave... and the bold\"", "Win a fight using only temporary VPs"],
        ["War is the most profitable business", "Build a travel post in Arthes"],
        ["Wave Race", "Reach a speed of 10 knots with your boat"],
        ["Well, well, well, what have we here?", "Find a secret"],
        ["What do we do in the Shadows", "In Grinmeer's pit, leave at least one unit in the shadows for an entire fight."],
        ["What's the buzz?", "Capture a cardinal mosquito"],
        ["Where the water tastes like wine", "Build a travel post in Vertruse"],
        ["White Knights", "Save at least 10 civilians in Lombelle's fights"],
        ["Who threw that stone?", "Kill an enemy using a thrown cobblestone"],
        ["Who you gonna call?", "Defeat the Ghost pack"],
        ["Wiping the slate clean", "Go from 600 Suspicion to 0 Suspicion"],
        ["With your eyes closed!", "Triumph in the pit of Grinmeer"],
        ["Wonder of the seas", "Upgrade every component of your boat"],
        ["Workaholic", "Complete 100 contracts in one game"],
        ["Written in the stars", "Find the Explorer’s treasure"],
        ["You don't scare me", "Defeat a Champion"],
        ["You got a friend in me", "Reach maximum relation with a kingdom"],
    ];

    assert.strictEqual(officialAchievements.length, 235, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});

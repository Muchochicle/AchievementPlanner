import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/total-war-warhammer.json - 185 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 364360 (fetched through this app's own services/steamApi.js). None are hidden; every achievement's description is Steam's own real
// text, quoted verbatim.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("total-war-warhammer");

test("getPlannerData('total-war-warhammer') returns real planner data with 185 curated achievements", () => {

    assert.ok(game, "expected real planner data for total-war-warhammer");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 185);

});

test("every Total War: Warhammer achievement has a unique id from 1 to 185 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 185 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 185);
    assert.strictEqual(new Set(apinames).size, 185);

});

test("every Total War: Warhammer achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 185 Total War: Warhammer achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Confrontational Nature", "Play a multiplayer campaign."],
        ["A Few Mild Impalings Amongst Friends", "Construct the Tournament Grounds at Couronne."],
        ["A Matter of Aim", "Construct the Nuln Gunnery School at Nuln."],
        ["A Nest of Vipers", "Playing as Norsca or the Wintertooth, gain total devotion to the Great Serpent."],
        ["A Nice Bit of Claret", "Construct the Bordeleaux Wine Market."],
        ["A Quiet Man", "Playing as the Empire, research 10 technologies."],
        ["A Time of War & Heroes", "Have a single Hero make 100 kills during a battle."],
        ["Accessories by Kemmler", "Playing as the Vampire Counts, upgrade the city of Castle Drakenhof to level 5."],
        ["Allegiance to the Gods", "Playing as Norsca or the Wintertooth, raise your first monolith to the Gods."],
        ["Ambassador", "Have a military alliance with 10 other factions at the same time."],
        ["Appraiser", "Have access to at least 4 different tradable resources through production or trade."],
        ["Approaching Daemonhood", "Playing as Chaos, research 24 technologies."],
        ["Ar-Ulric", "Construct the Great Temple of Ulric at Middenheim."],
        ["Arcane Spoils", "Have 10 magic weapons or items of magic armour."],
        ["Archlord of Chaos", "Win a campaign as Chaos."],
        ["Ariel's Champion", "Playing as the Wood Elves or Argwylon, win the Season of Revelation challenge campaign on Very Hard or Legendary difficulty."],
        ["Armchair Emperor", "Play 25 multiplayer battles."],
        ["Armchair General", "Play 5 multiplayer battles."],
        ["Aspirant", "Playing as the Vampire Counts, research 12 technologies."],
        ["At the World's Edge", "Construct a Mason at the Misty Mountain."],
        ["Beast Keeper", "Have a special mount."],
        ["Beast Master", "Have 3 special mounts."],
        ["Big Boss of All Da Boyz", "Playing as the Greenskins, occupy Gor Gazan, Galbaraz and Agrul Migdhal."],
        ["Bit of a Bonfire", "Besiege and raze 30 settlements in a single campaign."],
        ["Black Powder Pounder", "Kill 200 enemies with siege artillery during a single battle."],
        ["Blessed Be The Lady", "Playing as Carcassonne, construct the Tower of the Enchantress building during a campaign."],
        ["Blessings from the Throne of Ruin", "Construct 5 Totems of Horns across your hordes."],
        ["Bloodthirsty", "Have a single unit make 200 kills during a battle."],
        ["Brynduraz Excavator", "Construct the Brightstone Mine at Mount Gunbad."],
        ["Calling the Warherd", "Playing as Beastmen, win a battle with a brayherd army as reinforcements."],
        ["Capture the Zoggin' Flag!", "Successfully besiege and capture a city by seizing its victory points during a campaign battle."],
        ["Champion", "Have a level 10 general."],
        ["Charnel Valley", "Win 5 ambush battles during a single campaign."],
        ["Chief Spanna Whacka", "Playing as the Greenskins, research 24 technologies."],
        ["Conqueror of the Southern Coasts", "Occupy Magritta, Miragliano and Myrmiddens."],
        ["Conqueror? God, More Like!", "Kill 250,000 enemies in battle."],
        ["Da Best Raiderz", "Playing as the Greenskins, have a raiding income of 8,000."],
        ["Da Big Warboss", "Win a campaign as the Greenskins."],
        ["Da Greatest Warboss", "Win a campaign as the Greenskins on Very Hard or Legendary difficulty."],
        ["Damned Soul", "Playing as Chaos, research 8 technologies."],
        ["Dark Academy", "Playing as the Vampires, construct the Altdorf Colleges of Magic."],
        ["Death from Above!", "Win a campaign battle using only flying units."],
        ["Dibna", "Playing as the Dwarfs, research 20 technologies."],
        ["Disciple of the Spider God", "Playing as the Greenskins, recruit an Arachnarok to one of your armies."],
        ["Down in the Underway at Midnight", "Win 5 Underway battles during a single campaign."],
        ["Dwarf King", "Win a campaign as the Dwarfs."],
        ["Elector Count", "Win a campaign as the Empire."],
        ["Embark Upon Adventure!", "Fight a quest battle."],
        ["Emissary", "Have a military alliance with 5 other factions at the same time."],
        ["Emperor", "Win a campaign as the Empire on Very Hard or Legendary difficulty."],
        ["Every Dog Has Its Day", "Playing as Norsca or the Wintertooth, gain total devotion to the Great Hound."],
        ["Eye for a Ruinous Eye", "Playing as Beastmen, win the Eye for an Eye challenge campaign."],
        ["Factor", "Have access to at least 7 different tradable resources through production or trade."],
        ["Fire Dragon", "Cause more damage to a unit due to its weakness against fire."],
        ["First Among Equals", "Win a multiplayer campaign."],
        ["For the Lady!", "Playing as Bretonnia, Bordeleaux, or Carcassonne, win the Old World campaign on Very Hard or Legendary difficulty."],
        ["Forged in Hell", "Have at least 10 Chaos Knights in a single army."],
        ["Four Corners of the Old World", "Occupy Fort Straghov, Luccini, Lyonesse and Castle Drakenhof."],
        ["Gatebreaker", "During a siege battle, destroy a gate using Dwarfen Miners or a monstrous unit."],
        ["Get a Big Smelly Git", "Playing as the Greenskins, recruit a Giant to one of your armies."],
        ["Glade Lord", "Playing as the Wood Elves or Argwylon, win the grand campaign."],
        ["Going Underground", "Fight an Underway battle during a campaign."],
        ["Goldgatherer", "Have a net income of 60,000 gold per turn."],
        ["Good Raiderz", "Playing as the Greenskins, have a raiding income of 3,000."],
        ["Grafs of the Empire", "Playing as the Empire, win a campaign land battle with three or more Lords and Heroes in your army."],
        ["Heart of the Forest", "Playing as the Wood Elves or Argwylon, upgrade the Oak of Ages to level 2."],
        ["Herald of Famine, Undeath & War", "Playing as the Vampire Counts, recruit a Black Coach to one of your armies."],
        ["Heroic Ideals", "Have 1 level 10 Hero."],
        ["High King of the Dwarfs", "Win a campaign as the Dwarfs on Very Hard or Legendary difficulty."],
        ["Highly Unlikely", "Win a siege battle without fielding any siege equipment."],
        ["Home Sweet Home", "Playing as the Wintertooth, occupy the settlement of Erengrad in Troll Country."],
        ["Honour Guard", "Have 3 level 30 Heroes at the same time."],
        ["I'm Da Boss!", "Construct at least 10 Boss' Camps."],
        ["Imperial Architect", "Playing as the Empire, upgrade the city of Altdorf to level 5."],
        ["Independence Lost", "Playing as the Empire, occupy Marienburg and Gorssel."],
        ["Inventor-General", "Playing as the Empire, research 30 technologies."],
        ["Iron-Hard & Angry", "Win a campaign battle, having completely wiped out all enemy units."],
        ["Ironclad", "Construct a Dwarfen Shipyard."],
        ["Jack of All Trades, Master of Some", "Use 100 abilities during campaign battles."],
        ["Keeper of Relics", "Have 10 magic talismans, enchanted items, or arcane items."],
        ["Keeper of the Royal Armoury", "Have 25 magic weapons or items of magic armour."],
        ["King in the Woods", "Playing as the Wood Elves or Argwylon, win the grand campaign on Very Hard or Legendary difficulty."],
        ["Knightly Misconduct", "Playing as Bretonnia, Bordeleaux, or Carcassonne, have negative Chivalry during a campaign."],
        ["Lady Protect Thee!", "Playing as the Empire, raze the Bretonnian capital at Couronne."],
        ["Leadership Test", "Have a single Lord make 100 kills during a battle."],
        ["Leonardo's Daemon", "Playing as the Empire, recruit a Steam Tank to one of your armies."],
        ["Let Us Prey", "Playing as Bretonnia, Bordeleaux, or Carcassonne, win the Old World campaign."],
        ["Lichemaster", "Playing as the Vampire Counts, research 36 technologies."],
        ["Little Tinkerer", "Playing as the Greenskins, research 8 technologies."],
        ["Loyal Retainers", "Have 2 level 20 Heroes at the same time."],
        ["Lucky Streak", "Win 10 land battles during a single campaign."],
        ["Marauding Hordes", "Playing as Norsca or the Wintertooth, win a campaign on any difficulty."],
        ["Master Engineer", "Playing as the Empire, research 20 technologies."],
        ["Master of the Hunt", "Playing as Norsca or the Wintertooth, complete all Monster Hunts."],
        ["Master Tactician", "Win 50 land battles during a campaign."],
        ["Maze of Torment, Maze of Death", "Construct a Cursed Labyrinth in one of your hordes."],
        ["Meddler in Magic", "Have 25 magic talismans, enchanted items, or arcane items."],
        ["Merchant", "Have access to 10 different tradable resources through production or trade."],
        ["Merchant Adventurer", "Have a trade agreement with 5 other factions at the same time."],
        ["Merchant Prince", "Have a trade agreement with 10 other factions at the same time."],
        ["Mine Castle; Mine Home", "Construct at least 5 Vampire's Keeps."],
        ["More Luck Than Judgement", "Playing as the Greenskins, research 16 technologies."],
        ["Morr's Mate", "Construct at least 20 Lychyards or Ossuaries."],
        ["Murder As Art", "Kill 10,000 enemies in battle."],
        ["Necromancer", "Playing as the Vampire Counts, research 24 technologies."],
        ["Neighbours of the Beast", "Playing as Beastmen, raze the Imperial capital at Altdorf and the Bretonnian capital at Couronne."],
        ["Non-Traditionalist", "Playing as the Dwarfs, research 60 technologies."],
        ["None Shall Pass!", "Win 25 siege defence battles during a campaign."],
        ["Northern Powerhouse", "Playing as Norsca or the Wintertooth, recruit a Mammoth."],
        ["Not All Crows Are Ravens", "Playing as Norsca or the Wintertooth, gain total devotion to the Carrion Crow."],
        ["Order of the Panther", "Construct the Knights Panther Chapterhouse at Carroburg."],
        ["Outgunned & Outmatched", "Win a campaign land battle where you have spent half or less on units than the enemy."],
        ["Paragon", "Have a level 30 general."],
        ["Pennypincher", "Have a net income of 5,000 gold per turn."],
        ["Pillagers of the Old World", "Playing as Norsca or the Wintertooth, win a campaign on Very Hard or Legendary difficulty."],
        ["Put Them to the Torch", "Besiege and raze 1 settlement."],
        ["Queen of the Wasteland", "Construct the Port of Marienburg."],
        ["Raiderz", "Playing as the Greenskins, have a raiding income of 1,000."],
        ["Reikscaptain", "Playing as the Empire, have at least 10 Reiksguard units in a single army."],
        ["Sailor on the Sea of Claws", "Construct the Port of Erengrad."],
        ["Sap of the Beaming Sun", "Playing as the Wood Elves or Argwylon, spend a point of Amber."],
        ["Scion of Volans", "Playing as the Empire, construct the Altdorf Colleges of Magic."],
        ["Seeker of Power", "Have 3 magic weapons or items of magic armour."],
        ["Sentinel of the North", "Construct a City Watch, Tall Walls or Reinforced Walls building at Fort Straghov, Fort Ostrosk and Fort Jakova."],
        ["Shiny Fings!", "Construct at least 3 Da Hoards."],
        ["Siggurd's Inheritance", "Construct 5 Pillars of Skulls across your hordes."],
        ["Sigmar Reborn", "Win a singleplayer campaign on Legendary difficulty."],
        ["Skilled Engineer", "Playing as the Dwarfs, research 40 technologies."],
        ["Skinflint", "Have a net income of 20,000 gold per turn."],
        ["Slaughter of the Anything-But Innocent", "Kill 100,000 enemies in battle."],
        ["Slave to Darkness", "Playing as Chaos, research 16 technologies."],
        ["Something Rotten in the State of Kislev", "Playing as the Vampire Counts, occupy or raze Kislev."],
        ["Son of Grungni", "Construct the Throne Hall of the High King at Karaz-a-Karak."],
        ["Spells 'n' Skills 'n' Stuff", "Use 5 or more special abilities during a campaign battle."],
        ["Surprise! You're Dead...", "Playing as Beastmen, win 10 ambush battles during a single campaign."],
        ["Swag 'n' Plunder!", "Construct at least 20 Da Hoards."],
        ["Swift Half of Bugman's XXXXXX?", "Construct a Renowned Brewery at Karag Dromar."],
        ["Take the Eye Test", "Playing as Beastmen, win the Eye for an Eye challenge campaign on Very Hard or Legendary difficulty."],
        ["Take the Oath", "Construct the Great Slayer Shrine at Karak Kadrin."],
        ["Taking the Initiative", "Win 25 siege attack battles during a campaign."],
        ["The Brotherhood of Seamen & Pilots", "Playing as Bordeleaux, construct the Manann's Dry Docks building during a campaign."],
        ["The Curse of Praag", "Besiege and sack the cursed city of Praag."],
        ["The Dream of What Could Be", "Playing as Bretonnia, Bordeleaux, or Carcassonne, win 5 heroic victories during a campaign."],
        ["The Everchosen", "Win a campaign as Chaos on Very Hard or Legendary difficulty."],
        ["The Hunt Begins!", "Playing as Norsca or the Wintertooth, complete a Monster Hunt."],
        ["The Hunt Rides Out", "Playing as the Wood Elves or Argwylon, win the Season of Revelation challenge campaign."],
        ["The Industry of Drinking", "Playing as the Dwarfs, produce at least 100 beers per turn."],
        ["The Journey's End", "Complete all quest battles for a single character."],
        ["The Long War, the Endless Hunt", "Playing as Beastmen, have a raiding income of 6,000."],
        ["The Meek Shall Inherit", "Get an Undead/Goblin/Chaos/Empire militia unit to the highest level of experience."],
        ["The Most Enduring", "Playing as the Dwarfs, upgrade the city of Karaz-a-Karak to level 5."],
        ["The Order of the Blazing Sun", "Construct the Blazing Sun Chapterhouse at Talabheim."],
        ["The Purifying Flames", "Besiege and raze 100 settlements in a single campaign."],
        ["The Ravages of Gorthor", "Playing as Beastmen, win the grand campaign on Very Hard or Legendary difficulty."],
        ["The Secret of the Grail", "Playing as the Vampire Counts, occupy or raze the Bretonnian capital at Couronne."],
        ["The Secret of the Grail", "Playing as Bretonnia, Bordeleaux, or Carcassonne, recruit the Grail Reliquae into an army."],
        ["The Smell of Dinner, Burning...", "Besiege and raze the Halflings' Moot."],
        ["The Stuff of Legend", "Win a campaign battle in which you are outnumbered 10-to-1."],
        ["The Ultimate Grudge", "Playing as the Empire, raze the Dwarfs' capital at Karaz-a-Karak."],
        ["The Undergrowth Advantage", "Playing as the Wood Elves or Argwylon, win 10 ambush battles during a single campaign."],
        ["The Unnatural Order", "Playing as Beastmen, win the grand campaign."],
        ["This is Bat Country", "Playing as the Vampire Counts, recruit a Terrorgheist to one of your armies."],
        ["This is Troll Country", "Have at least 10 Trolls or 10 Chaos Trolls in a single army."],
        ["Through the Skin to the Soul", "Playing as Beastmen, recruit a Cygor to one of your armies."],
        ["Total Waaagh!", "Playing the Greenskins, win a battle with a Waaagh! army as reinforcements."],
        ["Treasure Hunter", "Have 3 magic talismans, enchanted items, or arcane items."],
        ["Tribal Chief", "Playing as Norsca or the Wintertooth, occupy all the regions of Norsca."],
        ["Troll Slayer", "Playing as Norsca, destroy the Wintertooth faction."],
        ["Unberogen Unearthed", "Playing as the Vampire Counts, occupy or raze the Imperial capital at Altdorf."],
        ["Up For A Scrap", "Play a multiplayer battle."],
        ["Vala-Azril-Ungol", "Construct a Great Hold in Karak Eight Peaks"],
        ["Vampire Count", "Win a campaign as the Vampire Counts."],
        ["Veteran", "Have a level 20 general."],
        ["Von Carstein's Return", "Win a campaign as the Vampire Counts on Very Hard or Legendary difficulty."],
        ["Waaagh! on Altdorf!", "Playing as the Greenskins, raze the Imperial capital at Altdorf."],
        ["Waaagh! on da North!", "Playing as the Greenskins, occupy Kraka Drak, Khazid Bordkarag and Sjoktraken."],
        ["Waaagh! on da Stunties!", "Playing as the Greenskins, occupy or raze the Dwarfs' capital at Karaz-a-Karak."],
        ["Walk the Green Way", "Playing as the Wood Elves, recruit a Treeman unit to one of your armies."],
        ["Warriors of Cythral", "Playing as the Wood Elves, recruit a Wildwood Ranger unit to one of your armies."],
        ["We Are Legion", "Construct a Ruinous Warhost in one of your hordes."],
        ["We're Stayin' Put!", "Construct a Greenskin Stronghold."],
        ["Where Be Thy Treasure, There Be Thy Heart", "Playing as Bretonnia, construct the Abbey of the Grail Companions building during a campaign."],
        ["Where Eagles Dare", "Playing as Norsca or the Wintertooth, gain total devotion to the Great Eagle."],
        ["Yn Edri Eternos", "Playing as the Wood Elves or Argwylon, upgrade the Oak of Ages to level 5."],
        ["You vs. the Great Unclean Ones", "Defeat a CA staff member, or anyone else who has this achievement, during a multiplayer battle."],
    ];

    assert.strictEqual(officialAchievements.length, 185, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});

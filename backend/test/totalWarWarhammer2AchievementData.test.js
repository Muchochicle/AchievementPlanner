import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/total-war-warhammer-2.json - 152 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 594570 (fetched through this app's own services/steamApi.js).
// This game has no hidden achievements: all 152 ship a real, official
// Steam description, quoted verbatim below.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("total-war-warhammer-2");

test("getPlannerData('total-war-warhammer-2') returns real planner data with 152 curated achievements", () => {

    assert.ok(game, "expected real planner data for total-war-warhammer-2");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 152);

});

test("every Total War: WARHAMMER II achievement has a unique id from 1 to 152 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 152 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 152);
    assert.strictEqual(new Set(apinames).size, 152);

});

test("every Total War: WARHAMMER II achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 152 Total War: WARHAMMER II achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const officialAchievements = [
        ["A Tale will be Told", "Playing as a Vampire Coast faction, win a singleplayer campaign on Very Hard or Legendary difficulty."],
        ["A Taste for Blood", "Playing as the Lizardmen, recruit a Feral Carnosaur."],
        ["A Taste for Glory", "Play a multiplayer campaign."],
        ["Abominator", "Playing as the Skaven, recruit a Hell-Pit Abomination."],
        ["Adventurer", "Fight a quest battle."],
        ["Age of Chivalry", "Playing as Bretonnia, win a singleplayer campaign on Very Hard or Legendary difficulty."],
        ["Age of Reckoning", "Playing as Dwarfs, win a singleplayer campaign on Very Hard or Legendary difficulty."],
        ["Age of the Eternal Oak", "Playing as Wood Elves, win a singleplayer campaign on Very Hard or Legendary difficulty."],
        ["Antique Dealer", "Have 10 magic talismans, enchanted or arcane items."],
        ["Archmage", "Playing as the High Elves, research 50 technologies."],
        ["Artificer", "Playing as the Skaven, research 10 technologies."],
        ["Asp-Irational", "Playing as the Court of Lybaras, have at least 3 Necropolis Knights within a single army."],
        ["Assailant", "Win 25 siege attack battles during a single campaign."],
        ["Asur Ambassador", "Playing as the High Elves, own at least 5 Elven Embassies."],
        ["Asur Prince", "Playing as the High Elves, win a singleplayer campaign."],
        ["Back in Business", "Playing as the Vampire Coast, restore Luthor Harkon's mind by opening the Ancient Vault."],
        ["Beast Tamer", "Have a special mount."],
        ["Best Served Cold", "Playing as the Dark Elves, occupy or raze the fortress city of Lothern in the Eye of the Vortex Campaign."],
        ["Black Ark Corsair", "Playing as the Dark Elves, construct a Black Ark and upgrade it to the maximum level."],
        ["Black is the New Black", "Playing as the Followers of Nagash, construct the Black Tower of Arkhan building during a campaign."],
        ["Blood-Grounds, Everywhere!", "Playing as the Beastmen, win a singleplayer campaign on Very Hard or Legendary difficulty."],
        ["Book Monitor", "Playing as the Tomb Kings, collect your first Book of Nagash."],
        ["Bottom Dweller", "Playing as the Dreadfleet, scavenge the wreck of the Heldenhammer in the Galleon's Graveyard."],
        ["Breed Like Rats", "Playing as the Skaven, own at least 13 Breeding Pits."],
        ["Bring Out the Big Guns", "Playing as a Vampire Coast faction, recruit Queen Bess."],
        ["Burnt to Cinders", "Playing as the Dark Elves, have at least 3 War Hydras within a single army."],
        ["Camera Obscura", "Construct the Chamber of Visions."],
        ["Cave In", "Playing as the Lizardmen, construct the Vaults of the Old Ones in the city of Itza."],
        ["Champion", "Have a level 20 Lord."],
        ["Coldblood, Full Stomach", "Playing as the Skaven, occupy or raze the temple-city of Hexoatl in the Eye of the Vortex Campaign."],
        ["Colonial Governor", "Playing as the High Elves, own at least 3 Thriving Elven Colonies."],
        ["Conqueror", "With a single unit, make 200 kills during a campaign battle."],
        ["Councillor", "Have 2 level 20 Heroes at the same time."],
        ["Da Best Waaagh!", "Playing as Greenskins, win a singleplayer campaign."],
        ["Da Greatest Waaagh! Ever!", "Playing as Greenskins, win a singleplayer campaign on Very Hard or Legendary difficulty."],
        ["Dark Dragon Lord", "Playing as the Dark Elves, recruit a Black Dragon."],
        ["Dark Mother Superior", "Playing as the Dark Elves, construct the Convent of Sorcery in the city of Ghrond."],
        ["Dark Side of Morrslieb", "Playing as the Tomb Kings, gain control of the Black Pyramid."],
        ["Dawi Dominance", "Playing as Dwarfs, win a singleplayer campaign."],
        ["Dragon Lord", "Playing as the High Elves, recruit a Star Dragon."],
        ["Dreadlord", "Playing as the Dark Elves, win a singleplayer campaign."],
        ["Dreadlord of Hag Graef", "Construct the Dark Crag in the sinister city of Hag Graef."],
        ["Exceptionally Able", "Use 10 or more special abilities during a campaign battle."],
        ["Factor", "Have access to 12 different tradable resources through production or trade."],
        ["Family Feud", "Playing as the Court of Lybaras, kill 1000 Vampire Counts in a single battle."],
        ["Favoured Son of Chaos", "Playing as Warriors of Chaos, win a singleplayer campaign."],
        ["Fetch Me the Green Stuff!", "Playing as the Tomb Kings, craft a magic item within the Mortuary Cult."],
        ["Field Marshal", "Win 10 battles during a single campaign."],
        ["First Among Equals", "Win 10 multiplayer battles."],
        ["Forge of the Blind God", "Control both Vaul's Anvil (Caledor) and Vaul's Anvil (The Black Coast) in the Eye of the Vortex Campaign."],
        ["Generalissimo", "Win 50 battles during a single campaign."],
        ["Grand Ambassador", "Have a military alliance with 10 other factions at the same time."],
        ["Grey Seer", "Playing as the Skaven, research 40 technologies."],
        ["Heirs of Breton ", "Playing as Bretonnia, win a singleplayer campaign."],
        ["Herald of Decay", "Playing as the Skaven, own at least 3 Temples of the Horned Rat."],
        ["Honour Guard", "Have 3 level 30 Heroes at the same time."],
        ["Immortal Marauders", "Playing as Norsca, win a singleplayer campaign on Very Hard or Legendary difficulty."],
        ["Imperials of Excellence", "Playing as the Empire, win a singleplayer campaign."],
        ["Incendiary Tendencies", "Raze 30 Settlements in a single campaign."],
        ["Inhuman Ingenuity", "Playing as the Skaven, recruit a Doomwheel."],
        ["Ipsissimus", "Successfully complete the final ritual."],
        ["Keeper of the Eternal Fire", "Playing as the High Elves, have at least 5 Phoenix Guard units within a single army."],
        ["King of Kings", "Playing as the Tomb Kings, win a singleplayer campaign on Very Hard or Legendary difficulty."],
        ["Know My Name", "Playing as a Vampire Coast faction, gain infamy."],
        ["Lambs to the Slaughter", "Playing as Vampire Counts, win a singleplayer campaign."],
        ["Leech", "Playing as a Vampire Coast faction, establish a Pirate Cove."],
        ["Legacy of the Great Necromancer", "Construct the Vault of Nagash."],
        ["Legends Amongst Men", "Playing as the Empire, win a singleplayer campaign on Very Hard or Legendary difficulty."],
        ["Librarian", "Playing as the High Elves, research 10 technologies."],
        ["Liquidator", "With a single Lord, make 100 kills during a battle."],
        ["Living Legend", "Win a singleplayer campaign on Legendary difficulty."],
        ["Lookout Below!", "Playing as the Lizardmen, recruit a Terradon Riders (Fireleech Bolas) unit."],
        ["Loremaster of Hoeth", "Playing as the High Elves, construct the White Tower of Hoeth."],
        ["Lothern Sea Helm", "Playing as the High Elves, construct the Gates of Lothern in the High Elf capital of Lothern."],
        ["Mage", "Playing as the High Elves, research 25 technologies."],
        ["Magma Master", "Control the Thrice-Cursed Peak, Vaul's Anvil (Caledor), Titan Peak, and the Star Tower."],
        ["Master Diplomat", "Have a trade agreement with 10 other factions at the same time."],
        ["Master of Contagion & Disease", "Playing as the Skaven, have at least 10 Plague Monks within a single army."],
        ["Master of the Seas", "Playing as a Vampire Coast faction, win a singleplayer campaign."],
        ["Merchant", "Have access to at least 8 different tradable resources through production or trade."],
        ["Military Envoy", "Have a military alliance with 5 other factions at the same time."],
        ["Motley Crew", "Playing as the Pirates of Sartosa, recruit 10 units of Sartosa Free Company."],
        ["Necromantic Dominance", "Playing as Vampire Counts, win a singleplayer campaign on Very Hard or Legendary difficulty."],
        ["Neophyte", "Successfully complete a ritual."],
        ["Old One", "Playing as the Lizardmen, win a singleplayer campaign on Very Hard or Legendary difficulty."],
        ["Organ Collector", "Playing as the Tomb Kings, collect 1000 Canopic Jars."],
        ["Origin Unknown", "Construct the Sanctum of Quintex in the Ancient City of Quintex."],
        ["Paragon", "Have a level 30 Lord."],
        ["Parrot Talk", "Playing as a Vampire Coast faction, collect a Piece of Eight."],
        ["Phantasm of the Opera", "Playing as the Drowned, construct the Cylostra's Opera House in Lothern."],
        ["Phoenix King", "Playing as the High Elves, win a singleplayer campaign on Very Hard or Legendary difficulty."],
        ["Phoenix Lord", "Playing as the High Elves, recruit a Frostheart Phoenix."],
        ["Plaguebearer", "Defeat a CA staff member or anyone else with this achievement during a multiplayer battle."],
        ["Power Petitioner", "Have 3 magic weapons or pieces of magic armour."],
        ["Priestly Congregation", "Playing as the Exiles of Nehek, have at least 3 Liche Priests within a single army."],
        ["Realm of the Ruinous", "Playing as the Beastmen, win a singleplayer campaign."],
        ["Reduced to Ashes", "Raze 1 settlement."],
        ["Retainer", "Have 1 level 10 Hero."],
        ["Revered Guardian", "Playing as the Lizardmen, have at least 5 Temple Guard units within a single army."],
        ["Scourge of the Seven Seas", "Playing as a Vampire Coast faction, defeat seven infamous pirates."],
        ["Season of Supremacy", "Playing as Wood Elves, win a singleplayer campaign."],
        ["See What You Did There…", "Playing as the Lizardmen, own at least 3 Scrying Pools."],
        ["See-Nile Crafter", "Playing as the Exiles of Nehek, craft everything within the Mortuary Cult."],
        ["Seer", "Playing as the Dark Elves, research 10 technologies."],
        ["Settra Rules!", "Playing as Khemri, occupy all regions of Nehekhara within the Eye of the Vortex campaign."],
        ["Skaven by Name…", "Playing as the Skaven, own at least 13 Scrap Heaps."],
        ["Skilled Geomancer", "Playing as the Lizardmen, own at least 10 Geomantic Loci."],
        ["Skink Priest Adept", "Playing as the Lizardmen, research 25 technologies."],
        ["Skink Priest Decipherer", "Playing as the Lizardmen, research 50 technologies."],
        ["Skink Priest Initiate", "Playing as the Lizardmen, research 10 technologies."],
        ["Slann Mage-Priest", "Playing as the Lizardmen, win a singleplayer campaign."],
        ["Slave Trader", "Playing as the Dark Elves, own at least 10 Slave Markets."],
        ["Slaver", "Playing as the Dark Elves, own at least 3 Slave Markets."],
        ["Sorceress", "Playing as the Dark Elves, research 25 technologies."],
        ["Soul Eater", "Playing as the Dark Elves, recruit a Cold One Dread Knight unit."],
        ["Spoiling for a Fight", "Play a multiplayer battle."],
        ["Spoils Seeker", "Have 10 magic weapons or pieces of magic armour."],
        ["Stargazer", "Playing as the Lizardmen, construct the Stellar Pyramids of the Southern Skies in Hexoatl."],
        ["Supreme Sorceress", "Playing as the Dark Elves, research 45 technologies."],
        ["Tax Collector", "Have a gross income of 20,000 gold per turn."],
        ["Tax Farmer", "Have a gross income of 60,000 gold per turn."],
        ["Taxman", "Have a gross income of 5000 gold per turn."],
        ["That's a Wrap!", "Playing as the Tomb Kings, recruit a Casket of Souls."],
        ["The Collector", "Have 25 magic weapons or pieces of magic armour."],
        ["The Dark Gods' Playthings", "Playing as Norsca, win a singleplayer campaign."],
        ["The End of Suffering", "Playing as the High Elves, occupy or raze the Dark Elf capital of Naggarond in the Eye of the Vortex Campaign."],
        ["The End Times Approach", "Playing as Warriors of Chaos, win a singleplayer campaign on Very Hard or Legendary difficulty."],
        ["The Forest Whispers My Name", "Control Oreon's Camp and Gaean Vale."],
        ["The Good Old Times", "Win the Mortal Empires singleplayer campaign with a race from the Old World."],
        ["The Menagerist", "Have 3 special mounts."],
        ["The Stuff of Legend", "Win a campaign battle in which you are outnumbered 10-to-1."],
        ["The Treasurer", "Have 25 magic talismans, enchanted or arcane items."],
        ["Thralls of Nagash", "Playing as the Followers of Nagash, have at least 5 Crypt Ghouls within a single army."],
        ["Tiranoc Charioteer", "Playing as the High Elves, construct the Hall of Charioteers in the city of Tor Anroc."],
        ["Tombtastic", "Playing as Khemri, have at least 5 Tomb Guards within a single army."],
        ["Trade Attaché", "Have a trade agreement with 5 other factions at the same time."],
        ["Trader", "Have access to at least 5 different tradable resources through production or trade."],
        ["Treasure Hunter", "Have 3 magic talismans, enchanted or arcane items."],
        ["Tyrant of Naggarond", "Playing as the Dark Elves, construct the Black Tower of Malekith in the Dark Elf capital of Naggarond."],
        ["Tyrant of Tor Anlec", "Playing as the Dark Elves, construct the Black Citadel of Anlec in the city of Tor Anlec."],
        ["Uplink Established", "Playing as the Lizardmen, own at least 2 Geomantic Loci."],
        ["Vanguardian", "With a single Hero, make 100 kills during a battle."],
        ["Verminlord", "Playing as the Skaven, win a singleplayer campaign on Very Hard or Legendary difficulty."],
        ["Veteran", "Have a level 10 Lord."],
        ["Walk Like a Nehekharan", "Playing as the Tomb Kings, win a singleplayer campaign."],
        ["Warlock Engineer", "Playing as the Skaven, research 20 technologies."],
        ["Warlord", "Playing as the Skaven, win a singleplayer campaign."],
        ["Waylayer", "Win 5 ambush battles during a single campaign."],
        ["Witch King", "Playing as the Dark Elves, win a singleplayer campaign on Very Hard or Legendary difficulty."],
        ["X Marks the Spot", "Playing as a Vampire Coast faction, solve a treasure map."],
        ["Yarrrrr!!!", "Control the pirate city of Sartosa."],
        ["Yurrrggghhh!!!", "Control Pox Marsh, the Awakening, and the Blood Swamps."],
    ];

    assert.strictEqual(officialAchievements.length, 152, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});

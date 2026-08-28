import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/age-of-mythology-retold.json - 132 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1934680 (fetched through this app's own services/steamApi.js).
// This game has no hidden achievements: all 132 ship a real, official
// Steam description, quoted verbatim below.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("age-of-mythology-retold");

test("getPlannerData('age-of-mythology-retold') returns real planner data with 132 curated achievements", () => {

    assert.ok(game, "expected real planner data for age-of-mythology-retold");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 132);

});

test("every Age of Mythology: Retold achievement has a unique id from 1 to 132 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 132 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 132);
    assert.strictEqual(new Set(apinames).size, 132);

});

test("every Age of Mythology: Retold achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 132 Age of Mythology: Retold achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const officialAchievements = [
        ["A Blessing Sent From Heaven", "Complete the first mission of the Japanese Campaign."],
        ["A Hero in the Making", "Complete the Tutorial mission."],
        ["A Legendary Rush", "Win a final Boss node in the Gauntlet game mode with 5 different Legends."],
        ["Age against the Machine", "Defeat 100 AI opponents."],
        ["Age of the Goat", "In the ‘Silent Sanctuary’ Mythical Battle, gain 12 Herdables on a single age up."],
        ["Agricultural Revolution", "Win a match with 20 or more farms blessed by Shennong's Prosperous Seeds."],
        ["All Dolled Up", "Equip a badge on your player profile."],
        ["All In", "Win a match without building an additional Village Center or Town Center."],
        ["All Your Base Are Belong to Us", "In scenario 2 of the Chinese Campaign, capture both the Northern and Southern bases."],
        ["And So It Begins", "Complete the first mission of the Fall of the Trident campaign."],
        ["Anger Problems", "Cast the Einheri's 'Horn Blast' ability 20 times in one game session."],
        ["Annihilation", "Defeat 10000 units in battle."],
        ["Anubitten", "Defeat 50 Villagers with Anubites."],
        ["Archaic Shot Put", "Deal over 10000 damage to enemy units and structures with Kuafus."],
        ["Arkantos Ascended", "Complete the Fall of the Trident campaign."],
        ["Auto Everything", "Train 10000 Villagers."],
        ["Bandit Buster", "Rescue the occupied villages in the ‘Silent Sanctuary’ Mythical Battle."],
        ["Battle Bard", "Use Orpheus' 'Bard of Heroes' ability to boost 10 units at once."],
        ["Beast Buffet", "Consume 5 units with a single Taotie."],
        ["Beastly Bulwark", "Absorb 5000 damage with Behemoths."],
        ["Become Immortal", "Complete the first mission of the Chinese Campaign."],
        ["Big Boomer", "Reach the Villager build limit in a match."],
        ["Blessed be the Legend", "Bestow your first Blessing upon your Legend."],
        ["Boxing Match", "Defeat 50 enemy units with Villagers."],
        ["Bringing All Kinds of Hurt", "Add a total of 300 Training Yards or Towers to your Machine Workshops or Military Camps."],
        ["Burn Baby Burn", "In scenario 1 of the Chinese Campaign, Use the Blazing Prairie God Power on the enemy base."],
        ["Bushido Master", "Reach bushido tier 5."],
        ["Care and Calamity", "Heal 10000 HP using Caladrias."],
        ["Centum Centauri", "Defeat 100 units with Centaurs."],
        ["Chiron's Apprentice", "In Fall of the Trident 7. \"More Bandits\", win by only training Centaurs, no other units!"],
        ["Chonkers", "Fully fatten 10 livestock animals in a single match."],
        ["Chosen by the gods", "Bestow 3 Blessings upon your Legend simultaneously."],
        ["Classical Champions", "Unlock Champion units in the Classical age."],
        ["Cleansing Rains", "Use the Rain God Power to clear 100 visible blood pools with a single cast."],
        ["Connoisseur of the Gods", "Win the final Boss node in the Gauntlet game mode with 9 different Major Gods."],
        ["Creating a Masterpiece", "Complete a Wonder."],
        ["Cut Off the Head of the Snake", "In scenario 10 of the Japanese Campaign, defeat Kagemasa without capturing either enemy fortress."],
        ["Cyclopean Masonry", "Build 50 Fortress-like buildings."],
        ["Daily Ritual", "Train 260 Warrior Priests."],
        ["Deicide", "Complete a Large Gateway."],
        ["Demolition", "Destroy 2000 buildings in battle."],
        ["Divine Nourishment", "Devote 260 units to the Gods."],
        ["Don’t Go it Alone", "Join another player in co-op to complete any 3 nodes in the Gauntlet game mode."],
        ["Don't Mess With Me", "Defeat 100 enemy units using Qilins."],
        ["Dreamweaver", "Cause 104 enemy units to sleep with the Lullaby God Power. "],
        ["Eaten Alive", "Eat 104 enemies with the Earth Monster God Power. "],
        ["Embarrassment of Riches", "Acquire 1,000 food and 1,000 wood using Pixius."],
        ["Emergency Response", "In scenario 12 of the Japanese Campaign, reach every village and rescue their people."],
        ["Eternal Reaper", "Respawn a Shinigami at a Goshinboku tree after its first demise"],
        ["Fast Food", "Win a match without building a Farm."],
        ["Feast Denied", "Prevent Cipactli from reaching the 3rd village in 'Endless Hunger'."],
        ["First Blood", "Play a multiplayer match."],
        ["Forged from Clay", "Invoke Creation during the Mythic Age."],
        ["Freyr's Gift", "Complete the Golden Gift campaign."],
        ["Friends in the End", "Win a final Boss node in the Gauntlet game mode with a co-op partner."],
        ["God Tier", "Reach level 99 in the Gauntlet game mode."],
        ["Gods' Favorite", "Bestow 3 divine and/or eternal Blessings upon your Legend simultaneously."],
        ["Godspeed", "Speed up 400 friendly units with the Tailwind God Power."],
        ["Gotta Catch ’Em All", "In Scenario 4 of the Chinese Campaign, free all valley guardians."],
        ["Hades’ Ruin", "Destroy Hades' Town Centers in 'Hells Divided' on Hard or higher difficulty."],
        ["Hearth and Home", "Convert 50 units with the Communal Hearth."],
        ["Herding for Glory", "Fill up a temple with the maximum number of Herdables."],
        ["Hersir, Your Honor", "Win a match as Norse without training Infantry, except Hersirs."],
        ["Honor to Kastor!", "Complete the New Atlantis campaign."],
        ["Hoplite Heresy", "Win a match as Greeks without training Ranged Soldiers or Cavalry."],
        ["Horror Unleashed", "Complete a Titan gate."],
        ["I Believe They Can Fly", "Toss 500 units into the air."],
        ["I Choose Violence", "Use the “Glutton for Chaos” Favor Stash item to start a Chaos Event."],
        ["Imperial Garden", "Invoke Peach Blossom Spring 5 or more times in a single match."],
        ["Into the Mines!", "Complete the first mission of the Golden Gift Campaign."],
        ["Invincible Warlord", "Cast Solar Shield on a Shogun."],
        ["Ironside", "Complete 10 Gateways in a row without losing."],
        ["It Doesn't Look Scratched", "In Scenario 6 of the Chinese Campaign, win with the Pillar remaining at least 60% HP."],
        ["It’s a Trap! ", "Spring 52 Aztec traps on your enemies. "],
        ["It's Over Nine Thousand!", "Inflict 9001 damage with Asuras whilst using their ability."],
        ["Kronos' Telephone Booth", "Time shift 200 buildings."],
        ["Labyrinth Runner", "Complete a Labyrinth on any difficulty in the Gauntlet game mode."],
        ["Legends Assemble!", "Unlock 13 Legends in the Gauntlet game mode."],
        ["Lost Treasure", "In Fall of the Trident 2. \"Consequences\", find the Shipwreck to help boost your economy."],
        ["Lupine Lethality", "Kill 50 cavalry units with Lykaons."],
        ["Migration", "Complete the first mission of the 'Obsidian Mirror' Aztec campaign. "],
        ["Minoan Tennis", "Toss a unit twice within 4 seconds with Minotaurs."],
        ["New World, New Gods", "Complete the first mission of the New Atlantis campaign."],
        ["No Time for Mortals", "Win a match without training any military units aside from Heroes and Myth Units."],
        ["Nomad", "Complete the final Gateway of an episode."],
        ["Norse Space Program", "Use the Mountain Giant's 'Punt' ability."],
        ["Omnivore", "Regenerate 5000 hitpoints using the Colossus' 'Colossal Hunger' ability."],
        ["Osiris Reborn", "Complete the Egyptian portion of the Fall of the Trident campaign."],
        ["Pet of Set", "Deal 2000 damage with Set Animals in a single match."],
        ["Pickup Artist", "Win a match with Replicate mirror image units dealing at least 600 damage."],
        ["Pillar of the Community", "Complete the last mission of the Chinese Campaign."],
        ["Poseidon's Revolt", "Defeat 50 units with Militia."],
        ["Power of the Gods", "Invoke the Bolt God Power on the Manticore in the Tutorial Mission."],
        ["Praise the Sun", "Empower 15 buildings simultaneously."],
        ["Preparation", "In Fall of the Trident mission 1. \"Omens\", train an additional 10 Hoplites and 10 Toxotai."],
        ["Primordial Hunger", "Defeat 400 enemy units with the Cipactli Titan."],
        ["Proven Worthy", "Complete the last mission of the Japanese Campaign."],
        ["Prowl Patrol", "Defeat 100 Villagers with Fenris Wolf Broods."],
        ["Rain of Pain", "Damage 10 enemies simultaneously using Qinglong's Aqua Burst ability."],
        ["Relic Racer", "Get the Relic to Demeter's Temple in 25 min. in the 'Silent Sanctuary' Mythical Battle."],
        ["Return to Sender", "Rescue all captives in ‘Delivery Service’.  "],
        ["Ride of the Valkyries", "Heal 4000 HP with Valkyries."],
        ["Seeing Red", "Use the \"RED TIDE\" cheat code to turn the water red while all blood pack settings are enabled."],
        ["Set the World on Fire", "Invoke Blazing Prairie for the first time."],
        ["Slayer", "Allow your Legend to deal the final blow on 50 enemies."],
        ["Smoke and Mirrors", "Complete the last mission of the Obsidian Mirror Aztec campaign. "],
        ["Surprise!", "Successfully ambush 52 enemies from stealth."],
        ["Ten-Pin Strike", "Launch 10 or more enemy units into the air using Tao Wu’s Rampage ability."],
        ["Terracotta Army", "Summon 25 Terracotta Riders in a single match."],
        ["Terrif-eyeing", "Create over 666 Argus eyes in a single match."],
        ["The One and Oni", "Inflict 1111 damage with a single Oni."],
        ["The Secret Grove", "Find the secret of the forest in the ‘Silent Sanctuary’ Mythical Battle."],
        ["The Ultimate Discount", "Obtain a Sacred gate from another player whilst playing as Susanoo."],
        ["This Is for Chiron", "Complete the Norse portion of the Fall of the Trident campaign."],
        ["Thorium Mining", "Reach the Villager build limit training only Dwarves."],
        ["Three Kingdoms", "Link 3 or more Town Centers in a chain within Favored Land."],
        ["Through Thick and Thin ", "Win an Arena of the Gods mission in co-op."],
        ["Titanic Terror", "Unleash a Greek, an Egyptian, a Norse, and an Atlantean Titan."],
        ["To Hades and Back", "Complete the Greek portion of the Fall of the Trident campaign."],
        ["Traveler", "Complete the final Gateway of a page."],
        ["Typhoon Season!", "Cast Dragon Typhoon 3 times in one game."],
        ["Underdog", "Complete a Large Gateway without any Blessing."],
        ["Veteran", "Complete every Gateway in an episode."],
        ["War Hero", "Complete every Gateway in an episode on Hard."],
        ["We Have Titans at Home", "Summon a Titan from 6 different Pantheons using the Favor Stash."],
        ["Wet Ground", "Reach 250 active visible blood pools during a single game."],
        ["Wheel of Misfortune", "Destroy a building with Wanyudo."],
        ["Wither Wood Chipper", "Destroy 100 trees with the Wither God Power."],
        ["Woodland Whammy", "Hit 20 units at once with the Hamadryad’s ‘Piercing Rootsnare’ ability."],
        ["Wrath of the Gods", "Use 4 God Powers within 30 seconds."],
        ["Xuanyuan Sword", "In Scenario 3 of the Chinese Campaign, find the lost relic in the ruins."],
        ["Zeus Eat Town Center", "Destroy 3 Town Centers with Infantry."],
    ];

    assert.strictEqual(officialAchievements.length, 132, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});

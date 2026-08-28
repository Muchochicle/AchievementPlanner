import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/terraria.json - 137 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 105600 (fetched through this app's own services/steamApi.js) - all
// 137 ship a real, official Steam description. Terraria has no
// Steam-hidden achievements. difficulty/estimatedTime remain curatorial
// judgments, same convention as every other planner difficulty/time
// field in this catalog.
const terraria = getPlannerData("terraria");

test("getPlannerData('terraria') returns real planner data with 137 curated achievements", () => {

    assert.ok(terraria, "expected real planner data for terraria");
    assert.ok(Array.isArray(terraria.achievements));
    assert.strictEqual(terraria.achievements.length, 137);

});

test("every Terraria achievement has a unique id from 1 to 137 and a unique apiname", () => {

    const ids = terraria.achievements.map(a => a.id);
    const apinames = terraria.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 137 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 137);
    assert.strictEqual(new Set(apinames).size, 137);

});

test("every Terraria achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

    for (const achievement of terraria.achievements) {

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

test("every one of the 137 official Terraria achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const officialAchievements = [
        ["Timber!!", "Chop down your first tree."],
        ["No Hobo", "Build a house suitable enough for your first town NPC, such as the guide, to move into."],
        ["Stop! Hammer Time!", "Obtain your first hammer via crafting or otherwise."],
        ["Ooo! Shiny!", "Mine your first nugget of ore with a pickaxe."],
        ["Heart Breaker", "Discover and smash your first heart crystal underground."],
        ["Heavy Metal", "Obtain an anvil made from iron or lead."],
        ["I Am Loot!", "Discover a golden chest underground and take a peek at its contents."],
        ["Star Power", "Craft a mana crystal out of fallen stars, and consume it."],
        ["Hold on Tight!", "Equip your first grappling hook."],
        ["Eye on You", "Defeat the Eye of Cthulhu, an ocular menace who only appears at night."],
        ["Smashing, Poppet!", "Using explosives or your trusty hammer, smash a Shadow Orb or Crimson Heart in the evil parts of your world."],
        ["Worm Fodder", "Defeat the Eater of Worlds, a massive worm whom dwells in the corruption."],
        ["Mastermind", "Defeat the Brain of Cthulhu, an enourmous demon brain which haunts the creeping crimson."],
        ["Where's My Honey?", "Discover a large bee's hive deep in the jungle."],
        ["Sting Operation", "Defeat the Queen Bee, the matriarch of the jungle hives."],
        ["Boned", "Defeat Skeletron, the cursed guardian of the dungeon."],
        ["Dungeon Heist", "Steal a key from the dungeon's undead denizens, and unlock one of their precious golden chests."],
        ["It's Getting Hot in Here", "Spelunk deep enough to reach the molten underworld."],
        ["Miner for Fire", "Craft a molten pickaxe using the hottest of materials."],
        ["Still Hungry", "Defeat the Wall of Flesh, the master and core of the world who arises after a great, burning sacrifice."],
        ["It's Hard!", "Unleash the ancient spirits of light and darkness across your world, enabling much stronger foes and showering the world with dazzling treasures (and rainbows!)."],
        ["Begone, Evil!", "Smash a demon or crimson altar with a powerful, holy hammer."],
        ["Extra Shiny!", "Mine a powerful ore that has been newly blessed upon your world."],
        ["Head in the Clouds", "Equip a pair of wings."],
        ["Like a Boss", "Obtain a boss-summoning item."],
        ["Buckets of Bolts", "Defeat the three nocturnal mechanical menaces: the Twins, the Destroyer, and Skeletron Prime."],
        ["Drax Attax", "Craft a drax or pickaxe axe using hallowed bars, and the souls of the three mechanical bosses."],
        ["Photosynthesis", "Mine chlorophyte, an organic ore found deep among the thickest of flora."],
        ["Get a Life", "Consume a life fruit, which grows in the thick of subterranean jungle grass."],
        ["The Great Southern Plantkill", "Defeat Plantera, the overgrown monstrosity of the jungle's depths."],
        ["Temple Raider", "Breach the impenetrable walls of the jungle temple."],
        ["Lihzahrdian Idol", "Defeat Golem, the stone-faced ritualistic idol of the lihzahrd tribe."],
        ["Robbing the Grave", "Obtain a rare treasure from a difficult monster in the dungeon."],
        ["Big Booty", "Unlock one of the dungeon's large, mysterious chests with a special key."],
        ["Fish Out of Water", "Defeat Duke Fishron, mutant terror of the sea."],
        ["Obsessive Devotion", "Defeat the Ancient Cultist, fanatical leader of the dungeon coven."],
        ["Star Destroyer", "Defeat the four celestial towers of the moon."],
        ["Champion of Terraria", "Defeat the Moon Lord."],
        ["Bloodbath", "Survive a blood moon, a nocturnal event where the rivers run red and monsters swarm aplenty."],
        ["Slippery Shinobi", "Defeat King Slime, the lord of all things slimy."],
        ["Goblin Punter", "Triumph over a goblin invasion, a ragtag regiment of crude, barbaric, pointy-eared warriors and their shadowflame sorcerers."],
        ["Walk the Plank", "Triumph over a pirate invasion, a group of pillagers from the sea out for your booty... and your life!"],
        ["Kill the Sun", "Survive a solar eclipse, a day darker than night filled with creatures of horror."],
        ["Do You Want to Slay a Snowman?", "Triumph over the frost legion, a festive family of maniacal snowman mobsters."],
        ["Tin-Foil Hatter", "Triumph over a martian invasion, when beings from out of this world come to scramble your brains and probe you in uncomfortable places."],
        ["Baleful Harvest", "Reach the 15th wave of a pumpkin moon, where evil lurks among the autumn harvest."],
        ["Ice Scream", "Reach the 15th wave of a frost moon, where the festive season quickly degrades into madness."],
        ["Sticky Situation", "Survive the slime rain, where gelatinous organisms fall from the sky in droves."],
        ["Real Estate Agent", "Have all possible town NPCs living in your world."],
        ["Not the Bees!", "Fire a Bee Gun while wearing a full set of Bee Armor."],
        ["Jeepers Creepers", "Stumble into a spider cavern in the underground."],
        ["Funkytown", "Build or encounter a glowing mushroom field above the surface."],
        ["Into Orbit", "You can only go down from here!"],
        ["Rock Bottom", "The only way is up!"],
        ["Mecha Mayhem", "Do battle against the Twins, the Destroyer, and Skeletron Prime simultaneously and emerge victorious."],
        ["Gelatin World Tour", "Defeat every type of slime there is!"],
        ["Fashion Statement", "Equip armor or vanity clothing in all three social slots."],
        ["Vehicular Manslaughter", "Defeat an enemy by running it over with a minecart."],
        ["Bulldozer", "Destroy a total of 10,000 tiles."],
        ["There are Some Who Call Him...", "Kill Tim."],
        ["Deceiver of Fools", "Kill a nymph."],
        ["Sword of the Hero", "Obtain a Terra Blade, forged from the finest blades of light and darkness."],
        ["Lucky Break", "Survive a long fall with just a sliver of health remaining."],
        ["Throwing Lines", "Throw a yoyo."],
        ["Dye Hard", "Equip a dye in every possible dye slot."],
        ["Sick Throw", "Obtain the Terrarian."],
        ["The Frequent Flyer", "Spend over 1 gold being treated by the nurse."],
        ["The Cavalry", "Equip a mount."],
        ["Completely Awesome", "Obtain a minishark."],
        ["Til Death...", "Kill the groom."],
        ["Archaeologist", "Kill Doctor Bones."],
        ["Pretty in Pink", "Kill pinky."],
        ["Rainbows and Unicorns", "Fire a rainbow gun while riding on a unicorn."],
        ["You and What Army?", "Command nine summoned minions simultaneously."],
        ["Prismancer", "Obtain a rainbow rod."],
        ["It Can Talk?!", "Build a house in a mushroom biome and have the Truffle move in."],
        ["Watch Your Step!", "Become a victim to a nasty underground trap."],
        ["Marathon Medalist", "Travel a total of 26.2 miles on foot."],
        ["Glorious Golden Pole", "Obtain a golden fishing rod."],
        ["Servant-in-Training", "Complete your 1st quest for the angler."],
        ["Good Little Slave", "Complete your 10th quest for the angler."],
        ["Trout Monkey", "Complete your 25th quest for the angler."],
        ["Fast and Fishious", "Complete your 50th quest for the angler."],
        ["Supreme Helper Minion!", "Complete a grand total of 200 quests for the angler."],
        ["Topped Off", "Attain maximum health and mana possible without accessories or buffs."],
        ["Slayer of Worlds", "Defeat every boss in Terraria."],
        ["You Can Do It!", "Survive your character's first full night."],
        ["Matching Attire", "Equip armor in all three armor slots: head, chest, and feet."],
        ["Benched", "Craft your first work bench."],
        ["Fae Flayer", "Defeat the Empress of Light, responsible for all those flashy lights and glitter."],
        ["Just Desserts", "Defeat Queen Slime, giving the coup-de-grace to the sovereign of all that jiggles."],
        ["Don't Dread on Me", "Defeat the Dreadnautilus, murderous mollusk lurking beneath the surface of the sanguine seas."],
        ["Hero of Etheria", "Repel the strongest forces the Old One's Army can muster."],
        ["Infinity +1 Sword", "Obtain the Zenith, the culmination of a journey forged into the ultimate sword."],
        ["Boots of the Hero", "Obtain the Terraspark Boots, forged from the finest boots of fire and ice."],
        ["A Rather Blustery Day", "Fly a kite on a windy day."],
        ["Quiet Neighborhood", "Enter a misty graveyard filled with the surly dead."],
        ["Hot Reels!", "Drop a lure in a pool of lava for a pre-fried haul!"],
        ["Heliophobia", "Trick a gnome into turning into stone!"],
        ["Leading Landlord", "Meet with a tenant who's as happy as they possibly can be!"],
        ["Feeling Petty", "Deliver headpats to the town pet."],
        ["Hey! Listen!", "Encounter a fairy."],
        ["Jolly Jamboree", "What you're celebrating doesn't matter, just throw a party already!"],
        ["Dead Men Tell No Tales", "You were so preoccupied with whether or not you could open the chest that you didn't stop to think if you should."],
        ["An Eye For An Eye", "Defeat Deerclops, the chilly one-eyed monstrosity from a foreign land."],
        ["Feast of Midas", "Obtain Golden Delight, the highest quality meal made from the highest quality . . . ingredients."],
        ["Unusual Survival Strategies", "Delay death from drowning by drinking water. It doesn't make much sense, but you did what you had to do."],
        ["Black Mirror", "Obtain the Cell Phone. You'll never leave home without it again."],
        ["Ankhumulation Complete", "Obtain the Ankh Shield, the finest protection from unpleasant maladies and ailments."],
        ["Torch God", "Invoked the wrath of the God of Torches, and survived long enough to earn its blessing."],
        ["A Rare Realm", "Some very special seeds can lead to unique and rewarding experiences. Can you find one?"],
        ["The Great Slime Mitosis", "Find all of the Slime Pets and have them move in!"],
        ["A Shimmer In The Dark", "Shimmer an item into another item. What other transmutations can you find?"],
        ["And Good Riddance!", "Completely purify all Corruption, Crimson, and Hallow from your world, until the Dryad is satisfied!"],
        ["To Infinity... and Beyond!", "Fly a Kwad Racer into outer space."],
        ["Book Worm", "Catalogue every creature in the world."],
        ["Boulder Lord", "Prove your worth against the Moon Lord's worst."],
        ["Queen Machine", "Defeated the combined form of the 3 mechanical giants."],
        ["Rollin’ In Your Grave", "Take a ride in your final resting place."],
        ["Fear The Sun", "Dawn the garb of a vampire and get a sunburn."],
        ["It’s Shaling Outside", "Survive the dreaded rain of boulders."],
        ["Extra Life", "Die as a hardcore character and survive to tell the tale."],
        ["Grave Mistake", "“Accidentally” kill a friend with your tombstone."],
        ["Spicy Licks", "Jam out on a six stringed instrument."],
        ["Organized Chaos", "Find the ultra rare Rod of Discord."],
        ["On Fleek", "Spot the sun on a “cool” day."],
        ["Fortune Favors the Bould", "Discover a friendly boulder."],
        ["Training Day", "Get your villagers fully combat ready."],
        ["Mini-Me", "Become a Moon Lord impersonator."],
        ["Terrarist", "Scare your villagers with a stink bug sword."],
        ["New Digs", "Give any villager a new look."],
        ["My People Need Me", "Embark on a one way trip into outer space."],
        ["Going Oldschool", "Bring back the original title screen."],
        ["Sea You Later", "Craft the final upgrade to the Cell Phone."],
        ["Trash Compactor", "Research 50% of all items in Journey Mode."],
        ["Conservationist", "Support sustainable logging by planting 100 acorns."],
        ["Interdimensional Recycling", "Give the Dryad a can of Joja Cola."]
    ];

    assert.strictEqual(officialAchievements.length, 137, "sanity check on this test's own reference list");

    const dataPairs = terraria.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});

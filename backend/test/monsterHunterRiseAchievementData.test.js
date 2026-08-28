import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/monster-hunter-rise.json - 100 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1446780 (fetched through this app's own services/steamApi.js).
// This game has no hidden achievements: all 100 ship a real, official
// Steam description, quoted verbatim below.
// difficulty/estimatedTime/missable remain curatorial judgments, the same
// convention as every other planner difficulty/time field in this catalog.
const game = getPlannerData("monster-hunter-rise");

test("getPlannerData('monster-hunter-rise') returns real planner data with 100 curated achievements", () => {

    assert.ok(game, "expected real planner data for monster-hunter-rise");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 100);

});

test("every Monster Hunter Rise achievement has a unique id from 1 to 100 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 100 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 100);
    assert.strictEqual(new Set(apinames).size, 100);

});

test("every Monster Hunter Rise achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 100 Monster Hunter Rise achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const officialAchievements = [
        ["Adept Hunter Certificate", "A souvenir from the Guild for completing many high rank quests."],
        ["Ancestral Blade", "A prize for vanquishing Magnamalo. This blade has led Kamura for generations."],
        ["Anomaly Hunt Gold Trophy", "Awarded for slaying 100 afflicted monsters."],
        ["Anomaly Hunt Silver Trophy", "Awarded for slaying your first afflicted monster."],
        ["Anomaly Research Report", "An extremely detailed report, the result of impressive hard work researching the Anomaly."],
        ["Antique Bookmark", "Awarded for finding many Old Messages. Adorned with a tasteful pattern."],
        ["Apex Shortsword", "Granted for banishing an Apex in the Rampage. Its blade is riddled with battle scars."],
        ["Arena Fighter Certificate", "A souvenir from the Guild for completing many Arena quests."],
        ["Aspiring Hunter Certificate", "A souvenir from the Guild for completing many low rank quests."],
        ["Azure Feather Fountain Pen", "A fountain pen with a blue feather gifted by Fiorayne. Awarded for hunting the Lunagaron."],
        ["Badge of Excellence", "The mark of a peerless hunter, conferred only to those who have earned a lot of awards."],
        ["Bahari's Hand-Wound Birdie", "Bahari's handmade toy that walks when wound up. Proves you frequent the Anomaly Lab."],
        ["Beat-up Construction Kit", "Awarded for unlocking lots of camps. Each of its nicks and grooves tells a story."],
        ["Beloved Bouquet", "Awarded for fulfilling various requests in Kamura and/or Elgado."],
        ["Buddy Whistle", "A simple flute with far-reaching tones. Awarded to those who have found a lot of Recon destinations."],
        ["Calamity Conqueror Scroll", "Received upon defeating Ibushi and Narwa. Depicts the two serpents leading the Rampage."],
        ["Chef's Trusty Tools", "Awarded for helping Yomogi. You can almost hear the Tea Dealers' chanting when looking at it."],
        ["Cohoots' Dresser", "Awarded to connoisseurs of Cohoot outfits. Perfect for storing your avian apparel."],
        ["Colorful Armor Stand", "Awarded for forging many a layered armor. Its variegated hues are simply captivating."],
        ["Comfortable Sandals", "Sandals for exploring. Awarded for talking with lots of people in the Outpost."],
        ["Copal Brooch", "Awarded for completing 50 quests in the Citadel. A charm praying for your good health."],
        ["Copper Ecologist's Award", "Awarded for photographing many Hunting Helpers. Proof you've expanded your hunter horizons."],
        ["Cups of Friendship", "Awarded for deepening bonds with many Followers. Sharing this cup fosters friendship."],
        ["Deft-hand Rod", "Awarded for catching many fish. Feels familiar in your hands. One cast, one catch!"],
        ["Dreadnought Destroyer Plaque", "Awarded for hunting 1,000 large monsters."],
        ["Extravagant Cashbox", "Awarded for earning 1,000,000 zenny. Heavy with impressively intricate goldwork."],
        ["Familiar Construction Kit", "An easy-to-deploy camping kit. Awarded for unlocking a lot of camps in the Jungle and Citadel."],
        ["Fan of Ascendancy", "The mark of a hunter who has attempted some of the toughest quests around—and won."],
        ["Fan of Fading Crimson", "A decorative fan awarded to those who vanquished the crimson-glowing threat to the village."],
        ["Fan of True Ascendancy", "Mark of a hunter who has bested Infernal Springs' most arduous challenges."],
        ["Five-in-One Plaque", "Awarded for hunting 5 monsters in 1 Expedition Tour."],
        ["Flaky Canyne Pie", "A tasty treat for hard-working Canynes. Awarded for teaching your Canyne lots of techniques."],
        ["From Palicoes, with Love", "Awarded for raising various support-type Palicoes to their maximum levels."],
        ["Frozen Lampsquid Earring", "Awarded for completing 50 quests in the Frost Islands. A relic encased in primeval ice."],
        ["Gold Crown Plaque", "Awarded for registering many gold crown-sized monsters."],
        ["Gold Crown Shield", "Awarded for registering almost all gold crown-sized monsters."],
        ["Gold Ecologist's Award", "Awarded for photographing many Endemic Lifeforms. Now you're a Guild-recognized researcher!"],
        ["Golden Spiribug Plate", "Awarded for gathering 1000 Golden and Gilded Spiribugs. Shines much like they do."],
        ["Good Luck Charm", "Proof of having sent the Meowcenaries out on a quest 100 times."],
        ["Gorgeous Helm", "A helm with golden hollows and blue wings. Awarded for forging even more valuable layered armor."],
        ["Great Helmet", "A pretty great winged helmet. Awarded for forging even more valuable weapons and armor."],
        ["Great Wirebug Medal", "Awarded for discovering a lot of Great Wirebug launch points in the Jungle and the Citadel."],
        ["Great Wirebug Plate", "Awarded for discovering many Great Wirebug launch points. Sports a nice relevant design."],
        ["Heliotrope Bracelet", "Awarded for completing 50 quests in the Lava Caverns. Glitters a red-blue mélange."],
        ["Hero's Accolade", "The mark of a great hero, who has acquired a large number of awards."],
        ["Hunter's Bronze Shield", "Awarded for hunting 100 large master rank monsters."],
        ["Hunter's Gold Shield", "Awarded for hunting 1000 large master rank monsters."],
        ["Hunter's Silver Shield", "Awarded for hunting 500 large master rank monsters."],
        ["Hunting Helpers Plate", "Awarded for gathering 500 Hunting Helpers. Features a beautiful depiction of them."],
        ["Immaculate Bookmark", "Awarded for discovering a lot of Old Messages in the Jungle and Citadel. An unspoiled antique."],
        ["Jewelgrass Planter", "Awarded to those who rode various monsters with the power of Morphed Wirebugs."],
        ["Kamura Amulet", "A trinket given to new hunters who have proved themselves capable."],
        ["Kamura Pinwheel", "Awarded for performing 1000 Wiredashes. Spins smoothly in the wind."],
        ["Long-Distance Binoculars", "Binoculars giving a clear view of far-off targets. Awarded to staunch investigators."],
        ["Luxury Armor Stand", "Awarded for forging many valuable weapons and armor. Made from premium materials."],
        ["Maestro's Trusty Tools", "Super popular in the Tea Shop! Awarded for helping make new dango, even in far-off Elgado."],
        ["Majestic Desk Banner", "A desk flag proving the owner's distinguished service. Awarded for slaying Malzeno."],
        ["Master's Black Belt", "Awarded for obtaining many Switch Skills, a feat of both mental and bodily discipline."],
        ["Mini Crown Plaque", "Awarded for registering many miniature crownsized monsters."],
        ["Miniature Crown Shield", "Awarded for registering almost all miniature crown-sized monsters."],
        ["Napping Felyne & Canyne", "Toys of a cuddling Felyne and Canyne. Awarded to avid instructors at the Buddy Dojo."],
        ["Natural Picture Frame", "A smart frame awarded for photographing many creatures in the Citadel and Jungle."],
        ["Painting - Crimson Nightmare", "A depiction of the dreadful Qurio. Awarded for completing numerous Anomaly Quests."],
        ["Painting - Foreign Threads", "Awarded for completing many Follower Quests to mark deep village-Outpost ties."],
        ["Painting - Seicho's Place", "Proof of having completed many Support Surveys. Soar away into a clear blue sky."],
        ["Palamute Gear Tune-up Kit", "Awarded for collecting a lot of Palamute Gear. Daily maintenance is what will make it last!"],
        ["Petalace Arrangement Vase", "Awarded for obtaining many Petalaces. It fills rooms with a delightful floral aroma."],
        ["Polychrome Acorn", "A cute and colorful painted acorn. Awarded for having lots of Buddies with outstanding Skill Memory."],
        ["Prismatic Chalice", "Awarded for completing 50 quests in the Flooded Forest. Was found buried under rubble."],
        ["Rampage Nemesis Certificate", "A souvenir from the Guild for completing many Rampage quests."],
        ["Record of Utmost Valor - Arena", "A souvenir from the Guild for completing even more Arena quests."],
        ["Record of Utmost Valor - Master", "A souvenir from the Guild for completing many Master Rank quests."],
        ["Royal Declaration of Gratitude", "An official thank-you letter. For hunters who contributed greatly to the Kingdom's peace."],
        ["Royal Request for Cooperation", "An official request for Kamura's hunter. Awarded for collaboration with Elgado Outpost."],
        ["Runner's Sandals", "Awarded for talking to many of Kamura's citizens. Feels like walking on a carpet of cloud."],
        ["Sea-Blue Amulet", "Awarded for completing 50 quests in the Jungle. A talisman to protect you on your travels."],
        ["Seasoned Jockey Plaque", "Awarded for riding many different monsters."],
        ["Secret Honey Jar", "Awarded to dango connoisseurs for using many Hopping Skewers. Add honey to sweeten things up!"],
        ["Shabby Canyne Saddle", "Awarded for riding Canynes many times. Worn in odd places from use on countless voyages."],
        ["Shining Surmounter’s Shield", "Awarded for slaying 15 Risen monsters."],
        ["Silver Cactus Ring", "Awarded for completing 50 quests in the Sandy Plains. A peculiar silver cactus ring."],
        ["Silver Ecologist's Award", "Awarded by one enthusiastic researcher for photographing many Rare Creature."],
        ["Smithy's Custom-made Gloves", "Awarded for Augmenting many weapons via Qurious Crafting. Specially developed to handle dangerous afflicted materials."],
        ["Smithy's Tools of the Trade", "Awarded for Augmenting a lot of armor via Qurious Crafting. These tools can work even the most brittle of materials."],
        ["Snowy Cohoot Mini-Pouch", "Awarded for befriending a fledgling Snowy Cohoot from Elgado. Looks tiny, but has a big appetite."],
        ["Sojourn Necklace", "A necklace that ended up with your Buddy. Awarded for trading with Letters of Introduction."],
        ["Solid Padlock", "Awarded for collecting even more trinkets and wall hangings. Won't budge, no matter what."],
        ["Spiritwood Necklace", "Awarded for completing 50 quests in the Shrine Ruins. Made from Spiritwood branches."],
        ["Sturdy Padlock", "Awarded for collecting many decorations and hanging scrolls. Remember to lock up!"],
        ["Surmounter’s Slaying Shield", "Awarded for slaying your first Risen monster."],
        ["Survey Cape", "Protects the wearer from the harshest environments. Awarded for hunting the Garangolm."],
        ["Tempestuous Triumph Scroll", "A hanging scroll from Master Hojo, depicting your victory over Wind Serpent Ibushi."],
        ["Thank-mew Letter", "Awarded for hiring 50 Buddies. We a-purr-eciate your fur-iendly patronage!"],
        ["Transcender's Red Sash", "Its refinement exceeds human capability. Awarded for obtaining even more Switch Skills."],
        ["Unbreakable Bag", "Wow! A whole bag awarded for obtaining samples of items from all over the place."],
        ["Vermilion Amber Essence", "Awarded only to those who have completed tasks designated by the Research Lab to be the most difficult."],
        ["Well-done Grillmeister", "Awarded for cooking a welldone steak 30 times. Good job, and well done!"],
        ["Well-worn Cashbox", "Awarded for accumulating 100,000 Kamura Points. Gleams with polish despite great use."],
        ["Windbreaker Scarf", "Ignore wind as you whip through the world. Awarded for performing many Switch Skill Swaps."],
        ["Wreath of Honor", "A wreath received from the villagers as thanks for taking on their many requests."],
    ];

    assert.strictEqual(officialAchievements.length, 100, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});

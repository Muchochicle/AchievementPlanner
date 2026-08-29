import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/backpack-battles.json - 230 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 2427700 (fetched through this app's own services/steamApi.js).
// This game has no hidden achievements: all 230 ship a real, official
// Steam description, quoted verbatim below.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("backpack-battles");

test("getPlannerData('backpack-battles') returns real planner data with 230 curated achievements", () => {

    assert.ok(game, "expected real planner data for backpack-battles");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 230);

});

test("every Backpack Battles achievement has a unique id from 1 to 230 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 230 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 230);
    assert.strictEqual(new Set(apinames).size, 230);

});

test("every Backpack Battles achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 230 Backpack Battles achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const officialAchievements = [
        ["A Bad Influence", "Craft a Corrupted Armor"],
        ["A Bit Uncomfortable", "Craft Stone Shoes"],
        ["A good engagement ring (with the right stats)", "Craft a Superior Ring"],
        ["A Good Old Physical Barrier", "Craft a Spiked Wall"],
        ["A Massive B", "Craft an Impractically Large Bloodthorne"],
        ["A Rare Breed", "Craft an Ice Dragon"],
        ["A Symbol of Great Eyesight", "Craft a Carrot Goobert"],
        ["A Taste For Blood", "Craft a Blood Goobert"],
        ["A toast to toast!", "Craft a Slice of Toast"],
        ["A True Hero", "Craft a Hero Sword"],
        ["A Valued Customer", "Craft a Platinum Customer Card"],
        ["All the lumens!", "Craft an Electric Torch"],
        ["All the vitamin K!", "Craft a Broccotree"],
        ["Alternative Crossblades", "Craft Scissorswords"],
        ["Am I a Ninja Now?", "Craft a Katana"],
        ["Amulet Addict", "Win a fight with 5 identified amulets"],
        ["An Even Truer Hero!", "Craft a Hero Longsword"],
        ["And It's Gone", "Reroll away a skill or subclass"],
        ["Archmage", "Win a fight with 8 Magic items"],
        ["At Least He Likes It", "Craft a Poison Goobert"],
        ["Azor Ahoi?", "Craft a Burning Blade"],
        ["B-B-B-BROCCOLIENERGY!", "Craft Rainbow Goobert Gigabrocolomega"],
        ["Bad For the Neck", "Craft a Stone Helm"],
        ["Bananarang!", "Craft a Boomerang"],
        ["Barbecue Season", "Craft a Burning Coal"],
        ["Behold, Falcons May Wield This.", "Craft a Falcon Blade"],
        ["Better Whetter", "Craft an Improved Whetstone"],
        ["Bibidi Babedi Boo - Goo!", "Craft Rainbow Goobert Omnicolor Sugargoo"],
        ["Big Pockets", "Have 30 gold at once"],
        ["Big Red Number", "Crit for more than 300 damage"],
        ["Biting Cold", "Craft a Frostbite"],
        ["Bloodsucker", "Win a fight with 8 Vampiric items"],
        ["Bluberry Smoothie", "Craft a Strong Mana Potion"],
        ["Blueberry Juice", "Craft a Mana Potion"],
        ["Bow To The King", "Craft a King Goobert"],
        ["Buff", "End a fight with 100 buffs"],
        ["Burn! Burn Everything!", "Survive as Pyromancer"],
        ["Buy Me More Jewelery", "Win a fight with 10 Gemstones"],
        ["By the Power of the Cupcake!", "Craft a Cupcake Staff"],
        ["By the Power of the Moon!", "Craft a Moon Armor"],
        ["Can I Eat It? Can It Eat Me?", "Craft a Red Orchid Collar"],
        ["Can Touch, Will Hurt.", "Craft a Spiked Shield"],
        ["Catch 'em All!", "Win a fight with items from 4 different classes"],
        ["Caw!", "Craft a Crow"],
        ["Cheesy", "Craft a Cheese Goobert"],
        ["Chili-flavored Rainbow", "Craft Rainbow Goobert Epicglob Uberviscous"],
        ["Close One!", "End a fight with 1 health"],
        ["Coal on a Stick", "Craft a Torch"],
        ["Completely AutoNOM", "Craft an Eat-o-matic"],
        ["Cross the Blades!", "Craft Crossblades"],
        ["Delicious Prismacrust", "Craft Rainbow Goobert Fluffyloaf Prismacrust"],
        ["Dicemaster", "Play 50 games with a random character"],
        ["Do Not Divide by this Blade", "Craft a Null Blade"],
        ["Do you...smell that?", "Craft a Poison Grenade"],
        ["Does It Bleed?", "Craft a Bloody Dagger"],
        ["Don't Hurry, Be Happy", "Craft Shelly"],
        ["Doubleburn? Secondary Scorch? Twinferno?", "Craft a Blazing Spear"],
        ["Dubious Vines", "Craft Bloodthorne"],
        ["Eater of Souls", "Craft a War Scythe"],
        ["Electrolytes!", "Craft a Thornbloom"],
        ["Endless Riches", "Craft a Box of Prosperity"],
        ["Energy, the source of my power!", "Craft a Generator"],
        ["Enter Hyper-Hedgehog Form!", "Craft a Hyper Hedgehog"],
        ["Ethically Sourced Dragon Skin", "Craft a Dragonscale Armor"],
        ["Even the Bow is Poisonous", "Craft Belladonna's Whisper"],
        ["Family Treasure", "Craft a Chain Whip"],
        ["Fancy Blue Light", "Craft a Magic Torch"],
        ["Faster Than Expected, But Still Slow", "Craft a Turbo-Shelly"],
        ["Filthspewer 2000", "Craft Belladonna's Shade"],
        ["FIREBALL!", "Craft a Staff of Fire"],
        ["For the Trees!", "Survive as Ranger"],
        ["Gigacharged", "Emit 10 charges in a single fight"],
        ["Give Me Everything", "Empty the whole shelf"],
        ["Give me Your Strongest Potion!", "Craft a Strong Health Potion"],
        ["Go Berserk!", "Survive as Berserker"],
        ["Good 'ol axe on a stick", "Craft a Halberd"],
        ["Hah! The toast is a lie!", "Craft a Con-Trap-Tron"],
        ["Hard Skin, Soft Heart", "Craft a Panzer Dragon"],
        ["He looks so healthy.", "Craft a Broccoli Goobert"],
        ["Hermes", "Craft Winged Boots"],
        ["Heroic Protection", "Craft a Hero Shield"],
        ["Hey Lady, Your Greatsword is Melting", "Craft a Molten Greatsword"],
        ["Hey Lily", "Craft a White Lily Collar"],
        ["Hey, My Sword...!", "Craft a Steel Goobert"],
        ["Hey, those cost money!", "Destroy something in the shop."],
        ["Hit 'em again!", "Craft Fortuna's Grace"],
        ["Holds Everything! (Conditions Apply)", "Craft a Holdall"],
        ["Holy Drinking", "Craft a Strong Divine Potion"],
        ["Honk!", "Go out of stamina 10 times during a single fight"],
        ["Hungry Hungry Sphere", "Craft a Devouring Sphere"],
        ["I Am Cooking", "Win a fight with 8 Foods"],
        ["I Bet You Feel Cool Now", "Craft a Snow Stick"],
        ["I Bring Pandamonium!", "Craft a Pandamonium"],
        ["I Built You!", "Craft a Stone Golem"],
        ["I can fix that", "Craft a Wrench"],
        ["I Dig It!", "Craft a Shovel"],
        ["I Have Friends!", "Start a lobby match"],
        ["I love you too, shield!", "Craft a Heart Shield"],
        ["I Totally Work Here", "Craft an Employee Uniform"],
        ["I'm a Wizard!", "Craft a Magic Staff"],
        ["I'm Not a Cat, I'm a Wolverine!", "Craft Claws of Attack"],
        ["I'm the Library!", "Win a fight using 4 different types of Books"],
        ["Icy Vegetation", "Craft an Ice Flower"],
        ["Impressive But Impractical", "Craft a Gold Armor"],
        ["Intimidation Tactics", "Craft a Busted Blade"],
        ["It Burns Twice", "Craft a Chili Goobert"],
        ["It Loves the Shade", "Craft a Death Lotus"],
        ["It seems Fine Tho.", "Craft a Heart of Darkness"],
        ["It's Cozy Up There", "Craft a Jynx Staff"],
        ["It's Drippin'!", "Craft a Molten Spear"],
        ["It's So Heavy", "Craft a Stone Armor"],
        ["It's Time For a C-C-C-Cardgame!", "Win a fight with a Card chain of at least length 8"],
        ["Join the Dark Side!", "Craft a Darksaber"],
        ["Just Stylish", "Craft Dragonskin Boots"],
        ["Keeping It Cool", "Craft an Ice Armor"],
        ["Let Your Anger Out", "Craft Dragon Claws"],
        ["Let's Go Clubbing", "Craft a Spiked Staff"],
        ["Let's Go On an Adventure!", "Survive as Adventurer"],
        ["Like love, but the other way around.", "Craft a Staff of Unhealing"],
        ["Lizard Friend", "Craft an Obsidian Dragon"],
        ["Lord Ribbiton of Schwamp", "Craft a Frog Prince"],
        ["Magical Gal", "Craft a Prismatic Wand"],
        ["Mana for everybody!", "Craft Arcane Boots"],
        ["Mana Hydraulics", "Craft a Magitecc Armor"],
        ["Manananananananananananananananana", "Craft a Mananana"],
        ["Manazort Combine!!!", "Craft an Automanaton"],
        ["Marvelous Creature", "Craft a Paradise Birb"],
        ["Massive Brainacle", "Craft a Cap of Brilliance"],
        ["May Nibble You", "Craft a Vampiric Armor"],
        ["Mirror Mirror on the Wall", "Craft a Cold Mirror"],
        ["Mix between cop-robot and man-bat.", "Craft a Mecha Bat"],
        ["Most Heroic Banana Juice", "Craft a Strong Heroic Potion"],
        ["Mother of Dragons", "Win a fight with 4 different Dragons"],
        ["Multiwielding", "Win a fight with 4 Weapons that use stamina"],
        ["My Little Cupcake", "Craft a Cupcake Goobert"],
        ["My Lucky Bow", "Craft Fortuna's Hope"],
        ["My Lucky Charm", "Craft a Lucky Piggy"],
        ["My Treasure", "Buy a Treasure item"],
        ["Natural Defense", "Craft a Pine Protector"],
        ["Never Sits Right", "Craft a Cap of Discomfort"],
        ["Never Taste It.", "Craft a Doom Cap"],
        ["Never Trust It", "Craft a Flame Whip"],
        ["Nice Goobs!", "Craft Rainbow Goobert Megasludge Alphapuddle"],
        ["Not Actually From the Moon", "Craft a Moon Shield"],
        ["Not for Breakfast", "Craft a Toast Goobert"],
        ["Now Even Worse!", "Craft a Strong Demonic Flask"],
        ["Now New, With All the Colors!", "Craft a Prismatic Sword"],
        ["Oh Blazing Beak!", "Craft an Enraged Phoenix"],
        ["Oh, My Dagger Rang", "Craft a Daggerang"],
        ["One With the Woods", "Craft a Forest Dragon"],
        ["Only Looky, No Licky", "Craft a Poison Frog"],
        ["Overflowing", "Have 30 items in the storage at once"],
        ["Pacifist", "Win a fight without a weapon"],
        ["Perfection", "Survive with 5 tries left"],
        ["Pig Farmer", "Win a fight with 5 Piggies"],
        ["Piggy Smash!", "Craft a Bunch of Coins"],
        ["Plaguebringer", "End a fight with 100 debuffs on your opponent"],
        ["Poke it -> Die", "Craft a Wand of Dissonance"],
        ["Post Match Analysis", "Play a history match"],
        ["Potential energy is the best energy", "Craft a Spring Loader"],
        ["Potion Master", "Win a fight using 6 Potions"],
        ["Praise Shell!", "Craft a Shell Totem"],
        ["Pray to the Spear", "Craft a Holy Spear"],
        ["Protected Pupper!", "Craft an Armored Wisdom Puppy"],
        ["Puppy Power!", "Craft an Armored Power Puppy"],
        ["Pure Steelyness!", "Craft an Essence of Steel"],
        ["Quick, use Thunderthingy!", "Craft a Thunder Drake"],
        ["Rainbow Rage!", "Craft Rainbow Goobert Deathslushy Mansquisher"],
        ["Rawr!", "Win a fight with 8 items improving Battle Rage"],
        ["Ready for Barking!", "Craft an Armored Courage Puppy"],
        ["Reset", "Recombobulate 8 items at once"],
        ["Roped Into Something", "Craft a Rope"],
        ["Rushdown", "Win a fight in less than 3 seconds"],
        ["S.I.T. routine enabled!", "Craft a Shovel-B01 3000"],
        ["Sale!", "Have 5 items on sale at the same time"],
        ["Senior Sand", "Craft Sir Sand"],
        ["Sheep Unite!", "Craft a Shepherd’s Crook"],
        ["Shiny Plate", "Craft a Sun Shield"],
        ["Shiny Shiny", "Craft a Lantern Berry"],
        ["Shiny Slimy", "Craft a Light Goobert"],
        ["Shoot With Caution", "Craft a Tusk Poker"],
        ["Shootin' Thornies", "Craft a Tusk Piercer"],
        ["Shopping Addict", "Buy 10000 items"],
        ["Shopping Spree", "Buy 1000 items"],
        ["Sip From the Mana Fountain", "Craft a Manathirst"],
        ["Sliding Defense", "Craft a Frozen Buckler"],
        ["Smells Like Iron", "Craft a Strong Vampiric Potion"],
        ["Snekk Stick", "Craft a Serpent Staff"],
        ["Solvent Swine", "Craft a Piggy of Riches"],
        ["Someone Said Vegetable Soup?", "Craft a Rat Chef"],
        ["Souped up and ready to go!", "Craft a Boiling Pot"],
        ["Staring Contest", "Win a fight after 45 seconds"],
        ["Stylish", "Unlock an outfit in the wardrobe"],
        ["Sugarbreath!!", "Craft a Cupdrake"],
        ["Summon the Spirits of Crit", "Craft a Critwood Staff"],
        ["Sun Protection", "Craft a Sun Armor"],
        ["Taste the Rainbow!", "Craft Rainbow Goobert Omegaooze Primeslime"],
        ["Tastes Like Tomato", "Craft a Vampiric Potion"],
        ["That Might Be Poisonous", "Survive as Reaper"],
        ["That Was Magical!", "Survive as Mage"],
        ["That's Great Sage", "Craft a Blue Sage Collar"],
        ["The Bringer of Ick", "Craft a Poison Dagger"],
        ["The Buttercutter", "Craft a Molten Dagger"],
        ["The Coolest", "Craft a Snowmaster"],
        ["The King of the Kitchen", "Craft an Eggscalibur"],
        ["The Longest Spear (Allegedly)", "Craft a Very Long Spear"],
        ["The Powerful Dragon Knight", "Craft a Dragon Knight"],
        ["Thor, the God of Bonking", "Craft Thor’s Hammer"],
        ["Throws everything", "Craft a Stuff-Throwinator"],
        ["Train Your Arms", "Craft Gloves of Power"],
        ["Treasure Hunter", "Win a fight with 3 Treasure items"],
        ["Tripple Bow Technique", "Win a fight using 3 different Bows"],
        ["Trust me, I'm an engineer!", "Survive as Engineer"],
        ["Turning Into Stone Can Be a Good Thing", "Craft a Strong Stone Skin Potion"],
        ["Twice the Axe", "Craft a Double Axe"],
        ["Untouchable", "End a fight with full health"],
        ["Uuuuh, Spooky Ghostly Dagger Thingy.", "Craft a Spectral Dagger"],
        ["Venomous Poker", "Craft a Poison Spear"],
        ["Warm Hands", "Craft a Burning Sword"],
        ["We Call Him Robby.", "Craft a Squirrel Archer"],
        ["What a Massive... Surprise!", "Craft a Ruby Chonk"],
        ["Who SAW that coming?", "Craft a Chainsaw"],
        ["Whoa, Portable Fire!", "Craft a Burning Torch"],
        ["With Even More Toxins!", "Craft a Strong Pestilence Flask"],
        ["You Are The King?", "Craft a King Crown"],
        ["You Are Winner", "Win 10000 trophies"],
        ["You'll Get It Some Day", "Reserve an item for 3 rounds"],
        ["Your defense is garlacking.", "Craft Stankus’ Toothpick"],
        ["Your Hands Feel Cold...", "Craft Vampiric Gloves"],
        ["Zap! Zap! ZOP!", "Craft a Lightning Staff"],
    ];

    assert.strictEqual(officialAchievements.length, 230, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});

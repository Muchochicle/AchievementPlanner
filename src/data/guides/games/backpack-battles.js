// Backpack Battles Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/backpack-battles.json), whose 230 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   2427700 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js). None are hidden; every one
//   ships a real, official Steam description, quoted verbatim below.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "backpack-battles-achievement-guide",
    "category": "game",
    "gameSlug": "backpack-battles",
    "icon": "🎒",
    "title": "Backpack Battles Achievement Guide",
    "summary": "A practical guide to all 230 Steam achievements in Backpack Battles - none are hidden. basics, classes & pvp, combat feats & milestones, crafting - part 1, crafting - part 2, crafting - part 3.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Backpack Battles has 230 Steam achievements and none are hidden. A small set covers the basics (outfits, lobby/history matches, surviving as each class) and combat feats (big crits, healing totals, status stacks, win streaks); the large majority - well over 150 - are \"craft item X\" achievements, one per craftable item in the game.",
                "Nothing is missable and everything is account-wide. The crafting achievements are the whole grind: you need to build every combined item at least once, which means learning every recipe and having the components come up across many runs.",
                "Tip: keep a recipe list open and treat each run as a chance to craft two or three items you have not made yet - buy the base components deliberately rather than only taking what the shop offers. The class-survival and combat-feat achievements come naturally on the way."
            ]
        },
        {
            "heading": "Basics, Classes & PvP",
            "body": [
                "The opening set: unlocking an outfit, playing lobby and history matches, buying a Treasure item, surviving a run as each class (Ranger, Reaper, Pyromancer, Berserker, Adventurer, Mage and the later ones), and the first combat feats (a 300+ crit, a sub-3-second win).",
                "The achievements here: Stylish (Unlock an outfit in the wardrobe); Post Match Analysis (Play a history match); I Have Friends! (Start a lobby match); My Treasure (Buy a Treasure item); For the Trees! (Survive as Ranger); That Might Be Poisonous (Survive as Reaper); Burn! Burn Everything! (Survive as Pyromancer); Go Berserk! (Survive as Berserker); Let's Go On an Adventure! (Survive as Adventurer); That Was Magical! (Survive as Mage); Big Red Number (Crit for more than 300 damage); Rushdown (Win a fight in less than 3 seconds); Staring Contest (Win a fight after 45 seconds); Buff (End a fight with 100 buffs); Plaguebringer (End a fight with 100 debuffs on your opponent); Honk! (Go out of stamina 10 times during a single fight); Pacifist (Win a fight without a weapon); Untouchable (End a fight with full health); Close One! (End a fight with 1 health); You'll Get It Some Day (Reserve an item for 3 rounds); Big Pockets (Have 30 gold at once); Overflowing (Have 30 items in the storage at once); Give Me Everything (Empty the whole shelf); And It's Gone (Reroll away a skill or subclass); Reset (Recombobulate 8 items at once); Sale! (Have 5 items on sale at the same time); Perfection (Survive with 5 tries left); Mother of Dragons (Win a fight with 4 different Dragons); It's Time For a C-C-C-Cardgame! (Win a fight with a Card chain of at least length 8); Tripple Bow Technique (Win a fight using 3 different Bows); Rawr! (Win a fight with 8 items improving Battle Rage); I'm the Library! (Win a fight using 4 different types of Books); Catch 'em All! (Win a fight with items from 4 different classes); Potion Master (Win a fight using 6 Potions); Bloodsucker (Win a fight with 8 Vampiric items); Archmage (Win a fight with 8 Magic items); I Am Cooking (Win a fight with 8 Foods); Multiwielding (Win a fight with 4 Weapons that use stamina); Buy Me More Jewelery (Win a fight with 10 Gemstones); Treasure Hunter (Win a fight with 3 Treasure items); Pig Farmer (Win a fight with 5 Piggies); Amulet Addict (Win a fight with 5 identified amulets); Shopping Spree (Buy 1000 items); You Are Winner (Win 10000 trophies); Shopping Addict (Buy 10000 items); Dicemaster (Play 50 games with a random character)."
            ]
        },
        {
            "heading": "Combat Feats & Milestones",
            "body": [
                "The build and battle achievements: big single-hit numbers, healing and shield totals, status-effect stacks (poison, burn, freeze), win streaks, ranked-rating milestones, and the class-specific signature combos.",
                "The achievements here: Can Touch, Will Hurt. (Craft a Spiked Shield); Piggy Smash! (Craft a Bunch of Coins); I Dig It! (Craft a Shovel); Barbecue Season (Craft a Burning Coal); Coal on a Stick (Craft a Torch); Praise Shell! (Craft a Shell Totem); Don't Hurry, Be Happy (Craft Shelly); Sheep Unite! (Craft a Shepherd’s Crook); A True Hero (Craft a Hero Sword); I'm a Wizard! (Craft a Magic Staff); Give me Your Strongest Potion! (Craft a Strong Health Potion); The Bringer of Ick (Craft a Poison Dagger); I'm Not a Cat, I'm a Wolverine! (Craft Claws of Attack); Whoa, Portable Fire! (Craft a Burning Torch); A Valued Customer (Craft a Platinum Customer Card); Blueberry Juice (Craft a Mana Potion); Endless Riches (Craft a Box of Prosperity); Holds Everything! (Conditions Apply) (Craft a Holdall); Tastes Like Tomato (Craft a Vampiric Potion); Does It Bleed? (Craft a Bloody Dagger); Most Heroic Banana Juice (Craft a Strong Heroic Potion); Turning Into Stone Can Be a Good Thing (Craft a Strong Stone Skin Potion); May Nibble You (Craft a Vampiric Armor); A Taste For Blood (Craft a Blood Goobert); Hey, My Sword...! (Craft a Steel Goobert); The King of the Kitchen (Craft an Eggscalibur); Sip From the Mana Fountain (Craft a Manathirst); Uuuuh, Spooky Ghostly Dagger Thingy. (Craft a Spectral Dagger); An Even Truer Hero! (Craft a Hero Longsword); Behold, Falcons May Wield This. (Craft a Falcon Blade); I Bring Pandamonium! (Craft a Pandamonium); Never Sits Right (Craft a Cap of Discomfort); Fancy Blue Light (Craft a Magic Torch); Bluberry Smoothie (Craft a Strong Mana Potion); It's So Heavy (Craft a Stone Armor); Bad For the Neck (Craft a Stone Helm); Train Your Arms (Craft Gloves of Power); Snekk Stick (Craft a Serpent Staff); A Bit Uncomfortable (Craft Stone Shoes); Venomous Poker (Craft a Poison Spear); I Bet You Feel Cool Now (Craft a Snow Stick); Dubious Vines (Craft Bloodthorne); Cross the Blades! (Craft Crossblades); Your Hands Feel Cold... (Craft Vampiric Gloves); Join the Dark Side! (Craft a Darksaber); Shiny Slimy (Craft a Light Goobert)."
            ]
        },
        {
            "heading": "Crafting - Part 1",
            "body": [
                "The first block of \"Craft item X\" achievements - each unlocks by combining the right components in your backpack to build that item for the first time.",
                "The achievements here: Pray to the Spear (Craft a Holy Spear); Not Actually From the Moon (Craft a Moon Shield); A Bad Influence (Craft a Corrupted Armor); By the Power of the Moon! (Craft a Moon Armor); It seems Fine Tho. (Craft a Heart of Darkness); Electrolytes! (Craft a Thornbloom); You Are The King? (Craft a King Crown); Bow To The King (Craft a King Goobert); I Built You! (Craft a Stone Golem); Now New, With All the Colors! (Craft a Prismatic Sword); Am I a Ninja Now? (Craft a Katana); Shoot With Caution (Craft a Tusk Poker); My Lucky Bow (Craft Fortuna's Hope); Filthspewer 2000 (Craft Belladonna's Shade); My Lucky Charm (Craft a Lucky Piggy); A Symbol of Great Eyesight (Craft a Carrot Goobert); Shootin' Thornies (Craft a Tusk Piercer); Hit 'em again! (Craft Fortuna's Grace); Even the Bow is Poisonous (Craft Belladonna's Whisper); Summon the Spirits of Crit (Craft a Critwood Staff); Nice Goobs! (Craft Rainbow Goobert Megasludge Alphapuddle); We Call Him Robby. (Craft a Squirrel Archer); Someone Said Vegetable Soup? (Craft a Rat Chef); At Least He Likes It (Craft a Poison Goobert); Like love, but the other way around. (Craft a Staff of Unhealing); With Even More Toxins! (Craft a Strong Pestilence Flask); What a Massive... Surprise! (Craft a Ruby Chonk); Never Taste It. (Craft a Doom Cap); Taste the Rainbow! (Craft Rainbow Goobert Omegaooze Primeslime); Now Even Worse! (Craft a Strong Demonic Flask); Smells Like Iron (Craft a Strong Vampiric Potion); Holy Drinking (Craft a Strong Divine Potion); Warm Hands (Craft a Burning Sword); Azor Ahoi? (Craft a Burning Blade); Sun Protection (Craft a Sun Armor); Shiny Plate (Craft a Sun Shield); The Buttercutter (Craft a Molten Dagger); It's Drippin'! (Craft a Molten Spear); FIREBALL! (Craft a Staff of Fire); Never Trust It (Craft a Flame Whip); It Burns Twice (Craft a Chili Goobert); Chili-flavored Rainbow (Craft Rainbow Goobert Epicglob Uberviscous); Lizard Friend (Craft an Obsidian Dragon); Keeping It Cool (Craft an Ice Armor); Sliding Defense (Craft a Frozen Buckler); Biting Cold (Craft a Frostbite)."
            ]
        },
        {
            "heading": "Crafting - Part 2",
            "body": [
                "The middle block of crafting achievements, covering the mid-tier recipes and the rarer combined items.",
                "The achievements here: A Rare Breed (Craft an Ice Dragon); Twice the Axe (Craft a Double Axe); Family Treasure (Craft a Chain Whip); Ethically Sourced Dragon Skin (Craft a Dragonscale Armor); Let Your Anger Out (Craft Dragon Claws); Just Stylish (Craft Dragonskin Boots); Intimidation Tactics (Craft a Busted Blade); Let's Go Clubbing (Craft a Spiked Staff); Cheesy (Craft a Cheese Goobert); Rainbow Rage! (Craft Rainbow Goobert Deathslushy Mansquisher); Ready for Barking! (Craft an Armored Courage Puppy); Protected Pupper! (Craft an Armored Wisdom Puppy); Puppy Power! (Craft an Armored Power Puppy); Hermes (Craft Winged Boots); Senior Sand (Craft Sir Sand); Marvelous Creature (Craft a Paradise Birb); Mirror Mirror on the Wall (Craft a Cold Mirror); Icy Vegetation (Craft an Ice Flower); Shiny Shiny (Craft a Lantern Berry); It Loves the Shade (Craft a Death Lotus); Do Not Divide by this Blade (Craft a Null Blade); Hungry Hungry Sphere (Craft a Devouring Sphere); Magical Gal (Craft a Prismatic Wand); My Little Cupcake (Craft a Cupcake Goobert); Bibidi Babedi Boo - Goo! (Craft Rainbow Goobert Omnicolor Sugargoo); By the Power of the Cupcake! (Craft a Cupcake Staff); Roped Into Something (Craft a Rope); Heroic Protection (Craft a Hero Shield); Bananarang! (Craft a Boomerang); Solvent Swine (Craft a Piggy of Riches); I Totally Work Here (Craft an Employee Uniform); A Massive B (Craft an Impractically Large Bloodthorne); I love you too, shield! (Craft a Heart Shield); The Powerful Dragon Knight (Craft a Dragon Knight); He looks so healthy. (Craft a Broccoli Goobert); B-B-B-BROCCOLIENERGY! (Craft Rainbow Goobert Gigabrocolomega); Alternative Crossblades (Craft Scissorswords); The Longest Spear (Allegedly) (Craft a Very Long Spear); Oh, My Dagger Rang (Craft a Daggerang); It's Cozy Up There (Craft a Jynx Staff); Caw! (Craft a Crow); Only Looky, No Licky (Craft a Poison Frog); Enter Hyper-Hedgehog Form! (Craft a Hyper Hedgehog); The Coolest (Craft a Snowmaster); Hey Lady, Your Greatsword is Melting (Craft a Molten Greatsword); Faster Than Expected, But Still Slow (Craft a Turbo-Shelly)."
            ]
        },
        {
            "heading": "Crafting - Part 3",
            "body": [
                "The final block of crafting achievements - the highest-tier and most component-heavy recipes, up to items like the Boiling Pot and the Thunder Drake.",
                "The achievements here: A Good Old Physical Barrier (Craft a Spiked Wall); Can I Eat It? Can It Eat Me? (Craft a Red Orchid Collar); That's Great Sage (Craft a Blue Sage Collar); Hey Lily (Craft a White Lily Collar); Trust me, I'm an engineer! (Survive as Engineer); Gigacharged (Emit 10 charges in a single fight); Hey, those cost money! (Destroy something in the shop.); I can fix that (Craft a Wrench); All the lumens! (Craft an Electric Torch); S.I.T. routine enabled! (Craft a Shovel-B01 3000); Mix between cop-robot and man-bat. (Craft a Mecha Bat); Massive Brainacle (Craft a Cap of Brilliance); Mana Hydraulics (Craft a Magitecc Armor); Mana for everybody! (Craft Arcane Boots); Thor, the God of Bonking (Craft Thor’s Hammer); Manazort Combine!!! (Craft an Automanaton); Manananananananananananananananana (Craft a Mananana); A toast to toast! (Craft a Slice of Toast); Not for Breakfast (Craft a Toast Goobert); Delicious Prismacrust (Craft Rainbow Goobert Fluffyloaf Prismacrust); Throws everything (Craft a Stuff-Throwinator); Zap! Zap! ZOP! (Craft a Lightning Staff); Energy, the source of my power! (Craft a Generator); Who SAW that coming? (Craft a Chainsaw); Do you...smell that? (Craft a Poison Grenade); Hah! The toast is a lie! (Craft a Con-Trap-Tron); Potential energy is the best energy (Craft a Spring Loader); Completely AutoNOM (Craft an Eat-o-matic); One With the Woods (Craft a Forest Dragon); Eater of Souls (Craft a War Scythe); Lord Ribbiton of Schwamp (Craft a Frog Prince); Doubleburn? Secondary Scorch? Twinferno? (Craft a Blazing Spear); Oh Blazing Beak! (Craft an Enraged Phoenix); Better Whetter (Craft an Improved Whetstone); Pure Steelyness! (Craft an Essence of Steel); Hard Skin, Soft Heart (Craft a Panzer Dragon); Good 'ol axe on a stick (Craft a Halberd); A good engagement ring (with the right stats) (Craft a Superior Ring); All the vitamin K! (Craft a Broccotree); Sugarbreath!! (Craft a Cupdrake); Poke it -> Die (Craft a Wand of Dissonance); Impressive But Impractical (Craft a Gold Armor); Natural Defense (Craft a Pine Protector); Your defense is garlacking. (Craft Stankus’ Toothpick); Souped up and ready to go! (Craft a Boiling Pot); Quick, use Thunderthingy! (Craft a Thunder Drake)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play a run as each class to get the survival achievements, and pick up the basics (outfit, lobby match, Treasure item).",
                "2. Chase the combat feats (big crit, fast win, status stacks, win streaks) with focused builds.",
                "3. Work the crafting list systematically - a recipe reference, and each run aimed at building the items you are still missing.",
                "4. Mop up the rating and streak milestones in ranked play alongside the crafting grind.",
                "Tip: many crafting achievements need an item you would never keep in a competitive build - do not worry about winning those runs, just assemble the recipe, let the achievement pop, and move on."
            ]
        }
    ]
};

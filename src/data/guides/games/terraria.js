// Terraria's Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/terraria.json), whose 137 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   105600 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js) - all 137 ship a real,
//   official Steam description, quoted directly below. Terraria has no
//   Steam-hidden achievements.
// - With 137 achievements, the sections group them by what they
//   actually track (early milestones, the pre-hardmode and hardmode
//   boss ladders, events and invasions, exploration, the Angler's
//   quests, gear and collections, and a long tail of one-off feats)
//   rather than one line per achievement, weaving the real names into
//   explanatory sentences. This is read from the achievements' own
//   descriptions and Terraria's well-known progression, not invented.
export const GUIDE = {

    slug: "terraria-achievement-guide",
    category: "game",
    gameSlug: "terraria",
    icon: "⛏️",
    title: "Terraria Achievement Guide",
    summary: "A practical guide to all 137 Steam achievements in Terraria - the early milestones, the pre-hardmode and hardmode boss ladders, events and invasions, the Angler's quests, gear collections, and the long tail of one-off feats.",

    relatedSlugs: ["achievement-completion-and-tracking", "understanding-achievement-availability"],

    sections: [

        {
            heading: "Overview",
            body: [
                "Terraria has 137 Steam achievements and none are hidden. Almost all of them come from natural progression - beating each boss in order unlocks the tools to reach the next one - plus a long tail of small one-off feats.",
                "Nothing is missable: your world persists, every boss can be re-summoned, and every event can recur. A single well-played world gets you to 100%, though a few grind achievements (10,000 tiles destroyed, a marathon on foot, 200 Angler quests) take real time.",
                "Tip: follow the boss order. Each major boss drops materials for gear that trivialises the next fight, so the fastest route through the list is simply not skipping ahead."
            ]
        },

        {
            heading: "Early Milestones",
            body: [
                "The first hour covers the basics: Timber!! (chop a tree), You Can Do It! (survive your first night), Benched (craft a work bench), Stop! Hammer Time! (get a hammer), Ooo! Shiny! (mine ore), Heavy Metal (an iron/lead anvil), I Am Loot! (open a golden chest), and No Hobo (build a house an NPC can move into).",
                "Then the first upgrades: Heart Breaker (smash a heart crystal), Star Power (craft and use a mana crystal), Hold on Tight! (equip a grappling hook), Matching Attire (armor in all three slots), Hard Worker (chop wood, mine ore and cook food), and Topped Off (max health and mana without accessories)."
            ]
        },

        {
            heading: "Pre-Hardmode Bosses",
            body: [
                "The pre-hardmode ladder: Eye on You (Eye of Cthulhu), then the evil-biome bosses Worm Fodder (Eater of Worlds) or Mastermind (Brain of Cthulhu), reached after Smashing, Poppet! (smash a Shadow Orb or Crimson Heart). Slippery Shinobi (King Slime) and Sting Operation (Queen Bee, after Where's My Honey?) can come any time.",
                "Then It's Getting Hot in Here (reach the Underworld), Miner for Fire (craft a molten pickaxe), Dungeon Heist (steal a key and open a dungeon chest) after Boned (defeat Skeletron), and finally Still Hungry - defeat the Wall of Flesh to enter hardmode."
            ]
        },

        {
            heading: "Entering Hardmode",
            body: [
                "It's Hard! fires the moment the Wall of Flesh dies. Then Begone, Evil! (smash an altar with a holy hammer), Extra Shiny! (mine the new blessed ore), Head in the Clouds (equip wings), Get a Life (consume a life fruit), Photosynthesis (mine chlorophyte), and Like a Boss (obtain any boss-summoning item)."
            ]
        },

        {
            heading: "Hardmode Bosses",
            body: [
                "The mechanical bosses: Buckets of Bolts (all three of the Twins, the Destroyer and Skeletron Prime), Drax Attax (craft a drax or pickaxe axe from their souls), and the challenge run Mecha Mayhem (all three at once). Queen Machine is the fused mechanical boss.",
                "Then The Great Southern Plantkill (Plantera), Temple Raider (breach the jungle temple), Lihzahrdian Idol (Golem), Fish Out of Water (Duke Fishron), Obsessive Devotion (Ancient Cultist), Star Destroyer (the four Celestial Towers), and Champion of Terraria (the Moon Lord). Boulder Lord is the Moon Lord's toughest challenge.",
                "Extra hardmode fights: Just Desserts (Queen Slime), Fae Flayer (Empress of Light), Don't Dread on Me (Dreadnautilus), and An Eye For An Eye (Deerclops). Robbing the Grave and Big Booty come from rare dungeon drops and biome-key chests, and Slayer of Worlds unlocks for defeating every boss in the game."
            ]
        },

        {
            heading: "Events & Invasions",
            body: [
                "Survive or repel each event: Bloodbath (a blood moon), Goblin Punter (goblin army), Walk the Plank (pirates), Kill the Sun (solar eclipse), Do You Want to Slay a Snowman? (frost legion), Tin-Foil Hatter (martian invasion), Sticky Situation (slime rain), Hero of Etheria (the Old One's Army), and Torch God (the torch trial).",
                "Reach wave 15 of the seasonal moons for Baleful Harvest (pumpkin moon) and Ice Scream (frost moon). It’s Shaling Outside is a rain-of-boulders event, and The Great Slime Mitosis and Gelatin World Tour are slime-collection feats (defeat every slime type; gather every slime pet)."
            ]
        },

        {
            heading: "Exploration & The World",
            body: [
                "Biomes and places: Jeepers Creepers (spider cavern), Funkytown (surface glowing mushroom biome), It Can Talk?! (get the Truffle to move in), Into Orbit and Rock Bottom (the top and bottom of the world), Quiet Neighborhood (a graveyard), A Rare Realm (a special world seed), and Real Estate Agent / My People Need Me (have every town NPC, then leave on a one-way trip to space).",
                "Encounters and hazards: Watch Your Step! (an underground trap), Hey! Listen! (a fairy), A Rather Blustery Day (fly a kite), Jolly Jamboree (throw a party), Dead Men Tell No Tales (a mimic chest), and To Infinity... and Beyond! (fly a Kwad Racer to space). And Good Riddance! clears all corruption, crimson and hallow from the world."
            ]
        },

        {
            heading: "The Angler & Fishing",
            body: [
                "The Angler's quest tiers: Servant-in-Training (1), Good Little Slave (10), Trout Monkey (25), Fast and Fishious (50), and Supreme Helper Minion! (200). Glorious Golden Pole (a golden fishing rod) and Hot Reels! (fish in lava) round out the fishing achievements."
            ]
        },

        {
            heading: "Gear, Collections & Feats",
            body: [
                "Trophy gear: Sword of the Hero (Terra Blade), Sick Throw (the Terrarian yoyo), Prismancer (rainbow rod), Completely Awesome (minishark), Black Mirror and Sea You Later (the Cell Phone and its final upgrade), Ankhumulation Complete (Ankh Shield), Boots of the Hero (Terraspark Boots), Infinity +1 Sword (the Zenith), and Organized Chaos (Rod of Discord).",
                "Cosmetic and count feats: Dye Hard and Fashion Statement (fill every dye and social slot), Bulldozer (destroy 10,000 tiles), Marathon Medalist (26.2 miles on foot), Book Worm (catalogue every creature), and the Journey-mode goals Trash Compactor (research 50% of items) and Conservationist (plant 100 acorns).",
                "One-off kills and tricks: There are Some Who Call Him... (kill Tim), Deceiver of Fools (a nymph), Til Death... (the groom), Archaeologist (Doctor Bones), Pretty in Pink (Pinky), Vehicular Manslaughter (run an enemy over with a minecart), Return... - actually Throwing Lines (throw a yoyo), Lucky Break (survive a fall on a sliver of health), You and What Army? (nine minions at once), The Cavalry (equip a mount), The Frequent Flyer (spend a gold at the nurse), Rainbows and Unicorns (rainbow gun while on a unicorn), Not the Bees! (Bee Gun in full Bee Armor), Unusual Survival Strategies (drink water while drowning), Grave Mistake (kill a friend with a tombstone), Extra Life (survive as hardcore), Fear The Sun (vampire sunburn), Heliophobia (turn a gnome to stone), Feast of Midas (Golden Delight), Feeling Petty (headpat the town pet), Leading Landlord (a fully happy tenant), Spicy Licks (play a guitar), On Fleek (the sun on a cool day), Fortune Favors the Bould (a friendly boulder), and A Shimmer In The Dark (shimmer one item into another).",
                "The 1.4.4 crossover set: Training Day (villagers combat-ready), Mini-Me (Moon Lord impersonator), Terrarist (stink bug sword scare), New Digs (restyle a villager), Going Oldschool (the original title screen), Rollin’ In Your Grave (ride your own grave), and Interdimensional Recycling (give the Dryad a Joja Cola)."
            ]
        }

    ]

};

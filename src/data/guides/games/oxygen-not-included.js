// Oxygen Not Included Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/oxygen-not-included.json), whose 51 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   457140 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js). None are hidden; every one
//   ships a real, official Steam description, quoted verbatim below.
// - Sections group achievements by what each one actually requires.
export const GUIDE = {
    "slug": "oxygen-not-included-achievement-guide",
    "category": "game",
    "gameSlug": "oxygen-not-included",
    "icon": "🧬",
    "title": "Oxygen Not Included Achievement Guide",
    "summary": "A practical guide to all 51 Steam achievements in Oxygen Not Included - none are hidden. imperatives & survival milestones, colony comfort & duplicants, food, ranching & critters, power, heat & automation, exploration & space, spaced out & late game.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Oxygen Not Included has 51 Steam achievements and none are hidden. They span the base game and the Spaced Out! DLC: the colony-completion Imperatives, long-run survival milestones, quality-of-life build goals, food and ranching challenges, power/heat/automation feats, and the space-cluster endgame.",
                "Nothing is strictly missable, but two achievements are effectively run-defining choices - Locavore (400,000 kcal eaten with no planted crops) and Carnivore (400,000 kcal of meat before cycle 100) - so decide up front which colony will chase them. Most of the rest can be picked up across one or two long colonies.",
                "Tip: a single well-run \"forever\" colony can cover the vast majority of this list - reach cycle 365, buy out the research tree, build one of every room type, ranch every critter, and launch rockets. Start a second dedicated colony only for Locavore or Carnivore."
            ]
        },
        {
            "heading": "Imperatives & Survival Milestones",
            "body": [
                "The colony win-conditions (Escape, Colonize, Exploration, Power and Defense Imperatives) plus the raw survival markers: reaching cycle 100, reaching cycle 365.25, and having 20 living Duplicants at once.",
                "The achievements here: The Great Escape (Ensure your colony's legacy by fulfilling the requirements of the Escape Imperative.); Home Sweet Home (Establish your permanent home by fulfilling the requirements of the Colonize Imperative.); Cosmic Archaeology (Uncover the past to secure your future by fulfilling the requirements of the Exploration Imperative.); Full Steam Ahead (Secure your colony's industrial future by fulfilling the Power Imperative.); Blast Line of Defense (Escape extinction by fulfilling the requirements of the Defense Imperative.); Turn of the Century (Reach cycle 100 with at least one living Duplicant.); One Year, to be Exact (Reach cycle 365.25 with a single colony.); No Place Like Clone (Have at least 20 living Duplicants living in the colony at one time.)."
            ]
        },
        {
            "heading": "Colony Comfort & Duplicants",
            "body": [
                "The build-quality and Duplicant-care goals: four Nature Reserves, one of every room type, replacing all Outhouses/Wash Basins with plumbing, a bed and toilet per Duplicant, a cooked meal, curing a disease, eight Duplicants in real clothing, a Masterpiece painting, buying out a full Skill Tree branch, and unlocking the entire Research Tree.",
                "The achievements here: Some Reservations (Improve Duplicant Morale by designating 4 areas as Nature Reserves.); Get a Room (Build at least one of each of the following rooms in a single colony: A Nature Reserve, a Hospital, a Recreation Room, a Great Hall, a Bedroom, a Washroom, a Greenhouse and a Stable.); Royal Flush (Replace all the Outhouses and Wash Basins in your colony with Lavatories and Sinks.); One Bed One Bath (Have at least one bed and one toilet for each Duplicant in the colony.); It's Not Raw (Have a Duplicant eat any cooked meal prepared at an Electrical Grill or Gas Range.); They Got Better (Cure a sick Duplicant of disease.); And Nowhere to Go (Have 8 Duplicants wear non-default clothing simultaneously.); Art Underground (Have a Duplicant with the Masterworks skill paint a Masterpiece quality painting.); To Pay the Bills (Use a Duplicant's Skill Points to buy out an entire branch of the Skill Tree.); Honorary Doctorate (Unlock every item in the Research Tree.)."
            ]
        },
        {
            "heading": "Food, Ranching & Critters",
            "body": [
                "The food and critter achievements: Locavore (no planted crops), Carnivore (meat before cycle 100), taming a Gassy Moo, taming one of every critter species, hatching an egg into a new morph, 10 tonnes of refined metal from Smooth Hatches, analyzing a seed of every mutatable plant, and pulling Uranium from a Beeta hive without a sting.",
                "The achievements here: Locavore (Have Duplicants consume 400,000kcal of food without planting any seeds in Planter Boxes, Farm Tiles, or Hydroponic Farms.); Carnivore (Have Duplicants eat 400,000kcal of critter meat before the 100th cycle.); Moovin' On Up (Find and tame a Gassy Moo.); Critter Whisperer (Find and tame one of every critter species in the world. Default morphs only.); Good Egg (Hatch a new critter morph from an egg.); Down the Hatch (Produce 10 t of refined metal by ranching Smooth Hatches.); GMO A-OK (Successfully analyze at least one seed of all mutatable plants.); Sweeter Than Honey (Extract Uranium from a Beeta hive without getting stung.)."
            ]
        },
        {
            "heading": "Power, Heat & Automation",
            "body": [
                "The engineering feats: cooling a building to 6 Kelvin, generating 240,000 kJ of clean power, distributing 1000 kg of oxygen through vents, automating a building, 100 generator tune-ups, running a Research Reactor at full capacity for 5 cycles, blocking a meteor with a Bunker Door, out-delivering your Duplicants with Auto-Sweepers, and 10 straight cycles of full Exosuit chore coverage.",
                "The achievements here: Not 0K, But Pretty Cool (Reduce the temperature of a building to 6 Kelvin.); Super Sustainable (Generate 240,000kJ of power without using coal, methane, petrol or wood generators.); Oxygen Not Occluded (Distribute 1000kg of Oxygen using gas vents.); Red Light, Green Light (Automate a building using sensors or switches from the Automation tab in the Build Menu.); Tune Up For What? (Perform 100 Tune Ups on power generators.); That's Rad! (Run a Research Reactor at full capacity for 5 cycles.); Immovable Object (Block a meteor from hitting your base using a Bunker Door.); Easy Livin' (Have Auto Sweepers complete more deliveries to machines than Duplicants over 5 cycles.); Job Suitability (For 10 cycles in a row, have every Duplicant in the colony complete at least one chore while wearing an Exosuit.)."
            ]
        },
        {
            "heading": "Exploration & Space",
            "body": [
                "The map and launch achievements: building outside the starting biome, 10,000 m of Transit Tube travel, launching your first rocket, entering an oil biome, recovering a database entry from ruins, revealing 80% of the map, building a launchpad on a teleporter-less world, and mining 1,000,000 kg from space POIs.",
                "The achievements here: Outdoor Renovations (Construct a building outside the initial starting biome.); Totally Tubular (Have Duplicants travel 10,000m by Transit Tube.); Space Race (Launch your first rocket into space.); Slick (Enter an oil biome for the first time.); Ghosts of Gravitas (Recover a Database entry by inspecting facility ruins.); Pulling Back The Veil (Reveal 80% of map by exploring outside the starting biome.); Soft Launch (Build a launchpad on a world without a teleporter.); Mine the Gap (Mine 1,000,000kg from space POIs.)."
            ]
        },
        {
            "heading": "Spaced Out & Late Game",
            "body": [
                "The DLC cluster and newer-content achievements: the first teleport-and-defrost, landing on every world in the cluster, 10 km of cumulative radbolt travel, 10 cycles of high morale in a rocket, a max-efficiency Data Bank, installing 8 boosters in one Bionic Duplicant, surviving 100 cycles after the Demolior collision, and recruiting the Minnow freediver Duplicant.",
                "The achievements here: First Teleport of Call (Teleport a Duplicant and defrost a Friend on another world.); Cluster Conquest (Land dupes or rovers on all worlds in the cluster.); Radical Trip (Have radbolts travel a cumulative 10 km.); Morale High Ground (Have all Duplicants in a rocket survive in space for 10 cycles in a row with a morale of 25 or higher.); Data Driven (Produce a Data Bank using a Data Miner operating at maximum efficiency.); Most Valuable Bionic (Install 8 boosters in a single Bionic Duplicant.); The Lab: Life Found A Way (Survive 100 cycles after Demolior collides with your colony.); Better Together (Recruit the only freediver Duplicant in the universe to your colony.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Set your main colony up to last: prioritise oxygen, food, plumbing (Royal Flush), rooms (Get a Room), and morale early, then push research to completion (Honorary Doctorate).",
                "2. Hit the survival milestones on the way - Turn of the Century, One Year to be Exact, No Place Like Clone - and knock out the automation, power and heat feats as your build matures.",
                "3. Go to space: rockets, the cluster worlds, radbolts and the Spaced Out achievements. The five Imperatives can be finished across this same colony over a long game.",
                "4. Run a separate colony for Locavore or Carnivore - both fight against how you would normally play, so they are cleaner as dedicated attempts.",
                "Tip: Not 0K, But Pretty Cool (6 Kelvin) is easiest with a Super Coolant loop and an Anti-Entropy Thermo-Nullifier, or by exposing a small sealed room to the map edge in a vacuum with aggressive cooling - set it up once, late, and leave it running."
            ]
        }
    ]
};

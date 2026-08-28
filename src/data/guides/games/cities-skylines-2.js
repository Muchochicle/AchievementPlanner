// Cities: Skylines II Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/cities-skylines-2.json), whose 44
//   achievements were sourced directly from Steam's own achievement
//   schema for appid 949230 via ISteamUserStats/GetSchemaForGame
//   (fetched through this app's own backend/services/steamApi.js). None
//   are hidden; every one ships a real, official Steam description,
//   quoted verbatim below.
// - Sections group by what each achievement needs: founding, growth and
//   economy, infrastructure and transport, building and landscaping,
//   maps/policies/districts, and weather/editor/photo mode.
export const GUIDE = {
    "slug": "cities-skylines-2-achievement-guide",
    "category": "game",
    "gameSlug": "cities-skylines-2",
    "icon": "🏙️",
    "title": "Cities: Skylines II Achievement Guide",
    "summary": "A practical guide to all 44 Steam achievements in Cities: Skylines II - none are hidden. The founding milestones, the growth / happiness / economy goals, the infrastructure and transport achievements, the building and landscaping counts, the map / policy / district achievements, and the weather, editor and photo-mode unlocks.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Cities: Skylines II has 44 Steam achievements and none are hidden. Almost all come from playing one large, healthy city to maturity - reaching population and milestone targets, building enough of each thing, and unlocking every service and building.",
                "Nothing is missable - a city save persists and grows indefinitely - and there is no difficulty setting. The only friction is scale: One of Everything, Key to the City, a 100,000 population and 150 unlocked map tiles all want a genuinely big city.",
                "Tip: build one \"forever\" city on a snowy-winter map (covers Four Seasons) with unlimited money or generous budgeting, and just keep expanding - the counting achievements (trees, bridges, quays, bulldozed buildings, tourist visits, medical treatments) all tick up passively while you chase the population and unlock goals."
            ]
        },
        {
            "heading": "Founding Your City",
            "body": [
                "The early milestones: your first mixed-zone city, opening every info view, districts and city services, unlocking all services (Royal Flush) and every base-game building (Key to the City), reaching 100,000 population (Six Figures) and milestone 20.",
                "The achievements here: My First City (Build city with residential, commercial and industrial zones, water, and electricity.); The Inspector (Have a look at each individual info view panel.); Happy to Be of Service (Create a city district and assign a city service to that district.); Royal Flush (Reach enough milestones to unlock all city services in a single city.); Key to the City (Unlock each building available in the base game.); Six Figures (Reach a population of 100,000.); The Last Mile Marker (Reach milestone 20.)."
            ]
        },
        {
            "heading": "Growth, Happiness & Economy",
            "body": [
                "The city-health goals: high and low average happiness at 1,000+ citizens, a 90 attractiveness rating, 15% university-educated population, a 200,000 loan, all four zone types, 6,000 medical treatments and 6,000 tourist visits, and building every unique service building.",
                "The achievements here: All Smiles (Have at least 1000 citizens and an average happiness rating of 75%.); This Is Not My Happy Place (Have at least 1000 citizens and an average happiness rating of 25%.); Simply Irresistible (Have at least 1000 citizens and a city attractiveness rating of 90.); Top of the Class (Build a city where at least 15% of the population has a university level of education.); The Deep End (Have a total loan of at least 200,000 in a single city.); Strength Through Diversity (Have buildings from all four zone types in a single city.); A Little Bit of TLC (Have 6,000 citizens treated at medical clinics or hospitals in a single city.); Welcome, One and All! (Have a total of 6,000 tourist visits in a single city.); One of Everything (Build all unique city service buildings in a single city.)."
            ]
        },
        {
            "heading": "Infrastructure & Transport",
            "body": [
                "The infrastructure achievements: 20 and 50 active transport lines, a 500 MW all-renewable grid, any airport, moving resources through Ports, fishing and offshore-oil tonnage, and building draw/lift bridges, quays and piers.",
                "The achievements here: Go Anywhere (Have 20 active transport lines. These can be passenger or cargo lines or any mix of the two.); Zero Emission (Have a city that produces 500 MW electricity by only using renewable energy sources.); Up and Away! (Build any airport.); Spiderwebbing (Have 50 active transport lines. These can be passenger or cargo lines or any mix of the two.); Ship It (Transfer 24 000 tons of resources through Ports.); A Different Platformer (Gather 2 000 tons of Oil with the offshore oil platforms in one city.); Draw Me Like One of Your Lift Bridges (Build 5 Draw- or Lift Bridges in one city.); It's Pronounced \"Key\"! (Build 5 kilometers of Quays in one city.); Pier-fect! (Build 2 kilometers of Piers in one city.)."
            ]
        },
        {
            "heading": "Building & Landscaping",
            "body": [
                "The construction counts: 5 and 10 signature buildings, 10 Parks & Recreation buildings, 100 landscaped trees or bushes, 1,000 bulldozed buildings, and 10,000 tons of fish gathered.",
                "The achievements here: Making a Mark (Build 5 signature buildings in a single city.); The Architect (Build 10 signature buildings in a single city.); Groundskeeper (Built 10 Parks & Recreation buildings in a single city.); Colossal Gardener (Plant 100 trees or bushes with the landscaping tool in a single city.); Squasher-Downer (Bulldoze a total of 1000 buildings.); How Much Is the Fish? (Gather 10 000 tons of Fish resource by fishing boats or fish farms in one city.)."
            ]
        },
        {
            "heading": "Maps, Policies & Districts",
            "body": [
                "Unlocking 50 and 150 map tiles, 5 simultaneous city policies, 10 fully-policied districts, assigning a policy to a district, and experiencing all four seasons.",
                "The achievements here: Everything the Light Touches (Unlock 150 map tiles in a single city.); Calling the Shots (Have 5 city policies active simultaneously.); Wide Variety (Create 10 districts, each with its own unique set of policies in one city.); Executive Decision (Assign a policy to a city district.); The Explorer (Unlock 50 map tiles in a single city.); Four Seasons (Experience all four seasons by building a city in a climate with a snowy winter.)."
            ]
        },
        {
            "heading": "Weather, Editor & Photo Mode",
            "body": [
                "The one-off unlocks: a hailstorm, a tornado and a forest fire, following a citizen's whole lifepath, using the map and asset editors, and taking a photo-mode screenshot.",
                "The achievements here: The Size of Golf Balls! (Experience a hailstorm.); Out for a Spin (Experience a tornado.); Now They're All Ash Trees (Experience a forest fire.); You Little Stalker! (Follow a citizen's lifepath from childhood to old age.); Cartography (Use the editor to make a map.); Snapshot! (Use the photo mode to take a screenshot.); I Made This (Use the editor to make an asset of any other type than a map.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Start one big city on a snowy-winter map and grow it steadily toward milestone 20 and 100,000 population - Royal Flush, Key to the City and most early achievements come on the way.",
                "2. Deliberately build variety: several signature buildings, all unique service buildings, parks, districts with policies, and the bridge/quay/pier infrastructure.",
                "3. Push the economy achievements - hit a 90 attractiveness and 75% happiness peak, take the 200,000 loan, and let the medical and tourism counters fill.",
                "4. Do the weather achievements when they occur (or force them with the weather tools), and spend a few minutes each in the map and asset editors and photo mode.",
                "Tip: This Is Not My Happy Place (25% happiness) and All Smiles (75% happiness) are opposites - hit the low one deliberately by cutting services for a bit, then rebuild to the high one, rather than trying to avoid ever dropping happiness."
            ]
        }
    ]
};

// Against the Storm Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/against-the-storm.json), whose 80 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1336490 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js). None are hidden; every one ships a real, official Steam description, quoted verbatim below.
// - Sections group achievements by what each one actually requires.
export const GUIDE = {
    "slug": "against-the-storm-achievement-guide",
    "category": "game",
    "gameSlug": "against-the-storm",
    "icon": "🌧️",
    "title": "Against the Storm Achievement Guide",
    "summary": "A practical guide to all 80 Steam achievements in Against the Storm - difficulty & biomes, map modifiers, species utopias, settlement challenges, keepers of the stone (update), nightwatchers (update).",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Against the Storm has 80 Steam achievements and none are hidden. Almost all are \"win a game\" achievements with a condition attached: win in a specific biome, win at a specific difficulty tier, win with a certain map modifier nearby, win with a species \"utopia\", or win having done some settlement feat. A win means completing a settlement and banking its Reputation.",
                "Nothing is missable - every settlement is a fresh roll, and you can re-roll the world map for the biome or modifier you still need. The list spans the base game and two content updates, Keepers of the Stone and Nightwatchers, whose achievements name themselves in their descriptions.",
                "Tip: the \"Win near X modifier\" achievements are the bulk of the list - keep a checklist, and on the world map pick embarkation points next to modifiers you still need. Many stack in one settlement if two needed modifiers are adjacent."
            ]
        },
        {
            "heading": "Difficulty & Biomes",
            "body": [
                "Winning in each biome (Royal Woodlands, Scarlet Orchard, Marshlands, Coral Forest, Cursed Royal Woodlands, plus the update biomes Coastal Grove, Ashen Thicket, Rocky Ravine and Bamboo Flats) and at each difficulty tier (Settler, Pioneer, Veteran, Viceroy, Prestige 10, Prestige 20).",
                "The achievements here: First Real Expedition (Win a game in the Royal Woodlands biome, and on Settler difficulty (or higher).); The Scarlet Orchard (Win a game on the Scarlet Orchard biome.); The Marshlands (Win a game on the The Marshlands biome.); Coral Forest (Win a game on the Coral Forest biome.); Cursed Lands (Win a game on the Cursed Royal Woodlands biome.); Overcoming Difficulty (Win a game on Pioneer difficulty (or higher).); A Real Challenge (Win a game on Veteran difficulty (or higher).); Against All Odds (Win a game on Viceroy difficulty (or higher).); Prestigious Expedition (Win a game on Prestige 10 difficulty (or higher).); The Queen's Chosen (Win a game on Prestige 20 difficulty (or higher).); The Coastal Grove (Win a game on the Coastal Grove biome. (Keepers of the Stone)); The Ashen Thicket (Win a game on the Ashen Thicket biome. (Keepers of the Stone)); The Rocky Ravine (Win a game on the Rocky Ravine biome. (Nightwatchers)); The Bamboo Flats (Win a game on the Bamboo Flats biome. (Nightwatchers))."
            ]
        },
        {
            "heading": "Map Modifiers",
            "body": [
                "The \"win a game near the X modifier\" achievements - one for each embarkation-point modifier in the game, from Fertile Grounds and Ruins through Bandit Camp, Ancient Battleground, Forbidden Lands and the update modifiers (Frosts, Land of Greed, Overgrown Library, Drylands, Silent Dominion, Riverlands and more).",
                "The achievements here: Fertile Meadows (Win a game near the Fertile Grounds modifier.); Lost Colonies (Win a game near the Ruins modifier.); Barren Lands (Win a game near the Barren Lands modifier.); Levitating Monument (Win a game near the Levitating Monument modifier.); Royal Outpost (Win a game near the Royal Outpost modifier.); Watchtower (Win a game near the Watchtower modifier.); Bandit Camp (Win a game near the Bandit Camp modifier.); Ancient Battleground (Win a game near the Ancient Battleground modifier.); Dangerous Lands (Win a game near the Dangerous Lands modifier.); Ruined Armory (Win a game near the Ruined Armory modifier.); Flooded Mines (Win a game near the Flooded Mines modifier.); Statue of the Forefathers (Win a game near the Statue of the Forefathers modifier.); Forsaken Gods Temple (Win a game near the Forsaken Gods Temple modifier.); Sparkdew Crystals (Win a game near the Sparkdew Crystals modifier.); Forbidden Lands (Win a game near the Forbidden Lands modifier.); Fishmen Ritual Site (Win a game near the Fishmen Ritual Site modifier.); Corrosive Torrent (Win a game near the Corrosive Torrent modifier.); Monastery of the Holy Flame (Win a game near the Monastery of the Holy Flame modifier.); Haunted Forest (Win a game near the Haunted Forest modifier.); Abandoned Settlement (Win a game near the Abandoned Settlement modifier.); Frosts (Win a game near the Frosts modifier.); Land of Greed (Win a game near the Land of Greed modifier.); Overgrown Library (Win a game near the Overgrown Library modifier.); Petrified Necropolis (Win a game near the Petrified Necropolis modifier.); Ominous Presence (Win a game near the Ominous Presence modifier.); Gathering Storm (Win a game near the Gathering Storm modifier.); Untamed Wilds (Win a game near the Untamed Wilds modifier.); Drylands (Win a game near the Drylands modifier. (Nightwatchers)); Silent Dominion (Win a game near the Silent Dominion modifier. (Nightwatchers)); Riverlands (Win a game near the Riverlands modifier. (Nightwatchers))."
            ]
        },
        {
            "heading": "Species Utopias",
            "body": [
                "Winning a settlement built around one species at scale: 30 Humans, Beavers, Lizards or Harpies (with 15 houses and their special building), 30 Foxes, and the update species - 40 Frogs and 30 Bats.",
                "The achievements here: Human Utopia (Win a game with 30 Humans, 15 x Human House, 1 x Temple); Beaver Utopia (Win a game with 30 Beavers, 15 x Beaver House, 1 x Guild House); Lizard Utopia (Win a game with 30 Lizards, 15 x Lizard House, 1 x Clan Hall); Harpy Utopia (Win a game with 30 Harpies, 15 x Harpy House, 1 x Bath House); Fox Utopia (Win a game with 30 Foxes, 15 x Fox House, 1 x Tea Doctor); Frog Utopia (Win a game with 40 Frogs, 20 x Frog House, 1 x Forum. (Keepers of the Stone)); Bat Utopia (Win a game with 30 Bats, 15 x Bat House, 1 x Academy (Nightwatchers))."
            ]
        },
        {
            "heading": "Settlement Challenges",
            "body": [
                "The playstyle feats: winning after 5 and 25 Glade Events, the Ale and Metal production-chain wins on Veteran, opening 20 Abandoned Caches, clearing 10 glade ruins, 20 trade routes, 3 timed orders, 14 Reputation from Resolve, two Dangerous Glades in Year 1, 3 Blood Flower clones, fulfilling all Complex Food / Service / all needs at once, a 5-year win, a no-orders win, and a no-deaths win.",
                "The achievements here: Taking Action (Win a game after completing 5 Glade Events.); Serving Ale (Win with: 1 x Small Farm, 1 x Brewery, 1 x Tavern, on the difficulty: Veteran.); Refinery (Win with: 1 x Mine, 1 x Smelter, 1 x Smithy, on the difficulty: Veteran.); Treasure (Win a game after opening or sending 20 Abandoned Caches to the Citadel.); Ruins (Win a game after taking care of 10 ruins found in glades.); Efficient Explorer (Win a game after completing 25 Glade Events.); Trade Baron (Win a game after completing 20 trade routes.); Like a Machine (Win a game after completing 3 timed orders.); Victory Through Prosperity (Earn 14 Reputation Points through Resolve in a single game.); Into the Forest (Win after discovering 2 Dangerous Glades before the end of Year 1, on Pioneer difficulty.); Blood Flower Farmer (Win a game with 3 active Blood Flower clones on the map.); Feeding The People (Ensure all villagers have all their Complex Food needs fulfilled simultaneously.); Higher Needs (Fulfill all villagers’ Service needs simultaneously (requires 3 species; Commons excluded).); Homesick (Win a game in 5 years or less.); Defying the Crown (Win a game without completing any orders.); Paradise (Fulfill all villagers’ needs simultaneously (requires 3 species; Commons excluded).); No Deaths (Win a game with 0 villagers dying.)."
            ]
        },
        {
            "heading": "Keepers of the Stone (Update)",
            "body": [
                "The Keepers of the Stone content: upgrading 12 Frog Houses to max, sending 100 and 12 expeditions in the Coastal Grove, the Rainpunk Foundry blueprint from an expedition, a Frog win on a Wednesday, and 20 Experimental Cornerstones in the Ashen Thicket.",
                "The achievements here: Frog Republic (Upgrade 12 Frog Houses to the maximum level in one game. (Keepers of the Stone)); Strider Rider (Send out 100 expeditions in the Coastal Grove. (Keepers of the Stone)); The Search Continues (Send out 12 expeditions in one game in the Coastal Grove. (Keepers of the Stone)); Feeling Lucky (Obtain the Rainpunk Foundry blueprint from an expedition in the Coastal Grove. (Keepers of the Stone)); It's Wednesday (Win a game with Frogs on a Wednesday. (Keepers of the Stone)); The Emberwright (Create 20 Experimental Cornerstones in the Ashen Thicket. (Keepers of the Stone))."
            ]
        },
        {
            "heading": "Nightwatchers (Update)",
            "body": [
                "The Nightwatchers content: exiling 50 and 15 villagers in the Manorial Court, 50 Black Market transactions, 500 Amber of goods bought on credit, 40 Fertile Fields in the Bamboo Flats, and keeping a Fluffbeak above 75% well-being for 20 minutes.",
                "The achievements here: Exiled (Exile 50 villagers in the Manorial Court. (Nightwatchers)); The Weakest Link (Exile 15 villagers in the Manorial Court in one game. (Nightwatchers)); Shady Dealings (Complete 50 transactions on the Black Market. (Nightwatchers)); Living on Credit (Buy goods worth 500 Amber on credit on the Black Market. (Nightwatchers)); Green Thumb (Win a game after building at least 40 Fertile Fields in the Bamboo Flats. (Nightwatchers)); Peaceful Life (Keep the Fluffbeak's well-being at 75% or higher for at least 20 minutes. (Nightwatchers))."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play normally, moving up the difficulty tiers as your skill and meta-upgrades grow - First Real Expedition through A Real Challenge come along the way.",
                "2. Use the world map deliberately: pick biomes and modifiers you still need for the two big blocks (Difficulty & Biomes, Map Modifiers).",
                "3. Do a few themed settlements for the species Utopias and the harder Settlement Challenges (Paradise, No Deaths, the production chains).",
                "4. Work through the Keepers of the Stone and Nightwatchers content when you have those cycles unlocked.",
                "Tip: Homesick (win in 5 years or less) and No Deaths pair well with a small, easy biome on a low difficulty - do them together on a modifier you still need to triple up."
            ]
        }
    ]
};

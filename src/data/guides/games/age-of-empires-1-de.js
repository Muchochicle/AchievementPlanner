// Age of Empires: Definitive Edition Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/age-of-empires-1-de.json), whose 44
//   achievements were sourced directly from Steam's own achievement
//   schema for appid 1017900 via ISteamUserStats/GetSchemaForGame
//   (fetched through this app's own backend/services/steamApi.js). None
//   are hidden; every one ships a real, official Steam description,
//   quoted verbatim below. This is the original Age of Empires
//   Definitive Edition (appid 1017900), separate from Age of Empires II:
//   Definitive Edition already in the catalog.
// - Sections group by what each achievement needs: campaign
//   completions, build/train count feats, combat and conversion, the
//   resource/tech/victory-condition set, and the two challenge wins.
export const GUIDE = {
    "slug": "age-of-empires-1-de-achievement-guide",
    "category": "game",
    "gameSlug": "age-of-empires-1-de",
    "icon": "🏺",
    "title": "Age of Empires: Definitive Edition Achievement Guide",
    "summary": "A practical guide to all 44 Steam achievements in Age of Empires: Definitive Edition - none are hidden. The campaign completions, the build and train count feats, the combat and conversion achievements, the resource / technology / victory-condition set, and the two challenge wins.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Age of Empires: Definitive Edition has 44 Steam achievements and none are hidden. They split into the campaign completions, a set of cumulative build/train count feats, combat and conversion feats, the classic victory conditions (wonder, artifacts, ruins), and two \"win without unit type X\" challenge wins.",
                "Nothing is missable - campaigns and skirmish games replay freely, and the count feats accumulate - but a full completion needs every campaign done plus a big skirmish grind for the 1,000-unit and 500-building achievements.",
                "Tip: play all the campaigns first (they teach the game and clear ten achievements), then set up a huge skirmish against weak AI on a big map with high resources and just build/train the required numbers - the count feats do not care about difficulty."
            ]
        },
        {
            "heading": "Campaign Completions",
            "body": [
                "One achievement for completing each campaign: the Ascent of Egypt learning campaign, Glory of Greece, Voices of Babylon, Yamato Empire of the Rising Sun, and the Rise of Rome expansion campaigns (Ave Caesar, Imperium Romana, Enemies of Rome, First Punic War, Reign of the Hittites).",
                "The achievements here: Roma Victrix (Complete the Rise of Rome campaign); Veni, Vidi, Vici (Complete the Ave Caesar campaign); Imperial Peace (Complete the Imperium Romana campaign); The Elephant In The Rome (Complete the Enemies of Rome campaign); Punic Attack (Complete the First Punic War campaign); Hittite Baby One More Time (Complete the Reign of the Hittites campaign); Pharaoh (Complete the Ascent of Egypt learning campaign); Smoking Ziggurats (Complete the Voices of Babylon campaign); Epic (Complete the Glory of Greece campaign); Big In Japan (Complete the Yamato Empire of the Rising Sun campaign)."
            ]
        },
        {
            "heading": "Build & Train Feats",
            "body": [
                "The construction and unit-training counts: 500 houses, 50 Babylonian Towers, 789 Shang wall segments, and large numbers of civ-specific units (Centurions, Axemen, heavy catapults, Choson Legions, Assyrian Chariot Archers, Minoan Composite Bowman, Egyptian Scythe Chariots, Macedonian Hoplites, Horse Archers).",
                "The achievements here: Homes? (Build 500 houses); Towers of Babel (Build 50 Babylonian Towers); Rise And Wall (Build 789 Shang wall segments); Parthian Shot (Train 500 Horse Archers); 21st Century (Train 21 Centurions); Axe To Grind (Train 400 Axemen); Cute Cats (Build 500 heavy catapults); The Choson Ones (Create 1000 Choson Legions); Dancing Chariots (Train 400 Assyrian Chariot Archers); Minoan Compies (Train 100 Minoan Composite Bowman); Scytheseeing (Train 100 Egyptian Scythe Chariots); Syntagma (Train 256 Macedonian Hoplites)."
            ]
        },
        {
            "heading": "Combat & Conversion",
            "body": [
                "The fighting and priest feats: defeating 1,000 enemy units, destroying 200 temples, killing a Lion (Alpha), hunting 250 animals, converting 1,000 units and 20 with Egyptian Priests, converting an enemy Priest, defeating 20 heroes, and killing a Medusa.",
                "The achievements here: Not that I'm keeping count… (Defeat 1000 enemy units); Hun, is that you? (Destroy 200 temples); Heracles (Defeat a Lion (Alpha)); Artemis (Hunt 250 animals); Wololo (Convert 1000 units); Eye of Horus (Convert 20 units with Egyptian Priests); Losing Your Religion (Convert an enemy Priest); Assassin (Defeated 20 heroes); Perseus (Killed a Medusa)."
            ]
        },
        {
            "heading": "Resources, Tech & Victory Conditions",
            "body": [
                "Exploring a whole map, collecting 50,000 of each resource, researching every available technology in one game, advancing first to every age, and winning via a wonder, the artifacts, or holding ruins - plus a ranked Elo win.",
                "The achievements here: Atlas (Explore all areas of a single map); Coinage (Collected 50,000 gold); Quarry (Collected 50,000 stone); WoodStock (Collected 50,000 wood); Pepperoni Pizza (Collected 50,000 food); Marvelous (Won a game by building and holding a wonder); Archimedes (Researched every technology available in a single game); Pegasus (Advanced first to every age); State Of The Artifact (Won a game by holding all the artifacts); Ruin Them All (Won a game by holding ruins); Res Publica (Won a ranked Elo game.)."
            ]
        },
        {
            "heading": "Challenge Wins",
            "body": [
                "The two restrictive wins: winning a random map game without training any cavalry, and without training any archery units.",
                "The achievements here: Feet on the ground (Win a random map game without training any cavalry); Eye in the sky (Win a random map without training any archery units)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play every campaign to clear the ten completion achievements and learn the civ rosters.",
                "2. Set up a long skirmish versus a weak AI on a large, resource-rich map and grind the build/train counts (Homes?, Rise And Wall, The Choson Ones and friends) and the resource totals.",
                "3. Do the combat and conversion feats in that same game or a dedicated one - Heracles, Perseus, Wololo, Eye of Horus, Assassin.",
                "4. Do the victory-condition wins (Marvelous, State Of The Artifact, Ruin Them All, Archimedes, Pegasus, Atlas) as individual games with the matching win setting.",
                "5. Do Feet on the ground and Eye in the sky (no-cavalry / no-archers wins) last, and Res Publica in a ranked match.",
                "Tip: Rise And Wall (789 Shang wall segments) and The Choson Ones (1,000 Choson Legions) are the slowest - queue walls and Legions continuously in a no-pressure skirmish and let it run while you do other things."
            ]
        }
    ]
};

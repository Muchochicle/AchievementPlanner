// Sid Meier's Starships Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/sid-meiers-starships.json), whose 31 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   282210 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "sid-meiers-starships-achievement-guide",
    "category": "game",
    "gameSlug": "sid-meiers-starships",
    "icon": "🚀",
    "title": "Sid Meier's Starships Achievement Guide",
    "summary": "A practical guide to all 31 Steam achievements in Sid Meier's Starships - none are hidden. Covers the faction wins and empire basics, the battle feats and empire-growth achievements, and the four victory types. None of the achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Sid Meier's Starships has 31 Steam achievements and none are hidden. Three are for winning as each affinity (Supremacy, Purity, Harmony), four are the victory types (Population, Science, Wonder, Domination), and the rest are one-off feats - upgrading ship modules, researching techs to level 4, controlling Galactic Wonders, defeating the Pirate planet, and a set of tactical-battle achievements (a 7-hex move, 4 fighters on the map, a torpedo kill, a critical hit and repair).",
                "The catalog marks it a short single playthrough - most achievements can be picked up across two or three games on a small galaxy, and nothing is missable.",
                "Tip: play one game per affinity aiming for a different victory type each time - a Domination game as Supremacy, a Science game as Purity, a Wonder game as Harmony covers six achievements plus the battle feats along the way."
            ]
        },
        {
            "heading": "Faction Wins & Empire Basics",
            "body": [
                "Winning as Supremacy, Purity and Harmony, taking an enemy home planet, defending your home planet, upgrading lasers and population, giving away a tech in negotiation, researching a tech (and five techs) to level 4, travelling to another planet, a torpedo kill, a level-5 planetary improvement, using a jump gate in battle, and controlling 5 Galactic Wonders.",
                "The achievements here: A new order of intelligence (Win the game as Supremacy); That is the sound of inevitability... (Win the game as Purity); We choose our own path (Win the game as Harmony); Can you turn the tide of war? (Take over an enemy's home planet); It's dangerous to go alone! Take this. (Upgrade the lasers on your ship); It's our time down here. (Defend your home planet); Food for the masses (Upgrade the population on an earth-like planet); The trouble with science… (Give away a tech through negotiating with an enemy); Light years ahead of the competition! (Research a tech to level 4); I, uh, I've been to another planet, Ma. (Travel to another planet); Dodge this (Destroy a ship with a torpedo); Building a better today (Raise a planetary improvement to level 5); Through the wormhole (Use a jump gate during battle); The technology of tomorrow (Research 5 techs to level 4); Of all the wonders that I have heard… (Control 5 Galactic Wonders)."
            ]
        },
        {
            "heading": "Battle Feats & Empire Growth",
            "body": [
                "Defeating the Pirate planet, a 7-hex ship move in one turn, 4 fighters on the map at once, winning a mission by warping out the flagship or the colony ship, a level-6 stealth module, a critical hit and a critical repair, a population of 10, fully assimilating a planet, creating a warp portal, and starting a game from a Beyond Earth save.",
                "The achievements here: …Wretched hive of scum and villainy (Defeat the Pirate planet); They've gone to plaid! (Have a ship in your fleet move 7 or more hexs in one turn during a battle); I am the swarm (Have 4 or more fighters on the map at once during a battle); We gotta get outta here (Win a mission by bringing your flagship to a warp portal); Women and children first (Win a mission by bringing the colony ship to a warp portal); They can't shoot what they can't see (Upgrade the stealth module to level 6); Hit 'em where it hurts (Score a critical hit on an enemy ship); It's just a flesh wound (Repair a critical hit on a ship in your fleet); Like rabbits (Increase the population on a planet to 10); Tell me of your homeworld (Bring a planet fully into your empire); …We don't need roads (Create a warp portal between two planets); Take to the skies (Start a game using a save game from Beyond Earth)."
            ]
        },
        {
            "heading": "Victory Types",
            "body": [
                "Winning a Population Victory, a Science Victory, a Wonder Victory and a Domination Victory.",
                "The achievements here: Span the galaxy (Win a Population Victory); Knowledge is the key to success (Win a Science Victory); A wondrous civilization (Win a Wonder Victory); Perpetual peace is a futile dream (Win a Domination Victory)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play a first game to learn the systems - upgrade modules, research techs to level 4, and take an enemy planet.",
                "2. Play one game per affinity (Supremacy, Purity, Harmony), each aimed at a different victory type.",
                "3. Do the battle feats (7-hex move, 4 fighters, torpedo kill, critical hit and repair) during those games.",
                "4. Defeat the Pirate planet and control 5 Galactic Wonders in one game.",
                "5. Clean up any remaining victory type and the Beyond Earth save-import achievement.",
                "Tip: the tactical-battle achievements are all easy on the smallest fleet size against a weak enemy - build a fighter-heavy carrier and a fast scout to tick off the movement and fighter feats."
            ]
        }
    ]
};

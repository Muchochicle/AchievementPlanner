// Planet Explorers Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/planet-explorers.json), whose 16 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   237870 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "planet-explorers-achievement-guide",
    "category": "game",
    "gameSlug": "planet-explorers",
    "icon": "🪐",
    "title": "Planet Explorers Achievement Guide",
    "summary": "A practical guide to all 16 Steam achievements in Planet Explorers - none are hidden. Covers the story-mission achievements and the exploration and completion achievements. None of the achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Planet Explorers has 16 Steam achievements and none are hidden. Nine follow the story campaign (the escort, the forest, burying the dead, the desert, the base camp, the nuclear explosion, finding Malik, the war, surviving to the last minute), and the rest are exploration and completion goals - 1,000 currency, riding a monster, a first recruitment, 50 monster feces, destroying all the towns, being Cordial with every party, and the 'gain all achievements' completion.",
                "The catalog marks it missable and roughly two playthroughs - 'Destroy Everything' (destroy all the towns) and 'Peace Ambassador' (Cordial with every party) pull in opposite directions, so you cannot do both on one campaign.",
                "Tip: do a diplomacy-focused run for 'Peace Ambassador', then an aggressive run for 'Destroy Everything' - the story missions and the smaller goals can be done on either."
            ]
        },
        {
            "heading": "Story Missions",
            "body": [
                "Completing the Escort Mission, The Forest, Bury the Dead, Into the Desert, Set up a BaseCamp, the nuclear explosion, Finding Malik, A World at War, and surviving to the last minute.",
                "The achievements here: Old and Sick (Complete Escort Mission); The Forest (Take over the mission The Forest  ); Rest in Piece (Complete the mission Bury the Dead ); The Barrens (Complete the mission Into the Desert ); Your Own Colony (Complete the mission Set up a BaseCamp ); World Peace (Nuclear explosion); Newton Continental (Complete the mission Finding Malik ); Survive (Complete the mission A World at War ); Take a Flight (Survive to the last minute)."
            ]
        },
        {
            "heading": "Exploration & Completion",
            "body": [
                "Collecting 1,000 currency, your first monster ride, a first recruitment, 50 monster feces, gaining all achievements, destroying all the towns, and reaching Cordial standing with each party.",
                "The achievements here: Incredible Wealth (Collect 1000 currency); Knight on the Monster (First ride on the monster); Follower (First recruitment); Dung Beetle (Collect 50 monster feces); Planet Explorer (Gain all the achievements); Destroy Everything (Destroy all the towns); Peace Ambassador (Achieve Cordial in each party)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the story campaign through all nine story missions.",
                "2. On a diplomacy-focused run, build relations to Cordial with every party for 'Peace Ambassador'.",
                "3. Do the smaller goals - 1,000 currency, ride a monster, recruit a follower, collect 50 monster feces.",
                "4. On a separate aggressive run, destroy every town for 'Destroy Everything'.",
                "5. 'Planet Explorer' unlocks once every other achievement is done.",
                "Tip: 'Peace Ambassador' and 'Destroy Everything' are mutually exclusive within a save - decide which each campaign is for before you start attacking or negotiating with factions."
            ]
        }
    ]
};

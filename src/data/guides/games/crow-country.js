// Crow Country Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/crow-country.json), whose 15 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1996010 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 6 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (PowerPyx / Game8 / PlayStationTrophies / TrueAchievements) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "crow-country-achievement-guide",
    "category": "game",
    "gameSlug": "crow-country",
    "icon": "🦀",
    "title": "Crow Country Achievement Guide",
    "summary": "A practical guide to all 15 Steam achievements in Crow Country (6 hidden). Covers finding the optional weapons and items, the Mermaid Quiz arcade game, and completing the game. Six of the achievements are hidden - upgrading every weapon, all 15 secrets, all four optional mini-bosses, and the B / A / S completion ranks - and their conditions are researched from community 100% guides.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Crow Country has 15 Steam achievements and 6 are hidden. The hidden six are 'Wishes Granted' (upgrade all four weapons), 'Secret Hunter' (find all 15 hidden secrets), 'Thorough' (defeat the four optional mini-bosses - the last appears as you try to leave), and the B / A / S completion ranks (S unlocks the Crow Wings). Everything visible is finding the secrets map, talking to Arthur in the car, finding the shotgun, flamethrower, magnum revolver and secret running shoes, upgrading the med kits, scoring 5+ on the Mermaid Quiz arcade game, and completing the game.",
                "The catalog marks it difficulty 3. The game is short, and most achievements come from thorough exploration. The rank achievements are the real target - S Rank is mostly about using very few heals (and finding all 15 secrets), and is easier with Extra Lives disabled and on Survival Mode. Plan one exploration run for the secrets and items and one lean run for S Rank.",
                "Tip: do a first playthrough with a guide open, collecting all 15 secrets, all optional weapons and every weapon upgrade and beating the four mini-bosses - then a second, fast, heal-light run for S Rank on Survival Mode."
            ]
        },
        {
            "heading": "Weapons & Items",
            "body": [
                "Finding the secrets map, talking to Arthur while he waits in the car, finding the shotgun, the flamethrower, the magnum revolver and the secret running shoes, and upgrading the potency of the med kits.",
                "The achievements here: Secret Map (Find the secrets map); Checking in on a friend (Talk to Arthur when he's waiting in the car); Shotgun (Find the shotgun); Flamethrower (Find the flamethrower); Magnum Revolver (Find the magnum revolver); Running Shoes (Find the secret running shoes); Med Kit Pro (Upgrade the potency of the med kits)."
            ]
        },
        {
            "heading": "Secrets, Bosses & Ranks",
            "body": [
                "Scoring 5 or more on the Mermaid Quiz arcade game, upgrading all four weapons ('Wishes Granted'), finding all 15 hidden secrets ('Secret Hunter'), defeating the four optional mini-bosses ('Thorough'), completing the game, and finishing with a B, A and S rank.",
                "The achievements here: Quizmaster (Get a score of 5 or more on the Mermaid Quiz arcade game); Wishes Granted (Upgrade all four weapons (one flamethrower-range upgrade needs the code CAGE on the Haunted Manor piano to open a painting).); Secret Hunter (Find all 15 hidden secrets scattered around Crow Country.); Thorough (Defeat all four optional mini-bosses - the fourth appears when you try to leave, and must be beaten.); Complete (Complete the Game); B Rank (Complete the game with a B rank or higher (rank is driven mainly by how few heals you use).); A Rank (Complete the game with an A rank or higher.); S Rank (Complete the game with an S rank - needs all 15 secrets and very few heals; easier with Extra Lives disabled and on Survival Mode. Unlocks the Crow Wings.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play a thorough first run with a guide: find the secrets map, all optional weapons and the running shoes.",
                "2. On that run, get every weapon upgrade ('Wishes Granted') and beat all four optional mini-bosses ('Thorough').",
                "3. Collect all 15 secrets ('Secret Hunter') and score 5+ on the Mermaid Quiz.",
                "4. Complete the game.",
                "5. Do a second fast run on Survival Mode with Extra Lives off, using almost no heals, for the S Rank.",
                "Tip: S Rank folds in B and A Rank, so a single clean S-Rank run gets all three - focus that run entirely on avoiding damage and skipping optional fights rather than exploring."
            ]
        }
    ]
};

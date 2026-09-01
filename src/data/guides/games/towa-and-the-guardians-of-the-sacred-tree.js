// Towa and the Guardians of the Sacred Tree Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/towa-and-the-guardians-of-the-sacred-tree.json), whose 22 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1910090 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 5 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (TrueAchievements / Steam Community / game wikis) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "towa-and-the-guardians-of-the-sacred-tree-achievement-guide",
    "category": "game",
    "gameSlug": "towa-and-the-guardians-of-the-sacred-tree",
    "icon": "🌲",
    "title": "Towa and the Guardians of the Sacred Tree Achievement Guide",
    "summary": "A practical guide to all 22 Steam achievements in Towa and the Guardians of the Sacred Tree (5 hidden). Covers defeating the Magatsu-hi, finishing a Journey with each of the eight companions as the Tsurugi, village life and crafting, and the game's two endings. Five of the achievements are hidden and their unlock conditions are researched from community 100% guides.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Towa and the Guardians of the Sacred Tree has 22 Steam achievements and 5 are hidden. Eight are for finishing a Journey with each companion as the Tsurugi - Rekka, Shigin, Akazu, Origami, Nishiki, Mutsumi, Koro and Bampuku - plus a hidden ninth for finishing one with Towa herself. The rest are defeating your first Magatsu-hi, forging swords, village requests, fishing, jump rope, eating on a Journey, hot springs, and defeating a Wanderer, plus four more hidden achievements for a harder Back Route clear, a reunion story beat, and the game's two endings.",
                "The catalog marks it difficulty 3. Nothing here is missable in the traditional sense, but seeing both endings and clearing a Journey with all nine possible Tsurugi (including the hidden Towa route) is the real time investment.",
                "Tip: work through every companion's Journey as the Tsurugi at least once - the ninth, hidden Towa route and both endings open up once you've made real progress with the others."
            ]
        },
        {
            "heading": "The Magatsu-hi & Endings",
            "body": [
                "Defeating a Magatsu-hi for the first time, the hidden harder Back Route clear, a hidden reunion story beat, and the game's two hidden endings.",
                "The achievements here: The First Sacred Rite (Defeat a Magatsu-hi for the first time.); The Real Fight Starts Here (Defeat a Magatsu-hi again on the harder 'Back Route' of a Journey, unlocked after your first clear.); I've Missed You (Progress a companion's Journey through every one of its Ages to reach a reunion story beat.); At Time's End (See the game's ending.); Dawn of a New Age (See the game's true ending.)."
            ]
        },
        {
            "heading": "Journeys with Every Tsurugi",
            "body": [
                "Finishing a Journey with Rekka, Shigin, Akazu, Origami, Nishiki, Mutsumi, Koro and Bampuku as the Tsurugi, and the hidden ninth Journey with Towa herself.",
                "The achievements here: Lady Towa's Personal Guard (Finish a Journey with Rekka as the Tsurugi.); Revenge Is Sweet (Finish a Journey with Shigin as the Tsurugi.); Natural-Born Scholar (Finish a Journey with Akazu as the Tsurugi.); Off on an Adventure (Finish a Journey with Origami as the Tsurugi.); Path to Moniya (Finish a Journey with Nishiki as the Tsurugi.); Here I Come! (Finish a Journey with Mutsumi as the Tsurugi.); For the Village (Finish a Journey with Koro as the Tsurugi.); Fluffy Fury (Finish a Journey with Bampuku as the Tsurugi.); Guardian (Finish a Journey with Towa herself as the Tsurugi - a secret ninth companion route.)."
            ]
        },
        {
            "heading": "Village Life & Crafting",
            "body": [
                "Forging your first sword and one with the Artisan Forge, fulfilling a village request, catching 10 fish, jumping rope 100 times in a row, eating on a Journey, a hot spring dip, and defeating a Wanderer.",
                "The achievements here: Baby's First Blade (Forge a sword.); Master of the Forge (Create a sword using Artisan Forge.); I've Got It! (Fulfill a request in the village.); It's a Big One! (Catch 10 fish.); Jump Rope Honcho (Jump rope 100 times in a row.); Fuel for the Fight (Eat something while on a Journey.); Ahhh, Pure Bliss (Go for a dip in a hot spring.); Draw Your Weapon! (Win against a Wanderer.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Defeat your first Magatsu-hi, then finish Journeys with each of the eight companions as the Tsurugi.",
                "2. Handle village life along the way - forge swords, fulfill requests, fish, jump rope, eat on a Journey, and visit a hot spring.",
                "3. Defeat a Wanderer, and revisit a cleared Journey's harder Back Route for its hidden Magatsu-hi rematch.",
                "4. Keep progressing companions' Journeys through all their Ages for the hidden reunion beat.",
                "5. Once you've made real progress with the cast, look for the hidden ninth Journey with Towa herself, and see both the ending and the true ending.",
                "Tip: the two endings and the Towa route are the least documented achievements here - they reward genuinely working through every companion's story rather than rushing one route."
            ]
        }
    ]
};

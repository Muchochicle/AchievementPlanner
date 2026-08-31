// Megaquarium Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/megaquarium.json), whose 25 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   600480 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "megaquarium-achievement-guide",
    "category": "game",
    "gameSlug": "megaquarium",
    "icon": "🐠",
    "title": "Megaquarium Achievement Guide",
    "summary": "A practical guide to all 25 Steam achievements in Megaquarium - none are hidden. Covers the ten campaign levels and the milestone and Sandbox Trials achievements. None of the achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Megaquarium has 25 Steam achievements and none are hidden. Ten are completing every objective in each of the ten campaign levels (Sunnyside through Megalopolis), and the other fifteen are milestones and Sandbox Trials - growing 50 animals to full size, 1000 guests, 5 trades, 1000 animals bought, naming an animal, 30 side objectives, and a set of Sandbox challenges (rank 12 on the Standard and Limited presets, unlocking every animal on Quick Start hard, 80 species and 10,000 Prestige on hard, and two Day-100 time trials).",
                "The catalog marks it difficulty 3. The campaign is straightforward; the hard-difficulty Sandbox Trials (unlock every animal, 80 species, the Day-100 time trials) are the real challenge.",
                "Tip: play the ten campaign levels for those achievements and most milestones, then do the Sandbox Trials one preset at a time on hard difficulty."
            ]
        },
        {
            "heading": "Campaign Levels",
            "body": [
                "Completing all objectives in each of the ten campaign levels: Sunnyside, North Woods, Elmshorn, Valberg, Napalos, Hartcliff, Myra, Le Dufont, Carbon City and Megalopolis.",
                "The achievements here: Complete 1. Sunnyside (Complete all objectives in level 1. Sunnyside.); Complete 2. North Woods (Complete all objectives in level 2. North Woods.); Complete 3. Elmshorn (Complete all objectives in level 3. Elmshorn.); Complete 4. Valberg (Complete all objectives in level 4. Valberg.); Complete 5. Napalos (Complete all objectives in level 5. Napalos.); Complete 6. Hartcliff (Complete all objectives in level 6. Hartcliff.); Complete 7. Myra (Complete all objectives in level 7. Myra.); Complete 8. Le Dufont (Complete all objectives in level 8. Le Dufont.); Complete 9. Carbon City (Complete all objectives in level 9. Carbon City.); Complete 10. Megalopolis (Complete all objectives in level 10. Megalopolis.)."
            ]
        },
        {
            "heading": "Milestones & Sandbox Trials",
            "body": [
                "Growing 50 animals to full size, 1000 guests, 5 trades, 1000 animals bought, naming an animal, 30 side objectives, 1500 Prestige from decorations, 4000 daily shop revenue, and the Sandbox Trials: rank 12 on Standard and Limited, every animal unlocked on Quick Start hard, 80 species and 10,000 Prestige on hard, and the 70-species and 8000-Prestige Day-100 time trials.",
                "The achievements here: Grower (Grow 50 animals to full size.); Popular (Have 1000 guests enter your aquariums.); Trader (Complete 5 trades.); Collector (Buy 1000 animals.); Name an animal (Name an animal by opening its window and double clicking its name.); Sandbox Trials - Standard (In Sandbox mode, reach rank 12 using the Standard preset on normal difficulty or higher.); Sandbox Trials - Limited (In Sandbox mode, reach rank 12 using the Limited Supply preset on normal difficulty or higher.); Sandbox Trials - Completionist (In Sandbox mode, unlock every animal using the Quick Start preset on hard difficulty or higher.); Decorator (Have 1500 Prestige income from decorations and paint.); Sell sell sell! (4000 daily revenue from food, drink and gift shop sales.); Helpful (Complete 30 side objectives.); Sandbox Trials - Limited Veteran (In Sandbox mode, have 80 different species of animals in your aquarium using the Limited Supply preset on hard difficulty or higher.); Sandbox Trials - Quick Start Veteran (In Sandbox mode, reach 10,000 Prestige using the Quick Start preset on hard difficulty or higher.); Sandbox Trials - Species time trial (In Sandbox mode, have 70 different species in your aquarium before the end of Day 100, using the Limited Supply preset on normal difficulty or higher.); Sandbox Trials - Prestige time trial (In Sandbox mode, accumulate 8000 Prestige before the end of Day 100, using the Quick Start preset on normal difficulty or higher.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through all ten campaign levels, completing every objective.",
                "2. The guest, trade, grow, animal-bought and side-objective milestones come naturally on that run.",
                "3. Do the Sandbox Trials: rank 12 on the Standard and Limited presets on normal or higher.",
                "4. On hard difficulty: unlock every animal on Quick Start, and reach 80 species and 10,000 Prestige.",
                "5. Do the two Day-100 time trials (70 species on Limited, 8000 Prestige on Quick Start).",
                "Tip: for the species-count Sandbox Trials, prioritise cheap, low-requirement fish over prestigious tanks - the achievement counts distinct species, not quality."
            ]
        }
    ]
};

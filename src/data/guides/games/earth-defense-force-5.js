// EARTH DEFENSE FORCE 5 Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/earth-defense-force-5.json), whose 39 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1007040 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "earth-defense-force-5-achievement-guide",
    "category": "game",
    "gameSlug": "earth-defense-force-5",
    "icon": "👽",
    "title": "EARTH DEFENSE FORCE 5 Achievement Guide",
    "summary": "A practical guide to all 39 Steam achievements in EARTH DEFENSE FORCE 5 - none are hidden. Covers the Main Story completion-rate milestones and the class mastery and co-op achievements. None of the achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "EARTH DEFENSE FORCE 5 has 39 Steam achievements and none are hidden. Thirty-two are 'Main Story Total Completion Rate' milestones from 5% up to 100% (in 5% steps to 60%, then 2% steps), which effectively means clearing all 110+ missions across every difficulty including Inferno. The other seven are maxing each class's health (Ranger 1000, Wing Diver 550, Air Raider 1000, Fencer 1250) and the co-op rescues (5 and 50) and healing achievements.",
                "The catalog marks it difficulty 5. The completion-rate track is the whole game on every difficulty - a very long grind, with the last few percent requiring Inferno clears of every mission.",
                "Tip: raise completion rate by playing each mission on the highest difficulty you can survive (it counts the best difficulty per mission), grinding armour in co-op between hard missions."
            ]
        },
        {
            "heading": "Conquest 5-50%",
            "body": [
                "Main Story Total Completion Rate reaching 5%, 10%, 15%, 20%, 25%, 30%, 35%, 40%, 45% and 50%.",
                "The achievements here: Conquest 5% (Main Story Total Completion Rate has reached 5%.); Conquest 10% (Main Story Total Completion Rate has reached 10%.); Conquest 15% (Main Story Total Completion Rate has reached 15%.); Conquest 20% (Main Story Total Completion Rate has reached 20%.); Conquest 25% (Main Story Total Completion Rate has reached 25%.); Conquest 30% (Main Story Total Completion Rate has reached 30%.); Conquest 35% (Main Story Total Completion Rate has reached 35%.); Conquest 40% (Main Story Total Completion Rate has reached 40%.); Conquest 45% (Main Story Total Completion Rate has reached 45%.); Conquest 50% (Main Story Total Completion Rate has reached 50%.)."
            ]
        },
        {
            "heading": "Conquest 55-100%",
            "body": [
                "Completion Rate reaching 55% and 60%, then 62%, 64%, 66% and every 2% up to 100% - which requires clearing every mission on every difficulty, Inferno included.",
                "The achievements here: Conquest 55% (Main Story Total Completion Rate has reached 55%.); Conquest 60% (Main Story Total Completion Rate has reached 60%.); Conquest 62% (Main Story Total Completion Rate has reached 62%.); Conquest 64% (Main Story Total Completion Rate has reached 64%.); Conquest 66% (Main Story Total Completion Rate has reached 66%.); Conquest 68% (Main Story Total Completion Rate has reached 68%.); Conquest 70% (Main Story Total Completion Rate has reached 70%.); Conquest 72% (Main Story Total Completion Rate has reached 72%.); Conquest 74% (Main Story Total Completion Rate has reached 74%.); Conquest 76% (Main Story Total Completion Rate has reached 76%.); Conquest 78% (Main Story Total Completion Rate has reached 78%.); Conquest 80% (Main Story Total Completion Rate has reached 80%.); Conquest 82% (Main Story Total Completion Rate has reached 82%.); Conquest 84% (Main Story Total Completion Rate has reached 84%.); Conquest 86% (Main Story Total Completion Rate has reached 86%.); Conquest 88% (Main Story Total Completion Rate has reached 88%.); Conquest 90% (Main Story Total Completion Rate has reached 90%.); Conquest 92% (Main Story Total Completion Rate has reached 92%.); Conquest 94% (Main Story Total Completion Rate has reached 94%.); Conquest 96% (Main Story Total Completion Rate has reached 96%.); Conquest 98% (Main Story Total Completion Rate has reached 98%.); Conquest 100% (Main Story Total Completion Rate has reached 100%.)."
            ]
        },
        {
            "heading": "Mastery & Co-op",
            "body": [
                "Reaching max health with the Ranger (1000), Wing Diver (550), Air Raider (1000) and Fencer (1250), rescuing 5 and 50 other players in co-op, and healing another player.",
                "The achievements here: Master Ranger (Ranger's health has reached 1000.); Master Diver (Wing Diver's health has reached 550.); Master Air Raider (Air Raider's health has reached 1000.); Master Fencer (Fencer's health has reached 1250.); Rescue (Rescued 5 other players in co-op play.); Super Rescue (Rescued 50 other players in co-op play.); Medic (Healed another player in co-op play.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the campaign through, choosing the highest difficulty you can clear on each mission (completion rate counts the best clear per mission).",
                "2. Grind armour and weapons in co-op between the harder missions to raise class health toward the 'Master' achievements.",
                "3. Push completion rate up through Hardest across all missions (that gets you most of the way).",
                "4. Do Inferno clears of every mission for the final stretch to 100%.",
                "5. Pick up the co-op rescue and heal achievements while farming.",
                "Tip: the completion percentage is per-mission-best, so a single Inferno clear of a mission replaces its Hardest clear in the total - focus Inferno attempts on the missions you can actually survive first."
            ]
        }
    ]
};

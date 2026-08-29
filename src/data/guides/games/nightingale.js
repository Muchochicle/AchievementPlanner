// Nightingale Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/nightingale.json), whose 28 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1928980 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js). None are hidden; every one
//   ships a real, official Steam description, quoted verbatim below.
// - Sections group achievements by roughly what part of the game they belong to.
export const GUIDE = {
    "slug": "nightingale-achievement-guide",
    "category": "game",
    "gameSlug": "nightingale",
    "icon": "🦉",
    "title": "Nightingale Achievement Guide",
    "summary": "A practical guide to all 28 Steam achievements in Nightingale - none are hidden. realm main quests & landmarks, faction choices & approvals, questlines.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Nightingale has 28 Steam achievements and none are hidden. They are almost entirely quest-completion markers: the main questline of each Realm, the Gauntlet boss trio, a set of faction-choice achievements, and the named side-questlines.",
                "Nothing is permanently missable in the sense that Realms can be regenerated, but several faction achievements are mutually informed choices - you can earn each side's approval and \"both\" only by playing the relevant quests carefully, so a guide helps.",
                "Tip: play through each Realm's main questline in order, then work the side-questlines and the faction-approval quests. For Double-Tongued (both Sasse and Reeves approve), follow a guide on the exact dialogue choices."
            ]
        },
        {
            "heading": "Realm Main Quests & Landmarks",
            "body": [
                "The main-questline completions for each realm (Abeyance, Sylvan's Cradle, Welkin's Reach, Magwytch Marshes, Gloriana's Tears, Hollowed Moor), the Gauntlet boss trio, visiting The Watch, and the early realm objectives (the Village/Refugee tensions, the airfleet crash survivors).",
                "The achievements here: First Fledgling Steps (Complete the Abeyance Main Quests.); The Place They Go Towards (Complete Sylvan's Cradle Main Quests.); Ad Astra (Complete Welkin's Reach Main Quests.); Titan of Industry (Complete Magwytch Marshes Main Quests.); In Grove or Green (Complete Gloriana's Tears Main Quests.); The Histories (Complete the Hollowed Moor Main Quest.); Run the Gauntlet (Face the Fabled Automaton Bishop, the Sun Giant, and the Elder Eoten in The Gauntlet.); A Safe Haven (Visit The Watch.); Building Bridges (Alleviate the tensions between the Village and the Refugee Encampment in Sylvan's Cradle.); Shelter in the Storm  (Aid the survivors from the Calcularian Airfleet crash.)."
            ]
        },
        {
            "heading": "Faction Choices & Approvals",
            "body": [
                "The choice-driven achievements: the Arm Yourself / Target Practice quests, Puck's Glyph translation, the Sylvan's Cradle penitent truth, a new home for the Being of Welkin's Reach, the Magwytch personnel files, and the Wilhelmina Sasse / Bass Reeves approval paths (each side, and both), plus the Oisin McAvoy secret and the ugly truth for the Mayor.",
                "The achievements here: The Letter of the Law (Complete the Quests 'Arm Yourself' and 'Target Practice'.); Act of Defiance (Procure translations for Puck's mysterious Glyph.); To Praise Despair (Uncover the truth about the penitent of Sylvan's Cradle.); Balm and Bitterness (Find a new home for the Being of Welkin's Reach.); Wolf in Sheep's Clothing (Uncover the Magwytch Marshes Personnel Files.); Muckraker (Gain Wilhelmina Sasse's approval by sharing confidential information about Bass Reeves.); Sheriff's Deputy (Gain Bass Reeves's approval by warning him about Wilhelmina Sasse's ploy.); Double-Tongued (Gain approval from both Wilhelmina Sasse and Bass Reeves.); The Devil You Know (Agree to keep Oisin McAvoy's ugly secret.); Through a Glass Darkly (Share an ugly truth with the Mayor of Magwytch Town.)."
            ]
        },
        {
            "heading": "Questlines",
            "body": [
                "The named side-questline completions: Lessons of the Loa, The Modern Prometheus, The Matriarch's Lament, A Gateway to The Watch, The Riddles of Taliesin, St Michael's Chosen, A Safe Haven, and Troubles Within and Without.",
                "The achievements here: Spirit Communion (Complete 'Lessons of the Loa' Questline.); Doctor's Assistant (Complete 'The Modern Prometheus' Questline); Friend of the Grendels (Complete 'The Matriarch's Lament' Questline.); The Love of the Unknown (Complete 'A Gateway to The Watch' Questline.); Riddlemaster (Complete 'The Riddles of Taliesin' Questline.); Prospective Squire (Complete 'St Michael's Chosen' Questline.); Geoarcane Initiate (Complete 'A Safe Haven' Questline.); Faith in Fools (Complete 'Troubles Within and Without' Questline.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Complete each Realm's main questline in order (Abeyance through Hollowed Moor), visiting The Watch and doing the Gauntlet along the way.",
                "2. Do the faction-choice quests, aiming for the \"both approve\" outcomes where possible (Double-Tongued).",
                "3. Complete the named side-questlines (Lessons of the Loa, The Modern Prometheus, and the rest).",
                "4. Mop up any early realm objectives you skipped (the Village/Refugee tensions, the airfleet survivors).",
                "Tip: Run the Gauntlet (the Automaton Bishop, Sun Giant and Elder Eoten) is far easier in co-op or with a well-geared build - do it after you have progressed a few Realms and have solid gear rather than as an early objective."
            ]
        }
    ]
};

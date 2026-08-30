// SpaceChem Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/spacechem.json), whose 20 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   92800 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "spacechem-achievement-guide",
    "category": "game",
    "gameSlug": "spacechem",
    "icon": "🧪",
    "title": "SpaceChem Achievement Guide",
    "summary": "A practical guide to all 20 Steam achievements in SpaceChem - none are hidden. Covers the campaign, challenge and performance achievements, and the ResearchNet and 63 Corvi achievements.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "SpaceChem has 20 Steam achievements and none of them are hidden. One is beating the game; the rest are solving specific assignments under a constraint - four \"Challenge\" bonus assignments, five performance targets (beat a named assignment under a cycle limit), three efficiency targets (solve using one or two reactors), and three Team Fortress 2 crossover \"Moustachium\" assignments. Three more are beating 3 / 10 / 20 published ResearchNet community assignments, and the last two are from the 63 Corvi campaign - beating \"Collapsar\" and reaching the south pole of Sernimir IV.",
                "Nothing is missable - every assignment can be re-attempted and ResearchNet is an open pool. This is a hard puzzle game; the completion is short in count but the performance and efficiency achievements (cycle limits, one-reactor solves) are genuine optimisation challenges.",
                "Tip: play the campaign to the end first for Chief Executive Officer and to unlock every assignment, then come back to the specific Challenge, performance and efficiency assignments with a solution guide if a constraint stumps you."
            ]
        },
        {
            "heading": "Campaign Challenges & Performance",
            "body": [
                "Beating the game, the four Challenge assignments (In-Place Swap, Going Green, Applied Fusion, KOHCTPYKTOP), the five cycle-limit performance targets (Nothing Works, No Thanks Necessary, Gas Works Park, Sigma-Ethylene), the three reactor-limit efficiency targets (No Ordinary Headache, Falling, Molecular Foundry), and the three Moustachium 602 / 604 / 608 assignments.",
                "The achievements here: Chief Executive Officer (Beat the game!); Junior Permutation Technician (Beat the assignment \"Challenge: In-Place Swap\".); Environmental Engineer (Beat the assignment \"Challenge: Going Green\".); Industrial Physicist (Beat the assignment \"Challenge: Applied Fusion\".); Materials Engineer of the People (Beat the assignment \"Challenge: KOHCTPYKTOP\".); Junior Performance Specialist (Beat the assignment \"Nothing Works\" in under 1000 cycles.); Performance Specialist (Beat the assignment \"No Thanks Necessary\" in under 2200 cycles.); Performance Specialist II (Beat the assignment \"Gas Works Park\" in under 2700 cycles.); Senior Performance Specialist (Beat the assignment \"Σ-Ethylene\" in under 6000 cycles.); Efficiency Specialist (Beat the assignment \"No Ordinary Headache\" using only one reactor.); Cost Control Specialist (Beat the assignment \"Falling\" using two or fewer reactors.); Senior Efficiency Specialist (Beat the assignment \"Molecular Foundry\" using two or fewer reactors.); Moustache Research Assistant (Beat the assignment \"Moustachium 602\".); Moustache Scientist (Beat the assignment \"Moustachium 604\".); Director of Moustache Research (Beat the assignment \"Moustachium 608\".)."
            ]
        },
        {
            "heading": "ResearchNet & 63 Corvi",
            "body": [
                "Beating 3, 10 and 20 published ResearchNet assignments, beating \"Collapsar\" in the 63 Corvi campaign, and reaching the south pole of Sernimir IV.",
                "The achievements here: Science is an Indoor Activity (Beat 3 published ResearchNet assignments.); Junior Publication Reviewer (Beat 10 published ResearchNet assignments.); Distinguished Publication Reviewer (Beat 20 published ResearchNet assignments.); Interstellar Transportation Specialist (Beat the assignment \"Collapsar\" in the 63 Corvi campaign.); Polar Expedition (Reach the south pole of Sernimir IV.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the main campaign to completion for Chief Executive Officer.",
                "2. On that run, do the four Challenge assignments and the three Moustachium crossover assignments as you reach them.",
                "3. Play the 63 Corvi campaign for Collapsar and the south pole of Sernimir IV.",
                "4. Come back to the cycle-limit performance assignments and the one/two-reactor efficiency assignments, using a solution guide if needed.",
                "5. Beat 20 published ResearchNet assignments from the community pool.",
                "Tip: the reactor-limit efficiency achievements are about doing everything in one reactor that the game expected two for - lean on recursion (a molecule that loops through the same waldo path repeatedly) and sensor-driven branching rather than trying to lay out the whole reaction spatially."
            ]
        }
    ]
};
